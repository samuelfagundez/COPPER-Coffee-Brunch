// ---------------------------------------------------------------------------
// Contenido único del restaurante. Editar SOLO este archivo para actualizar
// nombre, dirección, horario, fotos, redes, etc. Todo el sitio lee de aquí.
// ---------------------------------------------------------------------------

export interface DayHours {
  day: string;
  hours: string;
}

export interface Photo {
  src: string;
  alt: string;
}

export const content = {
  name: "COPPER Specialty Coffee & Brunch",
  shortName: "COPPER",
  tagline: "Cafetería de especialidad y brunch en el Eixample de Valencia",
  description:
    "COPPER Specialty Coffee & Brunch es una cafetería de especialidad en el Eixample de Valencia, con un 4,6 de valoración y más de 600 reseñas. La carta gira en torno al café de calidad y al brunch: huevos benedictinos, tostadas de aguacate y salmón, y opciones saludables, vegetarianas y veganas, junto a una buena selección de tés y postres de elaboración propia. Un local acogedor, informal y de ambiente animado, ideal para desayunar o comer sin prisa.",
  metaDescription:
    "COPPER Specialty Coffee & Brunch: cafetería de especialidad en el Eixample de Valencia. Brunch, huevos benedictinos, café de calidad y opciones veganas. Carrer de Borriana, 12.",
  keywords: [
    "COPPER Specialty Coffee & Brunch",
    "Valencia",
    "España",
    "brunch",
    "cafetería de especialidad",
    "café de especialidad",
    "huevos benedictinos",
    "brunch cerca de mí",
  ],
  priceRange: "10 € - 20 €",
  priceRangeDisplay: "10 € – 20 € por persona aprox.",
  cuisine: "Brunch",

  rating: {
    value: 4.6,
    count: 616,
    countDisplay: "616",
  },

  highlights: [
    "Carta con opciones saludables, vegetarianas y veganas, además de vino y cerveza.",
    "No se aceptan reservas: se atiende por orden de llegada.",
    "Terraza disponible y se admiten perros, dentro y fuera del local.",
  ],

  address: {
    streetAddress: "Carrer de Borriana, 12",
    addressLocality: "València",
    addressRegion: "Comunitat Valenciana",
    postalCode: "46005",
    addressCountry: "ES",
    full: "Carrer de Borriana, 12, L'Eixample, 46005 València",
  },

  // Sin coordenadas verificadas: el mapa usa la dirección en texto (Google
  // la geolocaliza al vuelo), así que no hace falta lat/lng aquí.
  geo: null as { latitude: number; longitude: number } | null,

  // Pendiente: el negocio no facilitó teléfono ni WhatsApp — el canal de
  // contacto principal del sitio es Instagram en todo el sitio (ver
  // social.instagram y contactHref/reservationHref).
  phone: "",
  phoneDisplay: "",
  email: "",

  // URL final del sitio (se ajusta al conectar dominio propio)
  siteUrl: "https://samuelfagundez.github.io/COPPER-Coffee-Brunch/",

  social: {
    instagram: "https://www.instagram.com/coppercoffeevlc/",
    facebook: "",
    tiktok: "",
  },

  hours: [
    { day: "Lunes", hours: "Cerrado" },
    { day: "Martes", hours: "9:00 – 17:00" },
    { day: "Miércoles", hours: "9:00 – 17:00" },
    { day: "Jueves", hours: "9:00 – 17:00" },
    { day: "Viernes", hours: "9:00 – 17:00" },
    { day: "Sábado", hours: "10:00 – 17:00" },
    { day: "Domingo", hours: "10:00 – 17:00" },
  ] as DayHours[],

  // openingHoursSpecification en formato schema.org (día abreviado ISO).
  // Lunes cerrado: se omite, no lleva entrada de horario.
  openingHoursSchema: [
    {
      days: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    { days: ["Saturday", "Sunday"], opens: "10:00", closes: "17:00" },
  ],

  gallery: [
    {
      src: "/gallery/copper-coffee-brunch-fachada.jpg",
      alt: "Fachada de COPPER Specialty Coffee & Brunch en el Eixample de Valencia",
    },
    {
      src: "/gallery/copper-coffee-brunch-cafes.jpg",
      alt: "Cafés de especialidad con latte art servidos en COPPER Specialty Coffee & Brunch",
    },
    {
      src: "/gallery/copper-coffee-brunch-huevos-horneados.jpg",
      alt: "Huevos horneados con espinacas y pesto, plato de brunch de COPPER Specialty Coffee & Brunch",
    },
    {
      src: "/gallery/copper-coffee-brunch-galleta-cafe.jpg",
      alt: "Galleta artesanal y café para llevar de COPPER Specialty Coffee & Brunch",
    },
  ] as Photo[],

  // Embed de Google Maps sin API key, geolocalizando por dirección de texto.
  mapEmbedSrc:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "COPPER Specialty Coffee & Brunch, Carrer de Borriana, 12, 46005 València",
    ) +
    "&hl=es&z=16&output=embed",
  mapLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "COPPER Specialty Coffee & Brunch, Carrer de Borriana, 12, 46005 València",
    ),
};

// El negocio no dispone de WhatsApp: el contacto y las consultas de mesa se
// resuelven siempre a través del perfil de Instagram (Instagram no admite
// mensajes con texto predefinido en la URL, a diferencia de WhatsApp).

/** Href del botón "Contáctanos": perfil de Instagram del negocio. */
export function contactHref(): string {
  return content.social.instagram;
}

/** Href del botón "Escríbenos": el negocio no acepta reservas, así que
 * también dirige a Instagram para consultar disponibilidad. */
export function reservationHref(): string {
  return content.social.instagram;
}
