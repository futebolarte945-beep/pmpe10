import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Gavel,
  Landmark,
  Scale,
  ScrollText,
  Trophy,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Trilha } from "./Trilha";

const trio = [
  {
    icon: Landmark,
    titulo: "ADC 19 · 4.424 · 154.248",
    texto:
      "LMP constitucional; lesão incondicionada. Injúria racial veste a capa do racismo. PJ ambiental senta sozinha (548.181 / 39.173).",
    classe: "text-gold-2",
    borda: "border-gold/25",
  },
  {
    icon: Scale,
    titulo: "118.533 · 440 · 471",
    texto:
      "Privilegiado não é hediondo (512 morreu). Mínimo na base não fecha o regime. Fato velho progride com 1/6.",
    classe: "text-mint",
    borda: "border-mint/25",
  },
  {
    icon: ScrollText,
    titulo: "587 não é a 600",
    texto:
      "587 = intenção interestadual. 600 = LMP sem coabitação. 522 é STF e é país. 635.659 já foi julgado.",
    classe: "text-blood-2",
    borda: "border-blood/25",
  },
];

export function FechamentoP10({
  onVoltarParte9,
  onAbrirParte11,
}: {
  onVoltarParte9: () => void;
  onAbrirParte11: () => void;
}) {
  return (
    <section id="fechamento-p10" className="scroll-mt-24 border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-20 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold/60" />
            Síntese tática · Parte 10 encerrada
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight text-paper md:text-5xl">
            Súmulas, teses <span className="text-gold-2">&</span> os números certos
          </h2>
          <p className="just mt-4 text-[15px] leading-relaxed text-fade">
            Seis blocos: abuso/racismo, hediondos, trânsito/tortura, ambiental/armas, LMP e
            drogas. O dossiê fecha as Partes 01 a 09 no que a banca cobra como enunciado.
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
                Parte 10 · concluída
              </span>
            </div>
            <h2 className="relative mt-6 max-w-3xl font-serif text-4xl font-black leading-[1.05] text-paper md:text-6xl">
              Missão cumprida:
              <br />
              <span className="text-gold-2">os enunciados são seus.</span>
            </h2>
            <p className="just relative mt-6 text-[15px] leading-relaxed text-paper/75">
              Do{" "}
              <span className="hl">«154.248 veste a injúria»</span> ao{" "}
              <span className="hl">«512 é lápide»</span> e ao{" "}
              <span className="hl">«587 não é a 600»</span> — você responde o dossiê no
              tamanho da banca, sem o roteiro invertido.
            </p>
            <div className="relative mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onVoltarParte9}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-line-2 bg-ink-2/70 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-paper/85 transition-colors hover:border-gold/50 hover:text-gold-2"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Revisar Parte 09 — Lei de Drogas
              </button>
              <button
                type="button"
                onClick={onAbrirParte11}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md bg-gold px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#161008] transition-colors hover:bg-gold-2"
              >
                Abrir Parte 11 — Prisão Temporária
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </Reveal>

        <Trilha prontas={10} />

        <Reveal>
          <footer className="rounded-xl border border-line bg-ink-3/50 px-6 py-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Gavel className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="just max-w-3xl text-[12px] leading-relaxed text-faint">
                  Material didático. Enunciados conforme STF/STJ (súmulas 440, 471, 501,
                  512 cancelada, 522/STF, 536, 542, 587, 588, 589, 600, 668). Paradigmas:
                  HC 82.959, 118.533, 154.248; ADC 19; ADI 4.424; RE 430.105, 548.181,
                  635.659; RMS 39.173. Confira a vigência na véspera da prova.
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
