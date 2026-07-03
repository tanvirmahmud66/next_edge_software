// // FaqSection.jsx
// import React, { useState, useCallback, memo } from 'react';
// import { MessageCircle, ChevronRight, HelpCircle, ChevronDown } from 'lucide-react';
// import { useTheme } from '../../hooks/useTheme';
// import { useHomePage } from '../../hooks/useHomePage';

// const FaqSection = () => {
//   const [activeTab, setActiveTab] = useState(null);
  
//   // Use theme hook
//   const { colors: themeColors, loading: themeLoading, error: themeError, refreshTheme } = useTheme();
//   const { homePageData, loading, error, refreshHomePage } = useHomePage();

//   // Helper function to split title and color the last word
//   const formatTitle = useCallback((title) => {
//     if (!title) return null;
    
//     const words = title.trim().split(' ');
//     if (words.length === 1) {
//       return (
//         <span className="relative inline-block" style={{ color: themeColors?.accent2 || '#008071' }}>
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
//         <span className="relative inline-block" style={{ color: themeColors?.accent2 || '#008071' }}>
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

//   // Default FAQ content
//   const defaultContent = {
//     faq_badge: "FAQs",
//     faq_title: "Frequently Asked Questions",
//     faq_subtitle: "Got questions? We've got answers.",
//     faq_items: [
//       { 
//         primary_value: "What is your development process?",
//         secondary_value: "We follow an agile methodology with regular sprints, continuous integration, and client feedback loops to ensure transparency and quality throughout the development cycle.",
//         attachment: null
//       },
//       { 
//         primary_value: "How do you ensure project security?",
//         secondary_value: "We implement industry-best security practices, regular audits, and compliance with standards like ISO 27001, GDPR, and HIPAA where applicable.",
//         attachment: null
//       },
//       { 
//         primary_value: "What technologies do you specialize in?",
//         secondary_value: "Our expertise spans React, Node.js, Python, Java, cloud platforms (AWS/Azure/GCP), AI/ML frameworks, and mobile development (React Native, Flutter).",
//         attachment: null
//       },
//       { 
//         primary_value: "Do you provide post-launch support?",
//         secondary_value: "Yes, we offer comprehensive maintenance and support packages including 24/7 monitoring, regular updates, and priority issue resolution.",
//         attachment: null
//       }
//     ],
//     faq_stats: [
//       { primary_value: "24/7", secondary_value: "Support" },
//       { primary_value: "100+", secondary_value: "Happy Clients" },
//       { primary_value: "15+", secondary_value: "Years" },
//       { primary_value: "98%", secondary_value: "Satisfaction" }
//     ]
//   };

//   const content = homePageData || defaultContent;
//   const faqItems = content.faq_items || defaultContent.faq_items;
//   const stats = content.faq_stats || defaultContent.faq_stats;

//   // Helper function to get accent color based on index
//   const getAccentColor = useCallback((index) => {
//     const accentColors = [
//       themeColors?.accent2 || '#008071',
//       themeColors?.accent1 || '#005B41',
//       themeColors?.primary || '#008071',
//       themeColors?.accent2 || '#008071',
//       themeColors?.accent1 || '#005B41',
//       themeColors?.primary || '#008071',
//     ];
//     return accentColors[index % accentColors.length];
//   }, [themeColors]);

//   const toggleTab = useCallback((index) => {
//     setActiveTab(activeTab === index ? null : index);
//   }, [activeTab]);

//   // Show loading state
//   if (loading || themeLoading) {
//     return (
//       <section className="py-20 lg:py-16 relative overflow-hidden bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-center items-center min-h-[400px]">
//             <div className="flex flex-col items-center gap-4">
//               <div className="relative">
//                 <div className="w-12 h-12 rounded-full border-2 border-gray-200 border-t-[#008071] animate-spin"></div>
//               </div>
//               <span className="text-sm text-gray-500">Loading FAQs...</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-20 lg:py-16 relative overflow-hidden bg-white">
//       {/* Subtle background pattern */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div 
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage: `
//               radial-gradient(circle, rgba(0, 128, 113, 0.3) 1px, transparent 1px)
//             `,
//             backgroundSize: '40px 40px',
//           }}
//         />
//       </div>

