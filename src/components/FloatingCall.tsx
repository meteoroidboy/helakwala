import { Phone } from "lucide-react";

const FloatingCall = () => (
  <a
    href="tel:+917859802607"
    className="fixed bottom-6 right-6 z-50 bg-forest text-forest-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2 group"
    aria-label="Call to order"
  >
    <Phone size={22} />
    <span className="hidden group-hover:inline text-sm font-semibold whitespace-nowrap">+91 78598 02607</span>
  </a>
);

export default FloatingCall;
