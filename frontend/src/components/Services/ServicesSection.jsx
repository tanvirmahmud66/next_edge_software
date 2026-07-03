
// // ServicesSection.jsx
// import React, { useState, useEffect, useCallback, memo } from 'react';
// import { CheckCircle, ChevronRight, ArrowRight } from 'lucide-react';
// import { useTheme } from '../../hooks/useTheme';
// import { useHomePage } from '../../hooks/useHomePage';
// import OptimizedImage from '../ui/OptimizedImage';

// const ServicesSection = ({ sectionRef }) => {
//   // Use theme hook
//   const { colors: themeColors, loading: themeLoading, error: themeError, refreshTheme } = useTheme();
  
//   // State for services data
//   const [services, setServices] = useState([]);
//   const [servicesLoading, setServicesLoading] = useState(true);
//   const [servicesError, setServicesError] = useState(null);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const { homePageData } = useHomePage();
  
//   const homePageContent = {
//     service_badge: homePageData?.service_badge || 'Our Services',
//     service_title: homePageData?.service_title || 'Smart Software for Growing Businesses',
//     service_subtitle: homePageData?.service_subtitle || 'End-to-end software development, built around your needs.'
//   };

//   // Helper function to split title and color the last word
//   const formatTitle = useCallback((title) => {
//     if (!title) return null;
    
//     const words = title.trim().split(' ');
//     if (words.length === 1) {
//       return (
//         <span
//           className="relative inline-block"
//           style={{ color: themeColors?.accent2 || '#008071' }}
//         >
//           {words[0]}
//           <span
//             className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
//             style={{ 
//               backgroundColor: themeColors?.accent2 || '#008071',
//               opacity: 0.3
//             }}
//           ></span>
//         </span>
//       );
//     }
    
//     const lastWord = words.pop();
//     const firstPart = words.join(' ');
    
//     return (
//       <>
//         {firstPart}{' '}
//         <span
//           className="relative inline-block"
//           style={{ color: themeColors?.accent2 || '#008071' }}
//         >
//           {lastWord}
//           <span
//             className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
//             style={{ 
//               backgroundColor: themeColors?.accent2 || '#008071',
//               opacity: 0.3
//             }}
//           ></span>
//         </span>
//       </>
//     );
//   }, [themeColors?.accent2]);

//   // Fetch services from Frappe using REST API
//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         setServicesLoading(true);
        
//         // Fetch featured services
//         const response = await fetch(
//           '/api/resource/Services?filters=[["is_featured","=",1]]&fields=["name","service_name","description","image","route","is_featured"]'
//         );
        
//         const data = await response.json();
        
//         if (data.data && data.data.length > 0) {
//           // For each service, fetch its items (Master Item child table)
//           const servicesWithItems = await Promise.all(
//             data.data.map(async (service) => {
//               // Fetch full service details including child table items
//               const detailResponse = await fetch(`/api/resource/Services/${service.name}`);
//               const detailData = await detailResponse.json();
              
//               // Extract items from the response
//               const items = detailData.data?.items || [];
              
//               return {
//                 id: service.name,
//                 title: service.service_name,
//                 description: service.description || '',
//                 image: service.image || 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//                 features: items.map(item => item.value).filter(Boolean),
//                 accentColor: themeColors?.accent2 || '#008071',
//                 link: service.route || `#${service.service_name?.toLowerCase().replace(/\s+/g, '-')}`,
//                 isFeatured: service.is_featured
//               };
//             })
//           );

//           setServices(servicesWithItems);
//           setServicesError(null);
//         } else {
//           // If no featured services, fetch regular services
//           const regularResponse = await fetch(
//             '/api/resource/Services?fields=["name","service_name","description","image","route","is_featured"]&limit_page_length=6'
//           );
//           const regularData = await regularResponse.json();
          
//           if (regularData.data && regularData.data.length > 0) {
//             const servicesWithItems = await Promise.all(
//               regularData.data.map(async (service) => {
//                 const detailResponse = await fetch(`/api/resource/Services/${service.name}`);
//                 const detailData = await detailResponse.json();
//                 const items = detailData.data?.items || [];
                
