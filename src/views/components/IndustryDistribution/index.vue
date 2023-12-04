<template>
    <SFTCard title="行业分布">
        <div class="industry-distribution-container">
            <!-- 图表 -->
            <div class="chart-container">
                <div class="industry-distribution-container__chart" ref="chartRef"></div>
                <div class="title">
                    <span class="value">
                        <NNumberAnimation :from="0" :to="2869436" show-separator />
                    </span>
                    <span class="text">总数</span>
                </div>
            </div>
            <!-- 列表数据 -->
            <div class="chart-list">
                <ul>
                    <li v-for="(item, i) in list" :key="item.id">
                        <span class="name">
                            <span class="circle" :style="{ backgroundColor: colors[i] }"></span>
                            {{ item.name }}
                        </span>
                        <span class="value" :style="{ color: colors[i] }">
                            <NNumberAnimation :from="0" :to="item.value" show-separator />
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </SFTCard>
</template>

<script setup lang="ts">
import SFTCard from '@/components/SFTCard/index.vue'
import { list, colors } from './data'
import { NNumberAnimation } from 'naive-ui'
import { shallowRef, onBeforeUnmount, onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import { loadingOptions } from '@/config/chartOptions'
import { hexToRgb } from '@/utils/color'

const fontSize = ref(0)
const chartRef = ref<HTMLElement>()
let chartInstance = shallowRef<echarts.ECharts>()

// 渲染图表
const renderChart = () => {
    chartInstance.value && chartInstance.value.showLoading(loadingOptions)
    const total = list.reduce((prev, cur) => prev + cur.value, 0)
    const resultData: any = []
    list.forEach(v => {
        resultData.push({ value: v.value, name: v.name })
        resultData.push({ value: total / 100, name: '', itemStyle: { color: 'transparent' } })
    })
    const option = {
        series: [
            {
                data: resultData
            },
            {
                data: resultData
            }
        ]
    }
    setTimeout(() => {
        chartInstance.value?.hideLoading()
        chartInstance.value?.setOption(option)
    }, 1000)
}

// 初始化图表
const initChart = () => {
    chartInstance.value = echarts.init(chartRef.value as HTMLElement)
    const option = {
        tooltip: {
            trigger: 'item',
            // formatter: '{b}: {c}'
            formatter: (params: any) => {
                let res = ''
                if (params.name !== '') {
                    res = `${params.name}: ${params.value}`
                }
                return res
            }
        },
        series: [
            {
                showEmptyCircle: false,
                type: 'pie',
                itemStyle: {
                    color: (params: any) => {
                        return colors[parseInt(String(params.dataIndex / 2))]
                    }
                },
                radius: ['75%', '90%'],
                center: ['50%', '50%'],
                labelLine: false,
                label: {
                    show: false
                }
            },
            {
                showEmptyCircle: false,
                type: 'pie',
                itemStyle: {
                    color: (params: any) => {
                        return `rgba(${hexToRgb(colors[parseInt(String(params.dataIndex / 2))]).join(',')}, 0.1)`
                    }
                },
                radius: ['60%', '75%'],
                center: ['50%', '50%'],
                labelLine: false
            }
        ]
    }
    chartInstance.value?.setOption(option)
}

// 重置图表大小
const resizeChart = () => {
    fontSize.value = (chartRef.value!.offsetWidth / 100) * 3.6
    const option = {}
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
    // 销毁图表实例
    chartInstance.value && chartInstance.value.dispose()
    // 移除监听事件
    window.removeEventListener('resize', resizeChart)
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
