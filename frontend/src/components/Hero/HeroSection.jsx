

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
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { useHomePage } from "../../hooks/useHomePage";
import OptimizedImage from "../ui/OptimizedImage";

const HeroSection = () => {
  const {
    colors: themeColors,
    themeName,
    loading: themeLoading,
    error: themeError,
    refreshTheme,
  } = useTheme();
  const { homePageData, loading, error, refreshHomePage } = useHomePage();
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');

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
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden bg-[#030712]">
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
        @keyframes gridPrimaryFade {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        @keyframes dotsFade {
          0%, 100% { opacity: 0.04; }
          50% { opacity: 0.08; }
        }
        
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          25% { transform: translate(50px, -30px) scale(1.1); opacity: 0.9; }
          50% { transform: translate(-20px, -60px) scale(0.95); opacity: 0.6; }
          75% { transform: translate(-40px, -10px) scale(1.05); opacity: 0.8; }
        }
        
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          25% { transform: translate(-40px, 30px) scale(1.08); opacity: 0.85; }
          50% { transform: translate(20px, 50px) scale(0.92); opacity: 0.6; }
          75% { transform: translate(30px, -20px) scale(1.06); opacity: 0.8; }
        }

        @keyframes floatOrb3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.9; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes modalOverlayFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-grid-primary {
          animation: gridPrimaryFade 5s ease-in-out infinite;
        }

        .animate-dots {
          animation: dotsFade 6s ease-in-out infinite;
        }

        .animate-orb-1 {
          animation: floatOrb1 15s ease-in-out infinite;
        }

        .animate-orb-2 {
          animation: floatOrb2 18s ease-in-out infinite;
        }

        .animate-orb-3 {
          animation: floatOrb3 12s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
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

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.3s; }
        .stagger-3 { animation-delay: 0.5s; }
        .stagger-4 { animation-delay: 0.7s; }
        .stagger-5 { animation-delay: 0.9s; }
      `}</style>

      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-12 overflow-hidden">
        {/* ====== PREMIUM MODERN BACKGROUND ====== */}
        <div className="absolute inset-0 bg-[#030712]">
          
          {/* Layer 1: Noise Texture Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />

          {/* Layer 2: Main Grid Lines (80px) */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 animate-grid-primary"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '100px 100px',
              }}
            />
          </div>

          {/* Layer 3: Fine Grid (20px) */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '25px 25px',
              }}
            />
          </div>

          {/* Glow Orb 1 - Top Right (Blue) - Large & Soft */}
          <div 
            className="absolute animate-orb-1"
            style={{
              top: '-15%',
              right: '-5%',
              width: '800px',
              height: '800px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 25%, rgba(59, 130, 246, 0.01) 50%, transparent 70%)',
              filter: 'blur(100px)',
            }}
          />

          {/* Glow Orb 2 - Bottom Left (Purple) - Large & Soft */}
          <div 
            className="absolute animate-orb-2"
            style={{
              bottom: '-15%',
              left: '-5%',
              width: '700px',
              height: '700px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 25%, rgba(139, 92, 246, 0.01) 50%, transparent 70%)',
              filter: 'blur(100px)',
            }}
          />

          {/* Glow Orb 3 - Center Warm Accent */}
          <div 
            className="absolute animate-orb-3"
            style={{
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.02) 30%, transparent 70%)',
              filter: 'blur(120px)',
            }}
          />

          {/* Edge Vignette */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 50%, rgba(3, 7, 18, 0.6) 100%)',
            }}
          />
        </div>
        {/* ====== END BACKGROUND ====== */}

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
                refreshHomePage();
              }}
              className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs transition-colors"
            >
              Retry
            </button>
          </div>
        )}

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
                  <OptimizedImage
                    src={content.hero_image.startsWith('http') ? content.hero_image : content.hero_image}
                    alt="Hero section"
                    className="w-full h-auto transition-transform duration-700"
                    fallbackSrc="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    widths={[640, 960, 1280]}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    fetchPriority="high"
                    loading="eager"
                  />
                ) : (
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Team working on software development"
                    className="w-full h-auto"
                    widths={[640, 960, 1280]}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    fetchPriority="high"
                    loading="eager"
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
                <OptimizedImage
                  key={`modal-image-${currentImageIndex}`}
                  src={content.modal_images[currentImageIndex].attachment}
                  alt={content.modal_images[currentImageIndex].primary_value || "Gallery image"}
                  className={`w-full h-full object-cover ${
                    slideDirection === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'
                  }`}
                  fallbackSrc="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  widths={[768, 1280, 1600]}
                  sizes="100vw"
                  loading="eager"
                />
                
                {/* Image caption */}
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
                  onClick={(e) => { e.stopPropagation(); previousImage(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group"
                >
                  <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1" />
                </button>
                
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
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