import { Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import muttonCuts from "@/assets/mutton-cuts.jpg";
import chickenCuts from "@/assets/chicken-cuts.jpg";

const muttonProducts = [
  { name: "Mutton Leg (Raan)", badge: "Premium" },
  { name: "Mutton Shoulder (Dosh)", badge: null },
  { name: "Mutton Ribs (Panjri)", badge: null },
  { name: "Special Goat Chops", badge: "⭐ Specialty" },
  { name: "Mutton Chops - Regular", badge: null },
  { name: "Boneless Mutton", badge: "⭐ Specialty" },
  { name: "Mutton Mince (Keema)", badge: "Fresh Ground Daily" },
  { name: "Mutton Liver (Kalegi)", badge: null },
  { name: "Mutton Brain (Bheja)", badge: null },
  { name: "Mutton Bones (Haddi)", badge: null },
  { name: "Whole Goat", badge: "Special Occasions" },
];

const chickenProducts = [
  { name: "Whole Chicken", badge: "Farm Fresh" },
  { name: "Boneless Chicken", badge: "⭐ Specialty" },
  { name: "Chicken Breast", badge: null },
  { name: "Chicken Legs", badge: null },
  { name: "Chicken Wings", badge: null },
  { name: "Chicken Thighs", badge: null },
  { name: "Chicken Drumsticks", badge: null },
  { name: "Chicken Mince", badge: "Fresh Ground" },
  { name: "Chicken Liver", badge: null },
  { name: "Chicken Curry Cut", badge: null },
];

const specialtyProducts = [
  { name: "Boneless Mutton", desc: "No waste, pure meat" },
  { name: "Special Goat Chops", desc: "Premium selection" },
  { name: "Boneless Chicken Breast", desc: "Premium cuts" },
  { name: "Custom Cutting", desc: "On request" },
];

const ProductCard = ({ name, badge }: { name: string; badge: string | null }) => (
  <div className="bg-card rounded-xl p-5 border border-border hover:shadow-lg transition-shadow flex items-center justify-between gap-4">
    <div>
      <h3 className="font-display font-semibold text-foreground">{name}</h3>
      {badge && (
        <span className="inline-block mt-1 text-xs font-medium text-forest bg-forest/10 rounded-full px-2 py-0.5">
          {badge}
        </span>
      )}
      <p className="text-muted-foreground text-xs mt-1">Fresh Daily · Call for Price</p>
    </div>
    <Button variant="default" size="sm" asChild>
      <a href="tel:+917859802607" className="shrink-0 flex items-center gap-1">
        <Phone size={12} /> Order
      </a>
    </Button>
  </div>
);

const ProductsPage = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Premium cuts, expert preparation, guaranteed fresh daily. Call for pricing and availability.
          </p>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="py-14 bg-gold/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">✨ Specialty Cuts</p>
            <h2 className="font-display text-3xl font-bold text-foreground">Premium Selection</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyProducts.map((item) => (
              <div key={item.name} className="bg-card rounded-xl p-6 border-2 border-gold/30 text-center shadow-md">
                <Star size={24} className="mx-auto mb-3 text-gold" />
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mutton */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">🐐 Premium Mutton</p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">Finest Goat & Mutton Cuts</h2>
              <div className="space-y-3">
                {muttonProducts.map((p) => (
                  <ProductCard key={p.name} name={p.name} badge={p.badge} />
                ))}
              </div>
            </div>
            <div className="sticky top-24">
              <img src={muttonCuts} alt="Premium mutton cuts" className="rounded-2xl shadow-xl w-full object-cover aspect-square" />
            </div>
          </div>
        </div>
      </section>

      {/* Chicken */}
      <section className="py-16 bg-section-warm">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 sticky top-24">
              <img src={chickenCuts} alt="Premium chicken cuts" className="rounded-2xl shadow-xl w-full object-cover aspect-square" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">🐔 Premium Chicken</p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">Farm Fresh Poultry</h2>
              <div className="space-y-3">
                {chickenProducts.map((p) => (
                  <ProductCard key={p.name} name={p.name} badge={p.badge} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do / don't do */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-forest/5 rounded-2xl p-8 border border-forest/20">
              <h3 className="font-display text-2xl font-bold text-forest mb-6">📍 What We Do</h3>
              <ul className="space-y-3 text-foreground">
                {["Fresh, premium quality meat", "Expert clean cutting", "Special cuts (boneless, chops)", "Custom cutting on request", "Halal certified"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-forest">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="font-display text-2xl font-bold text-primary mb-6">❌ What We Don't Do</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3"><span className="text-primary">✗</span> <span>No home delivery <span className="text-muted-foreground text-sm">(Visit us for freshest selection)</span></span></li>
                <li className="flex items-start gap-3"><span className="text-primary">✗</span> <span>No marination <span className="text-muted-foreground text-sm">(We focus on pure, clean meat)</span></span></li>
                <li className="flex items-start gap-3"><span className="text-primary">✗</span> <span>No compromises on quality</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to Taste the Difference?</h2>
          <p className="text-primary-foreground/70 mb-6">Call us for pricing and availability. Fresh stock daily.</p>
          <Button variant="gold" size="lg" asChild>
            <a href="tel:+917859802607" className="flex items-center gap-2">
              <Phone size={18} /> Call: +91 78598 02607
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
