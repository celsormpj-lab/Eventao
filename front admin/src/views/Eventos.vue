<script setup lang="ts">
import { useRouter } from 'vue-router';
import BaseButtom from '../../../componentes-compartilhados/components/BaseButtom.vue'
import BaseHeader from '../../../componentes-compartilhados/components/BaseHeader.vue';
import BaseSidebar from '../../../componentes-compartilhados/components/BaseSidebar.vue';
import {ref, onMounted} from 'vue'

const router = useRouter()
const API_URL = 'http://localhost:3001'
const eventos = ref([])
async function carregarEventos() {
    const resposta = await fetch(`${API_URL}/eventos`,)
    eventos.value = await resposta.json()
}
onMounted(carregarEventos)
</script>

<template>
    <BaseHeader />
    <BaseSidebar />
    <main class="eventos">
        <section class="eventos-content">
            <div class="eventos-header">
        <h1>Eventos</h1>
        <BaseButtom @click="router.push('/cadastro-eventos')">+ Cadastrar eventos</BaseButtom>
        </div>
        <h2>Eventos cadastrados:</h2>
        <div class="eventos-grid">
            <article
            v-for="evento in eventos"
            :key="evento-id"
            class=""evento-card
        >    
        <h3>{{ evento.nome }}</h3>
        <p>📅 {{ evento.data }}</p>
                <p>📍 {{ evento.local }}</p>
                <p>🌐 {{ evento.tipo }}</p>
                <p>👤 {{ evento.palestrante }}</p>
                <p>🎯 {{ evento.tema }}</p>
                <p>🪑 {{ evento.qtdadevagas }} vagas</p>
                <button>Ver evento</button>
                </article>
        </div>
        </section>
    </main>

</template>
<style scoped>
.eventos {
    margin-left: 240px;
    padding: 30px;
    min-height: 90%;
    font-family: Arial, sans-serif;
    padding-top: 80px;
}

.dashboard-content {
    text-align: center;
}
BaseSidebar {}
.eventos-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.evento-card {
    padding: 20px;
    border-radius: 12px;

    background-color: rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: white;
}
.evento-card {
    padding: 20px;
    border-radius: 12px;
    background: rgba(27, 26, 26, 0.12);
}
article {
    padding: 20px;
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #fff;
}
.eventos-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

</style>