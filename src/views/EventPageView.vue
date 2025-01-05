<template>
  <div class="container">
    <!-- Imagem de cabeçalho com título e subtítulo -->
    <div class="header-image">
      <div class="header-text">
        <h1>A Night of Electrifying Beats</h1>
        <p>January 01-03 2025 | KitKatClub | Berlin</p>
      </div>
    </div>

    <!-- Botão de comprar bilhetes centralizado entre as secções -->
    <div class="tickets-button-wrapper">
      <button @click="getTickets" class="tickets-button">Comprar Bilhetes</button>
    </div>

    <!-- Seção com texto e imagem (descrição do evento) -->
    <div class="content-section">
      <div class="text-part">
        <p>
          Step into the pulsating heart of electronic music at Neon Reverie, an unforgettable event that merges cutting-edge soundscapes with immersive visuals. Taking place at the iconic KitKatClub in Berlin from January 1st to 3rd, 2025, this night promises an unparalleled fusion of innovation and rhythm. Featuring world-renowned DJs and live acts, Neon Reverie celebrates the diversity of electronic music across genres like techno, trance, and deep house. Get ready to dance, connect, and lose yourself in a sensory journey like no other.
        </p>
      </div>
      <div class="image-part">
        <img src="../assets/images/1.jpg" alt="Event Image" />
      </div>
    </div>

    <!-- Título para a seção de carrossel -->
    <div class="carousel-title">
      <h2>Event Photos</h2>
    </div>

    <!-- Substituindo o carrossel antigo pelo componente Carousel.vue -->
    <carousel></carousel>
  </div>
</template>

<script>
// Importando o componente Carousel
import Carousel from '../components/Carousel.vue';

export default {
  components: {
    Carousel, // Registrando o componente Carousel
  },
  methods: {
    getTickets() {
      alert("Redirecting to ticket page...");
    },
  },
};
</script>

<style scoped>
/* Container principal com margens laterais */
.container {
  margin: 100px 48px 0 48px;
}

/* Estilos para a imagem de cabeçalho */
.header-image {
  width: 100%;
  height: 450px;
  background-image: url('../assets/images/1.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}

.header-text {
  position: absolute;
  bottom: 20px;
  left: 32px;
  color: white;
}

.header-text h1 {
  font-size: 36px;
  margin: 0;
}

.header-text p {
  font-size: 18px;
}

/* Botão de comprar bilhetes centralizado entre as secções */
.tickets-button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 30px; /* Espaço entre a imagem de cabeçalho e o botão */
  margin-bottom: 30px; /* Espaço entre o botão e a secção de descrição */
}

.tickets-button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #ff6347; /* Cor laranja */
  color: white;
  border: none;
  border-radius: 5px;
}

.tickets-button:hover {
  background-color: #e5533b; /* Cor mais escura ao passar o mouse */
}

/* Seção com texto e imagem (descrição do evento) */
.content-section {
  display: flex;
  margin-top: 20px;
}

.text-part {
  flex: 1;
  padding-right: 20px;
}

.image-part {
  flex: 1;
}

.image-part img {
  width: 100%;
  height: 650px; /* Altura fixa */
  object-fit: cover;
  border-radius: 8px;
}

/* Título da seção de carrossel */
.carousel-title {
  text-align: center;
  margin-top: 50px; /* Espaço entre o conteúdo do evento e o título */
}

.carousel-title h2 {
  font-size: 48px;
  color: #ffffff;
}
</style>
