<template>
  <main class="artist-profile">
    <section class="hero-section" aria-label="Artist Hero Section">
      <img loading="lazy"
        :src="artistInfo.mainImg"
        class="hero-background" alt="Charlotte de Witte performing live" />
      <div class="artist-header">
        <h1 class="artist-name">{{ artistInfo.name }}</h1>


        <!-- Botão de Like com ícone Heart (Agora alinhado ao título) -->
        <button @click="toggleLike" aria-label="Like/Dislike" class="like-button">
          <Heart :class="{ liked: isLiked }" class="heart-icon" />
        </button>

      </div>

      <!-- Redes sociais no fundo da imagem -->
      <div class="social-links" role="navigation" aria-label="Social Media Links">
        <a :href="artistInfo?.socials?.youtube" target="_blank" rel="noopener noreferrer" v-if="artistInfo?.socials?.youtube">
          <img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/831c81c938349091e2146876e0645d3586d86fb03def6537bb794ee0ff7a7b94?placeholderIfAbsent=true&apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f"
            class="social-icon" alt="YouTube" />
        </a>
        <a :href="artistInfo?.socials?.spotify"
          target="_blank" rel="noopener noreferrer">
          <img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6525e131582c27018aa27e0cb734a4bbe48a79f1ce846092f2a8538a755ee030?placeholderIfAbsent=true&apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f"
            class="social-icon" alt="Twitter" />
        </a>
        <a :href="artistInfo?.socials?.instagram" target="_blank" rel="noopener noreferrer">
          <img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ccf2bb4cb874abffa5390e4c638d667d26f2c74a2824bc92943ef04e0ff94be?placeholderIfAbsent=true&apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f"
            class="social-icon" alt="Instagram" />
        </a>
      </div>
    </section>

    <section class="artist-bio" aria-label="Artist Biography">
      <p class="bio-text">{{ artistInfo.desc }}</p>
      <img loading="lazy"
        :src="artistInfo.secondaryImg"
        class="artist-image" alt="Portrait of Charlotte de Witte" />
    </section>

    <!-- Seção de Top Tracks -->
    <section class="featured-music" aria-label="Top Tracks">
      <h2 class="section-title">Top Tracks</h2>
      <div v-if="loading" class="loading-message">Loading top tracks...</div>
      <div v-if="error" class="error-message">{{ error }}</div>
      <div v-if="topTracks && !loading && !error" class="music-grid">
        <div v-for="track in topTracks" :key="track.name" class="track-card">
          <a :href="'https://open.spotify.com/track/' + track.id" target="_blank" rel="noopener noreferrer">
            <img v-if="track.image_url" :src="track.image_url" alt="Track artwork" class="track-artwork" />
            <h3 class="track-title">{{ track.name }}</h3>
          </a>
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
import { useUsersStore } from '../stores/user'; // Importando a store de usuários
import { useArtistsStore } from '../stores/artists'; // Se necessário para outras interações
import { Heart } from 'lucide-vue-next';

