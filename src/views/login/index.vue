<template>
    <div class="login-container">
        <!-- title -->
        <div class="title"></div>
        <!-- 登录 -->
        <div class="login-form-container">
            <LoginForm />
        </div>
    </div>
</template>

<script setup lang="ts">
// import { useRouter } from 'vue-router'
// import { LOGIN_ANIMATE } from '@/utils/constant'
// import { setItem } from '@/utils'
import LoginForm from './components/loginForm.vue'

// const router = useRouter()

// const handleLogin = () => {
//     setItem<boolean>(LOGIN_ANIMATE, true)

//     router.push('/riskAnalyse')
// }
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
