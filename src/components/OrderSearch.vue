<script setup>
import {reactive, ref} from 'vue';
import axios from "axios";

const phoneNumber = ref();

// 获取订单按钮事件
function GetOrder() {
  // 判断手机号合法性
  const phoneReg = /^1[3456789]\d{9}$/;
  if (!phoneReg.test(phoneNumber.value)) {
    alert("请输入正确的手机号")
    return;
  }

  // axios 获取后端订单数据
  axios.post(`http://localhost:5094/api/OrderSearch?phoneNumber=${phoneNumber.value}`)
        .then(res => {
          // 将后端获取的数据注入到ElementPlus表格中
          tableData.value = res.data;
        })
        .catch(err => {console.log(err)})
}

// 表格响应式数据
let tableData = ref([]);
</script>

<template>
<h2>订单查询(手机号)</h2>
  <el-input v-model="phoneNumber"/>
  <el-button @click="GetOrder">查询</el-button>

  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="Id" width="40"/>
    <el-table-column prop="orderId" label="订单Id" width="250"/>
    <el-table-column prop="orderStatus" label="订单状态" width="80"/>
    <el-table-column prop="phoneNumber" label="电话号码" width="120"/>
    <el-table-column prop="isPay" label="是否付费" width="80"/>
    <el-table-column prop="cost" label="花费(¥)" width="80"/>
    <el-table-column prop="orderTime" label="下单时间" width="180"/>
    <el-table-column prop="fileName" label="文件名" />
  </el-table>


</template>

<style scoped>


</style>