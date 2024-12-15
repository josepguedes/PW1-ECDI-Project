import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ArtistsListView from '@/views/ArtistsListView.vue';
import ArtistView from '@/views/ArtistView.vue';
import EventsListView from '@/views/EventsListView.vue';
import EventView from '@/views/EventView.vue';
import TicketsView from '@/views/TicketsView.vue';
import VenuesView from '@/views/VenuesView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import NewsView from '@/views/NewsView.vue';
import MerchandisingView from '@/views/MerchandisingView.vue';
import FAQView from '@/views/FAQView.vue';
import ContactUsView from '@/views/ContactUsView.vue';
import LocationMapView from '@/views/LocationMapView.vue';
import TravelPageView from '@/views/TravelPageView.vue';
import WhereToStayView from '@/views/WhereToStayView.vue';
import ProgramEventView from '@/views/ProgramEventView.vue';
import ProgramArtistView from '@/views/ProgramArtistView.vue';
import ProgramVenueView from '@/views/ProgramVenueView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/artists',
      name: 'artists',
      component: ArtistsListView,
    },
    {
      path: '/artist/:artistId',
      name: 'artist',
      component: ArtistView,
    },
    {
      path: '/events',
      name: 'events',
      component: EventsListView,
    },
    {
      path: '/events/:eventId',
      name: 'event',
      component: EventView,
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: TicketsView,
    },
    {
      path: '/venues',
      name: 'venues',
      component: VenuesView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/merchandising',
      name: 'merchandising',
      component: MerchandisingView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQView,
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUsView,
    },
    {
      path: '/location-map',
      name: 'location-map',
      component: LocationMapView,
    },
    {
      path: '/travel',
      name: 'travel',
      component: TravelPageView,
    },
    {
      path: '/where-to-stay',
      name: 'where-to-stay',
      component: WhereToStayView,
    },
    {
      path: '/program/event',
      name: 'program-event',
      component: ProgramEventView,
    },
    {
      path: '/program/artist',
      name: 'program-artist',
      component: ProgramArtistView,
    },
    {
      path: '/program/venue',
      name: 'program-venue',
      component: ProgramVenueView,
    },
  ],
});

export default router;
