<script setup>
// 汉堡菜单控制
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});
</script>

<template>
  <nav>
    <div class="logo">
      <a href="/">蔚蓝幻想打印店</a>
    </div>
    <div class="menu-toggle" id="menu-toggle">
      <span></span><span></span><span></span>
    </div>
    <ul id="nav-links">
      <li><a href="/">下单</a></li>
      <li><a href="/cost-table">价格</a></li>
      <li><a href="/order-search">订单查询</a></li>
      <li><a href="/profile">我的</a></li>
      <li><a href="/admin">后台管理</a></li>
    </ul>
  </nav>
</template>

<style scoped>
/* ====== 导航栏 ====== */
nav {
  background-color: #007BFF;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 999;
}

nav .logo {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
}

/* 导航菜单 */
nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;
}

nav ul li a:hover {
  text-decoration: underline;
}

/* 汉堡按钮（移动端） */
.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.menu-toggle span {
  width: 24px;
  height: 3px;
  background: white;
  border-radius: 3px;
}

@media (max-width: 768px) {
  nav ul {
    display: none;
    flex-direction: column;
    padding: 15px !important;
    width: 94px;
    position: absolute;
    top: 60px;
    right: 4px;

    background: #007BFF;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  nav ul.show {
    display: flex;
  }


  /* 开关 */
  .menu-toggle {
    display: flex;
  }
}

</style>