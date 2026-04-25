import { Reveal } from "./Reveal";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Já tenho CRM. Preciso migrar tudo?",
    a: "Não obrigatoriamente. A gente avalia seu CRM atual no diagnóstico — se ele resolve, mantemos. Se está limitando seu crescimento, fazemos a migração de dados, automações e treinamento sem parar sua operação.",
  },
  {
    q: "Minha equipe é pequena. Vai funcionar?",
    a: "Funciona melhor ainda. Quanto menor o time, mais valor o CRM e as automações entregam — porque ele substitui processos manuais que sufocam a sua recepção. Atendemos clínicas a partir de 2 pessoas.",
  },
  {
    q: "Em quanto tempo vejo resultado?",
    a: "Os primeiros ganhos de conversão e no-show aparecem em até 30 dias. O ciclo completo do Método Accel — atração, conversão, retenção rodando em sintonia — entrega resultado consolidado em 90 dias.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary-bright)]">
            FAQ
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl lg:text-7xl mt-6 max-w-3xl">
            Respondendo antes de você perguntar.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-3">
          {FAQS.map((f, i) => {
            const active = open === i;
            return (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  className={`surface-card rounded-2xl overflow-hidden transition-all ${
                    active ? "border-[var(--color-primary)]/50" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(active ? null : i)}
                    className="w-full px-7 py-6 flex items-center justify-between gap-6 text-left"
                  >
                    <span className="font-display text-xl lg:text-2xl tracking-wide">
                      {f.q}
                    </span>
                    <span className="shrink-0 w-9 h-9 rounded-full bg-[var(--color-primary)]/15 border border-[var(--color-primary)]/40 flex items-center justify-center text-[var(--color-primary-bright)]">
                      {active ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-7 pb-7 text-muted-foreground leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
