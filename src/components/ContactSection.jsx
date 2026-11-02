import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig, getWhatsAppLink } from '../config/siteConfig';
import { Phone, MessageSquare, MapPin, Clock, Building, Navigation, Mail } from 'lucide-react';

export const ContactSection = () => {
  const { isAr, t } = useLanguage();

  return (
    <section id="contact" className="px-5 py-24 lg:px-8 bg-muted">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-bold tracking-widest text-accent-dark uppercase">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-black text-primary">
            {t.contact.title}
          </h2>
        </div>

        {/* 2 Column Layout: Office cards + Google Map */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[.95fr_1.05fr] items-start">
          
          {/* Contact Details & Direct Actions */}
          <div className="space-y-4">
            
            {/* Primary Phone / WhatsApp 1 */}
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-soft transition-all hover:border-teal hover:shadow-elevated group"
              >
                <div className="size-11 rounded-xl bg-secondary grid place-items-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <Phone className="size-5" />
                </div>
                <div>
                  <strong className="block text-xs text-muted-foreground font-semibold">
                    {isAr ? "الخط المباشر 1" : "Direct Line 1"}
                  </strong>
                  <span className="font-display text-sm sm:text-base font-bold text-primary group-hover:text-teal transition-colors" dir="ltr">
                    {siteConfig.phone}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.phone2Raw}`}
                className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-soft transition-all hover:border-teal hover:shadow-elevated group"
              >
                <div className="size-11 rounded-xl bg-secondary grid place-items-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <Phone className="size-5" />
                </div>
                <div>
                  <strong className="block text-xs text-muted-foreground font-semibold">
                    {isAr ? "الخط المباشر 2" : "Direct Line 2"}
                  </strong>
                  <span className="font-display text-sm sm:text-base font-bold text-primary group-hover:text-teal transition-colors" dir="ltr">
                    {siteConfig.phone2}
                  </span>
                </div>
              </a>
            </div>

            {/* Direct WhatsApp Actions for both numbers */}
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href={getWhatsAppLink("السلام عليكم، أرغب في الاستفسار عن خدمات التوظيف المنزلي بالرياض", siteConfig.whatsappNumber)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-50/50 p-4 shadow-soft transition-all hover:bg-emerald-100/70 hover:shadow-elevated group"
              >
                <div className="size-11 rounded-xl bg-brand-whatsapp text-brand-whatsappBg grid place-items-center shadow-sm shrink-0">
                  <MessageSquare className="size-5 fill-current" />
                </div>
                <div>
                  <strong className="block text-xs text-emerald-800 font-semibold">
                    {isAr ? "واتساب الإدارة 1" : "WhatsApp Admin 1"}
                  </strong>
                  <span className="font-display text-sm font-bold text-emerald-950" dir="ltr">
                    {siteConfig.phone}
                  </span>
                </div>
              </a>

              <a
                href={getWhatsAppLink("السلام عليكم، أرغب في حجز كادر منزلي بالرياض", siteConfig.whatsappNumber2)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-50/50 p-4 shadow-soft transition-all hover:bg-emerald-100/70 hover:shadow-elevated group"
              >
                <div className="size-11 rounded-xl bg-brand-whatsapp text-brand-whatsappBg grid place-items-center shadow-sm shrink-0">
                  <MessageSquare className="size-5 fill-current" />
                </div>
                <div>
                  <strong className="block text-xs text-emerald-800 font-semibold">
                    {isAr ? "واتساب الحجوزات 2" : "WhatsApp Bookings 2"}
                  </strong>
                  <span className="font-display text-sm font-bold text-emerald-950" dir="ltr">
                    {siteConfig.phone2}
                  </span>
                </div>
              </a>
            </div>

            {/* Email Card */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-soft transition-all hover:border-teal hover:shadow-elevated group"
            >
              <div className="size-11 rounded-xl bg-secondary grid place-items-center text-teal shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail className="size-5" />
              </div>
              <div>
                <strong className="font-bold text-xs text-muted-foreground block">
                  {isAr ? "البريد الإلكتروني الرسمي" : "Official Business Email"}
                </strong>
                <span className="text-sm font-bold text-primary group-hover:text-teal transition-colors">
                  {siteConfig.email}
                </span>
              </div>
            </a>

            {/* Main Office */}
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-4 shadow-soft">
              <div className="size-11 rounded-xl bg-secondary grid place-items-center text-teal shrink-0">
                <Building className="size-5" />
              </div>
              <div>
                <strong className="font-bold text-sm text-primary block">
                  {t.contact.mainOfficeTitle}
                </strong>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {t.contact.mainOfficeAddress}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-4 shadow-soft">
              <div className="size-11 rounded-xl bg-secondary grid place-items-center text-teal shrink-0">
                <Clock className="size-5" />
              </div>
              <div>
                <strong className="font-bold text-sm text-primary block">
                  {t.contact.workingHoursTitle}
                </strong>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {t.contact.workingHours}
                </p>
              </div>
            </div>

          </div>

          {/* Riyadh Map Embed */}
          <div className="overflow-hidden rounded-[2.5rem] border border-border bg-white p-3 shadow-soft h-[530px] flex flex-col">
            <div className="px-4 py-2 flex items-center justify-between text-xs text-muted-foreground font-semibold">
              <span className="flex items-center gap-1.5 text-primary">
                <Navigation className="size-3.5 text-teal" />
                {isAr ? "مقر الملقا، طريق أنس بن مالك، الرياض" : "Al Malqa, Anas Ibn Malik Rd, Riyadh"}
              </span>
              <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-bold">
                {isAr ? "مفتوح الآن" : "Open Now"}
              </span>
            </div>
            
            <iframe
              title={isAr ? "موقع وكالة إيدينام ديستيني — الملقا، الرياض" : "Edinam Destiny Agency location — Al Malqa, Riyadh"}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115876.3268482436!2d46.54129774627447!3d24.825026941865916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd974488be33%3A0xa64b3ef39589d38c!2sAl%20Malqa%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
              className="w-full flex-1 rounded-3xl border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
