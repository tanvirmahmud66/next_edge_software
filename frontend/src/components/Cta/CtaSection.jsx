


// // CtaSection.jsx
// import React from "react";
// import {
//   ArrowRight,
//   MessageCircle,
// } from "lucide-react";
// import { useTheme } from "../../hooks/useTheme";
// import { useHomePage } from "../../hooks/useHomePage";

// const CtaSection = () => {
//   // Use theme hook
//   const { colors: themeColors, loading: themeLoading, error: themeError, refreshTheme } = useTheme();
//   const { homePageData, loading, error, refreshHomePage } = useHomePage();

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

//   // Default CTA content in case data is not available
//   const defaultContent = {
//     cta_title: "Ready to Transform Your Business?",
//     cta_subtitle: "Let's discuss how our software solutions can help you achieve your goals and drive growth in the digital age.",
//     cta_primary_button_title: "Get Started Today",
//     cta_primary_button_action: "/contact",
//     cta_secondary_button_title: "Schedule Consultation",
//     cta_secondary_button_action: "/contact",
//     stats: [
//       { primary_value: "24/7", secondary_value: "Support" },
//       { primary_value: "48h", secondary_value: "Response Time" },
//       { primary_value: "100%", secondary_value: "Satisfaction" }
//     ]
//   };

//   const content = homePageData || defaultContent;

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
//     <section className="py-20 lg:py-16 relative overflow-hidden">
//       {/* ====== PREMIUM MODERN BACKGROUND (SAME AS SHOWCASE GRID) ====== */}
//       <div className="absolute inset-0 bg-[#030712]">
//         {/* Layer 1: Noise Texture Overlay */}
//         <div
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//             backgroundRepeat: "repeat",
//             backgroundSize: "200px 200px",
//           }}
//         />
//         {/* Layer 2: Main Grid Lines (80px) */}
//         <div className="absolute inset-0">
//           <div
//             className="absolute inset-0 animate-grid-primary"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
//               backgroundSize: "100px 100px",
//             }}
//           />
//         </div>
//         {/* Layer 3: Fine Grid (20px) */}
//         <div className="absolute inset-0">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
//               backgroundSize: "25px 25px",
//             }}
//           />
//         </div>
//         <div
//           className="absolute animate-orb-2"
//           style={{
//             bottom: "-15%",
//             left: "-5%",
//             width: "700px",
//             height: "700px",
//             borderRadius: "50%",
//             background:
//               "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 25%, rgba(139, 92, 246, 0.01) 50%, transparent 70%)",
//             filter: "blur(100px)",
//           }}
//         />
//         <div
//           className="absolute animate-orb-3"
//           style={{
//             top: "40%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: "500px",
//             height: "500px",
//             borderRadius: "50%",
//             background:
//               "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.02) 30%, transparent 70%)",
//             filter: "blur(120px)",
//           }}
//         />
//         {/* Edge Vignette */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(ellipse at center, transparent 50%, rgba(3, 7, 18, 0.6) 100%)",
//           }}
//         />
//       </div>
//       {/* ====== END BACKGROUND ====== */}

//       {/* Error message with retry button */}
//       {(themeError || error) && (
//         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm z-30 flex items-center gap-3">
//           <span>Failed to load: {themeError || error}</span>
//           <button
//             onClick={() => {
//               refreshTheme();
//               refreshHomePage();
//             }}
//             className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs transition-colors"
//           >
//             Retry
//           </button>
//         </div>
//       )}

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//         {/* Main Heading with colored last word */}
//         <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 opacity-0 animate-fade-in-up">
//           {formatTitle(content.cta_title)}
//         </h2>

//         <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up stagger-1">
//           {content.cta_subtitle}
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-wrap gap-4 justify-center opacity-0 animate-fade-in-up stagger-2">
//           {content.cta_primary_button_title && (
//             <a
//               href={content.cta_primary_button_action || "#contact"}
//               className="group px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2 relative overflow-hidden"
//               style={{
//                 background: `linear-gradient(135deg, ${themeColors.accent2}, ${themeColors.accent1})`,
//                 color: "white",
//               }}
//             >
//               <span className="relative z-10">{content.cta_primary_button_title}</span>
//               <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
//               <div
//                 className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
//                 style={{ background: "white" }}
//               ></div>
//             </a>
//           )}

