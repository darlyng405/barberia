import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../data/businessConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export function ContactSection() {
  const whatsappHref = buildWhatsAppUrl(
    'Hola, me gustaría consultar disponibilidad y solicitar una cita en Nexo Studio.'
  );

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-heading"
      className="bg-charcoal text-cream"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12">
        {/* Columna izquierda: Canales de contacto y horarios */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="px-6 py-20 sm:py-24 lg:col-span-7 lg:py-28 lg:pr-14 lg:pl-10"
        >
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-copper-light uppercase">
            Contacto &amp; Ubicación
          </p>
          <h2
            id="contacto-heading"
            className="mb-4 font-serif text-4xl font-normal tracking-tight text-cream sm:text-5xl"
          >
            Coordina tu próxima visita.
          </h2>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-muted-dark">
            Escríbenos directamente por WhatsApp para consultar disponibilidad, resolver dudas sobre
            un servicio o acordar tu cita con el maestro barbero.
          </p>

          <dl className="divide-y divide-white/10 border-t border-b border-white/10">
            <div className="flex flex-col gap-1.5 py-5 sm:flex-row sm:items-center sm:justify-between">
              <dt className="flex items-center gap-2.5 text-xs tracking-wider text-muted-dark uppercase">
                <WhatsAppIcon className="h-4 w-4 text-copper-light" />
                <span>WhatsApp (Citas)</span>
              </dt>
              <dd>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-base font-medium tabular-nums text-cream transition-colors duration-200 hover:text-copper-light"
                >
                  <span>{BUSINESS_CONFIG.phoneDisplay}</span>
                  <ArrowUpRight className="h-4 w-4 text-copper-light" aria-hidden="true" />
                </a>
              </dd>
            </div>

            <div className="flex flex-col gap-1.5 py-5 sm:flex-row sm:items-center sm:justify-between">
              <dt className="flex items-center gap-2.5 text-xs tracking-wider text-muted-dark uppercase">
                <Phone className="h-4 w-4 text-copper-light" aria-hidden="true" />
                <span>Teléfono</span>
              </dt>
              <dd>
                <a
                  href={BUSINESS_CONFIG.phoneHref}
                  className="text-base font-medium tabular-nums text-cream transition-colors duration-200 hover:text-copper-light"
                >
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </dd>
            </div>

            <div className="flex flex-col gap-1.5 py-5 sm:flex-row sm:items-center sm:justify-between">
              <dt className="flex items-center gap-2.5 text-xs tracking-wider text-muted-dark uppercase">
                <Mail className="h-4 w-4 text-copper-light" aria-hidden="true" />
                <span>Correo electrónico</span>
              </dt>
              <dd>
                <a
                  href={`mailto:${BUSINESS_CONFIG.email}`}
                  className="text-base font-medium text-cream transition-colors duration-200 hover:text-copper-light"
                >
                  {BUSINESS_CONFIG.email}
                </a>
              </dd>
            </div>

            <div className="flex flex-col gap-1.5 py-5 sm:flex-row sm:items-center sm:justify-between">
              <dt className="flex items-center gap-2.5 text-xs tracking-wider text-muted-dark uppercase">
                <MapPin className="h-4 w-4 text-copper-light" aria-hidden="true" />
                <span>Dirección</span>
              </dt>
              <dd className="sm:text-right">
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-base font-medium text-cream transition-colors duration-200 hover:text-copper-light"
                >
                  <span>
                    {BUSINESS_CONFIG.addressLine1}, {BUSINESS_CONFIG.addressLine2}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-copper-light" aria-hidden="true" />
                </a>
              </dd>
            </div>

            <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-start sm:justify-between">
              <dt className="flex items-center gap-2.5 text-xs tracking-wider text-muted-dark uppercase">
                <Clock className="h-4 w-4 text-copper-light" aria-hidden="true" />
                <span>Horarios de atención</span>
              </dt>
              <dd className="space-y-1.5 sm:text-right">
                {BUSINESS_CONFIG.hours.map((item) => (
                  <div
                    key={item.days}
                    className="flex justify-between gap-6 text-sm sm:justify-end"
                  >
                    <span className="text-muted-dark">{item.days}</span>
                    <span className="font-medium tabular-nums text-cream">{item.hours}</span>
                  </div>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-sm bg-copper px-7 py-3.5 text-sm font-medium text-cream transition-colors duration-200 hover:bg-copper-hover"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span>Solicitar cita por WhatsApp</span>
            </a>

            <a
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-white/20 px-6 py-3.5 text-sm font-medium text-cream transition-colors duration-200 hover:border-copper-light hover:text-copper-light"
            >
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Abrir en Google Maps</span>
            </a>
          </div>

          <p className="mt-7 text-xs leading-relaxed text-muted-dark">
            {BUSINESS_CONFIG.demoNotices.contact}
          </p>
        </motion.div>

        {/* Columna derecha: Plano arquitectónico y tarjeta de ubicación interactiva */}
        <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden border-t border-white/10 bg-charcoal-deep p-8 lg:col-span-5 lg:border-t-0 lg:border-l">
          {/* Retícula cartográfica editorial */}
          <svg
            aria-hidden="true"
            viewBox="0 0 600 600"
            fill="none"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
          >
            <g stroke="#3A3733" strokeWidth="1">
              <path d="M0 90 H600 M0 190 H600 M0 300 H600 M0 420 H600 M0 520 H600" />
              <path d="M80 0 V600 M190 0 V600 M300 0 V600 M430 0 V600 M530 0 V600" />
              <path d="M0 140 L600 220 M120 0 L240 600 M380 0 L490 600" strokeDasharray="4 6" />
            </g>
            {/* Avenidas principales destacadas */}
            <path d="M300 0 V600" stroke="#A67C52" strokeOpacity="0.55" strokeWidth="2.5" />
            <path d="M0 300 H600" stroke="#A67C52" strokeOpacity="0.35" strokeWidth="2" />
            <circle cx="300" cy="300" r="72" stroke="#A67C52" strokeOpacity="0.25" strokeWidth="1" />
            <circle cx="300" cy="300" r="138" stroke="#A67C52" strokeOpacity="0.14" strokeWidth="1" />
          </svg>

          {/* Tarjeta interactiva de ubicación */}
          <div className="relative z-10 w-full max-w-sm rounded-md border border-white/15 bg-charcoal/95 p-7 shadow-2xl backdrop-blur-sm">
            <div className="mb-5 flex items-center gap-3.5">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-copper font-serif text-xl text-cream"
              >
                {BUSINESS_CONFIG.brandMark}
              </span>
              <div>
                <h3 className="font-serif text-xl font-normal text-cream">
                  {BUSINESS_CONFIG.brandName}
                </h3>
                <p className="text-xs text-muted-dark">{BUSINESS_CONFIG.tagline}</p>
              </div>
            </div>

            <div className="mb-6 space-y-1 border-t border-white/10 pt-5 text-sm">
              <p className="font-medium text-cream">{BUSINESS_CONFIG.addressLine1}</p>
              <p className="text-muted-dark">{BUSINESS_CONFIG.addressLine2}</p>
              <p className="pt-1 text-xs text-copper-light">
                Ubicación de demostración · Editable
              </p>
            </div>

            <a
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-sm bg-cream px-5 py-2.5 text-sm font-medium text-charcoal transition-colors duration-200 hover:bg-copper hover:text-cream"
            >
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Cómo llegar en Google Maps</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
