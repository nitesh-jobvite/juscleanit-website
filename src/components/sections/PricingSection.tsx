import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';

const plans = [
  {
    name: 'General Cleaning',
    description: '1st Timers Promo — 5 hours of surface cleaning',
    price: 205,
    unit: '+ tax',
    sqft: 'One-time',
    features: [
      '1 professional cleaner',
      '5 hours of general surface cleaning',
      'Following our surface cleaning task list',
      'Best for mid-sized properties',
      'Refresh washrooms, kitchens & floors',
      'Extra time at $45/hr + tax if needed',
    ],
    popular: false,
    cta: 'Book General Clean',
    note: 'Regular price $225. 1st timers only*',
  },
  {
    name: 'Deep Clean',
    description: 'Top-to-bottom detailed cleaning for lived-in homes',
    price: 376,
    unit: '+ tax',
    sqft: '500-1200 sq ft',
    features: [
      '8 hrs — 4 hrs with 2 cleaners',
      'All cleaning supplies included',
      'Inside appliances & oven',
      'Baseboards, doors & crown moldings',
      'Windows & window sills',
      'Scrubbing & sanitizing all surfaces',
      'Degreasing kitchen cabinets',
      'Deep vacuuming & floor washing',
    ],
    popular: true,
    cta: 'Book Deep Clean',
    note: null,
  },
  {
    name: 'Move Out / In',
    description: 'Complete property transformation for moving',
    price: 376,
    unit: '+ tax',
    sqft: '500-1200 sq ft',
    features: [
      '8 hrs — 4 hrs with 2 cleaners',
      'All cleaning supplies included',
      'Inside out clean — every surface',
      'Inside appliances, oven, cupboards',
      'Wall spot removal, baseboards, doors',
      'Windows, window sills & limescale removal',
      'Crown moldings & glass polishing',
      'Full floor washing & deep vacuuming',
    ],
    popular: false,
    cta: 'Book Move Clean',
    note: null,
  },
];

const additionalPricing = [
  { label: '10 Hr Clean (1300-2000 sq ft)', detail: '5 hrs, 2 cleaners', price: '$470.00' },
  { label: '12 Hr Clean (2100-2500 sq ft)', detail: '6 hrs, 2 cleaners', price: '$564.00' },
  { label: '15 Hr Clean (500-3000+ sq ft)', detail: '5 hrs, 3 cleaners', price: '$705.00' },
];

export function PricingSection() {
  return (
    <section className="section-padding bg-white" id="pricing" aria-label="Pricing plans">
      <div className="container-wide">
        <SectionHeading
          badge="Pricing"
          title="Transparent, Honest Pricing"
          subtitle="No hidden fees. All supplies included. Pricing based on your home's size and condition."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              padding="none"
              variant={plan.popular ? 'elevated' : 'bordered'}
              className={plan.popular ? 'ring-2 ring-primary-500 relative scale-105 z-10' : ''}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="primary" className="bg-primary-600 text-white ring-0 shadow-md px-4">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="p-6 lg:p-8">
                <h3 className="font-heading text-h4 text-neutral-900">{plan.name}</h3>
                <p className="text-neutral-500 text-body-sm mt-1">{plan.description}</p>
                <p className="text-xs text-primary-600 font-medium mt-1">{plan.sqft}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-body text-neutral-400">$</span>
                  <span className="font-heading text-display text-neutral-900">{plan.price}</span>
                  <span className="text-neutral-400 text-body-sm">{plan.unit}</span>
                </div>
                {plan.note && (
                  <p className="text-xs text-accent-600 font-medium mt-1">{plan.note}</p>
                )}

                <Button
                  href="/booking"
                  variant={plan.popular ? 'primary' : 'outline'}
                  fullWidth
                  size="lg"
                  className="mt-6"
                >
                  {plan.cta}
                </Button>
              </div>

              <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-4 border-t border-neutral-100">
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                  What&apos;s included
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-neutral-600">
                      <svg className="w-5 h-5 text-secondary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Pricing Tiers */}
        <div className="max-w-3xl mx-auto mt-12">
          <h3 className="font-heading text-h4 text-neutral-900 text-center mb-6">
            Larger Home Pricing <span className="text-neutral-400 text-sm font-normal">(Deep Clean & Move Out/In)</span>
          </h3>
          <div className="space-y-3">
            {additionalPricing.map((tier) => (
              <div key={tier.label} className="flex items-center justify-between p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                <div>
                  <p className="font-medium text-neutral-900 text-sm">{tier.label}</p>
                  <p className="text-neutral-400 text-xs">{tier.detail}</p>
                </div>
                <span className="font-heading text-h5 text-primary-600">{tier.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-neutral-400 text-xs mt-4">
            Homes over 3000 sq. ft — please contact us for a custom quote. Extra time billed at $47/hour per person + tax.
          </p>
        </div>

        <p className="text-center text-neutral-400 text-sm mt-8">
          * All prices are + tax. For safety and liability reasons, we do not clean blinds, move furniture or appliances.
        </p>
      </div>
    </section>
  );
}
