<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="navbar">
    <div class="navbar-menuLinks">
      <div class="navbar-menu">
        <div class="menu-btn">
          <img src="/src/assets/Icons/MenuIcon.svg" alt="">
          <p class="menu-text">Menu</p>
        </div>
        <img class="crossIcon" src="/src/assets/Icons/CrossXIcon.svg" alt="">
      </div>
      <div class="navbar-links">
        <RouterLink class="link" :to="{ name: 'TicketsPage' }">Tickets</RouterLink>
        <RouterLink class="link" :to="{ name: 'ProgramEventsPage' }">Program</RouterLink>
        <RouterLink class="link" :to="{ name: 'ProgramArtistsPage' }">Artists</RouterLink>
        <RouterLink class="link" :to="{ name: 'AboutUsPage' }">About us</RouterLink>
      </div>
    </div>
    <div class="hidden-container">
      <div class="hidden-section">
        <p class="hidden-title">Festival</p>
        <div class="hidden-links">
          <RouterLink class="hover-underline-animation" :to="{ name: 'TicketsPage' }">Tickets</RouterLink>
          <RouterLink class="hover-underline-animation" :to="{ name: 'ProgramEventsPage' }">Program</RouterLink>
          <RouterLink class="hover-underline-animation" :to="{ name: 'ProgramArtistsPage' }">Artists</RouterLink>
          <RouterLink class="hover-underline-animation" :to="{ name: 'ProgramVenuePage' }">Venues</RouterLink>
        </div>
      </div>
            <div class="hidden-section">
        <p class="hidden-title">Practical</p>
        <div class="hidden-links">
          <RouterLink class="hover-underline-animation" :to="{ name: 'LocationsMapPage' }">Locations map</RouterLink>
          <RouterLink class="hover-underline-animation" :to="{ name: 'TravelPage' }">Travel</RouterLink>
          <RouterLink class="hover-underline-animation" :to="{ name: 'WhereToStayPage' }">Where to stay</RouterLink>
          <RouterLink class="hover-underline-animation" :to="{ name: 'FAQPage' }">FAQ</RouterLink>
        </div>
      </div>
      <div class="hidden-section">
        <p class="hidden-title">More</p>
        <div class="hidden-links">
          <RouterLink class="hover-underline-animation" :to="{ name: 'NewsPage' }">News</RouterLink>
          <RouterLink class="hover-underline-animation" :to="{ name: 'ContactUsPage' }">Contact us</RouterLink>
          <RouterLink class="hover-underline-animation" :to="{ name: 'VolunteerPage' }">Volunteer</RouterLink>
          <RouterLink class="hover-underline-animation" :to="{ name: 'MerchandisingPage' }">Merchandise</RouterLink>
          <RouterLink class="hover-underline-animation" :to="{ name: 'AboutUsPage' }">About us</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.navbar{
  display: flex;
  width: fit-content;
  padding: 6px 16px 6px 6px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  border-radius: 10px;
  background: rgba(250, 250, 250, 0.05);
  backdrop-filter: blur(100px);
}

.navbar-menuLinks{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 36px;
}

.navbar-links{
  display: flex;
  flex-direction: row;
  gap: 48px;
}

.crossIcon{
  display: none;
}

.navbar-menu{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px;
  background: rgba(250, 250, 250, 0.06);
  backdrop-filter: blur(100px);
  padding: 12px;
}

.menu-btn{
  display: flex;
  flex-direction: row;
  gap: 12px;
}

.menu-text{
  font-family: Aspekta500;
  font-size: 1.3rem;
}

.link{
  color: var(--gray200);
  font-family: Aspekta500;
  font-size: 1.3rem;
}

.link:hover{
  color: var(--mainWhite);
  transition: transform 0.15s ease-out;
}

.hidden-links{
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hidden-title{
  font-family: Aspekta400;
  font-size: 1.125rem;
  color: var(--gray100);
}

.hidden-section{
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hidden-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
  border-radius: 8px;
  background: rgba(250, 250, 250, 0.02);
  backdrop-filter: blur(100px);
}
</style>