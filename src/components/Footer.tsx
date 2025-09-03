import {Linkedin, Mail, MapPin, Phone, Instagram, MessageCircle} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/synergix_hack?igsh=MWJhd2k4YWgxdGVodg==", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/synergix-hacks/", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:info@synergix.com", label: "Email" },
    {icon: <MessageCircle className="h-5 w-5 text-green-500" />, 
      href: "https://whatsapp.com/channel/0029Vb78TA9E50UmxVpEW21N", 
      label: "WhatsApp" }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Timeline", href: "#timeline" },
    { label: "Tracks", href: "#tracks" },
    { label: "Rewards", href: "#rewards" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Team", href: "#team" },
    { label: "FAQs", href: "#faqs" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-card border-t border-border relative overflow-hidden bg-[url('public/1.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-glow mb-2">SYNERGIX</h3>
              <p className="text-muted-foreground max-w-md">
                Where innovation meets code. Join the ultimate hackathon experience 
                and build the future with brilliant minds from around the world.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>TBA</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>Punit Pal (+91 96503 80372)</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>TBA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Connect</h4>
            <div className="space-y-4">
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="border-glow hover:shadow-glow p-2"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
              <div>
                <a href="https://chat.whatsapp.com/JpinZ1Tt8JO9q3u0t1BVMR?mode=ems_copy_t" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="glow-effect">
                    Join Community
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2025 SYNERGIX. All rights reserved. Built with ❤️ by Nishchay Chaurasia.
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 gradient-primary opacity-50" />
    </footer>
  );
};

export default Footer;