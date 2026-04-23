
// // IndustriesSection.jsx
// import React, { useState, useEffect } from 'react';
// import { Building2, Heart, TrendingUp, Cpu, BookOpen, Code } from 'lucide-react';
// import { useTheme } from '../../hooks/useTheme';

// // Icon mapping for different industry types
// const iconMap = {
//   'Healthcare': <Heart className="w-8 h-8" />,
//   'Finance': <TrendingUp className="w-8 h-8" />,
//   'Retail': <Building2 className="w-8 h-8" />,
//   'Manufacturing': <Cpu className="w-8 h-8" />,
//   'Education': <BookOpen className="w-8 h-8" />,
//   'Technology': <Code className="w-8 h-8" />,
//   // Default icon if no match
//   'default': <Building2 className="w-8 h-8" />
// };

// const IndustriesSection = () => {
//   // Use theme hook
//   const { colors: themeColors, loading: themeLoading, error: themeError, refreshTheme } = useTheme();
  
//   const [homePageData, setHomePageData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchHomePageData();
//   }, []);

//   const fetchHomePageData = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch('/api/resource/Home%20Page/Home%20Page', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       });
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//       const data = await response.json();
      
//       if (data.data) {
//         setHomePageData(data.data);
//         setError(null);
//       }
//     } catch (err) {
//       console.error('Error fetching home page data:', err);
//       setError('Failed to load industries content');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Helper function to split title and color the last word
//   const formatTitle = (title) => {
//     if (!title) return null;
    
//     const words = title.trim().split(' ');
//     if (words.length === 1) {
//       return (
//         <span
//           className="relative inline-block group"
//           style={{ color: themeColors.accent2 }}
//         >
//           {words[0]}
//           <span
//             className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
//             style={{
//               background: `linear-gradient(90deg, ${themeColors.accent2}, ${themeColors.accent1})`,
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
//           className="relative inline-block group"
//           style={{ color: themeColors.accent2 }}
//         >
//           {lastWord}
//           <span
//             className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
//             style={{
//               background: `linear-gradient(90deg, ${themeColors.accent2}, ${themeColors.accent1})`,
//             }}
//           ></span>
//         </span>
//       </>
//     );
//   };

//   // Default content in case data is not available
//   const defaultContent = {
//     industries_badge: "Industries We Serve",
//     industries_title: "Expertise Across Diverse Sectors",
//     industries_subtitle: "We understand the unique challenges of different industries and deliver tailored solutions.",
//     items: [
//       { primary_value: "Healthcare", secondary_value: "HIPAA-compliant solutions", attachment: null },
//       { primary_value: "Finance", secondary_value: "Secure financial systems", attachment: null },
//       { primary_value: "Retail", secondary_value: "E-commerce platforms", attachment: null },
//       { primary_value: "Manufacturing", secondary_value: "Industry 4.0 solutions", attachment: null },
//       { primary_value: "Education", secondary_value: "E-learning platforms", attachment: null },
//       { primary_value: "Technology", secondary_value: "Cutting-edge innovation", attachment: null }
//     ]
//   };

//   const content = homePageData || defaultContent;
//   const industries = content.items || defaultContent.items;

//   // Function to get appropriate icon based on industry name
//   const getIndustryIcon = (industryName) => {
//     const icon = iconMap[industryName] || iconMap['default'];
//     return icon;
//   };

//   // Show loading state
//   if (loading || themeLoading) {
//     return (
//       <section className="py-20 lg:py-28 bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-center items-center min-h-[300px]">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-20 lg:py-28 relative" style={{ backgroundColor: themeColors.secondary }}>
//       {/* Error message with retry button */}
//       {(themeError || error) && (
//         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm z-30 flex items-center gap-3">
//           <span>Failed to load: {themeError || error}</span>
//           <button 
//             onClick={() => {
//               refreshTheme();
//               fetchHomePageData();
//             }}
//             className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs transition-colors"
//           >
//             Retry
//           </button>
//         </div>
//       )}

//       {/* Animated Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div 
//           className="absolute top-0 left-0 w-full h-full"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, ${themeColors.accent1} 1px, transparent 0)`,
//             backgroundSize: '40px 40px'
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div 
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
//             style={{ 
//               backgroundColor: themeColors.primary, 
//               color: 'white',
//               border: `1px solid ${themeColors.accent2}40`
//             }}
//           >
//             <Building2 className="w-4 h-4" style={{ color: themeColors.accent2 }} />
//             <span>{content.industries_badge}</span>
//           </div>
//           <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
//             {formatTitle(content.industries_title)}
//           </h2>
//           <p className="text-white/70 text-lg">
//             {content.industries_subtitle}
//           </p>
//         </div>

//         {/* Industries Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           {industries.map((industry, index) => (
//             <div
//               key={index}
//               className="group text-center p-4 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 transform"
//             >
//               <div 
//                 className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110 relative overflow-hidden"
//                 style={{ 
//                   backgroundColor: index % 2 === 0 ? `${themeColors.accent2}30` : `${themeColors.accent1}30`,
//                   color: index % 2 === 0 ? themeColors.accent2 : themeColors.accent1
//                 }}
//               >
//                 {/* If there's an attachment/icon image, use it, otherwise use the mapped icon */}
//                 {industry.attachment ? (
//                   <img 
//                     src={industry.attachment} 
//                     alt={industry.primary_value}
//                     className="w-8 h-8 object-contain"
//                     onError={(e) => {
//                       e.target.style.display = 'none';
//                       e.target.parentElement.innerHTML = getIndustryIcon(industry.primary_value).props.children;
//                     }}
//                   />
//                 ) : (
//                   getIndustryIcon(industry.primary_value)
//                 )}
//               </div>
//               <h3 className="text-white font-semibold mb-1 group-hover:text-white transition-colors">
//                 {industry.primary_value}
//               </h3>
//               <p className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
//                 {industry.secondary_value}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Decorative Bottom Line */}
//         <div className="mt-16 text-center">
//           <div 
//             className="inline-block w-24 h-1 rounded-full"
//             style={{ 
//               background: `linear-gradient(90deg, transparent, ${themeColors.accent2}, ${themeColors.accent1}, transparent)`
//             }}
//           ></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IndustriesSection;





















