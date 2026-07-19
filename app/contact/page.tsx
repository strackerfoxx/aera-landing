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
          <form className="card grid gap-4 p-8">
            <input className="rounded-2xl border p-4" placeholder="Nombre" />
            <input className="rounded-2xl border p-4" placeholder="Correo laboral" />
            <input className="rounded-2xl border p-4" placeholder="Tipo de negocio" />
            <textarea className="min-h-36 rounded-2xl border p-4" placeholder="¿Qué desea mejorar?" />
            <button className="btn btn-primary">Solicitar demostración</button>
          </form>
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
