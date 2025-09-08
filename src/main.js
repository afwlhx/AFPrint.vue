import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'

// 导入Router
import router from '@/router'

// 导入 TDesign
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';// 引入组件库的少量全局样式变量

// 导入pinia
const pinia = createPinia()

const app = createApp(App)

// 将vue-router的实例注入到vue应用中
app.use(router)

// 将Pinia的实例注入到vue应用中
app.use(pinia)

app.use(TDesign)

app.mount('#app')
