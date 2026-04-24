
// // FaqSection.jsx
// import React, { useState, useEffect } from 'react';
// import { MessageCircle, ChevronRight, HelpCircle } from 'lucide-react';
// import { useTheme } from '../../hooks/useTheme';

// const FaqSection = () => {
//   const [activeTab, setActiveTab] = useState(null);
//   const [homePageData, setHomePageData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // Use theme hook
//   const { colors: themeColors, loading: themeLoading, error: themeError, refreshTheme } = useTheme();

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
//       setError('Failed to load FAQ content');
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

//   // Default FAQ content in case data is not available
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
//   const getAccentColor = (index) => {
//     const accentColors = [
//       themeColors.accent2,
//       themeColors.accent1,
//       themeColors.primary,
//       themeColors.accent2,
//       themeColors.accent1,
//       themeColors.primary,
//     ];
//     return accentColors[index % accentColors.length];
//   };

//   // Show loading state
//   if (loading || themeLoading) {
//     return (
//       <section className="py-20 lg:py-28 bg-gray-900">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-center items-center min-h-[400px]">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section 
//       className="py-20 lg:py-28 relative overflow-hidden"
//       style={{ 
//         background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 50%, ${themeColors.accent1} 100%)`
//       }}
//     >
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

//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div 
//           className="absolute top-0 left-0 w-full h-full"
//           style={{
//             backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
//             backgroundSize: '40px 40px'
//           }}
//         />
//       </div>

//       {/* Decorative Elements - Using theme colors */}
//       <div className="absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-float"
//         style={{ background: themeColors.accent2, opacity: 0.15 }}
//       ></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-float animation-delay-2000"
//         style={{ background: themeColors.accent1, opacity: 0.15 }}
//       ></div>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
//         style={{ background: themeColors.primary, opacity: 0.1 }}
//       ></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div 
//             className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 border"
//             style={{ 
//               background: `${themeColors.accent2}20`,
//               borderColor: `${themeColors.accent2}40`
//             }}
//           >
//             <MessageCircle className="w-4 h-4" style={{ color: themeColors.accent2 }} />
//             <span className="text-white">{content.faq_badge}</span>
//           </div>
//           <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
//             {formatTitle(content.faq_title)}
//           </h2>
//           <p className="text-white/80 text-lg">
//             {content.faq_subtitle}
//           </p>
//         </div>

//         {/* FAQ Accordion */}
//         <div className="space-y-4">
//           {faqItems.map((faq, index) => {
//             const accentColor = getAccentColor(index);
//             return (
//               <div
//                 key={index}
//                 className="group backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl border transform hover:-translate-y-1"
//                 style={{ 
//                   background: `linear-gradient(135deg, ${themeColors.primary}80, ${themeColors.secondary}80)`,
//                   borderColor: activeTab === index ? accentColor : `${themeColors.accent2}30`,
//                   boxShadow: activeTab === index ? `0 10px 30px -10px ${accentColor}` : 'none'
//                 }}
//               >
//                 <button
//                   onClick={() => setActiveTab(activeTab === index ? null : index)}
//                   className="w-full px-6 py-4 text-left flex items-center justify-between group relative"
//                 >
//                   <div className="flex items-center gap-3 flex-1">
//                     <div className="relative">
//                       <HelpCircle 
//                         className="w-5 h-5 transition-all duration-300 group-hover:scale-110" 
//                         style={{ 
//                           color: activeTab === index ? accentColor : 'rgba(255, 255, 255, 0.5)',
//                         }}
//                       />
//                       {activeTab === index && (
//                         <span 
//                           className="absolute inset-0 animate-ping rounded-full opacity-50"
//                           style={{ backgroundColor: accentColor }}
//                         ></span>
//                       )}
//                     </div>
//                     <span className="text-white font-medium group-hover:text-white transition-colors text-left">
//                       {faq.primary_value}
//                     </span>
//                   </div>
                  
//                   {/* Question Number */}
//                   <span 
//                     className="absolute left-0 top-0 text-6xl font-bold opacity-5 -z-0"
//                     style={{ color: accentColor }}
//                   >
//                     {String(index + 1).padStart(2, '0')}
//                   </span>
                  
