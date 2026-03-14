import React, { useState, useEffect, useRef } from 'react';
import HeroSection from '../sections/CustomSoftwarePage/HeroSection';
import OverviewSection from '../sections/CustomSoftwarePage/OverviewSection';
import FeaturesSection from '../sections/CustomSoftwarePage/FeaturesSection';
import ProcessSection from '../sections/CustomSoftwarePage/ProcessSection';
import TechnologiesSection from '../sections/CustomSoftwarePage/TechnologiesSection';
import BenefitsSection from '../sections/CustomSoftwarePage/BenefitsSection';
import CaseStudiesSection from '../sections/CustomSoftwarePage/CaseStudiesSection';
import FAQSection from '../sections/CustomSoftwarePage/FAQSection';
import CTASection from '../sections/CustomSoftwarePage/CTASection';

const CustomSoftwarePage = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  // Theme colors
  const colors = {
    primary: '#0F0F0F',    // Near black
    secondary: '#232D3F',   // Dark blue-gray
    accent1: '#005B41',     // Deep green
    accent2: '#008170'      // Medium green-teal
  };

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
    <div className="min-h-screen" style={{ backgroundColor: colors.primary }}>
      <HeroSection colors={colors} />
      <OverviewSection 
        sectionRef={el => sectionRefs.current['overview'] = el}
        isVisible={isVisible['overview']}
        colors={colors}
      />
      <FeaturesSection 
        sectionRef={el => sectionRefs.current['features'] = el}
        isVisible={isVisible['features']}
        colors={colors}
      />
      <ProcessSection 
        sectionRef={el => sectionRefs.current['process'] = el}
        isVisible={isVisible['process']}
        colors={colors}
      />
      <TechnologiesSection 
        sectionRef={el => sectionRefs.current['technologies'] = el}
        isVisible={isVisible['technologies']}
        colors={colors}
      />
      <BenefitsSection 
        sectionRef={el => sectionRefs.current['benefits'] = el}
        isVisible={isVisible['benefits']}
        colors={colors}
      />
      <CaseStudiesSection 
        sectionRef={el => sectionRefs.current['casestudies'] = el}
        isVisible={isVisible['casestudies']}
        colors={colors}
      />
      <FAQSection 
        sectionRef={el => sectionRefs.current['faq'] = el}
        isVisible={isVisible['faq']}
        colors={colors}
      />
      <CTASection colors={colors} />
    </div>
  );
};

export default CustomSoftwarePage;







