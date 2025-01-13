<script>
import { RouterLink } from "vue-router";

</script>

<template>
  <div class="footer">
    <div class="newsletter-container">
      <p class="newsletterForm-title">Sign up to our newsletter</p>
      <div class="newsletter-form">
        <input class="form-input w-300" type="email" placeholder="Email">
        <button class="btn-primary">Sign up</button>
      </div>
    </div>
    <div class="footer-links">
      <div class="links-section">
        <p class="section-title">Festival</p>
        <div class="links">
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'TicketsPage' }">Tickets</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'ProgramEventsPage' }">Program</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'ProgramArtistsPage' }">Artists</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'ProgramVenuePage' }">Venues</RouterLink>
        </div>
      </div>
      <div class="links-section">
        <p class="section-title">Practical</p>
        <div class="links">
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'LocationsMapPage' }">Locations map</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'TravelPage' }">Travel</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'WhereToStayPage' }">Where to stay</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'FAQPage' }">FAQ</RouterLink>
        </div>
      </div>
      <div class="links-section">
        <p class="section-title">More</p>
        <div class="links">
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'NewsPage' }">News</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'ContactUsPage' }">Contact us</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'VolunteerPage' }">Volunteer</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'MerchandisingPage' }">Merchandise</RouterLink>
          <RouterLink class="hover-underline-animation w-fit" :to="{ name: 'AboutUsPage' }">About us</RouterLink>
        </div>
      </div>
      <div class="links-section">
        <p class="section-title">Socials</p>
        <div class="links">
          <p class="hover-underline-animation w-fit">Instagram</p>
          <p class="hover-underline-animation w-fit">Youtube</p>
          <p class="hover-underline-animation w-fit">Twitter</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.w-fit{
  width: fit-content;
}

.w-300{
  width: 300px;
}

.footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 96px 48px;
  border-top: 1px solid var(--gray500);
  background-image: url(/src/assets/images/footerBlur.svg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.newsletter-container{
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.newsletter-form{
  display: flex;
  flex-direction: row;
  gap: 24px;
}

.newsletterForm-title{
  font-family: Aspekta400;
  font-size: 1.25rem;
  color: var(--gray100);
}

.footer-links{
  display: flex;
  flex-direction: row;
  gap: 96px;
}

.links{
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.section-title{
  font-family: Aspekta300;
  font-size: 1.125rem;
  color: var(--gray100);
}

.links-section{
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>