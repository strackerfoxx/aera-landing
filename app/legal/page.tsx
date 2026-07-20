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
        <div className="container grid gap-4 md:grid-cols-2">
            <article className="card p-8">
              <h2 className="text-2xl font-black">Política de privacidad</h2>
              <p className="mt-4 text-slate-500">Aera respeta tu privacidad y se compromete a proteger la información que compartas con nosotros.Si decides contactarnos o solicitar información sobre Aera, podremos recopilar datos como tu nombre, correo electrónico, número de teléfono y cualquier otra información que proporciones voluntariamenteUtilizamos esta información únicamente paraResponder a tus consultasPonernos en contacto contigo sobre AeraMejorar nuestro sitio web y nuestros serviciosNo vendemos ni compartimos tu información personal con terceros, salvo cuando sea necesario para prestar nuestros servicios o cuando la ley lo exijaImplementamos medidas razonables para proteger la información que recibimos, aunque ningún método de transmisión o almacenamiento es completamente seguro.</p>
            </article>

            <article className="card p-8">
              <h2 className="text-2xl font-black">Política de cookies</h2>
              <p className="mt-4 text-slate-500">Este sitio puede utilizar cookies para mejorar la experiencia del usuario, recordar preferencias y obtener estadísticas de uso.Algunas cookies son necesarias para el funcionamiento del sitio, mientras que otras pueden utilizarse con fines analíticos o de medición del rendimiento.Puedes configurar o desactivar las cookies desde la configuración de tu navegador. Ten en cuenta que algunas funciones del sitio podrían no funcionar correctamente si las deshabilitas.Al continuar navegando en este sitio, aceptas el uso de cookies de acuerdo con esta política.</p>
            </article>
        </div>
      </section>
    </PageShell>
  );
}
