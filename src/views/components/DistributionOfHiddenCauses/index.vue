<template>
    <SFTCard tensile title="隐患原因分布">
        <div class="distribution-of-hidden-causes-container">
            <div class="distribution-of-hidden-causes" ref="chartLeftRef"></div>
            <div class="distribution-of-hidden-causes" ref="chartRightRef"></div>
        </div>
    </SFTCard>
</template>

<script setup lang="ts">
import SFTCard from '@/components/SFTCard/index.vue'
import { ref, shallowRef, onMounted, onBeforeUnmount } from 'vue'
import * as echart from 'echarts'
import { reasonList } from './data'

const fontSize = ref(0)
// 图表容器
const chartLeftRef = ref<HTMLElement | null>(null)
const chartRightRef = ref<HTMLElement | null>(null)
const refList = [chartLeftRef, chartRightRef]
// chart实例
let chartLeftInstance = shallowRef<echart.ECharts>()
let chartRightInstance = shallowRef<echart.ECharts>()
const instanceList = [chartLeftInstance, chartRightInstance]

// 渲染图表
const renderChart = () => {
    instanceList.forEach((instance, index) => {
        const list = index === 0 ? reasonList.slice(0, 5).reverse() : reasonList.slice(5).reverse()
        const option = {
            yAxis: [
                {
                    data: list.map(item => item.name)
                },
                {
                    data: list.map(item => item.value)
                }
            ],
            series: [
                {
                    data: list.map(item => item.value)
                }
            ]
        }
        instance.value && instance.value.setOption(option)
    })
}

// 初始化图表
const initChart = () => {
    instanceList.forEach((instance, index) => {
        instance.value = echart.init(refList[index].value as HTMLElement)

        const option = {
            tooltip: {},
            grid: {
                left: 20,
                right: 20,
                top: 10,
                bottom: 10,
                containLabel: false
            },
            yAxis: [
                {
                    type: 'category',
                    axisTick: false,
                    axisLine: false
                },
                {
                    type: 'category',
                    axisTick: false,
                    axisLine: false,
                    axisLabel: {
                        color: '#fff',
                        verticalAlign: 'bottom',
                        align: 'right',
                        padding: [0, 0, 8, 0],
                        margin: 0,
                        formatter: (value: number) => value
                    }
                }
            ],
            xAxis: {
                type: 'value',
                axisTick: false,
                axisLine: false,
                splitLine: false
            },
            series: [
                {
                    type: 'bar',
                    barWidth: 8,
                    itemStyle: {
                        color: '#1350CF',
                        borderRadius: 4
                    },
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(180, 215, 243, 0.24)',
                        borderRadius: 4
                    },
                    label: {
                        show: true,
                        verticalAlign: 'bottom',
                        position: 'left',
                        align: 'left',
                        offset: [7, -8],
                        color: '#fff',
                        formatter: '{b}'
                    }
                }
            ]
        }
        instanceList.forEach(instance => instance.value && instance.value.setOption(option))
    })
}

// 重置图表
const resizeChart = () => {
    fontSize.value = (chartLeftRef.value!.offsetWidth / 100) * 3.6

    instanceList.forEach(instance => {
        const option = {
            grid: {
                left: fontSize.value,
                right: fontSize.value,
                top: fontSize.value / 2,
                bottom: fontSize.value / 2
            },
            yAxis: [
                {
                    type: 'category'
                },
                {
                    axisLabel: {
                        fontSize: fontSize.value,
                        padding: [0, 0, fontSize.value / 2, 0]
                    }
                }
            ],
            series: [
                {
                    barWidth: fontSize.value / 1.5,
                    itemStyle: {
                        borderRadius: fontSize.value / 4
                    },
                    backgroundStyle: {
                        borderRadius: fontSize.value / 4
                    },
                    label: {
                        offset: [fontSize.value / 2, -fontSize.value / 2],
                        fontSize: fontSize.value
                    }
                }
            ]
        }
        instance.value && instance.value.setOption(option)

        instance.value && instance.value.resize()
    })
}

onMounted(() => {
    initChart()
    resizeChart()
    renderChart()
    window.addEventListener('resize', resizeChart)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeChart)
    // 销毁图表实例
    instanceList.forEach(instance => instance.value && instance.value.dispose())
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
