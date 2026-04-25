import { Reveal } from "./Reveal";

const PAINS = [
  {
    n: "01",
    t: "Lead chega, recepção não liga na hora",
    d: "Em 5 minutos o paciente já está no concorrente. Cada minuto de demora derruba sua conversão pela metade.",
  },
  {
    n: "02",
    t: "Investe em anúncio, mas não sabe o que funciona",
    d: "Sem rastreamento real, você queima orçamento em campanhas que nunca vão virar paciente na cadeira.",
  },
  {
    n: "03",
    t: "Recepção agenda, mas não vende",
    d: "Falta script, falta processo, falta intenção. O atendimento vira protocolo — não conversão.",
  },
  {
    n: "04",
    t: "Pacientes somem e ninguém reativa",
    d: "Sua maior mina de ouro está parada na base. Sem régua de retenção, eles não voltam — e não indicam.",
  },
];

export function Pain() {
  return (
    <section className="relative bg-surface py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary-bright)]">
            Reconhece isso?
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl lg:text-7xl mt-6 max-w-4xl">
            Sua clínica está sangrando leads todo dia —{" "}
            <span className="text-muted-foreground">e você nem sabe.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 gap-px bg-border">
          {PAINS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <div className="bg-background p-10 lg:p-12 h-full hover:bg-surface transition-colors">
                <div className="font-display text-6xl text-[var(--color-primary-deep)]">
                  {p.n}
                </div>
                <h3 className="mt-6 text-2xl font-display tracking-wide text-foreground">
                  {p.t}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {p.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
