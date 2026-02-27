import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'See our work in action. Before and after photos from real JusCleanIt cleaning projects — general cleaning, deep cleans, and move out/in transformations across Alberta.',
};

const projects = [
  {
    title: 'Kitchen Deep Clean',
    category: 'Deep Clean',
    description: 'Complete kitchen transformation — oven interior, fridge, counters, backsplash, and floor. Calgary home.',
    badge: 'Before & After',
  },
  {
    title: 'Move Out Clean — Condo',
    category: 'Move Out/In',
    description: 'Full move-out clean for a 1,200 sq ft condo — inside appliances, cupboards, baseboards, and windows.',
    badge: 'Transformation',
  },
  {
    title: 'Bathroom Deep Scrub',
    category: 'Deep Clean',
    description: 'Glass shower doors spotless, grout restored, baseboards scrubbed, and fixtures polished. Okotoks home.',
    badge: 'Before & After',
  },
  {
    title: 'General Cleaning — Family Home',
    category: 'General',
    description: '5-hour general clean for a busy family of four. Kitchen, bathrooms, bedrooms, and living areas.',
    badge: '5 Hours',
  },
  {
    title: 'Move In Prep — New Homeowner',
    category: 'Move Out/In',
    description: 'Inside-out clean for new homeowners — walls, baseboards, window tracks, all cupboards and closets.',
    badge: 'Transformation',
  },
  {
    title: 'Deep Clean — 2,000 sq ft Home',
    category: 'Deep Clean',
    description: 'Two cleaners, 10 hours total. Every surface from top to bottom, including light fixtures and ceiling fans.',
    badge: '2 Cleaners',
  },
  {
    title: 'Master Bathroom Revival',
    category: 'Deep Clean',
    description: 'Hard water stain removal, tile & grout deep clean, baseboard scrub, and full sanitization.',
    badge: 'Before & After',
  },
  {
    title: 'General Clean — Bi-Weekly Client',
    category: 'General',
    description: 'Regular bi-weekly maintenance clean keeping this Calgary home fresh and comfortable.',
    badge: 'Regular Client',
  },
  {
    title: 'Move Out — 3,000+ sq ft House',
    category: 'Move Out/In',
    description: 'Three cleaners, 15 hours total. Complete property clean including garage and all appliance interiors.',
    badge: '3 Cleaners',
  },
];

const categories = ['All', 'Deep Clean', 'General', 'Move Out/In'];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary pt-32 pb-20">
        <div className="container-wide text-center">
          <h1 className="font-heading text-h1 md:text-display text-white">Our Work</h1>
          <p className="mt-4 text-body-lg text-white/70 max-w-2xl mx-auto">
            See the JusCleanIt difference. Real results from real Alberta homes — general cleans, deep cleans, and move out/in transformations.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-neutral-100 sticky top-[68px] z-40">
        <div className="container-wide">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  cat === 'All'
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.title} padding="none" variant="default" hover>
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-neutral-200 rounded-t-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-white/80 flex items-center justify-center mb-2">
                        <svg className="w-8 h-8 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-neutral-400 text-xs">Photo placeholder</p>
                    </div>
                  </div>
                  {/* Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-700">
                    {project.badge}
                  </span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-primary-700 px-4 py-2 rounded-xl text-sm font-semibold">
                      View Details
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-h5 text-neutral-900 mt-1">{project.title}</h3>
                  <p className="text-neutral-500 text-body-sm mt-2">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/booking" variant="primary" size="lg">
              Want Results Like These? Request A Clean
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
