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
        <section className="section">
              <div className="container rounded-[3rem] bg-slate-950 p-12 text-center text-white shadow-glow">
                <p className="eyebrow">Listo</p>
                <h2 className="h2 mt-3">Empieza a recibir reservas sin llamadas.</h2>
                  <a
                    href="https://wa.me/525518839216?text=Hola%20%F0%9F%91%8B.%20Vi%20la%20p%C3%A1gina%20de%20Aera%20y%20me%20interesa%20conocer%20c%C3%B3mo%20puede%20ayudar%20a%20mi%20negocio.%20Me%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 mt-4 hover:bg-blue-700 transition"
                    style={{ textDecoration: 'none', color: 'white', "backgroundColor": "#25D366" }}
                  >
                    Contactar por WhatsApp
                  </a>
              </div>
            </section>
            
      </section>
    </PageShell>
  );
}
