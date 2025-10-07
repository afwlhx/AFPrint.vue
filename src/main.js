import '@/assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from '@/App.vue'

// 导入Router
import router from '@/router'

// 导入 TDesign
import TDesign from 'tdesign-vue-next';
import '@/assets/theme/tdesign-main.css';// 引入组件库的少量全局样式变量

// 持久化存储
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 导入pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

// 将vue-router的实例注入到vue应用中
app.use(router)

// 将Pinia的实例注入到vue应用中
app.use(pinia)

app.use(TDesign)

app.mount('#app')


import {useVisitorStore} from "@/stores/visitor.js";

const visitorStore = useVisitorStore()
// 🚀 在应用启动时初始化 visitorId
visitorStore.initVisitorID()
console.log(visitorStore.visitorID)
