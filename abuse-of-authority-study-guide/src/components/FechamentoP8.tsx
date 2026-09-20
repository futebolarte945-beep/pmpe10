import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Gavel,
  Scale,
  Shield,
  Trophy,
  Users,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Trilha } from "./Trilha";

const trio = [
  {
    icon: Users,
    titulo: "Vítima mulher. Ponto.",
    texto:
      "Agressor qualquer. Duas mulheres sim; dois homens não. Trans sim (STJ). Coabitação dispensada (600). ADC 19 chancelou a ação afirmativa.",
    classe: "text-gold-2",
    borda: "border-gold/25",
  },
  {
    icon: Shield,
    titulo: "12-C não é MPU geral",
    texto:
      "Só afastamento do lar, só interior sem comarca. 48 h sobe o pedido; 48 h o juiz decide. 24-A agora é reclusão 2 a 5.",
    classe: "text-blood-2",
    borda: "border-blood/25",
  },
  {
    icon: Scale,
    titulo: "542 e 41",
    texto:
      "Lesão incondicionada. 9.099 fora. Retratação só em audiência (16). Sem cesta (17), sem bagatela (589), sem restritiva (588).",
    classe: "text-skyy-2",
    borda: "border-skyy/25",
  },
];

export function FechamentoP8({
  onVoltarParte7,
  onAbrirParte9,
}: {
  onVoltarParte7: () => void;
  onAbrirParte9: () => void;
}) {
  return (
    <section id="fechamento-p8" className="scroll-mt-24 border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-20 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold/60" />
            Síntese tática · Parte 08 encerrada
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight text-paper md:text-5xl">
            Gênero, MPU <span className="text-gold-2">&</span> as cinco súmulas
          </h2>
          <p className="just mt-4 text-[15px] leading-relaxed text-fade">
            Cinco blocos: sujeitos e formas, delegacia/12-C, o mapa das protetivas, o rito
            sem 9.099 e o pacote STF/STJ. A LMP é o chão; o CP (121-A, 129, 147-B) é o teto.
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
                Parte 08 · concluída
              </span>
            </div>
            <h2 className="relative mt-6 max-w-3xl font-serif text-4xl font-black leading-[1.05] text-paper md:text-6xl">
              Missão cumprida:
              <br />
              <span className="text-gold-2">a Maria da Penha é sua.</span>
            </h2>
            <p className="just relative mt-6 text-[15px] leading-relaxed text-paper/75">
              Do{" "}
              <span className="hl">«vítima mulher, agressor qualquer»</span> ao{" "}
              <span className="hl">«12-C não é delegado-juiz»</span> e às súmulas{" "}
              <span className="hl">536-542-588-589-600</span> — você responde a 11.340 no
              tamanho da ADC 19, da ADI 4.424 e da pena nova do 24-A.
            </p>
            <div className="relative mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onVoltarParte7}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-line-2 bg-ink-2/70 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-paper/85 transition-colors hover:border-gold/50 hover:text-gold-2"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Revisar Parte 07 — Desarmamento
              </button>
              <button
                type="button"
                onClick={onAbrirParte9}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-md bg-gold px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#161008] transition-colors hover:bg-gold-2"
              >
                Abrir Parte 09 — Lei de Drogas
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </Reveal>

        <Trilha prontas={8} />

        <Reveal>
          <footer className="rounded-xl border border-line bg-ink-3/50 px-6 py-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Gavel className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="just max-w-3xl text-[12px] leading-relaxed text-faint">
                  Material didático. Lei nº 11.340/2006 conforme o Planalto, com as Leis
                  13.505/2017, 13.641/2018, 13.827/2019, 13.894/2019, 14.188/2021,
                  14.994/2024 (24-A e feminicídio 121-A) e 15.383/2026 (monitoração). ADC
                  19 e ADI 4.424/STF. Súmulas 536, 542, 588, 589 e 600/STJ. Confira a
                  redação vigente na véspera da prova.
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
