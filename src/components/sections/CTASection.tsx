import { Button } from '@/components/ui/Button';

export function CTASection() {
  return (
    <section id="book" className="relative overflow-hidden" aria-label="Book a cleaning">
      <div className="gradient-primary">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" aria-hidden="true" />

        <div className="container-narrow section-padding relative z-10 text-center">
          <h2 className="font-heading text-h2 md:text-display text-white text-balance">
            Your Clean Home Starts{' '}
            <span className="text-secondary-300">Here</span>
          </h2>
          <p className="mt-6 text-body-lg text-white/70 max-w-2xl mx-auto">
            Join our 1,000+ satisfied customers across Alberta. 
            First time? Get 5 hours of general cleaning for just <strong className="text-white">$205 + tax</strong>.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking" variant="accent" size="xl">
              Request A Clean
            </Button>
            <Button href="mailto:juscleanitcleaningco@gmail.com" variant="ghost" size="xl" className="text-white hover:bg-white/10">
              ✉️ Email Us
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/40">
            All supplies included · Professional cleaners · Serving Alberta
          </p>
        </div>
      </div>
    </section>
  );
}
