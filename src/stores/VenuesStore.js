import { defineStore } from 'pinia';

export const useVenuesStore = defineStore('venues', {
  state: () => ({
    venues: [] 
  }),

  getters: {
    getVenueById: (state) => (id) => {
      return state.venues.find(venue => venue.id === id);
    }
  },

  actions: {
    // Adiciona um novo local
    addVenue(venue) {
      this.venues.push(venue);
    },

    // Remove um local pelo ID
    removeVenue(id) {
      this.venues = this.venues.filter(venue => venue.id !== id);
    },

    // Atualiza informações de um local específico
    updateVenue(updatedVenue) {
      const index = this.venues.findIndex(venue => venue.id === updatedVenue.id);
      if (index !== -1) {
        this.venues[index] = updatedVenue;
      }
    },
  }
});
