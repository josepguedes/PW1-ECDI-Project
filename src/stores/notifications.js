import { defineStore } from 'pinia';
import { useUsersStore } from './user';

export const useNotificationsStore = defineStore('notifications', {
  state: () => ({
    notificationTypes: [
      'upcomingEvents',
      'favoriteArtists',
      'calendarEvents',
      'news',
      'eventChange',
    ],
    preferences: {
      upcomingEvents: false,
      favoriteArtists: true,
      calendarEvents: true,
      news: true,
      eventChange: false,
    },
  }),

  getters: {
    getUserNotificationPreferences: (state) => {
      const usersStore = useUsersStore();
      if (!usersStore.authenticatedUser) {
        return [];
      }
      return usersStore.authenticatedUser.notificationPref;
    },

    isNotificationEnabled: (state) => (type) => {
      const usersStore = useUsersStore();
      const preferences = usersStore.authenticatedUser?.notificationPref || [];
      const preference = preferences.find((pref) => pref.type === type);
      return preference?.enabled ?? false;
    },
  },

  actions: {
    // Ação para alterar as preferências de notificação
    updateNotificationPreference(type, enabled) {
      const usersStore = useUsersStore();

      
      this.preferences[type] = enabled;

      
      const userPreferences = usersStore.authenticatedUser.notificationPref;
      const preferenceIndex = userPreferences.findIndex((pref) => pref.type === type);

      if (preferenceIndex !== -1) {
        
        usersStore.authenticatedUser.notificationPref[preferenceIndex].enabled = enabled;
      } else {
        
        usersStore.authenticatedUser.notificationPref.push({ type, enabled });
      }
    },
  },
  persist: true,
});
