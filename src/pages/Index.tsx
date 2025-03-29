
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BenefitsListSection from '@/components/BenefitsListSection';
import FaqSection from '@/components/FaqSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-honey-50/50">
      <HeroSection />
      <ProductsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <BenefitsListSection />
      <FaqSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
