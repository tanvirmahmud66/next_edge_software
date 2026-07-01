

// // // ContactPage.jsx
// // import React, { useState, useEffect } from 'react';
// // import { 
// //   Mail, 
// //   Phone, 
// //   MapPin, 
// //   Send, 
// //   Clock, 
// //   CheckCircle, 
// //   AlertCircle,
// //   Linkedin,
// //   Twitter,
// //   Github,
// //   MessageSquare,
// //   Headphones,
// //   Users,
// //   Facebook,
// //   Youtube,
// //   Globe,
// //   Award,
// //   TrendingUp,
// //   Star,
// //   Shield,
// //   Zap,
// //   Target
// // } from 'lucide-react';
// // import { useTheme } from '../hooks/useTheme';

// // const ContactPage = () => {
// //   // Use theme hook
// //   const { colors, loading: themeLoading, error: themeError, refreshTheme } = useTheme();

// //   // State for contact data
// //   const [contactData, setContactData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   const [formData, setFormData] = useState({
// //     full_name: '',
// //     email_address: '',
// //     company_name: '',
// //     phone_number: '',
// //     service_interested_in: '',
// //     message: ''
// //   });

// //   const [formStatus, setFormStatus] = useState({
// //     submitted: false,
// //     success: false,
// //     message: ''
// //   });

// //   const [formSubmitting, setFormSubmitting] = useState(false);

// //   // Array of possible icons for stats
// //   const iconComponents = [
// //     <Headphones className="w-5 h-5" />,
// //     <Users className="w-5 h-5" />,
// //     <MessageSquare className="w-5 h-5" />,
// //     <Award className="w-5 h-5" />,
// //     <TrendingUp className="w-5 h-5" />,
// //     <Star className="w-5 h-5" />,
// //     <Shield className="w-5 h-5" />,
// //     <Zap className="w-5 h-5" />,
// //     <Target className="w-5 h-5" />,
// //     <Clock className="w-5 h-5" />
// //   ];

// //   // Fetch contact data from Frappe
// //   useEffect(() => {
// //     fetchContactData();
// //   }, []);

// //   const fetchContactData = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await fetch('/api/resource/Contact%20Us/Contact%20Us', {
// //         method: 'GET',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         credentials: 'include'
// //       });

// //       if (!response.ok) {
// //         throw new Error('Failed to fetch contact data');
// //       }

// //       const data = await response.json();
// //       setContactData(data.data);
// //       setError(null);
// //     } catch (err) {
// //       console.error('Error fetching contact data:', err);
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setFormSubmitting(true);
    
// //     try {
// //       const leadData = {
// //         full_name: formData.full_name,
// //         email_address: formData.email_address,
// //         company_name: formData.company_name,
// //         phone_number: formData.phone_number,
// //         service_interested_in: formData.service_interested_in,
// //         message: formData.message
// //       };

// //       const response = await fetch('/api/resource/Website%20Lead', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         credentials: 'include',
// //         body: JSON.stringify(leadData)
// //       });

// //       if (!response.ok) {
// //         throw new Error('Failed to submit form');
// //       }

// //       const result = await response.json();
      
// //       setFormStatus({
// //         submitted: true,
// //         success: true,
// //         message: 'Thank you for reaching out! We\'ll get back to you within 24 hours.'
// //       });
      
// //       setFormData({
// //         full_name: '',
// //         email_address: '',
// //         company_name: '',
// //         phone_number: '',
// //         service_interested_in: '',
// //         message: ''
// //       });

// //       setTimeout(() => {
// //         setFormStatus({
// //           submitted: false,
// //           success: false,
// //           message: ''
// //         });
// //       }, 5000);

// //     } catch (err) {
// //       console.error('Error submitting form:', err);
// //       setFormStatus({
// //         submitted: true,
// //         success: false,
// //         message: 'Something went wrong. Please try again later.'
// //       });

// //       setTimeout(() => {
// //         setFormStatus({
// //           submitted: false,
// //           success: false,
// //           message: ''
// //         });
// //       }, 5000);
// //     } finally {
// //       setFormSubmitting(false);
// //     }
// //   };

// //   const getRandomIcon = (index) => {
// //     return iconComponents[index % iconComponents.length];
// //   };

// //   const getSocialIcon = (platform) => {
// //     switch(platform?.toLowerCase()) {
// //       case 'facebook':
// //         return <Facebook className="w-5 h-5" />;
// //       case 'linkedin':
// //         return <Linkedin className="w-5 h-5" />;
// //       case 'twitter':
// //         return <Twitter className="w-5 h-5" />;
// //       case 'github':
// //         return <Github className="w-5 h-5" />;
// //       case 'youtube':
// //         return <Youtube className="w-5 h-5" />;
// //       case 'whatsapp':
// //         return <Phone className="w-5 h-5" />;
// //       default:
// //         return <Globe className="w-5 h-5" />;
// //     }
// //   };

// //   const getContactInfo = () => {
// //     if (!contactData) return [];

// //     return [
// //       {
// //         icon: <Phone className="w-6 h-6" />,
// //         title: 'Phone',
// //         details: contactData.primary_number || '+1 (555) 123-4567',
// //         subDetails: contactData.secondary_number || 'Mon-Fri 9am-6pm EST',
// //         color: colors?.accent2 || '#008170'
// //       },
// //       {
// //         icon: <Mail className="w-6 h-6" />,
// //         title: 'Email',
// //         details: contactData.primary_email || 'hello@techstudio.com',
// //         subDetails: contactData.secondary_email || 'support@techstudio.com',
// //         color: colors?.accent1 || '#005B41'
// //       },
// //       {
// //         icon: <MapPin className="w-6 h-6" />,
// //         title: 'Office',
// //         details: contactData.address_1 || '123 Innovation Drive',
// //         subDetails: contactData.address_2 || 'San Francisco, CA 94105',
// //         color: colors?.accent2 || '#008170'
// //       },
// //       {
// //         icon: <Clock className="w-6 h-6" />,
// //         title: 'Business Hours',
// //         details: contactData.business_days || 'Monday - Friday',
// //         subDetails: contactData.business_times || '9:00 AM - 6:00 PM EST',
// //         color: colors?.accent1 || '#005B41'
// //       }
// //     ];
// //   };

// //   const getSocialLinks = () => {
// //     if (!contactData) return [];

