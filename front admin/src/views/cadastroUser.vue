<script setup lang="ts">
import BaseForm from '../../../componentes-compartilhados/components/BaseForm.vue';
import BaseHeader from '../../../componentes-compartilhados/components/BaseHeader.vue';
import BaseInput from '../../../componentes-compartilhados/components/BaseInput.vue';
import BaseInputForm from '../../../componentes-compartilhados/components/BaseInputForm.vue'
import BaseSidebar from '../../../componentes-compartilhados/components/BaseSidebar.vue';
import BaseSelect from '../../../componentes-compartilhados/components/BaseSelect.vue'
import {ref} from 'vue'
import BaseButtom from '../../../componentes-compartilhados/components/BaseButtom.vue';
import BaseAlert from '../../../componentes-compartilhados/components/BaseAlert.vue';
const API_URL = 'http://localhost:3001'
const usuario = ref('');
const senha = ref('');
const email= ref('');
const perfil= ref('');
const mensagem= ref('');
const confirmaSenha= ref ('');
const erro = ref(false);
async function cadastrarUsuario(){ 
    if (!usuario.value || !senha.value || !email.value || !perfil.value) {
        mensagem.value = ' Preencha todos os campos!';
        erro.value = true;
        return;
    }
    if (senha.value !== confirmaSenha.value){
    mensagem.value = 'As senhas nao coincidem!';
    erro.value = true;
    return;
}
erro.value = false;
    const resposta = await fetch (`${API_URL}/cadastro`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            usuario: usuario.value,
            senha: senha.value,
            email: email.value,
            perfil: perfil.value
        })
    })
    const resultado = await resposta.json()
    if (resposta.ok){
        mensagem.value = resultado.mensagem
    }
    else {
        mensagem.value = resultado.mensagem
        erro.value = true
    }
}
</script>

<template>
    <BaseHeader />
    <BaseSidebar />
    <main class="cadastro">
        <section class="cadastro-usuario">
        <h1>Cadastrar usuários</h1>
        <BaseForm @submit.prevent="cadastrarUsuario">
            <section class="form-section">
            <BaseInputForm
            v-model="usuario"
            label="Usuario: "
            type="text"
            />
            <BaseInputForm
            v-model="senha"
            label="Senha: "
            type="password"
            />
            <BaseInputForm
            v-model="confirmaSenha"
            label="Digite novamente a senha: "
            type="password"
            />
            <BaseInputForm
            v-model="email"
            label="E-mail: "
            type="email"
            />
            <BaseSelect v-model="perfil" label="perfil">
                <option value="admin">Administrador</option>
                <option value="organizador">Organizador</option>
                <option value="usuario">Usuario</option>  
            </BaseSelect>    
            <BaseButtom type="submit">
                Cadastrar
            </BaseButtom>
            <BaseAlert
            :mensagem="mensagem"
            :erro="erro"
            />
            </section>
        </BaseForm>
        </section>
    </main>
</template>
<style scoped>
.cadastro {
    margin-left:240px;
    padding: 60px 30px 30px;
    min-height:100vh;
    box-sizing: border-box;
}
.cadastro-usuario {
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}
</style>