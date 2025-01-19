<script>
import { useVenuesStore } from "@/stores/venues";

export default {
    data() {
        return {
            name: "",
            address: "",
            bio: "",
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
            const venueStore = useVenuesStore();

            try {
                await venueStore.addVenue(this.name, this.address, this.bio, this.images);
                alert("Venue added successfully");
            } catch (error) {
                alert(error.message);
            }
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
        
        <input type="file" @change="handleImagesSelect" accept="image/*" multiple />
        <button type="submit" class="btn-primary">Add Event</button>
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