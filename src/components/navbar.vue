<script>
import { RouterLink } from "vue-router";

export default {
  data(){
    return{
      open: false,
    }
  },
  methods: {
    navbarAnimation() {
      if(this.open == true){
        this.open = false
      }
      else{
        this.open = true
      }
      console.log(this.open)
    }
  }
}
</script>

<template>
  <div class="header">
    <RouterLink class="logo" :to="{ name: 'HomePage' }">Hypnøtica</RouterLink>
    <div class="navbar">
    <div class="navbar-menuLinks">
      <div :class="{w100: open}" class="navbar-menu" @click="navbarAnimation()">
        <div class="menu-btn">
          <img src="/src/assets/Icons/MenuIcon.svg" alt="">
          <p class="menu-text">Menu</p>
        </div>
        <img class="vHidden" :class="{vShow: open}" src="/src/assets/Icons/CrossXIcon.svg" alt="">
      </div>
      <div class="navbar-links" :class="{display: open}">
        <RouterLink class="link" :to="{ name: 'TicketsPage' }">Tickets</RouterLink>
        <RouterLink class="link" :to="{ name: 'ProgramEventsPage' }">Program</RouterLink>
        <RouterLink class="link" :to="{ name: 'ProgramArtistsPage' }">Artists</RouterLink>
        <RouterLink class="link" :to="{ name: 'AboutUsPage' }">About us</RouterLink>
      </div>
    </div>
    <div class="hidden-container" :class="{subnav: open}">
      <div class="hidden-section" :class="{vShow: open}">
        <p class="hidden-title">Festival</p>
        <div class="hidden-links">
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'TicketsPage' }">Tickets</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'ProgramEventsPage' }">Program</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'ProgramArtistsPage' }">Artists</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'ProgramVenuePage' }">Venues</RouterLink>
        </div>
      </div>
            <div class="hidden-section" :class="{vShow: open}">
        <p class="hidden-title">Practical</p>
        <div class="hidden-links">
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'LocationsMapPage' }">Locations map</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'TravelPage' }">Travel</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'WhereToStayPage' }">Where to stay</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'FAQPage' }">FAQ</RouterLink>
        </div>
      </div>
      <div class="hidden-section" :class="{vShow: open}">
        <p class="hidden-title">More</p>
        <div class="hidden-links">
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'NewsPage' }">News</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'ContactUsPage' }">Contact us</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'VolunteerPage' }">Volunteer</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'MerchandisingPage' }">Merchandise</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'AboutUsPage' }">About us</RouterLink>
        </div>
      </div>
    </div>
  </div>
  <RouterLink class="btn-secondary" :to="{ name: 'LoginPage' }">Login</RouterLink>
  </div>
</template>

<style scoped>

.header{
  position: sticky;
  display: flex;
  padding: 48px;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 1000;
}

.logo{
  font-family: Aspekta500;
  font-size: 2rem;
  color: var(--mainWhite);
}

.w-fit{
  width: fit-content;
}

.w100{
  width: 100% !important;
}

.flex{
  display: flex !important;
}

.navbar{
  display: flex;
  width: 588px;
  padding: 6px;
  flex-direction: column;
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
  align-items: center;
  gap: 48px;
}

.vHidden{
  visibility: hidden;
}

.vShow{
  visibility: visible !important;
  transition-delay: 0.3s;
}

.display{
  display: none;
}

.navbar-menu{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: rgba(250, 250, 250, 0.06);
  backdrop-filter: blur(100px);
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s linear;
  width: 100px;
}

.menu-btn{
  display: flex;
  flex-direction: row;
  gap: 12px;
}

.menu-text{
  font-family: Aspekta350;
  font-size: 1.25rem;
}

.link{
  color: var(--gray200);
  font-family: Aspekta350;
  font-size: 1.25rem;
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
  font-family: Aspekta300;
  font-size: 1.125rem;
  color: var(--gray100);
}

.hidden-section{
  visibility: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hidden-container{
  overflow: hidden;
  max-height: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
  border-radius: 8px;
  background: rgba(250, 250, 250, 0.02);
  backdrop-filter: blur(100px);
  transition: all 0.3s linear;
}

.subnav{
  max-height: 272px;
}

</style>