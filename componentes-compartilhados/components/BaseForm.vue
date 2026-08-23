<template>
  <form class="base-form">
    <slot />
  </form>
</template>

<style scoped>
.base-form {
  padding: 20px;
  width: 350px;
  margin: auto;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
</style>