// import React from 'react';
// import { BookOpen, ArrowRight, Cpu, Cloud, Shield } from 'lucide-react';

// const blogPosts = [
//   {
//     title: 'The Future of AI in Enterprise Software',
//     excerpt: 'Explore how artificial intelligence is reshaping business applications and driving innovation.',
//     author: 'Dr. James Wilson',
//     role: 'AI Research Lead',
//     date: 'Dec 15, 2024',
//     readTime: '5 min read',
//     category: 'AI & ML',
//     image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     icon: <Cpu className="w-4 h-4" />,
//     accent: '#F67280'
//   },
//   {
//     title: 'Cloud Migration Best Practices',
//     excerpt: 'Learn the key strategies for successful cloud migration and digital transformation.',
//     author: 'Maria Garcia',
//     role: 'Cloud Architect',
//     date: 'Dec 10, 2024',
//     readTime: '7 min read',
//     category: 'Cloud',
//     image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     icon: <Cloud className="w-4 h-4" />,
//     accent: '#C06C84'
//   },
//   {
//     title: 'Cybersecurity Trends 2025',
//     excerpt: 'Stay ahead of threats with the latest cybersecurity trends and protection strategies.',
//     author: 'Robert Taylor',
//     role: 'Security Expert',
//     date: 'Dec 5, 2024',
//     readTime: '6 min read',
//     category: 'Security',
//     image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     icon: <Shield className="w-4 h-4" />,
//     accent: '#6C5B7B'
//   }
// ];

// const BlogSection = () => {
//   // Theme colors
//   const colors = {
//     primary: '#0F0F0F',    // Near black
//     secondary: '#232D3F',   // Dark blue-gray
//     accent1: '#005B41',     // Deep green
//     accent2: '#008170'      // Medium green-teal
//   };

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
//       <div className="absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
//         style={{ background: colors.accent2, opacity: 0.15 }}
//       ></div>
//       <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"
//         style={{ background: colors.accent1, opacity: 0.15 }}
//       ></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
//           <div>
//             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/20">
//               <BookOpen className="w-4 h-4" style={{ color: colors.accent2 }} />
//               <span className="text-white">Blog</span>
//             </div>
//             <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
//               Latest Insights
//             </h2>
//             <p className="text-white/80 text-lg">
//               Stay updated with the latest trends and technologies.
//             </p>
//           </div>
//           <a
//             href="#all-posts"
//             className="mt-4 lg:mt-0 inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all group"
//             style={{ color: colors.accent2 }}
//           >
//             View All Posts
//             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </a>
//         </div>

//         {/* Blog Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {blogPosts.map((post, index) => (
//             <div
//               key={index}
//               className="group backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border"
//               style={{ 
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 borderColor: 'rgba(255, 255, 255, 0.2)',
//               }}
//             >
//               {/* Image Container */}
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
                
//                 {/* Gradient Overlay */}
//                 <div 
//                   className="absolute inset-0 opacity-60"
//                   style={{ 
//                     background: `linear-gradient(135deg, ${post.accent} 0%, transparent 100%)`
//                   }}
//                 ></div>
                
//                 {/* Category Badge */}
//                 <div 
//                   className="absolute top-4 left-4 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1 border"
//                   style={{ 
//                     background: `${post.accent}30`,
//                     borderColor: `${post.accent}60`
//                   }}
//                 >
//                   <span style={{ color: post.accent }}>{post.icon}</span>
//                   <span>{post.category}</span>
//                 </div>
//               </div>
              
//               {/* Content */}
//               <div className="p-6">
//                 <div className="flex items-center gap-2 text-xs text-white/60 mb-3">
//                   <span>{post.date}</span>
//                   <span>•</span>
//                   <span>{post.readTime}</span>
//                 </div>
                
//                 <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white line-clamp-2"
//                     style={{ color: 'white' }}>
//                   {post.title}
//                 </h3>
                
//                 <p className="text-white/70 text-sm mb-4 line-clamp-2">
//                   {post.excerpt}
//                 </p>
                
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div 
//                       className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs"
//                       style={{ background: post.accent }}
//                     >
//                       {post.author.charAt(0)}
//                     </div>
//                     <div>
//                       <p className="text-white text-xs font-medium">{post.author}</p>
//                       <p className="text-white/60 text-xs">{post.role}</p>
//                     </div>
//                   </div>
//                   <a
//                     href="#read-more"
//                     className="transition-colors"
//                     style={{ color: post.accent }}
//                     onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
//                     onMouseLeave={(e) => e.currentTarget.style.color = post.accent}
//                   >
//                     <ArrowRight className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>

//               {/* Bottom Accent Line */}
//               <div 
//                 className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
//                 style={{ background: post.accent }}
//               ></div>
//             </div>
//           ))}
//         </div>

//         {/* Newsletter Signup */}
//         <div className="mt-12 text-center">
//           <div 
//             className="inline-flex items-center gap-4 p-1 rounded-full"
//             style={{ background: 'rgba(255, 255, 255, 0.1)' }}
//           >
//             <input
//               type="email"
//               placeholder="Subscribe to our newsletter"
//               className="bg-transparent px-4 py-2 text-white placeholder-white/50 text-sm focus:outline-none"
//             />
//             <button
//               className="px-4 py-2 rounded-full text-white text-sm font-medium transition-all hover:shadow-lg"
//               style={{ background: colors.accent2 }}
//             >
//               Subscribe
//             </button>
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

// export default BlogSection;







