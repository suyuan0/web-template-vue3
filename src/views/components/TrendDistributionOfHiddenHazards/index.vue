<template>
    <SFTCard title="隐患趋势分布">
        <template #action>
            <div class="trend-action-container">
                <div class="trend-action item" v-for="item in actionList" :key="item.id">
                    <span :class="['title', { active: active === item.id }]">{{ item.title }}</span>
                </div>
            </div>
        </template>
        <!-- 图表容器 -->
        <div class="trend-distribution-of-hidden-hazards" ref="chartRef"></div>
    </SFTCard>
</template>

<script setup lang="ts">
import SFTCard from '@/components/SFTCard/index.vue'
import { ref, onMounted, shallowRef, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
import { trendList } from './data'

const active = ref(1)

const actionList = [
    {
        id: 1,
        title: '隐患总数'
    },
    {
        id: 2,
        title: '重大隐患数'
    },
    {
        id: 3,
        title: '一般隐患数'
    }
]

const fontSize = ref(0)
// 图表容器
const chartRef = ref<HTMLElement | null>(null)
// 图表实例
let chartInstance = shallowRef<echarts.ECharts | null>(null)

// 渲染图表
const renderChart = () => {
    const option = {
        xAxis: {
            data: trendList.map(v => v.name)
        },
        series: [
            {
                data: trendList.map(v => v.value)
            }
        ]
    }
    chartInstance.value && chartInstance.value.setOption(option)
}

// 初始化图表
const initChart = () => {
    chartInstance.value = echarts.init(chartRef.value as HTMLElement)
    const option = {
        grid: {
            top: '5%',
            left: '2%',
            bottom: '5%',
            right: '5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                color: '#fff'
            },
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#5389A2'
                }
            },
            axisTick: false
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
        tooltip: {
            trigger: 'axis'
        },
        series: [
            {
                type: 'line',

                lineStyle: {
                    shadowBlur: 4,
                    color: '#0E9CFF',
                    shadowColor: 'rgba(0,0,0, 0.2)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 8
                },
                emphasis: {
                    disabled: false
                },
                smooth: false,
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(14, 156, 255, 1)'
                        },
                        {
                            offset: 1,
                            color: 'transparent'
                        }
                    ])
                },
                showSymbol: false
            }
        ]
    }
    chartInstance.value.setOption(option)
}

const resizeChart = () => {
    fontSize.value = (chartRef.value!.offsetWidth / 100) * 3.6
    const option = {
        xAxis: {
            axisLabel: {
                fontSize: fontSize.value / 1.5
            }
        },
        yAxis: {
            axisLabel: {
                fontSize: fontSize.value / 1.5
            }
        }
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
