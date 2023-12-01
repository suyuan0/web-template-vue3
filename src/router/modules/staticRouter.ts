import { RouteRecordRaw } from 'vue-router'
import { HOME_URL } from '@/config'

/**
 * @description 静态路由
 */
export const staticRouter: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: HOME_URL
    },
    {
        path: HOME_URL,
        name: 'home',
        component: () => import('@/views/home/home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/index.vue')
    }
]
