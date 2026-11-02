import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, HeartHandshake, Award, Clock4 } from 'lucide-react';

export const TrustSection = () => {
  const { isAr } = useLanguage();

  const trustCards = [
    {
      icon: ShieldCheck,
      titleAr: "فحص طبي وأمني معتمد",
      titleEn: "Certified Health & Security Screening",
      descAr: "جميع الكوادر يخضعون لفحوصات طبية دورية شاملة وتدقيق جنائي موثق لسلامة بيتك وعائلتك.",
      descEn: "Every worker undergoes regular certified medical checkups and criminal background verification."
    },
    {
      icon: Award,
      titleAr: "تدريب على العادات والضيافة السعودية",
      titleEn: "Trained in Saudi Household Etiquette",
      descAr: "إلمام تام بخصوصية المنازل السعودية، فنون الضيافة وإعداد القهوة والشاي وترتيب المجالس.",
      descEn: "Comprehensive orientation on Saudi household privacy, hospitality customs, and majlis care."
    },
    {
      icon: Clock4,
      titleAr: "التزام صارم بالمواعيد",
      titleEn: "Strict Punctuality Guarantee",
      descAr: "سائقونا ملتزمون بنقل الكادر واستلامه في الوقت المتفق عليه دون تأخير على جدول يومك.",
      descEn: "Dedicated drivers ensure your helper arrives and departs exactly according to your requested schedule."
    },
    {
      icon: HeartHandshake,
      titleAr: "ضمان الاستبدال الفوري",
      titleEn: "Free Instant Replacement",
      descAr: "إذا لم يلائمك الكادر لأي سبب، نضمن لك استبداله فوراً أو إعادة جدولة الخدمة دون أي عناء.",
      descEn: "If the helper does not suit your expectations, we guarantee an immediate replacement with zero hassle."
    }
  ];

  return (
    <section className="px-5 py-20 lg:px-8 bg-white border-y border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-bold tracking-widest text-accent-dark uppercase">
            {isAr ? "لماذا وكالة إيدينام ديستيني؟" : "WHY EDINAM DESTINY RECRUITMENT AGENCY?"}
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-black text-primary">
            {isAr ? "معايير راقية لراحة وطمأنينة منزلك" : "Elite standards for your home's serenity"}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            {isAr ? "نحن لا نوفر كوادر فقط، بل نقدم تجربة راحة متكاملة مبنية على الأمانة والاحترافية." : "We don't just provide domestic staff; we deliver complete comfort built on honesty and dedication."}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((card, i) => (
            <div
              key={i}
              className="rounded-[2rem] border border-border bg-muted p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal hover:shadow-soft"
            >
              <div className="size-12 rounded-2xl bg-white shadow-sm border border-border grid place-items-center text-primary">
                <card.icon className="size-6 text-teal" />
              </div>

              <h3 className="mt-6 font-display text-lg font-bold text-primary">
                {isAr ? card.titleAr : card.titleEn}
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {isAr ? card.descAr : card.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
