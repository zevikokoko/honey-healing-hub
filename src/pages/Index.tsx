
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BenefitsListSection from '@/components/BenefitsListSection';
import CallToAction from '@/components/CallToAction';
import FaqSection from '@/components/FaqSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <BenefitsListSection />
      <CallToAction />
      <FaqSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
