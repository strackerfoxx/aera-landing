'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ChevronDown, Play, X } from 'lucide-react';
import { faqs, features, industries, nav, posts, pricingPlans } from '@/lib/content';

const fade = {
  initial: { opacity: 0, y: 28, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0)' },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7 },
};

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
        <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3">
          <Link href="/" className="text-lg font-black tracking-tight">Aera</Link>
          <div className="hidden gap-7 md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-600 hover:text-aera-blue">
                {item.label}
              </Link>
            ))}
          </div>
          <button onClick={() => setOpen(true)} className="btn btn-primary shine">
            Solicitar demostración
          </button>
        </nav>
      </header>
      {open && <DemoModal close={() => setOpen(false)} />}
    </>
  );
}

export function DemoModal({ close }: { close: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/45 p-4 backdrop-blur">
      <motion.div initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="card max-w-xl p-6">
        <div className="flex justify-between">
          <div>
            <p className="eyebrow">Solicitar demostración</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Vea Aera en acción.</h2>
          </div>
          <button onClick={close}>
            <X />
          </button>
        </div>
        <form className="mt-6 grid gap-3">
          <input className="rounded-2xl border p-4" placeholder="Correo laboral" />
          <input className="rounded-2xl border p-4" placeholder="Nombre de la empresa" />
          <input className="rounded-2xl border p-4" placeholder="Número de teléfono" />
          <button className="btn btn-primary mt-2">
            Solicitar mi demostración <ArrowRight className="ml-2 size-4" />
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid px-4 pb-24 pt-36">
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-blue-100/80 to-transparent" />
      <div className="container relative grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
        <motion.div {...fade}>
          <p className="eyebrow">Citas sin fricción</p>
          <h1 className="mt-5 text-[clamp(4rem,9vw,8.6rem)] font-black leading-[.84] tracking-[-.08em]">La reserva hecha sencilla.</h1>
          <p className="lead mt-7 max-w-xl">
            Aera ayuda a los clientes a reservar en menos de un minuto con solo su número de teléfono, mientras su equipo gestiona servicios, profesionales, horarios, clientes y citas desde un sistema simple y claro.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/contact" className="btn btn-primary shine">
              Solicitar demostración <ArrowRight className="ml-2 size-4" />
            </a>
            <button className="btn btn-secondary">
              <Play className="mr-2 size-4" /> Ver demostración
            </button>
          </div>
        </motion.div>
        <ProductMockup />
      </div>
    </section>
  );
}

