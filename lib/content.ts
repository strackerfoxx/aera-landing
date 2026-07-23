import {
  CalendarCheck,
  Clock,
  MessagesSquare,
  ShieldCheck,
  Smartphone,
  Users,
  BarChart3,
  Sparkles,
} from 'lucide-react';

export const siteUrl = 'https://www.getaera.app';

export const nav = [
  { label: 'Funciones', href: '/features' },
  { label: 'Industrias', href: '/industries' },
  { label: 'Precios', href: '/pricing' },
  { label: 'Acerca de', href: '/about' },
];

export const features = [
  {
    title: 'Reservas online',
    icon: CalendarCheck,
    text: 'Sus clientes reservan una cita en menos de un minuto, sin llamadas ni registros complicados.',
  },
  {
    title: 'Gestión de clientes',
    icon: Users,
    text: 'Mantenga toda la información de sus clientes organizada en un solo lugar con historial y datos de contacto.',
  },
  {
    title: 'Agenda del equipo',
    icon: Clock,
    text: 'Organice la disponibilidad de todo su equipo y evite conflictos de horario desde un único calendario.',
  },
  {
    title: 'Recordatorios automáticos',
    icon: MessagesSquare,
    text: 'Reduzca las ausencias enviando confirmaciones y recordatorios con un click.',
  },
  {
    title: 'Acceso con SMS',
    icon: ShieldCheck,
    text: 'Los clientes reservan usando únicamente su número de teléfono, sin contraseñas ni cuentas.',
  },
  {
    title: 'Diseñado para móviles',
    icon: Smartphone,
    text: 'Una experiencia rápida y sencilla para que más clientes completen su reserva desde cualquier dispositivo.',
  },
  {
    title: 'Panel de control',
    icon: BarChart3,
    text: 'Consulte sus citas, clientes e ingresos desde un único panel fácil de usar.',
  },
  {
    title: 'Mejor primera impresión',
    icon: Sparkles,
    text: 'Ofrezca una experiencia de reserva moderna que genere confianza desde el primer contacto.',
  },
];

export const industries = [
  {
    name: 'Barberías',
    description:
      'Permita que sus clientes reserven cuando quieran, reduzca llamadas y mantenga la agenda siempre organizada.',
  },
  {
    name: 'Salones de belleza',
    description:
      'Organice a todo su equipo, reduzca cancelaciones y permita que los clientes reserven sin esperar una respuesta.',
  },
  {
    name: 'Clínicas',
    description:
      'Facilite la programación de consultas y mantenga la agenda médica organizada en todo momento.',
  },
  {
    name: 'Dentistas',
    description:
      'Mantenga el calendario organizado, reduzca espacios vacíos y facilite la reserva de nuevas citas.',
  },
  {
    name: 'Veterinarios',
    description:
      'Permita que los propietarios agenden citas fácilmente y gestione toda la agenda desde un solo lugar.',
  },
  {
    name: 'Spas',
    description:
      'Ofrezca una experiencia de reserva sencilla que refleje la calidad de su servicio desde el primer momento.',
  },
  {
    name: 'Gimnasios',
    description:
      'Organice clases, sesiones y entrenadores sin depender de llamadas o mensajes.',
  },
  {
    name: 'Consultores',
    description:
      'Permita que sus clientes reserven reuniones disponibles sin intercambiar decenas de mensajes.',
  },
];

export const faqs = [
  [
    '¿Cuánto tiempo tarda la implementación?',
    'La configuración inicial suele completarse en un par de horas. Nosotros dejamos Aera listo para que pueda empezar a recibir reservas cuanto antes.',
  ],
  [
    '¿Mis clientes necesitan descargar una aplicación?',
    'No. Solo abren un enlace y reservan desde el navegador de su teléfono o computadora.',
  ],
  [
    '¿Qué pasa si necesito ayuda?',
    'Nuestro equipo le acompaña durante la configuración y está disponible para resolver cualquier duda cuando la necesite.',
  ],
  [
    '¿Qué pasa si Aera no cumple mis expectativas?',
    'Puede probar Aera durante 30 días. Si no es la solución adecuada para su negocio, le devolvemos el 100% de su dinero.',
  ],
];

export const pricingPlans = [
  {
    name: 'Mensual',
    price: '$590',
    billing: 'Facturación mensual',
    description:
      'Todo lo que necesita para aceptar reservas online, organizar su agenda y gestionar hasta 20 usuarios por un precio fijo.',
    features: [
      'Hasta 20 usuarios incluidos',
      'Precio fijo para todo el equipo',
      'Reservas online 24/7',
      'Confirmaciones y recordatorios automáticos',
      'Gestión de clientes y citas',
    ],
    cta: 'Agendar demostración',
    highlight: false,
  },
  {
    name: 'Anual',
    price: '$490 (al mes)',
    billing: 'Facturación anual · $5880 total',
    description:
      'Obtenga el mejor precio pagando un año completo y ahorre cada mes sin perder ninguna funcionalidad.',
    features: [
      'Hasta 20 usuarios incluidos',
      'Precio fijo para todo el equipo',
      'Todas las funciones del plan mensual',
      'Ahorro anual',
      'Soporte prioritario',
    ],
    cta: 'Agendar demostración',
    highlight: true,
  },
  {
    name: 'Empresas',
    price: 'Personalizado',
    billing: 'Para negocios con varias sucursales',
    description:
      'Una solución adaptada para cadenas y empresas que necesitan administrar varias sedes desde un solo lugar.',
    features: [
      'Administración centralizada',
      'Perfiles por sucursal',
      'Reportes multiubicación',
      'Integraciones personalizadas',
      'Soporte especializado',
    ],
    cta: 'Hablar con ventas',
    highlight: false,
  },
];