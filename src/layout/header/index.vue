<template>
    <!-- 头部 -->
    <header class="header">
        <!-- <img class="title" :src="`${IMAGE_URL}/pub/layout-title.png`" alt="" /> -->
        <!-- 菜单 -->
        <HeaderMenu />
        <!-- 右侧操作按钮 -->
        <RightAction />
    </header>
</template>

<script setup lang="ts">
// import { IMAGE_URL } from '@/config'
import HeaderMenu from './components/HeaderMenu.vue'
import RightAction from './components/RightAction.vue'
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
