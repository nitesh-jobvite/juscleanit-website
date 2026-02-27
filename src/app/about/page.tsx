import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about JusCleanIt Cleaning Co. — our story, our values of Community, Kindness & Value, and why 1,000+ Alberta families trust us.',
};

const values = [
  { icon: '🤝', title: 'Community', description: 'We\'re rooted in the Alberta community. Our customers are our neighbours, and we treat every home like our own.' },
  { icon: '💛', title: 'Kindness', description: 'Kindness drives everything we do — from how we communicate to the care we bring into your home.' },
  { icon: '💎', title: 'Value', description: 'We believe cleaning should be a luxury every family can afford. Quality service at honest, transparent pricing.' },
  { icon: '✅', title: 'Reliability', description: 'We show up on time with all supplies. Consistent quality you can count on, every single visit.' },
];

const stats = [
  { value: '1,000+', label: 'Satisfied Customers' },
  { value: '5★', label: 'Average Rating' },
  { value: 'Alberta', label: 'Service Area' },
  { value: '100%', label: 'Supplies Included' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary pt-32 pb-20">
        <div className="container-wide text-center">
          <h1 className="font-heading text-h1 md:text-display text-white">About JusCleanIt</h1>
          <p className="mt-4 text-body-lg text-white/70 max-w-2xl mx-auto">
            Community, Kindness, &amp; Value — delivering the best cleaning experience based on honesty, reliability and value.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Our Story</span>
              <h2 className="font-heading text-h2 text-neutral-900 mt-2">
                Accessible Exceptional Services
              </h2>
              <div className="mt-6 space-y-4 text-neutral-500 text-body leading-relaxed">
                <p>
                  JusCleanIt was born from a simple belief: keeping your home clean shouldn&apos;t be hard to manage, and it shouldn&apos;t break the bank. We&apos;ve got you covered.
                </p>
                <p>
                  We believe cleaning should be a luxury every family can afford. That&apos;s why we offer transparent pricing, bring all supplies included, and treat every home with the same care and attention to detail.
                </p>
                <p>
                  Today, 1,000+ satisfied customers across Alberta trust JusCleanIt for their general cleaning, deep cleans, and move out/in cleaning needs. Our three core values — Community, Kindness, &amp; Value — match our one mission: delivering the best JusCleanIt cleaning experience based on honesty, reliability and value.
                </p>
                <p className="text-primary-600 font-medium italic">
                  &quot;If it&apos;s dirty we JusCleanIt!&quot;
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-3xl bg-neutral-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" fill="white" />
                  </svg>
                </div>
                <span className="font-heading text-2xl font-bold text-neutral-400">
                  Jus<span className="text-primary-400">CleanIt</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-600 py-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-h2 md:text-display text-white">{stat.value}</p>
                <p className="text-primary-200 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-neutral-50">
        <div className="container-wide">
          <SectionHeading
            badge="Our Values"
            title="What Drives Us Every Day"
            subtitle="Our three core values guide every clean and every interaction."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} padding="lg" variant="default" hover>
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="font-heading text-h5 text-neutral-900 mb-2">{value.title}</h3>
                <p className="text-neutral-500 text-body-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <SectionHeading
            badge="Our Services"
            title="What We Offer"
            subtitle="Three core cleaning services, all with supplies included."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🏠', name: 'General Cleaning', price: 'From $205 + tax', desc: '5 hours, 1 cleaner, all supplies included.' },
              { icon: '✨', name: 'Deep Cleans', price: 'From $376 + tax', desc: '1–3 cleaners, top-to-bottom deep clean.' },
              { icon: '📦', name: 'Move Out / In', price: 'From $376 + tax', desc: 'Complete inside-out property clean.' },
            ].map((s) => (
              <Card key={s.name} padding="lg" variant="bordered" hover className="text-center">
                <span className="text-4xl block mb-3">{s.icon}</span>
                <h3 className="font-heading text-h5 text-neutral-900">{s.name}</h3>
                <p className="text-primary-600 font-bold mt-2">{s.price}</p>
                <p className="text-neutral-500 text-sm mt-2">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary section-padding-sm">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-h2 text-white">Join The JusCleanIt Family</h2>
          <p className="mt-4 text-white/70 text-body-lg">1,000+ Alberta families already trust us with their homes.</p>
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
