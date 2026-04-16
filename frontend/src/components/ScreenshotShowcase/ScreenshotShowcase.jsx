import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  Rocket,
  Target,
  Code,
  Shield,
  Heart,
  CheckCircle,
  Zap,
  Globe,
  Eye,
} from "lucide-react";

// Configuration constants
const CONFIG = {
  BASE_URL: "",
  API_ENDPOINTS: {
    PROJECT_SCREENSHOT: "/api/resource/Project Screenshot",
  },
  COLORS: {
    primary: "#0A0A0A",
    secondary: "#1A1A1A",
    accent1: "#005B41",
    accent2: "#008170",
    accent3: "#00A876",
  },
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
  const controlsTimeoutRef = useRef(null);
  const modalContentRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
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
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

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

  return (
    <div
      className="fixed inset-0 z-50 bg-black"
      onClick={onClose}
      onMouseMove={handleMouseMove}
    >
      {/* Header Controls */}
      <div
        className={`
        fixed top-0 left-0 right-0 z-20
        transition-all duration-300
        ${showControls ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
      `}
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
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullWidth();
                }}
                className="p-2 text-white hover:text-white transition-all bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm"
                title={isFullWidth ? "Fit to width" : "Full width"}
              >
                {isFullWidth ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 9L4 4m0 0v5m0-5h5m6 6l5 5m0 0v-5m0 5h-5"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                )}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="p-2 text-white hover:text-white transition-all bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm"
                title="Close"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {(hasNext || hasPrev) && (
        <div
          className={`
          fixed inset-y-0 left-0 right-0 z-10 pointer-events-none
          transition-opacity duration-300
          ${showControls ? "opacity-100" : "opacity-0"}
        `}
        >
          {hasPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-auto bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all backdrop-blur-sm hover:scale-110"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}
          {hasNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-auto bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all backdrop-blur-sm hover:scale-110"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
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
        <div
          className={`flex justify-center ${isFullWidth ? "min-h-full" : "min-h-screen"} items-start py-20`}
        >
          <img
            src={image}
            alt={alt}
            className="select-none"
            style={{
              width: isFullWidth ? "100%" : "auto",
              height: "auto",
              maxWidth: isFullWidth ? "100%" : "90vw",
              objectFit: "contain",
              display: "block",
            }}
            draggable={false}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`
        fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20
        transition-all duration-300
        ${showControls ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      >
        <div className="bg-black/50 backdrop-blur-md rounded-full px-4 py-2 text-white/70 text-xs flex items-center gap-2">
          <svg
            className="w-4 h-4 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <span>Scroll to view full image</span>
        </div>
      </div>

      {/* Footer Controls */}
      <div
        className={`
        fixed bottom-0 left-0 right-0 z-20
        transition-all duration-300
        ${showControls ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}
      `}
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

// ============ AUTO-SCROLL IMAGE COMPONENT (ALWAYS ACTIVE) ============
const AutoScrollImage = ({ src, alt }) => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const [needsScroll, setNeedsScroll] = useState(false);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const checkScrollNeeded = () => {
      if (element) {
        const needs = element.scrollHeight > element.clientHeight;
        setNeedsScroll(needs);
        return needs;
      }
      return false;
    };

    checkScrollNeeded();

    const resizeObserver = new ResizeObserver(() => {
      checkScrollNeeded();
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [src]);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element || !needsScroll) return;

    const startAutoScroll = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      const scrollHeight = element.scrollHeight;
      const clientHeight = element.clientHeight;
      const maxScroll = scrollHeight - clientHeight;

      if (maxScroll <= 0) return;

      let startTime = null;
      const duration = 5000;

      const animateScroll = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeInOutCubic = (t) => {
          return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const scrollPosition = maxScroll * easeInOutCubic(progress);
        element.scrollTop = scrollPosition;

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animateScroll);
        } else {
          element.scrollTo({ top: 0, behavior: "smooth" });
          startTime = null;
          setTimeout(() => {
            if (element) {
              animationRef.current = requestAnimationFrame(animateScroll);
            }
          }, 500);
        }
      };

      animationRef.current = requestAnimationFrame(animateScroll);
    };

    startAutoScroll();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [needsScroll]);

  return (
    <div
      ref={scrollRef}
      className="w-full overflow-hidden"
      style={{
        maxHeight: "500px",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover object-top"
        style={{ display: "block" }}
        loading="lazy"
      />
    </div>
  );
};

// ============ 3-COLUMN PROFESSIONAL GRID ============
const ProfessionalGrid = ({ items, onImageClick }) => {
  const [loadedImages, setLoadedImages] = useState({});
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {items.map((item, index) => {
          const isHovered = hoveredId === item.id;

          return (
            <div
              key={item.id || index}
              className="group cursor-pointer transition-all duration-500"
              style={{
                animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s forwards`,
                opacity: 0,
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onImageClick(item.image, item.title, index)}
            >
              <div
                className={`
                relative overflow-hidden rounded-2xl backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500
                ${isHovered ? "scale-[1.02] shadow-2xl" : "scale-100"}
              `}
                style={{
                  background: `linear-gradient(135deg, ${CONFIG.COLORS.primary}80, ${CONFIG.COLORS.secondary}80)`,
                  border: `1px solid ${CONFIG.COLORS.accent2}40`,
                }}
              >
                <div className="relative">
                  {!loadedImages[item.id || index] && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 animate-pulse rounded-2xl" />
                  )}

                  <AutoScrollImage
                    src={item.image}
                    alt={item.title || "Project"}
                  />

                  <div
                    className={`
                    absolute inset-x-0 bottom-0 p-5
                    transform transition-all duration-500 pointer-events-none
                    ${isHovered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
                  `}
                  >
                    {item.title && (
                      <>
                        <h3 className="text-white font-bold text-lg mb-1 line-clamp-2 drop-shadow-lg">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-white/80 text-sm mt-2 drop-shadow-lg">
                          <span>View Project</span>
                          <Eye className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </>
                    )}
                  </div>

                  <div
                    className={`
                    absolute top-4 right-4
                    transform transition-all duration-300 pointer-events-none
                    ${isHovered ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}
                  `}
                  >
                    <div className="bg-black/40 backdrop-blur-md rounded-full p-2.5">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  {index < 3 && (
                    <div
                      className={`
                      absolute top-4 left-4
                      transform transition-all duration-300 pointer-events-none
                      ${isHovered ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}
                    `}
                    >
                      <span
                        className="bg-gradient-to-r from-accent1 to-accent2 px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${CONFIG.COLORS.accent1}, ${CONFIG.COLORS.accent2})`,
                        }}
                      >
                        Featured
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {item.title && (
                <div
                  className={`
                  mt-3 px-2 transition-all duration-300
                  ${isHovered ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"}
                `}
                >
                  <p className="text-white/70 text-sm font-medium truncate group-hover:text-white transition-colors">
                    {item.title}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
          style={{ background: CONFIG.COLORS.accent2, opacity: 0.1 }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"
          style={{ background: CONFIG.COLORS.accent1, opacity: 0.1 }}
        />
      </div>
    </div>
  );
};

// ============ LOADING SKELETON ============
const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="animate-pulse">
        <div className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 h-[400px]" />
        <div className="mt-3 px-2 space-y-2">
          <div className="h-4 bg-gray-700 rounded w-3/4" />
          <div className="h-3 bg-gray-700/50 rounded w-1/2" />
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
      <span
        className="relative inline-block group"
        style={{ color: CONFIG.COLORS.accent2 }}
      >
        {words[0]}
        <span
          className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
          style={{
            background: `linear-gradient(90deg, ${CONFIG.COLORS.accent2}, ${CONFIG.COLORS.accent1})`,
          }}
        />
      </span>
    );
  }

  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <>
      {firstPart}{" "}
      <span
        className="relative inline-block group"
        style={{ color: CONFIG.COLORS.accent2 }}
      >
        {lastWord}
        <span
          className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
          style={{
            background: `linear-gradient(90deg, ${CONFIG.COLORS.accent2}, ${CONFIG.COLORS.accent1})`,
          }}
        />
      </span>
    </>
  );
};

