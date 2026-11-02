import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { getWhatsAppLink } from '../data/translations';
import { ShoppingBag, Star, Check, Sparkles, MessageSquare, ArrowRight, ArrowLeft, ShieldCheck, Truck, Plus, Minus } from 'lucide-react';

export const ProductDetailPage = ({ slug }) => {
  const { isAr, t } = useLanguage();
  const { products, addToCart, navigate } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  const product = products.find(p => p.slug === slug) || products[0];

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-5 py-20 text-center">
        <h2 className="text-2xl font-bold text-primary">{isAr ? "المنتج غير موجود" : "Product Not Found"}</h2>
        <button
          onClick={() => navigate('/shop')}
          className="mt-4 px-6 py-2 rounded-full bg-primary text-white font-bold text-sm"
        >
          {isAr ? "العودة للمتجر" : "Back to Shop"}
        </button>
      </main>
    );
  }

  const images = product.images || [product.image];
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const handleOrderWhatsApp = () => {
    const total = product.price * quantity;
    const msg = isAr
      ? `طلب شراء منتج — وكالة إيدينام ديستيني للتوظيف:\n` +
        `📦 المنتج: ${product.name}\n` +
        `🔢 الكمية: ${quantity}\n` +
        `💰 الإجمالي: ${total} ريال\n` +
        `أرجو تأكيد الطلب وتحديد موعد التوصيل.`
      : `Product Purchase Order — Edinam Destiny Recruitment Agency:\n` +
        `📦 Product: ${product.nameEn}\n` +
        `🔢 Quantity: ${quantity}\n` +
        `💰 Total: ${total} SAR\n` +
        `Please confirm delivery to my address.`;

    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-8">
        <button onClick={() => navigate('/shop')} className="hover:text-primary">
          {t.shop.title}
        </button>
        <span>/</span>
        <span className="text-primary font-bold">
          {isAr ? product.name : product.nameEn}
        </span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2 items-start">
        
        {/* Photo Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-border bg-muted shadow-soft">
            <img
              src={images[selectedImageIdx] || images[0]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            <span className="absolute top-4 start-4 rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold text-primary shadow">
              {isAr ? product.categoryAr : product.categoryEn}
            </span>
          </div>

          {images.length > 1 && (
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIdx(idx)}
                  className={`size-20 rounded-2xl overflow-hidden border-2 transition-all ${
                    selectedImageIdx === idx ? 'border-accent scale-105 shadow' : 'border-border opacity-70'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details & Purchase Form */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-amber-500 font-bold text-xs mb-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <span className="text-primary font-bold">{product.rating}</span>
              <span className="text-muted-foreground font-normal">
                ({product.reviewsCount} {isAr ? "تقييم عميل" : "reviews"})
              </span>
              <span className="ms-auto text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-bold">
                {t.shop.inStock}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-black text-primary">
              {isAr ? product.name : product.nameEn}
            </h1>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-display text-4xl font-black text-primary">
                {product.price}
              </span>
              <span className="text-sm font-bold text-accent-dark">
                {t.shop.sar}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {product.originalPrice} {t.shop.sar}
                </span>
              )}
            </div>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {isAr ? product.descriptionAr : product.descriptionEn}
          </p>

          {/* Features Checklist */}
          <div className="rounded-3xl border border-border bg-muted p-6 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-primary">
              {isAr ? "المميزات المشمولة:" : "Key Features Included:"}
            </h4>
            {(isAr ? product.featuresAr : product.featuresEn).map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-primary">
                <Check className="size-4 text-teal shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Quantity & Actions */}
          <div className="pt-4 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-muted-foreground">{isAr ? "الكمية:" : "Quantity:"}</span>
              <div className="flex items-center rounded-full border border-border bg-white p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="size-8 rounded-full hover:bg-secondary grid place-items-center text-primary font-bold"
                >
                  <Minus className="size-3.5" />
                </button>
                <span className="px-4 font-bold text-sm text-primary">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="size-8 rounded-full hover:bg-secondary grid place-items-center text-primary font-bold"
                >
                  <Plus className="size-3.5" />
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => {
                  addToCart(product, quantity);
                  alert(isAr ? "تمت إضافة المنتج إلى السلة بنجاح!" : "Item added to cart successfully!");
                }}
                className="min-h-12 rounded-full bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow"
              >
                <ShoppingBag className="size-4" />
                <span>{t.shop.addToCart}</span>
              </button>

              <button
                onClick={handleOrderWhatsApp}
                className="min-h-12 rounded-full bg-brand-whatsapp text-brand-whatsappBg font-black text-sm hover:bg-brand-whatsappDark transition-all flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="size-4 fill-current" />
                <span>{t.shop.orderWhatsApp}</span>
              </button>
            </div>
          </div>

          {/* Trust assurances */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border text-xs text-muted-foreground font-semibold">
            <span className="flex items-center gap-1.5">
              <Truck className="size-4 text-accent-dark" />
              {isAr ? "توصيل سريع لكافة أحياء الرياض" : "Fast delivery across Riyadh"}
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-emerald-600" />
              {isAr ? "منتجات وباقات معتمدة 100%" : "100% Guaranteed quality"}
            </span>
          </div>

        </div>

      </div>

    </main>
  );
};
