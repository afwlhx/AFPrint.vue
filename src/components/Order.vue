<script setup>
import { ref } from "vue";
import { useWebStore } from "@/stores/web.js";
import axios from "axios";

const phoneNumber = ref();

// 导入Pinia中webStore存储
const webStore = useWebStore();


// 下单按钮事件函数
async function Order() {
  // 判断文件名是否为空
  if (webStore.uploadFileName === undefined){
    alert("请上传文件")
    return;
  }

  // 电话号码判断 正则表达式
  const phoneReg = /^1[3456789]\d{9}$/;
  if (!phoneReg.test(phoneNumber.value)){
    alert("请输入正确的手机号")
    return;
  }

  // axios请求获取后台链接
  axios.post("http://localhost:5094/api/order",{
    fileName:webStore.uploadFileName,
    phoneNumber: phoneNumber.value,
    cost:1.234
  }).then(res => {
    alert("提交成功");
    console.log(res.data);
  })
  .catch(err => {
    console.error(err);
    alert("提交失败");
  })
}
</script>

<template>
  下单手机：<el-input type="text" v-model="phoneNumber"/>
  <el-button @click="Order()" class="order_button">下单</el-button>
</template>

<style scoped>
  .order_button{
    margin-bottom: 40px;
  }
</style>