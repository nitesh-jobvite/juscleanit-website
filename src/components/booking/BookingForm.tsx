'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import { Button } from '@/components/ui/Button';
import { Input, Select, Textarea } from '@/components/ui/FormElements';
import { Card } from '@/components/ui/Card';

type Step = 1 | 2 | 3 | 4;

const services = [
  { id: 'general', name: 'General Cleaning', price: 205, icon: '🏠', description: '5 hours, 1 cleaner, all supplies included' },
  { id: 'deep', name: 'Deep Clean', price: 376, icon: '✨', description: '1–3 cleaners, top-to-bottom deep clean' },
  { id: 'move', name: 'Move Out / In Clean', price: 376, icon: '📦', description: 'Complete inside-out property clean' },
];

const frequencies = [
  { value: 'one-time', label: 'One-Time', discount: 0 },
  { value: 'weekly', label: 'Weekly', discount: 20 },
  { value: 'bi-weekly', label: 'Bi-Weekly', discount: 15 },
  { value: 'monthly', label: 'Monthly', discount: 10 },
];

const extras = [
  { id: 'fridge', name: 'Inside Fridge', price: 30 },
  { id: 'oven', name: 'Inside Oven', price: 25 },
  { id: 'windows', name: 'Interior Windows', price: 40 },
  { id: 'cabinets', name: 'Inside Cabinets', price: 35 },
  { id: 'walls', name: 'Wall Washing', price: 45 },
  { id: 'baseboards', name: 'Baseboard Scrub', price: 30 },
];

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
];

