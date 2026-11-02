import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { PHONE_NUMBER, getWhatsAppLink, LOGO_URL, LOGO_URL_AR, BRAND_TAGLINE_EN, BRAND_TAGLINE_AR } from '../data/translations';
import { Phone, MessageSquare, Menu, X, Globe, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const { isAr, t, toggleLang } = useLanguage();
  const { currentPath, navigate, cart, openBookingModal } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.talent, href: "/#talent" },
    { label: t.nav.pricing, href: "/#pricing" },
    { label: t.nav.areas, href: "/#areas" },
    { label: t.nav.maidsDirectory, href: "/maids", isPage: true },
    { label: t.nav.shop, href: "/shop", isPage: true, badge: cart.length > 0 ? cart.length : null },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (link.isPage) {
      navigate(link.href);
    } else {
      if (currentPath !== '/') {
        navigate('/');
        setTimeout(() => {
          const anchor = link.href.replace('/', '');
          const elem = document.querySelector(anchor);
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const anchor = link.href.replace('/', '');
        const elem = document.querySelector(anchor);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/96 backdrop-blur-md border-b border-primary/10 shadow-sm transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Brand */}
        <div
          onClick={() => navigate('/')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative shrink-0">
            <img
              src={isAr ? LOGO_URL_AR : LOGO_URL}
              alt="Edinam Destiny Recruitment Agency"
              className="size-12 sm:size-14 rounded-full object-cover border-2 border-accent shadow-md transition-transform group-hover:scale-105"
            />
            {/* Live active dot (Gold) */}
            <span className="absolute -bottom-0.5 -end-0.5 size-3.5 rounded-full bg-accent border-2 border-white" />
          </div>
          <div className="hidden sm:block">
            <div className="font-display text-lg font-black text-primary leading-tight">
              {isAr ? 'إيدينام ديستيني' : 'Edinam Destiny'}
            </div>
            <div className="text-[10px] font-semibold text-muted-foreground tracking-wide leading-tight">
              {isAr ? 'وكالة توظيف منزلي' : 'Recruitment Agency'}
            </div>
            <div className="text-[9px] text-accent-dark font-bold tracking-wider uppercase leading-tight mt-0.5">
              {isAr ? BRAND_TAGLINE_AR : BRAND_TAGLINE_EN}
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => {
            const isActive = link.isPage && currentPath === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`relative text-sm font-semibold transition-colors hover:text-teal ${
                  isActive ? 'text-primary font-black' : 'text-primary/75'
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className="ms-1 inline-flex items-center justify-center size-4 text-[9px] font-bold text-primary bg-accent rounded-full">
                    {link.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute -bottom-1.5 start-0 end-0 h-0.5 bg-accent rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            aria-label={isAr ? "Switch to English" : "التحويل إلى العربية"}
            className="flex items-center gap-1.5 min-h-9 px-3 rounded-full border border-primary/15 text-xs font-bold text-primary hover:bg-secondary transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Globe className="size-3.5 text-teal" aria-hidden="true" />
            <span>{isAr ? 'EN' : 'عربي'}</span>
          </button>

          {/* Phone */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            aria-label={`Call ${PHONE_NUMBER}`}
            className="size-9 sm:size-10 rounded-full bg-secondary text-primary hover:bg-primary hover:text-white transition-all grid place-items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Phone className="size-4" aria-hidden="true" />
          </a>

          {/* CTA Book */}
          <button
            onClick={() => openBookingModal()}
            className="hidden sm:inline-flex items-center gap-2 min-h-10 rounded-full bg-primary px-5 text-sm font-bold text-white shadow hover:bg-primary-dark transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Sparkles className="size-3.5 text-accent-light" aria-hidden="true" />
            <span>{t.nav.bookNow}</span>
          </button>

          {/* Admin link */}
          <button
            onClick={() => navigate('/admin')}
            aria-label="Admin Console"
            className="hidden lg:flex size-9 rounded-full border border-primary/10 text-[10px] font-bold text-muted-foreground hover:bg-secondary items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            title="Admin Console"
          >
            ⚙
          </button>

          {/* Mobile menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden size-9 rounded-full border border-primary/15 text-primary hover:bg-secondary grid place-items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {mobileMenuOpen ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-primary/10 bg-white p-5 shadow-lg">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-primary hover:bg-secondary hover:text-teal transition-colors"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="size-5 rounded-full bg-accent text-[10px] font-bold text-primary grid place-items-center">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
            <a
              href="/admin"
              onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); navigate('/admin'); }}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground hover:bg-secondary transition-colors"
            >
              {t.nav.admin}
            </a>

            <div className="pt-3 border-t border-primary/10 grid grid-cols-2 gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); openBookingModal(); }}
                className="min-h-11 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center gap-2 shadow"
              >
                <Sparkles className="size-3.5 text-accent-light" />
                <span>{t.nav.bookNow}</span>
              </button>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-11 rounded-full bg-brand-whatsapp text-brand-whatsappBg font-bold text-sm flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="size-3.5 fill-current" />
                <span>{t.bookWhatsApp}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
