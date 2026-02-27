import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'JusCleanIt cleaning services — General Cleaning from $205 + tax, Deep Cleans from $376 + tax, Move Out/In Cleans from $376 + tax. All supplies included.',
};

const allServices = [
  {
    id: 'general-cleaning',
    icon: '🏠',
    title: '5 Hours of General Cleaning',
    price: '$205.00 + Tax',
    priceNote: '1st Timers Promo (Regular $225 + Tax)',
    description: 'Our general cleaning service is best suited for mid-sized properties that are maintained regularly. One professional cleaner for 5 full hours with all supplies included.',
    details: [
      'One professional cleaner for 5 hours',
      'All cleaning supplies & equipment included',
      'Kitchen counters, sinks & appliance exteriors',
      'Bathroom sanitization & scrubbing',
      'Vacuuming carpets & mopping floors',
      'Dusting surfaces & furniture',
      'General tidying & trash removal',
      'Homes over 1,500 sq ft may need extra time',
    ],
    extra: 'Extra time available at $45/hr + tax',
  },
  {
    id: 'deep-clean',
    icon: '✨',
    title: 'Deep Cleans',
    price: 'Starting at $376.00 + Tax',
    priceNote: '2 Cleaners Included · All Supplies',
    description: 'Our deep cleaning service provides a comprehensive top-to-bottom clean for your home. 1–3 professional cleaners with all supplies included, customized to your home size.',
    details: [
      '1–3 professional cleaners based on home size',
      'All cleaning supplies & equipment included',
      'Baseboards, door frames & trim',
      'Light fixtures & ceiling fans',
      'Inside oven & fridge cleaning',
      'Bathroom deep scrub including grout',
      'Window sills & tracks',
      'Cabinet exterior wipe-down',
    ],
    extra: 'Extra at $47/hr per person + tax',
    pricingTiers: [
      { sqft: '500–1,200 sq ft', hours: '8 hrs (4 hrs × 2 cleaners)', price: '$376.00' },
      { sqft: '1,300–2,000 sq ft', hours: '10 hrs (5 hrs × 2 cleaners)', price: '$470.00' },
      { sqft: '2,100–2,500 sq ft', hours: '12 hrs (6 hrs × 2 cleaners)', price: '$564.00' },
      { sqft: '500–3,000+ sq ft', hours: '15 hrs (5 hrs × 3 cleaners)', price: '$705.00' },
    ],
  },
  {
    id: 'move-in-out',
    icon: '📦',
    title: 'Move Out / In Cleans',
    price: 'Starting at $376.00 + Tax',
    priceNote: 'All Supplies Included',
    description: 'Moving in or moving out? Our move cleaning covers everything inside-out — appliances, oven, walls, baseboards, windows, and cupboards — so the property is spotless for the next chapter.',
    details: [
      '1–3 professional cleaners based on home size',
      'All cleaning supplies & equipment included',
      'Inside appliances (oven, fridge)',
      'Walls, baseboards & door frames',
      'Interior windows & window tracks',
      'Inside all cupboards & closets',
      'Bathroom deep sanitization',
      'Floor cleaning throughout',
    ],
    extra: 'Extra at $47/hr per person + tax',
    pricingTiers: [
      { sqft: '500–1,200 sq ft', hours: '8 hrs (4 hrs × 2 cleaners)', price: '$376.00' },
      { sqft: '1,300–2,000 sq ft', hours: '10 hrs (5 hrs × 2 cleaners)', price: '$470.00' },
      { sqft: '2,100–2,500 sq ft', hours: '12 hrs (6 hrs × 2 cleaners)', price: '$564.00' },
      { sqft: '500–3,000+ sq ft', hours: '15 hrs (5 hrs × 3 cleaners)', price: '$705.00' },
    ],
  },
];

