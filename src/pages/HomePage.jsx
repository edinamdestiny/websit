import React from 'react';
import { Hero } from '../components/Hero';
import { QuickCalculator } from '../components/QuickCalculator';
import { ServicesSection } from '../components/ServicesSection';
import { TalentSection } from '../components/TalentSection';
import { MaidsGallery } from '../components/MaidsGallery';
import { PricingSection } from '../components/PricingSection';
import { DistrictsSection } from '../components/DistrictsSection';
import { TrustSection } from '../components/TrustSection';
import { PaymentSection } from '../components/PaymentSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <QuickCalculator />
      <ServicesSection />
      <TalentSection />
      <MaidsGallery />
      <PricingSection />
      <DistrictsSection />
      <TrustSection />
      <PaymentSection />
      <ContactSection />
    </main>
  );
};
