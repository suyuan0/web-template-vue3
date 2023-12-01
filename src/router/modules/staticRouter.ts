import { RouteRecordRaw } from 'vue-router'
import { HOME_URL, LOGIN_URL } from '@/config'
import Layout from '@/layout/index.vue'

/**
 * @description 静态路由
 */
export const staticRouter: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: HOME_URL
    },
    {
        path: LOGIN_URL,
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/layout',
        name: 'layout',
        component: Layout,
        children: [
            {
                path: HOME_URL,
                name: 'home',
                component: () => import('@/views/home/home.vue')
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/about/index.vue')
            },
            // 隐患总览
            {
                path: '/riskAnalyse',
                name: 'riskAnalyse',
                component: () => import('@/views/riskAnalyse/index.vue'),
                meta: {
                    title: '隐患总览'
                }
            }
        ]
    }
]
