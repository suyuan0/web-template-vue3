<template>
    <div class="sft-card-container">
        <!-- 头部 -->
        <div class="sft-card-container__header">
            <span class="title">{{ title }}</span>
        </div>
        <!-- 内容 -->
        <div class="sft-card-container__content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
interface SFTCardProps {
    title: string
}

withDefaults(defineProps<SFTCardProps>(), {
    title: ''
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
