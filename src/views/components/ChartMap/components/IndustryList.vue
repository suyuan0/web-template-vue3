<template>
    <div class="industry-list-container">
        <div :class="['item', { active: item.id === active }]" v-for="item in historyList" :key="item.id" @click="changeHistory(item)">
            <span class="title">{{ item.title }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface IndustryItem {
    id: number
    title: string
}

const historyList: IndustryItem[] = [
    {
        id: 1,
        title: '概览'
    },
    {
        id: 2,
        title: '化工'
    },
    {
        id: 3,
        title: '工贸'
    },
    {
        id: 4,
        title: '烟花爆竹'
    },
    {
        id: 5,
        title: '非煤矿山'
    },
    {
        id: 6,
        title: '建筑'
    },
    {
        id: 7,
        title: '交通运输'
    },
    {
        id: 8,
        title: '市政'
    },
    {
        id: 9,
        title: '煤矿'
    },
    {
        id: 10,
        title: '医疗教育旅游'
    },
    {
        id: 11,
        title: '其他'
    }
]
const active = ref(1)

const changeHistory = (item: IndustryItem) => {
    active.value = item.id
}
</script>

<style scoped lang="scss">
.industry-list-container {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    width: 100%;
    .item {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.375rem 1.25rem;
        cursor: pointer;
        background-image: url('#{$image-url}/pub/industry-item-bg.png');
        background-size: 100% 100%;
        .title {
            font-size: 1rem;
            color: #1350cf;
        }
        &.active {
            .title {
                color: $white;
            }
        }
    }
}
</style>
