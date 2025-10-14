import '@/assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from '@/App.vue'

// 导入Router
import router from '@/router'

// 导入 TDesign
import TDesign from 'tdesign-vue-next';
import '@/assets/theme/tdesign-main.css'; // 引入组件库的少量全局样式变量
// 持久化存储
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import {useAuthStore} from '@/stores/auth.js'
import {useVisitorStore} from "@/stores/visitor.js";

// 导入pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

// 将Pinia的实例注入到vue应用中
app.use(pinia)

// 将vue-router的实例注入到vue应用中
app.use(router)

app.use(TDesign)

app.mount('#app')

const authStore = useAuthStore()

// 路由守卫：检查JWT
router.beforeEach((to, from, next) => {
    // 判断标签为 requireAuth 且没有 token 的
    if (to.meta.requiresAuth && !authStore.accessToken) next('/login')
    // 判断标签为 dontRequireAuth 且有 token 的
    else if(to.meta.dontRequiresAuth && authStore.accessToken) next('/profile')
    else next()
})

const visitorStore = useVisitorStore()
// 🚀 在应用启动时初始化 visitorId
visitorStore.initVisitorID()
console.log(visitorStore.visitorID)
