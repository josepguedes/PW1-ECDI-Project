<template>
  <div class="notifications-container">
    <header class="notifications-header">
      <h2 class="notifications-title">Notifications</h2>
      <button class="mark-read-button" tabindex="0" role="button" @click="markAllAsRead">
        Mark all as read
      </button>
    </header>
    <div class="notifications-list">
      <div v-for="(notification, index) in filteredNotifications" :key="index" class="notification-item">
        <div class="notification-content">
          <img :src="notification.image" :alt="notification.imageAlt" class="notification-avatar" loading="lazy" />
          <div class="notification-text">
            <h3 class="notification-heading">{{ notification.title }}</h3>
            <p class="notification-description" v-html="notification.description"></p>
          </div>
        </div>
        <div class="notification-indicator" :class="{ 'read': notification.read }"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useNotificationsStore } from '@/stores/notifications';

export default {
  name: 'NotificationsModal',
  computed: {
    filteredNotifications() {
      const notificationsStore = useNotificationsStore();
      return notificationsStore.getFilteredNotifications();

    }
  },
  methods: {
    markAllAsRead() {
      const notificationsStore = useNotificationsStore();
      notificationsStore.notifications = notificationsStore.notifications.map(notification => ({
        ...notification,
        read: true
      }));
    }
  }
}
</script>

<style scoped>
.notifications-container {
  border-radius: 16px;
  border: 1px solid var(--Gray-100, #bec7ce);
  background: var(--Main-Black, #010306);
  max-width: 470px;
  display: flex;
  flex-direction: column;
  font-family: Aspekta, sans-serif;
}

.notifications-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
}

.notifications-title {
  color: var(--Main-White, #fafafa);
  font-size: 20px;
  font-family: Aspekta200;
  margin: 0;
}

.mark-read-button {
  color: var(--Gray-200, #a2aab1);
  font-size: 16px;
  font-family: Aspekta200;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.notifications-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
}

.notifications-list::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.notifications-list {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

.notification-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px solid var(--Gray-100, #bec7ce);
}

.notification-content {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.notification-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: contain;
}

.notification-text {
  flex: 1;
}

.notification-heading {
  color: var(--Main-White, #fafafa);
  font-size: 16px;
  font-family: Aspekta200;
  margin: 0;
}

.notification-description {
  color: var(--Gray-100, #bec7ce);
  font-size: 14px;
  font-family: Aspekta100;
  margin: 4px 0 0;
}

.notification-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--Blue-300, #0067ca);
}

.notification-indicator.read {
  display: none;
}

.highlight-text {
  color: var(--Gray-200, #a2aab1);
}
</style>