//                 return {
//                   id: service.name,
//                   title: service.service_name,
//                   description: service.description || '',
//                   image: service.image || 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//                   features: items.map(item => item.value).filter(Boolean),
//                   accentColor: themeColors?.accent2 || '#008071',
//                   link: service.route || `#${service.service_name?.toLowerCase().replace(/\s+/g, '-')}`,
//                   isFeatured: service.is_featured
//                 };
//               })
//             );
            
//             setServices(servicesWithItems);
//             setServicesError(null);
//           } else {
//             // No services found, use fallback
//             setServices(getFallbackServices());
//           }
//         }
//       } catch (err) {
//         console.error('Error fetching services:', err);
//         setServicesError('Failed to load services');
//         setServices(getFallbackServices());
//       } finally {
//         setServicesLoading(false);
//       }
//     };

//     fetchServices();
//   }, [themeColors?.accent1, themeColors?.accent2]);

//   // Fallback services
//   const getFallbackServices = () => [
//     {
//       id: 1,
//       title: 'Custom Software Development',
//       description: 'Tailored solutions built to address your unique business challenges and drive growth.',
//       image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       features: ['Enterprise Applications', 'SaaS Platforms', 'API Integration', 'Legacy Modernization'],
//       accentColor: themeColors?.accent2 || '#008071',
//       link: '#custom-software',
//       isFeatured: true
//     },
//     {
//       id: 2,
//       title: 'Web Applications',
//       description: 'Modern, responsive web apps with exceptional user experiences and robust functionality.',
//       image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       features: ['Progressive Web Apps', 'Single Page Apps', 'E-commerce', 'Content Management'],
//       accentColor: themeColors?.accent1 || '#005B41',
//       link: '#web-apps',
//       isFeatured: true
//     },
//     {
//       id: 3,
//       title: 'Mobile Development',
//       description: 'Native and cross-platform mobile applications for iOS and Android devices.',
//       image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       features: ['iOS & Android', 'React Native', 'Flutter', 'Mobile UI/UX'],
//       accentColor: themeColors?.accent2 || '#008071',
//       link: '#mobile',
//       isFeatured: true
//     }
//   ];

//   // Update accent colors when theme changes
//   useEffect(() => {
//     setServices(prevServices => 
//       prevServices.map((service, index) => ({
//         ...service,
//         accentColor: index % 2 === 0 ? (themeColors?.accent2 || '#008071') : (themeColors?.accent1 || '#005B41')
//       }))
//     );
//   }, [themeColors]);

//   // Handle image error
//   const handleImageError = useCallback((e) => {
//     e.target.src = 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
//   }, []);

//   // Show loading state
//   if (themeLoading || servicesLoading) {
//     return (
//       <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-center items-center min-h-[400px]">
//             <div className="flex flex-col items-center gap-4">
//               <div className="relative">
//                 <div className="w-12 h-12 rounded-full border-2 border-gray-200 border-t-[#008071] animate-spin"></div>
//               </div>
//               <span className="text-sm text-gray-500">Loading services...</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section 
//       ref={sectionRef} 
//       className="py-20 lg:py-16 relative overflow-hidden bg-gray-100"
//     >
//       {/* Subtle background pattern */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div 
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(0, 128, 113, 0.3) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(0, 128, 113, 0.3) 1px, transparent 1px)
//             `,
//             backgroundSize: '60px 60px',
//           }}
//         />
//       </div>

//       {/* Error message with retry button */}
//       {(themeError || servicesError) && (
//         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-xl border border-red-200 text-gray-900 px-4 py-3 rounded-xl text-sm z-30 flex items-center gap-3">
//           <div className="flex items-center gap-2">
//             <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
//             <span className="font-medium">Error:</span>
//             <span className="text-gray-600">{themeError || servicesError}</span>
//           </div>
//           <button 
//             onClick={refreshTheme}
//             className="ml-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
//             style={{ 
//               backgroundColor: themeColors?.accent2 || '#008071',
//               color: 'white'
//             }}
//           >
//             Retry
//           </button>
//         </div>
//       )}

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in-up">
//           <div 
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 border opacity-0 animate-fade-in-up stagger-1"
//             style={{ 
//               backgroundColor: `${themeColors?.accent2 || '#008071'}08`,
//               borderColor: `${themeColors?.accent2 || '#008071'}20`,
//               color: themeColors?.accent2 || '#008071'
//             }}
//           >
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: themeColors?.accent2 || '#008071' }}></span>
//               <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: themeColors?.accent2 || '#008071' }}></span>
//             </span>
//             <span>{homePageContent.service_badge}</span>
//           </div>
          
