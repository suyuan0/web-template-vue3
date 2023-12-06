<!-- 企业隐患数量统计 -->
<template>
    <SFTCard class="sft-card-statistics-on-the-number-of-hidden-dangers-in-enterprises" title="企业隐患数量统计">
        <template #action>
            <div class="action">
                <span>查看更多</span>
            </div>
        </template>
        <!-- list -->
        <div class="list-container">
            <SFTTable :columns="columns" :data="dataList" action number>
                <template #action="{ row }">
                    <span class="action-button" @click="handleViewCompanyInfo(row)">企业详情</span>
                    <span class="action-button">隐患详情</span>
                </template>
            </SFTTable>
        </div>
    </SFTCard>
</template>

<script setup lang="ts">
import SFTCard from '@/components/SFTCard/index.vue'
import SFTTable from '@/components/SFTTable/index.vue'
import { columns, dataList } from './data'

const handleViewCompanyInfo = (row: any) => {
    console.log(row)
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
