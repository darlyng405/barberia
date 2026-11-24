import { ArrowDownRight } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../data/businessConfig';
import { EditorialImage } from './EditorialImage';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Hero() {
  const { hero } = BUSINESS_CONFIG;
  const whatsappHref = buildWhatsAppUrl(hero.whatsappMessage);

  return (
    <section
      id="inicio"
      aria-label="Inicio"
      className="relative flex min-h-[680px] items-center overflow-hidden bg-charcoal pt-20 text-cream lg:min-h-[92vh]"
    >
      {/* Fotografía editorial de fondo */}
      <div className="absolute inset-0">
        <EditorialImage
          src={hero.image}
          alt={hero.imageAlt}
          loading="eager"
          darkSurface
          className="h-full w-full object-cover object-center"
        />
        {/* Velo de contraste calibrado para legibilidad WCAG AAA */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-charcoal/30"
        />
      </div>

      {/* Contenido principal del Hero */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-6 text-xs font-medium tracking-[0.22em] text-copper-light uppercase">
            {hero.kicker}
          </p>

          <h1 className="mb-7 font-serif text-5xl leading-[1.04] font-normal tracking-tight text-cream sm:text-6xl lg:text-7xl">
            <span className="block">{hero.headlineTop}</span>
            <span className="block">{hero.headlineMiddle}</span>
            <span className="block italic text-copper-light">{hero.headlineAccent}</span>
          </h1>

          <p className="mb-10 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
            {hero.description}
          </p>

          <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-sm bg-copper px-7 py-3.5 text-sm font-medium text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-copper-hover sm:text-base"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span>Solicitar cita por WhatsApp</span>
            </a>

            <a
              href="#servicios"
              className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-cream/40 bg-charcoal/25 px-7 py-3.5 text-sm font-medium text-cream backdrop-blur-xs transition-all duration-200 hover:border-cream hover:bg-cream hover:text-charcoal sm:text-base"
            >
              <span>Explorar servicios</span>
              <ArrowDownRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        {/* Franja inferior editorial sobria */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 border-t border-cream/15 pt-6 lg:mt-24"
        >
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs tracking-wide text-cream/75 sm:text-sm">
            <span>Un solo maestro barbero</span>
            <span aria-hidden="true" className="text-copper-light">·</span>
            <span>Confirmación directa por WhatsApp</span>
            <span aria-hidden="true" className="text-copper-light">·</span>
            <span className="tabular-nums">Lun — Vie 09:00–20:00 · Sáb 09:00–15:00</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
