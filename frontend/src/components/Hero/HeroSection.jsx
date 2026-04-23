

// // HeroSection.jsx
// import React, { useState, useEffect } from "react";
// import {
//   Zap,
//   ArrowRight,
//   Play,
//   X,
//   ChevronLeft,
//   ChevronRight
// } from "lucide-react";
// import { Link } from "react-router-dom"; // For React Router
// // import Link from "next/link"; // For Next.js
// import { useTheme } from "../../hooks/useTheme";

// const HeroSection = () => {
//   const {
//     colors: themeColors,
//     themeName,
//     loading: themeLoading,
//     error: themeError,
//     refreshTheme,
//   } = useTheme();
  
//   const [homePageData, setHomePageData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // Modal state
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     fetchHomePageData();
//   }, []);

//   // Modal control functions
//   const openModal = () => {
//     setIsModalOpen(true);
//     setCurrentImageIndex(0);
//     // Prevent body scrolling when modal is open
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     // Restore body scrolling
//     document.body.style.overflow = 'unset';
//   };

//   const nextImage = () => {
//     if (homePageData?.modal_images?.length) {
//       setCurrentImageIndex((prevIndex) => 
//         prevIndex === homePageData.modal_images.length - 1 ? 0 : prevIndex + 1
//       );
//     }
//   };

//   const previousImage = () => {
//     if (homePageData?.modal_images?.length) {
//       setCurrentImageIndex((prevIndex) => 
//         prevIndex === 0 ? homePageData.modal_images.length - 1 : prevIndex - 1
//       );
//     }
//   };

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!isModalOpen) return;
      
//       if (e.key === 'ArrowRight') {
//         nextImage();
//       } else if (e.key === 'ArrowLeft') {
//         previousImage();
//       } else if (e.key === 'Escape') {
//         closeModal();
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
    
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [isModalOpen, homePageData?.modal_images?.length]);

//   const fetchHomePageData = async () => {
//     try {
//       setLoading(true);
//       // Using Frappe REST API pattern: /api/resource/[Doctype]/[Document Name]
//       const response = await fetch('/api/resource/Home%20Page/Home%20Page', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           // Add authentication if needed
//           // 'Authorization': `token ${frappe.session}`
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
//       setError('Failed to load home page content');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Default content in case data is not available
//   const defaultContent = {
//     hero_badge: "Trusted by 500+ Companies Worldwide",
//     hero_title: "Transform Your Business with Cutting-Edge Software Solutions",
//     hero_subtitle: "We deliver innovative, scalable, and secure software solutions that drive business growth and digital transformation. Partner with us to turn your ideas into reality.",
//     hero_primary_button_title: "Get Started",
//     hero_primary_button_url: "/contact",
//     hero_secondary_button_title: "Watch Demo",
//     hero_secondary_button_url: "/case-studies",
//     hero_image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     modal_images: [] // Default empty array for modal images
//   };

//   const content = homePageData || defaultContent;

//   if (loading || themeLoading) {
//     return (
//       <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="flex justify-center items-center min-h-[400px]">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   // Function to highlight the "Cutting-Edge" part in the title
//   const renderTitle = () => {
//     const title = content.hero_title;
//     const highlightText = "Cutting-Edge";
    
//     if (title && title.includes(highlightText)) {
//       const parts = title.split(highlightText);
//       return (
//         <>
//           {parts[0]}
//           <span className="relative" style={{ color: themeColors.accent2 }}>
//             {highlightText}
//             <span
//               className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r"
//               style={{
//                 background: `linear-gradient(to right, ${themeColors.accent2}, transparent)`,
//               }}
//             ></span>
//           </span>
//           {parts[1]}
//         </>
//       );
//     }
//     return title;
//   };

//   return (
//     <>
//       <section
//         className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden"
//         style={{
//           background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 50%, ${themeColors.accent1} 100%)`,
//         }}
//       >
//         {/* Theme indicator - can be removed in production */}
//         <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs z-20">
//           Active Theme: {themeName}
//         </div>

//         {/* Error message with retry button */}
//         {(themeError || error) && (
//           <div className="absolute top-4 left-4 bg-red-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm z-20 flex items-center gap-3">
//             <span>Failed to load: {themeError || error}</span>
//             <button
//               onClick={() => {
//                 refreshTheme();
//                 fetchHomePageData();
//               }}
//               className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs transition-colors"
//             >
//               Retry
//             </button>
//           </div>
//         )}

