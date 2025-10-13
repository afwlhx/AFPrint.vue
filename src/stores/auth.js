import {reactive, ref} from 'vue'
import {defineStore} from "pinia";

export const useAuthStore = defineStore("auth", () => {
    const accessToken = ref("");

    return {
        accessToken,
    }
}, {
    // pinia持久化存储 ( 本地存储 )
    persist: true
})