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
            images: [],
			artistsStore: useArtistsStore()
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
            
            try {
                await artistsStore.addArtist(this.name, this.bio, this.images, this.youtube, this.spotify, this.instagram);
                alert("Artist added successfully");
            } catch (error) {
                alert(error.message);
            }
        },
		deleteArtist(artistId){
			this.artistsStore.removeArtist(artistId);
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
		<h2>All Artist:</h2><br>
    <div class="artists-container">
        <div v-for="artist in artistsStore.artists" class="artist-card">
            <p class="card-title">{{ artist.name }}</p>
            <img :src="artist.mainImg" alt="artist image" class="artist-image" />
            <button class="btn-primary w-100" @click="deleteArtist(artist.id)">Delete</button>
        </div>
    </div>
</template>

<style scoped>
.container{
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 24px;
	width: 600px;
}

.card-title{
  font-family: Aspekta500;
  font-size: 24px;
}

.artists-container{
	display: grid;
  grid-template-columns: repeat(auto-fill, minmax(312px, 1fr));
	gap: 32px;
}

.artist-card{
	display: flex;
	flex-direction: column;
	gap: 16px;
  padding: 24px;
  background-color: var(--mainBlack);
  border: 1px solid var(--gray200);
  border-radius: 16px;
}

.artist-image{
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
}
</style>