/**
 * ============================================================================
 * CONFIGURACIÓN CENTRALIZADA DE NEXO STUDIO (DATOS DE DEMOSTRACIÓN)
 * ============================================================================
 * Sustituye únicamente los valores de este archivo para adaptar el sitio
 * con la información real de tu barbería:
 *  - Número de WhatsApp (código de país + número, sin espacios ni signo +)
 *  - Datos de contacto, horarios y enlace de Google Maps
 *  - Servicios, tarifas y duraciones aproximadas
 *  - Fotografías locales de la galería y perfil del maestro barbero
 *  - Testimonios verificados de clientes reales
 */

import heroBarbershopStudioImg from '../assets/images/hero_barbershop_studio_1795552060130.jpg';
import serviceClassicCutImg from '../assets/images/service_classic_cut_1795552062143.jpg';
import servicePrecisionFadeImg from '../assets/images/service_precision_fade_1795552112087.jpg';
import serviceBeardRitualImg from '../assets/images/service_beard_ritual_1795552060855.jpg';
import serviceClassicShaveImg from '../assets/images/service_classic_shave_1795552061562.jpg';
import serviceCutAndBeardImg from '../assets/images/service_cut_and_beard_1795552062932.jpg';
import serviceEyebrowGroomingImg from '../assets/images/service_eyebrow_grooming_1795552062229.jpg';
import masterBarberPortraitImg from '../assets/images/master_barber_portrait_1795552061196.jpg';
import galleryTexturedCropImg from '../assets/images/gallery_textured_crop_1795552060334.jpg';

export type ServiceCategory = 'Todos' | 'Corte' | 'Barba' | 'Combo' | 'Facial';

export type GalleryCategory =
  | 'Todos'
  | 'Degradados'
  | 'Cortes Clásicos'
  | 'Barba & Navaja'
  | 'El Estudio';

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  category: Exclude<ServiceCategory, 'Todos'>;
  description: string;
  duration: string;
  price: string;
  image: string;
  alt: string;
  whatsappMessage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'Todos'>;
  relatedService: string;
  caption: string;
  image: string;
  alt: string;
  whatsappMessage: string;
  featuredSpan?: 'hero' | 'wide' | 'tall';
}

export interface TestimonialItem {
  id: string;
  name: string;
  initials: string;
  serviceUsed: string;
  since: string;
  rating: number;
  comment: string;
}

export interface BusinessHour {
  days: string;
  hours: string;
}

