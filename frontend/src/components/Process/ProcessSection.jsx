
// // ProcessSection.jsx
// import React, { useState, useEffect, useCallback, memo } from 'react';
// import { Rocket, Target, BarChart3, Code, Shield, Heart, CheckCircle, Users, Brain, Cpu, Zap, Globe, Clock, ArrowRight } from 'lucide-react';
// import { useTheme } from '../../hooks/useTheme';
// import { useHomePage } from '../../hooks/useHomePage';

// const ProcessSection = () => {
//   // Use theme hook
//   const { colors: themeColors, loading: themeLoading, error: themeError, refreshTheme } = useTheme();
  
//   // State for process data
//   const [processSteps, setProcessSteps] = useState([]);
//   const [processLoading, setProcessLoading] = useState(true);
//   const [processError, setProcessError] = useState(null);
//   const [activeStep, setActiveStep] = useState(null);
//   const { homePageData } = useHomePage();
  
//   const homePageContent = {
//     process_badge: homePageData?.process_badge || 'Our Process',
//     process_title: homePageData?.process_title || 'From Idea to Impact',
//     process_subtitle: homePageData?.process_subtitle || 'A systematic approach that ensures quality, transparency, and successful delivery.'
//   };

//   // Helper function to split title and color the last word
//   const formatTitle = useCallback((title) => {
//     if (!title) return null;
    
//     const words = title.trim().split(' ');
//     if (words.length === 1) {
//       return (
//         <span className="relative inline-block" style={{ color: themeColors?.accent2 || '#008071' }}>
//           {words[0]}
//           <span
//             className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
//             style={{ 
//               backgroundColor: themeColors?.accent2 || '#008071',
//               opacity: 0.3
//             }}
//           ></span>
//         </span>
//       );
//     }
    
//     const lastWord = words.pop();
//     const firstPart = words.join(' ');
    
//     return (
//       <>
//         {firstPart}{' '}
//         <span className="relative inline-block" style={{ color: themeColors?.accent2 || '#008071' }}>
//           {lastWord}
//           <span
//             className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
//             style={{ 
//               backgroundColor: themeColors?.accent2 || '#008071',
//               opacity: 0.3
//             }}
//           ></span>
//         </span>
//       </>
//     );
//   }, [themeColors?.accent2]);

//   // Icon mapping for different process types
//   const iconMap = {
//     'discovery': <Target className="w-6 h-6" />,
//     'planning': <BarChart3 className="w-6 h-6" />,
//     'development': <Code className="w-6 h-6" />,
//     'testing': <Shield className="w-6 h-6" />,
//     'deployment': <Rocket className="w-6 h-6" />,
//     'support': <Heart className="w-6 h-6" />,
//     'research': <Brain className="w-6 h-6" />,
//     'design': <Cpu className="w-6 h-6" />,
//     'launch': <Zap className="w-6 h-6" />,
//     'scale': <Globe className="w-6 h-6" />,
//     'consulting': <Users className="w-6 h-6" />,
//     'maintenance': <Clock className="w-6 h-6" />,
//     'default': <Target className="w-6 h-6" />
//   };

//   // Fetch process steps from Development Process doctype
//   useEffect(() => {
//     const fetchProcessSteps = async () => {
//       try {
//         setProcessLoading(true);
        
//         const listResponse = await fetch(
//           '/api/resource/Development Process?fields=["name","process_name","process_step","description","icon"]&order_by=process_step%20asc&limit_page_length=10'
//         );
        
//         if (!listResponse.ok) {
//           throw new Error(`HTTP error! status: ${listResponse.status}`);
//         }
        
//         const listData = await listResponse.json();
        
//         if (listData.data && listData.data.length > 0) {
//           const stepsWithDetails = await Promise.all(
//             listData.data.map(async (process, index) => {
//               try {
//                 const detailResponse = await fetch(`/api/resource/Development Process/${process.name}`);
                
//                 if (!detailResponse.ok) {
//                   throw new Error(`HTTP error! status: ${detailResponse.status}`);
//                 }
                
//                 const detailData = await detailResponse.json();
//                 const items = detailData.data?.process_items || [];
                
//                 const processNameLower = process.process_name?.toLowerCase() || '';
//                 let iconKey = 'default';
                
