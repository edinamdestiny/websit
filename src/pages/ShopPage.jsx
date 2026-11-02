import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { getWhatsAppLink } from '../data/translations';
import { ShoppingBag, Star, Check, Sparkles, MessageSquare, ArrowRight, ArrowLeft, Trash2, Plus, Minus, X } from 'lucide-react';

export const ShopPage = () => {
  const { isAr, t } = useLanguage();
  const { products, cart, addToCart, removeFromCart, updateCartQty, clearCart, navigate } = useApp();

  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('featured');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = [
    { id: 'all', label: t.shop.allProducts },
    { id: 'bundles', label: t.shop.bundles },
    { id: 'supplies', label: t.shop.supplies },
    { id: 'equipment', label: t.shop.equipment }
  ];

  // Filtering
  let filtered = products.filter(p => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  // Sorting
  filtered = [...filtered].sort((a, b) => {
    if (sortOrder === 'priceAsc') return a.price - b.price;
    if (sortOrder === 'priceDesc') return b.price - a.price;
    if (sortOrder === 'name') return (isAr ? a.name : a.nameEn).localeCompare(isAr ? b.name : b.nameEn);
    return 0; // featured
  });

  // Cart Calculations
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;

    let itemsList = cart.map(item =>
      `- ${isAr ? item.name : item.nameEn} (الكمية: ${item.quantity}) — ${item.price * item.quantity} ريال`
    ).join('\n');

    const msg = isAr
      ? `طلب شراء جديد من متجر وكالة إيدينام ديستيني للتوظيف بالرياض:\n\n` +
        `📦 المنتجات:\n${itemsList}\n\n` +
        `💰 الإجمالي: ${cartTotal} ريال\n` +
        `يرجى تأكيد توفر المنتجات وعنوان التوصيل.`
      : `New Order from Edinam Destiny Agency Store (Riyadh):\n\n` +
        `📦 Items:\n${itemsList}\n\n` +
        `💰 Total: ${cartTotal} SAR\n` +
        `Please confirm availability and doorstep delivery.`;

    window.open(getWhatsAppLink(msg), '_blank');
  };

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      
      {/* Page Title & Cart Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent/15 text-accent-dark text-xs font-bold mb-3">
            <Sparkles className="size-3.5" />
            <span>{isAr ? "عروض وباقات التوفير المنزلية" : "Prepaid Value Bundles & Home Kits"}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-primary">
            {t.shop.title}
          </h1>
          <p className="mt-2 text-base text-muted-foreground max-w-2xl">
            {t.shop.subtitle}
          </p>
        </div>

        {/* Floating / Header Cart Trigger */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative inline-flex items-center gap-2.5 min-h-12 px-6 rounded-full bg-primary text-white font-bold text-sm shadow-md hover:bg-primary-dark transition-all self-start sm:self-auto"
        >
          <ShoppingBag className="size-5" />
          <span>{t.shop.cart}</span>
          {cartCount > 0 && (
            <span className="size-6 rounded-full bg-accent text-primary font-black text-xs grid place-items-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Toolbar: Category pills + Sort dropdown */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow'
                  : 'border border-border bg-white text-muted-foreground hover:border-primary/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
          <span>{t.shop.sortBy}</span>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="py-1.5 px-3 rounded-xl border border-border bg-white text-primary text-xs font-semibold focus:outline-none focus:border-accent"
          >
            <option value="featured">{t.shop.featured}</option>
            <option value="priceAsc">{t.shop.priceAsc}</option>
            <option value="priceDesc">{t.shop.priceDesc}</option>
            <option value="name">{t.shop.nameAsc}</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((prod) => (
          <article
            key={prod.id}
            className="overflow-hidden rounded-[2.2rem] border border-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated flex flex-col justify-between"
          >
            {/* Image */}
            <div
              onClick={() => navigate(`/product/${prod.slug}`)}
              className="relative aspect-[16/10] bg-muted cursor-pointer overflow-hidden group"
            >
              <img
                src={prod.image}
                alt={prod.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3.5 start-3.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-primary shadow-sm">
                {isAr ? prod.categoryAr : prod.categoryEn}
              </span>
              {prod.originalPrice && (
                <span className="absolute top-3.5 end-3.5 rounded-full bg-rose-600 px-2.5 py-1 text-[11px] font-bold text-white shadow">
                  {isAr ? `وفر ${prod.originalPrice - prod.price} ريال` : `Save ${prod.originalPrice - prod.price} SAR`}
                </span>
              )}
            </div>

            {/* Details */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-amber-500 font-bold mb-1.5">
                  <div className="flex items-center gap-1">
                    <Star className="size-3.5 fill-current" />
                    <span>{prod.rating}</span>
                    <span className="text-muted-foreground font-normal">({prod.reviewsCount})</span>
                  </div>
                  <span className="text-emerald-700 font-semibold">{t.shop.inStock}</span>
                </div>

                <h3
                  onClick={() => navigate(`/product/${prod.slug}`)}
                  className="font-display text-xl font-bold text-primary hover:text-accent-dark transition-colors cursor-pointer line-clamp-1"
                >
                  {isAr ? prod.name : prod.nameEn}
                </h3>

                <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {isAr ? prod.shortDescAr : prod.shortDescEn}
                </p>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-black text-primary">
                    {prod.price}
                  </span>
                  <span className="text-xs font-bold text-accent-dark">
                    {t.shop.sar}
                  </span>
                  {prod.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">
                      {prod.originalPrice} {t.shop.sar}
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-5 border-t border-border grid grid-cols-2 gap-2">
                <button
                  onClick={() => addToCart(prod, 1)}
                  className="flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-primary text-xs font-bold text-white hover:bg-primary-dark transition-all shadow-sm"
                >
                  <ShoppingBag className="size-4" />
                  <span>{t.shop.addToCart}</span>
                </button>

                <a
                  href={getWhatsAppLink(`السلام عليكم، أرغب في شراء ${isAr ? prod.name : prod.nameEn} بسعر ${prod.price} ريال في الرياض.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-brand-whatsapp text-xs font-bold text-brand-whatsappBg hover:bg-brand-whatsappDark transition-all"
                >
                  <MessageSquare className="size-4 fill-current" />
                  <span>{isAr ? "طلب واتساب" : "WhatsApp"}</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Cart Drawer / Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md h-full bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="size-5 text-primary" />
                  <h3 className="font-display text-xl font-bold text-primary">
                    {t.shop.cart} ({cartCount})
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="size-9 rounded-full border border-border grid place-items-center text-muted-foreground hover:bg-secondary"
                >
                  <X className="size-5" />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="py-20 text-center text-muted-foreground">
                  <ShoppingBag className="size-12 mx-auto stroke-1 text-muted-foreground/50 mb-3" />
                  <p className="font-bold">{t.shop.emptyCart}</p>
                </div>
              ) : (
                <div className="mt-6 space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-3 p-3 rounded-2xl border border-border bg-muted">
                      <img src={item.image} alt={item.name} className="size-16 rounded-xl object-cover shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-bold text-xs text-primary line-clamp-1">
                          {isAr ? item.name : item.nameEn}
                        </h4>
                        <div className="text-xs font-black text-accent-dark mt-1">
                          {item.price} {t.shop.sar}
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            onClick={() => updateCartQty(item.id, item.quantity - 1)}
                            className="size-6 rounded-md bg-white border border-border grid place-items-center text-xs font-bold"
                          >
                            <Minus className="size-3" />
                          </button>
                          <span className="text-xs font-bold px-1">{item.quantity}</span>
                          <button
                            onClick={() => updateCartQty(item.id, item.quantity + 1)}
                            className="size-6 rounded-md bg-white border border-border grid place-items-center text-xs font-bold"
                          >
                            <Plus className="size-3" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ms-auto text-rose-500 hover:text-rose-700"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="pt-6 border-t border-border mt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-muted-foreground">{t.shop.subtotal}</span>
                  <span className="font-display text-2xl font-black text-primary">
                    {cartTotal} {t.shop.sar}
                  </span>
                </div>

                <button
                  onClick={handleCheckoutWhatsApp}
                  className="w-full min-h-12 rounded-full bg-brand-whatsapp text-brand-whatsappBg font-black text-sm hover:bg-brand-whatsappDark transition-all flex items-center justify-center gap-2 shadow-lg mb-2"
                >
                  <MessageSquare className="size-4 fill-current" />
                  <span>{t.shop.checkoutWhatsApp}</span>
                </button>

                <button
                  onClick={clearCart}
                  className="w-full text-xs text-muted-foreground hover:text-rose-600 font-semibold py-2"
                >
                  {isAr ? "إفراغ السلة" : "Clear Cart"}
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </main>
  );
};
