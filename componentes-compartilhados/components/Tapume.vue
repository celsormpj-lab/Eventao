<script setup>
import tapume from '../assets/tapume.png'
</script>

<template>
<header class="cabecalho">
  <h1>Estamos em manutenção!!!</h1>  
    <h2>Pedimos desculpas pelo transtorno!</h2>
    <p>Para a sua comodidade, estamos trabalhando em novas funções e melhorias!</p>
    <p>Retornaremos em breve, com mais funcionalidades.</p>
    </header>
    <section class="imagem">
    <img :src="tapume" alt="tapume padrao" class="tapume">
    </section>
</template>
<style scoped>
header {
    background-color: yellow;
    font-family: Arial, sans-serif;
    align-items: center;
    text-align: center;
    margin:auto; 
}
img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
}
</style>