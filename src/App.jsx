import React, { useEffect } from 'react';
import { useLanguage } from './context/LanguageContext';
import { useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';
import { MaidDetailModal } from './components/MaidDetailModal';

// Pages
import { HomePage } from './pages/HomePage';
import { MaidsPage } from './pages/MaidsPage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AdminPage } from './pages/AdminPage';

export const MainApp = () => {
  const { currentPath } = useApp();

  // Scroll to top on route change (unless hash)
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [currentPath]);

  // Route Dispatcher
  const renderCurrentPage = () => {
    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    }
    if (currentPath === '/maids') {
      return <MaidsPage />;
    }
    if (currentPath === '/shop') {
      return <ShopPage />;
    }
    if (currentPath.startsWith('/product/')) {
      const slug = currentPath.replace('/product/', '');
      return <ProductDetailPage slug={slug} />;
    }
    if (currentPath === '/admin') {
      return <AdminPage />;
    }
    // Fallback to Home
    return <HomePage />;
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-accent selection:text-primary">
      <Navbar />
      <div className="flex-1">
        {renderCurrentPage()}
      </div>
      <Footer />
      <FloatingActions />
      <BookingModal />
      <MaidDetailModal />
    </div>
  );
};
