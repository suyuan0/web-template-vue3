// import router from '@/router'

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob('@/views/**/*.vue')

/**
 * @description 初始化动态路由
 */
export const initDynamicRouter = () => {
    // TODO 动态路由
    console.log(modules, 'TODO 动态路由，，，什么BUG')
}
