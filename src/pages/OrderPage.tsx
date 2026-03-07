import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const OrderPage = () => (
  <div className="min-h-screen pt-16">
    <section className="bg-primary text-primary-foreground py-16 text-center">
      <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Delivery & Takeout</p>
      <h1 className="font-display text-5xl font-bold">Order Online</h1>
      <p className="text-primary-foreground/70 mt-4 max-w-xl mx-auto">
        Get your favorite faloodas and ice creams delivered to your doorstep
      </p>
    </section>

    <section className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Delivery platforms */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <a
            href="https://www.swiggy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-2xl p-8 border border-border hover:border-gold hover:shadow-xl transition-all text-center group"
          >
            <div className="text-4xl font-bold text-orange-500 mb-4">Swiggy</div>
            <p className="text-muted-foreground mb-4">Order via Swiggy for fast delivery</p>
            <span className="inline-flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">
              Order Now <ExternalLink size={16} />
            </span>
          </a>
          <a
            href="https://www.zomato.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-2xl p-8 border border-border hover:border-gold hover:shadow-xl transition-all text-center group"
          >
            <div className="text-4xl font-bold text-red-500 mb-4">Zomato</div>
            <p className="text-muted-foreground mb-4">Order via Zomato for delivery & dine-in</p>
            <span className="inline-flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">
              Order Now <ExternalLink size={16} />
            </span>
          </a>
        </div>

        {/* Services */}
        <div className="bg-warm-gradient rounded-2xl p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Available Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {["Dine-in", "Takeout", "Delivery", "No-Contact Delivery"].map((s) => (
              <div key={s} className="bg-card rounded-xl p-4 border border-border">
                <p className="font-semibold text-foreground text-sm">{s}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mb-6">
            Drive-through available at select locations. Call ahead for large orders.
          </p>
          <Button variant="outline" asChild>
            <Link to="/locations"><MapPin size={16} /> Find Nearest Location</Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default OrderPage;