//         {/* Animated Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div
//             className="absolute top-0 left-0 w-full h-full animate-pulse"
//             style={{
//               backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         {/* Decorative gradient orbs */}
//         <div
//           className="absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
//           style={{ background: themeColors.accent2, opacity: 0.3 }}
//         ></div>
//         <div
//           className="absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
//           style={{ background: themeColors.accent1, opacity: 0.3 }}
//         ></div>
//         <div
//           className="absolute bottom-0 left-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
//           style={{ background: themeColors.primary, opacity: 0.3 }}
//         ></div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div>
//               <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
//                 <Zap className="w-4 h-4" style={{ color: themeColors.accent2 }} />
//                 <span>{content.hero_badge}</span>
//               </div>

//               <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
//                 {renderTitle()}
//               </h1>

//               <p className="text-lg lg:text-xl text-white/80 mb-8 leading-relaxed">
//                 {content.hero_subtitle}
//               </p>

//               {/* CTA Buttons with Link components */}
//               <div className="flex flex-wrap gap-4 mb-10">
//                 <Link
//                   to={content.hero_primary_button_url || "/contact"}
//                   className="group px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
//                   style={{
//                     background: `linear-gradient(135deg, ${themeColors.accent2}, ${themeColors.accent1})`,
//                     color: "white",
//                   }}
//                 >
//                   {content.hero_primary_button_title}
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </Link>
                
//                 {/* Modified secondary button - now opens modal if images exist */}
//                 <button
//                   onClick={openModal}
//                   disabled={!content.modal_images || content.modal_images.length === 0}
//                   className={`group px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 border-2 cursor-pointer ${
//                     (!content.modal_images || content.modal_images.length === 0) 
//                       ? 'opacity-50 cursor-not-allowed' 
//                       : ''
//                   }`}
//                   style={{
//                     borderColor: themeColors.accent2,
//                     color: themeColors.accent2,
//                     background: "transparent",
//                   }}
//                   onMouseEnter={(e) => {
//                     if (content.modal_images && content.modal_images.length > 0) {
//                       e.currentTarget.style.background = themeColors.accent2;
//                       e.currentTarget.style.color = "white";
//                     }
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = "transparent";
//                     e.currentTarget.style.color = themeColors.accent2;
//                   }}
//                 >
//                   <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
//                   {content.hero_secondary_button_title}
//                 </button>
//               </div>
//             </div>

//             {/* Right Content - Hero Image */}
//             <div className="relative hidden lg:block">
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//                 {content.hero_image ? (
//                   <img
//                     src={content.hero_image.startsWith('http') ? content.hero_image : content.hero_image}
//                     alt="Hero section"
//                     className="w-full h-auto"
//                     onError={(e) => {
//                       e.target.src = "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
//                     }}
//                   />
//                 ) : (
//                   <img
//                     src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                     alt="Team working on software development"
//                     className="w-full h-auto"
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         <style jsx>{`
//           @keyframes blob {
//             0% {
//               transform: translate(0px, 0px) scale(1);
//             }
//             33% {
//               transform: translate(30px, -50px) scale(1.1);
//             }
//             66% {
//               transform: translate(-20px, 20px) scale(0.9);
//             }
//             100% {
//               transform: translate(0px, 0px) scale(1);
//             }
//           }
//           .animate-blob {
//             animation: blob 7s infinite;
//           }
//           .animation-delay-2000 {
//             animation-delay: 2s;
//           }
//           .animation-delay-4000 {
//             animation-delay: 4s;
//           }
//         `}</style>
//       </section>




//       {/* Modal with Image Slider - Dynamically loaded from child table */}
//       {isModalOpen && content.modal_images && content.modal_images.length > 0 && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
//           {/* Modal overlay */}
//           <div className="absolute inset-0" onClick={closeModal}></div>
          
//           {/* Modal content */}
//           <div className="relative bg-white rounded-2xl max-w-7xl w-full max-h-auto overflow-hidden shadow-2xl">
//             {/* Close button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
//             >
//               <X className="w-6 h-6" />
//             </button>

//             {/* Image slider */}
//             <div className="relative h-full">
//               {/* Main image */}
//               <div className="relative h-full md:w-full">
//                 <img
//                   src={content.modal_images[currentImageIndex].attachment}
//                   alt={content.modal_images[currentImageIndex].primary_value || "Gallery image"}
//                   className="w-full h-full object-cover"
//                   onError={(e) => {
//                     e.target.src = "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
//                   }}
//                 />
                
