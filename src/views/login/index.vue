<template>
    <div class="login-container">
        <!-- title -->
        <div class="title"></div>
        <el-button @click="handleLogin">登录</el-button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { LOGIN_ANIMATE } from '@/utils/constant'
import { setItem } from '@/utils'

const router = useRouter()

const handleLogin = () => {
    setItem<boolean>(LOGIN_ANIMATE, true)

    router.push('/riskAnalyse')
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
