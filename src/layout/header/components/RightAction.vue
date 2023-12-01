<template>
    <div :class="['sft-header-action animate__animated', { animate__slideInRight: isStart }]">
        <div class="item">分析报告导出</div>
        <!-- TODO user info -->
        <div class="item">用户名</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isStart = ref(false)

const openAnimation = () => {
    isStart.value = true
}

defineExpose({
    openAnimation
})
</script>

<style scoped lang="scss">
.sft-header-action {
    position: absolute;
    right: 0;
    bottom: 1.1875rem;
    display: flex;
    .item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15.6875rem;
        height: 2.375rem;
        font-size: 1.125rem;
        color: $white;
        cursor: pointer;
        background-image: url('#{$image-url}/pub/layout-action.png');
        background-size: 100% 100%;
    }
}
</style>
