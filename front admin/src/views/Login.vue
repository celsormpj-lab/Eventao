<template>
    <BaseHeader />
    <div class="login-container">
        <h1>Bem vindo ao Eventao</h1>
    <BaseForm @submit.prevent="Entrar">
    <BaseInput
        label="Usuário"
        type="text"
        v-model="usuario"
        />
    <baseInput
        label="Senha"
        type="password"
        v-model="senha"
        />
    <BaseButtom type="submit">
        Entrar
    </BaseButtom>    
    <BaseAlert
    :mensagem="mensagem"
    :erro="erro"
    />
    <p>
        <routerLink to="/cadastro-organizador">
            Cadastre-se como organizador!
        </routerLink>
    </p>
    </BaseForm>
    </div>
</template>
<script setup>
import BaseForm from '../../../componentes-compartilhados/components/BaseForm.vue'
import BaseInput from '../../../componentes-compartilhados/components/BaseInput.vue'
import BaseHeader from '../../../componentes-compartilhados/components/BaseHeader.vue'
import BaseButtom from '../../../componentes-compartilhados/components/BaseButtom.vue'
import BaseAlert from '../../../componentes-compartilhados/components/BaseAlert.vue'
import { ref } from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter();
const usuario = ref('');
const senha = ref('');
const mensagem = ref('');
const erro = ref(false);
const API_URL = 'http://localhost:3001';
async function Entrar(){
    const login = {
       usuario: usuario.value,
        senha: senha.value
    };
    if (!usuario.value || !senha.value) {
        mensagem.value = "preencha usuário e senha"
        erro.value = true;
        return false;
    }
    mensagem.value='';
    erro.value= false;
    try {
        const resposta = await fetch (`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(login),
        })
        const situacao = await resposta.json()
        if (!situacao.valido) {
            mensagem.value = situacao.mensagem;
            erro.value = true;
            return;
        }
        mensagem.value='';
        erro.value=false;
        localStorage.setItem("logado", "true");
        router.push("/dashboard");
    }
    catch(erro){
        console.error(erro)
    }
}
</script>
<style scoped>
.login-container {
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 0;
  padding-top: 160px;
}
</style>