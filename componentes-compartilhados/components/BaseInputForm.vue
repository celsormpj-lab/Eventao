<template>
  <div class="input-container">
    <label>{{ label }}</label>
    <textarea
      v-if="type ==='textarea'"
      class="base-input base-textarea"
      v-model="model"
      :placeholder="placeholder"
  ></textarea>
    <input
      v-else
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
.input-container {
  width:100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.input-container label {
    font-size: 14px;
    font-weight: 100;
    margin-bottom: 3px;
    font-family: Arial, Helvetica, sans-serif;
}
.base-input {
    width: 100%;
    height: 27px;
    padding: 0 12px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.50);
    border-radius: 9px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: none;
    outline: none;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
}
.base-textarea {
  min-height: 140px;
  height: 140px;
  padding: 10px 12px;
  resize: vertical;
}
</style>