import { motion } from "motion/react";
import { fadeUp } from "./Navbar";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 md:pt-32 max-w-5xl">
        {/* Avatar Row */}
        <motion.div 
           {...fadeUp(0)}
           className="flex items-center gap-3 mb-8"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`https://picsum.photos/seed/avatar${i + 5}/64/64`}
                alt="user"
                className="w-8 h-8 rounded-full border-2 border-background object-cover"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
          <span className="text-muted-foreground text-sm font-medium">Trusted by 30+ Business Owners</span>
        </motion.div>
 
        {/* Heading */}
        <motion.h1 
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] text-foreground mb-6"
        >
          Grow your <span className="font-display italic font-normal">business</span> with us
        </motion.h1>
 
        {/* Subtitle */}
        <motion.p 
          {...fadeUp(0.2)}
          className="text-lg md:text-xl text-hero-subtitle max-w-2xl mb-12 leading-relaxed"
        >
          We’ve helped businesses grow, attract more clients, and build a strong online presence.
        </motion.p>
      </div>
    </section>
  );
}
