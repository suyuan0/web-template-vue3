import router from '@/router'
import { initDynamicRouter } from '@/router/modules/dynamicRouter'

/**
 * @description 路由守卫
 */
router.beforeEach((to, from, next) => {
    initDynamicRouter()
    next()
})

/**
 * @description 重置路由
 * */
export const resetRouter = () => {
    // const authStore = useAuthStore()
    // authStore.flatMenuListGet.forEach(route => {
    //     const { name } = route
    //     if (name && router.hasRoute(name)) router.removeRoute(name)
    // })
}

/**
 * @description 路由跳转错误
 * */
router.onError(error => {
    // NProgress.done()
    console.warn('路由错误', error.message)
})

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
    // NProgress.done()
})
