<template>
    <div class="settings-page">
        <div class="settings-container">
            <Sidebar />
            <div class="settings-wrapper">
                <h1 class="settings-title">Notification settings</h1>
                <div class="settings-list">
                    <div class="settings-item" v-for="(preference, index) in preferences" :key="index">
                        <span class="setting-label">{{ preference.label }}</span>
                        <button class="toggle-button"
                            :class="{ 'toggle-active': preference.enabled, 'toggle-inactive': !preference.enabled }"
                            tabindex="0" role="switch" :aria-checked="preference.enabled.toString()"
                            @click="toggleState(preference.type, !preference.enabled)">
                            <span class="toggle-knob"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import { useNotificationsStore } from '@/stores/notifications';

export default {
    name: 'NotificationSettings',
    components: {
        Sidebar,
    },
    computed: {
        preferences() {
            const notificationsStore = useNotificationsStore();
            return notificationsStore.notificationTypes.map(type => ({
                type,
                label: this.getLabelForType(type),
                enabled: notificationsStore.preferences[type],
            }));
        },
    },
    methods: {
        getLabelForType(type) {
            const labels = {
                upcomingEvents: 'Upcoming events',
                favoriteArtists: 'Favorite artists upcoming events',
                calendarEvents: 'Calendar events',
                news: 'News',
                eventChange: 'Event change',
            };
            return labels[type] || type;  
        },
        

        toggleState(type, enabled) {
            const notificationsStore = useNotificationsStore();
            notificationsStore.updateNotificationPreference(type, enabled);
            
        },
    },
};
</script>


<style scoped>
.settings-page {
    background: var(--Main-Black, #010306);
    display: flex;
    padding: 0 0 69px;
    flex-direction: column;
    overflow: hidden;
}

.settings-container {
    display: flex;
    align-items: flex-start;
    padding: 20px;
}

.settings-wrapper {
    gap: 40px 96px;
    margin: 64px 0 0 48px;
}

.settings-title {
    color: var(--Gray-100, #bec7ce);
    font-size: 36px;
    font-family: Aspekta200;
}

.settings-list {
    display: flex;
    margin-top: 32px;
    width: 633px;
    max-width: 100%;
    flex-direction: column;
    gap: 24px;
}

.settings-item {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px 100px;
}

.setting-label {
    color: var(--Gray-100, #bec7ce);
    font-size: 20px;
    font-family: Aspekta300;
    margin: auto 0;
}

.toggle-button {
    align-items: center;
    border-radius: 50px;
    display: flex;
    width: 45px;
    height: 25px;
    margin: auto 0;
    padding: 0;
    border: none;
    cursor: pointer;
}

.toggle-knob {
    border-radius: 50px;
    background: var(--Gray-100, #bec7ce);
    width: 25px;
    height: 25px;
    transition: transform 0.2s;
}

.toggle-active {
    background: var(--Blue-300, #0067ca);
    justify-content: flex-end;
}

.toggle-inactive {
    background: var(--Gray-400, #6b737a);
    justify-content: flex-start;
}

.toggle-active .toggle-knob {
    background: var(--Gray-100, #bec7ce);
    box-shadow: 0 0 5px var(--Blue-300, #0067ca);
}

.toggle-inactive .toggle-knob {
    background: var(--Gray-100, #bec7ce);
    box-shadow: none;
}

@media (max-width: 991px) {
    .settings-page {
        padding-bottom: 100px;
    }

    .settings-container {
        max-width: 100%;
        margin-top: 40px;
    }

    .settings-wrapper {
        max-width: 100%;
    }

    .settings-title {
        max-width: 100%;
    }

    .settings-item {
        max-width: 100%;
    }
}
</style>