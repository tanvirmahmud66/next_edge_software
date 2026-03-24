// // EcommerceSolutionsPage.jsx
// import React, { useState } from "react";
// import {
//   ShoppingCart,
//   CreditCard,
//   Package,
//   Truck,
//   BarChart3,
//   Users,
//   Globe,
//   Smartphone,
//   Laptop,
//   TrendingUp,
//   DollarSign,
//   ShoppingBag,
//   Store,
//   Wallet,
//   Shield,
//   Lock,
//   Eye,
//   Bell,
//   Mail,
//   ChevronRight,
//   CheckCircle,
//   RefreshCw,
//   Settings,
//   Zap,
//   Clock,
//   MapPin,
//   FileText,
//   Search,
//   Heart,
//   Star,
//   Award,
//   PieChart,
//   Calendar,
//   ThumbsUp,
//   Share2,
//   ExternalLink,
//   Play,
//   X,
//   Menu,
//   ArrowRight,
//   Gift,
//   Tag,
//   CreditCard as CreditCardIcon,
//   Phone,
//   MessageCircle,
//   Instagram,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Youtube,
// } from "lucide-react";
// import { useTheme } from "../hooks/useTheme";

// const EcommerceSolutionsPage = () => {
//   const [activeTab, setActiveTab] = useState("features");
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [videoModalOpen, setVideoModalOpen] = useState(false);

//   // Use theme hook
//   const { colors, loading, error, refreshTheme } = useTheme();

//   const stats = [
//     {
//       value: "$2.5B+",
//       label: "Annual GMV Processed",
//       icon: <DollarSign className="w-6 h-6" />,
//     },
//     {
//       value: "98.5%",
//       label: "Customer Satisfaction",
//       icon: <ThumbsUp className="w-6 h-6" />,
//     },
//     {
//       value: "150+",
//       label: "Enterprise Clients",
//       icon: <Store className="w-6 h-6" />,
//     },
//     {
//       value: "24/7",
//       label: "Support Available",
//       icon: <Clock className="w-6 h-6" />,
//     },
//   ];

//   const features = [
//     {
//       icon: <ShoppingCart className="w-8 h-8" />,
//       title: "Smart Cart & Checkout",
//       description:
//         "AI-powered checkout optimization that increases conversion rates by up to 35%.",
//       image:
//         "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       color: colors?.accent2 || "#008170",
//     },
//     {
//       icon: <Package className="w-8 h-8" />,
//       title: "Intelligent Inventory",
//       description:
//         "Predictive stock management with automated reordering and demand forecasting.",
//       image:
//         "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       color: colors?.accent1 || "#005B41",
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Customer 360 View",
//       description:
//         "Unified customer profiles with purchase history, preferences, and behavior analytics.",
//       image:
//         "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       color: colors?.accent2 || "#008170",
//     },
//   ];

//   const benefits = [
//     {
//       icon: <Zap className="w-6 h-6" />,
//       title: "Lightning Fast",
//       description: "Sub-second page loads and instant checkout processing",
//       stat: "0.8s",
//       statLabel: "Avg. Load Time",
//     },
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: "Bank-Level Security",
//       description: "PCI DSS Level 1 compliant with real-time fraud protection",
//       stat: "99.99%",
//       statLabel: "Security Score",
//     },
//     {
//       icon: <Globe className="w-6 h-6" />,
//       title: "Global Ready",
//       description: "Multi-currency, multi-language, and international shipping",
//       stat: "135+",
//       statLabel: "Countries",
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       title: "Scalable Architecture",
//       description: "Handles traffic spikes during sales and peak seasons",
//       stat: "1M+",
//       statLabel: "Concurrent Users",
//     },
//   ];

//   const caseStudies = [
//     {
//       company: "FashionHub",
//       industry: "Retail & Apparel",
//       image:
//         "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       logo: "FH",
//       results: [
//         { label: "Revenue Increase", value: "+156%" },
//         { label: "Cart Abandonment", value: "-42%" },
//         { label: "Mobile Conversion", value: "+89%" },
//       ],
//       color: colors?.accent2 || "#008170",
//     },
//     {
//       company: "TechGadgets",
//       industry: "Electronics",
//       image:
//         "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       logo: "TG",
//       results: [
//         { label: "Order Volume", value: "15K/mo" },
//         { label: "Avg. Order Value", value: "$245" },
//         { label: "Repeat Customers", value: "67%" },
//       ],
//       color: colors?.accent1 || "#005B41",
//     },
//     {
//       company: "OrganicMarket",
//       industry: "Grocery & Food",
//       image:
//         "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       logo: "OM",
//       results: [
//         { label: "Customer Base", value: "50K+" },
//         { label: "Delivery Time", value: "<2hrs" },
//         { label: "Subscription Rate", value: "43%" },
//       ],
//       color: colors?.accent2 || "#008170",
//     },
//   ];

