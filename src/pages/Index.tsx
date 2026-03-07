import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Users, Star, MapPin, Sparkles, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-meat.jpg";
import muttonCuts from "@/assets/mutton-cuts.jpg";
import shopInterior from "@/assets/shop-interior.jpg";

const trustBadges = [
  { icon: Users, label: "40,000+", desc: "Happy Customers" },
  { icon: Star, label: "Best Quality", desc: "In Ahmedabad" },
  { icon: Clock, label: "1.5 Hour", desc: "Return Guarantee" },
  { icon: CheckCircle, label: "100%", desc: "Halal Certified" },
  { icon: Sparkles, label: "Expert", desc: "Clean Cutting" },
  { icon: MapPin, label: "Saraspur's", desc: "Most Trusted" },
];

const testimonials = [
  { name: "Rajesh P.", area: "Satellite", text: "Best quality mutton in Ahmedabad. Been buying from Helakwala for 5 years. Never disappointed.", rating: 5 },
  { name: "Priya M.", area: "Vastrapur", text: "The 1.5 hour guarantee shows their confidence. Quality speaks for itself. Now a regular customer.", rating: 5 },
  { name: "Mohammed A.", area: "Saraspur", text: "Clean shop, professional service, and meat quality is unmatched. The special goat chops are amazing.", rating: 5 },
  { name: "Fatima K.", area: "Gomtipur", text: "My family has been buying here for years. The boneless mutton is always fresh and perfectly cut.", rating: 5 },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Premium fresh meat at Helakwala" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-forest/90 text-forest-foreground rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Clock size={16} />
            1.5 Hour Quality Guarantee — Return if Not Satisfied
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Ahmedabad's Best Quality<br />Meat — <span className="text-gold">Guaranteed</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            40,000+ happy customers trust us. Premium mutton & chicken, expert cutting, spotless facility. Join the Helakwala family today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:+917859802607" className="flex items-center gap-2">
                <Phone size={18} />
                Call to Order: +91 78598 02607
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/products">View Our Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="text-center">
                <badge.icon size={28} className="mx-auto mb-2 text-gold" />
                <p className="font-display text-xl font-bold">{badge.label}</p>
                <p className="text-background/60 text-sm">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-20 bg-section-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-forest font-semibold tracking-widest uppercase text-sm mb-2">The Helakwala Difference</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Why We're #1 in Ahmedabad</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Unmatched Quality", desc: "We source only the finest meat. If it's not perfect, we don't sell it. Our standards are non-negotiable.", icon: Shield },
              { title: "Confidence Guarantee", desc: "1.5 hours to inspect at home. Not happy? Full refund. No questions asked. That's real confidence.", icon: Clock },
              { title: "Clean & Professional", desc: "Expert butchers with 20+ years experience. Hygienic practices. Pristine facility. See for yourself.", icon: Sparkles },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-border text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Product */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-forest font-semibold tracking-widest uppercase text-sm mb-2">Our Specialty</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Premium Cuts,<br />Expert Preparation
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                From our signature boneless mutton to special goat chops — every cut is prepared by master butchers 
                with precision and care. Fresh daily, guaranteed premium quality.
              </p>
              <div className="space-y-3 mb-8">
                {["Boneless Mutton — Pure meat, zero waste", "Special Goat Chops — Premium selection", "Custom cutting on request"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-forest shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="default" size="lg" asChild>
                <Link to="/products">See All Products</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={muttonCuts}
                alt="Premium mutton cuts"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
              />
              <div className="absolute -bottom-4 -right-4 bg-gold text-gold-foreground rounded-xl px-5 py-3 font-display font-bold text-lg shadow-lg">
                ⭐ Fresh Daily
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Clock size={48} className="mx-auto mb-4 text-gold" />
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">90 Minutes to Decide</h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Not satisfied with quality? Full refund or replacement. No questions. No hassle. 
            We're the only meat shop in Ahmedabad confident enough to offer this.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/guarantee">Learn About Our Guarantee</Link>
          </Button>
        </div>
      </section>

      {/* Shop Interior */}
      <section className="py-20 bg-section-warm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-forest font-semibold tracking-widest uppercase text-sm mb-2">Our Facility</p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">Clean. Professional. Trusted.</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Visit our Saraspur shop and see the difference. Spotless facility, expert butchers, premium quality on display.
          </p>
          <img src={shopInterior} alt="Clean Helakwala shop interior" className="rounded-2xl shadow-2xl w-full max-w-4xl mx-auto object-cover" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-forest font-semibold tracking-widest uppercase text-sm mb-2">Customer Love</p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-6 shadow-md border border-border text-left">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">"{t.text}"</p>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.area}</p>
              </div>
            ))}
          </div>
          <Button variant="outline" size="lg" className="mt-10" asChild>
            <Link to="/reviews">See All Reviews</Link>
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-section-dark text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Experience the Helakwala Difference</h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            Join 40,000+ happy customers. Visit our Saraspur shop today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:+917859802607" className="flex items-center gap-2">
                <Phone size={18} />
                Call Now
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/location">Get Directions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
