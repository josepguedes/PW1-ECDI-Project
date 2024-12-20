<template>
    <div class="register">
      <h2>Register</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="username">Username</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        
        <div>
          <label for="email">Email</label>
          <input type="email" v-model="email" id="email" required />
        </div>
        
        <div>
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useUsersStore } from '@/stores/UserStore'; // Importando corretamente a store do Pinia
  
  // Definindo variáveis reativas para os campos do formulário
  const username = ref('');
  const email = ref('');
  const password = ref('');
  
  // Acessando a store do Pinia
  const usersStore = useUsersStore();
  
  const handleSubmit = () => {
    // Chamando a ação da store para registrar o usuário
    usersStore.addUser(username.value, email.value, password.value);
  };
  </script>
  
  <style scoped>
  /* Estilos para o formulário de registro */
  </style>
  