import { Brain, GitCompareArrows, ShieldQuestion } from "lucide-react";
import type { CorColuna, DadosComparativo } from "../data/tipos";
import { Reveal, rich } from "./Reveal";

const cores: Record<
  CorColuna,
  { borda: string; fundo: string; texto: string; titulo: string }
> = {
  gold: {
    borda: "border-gold/30",
    fundo: "bg-gold/5",
    texto: "text-gold-2",
    titulo: "text-gold-2",
  },
  blood: {
    borda: "border-blood/30",
    fundo: "bg-blood/5",
    texto: "text-blood-2",
    titulo: "text-blood-2",
  },
  skyy: {
    borda: "border-skyy/30",
    fundo: "bg-skyy/5",
    texto: "text-skyy-2",
    titulo: "text-skyy-2",
  },
  mint: {
    borda: "border-mint/30",
    fundo: "bg-mint/5",
    texto: "text-mint",
    titulo: "text-mint",
  },
  viol: {
    borda: "border-viol/30",
    fundo: "bg-viol/5",
    texto: "text-viol-2",
    titulo: "text-viol-2",
  },
};

export function Comparativo({ dados }: { dados: DadosComparativo }) {
  const n = dados.colunas.length;
  const grid = { gridTemplateColumns: `0.9fr repeat(${n}, 1.05fr)` };
  const [primeira, ...resto] = dados.tituloPartes;

  return (
    <section id={dados.id} className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-2/50 p-7 md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-8 select-none font-serif text-[130px] font-black leading-none text-paper/[0.03]"
            >
              ×
            </div>
            <div className="relative flex flex-wrap items-center gap-3">
              <span className="tape inline-flex items-center gap-2 rounded-sm px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#f3e2c8]">
                <GitCompareArrows className="h-3.5 w-3.5" />
                {dados.selo}
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-fade">
                {dados.rotulo}
              </span>
            </div>
            <h2 className="relative mt-5 max-w-3xl font-serif text-3xl font-black leading-tight text-paper md:text-[44px]">
              {primeira}{" "}
              {resto.map((r, i) => (
                <span key={i}>
                  <span className="text-gold-2">×</span>{" "}
                  <em className={`not-italic ${cores[dados.colunas[i + 1]?.cor ?? "blood"].titulo}`}>
                    {r}
                  </em>{" "}
                </span>
              ))}
            </h2>
            <p className="just relative mt-4 text-[15px] leading-relaxed text-paper/70">
              {dados.intro}
            </p>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line">
            {/* cabeçalho das colunas */}
            <div className="grid grid-cols-[1fr] bg-ink-3/60 md:grid" style={grid}>
              <div className="hidden items-center gap-2 border-b border-line px-5 py-4 font-mono text-[10.5px] uppercase tracking-[0.22em] text-faint md:flex">
                Critério
              </div>
              {dados.colunas.map((col) => (
                <div
                  key={col.id}
                  className={`flex items-center gap-2.5 border-b px-5 py-4 md:border-l md:border-line ${cores[col.cor].borda} ${cores[col.cor].fundo}`}
                >
                  <ShieldQuestion
                    className={`h-4 w-4 shrink-0 ${cores[col.cor].texto}`}
                  />
                  <div>
                    <div
                      className={`font-mono text-[10px] uppercase tracking-[0.2em] ${cores[col.cor].titulo}`}
                    >
                      {col.titulo}
                    </div>
                    <div className="text-[11px] text-fade">{col.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {dados.linhas.map((l, i) => (
              <div
                key={l.criterio}
                className={`grid grid-cols-1 md:grid ${i % 2 === 0 ? "bg-ink-2/40" : "bg-ink-2/20"}`}
                style={grid}
              >
                <div className="border-b border-line/70 px-5 pt-4 pb-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gold md:border-b-0 md:py-4">
                  {l.criterio}
                </div>
                {l.valores.map((v, vi) => (
                  <div
                    key={vi}
                    className="just border-b border-line/70 px-5 py-2 text-[13px] leading-relaxed text-paper/80 md:border-l md:border-b-0 md:border-line/70 md:py-4 md:pb-2"
                  >
                    {rich(v)}
                  </div>
                ))}
              </div>
            ))}

            <div className="flex items-start gap-3 border-t border-line bg-gold/5 px-5 py-4 md:px-6">
              <Brain className="mt-0.5 h-4 w-4 shrink-0 text-gold-2" />
              <p className="just text-[13.5px] leading-relaxed text-paper/80">
                <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold-2">
                  Macete do professor —{" "}
                </span>
                {rich(dados.macete)}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
