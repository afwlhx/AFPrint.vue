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
    <h1>欢迎光临蔚蓝幻想打印店！</h1>

    <h2 class="QQGroup">官方QQ群：1063923684</h2>

    <h3>请先根据单价表扫码付费后，再上传文件并下单，未付款将无法打印！</h3>

    <t-link theme="primary" hover="color" size="large" href="/cost-table"> 点击查看打印单价表 </t-link>

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
  display: flex;

  flex-direction: column;

  gap: 16px;

  margin: 60px;
}

img{
  width: 100%;

  max-width: 200px;
}

.QQGroup{
  color: red;
}

@media (max-width: 500px) {
  main{
    margin: 16px;
  }
}

@media (min-width: 500px) {
  main{
    margin: 32px;
  }
}
</style>