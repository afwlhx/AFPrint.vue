import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/views/Order.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/admin',
        component: () => import('@/views/Admin.vue')
    },
    {
        path: '/cost-table',
        component: () => import('@/views/CostTable.vue'),
    },
    {
        path: '/blog',
        component: () => import('@/views/Blog.vue'),
    },
    {
        path: '/order-search',
        component: () => import('@/views/OrderSearch.vue'),
    },
    {
        path: '/login',
        component:() => import('@/views/Auth/Login.vue'),
    },
    {
        path: '/register',
        component:() => import('@/views/Auth/Register.vue'),
    },
    {
        path: '/user-info',
        component:() => import('@/views/Auth/UserInfo.vue'),
    },
    {
        path: '/profile',
        component:()=> import('@/views/Profile.vue'),
        meta: {requiresAuth: true},
    },
]

const router = createRouter({
    history: createWebHistory(), // 历史 createWebHistory() 为浏览器通常使用的模式
    routes
})

export default router