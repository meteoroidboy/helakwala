import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, ShieldCheck, ArrowRight, Phone, CheckCircle } from "lucide-react";

const steps = [
  { step: "1", title: "Purchase", desc: "Buy any meat product from our shop." },
  { step: "2", title: "Inspect at Home", desc: "Take it home and check the quality within 1.5 hours." },
  { step: "3", title: "Return if Unsatisfied", desc: "Not happy? Bring it back within 90 minutes." },
  { step: "4", title: "Full Refund", desc: "No questions asked, no hassle. Full refund or replacement." },
];

const reasons = [
  "We source only the best",
  "We inspect every piece before selling",
  "We've built trust with 40,000+ customers",
  "Our quality speaks for itself",
  "Less than 0.1% returns — because our quality is exceptional",
];

const benefits = [
  "Zero risk purchase",
  "Complete peace of mind",
  "Try us with confidence",
  "Quality you can trust",
];

const GuaranteePage = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <Clock size={56} className="mx-auto mb-6 text-gold" />
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our 1.5 Hour Quality Guarantee
          </h1>
          <p className="text-primary-foreground/70 text-xl max-w-2xl mx-auto">
            Because we believe in what we sell
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14">How It Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.step} className="relative text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-display text-2xl font-bold">
                  {s.step}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight size={24} className="hidden lg:block absolute top-8 -right-4 text-muted-foreground/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why we can offer */}
      <section className="py-20 bg-section-warm">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">Why We Can Offer This</h2>
              <div className="space-y-4">
                {reasons.map((r) => (
                  <div key={r} className="flex items-start gap-3">
                    <ShieldCheck size={20} className="text-forest shrink-0 mt-0.5" />
                    <p className="text-foreground">{r}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">What This Means for You</h2>
              <div className="space-y-4">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gold shrink-0 mt-0.5" />
                    <p className="text-foreground">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bold statement */}
      <section className="py-20 bg-foreground text-background text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <blockquote className="font-display text-2xl md:text-3xl font-bold leading-relaxed italic">
            "If other meat shops were this confident in their quality, they'd offer this guarantee too. But they can't. We can."
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Try Us Risk-Free Today</h2>
          <p className="text-primary-foreground/70 mb-8">Visit our Saraspur shop and experience guaranteed quality.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" asChild>
              <a href="tel:+917859802607" className="flex items-center gap-2">
                <Phone size={18} /> Call to Order
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/location">Visit Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuaranteePage;
