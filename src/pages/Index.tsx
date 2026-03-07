import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Truck } from "lucide-react";
import heroImage from "@/assets/hero-falooda.jpg";
import signatureDish from "@/assets/signature-dish.jpg";
import menuSpread from "@/assets/menu-spread.jpg";

const testimonials = [
  { name: "Priya S.", text: "The best falooda in all of Ahmedabad! A must-visit every weekend.", rating: 5 },
  { name: "Rahul M.", text: "Their Rabri Falooda Kulfi Mix is absolutely divine. Nothing compares!", rating: 5 },
  { name: "Anjali P.", text: "Family favorite for years. Always fresh and delicious. Love the atmosphere!", rating: 5 },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Rabri Falooda Kulfi Mix" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">Ahmedabad's Favourite Since Generations</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            N.B. Falooda<br />Ice Cream
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Experience the legendary Rabri Falooda Kulfi Mix and a world of irresistible desserts across 12 locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/order">Order Now</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/menu">Explore Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center gap-2"><Clock size={16} /> 11:55 AM – 11:00 PM Daily</div>
          <div className="flex items-center gap-2"><MapPin size={16} /> 12 Locations in Ahmedabad</div>
          <div className="flex items-center gap-2"><Truck size={16} /> Dine-in · Takeout · Delivery</div>
        </div>
      </section>

      {/* Signature Dish */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Our Signature</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Rabri Falooda Kulfi Mix
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                A heavenly blend of rich rabri, silky falooda vermicelli, aromatic rose syrup, 
                crunchy basil seeds, and creamy kulfi — topped with pistachios and almonds. 
                This iconic creation has been winning hearts across Ahmedabad for generations.
              </p>
              <Button variant="hero" asChild>
                <Link to="/menu">View Full Menu</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={signatureDish}
                alt="Rabri Falooda Kulfi Mix"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
              />
              <div className="absolute -bottom-4 -right-4 bg-gold text-gold-foreground rounded-xl px-5 py-3 font-display font-bold text-lg shadow-lg">
                ★ Best Seller
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Explore</p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-12">Our Delicious Menu</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Falooda Varieties", desc: "Rose, Royal, Dry Fruit, Mango & more", price: "From ₹80" },
              { title: "Ice Cream & Kulfi", desc: "Malai Kulfi, Kesar Pista, Butterscotch & more", price: "From ₹50" },
              { title: "Fast Food & Snacks", desc: "Sandwiches, Pizzas, Pav Bhaji & more", price: "From ₹60" },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-border">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.desc}</p>
                <span className="text-gold font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
          <Button variant="hero" size="lg" asChild>
            <Link to="/menu">See Full Menu</Link>
          </Button>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Gallery</p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-12">Feast Your Eyes</h2>
          <img src={menuSpread} alt="Dessert spread" className="rounded-2xl shadow-2xl w-full max-w-3xl mx-auto object-cover" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Reviews</p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-8 shadow-md border border-border">
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4">"{t.text}"</p>
                <p className="font-semibold text-foreground">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold mb-4">Craving Something Sweet?</h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            Order your favorite desserts from Swiggy or Zomato, or visit any of our 12 outlets across Ahmedabad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/order">Order Online</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/locations">Find a Location</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
