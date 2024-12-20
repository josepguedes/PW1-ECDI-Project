
<template>
    <main class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="handleLogin" class="login-form">
            <div class="form-group">
                <input type="email" id="email" v-model="email" placeholder="Email" required />
            </div>
            <div class="form-group">
                <input type="password" id="password" v-model="password" placeholder="Password" required />
            </div><br>
            <button type="submit" class="login-button">Login</button>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p><br>
            <router-link to="/register">Don't have an account yet?</router-link>
        </form>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUsersStore } from '@/stores/UserStore';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();
const usersStore = useUsersStore();

const handleLogin = async () => {
    try {
        await usersStore.authenticateUser(email.value, password.value);
        localStorage.setItem('isAuthenticated', true);
        localStorage.setItem('authenticatedUser', JSON.stringify(usersStore.getAuthenticatedUser()));

        const from = router.currentRoute.value.query.from || '/';
        router.push(from); 
    } catch (error) {
        errorMessage.value = error.message; 
    }
};
</script>

<style scoped>
/* Mantém o mesmo estilo */
</style>
