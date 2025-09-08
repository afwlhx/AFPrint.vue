<script setup>
import { useWebStore } from "@/stores/web.js";

function TUploadRes(res){
  console.log(res)
  // 将文件名传嗲到pinia状态管理中的webStore
  const webStore = useWebStore();
  webStore.SetUploadFileName(res.filePath)
  console.log(webStore.uploadFileName)

  return{}
}
</script>

<template>
  <div class="upload-container">
    <h2>上传文档</h2>
<!--  上传  -->
    <t-upload theme="file"
              draggable
              action="http://localhost:5094/api/upload"
              :format-response="TUploadRes"/>
  </div>
</template>

<style scoped>
  .upload-container {
    margin-bottom: 20px;
  }
</style>