// //     const socials = [];
// //     if (contactData.facebook) socials.push({ platform: 'facebook', url: contactData.facebook });
// //     if (contactData.linkedin) socials.push({ platform: 'linkedin', url: contactData.linkedin });
// //     if (contactData.twitter) socials.push({ platform: 'twitter', url: contactData.twitter });
// //     if (contactData.github) socials.push({ platform: 'github', url: contactData.github });
// //     if (contactData.youtube) socials.push({ platform: 'youtube', url: contactData.youtube });
// //     if (contactData.whatsapp) socials.push({ platform: 'whatsapp', url: contactData.whatsapp });
    
// //     return socials;
// //   };

// //   const getStats = () => {
// //     if (!contactData?.items || contactData.items.length === 0) {
// //       return [];
// //     }

// //     return contactData.items.map((item, index) => ({
// //       value: item.primary_value || '24/7',
// //       label: item.secondary_value || 'Support Available',
// //       icon: getRandomIcon(index),
// //       attachment: item.attachment || null
// //     }));
// //   };

// //   const services = [
// //     'Custom Software Development',
// //     'Mobile App Development',
// //     'Cloud Solutions',
// //     'UI/UX Design',
// //     'Digital Transformation',
// //     'IT Consulting'
// //   ];

// //   const contactInfo = getContactInfo();
// //   const socialLinks = getSocialLinks();
// //   const stats = getStats();

// //   // Show loading state with premium background
// //   if (loading || themeLoading) {
// //     return (
// //       <section className="relative py-16 lg:py-24 min-h-screen flex items-center justify-center overflow-hidden">
// //         {/* Premium Background */}
// //         <div className="absolute inset-0 bg-[#030712]">
// //           <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
// //           <div className="absolute inset-0 animate-grid-primary" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
// //           <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
// //           <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `linear-gradient(90deg, transparent 24.5%, rgba(59,130,246,0.06) 25%, transparent 25.5%, transparent 49.5%, rgba(59,130,246,0.04) 50%, transparent 50.5%, transparent 74.5%, rgba(139,92,246,0.05) 75%, transparent 75.5%, transparent)` }} />
// //           <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `linear-gradient(180deg, transparent 33%, rgba(139,92,246,0.05) 33.5%, transparent 34%, transparent 66%, rgba(59,130,246,0.04) 66.5%, transparent 67%)` }} />
// //           <div className="absolute inset-0 opacity-[0.03] animate-dots" style={{ backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255,255,255,0.5) 1px, transparent 1px), radial-gradient(circle at 60px 60px, rgba(255,255,255,0.3) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
// //           <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle at 80px 80px, rgba(59,130,246,0.6) 2px, transparent 2px), radial-gradient(circle at 160px 160px, rgba(139,92,246,0.4) 3px, transparent 3px)`, backgroundSize: '160px 160px' }} />
// //           <svg width="100%" height="100%" className="absolute inset-0 opacity-[0.01]"><defs><pattern id="hex-contact" x="0" y="0" width="60" height="104" patternUnits="userSpaceOnUse"><path d="M30 0L60 17.5V52.5L30 70L0 52.5V17.5Z" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/><path d="M30 104L60 86.5V51.5L30 34L0 51.5V86.5Z" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2"/></pattern></defs><rect width="100%" height="100%" fill="url(#hex-contact)"/></svg>
// //           <div className="absolute animate-orb-1" style={{ top: '-15%', right: '-5%', width: '800px', height: '800px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 25%, transparent 70%)', filter: 'blur(100px)' }} />
// //           <div className="absolute animate-orb-2" style={{ bottom: '-15%', left: '-5%', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.05) 25%, transparent 70%)', filter: 'blur(100px)' }} />
// //           <div className="absolute animate-orb-3" style={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)', filter: 'blur(120px)' }} />
// //           <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(3,7,18,0.6) 100%)' }} />
// //         </div>
// //         <div className="relative z-10 flex flex-col items-center gap-4">
// //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
// //           <p className="text-white text-sm">Loading contact data...</p>
// //         </div>
// //       </section>
// //     );
// //   }

// //   // Error state with premium background
// //   if (error) {
// //     return (
// //       <section className="relative py-16 lg:py-24 min-h-screen flex items-center justify-center overflow-hidden">
// //         <div className="absolute inset-0 bg-[#030712]">
// //           {/* Same layers as loading for consistency */}
// //           <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,...")` }} />
// //           <div className="absolute inset-0 animate-grid-primary" style={{ backgroundImage: `linear-gradient(...)` }} />
// //           {/* ... full background ... */}
// //         </div>
// //         <div className="relative z-10 text-center mx-4">
// //           <AlertCircle className="w-16 h-16 mx-auto mb-4" style={{ color: colors?.accent2 || '#008170' }} />
// //           <h2 className="text-2xl font-bold text-white mb-4">Error Loading Contact Page</h2>
// //           <p className="text-white/70 mb-6">{error}</p>
// //           <button
// //             onClick={() => {
// //               refreshTheme?.();
// //               fetchContactData();
// //             }}
// //             className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#008170] to-[#005B41] text-white font-semibold hover:shadow-lg transition"
// //           >
// //             Try Again
// //           </button>
// //         </div>
// //       </section>
// //     );
// //   }

// //   // Main contact page with the premium background
// //   return (
// //     <section className="relative py-16 lg:py-24 overflow-hidden">
// //       {/* ====== PREMIUM MODERN BACKGROUND ====== */}
// //       <div className="absolute inset-0 bg-[#030712]">
// //         {/* Layer 1: Noise Texture Overlay */}
// //         <div
// //           className="absolute inset-0 opacity-[0.02]"
// //           style={{
// //             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
// //             backgroundRepeat: "repeat",
// //             backgroundSize: "200px 200px",
// //           }}
// //         />
// //         {/* Layer 2: Main Grid Lines (80px) */}
// //         <div className="absolute inset-0">
// //           <div
// //             className="absolute inset-0 animate-grid-primary"
// //             style={{
// //               backgroundImage:
// //                 "linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
// //               backgroundSize: "100px 100px",
// //             }}
// //           />
// //         </div>
// //         {/* Layer 3: Fine Grid (20px) */}
// //         <div className="absolute inset-0">
// //           <div
// //             className="absolute inset-0"
// //             style={{
// //               backgroundImage:
// //                 "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
// //               backgroundSize: "25px 25px",
// //             }}
// //           />
// //         </div>
// //         <div
// //           className="absolute animate-orb-2"
// //           style={{
// //             bottom: "-15%",
// //             left: "-5%",
// //             width: "700px",
// //             height: "700px",
// //             borderRadius: "50%",
// //             background:
// //               "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 25%, rgba(139, 92, 246, 0.01) 50%, transparent 70%)",
// //             filter: "blur(100px)",
// //           }}
// //         />
// //         <div
// //           className="absolute animate-orb-3"
// //           style={{
// //             top: "40%",
// //             left: "50%",
// //             transform: "translate(-50%, -50%)",
// //             width: "500px",
// //             height: "500px",
// //             borderRadius: "50%",
// //             background:
// //               "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.02) 30%, transparent 70%)",
// //             filter: "blur(120px)",
// //           }}
// //         />
// //         {/* Edge Vignette */}
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             background:
// //               "radial-gradient(ellipse at center, transparent 50%, rgba(3, 7, 18, 0.6) 100%)",
// //           }}
// //         />
// //       </div>
// //       {/* ====== END BACKGROUND ====== */}

