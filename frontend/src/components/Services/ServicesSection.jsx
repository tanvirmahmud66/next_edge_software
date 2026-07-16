// ServicesSection.jsx
import React, { useState, useEffect, useCallback, memo } from 'react';
import { CheckCircle, ChevronDown } from 'lucide-react';
import { useHomePage } from '../../hooks/useHomePage';
import OptimizedImage from '../ui/OptimizedImage';

const ServicesSection = ({ sectionRef }) => {
  // Hardcoded theme colors
  const themeColors = {
    accent1: '#005B41',
    accent2: '#008071',
  };
  
  // State for services data
  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const [servicesError, setServicesError] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const { homePageData } = useHomePage();
  
  const homePageContent = {
    service_badge: homePageData?.service_badge || 'Our Services',
    service_title: homePageData?.service_title || 'Smart Software for Growing Businesses',
    service_subtitle: homePageData?.service_subtitle || 'End-to-end software development, built around your needs.'
  };

  // Helper function to split title and color the last word
  const formatTitle = useCallback((title) => {
    if (!title) return null;
    
    const words = title.trim().split(' ');
    if (words.length === 1) {
      return (
        <span
          className="relative inline-block"
          style={{ color: themeColors.accent2 }}
        >
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
        <span
          className="relative inline-block"
          style={{ color: themeColors.accent2 }}
        >
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

  // Fallback services
  const getFallbackServices = () => [
    {
      id: 1,
      title: 'Custom Software Development',
      description: 'Tailored solutions built to address your unique business challenges and drive growth.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Enterprise Applications', 'SaaS Platforms', 'API Integration', 'Legacy Modernization'],
      accentColor: themeColors.accent2,
      link: '#custom-software',
      isFeatured: true
    },
    {
      id: 2,
      title: 'Web Applications',
      description: 'Modern, responsive web apps with exceptional user experiences and robust functionality.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Progressive Web Apps', 'Single Page Apps', 'E-commerce', 'Content Management'],
      accentColor: themeColors.accent1,
      link: '#web-apps',
      isFeatured: true
    },
    {
      id: 3,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['iOS & Android', 'React Native', 'Flutter', 'Mobile UI/UX'],
      accentColor: themeColors.accent2,
      link: '#mobile',
      isFeatured: true
    },
    {
      id: 4,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['AWS & Azure', 'Cloud Migration', 'DevOps', 'Serverless Architecture'],
      accentColor: themeColors.accent1,
      link: '#cloud',
      isFeatured: true
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create engaging and intuitive experiences.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      accentColor: themeColors.accent2,
      link: '#design',
      isFeatured: true
    },
    {
      id: 6,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by cutting-edge AI and machine learning technologies.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Predictive Analytics', 'NLP', 'Computer Vision', 'Data Science'],
      accentColor: themeColors.accent1,
      link: '#ai',
      isFeatured: true
    },
    {
      id: 7,
      title: 'Blockchain Development',
      description: 'Secure and transparent blockchain solutions for your business needs.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Smart Contracts', 'DApps', 'DeFi Solutions', 'NFT Platforms'],
      accentColor: themeColors.accent2,
      link: '#blockchain',
      isFeatured: false
    },
    {
      id: 8,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      accentColor: themeColors.accent1,
      link: '#security',
      isFeatured: false
    }
  ];

  // Fetch services from Frappe using REST API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setServicesLoading(true);
        
        // Fetch featured services
        const response = await fetch(
          '/api/resource/Services?filters=[["is_featured","=",1]]&fields=["name","service_name","description","image","route","is_featured"]'
        );
        
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
          // For each service, fetch its items (Master Item child table)
          const servicesWithItems = await Promise.all(
            data.data.map(async (service) => {
              // Fetch full service details including child table items
              const detailResponse = await fetch(`/api/resource/Services/${service.name}`);
              const detailData = await detailResponse.json();
              
              // Extract items from the response
              const items = detailData.data?.items || [];
              
              return {
                id: service.name,
                title: service.service_name,
                description: service.description || '',
                image: service.image || 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                features: items.map(item => item.value).filter(Boolean),
                accentColor: themeColors.accent2,
                link: service.route || `#${service.service_name?.toLowerCase().replace(/\s+/g, '-')}`,
                isFeatured: service.is_featured
              };
            })
          );

          setServices(servicesWithItems);
          setServicesError(null);
        } else {
          // If no featured services, fetch regular services
          const regularResponse = await fetch(
            '/api/resource/Services?fields=["name","service_name","description","image","route","is_featured"]&limit_page_length=6'
          );
          const regularData = await regularResponse.json();
          
          if (regularData.data && regularData.data.length > 0) {
            const servicesWithItems = await Promise.all(
              regularData.data.map(async (service) => {
                const detailResponse = await fetch(`/api/resource/Services/${service.name}`);
                const detailData = await detailResponse.json();
                const items = detailData.data?.items || [];
                
                return {
                  id: service.name,
                  title: service.service_name,
                  description: service.description || '',
                  image: service.image || 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                  features: items.map(item => item.value).filter(Boolean),
                  accentColor: themeColors.accent2,
                  link: service.route || `#${service.service_name?.toLowerCase().replace(/\s+/g, '-')}`,
                  isFeatured: service.is_featured
                };
              })
            );
            
            setServices(servicesWithItems);
            setServicesError(null);
          } else {
            // No services found, use fallback
            setServices(getFallbackServices());
          }
        }
      } catch (err) {
        console.error('Error fetching services:', err);
        setServicesError('Failed to load services');
        setServices(getFallbackServices());
      } finally {
        setServicesLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Handle image error
  const handleImageError = useCallback((e) => {
    e.target.src = 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }, []);

  // Get displayed services based on showAll state
  const displayedServices = showAll ? services : services.slice(0, 6);
  const hasMoreServices = services.length > 6;

  // Show loading state
  if (servicesLoading) {
    return (
      <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-gray-200 border-t-[#008071] animate-spin"></div>
              </div>
              <span className="text-sm text-gray-500">Loading services...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef} 
      className="py-20 lg:py-16 relative overflow-hidden bg-gray-100"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 128, 113, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 128, 113, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Error message with retry button */}
      {servicesError && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-xl border border-red-200 text-gray-900 px-4 py-3 rounded-xl text-sm z-30 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Error:</span>
            <span className="text-gray-600">{servicesError}</span>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="ml-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors text-white"
            style={{ 
              backgroundColor: themeColors.accent2
            }}
          >
            Retry
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in-up">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 border opacity-0 animate-fade-in-up stagger-1"
            style={{ 
              backgroundColor: `${themeColors.accent2}08`,
              borderColor: `${themeColors.accent2}20`,
              color: themeColors.accent2
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: themeColors.accent2 }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: themeColors.accent2 }}></span>
            </span>
            <span>{homePageContent.service_badge}</span>
          </div>
          
          {/* Formatted Title with Last Word Highlight */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 opacity-0 animate-fade-in-up stagger-2">
            {formatTitle(homePageContent.service_title)}
          </h2>
          
          <p className="text-gray-600 text-lg opacity-0 animate-fade-in-up stagger-3">
            {homePageContent.service_subtitle}
          </p>
        </div>

        {/* Services Grid */}
        {displayedServices.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {displayedServices.map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-transparent opacity-0 animate-fade-in-scale"
                  style={{ 
                    animationDelay: `${0.2 + index * 0.15}s`,
                  }}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Image Container */}
                  {/* <div className="relative h-48 overflow-hidden bg-gray-100">
                    <OptimizedImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      fallbackSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      onError={handleImageError}
                      widths={[480, 768, 960]}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    
                    {service.isFeatured && (
                      <div className="absolute top-4 right-4 z-20">
                        <div 
                          className="px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg"
                          style={{ backgroundColor: service.accentColor }}
                        >
                          Featured
                        </div>
                      </div>
                    )}

                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-out"
                      style={{ backgroundColor: service.accentColor }}
                    ></div>
                  </div> */}
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 transition-all duration-300 group-hover:translate-x-1">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                    
                    {/* Features from Master Item child table */}
                    {service.features.length > 0 && (
                      <ul className="space-y-2.5 mb-6">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-center gap-2.5 text-sm text-gray-700 transition-all duration-300 hover:translate-x-1"
                          >
                            <CheckCircle 
                              className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" 
                              style={{ color: service.accentColor }}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Bottom accent line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
                    style={{ backgroundColor: service.accentColor }}
                  ></div>
                </div>
              ))}
            </div>

            {/* Load More Button - Same design as the reference button */}
            {hasMoreServices && (
              <div className="flex justify-center mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <button
                  onClick={() => setShowAll(!showAll)}
                  disabled={!services || services.length === 0}
                  className={`group inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 border-2 w-full sm:w-auto ${
                    (!services || services.length === 0) 
                      ? 'opacity-50 cursor-not-allowed border-gray-200 text-gray-400' 
                      : 'cursor-pointer hover:shadow-lg'
                  }`}
                  style={{
                    borderColor: themeColors.accent2,
                    color: themeColors.accent2,
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (services && services.length > 0) {
                      e.currentTarget.style.backgroundColor = themeColors.accent2;
                      e.currentTarget.style.color = "white";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = themeColors.accent2;
                  }}
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    showAll ? 'rotate-180 group-hover:scale-110' : 'group-hover:scale-110'
                  }`} />
                  {showAll ? 'Show Less' : `Load More`}
                </button>
              </div>
            )}
          </>
        ) : (
          // Show message if no services are found
          <div className="text-center py-12 opacity-0 animate-fade-in-up stagger-3">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-gray-500 font-medium">No services available at the moment.</p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
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

export default memo(ServicesSection);