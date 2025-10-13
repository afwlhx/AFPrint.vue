<script setup>
import {useWebStore} from "@/stores/web.js";
import {useVisitorStore} from "@/stores/visitor.js";
import {MessagePlugin} from "tdesign-vue-next";

function TUploadRes(res) {

  // 判断是否冷却30秒完成
  if (res.XMLHttpRequest.status === 400) {
    MessagePlugin.error("请等待30秒后再上传！")
    return {
      error: res.error,
    }
  }

  console.log(res)
  // 将文件名传嗲到pinia状态管理中的webStore
  const webStore = useWebStore();
  webStore.uploadFileName = res.fileName;
  console.log(webStore.uploadFileName)

  return {}
}

const visitorStore = useVisitorStore();

const uploadRequestUrl = `${import.meta.env.VITE_API_BASE_URL}/Upload?visitorUUID=${visitorStore.visitorID}`
</script>

<template>
  <div>
    <label>上传文档：</label>
    <!--  上传  -->
    <t-upload theme="file"
              :action='uploadRequestUrl'
              :format-response="TUploadRes"/>
  </div>
</template>

<style scoped>
</style>