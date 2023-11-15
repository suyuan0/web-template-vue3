<script setup lang="ts" name="svgIcon">
import { reactive } from 'vue'
import { loginApi } from '@/api/modules/users'
import { Login } from '@/api/modules/users/interface'

const loginForm = reactive<Login.ReqLoginForm>({
    password: '15010447517',
    phone: '123',
    clientId: 0,
    systemId: 0
})

const handleLogin = async () => {
    const res = await loginApi(loginForm)
    console.log(res)
}
</script>

<template>
    <div>
        <el-form label-width="auto">
            <el-form-item label="手机号">
                <el-input v-model="loginForm.phone" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="loginForm.password" />
            </el-form-item>
            <el-form-item>
                <el-button @click="handleLogin">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped></style>
