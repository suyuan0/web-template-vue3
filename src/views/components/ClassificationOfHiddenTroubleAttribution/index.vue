<!-- 隐患归属分类 -->
<template>
    <SFTCard class="sft-card-classification-of-hidden-trouble-attribution" title="隐患归属分类">
        <div class="classification-of-hidden-trouble-attribution-container">
            <!--圆环背景  -->
            <div class="circle"></div>
            <!-- 图表 -->
            <div class="chart" ref="chartRef"></div>
        </div>
    </SFTCard>
</template>

<script setup lang="ts">
import SFTCard from '@/components/SFTCard/index.vue'
import * as echarts from 'echarts'
import { onMounted, ref, shallowRef, onBeforeUnmount } from 'vue'
import list, { colors } from './data'

const textColor = '#F2F6FF'
const fontSize = ref(0)
// 图表容器
const chartRef = ref()
// 图表实例
const chartInstance = shallowRef<echarts.ECharts>()

// 渲染图表
const renderChart = () => {
    const option = {
        series: [
            {
                data: list.map((v, i) => {
                    return {
                        value: v.value,
                        name: v.name,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
                                { offset: 0, color: colors[i] },
                                { offset: 0.3, color: colors[i] },
                                {
                                    offset: 1,
                                    color: 'transparent'
                                }
                            ])
                        }
                    }
                })
            }
        ]
    }
    chartInstance.value?.setOption(option)
}

// 初始化图表
const initChart = () => {
    chartInstance.value = echarts.init(chartRef.value as HTMLElement)
    const option = {
        tooltip: {
            formatter: (params: any) => {
                return `${params.marker}${params.name} <br />${params.value}<br/>${params.percent}%`
            }
        },
        series: [
            {
                type: 'pie',
                center: ['50%', '50%'],
                radius: ['23%', '37%'],
                labelLine: {
                    lineStyle: {
                        color: '#1350CF'
                    }
                },
                label: {
                    formatter: '{unit| {d}}{percent|%}\n{name| {b}}\n{value| {c}}',
                    rich: {
                        // 百分比
                        unit: {
                            color: textColor
                        },
                        // 百分比符号
                        percent: {
                            color: textColor
                        },
                        // 名称
                        name: {
                            color: textColor
                        },
                        // 数值
                        value: {
                            color: textColor
                        }
                    }
                }
            }
        ]
    }
    chartInstance.value.setOption(option)
}

// 重置图表大小
const resizeChart = () => {
    fontSize.value = (chartRef.value!.offsetWidth / 100) * 3.6
    const option = {
        series: [
            {
                label: {
                    rich: {
                        unit: {
                            fontSize: fontSize.value * 1.5
                        },
                        percent: {
                            fontSize: fontSize.value
                        },
                        name: {
                            fontSize: fontSize.value
                        },
                        value: {
                            fontSize: fontSize.value
                        }
                    }
                }
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
