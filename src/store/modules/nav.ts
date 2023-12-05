import { defineStore } from 'pinia'

export const useNavStore = defineStore({
    id: 'nav',
    state: () => ({
        // 导航
        navList: [
            {
                id: 1,
                title: '隐患总览',
                path: '/risk-analyse',
                icon: 'risk-analyse',
                selectedIcon: 'risk-analyse__active'
            },
            {
                id: 2,
                title: '行业分析',
                path: '/industry-analysis',
                icon: 'industry-analysis',
                selectedIcon: 'industry-analysis__active'
            },
            {
                id: 3,
                title: '地域分析',
                path: '/regional-analysis',
                icon: 'geographical-analysis',
                selectedIcon: 'geographical-analysis__active'
            },
            {
                id: 4,
                title: '执法分析',
                path: '/law-analysis',
                icon: 'law-enforcement-analysis',
                selectedIcon: 'law-enforcement-analysis__active'
            },
            {
                id: 5,
                title: '事故分析',
                icon: 'accident-analysis',
                selectedIcon: 'accident-analysis__active'
            },
            {
                id: 6,
                title: '专家分析',
                path: '/expert-analysis',
                icon: 'expert-analysis',
                selectedIcon: 'expert-analysis__active'
            },
            {
                id: 7,
                title: '企业分析',
                icon: 'enterprise-analysis',
                selectedIcon: 'enterprise-analysis__active'
            }
        ]
    }),
    actions: {}
})
