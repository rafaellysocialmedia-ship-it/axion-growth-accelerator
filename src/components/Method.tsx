import { Reveal } from "./Reveal";

const STEPS = [
  {
    l: "A",
    t: "Atração",
    d: "Leads qualificados, não volume de curiosos. Mídia paga e orgânico calibrados pra atrair quem realmente vira paciente.",
  },
  {
    l: "C",
    t: "Conversão",
    d: "Da mensagem ao agendamento em minutos. Roteiros, automações e SLA de atendimento que matam a fricção.",
  },
  {
    l: "C",
    t: "CRM Central",
    d: "Uma plataforma que conecta tudo, sem gambiarra. WhatsApp, agenda, financeiro e marketing num só lugar.",
  },
  {
    l: "E",
    t: "Escala",
    d: "Crescimento com controle, não com heroísmo. Processos replicáveis pra abrir mais unidades sem caos.",
  },
  {
    l: "L",
    t: "Lealdade",
    d: "Paciente que volta e ainda indica. Réguas de retenção, NPS e programa de indicação automatizado.",
  },
];

export function Method() {
  return (
    <section id="metodo" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] glow-purple pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary-bright)]">
            Método Accel
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl lg:text-7xl mt-6 max-w-4xl">
            O sistema que transforma sua clínica numa operação de{" "}
            <span className="text-[var(--color-primary-bright)]">
              alta performance
            </span>
            .
          </h2>
        </Reveal>

        <div className="mt-24 relative">
          {/* timeline line */}
          <div className="absolute left-7 lg:left-10 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-primary-bright)] via-[var(--color-primary)] to-[var(--color-primary-deep)]" />

          <div className="space-y-16">
            {STEPS.map((s, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex gap-8 lg:gap-14 items-start">
                  <div className="relative shrink-0">
                    <div className="w-14 lg:w-20 h-14 lg:h-20 rounded-2xl bg-background border border-[var(--color-primary)] flex items-center justify-center font-display text-3xl lg:text-5xl text-[var(--color-primary-bright)] shadow-[0_0_40px_rgba(155,61,255,0.25)]">
                      {s.l}
                    </div>
                  </div>
                  <div className="pt-2 lg:pt-4 max-w-2xl">
                    <h3 className="font-display text-3xl lg:text-5xl tracking-wide">
                      {s.t}
                    </h3>
                    <p className="mt-3 text-muted-foreground text-lg leading-relaxed">
                      {s.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
