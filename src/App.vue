<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

// Controle do estado do dropdown
const showMenu = ref(false);
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <!-- Seção à esquerda: marca -->
        <div class="left-section">
          <!-- Nome "Hipnotia" à esquerda -->
          <RouterLink to="/" class="brand-name">Hipnotia</RouterLink>
        </div>

        <!-- Seção do menu central com todos os botões -->
        <div class="menu-container">
          <div class="menu">
            <!-- Botão de Menu para abrir o dropdown -->
            <button @click="showMenu = !showMenu" class="menu-btn">
              <span>Menu</span>
            </button>

            <!-- Dropdown que aparece quando showMenu é verdadeiro -->
            <div v-if="showMenu" class="dropdown">
              <div class="dropdown-column">
                <h3>Festival</h3>
                <RouterLink to="/tickets">Tickets</RouterLink>
                <RouterLink to="/program/events">Program</RouterLink>
                <RouterLink to="/program/artists">Artists</RouterLink>
                <RouterLink to="/program/venues">Venues</RouterLink>
              </div>
              <div class="dropdown-column">
                <h3>Practical</h3>
                <RouterLink to="/map">Locations Map</RouterLink>
                <RouterLink to="/travel">Travel</RouterLink>
                <RouterLink to="/where-to-stay">Where to stay</RouterLink>
                <RouterLink to="/faq">FAQ</RouterLink>
              </div>
              <div class="dropdown-column">
                <h3>More</h3>
                <RouterLink to="/news">News</RouterLink>
                <RouterLink to="/contact">Contact Us</RouterLink>
                <RouterLink to="/volunteer">Volunteer</RouterLink>
                <RouterLink to="/merchandising">Merchandise</RouterLink>
                <RouterLink to="/about">About Us</RouterLink>
              </div>
            </div>

            <!-- Botões extras na seção de navegação -->
            <RouterLink to="/tickets">Tickets</RouterLink>
            <RouterLink to="/program/events">Program</RouterLink>
            <RouterLink to="/program/artists">Artists</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </div>
        </div>

        <!-- Seção à direita: Login -->
        <div class="right-section">
          <!-- Botão de Login à direita -->
          <RouterLink to="/login">
            <button class="login-btn">Login</button>
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza todo o conteúdo horizontalmente */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  justify-content: space-between; /* Distribute space between elements */
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Limita a largura máxima da navbar */
  position: relative;
}

.left-section {
  display: flex;
  align-items: center;
  margin-right: 1rem; /* Ajusta a margem do logo */
}

.menu-container {
  display: flex;
  justify-content: center; /* Centraliza o menu horizontalmente */
  align-items: center; /* Centraliza o menu verticalmente */
  flex: 1; /* Ocupa o espaço restante entre a marca e o login */
}

.menu {
  display: flex;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 0.5rem;
  position: relative;
}

.menu-btn {
  background-color: var(--color-secondary);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  margin-right: 1rem;
}

.menu a {
  margin: 0 1rem;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.263);
  border: 1px solid var(--color-border);
  padding: 1rem;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
  display: flex;
}

.dropdown-column {
  display: flex;
  flex-direction: column;
}

.dropdown-column h3 {
  margin-bottom: 0.5rem;
}

.dropdown-column a {
  margin: 0.25rem 0;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  font-size: 14px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.brand-name {
  font-size: 18px;
  font-weight: bold;
  color: var(--color-primary);
  margin-left: 0.5rem; /* Ajusta a margem esquerda do nome "Hipnotia" */
}

.login-btn {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 14px;
}

.right-section {
  display: flex;
  align-items: center;
  margin-left: 1rem; /* Ajusta a margem do botão de login */
}

@media (min-width: 1024px) {
  header {
    padding-right: calc(var(--section-gap) / 2);
  }

  .brand-name {
    font-size: 24px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .login-btn {
    margin-left: 2rem;
  }
}
</style>
