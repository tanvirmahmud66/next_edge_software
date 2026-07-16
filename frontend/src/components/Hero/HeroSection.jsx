
// HeroSection.jsx
import React, { useState, useEffect, useCallback, memo } from "react";
import {
  Zap,
  ArrowRight,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Download,
  Share2
} from "lucide-react";
import { Link } from "react-router-dom";
import { useHomePage } from "../../hooks/useHomePage";
import OptimizedImage from "../ui/OptimizedImage";

const HeroSection = () => {
  const { homePageData, loading, error, refreshHomePage } = useHomePage();
  
  // Hardcoded theme colors
  const themeColors = {
    accent2: "#008071",
    accent1: "#005B41",
  };
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Default content - moved before functions that use it
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

  // Modal control functions
  const openModal = useCallback(() => {
    const modalImages = homePageData?.modal_images || defaultContent.modal_images;
    if (modalImages && modalImages.length > 0) {
      setIsModalOpen(true);
      setCurrentImageIndex(0);
      document.body.style.overflow = 'hidden';
    }
  }, [homePageData?.modal_images]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback(() => {
    const modalImages = homePageData?.modal_images || defaultContent.modal_images;
    if (modalImages?.length && !isTransitioning) {
      setIsTransitioning(true);
      setSlideDirection('right');
      setCurrentImageIndex((prevIndex) => 
        prevIndex === modalImages.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [homePageData?.modal_images, isTransitioning]);

  const previousImage = useCallback(() => {
    const modalImages = homePageData?.modal_images || defaultContent.modal_images;
    if (modalImages?.length && !isTransitioning) {
      setIsTransitioning(true);
      setSlideDirection('left');
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? modalImages.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [homePageData?.modal_images, isTransitioning]);

  // Touch handlers for mobile swipe
  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        nextImage();
      } else {
        previousImage();
      }
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, nextImage, previousImage]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      
      switch(e.key) {
        case 'ArrowRight':
          e.preventDefault();
          nextImage();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          previousImage();
          break;
        case 'Escape':
          closeModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, nextImage, previousImage, closeModal]);

  // Loading state
  if (loading) {
    return (
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
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

  // Function to highlight the "Cutting-Edge" part in the title
  const renderTitle = () => {
    const title = content.hero_title;
    const highlightText = "Cutting-Edge";
    
    if (title && title.includes(highlightText)) {
      const parts = title.split(highlightText);
      return (
        <>
          {parts[0]}
          <span className="relative inline-block">
            <span style={{ color: themeColors.accent2 }}>
              {highlightText}
            </span>
            <span
              className="absolute -bottom-1 left-0 w-full h-1 rounded-full"
              style={{
                background: themeColors.accent2,
                opacity: 0.2,
              }}
            ></span>
          </span>
          {parts[1]}
        </>
      );
    }
    return <span className="text-gray-900">{title}</span>;
  };

  // Get current modal images safely
  const modalImages = homePageData?.modal_images || defaultContent.modal_images;

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px) scale(0.95); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px) scale(0.95); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }

        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-modal-slide-up {
          animation: modalSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.25s; }
        .stagger-3 { animation-delay: 0.4s; }
        .stagger-4 { animation-delay: 0.55s; }
        .stagger-5 { animation-delay: 0.7s; }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <section className="relative pt-20 lg:pt-28 pb-16 lg:pb-20 overflow-hidden bg-white">
        {/* Error message */}
        {error && (
          <div className="absolute top-4 left-4 bg-white shadow-xl border border-red-200 text-gray-900 px-4 py-3 rounded-xl text-sm z-20 flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Error:</span>
              <span className="text-gray-600">{error}</span>
            </div>
            <button
              onClick={refreshHomePage}
              className="ml-2 bg-[#008071] hover:bg-[#006d5f] text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="opacity-0 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-gray-200 opacity-0 animate-fade-in-up stagger-1">
                <Zap className="w-4 h-4" style={{ color: themeColors.accent2 }} />
                <span>{content.hero_badge}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight opacity-0 animate-fade-in-up stagger-2">
                {renderTitle()}
              </h1>

              {/* Subtitle */}
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed opacity-0 animate-fade-in-up stagger-3">
                {content.hero_subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10 opacity-0 animate-fade-in-up stagger-4">
                <Link
                  to={content.hero_primary_button_url || "/contact"}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 text-white w-full sm:w-auto"
                  style={{
                    backgroundColor: themeColors.accent2,
                  }}
                >
                  {content.hero_primary_button_title}
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                
                <button
                  onClick={openModal}
                  disabled={!modalImages || modalImages.length === 0}
                  className={`group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 w-full sm:w-auto ${
                    (!modalImages || modalImages.length === 0) 
                      ? 'opacity-50 cursor-not-allowed border-gray-200 text-gray-400' 
                      : 'cursor-pointer hover:shadow-lg'
                  }`}
                  style={{
                    borderColor: themeColors.accent2,
                    color: themeColors.accent2,
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (modalImages && modalImages.length > 0) {
                      e.currentTarget.style.backgroundColor = themeColors.accent2;
                      e.currentTarget.style.color = "white";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = themeColors.accent2;
                  }}
                >
                  <Play className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  {content.hero_secondary_button_title}
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative opacity-0 animate-fade-in-right stagger-2">
              <div 
                className="relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-100">
                  {content.hero_image ? (
                    <OptimizedImage
                      src={content.hero_image}
                      alt="Hero section"
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
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
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
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
        </div>
      </section>

      {/* New Modern Modal Design - Horizontal Strip Layout */}
      {isModalOpen && modalImages && modalImages.length > 0 && (
        <div 
          className="fixed inset-0 z-50 flex flex-col animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
          style={{ backgroundColor: '#0a0a0a' }}
        >
          {/* Top Navigation Bar */}
          <div className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-white/10 animate-modal-slide-up">
            <div className="flex items-center gap-4">
              <button
                onClick={closeModal}
                className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                aria-label="Close gallery"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="text-white/50 text-sm font-medium">
                {currentImageIndex + 1} <span className="text-white/30">/</span> {modalImages.length}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex overflow-hidden">
            {/* Main Image Area */}
            <div 
              className="flex-1 flex items-center justify-center relative"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Navigation Arrows */}
              {modalImages.length > 1 && (
                <>
                  <button
                    onClick={previousImage}
                    disabled={isTransitioning}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    disabled={isTransitioning}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Main Image */}
              <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
                {modalImages[currentImageIndex] && (
                  <img
                    key={`modal-image-${currentImageIndex}`}
                    src={modalImages[currentImageIndex].attachment || modalImages[currentImageIndex].image}
                    alt={modalImages[currentImageIndex].primary_value || modalImages[currentImageIndex].title || "Gallery image"}
                    className={`max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl ${
                      slideDirection === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'
                    }`}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                )}
              </div>

              {/* Mobile swipe indicator */}
              {modalImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden">
                  <div className="flex gap-1.5">
                    {modalImages.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar - Thumbnails & Info */}
            <div className="hidden lg:flex flex-col w-80 border-l border-white/10 bg-white/5 backdrop-blur-sm">
              {/* Thumbnails */}
              {modalImages.length > 1 && (
                <div className="p-4 border-b border-white/10">
                  <h3 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">Gallery</h3>
                  <div className="grid grid-cols-3 gap-2 max-h-[300px] overflow-y-auto hide-scrollbar">
                    {modalImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSlideDirection(index > currentImageIndex ? 'right' : 'left');
                          setCurrentImageIndex(index);
                        }}
                        className={`relative aspect-video rounded-lg overflow-hidden group transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'ring-2 ring-white ring-offset-2 ring-offset-transparent' 
                            : 'opacity-50 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={image.attachment || image.image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60';
                          }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Image Info */}
              <div className="flex-1 p-6">
                {modalImages[currentImageIndex] && (modalImages[currentImageIndex].primary_value || 
                  modalImages[currentImageIndex].title) && (
                  <div className="animate-modal-slide-up">
                    <h2 className="text-white text-xl font-bold mb-2">
                      {modalImages[currentImageIndex].primary_value || modalImages[currentImageIndex].title}
                    </h2>
                    {modalImages[currentImageIndex].secondary_value && (
                      <p className="text-white/60 text-sm leading-relaxed">
                        {modalImages[currentImageIndex].secondary_value}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Navigation Dots */}
              <div className="p-4 border-t border-white/10">
                <div className="flex justify-center gap-2">
                  {modalImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSlideDirection(index > currentImageIndex ? 'right' : 'left');
                        setCurrentImageIndex(index);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'w-8 bg-white' 
                          : 'w-1.5 bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Bottom Bar */}
          <div className="lg:hidden border-t border-white/10 p-4 animate-modal-slide-up">
            {modalImages[currentImageIndex] && (modalImages[currentImageIndex].primary_value || 
              modalImages[currentImageIndex].title) && (
              <div>
                <h2 className="text-white text-base font-semibold mb-1 line-clamp-2">
                  {modalImages[currentImageIndex].primary_value || modalImages[currentImageIndex].title}
                </h2>
                {modalImages[currentImageIndex].secondary_value && (
                  <p className="text-white/50 text-sm line-clamp-2">
                    {modalImages[currentImageIndex].secondary_value}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default memo(HeroSection);