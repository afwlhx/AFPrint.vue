import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/views/Index.vue'),
    },
    {
        path: '/login',
        component: () => import('@/views/Login.vue'),
    },
    {
        path: '/admin',
        component: () => import('@/views/Admin.vue')
    },
    {
        path: '/cost-table',
        component: () => import('@/views/CostTable.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(), // 历史 createWebHistory() 为浏览器通常使用的模式
    routes
})

export default router