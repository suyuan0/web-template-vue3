<!-- 隐患类别分布 -->
<template>
    <SFTCard class="sft-card-distribution-of-hidden-trouble-categories" tensile title="隐患类别分布">
        <div class="distribution-of-hidden-trouble-categories-container">
            <!-- 左侧 -->
            <div class="list left-list">
                <p class="item" v-for="item in leftList" :key="item.id">
                    <span class="title">{{ item.name }}</span>
                    <span class="value">
                        <NNumberAnimation :from="0" :to="item.value" />
                    </span>
                </p>
            </div>
            <!-- circle -->
            <div class="circle">
                <!-- <span class="title">隐患类别</span> -->
            </div>
            <!-- 右侧 -->
            <div class="list right-list">
                <p class="item" v-for="item in rightList" :key="item.id">
                    <span class="value"> <NNumberAnimation :from="0" :to="item.value" /></span>
                    <span class="title">{{ item.name }}</span>
                </p>
            </div>
        </div>
    </SFTCard>
</template>

<script setup lang="ts">
import SFTCard from '@/components/SFTCard/index.vue'
import list from './data'
import { ref, onMounted } from 'vue'
import { NNumberAnimation } from 'naive-ui'

const leftList = ref()
const rightList = ref()

onMounted(() => {
    leftList.value = list.slice(0, 5)
    rightList.value = list.slice(5, 10)
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
