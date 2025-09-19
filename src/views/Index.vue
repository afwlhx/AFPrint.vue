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

    <h2>打印方法：</h2>

    <h3>1.根据单价页数扫码付费</h3>

    <t-link theme="primary" hover="color" size="large" href="/cost-table"> 点击查看打印单价表 </t-link>

    <h3>2.上传文件并下单</h3>

    <h3>注意：未付款将无法打印！</h3>

    <UpLoad/>
    <Order/>
    <OrderSearch/>


    <div class="qr-code-group">
      <h2>收款码:</h2>
      <img src="/images/PayQRCode/WeChatPay.png" alt="search" />
      <img src="/images/PayQRCode/Alpay.JPG" alt="search" />
    </div>
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

.qr-code-group{
  padding: 20px;

  border: 1px solid #ccc;
  border-radius: 10px;
}

@media (max-width: 500px) {
  main{
    margin: 30px;
  }
}

@media (min-width: 500px) {
  main{
    margin: 60px;
  }
}
</style>