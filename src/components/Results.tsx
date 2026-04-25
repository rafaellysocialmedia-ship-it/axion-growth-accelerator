import { Reveal } from "./Reveal";
import { AnimatedNumber } from "./AnimatedNumber";

const METRICS = [
  { v: 187, prefix: "+", suffix: "%", label: "taxa de agendamento" },
  { v: 42, prefix: "-", suffix: "%", label: "no-show" },
  { v: 2.4, suffix: "x", decimals: 1, label: "ticket médio" },
  { v: 68, suffix: "%", label: "inativos reativados" },
];

const DOC_PHOTO =
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80";

export function Results() {
  return (
    <section id="resultados" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] glow-purple pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary-bright)]">
            Prova social
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl lg:text-7xl mt-6 max-w-4xl">
            Números de clínicas reais.{" "}
            <span className="text-muted-foreground">
              Não promessa de slide.
            </span>
          </h2>
        </Reveal>

        <div className="mt-20 grid sm:grid-cols-2 gap-px bg-border">
          {METRICS.map((m, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bg-background p-12 lg:p-16 h-full">
                <div className="font-display text-6xl lg:text-7xl text-[var(--color-primary-bright)]">
                  <AnimatedNumber
                    value={m.v}
                    prefix={m.prefix}
                    suffix={m.suffix}
                    decimals={m.decimals ?? 0}
                  />
                </div>
                <div className="mt-3 text-muted-foreground text-lg">
                  {m.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 surface-card rounded-3xl p-8 lg:p-12 border-[var(--color-primary)]/40 border flex flex-col md:flex-row items-start md:items-center gap-8">
            <img
              src={DOC_PHOTO}
              alt="Dra. Renata Oliveira"
              className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover border-2 border-[var(--color-primary)] shrink-0"
            />
            <div>
              <p className="font-display text-2xl lg:text-3xl leading-snug tracking-wide">
                "Em 4 meses com a Axion, nossa taxa de agendamento subiu de{" "}
                <span className="text-[var(--color-primary-bright)]">22% para 61%</span>."
              </p>
              <div className="mt-4 text-sm text-muted-foreground">
                Dra. Renata Oliveira · Clínica de Estética · São Paulo
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
