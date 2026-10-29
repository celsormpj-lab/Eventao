<script setup lang="ts">
import { ref } from 'vue'
import BaseForm from './BaseForm.vue'
import BaseInputForm from './BaseInputForm.vue'
import BaseButtom from './BaseButtom.vue'
import BaseAlert from './BaseAlert.vue'
const props = defineProps<{
    usuarioId: number
}>()
const novaSenha = ref ('')
const ConfirmarSenha = ref ('')
const emit = defineEmits(['fechar'])
const mensagem = ref ('')
const erro = ref(false)
const API_URL = 'http://localhost:3001'
async function salvarSenha() {
    mensagem.value = ''
    erro.value = false
    if (!novaSenha.value || !ConfirmarSenha.value) {
        mensagem.value= 'Preencha os dois campos!'
        erro.value = true
        return
    }
    erro.value = false
    if (novaSenha.value !== ConfirmarSenha.value) {
        mensagem.value = 'As senhas nao coincidem!'
        erro.value = true
        return
    }
    erro.value = false
        const resposta = await fetch(`${API_URL}/usuarios/${props.usuarioId}/senha`,{
            method:'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                novaSenha: novaSenha.value
            })
        }
        )
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
    <div class="modal-overlay">
        <div class="modal-conteudo">
            <button class="botao-fechar" @click="emit('fechar')" aria-label="fechar modal">
                &times;
            </button>    
                <h2>Alterar senha</h2>
            <BaseForm @submit.prevent="salvarSenha">
                <BaseInputForm
                    v-model="novaSenha"
                    label=" Nova senha: "
                    type="password"
                    placeholder= "Digite a nova senha"
                />
                <BaseInputForm
                    v-model="ConfirmarSenha"
                    label="Confirmar nova senha: "
                    type="password"
                    placeholder="Digite novamente a senha"
                />
                <BaseAlert
                :mensagem="mensagem"
                :erro="erro"
                />
            <div class="modal-acoes">
                <BaseButtom type="submit">
                    Salvar nova senha
                </BaseButtom>
            </div> 
            </BaseForm>
        </div>   
    </div>                        
</template>
<style scoped>
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.modal-conteudo {
    position: relative;
    width: 90%;
    max-width: 420px;
    padding: 24px;
    border-radius: 12px;
    background: white;
    color: #222;
}
.modal-conteudo h2 {
    text-align: center;
    margin-top: 0;
}
.modal-acoes {
    display: flex;
    justify-content: center;
    align-self: stretch;
    width: 100%;
    box-sizing: border-box;
    margin-top: 16px;
}
.botao-fechar {
    position: absolute;
    top: 10px;
    right: 12px;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: #666;
    font-size: 28px;
    font-weight: normal;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: none;
}

.botao-fechar:hover {
    background: rgba(0, 0, 0, 0.06);
    color: #111;
}
</style>