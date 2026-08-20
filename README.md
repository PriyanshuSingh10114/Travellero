# 🌍 Travelor — Premium Travel & Tourism Platform

[![React](https://img.shields.io/badge/React-19.2.5-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0.10-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.2.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-v7.14.2-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

**Travelor** is a modern, responsive, feature-packed travel and tourism web application designed to deliver an immersive trip planning and exploration experience. Built with **React 19**, **Vite 8**, **Tailwind CSS v4**, and **React Router DOM v7**, Travelor features interactive tour packages, detailed destination guides, expert tour guide profiles, animated statistics, client testimonials, and a travel blog hub.

---

## 📸 Overview & Visual Highlights

Travelor showcases travel destinations around the globe with smooth section color transitions, touch-enabled carousels, responsive navigation with backdrop blur, and interactive detailed modal views for tours, guides, destinations, and services.

- ✈️ **Popular Tour Packages**: Browse curated holiday itineraries complete with day-by-day breakdowns, pricing, and photo galleries.
- 🏝️ **Top Destinations & Categories**: Explore travel spots filtered by categories like Beach, Adventure, Mountain, and Culture.
- 🧑‍🌾 **Expert Tour Guides**: Connect with verified local guides and view their specializations, experience, and ratings.
- 📊 **Interactive Statistics**: Animated counters showcasing completed tours, satisfied travelers, and global destination coverage.
- 📰 **Travel Insights & Blog**: Expert tips, destination guides, and travel news.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack & Dependencies](#-tech-stack--dependencies)
- [Project Directory Structure](#-project-directory-structure)
- [Application Routes](#-application-routes)
- [Key Components Overview](#-key-components-overview)
- [JSON Data Models](#-json-data-models)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [Available Scripts](#-available-scripts)
- [Styling & Design System](#-styling--design-system)
- [Future Roadmap](#-future-roadmap)
- [Author](#-author)
- [License](#-license)

---

## ✨ Features

### 🌟 Core Experience
- **Dynamic Parameterized Routing**: Dedicated detail pages for tours (`/tours/:id`), destinations (`/destination/:id`), services (`/services/:id`), and tour guides (`/tourguide/:id`).
- **Smooth Color Transitions**: Custom `SectionTransition` component creating wave-like fluid color flows between layout sections.
- **Interactive Carousels**: Touch-enabled Swiper sliders for tour showcases, destination categories, and traveler testimonials.
- **Animated Statistics**: Counter animations powered by `react-countup` to dynamically present performance metrics.
- **Sticky Glassmorphism Navbar**: Fixed top navigation header with scroll-reactive opacity, backdrop blur, and responsive mobile menu drawer.
- **Interactive FAQ Accordion**: Expandable/collapsible FAQ component answering common booking questions.
- **Pricing Tier Comparisons**: Tiered package pricing tables (Basic, Standard, Premium) for flexible travel budgets.
- **Contact & Inquiry Form**: Interactive contact form with integrated location maps and support channels.

---

## 🛠️ Tech Stack & Dependencies

### Core Frameworks & Libraries
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **React** | `^19.2.5` | Frontend UI library with latest concurrent features |
| **Vite** | `^8.0.10` | Next-generation frontend build tool and dev server |
| **Tailwind CSS** | `^4.2.4` | Utility-first CSS framework with Vite plugin integration |
| **React Router DOM** | `^7.14.2` | Client-side routing and layout management |

### UI & Animations
| Library | Version | Purpose |
| :--- | :--- | :--- |
| **Swiper** | `^12.1.4` | Modern mobile-friendly touch sliders and carousels |
| **@iconify/react** | `^6.0.2` | On-demand vector icons (Feather, Lucide, FontAwesome) |
| **React CountUp** | `^6.4.0` | Animated numerical counter triggers on scroll |

### Code Quality & Tooling
| Tool | Version | Purpose |
| :--- | :--- | :--- |
| **ESLint** | `^10.3.0` | ECMAScript/React linting utility |
| **Prettier** | `^3.8.3` | Code formatting standardizer |
| **@vitejs/plugin-react** | `^6.0.1` | Fast Refresh plugin for Vite React development |

---

## 📁 Project Directory Structure

```
Travelor/
├── client/                     # Frontend React application
│   ├── public/                 # Static assets & favicon
│   ├── src/
│   │   ├── assets/             # Images, banners, and vector assets
│   │   ├── Components/         # Modular reusable UI components
│   │   │   ├── BlogCard/       # Blog post item card
│   │   │   ├── Buttons/        # Styled button elements & toggle switchers
│   │   │   ├── DestinationCard/# Destination preview card
│   │   │   ├── DestinationCtgCard/ # Category filter card
│   │   │   ├── Footer/         # App footer with navigation & newsletter
│   │   │   ├── Index/          # Home page modular sections
│   │   │   │   ├── About/      # Home about overview section
│   │   │   │   ├── Banner/     # Promotional call-to-action banner
│   │   │   │   ├── Blogs/      # Home featured blogs slider
│   │   │   │   ├── BookingSteps/ # Step-by-step booking guide
│   │   │   │   ├── Counter/    # Animated statistics bar
│   │   │   │   ├── Hero/       # Hero section with search & background video/image
│   │   │   │   ├── PopularTourCard/ # Featured tour card component
│   │   │   │   ├── Testimonials/ # Customer feedback carousel
│   │   │   │   ├── TopDestination/ # Destination highlight slider
│   │   │   │   ├── TourCategories/ # Category showcase
│   │   │   │   ├── TourGuide/  # Guide team showcase
│   │   │   │   └── Tours/      # Popular tours grid
│   │   │   ├── Navbar/         # Header bar & responsive drawer navigation
│   │   │   ├── PhotoBlend/     # Image collage graphic layout
│   │   │   └── SectionTransition/ # Fluid section wave dividers
│   │   ├── Data/               # Local JSON datasets (Mock API Data)
│   │   │   ├── Blogs.json      # Blog posts & articles
│   │   │   ├── DestinationCtg.json # Travel category classifications
│   │   │   ├── PopularTours.json   # Comprehensive tour package details & itineraries
│   │   │   ├── Services.json   # Offered travel & booking services
│   │   │   ├── Teams.json      # Tour guide bios & social handles
│   │   │   └── TopDestination.json # Featured destination items
│   │   ├── Pages/              # Page views bound to routes
│   │   │   ├── About.jsx       # About us company page
│   │   │   ├── Blogs.jsx       # Travel blog listing
│   │   │   ├── Contact.jsx     # Contact form & location page
│   │   │   ├── Destination.jsx # Destination catalog
│   │   │   ├── DestinationDetails.jsx # Single destination detailed view
│   │   │   ├── Faqs.jsx        # Frequently Asked Questions accordion
│   │   │   ├── Page404.jsx     # Custom 404 page not found route
│   │   │   ├── PricingPlan.jsx # Subscription & tour pricing tiers
│   │   │   ├── ServiceDetails.jsx # Individual service feature page
│   │   │   ├── Services.jsx    # Service offerings listing
│   │   │   ├── Testimonials.jsx# Full client reviews page
│   │   │   ├── TourDetails.jsx # Detailed tour itinerary & booking preview
│   │   │   ├── TourGuide.jsx   # Tour guides directory page
│   │   │   ├── TourGuideDetails.jsx # Guide profile & assigned tours
│   │   │   └── Tours.jsx       # Complete tours catalog
│   │   ├── App.css             # Component custom overrides
│   │   ├── App.jsx             # Main Router layout & routes declaration
│   │   ├── index.css           # Global CSS & Tailwind imports
│   │   └── main.jsx            # Application entry point
│   ├── eslint.config.js        # ESLint rule configuration
│   ├── index.html              # HTML template entry
│   ├── package.json            # Client dependencies & scripts
│   └── vite.config.js          # Vite build configuration
├── server/                     # Backend API server (Reserved for expansion)
├── .gitignore                  # Git ignore definitions
└── README.md                   # Project documentation
```

---

## 🗺️ Application Routes

| Path | Component | Description |
| :--- | :--- | :--- |
| `/` | `Index.jsx` | Landing page with Hero, Popular Destinations, Booking Steps, Statistics, and Featured Packages |
| `/about` | `About.jsx` | Company history, core values, operational mission, and team profile highlights |
| `/services` | `Services.jsx` | List of core offerings (Flight booking, Hotel reservations, Custom itineraries, Tour guides) |
| `/services/:id` | `ServiceDetails.jsx` | Deep dive into specific service details, inclusions, and request form |
| `/tours` | `Tours.jsx` | Full catalog of available domestic and international tour packages |
| `/tours/:id` | `TourDetails.jsx` | Detailed tour overview, day-by-day itinerary, included amenities, pricing, and booking form |
| `/destination` | `Destination.jsx` | Global destination explorer grouped by region and travel style |
| `/destination/:id` | `DestinationDetails.jsx` | Detailed destination page featuring top attractions, travel tips, and recommended tours |
| `/tour-guide` | `TourGuide.jsx` | Directory of certified local tour guides |
| `/tourguide/:id` | `TourGuideDetails.jsx` | Tour guide bio, languages spoken, years of experience, and customer reviews |
| `/pricing` | `PricingPlan.jsx` | Transparent package pricing tiers (Budget, Standard, VIP Luxury) |
| `/testimonials` | `Testimonials.jsx` | Verified traveler reviews, photos, and ratings |
| `/blogs` | `Blogs.jsx` | Travel guides, packing tips, visa advice, and destination stories |
| `/faqs` | `Faqs.jsx` | Interactive accordion with responses to common travel questions |
| `/contact` | `Contact.jsx` | Direct inquiry form, email contacts, phone lines, and physical office location map |
| `/pagenotfound` | `Page404.jsx` | Custom styled 404 page for invalid or missing URLs |

---

## 🧩 Key Components Overview

### 1. `Navbar` & `Navmenu`
- Renders a responsive header that switches from a translucent gradient to an opaque backdrop-blurred teal color bar (`#066168`) upon scrolling down.
- Supports nested sub-menus, mobile hamburger drawer toggling, and current route active state highlighting.

### 2. `SectionTransition`
- Creates seamless visual color transitions between contrasting sections using responsive SVG wave curves and gradient masks.

### 3. `PopularTourCard` & `DestinationCard`
- Reusable UI cards with hover zoom effects, rating badges, duration labels, pricing tags, and direct links to detail views.

### 4. `Counter`
- Utilizes `react-countup` triggered on view port scroll to display animated milestone numbers (e.g., Happy Travelers, Tour Destinations, Total Guides).

---

## 📊 JSON Data Models

Travelor utilizes structured mock JSON datasets in `client/src/Data/` to simulate RESTful API endpoints:

- **`PopularTours.json`**: Contains tour objects with `id`, `title`, `days`, `price`, `Duration`, `Places`, `image`, and nested `DaysDescription` objects representing day-by-day itineraries.
- **`TopDestination.json`**: Destination objects with location names, country flags, landmark images, and tour counts.
- **`Services.json`**: Feature cards for travel management offerings.
- **`Teams.json`**: Guide team bios, contact details, social channels, and guide expertise.
- **`Blogs.json`**: Articles with publication dates, author details, read time, and tags.

---

## 🚀 Getting Started

Follow these steps to set up and run Travelor on your local development environment.

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.0.0` or higher ([Download Node.js](https://nodejs.org/))
- **npm**: `v9.0.0` or higher (bundled with Node.js) or **yarn** / **pnpm**

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/PriyanshuSingh10114/Travellero.git
   cd Travellero
   ```

2. **Navigate to the Client Directory**:
   ```bash
   cd client
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

### Running the Development Server

Launch the Vite local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Once started, open your browser and navigate to:
```text
http://localhost:5173
```

---

## 📜 Available Scripts

Inside the `client/` directory, you can run the following npm scripts:

| Script | Command | Description |
| :--- | :--- | :--- |
| **`npm run dev`** | `vite` | Starts the Vite dev server with instant HMR at `http://localhost:5173` |
| **`npm run build`** | `vite build` | Compiles and optimizes the React application into static production assets under `dist/` |
| **`npm run preview`** | `vite preview` | Locally previews the production build output from `dist/` |
| **`npm run lint`** | `eslint .` | Runs ESLint to check for code standard violations and syntax errors |

---

## 🎨 Styling & Design System

Travelor uses a custom palette centered around deep tropical teals, vibrant oceanic blues, soft warm creams, and crisp whites.

- **Primary Teal**: `#066168`
- **Secondary Accent**: Teal / Cyan highlights
- **Background Tones**: Cream (`bg-cream`), Light Gray, Dark Cyan, Pure White
- **Typography**: Responsive scale styled with utility classes and vector icon overlays via `@iconify/react`.

---

## 🔮 Future Roadmap

- [ ] **Backend API Integration**: Connect `server/` with Express.js, MongoDB, or Node.js for live data fetching.
- [ ] **User Authentication**: Implement JWT-based login/signup for traveler accounts and booking histories.
- [ ] **Interactive Booking & Checkout**: Integrate Stripe / PayPal payment gateways for real-time tour booking.
- [ ] **Interactive Map Explorer**: Add Leaflet / Mapbox interactive maps for exploring destinations visually.
- [ ] **Multi-Currency & i18n**: Support dynamic currency conversion and multi-language switching.

## 👤 Author

- **Priyanshu Singh** — [@PriyanshuSingh10114](https://github.com/PriyanshuSingh10114) • [priyanshusingh22340@gmail.com](mailto:priyanshusingh22340@gmail.com)

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<p align="center">
  Made with ❤️ by <strong>Priyanshu Singh</strong>
</p>
