# 🌟 Edinam Destiny Recruitment Agency — Web Application
> **وكالة إيدينام ديستيني للتوظيف بالرياض — مربيات · طهاة · عاملات نظافة · مقدمو رعاية**  
> *A high-performance, lightweight, international-standard web application for domestic recruitment and hourly/monthly domestic staffing in Riyadh, Saudi Arabia.*

---

## 📋 Table of Contents
1. [Overview](#-overview)
2. [Tech Stack](#-tech-stack)
3. [Architecture & International Code Standard](#-architecture--international-code-standard)
4. [Folder Structure](#-folder-structure)
5. [Quick Start (Installation & Development)](#-quick-start)
6. [Single Source of Truth (How to Fix / Customize)](#-single-source-of-truth-how-to-fix--customize)
   - [Change Phone & WhatsApp](#1-change-phone--whatsapp)
   - [Change Branding & Logo](#2-change-branding--logo)
   - [Change Theme Colors](#3-change-theme-colors)
   - [Add or Edit Staff Profiles](#4-add-or-edit-staff-profiles)
   - [Change Pricing & Packages](#5-change-pricing--packages)
   - [Change Riyadh Districts](#6-change-riyadh-districts)
7. [Internationalization & RTL Engine](#-internationalization--rtl-engine)
8. [SEO & Schema.org Structured Data](#-seo--schemaorg-structured-data)
9. [Administrative Console](#-administrative-console)
10. [Production Build & Deployment Guide](#-production-build--deployment-guide)

---

## 🎯 Overview

**Edinam Destiny Recruitment Agency** is an ultra-fast, responsive web platform engineered specifically for the Saudi domestic recruitment and staffing market. It enables Riyadh families to effortlessly calculate pricing, browse verified domestic personnel CVs (Nannies, Cooks, Cleaners, Caregivers), and confirm bookings instantly via direct WhatsApp integration and phone calls.

### Key Highlights:
- 🚀 **Ultra-lightweight & Fast:** 0 heavy dependencies, pure React 18 + Vite + Tailwind CSS. Production bundle is ~92 KB gzipped.
- 🌐 **Full Dual-Language (Arabic & English):** Automatic RTL / LTR layout switching with persistent language preference.
- 🎨 **Luxury Aesthetic:** Royal Emerald Green (`#0D4734`), Jade Accent (`#1B7A5A`), and Radiant Warm Gold (`#D4AF37`) palette.
- 📱 **Mobile-First & PWA Ready:** Smooth gestures, touch-friendly tap targets (minimum 44px), sticky navigation and floating actions.
- ♿ **WCAG 2.1 AA Accessibility Compliant:** Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`), full `aria-label` coverage on icon buttons, keyboard navigable focus rings.
- 🔍 **SEO & Google Rich Snippets:** Full Open Graph, Twitter cards, and Schema.org `EmploymentAgency` JSON-LD metadata for Riyadh search rankings.

---

## 💻 Tech Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| **Runtime / Library** | React | `^18.3.1` | Component-driven UI architecture |
| **Bundler / Dev Server** | Vite | `^6.0.7` | Blazing fast HMR and optimized Rollup tree-shaken builds |
| **Styling Framework** | Tailwind CSS | `^3.4.17` | Utility-first, zero-runtime CSS with custom design system tokens |
| **Iconography** | Lucide React | `^1.16.0` | Accessible, tree-shakeable SVG icons |
| **State & i18n** | React Context API | Native | Zero external boilerplate; persistent `localStorage` synchronization |
| **Typography** | Google Fonts | Web | `Cairo` (Arabic Display/Body) & `Plus Jakarta Sans` (English) |

---

## 🏛 Architecture & International Code Standard

The project adheres to modern international web application standards:
1. **Single Source of Truth (`src/config/siteConfig.js`):** All business contact information, numbers, branding, emails, and theme tokens are defined in one central configuration file.
2. **Defensive Programming:** Null-safe data lookups with fallbacks so missing items or cleared caches never crash the application.
3. **Decoupled Business Data:** Independent data files under `src/data/` for services, districts, staff, and translations.
4. **Clean Code & Conventions:**
   - **Components:** `PascalCase.jsx`
   - **Hooks / Utilities / Data:** `camelCase.js`
   - **Constants:** `UPPER_SNAKE_CASE`
   - **CSS Classes:** Tailwind standard utilities only (no scattered inline CSS or conflicting style blocks).

---

## 📁 Folder Structure

```
sakana-home-care/
├── index.html                   # International standard HTML5 entry with SEO & Schema.org JSON-LD
├── package.json                 # Project configuration & npm scripts
├── postcss.config.js            # PostCSS pipeline for Tailwind & Autoprefixer
├── tailwind.config.js           # Theme color palette, fonts, shadows, and screen tokens
├── vite.config.js               # Vite build configuration
├── README.md                    # This master documentation
│
├── public/                      # Static assets served at root
│   ├── logo.jpg                 # Circular badge logo (English version)
│   ├── logo2.jpg                # Circular badge logo (Arabic version)
│   └── images/
│       └── workers/             # Localized worker profile avatars (maid-1.png to maid-4.png)
│
└── src/
    ├── main.jsx                 # React root mount point with Providers
    ├── App.jsx                  # Main application shell, router, and modal coordinator
    ├── index.css                # Base typography, custom scrollbars, and Tailwind layers
    │
    ├── config/                  # ⭐ CENTRAL CONFIGURATION
    │   └── siteConfig.js        # Single source of truth (Phone, WhatsApp, Name, Email, Address, Colors)
    │
    ├── context/                 # Application Context Providers
    │   ├── AppContext.jsx       # State: Workers, bookings, cart, active modals, SPA routing
    │   └── LanguageContext.jsx  # State: Arabic (RTL) / English (LTR) language switcher
    │
    ├── data/                    # Business Data Files
    │   ├── translations.js      # Complete Arabic & English bilingual copy dictionary
    │   ├── maidsData.js         # Verified domestic staff roster (Philippines, Kenya, Uganda, Ghana)
    │   ├── servicesData.js      # Hourly & monthly service contract tiers and packages
    │   ├── districtsData.js     # 36+ Riyadh coverage districts mapped by zone
    │   └── productsData.js      # Prepaid hour packages, supplies, and deep cleaning passes
    │
    ├── components/              # Modular UI Components
    │   ├── Navbar.jsx           # Responsive header with logo, live status, language toggle & mobile drawer
    │   ├── Hero.jsx             # Luxury hero banner with dynamic logo, service badges & direct CTAs
    │   ├── QuickCalculator.jsx  # Interactive cost calculator for hourly, monthly & deep clean packages
    │   ├── ServicesSection.jsx  # Core services grid (Nannies, Cooks, Cleaners, Caregivers)
    │   ├── TalentSection.jsx    # Nationalities showcase with cultural strengths & quick booking
    │   ├── MaidsGallery.jsx     # Staff directory preview with filter tabs and CV quick-view
    │   ├── PricingSection.jsx   # Tabbed hourly vs. monthly transparent pricing cards
    │   ├── DistrictsSection.jsx # Riyadh geographic coverage selector with fast arrival pill
    │   ├── TrustSection.jsx     # Four trust pillars (Medical screening, Saudi etiquette, Punctuality, Guarantee)
    │   ├── PaymentSection.jsx   # Supported payment methods (STC Pay, Bank Transfer, Mada, Cash)
    │   ├── ContactSection.jsx   # Office details, working hours, and Google Maps embed
    │   ├── Footer.jsx           # Clean footer with legal CR number, ministry compliance & links
    │   ├── FloatingActions.jsx  # Sticky WhatsApp, Direct Call, and Instant Booking buttons
    │   ├── BookingModal.jsx     # Pop-up booking wizard that formats and sends WhatsApp reservations
    │   └── MaidDetailModal.jsx  # Rich CV profile pop-up with skills, languages, rating & direct booking
    │
    └── pages/                   # Application Pages (Client-side routed)
        ├── HomePage.jsx         # Complete landing page experience
        ├── MaidsPage.jsx        # Full staff directory with search query, nationality & experience filters
        ├── ShopPage.jsx         # Value bundles & supplies storefront with interactive shopping cart
        ├── ProductDetailPage.jsx# Product / package detail view with quantity selector
        └── AdminPage.jsx        # Management console to add/edit staff and track booking requests
```

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) v18.0.0 or higher
- [npm](https://www.npmjs.com/) v9.0.0 or higher

### 1. Installation
Clone the repository or navigate to the project directory:
```bash
cd c:\Users\vishnu\Desktop\nodemcu\sakana-home-care
npm install
```

### 2. Development Mode
Start the Vite local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
The app will be accessible at: **`http://localhost:5173/`**

### 3. Production Build
Compile and minify the project for production deployment:
```bash
npm run build
```
The optimized output will be generated in the **`dist/`** directory.

### 4. Production Preview
Locally preview the generated production build:
```bash
npm run preview
```

---

## ⚙️ Single Source of Truth (How to Fix / Customize)

All major settings are consolidated in **`src/config/siteConfig.js`**. You don't have to search through dozens of components.

### 1. Change Phone & WhatsApp
Open `src/config/siteConfig.js` and edit:
```javascript
phone: "+966 59 829 3356",       // Display format
phoneRaw: "+966598293356",       // tel: link format
whatsappNumber: "966598293356",  // WhatsApp wa.me format (no + or spaces)
email: "your-email@example.com",
```
*Done! All WhatsApp booking links, call buttons, and footer links automatically update.*

### 2. Change Branding & Logo
In `src/config/siteConfig.js`:
```javascript
name: "Edinam Destiny Recruitment Agency",
nameAr: "وكالة إيدينام ديستيني للتوظيف",
tagline: "Nannies · Cooks · Cleaners · Caregivers",
taglineAr: "مربيات · طهاة · عاملات نظافة · مقدمو رعاية",
logoEn: "/logo.jpg",             // Placed in /public/
logoAr: "/logo2.jpg",            // Placed in /public/
```
To replace logos, simply drop your new images into `public/logo.jpg` and `public/logo2.jpg`.

### 3. Change Theme Colors
The theme uses CSS-driven Tailwind colors defined in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#0D4734',      // Royal Emerald Green — headers & primary buttons
    dark: '#072C20',         // Dark Forest Green hover
    light: '#166249',
  },
  accent: {
    DEFAULT: '#D4AF37',      // Royal Warm Gold — badges & CTAs
    light: '#E8C96A',
    dark: '#9E7B26',
  },
  teal: {
    DEFAULT: '#1B7A5A',      // Jade / Emerald Green accent
  },
  secondary: {
    DEFAULT: '#E8F4EE',      // Soft Mint/Sage background tint
  }
}
```
Modifying these hex codes instantly restyles the entire application.

### 4. Add or Edit Staff Profiles
Open **`src/data/maidsData.js`**. Each worker has a standard schema:
```javascript
{
  id: "maid-7",
  name: "Elena Rostova",
  arabicName: "إلينا روستوفا",
  nationality: "Philippines",
  nationalityAr: "الفلبين",
  flag: "🇵🇭",
  age: 31,
  experience_years: 5,
  status: "available",           // "available" | "booked" | "offline"
  languages: "English, Arabic",
  languagesAr: "الإنجليزية، العربية",
  photo: "/images/workers/maid-1.png",
  services: "Childcare & Gulf cooking",
  servicesAr: "رعاية أطفال وطبخ خليجي",
  specialties: ["مربيات", "طبخ", "تنظيم"],
  specialtiesEn: ["Nanny", "Cooking", "Organization"],
  rating: 5.0,
  reviewsCount: 34,
  hourlyRate: 45,
  monthlyRate: 1800,
  bio: "Experienced domestic specialist...",
  bioAr: "مختصة رعاية منزلية ذات خبرة...",
  verified: true
}
```
*(Alternatively, staff can be added or updated live from the `/admin` browser page!)*

### 5. Change Pricing & Packages
Open **`src/data/servicesData.js`**:
- **Hourly Packages:** Change prices (175, 180, 300, 450 SAR) or features.
- **Monthly Packages:** Change price ranges (1,200 - 2,200 SAR) and conditions.

### 6. Change Riyadh Districts
Open **`src/data/districtsData.js`**:
Add or edit districts with their English, Arabic, and geographic zone (North, East, West, Central).

---

## 🌐 Internationalization & RTL Engine

The app includes a fully responsive bidirectional engine:
- When set to **Arabic (`ar`)**:
  - Sets `<html lang="ar" dir="rtl">`
  - Uses the Cairo typography
  - Layout flips naturally using Tailwind logical properties (`start-`, `end-`, `ps-`, `pe-`, `ms-`, `me-`)
- When set to **English (`en`)**:
  - Sets `<html lang="en" dir="ltr">`
  - Uses the Plus Jakarta Sans typography
  - Layout renders left-to-right

Language preference is automatically remembered in browser `localStorage` under the key `'destiny_lang'`.

---

## 🔍 SEO & Schema.org Structured Data

The root `index.html` includes official **Schema.org `EmploymentAgency`** structured data:
```json
{
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "name": "Edinam Destiny Recruitment Agency",
  "alternateName": "وكالة إيدينام ديستيني للتوظيف",
  "telephone": "+966598293356",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Anas Ibn Malik Rd, Al Malqa District",
    "addressLocality": "Riyadh",
    "addressCountry": "SA"
  },
  "priceRange": "SAR 175 - 2200"
}
```
This enables rich cards in Google Search results showing company name, telephone, physical address, and operating hours.

---

## 🛠 Administrative Console

The application includes a built-in admin dashboard accessible at **`/admin`**:
- **Metrics Overview:** Live count of total staff, available workers, and incoming booking requests.
- **Staff Management:** Add new domestic staff, toggle availability status (`available`, `booked`, `offline`), edit records, or delete.
- **Bookings Management:** Review customer booking reservations submitted from the site, change booking status (`pending`, `confirmed`, `completed`, `cancelled`), and directly WhatsApp the customer with one click.
- **Data Persistence:** All administrative modifications persist in the browser's `localStorage` and take effect across the public pages immediately.

---

## 🚢 Production Build & Deployment Guide

The compiled app is a 100% static Single Page Application (SPA), meaning it can be hosted for free or low cost anywhere with maximum performance.

### Option A: Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

*For client-side SPA routing on Vercel, a `vercel.json` file can be added:*
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Option B: Netlify
1. Connect repository to [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add a `_redirects` file in `public/`:
   ```
   /*    /index.html   200
   ```

### Option C: Traditional Hosting (cPanel / Apache / Nginx)
1. Run `npm run build` locally.
2. Upload all files inside the `dist/` folder to your server's `public_html/`.
3. If using **Nginx**, configure the fallback:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /var/www/edinam-destiny/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```
4. If using **Apache**, create a `.htaccess` file in `dist/`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 📄 License & Ownership
Copyright © 2026 **Edinam Destiny Recruitment Agency**. All rights reserved.  
Compliant with Ministry of Human Resources and Social Development regulations in the Kingdom of Saudi Arabia.