//           {/* Formatted Title with Last Word Highlight */}
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 opacity-0 animate-fade-in-up stagger-2">
//             {formatTitle(homePageContent.service_title)}
//           </h2>
          
//           <p className="text-gray-600 text-lg opacity-0 animate-fade-in-up stagger-3">
//             {homePageContent.service_subtitle}
//           </p>
//         </div>

//         {/* Services Grid */}
//         {services.length > 0 ? (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={service.id}
//                 className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-transparent opacity-0 animate-fade-in-scale"
//                 style={{ 
//                   animationDelay: `${0.2 + index * 0.15}s`,
//                 }}
//                 onMouseEnter={() => setHoveredCard(service.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 {/* Image Container */}
//                 <div className="relative h-48 overflow-hidden bg-gray-100">
//                   <OptimizedImage
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                     fallbackSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                     onError={handleImageError}
//                     widths={[480, 768, 960]}
//                     sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
//                   />
                  
//                   {/* Service Badge - Only show if featured */}
//                   {service.isFeatured && (
//                     <div className="absolute top-4 right-4 z-20">
//                       <div 
//                         className="px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg"
//                         style={{ backgroundColor: service.accentColor }}
//                       >
//                         Featured
//                       </div>
//                     </div>
//                   )}

//                   {/* Hover Overlay */}
//                   <div 
//                     className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-out"
//                     style={{ backgroundColor: service.accentColor }}
//                   ></div>
//                 </div>
                
//                 {/* Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-3 transition-all duration-300 group-hover:translate-x-1">
//                     {service.title}
//                   </h3>
                  
//                   <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
//                     {service.description}
//                   </p>
                  
//                   {/* Features from Master Item child table */}
//                   {service.features.length > 0 && (
//                     <ul className="space-y-2.5 mb-6">
//                       {service.features.slice(0, 4).map((feature, idx) => (
//                         <li 
//                           key={idx} 
//                           className="flex items-center gap-2.5 text-sm text-gray-700 transition-all duration-300 hover:translate-x-1"
//                         >
//                           <CheckCircle 
//                             className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" 
//                             style={{ color: service.accentColor }}
//                           />
//                           <span>{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
                  
//                   {/* Learn More Link */}
//                   {/* <a
//                     href={service.link}
//                     className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group/link hover:gap-3"
//                     style={{ color: service.accentColor }}
//                   >
//                     Learn More
//                     <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/link:translate-x-1" />
//                   </a> */}
//                 </div>

//                 {/* Bottom accent line */}
//                 <div 
//                   className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
//                   style={{ backgroundColor: service.accentColor }}
//                 ></div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           // Show message if no services are found
//           <div className="text-center py-12 opacity-0 animate-fade-in-up stagger-3">
//             <div className="inline-flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-xl border border-gray-200">
//               <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
//                 <CheckCircle className="w-5 h-5 text-gray-400" />
//               </div>
//               <p className="text-gray-500 font-medium">No services available at the moment.</p>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes fadeInScale {
//           from { opacity: 0; transform: scale(0.95) translateY(20px); }
//           to { opacity: 1; transform: scale(1) translateY(0); }
//         }

//         .animate-fade-in-up {
//           animation: fadeInUp 0.6s ease-out forwards;
//         }

//         .animate-fade-in-scale {
//           animation: fadeInScale 0.5s ease-out forwards;
//         }

//         .stagger-1 { animation-delay: 0.1s; }
//         .stagger-2 { animation-delay: 0.25s; }
//         .stagger-3 { animation-delay: 0.4s; }

//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default memo(ServicesSection);















// ServicesSection.jsx
import React, { useState, useEffect, useCallback, memo } from 'react';
import { CheckCircle } from 'lucide-react';
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
        {services.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
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
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    fallbackSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    onError={handleImageError}
                    widths={[480, 768, 960]}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  
                  {/* Service Badge - Only show if featured */}
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

                  {/* Hover Overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-out"
                    style={{ backgroundColor: service.accentColor }}
                  ></div>
                </div>
                
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
