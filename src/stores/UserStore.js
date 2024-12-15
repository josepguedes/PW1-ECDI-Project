// stores/useUsersStore.js
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: []
  }),
  
  actions: {

    addUser(newUser) {
      const userExists = this.users.some(user => user.email === newUser.email || user.name === newUser.name);
      
      if (userExists) {
        throw new Error('Já existe um utilizador com esse nome ou email');
      }
      
      this.users.push(newUser);
    },


    removeUser(email) {
      const userIndex = this.users.findIndex(user => user.email === email);
      
      if (userIndex === -1) {
        throw new Error('Utilizador não encontrado');
      }
      
      
      this.users.splice(userIndex, 1);
    }
    
  }
});
