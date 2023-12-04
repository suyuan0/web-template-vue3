<template>
    <SFTCard title="专家统计">
        <div class="expert-statistic-container">
            <!-- info -->
            <div class="info">
                <div class="item" v-for="item in experTotal" :key="item.id">
                    <span class="title">{{ item.title }}</span>
                    <span class="value">
                        <NNumberAnimation :from="0" :to="item.value" />
                    </span>
                </div>
            </div>
            <div class="chart-container" ref="chartRef"></div>
        </div>
    </SFTCard>
</template>

<script setup lang="ts">
import SFTCard from '@/components/SFTCard/index.vue'
import { NNumberAnimation } from 'naive-ui'
import { experTotal, expertList } from './data'
import { onMounted, ref, onBeforeUnmount, shallowRef } from 'vue'
import * as echarts from 'echarts'

const fontSize = ref(0)
// chart容器
const chartRef = ref<HTMLElement | null>(null)
// chart 实例
let chartInstance = shallowRef<echarts.ECharts>()

// 渲染图表
const renderChart = () => {
    const option = {
        xAxis: {
            data: expertList.map(v => v.name)
        },
        series: [
            {
                data: expertList.map(v => v.taskValue)
            },
            {
                data: expertList.map(v => v.freeValue)
            }
        ]
    }
    chartInstance.value && chartInstance.value.setOption(option)
}

// 初始化图表
const initChart = () => {
    chartInstance.value = echarts.init(chartRef.value as HTMLElement)
    const options = {
        grid: {
            left: 0,
            top: '5%',
            rigth: 0,
            bottom: '12%',
            containLabel: true,
            axisLabel: {
                color: '#fff'
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(83, 137, 162, 0.36)'
                }
            }
        },
        xAxis: {
            type: 'category',
            axisTick: false,
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    color: '#5389A2'
                }
            }
        },
        legend: {
            data: [
                {
                    name: '执行任务中',
                    itemStyle: {
                        color: '#1350CF'
                    }
                },
                {
                    name: '空闲中',
                    itemStyle: {
                        color: '#33AFFD'
                    }
                }
            ],
            bottom: 0,
            textStyle: {
                color: '#fff'
            },
            itemHeight: 10,
            itemWidth: 10
        },
        tooltip: {},
        series: [
            {
                name: '执行任务中',
                type: 'bar',
                barWidth: 8,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#1350CF'
                        },
                        {
                            offset: 1,
                            color: 'rgba(8, 48, 86, 0)'
                        }
                    ])
                }
            },
            {
                name: '空闲中',
                type: 'bar',
                barWidth: 8,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#33AFFD'
                        },
                        {
                            offset: 1,
                            color: 'rgba(8, 48, 86, 0)'
                        }
                    ])
                }
            }
        ]
    }
    chartInstance.value.setOption(options)
}

// 重置图表大小
const resizeChart = () => {
    fontSize.value = (chartRef.value!.offsetWidth / 100) * 3.6

    const option = {
        yAxis: {
            axisLabel: {
                fontSize: fontSize.value
            }
        },
        xAxis: {
            axisLabel: {
                fontSize: fontSize.value / 1.5
            }
        },
        legend: {
            textStyle: {
                fontSize: fontSize.value / 1.5
            },
            itemHeight: fontSize.value / 1.5,
            itemWidth: fontSize.value / 1.5
        },
        series: [
            {
                barWidth: fontSize.value / 1.5
            },
            {
                barWidth: fontSize.value / 1.5
            }
        ]
    }
    chartInstance.value && chartInstance.value.setOption(option)
    chartInstance.value && chartInstance.value.resize()
}

onMounted(() => {
    initChart()
    resizeChart()
    renderChart()
    window.addEventListener('resize', resizeChart)
})

onBeforeUnmount(() => {
    chartInstance.value && chartInstance.value.dispose()
    window.removeEventListener('resize', resizeChart)
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