//           {content.cta_secondary_button_title && (
//             <a
//               href={content.cta_secondary_button_action || "#contact"}
//               className="group px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 border-2 hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden"
//               style={{
//                 borderColor: themeColors.accent2,
//                 color: themeColors.accent2,
//                 backgroundColor: "transparent",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = themeColors.accent2;
//                 e.currentTarget.style.color = "white";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = "transparent";
//                 e.currentTarget.style.color = themeColors.accent2;
//               }}
//             >
//               <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
//               {content.cta_secondary_button_title}
//             </a>
//           )}
//         </div>

//         {/* Dynamic Stats from the stats table */}
//         {content.stats && content.stats.length > 0 && (
//           <div className="flex flex-wrap justify-center gap-8 mt-8 opacity-0 animate-fade-in-up stagger-3">
//             {content.stats.map((stat, index) => (
//               <React.Fragment key={index}>
//                 {index > 0 && (
//                   <div
//                     className="hidden sm:block w-px h-8 transition-all duration-300 hover:h-10"
//                     style={{
//                       background: `linear-gradient(to bottom, transparent, ${
//                         index % 2 === 0 ? themeColors.accent2 : themeColors.accent1
//                       }, transparent)`,
//                     }}
//                   ></div>
//                 )}
//                 <div className="text-center group transition-all duration-300 hover:scale-110">
//                   <div
//                     className="text-2xl font-bold transition-all duration-300 group-hover:scale-110"
//                     style={{ color: index % 2 === 0 ? themeColors.accent2 : themeColors.accent1 }}
//                   >
//                     {stat.primary_value}
//                   </div>
//                   <div className="text-xs text-white/60 transition-colors duration-300 group-hover:text-white/80">
//                     {stat.secondary_value}
//                   </div>
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>
//         )}
//       </div>

//       <style jsx>{`
//         @keyframes gridPrimaryFade {
//           0%, 100% { opacity: 0.15; }
//           50% { opacity: 0.3; }
//         }
        
//         @keyframes dotsFade {
//           0%, 100% { opacity: 0.02; }
//           50% { opacity: 0.04; }
//         }
        
//         @keyframes floatOrb1 {
//           0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
//           25% { transform: translate(50px, -30px) scale(1.1); opacity: 0.9; }
//           50% { transform: translate(-20px, -60px) scale(0.95); opacity: 0.6; }
//           75% { transform: translate(-40px, -10px) scale(1.05); opacity: 0.8; }
//         }
        
//         @keyframes floatOrb2 {
//           0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
//           25% { transform: translate(-40px, 30px) scale(1.08); opacity: 0.85; }
//           50% { transform: translate(20px, 50px) scale(0.92); opacity: 0.6; }
//           75% { transform: translate(30px, -20px) scale(1.06); opacity: 0.8; }
//         }

//         @keyframes floatOrb3 {
//           0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
//           50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.9; }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-grid-primary {
//           animation: gridPrimaryFade 5s ease-in-out infinite;
//         }

//         .animate-dots {
//           animation: dotsFade 6s ease-in-out infinite;
//         }

//         .animate-orb-1 {
//           animation: floatOrb1 15s ease-in-out infinite;
//         }

//         .animate-orb-2 {
//           animation: floatOrb2 18s ease-in-out infinite;
//         }

//         .animate-orb-3 {
//           animation: floatOrb3 12s ease-in-out infinite;
//         }

//         .animate-fade-in-up {
//           animation: fadeInUp 0.8s ease-out forwards;
//         }
        
//         .stagger-1 { animation-delay: 0.1s; }
//         .stagger-2 { animation-delay: 0.3s; }
//         .stagger-3 { animation-delay: 0.5s; }
//       `}</style>
//     </section>
//   );
// };

// export default CtaSection;



























// CtaSection.jsx
import React, { memo, useCallback } from "react";
import {
  ArrowRight,
  MessageCircle,
  Star,
  Shield,
  Zap
} from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { useHomePage } from "../../hooks/useHomePage";

