import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { getWhatsAppLink } from '../data/translations';
import { Users, Calendar, Plus, Trash2, Edit3, CheckCircle2, Clock, AlertCircle, Sparkles, RotateCcw, MessageSquare, Phone } from 'lucide-react';

export const AdminPage = () => {
  const { isAr, t } = useLanguage();
  const {
    maids,
    addMaid,
    updateMaid,
    deleteMaid,
    resetMaids,
    bookings,
    updateBookingStatus,
    deleteBooking,
    products
  } = useApp();

  const [activeTab, setActiveTab] = useState('maids'); // 'maids' | 'bookings'
  const [isAddMaidOpen, setIsAddMaidOpen] = useState(false);
  const [editingMaid, setEditingMaid] = useState(null);

  // New Maid Form State
  const [maidForm, setMaidForm] = useState({
    name: '',
    arabicName: '',
    nationality: 'Philippines',
    nationalityAr: 'الفلبين',
    flag: '🇵🇭',
    age: 28,
    experience_years: 4,
    status: 'available',
    languages: 'English, Basic Arabic',
    photo: '/images/workers/maid-1.png',
    services: 'Detailed cleaning and home organization',
    servicesAr: 'تنظيف دقيق وتنظيم شامل للمنزل',
    hourlyRate: 45,
    monthlyRate: 1800
  });

  const availableCount = maids.filter(m => m.status === 'available').length;
  const pendingBookingsCount = bookings.filter(b => b.status === 'pending').length;

  const handleSaveMaid = (e) => {
    e.preventDefault();
    if (editingMaid) {
      updateMaid(editingMaid.id, maidForm);
      setEditingMaid(null);
    } else {
      addMaid(maidForm);
    }
    setIsAddMaidOpen(false);
    setMaidForm({
      name: '',
      arabicName: '',
      nationality: 'Philippines',
      nationalityAr: 'الفلبين',
      flag: '🇵🇭',
      age: 28,
      experience_years: 4,
      status: 'available',
      languages: 'English, Basic Arabic',
      photo: '/images/workers/maid-1.png',
      services: 'Detailed cleaning and home organization',
      servicesAr: 'تنظيف دقيق وتنظيم شامل للمنزل',
      hourlyRate: 45,
      monthlyRate: 1800
    });
  };

  const handleEditClick = (maid) => {
    setEditingMaid(maid);
    setMaidForm({ ...maid });
    setIsAddMaidOpen(true);
  };

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-border">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent-dark text-xs font-bold mb-2">
            <Sparkles className="size-3.5" />
            <span>{isAr ? "لوحة الإدارة والمتابعة" : "Administrative Management Console"}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-black text-primary">
            {t.admin.title}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {t.admin.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (confirm(isAr ? "هل ترغب في استعادة القائمة الافتراضية للعاملات؟" : "Reset maids directory to initial state?")) {
                resetMaids();
              }
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-xs font-bold text-muted-foreground hover:bg-secondary hover:text-primary transition-all"
          >
            <RotateCcw className="size-3.5" />
            <span>{t.admin.resetData}</span>
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-4">
        <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
          <div className="flex items-center justify-between text-muted-foreground text-xs font-bold">
            <span>{t.admin.totalMaids}</span>
            <Users className="size-4 text-primary" />
          </div>
          <div className="mt-3 font-display text-3xl font-black text-primary">
            {maids.length}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
          <div className="flex items-center justify-between text-emerald-700 text-xs font-bold">
            <span>{t.admin.availableMaids}</span>
            <CheckCircle2 className="size-4 text-emerald-600" />
          </div>
          <div className="mt-3 font-display text-3xl font-black text-emerald-600">
            {availableCount}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
          <div className="flex items-center justify-between text-amber-700 text-xs font-bold">
            <span>{t.admin.totalBookings}</span>
            <Calendar className="size-4 text-amber-600" />
          </div>
          <div className="mt-3 font-display text-3xl font-black text-amber-600">
            {bookings.length}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
          <div className="flex items-center justify-between text-muted-foreground text-xs font-bold">
            <span>{isAr ? "الباقات والمنتجات" : "Packages & Shop"}</span>
            <Sparkles className="size-4 text-accent-dark" />
          </div>
          <div className="mt-3 font-display text-3xl font-black text-accent-dark">
            {products.length}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-10 flex gap-2 border-b border-border pb-4">
        <button
          onClick={() => setActiveTab('maids')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'maids' ? 'bg-primary text-white shadow' : 'bg-white border border-border text-muted-foreground'
          }`}
        >
          <Users className="size-4" />
          <span>{t.admin.maidsTab} ({maids.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('bookings')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'bookings' ? 'bg-primary text-white shadow' : 'bg-white border border-border text-muted-foreground'
          }`}
        >
          <Calendar className="size-4" />
          <span>{t.admin.bookingsTab} ({bookings.length})</span>
          {pendingBookingsCount > 0 && (
            <span className="size-5 rounded-full bg-amber-500 text-white text-[10px] grid place-items-center">
              {pendingBookingsCount}
            </span>
          )}
        </button>
      </div>

      {/* Maids Management Tab */}
      {activeTab === 'maids' && (
        <div className="mt-6 space-y-6">
          <div className="flex justify-end">
            <button
              onClick={() => {
                setEditingMaid(null);
                setIsAddMaidOpen(true);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-xs sm:text-sm font-bold hover:bg-primary-dark transition-all shadow"
            >
              <Plus className="size-4" />
              <span>{t.admin.addMaid}</span>
            </button>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-border bg-white shadow-soft">
            <table className="w-full text-start text-xs sm:text-sm">
              <thead className="bg-muted border-b border-border text-primary font-bold">
                <tr>
                  <th className="p-4">{t.admin.name}</th>
                  <th className="p-4">{t.admin.nationality}</th>
                  <th className="p-4">{t.admin.experience}</th>
                  <th className="p-4">{t.admin.status}</th>
                  <th className="p-4 text-center">{t.admin.actions}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {maids.map((maid) => (
                  <tr key={maid.id} className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 flex items-center gap-3">
                      <img src={maid.photo} alt={maid.name} className="size-10 rounded-full object-cover shrink-0" />
                      <div>
                        <div className="font-bold text-primary">{isAr ? maid.arabicName || maid.name : maid.name}</div>
                        <div className="text-[11px] text-muted-foreground">{maid.languages}</div>
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-primary">
                      {maid.flag} {isAr ? maid.nationalityAr : maid.nationality}
                    </td>
                    <td className="p-4 font-medium">
                      {maid.experience_years} {isAr ? "سنوات" : "years"}
                    </td>
                    <td className="p-4">
                      <select
                        value={maid.status}
                        onChange={(e) => updateMaid(maid.id, { status: e.target.value })}
                        className={`px-3 py-1 rounded-full text-xs font-bold border ${
                          maid.status === 'available'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                            : maid.status === 'booked'
                            ? 'bg-amber-50 text-amber-700 border-amber-300'
                            : 'bg-slate-50 text-slate-700 border-slate-300'
                        }`}
                      >
                        <option value="available">{t.admin.statusAvailable}</option>
                        <option value="booked">{t.admin.statusBooked}</option>
                        <option value="offline">{t.admin.statusOffline}</option>
                      </select>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleEditClick(maid)}
                          className="size-8 rounded-lg border border-border grid place-items-center text-primary hover:bg-secondary"
                          title="Edit"
                        >
                          <Edit3 className="size-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(t.admin.deleteConfirm)) deleteMaid(maid.id);
                          }}
                          className="size-8 rounded-lg border border-border grid place-items-center text-rose-500 hover:bg-rose-50"
                          title="Delete"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Bookings Management Tab */}
      {activeTab === 'bookings' && (
        <div className="mt-6 space-y-4">
          {bookings.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border bg-white p-12 text-center text-muted-foreground">
              <Calendar className="size-12 mx-auto mb-3 text-muted-foreground/40" />
              <p className="font-bold">{isAr ? "لا توجد حجوزات واردة حتى الآن" : "No incoming bookings yet."}</p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-3xl border border-border bg-white shadow-soft">
              <table className="w-full text-start text-xs sm:text-sm">
                <thead className="bg-muted border-b border-border text-primary font-bold">
                  <tr>
                    <th className="p-4">{isAr ? "العميل والجوال" : "Client & Phone"}</th>
                    <th className="p-4">{isAr ? "الخدمة والحي" : "Service & District"}</th>
                    <th className="p-4">{isAr ? "العاملة" : "Maid Assigned"}</th>
                    <th className="p-4">{isAr ? "الموعد" : "Date & Time"}</th>
                    <th className="p-4">{isAr ? "الحالة" : "Status"}</th>
                    <th className="p-4 text-center">{t.admin.actions}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {bookings.map((b) => (
                    <tr key={b.id} className="hover:bg-muted/50 transition-colors">
                      <td className="p-4">
                        <div className="font-bold text-primary">{b.customerName}</div>
                        <a href={`tel:${b.customerPhone}`} className="text-xs text-muted-foreground font-semibold hover:text-accent-dark" dir="ltr">
                          {b.customerPhone}
                        </a>
                      </td>
                      <td className="p-4">
                        <div className="font-semibold text-primary">{isAr ? b.serviceType : b.serviceTypeEn || b.serviceType}</div>
                        <div className="text-xs text-muted-foreground">{isAr ? b.district : b.districtEn || b.district}</div>
                      </td>
                      <td className="p-4 font-semibold text-accent-dark">
                        {b.maidName}
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-primary">{b.date}</div>
                        <div className="text-[11px] text-muted-foreground">{isAr ? b.timeSlot : b.timeSlotEn || b.timeSlot}</div>
                      </td>
                      <td className="p-4">
                        <select
                          value={b.status}
                          onChange={(e) => updateBookingStatus(b.id, e.target.value)}
                          className={`px-3 py-1 rounded-full text-xs font-bold border ${
                            b.status === 'confirmed'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                              : b.status === 'pending'
                              ? 'bg-amber-50 text-amber-700 border-amber-300'
                              : 'bg-slate-50 text-slate-700 border-slate-300'
                          }`}
                        >
                          <option value="pending">{isAr ? "قيد الانتظار" : "Pending"}</option>
                          <option value="confirmed">{isAr ? "مؤكد" : "Confirmed"}</option>
                          <option value="completed">{isAr ? "مكتمل" : "Completed"}</option>
                          <option value="cancelled">{isAr ? "ملغي" : "Cancelled"}</option>
                        </select>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <a
                            href={getWhatsAppLink(`مرحباً ${b.customerName}، نتواصل معك بخصوص حجزك (${b.serviceType}) لدى وكالة ديستيني للتوظيف بالرياض.`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="size-8 rounded-lg bg-emerald-50 text-emerald-700 grid place-items-center hover:bg-emerald-100"
                            title="WhatsApp client"
                          >
                            <MessageSquare className="size-3.5 fill-current" />
                          </a>
                          <button
                            onClick={() => deleteBooking(b.id)}
                            className="size-8 rounded-lg border border-border grid place-items-center text-rose-500 hover:bg-rose-50"
                            title="Delete"
                          >
                            <Trash2 className="size-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Add / Edit Maid Modal */}
      {isAddMaidOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-border">
            <h3 className="font-display text-2xl font-black text-primary">
              {editingMaid ? t.admin.editMaid : t.admin.addMaid}
            </h3>

            <form onSubmit={handleSaveMaid} className="mt-5 space-y-3 text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-primary mb-1">الاسم بالإنجليزية</label>
                  <input
                    type="text"
                    required
                    value={maidForm.name}
                    onChange={(e) => setMaidForm({ ...maidForm, name: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-border text-primary"
                  />
                </div>
                <div>
                  <label className="block font-bold text-primary mb-1">الاسم بالعربية</label>
                  <input
                    type="text"
                    required
                    value={maidForm.arabicName}
                    onChange={(e) => setMaidForm({ ...maidForm, arabicName: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-border text-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-primary mb-1">الجنسية</label>
                  <select
                    value={maidForm.nationality}
                    onChange={(e) => {
                      const nat = e.target.value;
                      const flags = { Philippines: '🇵🇭', Kenya: '🇰🇪', Uganda: '🇺🇬', Ghana: '🇬🇭' };
                      const arNats = { Philippines: 'الفلبين', Kenya: 'كينيا', Uganda: 'أوغندا', Ghana: 'غانا' };
                      setMaidForm({
                        ...maidForm,
                        nationality: nat,
                        nationalityAr: arNats[nat] || nat,
                        flag: flags[nat] || '🌍'
                      });
                    }}
                    className="w-full p-2.5 rounded-xl border border-border text-primary"
                  >
                    <option value="Philippines">الفلبين (Philippines)</option>
                    <option value="Kenya">كينيا (Kenya)</option>
                    <option value="Uganda">أوغندا (Uganda)</option>
                    <option value="Ghana">غانا (Ghana)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-primary mb-1">سنوات الخبرة</label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={maidForm.experience_years}
                    onChange={(e) => setMaidForm({ ...maidForm, experience_years: Number(e.target.value) })}
                    className="w-full p-2.5 rounded-xl border border-border text-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-primary mb-1">رابط الصورة (Photo URL)</label>
                <input
                  type="url"
                  required
                  value={maidForm.photo}
                  onChange={(e) => setMaidForm({ ...maidForm, photo: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-border text-primary text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-primary mb-1">الخدمات الأساسية</label>
                <input
                  type="text"
                  value={maidForm.services}
                  onChange={(e) => setMaidForm({ ...maidForm, services: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-border text-primary"
                />
              </div>

              <div>
                <label className="block font-bold text-primary mb-1">اللغات المتقنة</label>
                <input
                  type="text"
                  value={maidForm.languages}
                  onChange={(e) => setMaidForm({ ...maidForm, languages: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-border text-primary"
                />
              </div>

              <div className="pt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddMaidOpen(false)}
                  className="px-5 py-2.5 rounded-full border border-border text-muted-foreground hover:bg-secondary"
                >
                  {t.admin.cancel}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-primary text-white font-bold hover:bg-primary-dark"
                >
                  {t.admin.save}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </main>
  );
};
