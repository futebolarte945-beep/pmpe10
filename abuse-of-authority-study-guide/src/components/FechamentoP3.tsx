import {
  ArrowLeft,
  CheckCircle2,
  Flag,
  Gavel,
  Lock,
  Scale,
  Trophy,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Trilha } from "./Trilha";

const trio = [
  {
    icon: Lock,
    titulo: "Rol taxativo",
    texto:
      "Hediondo não se presume. Ou está no art. 1º (incisos ou parágrafo único), ou é um dos 3T da CF (tortura, tráfico, terrorismo). Analogia in malam partem é suicídio em prova.",
    classe: "text-gold-2",
    borda: "border-gold/25",
  },
  {
    icon: Scale,
    titulo: "Data do fato",
    texto:
      "Progressão: 2/5–3/5 até 2019; 40-50-60-70 no Anticrime; 70-75-80-85 a partir de 24/03/2026. Lei nova mais grave não retroage. Livramento: 2/3, e o específico fica sem.",
    classe: "text-blood-2",
    borda: "border-blood/25",
  },
  {
    icon: Gavel,
    titulo: "30+30 ≠ art. 3º",
    texto:
      "Temporária dos hediondos: art. 2º, § 4º (30+30). Art. 3º é penitenciária federal. Art. 9º é fantasma (morreu com o 224). Art. 8º: associação 3 a 6.",
    classe: "text-skyy-2",
    borda: "border-skyy/25",
  },
];

export function FechamentoP3({
  onVoltarParte2,
  onAbrirParte4,
}: {
  onVoltarParte2: () => void;
  onAbrirParte4: () => void;
}) {
  return (
    <section id="fechamento-p3" className="scroll-mt-24 border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-20 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold/60" />
            Síntese tática · Parte 03 encerrada
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight text-paper md:text-5xl">
            Lista, fração <span className="text-gold-2">&</span> relógio
          </h2>
          <p className="just mt-4 text-[15px] leading-relaxed text-fade">
            Três reflexos decidem a prova da Lei 8.072: o que está no rol, qual
            percentual a data do crime autoriza, e onde mora o prazo da temporária.
            O resto é comentário.
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
                Parte 03 · concluída
              </span>
            </div>
            <h2 className="relative mt-6 max-w-3xl font-serif text-4xl font-black leading-[1.05] text-paper md:text-6xl">
              Missão cumprida:
              <br />
              <span className="text-gold-2">a Lei dos Hediondos é sua.</span>
            </h2>
            <p className="just relative mt-6 text-[15px] leading-relaxed text-paper/75">
              Quatro blocos, o rol até o vicaricídio e o domínio social estruturado, o
              funeral do 2/5–3/5, a temporária 30+30 no endereço certo e o art. 9º
              declarado fantasma. Do{" "}
              <span className="hl">«lista, não feeling»</span> à trinca{" "}
              <span className="hl">70-75-80-85</span> — você responde a Lei 8.072 no
              texto que cai hoje, não no recorte de 1990.
            </p>
            <div className="relative mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onVoltarParte2}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-line-2 bg-ink-2/70 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-paper/85 transition-colors hover:border-gold/50 hover:text-gold-2"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Revisar Parte 02 — Lei do Racismo
              </button>
              <button
                type="button"
                onClick={onAbrirParte4}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-gold/40 bg-gold/10 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-gold-2 transition-colors hover:bg-gold/20"
              >
                <Flag className="h-4 w-4" />
                Abrir Parte 04 — Crimes de Trânsito (Lei 9.503/1997)
              </button>
            </div>
          </div>
        </Reveal>

        <Trilha prontas={3} />

        <Reveal>
          <footer className="rounded-xl border border-line bg-ink-3/50 px-6 py-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Gavel className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="just max-w-3xl text-[12px] leading-relaxed text-faint">
                  Material didático. Texto da Lei nº 8.072/1990 conforme compilação do
                  Planalto, com alterações até as Leis nº 15.358/2026 (Marco Antifacção),
                  15.384/2026 (vicaricídio) e 15.487/2026 (ECA). Progressão: art. 112 da
                  LEP — a data do fato escolhe o percentual. Confira a redação vigente na
                  véspera da prova.
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
