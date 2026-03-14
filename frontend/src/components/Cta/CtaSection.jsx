// // CtaSection.jsx
// import React from "react";
// import {
//   ArrowRight,
//   MessageCircle,
//   Phone,
//   Mail,
//   MapPin,
//   Sparkles,
// } from "lucide-react";
// import { useTheme } from "../../hooks/useTheme";

// const CtaSection = () => {
//   // Use theme hook
//   const { colors: themeColors, loading, error, refreshTheme } = useTheme();

//   // Show loading state
//   if (loading) {
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
//         background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 50%, ${themeColors.accent1} 100%)`,
//       }}
//     >
//       {/* Error message with retry button */}
//       {error && (
//         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm z-30 flex items-center gap-3">
//           <span>Theme load failed: {error}</span>
//           <button
//             onClick={refreshTheme}
//             className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs transition-colors"
//           >
//             Retry
//           </button>
//         </div>
//       )}

//       {/* Animated Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div
//           className="absolute inset-0 animate-pulse"
//           style={{
//             backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
//             backgroundSize: "50px 50px",
//           }}
//         />
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//         <div
//           className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-overlay filter blur-3xl animate-blob"
//           style={{ background: themeColors.accent2, opacity: 0.3 }}
//         ></div>
//         <div
//           className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"
//           style={{ background: themeColors.accent1, opacity: 0.3 }}
//         ></div>
//         <div
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
//           style={{ background: themeColors.primary, opacity: 0.2 }}
//         ></div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute top-20 left-10 opacity-20 animate-float">
//         <Sparkles className="w-8 h-8" style={{ color: themeColors.accent2 }} />
//       </div>
//       <div className="absolute bottom-20 right-10 opacity-20 animate-float animation-delay-1000">
//         <Sparkles className="w-8 h-8" style={{ color: themeColors.accent1 }} />
//       </div>