export default {
  components: {
    Heart,
  },
  data() {
    return {
      topTracks: null,
      loading: true,
      error: null,
      isLiked: false,  // Estado inicial do botão "Curtir"
      artistInfo: {}, // Informações do artista
    };
  },
  methods: {
    // Função para buscar as faixas principais do artista
    async fetchTopTracks() {
      const artistsStore = useArtistsStore();
      try {
        this.loading = true;
        this.error = null;
        const artistId = this.$route.params.artistId; // Remove o ":" do artistId
        // Obter as informações completas do artista com o getter
        this.artistInfo = artistsStore.getArtistById(artistId);
        this.topTracks = await artistsStore.getTop3Tracks(this.artistInfo.name);
        console.log('Artist Info:', this.artistInfo);
        console.log('Top Tracks:', this.topTracks);

        // Verificar se o artista está nos favoritos ao carregar a página
        const usersStore = useUsersStore();
        const currentUser = usersStore.getAuthenticatedUser;
        if (currentUser) {
          this.isLiked = currentUser.favoriteArtists.some(artist => artist.name === this.artistInfo.name);
        }

      } catch (err) {
        this.error = "Failed to load top tracks: " + err.message;
      } finally {
        this.loading = false;
      }
    },

    // Função para alternar o "like" no artista
    toggleLike() {
      const usersStore = useUsersStore();
      const currentUser = usersStore.getAuthenticatedUser;

      if (!currentUser) {
        // Caso não haja usuário autenticado, talvez mostrar uma mensagem ou redirecionar
        alert('You need to be logged in to like artists!');
        return;
      }

      // Alternar o estado de "like" do artista
      if (this.isLiked) {
        // Se o artista já estiver nos favoritos, removemos
        const index = currentUser.favoriteArtists.findIndex(artist => artist.name === this.artistInfo.name);
        if (index !== -1) {
          currentUser.favoriteArtists.splice(index, 1);
        }
      } else {
        // Caso contrário, adicionamos ao favorito
        currentUser.favoriteArtists.push(this.artistInfo);
      }

      // Alterar o estado do botão
      this.isLiked = !this.isLiked;

      // Persistir as mudanças
      usersStore.$patch();
    }
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
  min-height: 700px;
  padding: 48px 48px;
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
  align-items: center;
  /* Alinhamento vertical */
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

.like-button {
  background: transparent;
  border: none;
  cursor: pointer;
  color: inherit;
  /* Mantém a cor herdada do elemento pai */
  transition: transform 0.3s ease, color 0.3s ease;
  /* Transição suave para cor e escala */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  /* Aumentando o espaço ao redor do ícone */
  position: absolute;
  /* Posicionamento absoluto dentro da seção */
  top: 0;
  /* Colocado no topo da seção */
  right: 48px;
  /* Afastado um pouco da borda direita */
}

.heart-icon {
  width: 64px;
  /* Define o tamanho inicial do ícone */
  height: 64px;
  /* Define o tamanho inicial do ícone */
  transition: transform 0.3s ease, fill 0.3s ease;
  /* Transição suave para o tamanho e o preenchimento */
  stroke: #fff;
  /* Cor da borda do coração (branca inicialmente) */
  fill: transparent;
  /* Começa com o coração vazio (transparente) */
  stroke-width: 2;
  /* Largura da borda do coração */
}

.heart-icon.liked {
  fill: #fff;
  /* Preenchimento branco quando curtido */
  stroke: #fff;
  /* Mantém a borda branca quando curtido */
}

.like-button:hover .heart-icon {
  transform: scale(1.1);
  /* Aumenta o ícone um pouco ao passar o mouse */
}

.social-links {
  position: absolute;
  bottom: 48px;
  /* 48px de margem de baixo */
  left: 48px;
  /* 48px de margem da esquerda */
  display: flex;
  gap: 16px;
}

.social-icon {
  width: 75px;
  object-fit: contain;
  transition: filter 0.3s ease;
  /* Transição suave para o filtro */
}

/* Efeito de hover: ao passar o mouse, a cor fica mais clara */
.social-icon:hover {
  filter: brightness(.8);
  /* Aumenta o brilho, criando o efeito de cor mais clara */
}

.artist-bio {
  display: flex;
  gap: 75px;
  justify-content: space-between;
  align-items: center;
  /* Centraliza verticalmente os elementos */
  flex-wrap: nowrap;
  /* Impede que os itens quebrem para uma nova linha */
  margin: 128px 48px;
  /* Margem lateral de 48px */
  padding: 0;
}

.bio-text {
  flex: 1;
  /* Garante que o texto ocupe espaço proporcional */
  max-width: 900px;
  /* Aumenta a largura máxima do texto */
  color: var(--Gray-100, #bec7ce);
  letter-spacing: 1.5px;
  font: 30px Aspekta300, sans-serif;
}

.artist-image {
  flex: 1;
  /* Garante que a imagem ocupe espaço proporcional */
  max-width: 700px;
  /* Aumenta a largura máxima da imagem */
  height: auto;
  /* Mantém as proporções */
  border-radius: 16px;
  object-fit: cover;
  /* Garante que a imagem preencha o espaço disponível */
}

.featured-music {
  padding: 0 48px;
  /* Margem lateral de 48px */
}

.section-title {
  color: var(--Main-White);
  font: 600 64px Aspekta, sans-serif;
}

.music-grid {
  display: flex;
  gap: 32px;
  margin-top: 32px;
}

.track-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  opacity: 0.8;
  /* Inicialmente com opacidade 80% */
  transition: opacity 0.3s ease, transform 0.3s ease;
  /* Transições suaves para opacidade e escala */
}

.track-card:hover {
  opacity: 1;
  /* Opacidade 100% quando passar o mouse */
  transform: scale(1.01);
  /* Aumenta a escala para 1.1 quando passar o mouse */
}

.track-artwork {
  width: 100%;
  border-radius: 12px;
  aspect-ratio: 1;
  object-fit: cover;
  transition: transform 0.3s ease;
  /* Suaviza a transformação da imagem */
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
  padding: 0 48px;
  /* Margem lateral de 48px */
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

.featured-music {
  padding: 0 48px;
  /* Margem lateral de 48px */
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