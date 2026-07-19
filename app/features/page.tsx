import type { Metadata } from 'next';
import { FeatureGrid, FinalCTA, PageShell, ProductMockup, SectionTitle } from '@/components/site';

export const metadata: Metadata = {
  title: 'Funciones',
  description: 'Explore la reserva de citas de Aera, la gestión de clientes, los calendarios profesionales, el inicio de sesión por SMS, las notificaciones, la disponibilidad, el panel y la reserva móvil.',
};

export default function Features() {
  return (
    <PageShell>
      <section className="section pt-36">
        <SectionTitle kicker="Funciones" title="Un sistema completo para gestionar citas." text="Cada funcionalidad está diseñada para reducir la fricción de la reserva para los clientes y la fricción diaria para los equipos." />
        <div className="container mb-16">
          <ProductMockup />
        </div>
        <FeatureGrid />
      </section>
      <FinalCTA />
    </PageShell>
  );
}
