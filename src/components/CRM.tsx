import { Reveal } from "./Reveal";
import {
  Megaphone,
  GitBranch,
  RotateCw,
  Zap,
  History,
  BarChart3,
} from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const PILLARS = [
  { icon: Megaphone, t: "Funil de marketing", d: "Capte e qualifique leads de cada canal num pipeline único.", c: "var(--color-accent-green)" },
  { icon: GitBranch, t: "Pipeline visual", d: "Veja em tempo real onde cada paciente está na jornada.", c: "var(--color-primary-bright)" },
  { icon: RotateCw, t: "Réguas de retenção", d: "Automações que trazem o paciente inativo de volta sozinho.", c: "#F4B740" },
  { icon: Zap, t: "Automações", d: "Confirmações, lembretes e follow-up sem ninguém digitar.", c: "#3B9EFF" },
  { icon: History, t: "Histórico completo", d: "Tudo do paciente num clique — atendimentos, financeiro, mensagens.", c: "#FF5C8A" },
  { icon: BarChart3, t: "Dashboards reais", d: "Decisão por dado: CAC, LTV, no-show, conversão por origem.", c: "#FF5454" },
];

export function CRM() {
  return (
    <section id="crm" className="relative bg-surface py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary-bright)]">
            CRM Próprio
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl lg:text-7xl mt-6 max-w-4xl">
            Não é mais um software. É a{" "}
            <span className="text-[var(--color-primary-bright)]">espinha dorsal</span>{" "}
            da sua clínica.
          </h2>
        </Reveal>

        {/* Hub */}
        <Reveal delay={0.15}>
          <div className="mt-20 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 glow-purple blur-2xl" />
              <div className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-deep)] rounded-3xl px-12 py-8 border border-[var(--color-primary-bright)] flex items-center gap-4 shadow-[0_0_60px_rgba(155,61,255,0.4)]">
                <img src={logoIcon} alt="" className="w-12 h-12" />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/60">Hub central</div>
                  <div className="font-display text-3xl text-white">CRM Axion</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <div className="surface-card rounded-2xl p-7 h-full hover:bg-white/[0.05] transition-colors group">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `color-mix(in oklab, ${p.c} 15%, transparent)`,
                    border: `0.5px solid color-mix(in oklab, ${p.c} 40%, transparent)`,
                  }}
                >
                  <p.icon className="w-5 h-5" style={{ color: p.c }} />
                </div>
                <h3 className="font-display text-2xl tracking-wide">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
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
