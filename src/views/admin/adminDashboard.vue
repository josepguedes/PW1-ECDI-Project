<script></script>

<template>
  <div class="adminDashboard">
    <h1>Admin Dashboard</h1>
    <RouterLink class="hover-underline-animation w-fit" to="/admin/adminArtist">Admin Artist</RouterLink>
    <RouterLink class="hover-underline-animation w-fit" to="/admin/adminVenue">Admin Venue</RouterLink>
    <RouterLink class="hover-underline-animation w-fit" to="/admin/adminEvent">Admin Event</RouterLink>
  </div>
</template>

<style scoped>

.w-fit{
  width: fit-content;
}

.adminDashboard{
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
}

</style>