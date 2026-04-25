import { Reveal } from "./Reveal";
import { ArrowRight, ArrowDown } from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[rgba(6,6,8,0.85)]" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      {/* Glows */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] glow-purple pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] glow-green pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full surface-card text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-bright)]" />
            Método exclusivo · Axion
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="font-display mt-8 text-[15vw] sm:text-7xl lg:text-[88px] leading-[0.95] max-w-5xl">
            Chega de clínica crescendo no{" "}
            <span className="text-strike">achismo</span>.
            <br />
            Hora de{" "}
            <span className="text-[var(--color-primary-bright)]">escalar</span>.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            O Método Accel conecta marketing, vendas e CRM numa máquina de
            crescimento feita para clínicas.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#cta"
              className="btn-primary rounded-full px-7 py-4 text-sm font-semibold inline-flex items-center gap-2"
            >
              Quero escalar minha clínica
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#metodo"
              className="btn-ghost rounded-full px-7 py-4 text-sm font-semibold inline-flex items-center gap-2"
            >
              Ver como funciona
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm">
            {[
              ["3x", "conversão"],
              ["-42%", "no-show"],
              ["90 dias", "p/ resultado"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline gap-2">
                <span className="font-display text-2xl text-[var(--color-primary-bright)]">
                  {k}
                </span>
                <span className="text-muted-foreground">{v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
