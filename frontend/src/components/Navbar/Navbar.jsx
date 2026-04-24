
// Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Download,
  XCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { useHomePage } from "../../hooks/useHomePage";
import logo from "../../assets/main_logo.png";
import full_logo from "../../assets/full_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+880",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const navRef = useRef(null);
  const dropdownTimerRef = useRef(null);
  const modalRef = useRef(null);

  const {
    colors: themeColors,
    themeName,
    loading,
    error,
    refreshTheme,
  } = useTheme();
  const { homePageData, refreshHomePage } = useHomePage();
  const brochureFile = homePageData?.brochure || null;

  // Country codes for phone input
  const countryCodes = [
    { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
    { code: "+91", country: "India", flag: "🇮🇳" },
    { code: "+92", country: "Pakistan", flag: "🇵🇰" },
    { code: "+94", country: "Sri Lanka", flag: "🇱🇰" },
    { code: "+977", country: "Nepal", flag: "🇳🇵" },
    { code: "+975", country: "Bhutan", flag: "🇧🇹" },
    { code: "+960", country: "Maldives", flag: "🇲🇻" },
    { code: "+93", country: "Afghanistan", flag: "🇦🇫" },
    { code: "+98", country: "Iran", flag: "🇮🇷" },
    { code: "+964", country: "Iraq", flag: "🇮🇶" },
    { code: "+962", country: "Jordan", flag: "🇯🇴" },
    { code: "+965", country: "Kuwait", flag: "🇰🇼" },
    { code: "+961", country: "Lebanon", flag: "🇱🇧" },
    { code: "+968", country: "Oman", flag: "🇴🇲" },
    { code: "+974", country: "Qatar", flag: "🇶🇦" },
    { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
    { code: "+963", country: "Syria", flag: "🇸🇾" },
    { code: "+90", country: "Turkey", flag: "🇹🇷" },
    { code: "+967", country: "Yemen", flag: "🇾🇪" },
    { code: "+971", country: "UAE", flag: "🇦🇪" },
    { code: "+973", country: "Bahrain", flag: "🇧🇭" },
    { code: "+86", country: "China", flag: "🇨🇳" },
    { code: "+852", country: "Hong Kong", flag: "🇭🇰" },
    { code: "+853", country: "Macau", flag: "🇲🇴" },
    { code: "+886", country: "Taiwan", flag: "🇹🇼" },
    { code: "+81", country: "Japan", flag: "🇯🇵" },
    { code: "+82", country: "South Korea", flag: "🇰🇷" },
    { code: "+850", country: "North Korea", flag: "🇰🇵" },
    { code: "+976", country: "Mongolia", flag: "🇲🇳" },
    { code: "+65", country: "Singapore", flag: "🇸🇬" },
    { code: "+60", country: "Malaysia", flag: "🇲🇾" },
    { code: "+62", country: "Indonesia", flag: "🇮🇩" },
    { code: "+63", country: "Philippines", flag: "🇵🇭" },
    { code: "+66", country: "Thailand", flag: "🇹🇭" },
    { code: "+84", country: "Vietnam", flag: "🇻🇳" },
    { code: "+95", country: "Myanmar", flag: "🇲🇲" },
    { code: "+855", country: "Cambodia", flag: "🇰🇭" },
    { code: "+856", country: "Laos", flag: "🇱🇦" },
    { code: "+670", country: "Timor-Leste", flag: "🇹🇱" },
    { code: "+673", country: "Brunei", flag: "🇧🇳" },
    { code: "+1", country: "United States", flag: "🇺🇸" },
    { code: "+1", country: "Canada", flag: "🇨🇦" },
    { code: "+52", country: "Mexico", flag: "🇲🇽" },
    { code: "+501", country: "Belize", flag: "🇧🇿" },
    { code: "+502", country: "Guatemala", flag: "🇬🇹" },
    { code: "+503", country: "El Salvador", flag: "🇸🇻" },
    { code: "+504", country: "Honduras", flag: "🇭🇳" },
    { code: "+505", country: "Nicaragua", flag: "🇳🇮" },
    { code: "+506", country: "Costa Rica", flag: "🇨🇷" },
    { code: "+507", country: "Panama", flag: "🇵🇦" },
    { code: "+53", country: "Cuba", flag: "🇨🇺" },
    { code: "+1", country: "Jamaica", flag: "🇯🇲" },
    { code: "+1", country: "Bahamas", flag: "🇧🇸" },
    { code: "+1", country: "Barbados", flag: "🇧🇧" },
    { code: "+1", country: "Trinidad and Tobago", flag: "🇹🇹" },
    { code: "+509", country: "Haiti", flag: "🇭🇹" },
    { code: "+1", country: "Dominican Republic", flag: "🇩🇴" },
    { code: "+1", country: "Puerto Rico", flag: "🇵🇷" },
    { code: "+54", country: "Argentina", flag: "🇦🇷" },
    { code: "+591", country: "Bolivia", flag: "🇧🇴" },
    { code: "+55", country: "Brazil", flag: "🇧🇷" },
    { code: "+56", country: "Chile", flag: "🇨🇱" },
    { code: "+57", country: "Colombia", flag: "🇨🇴" },
    { code: "+593", country: "Ecuador", flag: "🇪🇨" },
    { code: "+592", country: "Guyana", flag: "🇬🇾" },
    { code: "+595", country: "Paraguay", flag: "🇵🇾" },
    { code: "+51", country: "Peru", flag: "🇵🇪" },
    { code: "+597", country: "Suriname", flag: "🇸🇷" },
    { code: "+598", country: "Uruguay", flag: "🇺🇾" },
    { code: "+58", country: "Venezuela", flag: "🇻🇪" },
    { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
    { code: "+353", country: "Ireland", flag: "🇮🇪" },
    { code: "+49", country: "Germany", flag: "🇩🇪" },
    { code: "+33", country: "France", flag: "🇫🇷" },
    { code: "+34", country: "Spain", flag: "🇪🇸" },
    { code: "+351", country: "Portugal", flag: "🇵🇹" },
    { code: "+39", country: "Italy", flag: "🇮🇹" },
    { code: "+41", country: "Switzerland", flag: "🇨🇭" },
    { code: "+43", country: "Austria", flag: "🇦🇹" },
    { code: "+32", country: "Belgium", flag: "🇧🇪" },
    { code: "+31", country: "Netherlands", flag: "🇳🇱" },
    { code: "+352", country: "Luxembourg", flag: "🇱🇺" },
    { code: "+45", country: "Denmark", flag: "🇩🇰" },
    { code: "+46", country: "Sweden", flag: "🇸🇪" },
    { code: "+47", country: "Norway", flag: "🇳🇴" },
    { code: "+358", country: "Finland", flag: "🇫🇮" },
    { code: "+354", country: "Iceland", flag: "🇮🇸" },
    { code: "+48", country: "Poland", flag: "🇵🇱" },
    { code: "+420", country: "Czech Republic", flag: "🇨🇿" },
    { code: "+421", country: "Slovakia", flag: "🇸🇰" },
    { code: "+36", country: "Hungary", flag: "🇭🇺" },
    { code: "+40", country: "Romania", flag: "🇷🇴" },
    { code: "+373", country: "Moldova", flag: "🇲🇩" },
    { code: "+359", country: "Bulgaria", flag: "🇧🇬" },
    { code: "+30", country: "Greece", flag: "🇬🇷" },
    { code: "+389", country: "North Macedonia", flag: "🇲🇰" },
    { code: "+381", country: "Serbia", flag: "🇷🇸" },
    { code: "+382", country: "Montenegro", flag: "🇲🇪" },
    { code: "+387", country: "Bosnia", flag: "🇧🇦" },
    { code: "+385", country: "Croatia", flag: "🇭🇷" },
    { code: "+386", country: "Slovenia", flag: "🇸🇮" },
    { code: "+377", country: "Monaco", flag: "🇲🇨" },
    { code: "+378", country: "San Marino", flag: "🇸🇲" },
    { code: "+379", country: "Vatican City", flag: "🇻🇦" },
    { code: "+356", country: "Malta", flag: "🇲🇹" },
    { code: "+357", country: "Cyprus", flag: "🇨🇾" },
    { code: "+370", country: "Lithuania", flag: "🇱🇹" },
    { code: "+371", country: "Latvia", flag: "🇱🇻" },
    { code: "+372", country: "Estonia", flag: "🇪🇪" },
    { code: "+7", country: "Russia", flag: "🇷🇺" },
    { code: "+380", country: "Ukraine", flag: "🇺🇦" },
    { code: "+375", country: "Belarus", flag: "🇧🇾" },
    { code: "+20", country: "Egypt", flag: "🇪🇬" },
    { code: "+212", country: "Morocco", flag: "🇲🇦" },
    { code: "+213", country: "Algeria", flag: "🇩🇿" },
    { code: "+216", country: "Tunisia", flag: "🇹🇳" },
    { code: "+218", country: "Libya", flag: "🇱🇾" },
    { code: "+249", country: "Sudan", flag: "🇸🇩" },
    { code: "+211", country: "South Sudan", flag: "🇸🇸" },
    { code: "+251", country: "Ethiopia", flag: "🇪🇹" },
    { code: "+252", country: "Somalia", flag: "🇸🇴" },
    { code: "+253", country: "Djibouti", flag: "🇩🇯" },
    { code: "+254", country: "Kenya", flag: "🇰🇪" },
    { code: "+255", country: "Tanzania", flag: "🇹🇿" },
    { code: "+256", country: "Uganda", flag: "🇺🇬" },
    { code: "+257", country: "Burundi", flag: "🇧🇮" },
    { code: "+250", country: "Rwanda", flag: "🇷🇼" },
    { code: "+27", country: "South Africa", flag: "🇿🇦" },
    { code: "+264", country: "Namibia", flag: "🇳🇦" },
    { code: "+267", country: "Botswana", flag: "🇧🇼" },
    { code: "+268", country: "Eswatini", flag: "🇸🇿" },
    { code: "+266", country: "Lesotho", flag: "🇱🇸" },
    { code: "+263", country: "Zimbabwe", flag: "🇿🇼" },
    { code: "+260", country: "Zambia", flag: "🇿🇲" },
    { code: "+265", country: "Malawi", flag: "🇲🇼" },
    { code: "+258", country: "Mozambique", flag: "🇲🇿" },
    { code: "+261", country: "Madagascar", flag: "🇲🇬" },
    { code: "+230", country: "Mauritius", flag: "🇲🇺" },
    { code: "+269", country: "Comoros", flag: "🇰🇲" },
    { code: "+248", country: "Seychelles", flag: "🇸🇨" },
    { code: "+222", country: "Mauritania", flag: "🇲🇷" },
    { code: "+223", country: "Mali", flag: "🇲🇱" },
    { code: "+226", country: "Burkina Faso", flag: "🇧🇫" },
    { code: "+227", country: "Niger", flag: "🇳🇪" },
    { code: "+234", country: "Nigeria", flag: "🇳🇬" },
    { code: "+233", country: "Ghana", flag: "🇬🇭" },
    { code: "+225", country: "Ivory Coast", flag: "🇨🇮" },
    { code: "+232", country: "Sierra Leone", flag: "🇸🇱" },
    { code: "+231", country: "Liberia", flag: "🇱🇷" },
    { code: "+224", country: "Guinea", flag: "🇬🇳" },
    { code: "+245", country: "Guinea-Bissau", flag: "🇬🇼" },
    { code: "+220", country: "Gambia", flag: "🇬🇲" },
    { code: "+221", country: "Senegal", flag: "🇸🇳" },
    { code: "+229", country: "Benin", flag: "🇧🇯" },
    { code: "+228", country: "Togo", flag: "🇹🇬" },
    { code: "+235", country: "Chad", flag: "🇹🇩" },
    { code: "+236", country: "Central African Republic", flag: "🇨🇫" },
    { code: "+237", country: "Cameroon", flag: "🇨🇲" },
    { code: "+240", country: "Equatorial Guinea", flag: "🇬🇶" },
    { code: "+241", country: "Gabon", flag: "🇬🇦" },
    { code: "+242", country: "Congo", flag: "🇨🇬" },
    { code: "+243", country: "DR Congo", flag: "🇨🇩" },
    { code: "+244", country: "Angola", flag: "🇦🇴" },
    { code: "+61", country: "Australia", flag: "🇦🇺" },
    { code: "+64", country: "New Zealand", flag: "🇳🇿" },
    { code: "+679", country: "Fiji", flag: "🇫🇯" },
    { code: "+677", country: "Solomon Islands", flag: "🇸🇧" },
    { code: "+678", country: "Vanuatu", flag: "🇻🇺" },
    { code: "+682", country: "Cook Islands", flag: "🇨🇰" },
    { code: "+683", country: "Niue", flag: "🇳🇺" },
    { code: "+685", country: "Samoa", flag: "🇼🇸" },
    { code: "+686", country: "Kiribati", flag: "🇰🇮" },
    { code: "+687", country: "New Caledonia", flag: "🇳🇨" },
    { code: "+688", country: "Tuvalu", flag: "🇹🇻" },
    { code: "+689", country: "French Polynesia", flag: "🇵🇫" },
    { code: "+690", country: "Tokelau", flag: "🇹🇰" },
    { code: "+691", country: "Micronesia", flag: "🇫🇲" },
    { code: "+692", country: "Marshall Islands", flag: "🇲🇭" },
    { code: "+674", country: "Nauru", flag: "🇳🇷" },
    { code: "+676", country: "Tonga", flag: "🇹🇴" },
    { code: "+972", country: "Israel", flag: "🇮🇱" },
    { code: "+970", country: "Palestine", flag: "🇵🇸" },
    { code: "+7", country: "Kazakhstan", flag: "🇰🇿" },
    { code: "+993", country: "Turkmenistan", flag: "🇹🇲" },
    { code: "+998", country: "Uzbekistan", flag: "🇺🇿" },
    { code: "+992", country: "Tajikistan", flag: "🇹🇯" },
    { code: "+996", country: "Kyrgyzstan", flag: "🇰🇬" },
    { code: "+374", country: "Armenia", flag: "🇦🇲" },
    { code: "+994", country: "Azerbaijan", flag: "🇦🇿" },
    { code: "+995", country: "Georgia", flag: "🇬🇪" },
    { code: "+299", country: "Greenland", flag: "🇬🇱" },
    { code: "+298", country: "Faroe Islands", flag: "🇫🇴" },
    { code: "+350", country: "Gibraltar", flag: "🇬🇮" },
    { code: "+500", country: "Falkland Islands", flag: "🇫🇰" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (dropdownTimerRef.current) {
        clearTimeout(dropdownTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        isModalOpen
      ) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen]);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  const openModal = () => {
    setIsModalOpen(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      countryCode: "+880",
    });
    setFormErrors({});
    setSubmitStatus(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitting(false);
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid phone number (digits only)";
    } else if (formData.phone.trim().length < 6) {
      errors.phone = "Phone number must be at least 6 digits";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleCountryCodeChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare data for Website Lead doctype (same as ContactPage)
      const leadData = {
        full_name: formData.name,
        email_address: formData.email,
        phone_number: `${formData.countryCode}${formData.phone}`,
        brochure_download: 1, // Special field to indicate brochure download request
        message: `Brochure download request from ${formData.name}`
      };

      // Submit to Website Lead doctype (same API as ContactPage)
      const response = await fetch('/api/resource/Website%20Lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(leadData)
      });

      if (response.ok) {
        setSubmitStatus("success");
        
        // Fetch brochure file from Home Page if not already fetched
        if (!brochureFile) {
          await refreshHomePage();
        }
        
        setTimeout(() => {
          closeModal();
          // Download brochure from Home Page doctype attachment
          if (brochureFile) {
            window.open(brochureFile, '_blank');
          } else {
            // Fallback: try to fetch again
            refreshHomePage().then(() => {
              if (brochureFile) {
                window.open(brochureFile, '_blank');
              } else {
                console.warn('No brochure file available');
                alert('Brochure file not available. Please contact support.');
              }
            });
          }
        }, 2000);
      } else {
        throw new Error('Failed to submit request');
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const navItems = [
    { id: "home", name: "Home", to: "/", hasDropdown: false },
    {
      id: "web-application",
      name: "Web Application",
      to: "/web-applications",
      hasDropdown: false,
    },
    { id: "about", name: "About Us", to: "/about-us", hasDropdown: false },
    {
      id: "contact",
      name: "Contact Us",
      to: "/contact-us",
      hasDropdown: false,
    },
  ];

  if (loading) {
    return (
      <nav
        className="fixed w-full z-50 h-16 lg:h-20"
        style={{ background: themeColors.primary }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="text-white font-bold">Loading...</div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed w-full z-50 transition-all duration-300`}
        style={{
          background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`,
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: `1px solid ${themeColors.accent1}40`,
        }}
      >
        {error && (
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-red-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm z-30 flex items-center gap-3">
            <span>Theme load failed: {error}</span>
            <button
              onClick={refreshTheme}
              className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs transition-colors cursor-pointer"
            >
              Retry
            </button>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              {/* <img
                src={logo}
                alt="Next Edge Software Logo"
                className="h-8 w-auto mr-2"
              /> */}
              <Link
                to="/"
                className="text-xl lg:text-2xl flex items-center gap-1 font-bold tracking-tight group cursor-pointer"
              >
                <span
                  className="relative"
                  style={{ color: themeColors.accent2 }}
                >
                  <img
                    src={full_logo}
                    alt="Next Edge Software Logo"
                    className="h-8 w-auto mr-2"
                  />
                  {/* Next Edge */}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: themeColors.accent2 }}
                  ></span>
                </span>
                <span className="text-white"> Software</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:justify-center flex-1">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && handleDropdownEnter(item.id)
                  }
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.hasDropdown ? (
                    <>
                      <button
                        className={`flex items-center space-x-1 px-3 lg:px-4 py-2 rounded-md font-medium text-sm lg:text-base transition-all duration-200 cursor-pointer ${
                          activeDropdown === item.id
                            ? "text-white bg-white/10"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                        }`}
                        style={{
                          border:
                            activeDropdown === item.id
                              ? `1px solid ${item.accent}40`
                              : "1px solid transparent",
                        }}
                        aria-expanded={activeDropdown === item.id}
                        aria-haspopup="true"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {activeDropdown === item.id && (
                        <div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 rounded-xl shadow-2xl overflow-hidden"
                          style={{
                            background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`,
                            border: `1px solid ${item.accent}40`,
                            backdropFilter: "blur(10px)",
                          }}
                          onMouseEnter={() => handleDropdownEnter(item.id)}
                          onMouseLeave={handleDropdownLeave}
                        >
                          <div
                            className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45"
                            style={{
                              background: themeColors.primary,
                              borderLeft: `1px solid ${item.accent}40`,
                              borderTop: `1px solid ${item.accent}40`,
                            }}
                          ></div>

                          <div className="p-2">
                            {item.dropdownItems.map((column, colIndex) => (
                              <div key={colIndex}>
                                <h3
                                  className="text-xs font-semibold uppercase tracking-wider px-3 py-2"
                                  style={{ color: item.accent }}
                                >
                                  {column.category}
                                </h3>
                                <div className="space-y-1">
                                  {column.items.map(
                                    (dropdownItem, itemIndex) => (
                                      <Link
                                        key={itemIndex}
                                        to={dropdownItem.to}
                                        className="flex items-start space-x-3 p-3 rounded-lg text-white/70 hover:text-white transition-all duration-200 group cursor-pointer"
                                        onClick={handleDropdownItemClick}
                                        onMouseEnter={(e) => {
                                          e.currentTarget.style.backgroundColor = `${item.accent}20`;
                                        }}
                                        onMouseLeave={(e) => {
                                          e.currentTarget.style.backgroundColor =
                                            "transparent";
                                        }}
                                      >
                                        <span
                                          className="mt-0.5"
                                          style={{ color: item.accent }}
                                        >
                                          {dropdownItem.icon}
                                        </span>
                                        <div className="flex-1">
                                          <div className="flex items-center justify-between">
                                            <span className="font-medium text-sm">
                                              {dropdownItem.name}
                                            </span>
                                            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                          </div>
                                          {dropdownItem.description && (
                                            <p className="text-xs text-white/50 mt-0.5">
                                              {dropdownItem.description}
                                            </p>
                                          )}
                                        </div>
                                      </Link>
                                    ),
                                  )}
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
                      className="inline-block px-3 lg:px-4 py-2 rounded-md text-white/80 hover:text-white font-medium text-sm lg:text-base transition-all duration-200 hover:bg-white/10 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block flex-shrink-0">
              <button
                onClick={openModal}
                className="text-white px-5 lg:px-6 py-2 rounded-md text-sm lg:text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${themeColors.accent2}, ${themeColors.accent1})`,
                }}
              >
                <Download className="w-4 h-4" />
                Download Brochure
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset transition-all cursor-pointer"
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
            isOpen
              ? "max-h-[calc(100vh-4rem)] opacity-100 overflow-y-auto"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div
            className="px-4 pt-2 pb-6"
            style={{
              background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`,
              borderTop: `1px solid ${themeColors.accent1}40`,
            }}
          >
            {navItems.map((item) => (
              <div
                key={item.id}
                className="border-b last:border-0"
                style={{ borderColor: `${themeColors.accent1}20` }}
              >
                {item.hasDropdown ? (
                  <div className="py-2">
                    <button
                      onClick={(e) => {
                        const btn = e.currentTarget;
                        const dropdown = btn.nextElementSibling;
                        if (dropdown) {
                          const isExpanded =
                            dropdown.classList.contains("max-h-screen");
                          dropdown.classList.toggle("max-h-screen");
                          dropdown.classList.toggle("max-h-0");
                          btn
                            .querySelector("svg")
                            ?.classList.toggle("rotate-180");
                        }
                      }}
                      className="w-full flex items-center justify-between px-3 py-3 rounded-md text-white/80 hover:text-white hover:bg-white/10 text-base font-medium transition-colors cursor-pointer"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    </button>

                    <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                      <div className="pl-4 pr-2 pb-2 space-y-2">
                        {item.dropdownItems.map((column, colIndex) => (
                          <div key={colIndex} className="space-y-1">
                            <h3
                              className="text-xs font-semibold uppercase tracking-wider px-3 py-1"
                              style={{
                                color: item.accent || themeColors.accent2,
                              }}
                            >
                              {column.category}
                            </h3>
                            {column.items.map((dropdownItem, itemIndex) => (
                              <Link
                                key={itemIndex}
                                to={dropdownItem.to}
                                className="flex items-start space-x-3 px-3 py-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 text-sm transition-colors cursor-pointer"
                                onClick={toggleMenu}
                              >
                                <span
                                  className="mt-0.5"
                                  style={{
                                    color: item.accent || themeColors.accent2,
                                  }}
                                >
                                  {dropdownItem.icon}
                                </span>
                                <div>
                                  <span className="font-medium block">
                                    {dropdownItem.name}
                                  </span>
                                  {dropdownItem.description && (
                                    <span className="text-xs text-white/50">
                                      {dropdownItem.description}
                                    </span>
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
                    className="block px-3 py-3 rounded-md text-white/80 hover:text-white hover:bg-white/10 text-base font-medium transition-colors cursor-pointer"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <button
              onClick={() => {
                toggleMenu();
                openModal();
              }}
              className="w-full text-center text-white px-3 py-3 rounded-md text-base font-semibold transition-all duration-200 mt-6 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${themeColors.accent2}, ${themeColors.accent1})`,
              }}
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </button>

            {/* Contact Info */}
            <div
              className="mt-6 pt-4 space-y-3"
              style={{ borderTop: `1px solid ${themeColors.accent1}40` }}
            >
              <a
                href="tel:+8801701744799"
                className="flex items-center space-x-3 px-3 text-white/60 hover:text-white text-sm transition-colors cursor-pointer"
              >
                <Phone
                  className="w-4 h-4"
                  style={{ color: themeColors.accent2 }}
                />
                <span>+8801701744799</span>
              </a>
              <a
                href="mailto:nextedgesoftware@gmail.com"
                className="flex items-center space-x-3 px-3 text-white/60 hover:text-white text-sm transition-colors cursor-pointer"
              >
                <Mail
                  className="w-4 h-4"
                  style={{ color: themeColors.accent2 }}
                />
                <span>nextedgesoftware@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3 px-3 text-white/60 text-sm">
                <MapPin
                  className="w-4 h-4"
                  style={{ color: themeColors.accent2 }}
                />
                <span>Rampura, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{
            background: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transition-all transform scale-100 animate-modal-in"
            style={{
              background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`,
              border: `1px solid ${themeColors.accent2}40`,
            }}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10 cursor-pointer"
            >
              <XCircle className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="relative p-6 pb-0 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: `${themeColors.accent2}20` }}
              >
                <Download
                  className="w-8 h-8"
                  style={{ color: themeColors.accent2 }}
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Download Brochure
              </h3>
              <p className="text-white/70 text-sm">
                Get detailed information about our services and solutions
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2"
                  style={{
                    background: `${themeColors.primary}80`,
                    borderColor: formErrors.name
                      ? "#ef4444"
                      : `${themeColors.accent2}40`,
                    color: "white",
                  }}
                  placeholder="Enter your full name"
                />
                {formErrors.name && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {formErrors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2"
                  style={{
                    background: `${themeColors.primary}80`,
                    borderColor: formErrors.email
                      ? "#ef4444"
                      : `${themeColors.accent2}40`,
                    color: "white",
                  }}
                  placeholder="you@example.com"
                />
                {formErrors.email && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {formErrors.email}
                  </p>
                )}
              </div>

              {/* Phone Field with Country Code */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <div className="flex gap-2">
                  {/* Country Code Select */}
                  <select
                    value={formData.countryCode}
                    onChange={handleCountryCodeChange}
                    className="px-3 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2 cursor-pointer"
                    style={{
                      background: `${themeColors.primary}80`,
                      borderColor: `${themeColors.accent2}40`,
                      color: "white",
                      width: "auto",
                      minWidth: "100px",
                    }}
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>

                  {/* Phone Number Input */}
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2"
                    style={{
                      background: `${themeColors.primary}80`,
                      borderColor: formErrors.phone
                        ? "#ef4444"
                        : `${themeColors.accent2}40`,
                      color: "white",
                    }}
                    placeholder="Phone number"
                  />
                </div>
                {formErrors.phone && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {formErrors.phone}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${themeColors.accent2}, ${themeColors.accent1})`,
                  color: "white",
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Download Brochure
                  </>
                )}
              </button>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/20 border border-green-500/40">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <p className="text-green-400 text-sm">
                    Request submitted! Your download will start shortly...
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/20 border border-red-500/40">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}

              {/* Privacy Note */}
              <p className="text-center text-white/50 text-xs">
                We respect your privacy. Your information will not be shared
                with third parties.
              </p>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes modal-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-modal-in {
          animation: modal-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;