//       {/* Error message with retry button */}
//       {(themeError || error) && (
//         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-xl border border-red-200 text-gray-900 px-4 py-3 rounded-xl text-sm z-30 flex items-center gap-3">
//           <div className="flex items-center gap-2">
//             <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
//             <span className="font-medium">Error:</span>
//             <span className="text-gray-600">{themeError || error}</span>
//           </div>
//           <button 
//             onClick={() => {
//               refreshTheme();
//               refreshHomePage();
//             }}
//             className="ml-2 px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-colors hover:opacity-90"
//             style={{ backgroundColor: themeColors?.accent2 || '#008071' }}
//           >
//             Retry
//           </button>
//         </div>
//       )}

//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div 
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 border opacity-0 animate-fade-in-up"
//             style={{ 
//               backgroundColor: `${themeColors?.accent2 || '#008071'}08`,
//               borderColor: `${themeColors?.accent2 || '#008071'}20`,
//               color: themeColors?.accent2 || '#008071'
//             }}
//           >
//             <MessageCircle className="w-4 h-4" style={{ color: themeColors?.accent2 || '#008071' }} />
//             <span>{content.faq_badge}</span>
//           </div>
          
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 opacity-0 animate-fade-in-up stagger-1">
//             {formatTitle(content.faq_title)}
//           </h2>
          
//           <p className="text-gray-600 text-lg opacity-0 animate-fade-in-up stagger-2">
//             {content.faq_subtitle}
//           </p>
//         </div>

//         {/* FAQ Accordion */}
//         <div className="space-y-3">
//           {faqItems.map((faq, index) => {
//             const accentColor = getAccentColor(index);
//             const isActive = activeTab === index;
            
//             return (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 border hover:shadow-md opacity-0 animate-fade-in-scale"
//                 style={{ 
//                   animationDelay: `${0.2 + index * 0.1}s`,
//                   borderColor: isActive ? accentColor : '#E5E7EB',
//                   boxShadow: isActive ? `0 4px 20px ${accentColor}15` : 'none'
//                 }}
//               >
//                 <button
//                   onClick={() => toggleTab(index)}
//                   className="w-full px-6 py-5 text-left flex items-center justify-between relative"
//                 >
//                   <div className="flex items-center gap-4 flex-1">
//                     {/* Question number */}
//                     <div 
//                       className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
//                       style={{ 
//                         backgroundColor: isActive ? `${accentColor}15` : '#F3F4F6',
//                         color: isActive ? accentColor : '#9CA3AF'
//                       }}
//                     >
//                       <span className="text-sm font-bold">
//                         {String(index + 1).padStart(2, '0')}
//                       </span>
//                     </div>
                    
//                     {/* Question text */}
//                     <span className={`font-medium transition-all duration-300 text-left ${
//                       isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
//                     }`}>
//                       {faq.primary_value}
//                     </span>
//                   </div>
                  
//                   {/* Toggle icon */}
//                   <div 
//                     className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
//                       isActive ? 'rotate-180' : 'group-hover:bg-gray-50'
//                     }`}
//                     style={{ 
//                       backgroundColor: isActive ? `${accentColor}15` : 'transparent',
//                     }}
//                   >
//                     <ChevronDown 
//                       className="w-5 h-5 transition-all duration-300"
//                       style={{ color: isActive ? accentColor : '#9CA3AF' }}
//                     />
//                   </div>
//                 </button>
                
