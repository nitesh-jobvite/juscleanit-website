import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';

const testimonials = [
  {
    name: 'Carla',
    location: 'Okotoks, AB',
    rating: 5,
    text: "We had a very efficient team in to complete the deep clean for our new house. The girls were efficient at tackling the list, and completed even more which needed to be done. The team were clearly professional cleaners and exceeded our expectations. We will be hiring them back again and recommend using them.",
    avatar: 'CA',
  },
  {
    name: 'Brittany',
    location: 'Calgary, AB',
    rating: 5,
    text: "Love this company, reached out in a community Facebook group and this company came highly recommend. We have had Jessica and LOVE her work, my glass shower is always spotless - she does amazing work and always ask her when we can get her :)",
    avatar: 'BR',
  },
  {
    name: 'Nikki',
    location: 'Calgary, AB',
    rating: 5,
    text: "If you're thinking \"i can just do it myself and save money\".. ya sure BUT if you're like me and DONT have much time on your hands OR are just SICK and tired of cleaning all the time.. book away! Its worth it to treat yourself. I booked with JusCleanIt for the 1st time. I was shocked how clean the shower door and my stove top were. She was very thorough and the house smelled amazing!!! I will be booking again. Thank you - mom of 2 toddlers",
    avatar: 'NK',
  },
  {
    name: 'Samantha',
    location: 'Calgary, AB',
    rating: 5,
    text: "With a busy work schedule I booked a 5 hour clean and I'm so glad I did! Jus Clean It was very accommodating with the day/time and sent a pdf with a task list and asked what my priorities were. Our cleaner ensured a thorough and spotless clean. I appreciated that she asked me to check that things were up to a high standard before moving to the next floor. She was personable and detail oriented. I'd happily hire her again. Thank you!",
    avatar: 'SA',
  },
  {
    name: 'Kim',
    location: 'Calgary, AB',
    rating: 5,
    text: "Such a great clean!! The girl that came was very thorough and wow I don't think my baseboards or the shower has ever been so clean!! Everything was so clean - you could tell she took the time and detail that each piece needed! I am so happy, and booking for regular cleanings! Would highly recommend!!",
    avatar: 'KM',
  },
  {
    name: 'Selina',
    location: 'Calgary, AB',
    rating: 5,
    text: "The team did an excellent job of setting the appointment up and was incredibly easy to deal with. They were more than happy to work with me to find a time when my schedule permitted, very professional and pleasant. The cleaner was so sweet and went above and beyond my expectations. When she was finished, my house looked absolutely radiant. I would definitely recommend their services. Thank you Khristina and Alicia!",
    avatar: 'SE',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-accent-400' : 'text-neutral-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding gradient-fresh" aria-label="Customer testimonials">
      <div className="container-wide">
        <SectionHeading
          badge="Testimonials"
          title="What Our Customers Say"
          subtitle="We love hearing from you, our 1000+ satisfied customers across Alberta."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} padding="lg" variant="default" hover>
              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-4 text-neutral-600 text-body-sm leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white text-sm font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-xs text-neutral-500">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
