<template>
  <header class="header">
    <div class="logo-container">
      <img :src="logo" alt="Eventao" class="logo">
    </div>
    <nav class="navigation">
      <slot />
    </nav>
  </header>
</template>
<script setup>
 import logo from '../assets/logo.png'
</script>
<style scoped>
.header {
  background-color: rgb(255, 255, 255);
  display: flex;
  height: 70px;
  padding: 10px 0;
  align-items: center;
}

.logo {
  height: 165px;
}
.navigation {
  margin-left: auto;
  display: flex;
  gap: 15px;
}
</style>