import { Trophy, Medal, Award, Gift } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Rewards = () => {
  const prizes = [
    {
      position: "1st Place",
      icon: <Trophy className="h-12 w-12 text-yellow-400" />,
      // prize: "$25,000",
      perks: [
        "Cash Prize",
        "Mentorship Program",
        "Funding Opportunities",
        "Premium Tech Package"
      ],
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      position: "2nd Place", 
      icon: <Medal className="h-12 w-12 text-gray-300" />,
      // prize: "$15,000",
      perks: [
        "Cash Prize",
        "Mentorship Program", 
        "Tech Package",
        "Networking Access"
      ],
      gradient: "from-gray-300 to-gray-500"
    },
    {
      position: "3rd Place",
      icon: <Award className="h-12 w-12 text-amber-600" />,
      // prize: "$10,000", 
      perks: [
        "Cash Prize",
        "Tech Package",
        "Networking Access",
        "Certificate"
      ],
      gradient: "from-amber-600 to-amber-800"
    }
  ];

  const specialPrizes = [
    {
      title: "Best Innovation",
      // prize: "$5,000",
      description: "Most creative and groundbreaking solution"
    },
    {
      title: "People's Choice",
      // prize: "$3,000", 
      description: "Voted by participants and attendees"
    },
    {
      title: "Best UI/UX",
      // prize: "$3,000",
      description: "Outstanding user interface and experience"
    },
    {
      title: "Social Impact",
      // prize: "$5,000",
      description: "Solution with highest potential social benefit"
    }
  ];

  return (
    <section id="rewards" 
    className="py-20 bg-gradient-card bg-[url('/5.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Epic <span className="gradient-primary bg-clip-text text-transparent">Rewards</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Compete for over $66,000 in prizes, mentorship opportunities, and exclusive perks
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {prizes.map((prize, index) => (
            <Card key={index} className={`gradient-card border-glow hover:shadow-glow transition-all duration-300 ${index === 0 ? 'md:scale-105 md:shadow-intense' : ''}`}>
              <CardHeader className="text-center pb-4">
                <div className="mb-4 flex justify-center">
                  {prize.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {prize.position}
                </CardTitle>
                <div className={`text-4xl font-bold bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent`}>
                  {/* {prize.prize} */}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {prize.perks.map((perk, perkIndex) => (
                    <li key={perkIndex} className="flex items-center text-muted-foreground">
                      <Gift className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Prizes */}
        {/* <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            Special Category Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrizes.map((special, index) => (
              <Card key={index} className="gradient-card border-glow hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {special.title}
                  </h4>
                  <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-3">
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {special.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Additional Perks */}
        <div className="text-center">
          <div className="gradient-card border-glow rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Every Participant Gets
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Gift className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Swag Package</h4>
                <p className="text-sm text-muted-foreground">T-shirts, stickers, and exclusive merchandise</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Certificate</h4>
                <p className="text-sm text-muted-foreground">Official participation certificate</p>
              </div>
              <div className="text-center">
                <Trophy className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Networking</h4>
                <p className="text-sm text-muted-foreground">Access to exclusive alumni network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;