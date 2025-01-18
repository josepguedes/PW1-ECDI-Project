<template>
  <article class="news-card" @click="onCardClick">
    <div class="news-image-container">
      <img loading="lazy" :src="imageSrc" class="news-image" :alt="imageAlt" />
      <time :datetime="date" class="news-date">{{ formattedDate }}</time>
      <button class="action-button" aria-label="Read more" tabindex="0">
        <MoveUpRight class="action-icon" />
      </button>
    </div>
    <div class="news-content">
      <h2 class="news-heading">{{ title }}</h2>
      <p class="news-description">{{ description }}</p>
    </div>
  </article>
</template>

<script setup>
import { MoveUpRight } from 'lucide-vue-next';  // Importando o ícone
</script>

<script>
export default {
  name: 'NewsAllCard',
  components: {
    MoveUpRight,
  },
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: 'News article featured image',
    },
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      default: () => { },
    },
  },
  computed: {
    formattedDate() {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(this.date).toLocaleDateString(undefined, options);
    },
  },
  methods: {
    onCardClick() {
      this.onClick();
    },
  },
};
</script>

<style scoped>
.news-card {
  display: flex;
  width: 100%;
  max-width: 450px;
  flex-direction: column;
  justify-content: flex-start;
  opacity: 0.8;
  transition: opacity 0.5s ease, transform 0.5s ease;
  cursor: pointer;
  margin: 0 auto;
}

.news-card:hover {
  opacity: 1;
  transform: scale(1.02);
}

.news-image-container {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  position: relative;
  min-height: 350px;
  width: 100%;
  align-items: flex-start;
  padding: 12px;
}

.news-image {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 16px;
}

.news-date {
  position: relative;
  border-radius: 8px;
  background-color: var(--gray200);
  color: var(--Main-Black, #010306);
  text-align: center;
  padding: 4px 8px;
  font: 10px Aspekta400, sans-serif;
  margin-left: 5px;
  min-height: 16px;
  z-index: 1;
  opacity: 0;
  transform: scale(1);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.news-card:hover .news-date {
  opacity: 1;
  transform: scale(1.001);
}

.action-button {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(250, 250, 250, 0.3);
  width: 65px;
  height: 65px;
  left: 50%; /* Centraliza horizontalmente */
  top: 55%; /* Posição inicial mais abaixo do centro */
  transform: translate(-50%, 0); /* Ajuste para manter no local correto */
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0; /* Invisível inicialmente */
  transition: 
    transform 0.5s ease, 
    opacity 0.5s ease, 
    background-color 0.5s ease;
}

.news-card:hover .action-button {
  opacity: 1; /* Visível ao hover */
  background-color: rgba(250, 250, 250, 0.4);
  transform: translate(-50%, -75%); /* Move para um pouco acima do centro */
}

.action-icon {
  width: 35px;
  height: 35px;
  color: var(--gray800); /* Cor do ícone */
}

.news-content {
  display: flex;
  margin-top: 32px;
  width: 100%;
  flex-direction: column;
}

.news-heading {
  color: var(--Main-White);
  font: 500 32px Aspekta500, sans-serif;
  line-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.news-description {
  color: var(--gray200);
  font: 400 20px Aspekta200, sans-serif;
  margin-top: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>
