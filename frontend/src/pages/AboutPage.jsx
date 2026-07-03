// // AboutPage.jsx
// import React, { useState, useEffect, memo, useCallback } from "react";
// import {
//   Users,
//   Target,
//   Award,
//   Heart,
//   Globe,
//   Rocket,
//   Code,
//   BookOpen,
//   Briefcase,
//   Star,
//   Zap,
//   TrendingUp,
//   ChevronRight,
//   Quote,
//   Linkedin,
//   Twitter,
//   Github,
//   Eye,
//   Compass,
// } from "lucide-react";
// import { useTheme } from "../hooks/useTheme";

// const AboutPage = () => {
//   // Use theme hook
//   const { colors, loading: themeLoading, error: themeError, refreshTheme } = useTheme();

//   // State for about page data
//   const [aboutData, setAboutData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isVisible, setIsVisible] = useState({});

//   const primaryColor = colors?.accent2 || '#008071';
//   const secondaryColor = colors?.accent1 || '#005B41';

//   // Fetch about page data
//   useEffect(() => {
//     fetchAboutPageData();
//   }, []);

//   // Intersection Observer for scroll animations
//   useEffect(() => {
//     const sections = document.querySelectorAll("[data-section]");
    
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const key = entry.target.getAttribute("data-section");
//             setIsVisible((prev) => ({ ...prev, [key]: true }));
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     sections.forEach((section) => observer.observe(section));
//     return () => sections.forEach((section) => observer.unobserve(section));
//   }, [aboutData]);

//   const fetchAboutPageData = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch("/api/resource/About%20Page/About%20Page", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//       });

//       if (!response.ok) {
//         if (response.status === 403) {
//           const publicResponse = await fetch(
//             "/api/resource/About%20Page/About%20Page?run_method=1",
//             {
//               method: "GET",
//               headers: { "Content-Type": "application/json" },
//             }
//           );
//           if (!publicResponse.ok) throw new Error("Failed to fetch about page data");
//           const publicData = await publicResponse.json();
//           if (publicData.data) setAboutData(publicData.data);
//         } else {
//           throw new Error("Failed to fetch about page data");
//         }
//       } else {
//         const data = await response.json();
//         if (data.data) setAboutData(data.data);
//       }
//       setError(null);
//     } catch (err) {
//       console.error("Error fetching about page:", err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Helper: color last word
//   const formatTitle = useCallback((title) => {
//     if (!title) return null;
//     const words = title.split(" ");
//     if (words.length === 1)
//       return <span style={{ color: primaryColor }}>{title}</span>;
//     const lastWord = words.pop();
//     const firstPart = words.join(" ");
//     return (
//       <>
//         {firstPart}{" "}
//         <span style={{ color: primaryColor }}>{lastWord}</span>
//       </>
//     );
//   }, [primaryColor]);

//   // Fallback values
//   const fallbackValues = [
//     {
//       icon: <Target className="w-8 h-8" />,
//       title: "Innovation First",
//       description: "We push boundaries and embrace cutting-edge technologies to deliver future-proof solutions.",
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Client Partnership",
//       description: "We build lasting relationships by understanding your vision and treating your success as our own.",
//     },
//     {
//       icon: <Code className="w-8 h-8" />,
//       title: "Technical Excellence",
//       description: "Our team maintains the highest coding standards with rigorous testing and best practices.",
//     },
//     {
//       icon: <Globe className="w-8 h-8" />,
//       title: "Global Impact",
//       description: "We create solutions that make a difference, serving clients across 20+ countries worldwide.",
//     },
//   ];

//   // Loading state
//   if (loading || themeLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <div className="flex flex-col items-center gap-4">
//           <div className="w-12 h-12 rounded-full border-2 border-gray-200 border-t-[#008071] animate-spin"></div>
//           <p className="text-gray-500 text-sm">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <div className="text-center max-w-md px-4">
//           <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
//             <Award className="w-8 h-8 text-red-500" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">Error loading page</h2>
//           <p className="text-gray-600 mb-6">{error}</p>
//           <button 
//             onClick={() => window.location.reload()} 
//             className="px-6 py-3 rounded-xl text-white font-semibold hover:shadow-lg transition"
//             style={{ backgroundColor: primaryColor }}
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
//         {/* Theme error message */}
//         {themeError && (
//           <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-xl border border-red-200 text-gray-900 px-4 py-3 rounded-xl text-sm z-30 flex items-center gap-3">
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
//               <span className="font-medium">Error:</span>
//               <span className="text-gray-600">{themeError}</span>
//             </div>
//             <button
//               onClick={refreshTheme}
//               className="ml-2 px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-colors hover:opacity-90"
//               style={{ backgroundColor: primaryColor }}
//             >
//               Retry
//             </button>
//           </div>
//         )}

