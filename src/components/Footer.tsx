import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-display text-xl font-bold mb-4">N.B. Falooda Ice Cream</h3>
          <p className="text-primary-foreground/70 text-sm">
            Ahmedabad's beloved dessert destination since generations. Famous for our signature Rabri Falooda Kulfi Mix.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <Link to="/menu" className="block hover:text-primary-foreground transition-colors">Menu</Link>
            <Link to="/locations" className="block hover:text-primary-foreground transition-colors">Locations</Link>
            <Link to="/about" className="block hover:text-primary-foreground transition-colors">About Us</Link>
            <Link to="/contact" className="block hover:text-primary-foreground transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Flagship Store</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <div className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 shrink-0" />
              <span>Shop No. 82, Opp. Post Office, Sindhi Market, Revdi Bazar, Kalupur</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="shrink-0" />
              <span>11:55 AM – 11:00 PM</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"><Facebook size={20} /></a>
          </div>
          <div className="flex items-center gap-2 mt-4 text-sm text-primary-foreground/70">
            <Phone size={14} />
            <span>+91 79 XXXX XXXX</span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} N.B. Falooda Ice Cream. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
