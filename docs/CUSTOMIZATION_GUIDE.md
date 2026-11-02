# 🛠️ Destiny Recruitment Agency Web App — Developer Customization & Maintenance Guide

This guide provides direct, copy-paste instructions for the most common tasks and modifications.

---

## 📌 Quick Task Index
1. [Change Phone, WhatsApp, or Contact Information](#1-change-contact-information)
2. [Update Logos & Branding](#2-update-logos--branding)
3. [Change Theme Colors](#3-change-theme-colors)
4. [Add or Remove Staff / Workers](#4-add-or-remove-staff--workers)
5. [Modify Service Offerings & Pricing](#5-modify-service-offerings--pricing)
6. [Update Covered Districts in Riyadh](#6-update-covered-districts-in-riyadh)
7. [Add a New Page or Route](#7-add-a-new-page-or-route)
8. [Debugging & Troubleshooting](#8-debugging--troubleshooting)

---

## 1. Change Contact Information

All contact details are managed in a single file:
**File:** `src/config/siteConfig.js`

```javascript
export const siteConfig = {
  // Primary Phone & WhatsApp
  phone: "+966 55 627 4859",
  whatsappNumber: "966556274859",
  
  // Secondary Phone & WhatsApp
  phone2: "+966 54 482 7315",
  whatsappNumber2: "966544827315",
  
  // Official Business Email
  email: "edinamdestiny@gmail.com",
  
  // Commercial Registration & License numbers
  crNumber: "CR 1010789452 · License #410294",
  crNumberAr: "سجل تجاري: 1010789452 · ترخيص معتمد: 410294",
  
  // Physical office address
  address: "Anas Ibn Malik Rd, Al Malqa District, Riyadh 13521, Saudi Arabia",
  addressAr: "طريق أنس بن مالك، حي الملقا، الرياض 13521، المملكة العربية السعودية",
};
```

When you edit this file, **all components** (Navbar, Hero, QuickCalculator, ContactSection, Footer, WhatsApp booking links) update automatically.

---

## 2. Update Logos & Branding

**Logo Files Location:** `public/`
- `public/logo.jpg` — English circular badge logo
- `public/logo2.jpg` — Arabic circular badge logo

To change logos:
1. Save your new logo images as JPEG or PNG.
2. Replace `public/logo.jpg` and `public/logo2.jpg`.
3. If using different file names or extensions (e.g. `.png` or `.svg`), update the path in `src/config/siteConfig.js`:
   ```javascript
   logoEn: "/my-new-logo.png",
   logoAr: "/my-new-logo-ar.png",
   ```

---

## 3. Change Theme Colors

The color palette is configured in:
**File:** `tailwind.config.js`

```javascript
colors: {
  primary: {
    DEFAULT: '#0D4734',      // Royal Emerald Green (buttons, headings, navbar)
    dark: '#072C20',         // Button hover states
    light: '#166249',
  },
  accent: {
    DEFAULT: '#D4AF37',      // Royal Warm Gold (accent badges, CTAs)
    light: '#E8C96A',
    dark: '#9E7B26',
  },
  teal: {
    DEFAULT: '#1B7A5A',      // Jade / Emerald Green (icons, secondary highlights)
  },
  secondary: {
    DEFAULT: '#E8F4EE',      // Soft mint background container tint
  },
  muted: {
    DEFAULT: '#F4F8F6',      // Page body background
    foreground: '#4D6D62',   // Secondary sage text
  }
}
```

Simply replace these hex codes with your brand palette, and Tailwind will recompile all classes across the site.

---

## 4. Add or Remove Staff / Workers

Staff can be added in two ways:

### Method A: Through the Admin Interface (No Code)
1. Open the website and navigate to `/admin` (or click the ⚙ icon in the top right).
2. Click the **"Add Domestic Worker"** button.
3. Fill in the worker's name, nationality, years of experience, photo URL, services, and languages.
4. Click **Save**. The worker appears immediately in the directory and persists in your browser.

### Method B: In Code (Permanent Default Roster)
**File:** `src/data/maidsData.js`

Add a new object to the `initialMaids` array:
```javascript
{
  id: "maid-7",
  name: "Ruth Kiprop",
  arabicName: "روث كبروب",
  nationality: "Kenya",
  nationalityAr: "كينيا",
  flag: "🇰🇪",
  age: 30,
  experience_years: 5,
  status: "available", // Options: "available" | "booked" | "offline"
  service_type: "both", // "hourly" | "monthly" | "both"
  languages: "English, Swahili",
  languagesAr: "الإنجليزية، السواحلية",
  photo: "/images/workers/maid-2.png", // Or any image URL
  services: "Childcare & comprehensive villa cleaning",
  servicesAr: "رعاية أطفال وتنظيف شامل للفلل",
  specialties: ["مربيات", "تنظيف فلل", "تنظيم"],
  specialtiesEn: ["Nanny", "Villa Cleaning", "Organization"],
  rating: 4.9,
  reviewsCount: 38,
  hourlyRate: 40,
  monthlyRate: 1500,
  bio: "Experienced and attentive domestic worker with 5 years in Saudi households.",
  bioAr: "عاملة محترفة وصبورة تتمتع بخبرة 5 سنوات في المنازل السعودية.",
  verified: true
}
```

---

## 5. Modify Service Offerings & Pricing

### Hourly & Monthly Packages
**File:** `src/data/servicesData.js`

To change the hourly packages (4, 5, 8, 12 hours):
```javascript
export const hourlyPackages = [
  {
    hours: 4,
    price: 175, // Change price here
    arTitle: "باقة 4 ساعات سريعة",
    enTitle: "4 Hours Express Package",
    popular: false,
    // ...
  },
  // ...
];
```

### Calculator Estimates
**File:** `src/components/QuickCalculator.jsx`  
Lines 18-30 contain the pricing calculation formula. Update the prices to match your service rates:
```javascript
if (serviceType === 'hourly') {
  if (hours === 4) estimatedPrice = 175;
  else if (hours === 5) estimatedPrice = 180;
  else if (hours === 8) estimatedPrice = 300;
  else if (hours === 12) estimatedPrice = 450;
} else if (serviceType === 'monthly') {
  estimatedPrice = nationality === 'Philippines' ? 1800 : 1500;
} else if (serviceType === 'deep') {
  estimatedPrice = 650;
}
```

---

## 6. Update Covered Districts in Riyadh

**File:** `src/data/districtsData.js`

To add a new neighborhood:
```javascript
{
  id: "al-rabwah",
  ar: "حي الربوة",
  en: "Al Rabwah",
  zone: "شرق الرياض / East"
}
```

---

## 7. Add a New Page or Route

The app uses a lightweight custom SPA router built on standard browser history.

1. **Create your new page component:**  
   `src/pages/MyNewPage.jsx`
   ```jsx
   import React from 'react';
   export const MyNewPage = () => {
     return <div className="max-w-7xl mx-auto p-8">My Page Content</div>;
   };
   ```

2. **Register the route in `src/App.jsx`:**
   ```jsx
   import { MyNewPage } from './pages/MyNewPage';

   // Inside renderCurrentPage():
   if (currentPath === '/my-new-page') {
     return <MyNewPage />;
   }
   ```

3. **Navigate to it from any component:**
   ```jsx
   const { navigate } = useApp();
   // Call:
   navigate('/my-new-page');
   ```

---

## 8. Debugging & Troubleshooting

### Q: Changes to staff or bookings aren't showing up.
**Reason:** The app saves data to the browser's `localStorage` so changes in Admin persist.  
**Fix:** Navigate to `/admin` and click the **"Reset Data"** (استعادة البيانات) button in the top right. Alternatively, clear your browser's application storage for `localhost`.

### Q: WhatsApp links do not open the correct chat.
**Reason:** Check that `whatsappNumber` in `src/config/siteConfig.js` does NOT have any plus sign `+` or spaces (e.g. `966556274859` is correct; `+966 55 627 4859` will not work with `wa.me`).

### Q: How do I test the production build before uploading?
Run:
```bash
npm run build
npm run preview
```
Open the provided URL (e.g. `http://localhost:4173`) to test the compiled bundle.
