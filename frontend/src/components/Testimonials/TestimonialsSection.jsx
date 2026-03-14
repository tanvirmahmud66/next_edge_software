// import React, { useState, useEffect } from 'react';
// import { MessageCircle, Quote, Star } from 'lucide-react';

// const testimonials = [
//   {
//     name: 'Sarah Johnson',
//     role: 'CTO, HealthTech Solutions',
//     content: 'Next Edge Software transformed our healthcare platform with their AI solutions. Patient engagement increased by 60% within months.',
//     rating: 5,
//     image: 'https://images.unsplash.com/photo-1494790108777-847d6f0b8a7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
//     company: 'HealthTech Solutions',
//     accent: '#F67280'
//   },
//   {
//     name: 'Michael Chen',
//     role: 'CEO, FinCorp',
//     content: 'Their fintech expertise is unmatched. The mobile banking app they built for us has revolutionized how our customers manage finances.',
//     rating: 5,
//     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
//     company: 'FinCorp',
//     accent: '#C06C84'
//   },
//   {
//     name: 'Emily Rodriguez',
//     role: 'Director of Innovation, RetailPlus',
//     content: 'The e-commerce platform they delivered exceeded all expectations. Our online sales have tripled since launch.',
//     rating: 5,
//     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
//     company: 'RetailPlus',
//     accent: '#6C5B7B'
//   }
// ];

// const TestimonialsSection = () => {
//   const [testimonialIndex, setTestimonialIndex] = useState(0);

//   // Theme colors
//   const colors = {
//     primary: '#0F0F0F',    // Near black
//     secondary: '#232D3F',   // Dark blue-gray
//     accent1: '#005B41',     // Deep green
//     accent2: '#008170'      // Medium green-teal
//   };

//   // Auto-rotate testimonials
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   // Get current testimonial accent color
//   const currentAccent = testimonials[testimonialIndex].accent;

//   return (
//     <section 
//       className="py-20 lg:py-28 relative overflow-hidden"
//       style={{ 
//         background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent1} 100%)`
//       }}
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div 
//           className="absolute top-0 left-0 w-full h-full"
//           style={{
//             backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
//             backgroundSize: '40px 40px'
//           }}
//         />
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute top-20 left-20 w-64 h-64 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
//         style={{ background: colors.accent2, opacity: 0.15 }}
//       ></div>
//       <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"
//         style={{ background: colors.accent1, opacity: 0.15 }}
//       ></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/20">
//             <MessageCircle className="w-4 h-4" style={{ color: colors.accent2 }} />
//             <span className="text-white">Testimonials</span>
//           </div>
//           <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
//             What Our Clients Say
//           </h2>
//           <p className="text-white/80 text-lg">
//             Don't just take our word for it - hear from our satisfied clients.
//           </p>
//         </div>

//         <div className="relative max-w-4xl mx-auto">
//           {/* Quote Icon */}
//           <Quote 
//             className="absolute -top-6 -left-6 w-12 h-12 opacity-20" 
//             style={{ color: currentAccent }}
//           />
          
//           {/* Testimonial Card */}
//           <div 
//             className="backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-2xl transition-all duration-500 border relative overflow-hidden"
//             style={{ 
//               background: 'rgba(255, 255, 255, 0.1)',
//               borderColor: `${currentAccent}40`,
//             }}
//           >
//             {/* Animated gradient background */}
//             <div 
//               className="absolute inset-0 opacity-10 transition-opacity duration-500"
//               style={{ 
//                 background: `linear-gradient(135deg, ${currentAccent} 0%, transparent 100%)`,
//               }}
//             ></div>

//             <div className="flex flex-col items-center text-center relative z-10">
//               {/* Rating */}
//               <div className="flex gap-1 mb-6">
//                 {[...Array(5)].map((_, i) => (
//                   <Star 
//                     key={i} 
//                     className="w-5 h-5 fill-current" 
//                     style={{ color: currentAccent }}
//                   />
//                 ))}
//               </div>
              
//               {/* Testimonial Content */}
//               <div className="relative">
//                 <p className="text-xl lg:text-2xl text-white mb-8 italic leading-relaxed">
//                   "{testimonials[testimonialIndex].content}"
//                 </p>
//               </div>
              
