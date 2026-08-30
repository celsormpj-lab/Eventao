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
        <div class="usuarios-grid">
            <article
            v-for="usuario in usuarios"
            :key="usuario.id"
            class="usuario-card"
        >    
        <h3>{{ usuario.usuario }}</h3>
        <p>📧 {{ usuario.email }}</p>
        <p>👤{{ usuario.perfil }}</p>
            </article>
        </div>
        </section>
    </main>
</template>
<style scoped>
.usuarios {
    margin-left: 240px;
    padding: 30px;
    padding-top: 160px;
    min-height: 90%;
    font-family: Arial, sans-serif;
}
.usuarios-content {
    width: 100%;
}
BaseSidebar{}
.usuarios-grid {
   display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px; 
}
.usuario-card {
    padding: 20px;
    border-radius: 12px;
     background: rgba(85, 77, 77, 0.8);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(0, 0, 0, 0.15);
    color: #000;
}
.usuarios-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
article {
    padding: 20px;
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #fff;
}
</style>