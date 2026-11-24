import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_CONFIG, DEMO_TESTIMONIALS } from '../data/businessConfig';

export function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonios-heading"
      className="border-t border-border-warm bg-cream py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-4 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-copper uppercase">
              Reseñas de Muestra
            </p>
            <h2
              id="testimonios-heading"
              className="font-serif text-4xl font-normal tracking-tight text-charcoal sm:text-5xl"
            >
              La experiencia en silla
            </h2>
          </motion.div>

          <p className="max-w-md text-xs leading-relaxed text-muted lg:text-right sm:text-sm">
            {BUSINESS_CONFIG.demoNotices.testimonials}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {DEMO_TESTIMONIALS.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col justify-between rounded-md border border-border-warm bg-white p-8 transition-colors duration-200 hover:border-copper/60"
            >
              <div>
                <div
                  className="mb-5 flex items-center gap-1 text-copper"
                  aria-label={`Valoración de ${testimonial.rating} sobre 5 estrellas`}
                >
                  {Array.from({ length: testimonial.rating }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="h-4 w-4 fill-copper text-copper"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="mb-7 text-sm leading-relaxed text-charcoal/90 italic sm:text-base">
                  “{testimonial.comment}”
                </blockquote>
              </div>

              <div className="flex items-center gap-3.5 border-t border-border-warm pt-5">
                <div
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-charcoal font-serif text-sm text-cream"
                >
                  {testimonial.initials}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="truncate text-xs text-muted">
                    {testimonial.serviceUsed} <span aria-hidden="true">·</span> {testimonial.since}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
