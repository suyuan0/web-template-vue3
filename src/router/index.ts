import { createRouter, createWebHashHistory, createWebHistory, RouterHistory } from 'vue-router'
import { staticRouter } from './modules/staticRouter'

const mode = import.meta.env.VITE_ROUTER_MODE as keyof RouterMode

interface RouterMode {
    hash: () => RouterHistory
    history: () => RouterHistory
}

// 引入路由配置
const routerMode: RouterMode = {
    hash: () => createWebHashHistory(),
    history: () => createWebHistory()
}

const router = createRouter({
    history: routerMode[mode](),
    routes: [...staticRouter],
    // strict: false,
    scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
