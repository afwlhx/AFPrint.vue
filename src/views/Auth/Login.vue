<script setup>
import { ref } from "vue";
import { MessagePlugin } from "tdesign-vue-next";
import { useAuthStore } from "@/stores/auth.js";
import http from "@/api/http.js";

const username = ref('');

const password = ref('');

const authStore = useAuthStore();

async function login() {
  http.post("/Auth/login", {
    username: username.value,
    password: password.value
  }).then((res) => {
    console.log(res)
    // 将 token 写入 pinia
    authStore.accessToken = res.data.accessToken;

    // 重定向到个人页
    location.href = '/profile'
  }).catch((err) => {
    MessagePlugin.error("登录失败");
  })
}
</script>

<template>
  <h1>登录</h1>

  <div>
    <label>用户名：</label>
    <t-input type="text" v-model="username" size="large" placeholder="请输入用户名"/>
  </div>

  <div>
    <label>密码：</label>
    <t-input type="password" v-model="password" size="large" placeholder="请输入密码"/>
  </div>

  <t-button @click="login" size="large">登录</t-button>
</template>

<style scoped>

</style>