import type { Metadata } from 'next';
import { FinalCTA, PageShell, SectionTitle } from '@/components/site';

export const metadata: Metadata = {
  title: 'Acerca de',
  description: 'Conozca por qué existe Aera y cómo su filosofía de producto crea citas sin fricción.',
};

export default function About() {
  return (
    <PageShell>
      <section className="section pt-36">
        <SectionTitle kicker="Acerca de" title="Creemos que un gran software debe sentirse invisible." text="Aera existe porque reservar una cita debe ser una de las interacciones más sencillas entre un cliente y un negocio." />
        <div className="container grid gap-4 md:grid-cols-3">
          {['Misión: eliminar la fricción en la reserva de citas.', 'Visión: hacer que cada negocio de servicios se sienta moderno y confiable.', 'Valores: claridad, velocidad, calidad, fiabilidad y sobriedad.'].map((x) => (
            <div className="card p-8 text-2xl font-black" key={x}>{x}</div>
          ))}
        </div>
      </section>
      <FinalCTA />
    </PageShell>
  );
}
