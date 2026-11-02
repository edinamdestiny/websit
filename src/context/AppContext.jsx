import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialMaids } from '../data/maidsData';
import { initialProducts } from '../data/productsData';

const AppContext = createContext();

const initialSampleBookings = [
  {
    id: "bkg-101",
    customerName: "أم عبد العزيز الدوسري",
    customerPhone: "0554129871",
    serviceType: "خدمة بالساعة (5 ساعات)",
    serviceTypeEn: "Hourly Service (5 Hours)",
    nationalityPref: "الفلبين",
    nationalityPrefEn: "Philippines",
    maidName: "Maria Santos",
    district: "الملقا",
    districtEn: "Al Malqa",
    date: "2026-11-04",
    timeSlot: "صباحية (8:00 ص - 12:00 م)",
    timeSlotEn: "Morning (8:00 AM - 12:00 PM)",
    hours: 5,
    estimatedTotal: 180,
    status: "confirmed", // pending, confirmed, completed, cancelled
    createdAt: "2026-11-02T10:15:00.000Z",
    notes: "يرجى التركيز على المطبخ والمجلس قبل وصول الضيوف"
  },
  {
    id: "bkg-102",
    customerName: "خالد بن فهد العتيبي",
    customerPhone: "0503387612",
    serviceType: "تنظيف مع الطبخ (عقد شهري)",
    serviceTypeEn: "Cleaning + Cooking (Monthly)",
    nationalityPref: "كينيا",
    nationalityPrefEn: "Kenya",
    maidName: "Grace Wanjiku",
    district: "النرجس",
    districtEn: "Al Narjis",
    date: "2026-11-05",
    timeSlot: "صباحية (8:00 ص - 12:00 م)",
    timeSlotEn: "Morning (8:00 AM - 12:00 PM)",
    hours: "شهري / Monthly",
    estimatedTotal: 1600,
    status: "pending",
    createdAt: "2026-11-02T14:30:00.000Z",
    notes: "فيلا دورين، محتاجين مساعدة في وجبة الغداء"
  }
];

export const AppProvider = ({ children }) => {
  // Navigation / Router State
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    if (path.startsWith('#')) {
      // Anchor link
      const elem = document.querySelector(path);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Maids state
  const [maids, setMaids] = useState(() => {
    try {
      const saved = localStorage.getItem('destiny_maids_v2');
      return saved ? JSON.parse(saved) : initialMaids;
    } catch {
      return initialMaids;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('destiny_maids_v2', JSON.stringify(maids));
    } catch (e) {
      console.warn("Storage error", e);
    }
  }, [maids]);

  // Bookings state
  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('destiny_bookings_v2');
      return saved ? JSON.parse(saved) : initialSampleBookings;
    } catch {
      return initialSampleBookings;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('destiny_bookings_v2', JSON.stringify(bookings));
    } catch (e) {
      console.warn("Storage error", e);
    }
  }, [bookings]);

  // Products state
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('destiny_products_v2');
      return saved ? JSON.parse(saved) : initialProducts;
    } catch {
      return initialProducts;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('destiny_products_v2', JSON.stringify(products));
    } catch (e) {
      console.warn("Storage error", e);
    }
  }, [products]);

  // Cart state
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('destiny_cart_v2');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('destiny_cart_v2', JSON.stringify(cart));
    } catch (e) {
      console.warn("Storage error", e);
    }
  }, [cart]);

  // Modals state
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedMaidForBooking, setSelectedMaidForBooking] = useState(null);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState(null);
  const [selectedDistrictForBooking, setSelectedDistrictForBooking] = useState(null);

  const [isMaidDetailOpen, setIsMaidDetailOpen] = useState(false);
  const [activeMaidDetail, setActiveMaidDetail] = useState(null);

  // Helper actions
  const openBookingModal = ({ maid = null, service = null, district = null } = {}) => {
    setSelectedMaidForBooking(maid);
    setSelectedServiceForBooking(service);
    setSelectedDistrictForBooking(district);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedMaidForBooking(null);
    setSelectedServiceForBooking(null);
    setSelectedDistrictForBooking(null);
  };

  const openMaidDetail = (maid) => {
    setActiveMaidDetail(maid);
    setIsMaidDetailOpen(true);
  };

  const closeMaidDetail = () => {
    setIsMaidDetailOpen(false);
    setActiveMaidDetail(null);
  };

  // Maid management
  const addMaid = (newMaid) => {
    const maidWithId = {
      ...newMaid,
      id: `maid-${Date.now()}`,
      verified: true,
      rating: 5.0,
      reviewsCount: 1
    };
    setMaids(prev => [maidWithId, ...prev]);
    return maidWithId;
  };

  const updateMaid = (id, updatedFields) => {
    setMaids(prev => prev.map(m => m.id === id ? { ...m, ...updatedFields } : m));
  };

  const deleteMaid = (id) => {
    setMaids(prev => prev.filter(m => m.id !== id));
  };

  const resetMaids = () => {
    setMaids(initialMaids);
    try {
      localStorage.removeItem('destiny_maids_v2');
    } catch {}
  };

  // Booking management
  const addBooking = (bookingData) => {
    const newBooking = {
      ...bookingData,
      id: `bkg-${Date.now()}`,
      status: "pending",
      createdAt: new Date().toISOString()
    };
    setBookings(prev => [newBooking, ...prev]);
    return newBooking;
  };

  const updateBookingStatus = (id, status) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b));
  };

  const deleteBooking = (id) => {
    setBookings(prev => prev.filter(b => b.id !== id));
  };

  // Cart management
  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateCartQty = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(prev => prev.map(item => item.id === productId ? { ...item, quantity } : item));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider
      value={{
        currentPath,
        navigate,
        maids,
        addMaid,
        updateMaid,
        deleteMaid,
        resetMaids,
        bookings,
        addBooking,
        updateBookingStatus,
        deleteBooking,
        products,
        cart,
        addToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
        isBookingModalOpen,
        selectedMaidForBooking,
        selectedServiceForBooking,
        selectedDistrictForBooking,
        openBookingModal,
        closeBookingModal,
        isMaidDetailOpen,
        activeMaidDetail,
        openMaidDetail,
        closeMaidDetail
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
