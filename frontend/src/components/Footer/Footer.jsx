

// // Footer.jsx
// import React from "react";
// import {
//   Facebook,
//   Twitter,
//   Linkedin,
//   Github,
//   Instagram,
//   Mail,
//   Phone,
//   MapPin,
//   ArrowRight,
//   ChevronRight,
//   Shield,
//   Code,
//   Briefcase,
//   Users,
//   BookOpen,
//   Cpu,
//   Building2,
//   Award,
//   Clock,
//   Sparkles,
// } from "lucide-react";
// import { useTheme } from '../../hooks/useTheme';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
  
//   // Use theme hook
//   const { colors: themeColors, loading, error, refreshTheme } = useTheme();

//   // Quick links sections with theme colors
//   const footerSections = [
//     {
//       title: "Services",
//       accent: themeColors.accent2,
//       links: [
//         {
//           name: "Custom Software",
//           href: "#custom-software",
//           icon: <Code className="w-4 h-4" />,
//         },
//         {
//           name: "Web Applications",
//           href: "#web-apps",
//           icon: <Building2 className="w-4 h-4" />,
//         },
//         {
//           name: "Mobile Development",
//           href: "#mobile",
//           icon: <Cpu className="w-4 h-4" />,
//         },
//         {
//           name: "AI & Machine Learning",
//           href: "#ai-ml",
//           icon: <Cpu className="w-4 h-4" />,
//         },
//         {
//           name: "Cloud Solutions",
//           href: "#cloud",
//           icon: <Building2 className="w-4 h-4" />,
//         },
//         {
//           name: "Cybersecurity",
//           href: "#cybersecurity",
//           icon: <Shield className="w-4 h-4" />,
//         },
//       ],
//     },
//     {
//       title: "Industries",
//       accent: themeColors.accent1,
//       links: [
//         {
//           name: "Healthcare",
//           href: "#healthcare",
//           icon: <Briefcase className="w-4 h-4" />,
//         },
//         {
//           name: "Finance",
//           href: "#finance",
//           icon: <Building2 className="w-4 h-4" />,
//         },
//         {
//           name: "Retail",
//           href: "#retail",
//           icon: <Building2 className="w-4 h-4" />,
//         },
//         {
//           name: "Manufacturing",
//           href: "#manufacturing",
//           icon: <Briefcase className="w-4 h-4" />,
//         },
//         {
//           name: "Education",
//           href: "#education",
//           icon: <BookOpen className="w-4 h-4" />,
//         },
//         {
//           name: "Technology",
//           href: "#technology",
//           icon: <Cpu className="w-4 h-4" />,
//         },
//       ],
//     },
//     {
//       title: "Company",
//       accent: themeColors.secondary,
//       links: [
//         {
//           name: "About Us",
//           href: "#about",
//           icon: <Users className="w-4 h-4" />,
//         },
//         {
//           name: "Leadership",
//           href: "#leadership",
//           icon: <Users className="w-4 h-4" />,
//         },
//         {
//           name: "Careers",
//           href: "#careers",
//           icon: <Briefcase className="w-4 h-4" />,
//         },
//         { name: "Blog", href: "#blog", icon: <BookOpen className="w-4 h-4" /> },
//         { name: "News", href: "#news", icon: <BookOpen className="w-4 h-4" /> },
//         {
//           name: "Case Studies",
//           href: "#case-studies",
//           icon: <Award className="w-4 h-4" />,
//         },
//       ],
//     },
//     {
//       title: "Support",
//       accent: themeColors.primary,
//       links: [
//         {
//           name: "Contact Us",
//           href: "#contact",
//           icon: <Mail className="w-4 h-4" />,
//         },
//         {
//           name: "Help Center",
//           href: "#help",
//           icon: <Users className="w-4 h-4" />,
//         },
//         { name: "FAQs", href: "#faqs", icon: <BookOpen className="w-4 h-4" /> },
//         {
//           name: "Privacy Policy",
//           href: "#privacy",
//           icon: <Shield className="w-4 h-4" />,
//         },
//         {
//           name: "Terms of Service",
//           href: "#terms",
//           icon: <Code className="w-4 h-4" />,
//         },
//         {
//           name: "Cookie Policy",
//           href: "#cookies",
//           icon: <Clock className="w-4 h-4" />,
//         },
//       ],
//     },
//   ];

