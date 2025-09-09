import { Code, Lightbulb, Trophy, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Innovation Challenge",
      description: "24 hours to build revolutionary solutions that push the boundaries of technology"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaborative Spirit",
      description: "Connect with brilliant minds from diverse backgrounds and skill sets"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Cutting-Edge Tech",
      description: "Access to latest tools, APIs, and technologies to bring your ideas to life"
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Epic Rewards",
      description: "Compete for amazing prizes and recognition in the tech community"
    }
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-card bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("2.jpg")',
      backgroundColor: "rgba(0,0,0,0.6)",
      backgroundBlendMode: "darken" }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            About <span className="gradient-primary bg-clip-text text-transparent">SYNERGIX</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SYNERGIX isn't just another hackathon—it's where innovation meets execution. 
            Join us for an intense 24-hour journey where creativity, technology, and collaboration 
            converge to create the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="gradient-card border-glow hover:shadow-glow transition-all duration-300 ">
              <CardContent className="p-6 text-center ">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto ">
          <div className="gradient-card border-glow rounded-lg p-8 md:p-12 bg-opacity-70">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              What Makes SYNERGIX Special?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-primary">Industry Mentorship</h4>
                <p className="text-muted-foreground mb-4">
                  Get guidance from top industry professionals and successful entrepreneurs 
                  throughout the event.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-primary">Real-World Impact</h4>
                <p className="text-muted-foreground mb-4">
                  Build solutions that address genuine problems and have the potential 
                  for real-world implementation.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-primary">Networking Opportunities</h4>
                <p className="text-muted-foreground mb-4">
                  Connect with like-minded innovators, potential co-founders, and 
                  industry leaders.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-primary">Post-Event Support</h4>
                <p className="text-muted-foreground mb-4">
                  Winners receive ongoing mentorship and potential funding opportunities 
                  to scale their solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;