import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import synergixLogo from "@/assets/synergix-logo.png";
import heroBg from "/hero-bg.mp4";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroBg}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* <div className="absolute inset-0 gradient-hero z-0" /> */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src={synergixLogo} 
              alt="SYNERGIX" 
              className="h-32 md:h-40 w-auto mx-auto mb-6 glow-effect"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow">
            Where Innovation
            <span className="block gradient-primary bg-clip-text text-transparent">
              Meets Code
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the ultimate 24-hour hackathon experience. Build revolutionary solutions, 
            connect with brilliant minds, and compete for incredible prizes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://reskilll.com/hack/synergixhackathon" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gradient-primary glow-effect text-lg px-8 py-3">
                Register on Reskill
              </Button>
            </a>
            {/* <a href="https://unstop.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gradient-primary glow-effect text-lg px-8 py-3">
                Submit of Unstop
              </Button>
            </a>*/}
            {/* <Button
              size="lg"
              variant="outline"
              className="border-glow text-lg px-8 py-3"
              onClick={() => navigate('/leaderboard')}
            >
              Leaderboard
            </Button> */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {/* <div className="flex items-center justify-center space-x-3 text-foreground">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-medium">March 15-17, 2024</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium">Tech Innovation Hub</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-foreground">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-medium">500+ Participants</span>
            </div> */}
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      {/* <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse opacity-50" /> */}
    </section>
  );
};

export default Hero;