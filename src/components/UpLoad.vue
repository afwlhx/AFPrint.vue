<script setup>
import { useWebStore } from "@/stores/web.js";
import { useVisitorStore } from "@/stores/visitor.js";

function TUploadRes(res){

  // 判断是否冷却30秒完成
  if (res.XMLHttpRequest.status === 400){
    alert("请等待30秒后再上传！");
    return{
      error:res.error,
    }
  }

  console.log(res)
  // 将文件名传嗲到pinia状态管理中的webStore
  const webStore = useWebStore();
  webStore.SetUploadFileName(res.fileName)
  console.log(webStore.uploadFileName)

  return{}
}

const visitorStore = useVisitorStore();
// http://localhost:5094/api/Upload
// https://printapi.afwlhx.top/api/Upload
const uploadRequestUrl = `https://printapi.afwlhx.top/api/Upload?visitorUUID=${visitorStore.visitorID}`
</script>

<template>
  <div class="upload">
    <h2>上传文档</h2>
    <!--  上传  -->
    <t-upload theme="file"
              :action='uploadRequestUrl'
              :format-response="TUploadRes"/>
  </div>
</template>

<style scoped>
  .upload {
    display: flex;
    flex-direction: column;

    padding: 20px;

    gap: 16px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
</style>