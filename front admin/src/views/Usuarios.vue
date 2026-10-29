<script setup lang="ts">
import { useRouter } from 'vue-router';
import BaseButtom from '../../../componentes-compartilhados/components/BaseButtom.vue'
import BaseHeader from '../../../componentes-compartilhados/components/BaseHeader.vue';
import BaseSidebar from '../../../componentes-compartilhados/components/BaseSidebar.vue';
import ModalAlterarSenha from '../../../componentes-compartilhados/components/ModalAlterarSenha.vue';
import {ref, onMounted} from 'vue'

const router = useRouter()
const menuAberto = ref<number | null>(null)
    function alternarMenu(id: number) {
        menuAberto.value = menuAberto.value===id ? null : id
    }
const API_URL = 'http://localhost:3001'
const usuarios = ref([])
async function carregarUsuarios() {
    const resposta = await fetch(`${API_URL}/usuarios`)
    usuarios.value = await resposta.json()
}
const usuarioSelecionado = ref<number | null>(null)
    function abrirModalSenha(id: number) {
        usuarioSelecionado.value = id
        menuAberto.value = null
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
            <span></span>
        </div>
            <div
            v-for="usuario in usuarios"
            :key="usuario.id"
            class="usuario-item"
        >    
        <span>{{ usuario.usuario }}</span>
        <span> {{ usuario.email }}</span>
        <span>{{ usuario.perfil }}</span>
        <div class="acoes-usuario">
            <button
            class="botao-menu"
            @click="alternarMenu(usuario.id)"
            :aria-expanded="menuAberto === usuario.id"
            aria-label="ações do usuario"
            >
                ⋮
            </button>
            <div
            v-if="menuAberto === usuario.id"
            class="menu-dropdown"
            >
            <button @click="abrirModalSenha(usuario.id)">
                Alterar senha
            </button>   
            </div>
        </div>
    </div>
</div>
        </section>
        <ModalAlterarSenha
    v-if="usuarioSelecionado !== null"
    :usuario-id="usuarioSelecionado"
    @fechar="usuarioSelecionado = null"
/>
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
    grid-template-columns: 1fr 2fr 1fr 40px;
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
.acoes-usuario {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.botao-menu {
    display: block;
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-size: 24px;
    padding: 4px 10px;
    border-radius: 6px;
}

.botao-menu:hover {
    background: rgba(128, 128, 128, 0.15);
}

.menu-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    min-width: 150px;
    background: white;
    color: #222;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 5px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    z-index: 10;
}

.menu-dropdown button {
    width: 100%;
    border: none;
    background: transparent;
    text-align: left;
    padding: 10px;
    cursor: pointer;
}
</style>