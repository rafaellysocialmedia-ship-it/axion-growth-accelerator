import { Reveal } from "./Reveal";

const PHASES = [
  { n: "Fase 01", t: "Diagnóstico gratuito", d: "Mergulho na sua operação atual: leads, conversão, no-show, ticket. Você sai com o mapa do que perde dinheiro hoje." },
  { n: "Fase 02", t: "CRM configurado para você", d: "Implementação completa do CRM Axion: integrações, automações, pipelines e dashboards customizados pra sua clínica." },
  { n: "Fase 03", t: "Treinamento do time", d: "Recepção, vendas e gestão treinados nos roteiros, no uso do CRM e nos rituais de gestão por dado." },
  { n: "Fase 04", t: "Acompanhamento contínuo", d: "Reuniões semanais de performance, ajustes de campanha e otimização constante. Você não fica sozinho." },
];

export function HowItWorks() {
  return (
    <section className="relative bg-surface py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary-bright)]">
            Como funciona
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl lg:text-7xl mt-6 max-w-4xl">
            A Axion não entrega ferramenta.{" "}
            <span className="text-[var(--color-primary-bright)]">Entrega resultado.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 gap-5">
          {PHASES.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <div className="surface-card rounded-2xl p-10 h-full hover:border-[var(--color-primary)]/50 transition-colors">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary-bright)]">
                  {p.n}
                </div>
                <h3 className="mt-4 font-display text-3xl lg:text-4xl tracking-wide">
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
