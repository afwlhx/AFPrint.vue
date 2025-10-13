<script setup>
import {ref} from "vue";
import axios from "axios";
import { MessagePlugin } from "tdesign-vue-next";
import { useAuthStore } from "@/stores/auth.js";
import { useRouter } from "vue-router";
import http from "@/api/http.js";


const username = ref('');

const password = ref('');

const authStore = useAuthStore();

// const router = useRouter();

async function login() {
  // axios.post(`${import.meta.env.VITE_API_BASE_URL}/Auth/login`, {username: username.value, password: password.value})
  // .then((res) => {
  //   if (res.status === 200) {
  //     MessagePlugin.success("登录成功");
  //     console.log(res.data.accessToken);
  //     console.log(res.data.tokenType);
  //   }
  // })
  // .catch((err) => {
  //   if (err.status === 401) {
  //     MessagePlugin.info("账号或密码错误")
  //   }
  //   console.log(err);
  // })

  try {
    const res = await http.post('/auth/login', { username: username.value, password: password.value })

    console.log(res)
    // 将 token 写入 pinia
    authStore.accessToken = res.data.accessToken;

    location.href = '/profile'

    // await router.push('/profile')
  } catch (err) {
    await MessagePlugin.error("登录失败");
  }
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