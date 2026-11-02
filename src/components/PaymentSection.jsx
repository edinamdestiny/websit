import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CreditCard, Wallet, Banknote, Building2 } from 'lucide-react';

export const PaymentSection = () => {
  const { isAr, t } = useLanguage();

  const methods = [
    {
      icon: Wallet,
      name: "STC Pay",
      desc: isAr ? "دفع فوري وسهل عبر رقم الجوال والمحفظة" : "Instant mobile wallet transfer via phone number"
    },
    {
      icon: Building2,
      name: isAr ? "تحويل بنكي مباشر" : "Direct Bank Transfer",
      desc: isAr ? "حسابات رسمية في مصرف الراجحي، الأهلي، الإنماء" : "Official accounts in Al Rajhi, SNB, Alinma Bank"
    },
    {
      icon: CreditCard,
      name: isAr ? "مدى / بطاقة ائتمانية" : "Mada / Credit Card",
      desc: isAr ? "سداد إلكتروني معتمد وآمن عند طلب الخدمة" : "Secure digital card checkout upon request"
    },
    {
      icon: Banknote,
      name: isAr ? "نقدًا بالريال السعودي" : "Cash in SAR",
      desc: isAr ? "الدفع عند وصول المساعد واستلام الخدمة" : "Direct cash payment upon doorstep arrival"
    }
  ];

  return (
    <section className="px-5 py-20 lg:px-8 bg-muted">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-border bg-white p-8 md:p-12 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          
          <div>
            <p className="text-sm font-bold tracking-widest text-accent-dark uppercase">
              {t.payment.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-black text-primary">
              {t.payment.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t.payment.subtitle}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {methods.map((m, i) => (
              <div key={i} className="rounded-2xl border border-border bg-muted p-5 hover:border-teal/40 transition-all">
                <div className="size-10 rounded-xl bg-white shadow-sm grid place-items-center text-teal border border-border">
                  <m.icon className="size-5" />
                </div>
                <h4 className="mt-4 font-bold text-base text-primary">
                  {m.name}
                </h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
