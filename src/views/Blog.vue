<script setup>
import { ref, computed } from "vue";
import { MessagePlugin } from "tdesign-vue-next";

const key = ref("");

// 动态生成上传地址
const uploadRequestUrl = computed(() =>
    `https://blog.afwlhx.top/api/Upload?key=${encodeURIComponent(key.value)}`
);

// 上传前验证
function beforeUpload(file) {
  if (!key.value) {
    MessagePlugin.warning("请先输入 key 再上传文件！");
    return false; // 阻止上传
  }
  return true; // 允许上传
}

// 上传结果处理
function TUploadRes(res) {
  console.log(res);
  if (res.XMLHttpRequest.status === 200) {
    MessagePlugin.success(res.message);
    return true;
  }
  else return false;
}
</script>

<template>
  <div class="container">
    <t-input
        placeholder="请输入 key"
        v-model:value="key"
        type="password"
        class="mb-2"
    />

    <t-upload
        theme="file"
        draggable
        :action="uploadRequestUrl"
        :format-response="TUploadRes"
        :before-upload="beforeUpload"
    />
  </div>
</template>

<style scoped>
.mb-2 {
  margin-bottom: 20px;
}

.container {
  margin: 40px;
}
</style>
