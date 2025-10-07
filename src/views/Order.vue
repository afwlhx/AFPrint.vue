<script setup>
import {ref} from "vue";
import Upload from "@/components/Order/Upload.vue";
import {useWebStore} from "@/stores/web.js";
import axios from "axios";
import {MessagePlugin} from "tdesign-vue-next";

// 是否双面打印
let isDoublePrint = ref(false)

// 是否彩印
let isColorPrint = ref(false)

// 电话号
let phoneNumber = ref();

// 收货地址
let address = ref();

// 打印份数
let printNumber = ref(1);

// 导入Pinia中webStore存储
const webStore = useWebStore();


// 下单按钮事件函数
async function Order() {
  // 判断文件名是否为空
  if (webStore.uploadFileName === undefined) {
    await MessagePlugin.error("请上传文件")
    return;
  }

  // 电话号码判断 正则表达式
  const phoneReg = /^1[3456789]\d{9}$/;
  if (!phoneReg.test(phoneNumber.value)) {
    await MessagePlugin.error("请输入正确的手机号")
    return;
  }

// 正则表达式匹配纯数字
  const numbersReg = /^[0-9]*$/
  if (!numbersReg.test(printNumber.value)) {
    await MessagePlugin.error("请输入份数")
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
    MessagePlugin.success("提交成功")
    console.log(res.data);
    // window.location.reload();

    isDoublePrint.value = false

    isColorPrint.value = false

    phoneNumber.value = ""

    address.value = ""

    printNumber.value = 1

  })
      .catch(err => {
        console.error(err);
        MessagePlugin.error("提交失败")
      })
}
</script>

<template>
  <h1>下单</h1>
  <Upload/>

  <div>
    <label>打印份数：</label>
    <t-input type="text" size="large" v-model="printNumber"/>
  </div>

  <div>
    <label class="input-label">下单手机号：</label>
    <t-input type="text" size="large" v-model="phoneNumber"/>
  </div>

  <div>
    <label class="input-label">收货地址：</label>
    <t-input type="text" placeholder="请输入精确地址，自提则留空" size="large" v-model="address"/>
  </div>


  <label>
    彩色打印：
    <t-switch size="large" v-model="isColorPrint"/>
  </label>

  <label>
    双面打印：
    <t-switch size="large" v-model="isDoublePrint"/>
  </label>

  <!-- 下单按钮 -->
  <t-button @click="Order()" size="large">下单</t-button>
</template>
<style scoped>
</style>