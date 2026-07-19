import type { Metadata } from 'next';
import { FAQ, FinalCTA, PageShell, PricingCards, SectionTitle } from '@/components/site';

export const metadata: Metadata = {
  title: 'Precios | Software de reservas de citas Aera',
  description: 'Conozca los planes de Aera para software de reservas de citas: mensual, anual y empresas a medida para negocios con varias sucursales.',
};

export default function Pricing() {
  return (
    <PageShell>
      <section className="section pt-36">
        <SectionTitle kicker="Precios" title="Software de reservas de citas para crecer sin fricción" text="Elija un plan mensual, anual o una solución personalizada para múltiples sucursales y mantenga su operación de citas organizada, escalable y preparada para crecer." />
        <PricingCards />
        <div className="container mt-8 rounded-[2rem] border border-blue-200 bg-blue-50 p-8 text-center">
          <h2 className="text-2xl font-black">Soluciones para negocios con varias sucursales</h2>
          <p className="mt-2 text-slate-600">Aera centraliza la reserva online, la disponibilidad del equipo y los reportes por sede para que franquicias y cadenas operen con mayor control y consistencia.</p>
        </div>
      </section>
      <FAQ />
      <FinalCTA />
    </PageShell>
  );
}
