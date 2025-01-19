<template>
    <main class="ticket-page">
        <Sidebar />
        <article class="ticket-card">
            <div class="ticket-container">
                <div class="ticket-layout">
                    <div class="main-content">
                        <div class="ticket-content">
                            <h1 class="ticket-heading">My tickets</h1>
                            <div v-for="ticket in ticketsStore.tickets" :key="ticket.id" class="ticket-wrapper">
                                <img loading="lazy" :src="ticket.background" alt="Ticket background pattern"
                                    class="ticket-background" />
                                <div class="ticket-details">
                                    <div class="ticket-event">{{ ticket.title }}</div>
                                    <div class="ticket-date">{{ ticket.date }}</div>
                                    <div class="ticket-name">NAME: {{ ticket.name }}</div>
                                    <div class="ticket-type">TYPE: {{ ticket.type }}</div>
                                </div>
                                <div class="ticket-qr">
                                    <img :src="ticket.qrcode" alt="QR Code" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </main>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import { useTicketsStore } from '@/stores/tickets';

export default {
    components: {
        Sidebar
    },
    computed: {
        ticketsStore() {
            return useTicketsStore();
        }
    }
}
</script>

<style scoped>
.ticket-page {
    display: flex;
    align-items: flex-start;
    padding: 20px;
}


.ticket-card {
    background: var(--Main-Black, #010306);
    padding-bottom: 226px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.ticket-container {
    width: 729px;
    max-width: 100%;
    margin: 60px 0 0 48px;

}

.ticket-layout {
    display: flex;
    gap: 20px;
}

.ticket-wrapper {
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 40px;
}

.sidebar {
    width: 40%;
}

.main-content {
    width: 60%;
    margin-left: 20px;
}

.ticket-content {
    display: flex;
    flex-direction: column;
    font-family: Aspekta, sans-serif;
}

.ticket-heading {
    color: var(--Gray-100, #bec7ce);
    font-size: 36px;
    font-family: Aspekta200;
}


.ticket-background {
    width: 100%;
    height: auto;
    display: block;
}

.ticket-details {
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;
    font-family: Arial, sans-serif;
    z-index: 2;
    
}


.ticket-event {
    font-size: 24px;
    font-family: Aspekta500;
    margin-left: 40px;
    margin-top: 10px;
    margin-bottom: 5px;
}

.ticket-date {
    font-size: 13px;
    font-family: Aspekta500;
    color: var(--Gray-100, #bec7ce);
    margin-left: 40px;
    margin-bottom: 5px;
}

.ticket-name {
    font-size: 13px;
    font-family: Aspekta500;
    margin-left: 40px;
    margin-top: 30px;
    margin-bottom: 5px;
}

.ticket-type {
    font-size: 13px;
    font-family: Aspekta500;
    margin-left: 40px;
    margin-bottom: 5px;
}


.ticket-qr {
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 2;
    filter: grayscale(100%) brightness(100%) invert(100%);
}

.ticket-qr img {
    width: 125px;
    height: 125px;
    margin-bottom: 20px;
    margin-right: 20px;
}





@media (max-width: 991px) {
    .ticket-card {
        padding-bottom: 100px;
    }

    .ticket-container {
        margin-top: 40px;
    }

    .ticket-layout {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
    }

    .sidebar {
        width: 100%;
    }

    .main-content {
        width: 100%;
    }

    .ticket-content {
        margin-top: 40px;
    }

    .ticket-wrapper {
        margin-top: 40px;
    }

    .ticket-details {
        padding: 0 20px;
    }
}
</style>