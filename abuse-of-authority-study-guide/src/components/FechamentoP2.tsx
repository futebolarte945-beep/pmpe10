import {
  ArrowLeft,
  CheckCircle2,
  Flag,
  Gavel,
  Lock,
  Landmark,
  Trophy,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Trilha } from "./Trilha";

const trio = [
  {
    icon: Lock,
    titulo: "Inafiançável",
    texto:
      "CF, art. 5º, XLII — vale para o racismo e seus equiparados: injúria racial (STF, HC 154.248) e homotransfobia (ADO 26/MI 4733). Flagrante sem fiança, nem pelo delegado.",
    classe: "text-blood-2",
    borda: "border-blood/25",
  },
  {
    icon: Landmark,
    titulo: "Imprescritível",
    texto:
      "O tempo não apaga: a pretensão punitiva não prescreve — o STF aplicou a tese até a fato anterior ao julgamento do HC 154.248 (2021). Anos 70 da vítima? Irrelevante.",
    classe: "text-gold-2",
    borda: "border-gold/25",
  },
  {
    icon: Gavel,
    titulo: "Reclusão (e não hediondo)",
    texto:
      "Toda a Lei 7.716 é de reclusão (1 a 5 anos). Mas racismo NÃO está no rol da Lei 8.072/90: inafiançável e imprescritível, sim; hediondo, não.",
    classe: "text-skyy-2",
    borda: "border-skyy/25",
  },
];

export function FechamentoP2({
  onVoltarParte1,
  onAbrirParte3,
}: {
  onVoltarParte1: () => void;
  onAbrirParte3: () => void;
}) {
  return (
    <section id="fechamento-p2" className="scroll-mt-24 border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-20 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold/60" />
            Síntese tática · Parte 02 encerrada
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight text-paper md:text-5xl">
            O trio constitucional <span className="text-gold-2">&</span> a estrada que continua
          </h2>
          <p className="just mt-4 text-[15px] leading-relaxed text-fade">
            Tudo o que você estudou nos quatro blocos desemboca nestas três placas de trânsito
            constitucional — e na fechadura quádrupla da ação penal. Decore o trio, decore o quadro
            de penas, e a Lei 7.716 deixa de ser decoreba para virar reflexo.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {trio.map((t, i) => (
            <Reveal key={t.titulo} delay={i * 90}>
              <div
                className={`h-full rounded-xl border bg-ink-2/60 p-6 ${t.borda}`}
              >
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
                Parte 02 · concluída
              </span>
            </div>
            <h2 className="relative mt-6 max-w-3xl font-serif text-4xl font-black leading-[1.05] text-paper md:text-6xl">
              Missão cumprida:
              <br />
              <span className="text-gold-2">a Lei do Racismo é sua.</span>
            </h2>
            <p className="just relative mt-6 text-[15px] leading-relaxed text-paper/75">
              Quatro blocos, vinte e dois artigos, a migração da injúria racial (Lei 14.532/2023),
              o racismo de arquibancada e de terreiro, as majorantes do racismo recreativo e do
              funcionário público, os efeitos da condenação e o quadro completo de penas. Do
              pentágono <span className="hl">CRER-PRO</span> à fechadura quádrupla{" "}
              <span className="hl">incondicionada · inafiançável · imprescritível · não hedionda</span>{" "}
              — você domina a lei que mais mudou nos últimos três anos, já no texto que cai hoje.
            </p>
            <div className="relative mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onVoltarParte1}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-line-2 bg-ink-2/70 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-paper/85 transition-colors hover:border-gold/50 hover:text-gold-2"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Revisar Parte 01 — Abuso de Autoridade
              </button>
              <button
                type="button"
                onClick={onAbrirParte3}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-gold/40 bg-gold/10 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-gold-2 transition-colors hover:bg-gold/20"
              >
                <Flag className="h-4 w-4" />
                Abrir Parte 03 — Crimes Hediondos (Lei 8.072/1990)
              </button>
            </div>
          </div>
        </Reveal>

        <Trilha prontas={2} />

        <Reveal>
          <footer className="rounded-xl border border-line bg-ink-3/50 px-6 py-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Gavel className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="just max-w-3xl text-[12px] leading-relaxed text-faint">
                  Material didático para fins de estudo. Texto da Lei nº 7.716/1989 conforme
                  compilação oficial (Planalto), com alterações até a Lei nº 14.532/2023 e
                  jurisprudência citada (STF, HC 154.248 e ADO 26/MI 4733; STJ, AgRg no AREsp
                  686.965). Sempre confira a redação vigente na véspera da sua prova.
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
