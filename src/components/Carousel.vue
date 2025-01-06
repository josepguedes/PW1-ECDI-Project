<template>
  <div class="container">
    <!-- Contém o carrossel e os controles -->
    <div class="cards">
      <slot name="images">
        <label
          v-for="(image, index) in images"
          :key="'card-' + index"
          class="card"
          :class="{
            'active': selectedIndex === index,
            'previous': isPrevious(index),
            'next': isNext(index),
            'previous-previous': isPreviousPrevious(index),
            'next-next': isNextNext(index),
          }"
        >
          <img :src="image" alt="song" />
        </label>
      </slot>
    </div>

    <div class="controls">
      <button @click="moveToPrevious" class="control-button left">
        <i class="icon">←</i>
      </button>
      <div class="dots">
        <div
          v-for="(_, index) in images"
          :key="'dot-' + index"
          :class="['dot', { active: selectedIndex === index }]"
          @click="selectImage(index)"
        ></div>
      </div>
      <button @click="moveToNext" class="control-button right">
        <i class="icon">→</i>
      </button>
    </div>
  </div>
</template>

  
<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedIndex: 0,
    };
  },
  methods: {
    isPrevious(index) {
      return index === (this.selectedIndex - 1 + this.images.length) % this.images.length;
    },
    isNext(index) {
      return index === (this.selectedIndex + 1) % this.images.length;
    },
    isPreviousPrevious(index) {
      return index === (this.selectedIndex - 2 + this.images.length) % this.images.length;
    },
    isNextNext(index) {
      return index === (this.selectedIndex + 2) % this.images.length;
    },
    moveToPrevious() {
      this.selectedIndex = (this.selectedIndex - 1 + this.images.length) % this.images.length;
    },
    moveToNext() {
      this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
    },
    selectImage(index) {
      this.selectedIndex = index;
    },
  },
  mounted() {
    this.selectedIndex = 0;
  },
};
</script>


<style scoped>

input[type="radio"] {
  display: none;
}

.container {
  width: 100%;
  height: 600px;
  position: relative;
  margin-top: 0; /* Remover margem superior excessiva */
  display: flex;
  justify-content: center;
  align-items: center; /* Centraliza o carrossel vertical e horizontalmente */
}

.cards {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
}

.card {
  position: absolute;
  width: 50%;
  height: 50%;
  transition: transform 0.5s ease;
  cursor: pointer;
  z-index: 1;
}

.card img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.card.active {
  transform: translateX(0) scale(1);
  z-index: 3;
}

.card.previous {
  transform: translateX(-30%) scale(0.9);
  z-index: 2;
}

.card.next {
  transform: translateX(30%) scale(0.9);
  z-index: 2;
}

.card.previous-previous {
  transform: translateX(-60%) scale(0.8);
  z-index: 1;
}

.card.next-next {
  transform: translateX(60%) scale(0.8);
  z-index: 1;
}

.controls {
  position: absolute;
  bottom: 15px; /* Distância reduzida entre carrossel e pontos */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
}

.control-button {
  background: none;
  border: none;
  font-size: 30px; /* Aumento no tamanho das setas */
  color: #999999;
  cursor: pointer;
  padding: 0 20px; /* Aumento do espaçamento entre as setas e os pontos */
}

.dots {
  display: flex;
  gap: 20px; /* Aumento do espaço entre os círculos */
}

.dot {
  width: 15px; /* Aumento do tamanho dos círculos */
  height: 15px;
  border-radius: 50%;
  background-color: #5d5d5d;
  transition: all 0.3s;
  cursor: pointer;
}

.dot.active {
  background-color: #007bff;
  transform: scale(1.3); /* Aumento do tamanho do círculo ativo */
}

.icon {
  font-size: 30px; /* Aumento no tamanho das setas */
}
</style>