// //       {/* Floating error message */}
// //       {(themeError) && (
// //         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm z-30 flex items-center gap-3">
// //           <AlertCircle className="w-4 h-4" />
// //           <span>Error: {themeError}</span>
// //           <button 
// //             onClick={refreshTheme}
// //             className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs transition-colors"
// //           >
// //             Retry
// //           </button>
// //         </div>
// //       )}

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// //         {/* Header Section */}
// //         <div className="text-center mb-16">
// //           <div 
// //             className="inline-flex items-center gap-2 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border"
// //             style={{ 
// //               background: `${colors?.accent2 || '#008170'}20`,
// //               borderColor: `${colors?.accent2 || '#008170'}40`
// //             }}
// //           >
// //             <MessageSquare className="w-4 h-4" style={{ color: colors?.accent2 || '#008170' }} />
// //             <span>{contactData?.section_badge || 'Get In Touch'}</span>
// //           </div>
          
// //           <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
// //             {contactData?.section_title || "Let's Discuss Your "}
// //             <span className="relative inline-block group" style={{ color: colors?.accent2 || '#008170' }}>
// //               {contactData?.section_title?.split(' ').pop() || 'Project'}
// //               <span 
// //                 className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
// //                 style={{ 
// //                   background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
// //                 }}
// //               />
// //             </span>
// //           </h1>
          
// //           <p className="text-xl text-white/80 max-w-3xl mx-auto">
// //             {contactData?.section_subtitle || "Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you within 24 hours."}
// //           </p>
// //         </div>

// //         {/* Stats Section (dynamic) */}
// //         {stats.length > 0 && (
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
// //             {stats.map((stat, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 transform hover:-translate-y-2 hover:border-white/30 transition-all duration-300 group"
// //               >
// //                 <div className="flex justify-center mb-3">
// //                   <div 
// //                     className="p-3 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
// //                     style={{ 
// //                       background: `linear-gradient(135deg, ${colors?.accent2 || '#008170'}20, ${colors?.accent1 || '#005B41'}20)`,
// //                       color: colors?.accent2 || '#008170'
// //                     }}
// //                   >
// //                     {stat.icon}
// //                   </div>
// //                 </div>
// //                 <div className="text-2xl font-bold text-white mb-1 group-hover:scale-105 transition-transform">
// //                   {stat.value}
// //                 </div>
// //                 <div className="text-white/70 group-hover:text-white/80 transition-colors">
// //                   {stat.label}
// //                 </div>
// //                 {stat.attachment && (
// //                   <div className="mt-2 text-xs text-white/50">
// //                     <a href={stat.attachment} target="_blank" rel="noopener noreferrer" className="hover:text-white/70">
// //                       View details
// //                     </a>
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         {/* Main Content Grid */}
// //         <div className="grid lg:grid-cols-3 gap-8">
// //           {/* Contact Information */}
// //           <div className="lg:col-span-1 space-y-6">
// //             {contactInfo.map((info, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transform hover:-translate-y-2 hover:border-white/30 transition-all duration-300 group"
// //               >
// //                 <div className="flex items-start gap-4">
// //                   <div 
// //                     className="p-3 rounded-lg shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
// //                     style={{ 
// //                       background: `linear-gradient(135deg, ${info.color}20, transparent)`,
// //                       color: info.color
// //                     }}
// //                   >
// //                     {info.icon}
// //                   </div>
// //                   <div>
// //                     <h3 className="text-white font-semibold mb-1 group-hover:text-white transition-colors">{info.title}</h3>
// //                     <p className="text-white/90 mb-1 group-hover:text-white transition-colors">{info.details}</p>
// //                     <p className="text-white/70 text-sm group-hover:text-white/80 transition-colors">{info.subDetails}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}

// //             {/* Social Links */}
// //             {socialLinks.length > 0 && (
// //               <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
// //                 <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
// //                 <div className="flex flex-wrap gap-4">
// //                   {socialLinks.map((social, index) => (
// //                     <a
// //                       key={index}
// //                       href={social.url}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
// //                       style={{ color: colors?.accent2 || '#008170' }}
// //                     >
// //                       {getSocialIcon(social.platform)}
// //                     </a>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           {/* Contact Form */}
// //           <div className="lg:col-span-2">
// //             <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:border-white/30 transition-all duration-300">
// //               <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

// //               {formStatus.submitted && (
// //                 <div 
// //                   className={`mb-6 p-4 border rounded-lg flex items-center gap-3 text-white animate-fadeIn ${
// //                     formStatus.success ? 'bg-green-500/20 border-green-500/30' : 'bg-red-500/20 border-red-500/30'
// //                   }`}
// //                 >
// //                   {formStatus.success ? (
// //                     <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
// //                   ) : (
// //                     <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
// //                   )}
// //                   <p>{formStatus.message}</p>
// //                 </div>
// //               )}

