<template>
    <div style="color: #ffffff">
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
            <template #right>
                <SFTGrid>
                    <ExpertStatistic />
                </SFTGrid>
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
</script>
