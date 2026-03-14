import React from 'react';
import { Briefcase, ArrowRight, Heart, TrendingUp, Building2, ExternalLink } from 'lucide-react';

const CaseStudiesSection = () => {
  // Theme colors
  const colors = {
    primary: '#355C7D',
    secondary: '#6C5B7B',
    accent1: '#C06C84',
    accent2: '#F67280'
  };

  const caseStudies = [
    {
      title: 'Healthcare Analytics Platform',
      category: 'Healthcare',
      description: 'Developed an AI-powered analytics platform that reduced patient wait times by 40%.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      metrics: [
        { label: 'Wait Time Reduction', value: '40%' },
        { label: 'Patient Satisfaction', value: '+35%' },
        { label: 'Daily Records', value: '2M+' }
      ],
      accent: colors.accent2,
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: 'FinTech Mobile App',
      category: 'Finance',
      description: 'Created a secure mobile banking app with 500K+ active users.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      metrics: [
        { label: 'Active Users', value: '500K+' },
        { label: 'Transactions', value: '$2B+' },
        { label: 'App Rating', value: '4.8★' }
      ],
      accent: colors.accent1,
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'E-commerce Marketplace',
      category: 'Retail',
      description: 'Built a scalable marketplace connecting 1000+ vendors with customers.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      metrics: [
        { label: 'Vendors', value: '1000+' },
        { label: 'Monthly Sales', value: '$5M+' },
        { label: 'Products', value: '50K+' }
      ],
      accent: colors.primary,
      icon: <Building2 className="w-6 h-6" />
    }
  ];

  return (
    <section 
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent1} 100%)`
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
        style={{ background: colors.accent2, opacity: 0.15 }}
      ></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"
        style={{ background: colors.accent1, opacity: 0.15 }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/20">
              <Briefcase className="w-4 h-4" style={{ color: colors.accent2 }} />
              <span className="text-white">Case Studies</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              Success Stories
            </h2>
            <p className="text-white/80 text-lg">
              See how we've helped businesses achieve their goals.
            </p>
          </div>
          <a
            href="#all-case-studies"
            className="mt-4 lg:mt-0 inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all group"
            style={{ color: colors.accent2 }}
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border"
              style={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 opacity-60"
                  style={{ 
                    background: `linear-gradient(135deg, ${study.accent} 0%, transparent 100%)`
                  }}
                ></div>
                
                {/* Category Badge */}
                <div 
                  className="absolute top-4 left-4 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1 border"
                  style={{ 
                    background: `${study.accent}30`,
                    borderColor: `${study.accent}60`
                  }}
                >
                  <span style={{ color: study.accent }}>{study.icon}</span>
                  <span>{study.category}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 transition-colors">
                  {study.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {study.description}
                </p>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center p-2 rounded-lg" 
                         style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                      <div className="font-bold text-sm" style={{ color: study.accent }}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-white/60">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Read More Link */}
                <a
                  href="#read-more"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all group"
                  style={{ color: study.accent }}
                >
                  Read Case Study
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm mb-4">Want to see more success stories?</p>
          <a
            href="#all-case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl"
            style={{ 
              background: `linear-gradient(135deg, ${colors.accent2}, ${colors.accent1})`,
              color: 'white'
            }}
          >
            Browse All Case Studies
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default CaseStudiesSection;