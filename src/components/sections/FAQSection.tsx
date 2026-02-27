import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const faqs = [
  {
    q: 'What cleaning products do you use?',
    a: 'All cleaning supplies are included with every service. We use professional-grade products that are effective and safe for your home.',
  },
  {
    q: 'How long does a typical cleaning take?',
    a: 'Our General Cleaning is 5 hours with 1 cleaner. Deep Cleans and Move Out/In services range from 8-15 hours depending on your home size (500 to 3000+ sq ft), using 1-3 cleaners.',
  },
  {
    q: 'What if my home needs more time than booked?',
    a: 'If your home requires more time due to heavier buildup, your cleaner will contact you by text. Extra time is billed at $45/hr (General) or $47/hr per person (Deep/Move) + tax.',
  },
  {
    q: 'What is NOT included in your service?',
    a: 'For safety and liability reasons, we do not clean blinds, move furniture or appliances (stoves, fridges, couches, vanities, or warming drawers). We clean all accessible surfaces.',
  },
  {
    q: 'Can I add deep cleaning tasks to a General Cleaning?',
    a: 'General cleaning is designed for surface maintenance. Deep tasks like baseboards, cupboards, walls, or windows need a Deep Clean booking or at least 8 hours of service. These must be scheduled in advance.',
  },
  {
    q: 'How do I pay?',
    a: 'We accept Visa, Mastercard, American Express, Discover, JCB, Apple Pay, Google Pay, Afterpay, and Interac. Payment is processed securely after your service.',
  },
];

export function FAQSection() {
  return (
    <section className="section-padding bg-neutral-50" id="faq" aria-label="Frequently asked questions">
      <div className="container-narrow">
        <SectionHeading
          badge="FAQ"
          title="Questions? We've Got Answers"
          subtitle="Everything you need to know about our cleaning services."
        />

        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.q} padding="lg" variant="default">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-heading text-h5 text-neutral-900 pr-4">{faq.q}</h3>
                  <svg
                    className="w-5 h-5 text-neutral-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-neutral-500 text-body leading-relaxed">{faq.a}</p>
              </details>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-neutral-500 mb-4">Still have questions?</p>
          <Button href="/contact" variant="primary">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
