<template>
    <div :class="['sft-header-menu animate__animated', { animate__slideInLeft: isStart }]">
        <span v-for="item in menuList" :key="item.id" :class="['item', { active: active === item.id }]" @click="handleChangeMenu(item)">
            {{ item.title }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 菜单列表
const menuList = [
    {
        id: 1,
        title: '隐患分析'
    },
    {
        id: 2,
        title: '资源库'
    },
    {
        id: 3,
        title: '隐患智能采集'
    }
]
const active = ref(1)

const isStart = ref(false)

// 开启动画
const openAnimation = () => {
    isStart.value = true
}

// 切换菜单
const handleChangeMenu = (item: any) => {
    if (item.id === active.value) return
    active.value = item.id
}

defineExpose({
    openAnimation
})
</script>

<style scoped lang="scss">
.sft-header-menu {
    position: absolute;
    bottom: 1.1875rem;
    display: flex;
    .item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15.6019rem;
        height: 2.2931rem;
        font-size: 1.125rem;
        color: $white;
        cursor: pointer;
        background-image: url('#{$image-url}/pub/menu-bg.png');
        background-size: 100% 100%;
        &.active {
            background-image: url('#{$image-url}/pub/menu-bg__active.png');
        }
    }
}
</style>
