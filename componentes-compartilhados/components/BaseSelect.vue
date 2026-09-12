<template>
  <div class="select-container">
    <label>{{ label }}</label>

    <select class="base-select"
    v-model="model"
    >
      <slot />
    </select>
  </div>
</template>

<script setup>
defineProps({
  label: String
})
const model= defineModel();
</script>

<style scoped>
.base-select {
    width: 100%;
    height: 28px;
    padding: 0 14px;
    box-sizing: border-box;
    font-size: 14px;
    font-family: Arial, sans-serif;
    border-radius: 9px;
    outline: none;
    background: rgba(255, 255, 255, 0.9);
    transition: box-shadow 0.2s, background 0.2s;
    margin-bottom: 10px;
}
.base-select:focus {
    background: white;
    box-shadow: 0 0 0 3px rgba(0, 183, 255, 0.2);
}
</style>