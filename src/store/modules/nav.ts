import { defineStore } from 'pinia'

export const useNavStore = defineStore({
    id: 'nav',
    state: () => ({
        // 导航
        navList: [
            {
                id: 1,
                title: '隐患总览',
                path: '/risk-analyse'
            },
            {
                id: 2,
                title: '行业分析',
                path: '/industry-analysis'
            },
            {
                id: 3,
                title: '地域分析',
                path: '/regional-analysis'
            },
            {
                id: 4,
                title: '执法分析',
                path: '/law-analysis'
            },
            {
                id: 5,
                title: '事故分析'
            },
            {
                id: 6,
                title: '专家分析',
                path: '/expert-analysis'
            },
            {
                id: 7,
                title: '企业分析'
            }
        ]
    }),
    actions: {}
})
