<template>
  <main class="about-us-page" role="main">
    <section class="hero-section" aria-labelledby="festival-description">
      <h1 class="about-us-title">About Us</h1>
      <p id="festival-description" class="festival-description">
        Hypnøtica is envisioned as an immersive and transformative festival that
        serves as a beacon for the electronic music world. It combines
        cutting-edge sounds with forward-thinking education and innovation.
        Spanning three electrifying days and nights, the festival is hosted across
        Berlin's iconic venues, featuring over 100 performances.
      </p>
    </section>

    <section class="stats-section" aria-label="Festival Statistics">
      <div class="stats-container">
        <div class="stat-group">
          <div class="stat-number" data-target="100">0</div>
          <div class="stat-label">Artists</div>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat-group">
          <div class="stat-number" data-target="800">0</div>
          <div class="stat-label">Tracks</div>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat-group">
          <div class="stat-number" data-target="10">0</div>
          <div class="stat-label">Venues</div>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat-group">
          <div class="stat-number" data-target="50">0</div>
          <div class="stat-label">Events</div>
        </div>
      </div>
    </section>

    <section class="banner-section" aria-label="Festival Banner">
      <div class="carousel-container">
        <div class="carousel-track">
          <!-- First set -->
          <img src="../assets/images/1.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/2.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/3.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/4.jpg" alt="Festival image" class="carousel-image" />
          <!-- Duplicate set for seamless loop -->
          <img src="../assets/images/1.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/2.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/3.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/4.jpg" alt="Festival image" class="carousel-image" />
          <!-- Third set for safety -->
        </div>
      </div>
    </section>

    <section class="banner-section-reverse" aria-label="Festival Banner Reverse">
      <div class="carousel-container">
        <div class="carousel-track">
          <!-- First set -->
          <img src="../assets/images/1.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/2.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/3.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/4.jpg" alt="Festival image" class="carousel-image" />
          <!-- Duplicate set for seamless loop -->
          <img src="../assets/images/1.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/2.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/3.jpg" alt="Festival image" class="carousel-image" />
          <img src="../assets/images/4.jpg" alt="Festival image" class="carousel-image" />
          <!-- Third set for safety -->
        </div>
      </div>
    </section>


    <section class="content-section" aria-label="Festival Details">
      <img src="../assets/images/5.jpg" alt="Festival experience" class="content-image" loading="lazy" />
      <div class="content-wrapper">
        <p class="content-description">
          Hypnøtica is envisioned as an immersive and transformative festival
          that serves as a beacon for the electronic music world. It combines
          cutting-edge sounds with forward-thinking education and innovation.
          Spanning three electrifying days and nights, the festival is hosted
          across Berlin's iconic venues, featuring over 100 performances.
        </p>
        <button class="explore-button" aria-label="Explore the Hypnøtica Program" tabindex="0"
          @click="navigateToProgram">
          Explore the Hypnøtica Program
        </button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  mounted() {
    this.startCountdown();
    this.startCarousels();
  },
  methods: {
    goToProgram() {
      // Redireciona para o link do programa
      this.$router.push('/program');
    },
    navigateToProgram() {
      this.$router.push('/program');
    },
    startCountdown() {
      const counters = document.querySelectorAll('.stat-number');
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 1500; // 3 segundos
        const step = target / (duration / 30); // Calcula o incremento por tick (30 ms)
        const targetDigits = target.toString().length; // Número de dígitos do número final

        let count = 0;
        const interval = setInterval(() => {
          count += step;
          if (count >= target) {
            count = target;
            clearInterval(interval);
          }

          // Formata o número com zeros à esquerda, garantindo o mesmo número de dígitos
          counter.textContent = `${Math.round(count).toString().padStart(targetDigits, '0')}+`;
        }, 30);
      });
    },

    startCarousels() {
      // Carrossel Superior (movimento para a direita)
      const rowLeft = document.querySelector('.banner-section .carousel-row');
      const imagesLeft = rowLeft.querySelectorAll('.carousel-image');

      // Função para duplicar as imagens para efeito infinito
      const duplicateImagesForInfiniteLoopLeft = () => {
        const images = Array.from(imagesLeft); // Converte NodeList em Array
        images.forEach(image => {
          const clone = image.cloneNode(true);
          rowLeft.appendChild(clone); // Adiciona as imagens clonadas no final
        });
      };

      // Inicializa as imagens duplicadas antes do movimento
      duplicateImagesForInfiniteLoopLeft();

      const totalWidthLeft = rowLeft.scrollWidth;
      let currentMarginLeft = 0;

      // Função que move o carrossel para a direita
      const moveCarouselLeft = () => {
        currentMarginLeft += 1; // Movimentação suave para a direita
        rowLeft.style.transform = `translateX(${currentMarginLeft}px)`;

        // Quando o carrossel chegar ao fim, reposiciona as imagens invisivelmente
        if (currentMarginLeft >= totalWidthLeft / 2) {
          currentMarginLeft = 0; // Reinicia o carrossel no início
        }

        // Solicita a próxima animação de forma suave
        requestAnimationFrame(moveCarouselLeft);
      };

      // Inicia o movimento do carrossel
      requestAnimationFrame(moveCarouselLeft);

      // Carrossel Inferior (movimento para a esquerda)
      const rowRight = document.querySelector('.banner-section-right .carousel-row');
      const imagesRight = rowRight.querySelectorAll('.carousel-image');

      // Função para duplicar as imagens para efeito infinito
      const duplicateImagesForInfiniteLoopRight = () => {
        const images = Array.from(imagesRight); // Converte NodeList em Array
        images.forEach(image => {
          const clone = image.cloneNode(true);
          rowRight.appendChild(clone); // Adiciona as imagens clonadas no final
        });
      };

      // Inicializa as imagens duplicadas antes do movimento
      duplicateImagesForInfiniteLoopRight();

      const totalWidthRight = rowRight.scrollWidth;
      let currentMarginRight = 0;

      // Função que move o carrossel para a esquerda
      const moveCarouselRight = () => {
        currentMarginRight -= 1; // Movimentação suave para a esquerda
        rowRight.style.transform = `translateX(${currentMarginRight}px)`;

        // Quando o carrossel chegar ao fim, reposiciona as imagens invisivelmente
        if (Math.abs(currentMarginRight) >= totalWidthRight / 2) {
          currentMarginRight = 0; // Reinicia o carrossel no início
        }

        // Solicita a próxima animação de forma suave
        requestAnimationFrame(moveCarouselRight);
      };

      // Inicia o movimento do carrossel
      requestAnimationFrame(moveCarouselRight);
    },
  },
}

