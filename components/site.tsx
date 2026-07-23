'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ChevronDown, Play, X, MessageCircle, Calendar, CircleX, Menu } from 'lucide-react';
import { faqs, features, industries, nav, pricingPlans } from '@/lib/content';

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
        <nav className="glass mx-auto max-w-6xl rounded-[1.75rem] px-4 py-3 md:rounded-full md:px-5">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="text-lg font-black tracking-tight">Aera</Link>
            <div className="hidden items-center gap-7 md:flex">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-600 hover:text-aera-blue">
                  {item.label}
                </Link>
              ))}
            </div>
            <a
              href="https://wa.me/525518839216?text=Hola%20%F0%9F%91%8B.%20Vi%20la%20p%C3%A1gina%20de%20Aera%20y%20me%20interesa%20conocer%20c%C3%B3mo%20puede%20ayudar%20a%20mi%20negocio.%20Me%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary shine hidden md:inline-flex"
            >
              Hablar con un asesor
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? 'Cerrar navegación' : 'Abrir navegación'}
              className="grid size-11 place-items-center rounded-full bg-slate-950 text-white md:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
          {open ? (
            <div className="mt-4 grid gap-2 border-t border-slate-200 pt-4 md:hidden">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-aera-blue">
                  {item.label}
                </Link>
              ))}
              <a
                href="https://wa.me/525518839216?text=Hola%20%F0%9F%91%8B.%20Vi%20la%20p%C3%A1gina%20de%20Aera%20y%20me%20interesa%20conocer%20c%C3%B3mo%20puede%20ayudar%20a%20mi%20negocio.%20Me%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary shine mt-2 w-full"
              >
                Hablar con un asesor
              </a>
            </div>
          ) : null}
        </nav>
      </header>
      {open && <DemoModal close={() => setOpen(false)} />}
    </>
  );
}

export function DemoModal({ close }: { close: () => void }) {
  return (
    <div className="fixed inset-0 z-60 grid place-items-center bg-slate-950/45 p-4 backdrop-blur">
      <motion.div initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="card max-w-xl p-6">
        <div className="flex justify-between">
          <div>
            <p className="eyebrow">Hablar con un asesor</p>
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
      <div className="absolute inset-x-0 top-0 h-80 bg-linear-to-b from-blue-100/80 to-transparent" />
      <div className="container relative grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
        <motion.div {...fade}>
          <p className="eyebrow">Citas sin fricción</p>
          <h1 className="mt-5 text-[clamp(4rem,9vw,8.6rem)] font-black leading-[.84] tracking-[-.08em]">Reciba reservas las 24 horas.</h1>
          <p className="lead mt-7 max-w-xl">
            Aera ayuda a los clientes a reservar en menos de un minuto con solo su número de teléfono, mientras su equipo gestiona servicios, profesionales, horarios, clientes y citas desde un sistema simple y claro.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://wa.me/525518839216?text=Hola%20%F0%9F%91%8B.%20Vi%20la%20p%C3%A1gina%20de%20Aera%20y%20me%20interesa%20conocer%20c%C3%B3mo%20puede%20ayudar%20a%20mi%20negocio.%20Me%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n." className="btn btn-primary shine">
              Hablar con un asesor <ArrowRight className="ml-2 size-4" />
            </a>
            <a href="https://youtu.be/F7T9pWfdVb4" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Play className="mr-2 size-4" /> Ver demostración
            </a>
          </div>
        </motion.div>
        <ProductMockup />
      </div>
    </section>
  );
}

