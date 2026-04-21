import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { fadeUp } from "./Navbar";

export function CTA() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsUrl = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => video.play());
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
      video.addEventListener("loadedmetadata", () => video.play());
    }
  }, []);

  return (
    <section className="relative py-32 md:py-44 px-6 border-t border-white/5 overflow-hidden min-h-[60vh] flex items-center justify-center">
      {/* Background Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 grayscale"
      />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        {/* Logo Icon */}
        <motion.div 
          {...fadeUp(0)}
          className="mb-10"
        >
          <img 
            src="https://www.image2url.com/r2/default/images/1776396750717-e834779a-9a7c-4808-b04a-4f99074c9a56.png" 
            alt="AnfaGlobal Logo" 
            className="h-12 w-auto mx-auto"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.h2 
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl font-medium tracking-tight text-foreground mb-6"
        >
          Start Getting More Clients Today
        </motion.h2>

        <motion.p 
          {...fadeUp(0.2)}
          className="text-muted-foreground text-lg mb-12 max-w-xl"
        >
          Ready to grow your business? Let us bring you real clients with proven marketing systems.
        </motion.p>

        <motion.div {...fadeUp(0.3)}>
          <a
            href={`https://wa.me/33644654541?text=${encodeURIComponent('السلام عليكم 👋\nبغيت تحليل مجاني للبزنس ديالي، ممكن التفاصيل؟')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-full text-sm font-bold uppercase tracking-[0.2em] bg-neon text-black shadow-[0_20px_40px_rgba(111,255,0,0.2)] hover:scale-105 transition-transform inline-block"
          >
            Get Free Analysis
          </a>
        </motion.div>
      </div>
    </section>
  );
}
