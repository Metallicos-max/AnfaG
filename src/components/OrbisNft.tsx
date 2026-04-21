import { motion } from "motion/react";

const glassEffect = "liquid-glass";

export function OrbisNft() {
  return (
    <div className="bg-orbis-bg text-cream font-mono selection:bg-neon selection:text-orbis-bg relative overflow-hidden">
      <TextureOverlay />
      <Hero />
      <About />
      <Collection />
      <CTA />
    </div>
  );
}

function TextureOverlay() {
  return (
    <div 
      className="fixed inset-0 z-50 pointer-events-none opacity-60 mix-blend-lighten"
      style={{ 
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")', 
        backgroundSize: 'cover'
      }}
    />
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen w-full rounded-b-[32px] overflow-hidden flex flex-col">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 w-full max-w-[1831px] mx-auto px-6 lg:px-12 flex flex-col flex-1">
        {/* Header */}
        <header className="py-8 flex justify-between items-center">
          <div className="lg:hidden w-10"></div> {/* Spacer for logo centering if needed */}
        </header>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-center relative">
          <div className="relative max-w-[780px] lg:ml-32">
            <h1 className="font-grotesk text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] uppercase leading-[1.05] sm:leading-[1]">
              Beyond Marketing — <br />
              We Bring You Clients
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="relative min-h-screen w-full flex flex-col py-16 md:py-24 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 w-full max-w-[1831px] mx-auto px-6 lg:px-12 flex flex-col h-full justify-between gap-24">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="relative">
            <h2 className="font-grotesk text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase leading-tight">
              HELLO!<br />
              WE MEET EVERY WEEK
            </h2>
          </div>
          
          <p className="max-w-md text-sm md:text-base uppercase leading-relaxed text-cream">
            We work closely with our clients through weekly meetings to track progress, analyze performance, and guide your business toward real growth.
          </p>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-end gap-8">
          <div className="flex flex-col gap-4 max-w-[300px]">
            <p className="text-[14px] uppercase opacity-10 leading-relaxed lg:hidden block text-orbis-bg">
              Decorative text hidden on mobile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Collection() {
  const nfts = [
    {
      url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
      name: "Ayman",
      role: "Automation & Web Specialist",
      bio: "Builds websites & WhatsApp systems"
    },
    {
      url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4",
      name: "Achraf",
      role: "Ads & Traffic Manager",
      bio: "Runs Facebook & Instagram ads"
    },
    {
      url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
      name: "Simo",
      role: "Growth Strategist",
      bio: "Plans how to scale clients’ businesses"
    }
  ];

  return (
    <section className="bg-orbis-bg py-24 md:py-32">
      <div className="w-full max-w-[1831px] mx-auto px-6 lg:px-12">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-20">
          <div className="relative">
            <h2 className="font-grotesk text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase leading-tight">
              THE MINDS BEHIND<br />
              <span className="flex items-center">
                THE GROWTH
              </span>
            </h2>
          </div>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`${glassEffect} rounded-[32px] p-[18px] group transition-all duration-500`}
            >
              <div className="relative pb-[100%] rounded-[24px] overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={nft.url} type="video/mp4" />
                </video>
              </div>

              {nft.name && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-6 px-2 space-y-1"
                >
                  <h3 className="font-grotesk text-[24px] lg:text-[28px] uppercase text-neon leading-none">
                    {nft.name}
                  </h3>
                  <div className="flex flex-col gap-1">
                    <p className="font-grotesk text-[14px] uppercase tracking-wider text-cream/90">
                      {nft.role}
                    </p>
                    <p className="font-condiment text-[18px] text-cream/60 lowercase leading-tight">
                      {nft.bio}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-orbis-bg">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-6 text-center">
        <h2 className="font-grotesk text-[32px] sm:text-[48px] md:text-[60px] lg:text-[80px] uppercase leading-[1.05] max-w-[1000px] mb-12">
          Ready to Start <br />
          Getting More Clients?
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a 
            href={`https://wa.me/33644654541?text=${encodeURIComponent('السلام عليكم 👋\nبغيت تحليل مجاني للبزنس ديالي، ممكن التفاصيل؟')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neon text-black font-grotesk font-bold text-sm tracking-widest rounded-full px-10 py-5 uppercase hover:scale-105 transition-transform shadow-[0_0_30px_rgba(111,255,0,0.3)] inline-block"
          >
            Get Free Analysis
          </a>
          <a
            href={`https://wa.me/33644654541?text=${encodeURIComponent('سلام 👋\nأنا مهتم نخدم معاكم وبغيت نبدأ، واش ممكن تعطيو ليا تفاصيل أكثر؟')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${glassEffect} border border-white/10 text-cream font-grotesk font-bold text-sm tracking-widest rounded-full px-10 py-5 uppercase hover:bg-white/5 transition-colors flex items-center justify-center`}
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
