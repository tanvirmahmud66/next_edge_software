
// ContactPage.jsx
import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Linkedin,
  Twitter,
  Github,
  MessageSquare,
  Headphones,
  Users,
  Facebook,
  Youtube,
  Globe,
  Award,
  TrendingUp,
  Star,
  Shield,
  Zap,
  Target
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ContactPage = () => {
  // Use theme hook
  const { colors, loading: themeLoading, error: themeError, refreshTheme } = useTheme();

  // State for contact data
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    full_name: '',
    email_address: '',
    company_name: '',
    phone_number: '',
    service_interested_in: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [formSubmitting, setFormSubmitting] = useState(false);

  // Array of possible icons for stats
  const iconComponents = [
    <Headphones className="w-5 h-5" />,
    <Users className="w-5 h-5" />,
    <MessageSquare className="w-5 h-5" />,
    <Award className="w-5 h-5" />,
    <TrendingUp className="w-5 h-5" />,
    <Star className="w-5 h-5" />,
    <Shield className="w-5 h-5" />,
    <Zap className="w-5 h-5" />,
    <Target className="w-5 h-5" />,
    <Clock className="w-5 h-5" />
  ];

  // Fetch contact data from Frappe
  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/resource/Contact%20Us/Contact%20Us', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Failed to fetch contact data');
      }

      const data = await response.json();
      setContactData(data.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching contact data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    
    try {
      // Prepare the data for Website Lead doctype
      const leadData = {
        full_name: formData.full_name,
        email_address: formData.email_address,
        company_name: formData.company_name,
        phone_number: formData.phone_number,
        service_interested_in: formData.service_interested_in,
        message: formData.message
      };

      // Submit to Frappe backend
      const response = await fetch('/api/resource/Website%20Lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(leadData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      
      // Show success message
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for reaching out! We\'ll get back to you within 24 hours.'
      });
      
      // Reset form
      setFormData({
        full_name: '',
        email_address: '',
        company_name: '',
        phone_number: '',
        service_interested_in: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);

    } catch (err) {
      console.error('Error submitting form:', err);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Something went wrong. Please try again later.'
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);
    } finally {
      setFormSubmitting(false);
    }
  };

  // Get random icon for stats
  const getRandomIcon = (index) => {
    return iconComponents[index % iconComponents.length];
  };

  // Get social icon component
  const getSocialIcon = (platform) => {
    switch(platform?.toLowerCase()) {
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'youtube':
        return <Youtube className="w-5 h-5" />;
      case 'whatsapp':
        return <Phone className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  // Build contact info array from fetched data
  const getContactInfo = () => {
    if (!contactData) return [];

    return [
      {
        icon: <Phone className="w-6 h-6" />,
        title: 'Phone',
        details: contactData.primary_number || '+1 (555) 123-4567',
        subDetails: contactData.secondary_number || 'Mon-Fri 9am-6pm EST',
        color: colors?.accent2 || '#008170'
      },
      {
        icon: <Mail className="w-6 h-6" />,
        title: 'Email',
        details: contactData.primary_email || 'hello@techstudio.com',
        subDetails: contactData.secondary_email || 'support@techstudio.com',
        color: colors?.accent1 || '#005B41'
      },
      {
        icon: <MapPin className="w-6 h-6" />,
        title: 'Office',
        details: contactData.address_1 || '123 Innovation Drive',
        subDetails: contactData.address_2 || 'San Francisco, CA 94105',
        color: colors?.accent2 || '#008170'
      },
      {
        icon: <Clock className="w-6 h-6" />,
        title: 'Business Hours',
        details: contactData.business_days || 'Monday - Friday',
        subDetails: contactData.business_times || '9:00 AM - 6:00 PM EST',
        color: colors?.accent1 || '#005B41'
      }
    ];
  };

  // Get social links from fetched data
  const getSocialLinks = () => {
    if (!contactData) return [];

    const socials = [];
    if (contactData.facebook) socials.push({ platform: 'facebook', url: contactData.facebook });
    if (contactData.linkedin) socials.push({ platform: 'linkedin', url: contactData.linkedin });
    if (contactData.twitter) socials.push({ platform: 'twitter', url: contactData.twitter });
    if (contactData.github) socials.push({ platform: 'github', url: contactData.github });
    if (contactData.youtube) socials.push({ platform: 'youtube', url: contactData.youtube });
    if (contactData.whatsapp) socials.push({ platform: 'whatsapp', url: contactData.whatsapp });
    
    return socials;
  };

  // Get stats from items child table - FULLY DYNAMIC
  const getStats = () => {
    // If no contact data or no items, return empty array (don't show stats section)
    if (!contactData?.items || contactData.items.length === 0) {
      return [];
    }

    // Map each item from the child table to a stat
    return contactData.items.map((item, index) => ({
      value: item.primary_value || '24/7',
      label: item.secondary_value || 'Support Available',
      icon: getRandomIcon(index),
      // You can use attachment if needed for custom icons
      attachment: item.attachment || null
    }));
  };

  const services = [
    'Custom Software Development',
    'Mobile App Development',
    'Cloud Solutions',
    'UI/UX Design',
    'Digital Transformation',
    'IT Consulting'
  ];

  const contactInfo = getContactInfo();
  const socialLinks = getSocialLinks();
  const stats = getStats();

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
      {(error || themeError) && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm z-30 flex items-center gap-3">
          <AlertCircle className="w-4 h-4" />
          <span>Error: {error || themeError}</span>
          <button 
            onClick={fetchContactData}
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
          background: `linear-gradient(135deg, ${colors?.primary || '#0F0F0F'} 0%, ${colors?.secondary || '#232D3F'} 50%, ${colors?.accent1 || '#005B41'} 100%)`
        }}
      />

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-ping"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            backgroundColor: i % 2 === 0 ? colors?.accent2 || '#008170' : colors?.accent1 || '#005B41',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.3}s`,
            opacity: 0.1,
            zIndex: 0
          }}
        />
      ))}

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full animate-pulse"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        style={{ background: colors?.accent2 || '#008170', opacity: 0.2 }}
      />
      <div className="absolute top-40 right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
        style={{ background: colors?.accent1 || '#005B41', opacity: 0.2 }}
      />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
        style={{ background: colors?.primary || '#0F0F0F', opacity: 0.3 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border"
            style={{ 
              background: `${colors?.accent2 || '#008170'}20`,
              borderColor: `${colors?.accent2 || '#008170'}40`
            }}
          >
            <MessageSquare className="w-4 h-4" style={{ color: colors?.accent2 || '#008170' }} />
            <span>{contactData?.section_badge || 'Get In Touch'}</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {contactData?.section_title || "Let's Discuss Your "}
            <span className="relative inline-block group" style={{ color: colors?.accent2 || '#008170' }}>
              {contactData?.section_title?.split(' ').pop() || 'Project'}
              <span 
                className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
                style={{ 
                  background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                }}
              />
            </span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {contactData?.section_subtitle || "Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you within 24 hours."}
          </p>
        </div>

        {/* Stats Section - FULLY DYNAMIC from child table */}
        {stats.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 transform hover:-translate-y-2 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-3">
                  <div 
                    className="p-3 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors?.accent2 || '#008170'}20, ${colors?.accent1 || '#005B41'}20)`,
                      color: colors?.accent2 || '#008170'
                    }}
                  >
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-white/70 group-hover:text-white/80 transition-colors">
                  {stat.label}
                </div>
                {/* Optional: Display attachment if exists */}
                {stat.attachment && (
                  <div className="mt-2 text-xs text-white/50">
                    <a href={stat.attachment} target="_blank" rel="noopener noreferrer" className="hover:text-white/70">
                      View details
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transform hover:-translate-y-2 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="p-3 rounded-lg shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{ 
                      background: `linear-gradient(135deg, ${info.color}20, transparent)`,
                      color: info.color
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 group-hover:text-white transition-colors">{info.title}</h3>
                    <p className="text-white/90 mb-1 group-hover:text-white transition-colors">{info.details}</p>
                    <p className="text-white/70 text-sm group-hover:text-white/80 transition-colors">{info.subDetails}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
                <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                      style={{ color: colors?.accent2 || '#008170' }}
                    >
                      {getSocialIcon(social.platform)}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:border-white/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

              {/* Status Messages */}
              {formStatus.submitted && (
                <div 
                  className={`mb-6 p-4 border rounded-lg flex items-center gap-3 text-white animate-fadeIn ${
                    formStatus.success ? 'bg-green-500/20 border-green-500/30' : 'bg-red-500/20 border-red-500/30'
                  }`}
                >
                  {formStatus.success ? (
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                  <p>{formStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-white/90 text-sm font-medium mb-2 group-hover:text-white transition-colors">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{ 
                        '--tw-ring-color': colors?.accent2 || '#008170'
                      }}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-white/90 text-sm font-medium mb-2 group-hover:text-white transition-colors">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email_address"
                      value={formData.email_address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{ 
                        '--tw-ring-color': colors?.accent2 || '#008170'
                      }}
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                {/* Company and Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-white/90 text-sm font-medium mb-2 group-hover:text-white transition-colors">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{ 
                        '--tw-ring-color': colors?.accent2 || '#008170'
                      }}
                      placeholder="Tech Corp Inc."
                    />
                  </div>
                  <div className="group">
                    <label className="block text-white/90 text-sm font-medium mb-2 group-hover:text-white transition-colors">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{ 
                        '--tw-ring-color': colors?.accent2 || '#008170'
                      }}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="group">
                  <label className="block text-white/90 text-sm font-medium mb-2 group-hover:text-white transition-colors">
                    Service Interested In *
                  </label>
                  <select
                    name="service_interested_in"
                    value={formData.service_interested_in}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      '--tw-ring-color': colors?.accent2 || '#008170'
                    }}
                  >
                    <option value="" className="bg-gray-800">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-gray-800">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-white/90 text-sm font-medium mb-2 group-hover:text-white transition-colors">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
                    style={{ 
                      '--tw-ring-color': colors?.accent2 || '#008170'
                    }}
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none relative overflow-hidden group/btn"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`,
                    color: 'white'
                  }}
                >
                  {formSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Send Message</span>
                      <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                      <div 
                        className="absolute inset-0 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"
                        style={{ background: 'white' }}
                      />
                    </>
                  )}
                </button>

                <p className="text-white/60 text-sm text-center hover:text-white/70 transition-colors">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Custom ring color for inputs */
        input:focus, select:focus, textarea:focus {
          --tw-ring-color: ${colors?.accent2 || '#008170'};
          ring: 2px solid var(--tw-ring-color);
        }
      `}</style>
    </section>
  );
};

export default ContactPage;