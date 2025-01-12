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
    
    validateImage(file) {
      const fileExtension = file.name.split('.').pop().toLowerCase();
      if (fileExtension !== 'jpg') {
        throw new Error('A imagem deve ser do tipo .jpg');
      }
    },


    addUser(name, email, password, profImg) {
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
        profImg: profImg ? profImg : 'https://www.vetsobrerodas.pt/uploads/submenus/chegada-novo-cao-a-casa[1].jpg',
        tickets: [],
        favoriteArtists: [],
        favoriteVenues: [],
        calendar: [],
        notificationPref: [] 
      };

      this.users.push(newUser);
    },


    updateUser(updatedUserData) {
      if (!this.authenticatedUser) {
        throw new Error('Nenhum utilizador autenticado');
      }
    
      const { username, email, newPassword, newProfImg } = updatedUserData;
    
      
      if (username) {
        this.authenticatedUser.name = username;
      }
    
      if (email) {
        const emailExists = this.users.some(user => user.email === email);
        if (emailExists) {
          throw new Error('Este email já está em uso');
        }
        this.authenticatedUser.email = email;
      }

      if (newPassword) {
        this.authenticatedUser.password = newPassword;
      }
    
      // Verifica se newProfImg é um arquivo ou um URL
      if (newProfImg && typeof newProfImg === 'object' && newProfImg.name) {
        this.updateProfileImage(newProfImg);
      } else if (newProfImg && typeof newProfImg === 'string') {
        this.authenticatedUser.profImg = newProfImg; 
      }
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
    },


    updateProfileImage(newProfImg) {
      if (this.authenticatedUser) {
        this.validateImage(newProfImg);
        this.authenticatedUser.profImg = newProfImg;
      } else {
        throw new Error('Nenhum utilizador autenticado');
      }
    }
  },
  persist: true,
});