export const BUSINESS_CONFIG = {
  brandName: 'Nexo Studio',
  brandMark: 'N',
  tagline: 'Barbería de Autor',
  cityLabel: 'Santo Domingo · Datos de demostración',

  /**
   * NÚMERO DE WHATSAPP DE DEMOSTRACIÓN
   * Reemplaza este valor por el número real de la barbería (código de país + número, solo dígitos).
   * Ejemplo República Dominicana: "18095550000"
   */
  whatsappNumber: '18095550000',

  phoneDisplay: '+1 (809) 555-0000',
  phoneHref: 'tel:+18095550000',
  email: 'hola@nexostudio.do',
  addressLine1: 'Av. Winston Churchill 95',
  addressLine2: 'Santo Domingo, República Dominicana',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.+Winston+Churchill+95,+Santo+Domingo',

  hours: [
    { days: 'Lunes a Viernes', hours: '09:00 — 20:00' },
    { days: 'Sábados', hours: '09:00 — 15:00' },
    { days: 'Domingos', hours: 'Cerrado' },
  ] as BusinessHour[],

  hero: {
    kicker: 'Nexo Studio · Barbería de Autor',
    headlineTop: 'Precisión.',
    headlineMiddle: 'Actitud.',
    headlineAccent: 'Carácter.',
    description:
      'Técnica tradicional y estética contemporánea en una sola silla. Un ritual de barbería sin prisas, atendido directamente por un maestro barbero.',
    image: heroBarbershopStudioImg,
    imageAlt:
      'Interior minimalista de Nexo Studio con sillón clásico de barbería en cuero negro, madera de nogal e iluminación natural',
    whatsappMessage:
      'Hola, me gustaría solicitar una cita en Nexo Studio y consultar disponibilidad.',
  },

  defaultWhatsappMessage:
    'Hola, me gustaría consultar disponibilidad y solicitar una cita en Nexo Studio.',

  masterBarber: {
    sectionKicker: 'El Maestro Barbero',
    headline: 'Una sola silla. Toda la atención en cada detalle.',
    image: masterBarberPortraitImg,
    imageAlt:
      'Retrato editorial del maestro barbero de Nexo Studio junto a su sillón clásico de barbería sosteniendo tijeras profesionales',
    paragraphs: [
      'Nexo Studio nació con una convicción clara: recuperar el oficio sereno de la barbería clásica en un espacio privado, sobrio y sin distracciones. Aquí no existen turnos apresurados ni líneas de producción.',
      'El estudio es atendido personalmente por un único maestro barbero especializado en arquitectura capilar masculina, transiciones limpias a tijera y navaja, y cuidado integral de la barba. Cada visita comienza con un diagnóstico breve de tu tipo de cabello, facciones y rutina diaria para lograr un acabado que evolucione bien con el paso de las semanas.',
    ],
    specialties: [
      {
        title: 'Tijera y estructura clásica',
        detail: 'Cortes proporcionados que conservan su forma natural al crecer.',
      },
      {
        title: 'Degradados de precisión',
        detail: 'Transiciones limpias (low, mid y skin fade) adaptadas a tu cráneo.',
      },
      {
        title: 'Ritual de barba y navaja',
        detail: 'Toalla caliente, aceites botánicos y perfilado simétrico.',
      },
      {
        title: 'Atención individual',
        detail: 'Un solo cliente por turno, ambiente tranquilo y trato directo.',
      },
    ],
    whatsappMessage:
      'Hola, me gustaría consultar horarios disponibles para agendar directamente con el maestro barbero en Nexo Studio.',
  },

  demoNotices: {
    services:
      'Precios y duraciones mostrados con fines demostrativos. La disponibilidad y confirmación final se coordinan directamente por WhatsApp.',
    gallery:
      'Imágenes editoriales de demostración seleccionadas para representar los estilos del estudio; listas para sustituirse por fotografías propias del negocio.',
    testimonials:
      'Comentarios de ejemplo con fines demostrativos. Sustitúyelos por reseñas verificadas de clientes reales al publicar.',
    contact:
      'Teléfono, correo, dirección y horarios de demostración editables. Las solicitudes enviadas por WhatsApp se confirman directamente con el barbero.',
  },
} as const;

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  'Todos',
  'Corte',
  'Barba',
  'Combo',
  'Facial',
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'corte-clasico',
    number: '01',
    name: 'Corte Clásico Signature',
    category: 'Corte',
    description:
      'Corte tradicional a tijera y máquina adaptado a las facciones y crecimiento natural de tu cabello. Incluye lavado relajante y peinado final.',
    duration: '45 min aprox.',
    price: 'RD$ 1,500',
    image: serviceClassicCutImg,
    alt: 'Maestro barbero realizando un corte clásico masculino con tijera y peine',
    whatsappMessage:
      'Hola, me gustaría solicitar una cita para el servicio de Corte Clásico Signature.',
  },
  {
    id: 'degradado-diseno',
    number: '02',
    name: 'Degradado & Diseño',
    category: 'Corte',
    description:
      'Degradado de alta precisión (low, mid o skin fade) con contornos definidos a navaja, texturizado superior y acabado natural.',
    duration: '50 min aprox.',
    price: 'RD$ 1,800',
    image: servicePrecisionFadeImg,
    alt: 'Resultado de corte degradado skin fade de alta precisión con líneas definidas',
    whatsappMessage:
      'Hola, me gustaría solicitar una cita para el servicio de Degradado & Diseño.',
  },
  {
    id: 'corte-barba',
    number: '03',
    name: 'Corte + Barba',
    category: 'Combo',
    description:
      'La experiencia completa de Nexo Studio: corte personalizado más diseño y acondicionamiento de barba con toalla caliente en una sola sesión.',
    duration: '75 min aprox.',
    price: 'RD$ 2,500',
    image: serviceCutAndBeardImg,
    alt: 'Resultado integral de corte contemporáneo y barba perfilada con precisión',
    whatsappMessage:
      'Hola, me gustaría solicitar una cita para el servicio de Corte + Barba.',
  },
  {
    id: 'arreglo-barba',
    number: '04',
    name: 'Arreglo de Barba',
    category: 'Barba',
    description:
      'Perfilado simétrico, rebaje estructurado, ritual de toalla caliente con aromas botánicos, aceites nutritivos y bálsamo hidratante.',
    duration: '35 min aprox.',
    price: 'RD$ 1,200',
    image: serviceBeardRitualImg,
    alt: 'Perfilado artesanal de barba con tijeras finas y ritual de toalla caliente',
    whatsappMessage:
      'Hola, me gustaría solicitar una cita para el servicio de Arreglo de Barba.',
  },
  {
    id: 'afeitado-clasico',
    number: '05',
    name: 'Afeitado Clásico',
    category: 'Barba',
    description:
      'Afeitado tradicional a navaja con espuma caliente batida a brocha, compresas tibias y cierre refrescante con loción calmante.',
    duration: '40 min aprox.',
    price: 'RD$ 1,500',
    image: serviceClassicShaveImg,
    alt: 'Utensilios de afeitado clásico: navaja profesional, brocha con espuma caliente y toalla enrollada',
    whatsappMessage:
      'Hola, me gustaría solicitar una cita para el servicio de Afeitado Clásico.',
  },
  {
    id: 'diseno-cejas',
    number: '06',
    name: 'Diseño de Cejas',
    category: 'Facial',
    description:
      'Limpieza y perfilado masculino respetando la densidad natural para equilibrar la expresión sin artificialidad.',
    duration: '15 min aprox.',
    price: 'RD$ 500',
    image: serviceEyebrowGroomingImg,
    alt: 'Detalle de perfilado masculino de cejas con herramientas de precisión en barbería',
    whatsappMessage:
      'Hola, me gustaría solicitar una cita para el servicio de Diseño de Cejas.',
  },
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'Todos',
  'Degradados',
  'Cortes Clásicos',
  'Barba & Navaja',
  'El Estudio',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-fade-precision',
    title: 'Skin Fade & Contorno Limpio',
    category: 'Degradados',
    relatedService: 'Degradado & Diseño',
    caption:
      'Transición pulida desde cero con perfilado geométrico en sienes y volumen superior natural.',
    image: servicePrecisionFadeImg,
    alt: 'Fotografía editorial de degradado skin fade limpio visto de perfil tres cuartos',
    whatsappMessage:
      'Hola, vi el estilo "Skin Fade & Contorno Limpio" en la galería y me gustaría solicitar una cita para un degradado.',
    featuredSpan: 'hero',
  },
  {
    id: 'gal-textured-crop',
    title: 'Mid Drop Fade & Crop Texturizado',
    category: 'Degradados',
    relatedService: 'Degradado & Diseño',
    caption:
      'Degradado medio curvo combinado con textura a tijera en la parte superior para un acabado mate contemporáneo.',
    image: galleryTexturedCropImg,
    alt: 'Corte mid drop fade con flequillo crop texturizado en iluminación editorial',
    whatsappMessage:
      'Hola, vi el estilo "Mid Drop Fade & Crop Texturizado" en la galería y me gustaría solicitar una cita.',
  },
  {
    id: 'gal-beard-sculpt',
    title: 'Esculpido de Barba & Toalla Caliente',
    category: 'Barba & Navaja',
    relatedService: 'Arreglo de Barba',
    caption:
      'Definición de líneas de mejilla y cuello con tijera de precisión y acondicionamiento con aceites esenciales.',
    image: serviceBeardRitualImg,
    alt: 'Maestro barbero perfilando una barba completa con tijera y peine',
    whatsappMessage:
      'Hola, vi el trabajo "Esculpido de Barba & Toalla Caliente" en la galería y me gustaría solicitar una cita para arreglo de barba.',
  },
  {
    id: 'gal-classic-sidepart',
    title: 'Corte Clásico a Tijera',
    category: 'Cortes Clásicos',
    relatedService: 'Corte Clásico Signature',
    caption:
      'Trabajo minucioso peine sobre tijera con raya lateral elegante y volumen balanceado.',
    image: serviceClassicCutImg,
    alt: 'Ejecución de corte clásico ejecutivo a tijera en sillón de barbería',
    whatsappMessage:
      'Hola, vi el estilo "Corte Clásico a Tijera" en la galería y me gustaría solicitar una cita para un corte clásico.',
    featuredSpan: 'wide',
  },
  {
    id: 'gal-full-combo',
    title: 'Armonía Corte + Barba',
    category: 'Cortes Clásicos',
    relatedService: 'Corte + Barba',
    caption:
      'Integración progresiva de patillas y barba estructurada junto a un peinado con volumen controlado.',
    image: serviceCutAndBeardImg,
    alt: 'Retrato editorial mostrando resultado de corte moderno y barba perfilada',
    whatsappMessage:
      'Hola, vi el estilo "Armonía Corte + Barba" en la galería y me gustaría solicitar una cita para Corte + Barba.',
  },
  {
    id: 'gal-shave-ritual',
    title: 'Ritual de Afeitado a Navaja',
    category: 'Barba & Navaja',
    relatedService: 'Afeitado Clásico',
    caption:
      'Preparación tradicional con espuma tibia en cuenco cerámico, brocha clásica y toalla de algodón.',
    image: serviceClassicShaveImg,
    alt: 'Navaja clásica, brocha de afeitar con espuma y toalla tibia sobre madera de nogal',
    whatsappMessage:
      'Hola, me interesa el "Ritual de Afeitado a Navaja" que vi en la galería y quisiera solicitar una cita.',
  },
  {
    id: 'gal-studio-space',
    title: 'Atmósfera del Estudio',
    category: 'El Estudio',
    relatedService: 'Experiencia Nexo Studio',
    caption:
      'Un espacio privado en madera oscura, cuero y detalles en cobre pensado para desconectar del ritmo diario.',
    image: heroBarbershopStudioImg,
    alt: 'Vista interior del estudio privado de Nexo Studio con una sola silla de barbería',
    whatsappMessage:
      'Hola, me gustaría conocer la disponibilidad para agendar una visita en Nexo Studio.',
    featuredSpan: 'wide',
  },
  {
    id: 'gal-detailing',
    title: 'Perfilado Facial & Cejas',
    category: 'Barba & Navaja',
    relatedService: 'Diseño de Cejas',
    caption:
      'Detalles finales de precisión que enmarcan la mirada manteniendo una estética masculina y natural.',
    image: serviceEyebrowGroomingImg,
    alt: 'Detalle de herramientas de perfilado y resultado natural en cejas masculinas',
    whatsappMessage:
      'Hola, me gustaría solicitar una cita para el servicio de Diseño de Cejas.',
  },
];

