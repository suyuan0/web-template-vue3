<!-- 隐患/企业比率（涉重大危险源） -->
<template>
    <SFTCard class="sft-card-ratio-of-enterprises-with-hidden-problems" title="隐患/企业比率（涉重大危险源）">
        <div class="ratio-of-enterprises-with-hidden-problems-container">
            <div class="item" v-for="item in dataList" :key="item.id">
                <span class="value">
                    <NNumberAnimation :precision="2" :from="0" :to="item.value" />
                </span>
                <span class="title">{{ item.name }}</span>
            </div>
        </div>
    </SFTCard>
</template>

<script setup lang="ts">
import SFTCard from '@/components/SFTCard/index.vue'
import dataList from './data'
import { NNumberAnimation } from 'naive-ui'
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
