import { defineStore } from 'pinia';
import { useEventStore } from './events';
import { useVenuesStore } from './venues';
import { useArtistsStore } from './artists';

export const useProgramStore = defineStore('program', {
  state: () => ({}),

  actions: {
    formatDate(dateString) {
      const date = new Date(dateString);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
      const dayNumber = date.getDate();
      const monthName = date.toLocaleDateString('en-US', { month: 'long' });

      const daySuffix = (d) => {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
          case 1:
            return 'st';
          case 2:
            return 'nd';
          case 3:
            return 'rd';
          default:
            return 'th';
        }
      };

      return `${dayName}, ${dayNumber}${daySuffix(dayNumber)} ${monthName}`;
    },

    async fetchArtistEvents(artistId) {
      const eventStore = useEventStore();
      const venueStore = useVenuesStore();
      const artistsStore = useArtistsStore();

      const filteredEvents = eventStore.events.filter((event) =>
        event.artistsIds.includes(artistId)
      );

      const groupedEvents = filteredEvents.reduce((acc, event) => {
        const date = event.date || 'Unknown Date';

        const venueName = venueStore.getVenueById(event.venueId)?.name || 'Unknown Venue';

        const lineupNames = event.artistsIds
          .map((id) => artistsStore.getArtistById(id)?.name)
          .filter((name) => name !== null);

        const formattedEvent = {
          id: event.id, // Incluindo o id do evento
          title: event.name,
          venue: venueName,
          time: event.time || 'TBA',
          lineup: lineupNames.join(', '),
        };

        if (!acc[date]) acc[date] = [];
        acc[date].push(formattedEvent);

        return acc;
      }, {});

      return Object.entries(groupedEvents).map(([date, events]) => ({
        date: this.formatDate(date),
        events,
      }));
    },

    async fetchAllPrograms() {
      const eventStore = useEventStore();
      const venueStore = useVenuesStore();
      const artistsStore = useArtistsStore();

      const groupedEvents = eventStore.events.reduce((acc, event) => {
        const date = event.date || 'Unknown Date';

        const venueName = venueStore.getVenueById(event.venueId)?.name || 'Unknown Venue';

        const lineupNames = event.artistsIds
          .map((id) => artistsStore.getArtistById(id)?.name)
          .filter((name) => name !== null);

        const formattedEvent = {
          id: event.id,
          title: event.name,
          venue: venueName,
          time: event.time || 'TBA',
          lineup: lineupNames.join(', '),
        };

        if (!acc[date]) acc[date] = [];
        acc[date].push(formattedEvent);

        return acc;
      }, {});

      return Object.entries(groupedEvents).map(([date, events]) => ({
        date: this.formatDate(date),
        events,
      }));
    },
  },
});
