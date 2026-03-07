import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Guarantee", path: "/guarantee" },
  { label: "Why Us", path: "/why-choose-us" },
  { label: "About", path: "/about" },
  { label: "Location", path: "/location" },
  { label: "Reviews", path: "/reviews" },
  { label: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-primary">Helakwala</span>
          <span className="hidden sm:inline text-xs text-muted-foreground font-body">Mutton & Chicken</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="default" size="sm" asChild>
            <a href="tel:+917859802607" className="flex items-center gap-2">
              <Phone size={14} />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <a href="tel:+917859802607" className="bg-primary text-primary-foreground rounded-full p-2">
            <Phone size={16} />
          </a>
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="default" size="sm" className="w-full mt-2" asChild>
            <a href="tel:+917859802607" className="flex items-center gap-2">
              <Phone size={14} />
              Call: +91 78598 02607
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
