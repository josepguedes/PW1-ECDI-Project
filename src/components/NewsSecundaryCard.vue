<template>
    <article class="news-card">
        <div class="content-wrapper">
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
    imageSrc: String,
    imageAlt: String,
    date: String,
    title: String,
    onClick: {
        type: Function,
        default: () => { }
    }
})

const formattedDate = computed(() => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(props.date).toLocaleDateString(undefined, options)
})
</script>

<style scoped>
.news-card {
    max-width: 433px;
    opacity: 0.8;
    transition: opacity 0.5s ease, transform 0.5s ease;
    cursor: pointer;
}

.news-card:hover {
    opacity: 1;
    transform: scale(1.02);
}

.content-wrapper {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    position: relative;
}

.news-image-container {
    position: relative;
    border-radius: 16px;
    aspect-ratio: 1;
    width: 110px;
    overflow: visible;
    flex-shrink: 0;
}

.news-image {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 16px;
    z-index: 2;
}

.news-date {
    position: absolute;
    border-radius: 8px;
    background-color: var(--gray200);
    color: var(--mainBlack);
    text-align: center;
    padding: 4px 8px;
    font: 10px Aspekta400, sans-serif;
    bottom: 12px;
    left: 55px;
    min-height: 16px;
    white-space: nowrap;
    z-index: 1;
    opacity: 0;
    transform: translateX(-50%);
    transition:
        opacity 0.5s ease,
        transform 0.5s ease,
        left 0.5s ease;
}

.news-card:hover .news-date {
    opacity: 1;
    left: 120px;
    transform: translateX(0);
}

.action-button {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(250, 250, 250, 0.3);
    width: 34px;
    height: 34px;
    left: 50%;
    top: 55%;
    transform: translate(-50%, 0);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    z-index: 3;
    transition: all 0.5s ease;
}

.news-card:hover .action-button {
    opacity: 1;
    background-color: rgba(250, 250, 250, 0.4);
    transform: translate(-50%, -75%);
}

.action-icon {
    width: 16px;
    height: 16px;
    color: var(--gray800);
}

.news-title {
    color: var(--Main-White);
    font: 500 20px Aspekta500, sans-serif;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    flex: 1;
}
</style>