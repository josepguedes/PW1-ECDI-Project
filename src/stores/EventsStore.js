import { createStore } from 'vuex';

export default createStore({
  state: {
    events: []
  },
  mutations: {

    addEvent(state, event) {
      state.events.push(event);
    },
    

    removeEvent(state, eventId) {
      state.events = state.events.filter(event => event.id !== eventId);
    },
    
    updateEvent(state, updatedEvent) {
      const index = state.events.findIndex(event => event.id === updatedEvent.id);
      if (index !== -1) {
        state.events[index] = updatedEvent;
      }
    }
  },
  actions: {
    // Remover um evento
    removeEvent({ commit }, eventId) {
      commit('removeEvent', eventId);
    },
    // Atualizar um evento
    updateEvent({ commit }, updatedEvent) {
      commit('updateEvent', updatedEvent);
    }
  },
  getters: {
    allEvents: state => state.events,
    eventById: state => id => state.events.find(event => event.id === id)
  }
});
