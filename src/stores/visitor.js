import {ref} from 'vue'
import {defineStore} from "pinia";
import {v4 as uuidv4} from 'uuid';

// 本地存储
export const useVisitorStore = defineStore('visitor', () => {
    // 用户ID
    const visitorID = ref()
    function initVisitorID() {
        if (!visitorID.value) {
            visitorID.value = uuidv4()
        }
    }

    return {
        visitorID,
        initVisitorID,
    }

    },
    {
        // pinia持久化存储 ( 本地存储 )
        persist: true
    })