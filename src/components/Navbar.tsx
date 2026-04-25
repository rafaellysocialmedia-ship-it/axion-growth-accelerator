import { useEffect, useState } from "react";
import logoHorizontal from "@/assets/logo-horizontal.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#metodo", label: "Método" },
    { href: "#crm", label: "CRM" },
    { href: "#resultados", label: "Resultados" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <img src={logoHorizontal} alt="Axion" className="h-7 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="btn-primary rounded-full px-5 py-2.5 text-sm font-semibold"
        >
          Diagnóstico gratuito
        </a>
      </div>
    </header>
  );
}
