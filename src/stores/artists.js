import { defineStore } from 'pinia';
import { getSpotifyAccessToken, searchArtist, fetchTopTracks } from '../api/spotify';  // Importando as funções da API

export const useArtistsStore = defineStore('artists', {
  state: () => ({
    artists: [
      {
        id: "1",  // ID do artista
        name: "Charlotte de Witte",  // Nome do artista
        bio: "Charlotte de Witte is a globally renowned DJ and producer hailing from Belgium, celebrated for her dark, powerful, and hypnotic approach to techno. Rising to fame in the mid-2010s, she quickly established herself as one of the most influential figures in the electronic music scene. Known for her relentless energy behind the decks, Charlotte has become a headliner at major festivals such as Tomorrowland, Awakenings, and Ultra Music Festival.",
        simpleDescription: "Charlotte de Witte is a globally renowned DJ and producer hailing from Belgium",
        mainImg: "https://xlr8r.com/wp-content/uploads/2019/06/screen-shot-2018-02-15-at-95724-am.png",  // URL da imagem principal
        secondaryImg: "https://cdn.wegow.com/media/artists/charlotte-de-witte/charlotte-de-witte-1674054503.5452025.1242x2208.jpg",  // URL da imagem secundária
        socials: {  // Redes sociais
          youtube: "https://youtube.com/@charlottedewittemusic",
          spotify: "https://open.spotify.com/intl-pt/artist/1lJhME1ZpzsEa5M0wW6Mso?si=aD3d2UhkREubmruGyM_Qlw",
          instagram: "https://www.instagram.com/charlottedewittemusic"
        }
      },

      {
        id: "2",  // ID do artista
        name: "Eduardo Sousa",  // Nome do artista
        bio: "Teste teste",
        simpleDescription: "Eduardo Sousa is a globally renowned DJ and producer hailing from Belgium",
        mainImg: "https://xlr8r.com/wp-content/uploads/2019/06/screen-shot-2018-02-15-at-95724-am.png",  // URL da imagem principal
        secondaryImg: "https://cdn.wegow.com/media/artists/charlotte-de-witte/charlotte-de-witte-1674054503.5452025.1242x2208.jpg",  // URL da imagem secundária
        socials: {  // Redes sociais
          youtube: "https://youtube.com/@charlottedewittemusic",
          spotify: "https://open.spotify.com/intl-pt/artist/1lJhME1ZpzsEa5M0wW6Mso?si=aD3d2UhkREubmruGyM_Qlw",
          instagram: "https://www.instagram.com/charlottedewittemusic"
        }
      },

      {
        id: "3",  // ID do artista
        name: "Artista 3",  // Nome do artista
        bio: "Descrição do Artista 3",
        simpleDescription: "Artista 3 é um DJ e produtor renomado.",
        mainImg: "https://xlr8r.com/wp-content/uploads/2019/06/screen-shot-2018-02-15-at-95724-am.png",  // URL da imagem principal
        secondaryImg: "https://cdn.wegow.com/media/artists/charlotte-de-witte/charlotte-de-witte-1674054503.5452025.1242x2208.jpg",  // URL da imagem secundária
        socials: {  // Redes sociais
          youtube: "https://youtube.com/@charlottedewittemusic",
          spotify: "https://open.spotify.com/intl-pt/artist/1lJhME1ZpzsEa5M0wW6Mso?si=aD3d2UhkREubmruGyM_Qlw",
          instagram: "https://www.instagram.com/charlottedewittemusic"
        }
      },

      {
        id: "4",  // ID do artista
        name: "Artista 4",  // Nome do artista
        bio: "Descrição do Artista 4",
        simpleDescription: "Artista 4 é um DJ e produtor renomado.",
        mainImg: "https://xlr8r.com/wp-content/uploads/2019/06/screen-shot-2018-02-15-at-95724-am.png",  // URL da imagem principal
        secondaryImg: "https://cdn.wegow.com/media/artists/charlotte-de-witte/charlotte-de-witte-1674054503.5452025.1242x2208.jpg",  // URL da imagem secundária
        socials: {  // Redes sociais
          youtube: "https://youtube.com/@charlottedewittemusic",
          spotify: "https://open.spotify.com/intl-pt/artist/1lJhME1ZpzsEa5M0wW6Mso?si=aD3d2UhkREubmruGyM_Qlw",
          instagram: "https://www.instagram.com/charlottedewittemusic"
        }
      },

      {
        id: "5",  // ID do artista
        name: "Artista 5",  // Nome do artista
        bio: "Descrição do Artista 5",
        simpleDescription: "Artista 5 é um DJ e produtor renomado.",
        mainImg: "https://xlr8r.com/wp-content/uploads/2019/06/screen-shot-2018-02-15-at-95724-am.png",  // URL da imagem principal
        secondaryImg: "https://cdn.wegow.com/media/artists/charlotte-de-witte/charlotte-de-witte-1674054503.5452025.1242x2208.jpg",  // URL da imagem secundária
        socials: {  // Redes sociais
          youtube: "https://youtube.com/@charlottedewittemusic",
          spotify: "https://open.spotify.com/intl-pt/artist/1lJhME1ZpzsEa5M0wW6Mso?si=aD3d2UhkREubmruGyM_Qlw",
          instagram: "https://www.instagram.com/charlottedewittemusic"
        }
      },

      {
        id: "6",  // ID do artista
        name: "Artista 6",  // Nome do artista
        bio: "Descrição do Artista 6",
        simpleDescription: "Artista 6 é um DJ e produtor renomado.",
        mainImg: "https://xlr8r.com/wp-content/uploads/2019/06/screen-shot-2018-02-15-at-95724-am.png",  // URL da imagem principal
        secondaryImg: "https://cdn.wegow.com/media/artists/charlotte-de-witte/charlotte-de-witte-1674054503.5452025.1242x2208.jpg",  // URL da imagem secundária
        socials: {  // Redes sociais
          youtube: "https://youtube.com/@charlottedewittemusic",
          spotify: "https://open.spotify.com/intl-pt/artist/1lJhME1ZpzsEa5M0wW6Mso?si=aD3d2UhkREubmruGyM_Qlw",
          instagram: "https://www.instagram.com/charlottedewittemusic"
        }
      },

      {
        id: "7",  // ID do artista
        name: "Artista 7",  // Nome do artista
        bio: "Descrição do Artista 7",
        simpleDescription: "Artista 7 é um DJ e produtor renomado.",
        mainImg: "https://xlr8r.com/wp-content/uploads/2019/06/screen-shot-2018-02-15-at-95724-am.png",  // URL da imagem principal
        secondaryImg: "https://cdn.wegow.com/media/artists/charlotte-de-witte/charlotte-de-witte-1674054503.5452025.1242x2208.jpg",  // URL da imagem secundária
        socials: {  // Redes sociais
          youtube: "https://youtube.com/@charlottedewittemusic",
          spotify: "https://open.spotify.com/intl-pt/artist/1lJhME1ZpzsEa5M0wW6Mso?si=aD3d2UhkREubmruGyM_Qlw",
          instagram: "https://www.instagram.com/charlottedewittemusic"
        }
      },

      {
        id: "8",  // ID do artista
        name: "Artista 8",  // Nome do artista
        bio: "Descrição do Artista 8",
        simpleDescription: "Artista 8 é um DJ e produtor renomado.",
        mainImg: "https://xlr8r.com/wp-content/uploads/2019/06/screen-shot-2018-02-15-at-95724-am.png",  // URL da imagem principal
        secondaryImg: "https://cdn.wegow.com/media/artists/charlotte-de-witte/charlotte-de-witte-1674054503.5452025.1242x2208.jpg",  // URL da imagem secundária
        socials: {  // Redes sociais
          youtube: "https://youtube.com/@charlottedewittemusic",
          spotify: "https://open.spotify.com/intl-pt/artist/1lJhME1ZpzsEa5M0wW6Mso?si=aD3d2UhkREubmruGyM_Qlw",
          instagram: "https://www.instagram.com/charlottedewittemusic"
        }
      },

      {
        id: "9",  // ID do artista
        name: "Artista 9",  // Nome do artista
        bio: "Descrição do Artista 9",
        simpleDescription: "Artista 9 é um DJ e produtor renomado.",
        mainImg: "https://xlr8r.com/wp-content/uploads/2019/06/screen-shot-2018-02-15-at-95724-am.png",  // URL da imagem principal
        secondaryImg: "https://cdn.wegow.com/media/artists/charlotte-de-witte/charlotte-de-witte-1674054503.5452025.1242x2208.jpg",  // URL da imagem secundária
        socials: {  // Redes sociais
          youtube: "https://youtube.com/@charlottedewittemusic",
          spotify: "https://open.spotify.com/intl-pt/artist/1lJhME1ZpzsEa5M0wW6Mso?si=aD3d2UhkREubmruGyM_Qlw",
          instagram: "https://www.instagram.com/charlottedewittemusic"
        }
      },

      {
        id: "10",  // ID do artista
        name: "Artista 10",  // Nome do artista
        bio: "Descrição do Artista 10",
        simpleDescription: "Artista 10 é um DJ e produtor renomado.",
        mainImg: "https://xlr8r.com/wp-content/uploads/2019/06/screen-shot-2018-02-15-at-95724-am.png",  // URL da imagem principal
        secondaryImg: "https://cdn.wegow.com/media/artists/charlotte-de-witte/charlotte-de-witte-1674054503.5452025.1242x2208.jpg",  // URL da imagem secundária
        socials: {  // Redes sociais
          youtube: "https://youtube.com/@charlottedewittemusic",
          spotify: "https://open.spotify.com/intl-pt/artist/1lJhME1ZpzsEa5M0wW6Mso?si=aD3d2UhkREubmruGyM_Qlw",
          instagram: "https://www.instagram.com/charlottedewittemusic"
        }
      }
    ],
    accessToken: "",  // Armazenar o token de acesso aqui
  }),

  getters: {
    // Retorna um artista pelo ID
    getArtistById: (state) => (id) => {
      return state.artists.find(artist => artist.id === id);
    }
  },

  actions: {
    // Função para obter o token de acesso do Spotify
    async getSpotifyAccessToken() {
      const clientId = "84741557514b4c5d9f24d8e4fef08a61";
      const clientSecret = "a8c37f627ee04bdf8d92a25ccd73d34a";
      try {
        const data = await getSpotifyAccessToken(clientId, clientSecret);
        if (data.access_token) {
          this.accessToken = data.access_token;
        }
      } catch (error) {
        console.error("Error fetching Spotify access token:", error);
        throw error;
      }
    },

    // Função para obter o ID do artista
    async getArtistId(artistName) {
      if (!this.accessToken) {
        await this.getSpotifyAccessToken();
      }

      try {
        const data = await searchArtist("https://api.spotify.com/v1", this.accessToken, artistName);
        if (data.artists.items.length === 0) {
          throw new Error(`No artist found with name: ${artistName}`);
        }
        return data.artists.items[0].id;
      } catch (error) {
        console.error("Error fetching artist ID:", error);
        throw error;
      }
    },

    // Função para obter as faixas mais populares de um artista
    async getTopTracks(artistId) {
      if (!this.accessToken) {
        await this.getSpotifyAccessToken();
      }

      try {
        const data = await fetchTopTracks("https://api.spotify.com/v1", this.accessToken, artistId);
        return data.tracks.slice(0, 3).map((track) => ({
          name: track.name,
          album: track.album.name,
          preview_url: track.preview_url,
          popularity: track.popularity,
          image_url: track.album.images[0].url, // Adiciona a imagem do álbum
          id: track.id, // Adiciona o id da faixa
        }));
      } catch (error) {
        console.error("Error fetching top tracks:", error);
        throw error;
      }
    },

    // Função para obter as 3 faixas mais populares de um artista
    async getTop3Tracks(artistName) {
      try {
        const artistId = await this.getArtistId(artistName);
        const topTracks = await this.getTopTracks(artistId);
        return topTracks;
      } catch (error) {
        console.error(`Error fetching top 3 tracks for artist ${artistName}:`, error);
        throw error;
      }
    },

    // Adiciona um novo artista
    addArtist(id, name, bio, mainImg, secondaryImg, youtube, spotify, instagram) {
      const artistExists = this.artists.some(artist => artist.name === name);

      if (artistExists) {
        throw new Error('Já existe um artista com esse nome');
      }

      const newArtist = {
        id: id,
        name: name,
        bio: bio, 
        mainImg: mainImg,
        secondaryImg: secondaryImg,
        socials: {
          youtube: youtube,
          spotify: spotify,
          instagram: instagram
        }
      };

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

      this.artists[artistIndex] = { 
        ...this.artists[artistIndex], 
        ...updatedArtist,
        socials: {  // Mescla apenas o objeto de redes sociais separadamente
          ...this.artists[artistIndex].socials,
          ...updatedArtist.socials
        }
      };
    }
  }
});
