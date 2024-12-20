<template>
    <div class="register">
      <h2>Register</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <input type="text" v-model="username" id="username" placeholder="Username" required />
        </div>
        
        <div>
          <input type="email" v-model="email" id="email" placeholder="Email" required />
        </div>
        
        <div>
          <input type="password" v-model="password" id="password" placeholder="password" required />
        </div><br>
        
        <div>
          <button type="submit">Register</button>
        </div>
        <router-link to="/login">Already have an account?</router-link>
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
  