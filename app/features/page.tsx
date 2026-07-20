import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { FinalCTA, PageShell, SectionTitle } from '@/components/site';

const whatsappHref = 'https://wa.me/525518839216?text=Hola%20%F0%9F%91%8B.%20Vi%20la%20p%C3%A1gina%20de%20Aera%20y%20me%20interesa%20conocer%20c%C3%B3mo%20puede%20ayudar%20a%20mi%20negocio.%20Me%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n.';

const featureSections = [
  {
    title: 'Agenda online 24/7',
    image: '/screenshots/appointments-list.png',
    alt: 'Lista de citas de Aera con estados, horarios, clientes y servicios.',
    text: 'Tus clientes reservan cuando quieren y tu equipo ve cada cita con hora, estado, cliente y servicio. Menos llamadas, menos mensajes perdidos y más reservas confirmadas.',
    bullets: ['Reservas visibles al instante', 'Estados claros: agendada, confirmada o cancelada', 'Acceso rápido a la información de cada cliente'],
  },
  {
    title: 'Calendario para vender más horarios',
    image: '/screenshots/calendar-grid.png',
    alt: 'Calendario mensual de Aera con días destacados y total de citas.',
    text: 'Detecta huecos, días con alta demanda y disponibilidad del mes en una vista sencilla. Ideal para llenar espacios libres y organizar mejor al equipo.',
    bullets: ['Vista mensual fácil de leer', 'Días con citas destacados', 'Mejor control de capacidad y disponibilidad'],
  },
  {
    title: 'Vista diaria para operar sin caos',
    image: '/screenshots/day-calendar.png',
    alt: 'Calendario diario de Aera con citas distribuidas por horario.',
    text: 'Cada profesional puede revisar su día, preparar servicios y evitar cruces de horarios. La operación se mantiene clara desde la primera cita hasta el cierre.',
    bullets: ['Agenda del día por horario', 'Menos errores de coordinación', 'Seguimiento simple para recepción y profesionales'],
  },
  {
    title: 'Detalle de cita listo para actuar',
    image: '/screenshots/appointment-detail.png',
    alt: 'Detalle de cita en Aera con cliente, servicio, pago y acción de mensaje.',
    text: 'Toda la información importante está en una sola pantalla: cliente, servicio, profesional, pago y mensajes. Tu equipo responde rápido y con contexto.',
    bullets: ['Datos del cliente y servicio en un lugar', 'Resumen de pago visible', 'Botón para enviar mensaje al cliente'],
  },
  {
    title: 'Configuración de profesionales',
    image: '/screenshots/config-professional.png',
    alt: 'Configuración de profesional en Aera.',
    text: 'Agrega profesionales, asigna servicios y mantiene la oferta del negocio ordenada. Cada cliente ve solo opciones reales para reservar.',
    bullets: ['Profesionales organizados', 'Servicios asignados correctamente', 'Experiencia de reserva más confiable'],
  },
  {
    title: 'Horarios y disponibilidad bajo control',
    image: '/screenshots/config-hours.png',
    alt: 'Configuración de horarios de trabajo en Aera.',
    text: 'Define días, horas de trabajo e intervalos de citas para que la agenda venda solo los horarios que realmente puedes atender.',
    bullets: ['Horarios de trabajo configurables', 'Intervalos de cita definidos', 'Menos sobreventas y confusiones'],
  },
];

export const metadata: Metadata = {
  title: 'Funciones',
  description: 'Funciones principales de Aera para vender más citas: agenda online, calendario, gestión de citas, profesionales, horarios y mensajes por WhatsApp.',
};

export default function Features() {
  return (
    <PageShell>
      <section className="section pt-36">
        <SectionTitle
          kicker="Funciones"
          title="Todo lo necesario para convertir interés en citas."
          text="Aera muestra disponibilidad, organiza al equipo y facilita que el cliente reserve. Sin relleno: menos fricción, más citas y contacto directo por WhatsApp."
        />
        <div className="container flex justify-center">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary shine">
            <MessageCircle className="mr-2 size-5" /> Quiero vender más citas por WhatsApp
          </a>
        </div>
      </section>

      <section className="section bg-aera-soft pt-0">
        <div className="container grid gap-8">
          {featureSections.map((feature, index) => (
            <article key={feature.title} className="card grid overflow-hidden lg:grid-cols-2">
              <div className={`relative min-h-[300px] bg-slate-950 p-3 ${index % 2 ? 'lg:order-2' : ''}`}>
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain p-4"
                  priority={index === 0}
                />
              </div>
              <div className="p-8 lg:p-12">
                <p className="eyebrow">Función principal {String(index + 1).padStart(2, '0')}</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{feature.title}</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">{feature.text}</p>
                <ul className="mt-6 space-y-3 text-slate-700">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <CheckCircle2 className="mt-1 size-5 shrink-0 text-aera-success" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
                  Pedir demo por WhatsApp <ArrowRight className="ml-2 size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <FinalCTA />
    </PageShell>
  );
}
