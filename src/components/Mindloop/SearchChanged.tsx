import { motion } from "motion/react";
import { fadeUp } from "./Navbar";

const platforms = [
  {
    name: "Websites",
    icon: "https://www.image2url.com/r2/default/images/1776394522569-18b5528c-4565-4a8c-be47-e85c89802fd6.png", 
    description: "We design professional websites and online stores that turn visitors into paying customers."
  },
  {
    name: "Online Store Creation",
    icon: "https://www.image2url.com/r2/default/images/1776394706042-98d1d339-b4cd-424e-9a42-e7be09c3acff.png", 
    description: "We build high-converting online stores to help you sell your products"
  },
  {
    name: "Social Media Ads Management",
    icon: "https://www.image2url.com/r2/default/images/1776394823500-b41e89f3-4327-4de7-ae83-6394a15d2e63.png",
    description: "We manage your Facebook & Instagram ads to bring real clients and consistent leads to your business."
  }
];

export function SearchChanged() {
  return (
    <section className="bg-background pt-52 md:pt-64 pb-6 md:pb-9 px-6 flex flex-col items-center text-center">
      <motion.h2 
        {...fadeUp(0)}
        className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-12 max-w-5xl"
      >
        How We <span className="font-display italic">Help</span> You Grow
      </motion.h2>

      <motion.p 
        {...fadeUp(0.1)}
        className="text-muted-foreground text-lg max-w-2xl mx-auto mb-24 leading-relaxed"
      >
        We combine websites, content, and ads to create a system that brings you clients consistently.
      </motion.p>

      {/* Platform Cards */}
      <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20 w-full max-w-7xl">
        {platforms.map((p, i) => (
          <motion.div 
            key={p.name}
            {...fadeUp(0.2 + i * 0.1)}
            className="flex flex-col items-center group cursor-default"
          >
            <div className="w-48 h-48 mb-8 overflow-hidden rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors">
              <img 
                src={p.icon} 
                alt={p.name} 
                className="w-full h-full object-contain grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" 
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-foreground font-semibold text-base mb-3">{p.name}</h3>
            <p className="text-muted-foreground text-sm max-w-xs">{p.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.p 
        {...fadeUp(0.6)}
        className="text-muted-foreground text-sm font-medium tracking-wide uppercase opacity-50"
      >
        Your growth is our only metric of success.
      </motion.p>
    </section>
  );
}
