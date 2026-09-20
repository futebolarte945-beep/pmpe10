import {
  ArrowLeft,
  CheckCircle2,
  Flag,
  Gavel,
  Crosshair,
  Scale,
  ShieldAlert,
  Trophy,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Trilha } from "./Trilha";

const trio = [
  {
    icon: Crosshair,
    titulo: "Casa 12 · rua 14 · carro 14",
    texto:
      "CRAF não é porte. Desmuniciada pune. Insignificância não abre. 15 é o disparo na cidade — habitado/via são o tipo, não aumento.",
    classe: "text-gold-2",
    borda: "border-gold/25",
  },
  {
    icon: ShieldAlert,
    titulo: "Restrito não é hediondo",
    texto:
      "16 caput 3–6, comum. § 2º proibido 4–12, hediondo. Raspada de permitido: Súm. 668. 17 e 18 sim (6–12 / 8–16).",
    classe: "text-blood-2",
    borda: "border-blood/25",
  },
  {
    icon: Scale,
    titulo: "20 não é o PCC",
    texto:
      "Metade se é do 6º/7º/8º ou reincidente específico. Org. criminosa hedionda mora no 8.072. Art. 21 morreu na ADI 3.112. Faca não é Estatuto.",
    classe: "text-skyy-2",
    borda: "border-skyy/25",
  },
];

export function FechamentoP7({
  onVoltarParte6,
  onAbrirParte8,
}: {
  onVoltarParte6: () => void;
  onAbrirParte8: () => void;
}) {
  return (
    <section id="fechamento-p7" className="scroll-mt-24 border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-20 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold/60" />
            Síntese tática · Parte 07 encerrada
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight text-paper md:text-5xl">
            Posse, porte <span className="text-gold-2">&</span> o rótulo da arma
          </h2>
          <p className="just mt-4 text-[15px] leading-relaxed text-fade">
            Quatro blocos: o mapa casa/rua, os tipos 12 a 16, o comércio/tráfico e as
            teses do STJ. Ação penal: pública incondicionada do 12 ao 18.
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
                Parte 07 · concluída
              </span>
            </div>
            <h2 className="relative mt-6 max-w-3xl font-serif text-4xl font-black leading-[1.05] text-paper md:text-6xl">
              Missão cumprida:
              <br />
              <span className="text-gold-2">o Estatuto é seu.</span>
            </h2>
            <p className="just relative mt-6 text-[15px] leading-relaxed text-paper/75">
              Do{" "}
              <span className="hl">«carro é porte»</span> ao{" "}
              <span className="hl">«restrito não é hediondo»</span> e à{" "}
              <span className="hl">Súmula 668</span> — você responde a 10.826 no tamanho
              que a banca cobra depois do Anticrime, da ADI 3.112 e do art. 21-A de 2026.
            </p>
            <div className="relative mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onVoltarParte6}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-line-2 bg-ink-2/70 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-paper/85 transition-colors hover:border-gold/50 hover:text-gold-2"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Revisar Parte 06 — Crimes Ambientais
              </button>
              <button
                type="button"
                onClick={onAbrirParte8}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-gold/40 bg-gold/10 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-gold-2 transition-colors hover:bg-gold/20"
              >
                <Flag className="h-4 w-4" />
                Abrir Parte 08 — Lei Maria da Penha
              </button>
            </div>
          </div>
        </Reveal>

        <Trilha prontas={7} />

        <Reveal>
          <footer className="rounded-xl border border-line bg-ink-3/50 px-6 py-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Gavel className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="just max-w-3xl text-[12px] leading-relaxed text-faint">
                  Material didático. Lei nº 10.826/2003 conforme o Planalto, com as Leis
                  10.884/2004, 11.706/2008, 13.870/2019, 13.964/2019 e 15.358/2026 (art.
                  21-A). Hediondez: Lei 8.072, PU, II–IV (redação do Anticrime). Súmula
                  668/STJ. ADI 3.112/STF. Confira a redação vigente na véspera da prova.
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
