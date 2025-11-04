import { Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Team = () => {
  const organizers = [
    {
      name: "Punit Pal",
      role: "Founder of Builder Base",
      // bio: "Former Google engineer, startup founder, and hackathon enthusiast with 10+ years in tech.",
      avatar: "🤴",
      social: {
        linkedin: "https://www.linkedin.com/in/punit05/"
      }
    },
    {
      name: "Himanshi Pal",
      role: "Graphics Head",
      // bio: "AI researcher and developer advocate passionate about fostering innovation in tech communities.",
      avatar: "👩‍🔬",
      social: {
        linkedin: "https://www.linkedin.com/in/himanshi-designs/"
      }
    },
    {
      name: "Prachi Barua",
      role: "Content Head",
      // bio: "Event management expert with experience organizing large-scale tech conferences worldwide.",
      avatar: "👩‍💼",
      social: {
        linkedin: "https://www.linkedin.com/in/prachi-barua-3b4a8429b/"
      }
    },
    {
      name: "Apoorv Mehrotra",
      role: "PR and OutReach Head",
      // bio: "Developer relations specialist focused on building inclusive and vibrant tech communities.",
      avatar: "👨‍💼",
      social: {
        linkedin: "https://www.linkedin.com/in/its-apoorv-/"
      }
    },
    {
      name: "Nishchay Chaurasia",
      role: "The OG Technical Head",
      // bio: "Venture capitalist and serial entrepreneur connecting startups with industry mentors.",
      avatar: "👨‍💻",
      social: {
        linkedin: "https://www.linkedin.com/in/nishchaync-83b8152b0/"
      }
    },
    // {
    //   name: "Advay Anand",
    //   role: "Sponsorship Head",
    //   // bio: "Corporate partnerships expert specializing in tech industry collaborations and sponsorships.",
    //   avatar: "👨‍🏫",
    //   social: {
    //     linkedin: "https://www.linkedin.com/in/advay-anand-a89024277/"
    //   }
    // },  
  ];

  return (
    <section id="team" 
    className="py-20 bg-gradient-card bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url("7.jpg")',
    backgroundColor: "rgba(0,0,0,0.6)",
    backgroundBlendMode: "darken" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Meet The <span className="gradient-primary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our passionate team of organizers, mentors, and volunteers working tirelessly 
            to make SYNERGIX an unforgettable experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {organizers.map((member, index) => (
            <Card key={index} className="gradient-card border-glow hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <div className="text-primary font-medium mb-3">
                  {member.role}
                </div>
                {/* <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p> */}
                <div className="flex justify-center space-x-2">
                  {member.social.linkedin && (
                    <Button variant="outline" size="sm" className="p-2" asChild>
                      <a href={member.social.linkedin} aria-label="LinkedIn">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {/* {member.social.twitter && (
                    <Button variant="outline" size="sm" className="p-2" asChild>
                      <a href={member.social.twitter} aria-label="Twitter">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                  )} */}
                  {/* {member.social.github && (
                    <Button variant="outline" size="sm" className="p-2" asChild>
                      <a href={member.social.github} aria-label="GitHub">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )} */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join the Team */}
        {/* <div className="text-center">
          <div className="gradient-card border-glow rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Want to Join Our Team?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate individuals to help organize future events. 
              Join our volunteer team and be part of the SYNERGIX family!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:team@synergix.com"
                className="inline-flex items-center justify-center px-6 py-3 gradient-primary rounded-lg font-medium text-primary-foreground hover:shadow-glow transition-all duration-300"
              >
                Join Our Team
              </a>
              <a 
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary rounded-lg font-medium text-primary hover:bg-primary/10 transition-all duration-300"
              >
                Volunteer Info
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Team;