<template>
    <div id="header-title" :class="['title', { animate: isStart }]"></div>
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
.title {
    position: absolute;
    top: 1.625rem;
    left: 50%;
    width: 55.875rem;
    height: 4.5rem;
    background-image: url('#{$image-url}/pub/layout-title__text.png');
    background-size: 100% 100%;
    transform: translateX(-50%);
    &.animate {
        animation: title-animation 1s ease-in-out forwards;
    }
}

@keyframes title-animation {
    0% {
        top: 7.625rem;
        width: 71.4375rem;
        height: 5.3125rem;
    }
    100% {
        top: 1.625rem;
    }
}
</style>
