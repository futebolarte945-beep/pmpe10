import { ArrowLeft, CheckCircle2, Flag, Gavel, Scale, BookOpen, Trophy } from "lucide-react";
import { Reveal } from "./Reveal";
import { Trilha } from "./Trilha";

const trio = [
  {
    icon: Scale,
    titulo: "243 soma · 696 é o 28",
    texto: "243 não é conexão. 536 é a Maria. 331 e 703 não moram no JE. Transação quebrada denuncia.",
    classe: "text-gold-2",
    borda: "border-gold/25",
  },
  {
    icon: BookOpen,
    titulo: "661 repete · 7.074 fora",
    texto: "15+15 sucessivos. Gravação do interlocutor é lícita. Juiz homologa a delação, não barganha.",
    classe: "text-mint",
    borda: "border-mint/25",
  },
  {
    icon: Flag,
    titulo: "I+III · 720 ≠ 90",
    texto: "II não prende. Controlada avisa. 720 é a rede da facção. 90 é o ECA.",
    classe: "text-blood-2",
    borda: "border-blood/25",
  },
];

export function FechamentoP15({
  onVoltarParte14,
  onAbrirParte16,
}: {
  onVoltarParte14: () => void;
  onAbrirParte16: () => void;
}) {
  return (
    <section id="fechamento-p15" className="scroll-mt-24 border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-20 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold/60" />
            Síntese tática · Parte 15 · Dossiê Fase 2
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight text-paper md:text-5xl">
            Números certos: 243, 536, 696 <span className="text-gold-2">&</span> 661
          </h2>
          <p className="just mt-4 text-[15px] leading-relaxed text-fade">
            Quatro blocos das súmulas e teses das leis 7.960, 9.099, 9.296 e 12.850 — e os erros
            que o roteiro ainda imprime.
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
                Parte 15 · dossiê Fase 2 · concluída
              </span>
            </div>
            <h2 className="relative mt-6 max-w-3xl font-serif text-4xl font-black leading-[1.05] text-paper md:text-6xl">
              Missão cumprida:
              <br />
              <span className="text-gold-2">os números são seus.</span>
            </h2>
            <p className="just relative mt-6 text-[15px] leading-relaxed text-paper/75">
              Do{" "}
              <span className="hl">«243 soma, não conecta»</span> ao{" "}
              <span className="hl">«696 é o 28»</span> e ao{" "}
              <span className="hl">«720 não é 90»</span>.
            </p>
            <div className="relative mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onVoltarParte14}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-line-2 bg-ink-2/70 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-paper/85 transition-colors hover:border-gold/50 hover:text-gold-2"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Revisar Parte 14 — ORCRIM
              </button>
              <button
                type="button"
                onClick={onAbrirParte16}
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-md bg-gold px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#161008] hover:bg-gold-2"
              >
                <Flag className="h-4 w-4" />
                Abrir Parte 16 — Quiz 60 Q
              </button>
            </div>
          </div>
        </Reveal>

        <Trilha prontas={15} />

        <Reveal>
          <footer className="rounded-xl border border-line bg-ink-3/50 px-6 py-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Gavel className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="just max-w-3xl text-[12px] leading-relaxed text-faint">
                  Material didático. Enunciados conforme STF/STJ (243, 337, 536, 203, 696, 640, 723,
                  SV 14, Tema 661, Pet 7.074, ADIs 3.360 e 4.109). 331/STJ e 703/STF não regulam o
                  JECrim. Confira o verbete na véspera.
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
