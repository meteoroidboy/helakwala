import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  { name: "Kalupur (Revdi Bazar) — Flagship", address: "Shop No. 82, Opp. Post Office, Sindhi Market, Revdi Bazar, Kalupur", phone: "+91 79 XXXX XXXX", flagship: true },
  { name: "Satellite / Jodhpur", address: "Near Jodhpur Cross Roads, Satellite, Ahmedabad", phone: "+91 79 XXXX XXXX" },
  { name: "Gurukul", address: "Opp. Swaminarayan Temple, Gurukul Road, Ahmedabad", phone: "+91 79 XXXX XXXX" },
  { name: "Maninagar", address: "Near Maninagar Railway Station, Ahmedabad", phone: "+91 79 XXXX XXXX" },
  { name: "Navrangpura", address: "CG Road, Navrangpura, Ahmedabad", phone: "+91 79 XXXX XXXX" },
  { name: "Vastrapur", address: "Near Vastrapur Lake, Ahmedabad", phone: "+91 79 XXXX XXXX" },
  { name: "Naroda", address: "Naroda GIDC Road, Ahmedabad", phone: "+91 79 XXXX XXXX" },
  { name: "Naranpura", address: "Vijaynagar Road, Naranpura, Ahmedabad", phone: "+91 79 XXXX XXXX" },
  { name: "Bapunagar", address: "Near Bapunagar Bus Stand, Ahmedabad", phone: "+91 79 XXXX XXXX" },
  { name: "Nikol", address: "Nikol-Naroda Road, Ahmedabad", phone: "+91 79 XXXX XXXX" },
  { name: "Chandkheda", address: "New CG Road, Chandkheda, Ahmedabad", phone: "+91 79 XXXX XXXX" },
  { name: "Gota", address: "Gota Cross Roads, SG Highway, Ahmedabad", phone: "+91 79 XXXX XXXX" },
];

const LocationsPage = () => (
  <div className="min-h-screen pt-16">
    <section className="bg-primary text-primary-foreground py-16 text-center">
      <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Find Us</p>
      <h1 className="font-display text-5xl font-bold">Our Locations</h1>
      <p className="text-primary-foreground/70 mt-4">12 outlets across Ahmedabad to serve you</p>
    </section>

    {/* Map */}
    <section className="w-full h-[400px]">
      <iframe
        title="N.B. Falooda Locations"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74862758686!2d72.43965!3d23.02045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>

    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((loc) => (
          <div
            key={loc.name}
            className={`bg-card rounded-2xl p-6 border transition-shadow hover:shadow-lg ${
              loc.flagship ? "border-gold shadow-md" : "border-border"
            }`}
          >
            {loc.flagship && (
              <span className="inline-block bg-gold text-gold-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">
                ★ FLAGSHIP
              </span>
            )}
            <h3 className="font-display text-xl font-bold text-foreground mb-2">{loc.name}</h3>
            <div className="space-y-2 text-sm text-muted-foreground mb-4">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 shrink-0" />
                <span>{loc.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="shrink-0" />
                <span>{loc.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="shrink-0" />
                <span>11:55 AM – 11:00 PM</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a
                href={`https://www.google.com/maps/search/NB+Falooda+${encodeURIComponent(loc.name)}+Ahmedabad`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation size={14} /> Get Directions
              </a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default LocationsPage;
