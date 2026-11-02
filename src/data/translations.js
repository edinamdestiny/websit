import { siteConfig } from '../config/siteConfig';

export const PHONE_NUMBER = siteConfig.phone;
export const PHONE_CLEAN = siteConfig.whatsappNumber;
export const BRAND_NAME_EN = siteConfig.name;
export const BRAND_NAME_AR = siteConfig.nameAr;
export const BRAND_TAGLINE_EN = siteConfig.tagline;
export const BRAND_TAGLINE_AR = siteConfig.taglineAr;
export const LOGO_URL = siteConfig.logoEn;
export const LOGO_URL_AR = siteConfig.logoAr;

export const getWhatsAppLink = (message = "مرحباً، أرغب في الاستفسار عن خدمات وكالة إيدينام ديستيني للتوظيف في الرياض") => {
  return `https://wa.me/${PHONE_CLEAN}?text=${encodeURIComponent(message)}`;
};

export const translations = {
  ar: {
    brandName: "وكالة إيدينام ديستيني",
    brandFull: "وكالة إيدينام ديستيني للتوظيف",
    brandSub: "Edinam Destiny Recruitment Agency",
    tagline: "أفضل الكوادر المنزلية المحترفة بين يديكِ",
    heroDesc: "توفير مربيات، طهاة، عاملات نظافة ومقدمي رعاية موثوقين من الفلبين وكينيا وأوغندا وغانا — بالساعة أو بالشهر في جميع أحياء الرياض.",
    bookWhatsApp: "تواصل عبر واتساب",
    callNow: "اتصل الآن",
    quickEstimate: "احسب التكلفة",
    browseMaids: "تصفح الكوادر",

    nav: {
      services: "خدماتنا",
      talent: "كوادرنا",
      pricing: "الأسعار",
      areas: "التغطية",
      maidsDirectory: "دليل الكوادر",
      shop: "الباقات والمتجر",
      admin: "لوحة التحكم",
      bookNow: "احجز الآن",
    },

    trustPills: {
      vetted: "فحص طبي وأمني معتمد",
      punctual: "وصول دقيق لباب منزلكِ",
      guarantee: "ضمان الرضا واستبدال فوري",
      legal: "عقود موثقة ونظامية 100%",
    },

    services: {
      eyebrow: "خدماتنا المتميزة",
      title: "كل ما تحتاجه أسرتك تحت سقف واحد",
      subtitle: "نوفر كوادر منزلية متخصصة تناسب احتياجات كل منزل وكل عائلة",
      items: [
        {
          id: "nanny",
          title: "مربيات الأطفال",
          desc: "مربيات محترفات يعتنين بأطفالكِ بحنان وخبرة، مع متابعة التعليم المبكر والترفيه والسلامة.",
          badge: "الأكثر طلباً",
        },
        {
          id: "cleaning_cooking",
          title: "طهاة منزليون",
          desc: "طهاة ماهرون في المطبخ السعودي والعربي والآسيوي، يحضرون الوجبات اليومية بأعلى معايير النظافة.",
          badge: "شامل",
        },
        {
          id: "complete_cleaning",
          title: "عاملات تنظيف",
          desc: "تنظيف شامل ومنظم لكافة أركان المنزل — أرضيات وحمامات ومطابخ وأسطح وزجاج بأدوات احترافية.",
          badge: "يومي وأسبوعي",
        },
        {
          id: "caregiver",
          title: "مقدمو رعاية",
          desc: "رعاية مخصصة لكبار السن وذوي الاحتياجات الخاصة بأسلوب مهني دافئ وصبور.",
          badge: "رعاية متكاملة",
        },
        {
          id: "hourly_service",
          title: "خدمة بالساعة",
          desc: "مرونة كاملة من 4 ساعات حتى 12 ساعة — مثالية للزيارات الطارئة والمناسبات الخاصة.",
          badge: "مرونة عالية",
        },
        {
          id: "laundry_ironing",
          title: "غسيل وكي الملابس",
          desc: "عناية احترافية بالملابس والمفروشات — غسيل وكي وترتيب الدواليب بدقة متناهية.",
          badge: "متخصص",
        }
      ]
    },

    talent: {
      eyebrow: "كوادرنا الدولية المعتمدة",
      title: "خبرات متنوعة، معيار واحد من الثقة",
      subtitle: "اختاري الكادر الأنسب لمنزلكِ وتواصلي مباشرة عبر واتساب للحجز الفوري.",
      nationalities: [
        {
          id: "philippines",
          country: "الفلبين",
          en: "Philippines",
          strength: "مربيات ممتازات وطهاة تنظيف دقيق",
          details: "خبرة واسعة في رعاية الأطفال والطبخ المتنوع وإجادة الإنجليزية",
          image: "/images/workers/maid-1.png"
        },
        {
          id: "kenya",
          country: "كينيا",
          en: "Kenya",
          strength: "إدارة منزلية نشطة ورعاية موثوقة",
          details: "سرعة في الإنجاز وأمانة عالية وتنظيم منزلي محترف",
          image: "/images/workers/maid-2.png"
        },
        {
          id: "uganda",
          country: "أوغندا",
          en: "Uganda",
          strength: "تنظيف شامل وتنظيم مميز",
          details: "التزام بالمواعيد وأسلوب مهني هادئ ومحبب للعائلة",
          image: "/images/workers/maid-3.png"
        },
        {
          id: "ghana",
          country: "غانا",
          en: "Ghana",
          strength: "خدمة ودودة وعناية بالتفاصيل",
          details: "خبرة عملية في المنازل الخليجية وضيافة راقية",
          image: "/images/workers/maid-4.png"
        }
      ]
    },

    pricing: {
      eyebrow: "أسعار واضحة وشفافة",
      title: "الباقة المناسبة لمنزلكِ",
      subtitle: "بدون رسوم خفية — جميع الأسعار تشمل المواصلات والمتابعة",
      hourlyTab: "خدمات بالساعة",
      monthlyTab: "عقود شهرية",
      sar: "ريال",
      includesExtras: "تشمل المواصلات وأدوات التنظيف الأساسية",
      standardIncludes: "تشمل المواصلات حتى باب منزلكِ",
      bookPackage: "احجزي هذه الباقة",
      calculatorTitle: "احسبي تكلفة خدمتكِ المخصصة",
      selectDuration: "حددي عدد الساعات",
      selectNationality: "الجنسية المفضلة",
      selectDistrict: "الحي السكني",
      calculatedTotal: "التقدير الإجمالي:",
      bookViaWhatsAppMsg: "احجزي عبر واتساب",
    },

    maidsGallery: {
      eyebrow: "دليل كوادرنا",
      title: "احترافية واضحة — جنسيات متعددة وخبرات موثقة",
      subtitle: "اختاري الكادر المناسب وتواصلي معنا فوراً للحجز",
      viewFullDirectory: "عرض الدليل الكامل ←",
      all: "الكل",
      available: "متاح الآن",
      booked: "محجوز حالياً",
      offline: "في إجازة",
      yearsExp: "سنوات خبرة",
      languages: "اللغات:",
      specialty: "التخصص:",
      viewProfile: "تفاصيل الملف",
      bookMaidWhatsApp: "واتساب",
      callMaid: "اتصال",
    },

    areas: {
      eyebrow: "نصل إليكِ أينما كنتِ",
      title: "تغطية كاملة لجميع أحياء الرياض",
      subtitle: "فريقنا متواجد في شمال وشرق وغرب ووسط وجنوب الرياض لوصول دقيق في الموعد.",
      popularSearches: "أبرز المناطق المخدومة",
      hourlyNearYou: "كوادر بالساعة قريباً منكِ",
      monthlyFilipino: "مربيات وطهاة بالشهر",
      fromPrice: "من 4 ساعات بسعر 175 ريال — احجزي الآن في:",
      monthlyFrom: "باقات شهرية تبدأ من 1,200 ريال في:",
    },

    payment: {
      eyebrow: "طرق الدفع",
      title: "دفع مرن وآمن",
      subtitle: "اختاري الطريقة الأنسب لكِ عند تأكيد الحجز.",
      methods: [
        { name: "STC Pay", desc: "دفع فوري عبر رقم المحفظة" },
        { name: "تحويل بنكي", desc: "الراجحي · الأهلي · الإنماء" },
        { name: "مدى / بطاقة ائتمانية", desc: "دفع إلكتروني آمن" },
        { name: "نقداً (كاش)", desc: "الدفع عند الاستلام بالريال السعودي" }
      ]
    },

    testimonials: {
      eyebrow: "آراء عملائنا",
      title: "ثقة أكثر من 5,000 أسرة في الرياض",
      items: [
        {
          name: "أم عبد الله التميمي",
          district: "حي الملقا، الرياض",
          text: "تعاملنا مع وكالة إيدينام ديستيني لأكثر من سنة. المربية التي وفرتها لأطفالنا محترفة وأمينة وعطوفة — لا أبالغ إن قلت إنها جزء من العائلة.",
          rating: 5,
          service: "مربية شهرية"
        },
        {
          name: "نورة القحطاني",
          district: "حي النرجس، الرياض",
          text: "طلبت عاملة تنظيف بالساعة قبيل عزومة عائلية وحضرت في الوقت المحدد تماماً مع أدواتها الكاملة. احترافية لا مثيل لها.",
          rating: 5,
          service: "باقة 5 ساعات"
        },
        {
          name: "سارة السبيعي",
          district: "حي اليرموك، الرياض",
          text: "أفضل وكالة توظيف منزلي تعاملت معها — سرعة في الرد، أمانة في التوصية، وكوادر على أعلى مستوى من الاحترافية.",
          rating: 5,
          service: "طاه منزلي — كيني"
        }
      ]
    },

    contact: {
      eyebrow: "تواصل معنا",
      title: "نحن هنا لمساعدتكِ في اختيار الكادر المثالي",
      mainOfficeTitle: "المقر الرئيسي",
      mainOfficeAddress: "حي الملقا، طريق أنس بن مالك، الرياض، المملكة العربية السعودية",
      branchTitle: "فرع شرق الرياض",
      branchAddress: "حي اليرموك، طريق الإمام عبد الله بن سعود، الرياض",
      workingHoursTitle: "ساعات العمل",
      workingHours: "طوال أيام الأسبوع: 7:00 صباحاً – 11:00 مساءً (واتساب متاح 24/7)",
      phone: siteConfig.phone,
      phone2: siteConfig.phone2,
      email: siteConfig.email,
      whatsappAction: "مراسلة فورية عبر واتساب",
      callAction: "اتصال مباشر الآن",
    },

    bookingModal: {
      title: "حجز كادر منزلي فورياً",
      subtitle: "أكمل البيانات وسنرسل تفاصيل حجزك مباشرة عبر واتساب",
      serviceType: "نوع الخدمة المطلوبة",
      nationalityPref: "الجنسية المفضلة",
      anyNationality: "أي جنسية متوفرة",
      specificMaid: "الكادر المحدد (اختياري)",
      selectDistrict: "الحي في الرياض",
      selectDate: "تاريخ الخدمة",
      selectTime: "الفترة المفضلة",
      morning: "صباحية (8:00 ص - 12:00 م)",
      afternoon: "مسائية (1:00 م - 5:00 م)",
      evening: "ليلية (6:00 م - 10:00 م)",
      duration: "المدة المطلوبة",
      customerName: "الاسم الكريم",
      customerPhone: "رقم الجوال",
      notes: "ملاحظات إضافية (اختياري)",
      confirmAndWhatsApp: "تأكيد وإرسال عبر واتساب",
      saveOnly: "حفظ في النظام فقط",
      close: "إغلاق",
      successMsg: "تم تجهيز بيانات الحجز بنجاح! جارٍ التوجيه لواتساب...",
    },

    shop: {
      title: "متجر وكالة إيدينام ديستيني",
      subtitle: "باقات ساعات مسبقة الدفع ومستلزمات تنظيف منزلي فاخرة",
      allProducts: "جميع الباقات والمنتجات",
      bundles: "باقات الساعات الموفرة",
      supplies: "مواد وأدوات التنظيف",
      equipment: "الأجهزة والتعقيم",
      sortBy: "ترتيب حسب:",
      featured: "المميز",
      priceAsc: "السعر: من الأقل",
      priceDesc: "السعر: من الأعلى",
      nameAsc: "الاسم",
      addToCart: "إضافة للطلب",
      orderWhatsApp: "طلب مباشر عبر واتساب",
      inStock: "متوفر",
      sar: "ريال",
      cart: "سلة الطلبات",
      emptyCart: "السلة فارغة حالياً",
      checkoutWhatsApp: "إتمام الطلب عبر واتساب",
      subtotal: "المجموع:",
    },

    admin: {
      title: "لوحة إدارة الكوادر والحجوزات",
      subtitle: "إدارة قائمة الكوادر والحجوزات الواردة",
      maidsTab: "إدارة الكوادر",
      bookingsTab: "الحجوزات الواردة",
      productsTab: "الباقات والمنتجات",
      addMaid: "إضافة كادر جديد",
      editMaid: "تعديل بيانات الكادر",
      deleteConfirm: "هل أنت متأكد من حذف هذا الكادر؟",
      totalMaids: "إجمالي الكوادر",
      availableMaids: "المتاحون للعمل",
      totalBookings: "الحجوزات النشطة",
      name: "الاسم",
      nationality: "الجنسية",
      status: "الحالة",
      experience: "سنوات الخبرة",
      actions: "الإجراءات",
      save: "حفظ",
      cancel: "إلغاء",
      statusAvailable: "متاح",
      statusBooked: "محجوز",
      statusOffline: "غير متاح",
      resetData: "استعادة البيانات الافتراضية",
      accessAdmin: "لوحة التحكم",
    },

    footer: {
      desc: "وكالة إيدينام ديستيني للتوظيف — شريككِ الموثوق في توفير أفضل الكوادر المنزلية المحترفة من مربيات وطهاة وعاملات نظافة ومقدمي رعاية في جميع أحياء الرياض.",
      quickLinks: "روابط سريعة",
      legal: "الالتزام النظامي",
      crNumber: "مرخصون نظامياً وفق أنظمة وزارة الموارد البشرية في المملكة العربية السعودية",
      copyright: "© 2026 وكالة إيدينام ديستيني للتوظيف · الرياض، المملكة العربية السعودية",
    }
  },

  en: {
    brandName: "Edinam Destiny Agency",
    brandFull: "Edinam Destiny Recruitment Agency",
    brandSub: "مربيات · طهاة · عاملات نظافة · رعاية",
    tagline: "Premium Domestic Talent, Right at Your Doorstep",
    heroDesc: "Professional Nannies, Cooks, Cleaners and Caregivers from Philippines, Kenya, Uganda and Ghana — hourly or monthly, across all Riyadh districts.",
    bookWhatsApp: "Book on WhatsApp",
    callNow: "Direct Call",
    quickEstimate: "Get Estimate",
    browseMaids: "Browse Staff",

    nav: {
      services: "Services",
      talent: "Our Staff",
      pricing: "Pricing",
      areas: "Areas",
      maidsDirectory: "Staff Directory",
      shop: "Shop & Packages",
      admin: "Admin Portal",
      bookNow: "Book Now",
    },

    trustPills: {
      vetted: "Certified Health & Background Screening",
      punctual: "Punctual Doorstep Arrival",
      guarantee: "100% Satisfaction & Free Replacement",
      legal: "Fully Licensed & Compliant",
    },

    services: {
      eyebrow: "OUR SERVICES",
      title: "Everything your family needs, under one roof",
      subtitle: "Specialized domestic staff matching every home's unique needs",
      items: [
        {
          id: "nanny",
          title: "Professional Nannies",
          desc: "Caring, experienced nannies who nurture your children with warmth, supporting early learning, play, and safety.",
          badge: "Most Requested",
        },
        {
          id: "cleaning_cooking",
          title: "Home Cooks",
          desc: "Skilled cooks specializing in Saudi, Arab, and Asian cuisine. Fresh daily meals prepared to the highest hygiene standards.",
          badge: "Full Service",
        },
        {
          id: "complete_cleaning",
          title: "Cleaning Staff",
          desc: "Thorough, professional cleaning of every corner — floors, bathrooms, kitchens, surfaces, and glass with top-grade tools.",
          badge: "Daily & Weekly",
        },
        {
          id: "caregiver",
          title: "Caregivers",
          desc: "Dedicated, patient caregivers for elderly and special-needs individuals with the highest standards of compassion.",
          badge: "Full Care",
        },
        {
          id: "hourly_service",
          title: "Hourly Service",
          desc: "Total flexibility from 4 to 12 hours — ideal for emergency visits or special family gatherings.",
          badge: "Flexible",
        },
        {
          id: "laundry_ironing",
          title: "Laundry & Ironing",
          desc: "Professional garment and fabric care — washing, pressing, and organized wardrobe arrangement.",
          badge: "Specialized",
        }
      ]
    },

    talent: {
      eyebrow: "OUR CERTIFIED GLOBAL STAFF",
      title: "Diverse strengths, one standard of trust",
      subtitle: "Choose the right talent for your home and book directly on WhatsApp.",
      nationalities: [
        {
          id: "philippines",
          country: "Philippines",
          en: "Philippines",
          strength: "Expert Nannies, Cooks & Thorough Cleaners",
          details: "Experienced in childcare, diverse cooking, and fluent in English",
          image: "/images/workers/maid-1.png"
        },
        {
          id: "kenya",
          country: "Kenya",
          en: "Kenya",
          strength: "Energetic Home Management & Reliable Care",
          details: "Fast, highly trustworthy, and excellent at home organization",
          image: "/images/workers/maid-2.png"
        },
        {
          id: "uganda",
          country: "Uganda",
          en: "Uganda",
          strength: "Complete Cleaning & Thorough Organization",
          details: "Punctual, gentle demeanor well-suited for family tranquility",
          image: "/images/workers/maid-3.png"
        },
        {
          id: "ghana",
          country: "Ghana",
          en: "Ghana",
          strength: "Warm Hospitality & Detail-Focused Service",
          details: "Gulf household experience with courteous, professional manners",
          image: "/images/workers/maid-4.png"
        }
      ]
    },

    pricing: {
      eyebrow: "CLEAR PRICING",
      title: "The right plan for your home",
      subtitle: "No hidden fees — all prices include transport and follow-up support",
      hourlyTab: "Hourly Service",
      monthlyTab: "Monthly Contracts",
      sar: "SAR",
      includesExtras: "Includes transportation & cleaning supplies",
      standardIncludes: "Includes door-to-door transportation",
      bookPackage: "Book this package",
      calculatorTitle: "Calculate Your Custom Quote",
      selectDuration: "Select Duration",
      selectNationality: "Preferred Nationality",
      selectDistrict: "Riyadh District",
      calculatedTotal: "Estimated Total:",
      bookViaWhatsAppMsg: "Book on WhatsApp",
    },

    maidsGallery: {
      eyebrow: "OUR STAFF DIRECTORY",
      title: "Verified professionals — experience & specialties, clearly shown",
      subtitle: "Choose your preferred domestic staff and contact us to book immediately",
      viewFullDirectory: "View full staff directory →",
      all: "All",
      available: "Available Now",
      booked: "Currently Assigned",
      offline: "Offline",
      yearsExp: "yrs exp",
      languages: "Languages:",
      specialty: "Services:",
      viewProfile: "View Profile",
      bookMaidWhatsApp: "WhatsApp",
      callMaid: "Call",
    },

    areas: {
      eyebrow: "RIYADH-WIDE REACH",
      title: "Service across every Riyadh district",
      subtitle: "Our dispatch team covers North, East, West, Central & South Riyadh for punctual arrivals.",
      popularSearches: "POPULAR AREAS WE SERVE",
      hourlyNearYou: "Hourly domestic staff near you",
      monthlyFilipino: "Nannies & Cooks by month",
      fromPrice: "From 4 hours at 175 SAR — book now in:",
      monthlyFrom: "Monthly packages from 1,200 SAR in:",
    },

    payment: {
      eyebrow: "PAYMENT METHODS",
      title: "Simple, flexible payment",
      subtitle: "Choose your preferred method when confirming your booking.",
      methods: [
        { name: "STC Pay", desc: "Instant mobile wallet payment" },
        { name: "Bank Transfer", desc: "Al Rajhi · SNB · Alinma Bank" },
        { name: "Mada / Credit Card", desc: "Secure digital payment" },
        { name: "Cash in SAR", desc: "Pay in cash upon arrival" }
      ]
    },

    testimonials: {
      eyebrow: "CLIENT TESTIMONIALS",
      title: "Trusted by over 5,000 families across Riyadh",
      items: [
        {
          name: "Umm Abdullah Al Tamimi",
          district: "Al Malqa, Riyadh",
          text: "We've worked with Edinam Destiny for over a year. The nanny they provided is wonderful with our children — professional, caring, and truly part of the family.",
          rating: 5,
          service: "Monthly Nanny"
        },
        {
          name: "Noura Al Qahtani",
          district: "Al Narjis, Riyadh",
          text: "Booked a cleaning helper before a family gathering — she arrived exactly on time with all supplies and cleaned the entire villa immaculately. Brilliant service.",
          rating: 5,
          service: "5 Hours Package"
        },
        {
          name: "Sarah Al Subaie",
          district: "Al Yarmuk, Riyadh",
          text: "The fastest and most professional domestic agency I've dealt with in Riyadh. Great communication and excellent staff recommendations.",
          rating: 5,
          service: "Home Cook — Kenya"
        }
      ]
    },

    contact: {
      eyebrow: "CONTACT US",
      title: "We're here to find your perfect domestic professional",
      mainOfficeTitle: "Main Headquarters",
      mainOfficeAddress: "Al Malqa District, Anas Ibn Malik Rd, Riyadh, Saudi Arabia",
      branchTitle: "East Riyadh Office",
      branchAddress: "Al Yarmuk District, Imam Abdullah Ibn Saud Rd, Riyadh",
      workingHoursTitle: "Operating Hours",
      workingHours: "Daily 7:00 AM – 11:00 PM (WhatsApp support available 24/7)",
      phone: siteConfig.phone,
      phone2: siteConfig.phone2,
      email: siteConfig.email,
      whatsappAction: "Message on WhatsApp",
      callAction: "Call Now",
    },

    bookingModal: {
      title: "Book Domestic Staff Instantly",
      subtitle: "Fill in your details and we'll send your booking directly via WhatsApp",
      serviceType: "Service Type",
      nationalityPref: "Preferred Nationality",
      anyNationality: "Any available",
      specificMaid: "Specific Staff (Optional)",
      selectDistrict: "District in Riyadh",
      selectDate: "Preferred Date",
      selectTime: "Preferred Time Slot",
      morning: "Morning (8:00 AM - 12:00 PM)",
      afternoon: "Afternoon (1:00 PM - 5:00 PM)",
      evening: "Evening (6:00 PM - 10:00 PM)",
      duration: "Duration Needed",
      customerName: "Your Full Name",
      customerPhone: "Phone Number",
      notes: "Additional notes (optional)",
      confirmAndWhatsApp: "Confirm & Book on WhatsApp",
      saveOnly: "Save to System",
      close: "Close",
      successMsg: "Booking prepared! Redirecting to WhatsApp...",
    },

    shop: {
      title: "Edinam Destiny Shop & Packages",
      subtitle: "Prepaid booking bundles and premium home sanitization products",
      allProducts: "All Products",
      bundles: "Prepaid Bundles",
      supplies: "Cleaning Supplies",
      equipment: "Sanitization Equipment",
      sortBy: "Sort by:",
      featured: "Featured",
      priceAsc: "Price: Low to High",
      priceDesc: "Price: High to Low",
      nameAsc: "Name",
      addToCart: "Add to Order",
      orderWhatsApp: "Order via WhatsApp",
      inStock: "In Stock",
      sar: "SAR",
      cart: "Order Cart",
      emptyCart: "Your cart is empty",
      checkoutWhatsApp: "Checkout on WhatsApp",
      subtotal: "Subtotal:",
    },

    admin: {
      title: "Staff & Bookings Management Portal",
      subtitle: "Manage staff directory, incoming bookings, and products",
      maidsTab: "Manage Staff",
      bookingsTab: "Incoming Bookings",
      productsTab: "Packages & Shop",
      addMaid: "Add New Staff",
      editMaid: "Edit Staff Info",
      deleteConfirm: "Are you sure you want to remove this staff member?",
      totalMaids: "Total Staff",
      availableMaids: "Available Now",
      totalBookings: "Active Bookings",
      name: "Name",
      nationality: "Nationality",
      status: "Status",
      experience: "Experience",
      actions: "Actions",
      save: "Save",
      cancel: "Cancel",
      statusAvailable: "Available",
      statusBooked: "Assigned",
      statusOffline: "Offline",
      resetData: "Reset to Default",
      accessAdmin: "Admin Dashboard",
    },

    footer: {
      desc: "Edinam Destiny Recruitment Agency — Your trusted partner for premium professional domestic staff including nannies, cooks, cleaners, and caregivers across Riyadh.",
      quickLinks: "Quick Links",
      legal: "Regulatory Compliance",
      crNumber: "Licensed and compliant with Saudi Ministry of Human Resources regulations.",
      copyright: "© 2026 Edinam Destiny Recruitment Agency · Riyadh, Saudi Arabia",
    }
  }
};
