import {
  ArrowLeft,
  CheckCircle2,
  Flag,
  Gavel,
  Gauge,
  Lock,
  Trophy,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Trilha } from "./Trilha";

const trio = [
  {
    icon: Gauge,
    titulo: "6 e 0,3",
    texto:
      "Crime 306 = 6 dg/L de sangue ou 0,3 mg/L de ar — ou sinais. Abaixo disso, infração 165. Recusar o bafômetro é 165-A, não 306. Vídeo e testemunha valem.",
    classe: "text-gold-2",
    borda: "border-gold/25",
  },
  {
    icon: Lock,
    titulo: "291 não aumenta",
    texto:
      "O § 1º do 291 só trava o JECRIM na lesão culposa (álcool, racha, +50 km/h). Majorante de verdade = 302 § 1º (HACNP). Qualificadora da Lei Seca = 5 a 8 / 2 a 5.",
    classe: "text-blood-2",
    borda: "border-blood/25",
  },
  {
    icon: Gavel,
    titulo: "310 ≠ 311 ≠ 312",
    texto:
      "310 entrega o volante (Súm. 575). 311 é velocidade na escola. 312 fraudar a cena — jamais licitação. 312-B cadeado no art. 44, I, quando o álcool sangra.",
    classe: "text-skyy-2",
    borda: "border-skyy/25",
  },
];

export function FechamentoP4({
  onVoltarParte3,
  onAbrirParte5,
}: {
  onVoltarParte3: () => void;
  onAbrirParte5: () => void;
}) {
  return (
    <section id="fechamento-p4" className="scroll-mt-24 border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-20 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold/60" />
            Síntese tática · Parte 04 encerrada
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight text-paper md:text-5xl">
            Lei Seca, rito <span className="text-gold-2">&</span> volante
          </h2>
          <p className="just mt-4 text-[15px] leading-relaxed text-fade">
            Três reflexos: o número do etilômetro, o endereço certo da majorante e o nome
            certo de cada artigo curto. O resto é comentário de blitze.
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
                Parte 04 · concluída
              </span>
            </div>
            <h2 className="relative mt-6 max-w-3xl font-serif text-4xl font-black leading-[1.05] text-paper md:text-6xl">
              Missão cumprida:
              <br />
              <span className="text-gold-2">o Capítulo XIX é seu.</span>
            </h2>
            <p className="just relative mt-6 text-[15px] leading-relaxed text-paper/75">
              Três blocos, do art. 291 ao 312-B: o JECRIM seletivo, o HACNP, a
              qualificadora de 5 a 8, a Súmula 575, o 6 e o 0,3, o dolo eventual que a
              banca quer transformar em automático — e não é. Do{" "}
              <span className="hl">«291 não aumenta»</span> ao cadeado do{" "}
              <span className="hl">312-B</span>, o CTB penal deixa de ser decoreba de
              blitze.
            </p>
            <div className="relative mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onVoltarParte3}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-line-2 bg-ink-2/70 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-paper/85 transition-colors hover:border-gold/50 hover:text-gold-2"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Revisar Parte 03 — Crimes Hediondos
              </button>
              <button
                type="button"
                onClick={onAbrirParte5}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-gold/40 bg-gold/10 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-gold-2 transition-colors hover:bg-gold/20"
              >
                <Flag className="h-4 w-4" />
                Abrir Parte 05 — Lei de Tortura (Lei 9.455/1997)
              </button>
            </div>
          </div>
        </Reveal>

        <Trilha prontas={4} />

        <Reveal>
          <footer className="rounded-xl border border-line bg-ink-3/50 px-6 py-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Gavel className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="just max-w-3xl text-[12px] leading-relaxed text-faint">
                  Material didático. Capítulo XIX da Lei nº 9.503/1997 conforme compilação
                  do Planalto, com alterações até as Leis nº 14.071/2020, 14.599/2023 e
                  13.546/2017. Súmula 575/STJ e o debate dolo eventual × culpa consciente
                  conforme a jurisprudência dominante em prova. Confira a redação vigente
                  na véspera.
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
