<template>
    <div class="map" ref="chartRef"></div>
</template>

<script setup lang="ts">
import 'echarts-gl'
import * as echarts from 'echarts'
import { onMounted, ref, shallowRef, onBeforeUnmount } from 'vue'
import getRegionJson from '../getRegionJson'

const fontSize = ref(0)
const chartRef = ref<HTMLElement>()
let chartInstance = shallowRef<echarts.ECharts | null>(null)

// 注册地图
const registerMap = (name: string, geoJson: any) => {
    echarts.registerMap(name, geoJson)
}

// 初始化地图
const initChart = async () => {
    chartInstance.value = echarts.init(chartRef.value)
    const res = await getRegionJson.get('/bound/geojson', {
        code: '370200_full'
    })
    registerMap('map', res)
    const option = getOption()
    chartInstance.value.setOption(option)

    chartInstance.value.on('click', (params: any) => {
        console.log(params)
    })
}

const resizeChart = () => {
    fontSize.value = (chartRef.value!.offsetWidth / 100) * 3.6
    chartInstance.value?.resize()
}

const getOption = (fontSize?: number) => {
    return {
        tooltip: {
            show: true,
            className: 'map-tooltip',
            formatter: (params: any) => {
                return params.name
            }
        },
        series: [
            {
                zlevel: -10,
                type: 'map3D',
                map: 'map',
                itemStyle: {
                    color: '#468BEF',
                    borderColor: '#55B4F1',
                    borderWidth: 2
                },
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: fontSize
                }
            }
            // {
            //     zlevel: -9,
            //     type: 'map3D',
            //     map: 'map',
            //     itemStyle: {
            //         color: 'rgba(0, 0, 0, 0)',
            //         borderWidth: 0
            //     },
            //     emphasis: false
            // }
        ]
    }
}

onMounted(() => {
    initChart()
    resizeChart()
    window.addEventListener('resize', resizeChart)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeChart)
    chartInstance.value?.dispose()
})
</script>

<style scoped lang="scss">
.map {
    height: 100%;
}

// ::v-deep(.map-tooltip) {
//     box-sizing: border-box;
//     width: 11.875rem;
//     height: 6.875rem;
//     padding: 1.875rem 3.4375rem !important;
//     color: $white !important;
//     background-color: transparent !important;
//     background-image: url('#{$image-url}/pub/map-tooltip-bg__icon.png'), url('#{$image-url}/pub/map-tooltip-bg.png') !important;
//     background-repeat: no-repeat !important;
//     background-position:
//         1.875rem 1.875rem,
//         0 !important;
//     background-size:
//         1.4375rem 1.3125rem,
//         100% 100% !important;
//     box-shadow: none !important;
// }
</style>
