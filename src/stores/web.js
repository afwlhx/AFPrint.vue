import { reactive , ref } from 'vue'
import { defineStore } from 'pinia'

export const useWebStore = defineStore('web',()=>{

    // UpLoad.vue中服务器返回的文件名保存并在Order.vue中使用
    const uploadFileName = ref()
    function SetUploadFileName(setValue){
        uploadFileName.value = setValue
    }

    return {
        uploadFileName,
        SetUploadFileName,
    }
})