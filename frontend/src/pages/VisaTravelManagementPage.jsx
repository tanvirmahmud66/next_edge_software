
// VisaTravelManagementPage.jsx
import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';

const VisaTravelManagementPage = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredDestination, setHoveredDestination] = useState(null);

  // Use theme hook
  const { colors, loading, error, refreshTheme } = useTheme();

  const stats = [
    { value: '25K+', label: 'Visas Processed', icon: '🎫' },
    { value: '50K+', label: 'Happy Travelers', icon: '👥' },
    { value: '100+', label: 'Countries Covered', icon: '🌍' },
    { value: '98%', label: 'Success Rate', icon: '🏆' }
  ];

  const services = [
    {
      icon: '🎫',
      title: 'Visa Processing',
      description: 'End-to-end visa application management for business and tourist visas.',
      features: [
        'Document verification',
        'Application filing',
        'Appointment scheduling',
        'Track application status'
      ],
      turnaround: '3-5 days',
      successRate: '98%',
      image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: '✈️',
      title: 'Flight Bookings',
      description: 'Best-in-class flight reservations with real-time pricing and availability.',
      features: [
        'Multi-city bookings',
        'Group reservations',
        'Fare comparisons',
        '24/7 support'
      ],
      turnaround: 'Instant',
      successRate: '100%',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: '🏨',
      title: 'Hotel Accommodations',
      description: 'Curated hotel selections from budget to luxury properties worldwide.',
      features: [
        'Best rate guarantee',
        'Special requests',
        'Loyalty programs',
        'Group bookings'
      ],
      turnaround: 'Instant',
      successRate: '99%',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: '🧭',
      title: 'Tour Packages',
      description: 'Customized tour packages with local experiences and guided tours.',
      features: [
        'Itinerary planning',
        'Local guides',
        'Transportation',
        'Activity bookings'
      ],
      turnaround: '1-2 days',
      successRate: '97%',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const popularDestinations = [
    {
      country: 'United States',
      capital: 'Washington, D.C.',
      visaType: 'B1/B2 Visa',
      processingTime: '5-7 days',
      fee: '$160',
      popularity: 98,
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      requirements: ['Valid passport', 'Photo', 'Bank statements', 'Travel itinerary']
    },
    {
      country: 'United Kingdom',
      capital: 'London',
      visaType: 'Standard Visitor',
      processingTime: '3-4 weeks',
      fee: '£100',
      popularity: 95,
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      requirements: ['Passport', 'Photo', 'Proof of funds', 'Accommodation details']
    },
    {
      country: 'Canada',
      capital: 'Ottawa',
      visaType: 'Visitor Visa',
      processingTime: '2-3 weeks',
      fee: 'CAD 100',
      popularity: 92,
      image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      requirements: ['Valid passport', 'Photos', 'Financial proof', 'Travel history']
    },
    {
      country: 'Australia',
      capital: 'Canberra',
      visaType: 'Visitor Visa (600)',
      processingTime: '2-4 weeks',
      fee: 'AUD 145',
      popularity: 90,
      image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      requirements: ['Passport', 'Photos', 'Financial capacity', 'Health insurance']
    }
  ];

  const recentApplications = [
    {
      id: 'VISA-2024-001',
      applicant: 'John Smith',
      country: 'United States',
      type: 'Tourist Visa',
      submitted: '2024-02-20',
      status: 'approved',
      priority: 'normal',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'VISA-2024-002',
      applicant: 'Emma Watson',
      country: 'United Kingdom',
      type: 'Business Visa',
      submitted: '2024-02-19',
      status: 'processing',
      priority: 'high',
      image: 'https://images.unsplash.com/photo-1494790108777-466fd6c3e5e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'VISA-2024-003',
      applicant: 'Michael Chen',
      country: 'Canada',
      type: 'Student Visa',
      submitted: '2024-02-18',
      status: 'documents-required',
      priority: 'urgent',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'VISA-2024-004',
      applicant: 'Sofia Rodriguez',
      country: 'Australia',
      type: 'Tourist Visa',
      submitted: '2024-02-17',
      status: 'approved',
      priority: 'normal',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const upcomingTrips = [
    {
      traveler: 'Sarah Johnson',
      destination: 'Paris, France',
      departure: '2024-03-15',
      return: '2024-03-22',
      type: 'Leisure',
      status: 'confirmed',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bookingRef: 'BK-2024-089'
    },
    {
      traveler: 'James Wilson',
      destination: 'Tokyo, Japan',
      departure: '2024-04-02',
      return: '2024-04-10',
      type: 'Business',
      status: 'pending',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bookingRef: 'BK-2024-092'
    },
    {
      traveler: 'Lisa Zhang',
      destination: 'Bali, Indonesia',
      departure: '2024-03-28',
      return: '2024-04-05',
      type: 'Honeymoon',
      status: 'confirmed',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bookingRef: 'BK-2024-094'
    }
  ];

  const visaRequirements = [
    {
      country: 'United States',
      documents: [
        'Valid passport (6 months validity)',
        'DS-160 confirmation page',
        'Photo (2x2 inches)',
        'Bank statements (3 months)',
        'Employment letter',
        'Travel itinerary'
      ],
      fee: '$160',
      processing: '5-7 business days'
    },
    {
      country: 'United Kingdom',
      documents: [
        'Valid passport',
        'Online application form',
        'Biometric residence permit',
        'Proof of funds',
        'Accommodation proof',
        'Travel insurance'
      ],
      fee: '£100',
      processing: '3-4 weeks'
    },
    {
      country: 'Schengen',
      documents: [
        'Valid passport',
        'Schengen application form',
        'Travel insurance',
        'Flight reservation',
        'Hotel booking',
        'Proof of employment'
      ],
      fee: '€80',
      processing: '15 calendar days'
    }
  ];

  const testimonials = [
    {
      name: 'Robert Chen',
      role: 'Business Traveler',
      content: 'Their visa service is exceptional. Got my US visa in just 4 days with minimal effort on my part.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      destination: 'United States'
    },
    {
      name: 'Amara Patel',
      role: 'Tourist',
      content: 'They planned our entire Europe trip perfectly. Every detail was taken care of, and we had a stress-free vacation.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      destination: 'Europe'
    },
    {
      name: 'David Kim',
      role: 'Student',
      content: 'Got my Canadian student visa smoothly. Their team guided me through every step of the application.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      destination: 'Canada'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'approved': return 'text-emerald-500 bg-emerald-500/20';
      case 'confirmed': return 'text-emerald-500 bg-emerald-500/20';
      case 'processing': return 'text-yellow-500 bg-yellow-500/20';
      case 'documents-required': return 'text-orange-500 bg-orange-500/20';
      case 'pending': return 'text-yellow-500 bg-yellow-500/20';
      default: return 'text-emerald-500 bg-emerald-500/20';
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gray-900">
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ 
      background: `linear-gradient(135deg, ${colors?.primary || '#0F0F0F'} 0%, ${colors?.secondary || '#232D3F'} 50%, ${colors?.accent1 || '#005B41'} 100%)`
    }}>
      {/* Error message with retry button */}
      {error && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm z-50 flex items-center gap-3">
          <span>Theme load failed: {error}</span>
          <button 
            onClick={refreshTheme}
            className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs transition-colors"
          >
            Retry
          </button>
        </div>
      )}

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="fixed rounded-full animate-ping"
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
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5l25 15v20L30 55 5 40V20l25-15z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="fixed top-40 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-float pointer-events-none"
        style={{ background: colors?.accent2 || '#008170', opacity: 0.1 }}
      />
      <div className="fixed bottom-40 right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000 pointer-events-none"
        style={{ background: colors?.accent1 || '#005B41', opacity: 0.1 }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div 
                  className="inline-flex items-center gap-2 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border"
                  style={{ 
                    background: `${colors?.accent2 || '#008170'}20`,
                    borderColor: `${colors?.accent2 || '#008170'}40`
                  }}
                >
                  <span style={{ color: colors?.accent2 || '#008170' }}>🌍</span>
                  <span>Visa & Travel Management</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Your Gateway to{' '}
                  <span className="relative inline-block group" style={{ color: colors?.accent2 || '#008170' }}>
                    Seamless Travel
                    <span 
                      className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
                      style={{ 
                        background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                      }}
                    />
                  </span>
                  <br />& Visa Processing
                </h1>
                
                <p className="text-xl text-white/70 mb-8 max-w-lg">
                  End-to-end visa assistance and travel management solutions for individuals, 
                  businesses, and groups. Stress-free travel starts here.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-12">
                  <button
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`,
                      boxShadow: `0 10px 20px -5px ${colors?.accent2 || '#008170'}80`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 20px 25px -5px ${colors?.accent2 || '#008170'}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 10px 20px -5px ${colors?.accent2 || '#008170'}80`;
                    }}
                  >
                    <span className="relative z-10">Apply for Visa</span>
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ background: 'white' }}
                    />
                  </button>
                  <button
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 active:bg-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transform hover:-translate-y-1"
                  >
                    <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">🧭</span>
                    Plan Your Trip
                  </button>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div 
                      key={index} 
                      className="text-center transform transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform">{stat.value}</div>
                      <div className="text-white/40 text-sm flex items-center justify-center gap-1 group-hover:text-white/60 transition-colors">
                        <span className="transition-transform duration-300 group-hover:scale-110" style={{ color: colors?.accent2 || '#008170' }}>{stat.icon}</span>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Interactive Map */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105 group">
                  <img
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="World Map"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" style={{ 
                    background: `linear-gradient(135deg, ${colors?.accent2 || '#008170'}40, transparent, ${colors?.accent1 || '#005B41'}40)`
                  }} />

                  {/* Floating Destination Pins */}
                  <div className="absolute top-1/4 left-1/3 animate-pulse">
                    <div className="relative">
                      <span className="text-2xl transition-transform duration-300 hover:scale-150 cursor-pointer" style={{ color: colors?.accent2 || '#008170' }}>📍</span>
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:opacity-100">
                        New York
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-1/4 animate-pulse animation-delay-1000">
                    <div className="relative">
                      <span className="text-2xl transition-transform duration-300 hover:scale-150 cursor-pointer" style={{ color: colors?.accent1 || '#005B41' }}>📍</span>
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 transition-opacity duration-300 hover:opacity-100">
                        London
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-1/3 left-1/2 animate-pulse animation-delay-2000">
                    <div className="relative">
                      <span className="text-2xl transition-transform duration-300 hover:scale-150 cursor-pointer" style={{ color: colors?.accent2 || '#008170' }}>📍</span>
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 transition-opacity duration-300 hover:opacity-100">
                        Tokyo
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-3xl animate-pulse">
                      🏆
                    </div>
                    <div>
                      <div className="text-white/60 text-xs">Success Rate</div>
                      <div className="text-2xl font-bold text-white">98%</div>
                      <div className="text-white/40 text-xs">Visa Approval</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive{' '}
                <span className="relative inline-block group" style={{ color: colors?.accent2 || '#008170' }}>
                  Travel Services
                  <span 
                    className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                    }}
                  />
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Everything you need for hassle-free travel, all in one place
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0" style={{ 
                      background: `linear-gradient(to top, ${colors?.primary || '#0F0F0F'}, transparent)`
                    }} />
                  </div>
                  
                  <div className="relative p-6 h-full flex flex-col justify-end min-h-[350px]">
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                        style={{ background: `${colors?.accent2 || '#008170'}40`, backdropFilter: 'blur(8px)' }}
                      >
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-white/40 text-xs">Turnaround</div>
                        <div className="text-white font-semibold text-sm">{service.turnaround}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{service.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-2 text-white/60 text-xs transition-all duration-300 hover:translate-x-1"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <span className="transition-transform duration-300 group-hover:scale-110" style={{ color: colors?.accent2 || '#008170' }}>✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <span className="text-white/40 text-xs">Success Rate</span>
                      <span className="text-white font-semibold relative">
                        {service.successRate}
                        <span 
                          className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                          style={{ background: colors?.accent2 || '#008170' }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">
                  Popular{' '}
                  <span className="relative inline-block group" style={{ color: colors?.accent2 || '#008170' }}>
                    Destinations
                    <span 
                      className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
                      style={{ 
                        background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                      }}
                    />
                  </span>
                </h2>
                <p className="text-white/60">Most requested visa destinations</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 text-white transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                    viewMode === 'grid' ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  ⊞
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 text-white transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                    viewMode === 'list' ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  ≡
                </button>
              </div>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid lg:grid-cols-4 gap-6">
                {popularDestinations.map((destination, index) => (
                  <div
                    key={index}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white/5 backdrop-blur-xl border border-white/10 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                    onClick={() => setSelectedDestination(destination)}
                    onMouseEnter={() => setHoveredDestination(index)}
                    onMouseLeave={() => setHoveredDestination(null)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.country}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0" style={{ 
                        background: `linear-gradient(to top, ${colors?.primary || '#0F0F0F'}, transparent)`
                      }} />
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-white mb-1">{destination.country}</h3>
                      <p className="text-white/60 text-sm mb-2">{destination.capital}</p>
                      
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/40">{destination.visaType}</span>
                        <span className="text-white font-semibold">{destination.fee}</span>
                      </div>
                      
                      <div className="mt-3 flex items-center gap-2">
                        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-700"
                            style={{ 
                              width: hoveredDestination === index ? `${destination.popularity + 2}%` : `${destination.popularity}%`,
                              background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                            }}
                          />
                        </div>
                        <span className="text-white/40 text-xs">{destination.popularity}%</span>
                      </div>
                    </div>

                    {/* Popularity Badge */}
                    {destination.popularity > 95 && (
                      <div className="absolute top-4 right-4 transform transition-all duration-300 hover:scale-110">
                        <div className="bg-yellow-500/20 backdrop-blur-sm text-yellow-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                          <span className="animate-pulse">⭐</span>
                          Top Rated
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
                {popularDestinations.map((destination, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 p-4 hover:bg-white/5 transition-all duration-300 cursor-pointer border-b border-white/10 last:border-0 transform hover:translate-x-2"
                    onClick={() => setSelectedDestination(destination)}
                  >
                    <img
                      src={destination.image}
                      alt={destination.country}
                      className="w-16 h-16 rounded-lg object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="flex-1 grid grid-cols-5 gap-4 items-center">
                      <div>
                        <h4 className="text-white font-semibold">{destination.country}</h4>
                        <p className="text-white/40 text-sm">{destination.capital}</p>
                      </div>
                      <div className="text-white/80 text-sm">{destination.visaType}</div>
                      <div className="text-white/80 text-sm">{destination.processingTime}</div>
                      <div className="text-white font-semibold">{destination.fee}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-500"
                            style={{ 
                              width: `${destination.popularity}%`,
                              background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                            }}
                          />
                        </div>
                        <span className="text-white/40 text-xs w-12">{destination.popularity}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Recent Applications */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">
                  Recent{' '}
                  <span className="relative inline-block group" style={{ color: colors?.accent2 || '#008170' }}>
                    Applications
                    <span 
                      className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
                      style={{ 
                        background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                      }}
                    />
                  </span>
                </h2>
                <p className="text-white/60">Track your visa application status</p>
              </div>
              <a 
                href="#" 
                className="text-white/40 hover:text-white transition-all duration-300 text-sm flex items-center gap-1 transform hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg px-3 py-2"
              >
                View All <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              {recentApplications.map((application, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={application.image}
                      alt={application.applicant}
                      className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{application.applicant}</h4>
                      <p className="text-white/40 text-xs">{application.id}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Destination</span>
                      <span className="text-white">{application.country}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Visa Type</span>
                      <span className="text-white">{application.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Submitted</span>
                      <span className="text-white">{application.submitted}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span 
                      className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs transition-all duration-300 hover:scale-105 ${getStatusColor(application.status)}`}
                    >
                      {application.status === 'approved' && '✓'}
                      {application.status === 'processing' && '⟳'}
                      {application.status === 'documents-required' && '📄'}
                      {application.status === 'pending' && '⏱'}
                      <span className="capitalize">{application.status.replace('-', ' ')}</span>
                    </span>
                    {application.priority === 'urgent' && (
                      <span className="text-red-400 text-xs flex items-center gap-1 animate-pulse">
                        <span>⚠</span>
                        Urgent
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Trips */}
        <div className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Upcoming{' '}
              <span className="relative inline-block group" style={{ color: colors?.accent2 || '#008170' }}>
                Journeys
                <span 
                  className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
                  style={{ 
                    background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                  }}
                />
              </span>
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {upcomingTrips.map((trip, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={trip.image}
                      alt={trip.destination}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0" style={{ 
                      background: `linear-gradient(to top, ${colors?.primary || '#0F0F0F'}, transparent)`
                    }} />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-semibold">{trip.traveler}</h4>
                      <span 
                        className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs transition-all duration-300 hover:scale-105 ${getStatusColor(trip.status)}`}
                      >
                        {trip.status === 'confirmed' && '✓'}
                        {trip.status === 'pending' && '⏱'}
                        <span className="capitalize">{trip.status}</span>
                      </span>
                    </div>
                    
                    <p className="text-white text-lg font-bold mb-1">{trip.destination}</p>
                    
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1 text-white/60 transition-all duration-300 hover:text-white hover:translate-x-1">
                        <span>📅</span>
                        {trip.departure}
                      </div>
                      <div className="flex items-center gap-1 text-white/60 transition-all duration-300 hover:text-white hover:translate-x-1">
                        <span>⏱</span>
                        {trip.return}
                      </div>
                    </div>
                    
                    <p className="text-white/40 text-xs mt-2 transition-all duration-300 group-hover:text-white/60">Ref: {trip.bookingRef}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visa Requirements */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Visa{' '}
                <span className="relative inline-block group" style={{ color: colors?.accent2 || '#008170' }}>
                  Requirements
                  <span 
                    className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                    }}
                  />
                </span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Everything you need to know before applying
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {visaRequirements.map((visa, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg text-2xl transition-all duration-300 hover:scale-110 hover:rotate-6" style={{ background: `${colors?.accent2 || '#008170'}20` }}>
                      📄
                    </div>
                    <h3 className="text-2xl font-bold text-white">{visa.country}</h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Application Fee</span>
                      <span className="text-white font-semibold">{visa.fee}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Processing Time</span>
                      <span className="text-white">{visa.processing}</span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <h4 className="text-white font-semibold mb-4">Required Documents</h4>
                    <ul className="space-y-3">
                      {visa.documents.slice(0, 4).map((doc, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start gap-2 text-sm transition-all duration-300 hover:translate-x-1"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <span className="mt-0.5 flex-shrink-0 transition-transform duration-300 hover:scale-125" style={{ color: colors?.accent2 || '#008170' }}>✓</span>
                          <span className="text-white/60 hover:text-white/80">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className="w-full mt-6 px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-white text-sm font-semibold transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    Check Eligibility
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                What Our{' '}
                <span className="relative inline-block group" style={{ color: colors?.accent2 || '#008170' }}>
                  Travelers Say
                  <span 
                    className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                    }}
                  />
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10 relative transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group"
                >
                  <div className="absolute top-4 right-4">
                    <div className="flex gap-1 transition-all duration-300 hover:scale-110" style={{ color: colors?.accent2 || '#008170' }}>
                      {'★'.repeat(testimonial.rating)}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{ borderColor: colors?.accent2 || '#008170' }}
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-white/40 text-sm">{testimonial.role}</p>
                      <p className="text-white/30 text-xs mt-1">To: {testimonial.destination}</p>
                    </div>
                  </div>

                  <p className="text-white/70 italic transition-all duration-300 group-hover:text-white/90">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Travel"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0" style={{ 
                background: `linear-gradient(135deg, ${colors?.primary || '#0F0F0F'}cc, ${colors?.accent1 || '#005B41'}cc)`
              }} />

              <div className="relative py-20 px-8">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Ready to Start Your{' '}
                  <span className="relative inline-block group" style={{ color: colors?.accent2 || '#008170' }}>
                    Journey
                    <span 
                      className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
                      style={{ 
                        background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                      }}
                    />
                  </span>
                  ?
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Let us handle the paperwork while you focus on the experience
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`,
                      boxShadow: `0 10px 20px -5px ${colors?.accent2 || '#008170'}80`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 20px 25px -5px ${colors?.accent2 || '#008170'}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 10px 20px -5px ${colors?.accent2 || '#008170'}80`;
                    }}
                  >
                    <span className="relative z-10">Start Application</span>
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ background: 'white' }}
                    />
                  </button>
                  <button
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 active:bg-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transform hover:-translate-y-1 active:translate-y-0"
                  >
                    <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">💬</span>
                    Talk to Expert
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Destination Modal */}
        {selectedDestination && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn" 
              onClick={() => setSelectedDestination(null)} 
            />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-500 animate-slideUp">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{selectedDestination.country}</h3>
                  <button
                    onClick={() => setSelectedDestination(null)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    ✕
                  </button>
                </div>

                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.country}
                  className="w-full h-48 object-cover rounded-xl mb-6 transition-transform duration-500 hover:scale-105"
                />

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-white/40 text-sm mb-1">Capital</p>
                    <p className="text-white">{selectedDestination.capital}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-sm mb-1">Visa Type</p>
                    <p className="text-white">{selectedDestination.visaType}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-sm mb-1">Processing Time</p>
                    <p className="text-white">{selectedDestination.processingTime}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-sm mb-1">Fee</p>
                    <p className="text-white font-semibold">{selectedDestination.fee}</p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-white font-semibold mb-4">Required Documents</h4>
                  <ul className="space-y-2">
                    {selectedDestination.requirements.map((req, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-2 text-sm transition-all duration-300 hover:translate-x-2"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <span className="mt-0.5 flex-shrink-0 transition-transform duration-300 hover:scale-125" style={{ color: colors?.accent2 || '#008170' }}>✓</span>
                        <span className="text-white/60 hover:text-white/80">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    className="flex-1 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-white transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50"
                    onClick={() => setSelectedDestination(null)}
                  >
                    Close
                  </button>
                  <button
                    className="flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-white transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent relative overflow-hidden group"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`,
                    }}
                  >
                    <span className="relative z-10">Apply Now</span>
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ background: 'white' }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(10px, -10px) scale(1.05); }
          50% { transform: translate(-5px, 20px) scale(0.95); }
          75% { transform: translate(-15px, -5px) scale(1.02); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(50px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 15s infinite ease-in-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        /* Smooth scrolling for modal */
        .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: ${colors?.accent2 || '#008170'} rgba(255, 255, 255, 0.1);
        }
        
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: ${colors?.accent2 || '#008170'};
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: ${colors?.accent1 || '#005B41'};
        }
        
        /* Focus styles */
        *:focus {
          outline: none;
        }
        
        /* Button hover effects */
        button {
          position: relative;
          overflow: hidden;
        }
        
        button::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.3s, height 0.3s;
        }
        
        button:active::after {
          width: 200px;
          height: 200px;
        }
        
        /* Link hover effects */
        a {
          position: relative;
        }
        
        a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: ${colors?.accent2 || '#008170'};
          transition: width 0.3s;
        }
        
        a:hover::after {
          width: 100%;
        }
        
        /* Card hover effects */
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
        
        /* Transition delays */
        .transition-delay-100 {
          transition-delay: 100ms;
        }
        
        .transition-delay-200 {
          transition-delay: 200ms;
        }
        
        .transition-delay-300 {
          transition-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default VisaTravelManagementPage;






