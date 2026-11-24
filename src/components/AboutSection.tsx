import { motion } from 'motion/react';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../data/businessConfig';
import { EditorialImage } from './EditorialImage';
import { WhatsAppIcon } from './WhatsAppIcon';

export function AboutSection() {
  const { masterBarber } = BUSINESS_CONFIG;

  return (
    <section
      id="nosotros"
      aria-labelledby="nosotros-heading"
      className="bg-cream py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Columna de narrativa y filosofía */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-7"
          >
            <div>
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-copper uppercase">
                {masterBarber.sectionKicker}
              </p>
              <h2
                id="nosotros-heading"
                className="mb-6 font-serif text-4xl leading-[1.1] font-normal tracking-tight text-charcoal sm:text-5xl"
              >
                {masterBarber.headline}
              </h2>

              <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted">
                {masterBarber.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Especialidades del maestro barbero */}
              <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-border-warm pt-8 sm:grid-cols-2">
                {masterBarber.specialties.map((specialty, idx) => (
                  <div key={specialty.title} className="space-y-1.5">
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-xs font-medium tabular-nums text-copper">
                        0{idx + 1}
                      </span>
                      <h3 className="font-serif text-xl font-normal text-charcoal">
                        {specialty.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted">
                      {specialty.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-border-warm pt-8 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={buildWhatsAppUrl(masterBarber.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-sm bg-charcoal px-7 py-3.5 text-sm font-medium text-cream transition-colors duration-200 hover:bg-copper"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                <span>Coordinar cita con el maestro</span>
              </a>

              <span className="text-xs text-muted">
                Trato directo · Sin intermediarios
              </span>
            </div>
          </motion.div>

          {/* Columna de retrato del maestro barbero */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:col-span-5"
          >
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-md border border-border-warm bg-cream-dark lg:min-h-[560px]">
              <EditorialImage
                src={masterBarber.image}
                alt={masterBarber.imageAlt}
                fallbackLabel="Maestro Barbero — Nexo Studio"
                className="h-full w-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-charcoal/75 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                <p className="font-serif text-lg font-normal">Maestro Barbero · Nexo Studio</p>
                <p className="mt-0.5 text-xs text-cream/80">
                  Atención exclusiva por cita coordinada
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
