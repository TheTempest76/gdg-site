'use client'
import BodyCarousel from "@/components/body-carousel";
import { HeroSection } from "@/components/herosection";
import { TeamSection } from "@/components/teamSection";
import Contact from "@/components/contactform";
import { Footer } from "@/components/footer";
export default function Home() {
  


  return (
    
    <div className="pt-14">
      <div id="about">
      <HeroSection />
      </div>
      <div id="gallery" className="text-white min-h-screen flex flex-col items-center justify-center mt-10">
        <h1 className="text-5xl font-bold mb-10">Gallery</h1>
        <div className="w-full max-w-4xl">
          <BodyCarousel />
        </div>
    

      </div>
      <div id="team">
      <TeamSection />
      </div>
      <div id="contactform">
        <div>
          <h1 className="text-5xl font-bold text-center mb-12">Contact Us</h1>
        </div>
      <Contact />
      </div>
      <div id="footer">
      <Footer />
      </div>
    </div>
  );
}
