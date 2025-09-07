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
    <UpLoad/>
    <Order/>
    <OrderSearch/>
  </main>

</template>

<style scoped>
main{
  margin: 60px;
}
</style>