//               {/* Author Info */}
//               <div className="flex items-center gap-4">
//                 <div className="relative">
//                   <img
//                     src={testimonials[testimonialIndex].image}
//                     alt={testimonials[testimonialIndex].name}
//                     className="w-16 h-16 rounded-full object-cover border-2 relative z-10"
//                     style={{ borderColor: currentAccent }}
//                   />
//                   <div 
//                     className="absolute inset-0 rounded-full blur-md -z-0"
//                     style={{ 
//                       background: currentAccent,
//                       opacity: 0.5,
//                       transform: 'scale(1.1)'
//                     }}
//                   ></div>
//                 </div>
//                 <div className="text-left">
//                   <h4 className="text-white font-bold text-lg">
//                     {testimonials[testimonialIndex].name}
//                   </h4>
//                   <p className="text-sm" style={{ color: currentAccent }}>
//                     {testimonials[testimonialIndex].role}
//                   </p>
//                   <p className="text-white/60 text-xs">
//                     {testimonials[testimonialIndex].company}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Navigation Dots */}
//           <div className="flex justify-center gap-2 mt-6">
//             {testimonials.map((testimonial, index) => (
//               <button
//                 key={index}
//                 onClick={() => setTestimonialIndex(index)}
//                 className={`h-2 rounded-full transition-all duration-300`}
//                 style={{ 
//                   width: index === testimonialIndex ? '2rem' : '0.5rem',
//                   backgroundColor: index === testimonialIndex ? testimonial.accent : 'rgba(255, 255, 255, 0.3)',
//                 }}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Company Logos Strip */}
//           <div className="flex justify-center items-center gap-8 mt-8 pt-8 border-t border-white/10">
//             {testimonials.map((testimonial, index) => (
//               <button
//                 key={index}
//                 onClick={() => setTestimonialIndex(index)}
//                 className={`text-xs font-medium transition-all duration-300 px-3 py-1 rounded-full ${
//                   index === testimonialIndex 
//                     ? 'text-white bg-white/20' 
//                     : 'text-white/40 hover:text-white/60'
//                 }`}
//                 style={{
//                   backgroundColor: index === testimonialIndex ? `${testimonial.accent}30` : 'transparent'
//                 }}
//               >
//                 {testimonial.company}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes pulse {
//           0%, 100% { opacity: 0.15; }
//           50% { opacity: 0.25; }
//         }
//         .animate-pulse {
//           animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default TestimonialsSection;






// TestimonialsSection.jsx
import React, { useState, useEffect } from 'react';
import { MessageCircle, Quote, Star } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, HealthTech Solutions',
    content: 'Next Edge Software transformed our healthcare platform with their AI solutions. Patient engagement increased by 60% within months.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108777-847d6f0b8a7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    company: 'HealthTech Solutions',
    accent: '#F67280' // Keeping these as they're client-specific accent colors
  },
  {
    name: 'Michael Chen',
    role: 'CEO, FinCorp',
    content: 'Their fintech expertise is unmatched. The mobile banking app they built for us has revolutionized how our customers manage finances.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    company: 'FinCorp',
    accent: '#C06C84'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director of Innovation, RetailPlus',
    content: 'The e-commerce platform they delivered exceeded all expectations. Our online sales have tripled since launch.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    company: 'RetailPlus',
    accent: '#6C5B7B'
  }
];

