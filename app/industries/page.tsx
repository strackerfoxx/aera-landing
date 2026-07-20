import type { Metadata } from 'next';
import { FinalCTA, PageShell, SectionTitle } from '@/components/site';
import { industries } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Industrias',
  description: 'Software de reservas de Aera para barberías, salones, clínicas, dentistas, veterinarios, spas, gimnasios y consultores.',
};

export default function IndustriesPage() {
  return (
    <PageShell>
      <section className="section pt-36">
        <SectionTitle kicker="Industrias" title="Reserva premium para cada categoría de servicio." text="Aera ofrece a cada industria un flujo de reserva más rápido, un calendario del personal más claro y una experiencia de cliente más profesional." />
        <div className="container grid gap-4 md:grid-cols-2">
          {industries.map((industry) => (
            <article className="card p-8" key={industry.name}>
              <h2 className="text-3xl font-black">{industry.name}</h2>
              <p className="mt-4 text-slate-500">{industry.description}</p>
            </article>
          ))}
        </div>
      </section>
      <FinalCTA />
    </PageShell>
  );
}
