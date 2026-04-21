import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Navbar } from "../components/Mindloop/Navbar";
import { Footer } from "../components/Mindloop/Footer";

interface CardData {
  title: string;
  subtitle: string;
  content: string;
  accent: string;
  image?: string;
  bullets?: string[];
}

interface StackedCardProps {
  card: CardData;
  index: number;
  total: number;
  key?: any;
}

function StackedCard({ card, index, total }: StackedCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scale down and fade as the NEXT card comes up
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section 
      ref={containerRef}
      className="sticky top-0 h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
      style={{ zIndex: index + 1 }}
    >
      <motion.div 
        style={{ 
          scale: index === total - 1 ? 1 : scale, 
          opacity: index === total - 1 ? 1 : opacity,
          filter: `blur(${index === total - 1 ? 0 : blur}px)`
        }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ 
          duration: 0.8, 
          ease: [0.22, 1, 0.36, 1],
        }}
        className="bg-white text-black rounded-[40px] md:rounded-[60px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] w-full max-w-6xl mx-auto overflow-hidden min-h-[50vh] md:min-h-[65vh] flex flex-col md:flex-row relative"
      >
        {/* Accent Background Glow */}
        <div className={`absolute top-0 right-0 w-1/2 h-full ${card.accent} blur-[120px] pointer-events-none opacity-50`} />
        
        {/* Card Content Left */}
        <div className="flex-1 p-8 md:p-20 flex flex-col justify-center relative z-10">
          <span className="text-black/40 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 md:mb-6 block">
            {card.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-grotesk uppercase tracking-tighter leading-[0.9] mb-6 md:mb-8">
            {card.title}
          </h2>
          <p className="text-black/60 text-base md:text-lg leading-relaxed max-w-md mb-6 md:mb-8">
            {card.content}
          </p>
          
          {card.bullets && (
            <div className="space-y-2 md:space-y-3">
              {card.bullets.map((bullet, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                  <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-black/80">{bullet}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Card Content Right - Visual Element */}
        {index === 0 && (
          <div className="flex-1 bg-black/[0.03] p-8 md:p-20 flex items-center justify-center relative min-h-[300px] md:min-h-full">
             {card.image ? (
               <div className="w-full h-full flex items-center justify-center relative p-8">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-contain drop-shadow-2xl relative z-10"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/5 to-transparent rounded-full blur-3xl" />
               </div>
             ) : (
               <div className="w-full aspect-square rounded-3xl border border-black/5 bg-white/50 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <div className="text-black/10 text-[12rem] font-black">{index + 1}</div>
               </div>
             )}
          </div>
        )}
      </motion.div>
    </section>
  );
}

export function Vex() {
  const cards: CardData[] = [
    {
      title: "Our History",
      subtitle: "The Agency Journey",
      content: "We started with a simple goal — to help businesses grow online with powerful and affordable digital solutions. Our team first met while studying at a digital marketing university, where we developed strong skills in websites, advertising, and content creation. Over time, we combined our expertise to work with different brands, delivering strategies that drive real results.",
      accent: "bg-blue-500/10",
      image: "https://www.image2url.com/r2/default/images/1776539228387-858d1c16-5c39-4b14-93b4-0e22b51573b1.png",
      bullets: ["Proven Digital Strategies", "All-in-One Services", "Focused on Your Success"]
    },
    {
      title: "How We Work?",
      subtitle: "Strategic Process",
      content: "Our process is simple, transparent, and focused on results. We take the time to understand your business, create a tailored strategy, and execute it with precision to help you grow faster and achieve your goals.",
      accent: "bg-neon/10",
      bullets: ["Strategic Consultation", "Precision Execution", "Results-Driven Growth"]
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans selection:bg-black selection:text-white overflow-x-hidden">
      <Navbar />
      
      {/* Fixed Video Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Dark Overlay for better readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Scrollable Content Container */}
      <main className="relative z-10">
        {/* Hero Section (Spacer to show background video) */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-6 pointer-events-none sticky top-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-8xl font-grotesk tracking-tighter uppercase mb-6 text-white drop-shadow-2xl">
              About AnfaGlobal
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium">
              We are a collective of digital experts dedicated to scaling businesses through precision and innovation.
            </p>
          </motion.div>
        </section>

        {/* Content Container */}
        <div className="relative px-4 md:px-8">
          {cards.map((card, index) => (
            <StackedCard 
              key={index} 
              card={card} 
              index={index}
              total={cards.length}
            />
          ))}
        </div>
      </main>

      {/* Footer Wrapper */}
      <div className="relative z-30 bg-background pt-12">
        <Footer />
      </div>
    </div>
  );
}