// BlogSection.jsx
import React from 'react';
import { BookOpen, ArrowRight, Cpu, Cloud, Shield } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const blogPosts = [
  {
    title: 'The Future of AI in Enterprise Software',
    excerpt: 'Explore how artificial intelligence is reshaping business applications and driving innovation.',
    author: 'Dr. James Wilson',
    role: 'AI Research Lead',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    category: 'AI & ML',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Cpu className="w-4 h-4" />,
    accent: '#F67280' // Keeping these as they're post-specific accent colors
  },
  {
    title: 'Cloud Migration Best Practices',
    excerpt: 'Learn the key strategies for successful cloud migration and digital transformation.',
    author: 'Maria Garcia',
    role: 'Cloud Architect',
    date: 'Dec 10, 2024',
    readTime: '7 min read',
    category: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Cloud className="w-4 h-4" />,
    accent: '#C06C84'
  },
  {
    title: 'Cybersecurity Trends 2025',
    excerpt: 'Stay ahead of threats with the latest cybersecurity trends and protection strategies.',
    author: 'Robert Taylor',
    role: 'Security Expert',
    date: 'Dec 5, 2024',
    readTime: '6 min read',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Shield className="w-4 h-4" />,
    accent: '#6C5B7B'
  }
];

const BlogSection = () => {
  // Use theme hook
  const { colors: themeColors, loading, error, refreshTheme } = useTheme();

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
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-overlay filter blur-3xl animate-float"
        style={{ background: themeColors.accent2, opacity: 0.15 }}
      ></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full mix-blend-overlay filter blur-3xl animate-float animation-delay-2000"
        style={{ background: themeColors.accent1, opacity: 0.15 }}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
        style={{ background: themeColors.primary, opacity: 0.1 }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div>
            <div 
              className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 border"
              style={{ 
                background: `${themeColors.accent2}20`,
                borderColor: `${themeColors.accent2}40`
              }}
            >
              <BookOpen className="w-4 h-4" style={{ color: themeColors.accent2 }} />
              <span className="text-white">Blog</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              Latest Insights
            </h2>
            <p className="text-white/80 text-lg">
              Stay updated with the latest trends and technologies.
            </p>
          </div>
          <a
            href="#all-posts"
            className="mt-4 lg:mt-0 inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all group px-4 py-2 rounded-full"
            style={{ 
              color: themeColors.accent2,
              background: `${themeColors.accent2}10`,
              border: `1px solid ${themeColors.accent2}30`
            }}
          >
            View All Posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border"
              style={{ 
                background: `linear-gradient(135deg, ${themeColors.primary}80, ${themeColors.secondary}80)`,
                borderColor: `${post.accent}40`,
                boxShadow: `0 8px 32px ${themeColors.primary}40`
              }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-70"
                  style={{ 
                    background: `linear-gradient(135deg, ${post.accent} 0%, ${themeColors.primary} 100%)`
                  }}
                ></div>
                
                {/* Category Badge */}
                <div 
                  className="absolute top-4 left-4 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1 border z-10"
                  style={{ 
                    background: `${post.accent}30`,
                    borderColor: `${post.accent}60`
                  }}
                >
                  <span style={{ color: post.accent }}>{post.icon}</span>
                  <span>{post.category}</span>
                </div>

                {/* Read Time Badge */}
                <div 
                  className="absolute top-4 right-4 backdrop-blur-md px-2 py-1 rounded-full text-xs text-white/80 border z-10"
                  style={{ 
                    background: `${themeColors.primary}60`,
                    borderColor: `${themeColors.accent2}40`
                  }}
                >
                  {post.readTime}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-white/60 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" style={{ color: themeColors.accent2 }} />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white line-clamp-2 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs transition-transform group-hover:scale-110"
                      style={{ 
                        background: `linear-gradient(135deg, ${post.accent}, ${themeColors.accent2})`,
                      }}
                    >
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white text-xs font-medium">{post.author}</p>
                      <p className="text-white/60 text-xs">{post.role}</p>
                    </div>
                  </div>
                  <a
                    href="#read-more"
                    className="transition-all duration-300 hover:scale-110"
                    style={{ color: post.accent }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = themeColors.accent2;
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = post.accent;
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ 
                  background: `linear-gradient(90deg, ${post.accent}, ${themeColors.accent2}, ${themeColors.accent1})`
                }}
              ></div>

              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                style={{ 
                  background: post.accent,
                  filter: 'blur(20px)'
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-white mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Get the latest insights delivered straight to your inbox
            </p>
            <div 
              className="flex items-center gap-2 p-1 rounded-full backdrop-blur-sm border"
              style={{ 
                background: `${themeColors.primary}60`,
                borderColor: `${themeColors.accent2}40`
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-4 py-2 text-white placeholder-white/50 text-sm focus:outline-none"
              />
              <button
                className="px-6 py-2 rounded-full text-white text-sm font-medium transition-all hover:shadow-lg hover:scale-105 transform"
                style={{ 
                  background: `linear-gradient(135deg, ${themeColors.accent2}, ${themeColors.accent1})`,
                }}
              >
                Subscribe
              </button>
            </div>
            <p className="text-white/40 text-xs mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 pt-8 border-t flex justify-center items-center gap-8 flex-wrap"
             style={{ borderColor: `${themeColors.accent2}20` }}>
          <div className="text-center">
            <div className="text-2xl font-bold text-white" style={{ color: themeColors.accent2 }}>50+</div>
            <div className="text-xs text-white/60">Articles Published</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white" style={{ color: themeColors.accent1 }}>10k+</div>
            <div className="text-xs text-white/60">Monthly Readers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white" style={{ color: themeColors.accent2 }}>5+</div>
            <div className="text-xs text-white/60">Expert Contributors</div>
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
        .animate-float {
          animation: float 7s infinite;
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

export default BlogSection;