// IndustriesSection.jsx
import React, { useState, useEffect } from 'react';
import { Building2, Heart, TrendingUp, Cpu, BookOpen, Code } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

// Icon mapping for different industry types
const iconMap = {
  'Healthcare': <Heart className="w-8 h-8" />,
  'Finance': <TrendingUp className="w-8 h-8" />,
  'Retail': <Building2 className="w-8 h-8" />,
  'Manufacturing': <Cpu className="w-8 h-8" />,
  'Education': <BookOpen className="w-8 h-8" />,
  'Technology': <Code className="w-8 h-8" />,
  // Default icon if no match
  'default': <Building2 className="w-8 h-8" />
};

const IndustriesSection = () => {
  // Use theme hook
  const { colors: themeColors, loading: themeLoading, error: themeError, refreshTheme } = useTheme();
  
  const [homePageData, setHomePageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHomePageData();
  }, []);

  const fetchHomePageData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/resource/Home%20Page/Home%20Page', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.data) {
        setHomePageData(data.data);
        setError(null);
      }
    } catch (err) {
      console.error('Error fetching home page data:', err);
      setError('Failed to load industries content');
    } finally {
      setLoading(false);
    }
  };

  // Helper function to split title and color the last word
  const formatTitle = (title) => {
    if (!title) return null;
    
    const words = title.trim().split(' ');
    if (words.length === 1) {
      return (
        <span
          className="relative inline-block group"
          style={{ color: themeColors.accent2 }}
        >
          {words[0]}
          <span
            className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
            style={{
              background: `linear-gradient(90deg, ${themeColors.accent2}, ${themeColors.accent1})`,
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
          className="relative inline-block group"
          style={{ color: themeColors.accent2 }}
        >
          {lastWord}
          <span
            className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
            style={{
              background: `linear-gradient(90deg, ${themeColors.accent2}, ${themeColors.accent1})`,
            }}
          ></span>
        </span>
      </>
    );
  };

  // Default content in case data is not available
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

  // Function to get appropriate icon based on industry name
  const getIndustryIcon = (industryName) => {
    const icon = iconMap[industryName] || iconMap['default'];
    return icon;
  };

  // Show loading state
  if (loading || themeLoading) {
    return (
      <section className="py-20 lg:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 relative" style={{ backgroundColor: themeColors.secondary }}>
      {/* Error message with retry button */}
      {(themeError || error) && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm z-30 flex items-center gap-3">
          <span>Failed to load: {themeError || error}</span>
          <button 
            onClick={() => {
              refreshTheme();
              fetchHomePageData();
            }}
            className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs transition-colors"
          >
            Retry
          </button>
        </div>
      )}

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${themeColors.accent1} 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 opacity-0 animate-fade-in-up"
            style={{ 
              backgroundColor: themeColors.primary, 
              color: 'white',
              border: `1px solid ${themeColors.accent2}40`
            }}
          >
            <Building2 className="w-4 h-4" style={{ color: themeColors.accent2 }} />
            <span>{content.industries_badge}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 opacity-0 animate-fade-in-up stagger-1">
            {formatTitle(content.industries_title)}
          </h2>
          <p className="text-white/70 text-lg opacity-0 animate-fade-in-up stagger-2">
            {content.industries_subtitle}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group text-center p-4 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 transform opacity-0 animate-fade-in-scale"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110 relative overflow-hidden"
                style={{ 
                  backgroundColor: index % 2 === 0 ? `${themeColors.accent2}30` : `${themeColors.accent1}30`,
                  color: index % 2 === 0 ? themeColors.accent2 : themeColors.accent1
                }}
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    boxShadow: `0 0 20px ${index % 2 === 0 ? themeColors.accent2 : themeColors.accent1}40`
                  }}
                ></div>
                
                {/* If there's an attachment/icon image, use it, otherwise use the mapped icon */}
                {industry.attachment ? (
                  <img 
                    src={industry.attachment} 
                    alt={industry.primary_value}
                    className="w-8 h-8 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = getIndustryIcon(industry.primary_value).props.children;
                    }}
                  />
                ) : (
                  <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {getIndustryIcon(industry.primary_value)}
                  </div>
                )}
              </div>
              <h3 className="text-white font-semibold mb-1 group-hover:text-white transition-colors duration-300">
                {industry.primary_value}
              </h3>
              <p className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300">
                {industry.secondary_value}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Bottom Line */}
        <div className="mt-16 text-center opacity-0 animate-fade-in-up stagger-3">
          <div 
            className="inline-block w-24 h-1 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${themeColors.accent2}, ${themeColors.accent1}, transparent)`
            }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .stagger-1 {
          animation-delay: 0.1s;
        }

        .stagger-2 {
          animation-delay: 0.3s;
        }

        .stagger-3 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default IndustriesSection;














