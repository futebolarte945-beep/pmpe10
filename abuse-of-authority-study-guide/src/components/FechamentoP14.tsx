import { ArrowLeft, CheckCircle2, Flag, Gavel, Users, Scale, Trophy } from "lucide-react";
import { Reveal, rich } from "./Reveal";
import { Trilha } from "./Trilha";

const trio = [
  {
    icon: Users,
    titulo: "4 · 3 · 2",
    texto: "ORCRIM pede 4. 288 pede 3. Tráfico associado pede 2. Máxima > 4 ou o mapa. Informal vale.",
    classe: "text-gold-2",
    borda: "border-gold/25",
  },
  {
    icon: Scale,
    titulo: "Avisa × pede",
    texto: "Controlada comunica. Infiltrado e interceptação autorizam. Cadastro 15 requisita sem juiz.",
    classe: "text-mint",
    borda: "border-mint/25",
  },
  {
    icon: Flag,
    titulo: "720 · 90 · 120",
    texto: "720 = virtual da 12.850. 90 = ECA. 120+120 = preso no 22. Solto não tem 180 aqui.",
    classe: "text-blood-2",
    borda: "border-blood/25",
  },
];

const meios = [
  { m: "Colaboração", j: "Homologa (não negocia)", p: "—", b: "4º–7º" },
  { m: "Ambiental", j: "Autorização", p: "15 d (9.296, 8º-A)", b: "3º, II" },
  { m: "Ação controlada", j: "Comunicação prévia", p: "—", b: "8º–9º" },
  { m: "Cadastro 15", j: "Não (requisição)", p: "—", b: "15" },
  { m: "Interceptação", j: "Autorização", p: "15+15 (Tema 661)", b: "3º, V · 9.296" },
  { m: "Sigilo bancário/fiscal", j: "Em regra sim (LC 105)", p: "—", b: "3º, VI" },
  { m: "Infiltração física", j: "Autorização", p: "6 meses + renov.", b: "10" },
  { m: "Infiltração virtual 12.850", j: "Autorização", p: "6 meses / teto 720 d", b: "10-A" },
  { m: "Infiltração virtual ECA", j: "Autorização", p: "90 dias", b: "13.441" },
];

export function FechamentoP14({
  onVoltarParte13,
  onAbrirParte15,
}: {
  onVoltarParte13: () => void;
  onAbrirParte15: () => void;
}) {
  return (
    <section id="fechamento-p14" className="scroll-mt-24 border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-20 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold/60" />
            Síntese tática · Parte 14 · Fase 2
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight text-paper md:text-5xl">
            ORCRIM: quatro cabeças, sete meios <span className="text-gold-2">&</span> 3 a 8
          </h2>
          <p className="just mt-4 text-[15px] leading-relaxed text-fade">
            Sete blocos da 12.850 — e o que o roteiro ainda troca (720 no físico, 90 na 12.850, 180
            do solto, art. 18 com 2 a 6, sequestro no 4º).
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
          <div id="meios-p14" className="scroll-mt-24 overflow-hidden rounded-2xl border border-line">
            <div className="border-b border-line bg-ink-2/50 px-6 py-6 md:px-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
                Resumo · meios de prova
              </div>
              <h3 className="mt-2 font-serif text-2xl font-black text-paper">
                Precisa de juiz? Qual o prazo?
              </h3>
            </div>
            <div className="hidden bg-ink-3/60 md:grid md:grid-cols-[1.4fr_1.3fr_1.2fr_0.9fr]">
              {["Meio", "Juiz?", "Prazo", "Base"].map((h) => (
                <div
                  key={h}
                  className="border-b border-line px-5 py-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-gold"
                >
                  {h}
                </div>
              ))}
            </div>
            {meios.map((r, i) => (
              <div
                key={r.m}
                className={`grid grid-cols-1 md:grid-cols-[1.4fr_1.3fr_1.2fr_0.9fr] ${
                  i % 2 === 0 ? "bg-ink-2/40" : "bg-ink-2/20"
                }`}
              >
                <div className="px-5 pt-3 font-serif text-[15px] font-bold text-paper md:py-3">
                  {r.m}
                </div>
                <div className="just px-5 py-1 text-[13px] text-paper/80 md:py-3">{rich(r.j)}</div>
                <div className="just px-5 py-1 text-[13px] text-fade md:py-3">{r.p}</div>
                <div className="px-5 pb-3 font-mono text-[11px] text-gold-2 md:py-3">{r.b}</div>
              </div>
            ))}
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
                Parte 14 · Fase 2 · concluída
              </span>
            </div>
            <h2 className="relative mt-6 max-w-3xl font-serif text-4xl font-black leading-[1.05] text-paper md:text-6xl">
              Missão cumprida:
              <br />
              <span className="text-gold-2">a 12.850 é sua.</span>
            </h2>
            <p className="just relative mt-6 text-[15px] leading-relaxed text-paper/75">
              Do{" "}
              <span className="hl">«4, não 3»</span> ao{" "}
              <span className="hl">«controlada avisa, infiltrado pede»</span> e ao{" "}
              <span className="hl">«720 na rede da facção, 90 na do ECA»</span>.
            </p>
            <div className="relative mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onVoltarParte13}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-line-2 bg-ink-2/70 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-paper/85 transition-colors hover:border-gold/50 hover:text-gold-2"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Revisar Parte 13 — Interceptação
              </button>
              <button
                type="button"
                onClick={onAbrirParte15}
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-gold/40 bg-gold/10 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-gold-2 transition-colors hover:border-gold hover:bg-gold/20"
              >
                <Flag className="h-4 w-4" />
                Abrir Parte 15 — Súmulas Fase 2
              </button>
            </div>
          </div>
        </Reveal>

        <Trilha prontas={14} />

        <Reveal>
          <footer className="rounded-xl border border-line bg-ink-3/50 px-6 py-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Gavel className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="just max-w-3xl text-[12px] leading-relaxed text-faint">
                  Material didático. Lei nº 12.850/2013 (Planalto), com 13.260/2016, 13.441/2017
                  (ECA, 90 dias), 13.964/2019, 15.245/2025 e 15.487/2026. STF: Pet 7.074 e SV 14.
                  Confira a tese na véspera.
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
