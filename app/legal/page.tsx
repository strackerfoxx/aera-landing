import type { Metadata } from 'next';
import { PageShell, SectionTitle } from '@/components/site';

export const metadata: Metadata = {
  title: 'Legal',
  description: 'Política de privacidad, condiciones y información sobre cookies de Aera.',
};

export default function Legal() {
  return (
    <PageShell>
      <section className="section pt-36">
        <SectionTitle kicker="Legal" title="Privacidad, condiciones y cookies." text="Políticas claras para negocios y clientes que usan Aera." />
        <div className="container grid gap-4 md:grid-cols-3">
          {['Política de privacidad', 'Términos del servicio', 'Política de cookies'].map((x) => (
            <article className="card p-8" key={x}>
              <h2 className="text-2xl font-black">{x}</h2>
              <p className="mt-4 text-slate-500">Esta página es un marcador de sitio de marketing y debe revisarse por asesoría legal antes de su uso en producción.</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
