import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', {

  state: () => ({
    authenticatedUser: null,
    users: [
      { name: "admin", password: "123"},
      { name: "xavi", email: "example@gmail.com", password: "321", tickets: [], favoriteArtists: [], favoriteVenues: [], calendar: [], notificationPref: []},
    ],
  }),

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
    
    addUser(name, email, password) {
      const userExists = this.users.some(
        user => user.email === email || user.name === name
      );

      if (userExists) {
        throw new Error('Já existe um utilizador com esse nome ou email');
      }

      const newUser = {
        name: name,
        email: email,
        password: password,
        profImg: profImg,
        tickets: [],
        favoriteArtists: [],
        favoriteVenues: [],
        calendar: [],
        notificationPref: [] 
      };

      this.users.push(newUser);
    },

    removeUser(name) {
      const userIndex = this.users.findIndex(user => user.name === name);

      if (userIndex === -1) {
        throw new Error('Utilizador não encontrado');
      }

      this.users.splice(userIndex, 1);
    },

    login(email, password) {
      const user = this.users.find(
        user => user.email === email && user.password === password
      );

      if (!user) {
        throw new Error('Email ou password incorretos');
      }

      this.authenticatedUser = user; 
    },

    logout() {
      this.authenticatedUser = null;
    }
  },
  persist: true,
});
