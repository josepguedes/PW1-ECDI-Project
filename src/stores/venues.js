import { defineStore } from 'pinia';

export const useVenuesStore = defineStore('venues', {
  state: () => ({
    venues: [
      {
      id: "1",
      name:"KitKatClub",
      desc:"Köpenicker Straße 76, 10179 Berlin",
      bio:"The KitKatClub is a legendary Berlin venue celebrated for its bold, open-minded atmosphere and unforgettable electronic music events. Known for embracing individuality and freedom, it has become an iconic hotspot in the city's vibrant nightlife scene.",
      mainImg: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      carouselImages: [
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      mapImage : "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
      id: "2",
      name:"Eskada",
      desc:"Köpenicker Straße 76, 10179 Berlin",
      bio:"The KitKatClub is a legendary Berlin venue celebrated for its bold, open-minded atmosphere and unforgettable electronic music events. Known for embracing individuality and freedom, it has become an iconic hotspot in the city's vibrant nightlife scene.",
      mainImg: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      carouselImages: [
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      mapImage : "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ] 
  }),

  getters: {
    getVenueById: (state) => (id) => {
      return state.venues.find(venue => venue.id === id);
    },
    getAllVenues: (state) => {
      return state.venues;
    },
  },

  actions: {
    // Adiciona um novo local
    async addVenue(name,bio,address,images) {
      const venueExists = this.venues.some(venue => venue.name === name);

      if (venueExists) {
        throw new Error('Já existe um local com esse nome');
      }

      let newId;
      do {
        newId = Math.floor(Math.random() * 1000) + 1;
      } while (this.venues.some(venue => venue.id === newId));

      const newVenue = {
        id: newId,
        name: name,
        desc : address,
        bio: bio, 
        mainImg: images[0],
        carouselImages: [images[1], images[2], images[3], images[4], images[5]],
      };

      this.venues.push(newVenue);
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
  },
  persist: true,
});
