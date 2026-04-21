import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function WordReveal({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const words = text.split(" ");
  
  return (
    <div ref={containerRef} className="flex flex-wrap justify-center gap-x-[0.35em] gap-y-[0.1em]">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
        
        // Highlight logic
        const isHighlight = ["marketing", "systems", "clients", "results", "visibility", "leads", "customers"].includes(word.toLowerCase().replace(/[—,.]/g, ""));
        
        return (
          <motion.span 
            key={i} 
            style={{ opacity }}
            className={`cursor-default ${isHighlight ? "text-foreground" : "text-hero-subtitle"}`}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}

export function Mission() {
  return (
    <section className="bg-background pt-0 pb-32 md:pb-44 px-6 flex flex-col items-center">
      {/* Centered Video */}
      <div className="w-full max-w-4xl mb-32 h-[80vh] flex items-center justify-center relative group">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain rounded-3xl"
        >
          <source 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Animated Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center pointer-events-none">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            We Build Systems That <br className="hidden sm:block" /> Bring You Clients
          </motion.h2>
        </div>
      </div>

      <div className="max-w-5xl text-center space-y-20">
        <div className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-tight">
          <WordReveal text="We help businesses grow by building complete marketing systems that bring real clients." />
        </div>

        <div className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed opacity-60">
          <WordReveal text="From websites to video ads and social media campaigns, we focus on results, not just design or content." />
        </div>

        <div className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed opacity-60">
          <WordReveal text="Our goal is simple — more visibility, more leads, and more customers for your business." />
        </div>
      </div>
    </section>
  );
}
