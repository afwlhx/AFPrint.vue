<script setup>
import {ref} from "vue";
import axios from "axios";

// 表格响应式数据
let tableData = ref([])

const key = ref();

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
  {
    colKey: 'isColorPrint',
    title: '是否彩色打印',
    cell: (h,{ row }) => row.isDoublePrint ? '是' : '否',   // 👈 转换成字符串显示
  },
  { colKey: 'isPay',
    title: '是否付款',
    cell: (h,{ row }) => row.isPay ? '是' : '否',
  },
  { colKey: 'cost', title: '花费' },
  { colKey: 'orderTime', title: '下单时间' },
  { colKey: 'address', title: '下单地址' },
  { colKey: 'fileName', title: '文件名' },
  {
    colKey: 'fileName',
    title: '下载',
    cell: (h, { row }) => {
      return h(
          'a',
          {
            href: `https://printapi.afwlhx.top/uploads/${row.fileName}`,
            target: '_blank',
            download: row.fileName, // 提示下载
          },
          row.fileName
      );
  },
  }
]);

function StartSearch() {
  if(key.value === undefined) {
    alert("key不能为空")
    return;
  }
axios.post(`https://printapi.afwlhx.top/api/SearchAll?key=${key.value}`)
  .then(res => {
    tableData.value = res.data;
  })
  .catch(err => {
    console.log(err)
    if(err.response.data === "key不正确")
    {
      alert("key不正确！");
    }
  });
}



</script>

<template>
  <div class="container">
    <t-space direction="vertical" size="medium">
      <h1>后台管理</h1>
      <t-input placeholder="key" v-model:value="key" type="password" />
      <t-button @click="StartSearch">检索</t-button>

      <t-table
          bordered
          size="small"
          hover
          stripe
          row-key="index"
          :data="tableData"
          :columns="columns"
      />
    </t-space>
  </div>


</template>

<style scoped>
.container {
  margin: 50px;
}

</style>