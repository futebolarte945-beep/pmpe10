import {
  ArrowLeft,
  CheckCircle2,
  Flag,
  Gavel,
  Scale,
  Radio,
  Trophy,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Trilha } from "./Trilha";

const trio = [
  {
    icon: Scale,
    titulo: "Reclusão × > 4 anos",
    texto:
      "Telefone (2º, III): espécie reclusão. Ambiental (8º-A): máxima > 4. Gravação do interlocutor: sem juiz.",
    classe: "text-gold-2",
    borda: "border-gold/25",
  },
  {
    icon: Radio,
    titulo: "15 + Tema 661",
    texto:
      "Quinze dias da execução, sucessivos se fundamentados. 24 h para decidir. Modelo genérico anula.",
    classe: "text-mint",
    borda: "border-mint/25",
  },
  {
    icon: Flag,
    titulo: "10 e 10-A = 2 a 4",
    texto:
      "PU do 10 pega o juiz. 10-A, § 1º: interlocutor atípico. § 2º: servidor que vaza paga dobro. Lei acaba no 12.",
    classe: "text-blood-2",
    borda: "border-blood/25",
  },
];

export function FechamentoP13({
  onVoltarParte12,
  onAbrirParte14,
}: {
  onVoltarParte12: () => void;
  onAbrirParte14: () => void;
}) {
  return (
    <section id="fechamento-p13" className="scroll-mt-24 border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-20 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold/60" />
            Síntese tática · Parte 13 · Fase 2
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight text-paper md:text-5xl">
            Interceptação: fluxo, 15 dias <span className="text-gold-2">&</span> 2 a 4
          </h2>
          <p className="just mt-4 text-[15px] leading-relaxed text-fade">
            Sete blocos da 9.296 — e o que o roteiro ainda troca (14 artigos, ED que não existem
            aqui, «uma única» prorrogação, WhatsApp parado como se fosse fluxo).
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
                Parte 13 · Fase 2 · concluída
              </span>
            </div>
            <h2 className="relative mt-6 max-w-3xl font-serif text-4xl font-black leading-[1.05] text-paper md:text-6xl">
              Missão cumprida:
              <br />
              <span className="text-gold-2">a linha é sua.</span>
            </h2>
            <p className="just relative mt-6 text-[15px] leading-relaxed text-paper/75">
              Do{" "}
              <span className="hl">«fluxo não é arquivo»</span> ao{" "}
              <span className="hl">«661 deixa repetir os 15»</span> e ao{" "}
              <span className="hl">«2 a 4 no 10, dobro no 10-A § 2º»</span>.
            </p>
            <div className="relative mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onVoltarParte12}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-line-2 bg-ink-2/70 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-paper/85 transition-colors hover:border-gold/50 hover:text-gold-2"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Revisar Parte 12 — JECrim
              </button>
              <button
                type="button"
                onClick={onAbrirParte14}
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-gold/40 bg-gold/10 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-gold-2 transition-colors hover:border-gold hover:bg-gold/20"
              >
                <Flag className="h-4 w-4" />
                Abrir Parte 14 — ORCRIM
              </button>
            </div>
          </div>
        </Reveal>

        <Trilha prontas={13} />

        <Reveal>
          <footer className="rounded-xl border border-line bg-ink-3/50 px-6 py-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Gavel className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="just max-w-3xl text-[12px] leading-relaxed text-faint">
                  Material didático. Lei nº 9.296/1996 (Planalto), com a Lei 13.869/2019 (art. 10) e
                  a Lei 13.964/2019 (arts. 8º-A e 10-A). STF Tema 661 (RE 625.263). A lei tem doze
                  artigos. Confira a tese na véspera.
                </p>
              </div>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.24em] text-faint">
                Prof. · Processual Extravagante
              </span>
            </div>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
