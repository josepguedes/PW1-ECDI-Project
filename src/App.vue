<script>
import { RouterLink } from 'vue-router';
import navbar from "@/components/navbar.vue";

export default {
    components: {
        navbar,
    }
}

</script>

<template>
    <navbar />
    <RouterView />
</template>

<style scoped>
</style>
