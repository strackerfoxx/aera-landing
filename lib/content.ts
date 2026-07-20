import { CalendarCheck, Clock, MessagesSquare, ShieldCheck, Smartphone, Users, BarChart3, Sparkles } from 'lucide-react';

export const siteUrl = 'https://www.getaera.app';
export const nav = [
  { label: 'Funciones', href: '/features' },
  { label: 'Industrias', href: '/industries' },
  { label: 'Precios', href: '/pricing' },
  { label: 'Acerca de', href: '/about' },
];

export const features = [
  { title: 'Reserva de citas', icon: CalendarCheck, text: 'Permita que los clientes elijan el servicio, el profesional y la hora adecuados sin crear una cuenta.' },
  { title: 'Gestión de clientes', icon: Users, text: 'Cada reserva se convierte en un perfil claro con historial, notas y contexto de contacto.' },
  { title: 'Calendario profesional', icon: Clock, text: 'Vea la disponibilidad del equipo, la carga diaria, los huecos y las superposiciones en una vista operativa clara.' },
  { title: 'Notificaciones automáticas', icon: MessagesSquare, text: 'Envíe confirmaciones, recordatorios, actualizaciones y seguimientos con plantillas consistentes.' },
  { title: 'Inicio de sesión por SMS', icon: ShieldCheck, text: 'La verificación por número de teléfono reemplaza las contraseñas para que los clientes completen la reserva en menos de un minuto.' },
  { title: 'Experiencia móvil', icon: Smartphone, text: 'Flujos rápidos y fáciles de usar, pensados para la forma en que las personas reservan citas.' },
  { title: 'Panel de negocio', icon: BarChart3, text: 'Controle ingresos, citas, carga del equipo y demanda de servicios de un vistazo.' },
  { title: 'Experiencia premium', icon: Sparkles, text: 'Un recorrido del cliente pulido que hace que su negocio se vea organizado antes de la visita.' }
];

export const industries = [
  {
    name: 'Barberías',
    description: 'Si quieres que tu barbería se vea más profesional, capture más clientes y reduzca cancelaciones, Aera convierte cada reserva en una venta más fácil, rápida y ordenada.',
  },
  {
    name: 'Salones de belleza',
    description: 'Para salones que desean crecer sin perder tiempo en llamadas, Aera mejora la experiencia del cliente y ayuda a convertir más citas en ingresos recurrentes.',
  },
  {
    name: 'Clínicas',
    description: 'Tu clínica puede ganar confianza y eficiencia con un sistema que organiza agendas, reduce fricción y deja a tus pacientes una reserva más simple y premium.',
  },
  {
    name: 'Dentistas',
    description: 'Aera ayuda a los consultorios dentales a captar más pacientes, reducir huecos en la agenda y ofrecer una experiencia de reserva mucho más seria y rentable.',
  },
  {
    name: 'Veterinarios',
    description: 'Si quieres que tu clínica veterinaria se vea más organizada y genere más reservas, Aera facilita la atención y convierte cada solicitud en una oportunidad de negocio.',
  },
  {
    name: 'Spas',
    description: 'Para negocios de bienestar que buscan vender más servicios y ofrecer una experiencia premium, Aera hace que cada reserva se sienta elegante, simple y profesional.',
  },
  {
    name: 'Gimnasios',
    description: 'Aera ayuda a los gimnasios a llenar clases, organizar horarios y vender más servicios con un proceso de reserva claro y sin complicaciones.',
  },
  {
    name: 'Consultores',
    description: 'Si tu consultorio depende de sesiones y seguimiento, Aera te ayuda a vender más disponibilidad, reducir pérdidas y presentar un negocio mucho más profesional.',
  },
];

export const faqs = [
  ['¿Los clientes necesitan una cuenta?', 'No. Los clientes verifican su número de teléfono con un código SMS y pueden reservar sin contraseñas ni formularios largos.'],
  ['¿Cada profesional puede tener disponibilidad separada?', 'Sí. Aera admite horarios de profesionales, días asignados, horas de trabajo e intervalos de citas.'],
  ['¿Aera solo sirve para salones?', 'No. Aera está pensado para cualquier negocio basado en citas, desde clínicas y dentistas hasta consultores y gimnasios.'],
  ['¿Qué tan rápido se puede implementar?', 'La mayoría de equipos pueden configurar servicios, personal, horarios y su flujo de reserva en una sola sesión de implementación.']
];

export const pricingPlans = [
  {
    name: 'Mensual',
    price: '$590',
    billing: 'Facturación mensual',
    description: 'Ideal para negocios que necesitan un software de reservas de citas simple, rápido de implementar y listo para captar clientes desde el primer día, con precio fijo para hasta 20 usuarios.',
    features: ['Hasta 20 usuarios incluidos', 'Precio fijo por todo el equipo', 'Agenda online 24/7', 'Confirmaciones y recordatorios automáticos', 'Gestión de clientes y citas'],
    cta: 'Solicitar demo',
    highlight: false,
  },
  {
    name: 'Anual',
    price: '$490 (al mes)',
    billing: 'Facturación anual · $490 al mes',
    description: 'Perfecto para equipos que buscan mayor previsibilidad, mejor valor y una solución de software de reservas escalable para crecer con estabilidad, sin pagar por usuario.',
    features: ['Hasta 20 usuarios incluidos', 'Precio fijo por todo el equipo', 'Todos los beneficios del plan mensual', 'Mejor valor por continuidad', 'Soporte prioritario'],
    cta: 'Solicitar demo',
    highlight: true,
  },
  {
    name: 'Empresas a medida',
    price: 'Personalizado',
    billing: 'Para negocios con varias sucursales',
    description: 'Solución personalizada para cadenas, franquicias y negocios con varias sucursales que necesitan un sistema de gestión de citas centralizado y escalable.',
    features: ['Administración centralizada', 'Perfiles por sede y equipo', 'Reportes multiubicación', 'Integraciones y soporte especializado'],
    cta: 'Contactar ventas',
    highlight: false,
  },
];
