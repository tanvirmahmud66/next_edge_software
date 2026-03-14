import React, { useState, useEffect, useRef } from 'react';
import {
  Globe, ArrowRight, Play, ShoppingCart, BarChart3, Users, Briefcase,
  GraduationCap, Building2, Zap, Shield, Smartphone, Lock, Gauge,
  RefreshCw, Search, CheckCircle, ClipboardList, PenTool, Code,
  TestTube, Rocket, HeartHandshake, HelpCircle, ChevronRight,
  MessageCircle, Phone, Mail
} from 'lucide-react';

const WebApplicationsPage = () => {
  const [pageData, setPageData] = useState(null);
  const [typesData, setTypesData] = useState([]);
  const [featuresData, setFeaturesData] = useState([]);
  const [processData, setProcessData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const sectionRefs = useRef({});

  // Theme colors
  const colors = {
    primary: '#0F0F0F',
    secondary: '#232D3F',
    accent1: '#005B41',
    accent2: '#008170'
  };

  // Icons mapping for different types
  const getIconForType = (typeName) => {
    const iconMap = {
      'E-commerce': <ShoppingCart className="w-6 h-6" />,
      'Business': <BarChart3 className="w-6 h-6" />,
      'Customer': <Users className="w-6 h-6" />,
      'Enterprise': <Briefcase className="w-6 h-6" />,
      'Learning': <GraduationCap className="w-6 h-6" />,
      'Real Estate': <Building2 className="w-6 h-6" />,
    };
    
    // Find matching icon or return default
    const matchingKey = Object.keys(iconMap).find(key => 
      typeName.toLowerCase().includes(key.toLowerCase())
    );
    
    return matchingKey ? iconMap[matchingKey] : <Globe className="w-6 h-6" />;
  };

  // Icons mapping for features
  const getIconForFeature = (featureName) => {
    const iconMap = {
      'Responsive': <Smartphone className="w-6 h-6" />,
      'Performance': <Gauge className="w-6 h-6" />,
      'Security': <Shield className="w-6 h-6" />,
      'Scalable': <Globe className="w-6 h-6" />,
      'SEO': <Search className="w-6 h-6" />,
      'Maintenance': <RefreshCw className="w-6 h-6" />,
      'Design': <PenTool className="w-6 h-6" />,
      'Development': <Code className="w-6 h-6" />,
      'Testing': <TestTube className="w-6 h-6" />,
      'Deployment': <Rocket className="w-6 h-6" />,
    };
    
    // Find matching icon or return default
    const matchingKey = Object.keys(iconMap).find(key => 
      featureName.toLowerCase().includes(key.toLowerCase())
    );
    
    return matchingKey ? iconMap[matchingKey] : <Zap className="w-6 h-6" />;
  };

  // Icons mapping for process steps
  const getIconForProcess = (processName) => {
    const iconMap = {
      'Discovery': <ClipboardList className="w-6 h-6" />,
      'Planning': <ClipboardList className="w-6 h-6" />,
      'Design': <PenTool className="w-6 h-6" />,
      'Development': <Code className="w-6 h-6" />,
      'Testing': <TestTube className="w-6 h-6" />,
      'Deployment': <Rocket className="w-6 h-6" />,
      'Maintenance': <HeartHandshake className="w-6 h-6" />,
      'UI/UX': <PenTool className="w-6 h-6" />,
    };
    
    // Find matching icon or return default
    const matchingKey = Object.keys(iconMap).find(key => 
      processName.toLowerCase().includes(key.toLowerCase())
    );
    
    return matchingKey ? iconMap[matchingKey] : <Rocket className="w-6 h-6" />;
  };

  // Format step number with leading zero
  const formatStepNumber = (step) => {
    return step < 10 ? `0${step}` : `${step}`;
  };

  // Get accent color based on index
  const getAccentColor = (index) => {
    const accentColors = [colors.accent2, colors.accent1, colors.secondary, colors.primary];
    return accentColors[index % accentColors.length];
  };

  // Fetch all data
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        await Promise.all([fetchPageData(), fetchTypesData(), fetchFeaturesData(), fetchProcessData()]);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const fetchPageData = async () => {
    try {
      const response = await fetch('/api/resource/Web Application Page/Web Application Page', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.data) {
        setPageData(result.data);
      }
      
      setError(null);
    } catch (err) {
      console.error('Error fetching page data:', err);
      throw err;
    }
  };

  const fetchTypesData = async () => {
    try {
      // First fetch all types
      const response = await fetch('/api/resource/Web Application Type?fields=["name", "type_name", "description", "image"]', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.data && result.data.length > 0) {
        // For each type, fetch its complete details including child table items
        const typesWithDetails = await Promise.all(
          result.data.map(async (type) => {
            try {
              const detailResponse = await fetch(`/api/resource/Web Application Type/${encodeURIComponent(type.name)}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
                credentials: 'include'
              });

              if (detailResponse.ok) {
                const detailResult = await detailResponse.json();
                return detailResult.data;
              }
              return type;
            } catch (err) {
              console.error(`Error fetching details for type ${type.name}:`, err);
              return type;
            }
          })
        );
        
        setTypesData(typesWithDetails);
      }
    } catch (err) {
      console.error('Error fetching types data:', err);
    }
  };

  const fetchFeaturesData = async () => {
    try {
      // First fetch all features
      const response = await fetch('/api/resource/Feature?fields=["name", "feature_name", "description"]', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.data && result.data.length > 0) {
        // For each feature, fetch its complete details including child table items
        const featuresWithDetails = await Promise.all(
          result.data.map(async (feature) => {
            try {
              const detailResponse = await fetch(`/api/resource/Feature/${encodeURIComponent(feature.name)}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
                credentials: 'include'
              });

              if (detailResponse.ok) {
                const detailResult = await detailResponse.json();
                return detailResult.data;
              }
              return feature;
            } catch (err) {
              console.error(`Error fetching details for feature ${feature.name}:`, err);
              return feature;
            }
          })
        );
        
        setFeaturesData(featuresWithDetails);
      }
    } catch (err) {
      console.error('Error fetching features data:', err);
    }
  };

  const fetchProcessData = async () => {
    try {
      // First fetch all process steps
      const response = await fetch('/api/resource/Development Process?fields=["name", "process_name", "description", "process_step", "icon"]', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.data && result.data.length > 0) {
        // For each process, fetch its complete details including child table items
        const processesWithDetails = await Promise.all(
          result.data.map(async (process) => {
            try {
              const detailResponse = await fetch(`/api/resource/Development Process/${encodeURIComponent(process.name)}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
                credentials: 'include'
              });

              if (detailResponse.ok) {
                const detailResult = await detailResponse.json();
                return detailResult.data;
              }
              return process;
            } catch (err) {
              console.error(`Error fetching details for process ${process.name}:`, err);
              return process;
            }
          })
        );
        
        // Sort by process_step
        const sortedProcesses = processesWithDetails.sort((a, b) => 
          (a.process_step || 0) - (b.process_step || 0)
        );
        
        setProcessData(sortedProcesses);
      }
    } catch (err) {
      console.error('Error fetching process data:', err);
    }
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = {};

    Object.keys(sectionRefs.current).forEach((key) => {
      observers[key] = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }));
            }
          });
        },
        { threshold: 0.2 }
      );

      if (sectionRefs.current[key]) {
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, [pageData, typesData, featuresData, processData]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: colors.primary }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 mx-auto mb-4" style={{ borderColor: colors.accent2 }}></div>
          <p className="text-white">Loading page data...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: colors.primary }}>
        <div className="text-center text-white max-w-md px-4">
          <HelpCircle className="w-16 h-16 mx-auto mb-4" style={{ color: colors.accent2 }} />
          <h2 className="text-2xl font-bold mb-2">Error Loading Page</h2>
          <p className="text-white/70 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg"
            style={{
              background: colors.accent2,
              color: 'white'
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.primary }}>
      {/* Hero Section */}
      <section ref={el => sectionRefs.current['hero'] = el} className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Animated Background Elements */}
        <div
          className="absolute top-20 left-20 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
          style={{ background: colors.accent2, opacity: 0.2 }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"
          style={{ background: colors.accent1, opacity: 0.2 }}
        ></div>

        {/* Floating Elements */}
        <div className="absolute top-40 right-20 hidden lg:block animate-float">
          <div className="relative">
            <Globe
              className="w-16 h-16"
              style={{ color: colors.accent2, opacity: 0.3 }}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {pageData?.hero_badge && (
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                  <Globe className="w-4 h-4" style={{ color: colors.accent2 }} />
                  <span className="text-white">{pageData.hero_badge}</span>
                </div>
              )}

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                {pageData?.hero_title || "Build Powerful "}
                <span style={{ color: colors.accent2 }}>Web Applications</span>{" "}
                {!pageData?.hero_title && "That Drive Business Growth"}
              </h1>

              {pageData?.hero_subtitle && (
                <p className="text-lg lg:text-xl text-white/80 mb-8 leading-relaxed">
                  {pageData.hero_subtitle}
                </p>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                {pageData?.hero_primary_button_title && (
                  <a
                    href={pageData.hero_primary_action || "#contact"}
                    className="group px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2"
                    style={{
                      background: `linear-gradient(135deg, ${colors.accent2}, ${colors.accent1})`,
                      color: "white",
                    }}
                  >
                    {pageData.hero_primary_button_title}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
                
                {pageData?.hero_secondary_button_title && (
                  <a
                    href={pageData.hero_secondary_action || "#showcase"}
                    className="group px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 border-2"
                    style={{
                      borderColor: colors.accent2,
                      color: colors.accent2,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.accent2;
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = colors.accent2;
                    }}
                  >
                    <Play className="w-5 h-5" />
                    {pageData.hero_secondary_button_title}
                  </a>
                )}
              </div>
            </div>

            {/* Right Content - Hero Image */}
            {pageData?.hero_image && (
              <div className="relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={pageData.hero_image}
                    alt="Web Application Development"
                    className="w-full h-auto"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary}80 0%, transparent 70%)`,
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Types Section - Dynamic */}
      <section ref={el => sectionRefs.current['types'] = el} className="py-20 lg:py-28" style={{ background: `${colors.primary}20` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/20">
              <Globe className="w-4 h-4" style={{ color: colors.accent2 }} />
              <span className="text-white">{pageData?.application_type_badge || "Web Application Types"}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {pageData?.application_type_title || "Solutions for Every Business Need"}
            </h2>
            <p className="text-white/70 text-lg">
              {pageData?.application_type_subtitle || "From e-commerce to enterprise, we build web applications for every industry and use case."}
            </p>
          </div>

          {/* Dynamic Types Grid */}
          {typesData.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {typesData.map((type, index) => {
                const accentColor = getAccentColor(index);
                const typeItems = type.type_items || [];
                
                return (
                  <div
                    key={type.name}
                    className={`group relative rounded-xl overflow-hidden transition-all duration-700 transform hover:-translate-y-2 hover:shadow-2xl ${
                      isVisible['types'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={type.image || 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
                        alt={type.type_name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, ${accentColor}CC 0%, ${colors.primary}CC 100%)`
                        }}
                      ></div>
                    </div>

                    {/* Content */}
                    <div className="relative p-6 h-full flex flex-col min-h-[320px]">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="p-2 rounded-lg backdrop-blur-sm border border-white/20"
                          style={{ background: `${accentColor}30`, color: 'white' }}
                        >
                          {getIconForType(type.type_name)}
                        </div>
                        <h3 className="text-xl font-bold text-white">{type.type_name}</h3>
                      </div>

                      <p className="text-white/90 text-sm mb-4 line-clamp-2">{type.description}</p>

                      {/* Type Items from child table */}
                      {typeItems && typeItems.length > 0 ? (
                        <ul className="space-y-2 mb-4">
                          {typeItems.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                              <span>{item.value || item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="text-white/50 text-sm mb-4 italic">No features listed</div>
                      )}

                      <a
                        href="#learn-more"
                        className="inline-flex items-center gap-2 text-white font-medium mt-auto group-hover:gap-3 transition-all hover:text-white/80"
                        onClick={(e) => e.preventDefault()}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>

                    {/* Hover Effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                      style={{ background: accentColor }}
                    ></div>
                  </div>
                );
              })}
            </div>
          ) : (
            // Fallback message if no types are found
            <div className="text-center text-white/60 py-12">
              <p>No application types available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section - Dynamic */}
      <section ref={el => sectionRefs.current['features'] = el} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/20">
              <Zap className="w-4 h-4" style={{ color: colors.accent2 }} />
              <span className="text-white">{pageData?.feature_section_badge || "Key Features"}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {pageData?.feature_section_title || "What Makes Our Web Apps Exceptional"}
            </h2>
            <p className="text-white/70 text-lg">
              {pageData?.feature_section_subtitle || "We build applications with the latest technologies and best practices."}
            </p>
          </div>

          {/* Dynamic Features Grid */}
          {featuresData.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuresData.map((feature, index) => {
                const accentColor = getAccentColor(index);
                const featureItems = feature.feature_items || [];
                
                return (
                  <div
                    key={feature.name}
                    className={`group relative rounded-xl overflow-hidden transition-all duration-700 transform hover:-translate-y-2 hover:shadow-2xl ${
                      isVisible['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Background Image - Using Unsplash images based on feature name */}
                    <div className="absolute inset-0">
                      <img
                        src={`https://images.unsplash.com/photo-${
                          index % 6 === 0 ? '1512941937669-90a1b58e7e9c' :
                          index % 6 === 1 ? '1460925895917-afdab827c52f' :
                          index % 6 === 2 ? '1555949963-aa79dcee981c' :
                          index % 6 === 3 ? '1451187580459-43490279c0fa' :
                          index % 6 === 4 ? '1562577309-4932fdd64cd1' :
                          '1558494949-ef010cbdcc31'
                        }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                        alt={feature.feature_name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, ${accentColor}99 0%, ${colors.primary}CC 100%)`
                        }}
                      ></div>
                    </div>

                    {/* Content */}
                    <div className="relative p-6 h-full flex flex-col min-h-[280px]">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm border"
                        style={{
                          background: `${accentColor}30`,
                          borderColor: `${accentColor}60`,
                          color: 'white'
                        }}
                      >
                        {getIconForFeature(feature.feature_name)}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{feature.feature_name}</h3>
                      <p className="text-white/90 text-sm mb-4">{feature.description}</p>

                      {/* Feature Items from child table */}
                      {featureItems && featureItems.length > 0 ? (
                        <ul className="space-y-2 mb-4">
                          {featureItems.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                              <CheckCircle className="w-4 h-4" style={{ color: 'white' }} />
                              <span>{item.value || item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="flex items-center gap-2 text-white/80 mt-auto">
                          <CheckCircle className="w-4 h-4" style={{ color: 'white' }} />
                          <span className="text-sm">Included in all projects</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // Fallback message if no features are found
            <div className="text-center text-white/60 py-12">
              <p>No features available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Process Section - Now Dynamic */}
      <section ref={el => sectionRefs.current['process'] = el} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/20">
              <Rocket className="w-4 h-4" style={{ color: colors.accent2 }} />
              <span className="text-white">{pageData?.process_badge || "Development Process"}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {pageData?.process_title || "How We Build Web Applications"}
            </h2>
            <p className="text-white/70 text-lg">
              {pageData?.process_subtitle || "A proven methodology that ensures quality, transparency, and successful delivery."}
            </p>
          </div>

          {/* Dynamic Process Timeline */}
          {processData.length > 0 ? (
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 hidden lg:block"
                   style={{ background: `linear-gradient(90deg, ${colors.accent2}, ${colors.accent1}, ${colors.secondary}, ${colors.primary})` }}>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {processData.map((process, index) => {
                  const accentColor = getAccentColor(index);
                  const processItems = process.process_items || [];
                  
                  return (
                    <div
                      key={process.name}
                      className={`group relative rounded-xl overflow-hidden transition-all duration-700 transform hover:-translate-y-2 hover:shadow-2xl ${
                        isVisible['process'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src={`https://images.unsplash.com/photo-${
                            index % 6 === 0 ? '1552664730-d307ca884978' :
                            index % 6 === 1 ? '1586717791821-3f44a563fa4c' :
                            index % 6 === 2 ? '1558494949-ef010cbdcc31' :
                            index % 6 === 3 ? '1555949963-aa79dcee981c' :
                            index % 6 === 4 ? '1451187580459-43490279c0fa' :
                            '1558494949-ef010cbdcc31'
                          }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                          alt={process.process_name}
                          className="w-full h-full object-cover"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(135deg, ${accentColor}CC 0%, ${colors.primary}CC 100%)`
                          }}
                        ></div>
                      </div>

                      {/* Content */}
                      <div className="relative p-6">
                        {/* Step Number */}
                        <div
                          className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg backdrop-blur-sm border"
                          style={{
                            background: `${accentColor}30`,
                            borderColor: `${accentColor}60`
                          }}
                        >
                          {formatStepNumber(process.process_step || (index + 1))}
                        </div>

                        {/* Icon */}
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                          style={{ background: `${accentColor}30`, color: 'white' }}
                        >
                          {process.icon ? (
                            <img src={process.icon} alt={process.process_name} className="w-6 h-6" />
                          ) : (
                            getIconForProcess(process.process_name)
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2">{process.process_name}</h3>
                        <p className="text-white/90 text-sm mb-4">{process.description}</p>

                        {/* Process Items from child table */}
                        {processItems && processItems.length > 0 ? (
                          <ul className="space-y-2">
                            {processItems.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                                <CheckCircle className="w-4 h-4" style={{ color: 'white' }} />
                                <span>{item.value || item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="text-white/50 text-sm italic">No details listed</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            // Fallback message if no process steps are found
            <div className="text-center text-white/60 py-12">
              <p>No development process steps available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      {pageData?.faq_items && pageData.faq_items.length > 0 && (
        <section ref={el => sectionRefs.current['faq'] = el} className="py-20 lg:py-28" style={{ background: `${colors.primary}20` }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/20">
                <HelpCircle className="w-4 h-4" style={{ color: colors.accent2 }} />
                <span className="text-white">{pageData.faq_badge || "FAQ"}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {pageData.faq_title || "Frequently Asked Questions"}
              </h2>
              <p className="text-white/70 text-lg">
                {pageData.faq_subtitle || "Got questions about web application development? We've got answers."}
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {pageData.faq_items.map((faq, index) => (
                <div
                  key={index}
                  className={`backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-700 border ${
                    isVisible['faq'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderColor: openFaqIndex === index ? colors.accent2 : `${colors.accent2}30`,
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle
                        className="w-5 h-5 transition-colors"
                        style={{ color: openFaqIndex === index ? colors.accent2 : `${colors.accent2}60` }}
                      />
                      <span className="text-white font-medium">{faq.primary_value}</span>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 transition-all duration-300 ${
                        openFaqIndex === index ? 'rotate-90' : ''
                      }`}
                      style={{ color: colors.accent2 }}
                    />
                  </button>

                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      openFaqIndex === index ? 'pb-6 max-h-40' : 'max-h-0'
                    }`}
                  >
                    <p className="text-white/70 text-sm leading-relaxed">
                      {faq.secondary_value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Still have questions */}
            <div className="text-center mt-8">
              <p className="text-white/60 text-sm mb-3">Still have questions about web development?</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all hover:shadow-lg"
                style={{
                  background: colors.accent2,
                  color: 'white'
                }}
              >
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {pageData?.cta_badge && (
        <section className="py-20 lg:py-28 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            {pageData.hero_image ? (
              <img
                src={pageData.hero_image}
                alt="Web Development"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="Web Development"
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0" style={{
              background: `linear-gradient(135deg, ${colors.primary}CC 0%, ${colors.secondary}CC 100%)`
            }}></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full mix-blend-overlay filter blur-3xl"
            style={{ background: colors.accent2, opacity: 0.3 }}
          ></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full mix-blend-overlay filter blur-3xl"
            style={{ background: colors.accent1, opacity: 0.3 }}
          ></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <Globe className="w-4 h-4" style={{ color: colors.accent2 }} />
              <span className="text-white">{pageData.cta_badge}</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              {pageData.cta_title || "Ready to Build Your "}
              <span style={{ color: colors.accent2 }}>
                {pageData.cta_title ? "" : "Web Application?"}
              </span>
            </h2>

            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {pageData.cta_subtitle || "Let's discuss your project requirements and see how we can help you achieve your business goals with a custom web application."}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {pageData.cta_primary_button_title && (
                <a
                  href={pageData.cta_primary_action || "#contact"}
                  className="group px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2"
                  style={{
                    background: `linear-gradient(135deg, ${colors.accent2}, ${colors.accent1})`,
                    color: 'white'
                  }}
                >
                  {pageData.cta_primary_button_title}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              )}

              {pageData.cta_secondary_button_title && (
                <a
                  href={pageData.cta_secondary_action || "#consultation"}
                  className="group px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 border-2"
                  style={{
                    borderColor: colors.accent2,
                    color: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.accent2;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  {pageData.cta_secondary_button_title}
                </a>
              )}
            </div>

            {/* Contact Info */}
            {(pageData.phone || pageData.email || pageData.web_url) && (
              <div className="grid md:grid-cols-3 gap-6 pt-8" style={{ borderTop: `1px solid ${colors.accent1}60` }}>
                {pageData.phone && (
                  <a
                    href={`tel:${pageData.phone}`}
                    className="flex items-center justify-center gap-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="p-2 rounded-full" style={{ background: `${colors.accent2}30` }}>
                      <Phone className="w-4 h-4" style={{ color: colors.accent2 }} />
                    </div>
                    <span>{pageData.phone}</span>
                  </a>
                )}

                {pageData.email && (
                  <a
                    href={`mailto:${pageData.email}`}
                    className="flex items-center justify-center gap-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="p-2 rounded-full" style={{ background: `${colors.accent1}30` }}>
                      <Mail className="w-4 h-4" style={{ color: colors.accent1 }} />
                    </div>
                    <span>{pageData.email}</span>
                  </a>
                )}

                {pageData.web_url && (
                  <div className="flex items-center justify-center gap-3 text-white/80">
                    <div className="p-2 rounded-full" style={{ background: `${colors.secondary}30` }}>
                      <Globe className="w-4 h-4" style={{ color: colors.secondary }} />
                    </div>
                    <span>{pageData.web_url}</span>
                  </div>
                )}
              </div>
            )}

            {/* Trust Badge */}
            {pageData.trust_badge && (
              <div className="mt-8">
                <span className="text-sm text-white/60">
                  {pageData.trust_badge}
                </span>
              </div>
            )}
          </div>
        </section>
      )}

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default WebApplicationsPage;