export function ProductMockup() {
  return (
    <motion.div {...fade} className="float card relative mx-auto w-full max-w-136 p-3 shadow-glow sm:p-4">
      <div className="rounded-3xl bg-slate-950 p-4 text-white sm:p-5">
        <div className="mb-5 flex items-center justify-between">
          <b>Hoy</b>
          <span className="rounded-full bg-blue-500 px-3 py-1 text-xs">12 reservas</span>
        </div>
        {['09:00 Corte de cabello', '10:00 Consulta', '11:30 Tratamiento', '13:00 Seguimiento'].map((x, i) => (
          <div key={x} className="mb-3 rounded-2xl bg-linear-to-br from-white/10 to-white/5 p-4 border-l-4 border-l-blue-500" style={{ marginLeft: i % 2 ? 36 : 0 }}>
            <p className="font-bold flex items-center gap-2"><Calendar className="size-4" /> {x}</p>
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
          <div className="mb-6 inline-flex rounded-xl bg-blue-50 p-3">
            <f.icon className="size-7 text-blue-600" />
          </div>
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
        <SectionTitle kicker="Problema" title="Mientras responde mensajes, otros negocios ya aceptaron esa reserva." text="Cuentas, contraseñas, llamadas telefónicas, preguntas repetidas y disponibilidad poco clara generan abandono antes de que exista la cita. Si el dueño está trabajando, Aera responde y agenda por él." />
        <div className="container grid gap-4 md:grid-cols-3">
          {['78% de los clientes se va con el primer negocio que responde; la velocidad decide la venta.', '40% intenta reservar de noche o en fines de semana; sin agenda automática, esa demanda se pierde.', '30% a 40% de no-shows destruyen ingresos cuando la agenda y los recordatorios son manuales.'].map((x) => (
            <div className="card p-8 text-2xl font-black" key={x}>
              <div className="flex items-start gap-3">
                <CircleX className="mt-1 size-10 shrink-0 text-red-500" />
                <span>{x}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-aera-soft">
        <SectionTitle kicker="Solución" title="Un minuto desde la intención hasta la cita." text="Aera reduce la reserva a las decisiones que importan: servicio, profesional, horario, verificación por teléfono y listo." />
        <Timeline />
      </section>

      <ProductScreenshots />

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
          <span className="text-5xl font-black text-blue-500" key={`timeline-${i}`}>
            0{i + 1}
          </span>
          <h3 className="mt-8 text-xl font-black">{x}</h3>
          <p className="mt-2 text-slate-500">Diseñado para sentirse claro, rápido y natural en cualquier dispositivo.</p>
        </motion.div>
      ))}
    </div>
  );
}

export function ProductScreenshots() {
  return (
    <section className="section bg-slate-950 text-white">
      <SectionTitle kicker="Producto real" title="Muestre lo que cierra la venta." text="Incluimos pantallas reales solo donde sustituyen explicación por confianza: calendario, operación diaria y detalle accionable de cada cita." />
      <div className="container grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div {...fade} className="rounded-4xl border border-white/10 bg-black p-4 shadow-glow">
          <TodayScreenshot />
          <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
            <p><b className="text-white">Agenda clara:</b> el equipo ve hora, estado, cliente y servicio sin abrir múltiples vistas.</p>
            <p><b className="text-white">Calendario visible:</b> disponibilidad y demanda del mes aparecen junto a la operación diaria.</p>
            <p><b className="text-white">Acción rápida:</b> crear cita está siempre a un clic para no perder llamadas o mensajes.</p>
          </div>
        </motion.div>
        <div className="grid gap-6">
          <motion.div {...fade} className="rounded-4xl border border-white/10 bg-black p-4 shadow-glow">
            <CalendarScreenshot />
            <p className="mt-4 text-sm text-slate-300"><b className="text-white">Vista mensual que vende orden:</b> los días con citas destacan sin saturar al usuario.</p>
          </motion.div>
          <motion.div {...fade} className="rounded-4xl border border-white/10 bg-black p-4 shadow-glow">
            <AppointmentDetailScreenshot />
            <p className="mt-4 text-sm text-slate-300"><b className="text-white">Detalle listo para actuar:</b> pago, servicio, profesional y mensajes se gestionan desde una sola pantalla.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AppSidebar() {
  return (
    <aside className="hidden w-28 shrink-0 border-r border-white/10 bg-black p-3 text-[7px] font-bold text-white sm:block">
      <p className="mb-5 text-[8px]">Aera</p>
      {['Panel', 'Calendario', 'Clientes', 'Citas', 'Servicios', 'Equipo'].map((item) => (
        <div key={item} className="mb-5 flex items-center gap-2"><span className="grid size-3 place-items-center rounded border border-white/60 text-[6px]">□</span>{item}</div>
      ))}
    </aside>
  );
}

function TodayScreenshot() {
  return (
    <div className="flex min-h-90 overflow-hidden rounded-[1.35rem] border border-white/10 bg-black text-white">
      <div className="min-w-0 flex-1 p-3 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-3"><h3 className="text-2xl font-black tracking-tight sm:text-4xl">Citas de hoy</h3><button className="rounded-full bg-blue-600 px-3 py-2 text-[11px] font-bold sm:px-4 sm:text-xs">Crear cita</button></div>
        <div className="mt-6 sm:mt-10">
          <div className="overflow-hidden rounded-2xl bg-neutral-900">
            <div className="grid grid-cols-[.7fr_1.1fr_1fr_1fr] gap-2 border-b border-white/10 px-3 py-4 text-[10px] font-bold text-slate-400 sm:grid-cols-4 sm:px-5 sm:text-xs"><span>Hora</span><span>Estado</span><span>Cliente</span><span>Servicios</span></div>
            <div className="grid grid-cols-[.7fr_1.1fr_1fr_1fr] gap-2 border-b border-white/5 px-3 py-3 text-xs font-bold sm:grid-cols-4 sm:px-5 sm:text-sm"><span>11:20</span><span><span className="inline-block rounded-full border border-yellow-500/50 bg-yellow-500/10 px-2 py-1 text-[10px] text-yellow-500 sm:px-3 sm:text-xs">Agendada</span></span><span>Diego Castle</span><span>Retiro Esmalte</span></div>
            <div className="grid grid-cols-[.7fr_1.1fr_1fr_1fr] gap-2 border-b border-white/5 px-3 py-3 text-xs font-bold sm:grid-cols-4 sm:px-5 sm:text-sm"><span>09:20</span><span><span className="inline-block rounded-full border border-red-500/50 bg-red-500/10 px-2 py-1 text-[10px] text-red-500 sm:px-3 sm:text-xs">Cancelada</span></span><span>Alex Edu</span><span>Manicure Ruso</span></div>
            <div className="grid grid-cols-[.7fr_1.1fr_1fr_1fr] gap-2 px-3 py-3 text-xs font-bold sm:grid-cols-4 sm:px-5 sm:text-sm"><span>10:20</span><span><span className="inline-block rounded-full border border-green-500/50 bg-green-500/10 px-2 py-1 text-[10px] text-green-500 sm:px-3 sm:text-xs">Confirmada</span></span><span>Viktor</span><span>Manicure Ruso</span></div>
          </div>
          <MiniCalendar />
        </div>
      </div>
    </div>
  );
}

function MiniCalendar() {
  const days = ['Su','Mo','Tu','We','Th','Fr','Sa','28','29','30','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','1'];
  return <div className="mt-6 rounded-2xl bg-neutral-900 p-3 text-center text-xs sm:mt-10 sm:p-5"><b>July 2026</b><div className="mt-5 grid grid-cols-7 gap-1 sm:gap-3">{days.map((d,i)=><span key={i} className={(d==='1'?'rounded-full bg-blue-600 text-white py-2 ':d==='18'?'rounded-lg bg-white/10 py-2 ':'py-2 ') + (i<7?'text-slate-400':'')}>{d}</span>)}</div></div>;
}

function CalendarScreenshot() {
  return (
    <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-black p-5 text-white">
      <h3 className="text-3xl font-black tracking-tight">Calendario de Citas</h3>
      <div className="mt-6 inline-flex items-center gap-4 rounded-xl bg-neutral-900 p-4 text-sm font-bold">Total Citas del Mes: <span className="rounded-full bg-white/10 px-3 py-2">2</span></div>
      <div className="mt-5 rounded-2xl border border-white/10 bg-neutral-900 p-5 text-center text-xs"><b>July 2026</b><div className="mt-6 grid grid-cols-7 gap-y-7">{Array.from({length:35},(_,i)=>i+1).map((d)=><span key={d} className={d===4||d===5?'mx-auto flex flex-col items-center justify-center size-12 rounded-full bg-blue-600 text-white font-bold':d===18?'mx-auto grid size-12 place-items-center rounded-full bg-white/10':'font-bold'}>{d<=31?d:''}{d===4||d===5?<span className="text-[10px] text-blue-200 font-normal leading-tight">2 citas</span>:''}</span>)}</div></div>
    </div>
  );
}

function AppointmentDetailScreenshot() {
  return (
    <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-black p-5 text-white">
      <div className="flex items-center justify-between"><h3 className="text-2xl font-black tracking-tight">Detalles de la Cita</h3><div className="flex gap-2 items-center"><span className="rounded-full bg-yellow-600 px-3 py-1 text-xs text-yellow-100">Agendada</span><button className="rounded-lg bg-blue-600 px-4 py-1.5 text-sm font-bold text-white hover:bg-blue-700">Editar Cita</button></div></div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2"><div className="rounded-xl bg-neutral-900 p-4"><small className="text-slate-400">Cliente</small><b className="mt-2 block">ales insti</b><p className="text-xs text-slate-400">+525578613202</p></div><div className="rounded-xl bg-neutral-900 p-4"><small className="text-slate-400">Resumen de Pago</small><b className="mt-2 block text-blue-500 text-xl font-black">$490</b> </div>(al mes)</div>
      <div className="mt-4 rounded-xl border border-white/10 p-4"><b>Servicios Asignados</b><div className="mt-3 rounded-lg bg-white/5 p-3 text-sm">Tinte de cabello · Cecilia - estilista</div></div>
      <div className="mt-4 rounded-xl border border-white/10 p-4"><b className="flex items-center gap-2"><MessageCircle className="size-5 text-green-500 fill-green-500" /> Enviar Mensaje</b><p className="mt-2 rounded-lg bg-neutral-900 p-3 text-xs text-slate-300">Aviso de retraso con tono profesional y directo.</p></div>
    </div>
  );
}

export function Industries() {
  return (
    <section className="section">
      <SectionTitle kicker="Industrias" title="Diseñado para negocios guiados por citas." text="Aera se adapta a equipos de alto contacto donde el tiempo, la confianza y la presentación profesional importan." />
      <div className="container grid gap-4 md:grid-cols-4">
        {industries.map((industry) => (
          <Link href="/industries" key={industry.name} className="card p-6 font-black hover:text-aera-blue">
            {industry.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="section bg-slate-950 text-white">
      <SectionTitle kicker="Reviews" title="Se percibe premium antes de la primera visita." text="Los equipos eligen Aera porque hace que su negocio sea más fácil de administrar y más fácil de confiar." />
      <div className="container grid gap-4 md:grid-cols-3">
        {['Nuestros clientes dejaron de preguntar cuando teniamos horarios disponibles. Simplemente reservan.', 'Ya no pierdo clientes por no poder agendar citas.', 'Aera nos hizo ver más profesionales de la noche a la mañana.'].map((q, i) => (
          <div className="rounded-4xl bg-white/10 p-8" key={q}>
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
      <SectionTitle kicker="Comparación" title="Reserva tradicional frente a Aera." text="Sustituya respuestas tardías, reservas fuera de horario perdidas y no-shows por un recorrido automático que captura demanda 24/7 y confirma cada cita." />
      <div className="container grid gap-4 md:grid-cols-2">
        <div className="card p-8 opacity-70" style={{ backgroundColor: "#cfcfcf" }}>
          <h3 className="text-2xl font-black">Tradicional</h3>
          {['Llamar durante el horario comercial', 'Esperar a que alguien responda', 'Perder reservas nocturnas o de fin de semana', 'Recordar citas manualmente'].map((x) => (
            <p className="mt-4" key={x}>✕ {x}</p>
          ))}
        </div>
        <div className="card border-blue-200 p-8 shadow-glow" style={{ borderWidth: 2, color: "#fff", backgroundColor: "#2563eb" }}>
          <h3 className="text-2xl font-black text-aera-blue">Aera</h3>
          {['Responder al instante aunque el dueño esté ocupado', 'Reservar en cualquier momento', 'Confirmaciones y recordatorios automáticos', 'Calendario del equipo sincronizado'].map((x) => (
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
        {['Tus clientes pueden reservar al instante, incluso cuando estás ocupado.', 'Recibe reservas las 24 horas, incluso cuando tu negocio está cerrado.', 'Los recordatorios automáticos ayudan a reducir las citas perdidas.'].map((x) => (
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
            <a href="https://wa.me/525518839216?text=Hola%20%F0%9F%91%8B.%20Vi%20la%20p%C3%A1gina%20de%20Aera%20y%20me%20interesa%20conocer%20c%C3%B3mo%20puede%20ayudar%20a%20mi%20negocio.%20Me%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n." className="btn btn-primary mt-8 w-full">
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-4xl rounded-2xl border-2 border-slate-900 bg-slate-900 p-8 text-center text-white shadow-card md:p-10">
        <h3 className="text-2xl font-black uppercase tracking-wide text-blue-400 sm:text-3xl">Pruebe Aera sin riesgo. Configuración incluida.</h3>
        <p className="mt-4 text-lg font-medium leading-relaxed text-slate-200">
          Empiece hoy sin preocuparse por la instalación. <strong>Nosotros configuramos todo para que pueda empezar a recibir reservas cuanto antes.</strong> <strong>Además, cuenta con una garantía de 30 días: si Aera no es lo que esperaba, le devolvemos el 100% de su dinero.</strong> 
        </p>
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
        <h2 className="h2 mt-3">Empieza a recibir reservas sin llamadas.</h2>
        <a href="https://wa.me/525518839216?text=Hola%20%F0%9F%91%8B.%20Vi%20la%20p%C3%A1gina%20de%20Aera%20y%20me%20interesa%20conocer%20c%C3%B3mo%20puede%20ayudar%20a%20mi%20negocio.%20Me%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n." className="btn btn-primary mt-8">
          Hablar con un asesor
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
