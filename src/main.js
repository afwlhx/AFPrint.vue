import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

// 导入Router
import router from './router'

// 导入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入pinia
const pinia = createPinia()

const app = createApp(App)

// 将vue-router的实例注入到vue应用中
app.use(router)

// 将ElementPlus的实例注入到vue应用中
app.use(ElementPlus)

// 将Pinia的实例注入到vue应用中
app.use(pinia)

app.mount('#app')
