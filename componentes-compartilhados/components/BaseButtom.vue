<template>
  <button class="base-button"
  :type="type"
  >
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  padding: 10px 30px;
  cursor: pointer;
  background-color: rgb(7, 132, 190);
  margin-top: 0;
  margin-bottom: 0;
  font-size: 15px;
  border-radius: 8px;
  border: none;
  transition: 0.3s;
}

.base-button:hover {
  background-color: rgb(26, 89, 226);
}

.base-button:active {
  transform: scale(0.97);
}
</style>
<script setup>
defineProps ({
    type: {
        type: String,
        default: 'button'
    }
})
</script>