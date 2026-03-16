
// HeroSection.jsx
import React, { useState, useEffect } from "react";
import {
  Zap,
  ArrowRight,
  Play,
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

  useEffect(() => {
    fetchHomePageData();
  }, []);

  const fetchHomePageData = async () => {
    try {
      setLoading(true);
      // Using Frappe REST API pattern: /api/resource/[Doctype]/[Document Name]
      const response = await fetch('/api/resource/Home%20Page/Home%20Page', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add authentication if needed
          // 'Authorization': `token ${frappe.session}`
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
    hero_image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <Zap className="w-4 h-4" style={{ color: themeColors.accent2 }} />
              <span>{content.hero_badge}</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              {renderTitle()}
            </h1>

            <p className="text-lg lg:text-xl text-white/80 mb-8 leading-relaxed">
              {content.hero_subtitle}
            </p>

            {/* CTA Buttons with Link components */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to={content.hero_primary_button_url || "/contact"}
                className="group px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                style={{
                  background: `linear-gradient(135deg, ${themeColors.accent2}, ${themeColors.accent1})`,
                  color: "white",
                }}
              >
                {content.hero_primary_button_title}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to={content.hero_secondary_button_url || "/case-studies"}
                className="group px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 border-2"
                style={{
                  borderColor: themeColors.accent2,
                  color: themeColors.accent2,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = themeColors.accent2;
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = themeColors.accent2;
                }}
              >
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {content.hero_secondary_button_title}
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {content.hero_image ? (
                <img
                  src={content.hero_image.startsWith('http') ? content.hero_image : content.hero_image}
                  alt="Hero section"
                  className="w-full h-auto"
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
      `}</style>
    </section>
  );
};

export default HeroSection;