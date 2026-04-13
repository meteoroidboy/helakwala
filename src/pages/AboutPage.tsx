import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Shield, Sparkles, Users, Award } from "lucide-react";



const values = [
  { icon: Shield, title: "Quality First", desc: "Never compromise, never settle." },
  { icon: Users, title: "Customer Trust", desc: "Earned through consistency, not promises." },
  { icon: Sparkles, title: "Clean Operations", desc: "Hygiene is non-negotiable." },
  { icon: Award, title: "Expert Craftsmanship", desc: "20+ years of butchery expertise." },
  { icon: Heart, title: "Community Pride", desc: "Serving Saraspur and all of Ahmedabad." },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-primary-foreground/70 text-xl">Serving Ahmedabad with Pride, Quality, and Integrity</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Who We Are</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Founded by Mustaqbhai Helakwala, Helakwala Mutton & Chicken Shop has become Ahmedabad's most trusted name in quality meat.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What started as a commitment to serve the community with honest, high-quality products has grown into a legacy serving over 40,000+ satisfied customers.
              </p>
            </div>
            <img src={shopInterior} alt="Helakwala shop" className="rounded-2xl shadow-xl w-full object-cover aspect-video" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-section-warm">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            To provide Ahmedabad with the absolute best quality meat, prepared with expert care,
            in the cleanest environment, backed by our unprecedented quality guarantee.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="max-w-2xl mx-auto text-center">
            <div>
              <p className="text-forest font-semibold tracking-widest uppercase text-sm mb-2">Meet the Owner</p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Mustaqbhai Helakwala</h2>
              <blockquote className="text-muted-foreground text-lg italic leading-relaxed mb-6 border-l-4 border-primary pl-4">
                "Quality is not just our business — it's our reputation. Every cut we sell carries the Helakwala name, and that means something in this city."
              </blockquote>
              <a href="tel:+917990925343" className="text-primary font-semibold hover:underline flex items-center gap-2">
                <Phone size={16} /> +91 79909 25343
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-section-warm">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center bg-card rounded-xl p-6 border border-border">
                <v.icon size={28} className="mx-auto mb-3 text-primary" />
                <h3 className="font-display font-bold text-foreground mb-1">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Visit Us Today</h2>
          <Button variant="gold" size="lg" asChild>
            <Link to="/location">Get Directions</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
