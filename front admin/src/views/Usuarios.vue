<script setup lang="ts">
import { useRouter } from 'vue-router';
import BaseButtom from '../../../componentes-compartilhados/components/BaseButtom.vue'
import BaseHeader from '../../../componentes-compartilhados/components/BaseHeader.vue';
import BaseSidebar from '../../../componentes-compartilhados/components/BaseSidebar.vue';
import {ref, onMounted} from 'vue'

const router = useRouter()
const API_URL = 'http://localhost:3001'
const usuarios = ref([])
async function carregarUsuarios() {
    const resposta = await fetch(`${API_URL}/usuarios`)
    usuarios.value = await resposta.json()
}
onMounted(carregarUsuarios)
</script>

<template>
    <BaseHeader />
    <BaseSidebar />
    <main class="usuarios">
        <section class="usuarios-content">
            <div class="usuarios-header">
            <h1>Usuarios</h1>
        <BaseButtom @click="router.push('/cadastro-usuario')">+ Cadastrar Usuarios</BaseButtom>
        </div>
        <h2>Usuarios cadastrados:</h2>
        <div class="usuarios-lista">
            <div class="lista-cabecalho">
            <span>Usuário</span>
            <span>E-mail</span>
            <span>Perfil</span>
        </div>
            <div
            v-for="usuario in usuarios"
            :key="usuario.id"
            class="usuario-item"
        >    
        <span>{{ usuario.usuario }}</span>
        <span> {{ usuario.email }}</span>
        <span>{{ usuario.perfil }}</span>
            </div>
        </div>
        </section>
    </main>
</template>
<style scoped>
.usuarios-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.usuarios {
    margin-left: 240px;
    padding: 30px;
    padding-top: 70px;
    min-height: 90%;
    font-family: Arial, sans-serif;
}
.usuarios-content {
    width: 100%;
}
BaseSidebar{}

.usuarios-lista {
    width: 100%
}
.lista-cabecalho, 
.usuario-item {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
}
.lista-cabecalho {
    padding: 12px 20px;
    font-weight: bold;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
}
.usuario-item {
    padding: 16px 20px;
    border-bottom:1px solid rgba(0, 0, 0, 0.12);
}
.usuario-item:hover {
    background: rgba(255, 255, 255, 0.15);
}

</style>