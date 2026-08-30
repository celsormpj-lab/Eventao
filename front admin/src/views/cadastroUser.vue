<script setup lang="ts">
import BaseForm from '../../../componentes-compartilhados/components/BaseForm.vue';
import BaseHeader from '../../../componentes-compartilhados/components/BaseHeader.vue';
import BaseInput from '../../../componentes-compartilhados/components/BaseInput.vue';
import BaseInputForm from '../../../componentes-compartilhados/components/BaseInputForm.vue'
import BaseSidebar from '../../../componentes-compartilhados/components/BaseSidebar.vue';
import BaseSelect from '../../../componentes-compartilhados/components/BaseSelect.vue'
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
            v-model="nome"
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
            <BaseSelect label="Tipo">
                <option value=""> Selecione o tipo</option>
                <option value="presencial">Presencial</option>
                <option value="remoto">Remoto</option>
                <option value="Hibrido">Híbrido</option>
            </BaseSelect>
            <section class="campo-duplo">
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
                v-model="qtdadevagas"
                label="Quantidade de vagas"
                type="text"
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
    padding-top: 160px;
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