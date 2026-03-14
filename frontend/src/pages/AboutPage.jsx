// AboutPage.jsx
import React, { useState, useEffect } from "react";
import {
  Users,
  Target,
  Award,
  Heart,
  Globe,
  Rocket,
  Code,
  Coffee,
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
import { useTheme } from "../hooks/useTheme";

const AboutPage = () => {
  // Use theme hook
  const {
    colors,
    loading: themeLoading,
    error: themeError,
    refreshTheme,
  } = useTheme();

  // State for about page data
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch about page data
  useEffect(() => {
    fetchAboutPageData();
  }, []);

  const fetchAboutPageData = async () => {
    try {
      setLoading(true);
      // Using /api/resource endpoint for Single doctype
      const response = await fetch("/api/resource/About%20Page/About%20Page", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies for authentication
      });

      if (!response.ok) {
        if (response.status === 403) {
          // Try public endpoint if authentication fails
          const publicResponse = await fetch(
            "/api/resource/About%20Page/About%20Page?run_method=1",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            },
          );

          if (!publicResponse.ok) {
            throw new Error("Failed to fetch about page data");
          }

          const publicData = await publicResponse.json();
          if (publicData.data) {
            setAboutData(publicData.data);
          }
        } else {
          throw new Error("Failed to fetch about page data");
        }
      } else {
        const data = await response.json();
        if (data.data) {
          setAboutData(data.data);
        }
      }

      setError(null);
    } catch (err) {
      console.error("Error fetching about page:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to color the last word of a title
  const formatTitle = (title) => {
    if (!title) return null;
    const words = title.split(" ");
    if (words.length === 1) return <span>{title}</span>;

    const lastWord = words.pop();
    const firstPart = words.join(" ");

    return (
      <>
        {firstPart}{" "}
        <span style={{ color: colors?.accent2 || "#008170" }}>{lastWord}</span>
      </>
    );
  };

  // Static values as fallback
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "We push boundaries and embrace cutting-edge technologies to deliver future-proof solutions.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Partnership",
      description:
        "We build lasting relationships by understanding your vision and treating your success as our own.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Excellence",
      description:
        "Our team maintains the highest coding standards with rigorous testing and best practices.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description:
        "We create solutions that make a difference, serving clients across 20+ countries worldwide.",
    },
  ];

  // Show loading state
  if (loading || themeLoading) {
    return (
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[600px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Error message with retry button */}
      {(themeError || error) && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm z-30 flex items-center gap-3">
          <span>Error: {themeError || error}</span>
          <button
            onClick={() => {
              refreshTheme();
              fetchAboutPageData();
            }}
            className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs transition-colors"
          >
            Retry
          </button>
        </div>
      )}

      {/* Background with gradient matching hero section */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${colors?.primary || "#0F0F0F"} 0%, ${colors?.secondary || "#232D3F"} 50%, ${colors?.accent1 || "#005B41"} 100%)`,
        }}
      />

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-ping"
          style={{
            width: Math.random() * 4 + 2 + "px",
            height: Math.random() * 4 + 2 + "px",
            backgroundColor:
              i % 2 === 0
                ? colors?.accent2 || "#008170"
                : colors?.accent1 || "#005B41",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.3}s`,
            opacity: 0.1,
            zIndex: 0,
          }}
        />
      ))}

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
        className="absolute top-20 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        style={{ background: colors?.accent2 || "#008170", opacity: 0.15 }}
      />
      <div
        className="absolute top-40 right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
        style={{ background: colors?.accent1 || "#005B41", opacity: 0.15 }}
      />
      <div
        className="absolute bottom-20 left-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
        style={{ background: colors?.primary || "#0F0F0F", opacity: 0.2 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Story Section */}
        {(aboutData?.story_title ||
          aboutData?.story_description ||
          aboutData?.story_image) && (
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 mt-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                {formatTitle(aboutData?.story_title || "Our Story")}
              </h2>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                {aboutData?.story_description ||
                  "Founded in 2010, TechStudio began as a small team of developers with a big dream: to help businesses leverage technology for growth and innovation. What started as a passion project in a San Francisco garage has grown into a global software development company trusted by over 500 clients worldwide."}
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={
                    aboutData?.story_image ||
                    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  }
                  alt="Our team collaborating"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${colors?.primary || "#0F0F0F"}80 0%, transparent 50%, ${colors?.accent1 || "#005B41"}80 100%)`,
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Mission Section */}
        {(aboutData?.mission_title ||
          aboutData?.mission_description ||
          aboutData?.mission_image) && (
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={
                    aboutData?.mission_image ||
                    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  }
                  alt="Team working on mission"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${colors?.primary || "#0F0F0F"}80 0%, transparent 50%, ${colors?.accent2 || "#008170"}80 100%)`,
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-6"
                  style={{
                    background: `linear-gradient(135deg, ${colors?.accent2 || "#008170"}30, ${colors?.accent1 || "#005B41"}30)`,
                    color: colors?.accent2 || "#008170",
                  }}
                >
                  <Rocket className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  {formatTitle(aboutData?.mission_title || "Our Mission")}
                </h2>
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {aboutData?.mission_description ||
                  "To empower businesses worldwide with innovative, scalable, and cutting-edge software solutions that drive digital transformation and create lasting value. We're committed to delivering excellence through technology, fostering innovation, and building solutions that make a difference."}
              </p>
            </div>
          </div>
        )}

        {/* Vision Section */}
        {(aboutData?.vission_title ||
          aboutData?.vission_description ||
          aboutData?.vission_image) && (
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative lg:order-2">
              <div className="flex items-center gap-4 mb-6 lg:hidden">
                <div
                  className="p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-6"
                  style={{
                    background: `linear-gradient(135deg, ${colors?.accent2 || "#008170"}30, ${colors?.accent1 || "#005B41"}30)`,
                    color: colors?.accent2 || "#008170",
                  }}
                >
                  <Eye className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  {formatTitle(aboutData?.vission_title || "Our Vision")}
                </h2>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={
                    aboutData?.vission_image ||
                    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  }
                  alt="Future vision and innovation"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${colors?.primary || "#0F0F0F"}80 0%, transparent 50%, ${colors?.accent1 || "#005B41"}80 100%)`,
                  }}
                />
              </div>
            </div>
            <div className="lg:order-1">
              <div className="hidden lg:flex items-center gap-4 mb-6">
                <div
                  className="p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-6"
                  style={{
                    background: `linear-gradient(135deg, ${colors?.accent2 || "#008170"}30, ${colors?.accent1 || "#005B41"}30)`,
                    color: colors?.accent2 || "#008170",
                  }}
                >
                  <Eye className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  {formatTitle(aboutData?.vission_title || "Our Vision")}
                </h2>
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {aboutData?.vission_description ||
                  "To be the global leader in digital innovation, recognized for transforming ideas into reality and shaping the future of technology. We envision a world where businesses of all sizes can leverage cutting-edge technology to solve complex challenges and create meaningful impact."}
              </p>
            </div>
          </div>
        )}

        {/* Values Section */}
        {(aboutData?.value_title ||
          aboutData?.value_subtitle ||
          aboutData?.value_items?.length > 0) && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {formatTitle(aboutData?.value_title || "Our Core Values")}
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                {aboutData?.value_subtitle ||
                  "These principles guide everything we do, from how we build software to how we treat our clients and each other."}
              </p>
            </div>

            {/* Dynamic Value Items from Table */}
            {aboutData?.value_items && aboutData.value_items.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {aboutData.value_items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transform hover:-translate-y-2 hover:border-white/30 transition-all duration-300 group"
                  >
                    {item.attachment ? (
                      <div className="mb-4 w-12 h-12 rounded-lg overflow-hidden">
                        <img
                          src={item.attachment}
                          alt={item.primary_value}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </div>
                    ) : (
                      <div
                        className="p-3 rounded-lg inline-block mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                        style={{
                          background: `linear-gradient(135deg, ${colors?.accent2 || "#008170"}20, ${colors?.accent1 || "#005B41"}20)`,
                          color: colors?.accent2 || "#008170",
                        }}
                      >
                        <Target className="w-8 h-8" />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                      {item.primary_value}
                    </h3>
                    <p className="text-white/70 group-hover:text-white/80 transition-colors">
                      {item.secondary_value}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              // Fallback static values
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transform hover:-translate-y-2 hover:border-white/30 transition-all duration-300 group"
                  >
                    <div
                      className="p-3 rounded-lg inline-block mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background: `linear-gradient(135deg, ${colors?.accent2 || "#008170"}20, ${colors?.accent1 || "#005B41"}20)`,
                        color: colors?.accent2 || "#008170",
                      }}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-white/70 group-hover:text-white/80 transition-colors">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CTA Section */}
        {(aboutData?.cta_title ||
          aboutData?.cta_subtitle ||
          aboutData?.cta_button) && (
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-12 hover:border-white/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-4">
                {formatTitle(
                  aboutData?.cta_title || "Ready to Start Your Journey?",
                )}
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                {aboutData?.cta_subtitle ||
                  "Join 500+ companies that have transformed their businesses with our software solutions."}
              </p>
              <a
                href={aboutData?.cta_button_action || "#contact"}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colors?.accent2 || "#008170"}, ${colors?.accent1 || "#005B41"})`,
                  color: "white",
                }}
              >
                <span className="relative z-10">
                  {aboutData?.cta_button || "Get Started Today"}
                </span>
                <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ background: "white" }}
                />
              </a>
            </div>
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
        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
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

export default AboutPage;
