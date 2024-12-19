import { createRouter, createWebHistory } from 'vue-router';

// Importação de componentes das páginas
import HomePage from '@/views/HomePageView.vue';
import LoginPage from '@/views/LoginPageView.vue';
import RegisterPage from '@/views/RegisterPageView.vue';
import MerchandisingPage from '@/views/merchandising/MerchandisingPageView.vue';
import MerchandisingProductPage from '@/views/merchandising/MerchandisingProductPageView.vue';
import NewsPage from '@/views/news/NewsPageView.vue';
import SingleNewPage from '@/views/news/SingleNewPageView.vue';
import ProgramEventsPage from '@/views/program/ProgramEventsPageView.vue';
import ProgramArtistsPage from '@/views/program/ProgramArtistsPageView.vue';
import ProgramVenuePage from '@/views/program/ProgramVenuePageView.vue';
import TicketsPage from '@/views/TicketsPageView.vue';
import EventPage from '@/views/EventPageView.vue';
import ArtistPage from '@/views/ArtistPageView.vue';
import VenuePage from '@/views/VenuePageView.vue';
import AboutUsPage from '@/views/AboutUsPageView.vue';
import FAQPage from '@/views/FAQPageView.vue';
import ContactUsPage from '@/views/ContactUsPageView.vue';
import VolunteerPage from '@/views/VolunteerPageView.vue';
import LocationsMapPage from '@/views/LocationsMapPageView.vue';
import TravelPage from '@/views/TravelPageView.vue';
import WhereToStayPage from '@/views/WhereToStayPageView.vue';
import AccountDashboardPage from '@/views/account/DashboardPageView.vue';
import AccountTicketsPage from '@/views/account/UserTicketsPageView.vue';
import AccountCalendarPage from '@/views/account/CalendarPageView.vue';
import AccountVolunteerDashboardPage from '@/views/account/VolunteerDashboardPageView.vue';
import AccountNotificationsPage from '@/views/account/NotificationsPageView.vue';
import AccountPasswordPage from '@/views/account/PasswordPageView.vue';
import AccountFavoritesArtistsPage from '@/views/account/FavoritesArtistsPageView.vue';

// Definição de rotas
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/merchandising',
    name: 'MerchandisingPage',
    component: MerchandisingPage
  },
  {
    path: '/merchandising/:productId',
    name: 'MerchandisingProductPage',
    component: MerchandisingProductPage
  },
  {
    path: '/tickets',
    name: 'TicketsPage',
    component: TicketsPage
  },
  {
    path: '/news',
    name: 'NewsPage',
    component: NewsPage
  },
  {
    path: '/news/:newId',
    name: 'SingleNewPage',
    component: SingleNewPage
  },
  {
    path: '/event/:eventId',
    name: 'EventPage',
    component: EventPage
  },
  {
    path: '/artist/:artistId',
    name: 'ArtistPage',
    component: ArtistPage
  },
  {
    path: '/venue/:venueId',
    name: 'VenuePage',
    component: VenuePage
  },
  {
    path: '/about',
    name: 'AboutUsPage',
    component: AboutUsPage
  },
  {
    path: '/program/events',
    name: 'ProgramEventsPage',
    component: ProgramEventsPage
  },
  {
    path: '/program/artists',
    name: 'ProgramArtistsPage',
    component: ProgramArtistsPage
  },
  {
    path: '/program/venues',
    name: 'ProgramVenuePage',
    component: ProgramVenuePage
  },
  {
    path: '/faq',
    name: 'FAQPage',
    component: FAQPage
  },
  {
    path: '/contact',
    name: 'ContactUsPage',
    component: ContactUsPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/volunteer',
    name: 'VolunteerPage',
    component: VolunteerPage
  },
  {
    path: '/account/dashboard',
    name: 'AccountDashboardPage',
    component: AccountDashboardPage
  },
  {
    path: '/account/tickets', 
    name: 'AccountTicketsPage', 
    component: AccountTicketsPage
  },
  { 
    path: '/account/calendar', 
    name: 'AccountCalendarPage', 
    component: AccountCalendarPage 
  },
  { 
    path: '/account/volunteer', 
    name: 'AccountVolunteerDashboardPage', 
    component: AccountVolunteerDashboardPage 
  },
  { 
    path: '/account/notifications', 
    name: 'AccountNotificationsPage', 
    component: AccountNotificationsPage 
  },
  { 
    path: '/account/password', 
    name: 'AccountPasswordPage', 
    component: AccountPasswordPage 
  },
  { 
    path: '/map', 
    name: 'LocationsMapPage', 
    component: LocationsMapPage 
  },
  { 
    path: '/travel', 
    name: 'TravelPage', 
    component: TravelPage
   },
  { 
    path: '/where-to-stay', 
    name: 'WhereToStayPage', 
    component: WhereToStayPage 
  },
  { 
    path: '/favorites', 
    name: 'AccountFavoritesArtistsPage', 
    component: AccountFavoritesArtistsPage 
  },
];

// Configuração do router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
