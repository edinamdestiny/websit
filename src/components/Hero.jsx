import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { PHONE_NUMBER, getWhatsAppLink, LOGO_URL, LOGO_URL_AR } from '../data/translations';
import { Phone, MessageSquare, ShieldCheck, Clock, CheckCircle2, Star, Sparkles, MapPin } from 'lucide-react';

export const Hero = () => {
  const { isAr, t } = useLanguage();
  const { openBookingModal } = useApp();

  const HERO_IMAGE = "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=1800";

  const trustItems = [
    { icon: ShieldCheck, label: t.trustPills.vetted },
    { icon: Clock, label: t.trustPills.punctual },
    { icon: CheckCircle2, label: t.trustPills.guarantee },
    { icon: Sparkles, label: t.trustPills.legal },
  ];

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-primary text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Professional domestic staff"
          className="h-full w-full object-cover opacity-15"
        />
        {/* Royal Emerald & Forest Green gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary/95 to-primary/80 rtl:from-primary-dark rtl:via-primary/95 rtl:to-primary/80" />
        {/* Radiant Gold glow top-right */}
        <div className="absolute top-0 end-0 w-2/3 h-full bg-gradient-to-bl from-accent/15 via-teal/10 to-transparent pointer-events-none" />
        {/* Gold glow bottom */}
        <div className="absolute bottom-0 start-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-8 w-full">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr] items-center">

          {/* Main Content */}
          <div className="max-w-2xl">
            {/* Live Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/15 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-bold tracking-widest text-accent-light uppercase">
                {isAr ? "الرياض · متاح الآن للحجز الفوري" : "RIYADH · BOOKING NOW AVAILABLE"}
              </span>
            </div>

            {/* Logo + Brand */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={isAr ? LOGO_URL_AR : LOGO_URL}
                alt="Edinam Destiny Recruitment Agency"
                className="size-16 sm:size-20 rounded-full border-2 border-accent shadow-lg object-cover"
              />
              <div>
                <h2 className="font-display text-lg font-black text-accent-light leading-tight">
                  {isAr ? 'وكالة إيدينام ديستيني' : 'Edinam Destiny'}
                </h2>
                <p className="text-xs text-white/70 font-semibold">
                  {isAr ? 'للتوظيف المنزلي المحترف' : 'Recruitment Agency · الرياض'}
                </p>
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-[1.15] text-white">
              {t.tagline}
            </h1>

            {/* Services Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {['🍼 ' + (isAr ? 'مربيات' : 'Nannies'), '🍳 ' + (isAr ? 'طهاة' : 'Cooks'), '🧹 ' + (isAr ? 'عاملات نظافة' : 'Cleaners'), '❤️ ' + (isAr ? 'مقدمو رعاية' : 'Caregivers')].map(tag => (
                <span key={tag} className="px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-accent-light backdrop-blur-sm shadow-xs">
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/85">
              {t.heroDesc}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppLink("مرحباً، أرغب في الاستفسار عن كوادر وكالة إيدينام ديستيني للتوظيف في الرياض")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 min-h-13 rounded-full bg-accent px-7 text-base font-black text-primary shadow-lg hover:bg-accent-light transition-all hover:-translate-y-0.5"
              >
                <MessageSquare className="size-5 fill-current" />
                <span>{t.bookWhatsApp}</span>
              </a>

              <button
                onClick={() => openBookingModal()}
                className="inline-flex items-center justify-center gap-2 min-h-13 rounded-full bg-white/15 border border-white/25 px-6 text-base font-bold text-white hover:bg-white/25 transition-all hover:-translate-y-0.5"
              >
                <Sparkles className="size-4 text-accent-light" />
                <span>{isAr ? "احجز موعداً" : "Book Appointment"}</span>
              </button>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 min-h-13 rounded-full bg-white/10 px-5 text-sm font-semibold text-white border border-white/20 hover:bg-white/20 transition-all"
              >
                <Phone className="size-4 text-accent-light" />
                <span dir="ltr">{PHONE_NUMBER}</span>
              </a>
            </div>

            {/* Trust Pills */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {trustItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                  <item.icon className="size-4 text-accent-light shrink-0" />
                  <span className="font-medium leading-snug">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Price Card */}
          <div className="hidden lg:block">
            <div className="rounded-3xl border border-accent/30 bg-primary-dark/80 p-7 backdrop-blur-xl shadow-2xl">

              <div className="flex items-center justify-between pb-5 border-b border-white/15">
                <div>
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">
                    {isAr ? "باقات الساعة اليومية" : "Daily Hourly Packages"}
                  </span>
                  <h3 className="font-display text-2xl font-black mt-1 text-white">
                    {isAr ? "من 175 ريال فقط" : "From only 175 SAR"}
                  </h3>
                </div>
                <div className="size-11 rounded-2xl bg-accent/20 border border-accent/40 grid place-items-center">
                  <Star className="size-5 text-accent fill-current" />
                </div>
              </div>

              <div className="py-5 space-y-3 text-sm">
                {[
                  [isAr ? "مربية — 4 ساعات" : "Nanny — 4 Hours", "175 SAR"],
                  [isAr ? "طاه — 5 ساعات (الأوفر)" : "Cook — 5 Hours (Best)", "180 SAR"],
                  [isAr ? "عاملة نظافة — 8 ساعات" : "Cleaner — 8 Hours", "300 SAR"],
                  [isAr ? "مقدم رعاية — شهري" : "Caregiver — Monthly", "من 1,200"],
                ].map(([label, price]) => (
                  <div key={label} className="flex items-center justify-between text-white/90">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-accent" />
                      {label}
                    </span>
                    <span className="font-bold text-accent-light">{price}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => openBookingModal()}
                className="w-full mt-2 min-h-11 rounded-2xl bg-accent font-bold text-primary hover:bg-accent-light transition-all shadow flex items-center justify-center gap-2 text-sm"
              >
                <span>{isAr ? "احجز الآن" : "Book Now — No Deposit"}</span>
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/70">
                <MapPin className="size-3 text-accent-light" />
                <span>{isAr ? "تغطية جميع أحياء الرياض" : "All Riyadh districts covered"}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
