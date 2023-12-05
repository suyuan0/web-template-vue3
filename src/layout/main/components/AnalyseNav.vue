<template>
    <div class="analyse-main-containere">
        <div class="nav-list">
            <div
                :class="['item', { active: route.path === item.path }]"
                :style="{ backgroundImage: `url(${IMAGE_URL}/pub/${route.path === item.path ? item.selectedIcon : item.icon}.png)` }"
                @click="handleToPath(item)"
                v-for="item in navStore.navList"
                :key="item.id"
            >
                <!-- <span :class="['title', { active: route.path === item.path }]"></span> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useNavStore } from '@/store/modules/nav'
import { useRouter, useRoute } from 'vue-router'
import { IMAGE_URL } from '@/config'

const navStore = useNavStore()

const route = useRoute()

const router = useRouter()
// 跳转到指定的路由
const handleToPath = (item: any) => {
    item.path && router.push(item.path)
}
</script>

<style lang="scss" scoped>
.analyse-main-containere {
    position: absolute;
    left: 50%;
    z-index: 1;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 75.0625rem;
    height: 3.625rem;
    padding: 0 3.125rem;
    background-image: url('#{$image-url}/pub/nav-bg.png');
    background-size: 100% 100%;
    transform: translateX(-50%);
    .nav-list {
        display: flex;
        justify-content: space-around;
        width: 100%;
        .item {
            width: 5.875rem;
            height: 1.1875rem;
            cursor: pointer;
            background-size: 100% 100%;

            // &.active {
            // }
            // .title {
            // font-size: 1.25rem;
            // font-weight: bolder;
            // color: $white;
            // 从上到下的文字渐变
            // background: -webkit-linear-gradient($white 0%, #4373b5 100%);
            // background-clip: text;
            // -webkit-background-clip: text;
            // -webkit-text-fill-color: transparent;
            // &.active {
            // background: -webkit-linear-gradient(#6fb0da 0%, #1853c5 100%);
            // -webkit-background-clip: text;
            // background-clip: text;
            // -webkit-text-fill-color: transparent;
            // }
            // }
        }
    }
}
</style>
