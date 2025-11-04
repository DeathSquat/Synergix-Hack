import { Cpu, Globe2, Users, Database, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";

const Tracks = () => {
  const tracks = [
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "AI x Web3",
      description: "Build intelligent decentralized applications that leverage the power of AI and blockchain",
      technologies: ["Smart Contracts", "LLMs", "DeFi", "DAOs"]
    },
    {
      icon: <Globe2 className="h-8 w-8 text-primary" />,
      title: "Build for Bharat",
      description: "Create solutions addressing unique challenges and opportunities in the Indian market",
      technologies: ["Localization", "BharatGPT", "Fintech", "AgriTech"]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "DeSoc (Decentralized Social)",
      description: "Shape the future of social media with decentralized platforms",
      technologies: ["Lens Protocol", "Farcaster", "NFTs", "Web3 Auth"]
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "DePIN (Decentralized Infra)",
      description: "Build the infrastructure for a decentralized internet",
      technologies: ["Filecoin", "Arweave", "IPFS", "Helium"]
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Open Innovation",
      description: "Push boundaries with groundbreaking ideas and open-source solutions",
      technologies: ["Open Source", "Hackathons", "Community", "Grants"]
    }
  ];

  // Animation variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      id="tracks"
      className="py-20 bg-gradient-card bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ 
        backgroundImage: 'url("4.png")',
        backgroundColor: "rgba(0,0,0,0.6)",
        backgroundBlendMode: "darken" 
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">Competition</span>{' '}
            <span className="text-white">Tracks</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose your battlefield and compete in specialized tracks designed to showcase 
            different aspects of modern technology
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          variants={container}
        >
          {tracks.slice(0, 3).map((track, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              className="h-full"
            >
              <Card className="gradient-card border-glow hover:shadow-glow transition-all duration-300 group h-full">
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {track.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {track.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 text-center">
                    {track.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-primary text-center">
                      KEY FOCUS AREAS:
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {track.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.05 }}
                          className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={container}
        >
          {tracks.slice(3).map((track, index) => (
            <motion.div 
              key={index + 3}
              variants={item}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              className="h-full"
            >
              <Card className="gradient-card border-glow hover:shadow-glow transition-all duration-300 group h-full">
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {track.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {track.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 text-center">
                    {track.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-primary text-center">
                      KEY FOCUS AREAS:
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {track.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.05 }}
                          className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* <div className="text-center">
          <div className="gradient-card border-glow rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Can't Decide? No Problem!
            </h3>
            <p className="text-muted-foreground mb-4">
              You can participate in multiple tracks or create a solution that spans across categories. 
              Our judges will evaluate your project in the most relevant track.
            </p>
            <p className="text-sm text-primary font-medium">
              Total Prize Pool: <span className="text-2xl">$63,000+</span>
            </p>
          </div> */}
      </div>
    </motion.section>
  );
};

export default Tracks;