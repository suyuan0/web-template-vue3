<template>
    <div class="history-action-container">
        <div :class="['item', { active: item.value === active }]" v-for="item in historyList" :key="item.id" @click="changeHistory(item)">
            <span class="title">{{ item.title }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
type historyType = 'history' | 'year'

interface HistoryItem {
    id: number
    value: historyType
    title: string
}

const historyList: HistoryItem[] = [
    {
        id: 1,
        value: 'history',
        title: '历史累计'
    },
    {
        id: 2,
        value: 'year',
        title: '本年度'
    }
]
const active = ref<historyType>('history')

const changeHistory = (item: HistoryItem) => {
    active.value = item.value
}
</script>

<style scoped lang="scss">
.history-action-container {
    position: absolute;
    top: 6.25rem;
    left: 1.625rem;
    z-index: 1000;
    .item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 7.5rem;
        height: 2.8125rem;
        color: $white;
        cursor: pointer;
        background-image: url('#{$image-url}/pub/history-btn.png');
        background-size: 100% 100%;
        &:nth-of-type(1) {
            margin-bottom: 0.75rem;
        }
        &.active {
            background-image: url('#{$image-url}/pub/history-btn__active.png');
        }
        .title {
            font-size: 1rem;
        }
    }
}
</style>
