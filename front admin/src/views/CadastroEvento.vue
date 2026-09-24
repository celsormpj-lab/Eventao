<script setup lang="ts">
import BaseForm from '../../../componentes-compartilhados/components/BaseForm.vue';
import BaseHeader from '../../../componentes-compartilhados/components/BaseHeader.vue';
import BaseInput from '../../../componentes-compartilhados/components/BaseInput.vue';
import BaseInputForm from '../../../componentes-compartilhados/components/BaseInputForm.vue'
import BaseSidebar from '../../../componentes-compartilhados/components/BaseSidebar.vue';
import BaseSelect from '../../../componentes-compartilhados/components/BaseSelect.vue'
import BaseButtom from '../../../componentes-compartilhados/components/BaseButtom.vue'
import BaseAlert from '../../../componentes-compartilhados/components/BaseAlert.vue'
import { ref } from 'vue'
const mensagem = ref ('')
const nome_evento = ref('')
const tema= ref('')
const palestrante = ref('')
const descricao = ref('')
const data = ref('')
const horario = ref('')
const tipo = ref('')
const local = ref('')
const endereco = ref('')
const qtdvagas = ref<number | null>(null)
const erro = ref(false)
const API_URL = 'http://localhost:3001'

async function cadastrarEvento() {
    if (!nome_evento.value  ||
        !tema.value ||
        !palestrante.value || 
        !descricao.value || 
        !data.value || 
        !horario.value || 
        !tipo.value ||  
        !qtdvagas.value) {
        mensagem.value = " Preencha todos os campos!";
        erro.value=true;
        return
    }
    if (tipo.value !== 'remoto' &&
        (!local.value || !endereco.value)
    ) {
        mensagem.value= 'Informe o local e o endereço do evento!';
        erro.value = true;
        return;
    }
    erro.value = false;
    mensagem.value = ('')
    const resposta = await fetch (`${API_URL}/eventos`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome_evento: nome_evento.value,
            tema: tema.value,
            palestrante: palestrante.value,
            descricao: descricao.value,
            data: data.value,
            horario: horario.value,
            tipo: tipo.value,
            local: local.value,
            endereco: endereco.value,
            qtdvagas: qtdvagas.value
        })
    })
    const resultado = await resposta.json()
    if (resposta.ok) {
        erro.value= false;
        mensagem.value = resultado.mensagem
    }
    else {
        erro.value = true;
        mensagem.value = resultado.mensagem
    }
}
</script>

<template>
    <BaseHeader />
    <BaseSidebar />
    <main class="cadastro">
        <section class="cadastro-content">
        <h1>Cadastrar evento</h1>
        <BaseForm 
        class="form-evento"
        @submit.prevent="cadastrarEvento">
            <section class="form-section">
                <h2>Informações básicas</h2>
            <BaseInputForm
            v-model="nome_evento"
            label="Nome do evento"
            type="text"
            />
            <section class="campo-duplo">
            <BaseInputForm
            v-model="tema"
            label="Tema"
            type="text"
            />
            <BaseInputForm
            v-model="palestrante"
            label="Palestrante"
            type="text"
            />
            </section>
            <BaseInputForm
            v-model="descricao"
            label="Descrição"
            type="textarea"
            />
        </section>
        <section class="form-section">
            <h2>Data e horário</h2>
            <section class="campo-duplo">
            <BaseInputForm
            v-model="data"
            label="Data"
            type="date"
            />
            <BaseInputForm
            v-model="horario"
            label="Horario"
            type="time"
            />
            </section>
        </section>
            <section  class="form-section">
            <h2>Modalidade</h2>
            <BaseSelect 
            v-model="tipo"
            label="Tipo"
            >
                <option value=""> Selecione o tipo</option>
                <option value="presencial">Presencial</option>
                <option value="remoto">Remoto</option>
                <option value="hibrido">Híbrido</option>
            </BaseSelect>
        <section
            v-if="tipo === 'presencial' || tipo ==='hibrido'"
            class="campo-duplo">
            <BaseInputForm
            v-model="local"
            label="Local"
            type="text"
            />
            <BaseInputForm
            v-model="endereco"
            label="Endereço"
            type="text"
            />
            </section>
        </section>
            <section class="form-section">
                <h2>Capacidade</h2>
                <BaseInputForm
                v-model.number="qtdvagas"
                label="Quantidade de vagas"
                type="number"
                /> 
            </section>
<section>
             <BaseButtom type="submit"> Cadastrar </BaseButtom>
             <BaseAlert
             :mensagem="mensagem"
             :erro="erro"
             />   
            </section>
        </Baseform>
        </section>
    </main>

</template>
<style scoped>
.cadastro {
    margin-left: 240px;
    padding: 80px 40px 40px;
    min-height: 100vh;
}

.cadastro-content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}
.cadastro-content h1 {
    text-align: center;
    margin: 0 0 30px;
    font-size: 32px;
}
/* Painel principal do formulário */
:deep(form) {
    padding: 30px 40px;
    border-radius: 16px;
    background: rgba(0, 0, 0, 0.15);
}
.form-section {
    padding: 5px 0 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.form-section h2 {
    margin: 0 0 15px;
    font-size: 20px;
    font-weight: 600;
}
.form-section:last-of-type {
    border-bottom: none;
    margin-bottom: 10px;
}
.campo-duplo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
/* Área do botão e alerta */
:deep(form > section:last-child) {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
/* Botão */
:deep(button) {
    min-width: 200px;
}
/* Responsividade */
@media (max-width: 800px) {
    .cadastro {
        margin-left: 0;
        padding: 80px 20px 30px;
    }
    .campo-duplo {
        grid-template-columns: 1fr;
        gap: 0;
    }
    :deep(form) {
    padding: 25px 30px;
    border-radius: 16px;
    background: rgba(0, 0, 0, 0.15);
}
}
:deep(.form-evento) {
    width: 100%;
    max-width: 1200px;
    align-items: stretch;
}
BaseSidebar {}
</style>