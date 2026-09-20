import { useState } from "react";
import { AlertTriangle, CheckCircle2, Lightbulb, XCircle } from "lucide-react";
import type { Letra, QuestaoQuiz } from "../data/tipos";
import { Reveal, rich } from "./Reveal";
import { cn } from "../utils/cn";

const LETRAS: Letra[] = ["A", "B", "C", "D", "E"];

function QuestaoCard({ q }: { q: QuestaoQuiz }) {
  const [marc, setMarc] = useState<Letra | null>(null);
  const [aberta, setAberta] = useState(false);
  const revelou = aberta || marc !== null;

  return (
    <article id={`q${String(q.n).padStart(2, "0")}`} className="scroll-mt-28">
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-line bg-ink-2/40">
          <div className="border-b border-line/80 px-6 py-5 md:px-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-gold px-2.5 py-1 font-mono text-[11px] font-bold text-[#161008]">
                Q{String(q.n).padStart(2, "0")}
              </span>
              <span className="rounded-md border border-line-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-faint">
                {q.banca}
              </span>
              <span className="rounded-md border border-line-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-faint">
                {q.nivel}
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-gold-2">
                {q.lei}
              </span>
            </div>
            <p className="just mt-4 text-[15px] leading-relaxed text-paper md:text-[16px]">
              {rich(q.enunciado)}
            </p>
          </div>
          <div className="space-y-2 px-6 py-5 md:px-8">
            {LETRAS.map((L, i) => {
              const certa = L === q.gabarito;
              const escolheu = marc === L;
              return (
                <button
                  key={L}
                  type="button"
                  onClick={() => {
                    if (marc) return;
                    setMarc(L);
                    setAberta(true);
                  }}
                  className={cn(
                    "flex w-full cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-left transition-colors",
                    !revelou && "border-line hover:border-gold/40",
                    revelou && certa && "border-mint/50 bg-mint/10",
                    revelou && escolheu && !certa && "border-blood/40 bg-blood/10",
                    revelou && !certa && !escolheu && "border-line/60 opacity-70",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md font-mono text-[12px] font-bold",
                      revelou && certa
                        ? "bg-mint text-[#0b1c16]"
                        : revelou && escolheu
                          ? "bg-blood text-paper"
                          : "bg-ink-3 text-gold-2",
                    )}
                  >
                    {L}
                  </span>
                  <span className="just min-w-0 flex-1 text-[13.5px] leading-relaxed text-paper/90">
                    {q.alternativas[i]}
                  </span>
                  {revelou && certa && <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-mint" />}
                  {revelou && escolheu && !certa && (
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-blood-2" />
                  )}
                </button>
              );
            })}
          </div>
          {!revelou && (
            <div className="px-6 pb-5 md:px-8">
              <button
                type="button"
                onClick={() => setAberta(true)}
                className="cursor-pointer font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-gold-2 hover:text-gold"
              >
                Ver gabarito sem responder
              </button>
            </div>
          )}
          {revelou && (
            <div className="space-y-3 border-t border-line px-6 py-5 md:px-8">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-mint">
                Gabarito · {q.gabarito}
                {marc && marc !== q.gabarito ? ` · você marcou ${marc}` : marc ? " · acertou" : ""}
              </p>
              <div className="flex gap-2.5">
                <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-gold-2" />
                <p className="just text-[13.5px] leading-relaxed text-paper/80">{rich(q.comentario)}</p>
              </div>
              {q.pegadinha && (
                <div className="flex gap-2.5 rounded-lg border border-blood/25 bg-blood/5 px-4 py-3">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-blood-2" />
                  <p className="just text-[13px] leading-relaxed text-paper/75">{rich(q.pegadinha)}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </Reveal>
    </article>
  );
}

export function QuizLista({ questoes }: { questoes: QuestaoQuiz[] }) {
  return (
    <div className="space-y-8">
      {questoes.map((q) => (
        <QuestaoCard key={q.n} q={q} />
      ))}
    </div>
  );
}
