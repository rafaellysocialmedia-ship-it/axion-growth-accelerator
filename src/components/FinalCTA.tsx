import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] glow-purple pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 text-xs uppercase tracking-[0.18em] text-[var(--color-primary-bright)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-bright)] animate-pulse" />
            Vagas limitadas por mês
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-6xl lg:text-8xl mt-8 leading-[0.95]">
            Pronto para parar de adivinhar
            <br />
            e começar a{" "}
            <span className="text-[var(--color-primary-bright)]">crescer</span>?
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            O diagnóstico é gratuito, sem compromisso e já mostra onde sua
            clínica perde dinheiro hoje.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12">
            <a
              href="#"
              className="btn-primary rounded-full px-10 py-5 text-base font-semibold inline-flex items-center gap-3"
            >
              Agendar diagnóstico gratuito
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
