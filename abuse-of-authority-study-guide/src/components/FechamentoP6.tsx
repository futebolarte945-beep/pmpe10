import {
  ArrowLeft,
  CheckCircle2,
  Flag,
  Gavel,
  Landmark,
  Leaf,
  Scale,
  Trophy,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Trilha } from "./Trilha";

const trio = [
  {
    icon: Leaf,
    titulo: "42 é balão; 40-A é cova",
    texto:
      "Flora: 38 aceita culpa (½), 39 não. UC de proteção integral = 40 (1–5). Incêndio 41. Motosserra é 51, não 42.",
    classe: "text-mint",
    borda: "border-mint/25",
  },
  {
    icon: Scale,
    titulo: "54 resulta ou pode",
    texto:
      "Poluição não é «só material». Culpa 6m–1a. 56 é perigo abstrato; nuclear só aumenta. 60 = chaminé sem papel (6m–2a, 2025).",
    classe: "text-gold-2",
    borda: "border-gold/25",
  },
  {
    icon: Landmark,
    titulo: "65 não é reclusão",
    texto:
      "Pichação em tombado: detenção 6m–1a. Grafite consentido atípico. 69-A (3–6) ganha do CP 299. 67 perdeu a culpa em 2025.",
    classe: "text-blood-2",
    borda: "border-blood/25",
  },
];

export function FechamentoP6({
  onVoltarParte5,
  onAbrirParte7,
}: {
  onVoltarParte5: () => void;
  onAbrirParte7: () => void;
}) {
  return (
    <section id="fechamento-p6" className="scroll-mt-24 border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-20 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold/60" />
            Síntese tática · Parte 06 encerrada
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight text-paper md:text-5xl">
            Da PJ à flora, da poluição <span className="text-gold-2">ao</span> laudo falso
          </h2>
          <p className="just mt-4 text-[15px] leading-relaxed text-fade">
            Sete blocos: disposições gerais, penas, fauna, flora, poluição, patrimônio e
            administração ambiental. Ação penal: pública incondicionada do primeiro ao
            último tipo (art. 26).
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
                Parte 06 · concluída
              </span>
            </div>
            <h2 className="relative mt-6 max-w-3xl font-serif text-4xl font-black leading-[1.05] text-paper md:text-6xl">
              Missão cumprida:
              <br />
              <span className="text-gold-2">a Lei 9.605 é sua.</span>
            </h2>
            <p className="just relative mt-6 text-[15px] leading-relaxed text-paper/75">
              Sete blocos, da PJ no banco ao 69-A. Do{" "}
              <span className="hl">«42 é balão»</span> ao{" "}
              <span className="hl">«65 tombado é detenção»</span> e ao{" "}
              <span className="hl">«69-A é 3 a 6»</span> — você responde a lei ambiental
              no tamanho que a banca cobra, já com 14.064, 14.944, 15.150, 15.190, 15.299
              e 15.355.
            </p>
            <div className="relative mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onVoltarParte5}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-line-2 bg-ink-2/70 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-paper/85 transition-colors hover:border-gold/50 hover:text-gold-2"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Revisar Parte 05 — Lei de Tortura
              </button>
              <button
                type="button"
                onClick={onAbrirParte7}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-gold/40 bg-gold/10 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-gold-2 transition-colors hover:bg-gold/20"
              >
                <Flag className="h-4 w-4" />
                Abrir Parte 07 — Estatuto do Desarmamento
              </button>
            </div>
          </div>
        </Reveal>

        <Trilha prontas={6} />

        <Reveal>
          <footer className="rounded-xl border border-line bg-ink-3/50 px-6 py-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Gavel className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="just max-w-3xl text-[12px] leading-relaxed text-faint">
                  Material didático. Lei nº 9.605/1998 conforme o Planalto, com as Leis
                  9.985/2000, 11.284/2006, 11.428/2006, 12.305/2010, 12.408/2011,
                  14.064/2020, 14.944/2024, 15.150/2025, 15.190/2025, 15.299/2025 e
                  15.355/2026. Dupla imputação: STF RE 548.181. Confira a redação vigente
                  na véspera da prova.
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
