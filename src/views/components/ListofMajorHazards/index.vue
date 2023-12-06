<!-- 重大隐患清单 -->
<template>
    <SFTCard tensile class="sft-card-listof-major-hazards" title="重大隐患清单">
        <template #action>
            <div class="action">
                <span>查看更多</span>
            </div>
        </template>
        <!-- list -->
        <div class="list-container">
            <SFTTable :columns="columns" :data="dataList" action number>
                <template #action>
                    <span class="action-button">企业详情</span>
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
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
