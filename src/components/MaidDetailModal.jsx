import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { PHONE_NUMBER, getWhatsAppLink } from '../data/translations';
import { X, Star, ShieldCheck, Award, MessageSquare, Phone, Sparkles, Check } from 'lucide-react';

export const MaidDetailModal = () => {
  const { isAr, t } = useLanguage();
  const { isMaidDetailOpen, activeMaidDetail, closeMaidDetail, openBookingModal } = useApp();

  if (!isMaidDetailOpen || !activeMaidDetail) return null;

  const maid = activeMaidDetail;
  const isAvailable = maid.status === 'available';

  const handleBookThisMaid = () => {
    closeMaidDetail();
    openBookingModal({ maid: maid });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-[2.5rem] bg-white p-6 sm:p-8 shadow-2xl border border-border my-8">
        
        {/* Close Button */}
        <button
          onClick={closeMaidDetail}
          className="absolute top-6 end-6 size-10 rounded-full border border-border bg-muted text-muted-foreground hover:text-primary hover:bg-secondary grid place-items-center transition-all z-10"
        >
          <X className="size-5" />
        </button>

        {/* Content */}
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          
          {/* Portrait */}
          <div className="relative w-full sm:w-56 aspect-[4/5] rounded-3xl overflow-hidden bg-muted shrink-0 shadow-md">
            <img
              src={maid.photo}
              alt={maid.name}
              className="h-full w-full object-cover"
            />
            <span className="absolute top-3 start-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-primary shadow">
              {maid.flag} {isAr ? maid.nationalityAr : maid.nationality}
            </span>
            <span className={`absolute bottom-3 start-3 rounded-full px-3 py-1 text-xs font-bold text-white ${isAvailable ? 'bg-emerald-600' : 'bg-amber-600'}`}>
              {isAvailable ? (isAr ? "متاح فورياً" : "Available") : (isAr ? "محجوز" : "Booked")}
            </span>
          </div>

          {/* Details */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-accent-dark bg-accent/15 px-2.5 py-0.5 rounded-full">
                {maid.age} {isAr ? "سنة" : "years old"}
              </span>
              {maid.verified && (
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <ShieldCheck className="size-3.5" />
                  <span>{isAr ? "فحص طبي وأمني معتمد" : "Verified & Screened"}</span>
                </span>
              )}
            </div>

            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-black text-primary">
              {isAr ? maid.arabicName || maid.name : maid.name}
            </h3>

            <div className="mt-2 flex items-center gap-3">
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="size-4 fill-current" />
                <span>{maid.rating}</span>
                <span className="text-muted-foreground text-xs font-normal">
                  ({maid.reviewsCount || 40} {isAr ? "تقييم" : "reviews"})
                </span>
              </div>
              <span className="text-muted-foreground text-xs">·</span>
              <span className="text-xs font-bold text-primary flex items-center gap-1">
                <Award className="size-3.5 text-accent-dark" />
                {maid.experience_years} {t.maidsGallery.yearsExp}
              </span>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {isAr ? maid.bioAr || maid.bio : maid.bio}
            </p>

            {/* Languages & Services */}
            <div className="mt-4 pt-3 border-t border-border space-y-2 text-xs">
              <div>
                <strong className="text-primary font-bold">{isAr ? "اللغات المتقنة:" : "Languages:"} </strong>
                <span className="text-muted-foreground">{isAr ? maid.languagesAr || maid.languages : maid.languages}</span>
              </div>
              <div>
                <strong className="text-primary font-bold">{isAr ? "الخدمات الأساسية:" : "Services:"} </strong>
                <span className="text-muted-foreground">{isAr ? maid.servicesAr || maid.services : maid.services}</span>
              </div>
            </div>

            {/* Specialties Badges */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {(isAr ? maid.specialties : maid.specialtiesEn || maid.specialties).map((sp, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-primary font-semibold"
                >
                  {sp}
                </span>
              ))}
            </div>

          </div>

        </div>

        {/* Pricing & Booking Footer */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-muted-foreground font-semibold">
              {isAr ? "يبدأ من:" : "Starting from:"}
            </span>
            <span className="font-display text-2xl font-black text-primary">
              175
            </span>
            <span className="text-xs font-bold text-accent-dark">
              SAR / {isAr ? "4 ساعات" : "4 hours"}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleBookThisMaid}
              className="flex-1 sm:flex-none min-h-11 rounded-full bg-primary px-6 text-xs sm:text-sm font-bold text-white hover:bg-primary-dark transition-all flex items-center justify-center gap-1.5 shadow"
            >
              <Sparkles className="size-3.5 text-accent-light" />
              <span>{isAr ? "احجز هذا الكادر" : "Book This Worker"}</span>
            </button>

            <a
              href={getWhatsAppLink(`السلام عليكم، أود حجز ${maid.name} (${maid.nationality})`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none min-h-11 rounded-full bg-brand-whatsapp px-5 text-xs sm:text-sm font-bold text-brand-whatsappBg hover:bg-brand-whatsappDark transition-all flex items-center justify-center gap-1.5 shadow"
            >
              <MessageSquare className="size-3.5 fill-current" />
              <span>{t.bookWhatsApp}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
