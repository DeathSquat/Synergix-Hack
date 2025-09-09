import { Brain, Globe, Shield, Smartphone, Zap, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Tracks = () => {
  const tracks = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI & Machine Learning",
      description: "Build intelligent solutions using cutting-edge AI technologies",
      technologies: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face"],
      // prize: "$15,000"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Web3 & Blockchain",
      description: "Create decentralized applications and blockchain solutions",
      technologies: ["Ethereum", "Solidity", "IPFS", "MetaMask"],
      // prize: "$12,000"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Mobile Innovation",
      description: "Develop next-generation mobile applications",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      // prize: "$10,000"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Cybersecurity",
      description: "Build tools and solutions for digital security",
      technologies: ["Penetration Testing", "Cryptography", "Security Auditing"],
      // prize: "$10,000"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "IoT & Hardware",
      description: "Create innovative IoT solutions and hardware integrations",
      technologies: ["Arduino", "Raspberry Pi", "Sensors", "Edge Computing"],
      // prize: "$8,000"
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Data Science",
      description: "Extract insights and build predictive models from data",
      technologies: ["Python", "R", "Jupyter", "Pandas", "Scikit-learn"],
      // prize: "$8,000"
    }
  ];

  return (
    <section
      id="tracks"
      className="py-20 bg-gradient-card bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("4.png")',
      backgroundColor: "rgba(0,0,0,0.6)",
      backgroundBlendMode: "darken" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Competition <span className="gradient-primary bg-clip-text text-transparent">Tracks</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose your battlefield and compete in specialized tracks designed to showcase 
            different aspects of modern technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tracks.map((track, index) => (
            <Card key={index} className="gradient-card border-glow hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {track.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {track.title}
                </CardTitle>
                <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                  {/* {track.prize} */}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-center">
                  {track.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-primary text-center">
                    Recommended Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {track.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Tracks;