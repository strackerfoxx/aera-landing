import type { Metadata } from 'next';
import { PageShell, SectionTitle } from '@/components/site';

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
          <div className="card flex flex-col justify-center p-8 text-center">
            <p className="mb-6 text-slate-500">
              Para una atención más rápida y personalizada, escríbenos directamente a WhatsApp. Nuestro equipo de ventas está listo para mostrarte cómo Aera puede transformar tu negocio.
            </p>
            <a
              href="https://wa.me/525518839216?text=Hola%20%F0%9F%91%8B.%20Vi%20la%20p%C3%A1gina%20de%20Aera%20y%20me%20interesa%20conocer%20c%C3%B3mo%20puede%20ayudar%20a%20mi%20negocio.%20Me%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 mt-4 hover:bg-blue-700 transition"
            >
              Contactar por WhatsApp
            </a>
          </div>
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
