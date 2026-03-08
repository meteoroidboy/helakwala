import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CheckCircle, XCircle, Navigation } from "lucide-react";
import shopInterior from "@/assets/shop-interior.jpg";

const LocationPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Visit Us</h1>
          <p className="text-primary-foreground/70 text-xl">Come see the quality for yourself</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Info */}
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">Helakwala Mutton & Chicken Shop</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">127, Gomtipur Rd, Raipur Mill Compound<br />Saraspur, Ahmedabad, Gujarat 380018</p>
                    <p className="text-muted-foreground text-sm mt-1">Landmark: Near Raipur Mill Cross Road, Saraspur</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Contact</h3>
                    <a href="tel:+917859802607" className="block text-primary hover:underline">Orders: +91 78598 02607</a>
                    <a href="tel:+917990925343" className="block text-primary hover:underline">Owner (Mustaqbhai): +91 79909 25343</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={24} className="text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                    <p className="text-muted-foreground">Open Daily · Closes at 9:00 PM</p>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border space-y-3">
                  <h3 className="font-display font-bold text-foreground">⚠️ Important</h3>
                  <div className="flex items-center gap-2 text-primary text-sm">
                    <XCircle size={16} /> No Home Delivery — Visit us for freshest selection
                  </div>
                  <div className="flex items-center gap-2 text-primary text-sm">
                    <XCircle size={16} /> No Marination — We provide clean, pure meat
                  </div>
                  <div className="flex items-center gap-2 text-forest text-sm">
                    <CheckCircle size={16} /> Walk-in only — Quality needs to be seen
                  </div>
                </div>

                <Button variant="default" size="lg" className="w-full" asChild>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=23.0258,72.6040"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Navigation size={18} /> Get Directions on Google Maps
                  </a>
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6!2d72.604!3d23.0258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzMzLjIiTiA3MsKwMzYnMTQuNSJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Helakwala Location"
                />
              </div>
              <img src={shopInterior} alt="Helakwala shop interior" className="rounded-2xl shadow-lg w-full object-cover aspect-video" />
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 bg-section-warm">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">What to Expect</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Clean, professional shop",
              "Fresh stock on display",
              "Expert butchers ready to assist",
              "Custom cuts while you wait",
              "All payment methods accepted",
              "Quality you can see & trust",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
                <CheckCircle size={18} className="text-forest shrink-0" />
                <span className="text-foreground font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Call Before You Visit</h2>
          <p className="text-primary-foreground/70 mb-6">Check availability and fresh stock today.</p>
          <Button variant="gold" size="lg" asChild>
            <a href="tel:+917859802607" className="flex items-center gap-2">
              <Phone size={18} /> +91 78598 02607
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
