import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-12 px-8 md:px-28 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img 
            src="https://www.image2url.com/r2/default/images/1776396750717-e834779a-9a7c-4808-b04a-4f99074c9a56.png" 
            alt="AnfaGlobal Logo" 
            className="h-16 md:h-24 w-auto opacity-90"
            referrerPolicy="no-referrer"
          />
          <span className="text-foreground font-bold text-4xl md:text-6xl font-calligraphy lowercase first-letter:uppercase">AnfaGlobal</span>
        </div>
        <div className="text-muted-foreground text-sm font-medium">
          © 2026 AnfaGlobal. All rights reserved. Built for business growth.
        </div>
      </div>
      
      <div className="flex items-center gap-8">
        <Link to="/services" className="text-muted-foreground text-sm font-medium hover:text-foreground transition-colors">
          Services
        </Link>
        <a href="/#about-us" className="text-muted-foreground text-sm font-medium hover:text-foreground transition-colors">
          About Us
        </a>

        {/* Relocated Social Icons */}
        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
          {[
            { 
              src: "https://www.image2url.com/r2/default/images/1776441884172-00fa3139-045b-4ba9-b465-9f16c0ae2e44.png", 
              href: "https://www.instagram.com/anfaglobal.ma/" 
            },
            { 
              src: "https://www.image2url.com/r2/default/images/1776442102840-6a64696c-9dfe-4f25-93ff-529d736a1886.png",
              href: "https://www.tiktok.com/@bashitoken" 
            },
            {
              src: "https://www.image2url.com/r2/default/images/1776792714410-e00fa0bc-2454-40ef-b468-974bd23ff1c6.png",
              href: "https://www.facebook.com/profile.php?id=61573278755734"
            }
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform p-1 inline-block"
            >
              <img 
                src={social.src} 
                alt="Social" 
                className="h-5 w-auto object-contain" 
                referrerPolicy="no-referrer"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
