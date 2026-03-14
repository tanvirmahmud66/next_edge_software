
// ClinicDiagnosticCenter.jsx
import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';

const ClinicDiagnosticCenter = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredCard, setHoveredCard] = useState(null);

  // Use theme hook
  const { colors, loading, error, refreshTheme } = useTheme();

  const stats = [
    { value: '15K+', label: 'Happy Patients', icon: '👥' },
    { value: '50+', label: 'Expert Doctors', icon: '👨‍⚕️' },
    { value: '24/7', label: 'Emergency Care', icon: '🚑' },
    { value: '98%', label: 'Satisfaction', icon: '⭐' }
  ];

  const departments = [
    {
      id: 1,
      name: 'Cardiology',
      icon: '❤️',
      description: 'Expert heart care with advanced diagnostic technology',
      doctors: 12,
      patients: '2.5K+',
      image: 'https://placehold.co/800x600/005B41/FFFFFF?text=Cardiology',
      services: ['Echocardiogram', 'Stress Test', 'ECG', 'Angiography'],
      headDoctor: 'Dr. Sarah Johnson'
    },
    {
      id: 2,
      name: 'Neurology',
      icon: '🧠',
      description: 'Comprehensive neurological care and brain health',
      doctors: 8,
      patients: '1.8K+',
      image: 'https://placehold.co/800x600/232D3F/FFFFFF?text=Neurology',
      services: ['EEG', 'EMG', 'Brain Mapping', 'Neurological Exams'],
      headDoctor: 'Dr. Michael Chen'
    },
    {
      id: 3,
      name: 'Orthopedics',
      icon: '🦴',
      description: 'Advanced bone and joint care with modern techniques',
      doctors: 10,
      patients: '2.1K+',
      image: 'https://placehold.co/800x600/008170/FFFFFF?text=Orthopedics',
      services: ['X-Ray', 'MRI', 'Joint Replacement', 'Sports Medicine'],
      headDoctor: 'Dr. James Wilson'
    },
    {
      id: 4,
      name: 'Pediatrics',
      icon: '👶',
      description: 'Specialized care for infants, children, and adolescents',
      doctors: 15,
      patients: '3.2K+',
      image: 'https://placehold.co/800x600/005B41/FFFFFF?text=Pediatrics',
      services: ['Well-child visits', 'Vaccinations', 'Developmental screening'],
      headDoctor: 'Dr. Emily Brown'
    },
    {
      id: 5,
      name: 'Radiology',
      icon: '🩻',
      description: 'State-of-the-art imaging and diagnostic services',
      doctors: 6,
      patients: '4K+',
      image: 'https://placehold.co/800x600/232D3F/FFFFFF?text=Radiology',
      services: ['X-Ray', 'MRI', 'CT Scan', 'Ultrasound', 'Mammography'],
      headDoctor: 'Dr. Robert Taylor'
    },
    {
      id: 6,
      name: 'Pathology',
      icon: '🔬',
      description: 'Accurate laboratory testing and diagnostic services',
      doctors: 5,
      patients: '5K+',
      image: 'https://placehold.co/800x600/008170/FFFFFF?text=Pathology',
      services: ['Blood Tests', 'Biopsy', 'Urinalysis', 'Microbiology'],
      headDoctor: 'Dr. Lisa Anderson'
    }
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      experience: '15 years',
      patients: '3.5K+',
      rating: 4.9,
      image: 'https://placehold.co/400x400/005B41/FFFFFF?text=Dr.Sarah',
      availability: 'Mon-Fri',
      education: 'Harvard Medical School',
      languages: ['English', 'Spanish'],
      nextAvailable: 'Today 2:30 PM'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      experience: '12 years',
      patients: '2.8K+',
      rating: 4.8,
      image: 'https://placehold.co/400x400/232D3F/FFFFFF?text=Dr.Michael',
      availability: 'Mon-Thu',
      education: 'Johns Hopkins University',
      languages: ['English', 'Mandarin'],
      nextAvailable: 'Tomorrow 10:00 AM'
    },
    {
      id: 3,
      name: 'Dr. Emily Brown',
      specialty: 'Pediatrics',
      experience: '10 years',
      patients: '2.2K+',
      rating: 4.9,
      image: 'https://placehold.co/400x400/008170/FFFFFF?text=Dr.Emily',
      availability: 'Mon-Fri',
      education: 'Stanford University',
      languages: ['English', 'French'],
      nextAvailable: 'Today 4:15 PM'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Orthopedics',
      experience: '18 years',
      patients: '4.1K+',
      rating: 4.7,
      image: 'https://placehold.co/400x400/005B41/FFFFFF?text=Dr.James',
      availability: 'Tue-Sat',
      education: 'Mayo Clinic',
      languages: ['English', 'German'],
      nextAvailable: 'Tomorrow 9:30 AM'
    }
  ];

  const diagnosticServices = [
    {
      name: 'Blood Tests',
      icon: '🩸',
      price: '$25',
      duration: '15 mins',
      preparation: 'Fasting required (8-12 hours)',
      description: 'Complete blood count, lipid profile, blood glucose, and more',
      availability: 'Daily 7AM - 7PM'
    },
    {
      name: 'MRI Scan',
      icon: '🧲',
      price: '$450',
      duration: '45 mins',
      preparation: 'Remove metal objects, inform about implants',
      description: 'High-resolution imaging for detailed organ and tissue visualization',
      availability: 'Mon-Sat 8AM - 6PM'
    },
    {
      name: 'CT Scan',
      icon: '🔄',
      price: '$350',
      duration: '30 mins',
      preparation: 'May require contrast dye, fasting for 4 hours',
      description: 'Cross-sectional imaging for accurate diagnosis',
      availability: 'Mon-Fri 9AM - 5PM'
    },
    {
      name: 'Ultrasound',
      icon: '📡',
      price: '$150',
      duration: '20 mins',
      preparation: 'Full bladder required for pelvic scans',
      description: 'Safe, radiation-free imaging for soft tissues',
      availability: 'Daily 8AM - 8PM'
    },
    {
      name: 'ECG/EKG',
      icon: '📈',
      price: '$75',
      duration: '10 mins',
      preparation: 'No special preparation needed',
      description: 'Records electrical signals of the heart',
      availability: '24/7 Emergency'
    },
    {
      name: 'X-Ray',
      icon: '🩻',
      price: '$95',
      duration: '15 mins',
      preparation: 'Remove jewelry, inform about pregnancy',
      description: 'Quick imaging for bone and chest examination',
      availability: 'Daily 7AM - 9PM'
    }
  ];

  const appointments = [
    {
      id: 'APT-2024-001',
      patient: 'John Smith',
      doctor: 'Dr. Sarah Johnson',
      department: 'Cardiology',
      date: '2024-03-15',
      time: '10:30 AM',
      status: 'confirmed',
      type: 'Check-up'
    },
    {
      id: 'APT-2024-002',
      patient: 'Emma Watson',
      doctor: 'Dr. Michael Chen',
      department: 'Neurology',
      date: '2024-03-15',
      time: '2:00 PM',
      status: 'pending',
      type: 'Consultation'
    },
    {
      id: 'APT-2024-003',
      patient: 'Robert Johnson',
      doctor: 'Dr. Emily Brown',
      department: 'Pediatrics',
      date: '2024-03-16',
      time: '9:15 AM',
      status: 'confirmed',
      type: 'Follow-up'
    },
    {
      id: 'APT-2024-004',
      patient: 'Maria Garcia',
      doctor: 'Dr. James Wilson',
      department: 'Orthopedics',
      date: '2024-03-16',
      time: '11:45 AM',
      status: 'completed',
      type: 'Surgery Consult'
    }
  ];

  const healthPackages = [
    {
      name: 'Basic Health Check',
      price: '$199',
      tests: ['Complete Blood Count', 'Urinalysis', 'Blood Glucose', 'Lipid Profile'],
      duration: '2 hours',
      popular: false
    },
    {
      name: 'Comprehensive Wellness',
      price: '$499',
      tests: ['All Basic tests', 'Thyroid Panel', 'Liver Function', 'Kidney Function', 'Vitamin D', 'ECG'],
      duration: '4 hours',
      popular: true
    },
    {
      name: 'Executive Health Plan',
      price: '$899',
      tests: ['All Wellness tests', 'Stress Test', 'Echocardiogram', 'Chest X-Ray', 'Abdominal Ultrasound'],
      duration: '6 hours',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Robert Chen',
      role: 'Patient',
      content: 'The cardiology department saved my life. Dr. Johnson is incredibly knowledgeable and caring.',
      rating: 5,
      image: 'https://placehold.co/400x400/005B41/FFFFFF?text=R.Chen'
    },
    {
      name: 'Amara Patel',
      role: 'Parent',
      content: 'Best pediatric care for my daughter. The staff is wonderful with children.',
      rating: 5,
      image: 'https://placehold.co/400x400/232D3F/FFFFFF?text=A.Patel'
    },
    {
      name: 'David Kim',
      role: 'Patient',
      content: 'Quick and accurate diagnostic services. Got my MRI results within 24 hours.',
      rating: 5,
      image: 'https://placehold.co/400x400/008170/FFFFFF?text=D.Kim'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'confirmed': return 'text-emerald-500 bg-emerald-500/20';
      case 'pending': return 'text-yellow-500 bg-yellow-500/20';
      case 'completed': return 'text-blue-500 bg-blue-500/20';
      case 'cancelled': return 'text-red-500 bg-red-500/20';
      default: return 'text-gray-500 bg-gray-500/20';
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
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
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
                  <span style={{ color: colors?.accent2 || '#008170' }}>⚕️</span>
                  <span>Clinic & Diagnostic Center</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Your Health,{' '}
                  <span className="relative inline-block group" style={{ color: colors?.accent2 || '#008170' }}>
                    Our Priority
                    <span 
                      className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
                      style={{ 
                        background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                      }}
                    />
                  </span>
                  <br />Advanced Care, Better Life
                </h1>
                
                <p className="text-xl text-white/70 mb-8 max-w-lg">
                  Experience world-class healthcare with our team of expert doctors, 
                  state-of-the-art diagnostic equipment, and compassionate care.
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
                    <span className="relative z-10">Book Appointment</span>
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ background: 'white' }}
                    />
                  </button>
                  <button
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 active:bg-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transform hover:-translate-y-1"
                  >
                    <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">🚑</span>
                    Emergency Care
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

              {/* Right Content - Interactive Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105 group">
                  <img
                    src="https://placehold.co/1200x800/232D3F/FFFFFF?text=Medical+Team"
                    alt="Medical Team"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" style={{ 
                    background: `linear-gradient(135deg, ${colors?.accent2 || '#008170'}40, transparent, ${colors?.accent1 || '#005B41'}40)`
                  }} />

                  {/* Floating Cards */}
                  <div className="absolute top-4 left-4 animate-pulse">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20">
                      <span className="text-2xl">👨‍⚕️</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 animate-pulse animation-delay-1000">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20">
                      <span className="text-2xl">🏥</span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-3xl animate-pulse">
                      ⭐
                    </div>
                    <div>
                      <div className="text-white/60 text-xs">Patient Rating</div>
                      <div className="text-2xl font-bold text-white">4.9/5</div>
                      <div className="text-white/40 text-xs">Based on 5K+ reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Book Appointment', 'View Reports', 'Find a Doctor', 'Emergency'].map((action, index) => (
                <button
                  key={index}
                  className="group flex items-center justify-center gap-2 px-6 py-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="text-white/80 group-hover:text-white transition-colors">{action}</span>
                  <span className="text-white/40 group-hover:text-white/60 transition-colors group-hover:translate-x-1 transition-transform">→</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Departments Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Medical{' '}
                <span className="relative inline-block group" style={{ color: colors?.accent2 || '#008170' }}>
                  Departments
                  <span 
                    className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                    }}
                  />
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Comprehensive healthcare services under one roof
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <div
                  key={dept.id}
                  className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                  onMouseEnter={() => setHoveredCard(dept.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setSelectedDepartment(dept)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0" style={{ 
                      background: `linear-gradient(to top, ${colors?.primary || '#0F0F0F'}, transparent)`
                    }} />
                    <div className="absolute top-4 left-4">
                      <span className="text-4xl transition-transform group-hover:scale-110 group-hover:rotate-6">{dept.icon}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{dept.name}</h3>
                    <p className="text-white/70 text-sm mb-4">{dept.description}</p>
                    
                    <div className="flex items-center justify-between text-sm mb-4">
                      <div className="flex items-center gap-1 text-white/60 group-hover:text-white/70 transition-colors">
                        <span className="transition-transform group-hover:scale-110">👨‍⚕️</span>
                        {dept.doctors} Doctors
                      </div>
                      <div className="flex items-center gap-1 text-white/60 group-hover:text-white/70 transition-colors">
                        <span className="transition-transform group-hover:scale-110">👥</span>
                        {dept.patients} Patients
                      </div>
                    </div>

                    <div className="space-y-2">
                      {dept.services.slice(0, 3).map((service, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-2 text-white/60 text-xs transition-all duration-300 hover:translate-x-1 group-hover:text-white/70"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <span className="transition-transform group-hover:scale-125" style={{ color: colors?.accent2 || '#008170' }}>✓</span>
                          {service}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-white/40 text-xs group-hover:text-white/50 transition-colors">
                        Head: <span className="text-white/80 group-hover:text-white/90 transition-colors">{dept.headDoctor}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Doctors */}
        <div className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">
                  Meet Our{' '}
                  <span className="relative inline-block group" style={{ color: colors?.accent2 || '#008170' }}>
                    Expert Doctors
                    <span 
                      className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
                      style={{ 
                        background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                      }}
                    />
                  </span>
                </h2>
                <p className="text-white/60">Leading specialists in their fields</p>
              </div>
              <button className="text-white/40 hover:text-white transition-all duration-300 text-sm flex items-center gap-1 group">
                View All <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer group"
                  onClick={() => setSelectedDoctor(doctor)}
                >
                  <div className="relative mb-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{ borderColor: colors?.accent2 || '#008170' }}
                    />
                    <div className="absolute -top-2 -right-2 bg-yellow-500/20 backdrop-blur-sm text-yellow-400 px-2 py-1 rounded-full text-xs flex items-center gap-1 transition-transform group-hover:scale-110">
                      <span>⭐</span>
                      {doctor.rating}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white text-center mb-1 group-hover:text-white transition-colors">{doctor.name}</h3>
                  <p className="text-white/60 text-sm text-center mb-3 group-hover:text-white/70 transition-colors">{doctor.specialty}</p>

                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-white/40 group-hover:text-white/50 transition-colors">Experience</span>
                      <span className="text-white group-hover:text-white transition-colors">{doctor.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40 group-hover:text-white/50 transition-colors">Patients</span>
                      <span className="text-white group-hover:text-white transition-colors">{doctor.patients}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40 group-hover:text-white/50 transition-colors">Next Available</span>
                      <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">{doctor.nextAvailable}</span>
                    </div>
                  </div>

                  <button
                    className="w-full px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-white text-sm font-semibold transform hover:scale-105 active:scale-95 relative overflow-hidden group/btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle book appointment
                    }}
                  >
                    <span className="relative z-10">Book Appointment</span>
                    <div 
                      className="absolute inset-0 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"
                      style={{ background: 'white' }}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diagnostic Services */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Diagnostic{' '}
                <span className="relative inline-block group" style={{ color: colors?.accent2 || '#008170' }}>
                  Services
                  <span 
                    className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                    }}
                  />
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Accurate diagnostics with cutting-edge technology
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {diagnosticServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">{service.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">{service.name}</h3>
                      <p className="text-white/40 text-sm group-hover:text-white/50 transition-colors">{service.duration}</p>
                    </div>
                  </div>

                  <p className="text-white/60 text-sm mb-4 group-hover:text-white/70 transition-colors">{service.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40 group-hover:text-white/50 transition-colors">Price</span>
                      <span className="text-white font-semibold group-hover:text-white transition-colors">{service.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40 group-hover:text-white/50 transition-colors">Preparation</span>
                      <span className="text-white/80 text-xs text-right group-hover:text-white/90 transition-colors">{service.preparation}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40 group-hover:text-white/50 transition-colors">Availability</span>
                      <span className="text-emerald-400 text-xs group-hover:text-emerald-300 transition-colors">{service.availability}</span>
                    </div>
                  </div>

                  <button
                    className="w-full px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 text-white text-sm group-hover:border-white/20"
                  >
                    Book Test
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Health Packages */}
        <div className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Health{' '}
                <span className="relative inline-block group" style={{ color: colors?.accent2 || '#008170' }}>
                  Packages
                  <span 
                    className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                    }}
                  />
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Comprehensive health checkup packages for every need
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {healthPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-xl rounded-xl p-8 border transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                    pkg.popular ? 'border-2' : 'border-white/10'
                  }`}
                  style={pkg.popular ? { borderColor: colors?.accent2 || '#008170' } : {}}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="px-4 py-1 rounded-full text-sm font-semibold text-white animate-pulse"
                        style={{ background: `linear-gradient(135deg, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})` }}
                      >
                        Most Popular
                      </div>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold mb-6" style={{ color: colors?.accent2 || '#008170' }}>{pkg.price}</p>
                  
                  <p className="text-white/40 text-sm mb-4">Duration: {pkg.duration}</p>

                  <ul className="space-y-3 mb-6">
                    {pkg.tests.map((test, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm group/item">
                        <span className="transition-transform group-hover/item:scale-125" style={{ color: colors?.accent2 || '#008170' }}>✓</span>
                        <span className="text-white/60 group-hover/item:text-white/70 transition-colors">{test}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group/btn"
                    style={{ 
                      background: pkg.popular 
                        ? `linear-gradient(135deg, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                        : 'rgba(255, 255, 255, 0.1)',
                      color: 'white'
                    }}
                  >
                    <span className="relative z-10">Book Now</span>
                    <div 
                      className="absolute inset-0 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"
                      style={{ background: 'white' }}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Today's Appointments */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">
                  Today's{' '}
                  <span className="relative inline-block group" style={{ color: colors?.accent2 || '#008170' }}>
                    Appointments
                    <span 
                      className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
                      style={{ 
                        background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
                      }}
                    />
                  </span>
                </h2>
                <p className="text-white/60">Schedule and manage appointments</p>
              </div>
              <button className="text-white/40 hover:text-white transition-all duration-300 text-sm flex items-center gap-1 group">
                View Calendar <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
              <div className="grid grid-cols-5 gap-4 p-4 border-b border-white/10 text-white/40 text-sm font-semibold">
                <div>Patient</div>
                <div>Doctor</div>
                <div>Department</div>
                <div>Time</div>
                <div>Status</div>
              </div>
              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  className="grid grid-cols-5 gap-4 p-4 hover:bg-white/5 transition-all duration-300 border-b border-white/10 last:border-0 cursor-pointer transform hover:translate-x-1 group"
                >
                  <div>
                    <div className="text-white font-semibold group-hover:text-white transition-colors">{apt.patient}</div>
                    <div className="text-white/40 text-xs group-hover:text-white/50 transition-colors">{apt.id}</div>
                  </div>
                  <div className="text-white/80 group-hover:text-white/90 transition-colors">{apt.doctor}</div>
                  <div className="text-white/80 group-hover:text-white/90 transition-colors">{apt.department}</div>
                  <div className="text-white/80 group-hover:text-white/90 transition-colors">{apt.time}</div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs transition-transform group-hover:scale-105 ${getStatusColor(apt.status)}`}>
                      {apt.status}
                    </span>
                  </div>
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
                  Patients Say
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
                    <div className="flex gap-1 transition-transform group-hover:scale-110" style={{ color: colors?.accent2 || '#008170' }}>
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
                      <h4 className="text-white font-semibold group-hover:text-white transition-colors">{testimonial.name}</h4>
                      <p className="text-white/40 text-sm group-hover:text-white/50 transition-colors">{testimonial.role}</p>
                    </div>
                  </div>

                  <p className="text-white/70 italic group-hover:text-white/80 transition-colors">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] group">
              <img
                src="https://placehold.co/2000x800/232D3F/FFFFFF?text=Emergency+Care"
                alt="Emergency"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0" style={{ 
                background: `linear-gradient(135deg, ${colors?.primary || '#0F0F0F'}cc, ${colors?.accent1 || '#005B41'}cc)`
              }} />

              <div className="relative py-20 px-8 text-center">
                <span className="text-6xl mb-4 inline-block animate-pulse">🚑</span>
                <h2 className="text-4xl font-bold text-white mb-4">
                  24/7 Emergency{' '}
                  <span style={{ color: colors?.accent2 || '#008170' }}>Care</span>
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Immediate medical attention when you need it most
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 text-white relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors?.accent1 || '#005B41'}, ${colors?.accent2 || '#008170'})`,
                    }}
                  >
                    <span className="relative z-10">📞</span>
                    <span className="relative z-10">Call Emergency: 911</span>
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ background: 'white' }}
                    />
                  </button>
                  <button
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white transform hover:-translate-y-1"
                  >
                    <span className="transition-transform group-hover:scale-110">📍</span>
                    Find Nearest Location
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Department Modal */}
        {selectedDepartment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn" 
              onClick={() => setSelectedDepartment(null)} 
            />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-500 animate-slideUp">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl transition-transform hover:scale-110 hover:rotate-6">{selectedDepartment.icon}</span>
                    <h3 className="text-2xl font-bold text-white">{selectedDepartment.name}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedDepartment(null)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    ✕
                  </button>
                </div>

                <img
                  src={selectedDepartment.image}
                  alt={selectedDepartment.name}
                  className="w-full h-48 object-cover rounded-xl mb-6 transition-transform duration-500 hover:scale-105"
                />

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-white/40 text-sm mb-1">Department Head</p>
                    <p className="text-white">{selectedDepartment.headDoctor}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-sm mb-1">Total Doctors</p>
                    <p className="text-white">{selectedDepartment.doctors} Specialists</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-sm mb-1">Patients Treated</p>
                    <p className="text-white">{selectedDepartment.patients}</p>
                  </div>
                </div>

                <p className="text-white/80 mb-6">{selectedDepartment.description}</p>

                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-white font-semibold mb-4">Services Offered</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedDepartment.services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm group/item">
                        <span className="transition-transform group-hover/item:scale-125" style={{ color: colors?.accent2 || '#008170' }}>✓</span>
                        <span className="text-white/60 group-hover/item:text-white/70 transition-colors">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    className="flex-1 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-white transform hover:scale-105 active:scale-95"
                    onClick={() => setSelectedDepartment(null)}
                  >
                    Close
                  </button>
                  <button
                    className="flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-white transform hover:scale-105 active:scale-95 relative overflow-hidden group/btn"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`,
                    }}
                  >
                    <span className="relative z-10">Book Appointment</span>
                    <div 
                      className="absolute inset-0 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"
                      style={{ background: 'white' }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Doctor Modal */}
        {selectedDoctor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn" 
              onClick={() => setSelectedDoctor(null)} 
            />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-500 animate-slideUp">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Doctor Profile</h3>
                  <button
                    onClick={() => setSelectedDoctor(null)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-90"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex items-center gap-6 mb-6">
                  <img
                    src={selectedDoctor.image}
                    alt={selectedDoctor.name}
                    className="w-24 h-24 rounded-full object-cover border-4 transition-transform hover:scale-110 hover:rotate-6"
                    style={{ borderColor: colors?.accent2 || '#008170' }}
                  />
                  <div>
                    <h4 className="text-xl font-bold text-white">{selectedDoctor.name}</h4>
                    <p className="text-white/60 mb-2">{selectedDoctor.specialty}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-white">{selectedDoctor.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-white/40 text-sm mb-1">Experience</p>
                    <p className="text-white">{selectedDoctor.experience}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-sm mb-1">Patients</p>
                    <p className="text-white">{selectedDoctor.patients}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-sm mb-1">Education</p>
                    <p className="text-white">{selectedDoctor.education}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-sm mb-1">Languages</p>
                    <p className="text-white">{selectedDoctor.languages.join(', ')}</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4 mb-6">
                  <p className="text-white/40 text-sm mb-2">Next Available Slot</p>
                  <p className="text-emerald-400 text-lg font-semibold">{selectedDoctor.nextAvailable}</p>
                </div>

                <div className="flex gap-4">
                  <button
                    className="flex-1 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-white"
                    onClick={() => setSelectedDoctor(null)}
                  >
                    Close
                  </button>
                  <button
                    className="flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-white relative overflow-hidden group/btn"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`,
                    }}
                  >
                    <span className="relative z-10">Book Appointment</span>
                    <div 
                      className="absolute inset-0 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"
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
      `}</style>
    </div>
  );
};

export default ClinicDiagnosticCenter;