//                 {/* Answer */}
//                 <div
//                   className={`overflow-hidden transition-all duration-300 ease-out ${
//                     isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//                   }`}
//                 >
//                   <div className="px-6 pb-6 pl-20">
//                     <div 
//                       className="p-4 rounded-xl"
//                       style={{ backgroundColor: `${accentColor}05` }}
//                     >
//                       <p className="text-gray-600 text-sm leading-relaxed">
//                         {faq.secondary_value}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Active indicator */}
//                 {isActive && (
//                   <div 
//                     className="h-0.5 w-full"
//                     style={{ backgroundColor: `${accentColor}30` }}
//                   ></div>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Still have questions? */}
//         <div className="text-center mt-12 opacity-0 animate-fade-in-up stagger-3">
//           <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-1 rounded-2xl bg-gray-50 border border-gray-200">
//             <div className="flex items-center gap-2 px-4">
//               <HelpCircle className="w-4 h-4 text-gray-400" />
//               <span className="text-gray-600 text-sm">Still have questions?</span>
//             </div>
//             <a
//               href="/contact-us"
//               className="px-6 py-2.5 rounded-xl text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 transform flex items-center gap-2 group/link"
//               style={{ 
//                 backgroundColor: themeColors?.accent2 || '#008071',
//               }}
//             >
//               Contact Us
//               <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
//             </a>
//           </div>
//         </div>

//         {/* Quick Stats */}
//         {stats && stats.length > 0 && (
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
//             {stats.map((stat, index) => {
//               const statColor = index % 2 === 0 
//                 ? themeColors?.accent2 || '#008071'
//                 : themeColors?.accent1 || '#005B41';
              
//               return (
//                 <div 
//                   key={index}
//                   className="text-center p-6 rounded-xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 opacity-0 animate-fade-in-scale" 
//                   style={{ 
//                     animationDelay: `${0.5 + index * 0.1}s`,
//                   }}
//                 >
//                   <div 
//                     className="text-2xl lg:text-3xl font-bold mb-1 transition-all duration-300" 
//                     style={{ color: statColor }}
//                   >
//                     {stat.primary_value}
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     {stat.secondary_value}
//                   </div>
//                 </div>
//               );
//             })}
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
//       `}</style>
//     </section>
//   );
// };

// export default memo(FaqSection);









// FaqSection.jsx
import React, { useState, useCallback, memo } from 'react';
import { MessageCircle, ChevronRight, HelpCircle, ChevronDown } from 'lucide-react';
import { useHomePage } from '../../hooks/useHomePage';

