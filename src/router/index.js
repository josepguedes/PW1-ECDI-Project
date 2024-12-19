import { createRouter, createWebHistory } from 'vue-router';

// Importação de componentes das páginas
import HomePage from '@/views/HomePageView.vue';
import MerchandisingPage from '@/views/MerchandisingPage.vue';
import MerchandisingProductPage from '@/views/MerchandisingProductPage.vue';
import TicketsPage from '@/views/TicketsPage.vue';
import NewsPage from '@/views/NewsPage.vue';
import SingleNewPage from '@/views/SingleNewPage.vue';
import EventPage from '@/views/EventPage.vue';
import ArtistPage from '@/views/ArtistPage.vue';
import VenuePage from '@/views/VenuePage.vue';
import AboutUsPage from '@/views/AboutUsPage.vue';
import ProgramEventsPage from '@/views/ProgramEventsPage.vue';
import ProgramArtistsPage from '@/views/ProgramArtistsPage.vue';
import ProgramVenuePage from '@/views/ProgramVenuePage.vue';
import FAQPage from '@/views/FAQPage.vue';
import ContactUsPage from '@/views/ContactUsPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import VolunteerPage from '@/views/VolunteerPage.vue';
import AccountDashboardPage from '@/views/account/DashboardPage.vue';
import AccountTicketsPage from '@/views/account/TicketsPage.vue';
import AccountCalendarPage from '@/views/account/CalendarPage.vue';
import AccountVolunteerDashboardPage from '@/views/account/VolunteerDashboardPage.vue';
import AccountNotificationsPage from '@/views/account/NotificationsPage.vue';
import AccountPasswordPage from '@/views/account/PasswordPage.vue';
import LocationsMapPage from '@/views/LocationsMapPage.vue';
import TravelPage from '@/views/TravelPage.vue';
import WhereToStayPage from '@/views/WhereToStayPage.vue';
import FavoritesArtistsPage from '@/views/FavoritesArtistsPage.vue';

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
