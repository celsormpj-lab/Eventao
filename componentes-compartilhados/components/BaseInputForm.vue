<template>
  <div class="input-container">
    <label>{{ label }}</label>
    <input
      class="base-input"
      :type="type"
      :placeholder="placeholder"
      v-model="model"
    >
  </div>
</template>
<script setup>
defineProps({
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String
})
const model = defineModel()
</script>
<style scoped>
.input-container label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
}
.base-input {
    font-size: 14px;
    font-family: Arial, sans-serif;
}
</style>