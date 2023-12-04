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
import autofit from 'autofit.js'
import { onMounted } from 'vue'

// const router = useRouter()

// const handleLogin = () => {
//     setItem<boolean>(LOGIN_ANIMATE, true)

//     router.push('/riskAnalyse')
// }
onMounted(() => {
    autofit.init({
        dw: 1920,
        dh: 1080,
        el: '.login-container'
    })
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
