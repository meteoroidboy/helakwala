import { useState } from "react";

const menuData = {
  Falooda: [
    { name: "Rabri Falooda Kulfi Mix", price: "₹150", desc: "Our legendary signature — rich rabri, falooda, rose syrup & kulfi", best: true },
    { name: "Royal Falooda", price: "₹130", desc: "Premium falooda with dry fruits and rabri" },
    { name: "Rose Falooda", price: "₹100", desc: "Classic rose-flavored falooda with ice cream" },
    { name: "Mango Falooda", price: "₹120", desc: "Seasonal mango pulp falooda with kulfi" },
    { name: "Dry Fruit Falooda", price: "₹140", desc: "Loaded with almonds, pistachios & cashews" },
    { name: "Chocolate Falooda", price: "₹120", desc: "Rich chocolate syrup falooda with vanilla ice cream" },
  ],
  "Ice Cream & Kulfi": [
    { name: "Malai Kulfi", price: "₹60", desc: "Traditional creamy malai kulfi" },
    { name: "Kesar Pista Kulfi", price: "₹70", desc: "Saffron and pistachio flavored kulfi" },
    { name: "Butterscotch Sundae", price: "₹90", desc: "Butterscotch ice cream with crunchy toppings" },
    { name: "Mango Dolly", price: "₹50", desc: "Classic mango-flavored ice cream bar" },
    { name: "Chocolate Brownie Sundae", price: "₹120", desc: "Warm brownie with chocolate ice cream" },
    { name: "Fruit Salad with Ice Cream", price: "₹110", desc: "Fresh seasonal fruits topped with vanilla ice cream" },
  ],
  "Fast Food & Snacks": [
    { name: "Veg Sandwich", price: "₹60", desc: "Grilled sandwich with fresh veggies and cheese" },
    { name: "Pav Bhaji", price: "₹80", desc: "Mumbai-style spicy bhaji with buttered pav" },
    { name: "Pizza (Regular)", price: "₹100", desc: "Cheesy vegetarian pizza with toppings" },
    { name: "Samosa (2 pcs)", price: "₹30", desc: "Crispy samosas with tamarind chutney" },
    { name: "Cold Coffee", price: "₹80", desc: "Creamy blended cold coffee" },
    { name: "Masala Chai", price: "₹20", desc: "Authentic Indian spiced tea" },
  ],
};

type Category = keyof typeof menuData;

const MenuPage = () => {
  const [active, setActive] = useState<Category>("Falooda");

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 text-center">
        <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Explore</p>
        <h1 className="font-display text-5xl font-bold">Our Menu</h1>
      </section>

      <section className="container mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(Object.keys(menuData) as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-gold text-gold-foreground shadow-lg"
                  : "bg-card text-muted-foreground border border-border hover:border-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {menuData[active].map((item) => (
            <div
              key={item.name}
              className={`bg-card rounded-2xl p-6 border transition-shadow hover:shadow-lg ${
                "best" in item && item.best ? "border-gold shadow-md" : "border-border"
              }`}
            >
              {"best" in item && item.best && (
                <span className="inline-block bg-gold text-gold-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">
                  ★ SIGNATURE
                </span>
              )}
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{item.name}</h3>
              <p className="text-muted-foreground text-sm mb-3">{item.desc}</p>
              <p className="text-gold font-bold text-lg">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
