import { useState, useEffect } from "react";
import SamuraiLoader from "@/components/SamuraiLoader";
import ParallaxBackground from "@/components/ParallaxBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Tracks from "@/components/Tracks";
import Rewards from "@/components/Rewards";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import DigitalSwag from "@/components/DigitalSwag";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 200);
  };

  useEffect(() => {
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  if (isLoading) {
    return <SamuraiLoader onLoadComplete={handleLoadComplete} />;
  }

  return (
    <>
      <ParallaxBackground />
      <div className={`min-h-screen bg-background transition-opacity duration-500 relative z-10 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="animate-fade-in">
          <Navbar />
        </div>
        <div className="animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
          <Hero />
        </div>
        <div className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
          <About />
        </div>
        <div className="animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
          <Timeline />
        </div>
        <div className="animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
          <Tracks />
        </div>
        <div className="animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
          <Rewards />
        </div>
        <div className="animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
          <Sponsors />
        </div>
        <div className="animate-slide-in-up" style={{ animationDelay: '0.7s' }}>
          <Team />
        </div>
        <div className="animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
          <FAQ />
        </div>
        <div className="animate-slide-in-up" style={{ animationDelay: '0.9s' }}>
          <DigitalSwag />
        </div>
        <div className="animate-slide-in-up" style={{ animationDelay: '1s' }}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;