</script>

<style scoped>
/* Page Layout */
.about-us-page {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: 100px;
  background: var(--mainBlack);
}

/* Hero Section */
.about-us-title {
  color: var(--mainWhite);
  text-align: center;
  font: 120px Aspekta800, sans-serif;
  letter-spacing: 2px;
  margin: 0;
  padding-top: 50px;
}

.festival-description {
  color: var(--gray100);
  text-align: center;
  letter-spacing: 1.6px;
  margin: 24px auto 0;
  max-width: 948px;
  font: 32px Aspekta300, sans-serif;
}

/* Stats Section */
.stats-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  padding: 32px;
}

.stat-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.stat-divider {
  width: 2px;
  height: 64px;
  background-color: var(--gray400);
}

.stat-number {
  font: 64px Aspekta600, sans-serif;
  color: var(--mainWhite);
}

.stat-label {
  font: 24px Aspekta400, sans-serif;
  color: var(--gray100);
}

.stat-divider {
  width: 2px;
  height: 64px;
  background: var(--gray500);
}

/* Carousel Sections */
.banner-section,
.banner-section-reverse {
  margin-top: 96px;
  overflow: hidden;
  position: relative;
}

.carousel-track {
  display: flex;
  gap: 16px;
  animation: scroll 20s linear infinite;
  width: fit-content;
}

.banner-section-reverse .carousel-track {
  animation: scroll-reverse 20s linear infinite;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes scroll-reverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

/* Make sure the carousel container has overflow hidden */
.carousel-container {
  overflow: hidden;
  width: 100%;
}

.carousel-image {
  width: 275px;
  height: 375px;
  border-radius: 10px;
  object-fit: cover;
}

/* Content Section */
.content-section {
  display: flex;
  align-items: center;
  gap: 128px;
  margin: 192px 48px 98px;
}

.content-image {
  width: 541px;
  border-radius: 10px;
  aspect-ratio: 0.86;
  object-fit: cover;
}

.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content-description {
  color: var(--gray100);
  font: 32px Aspekta300, sans-serif;
  letter-spacing: 1.6px;
}

.explore-button {
  align-self: flex-start;
  margin-top: 48px;
  padding: 12px 24px;
  border-radius: 12px;
  border: 1px solid var(--mainWhite);
  background: transparent;
  color: var(--mainWhite);
  font: 20px Aspekta500, sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
}

.explore-button:hover {
  background: var(--gray400);
  border-color: var(--gray400);
}

</style>