//   // Social media links with theme colors
//   const socialLinks = [
//     {
//       name: "Facebook",
//       href: "#",
//       icon: <Facebook className="w-5 h-5" />,
//       color: themeColors.accent2,
//     },
//     {
//       name: "Twitter",
//       href: "#",
//       icon: <Twitter className="w-5 h-5" />,
//       color: themeColors.accent1,
//     },
//     {
//       name: "LinkedIn",
//       href: "#",
//       icon: <Linkedin className="w-5 h-5" />,
//       color: themeColors.secondary,
//     },
//     {
//       name: "GitHub",
//       href: "#",
//       icon: <Github className="w-5 h-5" />,
//       color: themeColors.primary,
//     },
//     {
//       name: "Instagram",
//       href: "#",
//       icon: <Instagram className="w-5 h-5" />,
//       color: themeColors.accent2,
//     },
//   ];

//   // Certifications and badges
//   const certifications = [
//     {
//       name: "ISO 27001 Certified",
//       icon: <Shield className="w-4 h-4" />,
//       color: themeColors.accent2,
//     },
//     {
//       name: "GDPR Compliant",
//       icon: <Shield className="w-4 h-4" />,
//       color: themeColors.accent1,
//     },
//     {
//       name: "HIPAA Compliant",
//       icon: <Shield className="w-4 h-4" />,
//       color: themeColors.secondary,
//     },
//     {
//       name: "AWS Partner",
//       icon: <Building2 className="w-4 h-4" />,
//       color: themeColors.primary,
//     },
//   ];

//   // Show loading state
//   if (loading) {
//     return (
//       <footer className="bg-gray-900 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-center items-center min-h-[400px]">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
//           </div>
//         </div>
//       </footer>
//     );
//   }

//   return (
//     <footer className="relative overflow-hidden">
//       {/* ====== PREMIUM MODERN BACKGROUND (SAME AS SHOWCASE GRID) ====== */}
//       <div className="absolute inset-0 bg-[#030712]">
//         {/* Layer 1: Noise Texture Overlay */}
//         <div
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//             backgroundRepeat: "repeat",
//             backgroundSize: "200px 200px",
//           }}
//         />
//         {/* Layer 2: Main Grid Lines (80px) */}
//         <div className="absolute inset-0">
//           <div
//             className="absolute inset-0 animate-grid-primary"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
//               backgroundSize: "100px 100px",
//             }}
//           />
//         </div>
//         {/* Layer 3: Fine Grid (20px) */}
//         <div className="absolute inset-0">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
//               backgroundSize: "25px 25px",
//             }}
//           />
//         </div>
//         <div
//           className="absolute animate-orb-2"
//           style={{
//             bottom: "-15%",
//             left: "-5%",
//             width: "700px",
//             height: "700px",
//             borderRadius: "50%",
//             background:
//               "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 25%, rgba(139, 92, 246, 0.01) 50%, transparent 70%)",
//             filter: "blur(100px)",
//           }}
//         />
//         <div
//           className="absolute animate-orb-3"
//           style={{
//             top: "40%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: "500px",
//             height: "500px",
//             borderRadius: "50%",
//             background:
//               "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.02) 30%, transparent 70%)",
//             filter: "blur(120px)",
//           }}
//         />
//         {/* Edge Vignette */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(ellipse at center, transparent 50%, rgba(3, 7, 18, 0.6) 100%)",
//           }}
//         />
//       </div>
//       {/* ====== END BACKGROUND ====== */}

//       {/* Error message with retry button (kept from original) */}
//       {error && (
//         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm z-30 flex items-center gap-3">
//           <span>Theme load failed: {error}</span>
//           <button 
//             onClick={refreshTheme}
//             className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs transition-colors"
//           >
//             Retry
//           </button>
//         </div>
//       )}

//       {/* Original floating sparkles (kept) */}
//       <div className="absolute top-20 left-10 opacity-10 animate-float">
//         <Sparkles className="w-12 h-12" style={{ color: themeColors.accent2 }} />
//       </div>
//       <div className="absolute bottom-20 right-10 opacity-10 animate-float animation-delay-2000">
//         <Sparkles className="w-12 h-12" style={{ color: themeColors.accent1 }} />
//       </div>

