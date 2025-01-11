<template>
  <main class="artist-profile">
    <section class="hero-section" aria-label="Artist Hero Section">
      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e46e9c47a5cf5a426355e4c250a03db8aeaea35982ac490a7b5855c19fa8de6f?placeholderIfAbsent=true&apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f"
        class="hero-background" alt="Charlotte de Witte performing live" />
      <div class="artist-header">
        <h1 class="artist-name">Charlotte de<br />Witte</h1>
        <img loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c71a6743b620d006a7c99648549b45a3b8a1466c5800f44ea6850897eb32f4a?placeholderIfAbsent=true&apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f"
          class="verified-badge" alt="Verified artist badge" />
      </div>
      <div class="social-links" role="navigation" aria-label="Social Media Links">
        <a href="https://www.facebook.com/charlottedewitte" target="_blank" rel="noopener noreferrer">
          <img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/831c81c938349091e2146876e0645d3586d86fb03def6537bb794ee0ff7a7b94?placeholderIfAbsent=true&apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f"
            class="social-icon" alt="Facebook" />
        </a>
        <a href="https://twitter.com/charlottedewitte" target="_blank" rel="noopener noreferrer">
          <img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6525e131582c27018aa27e0cb734a4bbe48a79f1ce846092f2a8538a755ee030?placeholderIfAbsent=true&apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f"
            class="social-icon" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/charlottedewittemusic" target="_blank" rel="noopener noreferrer">
          <img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ccf2bb4cb874abffa5390e4c638d667d26f2c74a2824bc92943ef04e0ff94be?placeholderIfAbsent=true&apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f"
            class="social-icon" alt="Instagram" />
        </a>
      </div>
    </section>

    <section class="artist-bio" aria-label="Artist Biography">
      <p class="bio-text">
        Charlotte de Witte is a globally renowned DJ and producer hailing from
        Belgium, celebrated for her dark, powerful, and hypnotic approach to
        techno. Rising to fame in the mid-2010s, she quickly established herself
        as one of the most influential figures in the electronic music scene.
        Known for her relentless energy behind the decks, Charlotte has become a
        headliner at major festivals such as Tomorrowland, Awakenings, and Ultra
        Music Festival.
      </p>
      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba490bca2c2ae04ab10ded4e0f700b44f1b2fbbdf46891561abbefe2bf10ab1b?placeholderIfAbsent=true&apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f"
        class="artist-image" alt="Portrait of Charlotte de Witte" />
    </section>

    <section class="featured-music" aria-label="Top Tracks">
      <h2 class="section-title">Top Tracks</h2>
      <div v-if="loading" class="loading-message">Loading top tracks...</div>
      <div v-if="error" class="error-message">{{ error }}</div>
      <div v-if="topTracks && !loading && !error" class="music-grid">
        <div v-for="track in topTracks" :key="track.name" class="track-card">
          <img v-if="track.image_url" :src="track.image_url" alt="Track artwork" class="track-artwork" />
          <h3 class="track-title">{{ track.name }}</h3>
          <p class="track-album">Album: {{ track.album }}</p>
          <audio v-if="track.preview_url" :src="track.preview_url" controls></audio>
        </div>
      </div>
    </section>

    <section class="event-schedule" aria-label="Event Schedule">
      <h2 class="section-title">Artist Schedule</h2>

      <div class="schedule-day">
        <h3 class="day-title">Friday, 24th of January</h3>
        <div class="events-list">
          <article class="event-card">
            <div class="event-header">
              <h4 class="event-title">Hypnøtica opening party</h4>
              <p class="venue-name">KitKatClub</p>
              <div class="time-wrapper">
                <time class="event-time">20:00-05:00</time>
                <img loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d0b34416923d87154f70ea7e47dc585fab3d734647cc224d24dfd1438c350d9?placeholderIfAbsent=true&apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f"
                  class="event-icon" alt="Event icon" />
              </div>
            </div>
            <p class="lineup">Mischluft, Charlotte de Witte, 6ejou, Ace Ventura</p>
          </article>
        </div>
      </div>

      <div class="schedule-day">
        <h3 class="day-title">Saturday, 25th of January</h3>
        <div class="events-list">
          <article class="event-card">
            <div class="event-header">
              <h4 class="event-title">Hypnøtica opening party</h4>
              <p class="venue-name">KitKatClub</p>
              <div class="time-wrapper">
                <time class="event-time">20:00-05:00</time>
                <img loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d0b34416923d87154f70ea7e47dc585fab3d734647cc224d24dfd1438c350d9?placeholderIfAbsent=true&apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f"
                  class="event-icon" alt="Event icon" />
              </div>
            </div>
            <p class="lineup">Mischluft, Charlotte de Witte, 6ejou, Ace Ventura</p>
          </article>
        </div>
      </div>
    </section>

  </main>
