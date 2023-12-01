import router from '@/router'
import { initDynamicRouter } from '@/router/modules/dynamicRouter'

/**
 * @description 路由守卫
 */
router.beforeEach((to, from, next) => {
    initDynamicRouter()
    // 1.NProgress 开始
    // 2.动态设置标题
    const title = import.meta.env.VITE_GLOB_APP_TITLE as string
    document.title = to.meta.title ? `${to.meta.title} - ${title}` : title
    // 3.判断是访问登陆页，有 Token 就在当前页面，没有 Token 重置路由到登陆页
    // 4.判断访问页面是否在路由白名单地址(静态路由)中，如果存在直接放行
    // 5.判断是否有 Token，没有重定向到 login 页面
    // 6.如果没有菜单列表，就重新请求菜单列表并添加动态路由
    // 7.存储 routerName 做按钮权限筛选
    // 8.正常访问页面
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