//   const pricingTiers = [
//     {
//       name: "Starter",
//       price: "1,999",
//       period: "month",
//       description: "Perfect for new online stores and small catalogs",
//       features: [
//         "Up to 1,000 products",
//         "Basic analytics",
//         "Email support",
//         "3 payment gateways",
//         "Mobile responsive",
//         "Basic SEO tools",
//       ],
//       limitations: ["No multi-currency", "Limited customization"],
//       cta: "Start Selling",
//       popular: false,
//       image:
//         "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       name: "Growth",
//       price: "3,999",
//       period: "month",
//       description: "Ideal for scaling businesses with advanced needs",
//       features: [
//         "Up to 10,000 products",
//         "Advanced analytics & reports",
//         "24/7 priority support",
//         "All payment gateways",
//         "Multi-currency support",
//         "Advanced SEO",
//         "Abandoned cart recovery",
//         "Marketing automation",
//       ],
//       limitations: [],
//       cta: "Scale Your Business",
//       popular: true,
//       image:
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       name: "Enterprise",
//       price: "Custom",
//       period: "",
//       description: "For high-volume merchants with complex requirements",
//       features: [
//         "Unlimited products",
//         "Custom analytics",
//         "Dedicated account manager",
//         "Custom integrations",
//         "Multi-warehouse support",
//         "SLA guarantees",
//         "Advanced security",
//         "International shipping",
//       ],
//       limitations: [],
//       cta: "Contact Sales",
//       popular: false,
//       image:
//         "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     },
//   ];

//   const integrations = [
//     {
//       category: "Payments",
//       items: [
//         "Stripe",
//         "PayPal",
//         "Square",
//         "Authorize.net",
//         "Braintree",
//         "Adyen",
//       ],
//       icon: <CreditCardIcon className="w-5 h-5" />,
//     },
//     {
//       category: "Shipping",
//       items: ["ShipStation", "EasyPost", "Shippo", "FedEx", "UPS", "DHL"],
//       icon: <Truck className="w-5 h-5" />,
//     },
//     {
//       category: "Marketing",
//       items: [
//         "Mailchimp",
//         "Klaviyo",
//         "HubSpot",
//         "Google Ads",
//         "Facebook",
//         "Instagram",
//       ],
//       icon: <Mail className="w-5 h-5" />,
//     },
//     {
//       category: "Analytics",
//       items: [
//         "Google Analytics",
//         "Mixpanel",
//         "Amplitude",
//         "Hotjar",
//         "Segment",
//         "Looker",
//       ],
//       icon: <BarChart3 className="w-5 h-5" />,
//     },
//   ];

//   const testimonials = [
//     {
//       quote:
//         "This platform transformed our online business. We've seen unprecedented growth and our customers love the shopping experience.",
//       author: "Jennifer Walsh",
//       role: "Founder, Walsh Boutique",
//       image:
//         "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       rating: 5,
//       company: "Walsh Boutique",
//     },
//     {
//       quote:
//         "The multi-channel integration capabilities are outstanding. We manage 5 stores across 3 countries seamlessly.",
//       author: "David Park",
//       role: "Ecommerce Director, TechWorld",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       rating: 5,
//       company: "TechWorld",
//     },
//     {
//       quote:
//         "Their enterprise solution scaled with us from 100 to 50,000 products. The support team is exceptional.",
//       author: "Maria Garcia",
//       role: "CEO, HomeLiving",
//       image:
//         "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       rating: 5,
//       company: "HomeLiving",
//     },
//   ];

