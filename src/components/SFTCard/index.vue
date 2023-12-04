<template>
    <div :class="['sft-card-container', { tensile: tensile }]">
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
    /** 标题 */
    title: string
    /** 是否拉伸 */
    tensile?: boolean
}

withDefaults(defineProps<SFTCardProps>(), {
    title: '',
    tensile: false
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