// //               <form onSubmit={handleSubmit} className="space-y-6">
// //                 <div className="grid md:grid-cols-2 gap-6">
// //                   <div className="group">
// //                     <label className="block text-white/90 text-sm font-medium mb-2 group-hover:text-white transition-colors">
// //                       Full Name *
// //                     </label>
// //                     <input
// //                       type="text"
// //                       name="full_name"
// //                       value={formData.full_name}
// //                       onChange={handleChange}
// //                       required
// //                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300"
// //                       style={{ '--tw-ring-color': colors?.accent2 || '#008170' }}
// //                       placeholder="John Doe"
// //                     />
// //                   </div>
// //                   <div className="group">
// //                     <label className="block text-white/90 text-sm font-medium mb-2 group-hover:text-white transition-colors">
// //                       Email Address *
// //                     </label>
// //                     <input
// //                       type="email"
// //                       name="email_address"
// //                       value={formData.email_address}
// //                       onChange={handleChange}
// //                       required
// //                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300"
// //                       style={{ '--tw-ring-color': colors?.accent2 || '#008170' }}
// //                       placeholder="john@company.com"
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="grid md:grid-cols-2 gap-6">
// //                   <div className="group">
// //                     <label className="block text-white/90 text-sm font-medium mb-2 group-hover:text-white transition-colors">
// //                       Company Name
// //                     </label>
// //                     <input
// //                       type="text"
// //                       name="company_name"
// //                       value={formData.company_name}
// //                       onChange={handleChange}
// //                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300"
// //                       style={{ '--tw-ring-color': colors?.accent2 || '#008170' }}
// //                       placeholder="Tech Corp Inc."
// //                     />
// //                   </div>
// //                   <div className="group">
// //                     <label className="block text-white/90 text-sm font-medium mb-2 group-hover:text-white transition-colors">
// //                       Phone Number
// //                     </label>
// //                     <input
// //                       type="tel"
// //                       name="phone_number"
// //                       value={formData.phone_number}
// //                       onChange={handleChange}
// //                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300"
// //                       style={{ '--tw-ring-color': colors?.accent2 || '#008170' }}
// //                       placeholder="+1 (555) 000-0000"
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="group">
// //                   <label className="block text-white/90 text-sm font-medium mb-2 group-hover:text-white transition-colors">
// //                     Service Interested In *
// //                   </label>
// //                   <select
// //                     name="service_interested_in"
// //                     value={formData.service_interested_in}
// //                     onChange={handleChange}
// //                     required
// //                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 transition-all duration-300"
// //                     style={{ '--tw-ring-color': colors?.accent2 || '#008170' }}
// //                   >
// //                     <option value="" className="bg-gray-800">Select a service</option>
// //                     {services.map((service, index) => (
// //                       <option key={index} value={service} className="bg-gray-800">
// //                         {service}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>

// //                 <div className="group">
// //                   <label className="block text-white/90 text-sm font-medium mb-2 group-hover:text-white transition-colors">
// //                     Message *
// //                   </label>
// //                   <textarea
// //                     name="message"
// //                     value={formData.message}
// //                     onChange={handleChange}
// //                     required
// //                     rows="5"
// //                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
// //                     style={{ '--tw-ring-color': colors?.accent2 || '#008170' }}
// //                     placeholder="Tell us about your project..."
// //                   />
// //                 </div>

// //                 <button
// //                   type="submit"
// //                   disabled={formSubmitting}
// //                   className="w-full px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none relative overflow-hidden group/btn"
// //                   style={{ 
// //                     background: `linear-gradient(135deg, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`,
// //                     color: 'white'
// //                   }}
// //                 >
// //                   {formSubmitting ? (
// //                     <>
// //                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
// //                       <span className="relative z-10">Sending...</span>
// //                     </>
// //                   ) : (
// //                     <>
// //                       <span className="relative z-10">Send Message</span>
// //                       <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
// //                       <div 
// //                         className="absolute inset-0 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"
// //                         style={{ background: 'white' }}
// //                       />
// //                     </>
// //                   )}
// //                 </button>

// //                 <p className="text-white/60 text-sm text-center hover:text-white/70 transition-colors">
// //                   By submitting this form, you agree to our privacy policy and terms of service.
// //                 </p>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <style>{`
// //         /* Background keyframes */
// //         @keyframes gridPrimaryFade {
// //           0%, 100% { opacity: 0.2; }
// //           50% { opacity: 0.4; }
// //         }
// //         @keyframes dotsFade {
// //           0%, 100% { opacity: 0.02; }
// //           50% { opacity: 0.04; }
// //         }
// //         @keyframes floatOrb1 {
// //           0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
// //           25% { transform: translate(50px, -30px) scale(1.1); opacity: 0.9; }
// //           50% { transform: translate(-20px, -60px) scale(0.95); opacity: 0.6; }
// //           75% { transform: translate(-40px, -10px) scale(1.05); opacity: 0.8; }
// //         }
// //         @keyframes floatOrb2 {
// //           0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
// //           25% { transform: translate(-40px, 30px) scale(1.08); opacity: 0.85; }
// //           50% { transform: translate(20px, 50px) scale(0.92); opacity: 0.6; }
// //           75% { transform: translate(30px, -20px) scale(1.06); opacity: 0.8; }
// //         }
// //         @keyframes floatOrb3 {
// //           0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
// //           50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.9; }
// //         }
// //         @keyframes fadeIn {
// //           from { opacity: 0; transform: translateY(-10px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }
// //         .animate-grid-primary { animation: gridPrimaryFade 5s ease-in-out infinite; }
// //         .animate-dots { animation: dotsFade 6s ease-in-out infinite; }
// //         .animate-orb-1 { animation: floatOrb1 15s ease-in-out infinite; }
// //         .animate-orb-2 { animation: floatOrb2 18s ease-in-out infinite; }
// //         .animate-orb-3 { animation: floatOrb3 12s ease-in-out infinite; }
// //         .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
// //       `}</style>
// //     </section>
// //   );
// // };

// // export default ContactPage;





























// // ContactPage.jsx
// import React, { useState, useEffect } from 'react';
// import { 
//   Mail, 
//   Phone, 
//   MapPin, 
//   Send, 
//   Clock, 
//   CheckCircle, 
//   AlertCircle,
//   Linkedin,
//   Twitter,
//   Github,
//   MessageSquare,
//   Headphones,
//   Users,
//   Facebook,
//   Youtube,
//   Globe,
//   Award,
//   TrendingUp,
//   Star,
//   Shield,
//   Zap,
//   Target
// } from 'lucide-react';
// import { useTheme } from '../hooks/useTheme';

// const ContactPage = () => {
//   // Use theme hook
//   const { colors, loading: themeLoading, error: themeError, refreshTheme } = useTheme();

//   // State for contact data
//   const [contactData, setContactData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [formData, setFormData] = useState({
//     full_name: '',
//     email_address: '',
//     company_name: '',
//     phone_number: '',
//     service_interested_in: '',
//     message: ''
//   });

//   const [formStatus, setFormStatus] = useState({
//     submitted: false,
//     success: false,
//     message: ''
//   });

//   const [formSubmitting, setFormSubmitting] = useState(false);

//   // Array of possible icons for stats
//   const iconComponents = [
//     <Headphones className="w-5 h-5" />,
//     <Users className="w-5 h-5" />,
//     <MessageSquare className="w-5 h-5" />,
//     <Award className="w-5 h-5" />,
//     <TrendingUp className="w-5 h-5" />,
//     <Star className="w-5 h-5" />,
//     <Shield className="w-5 h-5" />,
//     <Zap className="w-5 h-5" />,
//     <Target className="w-5 h-5" />,
//     <Clock className="w-5 h-5" />
//   ];