const CtaSection = () => {
  // Use theme hook
  const { colors: themeColors, loading: themeLoading, error: themeError, refreshTheme } = useTheme();
  const { homePageData, loading, error, refreshHomePage } = useHomePage();

  // Icon mapping for stats
  const statIcons = {
    0: <Star className="w-4 h-4" />,
    1: <Shield className="w-4 h-4" />,
    2: <Zap className="w-4 h-4" />,
  };

  // Helper function to split title and color the last word
  const formatTitle = useCallback((title) => {
    if (!title) return null;
    
    const words = title.trim().split(' ');
    if (words.length === 1) {
      return (
        <span className="relative inline-block" style={{ color: themeColors?.accent2 || '#008071' }}>
          {words[0]}
          <span
            className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
            style={{ 
              backgroundColor: themeColors?.accent2 || '#008071',
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
        <span className="relative inline-block" style={{ color: themeColors?.accent2 || '#008071' }}>
          {lastWord}
          <span
            className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
            style={{ 
              backgroundColor: themeColors?.accent2 || '#008071',
              opacity: 0.3
            }}
          ></span>
        </span>
      </>
    );
  }, [themeColors?.accent2]);

  // Default CTA content
  const defaultContent = {
    cta_title: "Ready to Transform Your Business?",
    cta_subtitle: "Let's discuss how our software solutions can help you achieve your goals and drive growth in the digital age.",
    cta_primary_button_title: "Get Started Today",
    cta_primary_button_action: "/contact",
    cta_secondary_button_title: "Schedule Consultation",
    cta_secondary_button_action: "/contact",
    stats: [
      { primary_value: "24/7", secondary_value: "Support" },
      { primary_value: "48h", secondary_value: "Response Time" },
      { primary_value: "100%", secondary_value: "Satisfaction" }
    ]
  };

  const content = homePageData || defaultContent;
  const primaryColor = themeColors?.accent2 || '#008071';
  const secondaryColor = themeColors?.accent1 || '#005B41';

  // Show loading state
  if (loading || themeLoading) {
    return (
      <section className="py-20 lg:py-16 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-gray-200 border-t-[#008071] animate-spin"></div>
              </div>
              <span className="text-sm text-gray-500">Loading...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-16 relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(0, 128, 113, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />
        
        {/* Subtle circles */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-[0.03]" style={{ backgroundColor: primaryColor }}></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full opacity-[0.03]" style={{ backgroundColor: secondaryColor }}></div>
      </div>

      {/* Error message with retry button */}
      {(themeError || error) && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-xl border border-red-200 text-gray-900 px-4 py-3 rounded-xl text-sm z-30 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Error:</span>
            <span className="text-gray-600">{themeError || error}</span>
          </div>
          <button
            onClick={() => {
              refreshTheme();
              refreshHomePage();
            }}
            className="ml-2 px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: primaryColor }}
          >
            Retry
          </button>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Heading with colored last word */}
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight opacity-0 animate-fade-in-up">
          {formatTitle(content.cta_title)}
        </h2>

        <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up stagger-1">
          {content.cta_subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center opacity-0 animate-fade-in-up stagger-2">
          {content.cta_primary_button_title && (
            <a
              href={content.cta_primary_button_action || "#contact"}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 text-white"
              style={{ backgroundColor: primaryColor }}
            >
              <span>{content.cta_primary_button_title}</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          )}

          {content.cta_secondary_button_title && (
            <a
              href={content.cta_secondary_button_action || "#contact"}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 hover:shadow-lg transform hover:-translate-y-1"
              style={{
                borderColor: primaryColor,
                color: primaryColor,
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = primaryColor;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = primaryColor;
              }}
            >
              <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              {content.cta_secondary_button_title}
            </a>
          )}
        </div>

        {/* Dynamic Stats from the stats table */}
        {content.stats && content.stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-12 opacity-0 animate-fade-in-up stagger-3">
            {content.stats.map((stat, index) => {
              const statColor = index % 2 === 0 ? primaryColor : secondaryColor;
              
              return (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <div className="hidden sm:block w-px h-12 bg-gray-200 self-center"></div>
                  )}
                  <div className="flex items-center gap-3 group transition-all duration-300 hover:scale-105">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${statColor}10` }}
                    >
                      <span style={{ color: statColor }}>
                        {statIcons[index] || <Star className="w-4 h-4" />}
                      </span>
                    </div>
                    <div className="text-left">
                      <div
                        className="text-xl lg:text-2xl font-bold transition-all duration-300"
                        style={{ color: statColor }}
                      >
                        {stat.primary_value}
                      </div>
                      <div className="text-sm text-gray-500">
                        {stat.secondary_value}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        )}

        {/* Trust badge */}
        <div className="mt-12 inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 rounded-full border border-gray-200 opacity-0 animate-fade-in-up stagger-3">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i}
                className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold"
                style={{ 
                  backgroundColor: i % 2 === 0 ? primaryColor : secondaryColor,
                  color: 'white'
                }}
              >
                {i}
              </div>
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            Trusted by <span className="font-semibold text-gray-900">500+</span> companies
          </span>
        </div>
      </div>

      <style>{`
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

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.25s; }
        .stagger-3 { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
};

export default memo(CtaSection);






