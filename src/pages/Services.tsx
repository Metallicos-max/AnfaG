import { SynapseHero } from "../components/Synapse/Hero";
import { Navbar } from "../components/Mindloop/Navbar";
import { motion } from "motion/react";
import { 
  Globe, 
  ShoppingCart, 
  Video, 
  BarChart3, 
  Layers, 
  MapPin, 
  MessageSquare, 
  Mail, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const servicesData = [
  {
    title: "Websites & Landing Pages",
    icon: <Globe className="w-6 h-6" />,
    items: ["Business websites", "Landing pages", "Mobile optimization", "SEO-ready structure"]
  },
  {
    title: "E-commerce Store Setup",
    icon: <ShoppingCart className="w-6 h-6" />,
    items: ["Product setup", "Payment integration", "Shopping cart system", "Conversion-focused design"]
  },
  {
    title: "AI UGC Video Advertising",
    icon: <Video className="w-6 h-6" />,
    items: ["Script creation", "AI presenters", "Product-focused ads", "Ready for paid campaigns"]
  },
  {
    title: "Social Media Ads Management",
    icon: <BarChart3 className="w-6 h-6" />,
    items: ["Campaign setup", "Audience targeting", "Ad optimization", "Performance tracking"]
  },
  {
    title: "Short-Form Video Content",
    icon: <Layers className="w-6 h-6" />,
    items: ["Editing & captions", "Social-ready delivery", "Trend-based content", "Vertical format"]
  },
  {
    title: "Logo & Brand Identity",
    icon: <Layers className="w-6 h-6" />,
    items: ["Unique logo concepts", "Multiple revisions", "High-quality formats", "Social media-ready files"]
  },
  {
    title: "Google Maps Optimization",
    icon: <MapPin className="w-6 h-6" />,
    items: ["Profile creation", "Map verification guidance", "SEO optimization", "Business information setup"]
  },
  {
    title: "WhatsApp Automation",
    icon: <MessageSquare className="w-6 h-6" />,
    items: ["Automated replies & workflows", "Lead capture messages", "Appointment automation", "System integration"]
  },
  {
    title: "Email Marketing & Automation",
    icon: <Mail className="w-6 h-6" />,
    items: ["Campaign design & setup", "Automated sequences", "Newsletter creation", "Lead nurturing funnels"]
  }
];

export function Services() {
  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-white/30">
      <Navbar />
      
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <SynapseHero />
      </div>

      {/* Content Layer */}
      <main className="relative z-10 pt-48 pb-32 px-6 sm:px-12 lg:px-28">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-32"
          >
            <h2 className="text-5xl md:text-7xl font-grotesk uppercase tracking-tighter mb-8 leading-none">
              Strategic <span className="text-neon">Growth</span> Systems
            </h2>
            <p className="text-white/60 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
              We help elite businesses dominate their markets through sophisticated digital ecosystems, AI video marketing, and automated conversion funnels.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative p-10 rounded-[40px] border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden hover:bg-black/60 transition-colors"
              >
                {/* Neon Accent Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-neon/10 blur-[80px] group-hover:bg-neon/30 transition-all duration-500" />
                
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 border border-white/10 text-neon group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(111,255,0,0.2)] transition-all">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-grotesk uppercase mb-8 tracking-tight text-white group-hover:text-neon transition-colors">
                  {service.title}
                </h3>

                <ul className="space-y-5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-4 text-white/40 group-hover:text-white/70 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-neon shrink-0 mt-0.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                      <span className="font-mono text-[13px] uppercase tracking-[0.1em]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Final Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-40 text-center"
          >
            <div className="relative inline-flex flex-col items-center gap-10 p-16 rounded-[60px] border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-2xl group overflow-hidden">
              {/* Decorative Background Beam */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-neon/50 to-transparent opacity-30" />
              
              <div className="relative z-10 flex flex-col items-center gap-6">
                <span className="text-neon text-sm font-bold tracking-[0.3em] uppercase">Ready to scale?</span>
                <h3 className="text-4xl md:text-6xl font-grotesk uppercase tracking-tighter leading-[0.9]">
                  Start Growing <br /> Your Business Today
                </h3>
              </div>
              
              <a 
                href={`https://wa.me/33644654541?text=${encodeURIComponent('السلام عليكم 👋\nبغيت تحليل مجاني للبزنس ديالي، ممكن التفاصيل؟')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex items-center gap-4 px-12 py-6 rounded-full bg-white text-black font-black text-xl hover:bg-neon hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.5)] group/btn"
              >
                Get Free Analysis
                <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
              </a>

              {/* Bottom Edge Glow */}
              <div className="absolute inset-x-10 bottom-0 h-1 bg-neon shadow-[0_0_30px_rgba(111,255,0,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>
      </main>

      {/* Background Mask to ensure readability */}
      <div className="fixed inset-0 z-5 pointer-events-none bg-black/40" />
    </div>
  );
}
