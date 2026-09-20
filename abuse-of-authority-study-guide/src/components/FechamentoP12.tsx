import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Flag,
  Gavel,
  Scale,
  BookOpen,
  Trophy,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Trilha } from "./Trilha";

const trio = [
  {
    icon: Scale,
    titulo: "Máxima 2 · mínima 1",
    texto:
      "61 = IMPO (≤ 2 anos). 89 = sursis (mínima ≤ 1), mesmo fora do JE. JEF usa o mesmo teto. Não some os dois filtros.",
    classe: "text-gold-2",
    borda: "border-gold/25",
  },
  {
    icon: BookOpen,
    titulo: "82 apela · 83 zera",
    texto:
      "Apelação em 10 dias para a Turma, não o TJ. ED em 5 dias **interrompem** (13.105). 203 fecha o STJ; 640 abre o STF.",
    classe: "text-mint",
    borda: "border-mint/25",
  },
  {
    icon: Flag,
    titulo: "243 ≠ 60 · 696 = 28",
    texto:
      "Conexão leva transação (60, PU). 243 trava o 89 no concurso. 696 é analogia ao 28 do CPP, não o querelante.",
    classe: "text-blood-2",
    borda: "border-blood/25",
  },
];

const fluxo = [
  { n: "01", t: "Infração IMPO", d: "Máxima ≤ 2 anos ou contravenção · 63 = lugar da prática" },
  { n: "02", t: "TCO (69)", d: "Sem APF/fiança se comparecer. IP dispensado." },
  { n: "03", t: "Audiência preliminar", d: "72–75: conciliação. 74 composição. 76 transação." },
  { n: "04", t: "Denúncia / queixa", d: "Oral no TCO (77). Se 66, PU: vai ao comum." },
  { n: "05", t: "AIJ (81)", d: "Defesa → recebe → prova → debates → sentença. Sem relatório." },
  { n: "06", t: "Apelação (82)", d: "10 dias, razões na petição, Turma de 3 — não o TJ." },
  { n: "07", t: "Turma Recursal", d: "203: sem REsp. 640: RE se for constitucional." },
];

export function FechamentoP12({
  onVoltarParte11,
  onAbrirParte13,
}: {
  onVoltarParte11: () => void;
  onAbrirParte13: () => void;
}) {
  return (
    <section id="fechamento-p12" className="scroll-mt-24 border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-20 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold/60" />
            Síntese tática · Parte 12 · Fase 2
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight text-paper md:text-5xl">
            JECrim: teto, três portas <span className="text-gold-2">&</span> Turma
          </h2>
          <p className="just mt-4 text-[15px] leading-relaxed text-fade">
            Cinco blocos da 9.099 criminal — e os erros que o roteiro ainda imprime (ED que
            «suspendem», inominado no criminal, 3 testemunhas coladas do cível, 243 como conexão).
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
          <div id="fluxo-p12" className="scroll-mt-24 rounded-2xl border border-line bg-ink-2/50 p-7 md:p-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
              Fluxograma · um caminho só
            </div>
            <h3 className="mt-3 font-serif text-3xl font-black text-paper">
              Da infração à Turma Recursal
            </h3>
            <p className="just mt-3 max-w-3xl text-[14px] leading-relaxed text-fade">
              Se o 74 (privada/condicionada) ou o 76 fecham na preliminar, o fluxo **para** ali.
              O 89 pode aparecer na denúncia, inclusive fora do JE. Citação falha desvia para o comum.
            </p>
            <ol className="mt-8 grid gap-3 md:grid-cols-2">
              {fluxo.map((p, i) => (
                <li
                  key={p.n}
                  className="flex gap-4 rounded-xl border border-line bg-ink-3/40 p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gold font-mono text-[12px] font-bold text-[#161008]">
                    {p.n}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 font-serif text-lg font-bold text-paper">
                      {p.t}
                      {i < fluxo.length - 1 && (
                        <ArrowRight className="hidden h-4 w-4 text-gold/70 md:inline" />
                      )}
                    </div>
                    <p className="just mt-1 text-[12.5px] leading-relaxed text-fade">{p.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="just mt-5 font-mono text-[11.5px] leading-relaxed text-gold-2">
              Infração → TCO → preliminar (74/76) → denúncia → AIJ → sentença → apelação 82 →
              Turma. 83 no meio zera o prazo. 203 tranca o STJ.
            </p>
          </div>
        </Reveal>

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
                Parte 12 · Fase 2 · concluída
              </span>
            </div>
            <h2 className="relative mt-6 max-w-3xl font-serif text-4xl font-black leading-[1.05] text-paper md:text-6xl">
              Missão cumprida:
              <br />
              <span className="text-gold-2">o JECrim é seu.</span>
            </h2>
            <p className="just relative mt-6 text-[15px] leading-relaxed text-paper/75">
              Do{" "}
              <span className="hl">«máxima 2, mínima 1»</span> ao{" "}
              <span className="hl">«ED interrompem»</span> e ao{" "}
              <span className="hl">«203 fecha, 640 abre»</span> — você corta o gabarito velho do
              roteiro.
            </p>
            <div className="relative mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onVoltarParte11}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-line-2 bg-ink-2/70 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-paper/85 transition-colors hover:border-gold/50 hover:text-gold-2"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Revisar Parte 11 — Temporária
              </button>
              <button
                type="button"
                onClick={onAbrirParte13}
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-gold/40 bg-gold/10 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-gold-2 transition-colors hover:border-gold hover:bg-gold/20"
              >
                <Flag className="h-4 w-4" />
                Abrir Parte 13 — Interceptação
              </button>
            </div>
          </div>
        </Reveal>

        <Trilha prontas={12} />

        <Reveal>
          <footer className="rounded-xl border border-line bg-ink-3/50 px-6 py-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Gavel className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="just max-w-3xl text-[12px] leading-relaxed text-faint">
                  Material didático. Lei nº 9.099/1995 (capítulo criminal), Planalto, com as Leis
                  11.313/2006, 13.105/2015 (art. 83), 13.603/2018 e 14.245/2021. Lei 10.259/2001
                  (JEF). Súmulas 203/STJ, 243/STJ, 337/STJ, 640/STF, 696/STF. Confira a tese na
                  véspera.
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
