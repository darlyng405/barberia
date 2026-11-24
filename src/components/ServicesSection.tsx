import { useState } from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'motion/react';
import {
  BUSINESS_CONFIG,
  SERVICE_CATEGORIES,
  SERVICES,
  type ServiceCategory,
  buildWhatsAppUrl,
} from '../data/businessConfig';
import { EditorialImage } from './EditorialImage';
import { WhatsAppIcon } from './WhatsAppIcon';

export function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('Todos');

  const filteredServices =
    selectedCategory === 'Todos'
      ? SERVICES
      : SERVICES.filter((service) => service.category === selectedCategory);

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="bg-cream py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Encabezado y controles de filtro */}
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-copper uppercase">
              Catálogo de Barbería
            </p>
            <h2
              id="servicios-heading"
              className="mb-4 font-serif text-4xl font-normal tracking-tight text-charcoal sm:text-5xl"
            >
              Servicios &amp; Tarifas
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Cada servicio comienza con una breve consulta de estilo para adaptar el corte o la
              barba a tus facciones y rutina diaria.
            </p>
          </motion.div>

          {/* Filtro por categoría */}
          <div
            role="group"
            aria-label="Filtrar servicios por categoría"
            className="flex flex-wrap items-center gap-1.5 self-start rounded-sm border border-border-warm bg-white p-1.5 lg:self-end"
          >
            {SERVICE_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`min-h-9 whitespace-nowrap shrink-0 rounded-sm px-4 py-1.5 text-xs font-medium transition-colors duration-200 sm:text-sm ${
                    isSelected
                      ? 'bg-charcoal text-cream'
                      : 'text-muted hover:bg-cream hover:text-charcoal'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cuadrícula de servicios */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.05, 0.2),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col overflow-hidden rounded-md border border-border-warm bg-white transition-all duration-200 hover:-translate-y-1 hover:border-copper/70 hover:shadow-[0_14px_34px_rgba(26,26,26,0.06)]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-cream-dark">
                <EditorialImage
                  src={service.image}
                  alt={service.alt}
                  fallbackLabel={service.name}
                  className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                {/* Metadato limpio sin píldoras */}
                <div className="mb-2.5 flex items-center gap-2 text-xs text-muted">
                  <span className="tabular-nums font-medium text-copper">{service.number}</span>
                  <span aria-hidden="true">·</span>
                  <span>{service.category}</span>
                </div>

                <h3 className="mb-3 font-serif text-2xl font-normal text-charcoal">
                  {service.name}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-4 border-t border-border-warm pt-5">
                  <div className="flex flex-col">
                    <span className="font-sans text-lg font-semibold tabular-nums text-charcoal">
                      {service.price}
                    </span>
                    <span className="mt-0.5 inline-flex items-center gap-1.5 text-xs tabular-nums text-muted">
                      <Clock className="h-3.5 w-3.5 text-copper" aria-hidden="true" />
                      {service.duration}
                    </span>
                  </div>

                  <a
                    href={buildWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Solicitar cita por WhatsApp para ${service.name}`}
                    className="inline-flex min-h-10 items-center gap-2 whitespace-nowrap shrink-0 rounded-sm border border-border-warm bg-cream px-4 py-2 text-xs font-medium text-charcoal transition-colors duration-200 hover:border-copper hover:bg-copper hover:text-cream sm:text-sm"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
                    <span>Solicitar cita</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Aviso transparente de datos demostrativos y confirmación directa */}
        <p className="mt-10 border-t border-border-warm pt-6 text-xs leading-relaxed text-muted sm:text-sm">
          {BUSINESS_CONFIG.demoNotices.services}
        </p>
      </div>
    </section>
  );
}
