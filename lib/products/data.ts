import { Product } from "./types";
import { PENDING_INFO } from "./pending";

/**
 * Fuente única de productos. Agregar un producto nuevo NO requiere crear
 * páginas nuevas: /productos/[slug] los renderiza a todos con la misma
 * plantilla. Los campos sin confirmación oficial usan PENDING_INFO.
 *
 * Contenido del Crédito IMSS tomado del "Procedimiento IMSS — Febrero 2025".
 * Solo se incluye información de cara al cliente; se omite el procedimiento
 * operativo interno del asesor (portales IMSS, cotizador, captura, etc.).
 * El crédito es otorgado por una institución financiera con convenio IMSS
 * (Banco Inbursa, según el manual); Rozher Seguros actúa como intermediario/
 * asesor. Nombrar públicamente a la institución otorgante queda como decisión
 * de negocio/legal de Rozher.
 */
export const products: Product[] = [
  {
    id: "credito-nomina-imss",
    slug: "credito-nomina-imss",
    name: "Crédito de Nómina IMSS",
    category: "credito",
    shortDescription:
      "Crédito personal con cobranza delegada para pensionados y trabajadores IMSS. Te asesoramos en todo el trámite.",
    image: "/images/products/credito-pensionados-2.jpg",
    gallery: [{ src: "/images/products/credito-pensionados-1.jpg" }],
    featured: true,
    description:
      "Es un crédito personal de nómina con cobranza delegada: los pagos se retienen directamente de la nómina o pensión que administra el IMSS. En Rozher Seguros te asesoramos, en alianza con una institución financiera con convenio con el IMSS, para revisar tu capacidad de crédito y acompañarte en cada paso del trámite.",
    audience:
      "Pensionados Ley 73 (vejez, viudez y cesantía), ex trabajadores del IMSS jubilados, y trabajadores activos de confianza (Mando, Estatuto A y Confianza A). La capacidad de crédito la determina el IMSS a través de su portal.",
    benefits: [
      "Tasa de interés preferencial y pagos fijos durante todo el plazo.",
      "Sin penalización por pagos adelantados ni por liquidación anticipada.",
      "Incluye un seguro de liberación de saldos por fallecimiento, sin costo adicional.",
      "Los recursos se depositan en la misma cuenta donde el IMSS te paga tu nómina o pensión.",
      "Puedes acceder a segundos o terceros créditos según tu capacidad disponible.",
    ],
    features: [
      {
        title: "Monto del crédito",
        description: "Desde $5,000 y hasta $650,000, sujeto a tu capacidad de crédito en el IMSS.",
      },
      {
        title: "Plazos disponibles",
        description: "6, 12, 18, 24, 30, 36, 42, 48, 54 y 60 meses, con pagos fijos.",
      },
      {
        title: "Edad y plazo",
        description:
          "La suma de tu edad y el plazo del crédito no debe exceder 78 años. A mayor edad, menor plazo máximo (por ejemplo, 74 años hasta 60 meses; 78 años hasta 12 meses).",
      },
      {
        title: "Cobranza delegada",
        description:
          "El pago se retiene de tu nómina o pensión administrada por el IMSS; no es un crédito domiciliado.",
      },
      {
        title: "Renovaciones y compra de cartera",
        description:
          "Si ya tienes un crédito IMSS vigente con otra entidad, puedes traspasarlo para obtener mejores condiciones y, en su caso, un monto adicional. Aplican requisitos de descuentos previos.",
      },
    ],
    requirements: [
      "Identificación oficial INE vigente (fotografías del anverso y reverso).",
      "Comprobante de domicilio vigente, no mayor a 3 meses (luz, agua, gas, teléfono o estado de cuenta).",
      "Estado de cuenta de la cuenta donde el IMSS paga tu nómina o pensión, con CLABE interbancaria y no mayor a 3 meses.",
      "Recibo de nómina reciente (solo para ex trabajadores jubilados y trabajadores activos).",
      "Un video-selfie testimonial con audio, en el que se vea claramente tu rostro (formato MP4).",
      "Contar con capacidad de crédito en el IMSS. Los ingresos por pensión deben ser superiores a $10,000 mensuales.",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Revisamos tu capacidad de crédito",
        description:
          "Con tu acceso al portal del IMSS se consulta tu capacidad y se genera una simulación del crédito.",
      },
      {
        step: 2,
        title: "El IMSS emite tu Carta de Libranza",
        description:
          "Es el documento que autoriza el trámite. Para créditos nuevos suele llegar en unas 24 horas hábiles; en renovaciones o compras de cartera, hasta 8 días hábiles.",
      },
      {
        step: 3,
        title: "Reunimos tus documentos",
        description:
          "Integramos tu identificación, comprobante de domicilio, estado de cuenta y video-selfie para ingresar la solicitud.",
      },
      {
        step: 4,
        title: "Firmas tu solicitud en línea",
        description:
          "Recibes por WhatsApp o correo un enlace para firmar digitalmente tu solicitud. Es importante firmarla en cuanto la recibas.",
      },
      {
        step: 5,
        title: "Autenticación y depósito",
        description:
          "Tras la autenticación y aprobación, los recursos se depositan en la cuenta donde el IMSS te paga.",
      },
    ],
    faqs: [
      {
        question: "¿Quién puede solicitar el Crédito de Nómina IMSS?",
        answer:
          "Pensionados Ley 73 (vejez, viudez y cesantía), ex trabajadores del IMSS jubilados, y trabajadores activos de confianza. La capacidad de crédito la determina y administra el IMSS a través de su portal.",
      },
      {
        question: "¿De cuánto puede ser el crédito y a qué plazo?",
        answer:
          "El monto va desde $5,000 hasta $650,000 y los plazos disponibles son de 6 a 60 meses, con pagos fijos. El monto y plazo finales dependen de tu capacidad de crédito y de tu edad.",
      },
      {
        question: "¿Cómo se pagan las mensualidades?",
        answer:
          "Mediante cobranza delegada: el pago se retiene directamente de la nómina o pensión que administra el IMSS. No es un crédito domiciliado.",
      },
      {
        question: "¿Puedo adelantar pagos o liquidar antes?",
        answer:
          "Sí. No hay penalización por pagos adelantados ni por liquidación anticipada. Los prepagos y liquidaciones se realizan en sucursal usando tu número de crédito como referencia.",
      },
      {
        question: "¿El crédito incluye algún seguro?",
        answer:
          "Sí. Incluye un seguro de liberación de saldos por fallecimiento, sin costo adicional para ti.",
      },
      {
        question: "¿A qué cuenta se deposita el dinero?",
        answer:
          "A la misma cuenta bancaria en la que el IMSS te paga tu nómina, pensión o jubilación.",
      },
      {
        question: "Ya tengo un crédito IMSS con otra entidad, ¿puedo cambiarme?",
        answer:
          "Sí. Puedes solicitar una renovación o compra de cartera para traspasar tu crédito y buscar mejores condiciones, e incluso obtener un monto adicional. Aplican requisitos según el número de descuentos ya aplicados por el IMSS.",
      },
      {
        question: "¿Cuál es la tasa de interés y el CAT?",
        answer: PENDING_INFO,
      },
    ],
    cta: {
      label: "Solicitar información",
      whatsappMessage:
        "Hola, me interesa el Crédito de Nómina IMSS. Quiero conocer mis opciones y el proceso.",
    },
    status: "disponible",
    seo: {
      title: "Crédito de Nómina IMSS para pensionados y trabajadores",
      description:
        "Crédito personal con cobranza delegada para pensionados y trabajadores IMSS: montos desde $5,000 hasta $650,000, plazos de 6 a 60 meses, sin penalización por pago anticipado. Rozher Seguros te asesora.",
    },
  },

  // ------------------------------------------------------------------
  // CRÉDITOS — Tarjetas de Crédito Aeroméxico Inbursa (3 versiones)
  // Contenido pendiente de confirmar por Rozher; la sección ya existe.
  // ------------------------------------------------------------------
  {
    id: "tarjetas-aeromexico-inbursa",
    slug: "tarjetas-aeromexico-inbursa",
    name: "Tarjetas de Crédito Aeroméxico Inbursa",
    category: "credito",
    shortDescription:
      "Tres tarjetas de crédito para acumular en cada compra y aprovechar beneficios de viaje. Te asesoramos para elegir la que más te conviene.",
    image: "/images/products/aeromexico-cards.jpg",
    gallery: [
      { src: "/images/products/aeromexico-elevate.png", caption: "Aeroméxico Elevate" },
      { src: "/images/products/aeromexico-ascend.png", caption: "Aeroméxico Ascend" },
      { src: "/images/products/aeromexico-horizon.png", caption: "Aeroméxico Horizon" },
    ],
    galleryContain: true,
    featured: true,
    description:
      "Una línea de tres tarjetas de crédito pensadas para quienes viajan y quieren que cada compra sume. En Rozher Seguros te asesoramos para comparar las tres versiones y elegir la que se ajusta a tu perfil.",
    audience: PENDING_INFO,
    benefits: [PENDING_INFO, PENDING_INFO, PENDING_INFO],
    features: [
      { title: "Tres versiones disponibles", description: PENDING_INFO },
      { title: PENDING_INFO, description: PENDING_INFO },
    ],
    requirements: [PENDING_INFO, PENDING_INFO, PENDING_INFO],
    howItWorks: [
      { step: 1, title: "Cuéntanos qué buscas", description: "Un asesor revisa contigo cuál de las tres tarjetas se ajusta a tu perfil." },
      { step: 2, title: PENDING_INFO, description: PENDING_INFO },
      { step: 3, title: PENDING_INFO, description: PENDING_INFO },
    ],
    faqs: [
      { question: "¿Cuántas tarjetas hay y en qué se diferencian?", answer: PENDING_INFO },
      { question: "¿Qué requisitos necesito?", answer: PENDING_INFO },
      { question: "¿Cuál es la tasa de interés, anualidad y CAT?", answer: PENDING_INFO },
    ],
    cta: {
      label: "Solicitar información",
      whatsappMessage:
        "Hola, me interesan las Tarjetas de Crédito Aeroméxico Inbursa. Quiero conocer las opciones.",
    },
    status: "disponible",
    seo: {
      title: "Tarjetas de Crédito Aeroméxico Inbursa",
      description:
        "Conoce las tres tarjetas de crédito Aeroméxico Inbursa con la asesoría de Rozher Seguros.",
    },
  },

  // ------------------------------------------------------------------
  // SEGUROS — secciones creadas, contenido pendiente de confirmar
  // ------------------------------------------------------------------
  {
    id: "seguro-vida",
    slug: "seguro-de-vida",
    name: "Seguro de Vida",
    category: "seguro",
    shortDescription:
      "Protege el futuro de quienes dependen de ti con un respaldo económico ante lo inesperado.",
    image: "/images/products/vida-1.jpg",
    gallery: [{ src: "/images/products/vida-2.jpg" }],
    description:
      "Un seguro de vida te ayuda a proteger la tranquilidad económica de tu familia. En Rozher Seguros te asesoramos para elegir la cobertura adecuada.",
    audience: PENDING_INFO,
    benefits: [PENDING_INFO, PENDING_INFO, PENDING_INFO],
    features: [
      { title: PENDING_INFO, description: PENDING_INFO },
      { title: PENDING_INFO, description: PENDING_INFO },
    ],
    requirements: [PENDING_INFO, PENDING_INFO],
    howItWorks: [
      { step: 1, title: "Cuéntanos tu caso", description: "Un asesor revisa contigo tus necesidades de protección." },
      { step: 2, title: PENDING_INFO, description: PENDING_INFO },
      { step: 3, title: PENDING_INFO, description: PENDING_INFO },
    ],
    faqs: [
      { question: "¿Qué cubre el seguro de vida?", answer: PENDING_INFO },
      { question: "¿Qué necesito para contratarlo?", answer: PENDING_INFO },
    ],
    cta: {
      label: "Solicitar información",
      whatsappMessage: "Hola, me interesa el Seguro de Vida. Quiero conocer las opciones.",
    },
    status: "disponible",
    seo: {
      title: "Seguro de Vida",
      description: "Seguro de vida con la asesoría de Rozher Seguros.",
    },
  },
  {
    id: "seguro-gastos-medicos",
    slug: "seguro-gastos-medicos-mayores",
    name: "Seguro de Gastos Médicos Mayores",
    category: "seguro",
    shortDescription:
      "Cobertura para atender enfermedades y accidentes que requieren atención hospitalaria, sin descuidar tu economía.",
    image: "/images/products/gastos-1.jpg",
    gallery: [{ src: "/images/products/gastos-2.jpg" }],
    description:
      "Un seguro de gastos médicos mayores te respalda ante gastos hospitalarios importantes. En Rozher Seguros te asesoramos para elegir la cobertura correcta.",
    audience: PENDING_INFO,
    benefits: [PENDING_INFO, PENDING_INFO, PENDING_INFO],
    features: [
      { title: PENDING_INFO, description: PENDING_INFO },
      { title: PENDING_INFO, description: PENDING_INFO },
    ],
    requirements: [PENDING_INFO, PENDING_INFO],
    howItWorks: [
      { step: 1, title: "Cuéntanos tu caso", description: "Un asesor revisa contigo tus necesidades de cobertura médica." },
      { step: 2, title: PENDING_INFO, description: PENDING_INFO },
      { step: 3, title: PENDING_INFO, description: PENDING_INFO },
    ],
    faqs: [
      { question: "¿Qué cubre el seguro de gastos médicos mayores?", answer: PENDING_INFO },
      { question: "¿Qué necesito para contratarlo?", answer: PENDING_INFO },
    ],
    cta: {
      label: "Solicitar información",
      whatsappMessage:
        "Hola, me interesa el Seguro de Gastos Médicos Mayores. Quiero conocer las opciones.",
    },
    status: "disponible",
    seo: {
      title: "Seguro de Gastos Médicos Mayores",
      description: "Seguro de gastos médicos mayores con la asesoría de Rozher Seguros.",
    },
  },
  {
    id: "seguro-auto",
    slug: "seguro-de-auto",
    name: "Seguro de Auto",
    category: "seguro",
    shortDescription:
      "Protege tu vehículo y a terceros ante accidentes, robo y daños, con la cobertura que necesitas.",
    image: "/images/products/auto-1.jpg",
    gallery: [{ src: "/images/products/auto-2.jpg" }],
    description:
      "Un seguro de auto te protege ante accidentes, robo y daños a terceros. En Rozher Seguros te asesoramos para elegir la cobertura adecuada para tu vehículo.",
    audience: PENDING_INFO,
    benefits: [PENDING_INFO, PENDING_INFO, PENDING_INFO],
    features: [
      { title: PENDING_INFO, description: PENDING_INFO },
      { title: PENDING_INFO, description: PENDING_INFO },
    ],
    requirements: [PENDING_INFO, PENDING_INFO],
    howItWorks: [
      { step: 1, title: "Cuéntanos tu caso", description: "Un asesor revisa contigo las características de tu vehículo y tus necesidades." },
      { step: 2, title: PENDING_INFO, description: PENDING_INFO },
      { step: 3, title: PENDING_INFO, description: PENDING_INFO },
    ],
    faqs: [
      { question: "¿Qué tipos de cobertura existen?", answer: PENDING_INFO },
      { question: "¿Qué necesito para contratarlo?", answer: PENDING_INFO },
    ],
    cta: {
      label: "Solicitar información",
      whatsappMessage: "Hola, me interesa el Seguro de Auto. Quiero conocer las opciones.",
    },
    status: "disponible",
    seo: {
      title: "Seguro de Auto",
      description: "Seguro de auto con la asesoría de Rozher Seguros.",
    },
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}
