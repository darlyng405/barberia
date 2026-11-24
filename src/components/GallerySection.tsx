import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { motion } from 'motion/react';
import {
  BUSINESS_CONFIG,
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  type GalleryCategory,
  type GalleryItem,
  buildWhatsAppUrl,
} from '../data/businessConfig';
import { EditorialImage } from './EditorialImage';
import { WhatsAppIcon } from './WhatsAppIcon';

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('Todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 'Todos'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const activeItem: GalleryItem | null =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handlePrevious = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null || filteredItems.length === 0) return null;
      return (prev - 1 + filteredItems.length) % filteredItems.length;
    });
  }, [filteredItems.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null || filteredItems.length === 0) return null;
      return (prev + 1) % filteredItems.length;
    });
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      } else if (event.key === 'ArrowLeft') {
        handlePrevious();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, handleClose, handlePrevious, handleNext]);

  const handleCategoryChange = (category: GalleryCategory) => {
    setSelectedCategory(category);
    setLightboxIndex(null);
  };

  const getEditorialSpanClass = (item: GalleryItem) => {
    if (selectedCategory !== 'Todos') {
      return 'aspect-[4/3]';
    }
    if (item.featuredSpan === 'hero') {
      return 'md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[480px]';
    }
    if (item.featuredSpan === 'wide') {
      return 'md:col-span-2 min-h-[240px]';
    }
    return 'min-h-[240px]';
  };

  return (
    <section
      id="galeria"
      aria-labelledby="galeria-heading"
      className="bg-charcoal py-24 text-cream lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Encabezado y filtros de galería */}
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-copper-light uppercase">
              Galería Editorial
            </p>
            <h2
              id="galeria-heading"
              className="mb-4 font-serif text-4xl font-normal tracking-tight text-cream sm:text-5xl"
            >
              Trabajos &amp; Estilos
            </h2>
            <p className="text-base leading-relaxed text-muted-dark">
              Cortes clásicos, degradados pulidos y rituales de barba seleccionados. Pulsa
              cualquier fotografía para ver el detalle y consultar ese estilo por WhatsApp.
            </p>
          </motion.div>

          {/* Filtros de galería */}
          <div
            role="group"
            aria-label="Filtrar galería por especialidad"
            className="flex flex-wrap items-center gap-1.5 self-start rounded-sm border border-white/10 bg-charcoal-soft p-1.5 lg:self-end"
          >
            {GALLERY_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleCategoryChange(category)}
                  className={`min-h-9 whitespace-nowrap shrink-0 rounded-sm px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 sm:text-sm ${
                    isSelected
                      ? 'bg-copper text-cream'
                      : 'text-muted-dark hover:bg-white/5 hover:text-cream'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cuadrícula editorial asimétrica */}
        <div
          className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${
            selectedCategory === 'Todos'
              ? 'lg:grid-cols-4 lg:auto-rows-[245px]'
              : 'lg:grid-cols-3'
          }`}
        >
          {filteredItems.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.48,
                delay: Math.min(index * 0.04, 0.18),
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setLightboxIndex(index)}
              aria-label={`Ampliar fotografía: ${item.title}`}
              className={`group relative overflow-hidden rounded-md border border-white/10 bg-charcoal-soft text-left transition-colors duration-200 hover:border-copper/60 ${getEditorialSpanClass(
                item
              )}`}
            >
              <EditorialImage
                src={item.image}
                alt={item.alt}
                fallbackLabel={item.title}
                darkSurface
                className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
              />

              {/* Scrim de lectura y detalle discreto */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-80 transition-opacity duration-200 group-hover:opacity-95"
              />

              <div className="absolute top-3.5 right-3.5 flex h-9 w-9 items-center justify-center rounded-sm bg-charcoal/60 text-cream/80 opacity-0 backdrop-blur-xs transition-all duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                <Expand className="h-4 w-4" aria-hidden="true" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="mb-1 text-xs tracking-wide text-copper-light">
                  {item.category}
                </p>
                <h3 className="font-serif text-lg leading-snug font-normal text-cream sm:text-xl">
                  {item.title}
                </h3>
              </div>
            </motion.button>
          ))}
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-muted-dark sm:text-sm">
          {BUSINESS_CONFIG.demoNotices.gallery}
        </p>
      </div>

      {/* Visor ampliado (Lightbox) */}
      {activeItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Detalle de galería: ${activeItem.title}`}
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-deep/95 p-4 backdrop-blur-sm sm:p-8"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-md border border-white/15 bg-charcoal lg:grid lg:grid-cols-[1.45fr_1fr]"
          >
            {/* Botón cerrar */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Cerrar visor de fotografía"
              className="absolute top-3 right-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-charcoal/80 text-cream transition-colors duration-200 hover:bg-copper"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Contenedor de imagen */}
            <div className="relative flex items-center justify-center bg-charcoal-deep">
              <EditorialImage
                src={activeItem.image}
                alt={activeItem.alt}
                fallbackLabel={activeItem.title}
                darkSurface
                loading="eager"
                className="max-h-[55vh] w-full object-contain lg:max-h-[82vh] lg:h-full lg:object-cover"
              />

              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevious}
                    aria-label="Fotografía anterior"
                    className="absolute top-1/2 left-3 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm bg-charcoal/75 text-cream backdrop-blur-xs transition-colors duration-200 hover:bg-copper"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Fotografía siguiente"
                    className="absolute top-1/2 right-3 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm bg-charcoal/75 text-cream backdrop-blur-xs transition-colors duration-200 hover:bg-copper"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Ficha editorial del estilo */}
            <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-10">
              <div>
                <div className="mb-4 flex items-center gap-2 text-xs text-muted-dark">
                  <span className="text-copper-light">{activeItem.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeItem.relatedService}</span>
                </div>

                <h3 className="mb-4 font-serif text-2xl font-normal text-cream sm:text-3xl">
                  {activeItem.title}
                </h3>

                <p className="text-sm leading-relaxed text-cream/80 sm:text-base">
                  {activeItem.caption}
                </p>
              </div>

              <div className="space-y-5 border-t border-white/10 pt-6">
                <a
                  href={buildWhatsAppUrl(activeItem.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-sm bg-copper px-5 py-3 text-sm font-medium text-cream transition-colors duration-200 hover:bg-copper-hover"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>Consultar este estilo por WhatsApp</span>
                </a>

                <div className="flex items-center justify-between text-xs text-muted-dark">
                  <span className="tabular-nums">
                    {lightboxIndex + 1} / {filteredItems.length}
                  </span>
                  <span>Usa ← → para navegar · ESC para cerrar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