//   // Fetch contact data from Frappe
//   useEffect(() => {
//     fetchContactData();
//   }, []);

//   const fetchContactData = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch('/api/resource/Contact%20Us/Contact%20Us', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include'
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch contact data');
//       }

//       const data = await response.json();
//       setContactData(data.data);
//       setError(null);
//     } catch (err) {
//       console.error('Error fetching contact data:', err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormSubmitting(true);
    
//     try {
//       const leadData = {
//         full_name: formData.full_name,
//         email_address: formData.email_address,
//         company_name: formData.company_name,
//         phone_number: formData.phone_number,
//         service_interested_in: formData.service_interested_in,
//         message: formData.message
//       };

//       const response = await fetch('/api/resource/Website%20Lead', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//         body: JSON.stringify(leadData)
//       });

//       if (!response.ok) {
//         throw new Error('Failed to submit form');
//       }

//       const result = await response.json();
      
//       setFormStatus({
//         submitted: true,
//         success: true,
//         message: 'Thank you for reaching out! We\'ll get back to you within 24 hours.'
//       });
      
//       setFormData({
//         full_name: '',
//         email_address: '',
//         company_name: '',
//         phone_number: '',
//         service_interested_in: '',
//         message: ''
//       });

//       setTimeout(() => {
//         setFormStatus({
//           submitted: false,
//           success: false,
//           message: ''
//         });
//       }, 5000);

//     } catch (err) {
//       console.error('Error submitting form:', err);
//       setFormStatus({
//         submitted: true,
//         success: false,
//         message: 'Something went wrong. Please try again later.'
//       });

//       setTimeout(() => {
//         setFormStatus({
//           submitted: false,
//           success: false,
//           message: ''
//         });
//       }, 5000);
//     } finally {
//       setFormSubmitting(false);
//     }
//   };

//   const getRandomIcon = (index) => {
//     return iconComponents[index % iconComponents.length];
//   };

//   const getSocialIcon = (platform) => {
//     switch(platform?.toLowerCase()) {
//       case 'facebook':
//         return <Facebook className="w-5 h-5" />;
//       case 'linkedin':
//         return <Linkedin className="w-5 h-5" />;
//       case 'twitter':
//         return <Twitter className="w-5 h-5" />;
//       case 'github':
//         return <Github className="w-5 h-5" />;
//       case 'youtube':
//         return <Youtube className="w-5 h-5" />;
//       case 'whatsapp':
//         return <Phone className="w-5 h-5" />;
//       default:
//         return <Globe className="w-5 h-5" />;
//     }
//   };

//   const getContactInfo = () => {
//     if (!contactData) return [];

//     return [
//       {
//         icon: <Phone className="w-6 h-6" />,
//         title: 'Phone',
//         details: contactData.primary_number || '+1 (555) 123-4567',
//         subDetails: contactData.secondary_number || 'Mon-Fri 9am-6pm EST',
//         color: colors?.accent2 || '#008170'
//       },
//       {
//         icon: <Mail className="w-6 h-6" />,
//         title: 'Email',
//         details: contactData.primary_email || 'hello@techstudio.com',
//         subDetails: contactData.secondary_email || 'support@techstudio.com',
//         color: colors?.accent1 || '#005B41'
//       },
//       {
//         icon: <MapPin className="w-6 h-6" />,
//         title: 'Office',
//         details: contactData.address_1 || '123 Innovation Drive',
//         subDetails: contactData.address_2 || 'San Francisco, CA 94105',
//         color: colors?.accent2 || '#008170'
//       },
//       {
//         icon: <Clock className="w-6 h-6" />,
//         title: 'Business Hours',
//         details: contactData.business_days || 'Monday - Friday',
//         subDetails: contactData.business_times || '9:00 AM - 6:00 PM EST',
//         color: colors?.accent1 || '#005B41'
//       }
//     ];
//   };

//   const getSocialLinks = () => {
//     if (!contactData) return [];

//     const socials = [];
//     if (contactData.facebook) socials.push({ platform: 'facebook', url: contactData.facebook });
//     if (contactData.linkedin) socials.push({ platform: 'linkedin', url: contactData.linkedin });
//     if (contactData.twitter) socials.push({ platform: 'twitter', url: contactData.twitter });
//     if (contactData.github) socials.push({ platform: 'github', url: contactData.github });
//     if (contactData.youtube) socials.push({ platform: 'youtube', url: contactData.youtube });
//     if (contactData.whatsapp) socials.push({ platform: 'whatsapp', url: contactData.whatsapp });
    
//     return socials;
//   };

//   const getStats = () => {
//     if (!contactData?.items || contactData.items.length === 0) {
//       return [];
//     }

//     return contactData.items.map((item, index) => ({
//       value: item.primary_value || '24/7',
//       label: item.secondary_value || 'Support Available',
//       icon: getRandomIcon(index),
//       attachment: item.attachment || null
//     }));
//   };

//   const services = [
//     'Custom Software Development',
//     'Mobile App Development',
//     'Cloud Solutions',
//     'UI/UX Design',
//     'Digital Transformation',
//     'IT Consulting'
//   ];

//   const contactInfo = getContactInfo();
//   const socialLinks = getSocialLinks();
//   const stats = getStats();

//   // Show loading state with premium background
//   if (loading || themeLoading) {
//     return (
//       <section className="relative py-16 lg:py-24 min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Premium Background */}
//         <div className="absolute inset-0 bg-[#030712]">
//           <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
//           <div className="absolute inset-0 animate-grid-primary" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
//           <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
//           <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `linear-gradient(90deg, transparent 24.5%, rgba(59,130,246,0.06) 25%, transparent 25.5%, transparent 49.5%, rgba(59,130,246,0.04) 50%, transparent 50.5%, transparent 74.5%, rgba(139,92,246,0.05) 75%, transparent 75.5%, transparent)` }} />
//           <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `linear-gradient(180deg, transparent 33%, rgba(139,92,246,0.05) 33.5%, transparent 34%, transparent 66%, rgba(59,130,246,0.04) 66.5%, transparent 67%)` }} />
//           <div className="absolute inset-0 opacity-[0.03] animate-dots" style={{ backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255,255,255,0.5) 1px, transparent 1px), radial-gradient(circle at 60px 60px, rgba(255,255,255,0.3) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
//           <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle at 80px 80px, rgba(59,130,246,0.6) 2px, transparent 2px), radial-gradient(circle at 160px 160px, rgba(139,92,246,0.4) 3px, transparent 3px)`, backgroundSize: '160px 160px' }} />
//           <svg width="100%" height="100%" className="absolute inset-0 opacity-[0.01]"><defs><pattern id="hex-contact" x="0" y="0" width="60" height="104" patternUnits="userSpaceOnUse"><path d="M30 0L60 17.5V52.5L30 70L0 52.5V17.5Z" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/><path d="M30 104L60 86.5V51.5L30 34L0 51.5V86.5Z" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2"/></pattern></defs><rect width="100%" height="100%" fill="url(#hex-contact)"/></svg>
//           <div className="absolute animate-orb-1" style={{ top: '-15%', right: '-5%', width: '800px', height: '800px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 25%, transparent 70%)', filter: 'blur(100px)' }} />
//           <div className="absolute animate-orb-2" style={{ bottom: '-15%', left: '-5%', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.05) 25%, transparent 70%)', filter: 'blur(100px)' }} />
//           <div className="absolute animate-orb-3" style={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)', filter: 'blur(120px)' }} />
//           <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(3,7,18,0.6) 100%)' }} />
//         </div>
//         <div className="relative z-10 flex flex-col items-center gap-4">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
//           <p className="text-white text-sm">Loading contact data...</p>
//         </div>
//       </section>
//     );
//   }

