import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', {

  state: () => JSON.parse(localStorage.getItem('usersState') || '{"users": [], "authenticatedUser": null}'),


  getters: {
    
    getUserByName: (state) => (name) => {
      return state.users.find(user => user.name === name);
    },

    
    isAuthenticated: (state) => {
      return state.authenticatedUser !== null;
    },

    
    getAuthenticatedUser: (state) => {
      return state.authenticatedUser;
    }
  },

  actions: {
    
    addUser(newUser) {
      const userExists = this.users.some(
        user => user.email === newUser.email || user.name === newUser.name
      );

      if (userExists) {
        throw new Error('Já existe um utilizador com esse nome ou email');
      }

      this.users.push(newUser);
    },

    // Remove um utilizador pelo email ADMIN
    removeUser(email) {
      const userIndex = this.users.findIndex(user => user.email === email);

      if (userIndex === -1) {
        throw new Error('Utilizador não encontrado');
      }

      this.users.splice(userIndex, 1);
      this.saveToLocalStorage(); // Salva no localStorage após remover
    },

    // Atualiza as informações de um utilizador
    updateUser(updatedUser) {
      const userIndex = this.users.findIndex(user => user.email === updatedUser.email);

      if (userIndex === -1) {
        throw new Error('Utilizador não encontrado');
      }

      this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
      this.saveToLocalStorage(); // Salva no localStorage após atualizar
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
      this.saveToLocalStorage(); // Salva no localStorage após autenticar
    },

    // Faz logout do utilizador
    logoutUser() {
      this.authenticatedUser = null;
    }
  },
  persist: true,
});
