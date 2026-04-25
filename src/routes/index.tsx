import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Pain } from "@/components/Pain";
import { Method } from "@/components/Method";
import { CRM } from "@/components/CRM";
import { Results } from "@/components/Results";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Axion · CRM e Método Accel para clínicas que querem escalar" },
      {
        name: "description",
        content:
          "O Método Accel da Axion conecta marketing, vendas e CRM próprio numa máquina de crescimento para clínicas. +187% em agendamentos, -42% no-show.",
      },
      { property: "og:title", content: "Axion · Escale sua clínica com o Método Accel" },
      {
        property: "og:description",
        content:
          "Marketing, vendas e CRM próprio integrados. Resultado em 90 dias. Diagnóstico gratuito.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Pain />
      <Method />
      <CRM />
      <Results />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
