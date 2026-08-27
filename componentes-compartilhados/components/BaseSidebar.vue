<template>
    <aside>
        <nav>
       <RouterLink to="/dashboard">
        🏠
        <span>Dashboard</span>
        </RouterLink>
        <RouterLink to="/eventos">
        📅
        <span>Eventos</span>
         </RouterLink>
         <RouterLink to="/inscricoes">
        🎟️
        <span>Inscrições</span>
         </RouterLink>
        <RouterLink to="/usuarios">
        👤
        <span>Usuários</span>
        </RouterLink>
        </nav>
    </aside>
</template>   
<script setup>
</script> 
<style scoped>
aside {
    position: fixed;
    top: 160px;
    left: 0;
    width: 240px;
    height: calc(100vh - 70px);
    z-index: 900;
    background-color: #4b83b8;
}
nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 20px 10px;
}
nav a {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 12px 15px;
    background-color: #3a3636;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    transition: background-color 0.2s;
}
nav a:hover {
    background-color: #333;
}
</style>