//         {/* Story Section */}
//         <div
//           data-section="story"
//           className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 transition-all duration-700
//             ${isVisible.story ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//         >
//           <div>
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border"
//               style={{ 
//                 backgroundColor: `${primaryColor}08`,
//                 borderColor: `${primaryColor}20`,
//                 color: primaryColor
//               }}
//             >
//               <BookOpen className="w-4 h-4" />
//               <span>Our Journey</span>
//             </div>
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//               {formatTitle(aboutData?.story_title || "Our Story")}
//             </h2>
//             <p className="text-gray-600 text-lg leading-relaxed">
//               {aboutData?.story_description ||
//                 "Founded in 2010, TechStudio began as a small team of developers with a big dream..."}
//             </p>
//           </div>
//           <div className="relative">
//             <div className="relative rounded-2xl overflow-hidden group">
//               <img
//                 src={
//                   aboutData?.story_image ||
//                   "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                 }
//                 alt="Our team collaborating"
//                 className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
//                 onError={(e) => {
//                   e.target.src =
//                     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
//                 }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Mission Section */}
//         <div
//           data-section="mission"
//           className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 transition-all duration-700 
//             ${isVisible.mission ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//         >
//           <div className="relative">
//             <div className="relative rounded-2xl overflow-hidden group">
//               <img
//                 src={
//                   aboutData?.mission_image ||
//                   "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                 }
//                 alt="Team working on mission"
//                 className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
//                 onError={(e) => {
//                   e.target.src =
//                     "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
//                 }}
//               />
//             </div>
//           </div>
//           <div>
//             <div className="flex items-center gap-4 mb-6">
//               <div
//                 className="p-4 rounded-2xl transition-all duration-300 hover:scale-110"
//                 style={{
//                   backgroundColor: `${primaryColor}10`,
//                   color: primaryColor,
//                 }}
//               >
//                 <Rocket className="w-10 h-10" />
//               </div>
//               <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
//                 {formatTitle(aboutData?.mission_title || "Our Mission")}
//               </h2>
//             </div>
//             <p className="text-gray-600 text-lg leading-relaxed">
//               {aboutData?.mission_description ||
//                 "To empower businesses worldwide with innovative, scalable, and cutting-edge software solutions..."}
//             </p>
//           </div>
//         </div>

//         {/* Vision Section */}
//         <div
//           data-section="vision"
//           className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 transition-all duration-700 
//             ${isVisible.vision ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//         >
//           <div className="relative lg:order-2">
//             <div className="flex items-center gap-4 mb-6 lg:hidden">
//               <div
//                 className="p-4 rounded-2xl transition-all duration-300 hover:scale-110"
//                 style={{
//                   backgroundColor: `${secondaryColor}10`,
//                   color: secondaryColor,
//                 }}
//               >
//                 <Eye className="w-10 h-10" />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900">
//                 {formatTitle(aboutData?.vission_title || "Our Vision")}
//               </h2>
//             </div>
//             <div className="relative rounded-2xl overflow-hidden group">
//               <img
//                 src={
//                   aboutData?.vission_image ||
//                   "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                 }
//                 alt="Future vision and innovation"
//                 className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
//                 onError={(e) => {
//                   e.target.src =
//                     "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
//                 }}
//               />
//             </div>
//           </div>
//           <div className="lg:order-1">
//             <div className="hidden lg:flex items-center gap-4 mb-6">
//               <div
//                 className="p-4 rounded-2xl transition-all duration-300 hover:scale-110"
//                 style={{
//                   backgroundColor: `${secondaryColor}10`,
//                   color: secondaryColor,
//                 }}
//               >
//                 <Eye className="w-10 h-10" />
//               </div>
//               <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
//                 {formatTitle(aboutData?.vission_title || "Our Vision")}
//               </h2>
//             </div>
//             <p className="text-gray-600 text-lg leading-relaxed">
//               {aboutData?.vission_description ||
//                 "To be the global leader in digital innovation, recognized for transforming ideas into reality..."}
//             </p>
//           </div>
//         </div>

//         {/* Values Section */}
//         <div
//           data-section="values"
//           className={`mb-24 transition-all duration-700 
//             ${isVisible.values ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//         >
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border"
//               style={{ 
//                 backgroundColor: `${primaryColor}08`,
//                 borderColor: `${primaryColor}20`,
//                 color: primaryColor
//               }}
//             >
//               <Target className="w-4 h-4" />
//               <span>What Drives Us</span>
//             </div>
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               {formatTitle(aboutData?.value_title || "Our Core Values")}
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//               {aboutData?.value_subtitle ||
//                 "These principles guide everything we do..."}
//             </p>
//           </div>

