import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { riyadhDistricts, popularHourlyDistricts, popularMonthlyDistricts } from '../data/districtsData';
import { MapPin, Navigation } from 'lucide-react';

export const DistrictsSection = () => {
  const { isAr, t } = useLanguage();
  const { openBookingModal } = useApp();

  return (
    <section id="areas" className="bg-primary text-primary-foreground px-5 py-24 lg:px-8 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-24 -right-24 size-96 rounded-full bg-teal/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] items-end pb-12 border-b border-white/10">
          <div>
            <p className="text-sm font-bold tracking-widest text-accent-light uppercase">
              {t.areas.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              {t.areas.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
              {t.areas.subtitle}
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md border border-white/15">
            <div className="flex items-center gap-3 text-accent-light">
              <Navigation className="size-5" />
              <span className="font-bold text-sm uppercase tracking-wider">
                {isAr ? "وصول خلال 45-60 دقيقة" : "Fast Arrival within 45-60 mins"}
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed">
              {isAr
                ? "تتمركز سيارات النقل التابعة لنا في المحاور الرئيسية بمدينة الرياض (طريق الملك فهد، طريق أنس بن مالك، الدائري الشرقي والشمالي) لضمان الوصول الدقيق."
                : "Our transport fleet is strategically positioned along King Fahd Rd, Anas Ibn Malik, and Northern Ring for punctual doorstep arrival."}
            </p>
          </div>
        </div>

        {/* Popular Searches: 2 Column Cards */}
        <div className="mt-12">
          <p className="text-xs font-bold uppercase tracking-wider text-accent-light mb-4">
            {t.areas.popularSearches}
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            
            {/* Hourly Search Card */}
            <div className="rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm hover:border-accent/40 transition-all">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white font-display">
                  {t.areas.hourlyNearYou}
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/20 text-accent-light">
                  {isAr ? "من 175 ريال" : "From 175 SAR"}
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-white/70">
                {t.areas.fromPrice}
              </p>
              
              <div className="mt-5 flex flex-wrap gap-2">
                {popularHourlyDistricts.map((name, i) => (
                  <button
                    key={i}
                    onClick={() => openBookingModal({ district: name, service: "خدمة بالساعة" })}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:border-accent hover:bg-accent/20 transition-all"
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Filipino Search Card */}
            <div className="rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm hover:border-accent/40 transition-all">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white font-display">
                  {t.areas.monthlyFilipino}
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/20 text-accent-light">
                  {isAr ? "من 1,200 ريال" : "From 1,200 SAR"}
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-white/70">
                {t.areas.monthlyFrom}
              </p>
              
              <div className="mt-5 flex flex-wrap gap-2">
                {popularMonthlyDistricts.map((name, i) => (
                  <button
                    key={i}
                    onClick={() => openBookingModal({ district: name, service: "عقد شهري" })}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:border-accent hover:bg-accent/20 transition-all"
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Riyadh Districts Interactive Directory */}
        <div className="mt-12">
          <p className="text-xs font-bold uppercase tracking-wider text-white/60 mb-4">
            {isAr ? "جميع الأحياء المغطاة بالرياض (اضغط على حيّك للحجز الفوري):" : "All Riyadh Neighborhoods (Click your district to book instantly):"}
          </p>

          <div className="flex flex-wrap gap-2">
            {riyadhDistricts.map((d) => (
              <button
                key={d.id}
                onClick={() => openBookingModal({ district: isAr ? d.ar : d.en })}
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs text-white/85 hover:border-accent hover:bg-white/15 hover:text-white transition-all"
              >
                <MapPin className="size-3 text-accent-light group-hover:scale-110 transition-transform" />
                <span>{isAr ? d.ar : d.en}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
