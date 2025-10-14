<script setup>

import {ref} from "vue";
import http from "@/api/http.js";
import {MessagePlugin} from "tdesign-vue-next";

const username = ref('');

const password = ref('');

async function register() {
  if (!username.value || !password.value) {
    await MessagePlugin.error("请输入用户名或密码！")
    return
  }

  // 用户名正则
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/;

  // 密码正则（至少一个字母和一个数字）
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@#$%^&*!]{8,20}$/;

  if (!usernameRegex.test(username.value)) {
    await MessagePlugin.info("用户名要求：4–16 个字符，只能包含字母、数字、下划线，必须以字母开头")
    return
  }

  if (!passwordRegex.test(password.value)) {
    await MessagePlugin.info("密码要求：8–20 个字符，至少包含：字母 + 数字，可选包含特殊字符（如 @#$%^&*）")
    return
  }

  http.post("/Auth/register", {
    username: username.value,
    password: password.value
  }).then((res) => {
    console.log(res)
    // 将 token 写入 pinia
    // authStore.accessToken = res.data.accessToken;

    location.href = '/login'

    // 重定向到个人页
    location.href = '/profile'
  }).catch((err) => {
    if (err.response.status === 409) {
      MessagePlugin.error("注册失败：该用户名已被注册，请换一个试试吧！");
    }
    else{
      MessagePlugin.error("注册失败");
    }

  })
}
</script>

<template>
  <h1>注册</h1>

  <div>
    <label>用户名：</label>
    <t-input type="text" v-model="username" size="large" placeholder="请输入用户名"/>
  </div>

  <div>
    <label>密码：</label>
    <t-input type="password" v-model="password" size="large" placeholder="请输入密码"/>
  </div>

  <t-button @click="register" size="large">登录</t-button></template>

<style scoped>

</style>