export const DEMO_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'demo-1',
    name: 'Andrés M.',
    initials: 'AM',
    serviceUsed: 'Corte + Barba',
    since: 'Ejemplo demostrativo',
    rating: 5,
    comment:
      'Se nota la diferencia cuando un solo barbero te atiende sin apuro. El diagnóstico previo y la precisión en el acabado hacen que el corte se mantenga impecable por semanas.',
  },
  {
    id: 'demo-2',
    name: 'José Carlos R.',
    initials: 'JC',
    serviceUsed: 'Degradado & Diseño',
    since: 'Ejemplo demostrativo',
    rating: 5,
    comment:
      'El degradado quedó sumamente limpio y natural, sin líneas bruscas. Además, coordinar directamente por WhatsApp hace todo rápido y claro.',
  },
  {
    id: 'demo-3',
    name: 'Luis E.',
    initials: 'LE',
    serviceUsed: 'Arreglo de Barba',
    since: 'Ejemplo demostrativo',
    rating: 5,
    comment:
      'Un espacio tranquilo, cuidado y con atención genuinamente personalizada. El ritual de toalla caliente para la barba convierte una cita rutinaria en un verdadero descanso.',
  },
];

/**
 * Construye una URL oficial de WhatsApp (wa.me) con el mensaje prellenado.
 */
export function buildWhatsAppUrl(message: string = BUSINESS_CONFIG.defaultWhatsappMessage): string {
  const sanitizedNumber = BUSINESS_CONFIG.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(message)}`;
}
