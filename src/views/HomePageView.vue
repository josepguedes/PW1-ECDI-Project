<template>
  <div>
    <h1>Landing Page</h1><br>

    <h3>Testar Login (não pode aceder estas páginas sem estar logado):</h3><br>
    <RouterLink to="/account/notifications">User Notifications</RouterLink><br>
    <RouterLink to="/account/calendar">User Calendar</RouterLink><br>
    <RouterLink to="/account/tickets">User Tickets</RouterLink><br>
    <RouterLink to="/event/1">Event Page Teste</RouterLink><br>
    <RouterLink to="/artist/1">Artist Page Teste</RouterLink><br>
    <RouterLink to="/venue/1">Venue Page Teste</RouterLink><br>
    <RouterLink to='/news/1'>Single New Page Teste</RouterLink><br>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>