
// ProcessSection.jsx
import React, { useState, useEffect } from 'react';
import { Rocket, Target, BarChart3, Code, Shield, Heart, CheckCircle, Users, Brain, Cpu, Zap, Globe, Clock } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const ProcessSection = () => {
  // Use theme hook
  const { colors: themeColors, loading: themeLoading, error: themeError, refreshTheme } = useTheme();
  
  // State for process data
  const [processSteps, setProcessSteps] = useState([]);
  const [processLoading, setProcessLoading] = useState(true);
  const [processError, setProcessError] = useState(null);
  
  // State for home page content (badge, title, subtitle)
  const [homePageContent, setHomePageContent] = useState({
    process_badge: 'Our Process',
    process_title: 'From Idea to Impact',
    process_subtitle: 'A systematic approach that ensures quality, transparency, and successful delivery.'
  });

  // Helper function to split title and color the last word
  const formatTitle = (title) => {
    if (!title) return null;
    
    const words = title.trim().split(' ');
    if (words.length === 1) {
      return (
        <span
          className="relative inline-block group"
          style={{ color: themeColors?.accent2 || '#008170' }}
        >
          {words[0]}
          <span
            className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
            style={{
              background: `linear-gradient(90deg, ${themeColors?.accent2 || '#008170'}, ${themeColors?.accent1 || '#005B41'})`,
            }}
          ></span>
        </span>
      );
    }
    
    const lastWord = words.pop();
    const firstPart = words.join(' ');
    
    return (
      <>
        {firstPart}{' '}
        <span
          className="relative inline-block group"
          style={{ color: themeColors?.accent2 || '#008170' }}
        >
          {lastWord}
          <span
            className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
            style={{
              background: `linear-gradient(90deg, ${themeColors?.accent2 || '#008170'}, ${themeColors?.accent1 || '#005B41'})`,
            }}
          ></span>
        </span>
      </>
    );
  };

  // Icon mapping for different process types
  const iconMap = {
    'discovery': <Target className="w-6 h-6" />,
    'planning': <BarChart3 className="w-6 h-6" />,
    'development': <Code className="w-6 h-6" />,
    'testing': <Shield className="w-6 h-6" />,
    'deployment': <Rocket className="w-6 h-6" />,
    'support': <Heart className="w-6 h-6" />,
    'research': <Brain className="w-6 h-6" />,
    'design': <Cpu className="w-6 h-6" />,
    'launch': <Zap className="w-6 h-6" />,
    'scale': <Globe className="w-6 h-6" />,
    'consulting': <Users className="w-6 h-6" />,
    'maintenance': <Clock className="w-6 h-6" />,
    'default': <Target className="w-6 h-6" />
  };

  // Fetch home page content (single doctype) using REST API
  useEffect(() => {
    const fetchHomePageContent = async () => {
      try {
        console.log('Fetching home page content...');
        const response = await fetch('/api/resource/Home Page/Home Page');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Home page data:', data);
        
        if (data.data) {
          setHomePageContent({
            process_badge: data.data.process_badge || 'Our Process',
            process_title: data.data.process_title || 'From Idea to Impact',
            process_subtitle: data.data.process_subtitle || 'A systematic approach that ensures quality, transparency, and successful delivery.'
          });
        }
      } catch (err) {
        console.error('Error fetching home page content:', err);
        // Keep default values
      }
    };

    fetchHomePageContent();
  }, []);

  // Fetch process steps from Development Process doctype
  useEffect(() => {
    const fetchProcessSteps = async () => {
      try {
        setProcessLoading(true);
        console.log('Fetching process steps...');
        
        // First, try to get the list of development processes
        const listResponse = await fetch(
          '/api/resource/Development Process?fields=["name","process_name","process_step","description","icon"]&order_by=process_step%20asc&limit_page_length=10'
        );
        
        if (!listResponse.ok) {
          throw new Error(`HTTP error! status: ${listResponse.status}`);
        }
        
        const listData = await listResponse.json();
        console.log('Process list data:', listData);
        
        if (listData.data && listData.data.length > 0) {
          // For each process, fetch its full details including child table items
          const stepsWithDetails = await Promise.all(
            listData.data.map(async (process, index) => {
              try {
                console.log(`Fetching details for process: ${process.name}`);
                const detailResponse = await fetch(`/api/resource/Development Process/${process.name}`);
                
                if (!detailResponse.ok) {
                  throw new Error(`HTTP error! status: ${detailResponse.status}`);
                }
                
                const detailData = await detailResponse.json();
                console.log(`Process ${process.name} details:`, detailData);
                
                // Extract items from the response
                const items = detailData.data?.process_items || [];
                
                // Determine icon based on process name or use default
                const processNameLower = process.process_name?.toLowerCase() || '';
                let iconKey = 'default';
                
                if (processNameLower.includes('discovery')) iconKey = 'discovery';
                else if (processNameLower.includes('plan')) iconKey = 'planning';
                else if (processNameLower.includes('develop')) iconKey = 'development';
                else if (processNameLower.includes('test')) iconKey = 'testing';
                else if (processNameLower.includes('deploy')) iconKey = 'deployment';
                else if (processNameLower.includes('support')) iconKey = 'support';
                else if (processNameLower.includes('research')) iconKey = 'research';
                else if (processNameLower.includes('design')) iconKey = 'design';
                else if (processNameLower.includes('launch')) iconKey = 'launch';
                else if (processNameLower.includes('scale')) iconKey = 'scale';
                else if (processNameLower.includes('consult')) iconKey = 'consulting';
                else if (processNameLower.includes('maintain')) iconKey = 'maintenance';
                
                return {
                  step: process.process_step?.toString().padStart(2, '0') || (index + 1).toString().padStart(2, '0'),
                  title: process.process_name,
                  description: process.description || '',
                  icon: iconMap[iconKey] || iconMap.default,
                  details: items.map(item => item.value).filter(Boolean),
                  accent: index % 2 === 0 ? (themeColors?.accent2 || '#008170') : (themeColors?.accent1 || '#005B41')
                };
              } catch (err) {
                console.error(`Error fetching details for process ${process.name}:`, err);
                // Return basic process info without details
                return {
                  step: process.process_step?.toString().padStart(2, '0') || (index + 1).toString().padStart(2, '0'),
                  title: process.process_name,
                  description: process.description || '',
                  icon: iconMap.default,
                  details: [],
                  accent: index % 2 === 0 ? (themeColors?.accent2 || '#008170') : (themeColors?.accent1 || '#005B41')
                };
              }
            })
          );

          console.log('Processed steps with details:', stepsWithDetails);
          setProcessSteps(stepsWithDetails);
          setProcessError(null);
        } else {
          console.log('No process steps found in database, using fallback');
          setProcessSteps(getFallbackProcessSteps());
        }
      } catch (err) {
        console.error('Error fetching process steps:', err);
        setProcessError('Failed to load process steps: ' + err.message);
        setProcessSteps(getFallbackProcessSteps());
      } finally {
        setProcessLoading(false);
      }
    };

    fetchProcessSteps();
  }, [themeColors?.accent1, themeColors?.accent2]);

  // Fallback process steps
  const getFallbackProcessSteps = () => {
    console.log('Using fallback process steps');
    return [
      {
        step: '01',
        title: 'Discovery',
        description: 'We dive deep into your business goals, requirements, and challenges.',
        icon: <Target className="w-6 h-6" />,
        details: ['Requirements Analysis', 'Market Research', 'Technical Feasibility'],
        accent: themeColors?.accent2 || '#008170'
      },
      {
        step: '02',
        title: 'Planning',
        description: 'Creating a comprehensive roadmap and architecture for your solution.',
        icon: <BarChart3 className="w-6 h-6" />,
        details: ['Solution Architecture', 'Technology Stack', 'Project Timeline'],
        accent: themeColors?.accent1 || '#005B41'
      },
      {
        step: '03',
        title: 'Development',
        description: 'Agile development with continuous integration and regular updates.',
        icon: <Code className="w-6 h-6" />,
        details: ['Sprint Planning', 'Daily Standups', 'Continuous Integration'],
        accent: themeColors?.accent2 || '#008170'
      },
      {
        step: '04',
        title: 'Testing',
        description: 'Rigorous quality assurance to ensure flawless performance.',
        icon: <Shield className="w-6 h-6" />,
        details: ['Unit Testing', 'Integration Testing', 'User Acceptance Testing'],
        accent: themeColors?.accent1 || '#005B41'
      },
      {
        step: '05',
        title: 'Deployment',
        description: 'Smooth deployment with minimal disruption to your operations.',
        icon: <Rocket className="w-6 h-6" />,
        details: ['Deployment Strategy', 'Data Migration', 'Go-Live Support'],
        accent: themeColors?.accent2 || '#008170'
      },
      {
        step: '06',
        title: 'Support',
        description: 'Ongoing maintenance and support to ensure long-term success.',
        icon: <Heart className="w-6 h-6" />,
        details: ['24/7 Monitoring', 'Regular Updates', 'Performance Optimization'],
        accent: themeColors?.accent1 || '#005B41'
      }
    ];
  };

  // Update accent colors when theme changes
  useEffect(() => {
    setProcessSteps(prevSteps => 
      prevSteps.map((step, index) => ({
        ...step,
        accent: index % 2 === 0 ? (themeColors?.accent2 || '#008170') : (themeColors?.accent1 || '#005B41')
      }))
    );
  }, [themeColors]);

  // Show loading state
  if (themeLoading || processLoading) {
    return (
      <section className="py-20 lg:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${themeColors?.primary || '#0F0F0F'} 0%, ${themeColors?.secondary || '#232D3F'} 50%, ${themeColors?.accent1 || '#005B41'} 100%)`
      }}
    >
      {/* Error message with retry button */}
      {(themeError || processError) && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm z-30 flex items-center gap-3">
          <span>{themeError || processError}</span>
          <button 
            onClick={refreshTheme}
            className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs transition-colors"
          >
            Retry
          </button>
        </div>
      )}

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

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
        style={{ background: themeColors?.accent2 || '#008170', opacity: 0.2 }}
      ></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"
        style={{ background: themeColors?.accent1 || '#005B41', opacity: 0.2 }}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-4000"
        style={{ background: themeColors?.primary || '#0F0F0F', opacity: 0.1 }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Dynamic from Home Page with Formatted Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/20">
            <Rocket className="w-4 h-4" style={{ color: themeColors?.accent2 || '#008170' }} />
            <span className="text-white">{homePageContent.process_badge}</span>
          </div>
          
          {/* Formatted Title with Last Word Highlight */}
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {formatTitle(homePageContent.process_title)}
          </h2>
          
          <p className="text-white/80 text-lg">
            {homePageContent.process_subtitle}
          </p>
        </div>

        {/* Process Grid - Dynamic from Development Process doctype */}
        {processSteps.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border"
                style={{ 
                  background: `linear-gradient(135deg, ${themeColors?.primary || '#0F0F0F'}80, ${themeColors?.secondary || '#232D3F'}80)`,
                  borderColor: `${step.accent}40`,
                  boxShadow: `0 8px 32px ${themeColors?.primary || '#0F0F0F'}40`
                }}
              >
                {/* Step Number Badge */}
                <div 
                  className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transition-transform group-hover:scale-110"
                  style={{ 
                    background: `linear-gradient(135deg, ${step.accent}, ${step.accent}CC)`,
                    boxShadow: `0 4px 12px ${step.accent}80`
                  }}
                >
                  {step.step}
                </div>
                
                {/* Icon Container */}
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `${step.accent}20`,
                    color: step.accent 
                  }}
                >
                  {step.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/70 text-sm mb-4">
                  {step.description}
                </p>
                
                {/* Details List from process_items child table */}
                {step.details.length > 0 ? (
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-white/80">
                        <CheckCircle 
                          className="w-3 h-3 flex-shrink-0" 
                          style={{ color: step.accent }}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-xs text-white/50">
                      <CheckCircle className="w-3 h-3 opacity-50" />
                      <span>No items added yet</span>
                    </li>
                  </ul>
                )}

                {/* Bottom Accent Line */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(90deg, ${step.accent}, ${step.accent}CC, transparent)`
                  }}
                ></div>

                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{ 
                    background: step.accent,
                    filter: 'blur(20px)'
                  }}
                ></div>
              </div>
            ))}
          </div>
        ) : (
          // Show message if no process steps are found
          <div className="text-center py-12">
            <p className="text-white/60 text-lg">No process steps available at the moment.</p>
          </div>
        )}

        {/* Process Flow Indicator - Only show if there are steps */}
        {processSteps.length > 0 && (
          <div className="flex flex-col items-center mt-12">
            <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
              <span>Start</span>
              <div className="w-20 h-0.5 bg-gradient-to-r" 
                   style={{ 
                     background: `linear-gradient(90deg, ${themeColors?.accent2 || '#008170'}, ${themeColors?.accent1 || '#005B41'})`
                   }}>
              </div>
              <span>Finish</span>
            </div>
            
            {/* Process Steps Counter */}
            <div className="flex gap-2">
              {processSteps.map((_, index) => (
                <div 
                  key={index}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{ 
                    backgroundColor: index < Math.floor(processSteps.length / 2) ? (themeColors?.accent2 || '#008170') : (themeColors?.accent1 || '#005B41'),
                    opacity: 0.5 + (index * 0.1)
                  }}
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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

export default ProcessSection;