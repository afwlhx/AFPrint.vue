<script setup>
  import Header from '@/components/Layout/Header.vue'
  import Footer from '@/components/Layout/Footer.vue'
</script>

<template>
  <Header/>

  <div class="app-container">
    <div class="container">
      <router-view />
    </div>
  </div>

  <Footer/>
</template>

<style>
/* ====== 居中容器 ====== */
.app-container {
  flex: 1; /* 关键：让内容区自动填充剩余空间 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ====== 主内容容器 ====== */
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;

  max-width: 600px;
  width: 100%;
  margin: 50px 0;
  padding: 30px;

  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #007BFF;
}

label {
  font-weight: 600;
}

/* ====== 移动端自适应 ====== */
@media (max-width: 768px) {
  .app-container{
    padding: 0 10px;
  }

  .container {
    margin: 30px 0;
    padding: 20px;
    border-radius: 15px;
  }
}

</style>
