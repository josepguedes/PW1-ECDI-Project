<script>
import { useVenuesStore } from "@/stores/venues";
import { useRouter } from 'vue-router'

const router = useRouter();

  export default {
		data(){
			return{
				venueStore: useVenuesStore(),
			}
		},
		methods: {
			handleVenueClick(venueId){
				this.$router.push({ path: `/venue/${venueId}` });
			}
		}
  }
</script>

<template>
  <div>
    <h1 class="outline-title">PROGRAM</h1>
		<div class="artists-container px-container">
        <div v-for="venue in venueStore.venues" class="artist-card" @click="handleVenueClick(venue.id)">
            <p class="artist-name">{{ venue.name }}</p>
						<img :src="venue.mainImg" alt="venue image" class="image artist-image1" />
						<img :src="venue.mainImg" alt="venue image" class="image artist-image2" />
						<img :src="venue.mainImg" alt="venue image" class="image artist-image3" />
        </div>
    </div>
  </div>
</template>