import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { riyadhDistricts } from '../data/districtsData';
import { getWhatsAppLink } from '../data/translations';
import { X, MessageSquare, Check, Sparkles, Calendar, Clock, MapPin, User, Phone, CheckCircle2 } from 'lucide-react';

export const BookingModal = () => {
  const { isAr, t } = useLanguage();
  const {
    isBookingModalOpen,
    closeBookingModal,
    selectedMaidForBooking,
    selectedServiceForBooking,
    selectedDistrictForBooking,
    maids,
    addBooking
  } = useApp();

  const [service, setService] = useState('5 Hours Package (180 SAR)');
  const [nationality, setNationality] = useState('any');
  const [maidId, setMaidId] = useState('auto');
  const [district, setDistrict] = useState('al-malqa');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('morning');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedMaidForBooking) {
      setMaidId(selectedMaidForBooking.id);
      setNationality(selectedMaidForBooking.nationality);
    } else {
      setMaidId('auto');
    }

    if (selectedServiceForBooking) {
      setService(selectedServiceForBooking);
    }

    if (selectedDistrictForBooking) {
      const match = riyadhDistricts.find(d => d.ar === selectedDistrictForBooking || d.en === selectedDistrictForBooking);
      if (match) setDistrict(match.id);
    }
  }, [selectedMaidForBooking, selectedServiceForBooking, selectedDistrictForBooking]);

  if (!isBookingModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedDistrictObj = riyadhDistricts.find(d => d.id === district) || riyadhDistricts[0];
    const selectedMaidObj = maids.find(m => m.id === maidId);

    const timeSlotLabel = timeSlot === 'morning'
      ? t.bookingModal.morning
      : timeSlot === 'afternoon'
      ? t.bookingModal.afternoon
      : t.bookingModal.evening;

    const bookingPayload = {
      customerName: customerName || (isAr ? "عميل من الموقع" : "Website Client"),
      customerPhone: customerPhone || "05xxxxxxxx",
      serviceType: service,
      serviceTypeEn: service,
      nationalityPref: nationality === 'any' ? 'أي جنسية متوفرة' : nationality,
      nationalityPrefEn: nationality === 'any' ? 'Any Available' : nationality,
      maidName: selectedMaidObj ? selectedMaidObj.name : (isAr ? "اختيار تلقائي للأكفأ" : "Best Available Allocation"),
      district: isAr ? selectedDistrictObj.ar : selectedDistrictObj.en,
      districtEn: selectedDistrictObj.en,
      date: date,
      timeSlot: timeSlotLabel,
      timeSlotEn: timeSlotLabel,
      notes: notes,
      status: "pending"
    };

    // Save to App State / LocalStorage for Admin
    addBooking(bookingPayload);
    setIsSuccess(true);

    // Prepare WhatsApp Message
    const whatsappText = isAr
      ? `طلب حجز خدمة جديد — وكالة ديستيني للتوظيف بالرياض:\n\n` +
        `👤 الاسم: ${bookingPayload.customerName}\n` +
        `📱 الجوال: ${bookingPayload.customerPhone}\n` +
        `🧹 الخدمة: ${bookingPayload.serviceType}\n` +
        `🌍 الجنسية المفضلة: ${bookingPayload.nationalityPref}\n` +
        `👩 الكادر المطلوب: ${bookingPayload.maidName}\n` +
        `📍 الحي: ${bookingPayload.district}\n` +
        `📅 التاريخ: ${bookingPayload.date}\n` +
        `⏰ الفترة: ${bookingPayload.timeSlot}\n` +
        (notes ? `📝 ملاحظات: ${notes}\n` : '') +
        `\nأرجو تأكيد الحجز وموعد وصول الكادر.`
      : `New Staff Booking Request — Destiny Recruitment Agency (Riyadh):\n\n` +
        `👤 Name: ${bookingPayload.customerName}\n` +
        `📱 Phone: ${bookingPayload.customerPhone}\n` +
        `🧹 Service: ${bookingPayload.serviceType}\n` +
        `🌍 Nationality: ${bookingPayload.nationalityPref}\n` +
        `👩 Preferred Staff: ${bookingPayload.maidName}\n` +
        `📍 District: ${bookingPayload.district}\n` +
        `📅 Date: ${bookingPayload.date}\n` +
        `⏰ Time Slot: ${bookingPayload.timeSlot}\n` +
        (notes ? `📝 Notes: ${notes}\n` : '') +
        `\nPlease confirm the booking and dispatch schedule.`;

    setTimeout(() => {
      window.open(getWhatsAppLink(whatsappText), '_blank');
      closeBookingModal();
      setIsSuccess(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl sm:rounded-[2.5rem] bg-white p-5 sm:p-8 shadow-2xl border border-border my-auto max-h-[92vh] max-h-[92dvh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={closeBookingModal}
          aria-label={isAr ? "إغلاق النافذة" : "Close modal"}
          className="absolute top-6 end-6 size-10 rounded-full border border-border bg-muted text-muted-foreground hover:text-primary hover:bg-secondary grid place-items-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <X className="size-5" />
        </button>

        {/* Title */}
        <div className="pe-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent-dark text-xs font-bold mb-2">
            <Sparkles className="size-3.5" />
            <span>{isAr ? "حجز فوري ومضمون" : "Instant Verified Booking"}</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-black text-primary">
            {t.bookingModal.title}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            {t.bookingModal.subtitle}
          </p>
        </div>

        {isSuccess ? (
          <div className="py-12 text-center animate-in zoom-in-95">
            <div className="size-16 rounded-full bg-emerald-100 text-emerald-600 grid place-items-center mx-auto mb-4">
              <CheckCircle2 className="size-10" />
            </div>
            <h4 className="font-display text-2xl font-bold text-primary">
              {isAr ? "تم تجهيز الحجز بنجاح!" : "Booking Prepared Successfully!"}
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.bookingModal.successMsg}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-start">
            
            {/* Service & Nationality Row */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-primary mb-1.5">
                  {t.bookingModal.serviceType}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full min-h-11 px-3.5 rounded-xl border border-border bg-white text-sm font-semibold text-primary focus:border-accent focus:outline-none"
                >
                  <option value="4 Hours Package (175 SAR)">{isAr ? "باقة 4 ساعات (175 ريال)" : "4 Hours (175 SAR)"}</option>
                  <option value="5 Hours Package (180 SAR)">{isAr ? "باقة 5 ساعات (180 ريال) — الأكثر طلباً" : "5 Hours (180 SAR) — Most Popular"}</option>
                  <option value="8 Hours Package (300 SAR)">{isAr ? "باقة 8 ساعات يوم كامل (300 ريال)" : "8 Hours Full Day (300 SAR)"}</option>
                  <option value="12 Hours VIP Package (450 SAR)">{isAr ? "باقة 12 ساعة VIP شاملة (450 ريال)" : "12 Hours VIP (450 SAR)"}</option>
                  <option value="Monthly Cleaning Only (1,200 - 1,800 SAR)">{isAr ? "عقد شهري تنظيف فقط (1,200 - 1,800 ريال)" : "Monthly Cleaning (1,200 - 1,800 SAR)"}</option>
                  <option value="Monthly Cleaning + Cooking (1,600 - 2,200 SAR)">{isAr ? "عقد شهري تنظيف وطبخ (1,600 - 2,200 ريال)" : "Monthly Clean + Cook (1,600 - 2,200 SAR)"}</option>
                  <option value="Move-in Villa Deep Clean (650 SAR)">{isAr ? "تنظيف عميق للفلل قبل السكن (650 ريال)" : "Deep Villa Clean (650 SAR)"}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-primary mb-1.5">
                  {t.bookingModal.nationalityPref}
                </label>
                <select
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="w-full min-h-11 px-3.5 rounded-xl border border-border bg-white text-sm font-semibold text-primary focus:border-accent focus:outline-none"
                >
                  <option value="any">{t.bookingModal.anyNationality}</option>
                  <option value="Philippines">{isAr ? "الفلبين 🇵🇭" : "Philippines 🇵🇭"}</option>
                  <option value="Kenya">{isAr ? "كينيا 🇰🇪" : "Kenya 🇰🇪"}</option>
                  <option value="Uganda">{isAr ? "أوغندا 🇺🇬" : "Uganda 🇺🇬"}</option>
                  <option value="Ghana">{isAr ? "غانا 🇬🇭" : "Ghana 🇬🇭"}</option>
                </select>
              </div>
            </div>

            {/* Maid & District Row */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-primary mb-1.5">
                  {t.bookingModal.specificMaid}
                </label>
                <select
                  value={maidId}
                  onChange={(e) => setMaidId(e.target.value)}
                  className="w-full min-h-11 px-3.5 rounded-xl border border-border bg-white text-sm font-semibold text-primary focus:border-accent focus:outline-none"
                >
                  <option value="auto">{isAr ? "اختيار تلقائي للأكفأ والمتاح" : "Auto-assign best available"}</option>
                  {maids.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name} ({isAr ? m.nationalityAr : m.nationality}) — {m.experience_years} {t.maidsGallery.yearsExp}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-primary mb-1.5">
                  {t.bookingModal.selectDistrict}
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full min-h-11 px-3.5 rounded-xl border border-border bg-white text-sm font-semibold text-primary focus:border-accent focus:outline-none"
                >
                  {riyadhDistricts.map((d) => (
                    <option key={d.id} value={d.id}>
                      {isAr ? d.ar : d.en} — ({d.zone})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date & Time Slot Row */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-primary mb-1.5">
                  {t.bookingModal.selectDate}
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full min-h-11 px-3.5 rounded-xl border border-border bg-white text-sm font-semibold text-primary focus:border-accent focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-primary mb-1.5">
                  {t.bookingModal.selectTime}
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full min-h-11 px-3.5 rounded-xl border border-border bg-white text-sm font-semibold text-primary focus:border-accent focus:outline-none"
                >
                  <option value="morning">{t.bookingModal.morning}</option>
                  <option value="afternoon">{t.bookingModal.afternoon}</option>
                  <option value="evening">{t.bookingModal.evening}</option>
                </select>
              </div>
            </div>

            {/* Customer Name & Phone */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-primary mb-1.5">
                  {t.bookingModal.customerName} *
                </label>
                <input
                  type="text"
                  placeholder={isAr ? "مثال: أم عبد الله" : "e.g. Noura Al-Otaibi"}
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full min-h-11 px-3.5 rounded-xl border border-border bg-white text-sm text-primary focus:border-accent focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-primary mb-1.5">
                  {t.bookingModal.customerPhone} *
                </label>
                <input
                  type="tel"
                  placeholder="05XXXXXXXX"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full min-h-11 px-3.5 rounded-xl border border-border bg-white text-sm text-primary focus:border-accent focus:outline-none text-left"
                  dir="ltr"
                  required
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-primary mb-1.5">
                {t.bookingModal.notes}
              </label>
              <textarea
                rows={2}
                placeholder={isAr ? "أي تفاصيل خاصة بالفيلا، الشقة أو تفضيل الطبخ..." : "Any instructions, villa location notes or specific tasks..."}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-3 rounded-xl border border-border bg-white text-sm text-primary focus:border-accent focus:outline-none"
              />
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 min-h-12 rounded-full bg-[#25D366] text-[#103B22] font-black text-sm hover:bg-[#1EBE5D] transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="size-4 fill-current" />
                <span>{t.bookingModal.confirmAndWhatsApp}</span>
              </button>

              <button
                type="button"
                onClick={closeBookingModal}
                className="min-h-12 px-6 rounded-full border border-border text-muted-foreground hover:bg-secondary hover:text-primary text-xs font-bold transition-all"
              >
                {t.bookingModal.close}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
