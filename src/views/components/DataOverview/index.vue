<template>
    <SFTCard title="数据概览">
        <div class="date-overview-container">
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
            <div class="risk-info">
                <div class="risk-info__item" v-for="item in riskList" :key="item.id">
                    <span class="title">{{ item.title }}</span>
                    <span class="value"> <NNumberAnimation :from="0" :to="item.value" show-separator />{{ item.unit }} </span>
                </div>
            </div>
        </div>
    </SFTCard>
</template>

<script setup lang="ts">
import SFTCard from '@/components/SFTCard/index.vue'
import { baseList, riskList } from './data'
import { NNumberAnimation } from 'naive-ui'
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
