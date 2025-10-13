import {ref} from 'vue'
import {defineStore} from 'pinia'

// 网站存储
export const useWebStore = defineStore('web', () => {

    // UpLoad.vue中服务器返回的文件名保存并在Order.vue中使用
    const uploadFileName = ref()

    return {
        uploadFileName,
    }
})

