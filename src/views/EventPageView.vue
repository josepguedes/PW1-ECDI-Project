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
      <button @click="navigateToTickets" class="tickets-button">Comprar Bilhetes</button>
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

    <!-- Componente do carrossel -->
    <div class="carousel-wrapper">
      <carousel :images="carouselImages" />
    </div>
  </div>
</template>

<script>
// Importando o componente Carousel
import Carousel from "../components/Carousel.vue";

import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";

export default {
  components: {
    Carousel, // Registrando o componente Carousel
  },
  data() {
    return {
      // Lista de imagens para o carrossel
      carouselImages: [image1, image2, image3, image4, image5],
    };
  },
  methods: {
    // Método para redirecionar para a página de bilhetes
    navigateToTickets() {
      this.$router.push("/tickets"); // Navegar para a rota /tickets
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
  background-color: transparent; /* Fundo transparente por padrão */
  color: white;
  border: 1px solid white; /* Borda branca */
  border-radius: 5px;
  outline: none; /* Remove borda de foco padrão */
  transition: background-color 0.3s, border-color 0.3s; /* Transições suaves */
}

.tickets-button:hover {
  background-color: var(--Gray-400, #6b737a); /* Fundo ao passar o mouse */
  border-color: var(--Gray-400, #6b737a); /* Cor da borda ao passar o mouse */
  outline: none; /* Garante que não haja destaque de foco */
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

/* Wrapper para centralizar o carrossel */
.carousel-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -200px; /* Espaço entre o título e o carrossel */
}
</style>
