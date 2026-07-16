
// IndustriesSection.jsx
import React, { memo, useCallback } from 'react';
import { Building2, Heart, TrendingUp, Cpu, BookOpen, Code } from 'lucide-react';
import { useHomePage } from '../../hooks/useHomePage';
import OptimizedImage from '../ui/OptimizedImage';

// Icon mapping for different industry types
const iconMap = {
  'Healthcare': <Heart className="w-8 h-8" />,
  'Finance': <TrendingUp className="w-8 h-8" />,
  'Retail': <Building2 className="w-8 h-8" />,
  'Manufacturing': <Cpu className="w-8 h-8" />,
  'Education': <BookOpen className="w-8 h-8" />,
  'Technology': <Code className="w-8 h-8" />,
  'default': <Building2 className="w-8 h-8" />
};

const IndustriesSection = () => {
  // Hardcoded theme colors
  const themeColors = {
    accent1: '#005B41',
    accent2: '#008071',
  };
  
  const { homePageData, loading, error, refreshHomePage } = useHomePage();

  const formatTitle = useCallback((title) => {
    if (!title) return null;
    
    const words = title.trim().split(' ');
    if (words.length === 1) {
      return (
        <span className="relative inline-block" style={{ color: themeColors.accent2 }}>
          {words[0]}
          <span
            className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
            style={{ 
              backgroundColor: themeColors.accent2,
              opacity: 0.3
            }}
          ></span>
        </span>
      );
    }
    
    const lastWord = words.pop();
    const firstPart = words.join(' ');
    
    return (
      <>
        {firstPart}{' '}
        <span className="relative inline-block" style={{ color: themeColors.accent2 }}>
          {lastWord}
          <span
            className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
            style={{ 
              backgroundColor: themeColors.accent2,
              opacity: 0.3
            }}
          ></span>
        </span>
      </>
    );
  }, []);

  const defaultContent = {
    industries_badge: "Industries We Serve",
    industries_title: "Expertise Across Diverse Sectors",
    industries_subtitle: "We understand the unique challenges of different industries and deliver tailored solutions.",
    items: [
      { primary_value: "Healthcare", secondary_value: "HIPAA-compliant solutions", attachment: null },
      { primary_value: "Finance", secondary_value: "Secure financial systems", attachment: null },
      { primary_value: "Retail", secondary_value: "E-commerce platforms", attachment: null },
      { primary_value: "Manufacturing", secondary_value: "Industry 4.0 solutions", attachment: null },
      { primary_value: "Education", secondary_value: "E-learning platforms", attachment: null },
      { primary_value: "Technology", secondary_value: "Cutting-edge innovation", attachment: null }
    ]
  };

  const content = homePageData || defaultContent;
  const industries = content.items || defaultContent.items;

  const getIndustryIcon = useCallback((industryName) => {
    return iconMap[industryName] || iconMap['default'];
  }, []);

  // Loading state
  if (loading) {
    return (
      <section className="py-20 lg:py-16 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-gray-200 border-t-[#008071] animate-spin"></div>
              </div>
              <span className="text-sm text-gray-500">Loading industries...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-16 relative overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(0, 128, 113, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Error message */}
      {error && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-xl border border-red-200 text-gray-900 px-4 py-3 rounded-xl text-sm z-30 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Error:</span>
            <span className="text-gray-600">{error}</span>
          </div>
          <button 
            onClick={refreshHomePage} 
            className="ml-2 px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: themeColors.accent2 }}
          >
            Retry
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 opacity-0 animate-fade-in-up border"
            style={{ 
              backgroundColor: `${themeColors.accent2}08`,
              borderColor: `${themeColors.accent2}20`,
              color: themeColors.accent2
            }}
          >
            <Building2 className="w-4 h-4" style={{ color: themeColors.accent2 }} />
            <span>{content.industries_badge}</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 opacity-0 animate-fade-in-up stagger-1">
            {formatTitle(content.industries_title)}
          </h2>
          
          <p className="text-gray-600 text-lg opacity-0 animate-fade-in-up stagger-2">
            {content.industries_subtitle}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {industries.map((industry, index) => {
            const iconColor = index % 2 === 0 
              ? themeColors.accent2
              : themeColors.accent1;
            
            return (
              <div
                key={index}
                className="group text-center p-5 rounded-xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-transparent bg-white hover:bg-gray-50 opacity-0 animate-fade-in-scale"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110 relative overflow-hidden"
                  style={{ 
                    backgroundColor: `${iconColor}10`,
                    color: iconColor
                  }}
                >
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: `0 0 30px ${iconColor}20` }}
                  ></div>
                  
                  {industry.attachment ? (
                    <OptimizedImage
                      src={industry.attachment} 
                      alt={industry.primary_value}
                      className="w-8 h-8 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                      widths={[64, 96, 128]}
                      sizes="32px"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.querySelector('.fallback-icon')?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  
                  {!industry.attachment && (
                    <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                      {getIndustryIcon(industry.primary_value)}
                    </div>
                  )}
                </div>
                
                <h3 className="text-gray-900 font-semibold mb-1 text-sm lg:text-base transition-colors duration-300">
                  {industry.primary_value}
                </h3>
                
                <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300 line-clamp-2">
                  {industry.secondary_value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Decorative Bottom Line */}
        <div className="mt-16 text-center opacity-0 animate-fade-in-up stagger-3">
          <div 
            className="inline-block w-24 h-1 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${themeColors.accent2}, ${themeColors.accent1}, transparent)`,
              opacity: 0.5
            }}
          ></div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.5s ease-out forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.25s; }
        .stagger-3 { animation-delay: 0.4s; }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default memo(IndustriesSection);
