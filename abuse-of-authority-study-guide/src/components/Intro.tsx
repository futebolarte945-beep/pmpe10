import { ArrowRight, BookOpen, Gavel, Scale, Shield } from "lucide-react";
import { fase1, fase2, type CardParte } from "../data/catalogo";
import type { ParteId } from "../data/tipos";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";

function Card({
  c,
  tom,
  onAbrir,
}: {
  c: CardParte;
  tom: "gold" | "skyy";
  onAbrir: (p: ParteId) => void;
}) {
  const accent = tom === "gold" ? "hover:border-gold/50" : "hover:border-skyy/50";
  const num = tom === "gold" ? "text-gold-2" : "text-skyy-2";
  const chip = tom === "gold" ? "bg-gold text-[#161008]" : "bg-skyy text-[#061018]";
  return (
    <button
      type="button"
      onClick={() => onAbrir(c.id)}
      className={cn(
        "group flex h-full cursor-pointer flex-col rounded-2xl border border-line bg-ink-2/55 p-5 text-left transition-colors",
        accent,
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span className={cn("rounded-sm px-2 py-1 font-mono text-[10px] font-bold tracking-[0.16em]", chip)}>
          PARTE {c.n}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">{c.lei}</span>
      </div>
      <h3 className="mt-4 font-serif text-[22px] font-black leading-tight text-paper">{c.titulo}</h3>
      <p className="just mt-2 flex-1 text-[12.5px] leading-relaxed text-fade">{c.sub}</p>
      <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
        <span className={cn("font-serif text-[13px] italic", num)}>{c.ancora}</span>
        <ArrowRight className="h-4 w-4 shrink-0 text-gold transition-transform group-hover:translate-x-0.5" />
      </div>
    </button>
  );
}

export function Intro({ onAbrir }: { onAbrir: (p: ParteId) => void }) {
  return (
    <div id="topo" className="min-h-screen bg-ink text-paper">
      <header className="grid-bg noise relative overflow-clip border-b border-line">
        <div className="pointer-events-none absolute -left-40 top-[-20%] h-[520px] w-[520px] rounded-full bg-gold/10 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-[-20%] right-[-8%] h-[480px] w-[480px] rounded-full bg-skyy/10 blur-[130px]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-16 md:pt-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              <span className="tape-gold inline-flex items-center gap-2 rounded-sm px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#161008]">
                <Gavel className="h-3.5 w-3.5" /> Manual de guerra
              </span>
              <span className="rounded-sm border border-line-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-fade">
                16 partes · 2 fases · 5 bancas
              </span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 max-w-4xl font-serif text-[12vw] font-black leading-[0.94] tracking-tight text-paper sm:text-6xl md:text-7xl">
              Escolha a <em className="not-italic text-gold-2">fase</em>
              <br />e entre na lei.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="just mt-6 max-w-3xl text-[15.5px] leading-relaxed text-paper/70">
              Duas frentes, o mesmo método.{" "}
              <span className="hl">Fase 1</span> — legislação <strong>penal</strong> extravagante
              (o tipo, a pena, o rol).{" "}
              <span className="text-skyy-2">Fase 2</span> — legislação <strong>processual penal</strong>{" "}
              extravagante (o prazo, a cautelar, o rito). Clique no card e o dossiê abre.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href="#fase-1"
                className="flex items-center gap-4 rounded-xl border border-gold/30 bg-gold/8 px-5 py-4 transition-colors hover:border-gold/60"
              >
                <Scale className="h-8 w-8 shrink-0 text-gold-2" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
                    Fase 1 · partes 01 a 10
                  </div>
                  <div className="font-serif text-xl font-bold text-paper">Penal extravagante</div>
                </div>
              </a>
              <a
                href="#fase-2"
                className="flex items-center gap-4 rounded-xl border border-skyy/30 bg-skyy/8 px-5 py-4 transition-colors hover:border-skyy/60"
              >
                <Shield className="h-8 w-8 shrink-0 text-skyy-2" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-skyy-2">
                    Fase 2 · partes 11 a 16
                  </div>
                  <div className="font-serif text-xl font-bold text-paper">Processual extravagante</div>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </header>

      <section id="fase-1" className="scroll-mt-8 border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
                  <Scale className="h-4 w-4" /> Fase 1
                </div>
                <h2 className="mt-3 font-serif text-4xl font-black text-paper md:text-5xl">
                  Leis <span className="text-gold-2">penais</span> extravagantes
                </h2>
                <p className="just mt-3 max-w-2xl text-[14px] leading-relaxed text-fade">
                  Do abuso ao dossiê de súmulas P1–P9: o que o agente pratica, a pena, o hediondo, o
                  JE que não entra na Maria.
                </p>
              </div>
              <span className="rounded-full border border-gold/35 bg-gold/10 px-4 py-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.16em] text-gold-2">
                10 partes
              </span>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fase1.map((c, i) => (
              <Reveal key={c.id} delay={i * 40}>
                <Card c={c} tom="gold" onAbrir={onAbrir} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="fase-2" className="scroll-mt-8">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-skyy-2">
                  <Shield className="h-4 w-4" /> Fase 2
                </div>
                <h2 className="mt-3 font-serif text-4xl font-black text-paper md:text-5xl">
                  Leis <span className="text-skyy-2">processuais</span> extravagantes
                </h2>
                <p className="just mt-3 max-w-2xl text-[14px] leading-relaxed text-fade">
                  Temporária, JECrim, interceptação, ORCRIM, o dossiê de súmulas e o quiz de 60
                  questões — prazo, rito e prova ilícita.
                </p>
              </div>
              <span className="rounded-full border border-skyy/35 bg-skyy/10 px-4 py-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.16em] text-skyy-2">
                6 partes
              </span>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fase2.map((c, i) => (
              <Reveal key={c.id} delay={i * 40}>
                <Card c={c} tom="skyy" onAbrir={onAbrir} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-ink-2/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
            <BookOpen className="h-4 w-4 text-gold" />
            Clique no card · o HTML único carrega a parte
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-faint">
            Cebraspe · FGV · FCC · Vunesp · AOCP
          </span>
        </div>
      </footer>
    </div>
  );
}