const exclusions = [
  'Blinds cleaning',
  'Moving furniture (couches, beds, etc.)',
  'Moving appliances (stoves, fridges, vanities)',
  'Moving warming drawers',
  'Exterior window cleaning',
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary pt-32 pb-20">
        <div className="container-wide text-center">
          <h1 className="font-heading text-h1 md:text-display text-white">Our Services</h1>
          <p className="mt-4 text-body-lg text-white/70 max-w-2xl mx-auto">
            Accessible exceptional cleaning services for every home. All services include supplies, equipment, and professional cleaners.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-wide space-y-20">
          {allServices.map((service, index) => (
            <div
              key={service.title}
              id={service.id}
              className={`flex flex-col lg:flex-row gap-10 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image placeholder */}
              <div className="w-full lg:w-1/2 lg:sticky lg:top-24">
                <div className="aspect-[4/3] rounded-3xl bg-neutral-100 flex items-center justify-center">
                  <span className="text-6xl">{service.icon}</span>
                </div>
                {/* Pricing tiers */}
                {service.pricingTiers && (
                  <div className="mt-6">
                    <h4 className="font-heading text-h5 text-neutral-900 mb-3">Pricing by Home Size</h4>
                    <div className="rounded-2xl border border-neutral-200 overflow-hidden">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-neutral-50">
                            <th className="px-4 py-3 text-left font-semibold text-neutral-700">Sq Ft</th>
                            <th className="px-4 py-3 text-left font-semibold text-neutral-700">Hours</th>
                            <th className="px-4 py-3 text-right font-semibold text-neutral-700">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {service.pricingTiers.map((tier) => (
                            <tr key={tier.sqft} className="border-t border-neutral-100">
                              <td className="px-4 py-3 text-neutral-600">{tier.sqft}</td>
                              <td className="px-4 py-3 text-neutral-600">{tier.hours}</td>
                              <td className="px-4 py-3 text-right font-semibold text-neutral-900">{tier.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-neutral-400 mt-2">+ tax. Homes over 3,000 sq ft — contact us for a custom quote.</p>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="font-heading text-h2 text-neutral-900">{service.title}</h2>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-heading font-bold text-lg">
                    {service.price}
                  </span>
                </div>
                <p className="text-sm text-neutral-400 mt-1">{service.priceNote}</p>
                <p className="mt-4 text-neutral-500 text-body-lg">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-neutral-600">
                      <svg className="w-4 h-4 text-secondary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
                {service.extra && (
                  <p className="mt-4 text-sm text-neutral-400 italic">{service.extra}</p>
                )}
                <div className="mt-8 flex items-center gap-4">
                  <Button href="/booking" variant="primary" size="lg">
                    Request A Clean
                  </Button>
                  <Button href="mailto:juscleanitcleaningco@gmail.com" variant="outline" size="lg">
                    Email Us
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's NOT Included */}
      <section className="section-padding bg-neutral-50" id="task-list">
        <div className="container-narrow">
          <SectionHeading
            badge="Good to Know"
            title="What's Not Included"
            subtitle="The following items are not part of our standard cleaning services."
          />
          <Card padding="lg" variant="bordered" className="max-w-xl mx-auto">
            <ul className="space-y-3">
              {exclusions.map((item) => (
                <li key={item} className="flex items-center gap-3 text-neutral-600">
                  <svg className="w-4 h-4 text-neutral-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Preparing Section */}
      <section className="section-padding bg-white" id="preparing">
        <div className="container-narrow">
          <SectionHeading
            badge="Before Your Clean"
            title="Preparing For Your Service"
            subtitle="A few things you can do to help us give you the best clean possible."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { tip: 'Tidy up clutter', detail: 'Clearing surfaces and floors helps our cleaners focus on deep cleaning rather than organizing.' },
              { tip: 'Secure valuables', detail: 'Store jewelry, cash, and important documents in a safe place before we arrive.' },
              { tip: 'Keep pets comfortable', detail: 'If possible, keep pets secured in a room or area away from where we\'ll be working.' },
              { tip: 'Let us know your priorities', detail: 'If certain areas need extra attention, mention it when booking or email us beforehand.' },
            ].map((item) => (
              <Card key={item.tip} padding="md" variant="bordered">
                <h4 className="font-heading text-h5 text-neutral-900 mb-1">{item.tip}</h4>
                <p className="text-neutral-500 text-sm">{item.detail}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary section-padding-sm">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-h2 text-white">Ready For a Clean Home?</h2>
          <p className="mt-4 text-white/70 text-body-lg">
            First-time general cleaning just $205 + tax. All supplies included.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/booking" variant="accent" size="xl">
              Request A Clean
            </Button>
            <Button href="mailto:juscleanitcleaningco@gmail.com" variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
