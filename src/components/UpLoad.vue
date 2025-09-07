<script setup>
import { ref } from "vue";
import { useWebStore } from "@/stores/web.js";
import axios from "axios";

const selectedFile = ref(null);

const onFileChange = (e) => {
  selectedFile.value = e.target.files[0];
};

const uploadFile = async () => {
  if (!selectedFile.value) return;

  const formData = new FormData();
  formData.append("file", selectedFile.value);

  try {
    const res = await axios.post("http://localhost:5094/api/upload",formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    alert("上传成功: " + res.data.filePath);

    // 将文件名传嗲到pinia状态管理中的webStore
    const webStore = useWebStore();
    webStore.SetUploadFileName(res.data.filePath)
    console.log(webStore.uploadFileName)
    // window.fileName = res.data.fileName;

  } catch (err) {
    console.error(err);
    alert("上传失败");
  }
};
</script>

<template>
  <div class="upload-container">
    <h2>上传文档</h2>
    <input type="file" @change="onFileChange" />
    <el-button @click="uploadFile" :disabled="!selectedFile">上传</el-button>
  </div>

</template>

<style scoped>
  .upload-container {
    margin-bottom: 20px;
  }
</style>