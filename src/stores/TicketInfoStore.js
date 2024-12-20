import { defineStore } from 'pinia';

export const useTicketsStore = defineStore('tickets', {
  state: () => ({
    tickets: [{
      id: "",
      name: "",
      type: "",
      days:""
    }] 
  }),

  getters: {
    // Retorna um ticket pelo ID
    getTicketById: (state) => (id) => {
      return state.tickets.find(ticket => ticket.id === id);
    },
  },

  actions: {
    // Adiciona um novo ticket
    addTicket(newTicket) {
      const ticketExists = this.tickets.some(ticket => ticket.id === newTicket.id);

      if (ticketExists) {
        throw new Error('Já existe um ticket com esse ID');
      }

      this.tickets.push(newTicket);
    },

    // Remove um ticket pelo ID
    removeTicket(ticketId) {
      const ticketIndex = this.tickets.findIndex(ticket => ticket.id === ticketId);

      if (ticketIndex === -1) {
        throw new Error('Ticket não encontrado');
      }

      this.tickets.splice(ticketIndex, 1);
    },

    // Atualiza informações de um ticket específico
    updateTicket(updatedTicket) {
      const ticketIndex = this.tickets.findIndex(ticket => ticket.id === updatedTicket.id);

      if (ticketIndex === -1) {
        throw new Error('Ticket não encontrado');
      }

      this.tickets[ticketIndex] = { ...this.tickets[ticketIndex], ...updatedTicket };
    }
  }
});
