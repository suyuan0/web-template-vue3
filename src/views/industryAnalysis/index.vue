<!-- 行业分析 -->
<template>
    <div id="industry-analyse-container">
        <SFTLayout>
            <template #left>
                <SFTGrid>
                    <!-- 数据概览 -->
                    <DataOverview :column="4">
                        <div class="industry-name-container">
                            <span class="title">化工</span>
                        </div>
                    </DataOverview>
                    <!-- 隐患归属分类 -->
                    <ClassificationOfHiddenTroubleAttribution />
                </SFTGrid>
                <!-- 隐患类别分布 -->
                <DistributionOfHiddenTroubleCategories />
                <!-- 重大隐患清单 -->
                <ListofMajorHazards />
            </template>
            <template #center>
                <div class="sft-layout-industry-analyse-center">
                    <ChartMap />
                    <!-- 企业隐患数量统计 -->
                    <StatisticsOnTheNumberOfHiddenDangersInEnterprises />
                </div>
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
// 隐患归属分类
import ClassificationOfHiddenTroubleAttribution from '@/views/components/ClassificationOfHiddenTroubleAttribution/index.vue'
// 隐患类别分布
import DistributionOfHiddenTroubleCategories from '@/views/components/DistributionOfHiddenTroubleCategories/index.vue'
// 重大隐患清单
import ListofMajorHazards from '@/views/components/ListofMajorHazards/index.vue'
// 专家统计
import ExpertStatistic from '@/views/components/ExpertStatistic/index.vue'
// 隐患趋势分布
import TrendDistributionOfHiddenHazards from '@/views/components/TrendDistributionOfHiddenHazards/index.vue'
// 地域隐患/企业率
import GeographicallyHiddenEnterpriseRate from '@/views/components/GeographicallyHiddenEnterpriseRate/index.vue'
// 地图
import ChartMap from '@/views/components/ChartMap/index.vue'
// 企业隐患数量统计
import StatisticsOnTheNumberOfHiddenDangersInEnterprises from '@/views/components/StatisticsOnTheNumberOfHiddenDangersInEnterprises/index.vue'
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