//       {/* Original animated particles (kept) */}
//       {[...Array(8)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute rounded-full animate-ping"
//           style={{
//             width: Math.random() * 4 + 2 + 'px',
//             height: Math.random() * 4 + 2 + 'px',
//             backgroundColor: i % 2 === 0 ? themeColors.accent2 : themeColors.accent1,
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${i * 0.3}s`,
//             opacity: 0.1
//           }}
//         />
//       ))}

//       {/* Decorative top gradient line (original) */}
//       <div
//         className="absolute top-0 left-0 right-0 h-1 z-10"
//         style={{
//           background: `linear-gradient(90deg, ${themeColors.accent2}, ${themeColors.accent1}, ${themeColors.secondary}, ${themeColors.primary})`,
//         }}
//       ></div>

//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
//         {/* Newsletter Section */}
//         <div
//           className="mb-12 pb-12"
//           style={{ borderBottom: `1px solid ${themeColors.accent1}40` }}
//         >
//           <div className="grid lg:grid-cols-2 gap-8 items-center">
//             <div>
//               <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
//                 Stay <span style={{ color: themeColors.accent2 }}>Updated</span>
//               </h3>
//               <p className="text-white/70 text-sm lg:text-base">
//                 Subscribe to our newsletter for the latest insights, trends, and
//                 innovations in technology.
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-3">
//               <div className="flex-1 relative group">
//                 <Mail
//                   className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-all group-hover:scale-110"
//                   style={{ color: themeColors.accent2 }}
//                 />
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full pl-12 pr-4 py-3 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all"
//                   style={{
//                     background: "rgba(255, 255, 255, 0.1)",
//                     border: `1px solid ${themeColors.accent1}40`,
//                     backdropFilter: "blur(10px)",
//                     boxShadow: `0 4px 12px ${themeColors.primary}40`,
//                   }}
//                 />
//               </div>
//               <button
//                 className="px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group relative overflow-hidden"
//                 style={{
//                   background: `linear-gradient(135deg, ${themeColors.accent2}, ${themeColors.accent1})`,
//                   color: "white",
//                 }}
//               >
//                 <span className="relative z-10">Subscribe</span>
//                 <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
//                 <div 
//                   className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
//                   style={{ background: 'white' }}
//                 ></div>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Footer Main Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
//           {/* Company Info (unchanged) */}
//           <div className="lg:col-span-1">
//             <div className="mb-6">
//               <a
//                 href="/"
//                 className="text-2xl font-bold tracking-tight inline-block group"
//               >
//                 <span className="relative" style={{ color: themeColors.accent2 }}>
//                   Next Edge
//                   <span
//                     className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
//                     style={{ backgroundColor: themeColors.accent2 }}
//                   ></span>
//                 </span>
//                 <span className="text-white"> Software</span>
//               </a>
//             </div>

//             <p className="text-white/70 text-sm leading-relaxed mb-6">
//               Empowering businesses with cutting-edge software solutions. We
//               transform ideas into innovative digital experiences that drive
//               growth and success.
//             </p>

//             {/* Contact Info */}
//             <div className="space-y-3 mb-6">
//               <a
//                 href="tel:+18001234567"
//                 className="flex items-center space-x-3 text-white/60 hover:text-white text-sm transition-colors group"
//               >
//                 <Phone
//                   className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-transform"
//                   style={{ color: themeColors.accent2 }}
//                 />
//                 <span className="group-hover:translate-x-1 transition-transform">+8801701744799</span>
//               </a>
//               <a
//                 href="mailto:nextedgesoftware@gmail.com"
//                 className="flex items-center space-x-3 text-white/60 hover:text-white text-sm transition-colors group"
//               >
//                 <Mail
//                   className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-transform"
//                   style={{ color: themeColors.accent1 }}
//                 />
//                 <span className="group-hover:translate-x-1 transition-transform">nextedgesoftware@gmail.com</span>
//               </a>
//               <div className="flex items-start space-x-3 text-white/60 text-sm group">
//                 <MapPin
//                   className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
//                   style={{ color: themeColors.secondary }}
//                 />
//                 <span>
//                   Rampura
//                   <br />
//                   Dhaka, Bangladesh
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links Sections (unchanged) */}
//           <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6">
//             {footerSections.map((section) => (
//               <div key={section.title}>
//                 <h4
//                   className="text-white font-semibold text-sm uppercase tracking-wider mb-4"
//                   style={{ color: section.accent }}
//                 >
//                   {section.title}
//                 </h4>
//                 <ul className="space-y-2">
//                   {section.links.map((link) => (
//                     <li key={link.name}>
//                       <a
//                         href={link.href}
//                         className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-all group"
//                       >
//                         <span
//                           className="opacity-70 group-hover:opacity-100 transition-all group-hover:scale-110"
//                           style={{ color: section.accent }}
//                         >
//                           {link.icon}
//                         </span>
//                         <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
//                         <ChevronRight
//                           className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all"
//                           style={{ color: section.accent }}
//                         />
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* Social & Trust (unchanged) */}
//           <div className="lg:col-span-1">
//             <h4
//               className="text-white font-semibold text-sm uppercase tracking-wider mb-4"
//               style={{ color: themeColors.accent2 }}
//             >
//               Connect With Us
//             </h4>

//             {/* Social Links */}
//             <div className="flex flex-wrap gap-3 mb-6">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   className="p-3 rounded-lg transition-all duration-200 transform hover:scale-110 hover:-translate-y-1 backdrop-blur-sm border relative overflow-hidden group"
//                   style={{
//                     background: "rgba(255, 255, 255, 0.1)",
//                     borderColor: `${social.color}40`,
//                     color: social.color,
//                   }}
//                   aria-label={social.name}
//                 >
//                   {social.icon}
//                   <span 
//                     className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
//                     style={{ background: social.color }}
//                   ></span>
//                 </a>
//               ))}
//             </div>

//             {/* Live Chat Indicator */}
//             <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: themeColors.accent2 }}></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: themeColors.accent2 }}></span>
//               </span>
//               Live chat available 24/7
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar (unchanged) */}
//         <div
//           className="pt-8 mt-8"
//           style={{ borderTop: `1px solid ${themeColors.accent1}40` }}
//         >
//           <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
//             {/* Copyright */}
//             <div className="text-white/60 text-sm text-center lg:text-left">
//               © {currentYear} Next Edge Software. All rights reserved.
//             </div>

//             {/* Legal Links */}
//             <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-xs">
//               <a
//                 href="#privacy"
//                 className="text-white/60 hover:text-white transition-colors hover:underline"
//                 style={{ textDecorationColor: themeColors.accent2 }}
//               >
//                 Privacy Policy
//               </a>
//               <a
//                 href="#terms"
//                 className="text-white/60 hover:text-white transition-colors hover:underline"
//                 style={{ textDecorationColor: themeColors.accent1 }}
//               >
//                 Terms of Service
//               </a>
//               <a
//                 href="#cookies"
//                 className="text-white/60 hover:text-white transition-colors hover:underline"
//                 style={{ textDecorationColor: themeColors.accent2 }}
//               >
//                 Cookie Settings
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Back to Top Button (unchanged) */}
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="fixed bottom-8 right-8 text-white p-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 hover:-translate-y-1 z-50 lg:hidden backdrop-blur-sm border group"
//         style={{
//           background: `linear-gradient(135deg, ${themeColors.accent2}, ${themeColors.accent1})`,
//           borderColor: `${themeColors.accent2}60`,
//         }}
//         aria-label="Back to top"
//       >
//         <ArrowRight className="w-5 h-5 rotate-[-90deg] group-hover:translate-y-[-2px] transition-transform" />
//       </button>

//       <style jsx>{`
//         /* Original keyframes (kept) */
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
//         @keyframes ping {
//           75%, 100% {
//             transform: scale(2);
//             opacity: 0;
//           }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-ping {
//           animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }

