<template>
    <div style="height: 100%">
        <SFTLayout>
            <template #left>
                <SFTGrid>
                    <!-- 数据概览 -->
                    <DataOverview />
                    <!-- 行业分布 -->
                    <IndustryDistribution />
                </SFTGrid>
                <!-- 隐患原因分布 -->
                <DistributionOfHiddenCauses />
            </template>
            <template #center>
                <ChartMap />
            </template>
            <template #right>
                <SFTGrid>
                    <!-- 专家统计  -->
                    <ExpertStatistic />
                    <!-- 隐患趋势分布 -->
                    <TrendDistributionOfHiddenHazards />
                </SFTGrid>
                <!-- 地域隐患/企业率 -->
                <GeographicallyHiddenEnterpriseRate />
            </template>
        </SFTLayout>
    </div>
</template>

<script setup lang="ts">
import SFTLayout from '@/components/SFTLayout/index.vue'
import SFTGrid from '@/components/SFTGrid/index.vue'
// 数据概览
import DataOverview from '@/views/components/DataOverview/index.vue'
// 行业分布
import IndustryDistribution from '@/views/components/IndustryDistribution/index.vue'
// 隐患原因分布
import DistributionOfHiddenCauses from '@/views/components/DistributionOfHiddenCauses/index.vue'
// 专家统计
import ExpertStatistic from '@/views/components/ExpertStatistic/index.vue'
// 隐患趋势分布
import TrendDistributionOfHiddenHazards from '@/views/components/TrendDistributionOfHiddenHazards/index.vue'
// 地域隐患/企业率
import GeographicallyHiddenEnterpriseRate from '@/views/components/GeographicallyHiddenEnterpriseRate/index.vue'
// 地图
import ChartMap from '@/views/components/ChartMap/index.vue'
</script>
