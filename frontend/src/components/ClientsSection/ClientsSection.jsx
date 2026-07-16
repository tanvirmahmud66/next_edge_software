// ClientsSection.jsx
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Building2, Users } from 'lucide-react';
import useClients from '../../hooks/useClients';
import OptimizedImage from '../ui/OptimizedImage';

const ClientsSection = () => {
  // Hardcoded theme colors
  const themeColors = {
    accent1: '#005B41',
    accent2: '#008071',
  };
  
  const { clientsData, loading, error, refreshClients } = useClients();
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const scrollPositionRef = useRef(0);

  // Duplicate clients array for seamless infinite scroll
  const getDuplicatedClients = useCallback((clients) => {
    if (!clients || clients.length === 0) return [];
    // Duplicate multiple times for seamless loop (circular linked list concept)
    return [...clients, ...clients, ...clients, ...clients];
  }, []);

  const defaultContent = {
    items: [
      { company_name: "TechCorp", company_logo: null },
      { company_name: "InnovateLab", company_logo: null },
      { company_name: "DataFlow", company_logo: null },
      { company_name: "CloudNine", company_logo: null },
      { company_name: "NextGen", company_logo: null },
      { company_name: "SmartSolutions", company_logo: null },
      { company_name: "DigitalEdge", company_logo: null },
      { company_name: "CyberShield", company_logo: null },
    ]
  };

  const content = clientsData || defaultContent;
  const clients = content.items || defaultContent.items;
  const duplicatedClients = getDuplicatedClients(clients);

  // Infinite auto-scroll animation using requestAnimationFrame
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || duplicatedClients.length === 0) return;

    const speed = 1.2; // Pixels per frame - increased for faster speed

    const animate = () => {
      if (!isPaused && slider) {
        scrollPositionRef.current += speed;
        
        // Calculate the width of one complete set of clients
        const singleSetWidth = slider.scrollWidth / (duplicatedClients.length / clients.length);
        
        // Circular linked list concept - reset position when past one set
        if (scrollPositionRef.current >= singleSetWidth) {
          scrollPositionRef.current -= singleSetWidth;
        }
        
        slider.scrollLeft = scrollPositionRef.current;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, duplicatedClients.length, clients.length]);

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
              <span className="text-sm text-gray-500">Loading clients...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-20 lg:pt-16 relative overflow-hidden bg-white">
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
            onClick={refreshClients} 
            className="ml-2 px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: themeColors.accent2 }}
          >
            Retry
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Badge */}
        <div className="text-center mb-2">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
            style={{ 
              backgroundColor: `${themeColors.accent2}08`,
              borderColor: `${themeColors.accent2}20`,
              color: themeColors.accent2
            }}
          >
            <Users className="w-4 h-4" style={{ color: themeColors.accent2 }} />
            <span>Our Honorable Clients</span>
          </div>
        </div>

        {/* Clients Slider */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Slider Container */}
          <div 
            ref={sliderRef}
            className="overflow-hidden py-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex gap-16 lg:gap-20" style={{ whiteSpace: 'nowrap' }}>
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.company_name}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="flex flex-col items-center justify-center gap-4 p-4 min-w-[120px]">
                    {/* Company Logo */}
                    <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                      {client.company_logo ? (
                        <img
                          src={client.company_logo}
                          alt={client.company_name}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.querySelector('.fallback-icon')?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      
                      <div 
                        className={`fallback-icon w-full h-full rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${client.company_logo ? 'hidden' : ''}`}
                        style={{ 
                          backgroundColor: `${themeColors.accent2}10`,
                          color: themeColors.accent2
                        }}
                      >
                        <Building2 className="w-10 h-10 lg:w-12 lg:h-12" />
                      </div>
                    </div>
                    
                    {/* Company Name */}
                    <h3 className="text-sm lg:text-base font-semibold text-gray-600 text-center whitespace-normal transition-colors duration-300 group-hover:text-gray-900">
                      {client.company_name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Hide scrollbar for the slider */
        .overflow-hidden::-webkit-scrollbar {
          display: none;
        }
        .overflow-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default memo(ClientsSection);