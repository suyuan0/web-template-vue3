<template>
    <!-- 数据概览 -->
    <SFTCard class="sft-card__data-overview-container" title="数据概览">
        <template #action>
            <slot />
        </template>
        <div class="data-overview-container">
            <!-- 基本信息 -->
            <div class="base-info">
                <div class="base-info__item" v-for="item in baseList" :key="item.id">
                    <span class="title">{{ item.title }}</span>
                    <span class="value">
                        <NNumberAnimation :from="0" :to="item.value" show-separator />
                    </span>
                </div>
            </div>
            <!-- 隐患信息 -->
            <div class="risk-info" :style="{ columnCount: column }">
                <div class="risk-info__item" v-for="item in overviewRiskList" :key="item.id">
                    <span class="title">{{ item.title }}</span>
                    <span class="value"> <NNumberAnimation :from="0" :to="item.value" show-separator />{{ item.unit }} </span>
                </div>
            </div>
        </div>
    </SFTCard>
</template>

<script setup lang="ts">
import SFTCard from '@/components/SFTCard/index.vue'
import { baseList, riskList, riskList2 } from './data'
import { NNumberAnimation } from 'naive-ui'
import { onMounted, ref } from 'vue'

const overviewRiskList = ref(riskList)

interface Props {
    column?: number
}

const props = withDefaults(defineProps<Props>(), {
    column: 3
})

onMounted(() => {
    overviewRiskList.value = props.column === 3 ? riskList : riskList2
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
