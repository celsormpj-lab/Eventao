<script setup lang="ts">
import BaseHeader from '../../../componentes-compartilhados/components/BaseHeader.vue';
import BaseSidebar from '../../../componentes-compartilhados/components/BaseSidebar.vue';
</script>

<template>
    <BaseHeader />
    <BaseSidebar />
    <main class="dashboard">
        <section class="dashboard-content">
        <h1>Dashboard</h1>
        <p>Bem vindo ao Eventao</p>
        </section>
    </main>

</template>
<style scoped>
.dashboard {
    min-height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
     font-family: Arial, sans-serif;
}

.dashboard-content {
    text-align: center;
}
BaseSidebar {}
</style>