import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const stats = [
  { value: '1,000+', label: 'Satisfied Customers' },
  { value: '5★', label: 'Average Rating' },
  { value: 'Alberta', label: 'Service Area' },
  { value: '100%', label: 'Supplies Included' },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />

      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white ring-white/20">
              ✨ Welcome to JusCleanIt
            </Badge>

            <h1 className="font-heading text-h1 md:text-display lg:text-display-xl text-white text-balance">
              Accessible Exceptional{' '}
              <span className="text-secondary-300">Services</span>
            </h1>

            <p className="mt-6 text-body-lg text-white/70 max-w-xl mx-auto lg:mx-0 text-balance">
              Keeping your home clean can be hard to manage, but we&apos;ve got you covered.
              We believe cleaning should be a luxury every family can afford.
              If it&apos;s dirty we JusCleanIt!
            </p>

            {/* Promo Banner */}
            <div className="mt-6 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 max-w-md mx-auto lg:mx-0">
              <p className="text-sm text-white/60 uppercase tracking-wider font-medium">First time client special offer* Limited time</p>
              <p className="font-heading text-h4 text-white mt-1">
                5 Hours Of General Cleaning For <span className="text-secondary-300">$205</span><span className="text-white/60 text-sm">+ Tax</span>
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="/booking" variant="accent" size="xl">
                Request A Clean
              </Button>
              <Button href="/services" variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                Our Services
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {['C', 'B', 'N', 'S', 'K'].map((initial, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-300 to-secondary-300 border-2 border-white/20 flex items-center justify-center text-xs text-white font-bold"
                    aria-hidden="true"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <div className="text-sm text-white/60">
                <span className="text-white font-semibold">1,000+</span> satisfied customers across Alberta
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" fill="white" fillOpacity="0.8" />
                      </svg>
                    </div>
                    <p className="text-white/50 text-sm">Your clean home starts here</p>
                    <p className="text-white/30 text-xs mt-1">JusCleanIt Cleaning Co.</p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-8 top-1/4 glass-card rounded-2xl p-4 animate-float shadow-strong">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
                    <span className="text-secondary-600 text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">All Supplies Included</p>
                    <p className="text-xs text-neutral-500">Professional grade products</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 glass-card rounded-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="flex text-accent-400">
                    {'★★★★★'.split('').map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-neutral-800">5.0</span>
                </div>
                <p className="text-xs text-neutral-500 mt-1">&quot;Exceeded our expectations!&quot;</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="font-heading text-h3 md:text-h2 text-white font-bold">
                {stat.value}
              </div>
              <div className="text-sm text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
