import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Who can participate in SYNERGIX?",
      answer: "SYNERGIX is open to students, professionals, entrepreneurs, and anyone passionate about technology and innovation. Whether you're a beginner or an expert, we welcome participants of all skill levels."
    },
    {
      question: "Do I need a team to participate?",
      answer: "No! You can participate solo or form teams of up to 4 members. We also have team formation sessions during the opening ceremony to help you find like-minded collaborators."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, chargers, any hardware you might need, and your creativity! We'll provide meals, snacks, WiFi, and workspace. Don't forget comfortable clothes for the 48-hour journey."
    },
    {
      question: "What if I'm a beginner programmer?",
      answer: "Perfect! SYNERGIX welcomes beginners. We have mentors available throughout the event, beginner-friendly workshops, and tracks suitable for all skill levels. It's a great learning opportunity."
    }
  ];

  return (
    <section id="faqs" 
    className="py-20 bg-gradient-card bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url("8.jpg")' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Frequently Asked <span className="gradient-primary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about SYNERGIX.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="gradient-card border-glow rounded-lg px-6 hover:shadow-glow transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* <div className="text-center mt-12">
          <div className="gradient-card border-glow rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our team is here to help you with any questions about SYNERGIX.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@synergix.com"
                className="inline-flex items-center justify-center px-6 py-3 gradient-primary rounded-lg font-medium text-primary-foreground hover:shadow-glow transition-all duration-300"
              >
                Email Us
              </a>
              <a 
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary rounded-lg font-medium text-primary hover:bg-primary/10 transition-all duration-300"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FAQ;