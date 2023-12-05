<template>
    <div class="map-action-menu-container">
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
        title: '企业数'
    },
    {
        id: 2,
        title: '隐患/企业比率'
    },
    {
        id: 3,
        title: '重大隐患企业数'
    }
]
const active = ref(1)

const changeHistory = (item: IndustryItem) => {
    active.value = item.id
}
</script>

<style scoped lang="scss">
.map-action-menu-container {
    position: absolute;
    right: 0;
    bottom: 2rem;
    z-index: 100;
    display: flex;
    flex-direction: column;
    .item {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10rem;
        height: 2.3125rem;
        margin-bottom: 0.4375rem;
        cursor: pointer;
        background-image: url('#{$image-url}/pub/map-action-menu.png');
        background-size: 100% 100%;
        &:nth-last-of-type {
            margin-bottom: 0;
        }
        .title {
            font-size: 1rem;
            color: $white;
        }
        &.active {
            background-image: url('#{$image-url}/pub/map-action-menu__active.png');
        }
    }
}
</style>
