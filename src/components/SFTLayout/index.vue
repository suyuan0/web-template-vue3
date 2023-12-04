<template>
    <div class="sft-layout-container">
        <!-- 左侧 -->
        <div class="sft-layout-left">
            <slot name="left"></slot>
        </div>
        <!-- 中间 -->
        <div class="sft-layout-center">
            <slot name="center"></slot>
        </div>
        <!-- 右侧 -->
        <div class="sft-layout-right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import './index.scss';
</style>