export function ProductMockup() {
  return (
    <motion.div {...fade} className="float card relative p-4 shadow-glow">
      <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
        <div className="mb-5 flex items-center justify-between">
          <b>Hoy</b>
          <span className="rounded-full bg-blue-500 px-3 py-1 text-xs">12 reservas</span>
        </div>
        {['09:00 Corte de cabello', '10:00 Consulta', '11:30 Tratamiento', '13:00 Seguimiento'].map((x, i) => (
          <div key={x} className="mb-3 rounded-2xl bg-white/10 p-4" style={{ marginLeft: i % 2 ? 36 : 0 }}>
            <p className="font-bold">{x}</p>
            <p className="text-sm text-slate-300">Verificado por SMS · sin cuenta necesaria</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function SectionTitle({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <motion.div {...fade} className="mx-auto mb-14 max-w-3xl text-center">
      <p className="eyebrow">{kicker}</p>
      <h2 className="h2 mt-3">{title}</h2>
      <p className="lead mt-5">{text}</p>
    </motion.div>
  );
}

export function FeatureGrid() {
  return (
    <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {features.map((f, i) => (
        <motion.div {...fade} transition={{ duration: 0.6, delay: i * 0.04 }} key={f.title} className="card p-6 transition hover:-translate-y-1 hover:shadow-glow">
          <f.icon className="mb-8 size-7 text-aera-blue" />
          <h3 className="text-xl font-black">{f.title}</h3>
          <p className="mt-3 text-slate-500">{f.text}</p>
        </motion.div>
      ))}
    </div>
  );
}

export function HomeSections() {
  return (
    <>
      <section className="section">
        <SectionTitle kicker="Problema" title="La reserva sigue siendo demasiado compleja." text="Cuentas, contraseñas, llamadas telefónicas, preguntas repetidas y disponibilidad poco clara generan abandono antes de que exista la cita." />
        <div className="container grid gap-4 md:grid-cols-3">
          {['Las llamadas perdidas se convierten en ingresos perdidos.', 'Los formularios largos hacen que los clientes abandonen.', 'Los calendarios manuales generan errores costosos.'].map((x) => (
            <div className="card p-8 text-2xl font-black" key={x}>{x}</div>
          ))}
        </div>
      </section>

      <section className="section bg-aera-soft">
        <SectionTitle kicker="Solución" title="Un minuto desde la intención hasta la cita." text="Aera reduce la reserva a las decisiones que importan: servicio, profesional, horario, verificación por teléfono y listo." />
        <Timeline />
      </section>

      <section className="section">
        <SectionTitle kicker="Plataforma" title="Todo lo que necesita el negocio. Nada más de lo que no necesita el cliente." text="Una plataforma completa de gestión de citas diseñada para la velocidad, la confianza y la claridad operativa." />
        <FeatureGrid />
      </section>

      <Industries />
      <Testimonials />
      <Comparison />
      <Stats />
      <PricingPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}

export function Timeline() {
  return (
    <div className="container grid gap-4 md:grid-cols-4">
      {['Elija el servicio', 'Seleccione el profesional', 'Verifique por SMS', 'Llegue informado'].map((x, i) => (
        <motion.div {...fade} key={x} className="card p-7">
          <span className="text-5xl font-black text-blue-500">0{i + 1}</span>
          <h3 className="mt-8 text-xl font-black">{x}</h3>
          <p className="mt-2 text-slate-500">Diseñado para sentirse claro, rápido y natural en cualquier dispositivo.</p>
        </motion.div>
      ))}
    </div>
  );
}

export function Industries() {
  return (
    <section className="section">
      <SectionTitle kicker="Industrias" title="Diseñado para negocios guiados por citas." text="Aera se adapta a equipos de alto contacto donde el tiempo, la confianza y la presentación profesional importan." />
      <div className="container grid gap-4 md:grid-cols-4">
        {industries.map((x) => (
          <Link href="/industries" key={x} className="card p-6 font-black hover:text-aera-blue">
            {x}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="section bg-slate-950 text-white">
      <SectionTitle kicker="Pruebas" title="Se percibe premium antes de la primera visita." text="Los equipos eligen Aera porque hace que su negocio sea más fácil de administrar y más fácil de confiar." />
      <div className="container grid gap-4 md:grid-cols-3">
        {['Nuestros clientes dejaron de preguntar cuando teniamos horarios disponibles. Simplemente reservan.', 'Ya no pierdo tiempo agendando citas.', 'Aera nos hizo ver más profesionales de la noche a la mañana.'].map((q, i) => (
          <div className="rounded-[2rem] bg-white/10 p-8" key={q}>
            “{q}”
            <p className="mt-8 text-sm text-blue-200">Fundador, Estudio {i + 1}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Comparison() {
  return (
    <section className="section">
      <SectionTitle kicker="Comparación" title="Reserva tradicional frente a Aera." text="Sustituya flujos llenos de fricción por un recorrido orientado al teléfono que los clientes completan rápidamente." />
      <div className="container grid gap-4 md:grid-cols-2">
        <div className="card p-8 opacity-70" style={{ backgroundColor: "#cfcfcf" }}>
          <h3 className="text-2xl font-black">Tradicional</h3>
          {['Llamar durante el horario comercial', 'Crear una cuenta', 'Esperar confirmación', 'Actualizar al personal manualmente'].map((x) => (
            <p className="mt-4" key={x}>✕ {x}</p>
          ))}
        </div>
        <div className="card border-blue-200 p-8 shadow-glow" style={{ borderWidth: 2, color: "#fff", backgroundColor: "#2563eb" }}>
          <h3 className="text-2xl font-black text-aera-blue">Aera</h3>
          {['Reservar en cualquier momento', 'Verificar por teléfono', 'Claridad inmediata', 'Calendario del equipo sincronizado'].map((x) => (
            <p className="mt-4" key={x}>
              <Check className="mr-2 inline size-4 text-aera-success" /> {x}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="section bg-aera-soft">
      <div className="container grid gap-4 text-center md:grid-cols-3">
        {['< 60 segundos de reserva promedio', '0 contraseñas para los clientes', 'Disponibilidad online 24/7'].map((x) => (
          <div className="card p-10 text-3xl font-black" key={x}>{x}</div>
        ))}
      </div>
    </section>
  );
}

export function PricingPreview() {
  return (
    <section className="section">
      <SectionTitle kicker="Planes de precios" title="Software de reservas de citas para negocios de servicios" text="Elija el plan que mejor se adapte a su volumen de reservas, su estrategia de crecimiento y la expansión de su operación con un precio fijo para todo el equipo." />
      <PricingCards />
    </section>
  );
}

export function PricingCards() {
  return (
    <div className="container">
      <div className="grid gap-4 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div key={plan.name} className={`card p-8 ${plan.highlight ? 'border-blue-300 shadow-glow' : ''}`}>
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-2xl font-black">{plan.name}</h3>
              {plan.highlight ? <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-aera-blue">Más valor</span> : null}
            </div>
            <p className="mt-4 text-slate-500">{plan.description}</p>
            <div className="mt-6">
              <p className="text-4xl font-black text-slate-950">{plan.price}</p>
              <p className="mt-2 text-sm font-semibold text-slate-600">{plan.billing}</p>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-aera-success" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href="/contact" className="btn btn-primary mt-8 w-full">
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-3xl text-center text-slate-600">
        Aera ayuda a barberías, salones, clínicas, dentistas, veterinarios y consultorios a automatizar la reserva online, reducir la fricción operativa y convertir más visitas en clientes con software de gestión de citas listo para crecer.
      </p>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="section bg-aera-soft">
      <SectionTitle kicker="FAQ" title="Preguntas respondidas de forma simple." text="Todo lo que necesita saber antes de ver Aera en acción." />
      <div className="container max-w-3xl">
        {faqs.map(([q, a]) => (
          <details className="card mb-3 p-6" key={q}>
            <summary className="flex cursor-pointer justify-between font-black">
              {q}
              <ChevronDown />
            </summary>
            <p className="mt-4 text-slate-500">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="section">
      <div className="container rounded-[3rem] bg-slate-950 p-12 text-center text-white shadow-glow">
        <p className="eyebrow">Listo</p>
        <h2 className="h2 mt-3">Haga que la reserva se sienta sencilla.</h2>
        <a href="/contact" className="btn btn-primary mt-8">
          Solicitar demostración
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t px-4 py-12">
      <div className="container flex flex-col justify-between gap-6 md:flex-row">
        <b>Aera</b>
        <p className="text-slate-500">© 2026 Aera. Citas sin fricción.</p>
        <div className="flex gap-4 text-sm">
          <Link href="/legal">Legal</Link>
          <Link href="/contact">Contacto</Link>
        </div>
      </div>
      <CookieBanner />
    </footer>
  );
}

export function CookieBanner() {
  const [show, set] = useState(true);

  return show ? (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-xl rounded-2xl border bg-white p-4 shadow-card">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-slate-600">Aera usa cookies para mejorar el rendimiento y entender el interés por las demostraciones.</p>
        <button onClick={() => set(false)} className="btn btn-primary py-2">
          Aceptar
        </button>
      </div>
    </div>
  ) : null;
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function BlogList() {
  return (
    <div className="container grid gap-4 md:grid-cols-3">
      {posts.map(([t, c, d]) => (
        <article className="card p-7" key={t}>
          <p className="eyebrow">{c}</p>
          <h3 className="mt-4 text-2xl font-black">{t}</h3>
          <p className="mt-3 text-slate-500">{d}</p>
        </article>
      ))}
    </div>
  );
}
