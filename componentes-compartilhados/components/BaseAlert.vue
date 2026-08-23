<template>
    <p
        v-if="mensagem"
        class="base-alert"
        :class="{erro: erro}"
        >
        {{ mensagem }}
    </p>
</template>
<script setup>
defineProps ({
    mensagem: {
        type: String,
        default: ''
    },
    erro: {
        type: Boolean,
        default: false
    }
})
</script>
<style scoped>
.base-alert {
  margin-top: 10px;
  text-align: center;
}

.base-alert.erro {
  color: red;
}
</style>