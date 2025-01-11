import { defineStore } from 'pinia';

export const useArtistsStore = defineStore('artists', {
  state: () => ({
    artists: [{
      id: "",
      name: "",
      desc: "",
      img: "",
      social: ""
    }] 
  }),

  getters: {
    // Retorna um artista pelo ID
    getArtistById: (state) => (id) => {
      return state.artists.find(artist => artist.id === id);
    }
  },

  actions: {
    // Adiciona um novo artista
    addArtist(id, name, desc, img, social) {
      const artistExists = this.artists.some(artist => artist === artist.name);

      if (artistExists) {
        throw new Error('Já existe um artista com esse nome');
      }

      const newArtist = {
        id: id,
        name: name,
        desc: desc, 
        img: img,
        social: social
      }

      this.artists.push(newArtist);
    },

    // Remove um artista pelo ID
    removeArtist(id) {
      const artistIndex = this.artists.findIndex(artist => artist.id === id);

      if (artistIndex === -1) {
        throw new Error('Artista não encontrado');
      }

      this.artists.splice(artistIndex, 1);
    },

    // Atualiza informações de um artista específico
    updateArtist(updatedArtist) {
      const artistIndex = this.artists.findIndex(artist => artist.id === updatedArtist.id);

      if (artistIndex === -1) {
        throw new Error('Artista não encontrado');
      }

      this.artists[artistIndex] = { ...this.artists[artistIndex], ...updatedArtist };
    }
  }
});
