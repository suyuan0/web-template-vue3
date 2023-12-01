<template>
    <!-- 登录表单 -->
    <div class="login-form">
        <!-- 账号 -->
        <div class="lofin-form__item" v-for="item in formList" :key="item.prop">
            <input :maxlength="11" class="lofin-form__item--inner" v-bind="item" v-model="form[item.prop]" />
            <span :class="['icon', item.prop]"></span>
        </div>
        <!-- 记住用户名 -->
        <div class="form-item">
            <el-checkbox v-model="checked"> 记住用户名 </el-checkbox>
        </div>
        <div class="login-btn">
            <el-button :loading="loading" @click="handleLogin">登录</el-button>
        </div>
        <span class="tips">注：首次登录，用户名；手机号；密码；姓名首字母缩写 +@+ 手机号后6位</span>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import FormValidator, { Rules } from './validateForm'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { setItem, getItem } from '@/utils'
import { LOGIN_ANIMATE, REMEMBER_USERNAME } from '@/utils/constant'

const router = useRouter()

const formList = [
    {
        label: '账号',
        placeholder: '账号',
        type: 'text',
        prop: 'phone'
    },
    {
        label: '密码',
        placeholder: '密码',
        type: 'password',
        prop: 'password'
    }
]
// 是否记住用户名
const checked = ref(false)
const loading = ref(false)
// 表单
const form = reactive({
    phone: '',
    password: ''
})

const rules: Rules = {
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
    ],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}

const handleLogin = () => {
    const validationError = FormValidator.validate(form, rules)
    if (validationError) {
        ElMessage({
            message: validationError,
            type: 'error'
        })
        return
    }

    // TODO 登录逻辑
    loading.value = true
    checked.value && handleRemember()
    setTimeout(() => {
        setItem<boolean>(LOGIN_ANIMATE, true)
        router.push('/riskAnalyse')
        ElMessage({
            message: '登录成功',
            type: 'success'
        })
    }, 3000)
}

// 记住用户名
const handleRemember = () => {
    setItem(REMEMBER_USERNAME, form.phone)
}

onMounted(() => {
    if (getItem(REMEMBER_USERNAME)) {
        form.phone = getItem(REMEMBER_USERNAME)
        checked.value = true
    }
})
</script>

<style scoped lang="scss">
.login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 99;
    width: 26.125rem;
    height: 18.5625rem;
    transform: translate(-50%, -50%);
    .lofin-form__item {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        width: inherit;
        height: 3.5rem;
        padding-right: 1.25rem;
        margin-bottom: 2.5625rem;
        background-image: url('#{$image-url}/login/input-bg.png');
        background-size: 100% 100%;
        &:nth-of-type(2) {
            margin-bottom: 2.0625rem;
        }
        .lofin-form__item--inner {
            box-sizing: border-box;
            flex: 1;
            height: inherit;
            padding: 20px;
            color: $white;
            letter-spacing: 0.3125rem;
            background: none;
            border: none;
            outline: none;
            &::placeholder {
                font-size: 1rem;
                color: $white;
            }
        }
        .icon {
            width: 1.125rem;
            height: 1.25rem;
            background-size: 100%;
            &.phone {
                background-image: url('#{$image-url}/login/user.png');
            }
            &.password {
                background-image: url('#{$image-url}/login/lock.png');
            }
        }
    }
    .form-item {
        margin-bottom: 0.9375rem;
        ::v-deep(.el-checkbox) {
            .el-checkbox__inner {
                background-color: transparent;
                border: 1px solid #1350cf;
            }
            .el-checkbox__label {
                font-size: 1rem;
                color: $white;
            }
        }
    }
    .login-btn {
        height: 2.9375rem;
        margin-bottom: 0.5625rem;
        button {
            width: 100%;
            height: 100%;
            font-size: 1.25rem;
            color: $white;
            letter-spacing: 1.25rem;
            cursor: pointer;
            background-color: #1250cf;
            border: none;
        }
    }
    .tips {
        font-size: 0.75rem;
        color: $white;
    }
}
</style>