//                   <ChevronRight
//                     className={`w-5 h-5 transition-all duration-300 ${
//                       activeTab === index ? 'rotate-90' : ''
//                     }`}
//                     style={{ color: accentColor }}
//                   />
//                 </button>
                
//                 <div
//                   className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
//                     activeTab === index ? 'pb-6 max-h-40' : 'max-h-0'
//                   }`}
//                 >
//                   <div className="pl-8 border-l-2 ml-8" style={{ borderColor: `${accentColor}40` }}>
//                     <p className="text-white/70 text-sm leading-relaxed animate-fadeIn">
//                       {faq.secondary_value}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Bottom gradient line */}
//                 <div 
//                   className="h-0.5 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
//                   style={{ 
//                     background: `linear-gradient(90deg, ${accentColor}, ${themeColors.accent2}, transparent)`,
//                   }}
//                 ></div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Still have questions? */}
//         <div className="text-center mt-12">
//           <div 
//             className="inline-flex flex-col sm:flex-row items-center gap-4 p-1 rounded-2xl backdrop-blur-sm border"
//             style={{ 
//               background: `${themeColors.primary}60`,
//               borderColor: `${themeColors.accent2}40`
//             }}
//           >
//             <span className="text-white/70 text-sm px-4">Still have questions?</span>
//             <a
//               href="/contact-us"
//               className="px-6 py-2 rounded-xl text-white text-sm font-medium transition-all hover:shadow-lg hover:scale-105 transform flex items-center gap-2 group"
//               style={{ 
//                 background: `linear-gradient(135deg, ${themeColors.accent2}, ${themeColors.accent1})`,
//               }}
//             >
//               Contact Us
//               <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </a>
//           </div>
//         </div>

//         {/* Quick Stats */}
//         {stats && stats.length > 0 && (
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
//             {stats.map((stat, index) => (
//               <div 
//                 key={index}
//                 className="text-center p-4 rounded-lg backdrop-blur-sm border" 
//                 style={{ 
//                   background: `${themeColors.primary}40`, 
//                   borderColor: index % 2 === 0 ? `${themeColors.accent2}20` : `${themeColors.accent1}20`
//                 }}
//               >
//                 <div 
//                   className="text-2xl font-bold mb-1" 
//                   style={{ color: index % 2 === 0 ? themeColors.accent2 : themeColors.accent1 }}
//                 >
//                   {stat.primary_value}
//                 </div>
//                 <div className="text-xs text-white/60">{stat.secondary_value}</div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -30px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 0.15; }
//           50% { opacity: 0.25; }
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-float {
//           animation: float 7s infinite;
//         }
//         .animate-pulse {
//           animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-out;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FaqSection;























// FaqSection.jsx
import React, { useState } from 'react';
import { MessageCircle, ChevronRight, HelpCircle } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useHomePage } from '../../hooks/useHomePage';

