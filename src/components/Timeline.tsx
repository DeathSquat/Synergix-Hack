import { Calendar, Clock, Flag, Trophy } from "lucide-react";

const Timeline = () => {
  const events = [
    {
      date: "12-13 September, 2025",
      // time: "12:00 AM",
      title: "Registration Starts",
      description: "Registration for Hackathon starts via Unstop",
      icon: <Flag className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "19-20 September, 2025",
      // time: "11:59 PM",
      title: "Submission Starts",
      description: "Submission of Projects Starts",
      icon: <Clock className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "17-18 October, 2025",
      // time: "6:00 PM",
      title: "Submission Closes",
      description: "Submission of Projects Ends",
      icon: <Calendar className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "8-9 November, 2025",
      // time: "8:00 PM",
      title: "Online Round",
      description: "Online round (Round-2) of Hackathon",
      icon: <Clock className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "15-16 November, 2025",
      // time: "All Day",
      title: "Final Offline Round",
      description: "Final Offline Round (Round-3) of Hackathon",
      icon: <Clock className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "16 November, 2025",
      // time: "6:00 PM",
      title: "Closing Ceremony",
      description: "Closing Ceremony (Curtains Down) of Hackathon",
      icon: <Flag className="h-5 w-5" />,
      status: "upcoming"
    }
  ];

  return (
    <section
      id="timeline"
      className="py-20 bg-gradient-card bg-[url('3.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Event <span className="gradient-primary bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Follow our comprehensive schedule to make the most of your SYNERGIX experience
          </p>
        </div>


        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2" />
            
            {events.map((event, index) => (
              <div key={index} className="relative mb-8 md:mb-12">
                <div className={`flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                      event.status === 'completed' 
                        ? 'bg-primary border-primary text-primary-foreground' 
                        : 'bg-background border-primary text-primary'
                    }`}>
                      {event.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-1/2`}>
                    <div className="gradient-card border-glow rounded-lg p-6 hover:shadow-glow transition-all duration-300">
                      <div className="text-sm text-primary font-medium mb-1">
                        {event.date} {/* • {event.time} */}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-3 ${
                        event.status === 'completed' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {event.status === 'completed' ? 'Completed' : 'Upcoming'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
