import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-primary text-primary-foreground py-16 text-center">
        <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Get in Touch</p>
        <h1 className="font-display text-5xl font-bold">Contact Us</h1>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <Input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <Textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                required
              />
              <Button variant="hero" type="submit" className="w-full">Send Message</Button>
            </form>
          </div>

          {/* Info */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-xl">
                  <MapPin className="text-gold" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Head Office</h3>
                  <p className="text-muted-foreground text-sm">Shop No. 82, Opp. Post Office, Sindhi Market, Revdi Bazar, Kalupur, Ahmedabad</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-xl">
                  <Phone className="text-gold" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p className="text-muted-foreground text-sm">+91 79 XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-xl">
                  <Mail className="text-gold" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground text-sm">info@nbfalooda.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-xl">
                  <Clock className="text-gold" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Hours</h3>
                  <p className="text-muted-foreground text-sm">11:55 AM – 11:00 PM (Daily)</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-foreground mb-2">Accepted Payments</h3>
              <p className="text-muted-foreground text-sm">Debit Cards · UPI · NFC Mobile Payments · Cash</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