const FaqSection = () => {
  const [activeTab, setActiveTab] = useState(null);
  
  // Hardcoded theme colors
  const themeColors = {
    primary: '#008071',
    accent1: '#005B41',
    accent2: '#008071',
  };
  
  const { homePageData, loading, error, refreshHomePage } = useHomePage();

  // Helper function to split title and color the last word
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

  // Default FAQ content
  const defaultContent = {
    faq_badge: "FAQs",
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Got questions? We've got answers.",
    faq_items: [
      { 
        primary_value: "What is your development process?",
        secondary_value: "We follow an agile methodology with regular sprints, continuous integration, and client feedback loops to ensure transparency and quality throughout the development cycle.",
        attachment: null
      },
      { 
        primary_value: "How do you ensure project security?",
        secondary_value: "We implement industry-best security practices, regular audits, and compliance with standards like ISO 27001, GDPR, and HIPAA where applicable.",
        attachment: null
      },
      { 
        primary_value: "What technologies do you specialize in?",
        secondary_value: "Our expertise spans React, Node.js, Python, Java, cloud platforms (AWS/Azure/GCP), AI/ML frameworks, and mobile development (React Native, Flutter).",
        attachment: null
      },
      { 
        primary_value: "Do you provide post-launch support?",
        secondary_value: "Yes, we offer comprehensive maintenance and support packages including 24/7 monitoring, regular updates, and priority issue resolution.",
        attachment: null
      }
    ],
    faq_stats: [
      { primary_value: "24/7", secondary_value: "Support" },
      { primary_value: "100+", secondary_value: "Happy Clients" },
      { primary_value: "15+", secondary_value: "Years" },
      { primary_value: "98%", secondary_value: "Satisfaction" }
    ]
  };

  const content = homePageData || defaultContent;
  const faqItems = content.faq_items || defaultContent.faq_items;
  const stats = content.faq_stats || defaultContent.faq_stats;

  // Helper function to get accent color based on index
  const getAccentColor = useCallback((index) => {
    const accentColors = [
      themeColors.accent2,
      themeColors.accent1,
      themeColors.primary,
      themeColors.accent2,
      themeColors.accent1,
      themeColors.primary,
    ];
    return accentColors[index % accentColors.length];
  }, []);

  const toggleTab = useCallback((index) => {
    setActiveTab(activeTab === index ? null : index);
  }, [activeTab]);

  // Show loading state
  if (loading) {
    return (
      <section className="py-20 lg:py-16 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-gray-200 border-t-[#008071] animate-spin"></div>
              </div>
              <span className="text-sm text-gray-500">Loading FAQs...</span>
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

      {/* Error message with retry button */}
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 border opacity-0 animate-fade-in-up"
            style={{ 
              backgroundColor: `${themeColors.accent2}08`,
              borderColor: `${themeColors.accent2}20`,
              color: themeColors.accent2
            }}
          >
            <MessageCircle className="w-4 h-4" style={{ color: themeColors.accent2 }} />
            <span>{content.faq_badge}</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 opacity-0 animate-fade-in-up stagger-1">
            {formatTitle(content.faq_title)}
          </h2>
          
          <p className="text-gray-600 text-lg opacity-0 animate-fade-in-up stagger-2">
            {content.faq_subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqItems.map((faq, index) => {
            const accentColor = getAccentColor(index);
            const isActive = activeTab === index;
            
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 border hover:shadow-md opacity-0 animate-fade-in-scale"
                style={{ 
                  animationDelay: `${0.2 + index * 0.1}s`,
                  borderColor: isActive ? accentColor : '#E5E7EB',
                  boxShadow: isActive ? `0 4px 20px ${accentColor}15` : 'none'
                }}
              >
                <button
                  onClick={() => toggleTab(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between relative"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Question number */}
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{ 
                        backgroundColor: isActive ? `${accentColor}15` : '#F3F4F6',
                        color: isActive ? accentColor : '#9CA3AF'
                      }}
                    >
                      <span className="text-sm font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    {/* Question text */}
                    <span className={`font-medium transition-all duration-300 text-left ${
                      isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
                    }`}>
                      {faq.primary_value}
                    </span>
                  </div>
                  
                  {/* Toggle icon */}
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isActive ? 'rotate-180' : 'group-hover:bg-gray-50'
                    }`}
                    style={{ 
                      backgroundColor: isActive ? `${accentColor}15` : 'transparent',
                    }}
                  >
                    <ChevronDown 
                      className="w-5 h-5 transition-all duration-300"
                      style={{ color: isActive ? accentColor : '#9CA3AF' }}
                    />
                  </div>
                </button>
                
                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pl-20">
                    <div 
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: `${accentColor}05` }}
                    >
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.secondary_value}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <div 
                    className="h-0.5 w-full"
                    style={{ backgroundColor: `${accentColor}30` }}
                  ></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="text-center mt-12 opacity-0 animate-fade-in-up stagger-3">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-1 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="flex items-center gap-2 px-4">
              <HelpCircle className="w-4 h-4 text-gray-400" />
              <span className="text-gray-600 text-sm">Still have questions?</span>
            </div>
            <a
              href="/contact-us"
              className="px-6 py-2.5 rounded-xl text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 transform flex items-center gap-2 group/link"
              style={{ 
                backgroundColor: themeColors.accent2,
              }}
            >
              Contact Us
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
            {stats.map((stat, index) => {
              const statColor = index % 2 === 0 
                ? themeColors.accent2
                : themeColors.accent1;
              
              return (
                <div 
                  key={index}
                  className="text-center p-6 rounded-xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 opacity-0 animate-fade-in-scale" 
                  style={{ 
                    animationDelay: `${0.5 + index * 0.1}s`,
                  }}
                >
                  <div 
                    className="text-2xl lg:text-3xl font-bold mb-1 transition-all duration-300" 
                    style={{ color: statColor }}
                  >
                    {stat.primary_value}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.secondary_value}
                  </div>
                </div>
              );
            })}
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
      `}</style>
    </section>
  );
};

export default memo(FaqSection);
