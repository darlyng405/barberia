import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../data/businessConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio', href: '#inicio' },
  { id: 'servicios', label: 'Servicios', href: '#servicios' },
  { id: 'galeria', label: 'Galería', href: '#galeria' },
  { id: 'nosotros', label: 'Nosotros', href: '#nosotros' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
] as const;

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const whatsappHref = buildWhatsAppUrl(BUSINESS_CONFIG.defaultWhatsappMessage);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
          isScrolled
            ? 'border-b border-border-warm bg-cream/95 shadow-[0_6px_24px_rgba(26,26,26,0.06)] backdrop-blur-md'
            : 'border-b border-border-warm/80 bg-cream/90 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-6 md:h-20 lg:px-10">
          {/* Zona 1: Marca en una sola línea */}
          <a
            href="#inicio"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex shrink-0 items-center gap-3 whitespace-nowrap text-charcoal transition-opacity duration-200 hover:opacity-80"
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal font-serif text-lg text-cream"
            >
              {BUSINESS_CONFIG.brandMark}
            </span>
            <span className="font-serif text-xl font-semibold tracking-tight">
              {BUSINESS_CONFIG.brandName}
            </span>
          </a>

          {/* Zona 2: Enlaces de navegación (5 secciones) */}
          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-7 md:flex lg:gap-9"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative whitespace-nowrap shrink-0 py-1 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-charcoal' : 'text-muted hover:text-charcoal'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 h-px bg-copper transition-transform duration-200 origin-left ${
                      isActive ? 'w-full scale-x-100' : 'w-full scale-x-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zona 3: Acción principal + disparador móvil */}
          <div className="flex shrink-0 items-center gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 whitespace-nowrap shrink-0 rounded-sm bg-copper px-4 py-2 text-sm font-medium text-cream transition-colors duration-200 hover:bg-copper-hover md:px-5"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">Solicitar cita</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border-warm text-charcoal transition-colors duration-200 hover:border-copper hover:text-copper md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil deslizable */}
      <div
        id="mobile-navigation"
        aria-hidden={!isMobileMenuOpen}
        className={`fixed inset-0 z-30 md:hidden transition-opacity duration-200 ${
          isMobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-charcoal/50 backdrop-blur-xs"
        />

        <nav
          aria-label="Navegación móvil"
          className={`absolute top-0 right-0 flex h-full w-full max-w-sm flex-col justify-between bg-cream px-8 pt-24 pb-10 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col divide-y divide-border-warm">
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-baseline justify-between py-5 font-serif text-2xl text-charcoal transition-colors duration-200 hover:text-copper"
              >
                <span>{item.label}</span>
                <span className="font-sans text-xs tabular-nums text-muted">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          <div className="space-y-4 border-t border-border-warm pt-6">
            <p className="text-xs leading-relaxed text-muted">
              Atención individual previa coordinación directa por WhatsApp.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex min-h-12 w-full items-center justify-center gap-2.5 rounded-sm bg-copper px-5 py-3 text-sm font-medium text-cream transition-colors duration-200 hover:bg-copper-hover"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Solicitar cita por WhatsApp</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
