import { CheckCircle2, ListOrdered, LockKeyhole } from "lucide-react";
import { trilha } from "../data/proximos";
import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";

/** A trilha completa das 14 partes — compartilhada entre os fechamentos */
export function Trilha({ prontas }: { prontas: number }) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-line bg-ink-2/40 p-7 md:p-9">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md border border-gold/40 bg-gold/10 text-gold-2">
              <ListOrdered className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-serif text-2xl font-bold text-paper">A trilha completa</h3>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-faint">
                16 partes · legislação penal extravagante
              </p>
            </div>
          </div>
          <span className="rounded-full border border-mint/40 bg-mint/10 px-4 py-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.16em] text-mint">
            {prontas === 1
              ? "Parte 01 · concluída"
              : `Partes 01–${String(prontas).padStart(2, "0")} · concluídas`}
          </span>
        </div>
        <div className="mt-7 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {trilha.map((p) => (
            <div
              key={p.n}
              className={cn(
                "flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors",
                p.status === "disponivel"
                  ? "border-mint/35 bg-mint/5"
                  : p.status === "parcial"
                    ? "border-gold/35 bg-gold/5"
                    : "border-line bg-ink-3/40",
              )}
            >
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-md font-mono text-[11px] font-bold",
                  p.status === "disponivel"
                    ? "bg-mint/15 text-mint"
                    : p.status === "parcial"
                      ? "bg-gold/15 text-gold-2"
                      : "bg-ink-2 text-faint",
                )}
              >
                {String(p.n).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "flex-1 text-[12.5px] leading-snug",
                  p.status === "disponivel" || p.status === "parcial"
                    ? "font-semibold text-paper"
                    : "text-fade",
                )}
              >
                {p.titulo}
              </span>
              {p.status === "disponivel" ? (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-mint" />
              ) : p.status === "parcial" ? (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-2" />
              ) : (
                <LockKeyhole className="h-3.5 w-3.5 shrink-0 text-faint" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
