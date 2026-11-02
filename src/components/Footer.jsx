import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { PHONE_NUMBER, getWhatsAppLink } from '../data/translations';
import { siteConfig } from '../config/siteConfig';
import { Phone, MessageSquare, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  const { isAr, t } = useLanguage();
  const { navigate } = useApp();

  return (
    <footer className="bg-primary text-primary-foreground px-5 pt-16 pb-12 lg:px-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        
        {/* Main Grid */}
        <div className="grid gap-10 md:grid-cols-4 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={isAr ? "/logo2.jpg" : "/logo.jpg"}
                alt="Edinam Destiny Recruitment Agency logo"
                className="size-12 rounded-full border-2 border-accent object-cover"
              />
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  {t.brandName}
                </h3>
                <p className="text-xs text-white/70">
                  {t.brandSub}
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-white/75 leading-relaxed">
              {t.footer.desc}
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-accent-light">
              <ShieldCheck className="size-4 shrink-0" />
              <span>{t.footer.crNumber}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base text-white font-display mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/75">
              <li>
                <a href="/#services" onClick={(e) => { e.preventDefault(); navigate('/'); setTimeout(() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-accent-light transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="/#talent" onClick={(e) => { e.preventDefault(); navigate('/'); setTimeout(() => document.querySelector('#talent')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-accent-light transition-colors">
                  {t.nav.talent}
                </a>
              </li>
              <li>
                <a href="/#pricing" onClick={(e) => { e.preventDefault(); navigate('/'); setTimeout(() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-accent-light transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="/#areas" onClick={(e) => { e.preventDefault(); navigate('/'); setTimeout(() => document.querySelector('#areas')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-accent-light transition-colors">
                  {t.nav.areas}
                </a>
              </li>
              <li>
                <button onClick={() => navigate('/maids')} className="hover:text-accent-light transition-colors text-start">
                  {t.nav.maidsDirectory}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/shop')} className="hover:text-accent-light transition-colors text-start">
                  {t.nav.shop}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/admin')} className="hover:text-accent-light transition-colors text-start text-accent-light">
                  {t.nav.admin}
                </button>
              </li>
            </ul>
          </div>

          {/* Riyadh Coverage */}
          <div>
            <h4 className="font-bold text-base text-white font-display mb-4">
              {isAr ? "أبرز أحياء الرياض" : "Featured Districts"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75">
              <li>{isAr ? "حي الملقا · طريق أنس بن مالك" : "Al Malqa · Anas Ibn Malik"}</li>
              <li>{isAr ? "حي النرجس والعارض" : "Al Narjis & Al Arid"}</li>
              <li>{isAr ? "حي اليرموك والمنسية" : "Al Yarmuk & Al Munsiyah"}</li>
              <li>{isAr ? "حي طويق وضهر لبن" : "Tuwaiq & Dhahrat Laban"}</li>
              <li>{isAr ? "حي حطين والياسمين" : "Hittin & Al Yasmin"}</li>
              <li>{isAr ? "حي العليا والسليمانية" : "Al Olaya & Al Sulaimaniyah"}</li>
            </ul>
          </div>

          {/* Contact Box */}
          <div>
            <h4 className="font-bold text-base text-white font-display mb-4">
              {isAr ? "احجز الآن بالرياض" : "Book in Riyadh"}
            </h4>
            <div className="space-y-2.5">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2 text-xs sm:text-sm text-white hover:text-accent-light transition-colors"
              >
                <Phone className="size-3.5 text-accent-light shrink-0" />
                <span dir="ltr">{siteConfig.phone}</span>
              </a>

              <a
                href={`tel:${siteConfig.phone2Raw}`}
                className="flex items-center gap-2 text-xs sm:text-sm text-white hover:text-accent-light transition-colors"
              >
                <Phone className="size-3.5 text-accent-light shrink-0" />
                <span dir="ltr">{siteConfig.phone2}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-xs text-white/80 hover:text-accent-light transition-colors"
              >
                <span className="text-accent-light">✉</span>
                <span className="truncate">{siteConfig.email}</span>
              </a>

              <div className="pt-1">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-whatsapp text-brand-whatsappBg font-bold text-xs hover:bg-brand-whatsappDark transition-all shadow"
                >
                  <MessageSquare className="size-3.5 fill-current" />
                  <span>{t.bookWhatsApp}</span>
                </a>
              </div>

              <div className="pt-1 text-[11px] text-white/60">
                <p>{isAr ? "ساعات الدعم: 24/7 عبر واتساب" : "Support: 24/7 on WhatsApp"}</p>
                <p>{isAr ? "الاتصال الهاتفي: 7:00 ص - 11:00 م" : "Phone Calls: 7:00 AM - 11:00 PM"}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <span>{isAr ? "مرخص من وزارة الموارد البشرية" : "Ministry of Human Resources Compliant"}</span>
            <span>·</span>
            <span>Riyadh, KSA</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