//           {aboutData?.value_items?.length > 0 ? (
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {aboutData.value_items.map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 group"
//                 >
//                   {item.attachment ? (
//                     <div className="mb-4 w-14 h-14 rounded-xl overflow-hidden">
//                       <img
//                         src={item.attachment}
//                         alt={item.primary_value}
//                         className="w-full h-full object-cover"
//                         onError={(e) => (e.target.style.display = "none")}
//                       />
//                     </div>
//                   ) : (
//                     <div
//                       className="p-3 rounded-xl inline-block mb-4 transition-all duration-300 group-hover:scale-110"
//                       style={{
//                         backgroundColor: `${primaryColor}10`,
//                         color: primaryColor,
//                       }}
//                     >
//                       <Target className="w-8 h-8" />
//                     </div>
//                   )}
//                   <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                     {item.primary_value}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     {item.secondary_value}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {fallbackValues.map((value, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 group"
//                 >
//                   <div
//                     className="p-3 rounded-xl inline-block mb-4 transition-all duration-300 group-hover:scale-110"
//                     style={{
//                       backgroundColor: `${primaryColor}10`,
//                       color: primaryColor,
//                     }}
//                   >
//                     {value.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
//                   <p className="text-gray-600 leading-relaxed">{value.description}</p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* CTA Section */}
//         {(aboutData?.cta_title || aboutData?.cta_subtitle || aboutData?.cta_button) && (
//           <div
//             data-section="cta"
//             className={`text-center transition-all duration-700 
//               ${isVisible.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//           >
//             <div 
//               className="rounded-2xl p-8 lg:p-12 transition-all duration-300"
//               style={{ backgroundColor: `${primaryColor}05` }}
//             >
//               <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//                 {formatTitle(aboutData?.cta_title || "Ready to Start Your Journey?")}
//               </h2>
//               <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
//                 {aboutData?.cta_subtitle ||
//                   "Join 500+ companies that have transformed their businesses with our software solutions."}
//               </p>
//               <a
//                 href={aboutData?.cta_button_action || "#contact"}
//                 className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 text-white"
//                 style={{ backgroundColor: primaryColor }}
//               >
//                 <span>{aboutData?.cta_button || "Get Started Today"}</span>
//                 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </a>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default memo(AboutPage);







// AboutPage.jsx
import React, { useState, useEffect, memo, useCallback } from "react";
import {
  Users,
  Target,
  Award,
  Heart,
  Globe,
  Rocket,
  Code,
  BookOpen,
  Briefcase,
  Star,
  Zap,
  TrendingUp,
  ChevronRight,
  Quote,
  Linkedin,
  Twitter,
  Github,
  Eye,
  Compass,
} from "lucide-react";

const AboutPage = () => {
  // State for about page data
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  // Hardcoded default colors
  const primaryColor = '#008071';
  const secondaryColor = '#005B41';

  // Fetch about page data
  useEffect(() => {
    fetchAboutPageData();
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.getAttribute("data-section");
            setIsVisible((prev) => ({ ...prev, [key]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [aboutData]);

  const fetchAboutPageData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/resource/About%20Page/About%20Page", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!response.ok) {
        if (response.status === 403) {
          const publicResponse = await fetch(
            "/api/resource/About%20Page/About%20Page?run_method=1",
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            }
          );
          if (!publicResponse.ok) throw new Error("Failed to fetch about page data");
          const publicData = await publicResponse.json();
          if (publicData.data) setAboutData(publicData.data);
        } else {
          throw new Error("Failed to fetch about page data");
        }
      } else {
        const data = await response.json();
        if (data.data) setAboutData(data.data);
      }
      setError(null);
    } catch (err) {
      console.error("Error fetching about page:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Helper: color last word
  const formatTitle = useCallback((title) => {
    if (!title) return null;
    const words = title.split(" ");
    if (words.length === 1)
      return <span style={{ color: primaryColor }}>{title}</span>;
    const lastWord = words.pop();
    const firstPart = words.join(" ");
    return (
      <>
        {firstPart}{" "}
        <span style={{ color: primaryColor }}>{lastWord}</span>
      </>
    );
  }, [primaryColor]);

  // Fallback values
  const fallbackValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies to deliver future-proof solutions.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Partnership",
      description: "We build lasting relationships by understanding your vision and treating your success as our own.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Excellence",
      description: "Our team maintains the highest coding standards with rigorous testing and best practices.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "We create solutions that make a difference, serving clients across 20+ countries worldwide.",
    },
  ];

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-gray-200 border-t-[#008071] animate-spin"></div>
          <p className="text-gray-500 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md px-4">
          <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error loading page</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 rounded-xl text-white font-semibold hover:shadow-lg transition"
            style={{ backgroundColor: primaryColor }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Story Section - No animation */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border"
              style={{ 
                backgroundColor: `${primaryColor}08`,
                borderColor: `${primaryColor}20`,
                color: primaryColor
              }}
            >
              <BookOpen className="w-4 h-4" />
              <span>Our Journey</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {formatTitle(aboutData?.story_title || "Our Story")}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {aboutData?.story_description ||
                "Founded in 2010, TechStudio began as a small team of developers with a big dream..."}
            </p>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={
                  aboutData?.story_image ||
                  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                }
                alt="Our team collaborating"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div
          data-section="mission"
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 transition-all duration-700 
            ${isVisible.mission ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={
                  aboutData?.mission_image ||
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                }
                alt="Team working on mission"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div
                className="p-4 rounded-2xl transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: `${primaryColor}10`,
                  color: primaryColor,
                }}
              >
                <Rocket className="w-10 h-10" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {formatTitle(aboutData?.mission_title || "Our Mission")}
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              {aboutData?.mission_description ||
                "To empower businesses worldwide with innovative, scalable, and cutting-edge software solutions..."}
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div
          data-section="vision"
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 transition-all duration-700 
            ${isVisible.vision ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative lg:order-2">
            <div className="flex items-center gap-4 mb-6 lg:hidden">
              <div
                className="p-4 rounded-2xl transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: `${secondaryColor}10`,
                  color: secondaryColor,
                }}
              >
                <Eye className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {formatTitle(aboutData?.vission_title || "Our Vision")}
              </h2>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={
                  aboutData?.vission_image ||
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                }
                alt="Future vision and innovation"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
          </div>
          <div className="lg:order-1">
            <div className="hidden lg:flex items-center gap-4 mb-6">
              <div
                className="p-4 rounded-2xl transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: `${secondaryColor}10`,
                  color: secondaryColor,
                }}
              >
                <Eye className="w-10 h-10" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {formatTitle(aboutData?.vission_title || "Our Vision")}
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              {aboutData?.vission_description ||
                "To be the global leader in digital innovation, recognized for transforming ideas into reality..."}
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div
          data-section="values"
          className={`mb-24 transition-all duration-700 
            ${isVisible.values ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border"
              style={{ 
                backgroundColor: `${primaryColor}08`,
                borderColor: `${primaryColor}20`,
                color: primaryColor
              }}
            >
              <Target className="w-4 h-4" />
              <span>What Drives Us</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {formatTitle(aboutData?.value_title || "Our Core Values")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {aboutData?.value_subtitle ||
                "These principles guide everything we do..."}
            </p>
          </div>

          {aboutData?.value_items?.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aboutData.value_items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 group"
                >
                  {item.attachment ? (
                    <div className="mb-4 w-14 h-14 rounded-xl overflow-hidden">
                      <img
                        src={item.attachment}
                        alt={item.primary_value}
                        className="w-full h-full object-cover"
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    </div>
                  ) : (
                    <div
                      className="p-3 rounded-xl inline-block mb-4 transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${primaryColor}10`,
                        color: primaryColor,
                      }}
                    >
                      <Target className="w-8 h-8" />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.primary_value}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.secondary_value}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fallbackValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 group"
                >
                  <div
                    className="p-3 rounded-xl inline-block mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${primaryColor}10`,
                      color: primaryColor,
                    }}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        {(aboutData?.cta_title || aboutData?.cta_subtitle || aboutData?.cta_button) && (
          <div
            data-section="cta"
            className={`text-center transition-all duration-700 
              ${isVisible.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div 
              className="rounded-2xl p-8 lg:p-12 transition-all duration-300"
              style={{ backgroundColor: `${primaryColor}05` }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {formatTitle(aboutData?.cta_title || "Ready to Start Your Journey?")}
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                {aboutData?.cta_subtitle ||
                  "Join 500+ companies that have transformed their businesses with our software solutions."}
              </p>
              <a
                href={aboutData?.cta_button_action || "#contact"}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 text-white"
                style={{ backgroundColor: primaryColor }}
              >
                <span>{aboutData?.cta_button || "Get Started Today"}</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default memo(AboutPage);