// ============ MAIN COMPONENT ============
const ShowcaseGrid = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [modalAlt, setModalAlt] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(9);
  const [showcaseContent, setShowcaseContent] = useState({
    badge: "Our Work",
    title: "Project Showcase",
    subtitle: "A curated collection of our finest work",
  });
  const loadMoreRef = useRef(null);

  // Fetch showcase content from Home Page doctype
  useEffect(() => {
    const fetchShowcaseContent = async () => {
      try {
        const response = await fetch("/api/resource/Home Page/Home Page");

        if (response.ok) {
          const data = await response.json();
          if (data.data) {
            setShowcaseContent({
              badge: data.data.showcase_badge || "Our Work",
              title: data.data.showcase_title || "Project Showcase",
              subtitle:
                data.data.showcase_subtitle ||
                "A curated collection of our finest work",
            });
          }
        }
      } catch (err) {
        console.error("Error fetching showcase content:", err);
      }
    };

    fetchShowcaseContent();
  }, []);

  // Fetch data
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const listResponse = await fetch(
        `${CONFIG.API_ENDPOINTS.PROJECT_SCREENSHOT}?fields=["name"]&limit_page_length=1&order_by=creation desc`,
        {
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        },
      );

      if (!listResponse.ok) throw new Error(`Failed to fetch project list`);
      const listData = await listResponse.json();

      if (!listData.data || !listData.data.length) {
        setItems([]);
        setLoading(false);
        return;
      }

      const docName = listData.data[0].name;
      const detailResponse = await fetch(
        `${CONFIG.API_ENDPOINTS.PROJECT_SCREENSHOT}/${docName}`,
        {
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        },
      );

      if (!detailResponse.ok)
        throw new Error(`Failed to fetch project details`);
      const detailData = await detailResponse.json();

      const formatted = (detailData.data?.demo_project || [])
        .map((item, idx) => ({
          id: item.id || idx,
          title: item.primary_value?.trim() || null,
          image: item.attachment ? CONFIG.BASE_URL + item.attachment : null,
        }))
        .filter((item) => item.image);

      setItems(formatted);
    } catch (err) {
      console.error("Error fetching showcase data:", err);
      setError("Unable to load projects. Please check your connection.");
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
      setModalAlt(title || "Project showcase");
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
    setModalAlt(items[nextIndex].title || "Project showcase");
  };

  const handlePrev = () => {
    const prevIndex = (currentImageIndex - 1 + items.length) % items.length;
    setCurrentImageIndex(prevIndex);
    setModalImage(items[prevIndex].image);
    setModalAlt(items[prevIndex].title || "Project showcase");
  };

  const visibleItems = items.slice(0, visibleCount);
  const remainingItems = items.length - visibleCount;

  return (
    <>
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${CONFIG.COLORS.primary} 0%, ${CONFIG.COLORS.secondary} 50%, ${CONFIG.COLORS.accent1} 100%)`,
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Decorative elements */}
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
          style={{ background: CONFIG.COLORS.accent2, opacity: 0.2 }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"
          style={{ background: CONFIG.COLORS.accent1, opacity: 0.2 }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-4000"
          style={{ background: CONFIG.COLORS.primary, opacity: 0.1 }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header Section - Styled like reference */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/20">
              <Rocket
                className="w-4 h-4"
                style={{ color: CONFIG.COLORS.accent2 }}
              />
              <span className="text-white">{showcaseContent.badge}</span>
            </div>

            {/* Formatted Title with Last Word Highlight */}
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {formatTitle(showcaseContent.title)}
            </h2>

            <p className="text-white/80 text-lg">{showcaseContent.subtitle}</p>
          </div>

          {/* Loading State */}
          {loading && <LoadingSkeleton />}

          {/* Error State */}
          {!loading && error && (
            <div className="flex items-center justify-center py-20">
              <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/40 rounded-2xl p-8 max-w-md text-center">
                <svg
                  className="w-12 h-12 text-red-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-white/80 mb-4">{error}</p>
                <button
                  onClick={fetchData}
                  className="px-6 py-2 rounded-lg text-white bg-white/10 hover:bg-white/20 transition-all duration-300"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && items.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-24 h-24 mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white/30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-white/60 text-lg">
                No projects available at the moment
              </p>
              <p className="text-white/40 text-sm mt-2">
                Check back later for updates
              </p>
            </div>
          )}

          {/* Professional Grid */}
          {!loading && !error && items.length > 0 && (
            <>
              <ProfessionalGrid
                items={visibleItems}
                onImageClick={handleImageClick}
              />

              {/* Load More */}
              {visibleCount < items.length && (
                <div ref={loadMoreRef} className="flex justify-center mt-12">
                  <button
                    onClick={() =>
                      setVisibleCount((prev) =>
                        Math.min(prev + 6, items.length),
                      )
                    }
                    className="group px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-white/80 text-sm">Load More</span>
                      <svg
                        className="w-4 h-4 text-white/80 group-hover:translate-y-0.5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                    <p className="text-white/40 text-xs mt-1">
                      {remainingItems} more project
                      {remainingItems !== 1 ? "s" : ""} available
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
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Modal scrollbar */
        .overflow-auto::-webkit-scrollbar {
          width: 8px;
        }
        
        .overflow-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        
        .overflow-auto::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
        
        .overflow-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </>
  );
};

export default ShowcaseGrid;
