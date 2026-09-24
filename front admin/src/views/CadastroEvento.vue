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
        erro.value= false,
        mensagem.value = resultado.mensagem
    }
    else {
        erro.value = true,
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
        <BaseForm @submit.prevent="cadastrarEvento">
            <section class="form-section">
                <h2>Informações do evento</h2>
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
            type="text"
            />
        </section>
        <section class="detalhes-evento">
            <h2>Detalhes</h2>
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
                <BaseInputForm
                v-model="qtdvagas"
                label="Quantidade de vagas"
                type="number"
                /> 
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
    padding-top: 70px;
    padding-top: 80px;
}

.cadastro-content {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
}
.cadastro-content h1 {
    text-align: center;
    margin: 0 0 30px;
    font-size: 32px;
}
.form-section {
    padding: 20px;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.15);
}
.form-section > * {
    margin-bottom: 15px;
}
.campo-duplo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
.detalhes-evento {
    margin-top: 20px;
    padding: 20px;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.15);
}

.detalhes-evento > * {
    margin-bottom: 15px;
}

BaseSidebar {}
</style>