//   // Error state with premium background
//   if (error) {
//     return (
//       <section className="relative py-16 lg:py-24 min-h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-[#030712]">
//           {/* Same layers as loading for consistency */}
//           <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,...")` }} />
//           <div className="absolute inset-0 animate-grid-primary" style={{ backgroundImage: `linear-gradient(...)` }} />
//           {/* ... full background ... */}
//         </div>
//         <div className="relative z-10 text-center mx-4">
//           <AlertCircle className="w-16 h-16 mx-auto mb-4" style={{ color: colors?.accent2 || '#008170' }} />
//           <h2 className="text-2xl font-bold text-white mb-4">Error Loading Contact Page</h2>
//           <p className="text-white/70 mb-6">{error}</p>
//           <button
//             onClick={() => {
//               refreshTheme?.();
//               fetchContactData();
//             }}
//             className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#008170] to-[#005B41] text-white font-semibold hover:shadow-lg transition"
//           >
//             Try Again
//           </button>
//         </div>
//       </section>
//     );
//   }

//   // Main contact page with the premium background
//   return (
//     <section className="relative py-16 lg:py-24 overflow-hidden">
//       {/* ====== PREMIUM MODERN BACKGROUND ====== */}
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

//       {/* Floating error message */}
//       {(themeError) && (
//         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm z-30 flex items-center gap-3">
//           <AlertCircle className="w-4 h-4" />
//           <span>Error: {themeError}</span>
//           <button 
//             onClick={refreshTheme}
//             className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs transition-colors"
//           >
//             Retry
//           </button>
//         </div>
//       )}

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div 
//             className="inline-flex items-center gap-2 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border"
//             style={{ 
//               background: `${colors?.accent2 || '#008170'}20`,
//               borderColor: `${colors?.accent2 || '#008170'}40`
//             }}
//           >
//             <MessageSquare className="w-4 h-4" style={{ color: colors?.accent2 || '#008170' }} />
//             <span>{contactData?.section_badge || 'Get In Touch'}</span>
//           </div>
          
//           <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//             {contactData?.section_title || "Let's Discuss Your "}
//             <span className="relative inline-block group" style={{ color: colors?.accent2 || '#008170' }}>
//               {contactData?.section_title?.split(' ').pop() || 'Project'}
//               <span 
//                 className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
//                 style={{ 
//                   background: `linear-gradient(to right, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`
//                 }}
//               />
//             </span>
//           </h1>
          
//           <p className="text-xl text-white/80 max-w-3xl mx-auto">
//             {contactData?.section_subtitle || "Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you within 24 hours."}
//           </p>
//         </div>

//         {/* Stats Section (dynamic) */}
//         {stats.length > 0 && (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 transform hover:-translate-y-2 hover:border-white/30 transition-all duration-300 group"
//               >
//                 <div className="flex justify-center mb-3">
//                   <div 
//                     className="p-3 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
//                     style={{ 
//                       background: `linear-gradient(135deg, ${colors?.accent2 || '#008170'}20, ${colors?.accent1 || '#005B41'}20)`,
//                       color: colors?.accent2 || '#008170'
//                     }}
//                   >
//                     {stat.icon}
//                   </div>
//                 </div>
//                 <div className="text-2xl font-bold text-white mb-1 group-hover:scale-105 transition-transform">
//                   {stat.value}
//                 </div>
//                 <div className="text-white/70 group-hover:text-white/80 transition-colors">
//                   {stat.label}
//                 </div>
//                 {stat.attachment && (
//                   <div className="mt-2 text-xs text-white/50">
//                     <a href={stat.attachment} target="_blank" rel="noopener noreferrer" className="hover:text-white/70">
//                       View details
//                     </a>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Contact Information */}
//           <div className="lg:col-span-1 space-y-6">
//             {contactInfo.map((info, index) => (
//               <div
//                 key={index}
//                 className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transform hover:-translate-y-2 hover:border-white/30 transition-all duration-300 group"
//               >
//                 <div className="flex items-start gap-4">
//                   <div 
//                     className="p-3 rounded-lg shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
//                     style={{ 
//                       background: `linear-gradient(135deg, ${info.color}20, transparent)`,
//                       color: info.color
//                     }}
//                   >
//                     {info.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-white font-semibold mb-1 group-hover:text-white transition-colors">{info.title}</h3>
//                     <p className="text-white/90 mb-1 group-hover:text-white transition-colors">{info.details}</p>
//                     <p className="text-white/70 text-sm group-hover:text-white/80 transition-colors">{info.subDetails}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* Social Links */}
//             {socialLinks.length > 0 && (
//               <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
//                 <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
//                 <div className="flex flex-wrap gap-4">
//                   {socialLinks.map((social, index) => (
//                     <a
//                       key={index}
//                       href={social.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
//                       style={{ color: colors?.accent2 || '#008170' }}
//                     >
//                       {getSocialIcon(social.platform)}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Contact Form */}
//           <div className="lg:col-span-2">
//             <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:border-white/30 transition-all duration-300">
//               <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

