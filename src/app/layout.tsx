import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://juscleanit.com'),
  title: {
    default: 'JusCleanIt — Accessible Exceptional Cleaning Services',
    template: '%s | JusCleanIt Cleaning Co.',
  },
  description:
    'Affordable professional cleaning services in Alberta. General cleaning from $205 + tax. Deep cleans, move out/in cleans. All supplies included. 1,000+ satisfied customers.',
  keywords: [
    'cleaning services',
    'house cleaning Calgary',
    'deep cleaning Alberta',
    'move out cleaning',
    'move in cleaning',
    'professional cleaners Calgary',
    'affordable cleaning',
    'JusCleanIt',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'JusCleanIt Cleaning Co.',
    title: 'JusCleanIt — Accessible Exceptional Cleaning Services',
    description:
      'Affordable professional cleaning in Alberta. General cleaning from $205 + tax. 1,000+ satisfied customers.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'JusCleanIt Cleaning Co.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JusCleanIt — Accessible Exceptional Cleaning Services',
    description:
      'Affordable professional cleaning in Alberta. General cleaning from $205 + tax. 1,000+ satisfied customers.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#112057" />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