//                 if (processNameLower.includes('discovery')) iconKey = 'discovery';
//                 else if (processNameLower.includes('plan')) iconKey = 'planning';
//                 else if (processNameLower.includes('develop')) iconKey = 'development';
//                 else if (processNameLower.includes('test')) iconKey = 'testing';
//                 else if (processNameLower.includes('deploy')) iconKey = 'deployment';
//                 else if (processNameLower.includes('support')) iconKey = 'support';
//                 else if (processNameLower.includes('research')) iconKey = 'research';
//                 else if (processNameLower.includes('design')) iconKey = 'design';
//                 else if (processNameLower.includes('launch')) iconKey = 'launch';
//                 else if (processNameLower.includes('scale')) iconKey = 'scale';
//                 else if (processNameLower.includes('consult')) iconKey = 'consulting';
//                 else if (processNameLower.includes('maintain')) iconKey = 'maintenance';
                
//                 return {
//                   step: process.process_step?.toString().padStart(2, '0') || (index + 1).toString().padStart(2, '0'),
//                   title: process.process_name,
//                   description: process.description || '',
//                   icon: iconMap[iconKey] || iconMap.default,
//                   details: items.map(item => item.value).filter(Boolean),
//                   accent: index % 2 === 0 ? (themeColors?.accent2 || '#008071') : (themeColors?.accent1 || '#005B41')
//                 };
//               } catch (err) {
//                 console.error(`Error fetching details for process ${process.name}:`, err);
//                 return {
//                   step: process.process_step?.toString().padStart(2, '0') || (index + 1).toString().padStart(2, '0'),
//                   title: process.process_name,
//                   description: process.description || '',
//                   icon: iconMap.default,
//                   details: [],
//                   accent: index % 2 === 0 ? (themeColors?.accent2 || '#008071') : (themeColors?.accent1 || '#005B41')
//                 };
//               }
//             })
//           );

//           setProcessSteps(stepsWithDetails);
//           setProcessError(null);
//         } else {
//           setProcessSteps(getFallbackProcessSteps());
//         }
//       } catch (err) {
//         console.error('Error fetching process steps:', err);
//         setProcessError('Failed to load process steps');
//         setProcessSteps(getFallbackProcessSteps());
//       } finally {
//         setProcessLoading(false);
//       }
//     };

//     fetchProcessSteps();
//   }, [themeColors?.accent1, themeColors?.accent2]);

//   // Fallback process steps
//   const getFallbackProcessSteps = () => [
//     {
//       step: '01',
//       title: 'Discovery',
//       description: 'We dive deep into your business goals, requirements, and challenges.',
//       icon: <Target className="w-6 h-6" />,
//       details: ['Requirements Analysis', 'Market Research', 'Technical Feasibility'],
//       accent: themeColors?.accent2 || '#008071'
//     },
//     {
//       step: '02',
//       title: 'Planning',
//       description: 'Creating a comprehensive roadmap and architecture for your solution.',
//       icon: <BarChart3 className="w-6 h-6" />,
//       details: ['Solution Architecture', 'Technology Stack', 'Project Timeline'],
//       accent: themeColors?.accent1 || '#005B41'
//     },
//     {
//       step: '03',
//       title: 'Development',
//       description: 'Agile development with continuous integration and regular updates.',
//       icon: <Code className="w-6 h-6" />,
//       details: ['Sprint Planning', 'Daily Standups', 'Continuous Integration'],
//       accent: themeColors?.accent2 || '#008071'
//     },
//     {
//       step: '04',
//       title: 'Testing',
//       description: 'Rigorous quality assurance to ensure flawless performance.',
//       icon: <Shield className="w-6 h-6" />,
//       details: ['Unit Testing', 'Integration Testing', 'User Acceptance Testing'],
//       accent: themeColors?.accent1 || '#005B41'
//     },
//     {
//       step: '05',
//       title: 'Deployment',
//       description: 'Smooth deployment with minimal disruption to your operations.',
//       icon: <Rocket className="w-6 h-6" />,
//       details: ['Deployment Strategy', 'Data Migration', 'Go-Live Support'],
//       accent: themeColors?.accent2 || '#008071'
//     },
//     {
//       step: '06',
//       title: 'Support',
//       description: 'Ongoing maintenance and support to ensure long-term success.',
//       icon: <Heart className="w-6 h-6" />,
//       details: ['24/7 Monitoring', 'Regular Updates', 'Performance Optimization'],
//       accent: themeColors?.accent1 || '#005B41'
//     }
//   ];

