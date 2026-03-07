import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Phone } from "lucide-react";

const reviews = [
  { name: "Rajesh P.", area: "Satellite", text: "Best quality mutton in Ahmedabad. Been buying from Helakwala for 5 years. Never disappointed. Their boneless mutton is exceptional.", rating: 5 },
  { name: "Priya M.", area: "Vastrapur", text: "The 1.5 hour guarantee shows their confidence. Tried it once — didn't need to return anything. Quality speaks for itself. Now a regular customer.", rating: 5 },
  { name: "Mohammed A.", area: "Saraspur", text: "Clean shop, professional service, and meat quality is unmatched. The special goat chops are amazing. Highly recommended.", rating: 5 },
  { name: "Fatima K.", area: "Gomtipur", text: "My whole family buys from Helakwala. The quality is always consistent. Fresh, clean, and expertly cut every single time.", rating: 5 },
  { name: "Imran S.", area: "Juhapura", text: "I've tried many meat shops in Ahmedabad. Helakwala is on another level. The freshness is visible, and their keema is ground perfectly.", rating: 5 },
  { name: "Aisha B.", area: "Maninagar", text: "Worth the drive from Maninagar. The boneless chicken here is the cleanest I've found anywhere. Professional butchers who know their craft.", rating: 5 },
  { name: "Salim R.", area: "Naroda", text: "First time I visited, I was impressed by how clean the shop is. The meat quality matched the cleanliness. Been a regular for 2 years now.", rating: 4 },
  { name: "Nazia P.", area: "Bapunagar", text: "The guarantee gave me confidence to try them. Absolutely no complaints. My go-to shop for all special occasion meat orders.", rating: 5 },
];

const ReviewsPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-primary-foreground/70 text-xl mb-6">What 40,000+ Customers Say About Us</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className={i < 4 ? "fill-gold text-gold" : "text-gold/50"} />
                ))}
              </div>
              <span className="font-bold text-lg">4.2/5</span>
            </div>
            <span className="text-primary-foreground/50">|</span>
            <span>40,000+ Happy Customers</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className={i < r.rating ? "fill-gold text-gold" : "text-muted-foreground/30"} />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">"{r.text}"</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{r.name}</p>
                  <p className="text-muted-foreground text-xs">{r.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Join 40,000+ Happy Customers</h2>
          <p className="text-primary-foreground/70 mb-6">Experience the Helakwala difference today.</p>
          <Button variant="gold" size="lg" asChild>
            <a href="tel:+917859802607" className="flex items-center gap-2">
              <Phone size={18} /> Call to Order
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;