//               {formStatus.submitted && (
//                 <div 
//                   className={`mb-6 p-4 border rounded-lg flex items-center gap-3 text-white animate-fadeIn ${
//                     formStatus.success ? 'bg-green-500/20 border-green-500/30' : 'bg-red-500/20 border-red-500/30'
//                   }`}
//                 >
//                   {formStatus.success ? (
//                     <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
//                   ) : (
//                     <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
//                   )}
//                   <p>{formStatus.message}</p>
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="group">
//                     <label className="block text-white/90 text-sm font-medium mb-2 group-hover:text-white transition-colors">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="full_name"
//                       value={formData.full_name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300"
//                       style={{ '--tw-ring-color': colors?.accent2 || '#008170' }}
//                       placeholder="John Doe"
//                     />
//                   </div>
//                   <div className="group">
//                     <label className="block text-white/90 text-sm font-medium mb-2 group-hover:text-white transition-colors">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       name="email_address"
//                       value={formData.email_address}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300"
//                       style={{ '--tw-ring-color': colors?.accent2 || '#008170' }}
//                       placeholder="john@company.com"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="group">
//                     <label className="block text-white/90 text-sm font-medium mb-2 group-hover:text-white transition-colors">
//                       Company Name
//                     </label>
//                     <input
//                       type="text"
//                       name="company_name"
//                       value={formData.company_name}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300"
//                       style={{ '--tw-ring-color': colors?.accent2 || '#008170' }}
//                       placeholder="Tech Corp Inc."
//                     />
//                   </div>
//                   <div className="group">
//                     <label className="block text-white/90 text-sm font-medium mb-2 group-hover:text-white transition-colors">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone_number"
//                       value={formData.phone_number}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300"
//                       style={{ '--tw-ring-color': colors?.accent2 || '#008170' }}
//                       placeholder="+1 (555) 000-0000"
//                     />
//                   </div>
//                 </div>

//                 <div className="group">
//                   <label className="block text-white/90 text-sm font-medium mb-2 group-hover:text-white transition-colors">
//                     Service Interested In *
//                   </label>
//                   <select
//                     name="service_interested_in"
//                     value={formData.service_interested_in}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 transition-all duration-300"
//                     style={{ '--tw-ring-color': colors?.accent2 || '#008170' }}
//                   >
//                     <option value="" className="bg-gray-800">Select a service</option>
//                     {services.map((service, index) => (
//                       <option key={index} value={service} className="bg-gray-800">
//                         {service}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="group">
//                   <label className="block text-white/90 text-sm font-medium mb-2 group-hover:text-white transition-colors">
//                     Message *
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="5"
//                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
//                     style={{ '--tw-ring-color': colors?.accent2 || '#008170' }}
//                     placeholder="Tell us about your project..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={formSubmitting}
//                   className="w-full px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none relative overflow-hidden group/btn"
//                   style={{ 
//                     background: `linear-gradient(135deg, ${colors?.accent2 || '#008170'}, ${colors?.accent1 || '#005B41'})`,
//                     color: 'white'
//                   }}
//                 >
//                   {formSubmitting ? (
//                     <>
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                       <span className="relative z-10">Sending...</span>
//                     </>
//                   ) : (
//                     <>
//                       <span className="relative z-10">Send Message</span>
//                       <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
//                       <div 
//                         className="absolute inset-0 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"
//                         style={{ background: 'white' }}
//                       />
//                     </>
//                   )}
//                 </button>

//                 <p className="text-white/60 text-sm text-center hover:text-white/70 transition-colors">
//                   By submitting this form, you agree to our privacy policy and terms of service.
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Map Section */}
//         <div className="mt-16">
//           <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:border-white/30 transition-all duration-300">
//             <iframe 
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1577.7359203175329!2d90.41614621647939!3d23.75994174122821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9003596923d%3A0x5bce7e41203a301d!2sRampura%20wapda%20road!5e0!3m2!1sen!2sbd!4v1779305990931!5m2!1sen!2sbd" 
//               width="100%" 
//               height="450" 
//               style={{ border: 0 }} 
//               allowFullScreen="" 
//               loading="lazy" 
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Office Location"
//             />
//           </div>
//         </div>
//       </div>

//       <style>{`
//         /* Background keyframes */
//         @keyframes gridPrimaryFade {
//           0%, 100% { opacity: 0.2; }
//           50% { opacity: 0.4; }
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
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-grid-primary { animation: gridPrimaryFade 5s ease-in-out infinite; }
//         .animate-dots { animation: dotsFade 6s ease-in-out infinite; }
//         .animate-orb-1 { animation: floatOrb1 15s ease-in-out infinite; }
//         .animate-orb-2 { animation: floatOrb2 18s ease-in-out infinite; }
//         .animate-orb-3 { animation: floatOrb3 12s ease-in-out infinite; }
//         .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
//       `}</style>
//     </section>
//   );
// };

// export default ContactPage;


























