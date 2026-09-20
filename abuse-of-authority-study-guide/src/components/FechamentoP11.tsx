import {
  ArrowLeft,
  CheckCircle2,
  Flag,
  Gavel,
  Clock,
  Scale,
  ShieldOff,
  Trophy,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Trilha } from "./Trilha";

const trio = [
  {
    icon: Scale,
    titulo: "I + III · II não prende",
    texto:
      "ADIs 3.360 e 4.109: cinco filtros. Sem analogia no rol. Sem prisão para averiguações. Só inquérito.",
    classe: "text-gold-2",
    borda: "border-gold/25",
  },
  {
    icon: Clock,
    titulo: "5+5 · 30+30 na 8.072",
    texto:
      "O art. 3º é cela, não prazo. Dia da captura entra. Acabou o mandado, a porta abre sem alvará novo.",
    classe: "text-mint",
    borda: "border-mint/25",
  },
  {
    icon: ShieldOff,
    titulo: "Juiz não decreta de ofício",
    texto:
      "Delegado representa, MP requer, vítima não pede. O § 3º é para ver o preso, não para inventar a prisão.",
    classe: "text-blood-2",
    borda: "border-blood/25",
  },
];

export function FechamentoP11({
  onVoltarParte10,
  onAbrirParte12,
}: {
  onVoltarParte10: () => void;
  onAbrirParte12: () => void;
}) {
  return (
    <section id="fechamento-p11" className="scroll-mt-24 border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-20 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold/60" />
            Síntese tática · Parte 11 · Fase 2
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight text-paper md:text-5xl">
            Temporária: relógio, rol <span className="text-gold-2">&</span> pedido
          </h2>
          <p className="just mt-4 text-[15px] leading-relaxed text-fade">
            Quatro blocos da primeira lei da Fase 2 (processual extravagante). A 7.960 cabe
            nesta ordem — e nos erros que o roteiro ainda imprime (II indispensável, art. 3º
            como prazo, art. 8º inexistente).
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {trio.map((t, i) => (
            <Reveal key={t.titulo} delay={i * 90}>
              <div className={`h-full rounded-xl border bg-ink-2/60 p-6 ${t.borda}`}>
                <t.icon className={`h-5 w-5 ${t.classe}`} strokeWidth={2.1} />
                <h3 className="mt-3.5 font-serif text-xl font-bold text-paper">{t.titulo}</h3>
                <p className="just mt-2 text-[13px] leading-relaxed text-fade">{t.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="noise relative overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-ink-2 via-ink-2 to-gold/10 p-8 md:p-12">
            <Trophy
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 text-gold/[0.06]"
              strokeWidth={1}
            />
            <div className="relative flex items-center gap-3">
              <span className="tape-gold flex h-11 w-11 items-center justify-center rounded-md text-[#161008]">
                <CheckCircle2 className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
                Parte 11 · Fase 2 · concluída
              </span>
            </div>
            <h2 className="relative mt-6 max-w-3xl font-serif text-4xl font-black leading-[1.05] text-paper md:text-6xl">
              Missão cumprida:
              <br />
              <span className="text-gold-2">a temporária é sua.</span>
            </h2>
            <p className="just relative mt-6 text-[15px] leading-relaxed text-paper/75">
              Do{" "}
              <span className="hl">«I+III, II não prende»</span> ao{" "}
              <span className="hl">«30+30 na 8.072, não no art. 3º»</span> e ao{" "}
              <span className="hl">«juiz não decreta de ofício»</span> — você responde a
              7.960 no tamanho das ADIs 3.360 e 4.109.
            </p>
            <div className="relative mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onVoltarParte10}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-line-2 bg-ink-2/70 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-paper/85 transition-colors hover:border-gold/50 hover:text-gold-2"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Revisar Parte 10 — Súmulas
              </button>
              <button
                type="button"
                onClick={onAbrirParte12}
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-gold/40 bg-gold/10 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-gold-2 transition-colors hover:border-gold hover:bg-gold/20"
              >
                <Flag className="h-4 w-4" />
                Abrir Parte 12 — JECrim
              </button>
            </div>
          </div>
        </Reveal>

        <Trilha prontas={11} />

        <Reveal>
          <footer className="rounded-xl border border-line bg-ink-3/50 px-6 py-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Gavel className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="just max-w-3xl text-[12px] leading-relaxed text-faint">
                  Material didático. Lei nº 7.960/1989 conforme o Planalto, com a Lei
                  13.260/2016 (alíneas p), a Lei 13.869/2019 (§§ 4º-A, 7º e 8º) e a Lei
                  8.072/1990, art. 2º, § 4º. STF: ADI 3.360 e ADI 4.109 (2022). A lei tem
                  sete artigos. Confira a tese vigente na véspera da prova.
                </p>
              </div>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.24em] text-faint">
                Prof. · Processual Extravagante
              </span>
            </div>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