//         /* New background keyframes */
//         @keyframes gridPrimaryFade {
//           0%, 100% { opacity: 0.15; }
//           50% { opacity: 0.3; }
//         }
        
//         @keyframes dotsFade {
//           0%, 100% { opacity: 0.02; }
//           50% { opacity: 0.04; }
//         }
        
//         @keyframes floatOrb1 {
//           0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
//           25% { transform: translate(50px, -30px) scale(1.1); opacity: 0.9; }
//           50% { transform: translate(-20px, -60px) scale(0.95); opacity: 0.6; }
//           75% { transform: translate(-40px, -10px) scale(1.05); opacity: 0.8; }
//         }
        
//         @keyframes floatOrb2 {
//           0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
//           25% { transform: translate(-40px, 30px) scale(1.08); opacity: 0.85; }
//           50% { transform: translate(20px, 50px) scale(0.92); opacity: 0.6; }
//           75% { transform: translate(30px, -20px) scale(1.06); opacity: 0.8; }
//         }

//         @keyframes floatOrb3 {
//           0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
//           50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.9; }
//         }
        
//         .animate-grid-primary {
//           animation: gridPrimaryFade 5s ease-in-out infinite;
//         }

//         .animate-dots {
//           animation: dotsFade 6s ease-in-out infinite;
//         }