//   // Update accent colors when theme changes
//   useEffect(() => {
//     setProcessSteps(prevSteps => 
//       prevSteps.map((step, index) => ({
//         ...step,
//         accent: index % 2 === 0 ? (themeColors?.accent2 || '#008071') : (themeColors?.accent1 || '#005B41')
//       }))
//     );
//   }, [themeColors]);

//   // Show loading state
//   if (themeLoading || processLoading) {
//     return (
//       <section className="py-20 lg:py-16 relative overflow-hidden bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-center items-center min-h-[400px]">
//             <div className="flex flex-col items-center gap-4">
//               <div className="relative">
//                 <div className="w-12 h-12 rounded-full border-2 border-gray-200 border-t-[#008071] animate-spin"></div>
//               </div>
//               <span className="text-sm text-gray-500">Loading process...</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-20 lg:py-16 relative overflow-hidden bg-gray-100">
//       {/* Subtle background pattern */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div 
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage: `
//               radial-gradient(circle, rgba(0, 128, 113, 0.3) 1px, transparent 1px)
//             `,
//             backgroundSize: '40px 40px',
//           }}
//         />
//       </div>

//       {/* Error message with retry button */}
//       {(themeError || processError) && (
//         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-xl border border-red-200 text-gray-900 px-4 py-3 rounded-xl text-sm z-30 flex items-center gap-3">
//           <div className="flex items-center gap-2">
//             <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
//             <span className="font-medium">Error:</span>
//             <span className="text-gray-600">{themeError || processError}</span>
//           </div>
//           <button 
//             onClick={refreshTheme}
//             className="ml-2 px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-colors hover:opacity-90"
//             style={{ backgroundColor: themeColors?.accent2 || '#008071' }}
//           >
//             Retry
//           </button>
//         </div>
//       )}

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div 
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 border opacity-0 animate-fade-in-up"
//             style={{ 
//               backgroundColor: `${themeColors?.accent2 || '#008071'}08`,
//               borderColor: `${themeColors?.accent2 || '#008071'}20`,
//               color: themeColors?.accent2 || '#008071'
//             }}
//           >
//             <Rocket className="w-4 h-4" style={{ color: themeColors?.accent2 || '#008071' }} />
//             <span>{homePageContent.process_badge}</span>
//           </div>
          
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 opacity-0 animate-fade-in-up stagger-1">
//             {formatTitle(homePageContent.process_title)}
//           </h2>
          
//           <p className="text-gray-600 text-lg opacity-0 animate-fade-in-up stagger-2">
//             {homePageContent.process_subtitle}
//           </p>
//         </div>

//         {/* Process Grid */}
//         {processSteps.length > 0 ? (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//             {processSteps.map((step, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-white rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-transparent opacity-0 animate-fade-in-scale"
//                 style={{ 
//                   animationDelay: `${0.15 + index * 0.12}s`,
//                 }}
//                 onMouseEnter={() => setActiveStep(index)}
//                 onMouseLeave={() => setActiveStep(null)}
//               >
//                 {/* Step Number Badge */}
//                 <div 
//                   className="absolute -top-3 -right-3 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 z-10"
//                   style={{ 
//                     backgroundColor: step.accent,
//                     boxShadow: `0 4px 15px ${step.accent}40`
//                   }}
//                 >
//                   {step.step}
//                 </div>
                
//                 {/* Icon Container */}
//                 <div 
//                   className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 relative"
//                   style={{ 
//                     backgroundColor: `${step.accent}10`,
//                     color: step.accent 
//                   }}
//                 >
//                   <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
//                     {step.icon}
//                   </div>
//                 </div>
                
//                 {/* Connecting line between steps */}
//                 {index < processSteps.length - 1 && (
//                   <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5" style={{ backgroundColor: `${step.accent}30` }}>
//                     <ArrowRight className="w-4 h-4 absolute -right-2 -top-1.5" style={{ color: step.accent }} />
//                   </div>
//                 )}
                
