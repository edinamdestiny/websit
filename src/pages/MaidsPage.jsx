import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { PHONE_NUMBER, getWhatsAppLink } from '../data/translations';
import { Search, Filter, Star, ShieldCheck, Award, Phone, MessageSquare, Eye, Sparkles, CheckCircle2 } from 'lucide-react';

export const MaidsPage = () => {
  const { isAr, t } = useLanguage();
  const { maids, openBookingModal, openMaidDetail } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNationality, setSelectedNationality] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [minExp, setMinExp] = useState(0);

  const nationalities = [
    { id: 'all', label: t.maidsGallery.all },
    { id: 'Philippines', label: isAr ? 'الفلبين 🇵🇭' : 'Philippines 🇵🇭' },
    { id: 'Kenya', label: isAr ? 'كينيا 🇰🇪' : 'Kenya 🇰🇪' },
    { id: 'Uganda', label: isAr ? 'أوغندا 🇺🇬' : 'Uganda 🇺🇬' },
    { id: 'Ghana', label: isAr ? 'غانا 🇬🇭' : 'Ghana 🇬🇭' }
  ];

  const filteredMaids = maids.filter((m) => {
    // Nationality filter
    if (selectedNationality !== 'all' && m.nationality !== selectedNationality) return false;

    // Status filter
    if (selectedStatus === 'available' && m.status !== 'available') return false;
    if (selectedStatus === 'booked' && m.status !== 'booked') return false;

    // Min experience
    if (m.experience_years < minExp) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = m.name.toLowerCase().includes(q) || (m.arabicName && m.arabicName.toLowerCase().includes(q));
      const matchServices = (m.services && m.services.toLowerCase().includes(q)) || (m.servicesAr && m.servicesAr.toLowerCase().includes(q));
      const matchLang = (m.languages && m.languages.toLowerCase().includes(q));
      if (!matchName && !matchServices && !matchLang) return false;
    }

    return true;
  });

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      
      {/* Page Title & Breadcrumbs */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent/15 text-accent-dark text-xs font-bold mb-3">
          <Sparkles className="size-3.5" />
          <span>{isAr ? "دليل العمالة المعتمدة بالرياض" : "Certified Domestic Workers Directory"}</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-primary">
          {isAr ? "دليل الكوادر والعمالة المنزلية" : "Staff Directory & Profiles"}
        </h1>
        <p className="mt-3 text-base text-muted-foreground max-w-2xl leading-relaxed">
          {isAr
            ? "تصفح جميع الكوادر المتاحة للحجز بالساعة أو بالشهر (مربيات، طهاة، عاملات نظافة، مقدمو رعاية)، مع تفاصيل الخبرات واللغات والفحوصات الطبية المعتمدة."
            : "Browse verified domestic professionals for hourly or monthly contracts in Riyadh (Nannies, Cooks, Cleaners, Caregivers). Screened backgrounds and verified credentials."}
        </p>
      </div>

      {/* Filters & Search Toolbar */}
      <div className="mt-10 rounded-3xl border border-border bg-white p-6 shadow-soft space-y-5">
        
        {/* Search input + Status toggle */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          <div className="relative flex-1">
            <Search className="absolute start-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={isAr ? "ابحثي بالاسم، اللغات، أو المهارات (مثل: طبخ، أطفال، تنظيف)..." : "Search by name, languages, or skills (e.g. cooking, childcare)..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full ps-10 pe-4 py-3 rounded-2xl border border-border bg-muted text-sm text-primary focus:border-accent focus:bg-white focus:outline-none transition-all"
            />
          </div>

          <div className="flex rounded-2xl bg-muted p-1 border border-border self-start sm:self-auto">
            <button
              onClick={() => setSelectedStatus('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedStatus === 'all' ? 'bg-primary text-white shadow' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {isAr ? "الكل" : "All"}
            </button>
            <button
              onClick={() => setSelectedStatus('available')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedStatus === 'available' ? 'bg-emerald-600 text-white shadow' : 'text-muted-foreground hover:text-emerald-700'
              }`}
            >
              {isAr ? "المتاحات فقط" : "Available Only"}
            </button>
            <button
              onClick={() => setSelectedStatus('booked')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedStatus === 'booked' ? 'bg-amber-600 text-white shadow' : 'text-muted-foreground hover:text-amber-700'
              }`}
            >
              {isAr ? "محجوزات" : "Booked"}
            </button>
          </div>
        </div>

        {/* Nationality Pills & Experience selector */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-muted-foreground me-1 flex items-center gap-1">
              <Filter className="size-3.5" />
              {isAr ? "الجنسية:" : "Nationality:"}
            </span>
            {nationalities.map((nat) => (
              <button
                key={nat.id}
                onClick={() => setSelectedNationality(nat.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                  selectedNationality === nat.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'border border-border bg-muted text-muted-foreground hover:border-primary/40'
                }`}
              >
                {nat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
            <span>{isAr ? "الخبرة:" : "Min Exp:"}</span>
            <select
              value={minExp}
              onChange={(e) => setMinExp(Number(e.target.value))}
              className="py-1 px-3 rounded-xl border border-border bg-white text-primary text-xs font-semibold focus:outline-none focus:border-accent"
            >
              <option value={0}>{isAr ? "جميع سنوات الخبرة" : "All Experience"}</option>
              <option value={3}>{isAr ? "3+ سنوات خبرة" : "3+ Years"}</option>
              <option value={5}>{isAr ? "5+ سنوات خبرة" : "5+ Years"}</option>
            </select>
          </div>
        </div>

      </div>

      {/* Results Count */}
      <div className="mt-8 flex items-center justify-between text-xs text-muted-foreground font-semibold px-1">
        <span>
          {isAr ? `عرض ${filteredMaids.length} عاملة منزلية` : `Showing ${filteredMaids.length} domestic workers`}
        </span>
        {searchQuery && (
          <button
            onClick={() => { setSearchQuery(''); setSelectedNationality('all'); setSelectedStatus('all'); setMinExp(0); }}
            className="text-primary hover:underline font-bold"
          >
            {isAr ? "إعادة ضبط الفلاتر" : "Reset Filters"}
          </button>
        )}
      </div>

      {/* Maids Catalog Grid */}
      {filteredMaids.length === 0 ? (
        <div className="mt-12 rounded-3xl border border-dashed border-border bg-white p-16 text-center">
          <p className="text-lg font-bold text-primary">
            {isAr ? "لا توجد نتائج تطابق بحثك حالياً" : "No domestic workers found matching your criteria"}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {isAr ? "جربي تغيير الفلاتر أو التواصلي معنا عبر واتساب لطلب عاملة بمواصفات خاصة." : "Try adjusting your filters or chat with us on WhatsApp for custom requests."}
          </p>
          <a
            href={getWhatsAppLink("السلام عليكم، أبحث عن عاملة منزلية بمواصفات خاصة بالرياض")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 min-h-12 rounded-full bg-[#25D366] px-6 text-sm font-bold text-[#103B22] shadow"
          >
            <MessageSquare className="size-4 fill-current" />
            <span>{t.bookWhatsApp}</span>
          </a>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMaids.map((maid) => {
            const isAvailable = maid.status === 'available';
            const statusLabel = isAvailable
              ? (isAr ? "متاحة الآن" : "Available")
              : (isAr ? "محجوزة" : "Booked");
            const statusBg = isAvailable ? "bg-emerald-600" : "bg-amber-600";

            return (
              <article
                key={maid.id}
                className="overflow-hidden rounded-[2.2rem] border border-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated flex flex-col justify-between"
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
                          <span>{isAr ? "موثقة" : "Verified"}</span>
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {isAr ? maid.servicesAr || maid.services : maid.services}
                    </p>

                    <div className="mt-2.5 text-[11px] text-muted-foreground">
                      <strong className="text-primary font-semibold">{t.maidsGallery.languages}</strong>{' '}
                      {isAr ? maid.languagesAr || maid.languages : maid.languages}
                    </div>

                    {/* Specialties pills */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {(isAr ? maid.specialties : maid.specialtiesEn || maid.specialties).slice(0, 3).map((sp, idx) => (
                        <span key={idx} className="rounded-md bg-muted px-2 py-0.5 text-[10px] text-muted-foreground font-medium">
                          {sp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 pt-4 border-t border-border flex flex-col gap-2">
                    <button
                      onClick={() => openBookingModal({ maid: maid })}
                      className="w-full flex min-h-10 items-center justify-center gap-1.5 rounded-full bg-primary text-xs font-bold text-white hover:bg-primary-dark transition-all shadow-sm"
                    >
                      <Sparkles className="size-3.5 text-accent-light" />
                      <span>{isAr ? "احجز هذا الكادر" : "Book This Worker"}</span>
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="flex min-h-9 items-center justify-center gap-1 rounded-full border border-border text-xs font-bold text-primary hover:bg-secondary transition-all"
                      >
                        <Phone className="size-3.5 text-teal" />
                        <span>{t.maidsGallery.callMaid}</span>
                      </a>

                      <a
                        href={getWhatsAppLink(`السلام عليكم، أرغب في حجز ${maid.name} (${maid.nationality})`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-9 items-center justify-center gap-1 rounded-full bg-brand-whatsapp text-xs font-bold text-brand-whatsappBg hover:bg-brand-whatsappDark transition-all"
                      >
                        <MessageSquare className="size-3.5 fill-current" />
                        <span>{t.maidsGallery.bookMaidWhatsApp}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

    </main>
  );
};
