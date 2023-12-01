<template>
    <!-- 头部 -->
    <header :class="['header animate__animated', { animate__slideInDown: isStart }]">
        <!-- 标题 -->
        <HeaderTitle ref="HeaderTitleRef" />
        <!-- 菜单 -->
        <HeaderMenu ref="HeaderMenuRef" />
        <!-- 右侧操作按钮 -->
        <RightAction ref="RightActionRef" />
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HeaderMenu from './components/HeaderMenu.vue'
import RightAction from './components/RightAction.vue'
import HeaderTitle from './components/HeaderTitle.vue'
import { getItem, removeItem } from '@/utils'
import { LOGIN_ANIMATE } from '@/utils/constant'

const isStart = ref(false)

/**
 * @description: 开启动画
 */
const HeaderTitleRef = ref<InstanceType<typeof HeaderTitle>>()
const HeaderMenuRef = ref<InstanceType<typeof HeaderMenu>>()
const RightActionRef = ref<InstanceType<typeof RightAction>>()
const openAnimation = () => {
    isStart.value = true
    HeaderTitleRef.value?.openAnimation()
    HeaderMenuRef.value?.openAnimation()
    RightActionRef.value?.openAnimation()
    // TODO 动画结束后移除动画标识
    removeItem(LOGIN_ANIMATE)
}

onMounted(() => {
    getItem<boolean>(LOGIN_ANIMATE) && openAnimation()
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
