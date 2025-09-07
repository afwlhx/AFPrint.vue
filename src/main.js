import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

// 导入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入pinia
const pinia = createPinia()

const app = createApp(App)

// 导入ElementPlus
app.use(ElementPlus)

// 将Pinia导入Vue中
app.use(pinia)

app.mount('#app')
