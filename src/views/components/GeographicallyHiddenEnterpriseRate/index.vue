<template>
    <SFTCard tensile title="地域隐患/企业率">
        <div class="geographically-hidden-enterprise-rate" ref="chartRef"></div>
    </SFTCard>
</template>

<script setup lang="ts">
import SFTCard from '@/components/SFTCard/index.vue'
import { onMounted, ref, onBeforeUnmount, shallowRef } from 'vue'
import * as echart from 'echarts'
import { list } from './data'

const fontSize = ref(0)
// 图表容器
const chartRef = ref<HTMLElement | null>(null)
// 图表实例
let chartInstance = shallowRef<echart.ECharts>()

// 渲染图表
const renderChart = () => {
    const option = {
        xAxis: {
            data: list.map(item => item.name)
        },
        series: [
            {
                data: list.map(item => item.value)
            }
        ]
    }
    chartInstance.value && chartInstance.value.setOption(option)
}

// 初始化图表
const initChart = () => {
    chartInstance.value = echart.init(chartRef.value as HTMLElement)
    const option = {
        grid: {
            left: '2%',
            top: '5%',
            right: '2%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            axisTick: false,
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            axisTick: false,
            splitLine: false
        },
        tooltip: {},
        series: [
            {
                type: 'bar',
                itemStyle: {
                    color: new echart.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#1250CF' },
                        { offset: 1, color: '#2DA3ED' }
                    ])
                }
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
                fontSize: fontSize.value / 2.5
            }
        },
        yAxis: {
            axisLabel: {
                fontSize: fontSize.value / 2.5
            }
        },
        series: [
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