//   const faqs = [
//     {
//       question: "How quickly can I launch my store?",
//       answer:
//         "With our starter template, you can launch in as little as 2 weeks. Custom enterprise solutions typically take 4-8 weeks depending on complexity.",
//     },
//     {
//       question: "Do you support B2B and wholesale?",
//       answer:
//         "Yes, our platform supports B2B with custom pricing, bulk ordering, and approval workflows for enterprise clients.",
//     },
//     {
//       question: "Can I migrate my existing store?",
//       answer:
//         "Absolutely! We offer free migration services from major platforms like Shopify, Magento, WooCommerce, and custom solutions.",
//     },
//     {
//       question: "What about PCI compliance?",
//       answer:
//         "We are PCI DSS Level 1 compliant and handle all compliance requirements, keeping your customer data secure.",
//     },
//   ];

//   // Show loading state
//   if (loading) {
//     return (
//       <div className="relative min-h-screen overflow-hidden bg-gray-900">
//         <div className="flex justify-center items-center min-h-screen">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       {/* Error message with retry button */}
//       {error && (
//         <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm z-50 flex items-center gap-3">
//           <span>Theme load failed: {error}</span>
//           <button
//             onClick={refreshTheme}
//             className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs transition-colors"
//           >
//             Retry
//           </button>
//         </div>
//       )}

//       {/* Background Gradient */}
//       <div
//         className="fixed inset-0"
//         style={{
//           background: `linear-gradient(135deg, ${colors?.primary || "#0F0F0F"} 0%, ${colors?.secondary || "#232D3F"} 50%, ${colors?.accent1 || "#005B41"} 100%)`,
//         }}
//       />

//       {/* Animated Background */}
//       <div className="fixed inset-0 opacity-5">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//             backgroundSize: "30px 30px",
//           }}
//         />
//       </div>

