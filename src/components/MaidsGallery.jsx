import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { PHONE_NUMBER, getWhatsAppLink } from '../data/translations';
import { Phone, MessageSquare, Star, ShieldCheck, ArrowRight, ArrowLeft, Eye, Award } from 'lucide-react';

export const MaidsGallery = () => {
  const { isAr, t } = useLanguage();
  const { maids, openBookingModal, openMaidDetail, navigate } = useApp();
  const [filterNationality, setFilterNationality] = useState('all');

  const filterOptions = [
    { id: 'all', label: t.maidsGallery.all },
    { id: 'Philippines', label: isAr ? 'الفلبين 🇵🇭' : 'Philippines 🇵🇭' },
    { id: 'Kenya', label: isAr ? 'كينيا 🇰🇪' : 'Kenya 🇰🇪' },
    { id: 'Uganda', label: isAr ? 'أوغندا 🇺🇬' : 'Uganda 🇺🇬' },
    { id: 'Ghana', label: isAr ? 'غانا 🇬🇭' : 'Ghana 🇬🇭' },
    { id: 'available_only', label: isAr ? 'المتاحون فقط' : 'Available Only' }
  ];

  const filteredMaids = maids.filter((m) => {
    if (filterNationality === 'all') return true;
    if (filterNationality === 'available_only') return m.status === 'available';
    return m.nationality === filterNationality;
  });

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section id="maids" className="px-5 py-24 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-sm font-bold tracking-widest text-accent-dark uppercase">
              {t.maidsGallery.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-black text-primary">
              {t.maidsGallery.title}
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl">
              {t.maidsGallery.subtitle}
            </p>
          </div>

          <button
            onClick={() => navigate('/maids')}
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-teal transition-colors self-start md:self-auto"
          >
            <span>{t.maidsGallery.viewFullDirectory}</span>
            <ArrowIcon className="size-4" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 pb-2">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilterNationality(opt.id)}
              className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                filterNationality === opt.id
                  ? 'bg-primary text-white shadow-md'
                  : 'border border-border bg-muted text-muted-foreground hover:border-primary/40 hover:text-primary'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Maids Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredMaids.slice(0, 4).map((maid) => {
            const isAvailable = maid.status === 'available';
            const statusLabel = isAvailable
              ? (isAr ? "متاح الآن" : "Available")
              : (isAr ? "محجوز" : "Booked");
            const statusBg = isAvailable ? "bg-emerald-600" : "bg-amber-600";

            return (
              <article
                key={maid.id}
                className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated flex flex-col justify-between"
              >
                {/* Photo & Badges */}
                <div className="relative aspect-[4/5] bg-muted overflow-hidden">
                  <img
                    src={maid.photo}
                    alt={maid.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  
                  {/* Nationality Pill */}
                  <span className="absolute top-3.5 start-3.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-bold text-primary shadow-sm">
                    {maid.flag} {isAr ? maid.nationalityAr : maid.nationality}
                  </span>

                  {/* Status Badge */}
                  <span className={`absolute bottom-3.5 start-3.5 rounded-full px-3 py-1 text-[11px] font-bold text-white shadow ${statusBg}`}>
                    {statusLabel}
                  </span>

                  {/* Quick view button */}
                  <button
                    onClick={() => openMaidDetail(maid)}
                    className="absolute top-3.5 end-3.5 size-9 rounded-full bg-black/40 text-white backdrop-blur-md grid place-items-center hover:bg-black/70 transition-all"
                    title={t.maidsGallery.viewProfile}
                  >
                    <Eye className="size-4" />
                  </button>
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-primary font-display">
                        {isAr ? maid.arabicName || maid.name : maid.name}
                      </h3>
                      <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                        <Star className="size-3.5 fill-current" />
                        <span>{maid.rating}</span>
                      </div>
                    </div>

                    <div className="mt-2.5 flex items-center gap-2">
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-primary flex items-center gap-1">
                        <Award className="size-3 text-accent-dark" />
                        <span>{maid.experience_years} {t.maidsGallery.yearsExp}</span>
                      </span>
                      {maid.verified && (
                        <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-0.5">
                          <ShieldCheck className="size-3.5" />
                          <span>{isAr ? "موثق" : "Verified"}</span>
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {isAr ? maid.servicesAr || maid.services : maid.services}
                    </p>

                    <div className="mt-2 text-[11px] text-muted-foreground">
                      <strong className="text-primary font-semibold">{t.maidsGallery.languages}</strong>{' '}
                      {isAr ? maid.languagesAr || maid.languages : maid.languages}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 pt-4 border-t border-border grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="flex min-h-10 items-center justify-center gap-1.5 rounded-full bg-primary text-xs font-bold text-white hover:bg-primary-dark transition-all shadow-sm"
                    >
                      <Phone className="size-3.5" />
                      <span>{t.maidsGallery.callMaid}</span>
                    </a>

                    <a
                      href={getWhatsAppLink(`السلام عليكم، أرغب في حجز ${maid.name} (${maid.nationality})`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-10 items-center justify-center gap-1.5 rounded-full bg-brand-whatsapp text-xs font-bold text-brand-whatsappBg hover:bg-brand-whatsappDark transition-all shadow-sm"
                    >
                      <MessageSquare className="size-3.5 fill-current" />
                      <span>{t.maidsGallery.bookMaidWhatsApp}</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Banner linking to full directory */}
        <div className="mt-12 rounded-3xl bg-secondary p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <div>
            <h4 className="font-display text-xl font-bold text-primary">
              {isAr ? "تبحث عن خبرات إضافية ومواصفات محددة؟" : "Looking for specific skills or experience?"}
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              {isAr ? "تصفح السير الذاتية الكاملة لجميع الكوادر المتاحين فورياً بالرياض." : "Browse full CVs and profiles of all domestic staff available in Riyadh."}
            </p>
          </div>
          <button
            onClick={() => navigate('/maids')}
            className="shrink-0 min-h-12 rounded-full bg-primary px-7 text-sm font-bold text-white hover:bg-primary-dark transition-all shadow"
          >
            {isAr ? "تصفح جميع الكوادر" : "View All Profiles"}
          </button>
        </div>

      </div>
    </section>
  );
};
