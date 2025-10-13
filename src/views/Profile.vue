<template>
<!-- v-if 防止 profile 初始为 null，访问属性时报错导致渲染失败  -->
  <div v-if="profile" class="profile">
    <h1>欢迎，{{ profile.name }}</h1>

    <label>ID：{{ profile.id }}</label>

    <label>角色：{{ profile.role }}</label>

    <label>我的订单：</label>

    <t-table
        bordered
        size="small"
        hover
        stripe
        table-layout="auto"
        :data="tableData"
        :columns="columns"
    />

    <t-button @click="LoginOut" size="large">退出登录</t-button>
  </div>
  <div v-else>
    <h2>数据加载中...</h2>
  </div>
</template>

<script setup>
import http,{ clearToken } from '@/api/http.js'
import { onMounted, ref } from 'vue'
import {MessagePlugin} from "tdesign-vue-next";

const profile = ref(null)

// 生命周期函数 当打开页面时
onMounted(async () => {
  http.get('/Auth/profile')
      .then(res => {
        MessagePlugin.success("已登录！")
        profile.value = res.data

        // 将后端获取的数据注入到ElementPlus表格中
        tableData.value = res.data.orders;
      })
      .catch(err => {
        alert('未授权，请重新登录')
        clearToken()
        location.href = '/login'
      })
})

// 退出登录按钮函数事件
const LoginOut = async () => {
  clearToken()
  location.href = '/login'
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

<style scoped>
.profile {
  display: flex;
  flex-direction: column;

  gap: 20px;
}
</style>