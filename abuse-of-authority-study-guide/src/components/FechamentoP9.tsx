import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Gavel,
  Pill,
  Scale,
  ScrollText,
  Trophy,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Trilha } from "./Trilha";

const trio = [
  {
    icon: Pill,
    titulo: "28 não prende · 33 prende 5 a 15",
    texto:
      "JECRIM, TCO, 5 meses no relógio (10 se reincidente). Recusa ≠ cadeia (430.105). Maconha uso: 635.659. 18 verbos, ainda que de graça.",
    classe: "text-gold-2",
    borda: "border-gold/25",
  },
  {
    icon: Scale,
    titulo: "§ 4º não é hediondo · 512 morreu",
    texto:
      "HC 118.533. 35 pede 2. 36 é 8 a 20. 41 só reduz (identificar e recuperar). 44: fiança trava; LP o STF devolveu ao 312.",
    classe: "text-mint",
    borda: "border-mint/25",
  },
  {
    icon: ScrollText,
    titulo: "587 é intenção · 522 é país",
    texto:
      "587 = 40, V sem cruzar a divisa. 522/STF = Federal só no exterior. 501 = não misture 6.368 com 11.343. Disfarçado = 33, § 1º, IV.",
    classe: "text-blood-2",
    borda: "border-blood/25",
  },
];

export function FechamentoP9({
  onVoltarParte8,
  onAbrirParte10,
}: {
  onVoltarParte8: () => void;
  onAbrirParte10: () => void;
}) {
  return (
    <section id="fechamento-p9" className="scroll-mt-24 border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-20 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold/60" />
            Síntese tática · Parte 09 encerrada
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight text-paper md:text-5xl">
            Sisnad, 18 verbos <span className="text-gold-2">&</span> o rito
          </h2>
          <p className="just mt-4 text-[15px] leading-relaxed text-fade">
            Seis blocos: o sistema e a lista; o núcleo 28/33–40; o 28 no Juizado; ação
            penal, laudo e art. 44; a delação do 41; súmulas e teses. A 11.343 cabe nesta
            ordem — e nos erros que a banca ainda imprime.
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
                Parte 09 · concluída
              </span>
            </div>
            <h2 className="relative mt-6 max-w-3xl font-serif text-4xl font-black leading-[1.05] text-paper md:text-6xl">
              Missão cumprida:
              <br />
              <span className="text-gold-2">a Lei de Drogas é sua.</span>
            </h2>
            <p className="just relative mt-6 text-[15px] leading-relaxed text-paper/75">
              Do{" "}
              <span className="hl">«sem lista, sem crime»</span> ao{" "}
              <span className="hl">«512 cancelada»</span> e ao{" "}
              <span className="hl">«LP do 44 o STF riscou»</span> — você responde a 11.343
              no tamanho da banca, já com o RE 635.659 e sem os números trocados do
              roteiro.
            </p>
            <div className="relative mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onVoltarParte8}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-line-2 bg-ink-2/70 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-paper/85 transition-colors hover:border-gold/50 hover:text-gold-2"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Revisar Parte 08 — Maria da Penha
              </button>
              <button
                type="button"
                onClick={onAbrirParte10}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md bg-gold px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#161008] transition-colors hover:bg-gold-2"
              >
                Abrir Parte 10 — Súmulas e teses
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </Reveal>

        <Trilha prontas={9} />

        <Reveal>
          <footer className="rounded-xl border border-line bg-ink-3/50 px-6 py-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Gavel className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="just max-w-3xl text-[12px] leading-relaxed text-faint">
                  Material didático. Lei nº 11.343/2006 conforme o Planalto, com as Leis
                  12.961/2014, 13.840/2019, 13.964/2019 e 15.358/2026 (art. 40-A). STF: HC
                  104.339 e RE 1.038.925 (LP), HC 118.533 (privilegiado), RE 430.105 e RE
                  635.659. STJ: súmulas 501, 512 (cancelada) e 587. Súmula 522/STF.
                  Confira a redação e a tese vigentes na véspera da prova.
                </p>
              </div>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.24em] text-faint">
                Prof. · Penal Extravagante
              </span>
            </div>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
