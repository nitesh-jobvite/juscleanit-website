import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';

const services = [
  {
    icon: '🧹',
    title: 'General Cleaning',
    subtitle: 'Your 1st Five Hours Of General Cleaning',
    price: '$205.00',
    priceNote: '+ Tax',
    description: '1st timers only* — A general surface clean following our surface cleaning task list. Best for mid-sized properties or refreshing washrooms, kitchens & floors.',
    features: ['1 professional cleaner', 'General surface cleaning', 'All accessible surfaces', 'Best for maintenance after Deep Clean'],
    color: 'from-primary-500 to-primary-600',
    href: '/services#general-cleaning',
    badge: '1st Timer Promo',
  },
  {
    icon: '✨',
    title: 'Deep Cleans',
    subtitle: 'Deep Cleans Starting at',
    price: '$376.00',
    priceNote: '+ Tax',
    description: 'Ideal for lived-in homes needing more than a surface refresh. Perfect for seasonal resets, preparing for guests, or a top-to-bottom detailed clean.',
    features: ['1 to 3 professional cleaners', 'All cleaning supplies included', 'Inside appliances & oven', 'Baseboards, doors & crown moldings'],
    color: 'from-secondary-500 to-secondary-600',
    href: '/services#deep-clean',
    badge: '2 Cleaners Included',
  },
  {
    icon: '📦',
    title: 'Move Out / In Cleans',
    subtitle: 'Move Out Cleans Starting At',
    price: '$376.00',
    priceNote: '+ Tax',
    description: 'Once a property is cleared of furniture, we classify it as a Move Out/Move In Clean. Ideal for preparing a home for new owners or tenants.',
    features: ['1 to 3 professional cleaners', 'All supplies included', 'Inside out clean — every surface', 'Windows, walls, cupboards & more'],
    color: 'from-accent-500 to-accent-600',
    href: '/services#move-in-out',
    badge: 'All Supplies Included',
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-neutral-50" id="services" aria-label="Our services">
      <div className="container-wide">
        <SectionHeading
          badge="Our Services"
          title="Accessible Exceptional Services"
          subtitle="From general surface cleaning to deep cleans and move out services — we've got you covered with professional, reliable cleaning."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card key={service.title} hover padding="none" variant="default" className="overflow-hidden">
              {/* Service Badge Header */}
              <div className={`bg-gradient-to-r ${service.color} px-6 py-3`}>
                <span className="text-white/90 text-xs font-semibold uppercase tracking-wider">
                  {service.badge}
                </span>
              </div>

              <div className="p-6">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-5 shadow-md`}
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <h3 className="font-heading text-h5 text-neutral-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-400 mb-2">{service.subtitle}</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-heading text-h3 text-neutral-900">{service.price}</span>
                  <span className="text-neutral-400 text-sm">{service.priceNote}</span>
                </div>
                <p className="text-neutral-500 text-body-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
                      <svg className="w-4 h-4 text-secondary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 group"
                >
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/booking" variant="primary" size="lg">
            Request A Clean
          </Button>
        </div>
      </div>
    </section>
  );
}
