import aboutInterior from "@/assets/about-interior.jpg";
import signatureDish from "@/assets/signature-dish.jpg";
import { Award, Users, MapPin, Heart } from "lucide-react";

const stats = [
  { icon: MapPin, label: "Outlets", value: "12+" },
  { icon: Users, label: "Happy Customers", value: "10L+" },
  { icon: Award, label: "Years of Legacy", value: "25+" },
  { icon: Heart, label: "Dessert Varieties", value: "50+" },
];

const AboutPage = () => (
  <div className="min-h-screen pt-16">
    <section className="bg-primary text-primary-foreground py-16 text-center">
      <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Our Story</p>
      <h1 className="font-display text-5xl font-bold">About N.B. Falooda</h1>
    </section>

    {/* Hero image */}
    <section className="relative h-[400px] overflow-hidden">
      <img src={aboutInterior} alt="Our Store" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay flex items-center justify-center">
        <p className="font-display text-3xl md:text-4xl text-primary-foreground font-bold text-center px-4">
          Where Every Dessert Tells a Story
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="py-20 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">A Legacy of Sweetness</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                N.B. Falooda Ice Cream began its journey from a humble shop in the bustling lanes of Revdi Bazar, Kalupur — 
                the heart of old Ahmedabad. What started as a small stall serving fresh faloodas and kulfis quickly became 
                a beloved institution among locals.
              </p>
              <p>
                Our secret? Authentic recipes passed down through generations, the freshest ingredients, and an unwavering 
                commitment to quality. Every glass of our signature Rabri Falooda Kulfi Mix is crafted with the same love 
                and care that made our first customers fall in love with us.
              </p>
              <p>
                Today, with 12 outlets across Ahmedabad, we continue to bring families together over bowls of happiness. 
                From our classic faloodas to innovative new flavors, every creation at N.B. Falooda is a celebration of 
                Gujarat's rich dessert heritage.
              </p>
            </div>
          </div>
          <img src={signatureDish} alt="Our Signature Dish" className="rounded-2xl shadow-2xl w-full object-cover aspect-square" />
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <s.icon className="mx-auto mb-3 text-gold" size={32} />
              <p className="font-display text-3xl font-bold">{s.value}</p>
              <p className="text-primary-foreground/70 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-foreground mb-12">What Makes Us Special</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { title: "Fresh Ingredients", desc: "We source the finest milk, saffron, and dry fruits daily for every creation." },
            { title: "Authentic Recipes", desc: "Time-honored recipes perfected over generations, keeping tradition alive." },
            { title: "Family Atmosphere", desc: "A warm, welcoming space where families create sweet memories together." },
          ].map((v) => (
            <div key={v.title} className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
