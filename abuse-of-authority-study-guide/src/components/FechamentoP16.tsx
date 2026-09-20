import { ArrowLeft, CheckCircle2, Flag, Gavel, Trophy } from "lucide-react";
import { Reveal } from "./Reveal";
import { Trilha } from "./Trilha";

const GAB: { n: string; g: string }[] = [
  { n: "01", g: "B" }, { n: "02", g: "C" }, { n: "03", g: "D" }, { n: "04", g: "B" }, { n: "05", g: "C" },
  { n: "06", g: "C" }, { n: "07", g: "C" }, { n: "08", g: "C" }, { n: "09", g: "C" }, { n: "10", g: "B" },
  { n: "11", g: "B" }, { n: "12", g: "B" }, { n: "13", g: "B" }, { n: "14", g: "C" }, { n: "15", g: "B" },
  { n: "16", g: "B" }, { n: "17", g: "B" }, { n: "18", g: "C" }, { n: "19", g: "B" }, { n: "20", g: "C" },
  { n: "21", g: "B" }, { n: "22", g: "B" }, { n: "23", g: "B" }, { n: "24", g: "C" }, { n: "25", g: "B" },
  { n: "26", g: "B" }, { n: "27", g: "B" }, { n: "28", g: "C" }, { n: "29", g: "B" }, { n: "30", g: "D" },
  { n: "31", g: "B" }, { n: "32", g: "B" }, { n: "33", g: "C" }, { n: "34", g: "B" }, { n: "35", g: "B" },
  { n: "36", g: "B" }, { n: "37", g: "B" }, { n: "38", g: "C" }, { n: "39", g: "B" }, { n: "40", g: "B" },
  { n: "41", g: "B" }, { n: "42", g: "B" }, { n: "43", g: "B" }, { n: "44", g: "B" }, { n: "45", g: "C" },
  { n: "46", g: "C" }, { n: "47", g: "B" }, { n: "48", g: "C" }, { n: "49", g: "C" }, { n: "50", g: "B" },
  { n: "51", g: "B" }, { n: "52", g: "B" }, { n: "53", g: "B" }, { n: "54", g: "B" }, { n: "55", g: "B" },
  { n: "56", g: "B" }, { n: "57", g: "B" }, { n: "58", g: "B" }, { n: "59", g: "B" }, { n: "60", g: "C" },
];

const faixas = [
  { t: "0 a 30", s: "Releia P1–P15. Os erros do roteiro ainda estão ganhando." },
  { t: "31 a 45", s: "Base ok. Volte nas súmulas 243/536/696 e no I+III." },
  { t: "46 a 55", s: "Pronto para banca. Feche 661, 720 e o 35=2." },
  { t: "56 a 60", s: "Guerra ganha. Só não ensine o erro na véspera." },
];

export function FechamentoP16({ onVoltarParte15 }: { onVoltarParte15: () => void }) {
  return (
    <section id="fechamento-p16" className="scroll-mt-24 border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-20 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold/60" />
            Gabarito rápido · Parte 16 · 60 objetivas
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight text-paper md:text-5xl">
            Chave de correção <span className="text-gold-2">A–E</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
            {GAB.map((x) => (
              <div
                key={x.n}
                className="flex flex-col items-center rounded-lg border border-line bg-ink-2/60 py-2"
              >
                <span className="font-mono text-[9px] uppercase tracking-wider text-faint">Q{x.n}</span>
                <span className="font-serif text-lg font-black text-gold-2">{x.g}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {faixas.map((f) => (
            <Reveal key={f.t}>
              <div className="h-full rounded-xl border border-line bg-ink-2/60 p-5">
                <div className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-gold-2">
                  {f.t} acertos
                </div>
                <p className="just mt-2 text-[13px] leading-relaxed text-fade">{f.s}</p>
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
                Parte 16 · quiz · última da Fase 2
              </span>
            </div>
            <h2 className="relative mt-6 max-w-3xl font-serif text-4xl font-black leading-[1.05] text-paper md:text-6xl">
              Missão cumprida:
              <br />
              <span className="text-gold-2">as 16 partes estão no ar.</span>
            </h2>
            <div className="relative mt-7">
              <button
                type="button"
                onClick={onVoltarParte15}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-line-2 bg-ink-2/70 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-paper/85 transition-colors hover:border-gold/50 hover:text-gold-2"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Revisar Parte 15 — súmulas
              </button>
            </div>
          </div>
        </Reveal>

        <Trilha prontas={16} />

        <Reveal>
          <footer className="rounded-xl border border-line bg-ink-3/50 px-6 py-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Gavel className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="just max-w-3xl text-[12px] leading-relaxed text-faint">
                  Quiz didático. Gabaritos alinhados ao manual (não ao roteiro errado). Confira a lei
                  na véspera.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-faint">
                <Flag className="h-3 w-3" /> Fase 2 · encerrada
              </span>
            </div>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
