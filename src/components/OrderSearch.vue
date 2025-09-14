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
  // http://localhost:5094/api/OrderSearch
  // https://print.afwlhx.top/api/OrderSearch
  axios.post(`https://print.afwlhx.top/api/OrderSearch?phoneNumber=${phoneNumber.value}`)
        .then(res => {
          // 将后端获取的数据注入到ElementPlus表格中
          tableData.value = res.data;
        })
        .catch(err => {console.log(err)})
}

// 表格响应式数据
let tableData = ref([]);




const columns = ref([
  // { colKey: 'id', title: 'ID', width: '100' },
  { colKey: 'orderId', title: '订单编号' },
  { colKey: 'orderStatus', title: '订单状态' },
  { colKey: 'phoneNumber', title: '电话号码'},
  {
    colKey: 'isDoublePrint',
    title: '是否双面打印',
    cell: (h,{ row }) => row.isDoublePrint ? '是' : '否',   // 👈 转换成字符串显示
  },
  // { colKey: 'isPay', title: '是否付款' },
  // { colKey: 'cost', title: '花费' },
  { colKey: 'orderTime', title: '下单时间' },
  { colKey: 'fileName', title: '文件名' },
]);
</script>

<template>
<h2>订单查询(手机号)</h2>
  <t-input v-model="phoneNumber"/>
  <t-button @click="GetOrder">查询</t-button>

  <t-table
      bordered
      size="small"
      hover
      stripe
      row-key="index"
      :data="tableData"
      :columns="columns"
  >
  </t-table>
</template>

<style scoped>


</style>