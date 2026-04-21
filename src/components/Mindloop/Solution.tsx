import { motion } from "motion/react";
import { fadeUp } from "./Navbar";

const features = [
  {
    title: "Websites & Online Stores",
    description: "We build high-converting websites and online stores designed to turn visitors into real customers."
  },
  {
    title: "Video Ads & Content Creation",
    description: "We create engaging video ads (AI & UGC) that capture attention and drive real results."
  },
  {
    title: "Social Media Ads Management",
    description: "We run targeted Facebook & Instagram campaigns that bring consistent leads and clients to your business."
  },
  {
    title: "Growth Strategy & Optimization",
    description: "We optimize your entire marketing system to increase conversions and maximize your results."
  }
];

export function Solution() {
  return (
    <section className="bg-background py-32 md:py-44 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.span 
          {...fadeUp(0)}
          className="text-xs tracking-[3px] uppercase text-muted-foreground font-semibold mb-6 block"
        >
          SOLUTION
        </motion.span>

        <motion.h2 
          {...fadeUp(0.1)}
          className="text-4xl md:text-6xl font-medium tracking-tight text-foreground mb-20 max-w-4xl"
        >
          The system that brings you real clients and business growth
        </motion.h2>

        {/* Highlight Video */}
        <motion.div 
          {...fadeUp(0.2)}
          className="w-full h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden mb-24 relative"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 hover:grayscale-0 hover:brightness-100"
          >
            <source 
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4" 
              type="video/mp4" 
            />
          </video>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={f.title}
              {...fadeUp(0.3 + i * 0.1)}
              className="flex flex-col gap-4"
            >
              <h3 className="text-foreground font-semibold text-base">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