//         .animate-orb-1 {
//           animation: floatOrb1 15s ease-in-out infinite;
//         }

//         .animate-orb-2 {
//           animation: floatOrb2 18s ease-in-out infinite;
//         }

//         .animate-orb-3 {
//           animation: floatOrb3 12s ease-in-out infinite;
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;


























// Footer.jsx
import React, { memo } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ChevronRight,
  Shield,
  Code,
  Briefcase,
  Users,
  BookOpen,
  Cpu,
  Building2,
  Award,
  Clock,
  Sparkles,
  Send,
} from "lucide-react";
import { useTheme } from '../../hooks/useTheme';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Use theme hook
  const { colors: themeColors, loading, error, refreshTheme } = useTheme();
  
  const primaryColor = themeColors?.accent2 || '#008071';
  const secondaryColor = themeColors?.accent1 || '#005B41';

  // Quick links sections
  const footerSections = [
    {
      title: "Services",
      accent: primaryColor,
      links: [
        { name: "Custom Software", href: "#custom-software", icon: <Code className="w-4 h-4" /> },
        { name: "Web Applications", href: "#web-apps", icon: <Building2 className="w-4 h-4" /> },
        { name: "Mobile Development", href: "#mobile", icon: <Cpu className="w-4 h-4" /> },
        { name: "AI & Machine Learning", href: "#ai-ml", icon: <Cpu className="w-4 h-4" /> },
        { name: "Cloud Solutions", href: "#cloud", icon: <Building2 className="w-4 h-4" /> },
        { name: "Cybersecurity", href: "#cybersecurity", icon: <Shield className="w-4 h-4" /> },
      ],
    },
    {
      title: "Industries",
      accent: secondaryColor,
      links: [
        { name: "Healthcare", href: "#healthcare", icon: <Briefcase className="w-4 h-4" /> },
        { name: "Finance", href: "#finance", icon: <Building2 className="w-4 h-4" /> },
        { name: "Retail", href: "#retail", icon: <Building2 className="w-4 h-4" /> },
        { name: "Manufacturing", href: "#manufacturing", icon: <Briefcase className="w-4 h-4" /> },
        { name: "Education", href: "#education", icon: <BookOpen className="w-4 h-4" /> },
        { name: "Technology", href: "#technology", icon: <Cpu className="w-4 h-4" /> },
      ],
    },
    {
      title: "Company",
      accent: primaryColor,
      links: [
        { name: "About Us", href: "#about", icon: <Users className="w-4 h-4" /> },
        { name: "Leadership", href: "#leadership", icon: <Users className="w-4 h-4" /> },
        { name: "Careers", href: "#careers", icon: <Briefcase className="w-4 h-4" /> },
        { name: "Blog", href: "#blog", icon: <BookOpen className="w-4 h-4" /> },
        { name: "News", href: "#news", icon: <BookOpen className="w-4 h-4" /> },
        { name: "Case Studies", href: "#case-studies", icon: <Award className="w-4 h-4" /> },
      ],
    },
    {
      title: "Support",
      accent: secondaryColor,
      links: [
        { name: "Contact Us", href: "#contact", icon: <Mail className="w-4 h-4" /> },
        { name: "Help Center", href: "#help", icon: <Users className="w-4 h-4" /> },
        { name: "FAQs", href: "#faqs", icon: <BookOpen className="w-4 h-4" /> },
        { name: "Privacy Policy", href: "#privacy", icon: <Shield className="w-4 h-4" /> },
        { name: "Terms of Service", href: "#terms", icon: <Code className="w-4 h-4" /> },
        { name: "Cookie Policy", href: "#cookies", icon: <Clock className="w-4 h-4" /> },
      ],
    },
  ];

  // Social media links
  const socialLinks = [
    { name: "Facebook", href: "#", icon: <Facebook className="w-5 h-5" /> },
    { name: "Twitter", href: "#", icon: <Twitter className="w-5 h-5" /> },
    { name: "LinkedIn", href: "#", icon: <Linkedin className="w-5 h-5" /> },
    { name: "GitHub", href: "#", icon: <Github className="w-5 h-5" /> },
    { name: "Instagram", href: "#", icon: <Instagram className="w-5 h-5" /> },
  ];

  // Show loading state
  if (loading) {
    return (
      <footer className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-gray-200 border-t-[#008071] animate-spin"></div>
              </div>
              <span className="text-sm text-gray-500">Loading footer...</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(0, 128, 113, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Error message with retry button */}
      {error && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-xl border border-red-200 text-gray-900 px-4 py-3 rounded-xl text-sm z-30 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Error:</span>
            <span className="text-gray-600">{error}</span>
          </div>
          <button 
            onClick={refreshTheme}
            className="ml-2 px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: primaryColor }}
          >
            Retry
          </button>
        </div>
      )}

      {/* Decorative top line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 z-10"
        style={{
          background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor}, ${primaryColor})`,
        }}
      ></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-gray-200">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                Stay <span style={{ color: primaryColor }}>Updated</span>
              </h3>
              <p className="text-gray-600 text-sm lg:text-base">
                Subscribe to our newsletter for the latest insights, trends, and
                innovations in technology.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative group">
                <Mail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-all group-hover:scale-110"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all border border-gray-300 focus:border-transparent"
                  style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  }}
                />
              </div>
              <button
                className="px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group text-white"
                style={{ backgroundColor: primaryColor }}
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <a
                href="/"
                className="text-2xl font-bold tracking-tight inline-block group"
              >
                <span className="relative" style={{ color: primaryColor }}>
                  Next Edge
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: primaryColor }}
                  ></span>
                </span>
                <span className="text-gray-900"> Software</span>
              </a>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Empowering businesses with cutting-edge software solutions. We
              transform ideas into innovative digital experiences that drive
              growth and success.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="tel:+8801701744799"
                className="flex items-center space-x-3 text-gray-500 hover:text-gray-900 text-sm transition-colors group"
              >
                <Phone
                  className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-transform"
                  style={{ color: primaryColor }}
                />
                <span className="group-hover:translate-x-1 transition-transform">+8801701744799</span>
              </a>
              <a
                href="mailto:nextedgesoftware@gmail.com"
                className="flex items-center space-x-3 text-gray-500 hover:text-gray-900 text-sm transition-colors group"
              >
                <Mail
                  className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-transform"
                  style={{ color: secondaryColor }}
                />
                <span className="group-hover:translate-x-1 transition-transform">nextedgesoftware@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-500 text-sm group">
                <MapPin
                  className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ color: primaryColor }}
                />
                <span>
                  Rampura
                  <br />
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links Sections */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4
                  className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-4"
                >
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm transition-all group"
                      >
                        <span
                          className="opacity-70 group-hover:opacity-100 transition-all group-hover:scale-110"
                          style={{ color: section.accent }}
                        >
                          {link.icon}
                        </span>
                        <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                        <ChevronRight
                          className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all"
                          style={{ color: section.accent }}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="lg:col-span-1">
            <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-4">
              Connect With Us
            </h4>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-3 rounded-xl transition-all duration-200 transform hover:scale-110 hover:-translate-y-1 border group hover:shadow-md"
                  style={{
                    backgroundColor: '#F9FAFB',
                    borderColor: '#E5E7EB',
                    color: '#6B7280',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${primaryColor}10`;
                    e.currentTarget.style.borderColor = primaryColor;
                    e.currentTarget.style.color = primaryColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F9FAFB';
                    e.currentTarget.style.borderColor = '#E5E7EB';
                    e.currentTarget.style.color = '#6B7280';
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Live Chat Indicator */}
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: primaryColor }}></span>
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: primaryColor }}></span>
              </span>
              Live chat available 24/7
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-500 text-sm text-center lg:text-left">
              © {currentYear} Next Edge Software. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-xs">
              <a
                href="#privacy"
                className="text-gray-500 hover:text-gray-900 transition-colors hover:underline"
                style={{ textDecorationColor: primaryColor }}
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-500 hover:text-gray-900 transition-colors hover:underline"
                style={{ textDecorationColor: secondaryColor }}
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="text-gray-500 hover:text-gray-900 transition-colors hover:underline"
                style={{ textDecorationColor: primaryColor }}
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 text-white p-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 hover:-translate-y-1 z-50 border group"
        style={{
          backgroundColor: primaryColor,
          borderColor: `${primaryColor}60`,
        }}
        aria-label="Back to top"
      >
        <ArrowRight className="w-5 h-5 rotate-[-90deg] group-hover:translate-y-[-2px] transition-transform" />
      </button>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </footer>
  );
};

export default memo(Footer);






