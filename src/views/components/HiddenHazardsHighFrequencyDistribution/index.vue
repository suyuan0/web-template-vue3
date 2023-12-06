<!-- 隐患高频分布 -->
<template>
    <SFTCard class="sft-card-hidden-hazards-high-frequency-distribution" title="隐患高频分布">
        <div class="hidden-hazards-high-frequency-distribution-container" ref="chartRef"></div>
    </SFTCard>
</template>

<script setup lang="ts">
import SFTCard from '@/components/SFTCard/index.vue'
import { ref, onMounted, shallowRef, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
import chartList from './data'

const fontSize = ref(0)
// 图表容器
const chartRef = ref<HTMLElement>()
// 图表实例
let chartInstance = shallowRef<echarts.ECharts>()

// 渲染图表
const renderChart = () => {
    const option = {
        series: [
            {
                data: [
                    {
                        name: '近一个月',
                        value: chartList.oneMonth.map(v => v.value)
                    },
                    {
                        name: '近三个月',
                        value: chartList.threeMonth.map(v => v.value)
                    },
                    {
                        name: '近半年',
                        value: chartList.year.map(v => v.value)
                    }
                ]
            }
        ]
    }
    chartInstance.value && chartInstance.value.setOption(option)
}

// 初始化图表
const initChart = () => {
    chartInstance.value = echarts.init(chartRef.value as HTMLElement)
    const option = {
        color: ['#1350CF', '#2FA4EE', '#FFA235'],
        legend: {
            bottom: 0,
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {},
        radar: {
            splitNumber: 4,
            scale: true,
            indicator: chartList.oneMonth.map(v => ({
                name: v.name
            })),
            splitLine: {
                lineStyle: {
                    color: '#1350CF',
                    width: 2
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['#1350CF', 'transparent', 'transparent', 'transparent']
                }
            },
            axisLine: {
                show: false
            }
        },
        series: [
            {
                type: 'radar',
                areaStyle: {}
            }
        ]
    }
    chartInstance.value.setOption(option)
}

// 重置图表大小
const resizeChart = () => {
    fontSize.value = (chartRef.value!.offsetWidth / 100) * 3.6
    console.log(fontSize.value)
    const option = {
        legend: {
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                fontSize: fontSize.value
            }
        },
        radar: {
            name: {
                textStyle: {
                    fontSize: fontSize.value
                }
            }
        }
    }
    chartInstance.value && chartInstance.value.setOption(option)
    chartInstance.value && chartInstance.value.resize()
}

onMounted(() => {
    initChart()
    renderChart()
    resizeChart()
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
