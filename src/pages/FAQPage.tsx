import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is your 1.5 hour quality guarantee?",
    a: "If you're not 100% satisfied with the quality of meat you purchased, bring it back within 1.5 hours for a full refund or replacement. No questions asked. We're that confident in our quality.",
  },
  {
    q: "Do you offer home delivery?",
    a: "No. We want you to visit our shop, see our clean operations, and personally select your meat. Quality needs to be seen, not delivered.",
  },
  {
    q: "Can you marinate the meat?",
    a: "No. We specialize in providing the freshest, cleanest meat. We believe you should season and marinate it according to your family's preferences.",
  },
  {
    q: "What makes your quality the best in Ahmedabad?",
    a: "Our sourcing, our standards, our expertise, and our guarantee. We inspect every piece. We maintain the highest hygiene standards. And we're the only shop confident enough to offer a 1.5 hour return policy.",
  },
  {
    q: "Do you do custom cutting?",
    a: "Yes! Our expert butchers can prepare any special cuts you need. Just tell us what you want.",
  },
  {
    q: "Is all meat Halal certified?",
    a: "Yes, 100%. All our meat is properly halal certified and processed.",
  },
  {
    q: "What are your specialty items?",
    a: "We're particularly known for our boneless mutton, special goat chops, and boneless chicken. These require expert cutting and we do it best.",
  },
  {
    q: "Can I call ahead to check availability?",
    a: "Absolutely! Call +91 78598 02607 to check what's fresh and available today.",
  },
  {
    q: "Do you sell wholesale/bulk?",
    a: "Yes! For bulk orders, contact the owner directly at +91 79909 25343 (Mustaqbhai).",
  },
  {
    q: "What payment methods do you accept?",
    a: "Cash, UPI, cards — all payment methods accepted.",
  },
];

const FAQPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">FAQ</h1>
          <p className="text-primary-foreground/70 text-xl">Frequently Asked Questions</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
                <AccordionTrigger className="font-display font-semibold text-foreground text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-14 bg-section-warm text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6">Give us a call — we're happy to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <a href="tel:+917859802607" className="flex items-center gap-2">
                <Phone size={18} /> Orders: +91 78598 02607
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+917990925343" className="flex items-center gap-2">
                <Phone size={18} /> Owner: +91 79909 25343
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
