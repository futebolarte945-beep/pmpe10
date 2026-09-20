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
    icon: Scale,
    titulo: "Comum, não farda",
    texto:
      "Inciso I: qualquer um. Inciso II: quem tem guarda, poder ou autoridade — ainda assim sem exigir agente público. A farda só aumenta (1/6 a 1/3).",
    classe: "text-gold-2",
    borda: "border-gold/25",
  },
  {
    icon: Lock,
    titulo: "Omissão ≠ torturador",
    texto:
      "§ 2º: detenção 1 a 4, e o § 7º não puxa o fechado. «Equipara-se ao torturador» é a isca. Perda do cargo é automática (§ 5º) — no abuso, não.",
    classe: "text-blood-2",
    borda: "border-blood/25",
  },
  {
    icon: Gavel,
    titulo: "Quatro artigos",
    texto:
      "Não há arts. 5º a 9º. Morte = 8 a 16 (não 4 a 12). Extradição não está aqui. Equiparada (XLIII), não «hedionda do art. 1º da 8.072».",
    classe: "text-skyy-2",
    borda: "border-skyy/25",
  },
];

export function FechamentoP5({
  onVoltarParte4,
  onAbrirParte6,
}: {
  onVoltarParte4: () => void;
  onAbrirParte6: () => void;
}) {
  return (
    <section id="fechamento-p5" className="scroll-mt-24 border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-20 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold/60" />
            Síntese tática · Parte 05 encerrada
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight text-paper md:text-5xl">
            Dor, distintivo <span className="text-gold-2">&</span> quatro artigos
          </h2>
          <p className="just mt-4 text-[15px] leading-relaxed text-fade">
            Três reflexos: quem pode praticar, o que a omissão realmente paga, e o tamanho
            real da lei. O comparativo com abuso e maus-tratos fecha a conta.
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
                Parte 05 · concluída
              </span>
            </div>
            <h2 className="relative mt-6 max-w-3xl font-serif text-4xl font-black leading-[1.05] text-paper md:text-6xl">
              Missão cumprida:
              <br />
              <span className="text-gold-2">a Lei de Tortura é sua.</span>
            </h2>
            <p className="just relative mt-6 text-[15px] leading-relaxed text-paper/75">
              Três blocos, quatro artigos, o PIC do inciso I, o castigo do II, a doméstica
              reiterada de 2026, a omissão que não se equipara, o 8 a 16 da morte e o
              art. 2º que exporta a lei. Do{" "}
              <span className="hl">«comum no I, próprio no II»</span> ao{" "}
              <span className="hl">«não existe art. 9º»</span> — você responde a 9.455 no
              tamanho que ela tem.
            </p>
            <div className="relative mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onVoltarParte4}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-line-2 bg-ink-2/70 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-paper/85 transition-colors hover:border-gold/50 hover:text-gold-2"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Revisar Parte 04 — Crimes de Trânsito
              </button>
              <button
                type="button"
                onClick={onAbrirParte6}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-gold/40 bg-gold/10 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-gold-2 transition-colors hover:bg-gold/20"
              >
                <Flag className="h-4 w-4" />
                Abrir Parte 06 — Crimes Ambientais (Lei 9.605/1998)
              </button>
            </div>
          </div>
        </Reveal>

        <Trilha prontas={5} />

        <Reveal>
          <footer className="rounded-xl border border-line bg-ink-3/50 px-6 py-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Gavel className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="just max-w-3xl text-[12px] leading-relaxed text-faint">
                  Material didático. Lei nº 9.455/1997 conforme o Planalto, com o inciso
                  III do art. 1º (Lei nº 15.410/2026) e a majorante do idoso (Lei nº
                  10.741/2003). Equiparação constitucional: art. 5º, XLIII, e Lei 8.072,
                  art. 2º. Confira a redação vigente na véspera da prova.
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
