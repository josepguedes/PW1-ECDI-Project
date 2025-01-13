<script>
import { RouterLink } from 'vue-router';
import navbar from "@/components/navbar.vue";
import footerComp from "@/components/footer.vue";

export default {
    components: {
        navbar,
        footerComp,
    }
}

</script>

<template>
    <navbar />
    <RouterView />
    <footerComp />
</template>

<style scoped>
</style>
