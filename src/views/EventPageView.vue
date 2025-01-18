<template>
  <main class="event-profile" v-if="event && !loading">
    <!-- Hero Section -->
    <section class="hero-section">
      <img :src="event.mainImg" alt="Main Event Image" class="hero-background" />
      <div class="text-overlay">
        <h1 class="event-name">{{ event.name }}</h1>
        <h2 class="event-subtitle">{{ formattedDescription }}</h2>
      </div>
    </section>

    <!-- Tickets Section -->
    <section class="buy-tickets">
      <button class="btn-primary">Get Tickets</button>
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
import { useVenuesStore } from "@/stores/venues";
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
      event: null,
      loading: true,
      error: null,
      venuesStore: null,
      eventStore: null,
    };
  },

  created() {
    this.eventStore = useEventStore();
    this.venuesStore = useVenuesStore();
    this.fetchEvent(); // Move from mounted to created
  },

  computed: {
    formattedDescription() {
      if (!this.event) return '';

      const date = new Date(this.event.date);
      const month = date.toLocaleString('default', { month: 'long' });
      const fullDate = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });

      const venueName = this.venuesStore.getVenueById(this.event.venueId)?.name || 'Unknown Venue';

      return `${fullDate} | ${venueName} | ${this.event.location}`;
    }
  },

  methods: {
    async fetchEvent() {
      try {
        this.loading = true;
        const eventId = this.$route.params.eventId; // Changed from id to eventId
        console.log('Route params:', this.$route.params); // Debug router params
        console.log('Fetching event with ID:', eventId);

        const event = this.eventStore.getEventById(eventId);
        console.log('Events in store:', this.eventStore.events); // Debug events in store
        console.log('Found event:', event);

        if (!event) {
          this.error = 'Event not found';
          return;
        }

        this.event = event;
      } catch (error) {
        console.error('Error fetching event:', error);
        this.error = 'Failed to load event';
      } finally {
        this.loading = false;
      }
    },
  },

  mounted() {
    this.fetchEvent();
  }
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
