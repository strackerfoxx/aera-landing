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
        <SectionTitle
          kicker="Acerca de"
          title="Creemos que reservar una cita debería tomar menos de un minuto."
          text="Aera nació para que agendar una cita sea tan simple como hacer clic: sin llamadas, sin mensajes interminables y sin agendas hechas un lío."
        />
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div className="space-y-8">
            <p className="lead max-w-2xl">
              Si algo debería ser rápido, es reservar una cita. Los clientes quieren hacerlo en un segundo y los negocios quieren una herramienta que funcione sin excusas.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <article className="card p-8">
                <h3 className="text-2xl font-black">Simplicidad primero</h3>
                <p className="mt-3 text-slate-500">
                  No añadimos más de lo necesario. Cada pantalla tiene un propósito para que reservar sea rápido y sin vueltas.
                </p>
              </article>
              <article className="card p-8">
                <h3 className="text-2xl font-black">Para negocios reales</h3>
                <p className="mt-3 text-slate-500">
                  Salones, barberías, spas y clínicas: Aera está pensada para quienes trabajan con citas y necesitan que todo sea práctico y cómodo.
                </p>
              </article>
              <article className="card p-8">
                <h3 className="text-2xl font-black">Tecnología confiable</h3>
                <p className="mt-3 text-slate-500">
                  Que todo funcione rápido y sin sorpresas, para que puedas enfocarte en atender clientes, no en pelear con la agenda.
                </p>
              </article>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card p-8">
              <h2 className="text-3xl font-black">Lo que buscamos</h2>
              <p className="mt-4 text-slate-500">
                Nuestra misión es quitar la fricción entre el negocio y el cliente, para que pedir hora sea algo fácil y claro.
              </p>
              <p className="mt-4 text-slate-500">
                Nuestra visión es que cualquier negocio de servicios pueda ofrecer una reserva moderna, sin importar su tamaño.
              </p>
            </div>

            <div className="card p-8">
              <h2 className="text-3xl font-black">Principios que seguimos</h2>
              <ul className="mt-5 space-y-3 text-slate-500">
                <li>Claridad sobre complejidad.</li>
                <li>Rapidez sin sobrecargar.</li>
                <li>Diseño pensado para personas de verdad.</li>
                <li>Fiabilidad en cada reserva.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </PageShell>
  );
}
