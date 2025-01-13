<template>
  <form class="register-container" @submit.prevent="handleSubmit">
    <div class="register-content">
      <h1 class="register-title">Welcome</h1>
      <div class="form-content">
        <div class="form-fields">
          <div class="input-group">
            <label for="username" class="visually-hidden">Username</label>
            <input type="text" id="username" v-model="username" class="form-input" placeholder="Username" required />
          </div>
          <div class="input-group">
            <label for="email" class="visually-hidden">Email</label>
            <input type="email" id="email" v-model="email" class="form-input" placeholder="Email" required />
          </div>
          <div class="password-group">
            <label for="password" class="visually-hidden">Password</label>
            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" class="form-input"
              placeholder="Password" required />
          </div>
          <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>
        </div>
        <div class="action-section">
          <button type="submit" class="register-button">Register</button>
          <router-link to="/login" class="login-link">
            Already have an account?
            <span class="link-underline"></span>
          </router-link>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { useUsersStore } from "@/stores/user";
import { useRouter } from "vue-router";

export default {

  name: 'RegisterForm',
  data() {
    return {
      username: "",
      email: "",
      password: "",
      showPassword: false,
      errorMessage: "", // Para exibir erros no formulário
    }
  },
  setup() {
    const usersStore = useUsersStore();
    const router = useRouter();

    return { usersStore, router };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    async handleSubmit() {
      try {
        // Chama a ação para adicionar o usuário
        this.usersStore.addUser(this.username, this.email, this.password);

        // Redireciona para a página de login ou outra rota
        this.router.push("/login");
      } catch (error) {
        // Captura erros e define a mensagem de erro
        this.errorMessage = error.message;
      }
    },
  }
}
</script>

<style scoped>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
  font: 16px Aspekta400;
}

.register-container {
  background: var(--Main-Black, #010306);
  display: flex;
  padding: 0 0 111px;
  flex-direction: column;
  overflow: hidden;
  font-family: Aspekta, sans-serif;
}

.register-content {
  align-self: center;
  display: flex;
  margin-top: 95px;
  width: 312px;
  max-width: 100%;
  flex-direction: column;
}

.register-title {
  color: var(--Main-White, #fafafa);
  text-align: center;
  font: 48px Aspekta500;
  margin: 0;
}

.form-content {
  display: flex;
  margin-top: 64px;
  width: 100%;
  flex-direction: column;
}

.form-fields {
  display: flex;
  min-height: 169px;
  width: 100%;
  flex-direction: column;
  font-size: 16px;
  color: var(--Gray-400, #6b737a);
  font-weight: 400;
}

.input-group {
  margin-bottom: 32px;
}

.form-input {
  width: 100%;
  padding: 0 0 12px;
  border: none;
  border-bottom: 1px solid var(--Gray-400, #6b737a);
  background: transparent;
  color: var(--Gray-400, #6b737a);
  font-size: 16px;
  outline: none;
}

/*removed border line*/
.password-group {
  display: flex;
  padding-bottom: 12px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.password-toggle {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px; 
  font-weight: bold;
}

.action-section {
  display: flex;
  margin-top: 64px;
  width: 100%;
  flex-direction: column;
}

.register-button {
  border-radius: 12px;
  background: var(--Main-White, #fafafa);
  width: 100%;
  padding: 12px 24px;
  font: 20px Aspekta500;
  color: var(--Main-Black, #010306);;
  border: none;
  cursor: pointer;
}

.login-link {
  align-self: center;
  margin-top: 12px;
  color: var(--Gray-200, #a2aab1);
  text-decoration: none;
  font: 16px Aspekta400;
}

.link-underline {
  display: block;
  min-height: 1px;
  width: 100%;
}

@media (max-width: 991px) {
  .register-container {
    padding-bottom: 100px;
  }

  .register-content {
    margin-top: 40px;
  }

  .register-title {
    font-size: 40px;
  }

  .form-content {
    margin-top: 40px;
  }

  .action-section {
    margin-top: 40px;
  }

  .register-button {
    padding: 12px 20px;
  }
}
</style>