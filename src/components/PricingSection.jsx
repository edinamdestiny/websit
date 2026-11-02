import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { hourlyPackages, monthlyPackages } from '../data/servicesData';
import { getWhatsAppLink } from '../data/translations';
import { Check, Sparkles, MessageSquare, ShieldCheck, Car } from 'lucide-react';

export const PricingSection = () => {
  const { isAr, t } = useLanguage();
  const { openBookingModal } = useApp();
  const [activeTab, setActiveTab] = useState('hourly'); // 'hourly' | 'monthly'

  return (
    <section id="pricing" className="px-5 py-24 lg:px-8 bg-muted">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-bold tracking-widest text-accent-dark uppercase">
            {t.pricing.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-black text-primary">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            {t.pricing.subtitle}
          </p>

          {/* Tab Selector */}
          <div className="mx-auto mt-10 flex w-fit rounded-full bg-white p-1.5 shadow-sm border border-border">
            <button
              onClick={() => setActiveTab('hourly')}
              className={`min-h-12 rounded-full px-7 text-sm font-bold transition-all ${
                activeTab === 'hourly'
                  ? 'bg-primary text-white shadow'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {t.pricing.hourlyTab}
            </button>
            <button
              onClick={() => setActiveTab('monthly')}
              className={`min-h-12 rounded-full px-7 text-sm font-bold transition-all ${
                activeTab === 'monthly'
                  ? 'bg-primary text-white shadow'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {t.pricing.monthlyTab}
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'hourly' ? (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hourlyPackages.map((pkg) => (
              <article
                key={pkg.hours}
                className={`relative flex flex-col justify-between rounded-[2.2rem] border bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                  pkg.popular
                    ? 'border-accent shadow-elevated ring-2 ring-accent/30'
                    : 'border-border shadow-soft hover:shadow-elevated'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-[11px] font-black text-primary shadow uppercase tracking-wide">
                    {isAr ? pkg.badgeAr : pkg.badgeEn}
                  </div>
                )}

                <div>
                  <h3 className="font-display text-2xl font-bold text-primary">
                    {isAr ? pkg.arTitle : pkg.enTitle}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display text-4xl sm:text-5xl font-black text-primary">
                      {pkg.price}
                    </span>
                    <span className="text-base font-bold text-accent-dark">
                      {t.pricing.sar}
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {isAr ? pkg.idealForAr : pkg.idealForEn}
                  </p>

                  <div className="mt-6 pt-5 border-t border-border space-y-2.5">
                    {(isAr ? pkg.featuresAr : pkg.featuresEn).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-primary">
                        <Check className="size-3.5 text-teal shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-border flex flex-col gap-2">
                  <button
                    onClick={() => openBookingModal({ service: `${pkg.hours} Hours Package` })}
                    className={`w-full min-h-11 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 ${
                      pkg.popular
                        ? 'bg-primary text-white hover:bg-primary-dark'
                        : 'bg-secondary text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    <Sparkles className="size-3.5 text-accent-light" />
                    <span>{t.pricing.bookPackage}</span>
                  </button>

                  <a
                    href={getWhatsAppLink(`السلام عليكم، أرغب في حجز باقة ${pkg.hours} ساعات بسعر ${pkg.price} ريال في الرياض.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-10 rounded-full border border-emerald-600/30 text-emerald-700 bg-emerald-50/50 hover:bg-emerald-100 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="size-3.5 fill-current" />
                    <span>{isAr ? "حجز سريع عبر واتساب" : "WhatsApp Quick Book"}</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-14 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {monthlyPackages.map((pkg) => (
              <article
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-[2.5rem] border bg-white p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 ${
                  pkg.popular
                    ? 'border-accent shadow-elevated ring-2 ring-accent/30'
                    : 'border-border shadow-soft hover:shadow-elevated'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-[11px] font-black text-primary shadow uppercase tracking-wide">
                    {isAr ? pkg.badgeAr : pkg.badgeEn}
                  </div>
                )}

                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary">
                    {isAr ? pkg.arTitle : pkg.enTitle}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-3xl sm:text-4xl font-black text-primary">
                      {pkg.priceRange}
                    </span>
                    <span className="text-sm font-bold text-accent-dark">
                      {t.pricing.sar} / {isAr ? pkg.periodAr : pkg.periodEn}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {isAr ? pkg.descAr : pkg.descEn}
                  </p>

                  <div className="mt-8 pt-6 border-t border-border space-y-3">
                    {(isAr ? pkg.featuresAr : pkg.featuresEn).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-primary">
                        <Check className="size-4 text-teal shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-border flex flex-col gap-3">
                  <button
                    onClick={() => openBookingModal({ service: isAr ? pkg.arTitle : pkg.enTitle })}
                    className="w-full min-h-12 rounded-full bg-primary text-sm font-bold text-white hover:bg-primary-dark transition-all shadow flex items-center justify-center gap-2"
                  >
                    <Sparkles className="size-4 text-accent-light" />
                    <span>{isAr ? "طلب عقد شهري" : "Request Monthly Contract"}</span>
                  </button>

                  <a
                    href={getWhatsAppLink(`السلام عليكم، أود الاستفسار عن ${isAr ? pkg.arTitle : pkg.enTitle} في الرياض.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-11 rounded-full bg-brand-whatsapp text-xs sm:text-sm font-bold text-brand-whatsappBg hover:bg-brand-whatsappDark transition-all flex items-center justify-center gap-2 shadow"
                  >
                    <MessageSquare className="size-4 fill-current" />
                    <span>{isAr ? "محادثة فورية مع المشرف" : "Chat with Supervisor on WhatsApp"}</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Guarantees Note */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-muted-foreground font-semibold">
          <span className="flex items-center gap-1.5">
            <Car className="size-4 text-teal" />
            {isAr ? "التوصيل مؤمن لباب منزلك في جميع أحياء الرياض" : "Doorstep transport guaranteed in all Riyadh districts"}
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="size-4 text-emerald-600" />
            {isAr ? "ضمان الاستبدال الفوري بدون تكاليف إضافية" : "Free instant replacement guarantee"}
          </span>
        </div>

      </div>
    </section>
  );
};
