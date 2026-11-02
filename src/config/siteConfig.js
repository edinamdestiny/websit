/**
 * Edinam Destiny Recruitment Agency — Central Site Configuration
 * 
 * International Standard Codebase: Single Source of Truth
 * Edit company contact details, branding, services, and defaults here.
 * Any update here will automatically propagate across the entire application.
 */

export const siteConfig = {
  // Brand Names
  name: "Edinam Destiny Recruitment Agency",
  nameAr: "وكالة إيدينام ديستيني للتوظيف",
  tagline: "Nannies · Cooks · Cleaners · Caregivers",
  taglineAr: "مربيات · طهاة · عاملات نظافة · مقدمو رعاية",
  slogan: "Premium Domestic Staffing Solutions in Riyadh",
  sloganAr: "حلول استقدام وتشغيل العمالة المنزلية الراقية بالرياض",

  // Logos
  logoEn: "/logo.jpg",
  logoAr: "/logo2.jpg",
  favicon: "/logo.jpg",

  // Contact Information
  phone: "+966 55 627 4859",
  phoneRaw: "+966556274859",
  phone2: "+966 54 482 7315",
  phone2Raw: "+966544827315",
  whatsappNumber: "966556274859",
  whatsappNumber2: "966544827315",
  email: "edinamdestiny@gmail.com",
  crNumber: "CR 1010789452 · License #410294",
  crNumberAr: "سجل تجاري: 1010789452 · ترخيص معتمد: 410294",

  // Location Details
  city: "Riyadh",
  cityAr: "الرياض",
  country: "Saudi Arabia",
  countryAr: "المملكة العربية السعودية",
  address: "Anas Ibn Malik Rd, Al Malqa District, Riyadh 13521, Saudi Arabia",
  addressAr: "طريق أنس بن مالك، حي الملقا، الرياض 13521، المملكة العربية السعودية",
  coordinates: {
    lat: 24.8250,
    lng: 46.5413
  },

  // Operating Hours
  workingHours: "Saturday – Thursday: 8:00 AM – 10:00 PM | Friday: 1:00 PM – 9:00 PM",
  workingHoursAr: "السبت – الخميس: 8:00 ص – 10:00 م | الجمعة: 1:00 م – 9:00 م",
  supportHours: "24/7 WhatsApp & Emergency Dispatch",
  supportHoursAr: "دعم ومتابعة على مدار الساعة 24/7 عبر واتساب",

  // Core Service Offerings
  services: [
    { id: "nannies", en: "Nannies & Childcare", ar: "مربيات ورعاية أطفال" },
    { id: "cooks", en: "Cooks & Culinary Chefs", ar: "طهاة ومساعدو مطبخ" },
    { id: "cleaners", en: "House Cleaners & Maids", ar: "عاملات نظافة وتدبير منزلي" },
    { id: "caregivers", en: "Elderly & Specialized Caregivers", ar: "مقدمو رعاية كبار السن" }
  ],

  // Theme Color Tokens (matches tailwind.config.js - Royal Emerald Green & Gold)
  colors: {
    primary: "#0D4734",       // Royal Emerald Green
    primaryDark: "#072C20",   // Dark Forest Green
    primaryLight: "#166249",  // Light Emerald Green
    secondary: "#E8F4EE",     // Soft Mint/Sage tint
    accent: "#D4AF37",        // Royal Warm Gold
    accentLight: "#E8C96A",   // Bright Gold
    accentDark: "#9E7B26",    // Deep Bronze Gold
    teal: "#1B7A5A",          // Jade / Emerald Accent
    whatsapp: "#25D366",
    surface: "#FFFFFF",
    bgMuted: "#F4F8F6"
  }
};

/**
 * Helper to generate a standardized international WhatsApp redirect URL
 * @param {string} customMessage - Pre-filled message text
 * @returns {string} - WhatsApp URL
 */
export const getWhatsAppLink = (customMessage = "") => {
  const defaultText = "السلام عليكم، أود الاستفسار عن خدمات وكالة إيدينام ديستيني للتوظيف بالرياض";
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
};

export default siteConfig;
