<template>
    <article class="news-card">
        <div class="news-content">
            <div class="news-image-container">
                <img loading="lazy" :src="imageSrc" class="news-image" :alt="imageAlt" />
                <span class="news-date">{{ formattedDate }}</span>
                <button class="action-button" tabindex="0" @click="onClick">
                    <MoveUpRight class="action-icon" />
                </button>
            </div>
            <h2 class="news-title">{{ title }}</h2>
        </div>
    </article>
</template>

<script setup>
import { MoveUpRight } from 'lucide-vue-next'
import { computed } from 'vue'

const props = defineProps({
    imageSrc: {
        type: String,
        required: true,
    },
    imageAlt: {
        type: String,
        default: 'News article featured image',
    },
    date: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    onClick: {
        type: Function,
        default: () => {},
    }
})

const formattedDate = computed(() => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(props.date).toLocaleDateString(undefined, options)
})
</script>

<style scoped>
.news-card {
    display: flex;
    width: 100%;
    max-width: 846px;
    flex-direction: column;
    opacity: 0.8;
    transition: opacity 0.5s ease, transform 0.5s ease;
    cursor: pointer;
}

.news-card:hover {
    opacity: 1;
    transform: scale(1.02);
}

.news-content {
    display: flex;
    flex-direction: column;
}

.news-image-container {
    position: relative;
    border-radius: 16px;
    min-height: 500px;
    width: 100%;
}

.news-image {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 16px;
}

.news-date {
    position: absolute;
    border-radius: 8px;
    background-color: var(--gray200);
    color: var(--Main-Black, #010306);
    text-align: center;
    padding: 4px 12px;
    font: 12px Aspekta400, sans-serif;
    top: 12px;
    left: 12px;
    min-height: 16px;
    z-index: 1;
    opacity: 0;
    transform: scale(1);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.news-card:hover .news-date {
    opacity: 1;
    transform: scale(1.001);
}

.action-button {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(250, 250, 250, 0.3);
    width: 99px;
    height: 99px;
    left: 50%;
    top: 55%;
    transform: translate(-50%, 0);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition:
        transform 0.5s ease,
        opacity 0.5s ease,
        background-color 0.5s ease;
}

.news-card:hover .action-button {
    opacity: 1;
    background-color: rgba(250, 250, 250, 0.4);
    transform: translate(-50%, -75%);
}

.action-icon {
    width: 45px;
    height: 45px;
    color: var(--gray800);
}

.news-title {
    margin-top: 32px;
    color: var(--Main-White);
    font: 500 42px Aspekta600, sans-serif;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.news-heading {
    color: var(--Main-White);
    font: 500 32px Aspekta500, sans-serif;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.news-description {
    color: var(--Gray-200);
    font: 400 20px Aspekta300, sans-serif;
    margin-top: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
</style>