
// Footer.jsx
import React, { memo } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Shield,
  Code,
  Briefcase,
  Users,
  BookOpen,
  Cpu,
  Building2,
  Award,
  Clock,
  Sparkles,
  Send,
  ChevronRight,
} from "lucide-react";
import { useTheme } from '../../hooks/useTheme';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Use theme hook with safe defaults
  const { colors: themeColors, loading, error, refreshTheme } = useTheme();
  
  const primaryColor = themeColors?.accent2 || '#008071';
  const secondaryColor = themeColors?.accent1 || '#005B41';

  // Helper function to convert hex to rgba
  const hexToRgba = (hex, alpha) => {
    try {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } catch (e) {
      return `rgba(0, 128, 113, ${alpha})`;
    }
  };

  // Social media links
  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61589040563601", icon: <Facebook className="w-5 h-5" /> },
    { name: "Twitter", href: "#", icon: <Twitter className="w-5 h-5" /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/113764201/admin/dashboard/", icon: <Linkedin className="w-5 h-5" /> },
    { name: "GitHub", href: "#", icon: <Github className="w-5 h-5" /> },
    { name: "Instagram", href: "#", icon: <Instagram className="w-5 h-5" /> },
  ];

  // Contact information
  const contactInfo = [
    { 
      icon: <Phone className="w-4 h-4" />, 
      text: "+8801701744799", 
      href: "tel:+8801701744799",
      color: primaryColor
    },
    { 
      icon: <Mail className="w-4 h-4" />, 
      text: "nextedgesoftware@gmail.com", 
      href: "mailto:nextedgesoftware@gmail.com",
      color: secondaryColor
    },
    { 
      icon: <MapPin className="w-4 h-4" />, 
      text: "Rampura, Dhaka, Bangladesh", 
      href: null,
      color: primaryColor
    },
  ];

  // Show loading state
  if (loading) {
    return (
      <footer className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-gray-700 border-t-[#008071] animate-spin"></div>
              </div>
              <span className="text-sm text-gray-400">Loading footer...</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative overflow-hidden bg-gray-900">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, ${hexToRgba(primaryColor, 0.5)} 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
        {/* Gradient overlay for depth */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `linear-gradient(135deg, ${hexToRgba(primaryColor, 0.15)}, ${hexToRgba(secondaryColor, 0.15)})`,
          }}
        />
      </div>

      {/* Error message with retry button */}
      {error && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 shadow-xl border border-red-500/50 text-white px-4 py-3 rounded-xl text-sm z-30 flex items-center gap-3 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Error:</span>
            <span className="text-gray-300">{error}</span>
          </div>
          <button 
            onClick={refreshTheme}
            className="ml-2 px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: primaryColor }}
          >
            Retry
          </button>
        </div>
      )}

      {/* Decorative top line with glow */}
      <div
        className="absolute top-0 left-0 right-0 h-1 z-10"
        style={{
          background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor}, ${primaryColor})`,
          boxShadow: `0 0 20px ${hexToRgba(primaryColor, 0.25)}`,
        }}
      ></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-gray-800">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Stay <span style={{ color: primaryColor }}>Updated</span>
              </h3>
              <p className="text-gray-400 text-sm lg:text-base">
                Subscribe to our newsletter for the latest insights, trends, and
                innovations in technology.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative group">
                <Mail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 transition-all group-hover:scale-110"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all"
                  style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = primaryColor;
                    e.currentTarget.style.boxShadow = `0 0 0 2px ${hexToRgba(primaryColor, 0.2)}`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#374151';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
                  }}
                />
              </div>
              <button
                className="px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group text-white"
                style={{ 
                  backgroundColor: primaryColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 25px ${hexToRgba(primaryColor, 0.25)}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Main Content - Simplified Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <a
                href="/"
                className="text-2xl font-bold tracking-tight inline-block group"
              >
                <span className="relative" style={{ color: primaryColor }}>
                  Next Edge
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: primaryColor }}
                  ></span>
                </span>
                <span className="text-white"> Software</span>
              </a>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering businesses with cutting-edge software solutions. We
              transform ideas into innovative digital experiences that drive
              growth and success.
            </p>

          </div>

          {/* Contact Us Section */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            
            <div className="space-y-4">
              {/* Contact details */}
              <div className="space-y-3">
                <a
                  href="tel:+8801701744799"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white text-sm transition-all group"
                >
                  <Phone
                    className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-transform"
                    style={{ color: primaryColor }}
                  />
                  <span className="group-hover:translate-x-1 transition-transform">+8801701744799</span>
                </a>
                <a
                  href="mailto:nextedgesoftware@gmail.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white text-sm transition-all group"
                >
                  <Mail
                    className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-transform"
                    style={{ color: secondaryColor }}
                  />
                  <span className="group-hover:translate-x-1 transition-transform">nextedgesoftware@gmail.com</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-400 text-sm">
                  <MapPin
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: primaryColor }}
                  />
                  <span>Rampura, Dhaka, Bangladesh</span>
                </div>
              </div>

              {/* Social Links for Contact Us section */}
              <div className="pt-4">
                <p className="text-gray-400 text-xs mb-3">Follow us on social media</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=61589040563601"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg transition-all duration-200 transform hover:scale-110 hover:-translate-y-1 group border border-gray-700"
                    style={{ backgroundColor: '#1F2937' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#1877F2';
                      e.currentTarget.style.borderColor = '#1877F2';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#1F2937';
                      e.currentTarget.style.borderColor = '#374151';
                    }}
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/113764201/admin/dashboard/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg transition-all duration-200 transform hover:scale-110 hover:-translate-y-1 group border border-gray-700"
                    style={{ backgroundColor: '#1F2937' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0A66C2';
                      e.currentTarget.style.borderColor = '#0A66C2';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#1F2937';
                      e.currentTarget.style.borderColor = '#374151';
                    }}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="p-2.5 rounded-lg transition-all duration-200 transform hover:scale-110 hover:-translate-y-1 group border border-gray-700"
                    style={{ backgroundColor: '#1F2937' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#1DA1F2';
                      e.currentTarget.style.borderColor = '#1DA1F2';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#1F2937';
                      e.currentTarget.style.borderColor = '#374151';
                    }}
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Resources */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2">
                  {[
                    { name: "About Us", href: "/about-us" },
                    { name: "Services", href: "/web-applications" },
                    { name: "Contact", href: "/contact-us" },
                  ].map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-all group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                        <ChevronRight
                          className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all"
                          style={{ color: primaryColor }}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Live Chat Indicator */}
            <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: primaryColor }}></span>
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: primaryColor }}></span>
              </span>
              Live chat available 24/7
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-500 text-sm text-center lg:text-left">
              © {currentYear} Next Edge Software. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-xs">
              {[
                { name: "Privacy Policy", href: "#privacy", color: primaryColor },
                { name: "Terms of Service", href: "#terms", color: secondaryColor },
                { name: "Cookie Settings", href: "#cookies", color: primaryColor },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-white transition-all hover:underline"
                  style={{ textDecorationColor: link.color }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 text-white p-3 rounded-full shadow-xl transition-all duration-200 transform hover:scale-110 hover:-translate-y-1 z-50 border group"
        style={{
          backgroundColor: primaryColor,
          borderColor: `${hexToRgba(primaryColor, 0.5)}`,
          boxShadow: `0 4px 15px ${hexToRgba(primaryColor, 0.25)}`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 8px 25px ${hexToRgba(primaryColor, 0.4)}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 4px 15px ${hexToRgba(primaryColor, 0.25)}`;
        }}
        aria-label="Back to top"
      >
        <ArrowRight className="w-5 h-5 rotate-[-90deg] group-hover:translate-y-[-2px] transition-transform" />
      </button>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </footer>
  );
};

export default memo(Footer);