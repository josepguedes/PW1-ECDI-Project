// stores/useTicketsStore.js
import { defineStore } from 'pinia'

export const ticketsStore = defineStore('tickets', {
  state: () => ({
    tickets: [] 
  }),
  
  actions: {

    addTicket(newTicket) {
      const ticketExists = this.tickets.some(ticket => ticket.id === newTicket.id);  // Verificando se já existe um ticket com o mesmo ID
      
      if (ticketExists) {
        throw new Error('Já existe um ticket com esse ID');
      }
      
      this.tickets.push(newTicket);  
    },

    removeTicket(ticketId) {
      const ticketIndex = this.tickets.findIndex(ticket => ticket.id === ticketId); 
      
      if (ticketIndex === -1) {
        throw new Error('Ticket não encontrado');
      }
      
      this.tickets.splice(ticketIndex, 1);  
    }
  }
});