//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-gray-900 mb-2 transition-all duration-300 group-hover:translate-x-1">
//                   {step.title}
//                 </h3>
                
//                 {/* Description */}
//                 <p className="text-gray-600 text-sm mb-4 transition-colors duration-300 group-hover:text-gray-900">
//                   {step.description}
//                 </p>
                
//                 {/* Details List from process_items child table */}
//                 {step.details.length > 0 ? (
//                   <ul className="space-y-2">
//                     {step.details.map((detail, idx) => (
//                       <li 
//                         key={idx} 
//                         className="flex items-center gap-2 text-sm text-gray-600 transition-all duration-300 hover:translate-x-1"
//                         style={{ transitionDelay: `${idx * 50}ms` }}
//                       >
//                         <CheckCircle 
//                           className="w-4 h-4 flex-shrink-0 transition-all duration-300 group-hover:scale-110" 
//                           style={{ color: step.accent }}
//                         />
//                         <span>{detail}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <ul className="space-y-2">
//                     <li className="flex items-center gap-2 text-sm text-gray-400">
//                       <CheckCircle className="w-4 h-4 opacity-50" />
//                       <span>No items added yet</span>
//                     </li>
//                   </ul>
//                 )}

//                 {/* Bottom Accent Line */}
//                 <div 
//                   className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
//                   style={{ backgroundColor: step.accent }}
//                 ></div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12 opacity-0 animate-fade-in-up stagger-3">
//             <div className="inline-flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-xl border border-gray-200">
//               <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
//                 <Target className="w-5 h-5 text-gray-400" />
//               </div>
//               <p className="text-gray-500 font-medium">No process steps available at the moment.</p>
//             </div>
//           </div>
//         )}

//         {/* Process Flow Indicator */}
//         {processSteps.length > 0 && (
//           <div className="flex flex-col items-center mt-12 opacity-0 animate-fade-in-up stagger-4">
//             <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
//               <span className="font-medium text-gray-600">Start</span>
//               <div className="w-20 h-0.5 rounded-full" 
//                    style={{ 
//                      backgroundColor: `${themeColors?.accent2 || '#008071'}40`
//                    }}>
//               </div>
//               <span className="font-medium text-gray-600">Finish</span>
//             </div>
            
//             {/* Process Steps Counter */}
//             <div className="flex gap-2">
//               {processSteps.map((step, index) => (
//                 <div 
//                   key={index}
//                   className="w-2 h-2 rounded-full transition-all duration-300 hover:scale-150 cursor-pointer"
//                   style={{ 
//                     backgroundColor: step.accent,
//                     opacity: activeStep === index ? 1 : 0.5
//                   }}
//                   onMouseEnter={() => setActiveStep(index)}
//                 ></div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes fadeInScale {
//           from { opacity: 0; transform: scale(0.95) translateY(20px); }
//           to { opacity: 1; transform: scale(1) translateY(0); }
//         }

//         .animate-fade-in-up {
//           animation: fadeInUp 0.6s ease-out forwards;
//         }

//         .animate-fade-in-scale {
//           animation: fadeInScale 0.5s ease-out forwards;
//         }

//         .stagger-1 { animation-delay: 0.1s; }
//         .stagger-2 { animation-delay: 0.25s; }
//         .stagger-3 { animation-delay: 0.4s; }
//         .stagger-4 { animation-delay: 0.55s; }
//       `}</style>
//     </section>
//   );
// };

// export default memo(ProcessSection);


















// ProcessSection.jsx
import React, { useState, useEffect, useCallback, memo } from 'react';
import { Rocket, Target, BarChart3, Code, Shield, Heart, CheckCircle, Users, Brain, Cpu, Zap, Globe, Clock, ArrowRight } from 'lucide-react';
import { useHomePage } from '../../hooks/useHomePage';

