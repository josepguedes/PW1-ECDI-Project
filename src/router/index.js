import { createRouter, createWebHistory } from 'vue-router';

// Importação de componentes das páginas
import HomePage from '@/views/HomePageView.vue';
import MerchandisingPage from '@/views/MerchandisingPageView.vue';
import MerchandisingProductPage from '@/views/MerchandisingProductPageView.vue';
import TicketsPage from '@/views/TicketsPageView.vue';
import NewsPage from '@/views/NewsPageView.vue';
import SingleNewPage from '@/views/SingleNewPageView.vue';
import EventPage from '@/views/EventPageView.vue';
import ArtistPage from '@/views/ArtistPageView.vue';
import VenuePage from '@/views/VenuePageView.vue';
import AboutUsPage from '@/views/AboutUsPageView.vue';
import ProgramEventsPage from '@/views/ProgramEventsPageView.vue';
import ProgramArtistsPage from '@/views/ProgramArtistsPageView.vue';
import ProgramVenuePage from '@/views/ProgramVenuePageView.vue';
import FAQPage from '@/views/FAQPageView.vue';
import ContactUsPage from '@/views/ContactUsPageView.vue';
import LoginPage from '@/views/LoginPageView.vue';
import RegisterPage from '@/views/RegisterPageView.vue';
import VolunteerPage from '@/views/VolunteerPageView.vue';
import AccountDashboardPage from '@/views/account/DashboardPageView.vue';
import AccountTicketsPage from '@/views/account/UserTicketsPageView.vue';
import AccountCalendarPage from '@/views/account/CalendarPageView.vue';
import AccountVolunteerDashboardPage from '@/views/account/VolunteerDashboardPageView.vue';
import AccountNotificationsPage from '@/views/account/NotificationsPageView.vue';
import AccountPasswordPage from '@/views/account/PasswordPageView.vue';
import LocationsMapPage from '@/views/LocationsMapPageView.vue';
import TravelPage from '@/views/TravelPageView.vue';
import WhereToStayPage from '@/views/WhereToStayPageView.vue';
import FavoritesArtistsPage from '@/views/FavoritesArtistsPageView.vue';

// Definição de rotas
const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/merchandising', name: 'MerchandisingPage', component: MerchandisingPage },
  { path: '/merchandising/product/:id', name: 'MerchandisingProductPage', component: MerchandisingProductPage },
  { path: '/tickets', name: 'TicketsPage', component: TicketsPage },
  { path: '/news', name: 'NewsPage', component: NewsPage },
  { path: '/news/:id', name: 'SingleNewPage', component: SingleNewPage },
  { path: '/event/:id', name: 'EventPage', component: EventPage },
  { path: '/artist/:id', name: 'ArtistPage', component: ArtistPage },
  { path: '/venue/:id', name: 'VenuePage', component: VenuePage },
  { path: '/about', name: 'AboutUsPage', component: AboutUsPage },
  { path: '/program/events', name: 'ProgramEventsPage', component: ProgramEventsPage },
  { path: '/program/artists', name: 'ProgramArtistsPage', component: ProgramArtistsPage },
  { path: '/program/venues', name: 'ProgramVenuePage', component: ProgramVenuePage },
  { path: '/faq', name: 'FAQPage', component: FAQPage },
  { path: '/contact', name: 'ContactUsPage', component: ContactUsPage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/register', name: 'RegisterPage', component: RegisterPage },
  { path: '/volunteer', name: 'VolunteerPage', component: VolunteerPage },
  { path: '/account/dashboard', name: 'AccountDashboardPage', component: AccountDashboardPage },
  { path: '/account/tickets', name: 'AccountTicketsPage', component: AccountTicketsPage },
  { path: '/account/calendar', name: 'AccountCalendarPage', component: AccountCalendarPage },
  { path: '/account/volunteer', name: 'AccountVolunteerDashboardPage', component: AccountVolunteerDashboardPage },
  { path: '/account/notifications', name: 'AccountNotificationsPage', component: AccountNotificationsPage },
  { path: '/account/password', name: 'AccountPasswordPage', component: AccountPasswordPage },
  { path: '/map', name: 'LocationsMapPage', component: LocationsMapPage },
  { path: '/travel', name: 'TravelPage', component: TravelPage },
  { path: '/where-to-stay', name: 'WhereToStayPage', component: WhereToStayPage },
  { path: '/favorites/artists', name: 'FavoritesArtistsPage', component: FavoritesArtistsPage },
];

// Configuração do router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
