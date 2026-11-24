import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../data/businessConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

const FOOTER_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-charcoal-deep text-muted-dark">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-copper/50 bg-charcoal font-serif text-sm text-cream"
            >
              {BUSINESS_CONFIG.brandMark}
            </span>
            <div>
              <p className="font-serif text-lg text-cream">{BUSINESS_CONFIG.brandName}</p>
              <p className="text-xs text-muted-dark">{BUSINESS_CONFIG.tagline}</p>
            </div>
          </div>

          <nav aria-label="Navegación de pie de página" className="flex flex-wrap items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-dark transition-colors duration-200 hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={buildWhatsAppUrl(BUSINESS_CONFIG.defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start text-sm font-medium text-copper-light transition-colors duration-200 hover:text-cream md:self-auto"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span>WhatsApp directo</span>
          </a>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-xs text-muted-dark sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {BUSINESS_CONFIG.brandName}. Todos los derechos reservados.
          </p>
          <p>
            Sitio de demostración · Datos, tarifas y fotografías configurables para el negocio.
          </p>
        </div>
      </div>
    </footer>
  );
}
