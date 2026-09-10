<template>
  <header class="header">
    <div class="logo-container">
      <img :src="logo" alt="Eventao" class="logo">
    </div>
    <nav class="navigation">
      <slot />
    </nav>  
    <div v-if="usuario" class="usuario-container">
      <button
      class="usuario-botao"
      @click="alternarMenuUsuario"
      >
       {{ usuario.charAt(0).toUpperCase() }}
    </button>
    <div v-if="menuUsuarioAberto" class="menu-usuario">
    <span class="usuario-nome">
      {{ usuario }}
    </span>
    <button class="opcao-menu">
      Preferências ⚙️
    </button>
    <BaseButtom
    class="botao-sair"
    @click="sair"
    >
    Sair
  </BaseButtom>
    </div>
    </div>
  </header>
</template>
<script setup>
 import { ref } from 'vue' 
 import {useRouter } from 'vue-router'
 import logo from '../assets/logo.png'
import BaseButtom from './BaseButtom.vue'
const router = useRouter()
const usuario = ref(localStorage.getItem('usuario'))
const menuUsuarioAberto = ref(false)
function alternarMenuUsuario() {
  menuUsuarioAberto.value = !menuUsuarioAberto.value
}
function sair() {
  localStorage.removeItem('usuario')
  localStorage.removeItem('perfil')
  localStorage.removeItem('logado')
  router.push('/login')
}
</script>
<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 1000;
    background-color: rgb(0, 183, 255);
    display: flex;
    align-items: center;
}
.logo {
  height: 50px;
}
.logo-container {
    display: flex;
    align-items: center;
}
.navigation {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 15px;
}
.usuario-container {
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
}
.usuario-botao {
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: rgb(202, 198, 161);
  font-size: 40px;
  font-weight: 600;
  justify-content: center;
  display: flex;
}
.menu-usuario {
    position: absolute;
    top: 58px;
    right: 0;
    width: 220px;
    padding: 12px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.usuario-nome {
  padding:10px;
  text-align: center;
  font-size: 26px;
  font-weight: 700;

}
.opcao-menu {
  padding: 10px;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  border-radius: 6px;
  font-size: 15px;
}
.opcao-menu:hover {
    background: rgba(0, 0, 0, 0.08);
}
.botao-sair {
  width: 100%;
}
</style>