</template>

<script>

import { getTop3Tracks } from "../api/spotify.js";
  
  export default {
    data() {
      return {
        topTracks: null,
        loading: true,
        error: null,
      };
    },
    methods: {
      async fetchTopTracks() {
        try {
          this.loading = true;
          this.error = null;
          this.topTracks = await getTop3Tracks("Charlotte de Witte");
        } catch (err) {
          this.error = "Failed to load top tracks: " + err.message;
        } finally {
          this.loading = false;
        }
      },
    },
    mounted() {
      this.fetchTopTracks();
    },
  };

</script>

<style scoped>
.artist-profile {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: 100px;
  margin-bottom: 100px;
}

.hero-section {
  position: relative;
  min-height: 587px;
  padding: 43px 48px;
}

.hero-background {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.artist-header {
  position: relative;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
}

.artist-name {
  color: var(--Main-White, #fafafa);
  text-transform: uppercase;
  letter-spacing: 2.56px;
  font: 64px Aspekta800, sans-serif;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
}

.verified-badge {
  width: 64px;
  object-fit: contain;
}

.social-links {
  position: relative;
  display: flex;
  margin-top: 249px;
  gap: 16px;
}

.social-icon {
  width: 65px;
  object-fit: contain;
}

.artist-bio {
  display: flex;
  gap: 100px;
  justify-content: space-between;
  align-items: center; /* Centraliza verticalmente os elementos */
  flex-wrap: nowrap; /* Impede que os itens quebrem para uma nova linha */
  margin: 128px 0;
  padding: 0 48px;
}

.bio-text {
  flex: 1; /* Garante que o texto ocupe espaço proporcional */
  max-width: 515px; /* Limita a largura máxima do texto */
  color: var(--Gray-100, #bec7ce);
  letter-spacing: 1.5px;
  font: 30px Aspekta300, sans-serif;
}

.artist-image {
  flex: 1; /* Garante que a imagem ocupe espaço proporcional */
  max-width: 550px; /* Limita a largura máxima da imagem */
  height: auto; /* Mantém as proporções */
  border-radius: 16px;
  object-fit: cover; /* Garante que a imagem preencha o espaço disponível */
}

.featured-music {
  padding: 0 47px;
}

.section-title {
  color: var(--Main-White, #fafafa);
  font: 64px Aspekta600, sans-serif;
}

.music-grid {
  display: flex;
  gap: 20px;
  margin-top: 32px;
}

.track-card {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.track-artwork {
  width: 100%;
  border-radius: 12px;
  aspect-ratio: 1;  /* Garante uma proporção de 1:1, fazendo a imagem quadrada */
  object-fit: cover; /* Garante que a imagem preencha a área sem distorcer */
}

.track-title {
  color: var(--Main-White, #fafafa);
  font: 32px Aspekta600, sans-serif;
  margin: 15px 0 17px;
}

.platform-icon {
  width: 32px;
  aspect-ratio: 0.97;
  object-fit: contain;
}

.event-schedule {
  margin-top: 137px;
}

.schedule-day {
  margin-top: 69px;
}

.day-title {
  color: var(--Main-White, #fafafa);
  font: 48px Aspekta400, sans-serif;
}

.events-list {
  margin-top: 32px;
}

.event-card {
  border-top: 1px solid var(--Gray-500, #52595f);
  border-bottom: 1px solid var(--Gray-500, #52595f);
  padding: 32px 0;
}

.event-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--Main-White, #fafafa);
  font: 24px Aspekta400, sans-serif;
}

.time-wrapper {
  display: flex;
  align-items: center;
  gap: 48px;
}

.event-icon {
  width: 28px;
  aspect-ratio: 0.97;
  object-fit: contain;
}

.lineup {
  color: var(--Gray-100, #bec7ce);
  font: 20px Aspekta350, sans-serif;
  margin-top: 12px;
}

/* Seção de Top Tracks */
.featured-music {
  padding: 0 47px;  /* Mantém o mesmo padding */
}

.section-title {
  color: var(--Main-White, #fafafa);
  font: 64px Aspekta600, sans-serif;
}

.music-grid {
  display: flex;
  gap: 20px;
  margin-top: 32px;
}

.track-card {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.track-artwork {
  width: 100%;
  border-radius: 12px;
  aspect-ratio: 1;
  object-fit: contain;
}

.track-title {
  color: var(--Main-White, #fafafa);
  font: 32px Aspekta600, sans-serif;
  margin: 36px 0 17px;
}

.platform-icon {
  width: 32px;
  aspect-ratio: 0.97;
  object-fit: contain;
}
</style>
