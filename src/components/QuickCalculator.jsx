import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { riyadhDistricts } from '../data/districtsData';
import { getWhatsAppLink } from '../data/translations';
import { Calculator, MessageSquare, Sparkles, MapPin } from 'lucide-react';

export const QuickCalculator = () => {
  const { isAr, t } = useLanguage();
  const { openBookingModal } = useApp();

  const [serviceType, setServiceType] = useState('hourly'); // 'hourly' | 'monthly' | 'deep'
  const [hours, setHours] = useState(5);
  const [nationality, setNationality] = useState('any');
  const [district, setDistrict] = useState('al-malqa');

  // Standard Pricing Formula
  let estimatedPrice = 180;
  if (serviceType === 'hourly') {
    if (hours === 4) estimatedPrice = 175;
    else if (hours === 5) estimatedPrice = 180;
    else if (hours === 8) estimatedPrice = 300;
    else if (hours === 12) estimatedPrice = 450;
    else estimatedPrice = hours * 38;
  } else if (serviceType === 'monthly') {
    estimatedPrice = nationality === 'Philippines' ? 1800 : 1500;
  } else if (serviceType === 'deep') {
    estimatedPrice = 650;
  }

  const selectedDistrictObj = riyadhDistricts.find(d => d.id === district) || riyadhDistricts[0];
  const districtName = isAr ? selectedDistrictObj.ar : selectedDistrictObj.en;

  const handleBookOnWhatsApp = () => {
    const nationalityText = nationality === 'any' ? (isAr ? 'أي جنسية متوفرة' : 'Any available') : nationality;
    const serviceName = serviceType === 'hourly' 
      ? (isAr ? `خدمة بالساعة (${hours} ساعات)` : `Hourly Service (${hours} hours)`)
      : serviceType === 'monthly'
      ? (isAr ? 'عقد شهري' : 'Monthly Contract')
      : (isAr ? 'تنظيف عميق' : 'Deep Cleaning');

    const msg = isAr
      ? `السلام عليكم، أرغب في حجز خدمة عبر وكالة إيدينام ديستيني للتوظيف بالرياض:\n- الخدمة: ${serviceName}\n- الحي: ${districtName}\n- الجنسية المفضلة: ${nationalityText}\n- التقدير: ${estimatedPrice} ريال\nأرجو تأكيد الموعد المتاح.`
      : `Hello, I'd like to book a service with Edinam Destiny Recruitment Agency (Riyadh):\n- Service: ${serviceName}\n- District: ${districtName}\n- Preferred Nationality: ${nationalityText}\n- Estimate: ${estimatedPrice} SAR\nPlease confirm available slots.`;

    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <section aria-label={isAr ? "حاسبة الأسعار السريعة" : "Quick Pricing Calculator"} className="relative -mt-10 sm:-mt-16 z-20 mx-auto max-w-5xl px-4 sm:px-6">
      <div className="rounded-[2.5rem] border border-border bg-white p-6 sm:p-10 shadow-elevated">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-2xl bg-secondary grid place-items-center text-primary" aria-hidden="true">
              <Calculator className="size-6 text-teal" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-primary">
                {t.pricing.calculatorTitle}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {isAr ? "احسب التكلفة فورياً واختر ما يناسب متطلبات منزلك" : "Instant estimation based on your specific requirements"}
              </p>
            </div>
          </div>

          {/* Service Type switcher */}
          <div className="flex rounded-full bg-muted p-1 border border-border/40">
            <button
              onClick={() => setServiceType('hourly')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                serviceType === 'hourly' ? 'bg-primary text-white shadow' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {isAr ? "بالساعة" : "Hourly"}
            </button>
            <button
              onClick={() => setServiceType('monthly')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                serviceType === 'monthly' ? 'bg-primary text-white shadow' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {isAr ? "شهري" : "Monthly"}
            </button>
            <button
              onClick={() => setServiceType('deep')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                serviceType === 'deep' ? 'bg-primary text-white shadow' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {isAr ? "تنظيف عميق" : "Deep Clean"}
            </button>
          </div>
        </div>

        {/* Inputs Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          
          {/* Duration / Hours selector (if hourly) */}
          {serviceType === 'hourly' ? (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                {t.pricing.selectDuration}
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[4, 5, 8, 12].map((h) => (
                  <button
                    key={h}
                    type="button"
                    onClick={() => setHours(h)}
                    className={`min-h-12 rounded-xl text-sm font-bold border transition-all ${
                      hours === h
                        ? 'border-teal bg-teal/10 text-primary font-black shadow-sm'
                        : 'border-border bg-white text-muted-foreground hover:border-teal/40'
                    }`}
                  >
                    {h} {isAr ? "س" : "h"}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                {isAr ? "نوع الباقة" : "Package Type"}
              </label>
              <div className="min-h-12 flex items-center px-4 rounded-xl border border-border bg-muted text-sm font-semibold text-primary">
                {serviceType === 'monthly' ? (isAr ? "عقد شهري متكامل" : "Full Monthly Contract") : (isAr ? "تنظيف فيلا بعد التشطيب" : "Full Post-Move Villa Scrub")}
              </div>
            </div>
          )}

          {/* Nationality Preference */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
              {t.pricing.selectNationality}
            </label>
            <select
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="w-full min-h-12 px-4 rounded-xl border border-border bg-white text-sm font-semibold text-primary focus:outline-none focus:border-teal"
            >
              <option value="any">{isAr ? "أي جنسية متوفرة (الأسرع وصولاً)" : "Any Available (Fastest)"}</option>
              <option value="Philippines">{isAr ? "فلبين (تنظيف دقيق وطبخ ومربيات)" : "Philippines (Detail, Cook, Nanny)"}</option>
              <option value="Kenya">{isAr ? "كينيا (نشاط وإدارة منزلية)" : "Kenya (Energetic & Thorough)"}</option>
              <option value="Uganda">{isAr ? "أوغندا (تنظيم وهدوء)" : "Uganda (Gentle & Organized)"}</option>
              <option value="Ghana">{isAr ? "غانا (ضيافة وعناية)" : "Ghana (Hospitality & Care)"}</option>
            </select>
          </div>

          {/* District selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
              {t.pricing.selectDistrict}
            </label>
            <div className="relative">
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full min-h-12 px-4 pe-9 rounded-xl border border-border bg-white text-sm font-semibold text-primary focus:outline-none focus:border-teal"
              >
                {riyadhDistricts.map((d) => (
                  <option key={d.id} value={d.id}>
                    {isAr ? d.ar : d.en} — {d.zone}
                  </option>
                ))}
              </select>
              <MapPin className="absolute end-3 top-1/2 -translate-y-1/2 size-4 text-teal pointer-events-none" aria-hidden="true" />
            </div>
          </div>

        </div>

        {/* Calculation Result & Action Bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted p-5 rounded-2xl">
          <div>
            <span className="text-xs text-muted-foreground font-semibold">
              {t.pricing.calculatedTotal}
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-3xl sm:text-4xl font-black text-primary font-display">
                {estimatedPrice}
              </span>
              <span className="text-sm font-bold text-accent-dark">
                {t.pricing.sar}
              </span>
              <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-semibold ms-2 border border-emerald-200">
                {isAr ? "شامل المواصلات" : "Transport Included"}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openBookingModal({
                service: serviceType === 'hourly' ? `${hours} Hours` : serviceType,
                district: districtName
              })}
              className="inline-flex items-center justify-center gap-2 min-h-12 rounded-xl bg-primary px-6 text-sm font-bold text-white hover:bg-primary-dark transition-all shadow"
            >
              <Sparkles className="size-4 text-accent-light" aria-hidden="true" />
              <span>{isAr ? "احجز هذا التقدير" : "Book This Estimate"}</span>
            </button>

            <button
              onClick={handleBookOnWhatsApp}
              className="inline-flex items-center justify-center gap-2 min-h-12 rounded-xl bg-brand-whatsapp px-5 text-sm font-bold text-brand-whatsappBg hover:bg-brand-whatsappDark transition-all shadow"
            >
              <MessageSquare className="size-4 fill-current" aria-hidden="true" />
              <span>{t.bookWhatsApp}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