export function BookingForm() {
  const [step, setStep] = useState<Step>(1);
  const [selectedService, setSelectedService] = useState('');
  const [frequency, setFrequency] = useState('one-time');
  const [bedrooms, setBedrooms] = useState('2');
  const [bathrooms, setBathrooms] = useState('1');
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', address: '', city: '', zip: '', notes: '',
  });

  const currentService = services.find((s) => s.id === selectedService);
  const currentFrequency = frequencies.find((f) => f.value === frequency);
  const extrasTotal = selectedExtras.reduce((sum, id) => {
    const extra = extras.find((e) => e.id === id);
    return sum + (extra?.price || 0);
  }, 0);
  const basePrice = currentService?.price || 0;
  const discount = currentFrequency?.discount || 0;
  const discountAmount = (basePrice * discount) / 100;
  const total = basePrice - discountAmount + extrasTotal;

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const stepLabels = ['Service', 'Details', 'Schedule', 'Confirm'];

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        {/* Progress Steps */}
        <div className="flex items-center mb-10" role="tablist" aria-label="Booking steps">
          {stepLabels.map((label, i) => {
            const stepNum = (i + 1) as Step;
            const isActive = step === stepNum;
            const isCompleted = step > stepNum;
            return (
              <div key={label} className="flex items-center flex-1 last:flex-none">
                <button
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Step ${stepNum}: ${label}`}
                  onClick={() => isCompleted && setStep(stepNum)}
                  className={clsx(
                    'w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all shrink-0',
                    isActive && 'bg-primary-600 text-white shadow-glow-primary',
                    isCompleted && 'bg-secondary-500 text-white cursor-pointer',
                    !isActive && !isCompleted && 'bg-neutral-100 text-neutral-400'
                  )}
                >
                  {isCompleted ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    stepNum
                  )}
                </button>
                <span className={clsx(
                  'ml-2 text-sm font-medium hidden sm:block',
                  isActive ? 'text-primary-600' : isCompleted ? 'text-secondary-600' : 'text-neutral-400'
                )}>
                  {label}
                </span>
                {i < 3 && (
                  <div className={clsx(
                    'flex-1 h-0.5 mx-4',
                    isCompleted ? 'bg-secondary-300' : 'bg-neutral-200'
                  )} />
                )}
              </div>
            );
          })}
        </div>

        {/* Step 1: Select Service */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="font-heading text-h3 text-neutral-900 mb-2">Choose Your Service</h2>
            <p className="text-neutral-500 mb-8">Select the type of cleaning you need.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={clsx(
                    'p-5 rounded-2xl border-2 text-left transition-all duration-200 hover:shadow-md',
                    selectedService === service.id
                      ? 'border-primary-500 bg-primary-50 shadow-md'
                      : 'border-neutral-200 bg-white hover:border-primary-200'
                  )}
                >
                  <span className="text-3xl block mb-3">{service.icon}</span>
                  <h3 className="font-heading text-h5 text-neutral-900">{service.name}</h3>
                  <p className="text-neutral-500 text-sm mt-1">{service.description}</p>
                  <p className="mt-3 font-heading text-h4 text-primary-600">
                    ${service.price}
                    <span className="text-neutral-400 text-sm font-normal"> + tax</span>
                  </p>
                </button>
              ))}
            </div>

            {/* Frequency */}
            <div className="mt-10">
              <h3 className="font-heading text-h5 text-neutral-900 mb-4">How Often?</h3>
              <div className="flex flex-wrap gap-3">
                {frequencies.map((freq) => (
                  <button
                    key={freq.value}
                    onClick={() => setFrequency(freq.value)}
                    className={clsx(
                      'px-5 py-2.5 rounded-xl font-medium text-sm transition-all border-2',
                      frequency === freq.value
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-neutral-200 text-neutral-600 hover:border-primary-200'
                    )}
                  >
                    {freq.label}
                    {freq.discount > 0 && (
                      <span className="ml-1 text-secondary-600 font-bold">-{freq.discount}%</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button
                variant="primary"
                size="lg"
                onClick={() => selectedService && setStep(2)}
                disabled={!selectedService}
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Property Details */}
        {step === 2 && (
          <div className="animate-fade-in">
            <h2 className="font-heading text-h3 text-neutral-900 mb-2">Property Details</h2>
            <p className="text-neutral-500 mb-8">Tell us about your space.</p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <Select
                label="Bedrooms"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                options={[
                  { value: '1', label: '1 Bedroom' },
                  { value: '2', label: '2 Bedrooms' },
                  { value: '3', label: '3 Bedrooms' },
                  { value: '4', label: '4 Bedrooms' },
                  { value: '5', label: '5+ Bedrooms' },
                ]}
              />
              <Select
                label="Bathrooms"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
                options={[
                  { value: '1', label: '1 Bathroom' },
                  { value: '2', label: '2 Bathrooms' },
                  { value: '3', label: '3 Bathrooms' },
                  { value: '4', label: '4+ Bathrooms' },
                ]}
              />
            </div>

            <h3 className="font-heading text-h5 text-neutral-900 mb-4">Add Extras</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {extras.map((extra) => (
                <button
                  key={extra.id}
                  onClick={() => toggleExtra(extra.id)}
                  className={clsx(
                    'flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left',
                    selectedExtras.includes(extra.id)
                      ? 'border-secondary-500 bg-secondary-50'
                      : 'border-neutral-200 hover:border-secondary-200'
                  )}
                >
                  <span className="text-sm font-medium text-neutral-700">{extra.name}</span>
                  <span className="text-sm font-bold text-secondary-600">+${extra.price}</span>
                </button>
              ))}
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="ghost" size="lg" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button variant="primary" size="lg" onClick={() => setStep(3)}>
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Schedule */}
        {step === 3 && (
          <div className="animate-fade-in">
            <h2 className="font-heading text-h3 text-neutral-900 mb-2">Pick a Date &amp; Time</h2>
            <p className="text-neutral-500 mb-8">Choose when you&apos;d like us to come.</p>

            <div className="mb-8">
              <Input
                label="Preferred Date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <h3 className="font-heading text-h5 text-neutral-900 mb-4">Available Times</h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={clsx(
                    'py-3 rounded-xl text-sm font-medium transition-all border-2',
                    selectedTime === time
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-neutral-200 text-neutral-600 hover:border-primary-200'
                  )}
                >
                  {time}
                </button>
              ))}
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="ghost" size="lg" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button
                variant="primary"
                size="lg"
                onClick={() => selectedDate && selectedTime && setStep(4)}
                disabled={!selectedDate || !selectedTime}
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Contact & Confirm */}
        {step === 4 && (
          <div className="animate-fade-in">
            <h2 className="font-heading text-h3 text-neutral-900 mb-2">Your Information</h2>
            <p className="text-neutral-500 mb-8">Almost done! Just a few details.</p>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Booking submitted! (Demo)');
              }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <Input
                  label="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                  placeholder="John"
                />
                <Input
                  label="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                  placeholder="Doe"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <Input
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="john@example.com"
                />
                <Input
                  label="Phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  placeholder="(403) 555-0100"
                />
              </div>
              <Input
                label="Street Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
                placeholder="123 Main Street"
              />
              <div className="grid sm:grid-cols-2 gap-6">
                <Input
                  label="City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                  placeholder="Calgary"
                />
                <Input
                  label="Postal Code"
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  required
                  placeholder="T2X 1A1"
                />
              </div>
              <Textarea
                label="Special Instructions (Optional)"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Any specific areas to focus on, access instructions, pet info, etc."
              />

              <div className="flex justify-between pt-4">
                <Button variant="ghost" size="lg" onClick={() => setStep(3)} type="button">
                  Back
                </Button>
                <Button variant="accent" size="xl" type="submit">
                  Confirm Request — ${total.toFixed(0)} + Tax
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Order Summary Sidebar */}
      <div className="lg:col-span-1">
        <div className="lg:sticky lg:top-28">
          <Card padding="lg" variant="elevated">
            <h3 className="font-heading text-h4 text-neutral-900 mb-6">Request Summary</h3>

            {currentService ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-neutral-100">
                  <span className="text-2xl">{currentService.icon}</span>
                  <div>
                    <p className="font-semibold text-neutral-900">{currentService.name}</p>
                    <p className="text-sm text-neutral-500">{currentFrequency?.label || 'One-Time'}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-neutral-600">
                    <span>Base price</span>
                    <span>${basePrice}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-secondary-600">
                      <span>Frequency discount (-{discount}%)</span>
                      <span>-${discountAmount.toFixed(0)}</span>
                    </div>
                  )}

                  {selectedExtras.length > 0 && (
                    <>
                      <div className="pt-2 border-t border-neutral-100">
                        <p className="font-medium text-neutral-700 mb-2">Add-ons:</p>
                        {selectedExtras.map((id) => {
                          const extra = extras.find((e) => e.id === id);
                          return extra ? (
                            <div key={id} className="flex justify-between text-neutral-500">
                              <span>{extra.name}</span>
                              <span>+${extra.price}</span>
                            </div>
                          ) : null;
                        })}
                      </div>
                    </>
                  )}

                  {bedrooms && (
                    <div className="flex justify-between text-neutral-500 pt-2 border-t border-neutral-100">
                      <span>Property</span>
                      <span>{bedrooms} bed · {bathrooms} bath</span>
                    </div>
                  )}

                  {selectedDate && (
                    <div className="flex justify-between text-neutral-500">
                      <span>Date</span>
                      <span>{selectedDate}</span>
                    </div>
                  )}

                  {selectedTime && (
                    <div className="flex justify-between text-neutral-500">
                      <span>Time</span>
                      <span>{selectedTime}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t-2 border-neutral-100">
                  <div className="flex justify-between items-center">
                    <span className="font-heading text-h5 text-neutral-900">Total</span>
                    <span className="font-heading text-h3 text-primary-600">${total.toFixed(0)}</span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-neutral-400 text-sm">Select a service to see pricing.</p>
            )}

            {/* Trust badges */}
            <div className="mt-8 pt-6 border-t border-neutral-100 space-y-3">
              {[
                '✓ All supplies included',
                '✓ Professional cleaners',
                '✓ Serving Alberta',
                '✓ Insured & bonded',
              ].map((badge) => (
                <p key={badge} className="text-xs text-neutral-500 flex items-center gap-1">
                  {badge}
                </p>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
