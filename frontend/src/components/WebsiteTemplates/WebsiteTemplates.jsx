// WebsiteTemplates.jsx
import React, { useEffect, useState, useCallback, useRef } from "react";
import { Layout } from "lucide-react";
import OptimizedImage from "../ui/OptimizedImage";

// Configuration constants
const CONFIG = {
  BASE_URL: "",
  API_ENDPOINTS: {
    WEBSITE_TEMPLATES: "/api/resource/Website Templates/Website Templates",
  },
};

// Helper function to get image URL (handles both URL and attachment)
const getImageUrl = (imageField) => {
  if (!imageField) return "";
  
  // If it's already a full URL
  if (typeof imageField === 'string' && (imageField.startsWith('http') || imageField.startsWith('/'))) {
    return imageField;
  }
  
  // If it's a file URL from attachments
  if (typeof imageField === 'string' && imageField.includes('/files/')) {
    return imageField;
  }
  
  // If it's an object with file_url (ERPNext attachment format)
  if (typeof imageField === 'object' && imageField.file_url) {
    return imageField.file_url;
  }
  
  // If it's just a filename, construct the URL
  if (typeof imageField === 'string') {
    return `/files/${imageField}`;
  }
  
  return "";
};

// ============ IMAGE WITH BLUR-UP PLACEHOLDER ============
const BlurUpImage = ({ src, alt, className = "", style = {}, widths, sizes }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const imageUrl = getImageUrl(src);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ ...style, backgroundColor: "#1a1a2e" }}
    >
      {/* Placeholder/Skeleton */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isLoaded || imageError ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Error State */}
      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="text-center">
            <svg className="w-12 h-12 text-gray-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-500 text-sm">Image not available</p>
          </div>
        </div>
      )}

      {/* Actual Image */}
      {isInView && imageUrl && !imageError && (
        <img
          src={imageUrl}
          alt={alt || "Template"}
          className={`w-full h-auto transition-opacity duration-700 ease-in-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ display: "block", ...style }}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setImageError(true);
            console.warn("Image failed to load:", imageUrl);
          }}
          loading="lazy"
        />
      )}
    </div>
  );
};

// Full-Width Modal Component
const FullWidthModal = ({
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

  const toggleFullWidth = () => {
    setIsFullWidth(!isFullWidth);
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  };

  const modalImageUrl = getImageUrl(image);

  return (
    <div
      className="fixed inset-0 z-50 bg-black"
      onClick={onClose}
      onMouseMove={handleMouseMove}
    >
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

      {(hasNext || hasPrev) && (
        <div
          className={`fixed inset-y-0 left-0 right-0 z-10 pointer-events-none transition-opacity duration-300 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          {hasPrev && (
            <button
              onClick={(e) => { e.stopPropagation(); setModalImageLoaded(false); setModalImageError(false); onPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-auto bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all backdrop-blur-sm hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {hasNext && (
            <button
              onClick={(e) => { e.stopPropagation(); setModalImageLoaded(false); setModalImageError(false); onNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-auto bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all backdrop-blur-sm hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}

      <div
        ref={modalContentRef}
        className="w-full h-full overflow-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ scrollBehavior: "smooth" }}
      >
        <div className={`flex justify-center ${isFullWidth ? "min-h-full" : "min-h-screen"} items-start py-20`}>
          <div className="relative">
            {!modalImageLoaded && !modalImageError && (
              <div className="absolute inset-0 bg-gray-900 animate-pulse rounded-lg flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              </div>
            )}
            {modalImageError && (
              <div className="bg-gray-900 rounded-lg p-12 text-center">
                <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-white/60">Failed to load image</p>
              </div>
            )}
            {modalImageUrl && !modalImageError && (
              <img
                src={modalImageUrl}
                alt={alt || "Template"}
                className={`select-none transition-opacity duration-500 ${
                  modalImageLoaded ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  width: isFullWidth ? "100%" : "auto",
                  height: "auto",
                  maxWidth: isFullWidth ? "100%" : "90vw",
                  objectFit: "contain",
                  display: "block",
                }}
                draggable={false}
                onLoad={() => setModalImageLoaded(true)}
                onError={() => setModalImageError(true)}
              />
            )}
          </div>
        </div>
      </div>

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
};

// ============ STATIC IMAGE COMPONENT (WITH BLUR-UP) ============
const AutoScrollImage = ({ src, alt }) => {
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
        widths={[480, 768, 1200]}
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
      />
    </div>
  );
};

// ============ SIMPLE 3-COLUMN GRID ============
const ProfessionalGrid = ({ items, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {items.map((item, index) => (
        <div
          key={item.id || index}
          className="cursor-pointer group"
          onClick={() => onImageClick(item.image, item.title, index)}
        >
          <div
            className="relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
            style={{
              background: `linear-gradient(135deg, #03071280, #11182780)`,
              border: `1px solid rgba(255, 255, 255, 0.1)`,
            }}
          >
            <AutoScrollImage src={item.image} alt={item.title || "Template"} />

            {item.title && (
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <h3 className="text-white font-bold text-lg line-clamp-2 drop-shadow-lg">
                  {item.title}
                </h3>
              </div>
            )}

            {index < 3 && (
              <div className="absolute top-4 left-4">
                <span
                  className="px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg"
                  style={{ background: `linear-gradient(135deg, #005B41, #008170)` }}
                >
                  Featured
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// ============ LOADING SKELETON ============
const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="animate-pulse">
        <div className="rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 h-[400px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        </div>
        <div className="mt-3 px-2 space-y-2">
          <div className="h-4 bg-gray-700/50 rounded w-3/4" />
          <div className="h-3 bg-gray-700/30 rounded w-1/2" />
        </div>
      </div>
    ))}
  </div>
);

// Helper function to format title with colored last word
const formatTitle = (title) => {
  if (!title) return null;

  const words = title.trim().split(" ");
  if (words.length === 1) {
    return (
      <span className="relative inline-block group" style={{ color: "#008170" }}>
        {words[0]}
        <span
          className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
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
          className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
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

        console.log("Fetching from:", `${CONFIG.BASE_URL}${CONFIG.API_ENDPOINTS.WEBSITE_TEMPLATES}`);

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
        console.log("API Response:", result);

        if (result.data) {
          // Store parent doctype data (badge_title, title, subtitle)
          setTemplatesData(result.data);

          // Process demos child table
          const demos = result.data.demos || [];
          console.log("Demos data:", demos);

          const processedItems = demos.map((demo, index) => {
            // Try all possible image fields
            const imageField = demo.image || demo.attachment || demo.attached_image || demo.file || demo.file_url || "";
            const imageUrl = getImageUrl(imageField);
            
            console.log(`Demo ${index} - Raw image field:`, imageField);
            console.log(`Demo ${index} - Processed image URL:`, imageUrl);

            return {
              id: demo.name || `template-${index}`,
              title: demo.title || demo.template_name || demo.heading || "Website Template",
              image: imageField, // Store the original field, getImageUrl will process it
              description: demo.description || "",
            };
          });

          console.log("Processed items:", processedItems);
          setItems(processedItems);
        } else {
          console.log("No data in response");
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

  // Infinite scroll
  useEffect(() => {
    if (!loadMoreRef.current || items.length <= visibleCount) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 6, items.length));
        }
      },
      { threshold: 0.1, rootMargin: "100px" },
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [items.length, visibleCount]);

  const handleImageClick = (imageUrl, title, index) => {
    if (imageUrl) {
      setCurrentImageIndex(index);
      setModalImage(imageUrl);
      setModalAlt(title || "Website template");
    }
  };

  const closeModal = () => {
    setModalImage(null);
    setModalAlt("");
  };

  const handleNext = () => {
    const nextIndex = (currentImageIndex + 1) % items.length;
    setCurrentImageIndex(nextIndex);
    setModalImage(items[nextIndex].image);
    setModalAlt(items[nextIndex].title || "Website template");
  };

  const handlePrev = () => {
    const prevIndex = (currentImageIndex - 1 + items.length) % items.length;
    setCurrentImageIndex(prevIndex);
    setModalImage(items[prevIndex].image);
    setModalAlt(items[prevIndex].title || "Website template");
  };

  const visibleItems = items.slice(0, visibleCount);
  const remainingItems = items.length - visibleCount;

  return (
    <>
      <section className="py-20 lg:py-16 relative overflow-hidden">
        {/* ====== PREMIUM MODERN BACKGROUND ====== */}
        <div className="absolute inset-0 bg-[#030712]">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "200px 200px",
            }}
          />
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

          {/* Loading State */}
          {loading && <LoadingSkeleton />}

          {/* Error State */}
          {!loading && error && (
            <div className="flex items-center justify-center py-20">
              <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/40 rounded-2xl p-8 max-w-md text-center">
                <svg className="w-12 h-12 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-white/80 mb-4">{error}</p>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && items.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-24 h-24 mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-white/60 text-lg">No templates available at the moment</p>
              <p className="text-white/40 text-sm mt-2">Check back later for updates</p>
            </div>
          )}

          {/* Professional Grid */}
          {!loading && !error && items.length > 0 && (
            <>
              <ProfessionalGrid items={visibleItems} onImageClick={handleImageClick} />

              {/* Load More */}
              {visibleCount < items.length && (
                <div ref={loadMoreRef} className="flex justify-center mt-12">
                  <button
                    onClick={() => setVisibleCount((prev) => Math.min(prev + 6, items.length))}
                    className="group px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105"
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
        .overflow-auto::-webkit-scrollbar { width: 8px; }
        .overflow-auto::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.1); border-radius: 4px; }
        .overflow-auto::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.3); border-radius: 4px; }
        .overflow-auto::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.5); }
      `}</style>
    </>
  );
};

export default WebsiteTemplates;