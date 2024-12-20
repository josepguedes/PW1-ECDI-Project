<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const handleLogin = () => {
  const validEmail = 'teste@example.com';
  const validPassword = '5525';

  if (email.value === validEmail && password.value === validPassword) {
    localStorage.setItem('isAuthenticated', true);

    const from = router.currentRoute.value.query.from || '/';
    router.push(from);
  } else {
    errorMessage.value = 'Invalid credentials. Please try again.';
  }
};
</script>

<template>
  <main class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin" class="login-form">
      <div class="form-group">
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Email"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" class="login-button">Login</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </main>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
}

.login-container {
  max-width: 900px;
  width: 100%;
  padding: 3rem;
  text-align: center;
  color: white;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 2rem;
}

input {
  width: 250px;
  padding: 1rem 0;
  border: none;
  border-bottom: 2px solid white;
  background-color: transparent;
  color: white;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-bottom: 3px solid rgba(255, 255, 255, 0.8);
}

input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.login-button {
  padding: 1rem;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  border: 0.5px solid rgb(255, 255, 255);
}

.login-button:hover {
  background-color: rgb(36, 36, 36);
  color: white;
  border: 0.5px solid white;
}

.error-message {
  color: red;
  margin-top: 1.5rem;
  font-size: 1.1rem;
}
</style>