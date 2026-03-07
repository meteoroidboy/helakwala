import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Clock, Sparkles, CheckCircle, MapPin, Star, Shield, Phone } from "lucide-react";

const differences = [
  { icon: Trophy, title: "Best Quality in Ahmedabad", desc: "We don't just claim it — we guarantee it. Our 1.5 hour return policy proves we stand behind every piece we sell." },
  { icon: Users, title: "40,000+ Happy Customers", desc: "Four generations of families trust us. New customers become regulars. Word of mouth built our reputation." },
  { icon: Clock, title: "1.5 Hour Quality Guarantee", desc: "The first and only meat shop in Ahmedabad to offer this. We're absolutely certain you'll be satisfied." },
  { icon: Sparkles, title: "Expert Clean Cutting", desc: "Master butchers with 20+ years experience. Clean, precise cuts. No mess, no waste." },
  { icon: CheckCircle, title: "100% Halal Certified", desc: "Properly sourced, correctly processed, completely halal. Peace of mind with every purchase." },
  { icon: MapPin, title: "Spotless Shop", desc: "Visit us and see the difference. Clean floors, clean counters, clean equipment." },
  { icon: Star, title: "Trusted Location", desc: "Serving Saraspur and surrounding areas. Easy to find, easy to reach, hard to match." },
  { icon: Shield, title: "No Gimmicks, Just Quality", desc: "No delivery, no marination. We sell pure, clean meat. You season it your way." },
];

const WhyChoosePage = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Why Choose Helakwala</h1>
          <p className="text-primary-foreground/70 text-xl">The Helakwala Difference — See for Yourself</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {differences.map((d) => (
              <div key={d.title} className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
                <d.icon size={32} className="text-primary mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{d.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="py-16 bg-section-warm text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Compare Us to Anyone</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            We encourage you to visit other shops, compare quality, compare cleanliness, compare service. 
            Then come back to us. <span className="font-semibold text-foreground">Most do.</span>
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/location">Visit Us Today</Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Experience It Yourself</h2>
          <p className="text-primary-foreground/70 mb-6">Join 40,000+ happy customers today.</p>
          <Button variant="gold" size="lg" asChild>
            <a href="tel:+917859802607" className="flex items-center gap-2">
              <Phone size={18} /> Call Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WhyChoosePage;
