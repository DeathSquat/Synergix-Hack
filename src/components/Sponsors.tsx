import { Card, CardContent } from "@/components/ui/card";

const Sponsors = () => {
  const platinumSponsors = [
    { name: "TechCorp", logo: "🚀" },
    { name: "Innovation Labs", logo: "💡" },
  ];

  const goldSponsors = [
    { name: "Cloud Solutions", logo: "☁️" },
    { name: "AI Dynamics", logo: "🤖" },
    { name: "Cyber Security Pro", logo: "🔒" },
  ];

  const silverSponsors = [
    { name: "StartupHub", logo: "⚡" },
    { name: "DataFlow", logo: "📊" },
    { name: "CodeBase", logo: "💻" },
    { name: "DevTools", logo: "🔧" },
    { name: "WebTech", logo: "🌐" },
    { name: "MobileDev", logo: "📱" },
  ];

  return (
    <section id="sponsors" 
    className="py-20 bg-gradient-card bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url("6.png")',
    backgroundColor: "rgba(0,0,0,0.6)",
    backgroundBlendMode: "darken" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Our Amazing <span className="gradient-primary bg-clip-text text-transparent">Sponsors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're grateful to our sponsors who make SYNERGIX possible and help us create 
            an incredible experience for all participants
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Platinum Sponsors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {platinumSponsors.map((sponsor, index) => (
              <Card key={index} className="gradient-card border-glow hover:shadow-intense transition-all duration-300">
                <CardContent className="p-12 text-center">
                  <div className="text-6xl mb-4">{sponsor.logo}</div>
                  <h4 className="text-2xl font-bold text-foreground">{sponsor.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Gold Sponsors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {goldSponsors.map((sponsor, index) => (
              <Card key={index} className="gradient-card border-glow hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-3">{sponsor.logo}</div>
                  <h4 className="text-xl font-bold text-foreground">{sponsor.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Silver Sponsors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {silverSponsors.map((sponsor, index) => (
              <Card key={index} className="gradient-card border-glow hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl mb-2">{sponsor.logo}</div>
                  <h4 className="text-sm font-bold text-foreground">{sponsor.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Become a Sponsor */}
        <div className="text-center">
          <div className="gradient-card border-glow rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Become a Sponsor
            </h3>
            <p className="text-muted-foreground mb-6">
              Partner with SYNERGIX to reach 500+ talented developers, innovators, and future tech leaders. 
              Multiple sponsorship packages available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:sponsors@synergix.com"
                className="inline-flex items-center justify-center px-6 py-3 gradient-primary rounded-lg font-medium text-primary-foreground hover:shadow-glow transition-all duration-300"
              >
                Sponsor SYNERGIX
              </a>
              {/* <a 
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary rounded-lg font-medium text-primary hover:bg-primary/10 transition-all duration-300"
              >
                Download Prospectus
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;