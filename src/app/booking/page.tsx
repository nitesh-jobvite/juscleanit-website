import type { Metadata } from 'next';
import { BookingForm } from '@/components/booking/BookingForm';

export const metadata: Metadata = {
  title: 'Request A Clean',
  description: 'Request your JusCleanIt cleaning service. Choose from General Cleaning ($205), Deep Clean ($376+), or Move Out/In Clean ($376+). All supplies included.',
};

export default function BookingPage() {
  return (
    <>
      <section className="gradient-primary pt-32 pb-12">
        <div className="container-wide text-center">
          <h1 className="font-heading text-h1 md:text-display text-white">Request A Clean</h1>
          <p className="mt-4 text-body-lg text-white/70 max-w-2xl mx-auto">
            Choose your service, select your home size, and pick a time. All supplies included.
          </p>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-wide">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
