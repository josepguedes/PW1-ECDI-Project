<script>
import { useEventStore } from "@/stores/events";
import { useArtistsStore } from "@/stores/artists";
import { useVenuesStore } from "@/stores/venues";

export default {
    data() {
        return {
            name: "",
            bio: "",
            artistsIds: [],
            date: null,
            timeStart: null,
            timeEnd: null,
            venueId: null,
            selectedGenres: [],
            images: [],
            genres: [
                "House",
                "Techno",
                "Trance",
                "Drum and Bass",
                "Dubstep",
                "Electro",
                "Progressive House",
                "Deep House",
                "Future Bass",
                "Hardstyle",
                "Trap",
                "Chillwave",
                "Synthwave",
                "Ambient",
                "Industrial",
                "Minimal",
                "Garage",
                "Electro Swing",
                "Psytrance",
                "Hardcore",
                "Tropical House",
                "Melodic Techno",
                "Tech House",
                "Experimental",
                ],
        }
    },
    setup() {
    const artistStore = useArtistsStore();
    const venueStore = useVenuesStore();
    const eventStore = useEventStore();

    return { artistStore, venueStore, eventStore };
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
            const eventStore = useEventStore();

            try {
                await eventStore.addEvent(this.name,this.bio,this.artistsIds,this.date,this.timeStart,this.timeEnd,this.venueId,this.selectedGenres,this.images);
                alert("Event added successfully");
            } catch (error) {
                alert(error.message);
            }
        },
				deleteEvent(eventId){

					const eventStore = useEventStore();
					eventStore.removeEvent(eventId);
				}
    }
}
</script>

<template>
    <h1>Admin Events</h1>
    <form class="container" @submit.prevent="handleSubmit">
        <h2>Add Event:</h2>
        <input type="text" class="form-input pbottom-12" v-model="name" placeholder="Name" required/>
        <textarea class="form-input pbottom-12" v-model="bio" placeholder="Bio" required />
        <div>Artists Ids Selected: {{ artistsIds }}</div>
        <select class="select" v-model="artistsIds" multiple required>
            <option v-for="artist in artistStore.artists" :value="artist.id">
                {{ artist.name }}
            </option>
        </select>
        <label for="venue">Venue</label>
        <select v-model="venueId" required>
            <option v-for="venue in venueStore.venues" :value="venue.id">
                {{ venue.name }}
            </option>
        </select>
        <div>Selected genres: {{ selectedGenres }}</div>
        <select class="select" v-model="selectedGenres" multiple required>
            <option v-for="genre in genres" :value="genre">
                {{ genre }}
            </option>
        </select>
        <label for="date">Date</label>
        <input type="date" class="dateInput" v-model="date" required/>
        <label for="date">Start time</label>
        <input type="time" class="dateInput" v-model="timeStart" required/>
        <label for="date">End time</label>
        <input type="time" class="dateInput" v-model="timeEnd" required/>
        <label for="date">Images</label>
        <input type="file" @change="handleImagesSelect" accept="image/*" multiple />
        <button type="submit" class="btn-primary">Add Event</button>
    </form>
    <h2>All Events:</h2><br>
    <div class="events-container">
        <div v-for="event in eventStore.events" class="event-card">
            <p class="card-title">{{ event.name }}</p>
            <img :src="event.mainImg" alt="Event image" class="event-image" />
            <button class="btn-primary w-100" @click="deleteEvent(event.id)">Delete</button>
        </div>
    </div>
</template>

<style scoped>

.w-100{
  width: 100%;
}

.card-title{
  font-family: Aspekta500;
  font-size: 24px;
}

.container{
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  width: 600px;
}

.dateInput{
  padding: 12px;
}

.select{
  padding: 8px;
  height: 200px;
}

.events-container{
	display: grid;
  grid-template-columns: repeat(auto-fill, minmax(312px, 1fr));
	gap: 32px;
}

.event-card{
	display: flex;
	flex-direction: column;
	gap: 16px;
  padding: 24px;
  background-color: var(--mainBlack);
  border: 1px solid var(--gray200);
  border-radius: 16px;
}

.event-image{
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
}

</style>