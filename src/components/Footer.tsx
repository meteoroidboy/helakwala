import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-display text-xl font-bold mb-4">Helakwala</h3>
          <p className="text-background/70 text-sm">
            Ahmedabad's most trusted meat shop. 40,000+ happy customers served with premium quality, guaranteed.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm text-background/70">
            <Link to="/products" className="block hover:text-background transition-colors">Our Products</Link>
            <Link to="/guarantee" className="block hover:text-background transition-colors">Quality Guarantee</Link>
            <Link to="/why-choose-us" className="block hover:text-background transition-colors">Why Choose Us</Link>
            <Link to="/location" className="block hover:text-background transition-colors">Visit Us</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-background/70">
            <a href="tel:+917859802607" className="flex items-center gap-2 hover:text-background transition-colors">
              <Phone size={14} className="shrink-0" />
              <span>Orders: +91 78598 02607</span>
            </a>
            <a href="tel:+917990925343" className="flex items-center gap-2 hover:text-background transition-colors">
              <Phone size={14} className="shrink-0" />
              <span>Owner: +91 79909 25343</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Visit Us</h4>
          <div className="space-y-3 text-sm text-background/70">
            <div className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 shrink-0" />
              <span>127, Gomtipur Rd, Raipur Mill Compound, Saraspur, Ahmedabad 380018</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="shrink-0" />
              <span>Open Daily · Closes 9:00 PM</span>
            </div>
            <p className="text-background/50 text-xs mt-2">❌ No Home Delivery · Walk-in Only</p>
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 mt-8 pt-6 text-center text-xs text-background/50">
        © {new Date().getFullYear()} Helakwala Mutton & Chicken Shop. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
