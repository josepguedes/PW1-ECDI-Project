<template>
  <main class="event-profile" v-if="event && !loading">
    <!-- Hero Section -->
    <section class="hero-section">
      <img
        :src="event.mainImg"
        alt="Main Event Image"
        class="hero-background"
      />
      <div class="text-overlay">
        <h1 class="event-name">{{ event.name }}</h1>
        <h2 class="event-subtitle">{{ event.desc }}</h2>
      </div>
    </section>

    <!-- Tickets Section -->
    <section class="buy-tickets">
      <button class="btn-primary">Get Tickets</button>
    </section>

    <!-- Biography Section -->
    <section class="event-bio">
      <p class="bio-text">{{ event.bio }}</p>
      <img
        :src="event.bioImg"
        alt="Event Image"
        class="event-image"
      />
    </section>

    <!-- Event Photos Section -->
    <section class="event-photos">
      <h2 class="section-title">Event Photos</h2>
      <Carousel :images="event.carouselImages" />
    </section>

    <!-- Artists Slider Section -->
    <section class="artists-slide">
      <h2 class="artists-title">Event Artists</h2>
      <Slider :artists="event.artists" />
    </section>
  </main>

  <!-- Loader or error message -->
  <div v-else>
    <p v-if="loading">Loading event...</p>
    <p v-else-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { useEventStore } from "@/stores/events";
import Carousel from "../components/Carousel.vue";
import Slider from "../components/EventArtistSlider.vue";

export default {
  name: "EventProfile",

  components: {
    Carousel,
    Slider,
  },

  data() {
    return {
      event: null, // Evento será armazenado aqui após ser carregado
      loading: true,
      error: null,
    };
  },

  methods: {
    async fetchEvent() {
      const eventStore = useEventStore();
      try {
        this.loading = true;
        this.error = null;
        const eventId = this.$route.params.eventId; // Pega o ID do evento da URL

        // Buscar o evento com o ID na store
        const fetchedEvent = eventStore.getEventById(eventId);

        if (!fetchedEvent) {
          this.error = "Evento não encontrado!";
        } else {
          // Se o evento for encontrado, armazene na variável `event`
          this.event = fetchedEvent;
        }
      } catch (err) {
        this.error = "Falha ao carregar evento: " + err.message;
      } finally {
        this.loading = false;
      }
    },
  },

  mounted() {
    // Carregar o evento assim que o componente for montado
    this.fetchEvent();
  },
};
</script>


<style scoped>
.event-profile {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 100px;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 700px;
  display: flex;
  align-items: flex-end;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.text-overlay {
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
}

.event-name {
  color: var(--Main-White);
  font: 64px Aspekta800, sans-serif;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
}

.event-subtitle {
  color: var(--gray100);
  font: 24px Aspekta400, sans-serif;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
}

/* Biography Section */
.event-bio {
  display: flex;
  gap: 128px;
  justify-content: space-between;
  align-items: center;
  /* Centraliza verticalmente os elementos */
  flex-wrap: nowrap;
  /* Impede que os itens quebrem para uma nova linha */
  margin: 0 48px;
  /* Margem lateral de 48px */
  padding: 0 96px;
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

.event-image {
  flex: 1;
  /* Garante que a imagem ocupe espaço proporcional */
  max-width: 40%;
  /* A largura se adapta ao contêiner */
  max-height: 700px;
  /* Define uma altura máxima reduzida */
  width: auto;
  /* Ajusta a largura proporcional à altura */
  height: auto;
  /* Mantém as proporções */
  border-radius: 12px;
  object-fit: cover;
  /* Garante que a imagem preencha o espaço disponível sem distorção */
}

/* Tickets Section */
.buy-tickets {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 64px 0;
}

/* Event Photos Section */
.event-photos {
  margin: 48px;
  text-align: center;
  margin-bottom: -120px;
}

.section-title {
  color: var(--Main-White);
  font: 64px Aspekta600, sans-serif;
  margin-bottom: -100px;
}

.artists-slide {
  text-align: center;
}

.artists-title {
  color: var(--Main-White);
  font: 64px Aspekta600, sans-serif;
  margin-bottom: 24px;
  margin-top: 96px;
}

</style>