//                 {/* Image caption - using primary_value and secondary_value from child table */}
//                 {(content.modal_images[currentImageIndex].primary_value || 
//                   content.modal_images[currentImageIndex].secondary_value) && (
//                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
//                     {content.modal_images[currentImageIndex].primary_value && (
//                       <h3 className="text-2xl font-bold mb-2">
//                         {content.modal_images[currentImageIndex].primary_value}
//                       </h3>
//                     )}
//                     {content.modal_images[currentImageIndex].secondary_value && (
//                       <p className="text-white/80">
//                         {content.modal_images[currentImageIndex].secondary_value}
//                       </p>
//                     )}
//                   </div>
//                 )}

//                 {/* Navigation arrows */}
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     previousImage();
//                   }}
//                   className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
//                 >
//                   <ChevronLeft className="w-6 h-6" />
//                 </button>
                
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     nextImage();
//                   }}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
//                 >
//                   <ChevronRight className="w-6 h-6" />
//                 </button>
//               </div>
//               {/* Image counter */}
//               <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
//                 {currentImageIndex + 1} / {content.modal_images.length}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}


//     </>
//   );
// };

// export default HeroSection;


















// HeroSection.jsx
import React, { useState, useEffect, useCallback } from "react";
import {
  Zap,
  ArrowRight,
  Play,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom"; // For React Router
// import Link from "next/link"; // For Next.js
import { useTheme } from "../../hooks/useTheme";

const HeroSection = () => {
  const {
    colors: themeColors,
    themeName,
    loading: themeLoading,
    error: themeError,
    refreshTheme,
  } = useTheme();
  
  const [homePageData, setHomePageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');

  useEffect(() => {
    fetchHomePageData();
  }, []);

  // Modal control functions
  const openModal = () => {
    setIsModalOpen(true);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = useCallback(() => {
    if (homePageData?.modal_images?.length && !isTransitioning) {
      setIsTransitioning(true);
      setSlideDirection('right');
      setCurrentImageIndex((prevIndex) => 
        prevIndex === homePageData.modal_images.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [homePageData?.modal_images?.length, isTransitioning]);

  const previousImage = useCallback(() => {
    if (homePageData?.modal_images?.length && !isTransitioning) {
      setIsTransitioning(true);
      setSlideDirection('left');
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? homePageData.modal_images.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [homePageData?.modal_images?.length, isTransitioning]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        previousImage();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, nextImage, previousImage]);

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
      setError('Failed to load home page content');
    } finally {
      setLoading(false);
    }
  };

  // Default content in case data is not available
  const defaultContent = {
    hero_badge: "Trusted by 500+ Companies Worldwide",
    hero_title: "Transform Your Business with Cutting-Edge Software Solutions",
    hero_subtitle: "We deliver innovative, scalable, and secure software solutions that drive business growth and digital transformation. Partner with us to turn your ideas into reality.",
    hero_primary_button_title: "Get Started",
    hero_primary_button_url: "/contact",
    hero_secondary_button_title: "Watch Demo",
    hero_secondary_button_url: "/case-studies",
    hero_image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    modal_images: []
  };

  const content = homePageData || defaultContent;

  if (loading || themeLoading) {
    return (
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        </div>
      </section>
    );
  }

  // Function to highlight the "Cutting-Edge" part in the title
  const renderTitle = () => {
    const title = content.hero_title;
    const highlightText = "Cutting-Edge";
    
    if (title && title.includes(highlightText)) {
      const parts = title.split(highlightText);
      return (
        <>
          {parts[0]}
          <span className="relative" style={{ color: themeColors.accent2 }}>
            {highlightText}
            <span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r"
              style={{
                background: `linear-gradient(to right, ${themeColors.accent2}, transparent)`,
              }}
            ></span>
          </span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <>
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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
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

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(100px);
          }
        }

        @keyframes slideOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-100px);
          }
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes modalOverlayFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.5s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.5s ease-out forwards;
        }

        .animate-modal-overlay-in {
          animation: modalOverlayFadeIn 0.3s ease-out forwards;
        }

        .animate-modal-content-in {
          animation: modalFadeIn 0.4s ease-out forwards;
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

        .stagger-4 {
          animation-delay: 0.7s;
        }

        .stagger-5 {
          animation-delay: 0.9s;
        }
      `}</style>

      <section
        className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 50%, ${themeColors.accent1} 100%)`,
        }}
      >
        {/* Theme indicator - can be removed in production */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs z-20">
          Active Theme: {themeName}
        </div>

        {/* Error message with retry button */}
        {(themeError || error) && (
          <div className="absolute top-4 left-4 bg-red-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm z-20 flex items-center gap-3">
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
            className="absolute top-0 left-0 w-full h-full animate-pulse"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Decorative gradient orbs */}
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
          style={{ background: themeColors.accent2, opacity: 0.3 }}
        ></div>
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
          style={{ background: themeColors.accent1, opacity: 0.3 }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
          style={{ background: themeColors.primary, opacity: 0.3 }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="opacity-0 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20 opacity-0 animate-fade-in-up stagger-1">
                <Zap className="w-4 h-4" style={{ color: themeColors.accent2 }} />
                <span>{content.hero_badge}</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-fade-in-up stagger-2">
                {renderTitle()}
              </h1>

              <p className="text-lg lg:text-xl text-white/80 mb-8 leading-relaxed opacity-0 animate-fade-in-up stagger-3">
                {content.hero_subtitle}
              </p>

              {/* CTA Buttons with Link components */}
              <div className="flex flex-wrap gap-4 mb-10 opacity-0 animate-fade-in-up stagger-4">
                <Link
                  to={content.hero_primary_button_url || "/contact"}
                  className="group px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                  style={{
                    background: `linear-gradient(135deg, ${themeColors.accent2}, ${themeColors.accent1})`,
                    color: "white",
                  }}
                >
                  {content.hero_primary_button_title}
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                
                {/* Modified secondary button - now opens modal if images exist */}
                <button
                  onClick={openModal}
                  disabled={!content.modal_images || content.modal_images.length === 0}
                  className={`group px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 border-2 cursor-pointer ${
                    (!content.modal_images || content.modal_images.length === 0) 
                      ? 'opacity-50 cursor-not-allowed' 
                      : ''
                  }`}
                  style={{
                    borderColor: themeColors.accent2,
                    color: themeColors.accent2,
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (content.modal_images && content.modal_images.length > 0) {
                      e.currentTarget.style.background = themeColors.accent2;
                      e.currentTarget.style.color = "white";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = themeColors.accent2;
                  }}
                >
                  <Play className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  {content.hero_secondary_button_title}
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative hidden lg:block opacity-0 animate-fade-in-right stagger-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-105">
                {content.hero_image ? (
                  <img
                    src={content.hero_image.startsWith('http') ? content.hero_image : content.hero_image}
                    alt="Hero section"
                    className="w-full h-auto transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                ) : (
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Team working on software development"
                    className="w-full h-auto"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal with Image Slider - Dynamically loaded from child table */}
      {isModalOpen && content.modal_images && content.modal_images.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-modal-overlay-in">
          {/* Modal overlay */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          ></div>
          
          {/* Modal content */}
          <div className="relative bg-white rounded-2xl max-w-7xl w-full max-h-auto overflow-hidden shadow-2xl animate-modal-content-in">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image slider */}
            <div className="relative h-full">
              {/* Main image */}
              <div className="relative h-full md:w-full overflow-hidden">
                <img
                  key={`modal-image-${currentImageIndex}`}
                  src={content.modal_images[currentImageIndex].attachment}
                  alt={content.modal_images[currentImageIndex].primary_value || "Gallery image"}
                  className={`w-full h-full object-cover ${
                    slideDirection === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'
                  }`}
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                
                {/* Image caption - using primary_value and secondary_value from child table */}
                {(content.modal_images[currentImageIndex].primary_value || 
                  content.modal_images[currentImageIndex].secondary_value) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white opacity-0 animate-fade-in-up stagger-1">
                    {content.modal_images[currentImageIndex].primary_value && (
                      <h3 className="text-2xl font-bold mb-2">
                        {content.modal_images[currentImageIndex].primary_value}
                      </h3>
                    )}
                    {content.modal_images[currentImageIndex].secondary_value && (
                      <p className="text-white/80">
                        {content.modal_images[currentImageIndex].secondary_value}
                      </p>
                    )}
                  </div>
                )}

                {/* Navigation arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    previousImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group"
                >
                  <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1" />
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group"
                >
                  <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
              {/* Image counter */}
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm opacity-0 animate-fade-in-up stagger-2">
                {currentImageIndex + 1} / {content.modal_images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;