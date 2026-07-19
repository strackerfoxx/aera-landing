import type { Metadata } from 'next';
import { BlogList, FinalCTA, PageShell, SectionTitle } from '@/components/site';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Recursos SEO sobre software de reservas de citas, reservas online, software de reservas para salones y sistemas de citas para clínicas.',
};

export default function Blog() {
  return (
    <PageShell>
      <section className="section pt-36">
        <SectionTitle kicker="Blog" title="Ideas para negocios de citas modernos." text="Investigaciones, guías y consejos prácticos para equipos que desean más reservas con menos fricción operativa." />
        <div className="container mb-8">
          <input className="w-full rounded-full border px-6 py-4" placeholder="Buscar artículos sobre software de reservas, programación, recordatorios..." />
        </div>
        <BlogList />
        <div className="container mt-8 rounded-[2rem] bg-aera-soft p-8 text-center">
          <h2 className="text-2xl font-black">Suscríbase al boletín</h2>
          <p className="mt-2 text-slate-500">Información mensual sobre gestión de citas y conversión.</p>
        </div>
      </section>
      <FinalCTA />
    </PageShell>
  );
}