//       {/* Floating Particles */}
//       {[...Array(6)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-1 h-1 rounded-full animate-ping"
//           style={{
//             backgroundColor:
//               i % 2 === 0 ? themeColors.accent2 : themeColors.accent1,
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${i * 0.5}s`,
//             opacity: 0.2,
//           }}
//         />
//       ))}

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//         {/* Main Heading */}
//         <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
//           Ready to{" "}
//           <span
//             className="relative inline-block group"
//             style={{ color: themeColors.accent2 }}
//           >
//             Transform
//             <span
//               className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
//               style={{
//                 background: `linear-gradient(90deg, ${themeColors.accent2}, ${themeColors.accent1})`,
//               }}
//             ></span>
//           </span>{" "}
//           Your Business?
//         </h2>

//         <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
//           Let's discuss how our software solutions can help you achieve your
//           goals and drive growth in the digital age.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-wrap gap-4 justify-center">
//           <a
//             href="#contact"
//             className="group px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2 relative overflow-hidden"
//             style={{
//               background: `linear-gradient(135deg, ${themeColors.accent2}, ${themeColors.accent1})`,
//               color: "white",
//             }}
//           >
//             <span className="relative z-10">Get Started Today</span>
//             <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
//             <div
//               className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
//               style={{ background: "white" }}
//             ></div>
//           </a>

//           <a
//             href="#contact"
//             className="group px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 border-2 hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden"
//             style={{
//               borderColor: themeColors.accent2,
//               color: themeColors.accent2,
//               backgroundColor: "transparent",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = themeColors.accent2;
//               e.currentTarget.style.color = "white";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = "transparent";
//               e.currentTarget.style.color = themeColors.accent2;
//             }}
//           >
//             <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
//             Schedule Consultation
//           </a>
//         </div>

//         {/* Stats Mini */}
//         <div className="flex justify-center gap-8 mt-8">
//           <div className="text-center group">
//             <div
//               className="text-2xl font-bold transition-all group-hover:scale-110"
//               style={{ color: themeColors.accent2 }}
//             >
//               24/7
//             </div>
//             <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
//               Support
//             </div>
//           </div>
//           <div
//             className="w-px h-8"
//             style={{
//               background: `linear-gradient(to bottom, transparent, ${themeColors.accent2}, transparent)`,
//             }}
//           ></div>
//           <div className="text-center group">
//             <div
//               className="text-2xl font-bold transition-all group-hover:scale-110"
//               style={{ color: themeColors.accent1 }}
//             >
//               48h
//             </div>
//             <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
//               Response Time
//             </div>
//           </div>
//           <div
//             className="w-px h-8"
//             style={{
//               background: `linear-gradient(to bottom, transparent, ${themeColors.accent1}, transparent)`,
//             }}
//           ></div>
//           <div className="text-center group">
//             <div
//               className="text-2xl font-bold transition-all group-hover:scale-110"
//               style={{ color: themeColors.accent2 }}
//             >
//               100%
//             </div>
//             <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
//               Satisfaction
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blob {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }
//         @keyframes pulse {
//           0%,
//           100% {
//             opacity: 0.2;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.3;
//             transform: scale(1.1);
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-pulse {
//           animation: pulse 3s ease-in-out infinite;
//         }
//         .animate-ping {
//           animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
//         }
//         @keyframes ping {
//           75%,
//           100% {
//             transform: scale(2);
//             opacity: 0;
//           }
//         }
//         .animation-delay-1000 {
//           animation-delay: 1s;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default CtaSection;






















// CtaSection.jsx
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

const CtaSection = () => {
  const [homePageData, setHomePageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Use theme hook
  const { colors: themeColors, loading: themeLoading, error: themeError, refreshTheme } = useTheme();

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
      setError('Failed to load CTA content');
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

  // Default CTA content in case data is not available
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
        background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 50%, ${themeColors.accent1} 100%)`,
      }}
    >
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
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-overlay filter blur-3xl animate-blob"
          style={{ background: themeColors.accent2, opacity: 0.3 }}
        ></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"
          style={{ background: themeColors.accent1, opacity: 0.3 }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
          style={{ background: themeColors.primary, opacity: 0.2 }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <Sparkles className="w-8 h-8" style={{ color: themeColors.accent2 }} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 animate-float animation-delay-1000">
        <Sparkles className="w-8 h-8" style={{ color: themeColors.accent1 }} />
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full animate-ping"
          style={{
            backgroundColor:
              i % 2 === 0 ? themeColors.accent2 : themeColors.accent1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            opacity: 0.2,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Heading with colored last word */}
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          {formatTitle(content.cta_title)}
        </h2>

        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          {content.cta_subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          {content.cta_primary_button_title && (
            <a
              href={content.cta_primary_button_action || "#contact"}
              className="group px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${themeColors.accent2}, ${themeColors.accent1})`,
                color: "white",
              }}
            >
              <span className="relative z-10">{content.cta_primary_button_title}</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ background: "white" }}
              ></div>
            </a>
          )}

          {content.cta_secondary_button_title && (
            <a
              href={content.cta_secondary_button_action || "#contact"}
              className="group px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 border-2 hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden"
              style={{
                borderColor: themeColors.accent2,
                color: themeColors.accent2,
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = themeColors.accent2;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = themeColors.accent2;
              }}
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              {content.cta_secondary_button_title}
            </a>
          )}
        </div>

        {/* Dynamic Stats from the stats table */}
        {content.stats && content.stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {content.stats.map((stat, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <div
                    className="hidden sm:block w-px h-8"
                    style={{
                      background: `linear-gradient(to bottom, transparent, ${
                        index % 2 === 0 ? themeColors.accent2 : themeColors.accent1
                      }, transparent)`,
                    }}
                  ></div>
                )}
                <div className="text-center group">
                  <div
                    className="text-2xl font-bold transition-all group-hover:scale-110"
                    style={{ color: index % 2 === 0 ? themeColors.accent2 : themeColors.accent1 }}
                  >
                    {stat.primary_value}
                  </div>
                  <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
                    {stat.secondary_value}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        .animate-ping {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default CtaSection;