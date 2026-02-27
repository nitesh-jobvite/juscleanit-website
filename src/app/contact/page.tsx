import type { Metadata } from 'next';
import { Input, Textarea, Select } from '@/components/ui/FormElements';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with JusCleanIt Cleaning Co. Email us at juscleanitcleaningco@gmail.com or reach out on Facebook and Instagram.',
};

const contactMethods = [
  {
    icon: '✉️',
    title: 'Email Us',
    detail: 'juscleanitcleaningco@gmail.com',
    subDetail: 'We respond as quickly as possible',
    href: 'mailto:juscleanitcleaningco@gmail.com',
  },
  {
    icon: '📘',
    title: 'Facebook',
    detail: '@JUSCleanIt',
    subDetail: 'Message us or follow for updates',
    href: 'https://www.facebook.com/JUSCleanIt',
  },
  {
    icon: '📸',
    title: 'Instagram',
    detail: '@juscleanit',
    subDetail: 'See our latest cleans & results',
    href: 'https://www.instagram.com/juscleanit/',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary pt-32 pb-20">
        <div className="container-wide text-center">
          <h1 className="font-heading text-h1 md:text-display text-white">Contact Us</h1>
          <p className="mt-4 text-body-lg text-white/70 max-w-2xl mx-auto">
            Ready to request a clean or have questions? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method) => (
              <a key={method.title} href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                <Card padding="lg" variant="bordered" hover className="text-center">
                  <span className="text-4xl mb-3 block">{method.icon}</span>
                  <h3 className="font-heading text-h5 text-neutral-900">{method.title}</h3>
                  <p className="text-primary-600 font-medium mt-2">{method.detail}</p>
                  <p className="text-neutral-400 text-sm mt-1">{method.subDetail}</p>
                </Card>
              </a>
            ))}
          </div>

          {/* Service Area */}
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <Card padding="lg" variant="elevated">
              <span className="text-4xl block mb-3">📍</span>
              <h3 className="font-heading text-h4 text-neutral-900">Serving Alberta</h3>
              <p className="text-neutral-500 mt-2">
                We proudly serve Calgary, Okotoks, and surrounding areas across Alberta.
                All services include supplies and equipment — you don&apos;t lift a finger.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              title="Request A Clean"
              subtitle="Tell us about your cleaning needs and we'll get back to you with availability."
            />

            <Card padding="lg" variant="elevated">
              <form className="space-y-6" action="/api/contact" method="POST">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label="First Name"
                    name="firstName"
                    placeholder="Jane"
                    required
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    placeholder="Smith"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    required
                  />
                  <Input
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="(403) 555-0100"
                  />
                </div>
                <Select
                  label="Service Type"
                  name="subject"
                  placeholder="Select a service"
                  required
                  options={[
                    { value: 'general', label: 'General Cleaning — $205 + Tax' },
                    { value: 'deep', label: 'Deep Clean — Starting at $376 + Tax' },
                    { value: 'move', label: 'Move Out / In Clean — Starting at $376 + Tax' },
                    { value: 'question', label: 'General Question' },
                    { value: 'other', label: 'Other' },
                  ]}
                />
                <Textarea
                  label="Message"
                  name="message"
                  placeholder="Tell us about your home size, preferred dates, or any questions..."
                  required
                />
                <Button type="submit" variant="primary" size="lg" fullWidth>
                  Send Request
                </Button>
                <p className="text-center text-neutral-400 text-sm">
                  Or email us directly at{' '}
                  <a href="mailto:juscleanitcleaningco@gmail.com" className="text-primary-600 hover:underline">
                    juscleanitcleaningco@gmail.com
                  </a>
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
