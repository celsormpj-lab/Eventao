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
.input-container {
  width: 250px;
}

.base-input {
  width: 100%;
  padding: 8px;
  margin: 5px 0 10px 0;
  box-sizing: border-box;  
  text-align:left;
  border-radius: 40px;
}
</style>