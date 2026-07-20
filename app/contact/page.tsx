import type { Metadata } from 'next';
import { PageShell, SectionTitle } from '@/components/site';
import { MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Solicite una demostración de Aera, contacte con ventas o soporte.',
};

export default function Contact() {
  return (
    <PageShell>
      <section className="section pt-36">
        <SectionTitle kicker="Contacto" title="Hagamos que su flujo de reservas sea sencillo." text="Cuéntenos sobre su negocio. Le mostraremos cómo Aera puede simplificar las citas, los clientes, los profesionales y la disponibilidad." />
        <div className="container grid gap-6 md:grid-cols-[1.2fr_.8fr]">
          <a href="https://wa.me/525518839216?text=Hola%20%F0%9F%91%8B.%20Vi%20la%20p%C3%A1gina%20de%20Aera%20y%20me%20interesa%20conocer%20c%C3%B3mo%20puede%20ayudar%20a%20mi%20negocio.%20Me%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n." className="card p-12 text-center transition hover:-translate-y-1 hover:shadow-glow bg-green-50 flex flex-col items-center justify-center border-green-200">
            <MessageCircle className="mx-auto size-12 text-green-600 mb-6" />
            <h2 className="text-3xl font-black mb-4 text-slate-900">Hablemos por WhatsApp</h2>
            <p className="text-slate-600 mb-8 max-w-sm mx-auto">Nuestro equipo está listo para mostrarte cómo Aera puede automatizar tus reservas y aumentar tus ingresos. Escríbenos y agendemos una demo.</p>
            <span className="btn btn-primary bg-green-600 hover:bg-green-700 w-full md:w-auto shadow-none border-0">Agendar demostración ahora</span>
          </a>
          <aside className="card p-8">
            <h2 className="text-2xl font-black">Ventas y soporte</h2>
            <p className="mt-4 text-slate-500">sales@getaera.app</p>
            <p className="mt-2 text-slate-500">support@getaera.app</p>
            <p className="mt-8 text-slate-500">Aera, gestión de citas para negocios de servicios modernos.</p>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
