import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import synergixLogo from "@/assets/synergix-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/#home", label: "Home", isSamePage: true },
    { href: "/#about", label: "About", isSamePage: true },
    { href: "/#timeline", label: "Timeline", isSamePage: true },
    { href: "/#tracks", label: "Tracks", isSamePage: true },
    { href: "/#rewards", label: "Rewards", isSamePage: true },
    { href: "/#sponsors", label: "Sponsors", isSamePage: true },
    { href: "/#team", label: "Team", isSamePage: true },
    { href: "/#faqs", label: "FAQs", isSamePage: true },
    { href: "/digital-swag", label: "Digital Swag", isSamePage: false },
  ];


  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-background/95 backdrop-blur-lg border-b border-border" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img 
              src={synergixLogo} 
              alt="SYNERGIX" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isSamePage ? (
                <HashLink
                  key={item.href}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                  smooth
                >
                  {item.label}
                </HashLink>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            <a href="https://unstop.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="glow-effect">
                Register Now
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 gradient-card border-t border-border">
              {navItems.map((item) => (
                item.isSamePage ? (
                  <HashLink
                    key={item.href}
                    to={item.href}
                    className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium w-full text-left"
                    onClick={() => setIsOpen(false)}
                    smooth
                  >
                    {item.label}
                  </HashLink>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium w-full text-left"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <div className="px-3 py-2">
                <Button variant="outline" className="w-full glow-effect">
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;