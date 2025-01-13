<template>
    <section class="artist-showcase">
      <div
        class="artist-grid"
        ref="artistGrid"
        @mousedown="startDrag"
        @mousemove="drag"
        @mouseup="stopDrag"
        @mouseleave="stopDrag"
      >
        <article
          v-for="(artist, index) in artists"
          :key="artist.id"
          class="artist-card"
          :class="['artist-card-item', artist.customClass, { 'hover': hoveredIndex === index }]"
          @mouseover="hoveredIndex = index"
          @mouseleave="hoveredIndex = null"
        >
          <div class="artist-click-area">
            <img
              :src="artist.imageUrl"
              :alt="artist.name"
              loading="lazy"
              class="artist-image"
              @click="navigateToArtistPage(artist.id)"
            />
          </div>
          <h2 class="artist-name">{{ artist.name }}</h2>
          <p v-show="hoveredIndex === index" class="artist-description">{{ artist.description }}</p>
        </article>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ArtistSlideshow',
    data() {
      return {
        artists: [
          {
            id: 1,
            name: 'Mischluft',
            description: 'A techno producer known for deep, atmospheric soundscapes...',
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f41815935a2865f756ce6f27b1d1f012a889a9e93f93c68137240c39a09291db?apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f&',
            customClass: ''
          },
          {
            id: 2,
            name: 'Charlotte de Witte',
            description: 'Belgian DJ famous for dark, hypnotic beats...',
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/970f8cbbe5563efde3c0d2e76a99e772c87c7e35ddcef8a33e70bd4f557af47e?apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f&',
            customClass: ''
          },
          {
            id: 3,
            name: '6ejou',
            description: 'An emerging techno talent...',
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bed2c0806d2054126ccb9fc02a9c171d3d897a8f778a0b7efa2ec1b6dd790fee?apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f&',
            customClass: 'artist-card-featured'
          },
          {
            id: 4,
            name: 'Ace Ventura',
            description: 'Psychedelic techno producer...',
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/970f8cbbe5563efde3c0d2e76a99e772c87c7e35ddcef8a33e70bd4f557af47e?apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f&',
            customClass: 'artist-card-highlight'
          },
          {
            id: 5,
            name: 'Karla Blum',
            description: 'German DJ known for energetic beats...',
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/970f8cbbe5563efde3c0d2e76a99e772c87c7e35ddcef8a33e70bd4f557af47e?apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f&',
            customClass: ''
          },
          {
            id: 6,
            name: 'Space 92',
            description: 'French producer who combines heavy bass...',
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/970f8cbbe5563efde3c0d2e76a99e772c87c7e35ddcef8a33e70bd4f557af47e?apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f&',
            customClass: ''
          },
          {
            id: 7,
            name: 'Lilly Palmer',
            description: 'DJ and producer blending minimalistic beats...',
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/970f8cbbe5563efde3c0d2e76a99e772c87c7e35ddcef8a33e70bd4f557af47e?apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f&',
            customClass: ''
          },
          {
            id: 8,
            name: 'Rødhåd',
            description: 'Master of deep, atmospheric techno...',
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/970f8cbbe5563efde3c0d2e76a99e772c87c7e35ddcef8a33e70bd4f557af47e?apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f&',
            customClass: 'artist-card-special'
          },
          {
            id: 9,
            name: 'Oxidaksi',
            description: 'Dynamic duo known for high-energy...',
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/970f8cbbe5563efde3c0d2e76a99e772c87c7e35ddcef8a33e70bd4f557af47e?apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f&',
            customClass: 'artist-card-end'
          }
        ],
        hoveredIndex: null, // Armazena o índice do artista com o mouse sobre
        isDragging: false, // Controle de estado do arrasto
        startX: 0, // Posição inicial do mouse
        scrollLeft: 0, // Posição inicial do carrossel
      };
    },
    methods: {
      startDrag(event) {
        this.isDragging = true;
        this.startX = event.pageX - this.$refs.artistGrid.offsetLeft;
        this.scrollLeft = this.$refs.artistGrid.scrollLeft;
      },
      drag(event) {
        if (!this.isDragging) return;
        const x = event.pageX - this.$refs.artistGrid.offsetLeft;
        const walk = (x - this.startX) * 2; // Multiplicador para aumentar a velocidade do arrasto
        this.$refs.artistGrid.scrollLeft = this.scrollLeft - walk;
      },
      stopDrag() {
        this.isDragging = false;
      },
      navigateToArtistPage(artistId) {
        this.$router.push(`/artist/${artistId}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .artist-showcase {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
    justify-content: center;
    padding: 10px 32px;
  }
  
  .artist-grid {
    display: flex;
    gap: 32px;
    padding-top: 25px;
    width: 100%;
    max-width: 100%;
    overflow: hidden; /* Não permite que o conteúdo ultrapasse os limites da div */
    cursor: grab;
  }
  
  .artist-grid:active {
    cursor: grabbing;
  }
  
  .artist-card {
    display: flex;
    height: 448px;
    padding: 16px 0 0;
    flex-direction: column;
    justify-content: flex-start;
    flex: 0 0 auto;
    transition: transform 0.3s ease-out;
  }
  
  .artist-card-item {
    transition: transform 0.3s ease-out;
    width: 220px; /* Ajuste da largura do item para encaixar todos na linha */
    min-width: 180px;
    height: 448px;
    user-select: none;
    pointer-events: all;
  }
  
  .artist-card-item.hover {
    transform: scale(1.1);
  }
  
  .artist-click-area {
    cursor: pointer;
  }
  
  .artist-image {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 190px;
    border-radius: 50%;
    align-self: center;
    max-width: 100%;
  }
  
  .artist-name {
    color: var(--Main-White);
    margin-top: 16px;
    font: 36px Aspekta500, sans-serif;
    transition: color 0.3s ease-out;
  }
  
  .artist-name:hover {
    color: var(--Primary-Accent);
  }
  
  .artist-description {
    color: var(--Gray-200, #a2aab1);
    font: 20px Aspekta300, sans-serif;
    margin-top: 16px;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
  }
  
  .artist-card-item.hover .artist-description {
    opacity: 1;
  }
  
  .artist-card-featured,
  .artist-card-highlight,
  .artist-card-special {
    min-height: 448px;
    padding: 15px 0;
  }
  
  .artist-card-end {
    z-index: 10;
    margin-right: -1100px;
    min-height: 448px;
    padding: 15px 0;
  }
  </style>
  