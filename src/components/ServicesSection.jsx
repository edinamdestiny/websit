import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { PHONE_NUMBER, getWhatsAppLink } from '../data/translations';
import { Sparkles, Heart, Baby, Utensils, Home, Shirt, ArrowRight, ArrowLeft } from 'lucide-react';

export const ServicesSection = () => {
  const { isAr, t } = useLanguage();
  const { openBookingModal } = useApp();

  const iconMap = {
    nanny: Baby,
    caregiver: Heart,
    complete_cleaning: Home,
    cleaning_cooking: Utensils,
    hourly_service: Sparkles,
    laundry_ironing: Shirt
  };

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="px-5 py-24 lg:px-8 bg-muted">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-bold tracking-widest text-accent-dark uppercase">
            {t.services.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-black text-primary">
            {t.services.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service) => {
            const Icon = iconMap[service.id] || Sparkles;
            return (
              <article
                key={service.id}
                className="group relative flex flex-col justify-between rounded-[2rem] border border-border bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated hover:border-accent/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="size-14 rounded-2xl bg-secondary grid place-items-center text-primary group-hover:bg-teal/15 group-hover:text-teal transition-colors">
                      <Icon className="size-7" />
                    </div>
                    {service.badge && (
                      <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent-dark">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 font-display text-xl sm:text-2xl font-bold text-primary">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-border flex items-center justify-between">
                  <button
                    onClick={() => openBookingModal({ service: service.title })}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-teal transition-colors"
                  >
                    <span>{isAr ? "احجز هذه الخدمة" : "Book Service"}</span>
                    <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </button>
                  <span className="text-xs text-muted-foreground font-medium">
                    {isAr ? "تأكيد فوري" : "Instant"}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
