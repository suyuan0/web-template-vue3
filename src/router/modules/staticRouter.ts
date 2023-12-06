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
                path: '/home',
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
                path: HOME_URL,
                name: 'riskAnalyse',
                component: () => import('@/views/riskAnalyse/index.vue'),
                meta: {
                    title: '隐患总览'
                }
            },
            // 行业分析
            {
                path: '/industry-analysis',
                name: 'industryAnalysis',
                component: () => import('@/views/industryAnalysis/index.vue'),
                meta: {
                    title: '行业分析'
                }
            },
            // 地域分析
            {
                path: '/regional-analysis',
                name: 'regionalAnalysis',
                component: () => import('@/views/regionalAnalysis/index.vue'),
                meta: {
                    title: '地域分析'
                }
            },
            // 执法分析
            {
                path: '/law-enforcement-analysis',
                name: 'lawEnforcementAnalysis',
                component: () => import('@/views/lawEnforcementAnalysis/index.vue'),
                meta: {
                    title: '执法分析'
                }
            },
            // 专家分析
            {
                path: '/expert-analysis',
                name: 'expertAnalysis',
                component: () => import('@/views/expertAnalysis/index.vue'),
                meta: {
                    title: '专家分析'
                }
            }
        ]
    },
    // 404
    {
        path: '/404',
        name: 'not-found',
        component: () => import('@/views/errPage/404.vue'),
        meta: {
            title: 'notFound'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    }
]
