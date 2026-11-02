import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { PHONE_NUMBER, getWhatsAppLink } from '../data/translations';
import { MessageSquare, Phone, Sparkles } from 'lucide-react';

export const FloatingActions = () => {
  const { isAr, t } = useLanguage();
  const { openBookingModal } = useApp();

  return (
    <aside
      aria-label={isAr ? "إجراءات سريعة للتواصل" : "Quick contact actions"}
      className={`fixed z-40 flex flex-col gap-3 bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] ${
        isAr ? 'left-4 sm:left-8' : 'right-4 sm:right-8'
      }`}
    >
      {/* Quick Booking Button */}
      <button
        onClick={() => openBookingModal()}
        aria-label={isAr ? "احجز موعداً فورياً" : "Book Instant Appointment"}
        className="flex min-h-12 items-center gap-2 rounded-full bg-primary px-4 sm:px-5 font-bold text-white shadow-xl hover:bg-primary-dark transition-all transform hover:-translate-y-1 border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <Sparkles className="size-4 text-accent-light" aria-hidden="true" />
        <span className="hidden sm:inline text-xs sm:text-sm">
          {isAr ? "احجز موعداً" : "Book Service"}
        </span>
      </button>

      {/* Floating WhatsApp Action */}
      <a
        href={getWhatsAppLink("السلام عليكم، أرغب في حجز خدمة منزلية في الرياض")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.bookWhatsApp}
        className="animate-pulse-subtle flex min-h-12 sm:min-h-14 items-center gap-2.5 rounded-full bg-brand-whatsapp px-4 sm:px-5 font-black text-brand-whatsappBg shadow-2xl hover:bg-brand-whatsappDark transition-all transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-whatsapp"
      >
        <MessageSquare className="size-5 sm:size-6 fill-current" aria-hidden="true" />
        <span className="hidden sm:inline text-xs sm:text-sm">
          {t.bookWhatsApp}
        </span>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label={`Call ${PHONE_NUMBER}`}
        className="flex min-h-12 sm:min-h-14 items-center gap-2.5 rounded-full bg-white px-4 sm:px-5 font-bold text-primary shadow-xl hover:bg-secondary transition-all transform hover:-translate-y-1 border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <Phone className="size-5 text-teal" aria-hidden="true" />
        <span className="hidden sm:inline text-xs sm:text-sm" dir="ltr">
          {PHONE_NUMBER}
        </span>
      </a>
    </aside>
  );
};
