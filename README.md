# PW1-ECDI-Project

A Vue.js-based web application for managing music festival events, featuring artist information, ticket sales, venue details, news, and user account management.

## 🚀 Technologies Used

### Frontend Framework
- **Vue 3** - Progressive JavaScript framework for building user interfaces
- **Vue Router** - Official router for Vue.js for navigation between pages
- **Pinia** - State management library for Vue.js with persistence support

### Development Tools
- **Vite** - Next-generation frontend build tool for fast development
- **Vitest** - Unit testing framework for Vue components
- **Vue Devtools** - Browser extension for debugging Vue applications

### UI & Styling
- **Lucide Vue** - Icon library for modern UI elements
- **Custom CSS** - Custom stylesheets with Aspekta font family

### APIs & Integration
- **Spotify API** - Integration with Spotify for artist and music data
- **Google Maps API** - Interactive maps for venue locations

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16.x or higher)
- **npm** (comes with Node.js)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PW1-ECDI-Project
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Application

### Development Mode

Start the development server with hot-reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/` (or another port if 5173 is busy).

### Production Build

Build the application for production:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🧪 Testing

### Run Unit Tests

Run tests in watch mode:

```bash
npm run test
```

### Run Tests Once

```bash
npm run test:unit
```

### Generate Coverage Report

```bash
npm run coverage
```

## 📁 Project Structure

```
src/
├── api/              # API integration (Spotify)
├── assets/           # Static assets (images, fonts, CSS)
├── components/       # Reusable Vue components
├── router/           # Vue Router configuration
├── stores/           # Pinia state management stores
├── views/            # Page-level Vue components
│   ├── account/      # User account pages
│   ├── admin/        # Admin panel pages
│   ├── merchandising/# Merchandise pages
│   ├── news/         # News pages
│   └── program/      # Program and schedule pages
├── App.vue           # Root component
└── main.js           # Application entry point
```

## 🛣️ Application Routes

### Public Routes
| Route | Purpose |
|-------|---------|
| `/` | Home page - Main landing page with festival overview |
| `/tickets` | Tickets page - Browse and purchase festival tickets |
| `/merchandising` | Merchandise listing - View all available products |
| `/merchandising/:productId` | Product details - View specific merchandise item |
| `/news` | News listing - Browse all festival news articles |
| `/news/:newId` | Single news article - Read full news content |
| `/program/events` | Events program - View all scheduled events |
| `/program/artists` | Artists program - Browse all performing artists |
| `/program/venues` | Venues program - Explore festival venues |
| `/event/:eventId` | Event details - View specific event information |
| `/artist/:artistId` | Artist details - View artist profile and tracks |
| `/venue/:venueId` | Venue details - View venue information and events |
| `/about` | About Us - Learn about the festival |
| `/faq` | FAQ page - Frequently asked questions |
| `/contact` | Contact Us - Submit inquiries and feedback |
| `/volunteer` | Volunteer registration - Apply to volunteer |
| `/map` | Locations map - Interactive map of festival locations |
| `/travel` | Travel information - Transportation and travel tips |
| `/where-to-stay` | Accommodation - Find places to stay |
| `/login` | User login - Sign in to your account |
| `/register` | User registration - Create a new account |

### Protected Routes (Requires Authentication)
| Route | Purpose |
|-------|---------|
| `/account/dashboard` | User dashboard - Overview of user activity |
| `/account/tickets` | My tickets - View purchased tickets |
| `/account/calendar` | Personal calendar - Event schedule |
| `/account/notifications` | Notifications - View user notifications |
| `/account/favorites` | Favorite artists - Manage favorite artists |
| `/account/password` | Password management - Change account password |
| `/account/volunteer` | Volunteer dashboard - Manage volunteer shifts (requires volunteer role) |

### Admin Routes (Requires Admin Role)
| Route | Purpose |
|-------|---------|
| `/admin/adminDashboard` | Admin dashboard - Overview and analytics |
| `/admin/adminArtist` | Artist management - Create, edit, delete artists |
| `/admin/adminVenue` | Venue management - Manage festival venues |
| `/admin/adminEvent` | Event management - Create and manage events |
| `/admin/adminNews` | News management - Publish and edit news articles |
| `/admin/adminMerch` | Merchandise management - Manage store products |
| `/admin/adminShifts` | Shift management - Create volunteer shifts |
| `/admin/adminContact` | Contact submissions - View contact form submissions |
| `/admin/adminVolunteers` | Volunteer management - Manage volunteer applications |

## 🎯 Key Features

- **Event Management** - Browse and view festival events and schedules
- **Artist Profiles** - Detailed information about performing artists
- **Ticket Purchasing** - Buy tickets for events
- **News Section** - Stay updated with festival news
- **Venue Information** - Interactive maps and venue details
- **User Accounts** - Personal dashboards, favorites, and notifications
- **Merchandise Store** - Purchase festival merchandise
- **Volunteer Management** - Register and manage volunteer shifts
- **Admin Panel** - Manage content, events, and users

## 👥 User Roles

- **Visitors** - Browse events, artists, and information
- **Registered Users** - Purchase tickets, save favorites, receive notifications
- **Volunteers** - Access volunteer dashboard and shifts
- **Administrators** - Full content management capabilities

## 💻 Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)

## 👥 Development Team

- **José Guedes** - Full-Stack Developer [40230110@esmad.ipp.pt]
- **Eduardo Sousa** - Full-Stack Developer [40230115@esmad.ipp.pt]
- **Xavier Kooijman** - Full-Stack Developer [40220456@esmad.ipp.pt] 

## 📝 License

This project is developed as part of the PW1 course at Instituto Politécnico do Porto.

## 🤝 Contributing

This is an academic project. For any questions or contributions, please contact the development team.
