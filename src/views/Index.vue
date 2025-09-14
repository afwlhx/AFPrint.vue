<script setup>
import Header from '@/components/Header.vue';
import UpLoad from '@/components/UpLoad.vue';
import Order from '@/components/Order.vue';
import OrderSearch from "@/components/OrderSearch.vue";
</script>

<template>

  <header>
    <Header/>
  </header>

  <main>
    <t-space direction="vertical" size="medium">
      <h1>欢迎光临蔚蓝幻想打印店！</h1>
      <h3>请先根据单价表扫码付费后，再上传文件并下单，未付款将无法打印！</h3>
      <t-link theme="primary" hover="color" size="large" href="/cost-table"> 打印单价表 </t-link>
    </t-space>

    <UpLoad/>
    <Order/>
    <OrderSearch/>

    <h2>收款码:</h2>
    <img src="/images/PayQRCode/WeChatPay.png" alt="search" />
    <img src="/images/PayQRCode/Alpay.JPG" alt="search" />
  </main>

</template>

<style scoped>
main{
  margin: 60px;
}

img{
  width: 100%;

  max-width: 200px;
}
</style>