// ContactPage.jsx
import React, { useState, useEffect, memo, useCallback } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Linkedin,
  Twitter,
  Github,
  MessageSquare,
  Headphones,
  Users,
  Facebook,
  Youtube,
  Globe,
  Award,
  TrendingUp,
  Star,
  Shield,
  Zap,
  Target
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ContactPage = () => {
  // Use theme hook
  const { colors, loading: themeLoading, error: themeError, refreshTheme } = useTheme();

  // State for contact data
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    full_name: '',
    email_address: '',
    company_name: '',
    phone_number: '',
    service_interested_in: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [formSubmitting, setFormSubmitting] = useState(false);

  const primaryColor = colors?.accent2 || '#008071';
  const secondaryColor = colors?.accent1 || '#005B41';

  // Array of possible icons for stats
  const iconComponents = [
    <Headphones className="w-5 h-5" />,
    <Users className="w-5 h-5" />,
    <MessageSquare className="w-5 h-5" />,
    <Award className="w-5 h-5" />,
    <TrendingUp className="w-5 h-5" />,
    <Star className="w-5 h-5" />,
    <Shield className="w-5 h-5" />,
    <Zap className="w-5 h-5" />,
    <Target className="w-5 h-5" />,
    <Clock className="w-5 h-5" />
  ];

  // Fetch contact data from Frappe
  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/resource/Contact%20Us/Contact%20Us', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Failed to fetch contact data');
      }

      const data = await response.json();
      setContactData(data.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching contact data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    
    try {
      const leadData = {
        full_name: formData.full_name,
        email_address: formData.email_address,
        company_name: formData.company_name,
        phone_number: formData.phone_number,
        service_interested_in: formData.service_interested_in,
        message: formData.message
      };

      const response = await fetch('/api/resource/Website%20Lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(leadData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for reaching out! We\'ll get back to you within 24 hours.'
      });
      
      setFormData({
        full_name: '',
        email_address: '',
        company_name: '',
        phone_number: '',
        service_interested_in: '',
        message: ''
      });

      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, message: '' });
      }, 5000);

    } catch (err) {
      console.error('Error submitting form:', err);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Something went wrong. Please try again later.'
      });

      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, message: '' });
      }, 5000);
    } finally {
      setFormSubmitting(false);
    }
  };

  const getRandomIcon = useCallback((index) => {
    return iconComponents[index % iconComponents.length];
  }, []);

  const getSocialIcon = useCallback((platform) => {
    switch(platform?.toLowerCase()) {
      case 'facebook': return <Facebook className="w-5 h-5" />;
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      case 'twitter': return <Twitter className="w-5 h-5" />;
      case 'github': return <Github className="w-5 h-5" />;
      case 'youtube': return <Youtube className="w-5 h-5" />;
      case 'whatsapp': return <Phone className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />;
    }
  }, []);

  const getContactInfo = useCallback(() => {
    if (!contactData) return [];

    return [
      {
        icon: <Phone className="w-6 h-6" />,
        title: 'Phone',
        details: contactData.primary_number || '+1 (555) 123-4567',
        subDetails: contactData.secondary_number || 'Mon-Fri 9am-6pm EST',
        color: primaryColor
      },
      {
        icon: <Mail className="w-6 h-6" />,
        title: 'Email',
        details: contactData.primary_email || 'hello@techstudio.com',
        subDetails: contactData.secondary_email || 'support@techstudio.com',
        color: secondaryColor
      },
      {
        icon: <MapPin className="w-6 h-6" />,
        title: 'Office',
        details: contactData.address_1 || '123 Innovation Drive',
        subDetails: contactData.address_2 || 'San Francisco, CA 94105',
        color: primaryColor
      },
      {
        icon: <Clock className="w-6 h-6" />,
        title: 'Business Hours',
        details: contactData.business_days || 'Monday - Friday',
        subDetails: contactData.business_times || '9:00 AM - 6:00 PM EST',
        color: secondaryColor
      }
    ];
  }, [contactData, primaryColor, secondaryColor]);

  const getSocialLinks = useCallback(() => {
    if (!contactData) return [];
    const socials = [];
    if (contactData.facebook) socials.push({ platform: 'facebook', url: contactData.facebook });
    if (contactData.linkedin) socials.push({ platform: 'linkedin', url: contactData.linkedin });
    if (contactData.twitter) socials.push({ platform: 'twitter', url: contactData.twitter });
    if (contactData.github) socials.push({ platform: 'github', url: contactData.github });
    if (contactData.youtube) socials.push({ platform: 'youtube', url: contactData.youtube });
    if (contactData.whatsapp) socials.push({ platform: 'whatsapp', url: contactData.whatsapp });
    return socials;
  }, [contactData]);

  const getStats = useCallback(() => {
    if (!contactData?.items || contactData.items.length === 0) return [];
    return contactData.items.map((item, index) => ({
      value: item.primary_value || '24/7',
      label: item.secondary_value || 'Support Available',
      icon: getRandomIcon(index),
      attachment: item.attachment || null
    }));
  }, [contactData, getRandomIcon]);

  const services = [
    'Custom Software Development',
    'Mobile App Development',
    'Cloud Solutions',
    'UI/UX Design',
    'Digital Transformation',
    'IT Consulting'
  ];

  const contactInfo = getContactInfo();
  const socialLinks = getSocialLinks();
  const stats = getStats();

  // Loading state
  if (loading || themeLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-gray-200 border-t-[#008071] animate-spin"></div>
          <p className="text-gray-500 text-sm">Loading contact data...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md px-4">
          <AlertCircle className="w-16 h-16 mx-auto mb-4" style={{ color: primaryColor }} />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Contact Page</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => {
              refreshTheme?.();
              fetchContactData();
            }}
            className="px-6 py-3 rounded-xl text-white font-semibold hover:shadow-lg transition"
            style={{ backgroundColor: primaryColor }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Theme error message */}
        {themeError && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-xl border border-red-200 text-gray-900 px-4 py-3 rounded-xl text-sm z-30 flex items-center gap-3">
            <AlertCircle className="w-4 h-4 text-red-500" />
            <span className="text-gray-600">{themeError}</span>
            <button 
              onClick={refreshTheme}
              className="ml-2 px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: primaryColor }}
            >
              Retry
            </button>
          </div>
        )}

        {/* Header Section */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border"
            style={{ 
              backgroundColor: `${primaryColor}08`,
              borderColor: `${primaryColor}20`,
              color: primaryColor
            }}
          >
            <MessageSquare className="w-4 h-4" />
            <span>{contactData?.section_badge || 'Get In Touch'}</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {contactData?.section_title || "Let's Discuss Your "}
            <span className="relative inline-block" style={{ color: primaryColor }}>
              {contactData?.section_title?.split(' ').pop() || 'Project'}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {contactData?.section_subtitle || "Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you within 24 hours."}
          </p>
        </div>

        {/* Stats Section */}
        {stats.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-300 group"
              >
                <div className="flex justify-center mb-3">
                  <div 
                    className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${primaryColor}10`,
                      color: primaryColor
                    }}
                  >
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
                {stat.attachment && (
                  <div className="mt-2">
                    <a href={stat.attachment} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline" style={{ color: primaryColor }}>
                      View details
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="p-3 rounded-xl shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${info.color}10`,
                      color: info.color
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">{info.title}</h3>
                    <p className="text-gray-700 mb-1">{info.details}</p>
                    <p className="text-gray-500 text-sm">{info.subDetails}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-gray-900 font-semibold mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-gray-200 hover:border-transparent hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                      style={{ color: primaryColor }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `${primaryColor}10`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      {getSocialIcon(social.platform)}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              {formStatus.submitted && (
                <div 
                  className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                    formStatus.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                  }`}
                >
                  {formStatus.success ? (
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                  )}
                  <p className={formStatus.success ? 'text-green-700' : 'text-red-700'}>{formStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ '--tw-ring-color': primaryColor }}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email_address"
                      value={formData.email_address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ '--tw-ring-color': primaryColor }}
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ '--tw-ring-color': primaryColor }}
                      placeholder="Tech Corp Inc."
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ '--tw-ring-color': primaryColor }}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Service Interested In *
                  </label>
                  <select
                    name="service_interested_in"
                    value={formData.service_interested_in}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                    style={{ '--tw-ring-color': primaryColor }}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 resize-none"
                    style={{ '--tw-ring-color': primaryColor }}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-white"
                  style={{ backgroundColor: primaryColor }}
                >
                  {formSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-gray-500 text-sm text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1577.7359203175329!2d90.41614621647939!3d23.75994174122821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9003596923d%3A0x5bce7e41203a301d!2sRampura%20wapda%20road!5e0!3m2!1sen!2sbd!4v1779305990931!5m2!1sen!2sbd" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ContactPage);