const ProcessSection = () => {
  // Hardcoded theme colors
  const themeColors = {
    accent1: '#005B41',
    accent2: '#008071',
  };
  
  // State for process data
  const [processSteps, setProcessSteps] = useState([]);
  const [processLoading, setProcessLoading] = useState(true);
  const [processError, setProcessError] = useState(null);
  const [activeStep, setActiveStep] = useState(null);
  const { homePageData } = useHomePage();
  
  const homePageContent = {
    process_badge: homePageData?.process_badge || 'Our Process',
    process_title: homePageData?.process_title || 'From Idea to Impact',
    process_subtitle: homePageData?.process_subtitle || 'A systematic approach that ensures quality, transparency, and successful delivery.'
  };

  // Helper function to split title and color the last word
  const formatTitle = useCallback((title) => {
    if (!title) return null;
    
    const words = title.trim().split(' ');
    if (words.length === 1) {
      return (
        <span className="relative inline-block" style={{ color: themeColors.accent2 }}>
          {words[0]}
          <span
            className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
            style={{ 
              backgroundColor: themeColors.accent2,
              opacity: 0.3
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
        <span className="relative inline-block" style={{ color: themeColors.accent2 }}>
          {lastWord}
          <span
            className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
            style={{ 
              backgroundColor: themeColors.accent2,
              opacity: 0.3
            }}
          ></span>
        </span>
      </>
    );
  }, []);

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

  // Fallback process steps
  const getFallbackProcessSteps = () => [
    {
      step: '01',
      title: 'Discovery',
      description: 'We dive deep into your business goals, requirements, and challenges.',
      icon: <Target className="w-6 h-6" />,
      details: ['Requirements Analysis', 'Market Research', 'Technical Feasibility'],
      accent: themeColors.accent2
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Creating a comprehensive roadmap and architecture for your solution.',
      icon: <BarChart3 className="w-6 h-6" />,
      details: ['Solution Architecture', 'Technology Stack', 'Project Timeline'],
      accent: themeColors.accent1
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development with continuous integration and regular updates.',
      icon: <Code className="w-6 h-6" />,
      details: ['Sprint Planning', 'Daily Standups', 'Continuous Integration'],
      accent: themeColors.accent2
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Rigorous quality assurance to ensure flawless performance.',
      icon: <Shield className="w-6 h-6" />,
      details: ['Unit Testing', 'Integration Testing', 'User Acceptance Testing'],
      accent: themeColors.accent1
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Smooth deployment with minimal disruption to your operations.',
      icon: <Rocket className="w-6 h-6" />,
      details: ['Deployment Strategy', 'Data Migration', 'Go-Live Support'],
      accent: themeColors.accent2
    },
    {
      step: '06',
      title: 'Support',
      description: 'Ongoing maintenance and support to ensure long-term success.',
      icon: <Heart className="w-6 h-6" />,
      details: ['24/7 Monitoring', 'Regular Updates', 'Performance Optimization'],
      accent: themeColors.accent1
    }
  ];

  // Fetch process steps from Development Process doctype
  useEffect(() => {
    const fetchProcessSteps = async () => {
      try {
        setProcessLoading(true);
        
        const listResponse = await fetch(
          '/api/resource/Development Process?fields=["name","process_name","process_step","description","icon"]&order_by=process_step%20asc&limit_page_length=10'
        );
        
        if (!listResponse.ok) {
          throw new Error(`HTTP error! status: ${listResponse.status}`);
        }
        
        const listData = await listResponse.json();
        
        if (listData.data && listData.data.length > 0) {
          const stepsWithDetails = await Promise.all(
            listData.data.map(async (process, index) => {
              try {
                const detailResponse = await fetch(`/api/resource/Development Process/${process.name}`);
                
                if (!detailResponse.ok) {
                  throw new Error(`HTTP error! status: ${detailResponse.status}`);
                }
                
                const detailData = await detailResponse.json();
                const items = detailData.data?.process_items || [];
                
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
                  accent: index % 2 === 0 ? themeColors.accent2 : themeColors.accent1
                };
              } catch (err) {
                console.error(`Error fetching details for process ${process.name}:`, err);
                return {
                  step: process.process_step?.toString().padStart(2, '0') || (index + 1).toString().padStart(2, '0'),
                  title: process.process_name,
                  description: process.description || '',
                  icon: iconMap.default,
                  details: [],
                  accent: index % 2 === 0 ? themeColors.accent2 : themeColors.accent1
                };
              }
            })
          );

          setProcessSteps(stepsWithDetails);
          setProcessError(null);
        } else {
          setProcessSteps(getFallbackProcessSteps());
        }
      } catch (err) {
        console.error('Error fetching process steps:', err);
        setProcessError('Failed to load process steps');
        setProcessSteps(getFallbackProcessSteps());
      } finally {
        setProcessLoading(false);
      }
    };

    fetchProcessSteps();
  }, []);

  // Show loading state
  if (processLoading) {
    return (
      <section className="py-20 lg:py-16 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-gray-200 border-t-[#008071] animate-spin"></div>
              </div>
              <span className="text-sm text-gray-500">Loading process...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-16 relative overflow-hidden bg-gray-100">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(0, 128, 113, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Error message with retry button */}
      {processError && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-xl border border-red-200 text-gray-900 px-4 py-3 rounded-xl text-sm z-30 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Error:</span>
            <span className="text-gray-600">{processError}</span>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="ml-2 px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: themeColors.accent2 }}
          >
            Retry
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 border opacity-0 animate-fade-in-up"
            style={{ 
              backgroundColor: `${themeColors.accent2}08`,
              borderColor: `${themeColors.accent2}20`,
              color: themeColors.accent2
            }}
          >
            <Rocket className="w-4 h-4" style={{ color: themeColors.accent2 }} />
            <span>{homePageContent.process_badge}</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 opacity-0 animate-fade-in-up stagger-1">
            {formatTitle(homePageContent.process_title)}
          </h2>
          
          <p className="text-gray-600 text-lg opacity-0 animate-fade-in-up stagger-2">
            {homePageContent.process_subtitle}
          </p>
        </div>

        {/* Process Grid */}
        {processSteps.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-transparent opacity-0 animate-fade-in-scale"
                style={{ 
                  animationDelay: `${0.15 + index * 0.12}s`,
                }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Step Number Badge */}
                <div 
                  className="absolute -top-3 -right-3 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 z-10"
                  style={{ 
                    backgroundColor: step.accent,
                    boxShadow: `0 4px 15px ${step.accent}40`
                  }}
                >
                  {step.step}
                </div>
                
                {/* Icon Container */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 relative"
                  style={{ 
                    backgroundColor: `${step.accent}10`,
                    color: step.accent 
                  }}
                >
                  <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>
                
                {/* Connecting line between steps */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5" style={{ backgroundColor: `${step.accent}30` }}>
                    <ArrowRight className="w-4 h-4 absolute -right-2 -top-1.5" style={{ color: step.accent }} />
                  </div>
                )}
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 transition-all duration-300 group-hover:translate-x-1">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 transition-colors duration-300 group-hover:text-gray-900">
                  {step.description}
                </p>
                
                {/* Details List from process_items child table */}
                {step.details.length > 0 ? (
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-center gap-2 text-sm text-gray-600 transition-all duration-300 hover:translate-x-1"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <CheckCircle 
                          className="w-4 h-4 flex-shrink-0 transition-all duration-300 group-hover:scale-110" 
                          style={{ color: step.accent }}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 opacity-50" />
                      <span>No items added yet</span>
                    </li>
                  </ul>
                )}

                {/* Bottom Accent Line */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
                  style={{ backgroundColor: step.accent }}
                ></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 opacity-0 animate-fade-in-up stagger-3">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Target className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-gray-500 font-medium">No process steps available at the moment.</p>
            </div>
          </div>
        )}

        {/* Process Flow Indicator */}
        {processSteps.length > 0 && (
          <div className="flex flex-col items-center mt-12 opacity-0 animate-fade-in-up stagger-4">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <span className="font-medium text-gray-600">Start</span>
              <div className="w-20 h-0.5 rounded-full" 
                   style={{ 
                     backgroundColor: `${themeColors.accent2}40`
                   }}>
              </div>
              <span className="font-medium text-gray-600">Finish</span>
            </div>
            
            {/* Process Steps Counter */}
            <div className="flex gap-2">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="w-2 h-2 rounded-full transition-all duration-300 hover:scale-150 cursor-pointer"
                  style={{ 
                    backgroundColor: step.accent,
                    opacity: activeStep === index ? 1 : 0.5
                  }}
                  onMouseEnter={() => setActiveStep(index)}
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.5s ease-out forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.25s; }
        .stagger-3 { animation-delay: 0.4s; }
        .stagger-4 { animation-delay: 0.55s; }
      `}</style>
    </section>
  );
};

export default memo(ProcessSection);