//       {/* Floating Particles */}
//       {[...Array(12)].map((_, i) => (
//         <div
//           key={i}
//           className="fixed rounded-full animate-ping"
//           style={{
//             width: Math.random() * 4 + 2 + "px",
//             height: Math.random() * 4 + 2 + "px",
//             backgroundColor:
//               i % 2 === 0
//                 ? colors?.accent2 || "#008170"
//                 : colors?.accent1 || "#005B41",
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${i * 0.3}s`,
//             opacity: 0.1,
//             zIndex: 0,
//           }}
//         />
//       ))}

//       {/* Floating Elements */}
//       <div
//         className="fixed top-40 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-float"
//         style={{ background: colors?.accent2 || "#008170", opacity: 0.1 }}
//       />
//       <div
//         className="fixed bottom-40 right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000"
//         style={{ background: colors?.accent1 || "#005B41", opacity: 0.1 }}
//       />

//       {/* Main Content */}
//       <div className="relative z-10">
//         {/* Hero Section */}
//         <div className="relative min-h-screen flex items-center">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               {/* Left Content */}
//               <div>
//                 <div
//                   className="inline-flex items-center gap-2 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border"
//                   style={{
//                     background: `${colors?.accent2 || "#008170"}20`,
//                     borderColor: `${colors?.accent2 || "#008170"}40`,
//                   }}
//                 >
//                   <ShoppingCart
//                     className="w-4 h-4"
//                     style={{ color: colors?.accent2 || "#008170" }}
//                   />
//                   <span>Ecommerce Solutions</span>
//                 </div>

//                 <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//                   Transform Your{" "}
//                   <span
//                     className="relative inline-block group"
//                     style={{ color: colors?.accent2 || "#008170" }}
//                   >
//                     Online Store
//                     <span
//                       className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
//                       style={{
//                         background: `linear-gradient(to right, ${colors?.accent2 || "#008170"}, ${colors?.accent1 || "#005B41"})`,
//                       }}
//                     />
//                   </span>
//                   <br />
//                   Into a Sales Powerhouse
//                 </h1>

//                 <p className="text-xl text-white/70 mb-8 max-w-lg">
//                   Enterprise-grade ecommerce platform that scales with your
//                   business. From startups to global brands, we power the future
//                   of online retail.
//                 </p>

//                 {/* CTA Buttons */}
//                 <div className="flex flex-wrap gap-4 mb-12">
//                   <a
//                     href="#demo"
//                     className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden"
//                     style={{
//                       background: `linear-gradient(135deg, ${colors?.accent2 || "#008170"}, ${colors?.accent1 || "#005B41"})`,
//                       color: "white",
//                     }}
//                   >
//                     <span className="relative z-10">Start Free Trial</span>
//                     <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
//                     <div
//                       className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
//                       style={{ background: "white" }}
//                     />
//                   </a>
//                   <button
//                     onClick={() => setVideoModalOpen(true)}
//                     className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-200 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:-translate-y-1"
//                     style={{ color: "white" }}
//                   >
//                     <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                     Watch Demo
//                   </button>
//                 </div>
//               </div>

//               {/* Right Content - Hero Image */}
//               <div className="relative">
//                 <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
//                   <img
//                     src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
//                     alt="Ecommerce Dashboard"
//                     className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
//                   />
//                   <div
//                     className="absolute inset-0"
//                     style={{
//                       background: `linear-gradient(135deg, ${colors?.accent2 || "#008170"}40, transparent, ${colors?.accent1 || "#005B41"}40)`,
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <div className="py-20 bg-black/20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold text-white mb-4">
//                 Frequently Asked{" "}
//                 <span style={{ color: colors?.accent2 || "#008170" }}>
//                   Questions
//                 </span>
//               </h2>
//             </div>

//             <div className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <div
//                   key={index}
//                   className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-300"
//                 >
//                   <details className="group">
//                     <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
//                       <span className="text-white font-semibold group-hover:text-white transition-colors">
//                         {faq.question}
//                       </span>
//                       <ChevronRight
//                         className="w-5 h-5 text-white/50 group-open:rotate-90 transition-transform group-hover:text-white/70"
//                         style={{ color: colors?.accent2 || "#008170" }}
//                       />
//                     </summary>
//                     <div className="px-6 pb-6 text-white/60">{faq.answer}</div>
//                   </details>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>


//         {/* Video Modal */}
//         {videoModalOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//             <div
//               className="absolute inset-0 bg-black/80 backdrop-blur-sm"
//               onClick={() => setVideoModalOpen(false)}
//             />
//             <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-4xl w-full overflow-hidden transform scale-0 animate-modalIn">
//               <button
//                 onClick={() => setVideoModalOpen(false)}
//                 className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
//               >
//                 <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
//               </button>
//               <div className="aspect-video">
//                 <img
//                   src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
//                   alt="Video thumbnail"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/50 transform hover:scale-110 transition-all duration-300 group">
//                     <Play className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translate(0, 0) scale(1);
//           }
//           25% {
//             transform: translate(10px, -10px) scale(1.05);
//           }
//           50% {
//             transform: translate(-5px, 20px) scale(0.95);
//           }
//           75% {
//             transform: translate(-15px, -5px) scale(1.02);
//           }
//         }
//         @keyframes modalIn {
//           from {
//             transform: scale(0.8);
//             opacity: 0;
//           }
//           to {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }
//         .animate-float {
//           animation: float 15s infinite ease-in-out;
//         }
//         .animate-modalIn {
//           animation: modalIn 0.3s ease-out forwards;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         details > summary {
//           list-style: none;
//         }
//         details > summary::-webkit-details-marker {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default EcommerceSolutionsPage;










































// EcommerceSolutionsPage.jsx
import React, { useState } from "react";
import {
  ShoppingCart,
  CreditCard,
  Package,
  Truck,
  BarChart3,
  Users,
  Globe,
  Smartphone,
  Laptop,
  TrendingUp,
  DollarSign,
  ShoppingBag,
  Store,
  Wallet,
  Shield,
  Lock,
  Eye,
  Bell,
  Mail,
  ChevronRight,
  CheckCircle,
  RefreshCw,
  Settings,
  Zap,
  Clock,
  MapPin,
  FileText,
  Search,
  Heart,
  Star,
  Award,
  PieChart,
  Calendar,
  ThumbsUp,
  Share2,
  ExternalLink,
  Play,
  X,
  Menu,
  ArrowRight,
  Gift,
  Tag,
  CreditCard as CreditCardIcon,
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Maximize2,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const EcommerceSolutionsPage = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  // Use theme hook
  const { colors, loading, error, refreshTheme } = useTheme();

  const stats = [
    {
      value: "$2.5B+",
      label: "Annual GMV Processed",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      value: "98.5%",
      label: "Customer Satisfaction",
      icon: <ThumbsUp className="w-6 h-6" />,
    },
    {
      value: "150+",
      label: "Enterprise Clients",
      icon: <Store className="w-6 h-6" />,
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  const features = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Smart Cart & Checkout",
      description:
        "AI-powered checkout optimization that increases conversion rates by up to 35%.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: colors?.accent2 || "#008170",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Intelligent Inventory",
      description:
        "Predictive stock management with automated reordering and demand forecasting.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: colors?.accent1 || "#005B41",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer 360 View",
      description:
        "Unified customer profiles with purchase history, preferences, and behavior analytics.",
      image:
        "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: colors?.accent2 || "#008170",
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Sub-second page loads and instant checkout processing",
      stat: "0.8s",
      statLabel: "Avg. Load Time",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Bank-Level Security",
      description: "PCI DSS Level 1 compliant with real-time fraud protection",
      stat: "99.99%",
      statLabel: "Security Score",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Ready",
      description: "Multi-currency, multi-language, and international shipping",
      stat: "135+",
      statLabel: "Countries",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Architecture",
      description: "Handles traffic spikes during sales and peak seasons",
      stat: "1M+",
      statLabel: "Concurrent Users",
    },
  ];

  const caseStudies = [
    {
      company: "FashionHub",
      industry: "Retail & Apparel",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      logo: "FH",
      results: [
        { label: "Revenue Increase", value: "+156%" },
        { label: "Cart Abandonment", value: "-42%" },
        { label: "Mobile Conversion", value: "+89%" },
      ],
      color: colors?.accent2 || "#008170",
    },
    {
      company: "TechGadgets",
      industry: "Electronics",
      image:
        "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      logo: "TG",
      results: [
        { label: "Order Volume", value: "15K/mo" },
        { label: "Avg. Order Value", value: "$245" },
        { label: "Repeat Customers", value: "67%" },
      ],
      color: colors?.accent1 || "#005B41",
    },
    {
      company: "OrganicMarket",
      industry: "Grocery & Food",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      logo: "OM",
      results: [
        { label: "Customer Base", value: "50K+" },
        { label: "Delivery Time", value: "<2hrs" },
        { label: "Subscription Rate", value: "43%" },
      ],
      color: colors?.accent2 || "#008170",
    },
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "1,999",
      period: "month",
      description: "Perfect for new online stores and small catalogs",
      features: [
        "Up to 1,000 products",
        "Basic analytics",
        "Email support",
        "3 payment gateways",
        "Mobile responsive",
        "Basic SEO tools",
      ],
      limitations: ["No multi-currency", "Limited customization"],
      cta: "Start Selling",
      popular: false,
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Growth",
      price: "3,999",
      period: "month",
      description: "Ideal for scaling businesses with advanced needs",
      features: [
        "Up to 10,000 products",
        "Advanced analytics & reports",
        "24/7 priority support",
        "All payment gateways",
        "Multi-currency support",
        "Advanced SEO",
        "Abandoned cart recovery",
        "Marketing automation",
      ],
      limitations: [],
      cta: "Scale Your Business",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For high-volume merchants with complex requirements",
      features: [
        "Unlimited products",
        "Custom analytics",
        "Dedicated account manager",
        "Custom integrations",
        "Multi-warehouse support",
        "SLA guarantees",
        "Advanced security",
        "International shipping",
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
      image:
        "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const integrations = [
    {
      category: "Payments",
      items: [
        "Stripe",
        "PayPal",
        "Square",
        "Authorize.net",
        "Braintree",
        "Adyen",
      ],
      icon: <CreditCardIcon className="w-5 h-5" />,
    },
    {
      category: "Shipping",
      items: ["ShipStation", "EasyPost", "Shippo", "FedEx", "UPS", "DHL"],
      icon: <Truck className="w-5 h-5" />,
    },
    {
      category: "Marketing",
      items: [
        "Mailchimp",
        "Klaviyo",
        "HubSpot",
        "Google Ads",
        "Facebook",
        "Instagram",
      ],
      icon: <Mail className="w-5 h-5" />,
    },
    {
      category: "Analytics",
      items: [
        "Google Analytics",
        "Mixpanel",
        "Amplitude",
        "Hotjar",
        "Segment",
        "Looker",
      ],
      icon: <BarChart3 className="w-5 h-5" />,
    },
  ];

  const testimonials = [
    {
      quote:
        "This platform transformed our online business. We've seen unprecedented growth and our customers love the shopping experience.",
      author: "Jennifer Walsh",
      role: "Founder, Walsh Boutique",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      company: "Walsh Boutique",
    },
    {
      quote:
        "The multi-channel integration capabilities are outstanding. We manage 5 stores across 3 countries seamlessly.",
      author: "David Park",
      role: "Ecommerce Director, TechWorld",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      company: "TechWorld",
    },
    {
      quote:
        "Their enterprise solution scaled with us from 100 to 50,000 products. The support team is exceptional.",
      author: "Maria Garcia",
      role: "CEO, HomeLiving",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      company: "HomeLiving",
    },
  ];

  const faqs = [
    {
      question: "How quickly can I launch my store?",
      answer:
        "With our starter template, you can launch in as little as 2 weeks. Custom enterprise solutions typically take 4-8 weeks depending on complexity.",
    },
    {
      question: "Do you support B2B and wholesale?",
      answer:
        "Yes, our platform supports B2B with custom pricing, bulk ordering, and approval workflows for enterprise clients.",
    },
    {
      question: "Can I migrate my existing store?",
      answer:
        "Absolutely! We offer free migration services from major platforms like Shopify, Magento, WooCommerce, and custom solutions.",
    },
    {
      question: "What about PCI compliance?",
      answer:
        "We are PCI DSS Level 1 compliant and handle all compliance requirements, keeping your customer data secure.",
    },
  ];

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Analytics Dashboard",
      description: "Real-time insights and performance metrics",
      category: "Dashboard",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Smart Checkout",
      description: "Seamless payment processing",
      category: "Checkout",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Inventory Management",
      description: "Real-time stock tracking",
      category: "Inventory",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Analytics Reports",
      description: "Comprehensive data visualization",
      category: "Analytics",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Customer Insights",
      description: "360-degree customer view",
      category: "Analytics",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Mobile Experience",
      description: "Responsive design on all devices",
      category: "Mobile",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Marketing Tools",
      description: "Campaign management and automation",
      category: "Marketing",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Performance Metrics",
      description: "Track key business indicators",
      category: "Analytics",
    },
  ];

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

  const openImageModal = (image) => {
    setSelectedImage(image);
    setImageModalOpen(true);
  };

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
          background: `linear-gradient(135deg, ${colors?.primary || "#0F0F0F"} 0%, ${colors?.secondary || "#232D3F"} 50%, ${colors?.accent1 || "#005B41"} 100%)`,
        }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="fixed rounded-full animate-ping"
          style={{
            width: Math.random() * 4 + 2 + "px",
            height: Math.random() * 4 + 2 + "px",
            backgroundColor:
              i % 2 === 0
                ? colors?.accent2 || "#008170"
                : colors?.accent1 || "#005B41",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.3}s`,
            opacity: 0.1,
            zIndex: 0,
          }}
        />
      ))}

      {/* Floating Elements */}
      <div
        className="fixed top-40 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-float"
        style={{ background: colors?.accent2 || "#008170", opacity: 0.1 }}
      />
      <div
        className="fixed bottom-40 right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000"
        style={{ background: colors?.accent1 || "#005B41", opacity: 0.1 }}
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
                    background: `${colors?.accent2 || "#008170"}20`,
                    borderColor: `${colors?.accent2 || "#008170"}40`,
                  }}
                >
                  <ShoppingCart
                    className="w-4 h-4"
                    style={{ color: colors?.accent2 || "#008170" }}
                  />
                  <span>Ecommerce Solutions</span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Transform Your{" "}
                  <span
                    className="relative inline-block group"
                    style={{ color: colors?.accent2 || "#008170" }}
                  >
                    Online Store
                    <span
                      className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-1 transition-all duration-300"
                      style={{
                        background: `linear-gradient(to right, ${colors?.accent2 || "#008170"}, ${colors?.accent1 || "#005B41"})`,
                      }}
                    />
                  </span>
                  <br />
                  Into a Sales Powerhouse
                </h1>

                <p className="text-xl text-white/70 mb-8 max-w-lg">
                  Enterprise-grade ecommerce platform that scales with your
                  business. From startups to global brands, we power the future
                  of online retail.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-12">
                  <a
                    href="#demo"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${colors?.accent2 || "#008170"}, ${colors?.accent1 || "#005B41"})`,
                      color: "white",
                    }}
                  >
                    <span className="relative z-10">Start Free Trial</span>
                    <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ background: "white" }}
                    />
                  </a>
                  <button
                    onClick={() => setVideoModalOpen(true)}
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-200 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:-translate-y-1"
                    style={{ color: "white" }}
                  >
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Right Content - Hero Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Ecommerce Dashboard"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${colors?.accent2 || "#008170"}40, transparent, ${colors?.accent1 || "#005B41"}40)`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NEW SECTION 1: Feature Showcase - Image Left, Content Right */}
        <div className="py-20 bg-black/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image */}
              <div className="relative group">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Ecommerce Platform Dashboard"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${colors?.accent2 || "#008170"}20, transparent, ${colors?.accent1 || "#005B41"}20)`,
                    }}
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div>
                <div
                  className="inline-flex items-center gap-2 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border"
                  style={{
                    background: `${colors?.accent1 || "#005B41"}20`,
                    borderColor: `${colors?.accent1 || "#005B41"}40`,
                  }}
                >
                  <TrendingUp className="w-4 h-4" style={{ color: colors?.accent2 || "#008170" }} />
                  <span>AI-Powered Intelligence</span>
                </div>

                <h2 className="text-4xl font-bold text-white mb-6">
                  Smart Features That
                  <span className="block" style={{ color: colors?.accent2 || "#008170" }}>
                    Drive Results
                  </span>
                </h2>

                <p className="text-lg text-white/70 mb-8">
                  Our platform leverages cutting-edge AI and machine learning to provide
                  intelligent recommendations, automated workflows, and actionable insights
                  that help you make data-driven decisions.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: colors?.accent2 || "#008170" }} />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Personalized Recommendations</h3>
                      <p className="text-white/60 text-sm">AI-driven product suggestions that increase average order value by 25%</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: colors?.accent2 || "#008170" }} />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Automated Marketing Campaigns</h3>
                      <p className="text-white/60 text-sm">Smart segmentation and triggered emails for maximum engagement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: colors?.accent2 || "#008170" }} />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Predictive Analytics</h3>
                      <p className="text-white/60 text-sm">Forecast trends and optimize inventory before demand spikes</p>
                    </div>
                  </div>
                </div>

                <button
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:-translate-y-1"
                  style={{ color: "white" }}
                >
                  Learn More About AI Features
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* NEW SECTION 2: Image Gallery */}
        <div className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Platform{" "}
                <span style={{ color: colors?.accent2 || "#008170" }}>
                  Showcase
                </span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Explore our powerful features through these screenshots of the platform in action
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => openImageModal(image)}
                >
                  <div className="aspect-square overflow-hidden bg-gray-800">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-sm mb-1">{image.title}</p>
                      <p className="text-white/60 text-xs">{image.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div
                    className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium bg-white/20 backdrop-blur-sm text-white"
                  >
                    {image.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Frequently Asked{" "}
                <span style={{ color: colors?.accent2 || "#008170" }}>
                  Questions
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-300"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="text-white font-semibold group-hover:text-white transition-colors">
                        {faq.question}
                      </span>
                      <ChevronRight
                        className="w-5 h-5 text-white/50 group-open:rotate-90 transition-transform group-hover:text-white/70"
                        style={{ color: colors?.accent2 || "#008170" }}
                      />
                    </summary>
                    <div className="px-6 pb-6 text-white/60">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setVideoModalOpen(false)}
            />
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-4xl w-full overflow-hidden transform scale-0 animate-modalIn">
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
              >
                <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              <div className="aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/50 transform hover:scale-110 transition-all duration-300 group">
                    <Play className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Image Modal for Gallery - FIXED VERSION */}
        {imageModalOpen && selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ zIndex: 9999 }}>
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setImageModalOpen(false)}
              style={{ cursor: "pointer" }}
            />
            <div className="relative max-w-6xl w-full max-h-[90vh] rounded-2xl overflow-hidden transform scale-0 animate-modalIn">
              <button
                onClick={() => setImageModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors group"
              >
                <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              <div className="relative w-full h-full flex items-center justify-center bg-black/50">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-auto h-auto max-w-full max-h-[85vh] object-contain"
                  style={{ display: "block", margin: "0 auto" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-white/80">{selectedImage.description}</p>
                  <div className="inline-block mt-3 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm">
                    {selectedImage.category}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(10px, -10px) scale(1.05);
          }
          50% {
            transform: translate(-5px, 20px) scale(0.95);
          }
          75% {
            transform: translate(-15px, -5px) scale(1.02);
          }
        }
        @keyframes modalIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
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
        details > summary {
          list-style: none;
        }
        details > summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default EcommerceSolutionsPage;