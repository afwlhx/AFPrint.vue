<script setup>
import {ref} from 'vue';
import axios from "axios";
import {MessagePlugin} from "tdesign-vue-next";

const phoneNumber = ref();

// 获取订单按钮事件
function GetOrder() {
  // 判断手机号合法性
  const phoneReg = /^1[3456789]\d{9}$/;
  if (!phoneReg.test(phoneNumber.value)) {
    MessagePlugin.error("请输入正确的手机号")
    return;
  }

  // axios 获取后端订单数据
  axios.post(`${import.meta.env.VITE_API_BASE_URL}/OrderSearch?phoneNumber=${phoneNumber.value}`)
      .then(res => {
        // 将后端获取的数据注入到ElementPlus表格中
        tableData.value = res.data;
      })
      .catch(err => {
        console.log(err)
      })
}

// 表格响应式数据
let tableData = ref([]);


const columns = ref([
  {colKey: 'id', title: 'ID'},
  // { colKey: 'orderId', title: '订单编号' },
  {colKey: 'orderStatus', title: '订单状态'},
  {colKey: 'phoneNumber', title: '电话号码'},
  {colKey: 'printNumber', title: '打印份数'},
  {
    colKey: 'isDoublePrint',
    title: '是否双面打印',
    cell: (h, {row}) => row.isDoublePrint ? '是' : '否',   // 👈 转换成字符串显示
  },
  {
    colKey: 'isColorPrint',
    title: '是否彩色打印',
    cell: (h, {row}) => row.isColorPrint ? '是' : '否',   // 👈 转换成字符串显示
  },
  // { colKey: 'isPay', title: '是否付款' },
  // { colKey: 'cost', title: '花费' },
  // { colKey: 'orderTime', title: '下单时间' },
  {colKey: 'address', title: '下单地址'},

  {colKey: 'fileName', title: '文件名'},
]);
</script>

<template>
  <h1>订单查询(手机号)</h1>

  <t-input v-model="phoneNumber" size="large"/>

  <t-button @click="GetOrder" size="large">查询</t-button>

  <t-table
      bordered
      size="small"
      hover
      stripe
      table-layout="auto"
      :data="tableData"
      :columns="columns"
  />
</template>

<style scoped>
</style>