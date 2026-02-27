import { SectionHeading } from '@/components/ui/SectionHeading';

const steps = [
  {
    step: '01',
    title: 'Request A Clean',
    description: 'Choose your service type — General, Deep Clean, or Move Out/In — and email us to schedule your preferred date.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'We JusCleanIt',
    description: 'Our professional cleaners arrive with all supplies included and give your home a thorough, top-to-bottom clean.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Enjoy Your Home',
    description: 'Come back to a sparkling clean home. Join our 1,000+ satisfied customers across Alberta who trust JusCleanIt.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
      </svg>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-neutral-50" aria-label="How it works">
      <div className="container-wide">
        <SectionHeading
          badge="How It Works"
          title="Clean Home in 3 Easy Steps"
          subtitle="Getting your JusCleanIt service booked is simple. All supplies included — you don't lift a finger."
        />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[16.5%] right-[16.5%] h-0.5 bg-gradient-to-r from-primary-200 via-secondary-200 to-accent-200" aria-hidden="true" />

          {steps.map((step, index) => (
            <div key={step.title} className="text-center relative">
              <div className="relative inline-flex mb-6">
                <div className="w-[72px] h-[72px] rounded-2xl bg-white shadow-medium flex items-center justify-center text-primary-600 relative z-10">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center z-20 shadow-md">
                  {step.step}
                </span>
              </div>
              <h3 className="font-heading text-h4 text-neutral-900 mb-2">{step.title}</h3>
              <p className="text-neutral-500 text-body-sm max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
