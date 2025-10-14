<script setup>
import {ref,onMounted} from "vue";
import axios from "axios";
import {Base64} from "js-base64";
import {MessagePlugin} from "tdesign-vue-next";
import http,{clearToken} from '@/api/http.js'

// 表格响应式数据
let tableData = ref([])

// key响应式变量
const key = ref();

// 表格字段定义
const columns = ref([
  {colKey: 'id', title: 'ID'},
  {colKey: 'orderId', title: '订单编号'},
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
  {
    colKey: 'isPay',
    title: '是否付款',
    cell: (h, {row}) => row.isPay ? '是' : '否',
  },
  {colKey: 'cost', title: '花费'},
  {colKey: 'orderTime', title: '下单时间'},
  {colKey: 'address', title: '下单地址'},
  // {colKey: 'fileName', title: '文件名'},
  {
    colKey: 'fileName',
    title: '文件',
    cell: (h, {row}) => {
      return h(
          'a',
          {
            href: `${import.meta.env.VITE_API_DOWNLOAD_URL}/${row.fileName}`,
            target: '_blank',
            download: row.fileName, // 提示下载
          },
          row.fileName
      );
    },
  },
  {
    colKey: 'orderStatus',
    title: "预览",
    cell: (h, {row}) => {
      // let url = `${import.meta.env.VITE_API_DOWNLOAD_URL}/${row.fileName}`; //要预览文件的访问地址
      let url = `https://printapi.afwlhx.top/uploads/${row.fileName}`; //要预览文件的访问地址

      return h(
          'a',
          {
            href: 'https://docview.afwlhx.top/onlinePreview?url=' + encodeURIComponent(Base64.encode(url)),
            target: '_blank',
          },
          "预览"
      )
    }

  }
]);

// function StartSearch() {
//   if (key.value === undefined) {
//     MessagePlugin.error("key不能为空")
//     return;
//   }
//   axios.post(`${import.meta.env.VITE_API_BASE_URL}/SearchAll?key=${key.value}`)
//       .then(res => {
//         tableData.value = res.data;
//       })
//       .catch(err => {
//         console.log(err)
//         if (err.response.data === "key不正确") {
//           MessagePlugin.error("key不正确")
//         }
//       });
// }

// 生命周期函数 当打开页面时
onMounted(async () => {
  http.post('/SearchAll')
      .then(res => {
        MessagePlugin.success("已登录！")
        console.log(res)
        // profile.value = res.data

        tableData.value = res.data
      })
      .catch(err => {
        alert('请使用管理员账户重新登录！')
        // clearToken()
        location.href = '/profile'
      })
})

</script>

<template>
  <h1>后台管理</h1>

<!--  <t-input placeholder="key" v-model:value="key" type="password" size="large"/>-->
<!--  <t-button @click="StartSearch" size="large">检索</t-button>-->

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