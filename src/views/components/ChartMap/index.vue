<template>
    <!-- 地图 -->
    <div class="chart-map-container">
        <!-- 地图 -->
        <MapContainer />
        <!-- 时间操作按钮 -->
        <HistoryAction />
        <!-- 行业操作按钮 -->
        <IndustryList />
        <!--  -->
        <MapActionMenu />
        <div class="map-name">
            <span>青岛市</span>
            <span class="map-name__icon"></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import MapContainer from './components/MapContainer.vue'
import HistoryAction from './components/HistoryAction.vue'
import IndustryList from './components/IndustryList.vue'
import MapActionMenu from './components/MapActionMenu.vue'
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
