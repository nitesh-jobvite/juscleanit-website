import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const footerLinks = {
  services: [
    { name: 'General Cleaning', href: '/services#general-cleaning' },
    { name: 'Deep Cleans', href: '/services#deep-clean' },
    { name: 'Move Out / In Cleaning', href: '/services#move-in-out' },
    { name: 'Our Task List', href: '/services#task-list' },
    { name: 'Preparing For Your Service', href: '/services#preparing' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Careers', href: '/contact' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Request A Clean', href: '/booking' },
    { name: 'Cancellation Policy', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
};

const socialLinks = [
  { name: 'facebook', href: 'https://www.facebook.com/JUSCleanIt', label: 'Follow us on Facebook' },
  { name: 'instagram', href: 'https://www.instagram.com/juscleanit/', label: 'Follow us on Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white" role="contentinfo">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container-wide py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-h3 md:text-h2 text-white">
              Join The JusCleanIt Family
            </h2>
            <p className="mt-2 text-white/80 text-body-lg">
              Your clean home starts here. Request a clean today.
            </p>
          </div>
          <div className="flex gap-3">
            <Button href="/booking" variant="white" size="lg">
              Request A Clean
            </Button>
            <Button href="mailto:juscleanitcleaningco@gmail.com" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Email Us
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" fill="white" />
                </svg>
              </div>
              <span className="font-heading text-xl font-bold text-white">
                Jus<span className="text-secondary-400">CleanIt</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-body max-w-sm mb-4">
              Community, Kindness, & Value. Delivering the best cleaning experience based on honesty, reliability and value.
            </p>
            <p className="text-neutral-500 text-sm mb-6">
              <a href="mailto:juscleanitcleaningco@gmail.com" className="hover:text-white transition-colors">
                juscleanitcleaningco@gmail.com
              </a>
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-sm text-neutral-400 hover:text-white capitalize">{social.name[0].toUpperCase()}</span>
                </a>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="mt-6">
              <p className="text-xs text-neutral-500 mb-3 uppercase tracking-wider">We Accept</p>
              <div className="flex flex-wrap gap-2">
                {['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'Google Pay', 'Interac'].map((method) => (
                  <span key={method} className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-400">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} JusCleanIt Cleaning Co. All Rights Are Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-neutral-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-neutral-500 hover:text-white text-sm transition-colors">
              Cancellation Policy
            </Link>
            <a href="/sitemap.xml" className="text-neutral-500 hover:text-white text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
