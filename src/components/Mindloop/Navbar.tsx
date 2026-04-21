import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/vex" }
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-12 lg:px-20 py-6 bg-transparent">
        {/* Left: Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 shrink-0 relative z-[70]"
        >
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://www.image2url.com/r2/default/images/1776396750717-e834779a-9a7c-4808-b04a-4f99074c9a56.png" 
              alt="AnfaGlobal Logo" 
              className="h-8 md:h-10 w-auto group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <span className="text-white font-bold tracking-normal text-2xl font-calligraphy lowercase first-letter:uppercase block">AnfaGlobal</span>
          </Link>
        </motion.div>

        {/* Center: Pill-shaped navigation (Desktop) */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hidden md:flex items-center bg-white/95 backdrop-blur-md rounded-full p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20"
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path.startsWith('/#') && location.hash === item.path.substring(1));
            const isAnchour = item.path.startsWith('/#');

            return isAnchour ? (
              <a 
                key={item.name}
                href={item.path}
                className="px-5 py-2 rounded-full text-[13px] font-semibold uppercase tracking-wider transition-all duration-300 text-black/60 hover:text-black hover:bg-black/5"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={`px-5 py-2 rounded-full text-[13px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive 
                    ? "bg-black text-white shadow-lg" 
                    : "text-black/60 hover:text-black hover:bg-black/5"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </motion.div>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-[70]">
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="shrink-0 hidden sm:block"
          >
            <a 
              href={`https://wa.me/33644654541?text=${encodeURIComponent('السلام عليكم 👋\nبغيت تحليل مجاني للبزنس ديالي، ممكن التفاصيل؟')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] bg-neon text-black shadow-[0_0_20px_rgba(111,255,0,0.3)] hover:shadow-[0_0_30px_rgba(111,255,0,0.5)] hover:bg-[#80FF00] transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Get Free Analysis
            </a>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white md:hidden border border-white/10 hover:bg-white/20 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 md:hidden"
          >
            <div className="flex flex-col items-center gap-8 w-full max-w-sm">
              {navItems.map((item, i) => {
                const isActive = location.pathname === item.path || (item.path.startsWith('/#') && location.hash === item.path.substring(1));
                const isAnchour = item.path.startsWith('/#');

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    {isAnchour ? (
                      <a 
                        href={item.path}
                        className={`text-3xl font-bold uppercase tracking-tighter ${isActive ? "text-neon" : "text-white/60 hover:text-white"}`}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className={`text-3xl font-bold uppercase tracking-tighter ${isActive ? "text-neon" : "text-white/60 hover:text-white"}`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="w-full pt-8 mt-8 border-t border-white/10"
              >
                <a 
                  href={`https://wa.me/33644654541?text=${encodeURIComponent('السلام عليكم 👋\nبغيت تحليل مجاني للبزنس ديالي، ممكن التفاصيل؟')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-6 rounded-2xl text-sm font-bold uppercase tracking-[0.2em] bg-neon text-black text-center shadow-[0_20px_40px_rgba(111,255,0,0.2)]"
                >
                  Get Free Analysis
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
