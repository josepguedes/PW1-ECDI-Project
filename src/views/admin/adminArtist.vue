<script>
import { useArtistsStore } from "@/stores/artists";

export default {
    data() {
        return {
            name: "",
            bio: "",
            youtube: "",
            spotify: "",
            instagram: "",
            images: []
        }
    },
    methods: {
        handleImagesSelect(event) {
            const files = event.target.files; 

            if (files.length) {
                Array.from(files).forEach((file) => { 
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.images.push(e.target.result); 
                };
                reader.readAsDataURL(file);
                });
            }
        },
        async handleSubmit() {
            const artistsStore = useArtistsStore();
            console.log("Submitting artist:", this.name, this.bio, this.images, this.youtube, this.spotify, this.instagram);
            try {
                await artistsStore.addArtist(this.name, this.bio, this.images, this.youtube, this.spotify, this.instagram);
                console.log("Artist added successfully");
            } catch (error) {
                alert(error.message);
            }
        }
    }
}
</script>

<template>
    <h1>Admin Artist</h1>
    <form class="container" @submit.prevent="handleSubmit">
        <h2>Add Artist:</h2>
        <input type="text" class="form-input pbottom-12" v-model="name" placeholder="Name" required/>
        <textarea class="form-input pbottom-12" v-model="bio" placeholder="Bio" required />
        <input type="text" class="form-input pbottom-12" v-model="youtube" placeholder="Youtube">
        <input type="text" class="form-input pbottom-12" v-model="spotify" placeholder="Spotify">
        <input type="text" class="form-input pbottom-12" v-model="instagram" placeholder="Instagram">
        <input type="file" @change="handleImagesSelect" accept="image/*" multiple />
        <button type="submit" class="btn-primary">Add artist</button>
    </form>
</template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    width: 600px;
}

</style>