const TestimonialsSection = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  
  // Use theme hook
  const { colors: themeColors, loading, error, refreshTheme } = useTheme();

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Get current testimonial accent color
  const currentAccent = testimonials[testimonialIndex].accent;

  // Show loading state
  if (loading) {
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
        background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 50%, ${themeColors.accent1} 100%)`
      }}
    >
      {/* Error message with retry button */}
      {error && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm z-30 flex items-center gap-3">
          <span>Theme load failed: {error}</span>
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

      {/* Decorative Elements - Using theme colors */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full mix-blend-overlay filter blur-3xl animate-float"
        style={{ background: themeColors.accent2, opacity: 0.15 }}
      ></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full mix-blend-overlay filter blur-3xl animate-float animation-delay-2000"
        style={{ background: themeColors.accent1, opacity: 0.15 }}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
        style={{ background: themeColors.primary, opacity: 0.1 }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 border"
            style={{ 
              background: `${themeColors.accent2}20`,
              borderColor: `${themeColors.accent2}40`
            }}
          >
            <MessageCircle className="w-4 h-4" style={{ color: themeColors.accent2 }} />
            <span className="text-white">Testimonials</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/80 text-lg">
            Don't just take our word for it - hear from our satisfied clients.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <Quote 
            className="absolute -top-6 -left-6 w-12 h-12 opacity-20 transition-colors duration-500" 
            style={{ color: currentAccent }}
          />
          
          {/* Testimonial Card */}
          <div 
            className="backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-2xl transition-all duration-500 border relative overflow-hidden hover:shadow-3xl"
            style={{ 
              background: `linear-gradient(135deg, ${themeColors.primary}80, ${themeColors.secondary}80)`,
              borderColor: `${currentAccent}40`,
              boxShadow: `0 20px 40px -15px ${currentAccent}40`
            }}
          >
            {/* Animated gradient background */}
            <div 
              className="absolute inset-0 opacity-10 transition-opacity duration-500 animate-gradient"
              style={{ 
                background: `linear-gradient(135deg, ${currentAccent} 0%, ${themeColors.accent2} 50%, ${themeColors.accent1} 100%)`,
                backgroundSize: '200% 200%'
              }}
            ></div>

            <div className="flex flex-col items-center text-center relative z-10">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-current transition-colors duration-300" 
                    style={{ color: currentAccent }}
                  />
                ))}
              </div>
              
              {/* Testimonial Content */}
              <div className="relative">
                <p className="text-xl lg:text-2xl text-white mb-8 italic leading-relaxed">
                  "{testimonials[testimonialIndex].content}"
                </p>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <img
                    src={testimonials[testimonialIndex].image}
                    alt={testimonials[testimonialIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 relative z-10 transition-transform duration-300 group-hover:scale-110"
                    style={{ borderColor: currentAccent }}
                  />
                  <div 
                    className="absolute inset-0 rounded-full blur-md -z-0 transition-all duration-300 group-hover:scale-125"
                    style={{ 
                      background: `linear-gradient(135deg, ${currentAccent}, ${themeColors.accent2})`,
                      opacity: 0.5,
                    }}
                  ></div>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-bold text-lg">
                    {testimonials[testimonialIndex].name}
                  </h4>
                  <p className="text-sm transition-colors duration-300" style={{ color: currentAccent }}>
                    {testimonials[testimonialIndex].role}
                  </p>
                  <p className="text-white/60 text-xs">
                    {testimonials[testimonialIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 rounded-tl-lg"
                 style={{ borderColor: `${currentAccent}60` }}></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 rounded-br-lg"
                 style={{ borderColor: `${currentAccent}60` }}></div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setTestimonialIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 hover:opacity-100`}
                style={{ 
                  width: index === testimonialIndex ? '2rem' : '0.5rem',
                  backgroundColor: index === testimonialIndex ? testimonial.accent : 'rgba(255, 255, 255, 0.3)',
                  opacity: index === testimonialIndex ? 1 : 0.5
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Company Logos Strip */}
          <div className="flex justify-center items-center gap-4 mt-8 pt-8 border-t flex-wrap"
               style={{ borderColor: `${themeColors.accent2}20` }}>
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setTestimonialIndex(index)}
                className={`text-xs font-medium transition-all duration-300 px-4 py-2 rounded-full ${
                  index === testimonialIndex 
                    ? 'text-white' 
                    : 'text-white/40 hover:text-white/60'
                }`}
                style={{
                  backgroundColor: index === testimonialIndex ? `${testimonial.accent}30` : 'transparent',
                  border: `1px solid ${index === testimonialIndex ? testimonial.accent : 'transparent'}`
                }}
              >
                {testimonial.company}
              </button>
            ))}
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1" style={{ color: themeColors.accent2 }}>98%</div>
              <div className="text-xs text-white/60">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1" style={{ color: themeColors.accent1 }}>500+</div>
              <div className="text-xs text-white/60">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1" style={{ color: themeColors.accent2 }}>15+</div>
              <div className="text-xs text-white/60">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 7s infinite;
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-gradient {
          animation: gradient 10s ease infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;