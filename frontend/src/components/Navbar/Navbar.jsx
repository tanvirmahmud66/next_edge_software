
// Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, ShoppingCart, Building2, Plane, Stethoscope, Code, Globe, Settings, Wrench, GraduationCap, HeadphonesIcon, Shield, Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import logo from '../../assets/main_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const dropdownTimerRef = useRef(null);

  // Use theme hook
  const { colors: themeColors, themeName, loading, error, refreshTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimerRef.current) {
        clearTimeout(dropdownTimerRef.current);
      }
    };
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDropdownEnter = (dropdownId) => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setActiveDropdown(dropdownId);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setActiveDropdown(null);
    }
  };

  // Navigation structure with theme colors
  const navItems = [
    { id: 'home', name: 'Home', to: '/', hasDropdown: false },
    { id: 'web-application', name: 'Web Application', to: '/web-applications', hasDropdown: false },
    // { 
    //   id: 'industry',
    //   name: 'Industry Solutions', 
    //   to: '/industry-solutions', 
    //   hasDropdown: true,
    //   columns: 1,
    //   accent: themeColors.accent1,
    //   dropdownItems: [
    //     { 
    //       category: 'Solutions by Industry',
    //       items: [
    //         { 
    //           name: 'Web Application Development', 
    //           to: '/web-applications', 
    //           icon: <Globe className="w-4 h-4" />, 
    //           description: 'Modern, responsive web applications' 
    //         },
    //         { 
    //           name: 'E-Commerce Solutions', 
    //           to: '/ecommerce-solutions', 
    //           icon: <ShoppingCart className="w-4 h-4" />, 
    //           description: 'Complete online store solutions' 
    //         },
    //         { 
    //           name: 'Real Estate & Project Accounting', 
    //           to: '/real-estate-accounting', 
    //           icon: <Building2 className="w-4 h-4" />, 
    //           description: 'Property and project management' 
    //         },
    //         { 
    //           name: 'Visa & Travel Agency Management', 
    //           to: '/visa-travel-management', 
    //           icon: <Plane className="w-4 h-4" />, 
    //           description: 'Travel and visa processing systems' 
    //         },
    //         { 
    //           name: 'Clinic & Diagnostic Center Management', 
    //           to: '/clinic-management', 
    //           icon: <Stethoscope className="w-4 h-4" />, 
    //           description: 'Healthcare practice management' 
    //         },
    //       ]
    //     }
    //   ]
    // },
    { id: 'about', name: 'About Us', to: '/about-us', hasDropdown: false },
    { id: 'contact', name: 'Contact Us', to: '/contact-us', hasDropdown: false },
  ];

  // Show loading state
  if (loading) {
    return (
      <nav className="fixed w-full z-50 h-16 lg:h-20" style={{ background: themeColors.primary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="text-white font-bold">Loading...</div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300`}
      style={{ 
        background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`,
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: `1px solid ${themeColors.accent1}40`
      }}
    >
      {/* Error message with retry button */}
      {error && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-red-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm z-30 flex items-center gap-3">
          <span>Theme load failed: {error}</span>
          <button 
            onClick={refreshTheme}
            className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs transition-colors"
          >
            Retry
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Next Edge Software Logo" className="h-8 w-auto mr-2" />
            <Link to="/" className="text-xl lg:text-2xl font-bold tracking-tight group">
              <span className="relative" style={{ color: themeColors.accent2 }}>
                Next Edge
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: themeColors.accent2 }}
                ></span>
              </span>
              <span className="text-white"> Software</span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex md:items-center md:justify-center flex-1">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleDropdownEnter(item.id)}
                onMouseLeave={handleDropdownLeave}
              >
                {item.hasDropdown ? (
                  <>
                    <button
                      className={`flex items-center space-x-1 px-3 lg:px-4 py-2 rounded-md font-medium text-sm lg:text-base transition-all duration-200 ${
                        activeDropdown === item.id 
                          ? 'text-white bg-white/10' 
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                      style={{
                        border: activeDropdown === item.id ? `1px solid ${item.accent}40` : '1px solid transparent'
                      }}
                      aria-expanded={activeDropdown === item.id}
                      aria-haspopup="true"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.id ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.id && (
                      <div 
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 rounded-xl shadow-2xl overflow-hidden"
                        style={{ 
                          background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`,
                          border: `1px solid ${item.accent}40`,
                          backdropFilter: 'blur(10px)'
                        }}
                        onMouseEnter={() => handleDropdownEnter(item.id)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {/* Pointer arrow */}
                        <div 
                          className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45"
                          style={{ 
                            background: themeColors.primary,
                            borderLeft: `1px solid ${item.accent}40`,
                            borderTop: `1px solid ${item.accent}40`
                          }}
                        ></div>
                        
                        <div className="p-2">
                          {item.dropdownItems.map((column, colIndex) => (
                            <div key={colIndex}>
                              <h3 className="text-xs font-semibold uppercase tracking-wider px-3 py-2"
                                  style={{ color: item.accent }}>
                                {column.category}
                              </h3>
                              <div className="space-y-1">
                                {column.items.map((dropdownItem, itemIndex) => (
                                  <Link
                                    key={itemIndex}
                                    to={dropdownItem.to}
                                    className="flex items-start space-x-3 p-3 rounded-lg text-white/70 hover:text-white transition-all duration-200 group"
                                    onClick={handleDropdownItemClick}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.backgroundColor = `${item.accent}20`;
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.backgroundColor = 'transparent';
                                    }}
                                  >
                                    <span className="mt-0.5" style={{ color: item.accent }}>
                                      {dropdownItem.icon}
                                    </span>
                                    <div className="flex-1">
                                      <div className="flex items-center justify-between">
                                        <span className="font-medium text-sm">{dropdownItem.name}</span>
                                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                      </div>
                                      {dropdownItem.description && (
                                        <p className="text-xs text-white/50 mt-0.5">{dropdownItem.description}</p>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.to}
                    className="inline-block px-3 lg:px-4 py-2 rounded-md text-white/80 hover:text-white font-medium text-sm lg:text-base transition-all duration-200 hover:bg-white/10"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <Link
              to="/contact-us"
              className="text-white px-5 lg:px-6 py-2 rounded-md text-sm lg:text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
              style={{ 
                background: `linear-gradient(135deg, ${themeColors.accent2}, ${themeColors.accent1})`,
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset transition-all"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[calc(100vh-4rem)] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-6" style={{ 
          background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`,
          borderTop: `1px solid ${themeColors.accent1}40`
        }}>
          {navItems.map((item) => (
            <div key={item.id} className="border-b last:border-0" 
                 style={{ borderColor: `${themeColors.accent1}20` }}>
              {item.hasDropdown ? (
                <div className="py-2">
                  <button
                    onClick={(e) => {
                      const btn = e.currentTarget;
                      const dropdown = btn.nextElementSibling;
                      if (dropdown) {
                        const isExpanded = dropdown.classList.contains('max-h-screen');
                        dropdown.classList.toggle('max-h-screen');
                        dropdown.classList.toggle('max-h-0');
                        btn.querySelector('svg')?.classList.toggle('rotate-180');
                      }
                    }}
                    className="w-full flex items-center justify-between px-3 py-3 rounded-md text-white/80 hover:text-white hover:bg-white/10 text-base font-medium transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  </button>
                  
                  <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                    <div className="pl-4 pr-2 pb-2 space-y-2">
                      {item.dropdownItems.map((column, colIndex) => (
                        <div key={colIndex} className="space-y-1">
                          <h3 className="text-xs font-semibold uppercase tracking-wider px-3 py-1"
                              style={{ color: item.accent || themeColors.accent2 }}>
                            {column.category}
                          </h3>
                          {column.items.map((dropdownItem, itemIndex) => (
                            <Link
                              key={itemIndex}
                              to={dropdownItem.to}
                              className="flex items-start space-x-3 px-3 py-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 text-sm transition-colors"
                              onClick={toggleMenu}
                            >
                              <span className="mt-0.5" style={{ color: item.accent || themeColors.accent2 }}>
                                {dropdownItem.icon}
                              </span>
                              <div>
                                <span className="font-medium block">{dropdownItem.name}</span>
                                {dropdownItem.description && (
                                  <span className="text-xs text-white/50">{dropdownItem.description}</span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={item.to}
                  className="block px-3 py-3 rounded-md text-white/80 hover:text-white hover:bg-white/10 text-base font-medium transition-colors"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          
          {/* Mobile CTA */}
          <Link
            to="/contact-us"
            className="block text-center text-white px-3 py-3 rounded-md text-base font-semibold transition-all duration-200 mt-6 shadow-lg"
            style={{ 
              background: `linear-gradient(135deg, ${themeColors.accent2}, ${themeColors.accent1})`,
            }}
            onClick={toggleMenu}
          >
            Get Started
          </Link>

          {/* Contact Info */}
          <div className="mt-6 pt-4 space-y-3" style={{ borderTop: `1px solid ${themeColors.accent1}40` }}>
            <a href="tel:+8801701744799" className="flex items-center space-x-3 px-3 text-white/60 hover:text-white text-sm transition-colors">
              <Phone className="w-4 h-4" style={{ color: themeColors.accent2 }} />
              <span>+8801701744799</span>
            </a>
            <a href="mailto:nextedgesoftware@gmail.com" className="flex items-center space-x-3 px-3 text-white/60 hover:text-white text-sm transition-colors">
              <Mail className="w-4 h-4" style={{ color: themeColors.accent2 }} />
              <span>nextedgesoftware@gmail.com</span>
            </a>
            <div className="flex items-center space-x-3 px-3 text-white/60 text-sm">
              <MapPin className="w-4 h-4" style={{ color: themeColors.accent2 }} />
              <span>Rampura, Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;