import type { Metadata } from 'next';
import { PricingSection } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent, affordable pricing for all cleaning services. No hidden fees, no contracts. Get an instant quote.',
};

export default function PricingPage() {
  return (
    <>
      <section className="gradient-primary pt-32 pb-20">
        <div className="container-wide text-center">
          <h1 className="font-heading text-h1 md:text-display text-white">Pricing</h1>
          <p className="mt-4 text-body-lg text-white/70 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Pick a plan or get a custom quote.
          </p>
        </div>
      </section>
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
