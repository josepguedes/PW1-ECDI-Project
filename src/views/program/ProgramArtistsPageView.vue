<script>
import { useArtistsStore } from "@/stores/artists";
import { useRouter } from 'vue-router'

const router = useRouter();

  export default {
		data(){
			return{
				artistStore: useArtistsStore(),
			}
		},
		methods: {
			handleArtistClick(artistId){
				this.$router.push({ path: `/artist/${artistId}` });
			}
		}
  }
</script>

<template>
  <div>
    <h1 class="outline-title">PROGRAM</h1>
		<div class="artists-container">
        <div v-for="artist in artistStore.artists" class="artist-container" @click="handleArtistClick(artist.id)">
            <p class="artist-name">{{ artist.name }}</p>
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>