const FaqSection = () => {
  const [activeTab, setActiveTab] = useState(null);
  
  // Use theme hook
  const { colors: themeColors, loading: themeLoading, error: themeError, refreshTheme } = useTheme();
  const { homePageData, loading, error, refreshHomePage } = useHomePage();

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

  // Default FAQ content in case data is not available
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
  const getAccentColor = (index) => {
    const accentColors = [
      themeColors.accent2,
      themeColors.accent1,
      themeColors.primary,
      themeColors.accent2,
      themeColors.accent1,
      themeColors.primary,
    ];
    return accentColors[index % accentColors.length];
  };

  // Show loading state
  if (loading || themeLoading) {
    return (
      <section className="py-20 lg:py-28 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 50%, ${themeColors.accent1} 100%)`
      }}
    >
      {/* Error message with retry button */}
      {(themeError || error) && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm z-30 flex items-center gap-3">
          <span>Failed to load: {themeError || error}</span>
          <button 
            onClick={() => {
              refreshTheme();
              refreshHomePage();
            }}
            className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs transition-colors"
          >
            Retry
          </button>
        </div>
      )}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Decorative Elements - Using theme colors */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-float"
        style={{ background: themeColors.accent2, opacity: 0.15 }}
      ></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-float animation-delay-2000"
        style={{ background: themeColors.accent1, opacity: 0.15 }}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-float animation-delay-4000"
        style={{ background: themeColors.primary, opacity: 0.1 }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 border opacity-0 animate-fade-in-up"
            style={{ 
              background: `${themeColors.accent2}20`,
              borderColor: `${themeColors.accent2}40`
            }}
          >
            <MessageCircle className="w-4 h-4" style={{ color: themeColors.accent2 }} />
            <span className="text-white">{content.faq_badge}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 opacity-0 animate-fade-in-up stagger-1">
            {formatTitle(content.faq_title)}
          </h2>
          <p className="text-white/80 text-lg opacity-0 animate-fade-in-up stagger-2">
            {content.faq_subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqItems.map((faq, index) => {
            const accentColor = getAccentColor(index);
            return (
              <div
                key={index}
                className="group backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 ease-out hover:shadow-xl border transform hover:-translate-y-1 opacity-0 animate-fade-in-scale"
                style={{ 
                  animationDelay: `${0.2 + index * 0.1}s`,
                  background: `linear-gradient(135deg, ${themeColors.primary}80, ${themeColors.secondary}80)`,
                  borderColor: activeTab === index ? accentColor : `${themeColors.accent2}30`,
                  boxShadow: activeTab === index ? `0 10px 30px -10px ${accentColor}` : 'none'
                }}
              >
                <button
                  onClick={() => setActiveTab(activeTab === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between group/btn relative"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="relative">
                      <HelpCircle 
                        className="w-5 h-5 transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:rotate-12" 
                        style={{ 
                          color: activeTab === index ? accentColor : 'rgba(255, 255, 255, 0.5)',
                        }}
                      />
                      {activeTab === index && (
                        <span 
                          className="absolute inset-0 animate-ping rounded-full opacity-50"
                          style={{ backgroundColor: accentColor }}
                        ></span>
                      )}
                    </div>
                    <span className="text-white font-medium transition-all duration-300 group-hover/btn:text-white group-hover/btn:translate-x-1 text-left">
                      {faq.primary_value}
                    </span>
                  </div>
                  
                  {/* Question Number */}
                  <span 
                    className="absolute left-0 top-0 text-6xl font-bold opacity-5 -z-0 transition-opacity duration-300 group-hover/btn:opacity-10"
                    style={{ color: accentColor }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  <ChevronRight
                    className={`w-5 h-5 transition-all duration-500 ease-out ${
                      activeTab === index ? 'rotate-90 scale-110' : 'group-hover/btn:translate-x-1'
                    }`}
                    style={{ color: accentColor }}
                  />
                </button>
                
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ease-out ${
                    activeTab === index ? 'pb-6 max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-8 border-l-2 ml-8" style={{ borderColor: `${accentColor}40` }}>
                    <p className="text-white/70 text-sm leading-relaxed animate-fadeIn">
                      {faq.secondary_value}
                    </p>
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div 
                  className="h-0.5 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
                  style={{ 
                    background: `linear-gradient(90deg, ${accentColor}, ${themeColors.accent2}, transparent)`,
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="text-center mt-12 opacity-0 animate-fade-in-up stagger-3">
          <div 
            className="inline-flex flex-col sm:flex-row items-center gap-4 p-1 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105"
            style={{ 
              background: `${themeColors.primary}60`,
              borderColor: `${themeColors.accent2}40`
            }}
          >
            <span className="text-white/70 text-sm px-4">Still have questions?</span>
            <a
              href="/contact-us"
              className="px-6 py-2 rounded-xl text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 transform flex items-center gap-2 group/link"
              style={{ 
                background: `linear-gradient(135deg, ${themeColors.accent2}, ${themeColors.accent1})`,
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
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg opacity-0 animate-fade-in-scale" 
                style={{ 
                  animationDelay: `${0.5 + index * 0.1}s`,
                  background: `${themeColors.primary}40`, 
                  borderColor: index % 2 === 0 ? `${themeColors.accent2}20` : `${themeColors.accent1}20`
                }}
              >
                <div 
                  className="text-2xl font-bold mb-1 transition-all duration-300 group-hover:scale-110" 
                  style={{ color: index % 2 === 0 ? themeColors.accent2 : themeColors.accent1 }}
                >
                  {stat.primary_value}
                </div>
                <div className="text-xs text-white/60 transition-colors duration-300 group-hover:text-white/80">{stat.secondary_value}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
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
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-float {
          animation: float 7s infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
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

export default FaqSection;













