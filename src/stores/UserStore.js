import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [], 
    authenticatedUser: null 
  }),

  getters: {
    // Retorna um utilizador pelo nome
    getUserByName: (state) => (name) => {
      return state.users.find(user => user.name === name);
    },

    // Verifica se há um utilizador autenticado
    isAuthenticated: (state) => {
      return state.authenticatedUser !== null;
    },

    // Retorna o utilizador autenticado
    getAuthenticatedUser: (state) => {
      return state.authenticatedUser;
    }
  },

  actions: {
    // Adiciona um novo utilizador
    addUser(newUser) {
      const userExists = this.users.some(
        user => user.email === newUser.email || user.name === newUser.name
      );

      if (userExists) {
        throw new Error('Já existe um utilizador com esse nome ou email');
      }

      this.users.push(newUser);
    },

    // Remove um utilizador pelo email
    removeUser(email) {
      const userIndex = this.users.findIndex(user => user.email === email);

      if (userIndex === -1) {
        throw new Error('Utilizador não encontrado');
      }

      this.users.splice(userIndex, 1);
    },

    // Atualiza as informações de um utilizador
    updateUser(updatedUser) {
      const userIndex = this.users.findIndex(user => user.email === updatedUser.email);

      if (userIndex === -1) {
        throw new Error('Utilizador não encontrado');
      }

      this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
    },

    // Autentica um utilizador
    authenticateUser(email, password) {
      const user = this.users.find(
        user => user.email === email && user.password === password
      );

      if (!user) {
        throw new Error('Email ou password incorretos');
      }

      this.authenticatedUser = user; 
    },

    // Faz logout do utilizador
    logoutUser() {
      this.authenticatedUser = null;
    }
  }
});
