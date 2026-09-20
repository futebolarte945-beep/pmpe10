import { Brain, Table2 } from "lucide-react";
import type { QuadroPenal } from "../data/tipos";
import { Reveal, rich } from "./Reveal";

export function QuadroPenas({ dados }: { dados: QuadroPenal }) {
  return (
    <section id={dados.id} className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-2/50 p-7 md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-8 select-none font-serif text-[130px] font-black leading-none text-paper/[0.03]"
            >
              §
            </div>
            <div className="relative flex flex-wrap items-center gap-3">
              <span className="tape-gold inline-flex items-center gap-2 rounded-sm px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#161008]">
                <Table2 className="h-3.5 w-3.5" />
                {dados.selo}
              </span>
            </div>
            <h2 className="relative mt-5 max-w-3xl font-serif text-3xl font-black leading-tight text-paper md:text-[40px]">
              {dados.titulo}
            </h2>
            <p className="just relative mt-4 text-[15px] leading-relaxed text-paper/70">
              {dados.intro}
            </p>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line">
            <div
              className="hidden bg-ink-3/60 md:grid md:grid-cols-[0.85fr_1.9fr_1.15fr_1.1fr]"
              aria-hidden
            >
              {[
                ["Dispositivo", "text-gold"],
                ["Conduta", "text-faint"],
                ["Pena", "text-blood-2"],
                ["Observação", "text-faint"],
              ].map(([t, c], i) => (
                <div
                  key={t}
                  className={`border-b border-line px-5 py-4 font-mono text-[10.5px] uppercase tracking-[0.22em] ${c} ${
                    i > 0 ? "md:border-l md:border-line" : ""
                  }`}
                >
                  {t}
                </div>
              ))}
            </div>

            {dados.linhas.map((l, i) => (
              <div
                key={l.ref}
                className={`grid grid-cols-1 md:grid-cols-[0.85fr_1.9fr_1.15fr_1.1fr] ${
                  i % 2 === 0 ? "bg-ink-2/40" : "bg-ink-2/20"
                }`}
              >
                <div className="border-b border-line/70 px-5 pt-4 pb-1 font-mono text-[11.5px] font-bold tracking-wide text-gold-2 md:border-b-0 md:border-r md:border-line/70 md:py-4">
                  {l.ref}
                </div>
                <div className="just border-b border-line/70 px-5 py-2 text-[13px] leading-relaxed text-paper/80 md:border-b-0 md:border-r md:border-line/70 md:py-4">
                  {l.conduta}
                </div>
                <div className="just border-b border-line/70 px-5 py-2 text-[13px] leading-relaxed md:border-b-0 md:border-r md:border-line/70 md:py-4">
                  {rich(l.pena)}
                </div>
                <div className="just px-5 py-2 pb-4 text-[12px] leading-relaxed text-fade md:py-4 md:pb-2">
                  {l.obs}
                </div>
              </div>
            ))}

            <div className="flex items-start gap-3 border-t border-line bg-gold/5 px-5 py-4 md:px-6">
              <Brain className="mt-0.5 h-4 w-4 shrink-0 text-gold-2" />
              <p className="just text-[13.5px] leading-relaxed text-paper/80">
                <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold-2">
                  Macete do professor —{" "}
                </span>
                {rich(dados.macete)}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
