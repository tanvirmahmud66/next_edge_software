import React, { useState, useEffect, useRef } from 'react';
import HeroSection from '../components/Hero/HeroSection';
import ServicesSection from '../components/Services/ServicesSection';
import IndustriesSection from '../components/Industries/IndustriesSection';
import ProcessSection from '../components/Process/ProcessSection';
import FaqSection from '../components/Faq/FaqSection';
import CtaSection from '../components/Cta/CtaSection';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = {};

    Object.keys(sectionRefs.current).forEach((key) => {
      observers[key] = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }));
            }
          });
        },
        { threshold: 0.2 }
      );

      if (sectionRefs.current[key]) {
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="bg-[#0A2647] min-h-screen">
      <HeroSection />
      <ServicesSection
        sectionRef={el => sectionRefs.current['services'] = el}
        isVisible={isVisible['services']}
      />
      <IndustriesSection />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;