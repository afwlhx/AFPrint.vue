<script setup>

</script>

<template>
  <footer>
    <span>© 2025 蔚蓝幻想打印店 | All Rights Reserved</span>
    <span>渝ICP备2025055846号</span>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;

  padding: 16px;
  background-color: #f8f9fa;
  color: #666;
  border-top: 1px solid #ddd;
}

/* ====== 移动端自适应 ====== */
@media (max-width: 768px) {
  footer {
    flex-direction: column;
  }
}

</style>