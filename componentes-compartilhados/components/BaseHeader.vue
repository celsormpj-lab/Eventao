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
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    z-index: 1000;
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