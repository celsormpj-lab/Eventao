<template>
  <div class="select-container">
    <label>{{ label }}</label>

    <select class="base-select">
      <slot />
    </select>
  </div>
</template>

<script setup>
defineProps({
  label: String
})
</script>

<style scoped>
.base-select {
  width: 100%;
  padding: 8px;
  margin: 5px 0 10px 0;
  box-sizing: border-box;
  border-radius: 40px;
}
</style>