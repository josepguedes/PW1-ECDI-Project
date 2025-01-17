<template>
  <article class="event-card">
    <div class="event-header">
      <h4 class="event-title" @click="navigateToEvent">{{ eventTitle }}</h4>
      <p class="venue-name">{{ venue }}</p>
      <div class="time-wrapper">
        <time class="event-time">{{ eventTime }}</time>
        <button @click.stop="toggleIcon" class="icon-button" :disabled="!isLoggedIn">
          <CalendarPlus v-if="!clicked && isLoggedIn" class="event-icon" />
          <CalendarCheck v-if="clicked && isLoggedIn" class="event-icon" />
          <!-- Sempre mostra o ícone de adicionar, mas ele não muda se não estiver logado -->
          <CalendarPlus v-if="!isLoggedIn" class="event-icon" />
        </button>
      </div>
    </div>
    <p class="lineup">{{ lineup }}</p>
  </article>
</template>

<script>
import { useRouter } from 'vue-router';
import { useUsersStore } from "../stores/user";
import { CalendarPlus, CalendarCheck } from 'lucide-vue-next';

export default {
  components: {
    CalendarPlus,
    CalendarCheck,
  },
  props: {
    eventId: {
      type: String,
      required: true,
    },
    eventTitle: String,
    venue: String,
    eventTime: String,
    lineup: String,
  },
  data() {
    return {
      clicked: false, // O estado inicial será determinado na montagem
    };
  },
  setup(props) {
    const router = useRouter();
    return { router, eventId: props.eventId };
  },
  computed: {
    // Computa se o evento já está no calendário do usuário
    isEventInCalendar() {
      const usersStore = useUsersStore();
      const currentUser = usersStore.authenticatedUser;
      return currentUser ? currentUser.calendar.includes(this.eventId) : false;
    },
    // Computa se o usuário está logado
    isLoggedIn() {
      const usersStore = useUsersStore();
      return usersStore.authenticatedUser !== null;
    }
  },
  watch: {
    // Reage a mudanças no calendário do usuário
    isEventInCalendar(newValue) {
      this.clicked = newValue; // Atualiza o estado do ícone
    }
  },
  mounted() {
    // Inicializa o estado `clicked` baseado no calendário
    this.clicked = this.isEventInCalendar;
  },
  methods: {
    navigateToEvent() {
      this.router.push(`/event/${this.eventId}`);
    },
    toggleIcon() {
      if (!this.isLoggedIn) {
        // Alerta só aparece no clique, não no carregamento do componente
        alert("Você precisa estar logado para adicionar eventos ao calendário!");
        return; // Não faz nada se o usuário não estiver logado
      }

      this.clicked = !this.clicked; // Alterna entre adicionar e remover
      if (this.clicked) {
        this.addToCalendar();
      } else {
        this.removeFromCalendar();
      }
    },
    addToCalendar() {
      const usersStore = useUsersStore();
      const currentUser = usersStore.authenticatedUser;
      if (currentUser) {
        usersStore.addEventToCalendar(this.eventId);
      }
    },
    removeFromCalendar() {
      const usersStore = useUsersStore();
      const currentUser = usersStore.authenticatedUser;
      if (currentUser) {
        usersStore.removeEventFromCalendar(this.eventId);
      }
    },
  }
};
</script>

<style scoped>
.event-card {
  border-top: 1px solid var(--Gray-500, #52595f);
  border-bottom: 1px solid var(--Gray-500, #52595f);
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.event-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--Main-White, #fafafa);
  font: 24px Aspekta300, sans-serif;
}

.event-title {
  cursor: pointer; /* Apenas o título será clicável */
  margin: 0;
}

.venue-name {
  text-align: right; /* Alinha o nome do local à direita */
  flex-shrink: 0; /* Impede que o elemento se redimensione */
  width: 150px; /* Define uma largura fixa para alinhamento */
  color: var(--Gray-100, #bec7ce);
}

.time-wrapper {
  display: flex;
  align-items: center;
  gap: 48px;
}

/* Estilo do botão para o ícone */
.icon-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

/* Estilo do ícone */
.event-icon {
  width: 36px;
  height: 36px;
  color: var(--Gray-100, #bec7ce); /* Cor inicial */
  transition: all 0.3s ease; /* Transição suave */
}

/* Mudança de cor e transformação no hover */
.event-icon:hover {
  color: var(--Main-White, #fafafa); /* Cor ao passar o mouse */
  transform: scale(1.1); /* Aumento do ícone */
}

.lineup {
  color: var(--Gray-100, #bec7ce);
  font: 20px Aspekta350, sans-serif;
  margin-top: 12px;
}
</style>
