import { Hero } from "../components/Hero";
import { Navbar as MindloopNavbar } from "../components/Mindloop/Navbar";
import { Hero as MindloopHero } from "../components/Mindloop/Hero";
import { SearchChanged } from "../components/Mindloop/SearchChanged";
import { Mission } from "../components/Mindloop/Mission";
import { Solution } from "../components/Mindloop/Solution";
import { CTA } from "../components/Mindloop/CTA";
import { OrbisNft } from "../components/OrbisNft";
import { Footer } from "../components/Mindloop/Footer";

export function Home() {
  return (
    <>
      <MindloopNavbar />
      <Hero />

      {/* Mindloop Landing Page */}
      <div className="relative bg-background border-t-4 border-[#222]">
        <MindloopHero />
        <SearchChanged />
        <Mission />
        <Solution />
        <div id="contact-us">
          <CTA />
        </div>
      </div>

      {/* Orbis NFT Section */}
      <div className="relative border-t-4 border-orbis-bg">
        <OrbisNft />
      </div>

      <Footer />
    </>
  );
}
