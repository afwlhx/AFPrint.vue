<script setup>
import {ref} from "vue";
import {useWebStore} from "@/stores/web.js";
import axios from "axios";

// 是否双面打印
const isDoublePrint = ref(false)

// 是否彩印
const isColorPrint = ref(false)

// 电话号
const phoneNumber = ref();

// 收货地址
const address = ref();

// 打印份数
const printNumber = ref(1);

// 导入Pinia中webStore存储
const webStore = useWebStore();


// 下单按钮事件函数
async function Order() {
  // 判断文件名是否为空
  if (webStore.uploadFileName === undefined) {
    alert("请上传文件")
    return;
  }

  // 电话号码判断 正则表达式
  const phoneReg = /^1[3456789]\d{9}$/;
  if (!phoneReg.test(phoneNumber.value)) {
    alert("请输入正确的手机号")
    return;
  }

// 正则表达式匹配纯数字
  const numbersReg = /^[0-9]*$/
  if (!numbersReg.test(printNumber.value)) {
    alert("请输入份数")
    return;
  }

  if (address.value === undefined) {
    address.value = "自提"
  }

  // axios请求获取后台链接
  axios.post(`${import.meta.env.VITE_API_BASE_URL}/order`, {
    fileName: webStore.uploadFileName,
    phoneNumber: phoneNumber.value,
    address: address.value,
    isDoublePrint: isDoublePrint.value,
    isColorPrint: isColorPrint.value,
    printNumber: printNumber.value,
    cost: 1.234,
  }).then(res => {
    alert("提交成功");
    console.log(res.data);
    window.location.reload();
  })
      .catch(err => {
        console.error(err);
        alert("提交失败");
      })
}
</script>

<template>
  <div class="order">

    <h2>下单</h2>

    打印份数：
    <t-input type="text" v-model="printNumber"/>

    下单手机号：
    <t-input type="text" v-model="phoneNumber"/>

    收货地址：
    <t-input type="text" placeholder="请输入精确地址，自提则留空" v-model="address"/>

    <div>
      彩色打印：
      <t-switch v-model="isColorPrint"/>
    </div>

    <div>
      双面打印：
      <t-switch v-model="isDoublePrint"/>
    </div>


    <!-- 下单按钮 -->
    <t-button @click="Order()">下单</t-button>
  </div>


</template>

<style scoped>
.order {
  display: flex;
  flex-direction: column;

  padding: 20px;

  gap: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>