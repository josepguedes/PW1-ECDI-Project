<template>
    <section class="event-list">
      <h2 class="list-title">Upcoming Events</h2>
      <div v-for="(group, index) in eventsGroupedByDate" :key="index" class="event-group">
        <h3 class="event-date">{{ group.date }}</h3>
        <div class="event-items">
          <Program v-for="event in group.events" :key="event.id" :event="event" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
import Program from "@/components/ProgramSection.vue";
import { useProgramStore } from '@/stores/program';
  
  export default {
    name: 'EventList',
    components: {
        Program,
    },
    data() {
      return {
        eventsGroupedByDate: [],
      };
    },
    async created() {
      const programStore = useProgramStore();
      this.eventsGroupedByDate = await programStore.fetchAllPrograms();
    },
  };
  </script>
  
  <style scoped>
  .event-list {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  
  .list-title {
    font-size: 28px;
    font-weight: bold;
    color: var(--Main-White, #fafafa);
  }
  
  .event-group {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  
  .event-date {
    font-size: 22px;
    font-weight: bold;
    color: var(--Gray-300, #a3abb2);
    margin-bottom: 16px;
  }
  
  .event-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  </style>
  