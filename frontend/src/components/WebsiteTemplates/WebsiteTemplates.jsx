
// WebsiteTemplates.jsx
import React, { useEffect, useState, useCallback, useRef, memo } from "react";
import { Layout } from "lucide-react";
import OptimizedImage from "../ui/OptimizedImage";

// Configuration constants
const CONFIG = {
  BASE_URL: "",
  API_ENDPOINTS: {
    WEBSITE_TEMPLATES: "/api/resource/Website Templates/Website Templates",
  },
  IMAGE_LOADING: {
    ROOT_MARGIN: "300px",
    THRESHOLD: 0.01,
    BATCH_SIZE: 6,
  },
};

// Helper function to get image URL (handles both URL and attachment)
const getImageUrl = (imageField) => {
  if (!imageField) return "";
  
  if (typeof imageField === 'string' && (imageField.startsWith('http') || imageField.startsWith('/'))) {
    return imageField;
  }
  
  if (typeof imageField === 'string' && imageField.includes('/files/')) {
    return imageField;
  }
  
  if (typeof imageField === 'object' && imageField.file_url) {
    return imageField.file_url;
  }
  
  if (typeof imageField === 'string') {
    return `/files/${imageField}`;
  }
  
  return "";
};

// ============ OPTIMIZED IMAGE WITH SMOOTH BLUR-UP ============
const BlurUpImage = memo(({ src, alt, className = "", style = {}, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const imgElement = imgRef.current;
    if (!imgElement) return;

    // If priority image, load immediately
    if (priority) {
      setIsInView(true);
      return;
    }

    // Create intersection observer for lazy loading
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        }
      },
      { 
        rootMargin: CONFIG.IMAGE_LOADING.ROOT_MARGIN,
        threshold: CONFIG.IMAGE_LOADING.THRESHOLD 
      }
    );

    observerRef.current.observe(imgElement);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority]);

  const imageUrl = getImageUrl(src);

  // Preload image if in view
  useEffect(() => {
    if (isInView && imageUrl && !isLoaded) {
      const img = new Image();
      img.onload = () => {
        // Small delay for smooth transition
        requestAnimationFrame(() => {
          setIsLoaded(true);
        });
      };
      img.onerror = () => {
        setImageError(true);
      };
      img.src = imageUrl;
    }
  }, [isInView, imageUrl, isLoaded]);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ ...style, backgroundColor: "#1a1a2e" }}
    >
      {/* Skeleton Placeholder with subtle gradient animation */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
          isLoaded || imageError ? "opacity-0 scale-105" : "opacity-100 scale-100"
        }`}
      >
        <div className="w-full h-full bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-gray-800/50">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-shimmer" />
        </div>
      </div>

      {/* Error State */}
      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm">
          <div className="text-center transform transition-all duration-300">
            <svg className="w-12 h-12 text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-500 text-sm font-medium">Image not available</p>
          </div>
        </div>
      )}

      {/* Actual Image with smooth fade-in */}
      {isInView && imageUrl && !imageError && (
        <img
          src={imageUrl}
          alt={alt || "Template"}
          className={`w-full h-auto transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-sm"
          }`}
          style={{ display: "block", ...style }}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      )}
    </div>
  );
});

BlurUpImage.displayName = 'BlurUpImage';

// ============ FULL-WIDTH MODAL (OPTIMIZED) ============
const FullWidthModal = memo(({
  image,
  alt,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}) => {
  const [showControls, setShowControls] = useState(true);
  const [isFullWidth, setIsFullWidth] = useState(true);
  const [modalImageLoaded, setModalImageLoaded] = useState(false);
  const [modalImageError, setModalImageError] = useState(false);
  const controlsTimeoutRef = useRef(null);
  const modalContentRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setModalImageLoaded(false);
    setModalImageError(false);
    
    const handleKeydown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handleKeydown);

    // Preload modal image
    if (image) {
      const img = new Image();
      img.onload = () => {
        requestAnimationFrame(() => {
          setModalImageLoaded(true);
        });
      };
      img.onerror = () => setModalImageError(true);
      img.src = getImageUrl(image);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeydown);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext, image]);

  const handleMouseMove = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 2000);
  }, []);

  const toggleFullWidth = useCallback(() => {
    setIsFullWidth(prev => !prev);
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  }, []);

  const modalImageUrl = getImageUrl(image);

  return (
    <div
      className="fixed inset-0 z-50 bg-black"
      onClick={onClose}
      onMouseMove={handleMouseMove}
    >
      {/* Header Controls */}
      <div
        className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
          showControls ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="bg-gradient-to-b from-black/80 to-transparent px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="text-white/80 text-sm font-medium">
              {alt && (
                <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                  {alt}
                </span>
              )}
            </div>
            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={(e) => { e.stopPropagation(); toggleFullWidth(); }}
                className="p-2 text-white hover:text-white transition-all bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm"
                title={isFullWidth ? "Fit to width" : "Full width"}
              >
                {isFullWidth ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9L4 4m0 0v5m0-0h5m6 6l5 5m0 0v-5m0 5h-5" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                )}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="p-2 text-white hover:text-white transition-all bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm"
                title="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {(hasNext || hasPrev) && (
        <div
          className={`fixed inset-y-0 left-0 right-0 z-10 pointer-events-none transition-opacity duration-300 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          {hasPrev && (
            <button
              onClick={(e) => { e.stopPropagation(); setModalImageLoaded(false); setModalImageError(false); onPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-auto bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all backdrop-blur-sm hover:scale-110 active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {hasNext && (
            <button
              onClick={(e) => { e.stopPropagation(); setModalImageLoaded(false); setModalImageError(false); onNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-auto bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all backdrop-blur-sm hover:scale-110 active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}

      {/* Scrollable Image Container */}
      <div
        ref={modalContentRef}
        className="w-full h-full overflow-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ scrollBehavior: "smooth" }}
      >
        <div className={`flex justify-center ${isFullWidth ? "min-h-full" : "min-h-screen"} items-start py-20`}>
          <div className="relative">
            {/* Loading State */}
            {!modalImageLoaded && !modalImageError && (
              <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-2 border-white/20 border-t-white"></div>
              </div>
            )}
            
            {/* Error State */}
            {modalImageError && (
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-12 text-center">
                <svg className="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-white/60 font-medium">Failed to load image</p>
              </div>
            )}
            
            {/* Actual Modal Image */}
            {modalImageUrl && !modalImageError && (
              <img
                src={modalImageUrl}
                alt={alt || "Template"}
                className={`select-none transition-all duration-700 ease-out ${
                  modalImageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{
                  width: isFullWidth ? "100%" : "auto",
                  height: "auto",
                  maxWidth: isFullWidth ? "100%" : "90vw",
                  objectFit: "contain",
                  display: "block",
                }}
                draggable={false}
                loading="eager"
                decoding="async"
              />
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-300 ${
          showControls ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="bg-black/50 backdrop-blur-md rounded-full px-4 py-2 text-white/70 text-xs flex items-center gap-2">
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span>Scroll to view full image</span>
        </div>
      </div>

      {/* Footer Controls */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-20 transition-all duration-300 ${
          showControls ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        }`}
      >
        <div className="bg-gradient-to-t from-black/80 to-transparent px-4 sm:px-6 py-4">
          <div className="flex justify-center gap-3">
            <div className="text-white/60 text-xs sm:text-sm bg-black/50 px-3 py-1 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm">
              🖱️ Scroll vertically • ← → to navigate • ESC to close
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

FullWidthModal.displayName = 'FullWidthModal';

// ============ AUTO SCROLL IMAGE (OPTIMIZED) ============
const AutoScrollImage = memo(({ src, alt, index }) => {
  return (
    <div className="w-full overflow-hidden" style={{ maxHeight: "500px" }}>
      <BlurUpImage
        src={src}
        alt={alt}
        className="w-full"
        style={{
          maxHeight: "500px",
          objectFit: "cover",
          objectPosition: "top",
        }}
        priority={index < 3} // Load first 3 images with priority
      />
    </div>
  );
});

AutoScrollImage.displayName = 'AutoScrollImage';

// ============ GRID ITEM (MEMOIZED) ============
const GridItem = memo(({ item, index, onImageClick }) => {
  const handleClick = useCallback(() => {
    onImageClick(item.image, item.title, index);
  }, [item.image, item.title, index, onImageClick]);

  return (
    <div
      className="cursor-pointer group"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`View ${item.title || 'template'} in full screen`}
    >
      <div
        className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:shadow-2xl"
        style={{
          background: `linear-gradient(135deg, #03071280, #11182780)`,
          border: `1px solid rgba(255, 255, 255, 0.1)`,
        }}
      >
        <AutoScrollImage src={item.image} alt={item.title || "Template"} index={index} />

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Title */}
        {item.title && (
          <div className="absolute inset-x-0 bottom-0 p-5 transform transition-all duration-500 group-hover:translate-y-0">
            <h3 className="text-white font-bold text-lg line-clamp-2 drop-shadow-lg transform transition-all duration-500">
              {item.title}
            </h3>
          </div>
        )}

        {/* Featured Badge */}
        {index < 3 && (
          <div className="absolute top-4 left-4 z-10">
            <span
              className="px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg transform transition-all duration-300 group-hover:scale-110"
              style={{ background: `linear-gradient(135deg, #005B41, #008170)` }}
            >
              Featured
            </span>
          </div>
        )}

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/10 transition-all duration-500 pointer-events-none" />
      </div>
    </div>
  );
});

GridItem.displayName = 'GridItem';

// ============ PROFESSIONAL GRID (OPTIMIZED) ============
const ProfessionalGrid = memo(({ items, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {items.map((item, index) => (
        <GridItem
          key={item.id || index}
          item={item}
          index={index}
          onImageClick={onImageClick}
        />
      ))}
    </div>
  );
});

ProfessionalGrid.displayName = 'ProfessionalGrid';

// ============ LOADING SKELETON (OPTIMIZED) ============
const LoadingSkeleton = memo(() => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="animate-pulse">
        <div className="rounded-2xl bg-gradient-to-br from-gray-800/30 via-gray-900/30 to-gray-800/30 h-[400px] relative overflow-hidden">
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent animate-shimmer" />
        </div>
        <div className="mt-3 px-2 space-y-2">
          <div className="h-4 bg-gray-700/30 rounded w-3/4" />
          <div className="h-3 bg-gray-700/20 rounded w-1/2" />
        </div>
      </div>
    ))}
  </div>
));

LoadingSkeleton.displayName = 'LoadingSkeleton';

// ============ ERROR STATE (OPTIMIZED) ============
const ErrorState = memo(({ error }) => (
  <div className="flex items-center justify-center py-20">
    <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/40 rounded-2xl p-8 max-w-md text-center animate-fade-in-up">
      <svg className="w-12 h-12 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p className="text-white/80 mb-4">{error}</p>
    </div>
  </div>
));

ErrorState.displayName = 'ErrorState';

// ============ EMPTY STATE (OPTIMIZED) ============
const EmptyState = memo(() => (
  <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in-up">
    <div className="w-24 h-24 mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
      <svg className="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
    <p className="text-white/60 text-lg">No templates available at the moment</p>
    <p className="text-white/40 text-sm mt-2">Check back later for updates</p>
  </div>
));

EmptyState.displayName = 'EmptyState';

// ============ LOAD MORE BUTTON (OPTIMIZED) ============
const LoadMoreButton = memo(({ remainingItems, onClick }) => {
  const buttonRef = useRef(null);

  return (
    <div ref={buttonRef} className="flex justify-center mt-12">
      <button
        onClick={onClick}
        className="group px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <div className="flex items-center gap-2">
          <span className="text-white/80 text-sm">Load More</span>
          <svg className="w-4 h-4 text-white/80 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <p className="text-white/40 text-xs mt-1">
          {remainingItems} more template{remainingItems !== 1 ? "s" : ""} available
        </p>
      </button>
    </div>
  );
});

LoadMoreButton.displayName = 'LoadMoreButton';

// ============ HELPER: FORMAT TITLE ============
const formatTitle = (title) => {
  if (!title) return null;

  const words = title.trim().split(" ");
  if (words.length === 1) {
    return (
      <span className="relative inline-block group" style={{ color: "#008170" }}>
        {words[0]}
        <span
          className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-500"
          style={{ background: `linear-gradient(90deg, #008170, #005B41)` }}
        />
      </span>
    );
  }

  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <>
      {firstPart}{" "}
      <span className="relative inline-block group" style={{ color: "#008170" }}>
        {lastWord}
        <span
          className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-500"
          style={{ background: `linear-gradient(90deg, #008170, #005B41)` }}
        />
      </span>
    </>
  );
};

// ============ MAIN COMPONENT ============
const WebsiteTemplates = () => {
  const [templatesData, setTemplatesData] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [modalAlt, setModalAlt] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(9);
  const loadMoreRef = useRef(null);
  const sectionRef = useRef(null);

  // Templates content (header section)
  const templatesContent = {
    badge: templatesData?.badge_title || "Templates",
    title: templatesData?.title || "Website Templates",
    subtitle: templatesData?.subtitle || "A curated collection of our finest website templates",
  };

  // Fetch data from API
  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `${CONFIG.BASE_URL}${CONFIG.API_ENDPOINTS.WEBSITE_TEMPLATES}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.data) {
          // Store parent doctype data
          setTemplatesData(result.data);

          // Process demos child table
          const demos = result.data.demos || [];

          const processedItems = demos.map((demo, index) => {
            // Try all possible image fields
            const imageField = demo.image || demo.attachment || demo.attached_image || demo.file || demo.file_url || "";

            return {
              id: demo.name || `template-${index}`,
              title: demo.primary_value || demo.template_name || demo.heading || "Website Template",
              image: imageField,
              description: demo.description || "",
            };
          });

          setItems(processedItems);
        } else {
          setItems([]);
        }
      } catch (err) {
        console.error("Error fetching website templates:", err);
        setError(err.message || "Failed to load website templates");
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  // Infinite scroll with optimized observer
  useEffect(() => {
    if (!loadMoreRef.current || items.length <= visibleCount) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + CONFIG.IMAGE_LOADING.BATCH_SIZE, items.length));
        }
      },
      { threshold: 0.1, rootMargin: "150px" },
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [items.length, visibleCount]);

  // Memoized handlers
  const handleImageClick = useCallback((imageUrl, title, index) => {
    if (imageUrl) {
      setCurrentImageIndex(index);
      setModalImage(imageUrl);
      setModalAlt(title || "Website template");
    }
  }, []);

  const closeModal = useCallback(() => {
    setModalImage(null);
    setModalAlt("");
  }, []);

  const handleNext = useCallback(() => {
    const nextIndex = (currentImageIndex + 1) % items.length;
    setCurrentImageIndex(nextIndex);
    setModalImage(items[nextIndex].image);
    setModalAlt(items[nextIndex].title || "Website template");
  }, [currentImageIndex, items]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentImageIndex - 1 + items.length) % items.length;
    setCurrentImageIndex(prevIndex);
    setModalImage(items[prevIndex].image);
    setModalAlt(items[prevIndex].title || "Website template");
  }, [currentImageIndex, items]);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + CONFIG.IMAGE_LOADING.BATCH_SIZE, items.length));
  }, [items.length]);

  const visibleItems = items.slice(0, visibleCount);
  const remainingItems = items.length - visibleCount;

  return (
    <>
      <section ref={sectionRef} className="py-20 lg:py-16 relative overflow-hidden">
        {/* ====== PREMIUM MODERN BACKGROUND ====== */}
        <div className="absolute inset-0 bg-[#030712]">
          {/* Noise Texture Overlay */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "200px 200px",
            }}
          />
          {/* Main Grid Lines */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 animate-grid-primary"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
                backgroundSize: "100px 100px",
              }}
            />
          </div>
          {/* Fine Grid */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
                backgroundSize: "25px 25px",
              }}
            />
          </div>
          {/* Orb 1 */}
          <div
            className="absolute animate-orb-2"
            style={{
              bottom: "-15%",
              left: "-5%",
              width: "700px",
              height: "700px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 25%, rgba(139, 92, 246, 0.01) 50%, transparent 70%)",
              filter: "blur(100px)",
            }}
          />
          {/* Orb 2 */}
          <div
            className="absolute animate-orb-3"
            style={{
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.02) 30%, transparent 70%)",
              filter: "blur(120px)",
            }}
          />
          {/* Edge Vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 50%, rgba(3, 7, 18, 0.6) 100%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/20 opacity-0 animate-fade-in-up">
              <Layout className="w-4 h-4" style={{ color: "#008170" }} />
              <span className="text-white">{templatesContent.badge}</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 opacity-0 animate-fade-in-up stagger-1">
              {formatTitle(templatesContent.title)}
            </h2>

            <p className="text-white/80 text-lg opacity-0 animate-fade-in-up stagger-2">
              {templatesContent.subtitle}
            </p>
          </div>

          {/* States */}
          {loading && <LoadingSkeleton />}
          {!loading && error && <ErrorState error={error} />}
          {!loading && !error && items.length === 0 && <EmptyState />}

          {/* Grid */}
          {!loading && !error && items.length > 0 && (
            <>
              <ProfessionalGrid items={visibleItems} onImageClick={handleImageClick} />
              {visibleCount < items.length && (
                <LoadMoreButton remainingItems={remainingItems} onClick={handleLoadMore} />
              )}
            </>
          )}
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <FullWidthModal
          image={modalImage}
          alt={modalAlt}
          onClose={closeModal}
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={items.length > 1 && currentImageIndex < items.length - 1}
          hasPrev={items.length > 1 && currentImageIndex > 0}
        />
      )}

      <style>{`
        @keyframes gridPrimaryFade {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
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
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-grid-primary { animation: gridPrimaryFade 5s ease-in-out infinite; }
        .animate-orb-2 { animation: floatOrb2 18s ease-in-out infinite; }
        .animate-orb-3 { animation: floatOrb3 12s ease-in-out infinite; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.3s; }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Optimized scrollbar */
        .overflow-auto {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1);
        }
        .overflow-auto::-webkit-scrollbar { width: 8px; }
        .overflow-auto::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.1); border-radius: 4px; }
        .overflow-auto::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.3); border-radius: 4px; }
        .overflow-auto::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.5); }
        
        /* Smooth rendering */
        img {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0);
        }
      `}</style>
    </>
  );
};

export default WebsiteTemplates;