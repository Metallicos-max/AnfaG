import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-6 pt-32 pb-40">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Subtle overlay to ensure text readability if needed, though user asked for no radial gradients/blobs */}
        {/* I will stick to the user's request of "No decorative blobs, radial gradients, or overlays" */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <h1 
          className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] font-normal text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Grow your <em className="not-italic text-muted-foreground">business</em> <br className="hidden md:block" /> 
          with us
        </h1>
        
        <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          We’ve helped businesses grow, attract more clients, and build a strong online presence.
        </p>

        <div className="animate-fade-rise-delay-2 mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={`https://wa.me/33644654541?text=${encodeURIComponent('السلام عليكم 👋\nبغيت تحليل مجاني للبزنس ديالي، ممكن التفاصيل؟')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group liquid-glass border border-white/10 text-foreground px-10 py-5 rounded-full font-bold text-xs tracking-widest hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all uppercase flex items-center justify-center min-w-[200px]"
          >
            Get Free Analysis
          </a>
        </div>
      </div>
    </section>
  );
}
