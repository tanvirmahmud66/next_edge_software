
// RealEstateAccountingPage.jsx
import React, { useState } from 'react';
import {
  Building,
  Home,
  BarChart3,
  TrendingUp,
  DollarSign,
  Calendar,
  Users,
  FileText,
  Calculator,
  PieChart,
  Clock,
  MapPin,
  HardHat,
  ClipboardList,
  CheckCircle,
  XCircle,
  AlertCircle,
  ChevronRight,
  ArrowRight,
  Download,
  Upload,
  RefreshCw,
  Settings,
  Zap,
  Shield,
  Lock,
  Eye,
  Mail,
  Phone,
  MessageCircle,
  Briefcase,
  Layers,
  Grid,
  List,
  Plus,
  Minus,
  Percent,
  Award,
  Target,
  Globe,
  Smartphone,
  Laptop,
  Landmark,
  Key,
  Scale,
  Receipt,
  CreditCard,
  TrendingDown,
  Activity,
  Users as UsersIcon,
  FileSignature,
  FolderOpen,
  Database,
  Cloud,
  Server,
  Play,
  Pause,
  ExternalLink,
  Share2,
  Bookmark,
  Star,
  Heart
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const RealEstateAccountingPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedProject, setSelectedProject] = useState(null);
  const [timeframe, setTimeframe] = useState('month');

  // Use theme hook
  const { colors, loading, error, refreshTheme } = useTheme();

  const stats = [
    { value: '$2.8B', label: 'Projects Managed', icon: <Building className="w-6 h-6" /> },
    { value: '150+', label: 'Active Projects', icon: <HardHat className="w-6 h-6" /> },
    { value: '98.5%', label: 'Budget Accuracy', icon: <Target className="w-6 h-6" /> },
    { value: '24/7', label: 'Real-time Tracking', icon: <Clock className="w-6 h-6" /> }
  ];

  const features = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Project Cost Tracking',
      description: 'Real-time tracking of all project costs including materials, labor, equipment, and subcontractors.',
      capabilities: [
        'Budget vs actual analysis',
        'Cost commitment tracking',
        'Change order management',
        'Vendor payment tracking'
      ],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Portfolio Management',
      description: 'Comprehensive oversight of your entire real estate portfolio with consolidated reporting.',
      capabilities: [
        'Multi-project dashboards',
        'Portfolio performance metrics',
        'Risk assessment tools',
        'Asset valuation tracking'
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Financial Reporting',
      description: 'Automated financial reports customized for real estate and construction accounting standards.',
      capabilities: [
        'GAAP-compliant reports',
        'Job cost reports',
        'Cash flow forecasting',
        'Investor reporting'
      ],
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const projectTypes = [
    {
      type: 'Residential Development',
      icon: <Home className="w-6 h-6" />,
      count: '45+',
      value: '$850M',
      color: colors?.accent2 || '#008170'
    },
    {
      type: 'Commercial Real Estate',
      icon: <Building className="w-6 h-6" />,
      count: '32+',
      value: '$1.2B',
      color: colors?.accent1 || '#005B41'
    },
    {
      type: 'Mixed-Use Projects',
      icon: <Layers className="w-6 h-6" />,
      count: '28+',
      value: '$950M',
      color: colors?.accent2 || '#008170'
    },
    {
      type: 'Infrastructure',
      icon: <HardHat className="w-6 h-6" />,
      count: '15+',
      value: '$680M',
      color: colors?.accent1 || '#005B41'
    }
  ];

  const activeProjects = [
    {
      name: 'Harbor View Towers',
      location: 'Miami, FL',
      type: 'Luxury Residential',
      budget: 125000000,
      spent: 87200000,
      progress: 68,
      status: 'on-track',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      timeline: '2024-2026'
    },
    {
      name: 'Tech Park Plaza',
      location: 'Austin, TX',
      type: 'Commercial Office',
      budget: 85000000,
      spent: 42500000,
      progress: 45,
      status: 'at-risk',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      timeline: '2024-2025'
    },
    {
      name: 'Riverside Mixed-Use',
      location: 'Denver, CO',
      type: 'Mixed-Use',
      budget: 210000000,
      spent: 147000000,
      progress: 72,
      status: 'on-track',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      timeline: '2023-2025'
    },
    {
      name: 'Metro Station Renovation',
      location: 'Chicago, IL',
      type: 'Infrastructure',
      budget: 45000000,
      spent: 38200000,
      progress: 88,
      status: 'delayed',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      timeline: '2023-2024'
    }
  ];

  const financialMetrics = [
    {
      title: 'Revenue Recognition',
      value: '$124.5M',
      change: '+12.3%',
      icon: <TrendingUp className="w-5 h-5" />,
      details: ['YTD Revenue: $98.2M', 'Projected: $156M']
    },
    {
      title: 'Operating Expenses',
      value: '$42.8M',
      change: '-3.2%',
      icon: <TrendingDown className="w-5 h-5" />,
      details: ['YoY Savings: $1.4M', 'Efficiency: +8%']
    },
    {
      title: 'Gross Profit Margin',
      value: '28.4%',
      change: '+2.1%',
      icon: <Percent className="w-5 h-5" />,
      details: ['Target: 30%', 'Industry Avg: 24%']
    },
    {
      title: 'Cash Flow',
      value: '$18.3M',
      change: '+5.7%',
      icon: <DollarSign className="w-5 h-5" />,
      details: ['Operating: $12.1M', 'Investing: $6.2M']
    }
  ];

  const costBreakdown = [
    { category: 'Materials', amount: 18400000, percentage: 32, color: colors?.accent2 || '#008170' },
    { category: 'Labor', amount: 15600000, percentage: 27, color: colors?.accent1 || '#005B41' },
    { category: 'Equipment', amount: 9200000, percentage: 16, color: '#4A5568' },
    { category: 'Subcontractors', amount: 11500000, percentage: 20, color: '#718096' },
    { category: 'Permits & Fees', amount: 2900000, percentage: 5, color: '#A0AEC0' }
  ];

  const recentTransactions = [
    { 
      date: '2024-02-23', 
      description: 'Concrete Supply - Phase 2', 
      project: 'Harbor View Towers',
      amount: 245000, 
      type: 'expense',
      status: 'completed',
      vendor: 'Premier Concrete'
    },
    { 
      date: '2024-02-22', 
      description: 'Investor Draw - Q1', 
      project: 'Tech Park Plaza',
      amount: 1850000, 
      type: 'revenue',
      status: 'pending',
      vendor: 'Investment Group'
    },
    { 
      date: '2024-02-21', 
      description: 'Structural Steel', 
      project: 'Riverside Mixed-Use',
      amount: 892000, 
      type: 'expense',
      status: 'completed',
      vendor: 'SteelTech Industries'
    },
    { 
      date: '2024-02-20', 
      description: 'Equipment Rental - Cranes', 
      project: 'Metro Station',
      amount: 156000, 
      type: 'expense',
      status: 'processing',
      vendor: 'HeavyLift Rentals'
    }
  ];

  const complianceItems = [
    { name: 'GAAP Compliance', status: 'verified', icon: <CheckCircle className="w-5 h-5" /> },
    { name: 'ASC 606 Revenue', status: 'compliant', icon: <Shield className="w-5 h-5" /> },
    { name: 'Tax Filings', status: 'current', icon: <FileText className="w-5 h-5" /> },
    { name: 'Audit Trail', status: 'complete', icon: <Database className="w-5 h-5" /> }
  ];

  const teamMembers = [
    {
      name: 'Robert Chen',
      role: 'Project Controller',
      projects: 8,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Sarah Williams',
      role: 'Cost Engineer',
      projects: 6,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Michael Torres',
      role: 'Financial Analyst',
      projects: 12,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'on-track': return colors?.accent2 || '#008170';
      case 'at-risk': return '#FBBF24';
      case 'delayed': return '#EF4444';
      default: return colors?.accent2 || '#008170';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'on-track': return <CheckCircle className="w-4 h-4" />;
      case 'at-risk': return <AlertCircle className="w-4 h-4" />;
      case 'delayed': return <XCircle className="w-4 h-4" />;
      default: return <CheckCircle className="w-4 h-4" />;
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
    <div className="relative min-h-screen overflow-hidden">
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

      {/* Background Gradient */}
      <div 
        className="fixed inset-0"
        style={{ 
          background: `linear-gradient(135deg, ${colors?.primary || '#0F0F0F'} 0%, ${colors?.secondary || '#232D3F'} 50%, ${colors?.accent1 || '#005B41'} 100%)`
        }}
      />

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
      <div className="fixed inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="fixed top-40 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-float"
        style={{ background: colors?.accent2 || '#008170', opacity: 0.1 }}
      />
      <div className="fixed bottom-40 right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000"
        style={{ background: colors?.accent1 || '#005B41', opacity: 0.1 }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative min-h-[90vh] flex items-center">
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
                  <Building className="w-4 h-4" style={{ color: colors?.accent2 || '#008170' }} />
                  <span>Real Estate & Project Accounting</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Financial Clarity for{' '}
                  <span className="relative inline-block group" style={{ color: colors?.accent2 || '#008170' }}>
                    Real Estate
                    <span 
                      className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
                      style={{ 
                        background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                      }}
                    />
                  </span>
                  <br />Development Projects
                </h1>
                
                <p className="text-xl text-white/70 mb-8 max-w-lg">
                  Comprehensive accounting and financial management solutions 
                  for real estate developers, contractors, and property investors.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-12">
                  <a
                    href="#demo"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`,
                      color: 'white'
                    }}
                  >
                    <span className="relative z-10">Schedule Consultation</span>
                    <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ background: 'white' }}
                    />
                  </a>
                  <button
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-200 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:-translate-y-1"
                    style={{ color: 'white' }}
                  >
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Watch Overview
                  </button>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-2xl font-bold text-white group-hover:scale-105 transition-transform">{stat.value}</div>
                      <div className="text-white/40 text-sm flex items-center justify-center gap-1 group-hover:text-white/60 transition-colors">
                        <span className="group-hover:scale-110 transition-transform" style={{ color: colors?.accent2 || '#008170' }}>
                          {stat.icon}
                        </span>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Dashboard Preview */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Financial Dashboard"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0" style={{ 
                    background: `linear-gradient(135deg, ${colors?.accent2 || '#008170'}40, transparent, ${colors?.accent1 || '#005B41'}40)`
                  }} />
                </div>

                {/* Floating Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group">
                      <DollarSign className="w-5 h-5 group-hover:scale-110 transition-transform" style={{ color: colors?.accent2 || '#008170' }} />
                    </div>
                    <div>
                      <div className="text-white/60 text-xs">Total Portfolio</div>
                      <div className="text-xl font-bold text-white">$2.8B</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group">
                      <Activity className="w-5 h-5 group-hover:scale-110 transition-transform" style={{ color: colors?.accent1 || '#005B41' }} />
                    </div>
                    <div>
                      <div className="text-white/60 text-xs">Active Projects</div>
                      <div className="text-xl font-bold text-white">150+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Types Overview */}
        <div className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {projectTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" style={{ background: `${type.color}20` }}>
                      <div style={{ color: type.color }}>{type.icon}</div>
                    </div>
                    <div>
                      <div className="text-white/60 text-xs">Projects</div>
                      <div className="text-white font-semibold">{type.count}</div>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-1">{type.type}</h3>
                  <div className="text-2xl font-bold text-white group-hover:scale-105 transition-transform">{type.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive{' '}
                <span style={{ color: colors?.accent2 || '#008170' }}>Financial Control</span>
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Everything you need to manage complex real estate finances
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="absolute inset-0">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0" style={{ 
                      background: `linear-gradient(to top, ${colors?.primary || '#0F0F0F'}, transparent)`
                    }} />
                  </div>
                  
                  <div className="relative p-8 h-full flex flex-col justify-end min-h-[400px]">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                      style={{ background: `${colors?.accent2 || '#008170'}40`, backdropFilter: 'blur(8px)' }}
                    >
                      <div style={{ color: colors?.accent2 || '#008170' }}>
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{feature.description}</p>
                    
                    <ul className="space-y-2">
                      {feature.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-white/60 text-xs group-hover:text-white/70 transition-colors">
                          <CheckCircle className="w-3 h-3 transition-transform group-hover:scale-110" style={{ color: colors?.accent2 || '#008170' }} />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Financial Dashboard Preview */}
        <div className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Real-Time{' '}
                <span style={{ color: colors?.accent2 || '#008170' }}>Financial Intelligence</span>
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Monitor project finances with live dashboards and alerts
              </p>
            </div>

            {/* Financial Metrics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {financialMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" style={{ background: `${colors?.accent2 || '#008170'}20` }}>
                      <div style={{ color: colors?.accent2 || '#008170' }}>{metric.icon}</div>
                    </div>
                    <span className={`text-sm ${
                      metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 group-hover:scale-105 transition-transform">{metric.value}</div>
                  <div className="text-white/40 text-sm mb-3">{metric.title}</div>
                  <div className="space-y-1">
                    {metric.details.map((detail, idx) => (
                      <div key={idx} className="text-white/30 text-xs group-hover:text-white/40 transition-colors">{detail}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Active Projects Table */}
            <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Active Projects</h3>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group">
                      <Grid className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                    </button>
                    <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group">
                      <List className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-white/10">
                {activeProjects.map((project, index) => (
                  <div
                    key={index}
                    className="p-6 hover:bg-white/5 transition-colors cursor-pointer group"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      
                      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-4">
                        <div>
                          <h4 className="text-white font-semibold group-hover:text-white transition-colors">{project.name}</h4>
                          <p className="text-white/40 text-sm flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3 group-hover:scale-110 transition-transform" style={{ color: colors?.accent2 || '#008170' }} />
                            {project.location}
                          </p>
                          <p className="text-white/30 text-xs mt-1">{project.type}</p>
                        </div>
                        
                        <div>
                          <div className="text-white/40 text-xs mb-1">Budget</div>
                          <div className="text-white font-semibold">
                            ${(project.budget / 1000000).toFixed(1)}M
                          </div>
                          <div className="text-white/30 text-xs">Spent: ${(project.spent / 1000000).toFixed(1)}M</div>
                        </div>
                        
                        <div>
                          <div className="text-white/40 text-xs mb-1">Progress</div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                              <div 
                                className="h-full rounded-full transition-all duration-500 group-hover:scale-x-105"
                                style={{ 
                                  width: `${project.progress}%`,
                                  background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                                }}
                              />
                            </div>
                            <span className="text-white text-sm">{project.progress}%</span>
                          </div>
                          <div className="text-white/30 text-xs mt-1">{project.timeline}</div>
                        </div>
                        
                        <div className="flex items-center justify-end gap-4">
                          <div 
                            className="flex items-center gap-1 px-3 py-1 rounded-full text-xs transition-transform group-hover:scale-105"
                            style={{ 
                              background: `${getStatusColor(project.status)}20`,
                              color: getStatusColor(project.status)
                            }}
                          >
                            {getStatusIcon(project.status)}
                            <span className="capitalize">{project.status}</span>
                          </div>
                          <ChevronRight className="w-5 h-5 text-white/30 group-hover:translate-x-1 group-hover:text-white/50 transition-all" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cost Analysis Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Cost Breakdown */}
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Cost Breakdown</h3>
                
                <div className="space-y-4">
                  {costBreakdown.map((item, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-white/70 group-hover:text-white/80 transition-colors">{item.category}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-white font-semibold group-hover:scale-105 transition-transform">
                            ${(item.amount / 1000000).toFixed(1)}M
                          </span>
                          <span className="text-white/40 w-12 text-right group-hover:text-white/50 transition-colors">{item.percentage}%</span>
                        </div>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-500 group-hover:scale-x-105"
                          style={{ 
                            width: `${item.percentage}%`,
                            background: `linear-gradient(to right, ${item.color}, ${colors?.accent2 || '#008170'})`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Total Direct Costs</span>
                    <span className="text-2xl font-bold text-white group-hover:scale-105 transition-transform">
                      ${(costBreakdown.reduce((acc, item) => acc + item.amount, 0) / 1000000).toFixed(1)}M
                    </span>
                  </div>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Recent Transactions</h3>
                  <button className="text-sm text-white/40 hover:text-white transition-colors group">
                    View All
                    <ChevronRight className="w-4 h-4 inline ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="space-y-4">
                  {recentTransactions.map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg transition-transform group-hover:scale-110 ${
                          transaction.type === 'revenue' ? 'bg-green-500/20' : 'bg-red-500/20'
                        }`}>
                          {transaction.type === 'revenue' ? (
                            <TrendingUp className="w-4 h-4 text-green-400" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-red-400" />
                          )}
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">{transaction.description}</p>
                          <p className="text-white/30 text-xs">{transaction.project}</p>
                          <p className="text-white/20 text-xs">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm font-semibold ${
                          transaction.type === 'revenue' ? 'text-green-400' : 'text-white'
                        }`}>
                          {transaction.type === 'revenue' ? '+' : '-'}${(transaction.amount / 1000).toFixed(0)}k
                        </p>
                        <p className={`text-xs ${
                          transaction.status === 'completed' ? 'text-green-400/60' :
                          transaction.status === 'pending' ? 'text-yellow-400/60' :
                          'text-blue-400/60'
                        }`}>
                          {transaction.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance & Team Section */}
        <div className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Compliance Status */}
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-6">Compliance Status</h3>
                <div className="space-y-4">
                  {complianceItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between group">
                      <div className="flex items-center gap-2">
                        <div className="transition-transform group-hover:scale-110" style={{ color: colors?.accent2 || '#008170' }}>
                          {item.icon}
                        </div>
                        <span className="text-white/70 group-hover:text-white/80 transition-colors">{item.name}</span>
                      </div>
                      <span className="text-green-400 text-sm capitalize group-hover:scale-105 transition-transform">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Members */}
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10 lg:col-span-2 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-6">Project Accounting Team</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="text-center group">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 transition-transform group-hover:scale-110"
                        style={{ borderColor: colors?.accent2 || '#008170' }}
                      />
                      <h4 className="text-white font-semibold group-hover:text-white transition-colors">{member.name}</h4>
                      <p className="text-white/40 text-sm group-hover:text-white/50 transition-colors">{member.role}</p>
                      <p className="text-white/30 text-xs mt-1">{member.projects} projects</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative rounded-3xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Real Estate Development"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ 
                background: `linear-gradient(135deg, ${colors?.primary || '#0F0F0F'}cc, ${colors?.accent1 || '#005B41'}cc)`
              }} />

              <div className="relative py-20 px-8">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Ready to Optimize Your{' '}
                  <span style={{ color: colors?.accent2 || '#008170' }}>Project Finances</span>?
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Join 150+ real estate developers who trust us with their financial management
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#consultation"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`,
                      color: 'white'
                    }}
                  >
                    <span className="relative z-10">Schedule Demo</span>
                    <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ background: 'white' }}
                    />
                  </a>
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-200 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:-translate-y-1"
                    style={{ color: 'white' }}
                  >
                    Contact Sales
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto transform scale-0 animate-modalIn">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{selectedProject.name}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group"
                  >
                    <XCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </button>
                </div>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-white/40 text-sm mb-1">Location</p>
                    <p className="text-white flex items-center gap-1">
                      <MapPin className="w-4 h-4" style={{ color: colors?.accent2 || '#008170' }} />
                      {selectedProject.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-white/40 text-sm mb-1">Project Type</p>
                    <p className="text-white">{selectedProject.type}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-sm mb-1">Total Budget</p>
                    <p className="text-2xl font-bold text-white">
                      ${(selectedProject.budget / 1000000).toFixed(1)}M
                    </p>
                  </div>
                  <div>
                    <p className="text-white/40 text-sm mb-1">Spent to Date</p>
                    <p className="text-2xl font-bold text-white">
                      ${(selectedProject.spent / 1000000).toFixed(1)}M
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4 mb-6">
                  <p className="text-white/40 text-sm mb-2">Progress</p>
                  <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        width: `${selectedProject.progress}%`,
                        background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                      }}
                    />
                  </div>
                  <p className="text-right text-white text-sm mt-1">{selectedProject.progress}% Complete</p>
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                  >
                    Close
                  </button>
                  <button
                    className="px-6 py-3 rounded-lg font-semibold transition-all duration-200 relative overflow-hidden group"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`,
                      color: 'white'
                    }}
                  >
                    <span className="relative z-10">View Full Report</span>
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
        @keyframes modalIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-float {
          animation: float 15s infinite ease-in-out;
        }
        .animate-modalIn {
          animation: modalIn 0.3s ease-out forwards;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default RealEstateAccountingPage;