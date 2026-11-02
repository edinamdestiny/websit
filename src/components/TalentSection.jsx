import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { getWhatsAppLink } from '../data/translations';
import { MessageSquare, Sparkles } from 'lucide-react';

export const TalentSection = () => {
  const { isAr, t } = useLanguage();
  const { openBookingModal } = useApp();

  return (
    <section id="talent" className="bg-secondary px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-widest text-accent-dark uppercase">
              {t.talent.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-black text-primary">
              {t.talent.title}
            </h2>
          </div>
          <p className="max-w-md text-base sm:text-lg text-muted-foreground">
            {t.talent.subtitle}
          </p>
        </div>

        {/* Nationalities Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.talent.nationalities.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-[2.2rem] bg-white border border-border shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated flex flex-col justify-between"
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={`${item.en} domestic professional`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                
                {/* Country Tag Badge */}
                <span className="absolute top-4 start-4 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-primary shadow-sm">
                  {isAr ? item.country : item.en}
                </span>

                {/* Overlay strength caption */}
                <div className="absolute inset-x-4 bottom-4 text-white">
                  <h3 className="font-display text-lg font-bold">
                    {isAr ? `عاملات من ${item.country}` : `${item.en} Professionals`}
                  </h3>
                  <p className="text-xs text-white/90 mt-1 line-clamp-2">
                    {item.strength}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 flex flex-col gap-2.5">
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {item.details}
                </p>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  <button
                    onClick={() => openBookingModal({
                      service: isAr ? `حجز عاملة من ${item.country}` : `Staff from ${item.en}`
                    })}
                    className="flex min-h-10 items-center justify-center gap-1.5 rounded-full bg-primary text-xs font-bold text-white hover:bg-primary-dark transition-all"
                  >
                    <Sparkles className="size-3.5 text-accent-light" />
                    <span>{isAr ? "احجز" : "Book"}</span>
                  </button>

                  <a
                    href={getWhatsAppLink(`السلام عليكم، أرغب في حجز عاملة من ${item.country}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-10 items-center justify-center gap-1.5 rounded-full bg-brand-whatsapp text-xs font-bold text-brand-whatsappBg hover:bg-brand-whatsappDark transition-all"
                  >
                    <MessageSquare className="size-3.5 fill-current" />
                    <span>{isAr ? "واتساب" : "WhatsApp"}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
