import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowDown,
  Brain,
  Compass,
  MapPinned,
  Scale,
  Target,
} from "lucide-react";
import { ArticleCard } from "./components/ArticleCard";
import { Checkpoint } from "./components/Checkpoint";
import { Comparativo } from "./components/Comparativo";
import { FechamentoP2 } from "./components/FechamentoP2";
import { FechamentoP3 } from "./components/FechamentoP3";
import { FechamentoP4 } from "./components/FechamentoP4";
import { FechamentoP5 } from "./components/FechamentoP5";
import { FechamentoP6 } from "./components/FechamentoP6";
import { FechamentoP7 } from "./components/FechamentoP7";
import { FechamentoP8 } from "./components/FechamentoP8";
import { FechamentoP9 } from "./components/FechamentoP9";
import { FechamentoP10 } from "./components/FechamentoP10";
import { FechamentoP11 } from "./components/FechamentoP11";
import { FechamentoP12 } from "./components/FechamentoP12";
import { FechamentoP13 } from "./components/FechamentoP13";
import { FechamentoP14 } from "./components/FechamentoP14";
import { FechamentoP15 } from "./components/FechamentoP15";
import { FechamentoP16 } from "./components/FechamentoP16";
import { QuizLista } from "./components/QuizLista";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Sidebar, TopBar, type LinkFinal, type NavInfo } from "./components/Navigation";
import { QuadroPenas } from "./components/QuadroPenas";
import { Reveal, rich } from "./components/Reveal";
import { bloco1 } from "./data/bloco1";
import { bloco2 } from "./data/bloco2";
import { bloco3 } from "./data/bloco3";
import { bloco4 } from "./data/bloco4";
import { bloco5 } from "./data/bloco5";
import { bloco6 } from "./data/bloco6";
import { comparativoP1 } from "./data/comparativo";
import { heroP1, heroP2, heroP3, heroP4, heroP5, heroP6, heroP7, heroP8, heroP9, heroP10, heroP11, heroP12, heroP13, heroP14, heroP15, heroP16, type HeroConfig } from "./data/heroes";
import { racBloco1 } from "./data/p2/racBloco1";
import { racBloco2 } from "./data/p2/racBloco2";
import { racBloco3 } from "./data/p2/racBloco3";
import { racBloco4 } from "./data/p2/racBloco4";
import { comparativoP2 } from "./data/p2/racComparativo";
import { quadroPenasP2 } from "./data/p2/racPenas";
import { heBloco1 } from "./data/p3/heBloco1";
import { heBloco2 } from "./data/p3/heBloco2";
import { heBloco3 } from "./data/p3/heBloco3";
import { heBloco4 } from "./data/p3/heBloco4";
import { comparativoP3 } from "./data/p3/heComparativo";
import { quadroPenasP3 } from "./data/p3/hePenas";
import { ctbBloco1 } from "./data/p4/ctbBloco1";
import { ctbBloco2 } from "./data/p4/ctbBloco2";
import { ctbBloco3 } from "./data/p4/ctbBloco3";
import { comparativoP4 } from "./data/p4/ctbComparativo";
import { quadroPenasP4 } from "./data/p4/ctbPenas";
import { toBloco1 } from "./data/p5/toBloco1";
import { toBloco2 } from "./data/p5/toBloco2";
import { toBloco3 } from "./data/p5/toBloco3";
import { comparativoP5 } from "./data/p5/toComparativo";
import { quadroPenasP5 } from "./data/p5/toPenas";
import { amBloco1 } from "./data/p6/amBloco1";
import { amBloco2 } from "./data/p6/amBloco2";
import { amBloco3 } from "./data/p6/amBloco3";
import { amBloco4 } from "./data/p6/amBloco4";
import { amBloco5 } from "./data/p6/amBloco5";
import { amBloco6 } from "./data/p6/amBloco6";
import { amBloco7 } from "./data/p6/amBloco7";
import { comparativoP6 } from "./data/p6/amComparativo";
import { quadroPenasP6 } from "./data/p6/amPenas";
import { deBloco1 } from "./data/p7/deBloco1";
import { deBloco2 } from "./data/p7/deBloco2";
import { deBloco3 } from "./data/p7/deBloco3";
import { deBloco4 } from "./data/p7/deBloco4";
import { comparativoP7 } from "./data/p7/deComparativo";
import { quadroPenasP7 } from "./data/p7/dePenas";
import { mpBloco1 } from "./data/p8/mpBloco1";
import { mpBloco2 } from "./data/p8/mpBloco2";
import { mpBloco3 } from "./data/p8/mpBloco3";
import { mpBloco4 } from "./data/p8/mpBloco4";
import { mpBloco5 } from "./data/p8/mpBloco5";
import { comparativoP8 } from "./data/p8/mpComparativo";
import { quadroPenasP8 } from "./data/p8/mpPenas";
import { drBloco1 } from "./data/p9/drBloco1";
import { drBloco2 } from "./data/p9/drBloco2";
import { drBloco3 } from "./data/p9/drBloco3";
import { drBloco4 } from "./data/p9/drBloco4";
import { drBloco5 } from "./data/p9/drBloco5";
import { drBloco6 } from "./data/p9/drBloco6";
import { comparativoP9 } from "./data/p9/drComparativo";
import { quadroPenasP9 } from "./data/p9/drPenas";
import { juBloco1 } from "./data/p10/juBloco1";
import { juBloco2 } from "./data/p10/juBloco2";
import { juBloco3 } from "./data/p10/juBloco3";
import { juBloco4 } from "./data/p10/juBloco4";
import { juBloco5 } from "./data/p10/juBloco5";
import { juBloco6 } from "./data/p10/juBloco6";
import { comparativoP10 } from "./data/p10/juComparativo";
import { quadroPenasP10 } from "./data/p10/juPenas";
import { ptBloco1 } from "./data/p11/ptBloco1";
import { ptBloco2 } from "./data/p11/ptBloco2";
import { ptBloco3 } from "./data/p11/ptBloco3";
import { ptBloco4 } from "./data/p11/ptBloco4";
import { comparativoP11 } from "./data/p11/ptComparativo";
import { quadroPenasP11 } from "./data/p11/ptPenas";
import { jeBloco1 } from "./data/p12/jeBloco1";
import { jeBloco2 } from "./data/p12/jeBloco2";
import { jeBloco3 } from "./data/p12/jeBloco3";
import { jeBloco4 } from "./data/p12/jeBloco4";
import { jeBloco5 } from "./data/p12/jeBloco5";
import { comparativoP12 } from "./data/p12/jeComparativo";
import { quadroPenasP12 } from "./data/p12/jePenas";
import { inBloco1 } from "./data/p13/inBloco1";
import { inBloco2 } from "./data/p13/inBloco2";
import { inBloco3 } from "./data/p13/inBloco3";
import { inBloco4 } from "./data/p13/inBloco4";
import { inBloco5 } from "./data/p13/inBloco5";
import { inBloco6 } from "./data/p13/inBloco6";
import { inBloco7 } from "./data/p13/inBloco7";
import { comparativoP13 } from "./data/p13/inComparativo";
import { quadroPenasP13 } from "./data/p13/inPenas";
import { orBloco1 } from "./data/p14/orBloco1";
import { orBloco2 } from "./data/p14/orBloco2";
import { orBloco3 } from "./data/p14/orBloco3";
import { orBloco4 } from "./data/p14/orBloco4";
import { orBloco5 } from "./data/p14/orBloco5";
import { orBloco6 } from "./data/p14/orBloco6";
import { orBloco7 } from "./data/p14/orBloco7";
import { comparativoP14 } from "./data/p14/orComparativo";
import { quadroPenasP14 } from "./data/p14/orPenas";
import { dsBloco1 } from "./data/p15/dsBloco1";
import { dsBloco2 } from "./data/p15/dsBloco2";
import { dsBloco3 } from "./data/p15/dsBloco3";
import { dsBloco4 } from "./data/p15/dsBloco4";
import { comparativoP15 } from "./data/p15/dsComparativo";
import { quadroPenasP15 } from "./data/p15/dsPenas";
import { qzBloco1 } from "./data/p16/qzBloco1";
import { qzBloco2 } from "./data/p16/qzBloco2";
import { qzBloco3 } from "./data/p16/qzBloco3";
import { qzBloco4 } from "./data/p16/qzBloco4";
import { qzBloco5 } from "./data/p16/qzBloco5";
import { qzBloco6 } from "./data/p16/qzBloco6";
import type { Bloco, ParteId } from "./data/tipos";

const blocosP1: Bloco[] = [bloco1, bloco2, bloco3, bloco4, bloco5, bloco6];
const blocosP2: Bloco[] = [racBloco1, racBloco2, racBloco3, racBloco4];
const blocosP3: Bloco[] = [heBloco1, heBloco2, heBloco3, heBloco4];
const blocosP4: Bloco[] = [ctbBloco1, ctbBloco2, ctbBloco3];
const blocosP5: Bloco[] = [toBloco1, toBloco2, toBloco3];
const blocosP6: Bloco[] = [amBloco1, amBloco2, amBloco3, amBloco4, amBloco5, amBloco6, amBloco7];
const blocosP7: Bloco[] = [deBloco1, deBloco2, deBloco3, deBloco4];
const blocosP8: Bloco[] = [mpBloco1, mpBloco2, mpBloco3, mpBloco4, mpBloco5];
const blocosP9: Bloco[] = [drBloco1, drBloco2, drBloco3, drBloco4, drBloco5, drBloco6];
const blocosP10: Bloco[] = [juBloco1, juBloco2, juBloco3, juBloco4, juBloco5, juBloco6];
const blocosP11: Bloco[] = [ptBloco1, ptBloco2, ptBloco3, ptBloco4];
const blocosP12: Bloco[] = [jeBloco1, jeBloco2, jeBloco3, jeBloco4, jeBloco5];
const blocosP13: Bloco[] = [inBloco1, inBloco2, inBloco3, inBloco4, inBloco5, inBloco6, inBloco7];
const blocosP14: Bloco[] = [orBloco1, orBloco2, orBloco3, orBloco4, orBloco5, orBloco6, orBloco7];
const blocosP15: Bloco[] = [dsBloco1, dsBloco2, dsBloco3, dsBloco4];
const blocosP16: Bloco[] = [qzBloco1, qzBloco2, qzBloco3, qzBloco4, qzBloco5, qzBloco6];

/* ---------- faixa do método ---------- */
const metodo = [
  {
    icon: Target,
    titulo: "O que cai na prova",
    texto:
      "Os pontos estatisticamente mais cobrados por AOCP, Cebraspe, FGV, FCC e Vunesp — sem enfeite, direto ao que pontua.",
    classe: "text-mint",
  },
  {
    icon: AlertTriangle,
    titulo: "Pegadinha clássica",
    texto:
      "As armadilhas que as bancas repetem há anos: palavras trocadas, penas adulteradas, frações embaralhadas e vetos ressuscitados.",
    classe: "text-blood-2",
  },
  {
    icon: Scale,
    titulo: "Exemplo prático",
    texto:
      "Situações de delegacia, balcão, estádio e audiência que transformam a lei seca em cena — e a cena em memória.",
    classe: "text-skyy-2",
  },
  {
    icon: Brain,
    titulo: "Macete do professor",
    texto:
      "Mnemônicos testados em salas de cursinho e mentoria: o que a memória curta esquece, a frase-âncora resgata.",
    classe: "text-viol-2",
  },
];

function Metodo() {
  return (
    <section className="relative border-b border-line bg-ink-2/30">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            <Compass className="h-4 w-4" />
            O método — 4 lentes · Fase 1 penal · Fase 2 processual
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metodo.map((m, i) => (
            <Reveal key={m.titulo} delay={i * 80}>
              <div className="h-full rounded-xl border border-line bg-ink-2/60 p-5 transition-colors hover:border-line-2">
                <m.icon className={`h-5 w-5 ${m.classe}`} strokeWidth={2.1} />
                <h3 className="mt-3.5 font-serif text-lg font-bold text-paper">{m.titulo}</h3>
                <p className="just mt-2 text-[12.5px] leading-relaxed text-fade">{m.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- cabeçalho de bloco ---------- */
function BlocoHeader({ bloco }: { bloco: Bloco }) {
  return (
    <Reveal>
      <div className="relative mb-10 overflow-hidden rounded-2xl border border-line bg-ink-2/50 p-7 md:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-4 -bottom-8 select-none font-serif text-[150px] font-black leading-none text-paper/[0.03] md:text-[200px]"
        >
          {bloco.numero.replace("Bloco 0", "")}
        </div>
        <div className="relative flex flex-wrap items-center gap-3">
          <span className="rounded-sm bg-gold px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#161008]">
            {bloco.numero}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-fade">
            {bloco.intervalo}
          </span>
        </div>
        <h2 className="relative mt-5 max-w-3xl font-serif text-3xl font-black leading-tight text-paper md:text-[44px]">
          {bloco.titulo}
        </h2>
        <p className="relative mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold-2">
          {bloco.subtitulo}
        </p>
        <p className="just relative mt-4 text-[15px] leading-relaxed text-paper/70">
          {bloco.descricao}
        </p>
        {bloco.secoes && (
          <div className="relative mt-5 flex flex-wrap gap-2">
            {bloco.secoes.map((s) => (
              <span
                key={s.rotulo}
                className="rounded-md border border-line-2 px-3 py-1.5 font-mono text-[10.5px] tracking-wide text-fade"
              >
                {s.rotulo} <span className="text-gold-2">· {s.ate}</span>
              </span>
            ))}
          </div>
        )}
        {bloco.notaProfessor && (
          <div className="relative mt-6 rounded-xl border border-gold/25 bg-gold/[0.06] p-5 md:p-6">
            <div className="flex items-center gap-2.5">
              <MapPinned className="h-4 w-4 shrink-0 text-gold" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-gold-2">
                {bloco.notaProfessor.titulo}
              </span>
            </div>
            <ul className="mt-4 grid gap-2.5 md:grid-cols-2">
              {bloco.notaProfessor.itens.map((item) => (
                <li key={item} className="flex gap-2.5 text-[13px] leading-relaxed text-paper/75">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                  <span className="just min-w-0 flex-1">{rich(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Reveal>
  );
}

/* ---------- divisor entre blocos ---------- */
function Divisor({ texto }: { texto: string }) {
  return (
    <div className="my-16 flex items-center gap-5 md:my-20">
      <span className="h-px flex-1 bg-line" />
      <span className="flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.3em] text-faint">
        {texto} <ArrowDown className="h-3.5 w-3.5 text-gold" />
      </span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

/* ---------- conteúdo exclusivo da Parte 01 dentro do fluxo de blocos ---------- */
function ExtraP1({ blocoId }: { blocoId: string }) {
  if (blocoId === "bloco-3") {
    return (
      <Reveal className="mt-10">
        <div className="just rounded-xl border border-gold/25 bg-gold/5 px-6 py-5 text-[13.5px] leading-relaxed text-paper/75 md:px-8">
          {rich(
            "**Consolidação do Bloco 03:** pena alta (1–4 anos) mora nos arts. **9, 10, 13, 15 e 19**; pena baixa (6 meses–2 anos) nos arts. **12, 16, 18 e 20**; e o caçula **15-A** desce mais: **3 meses a 1 ano**. Ordenou de cabeça? Então pode avançar para a faixa da custódia e da persecução.",
          )}
        </div>
      </Reveal>
    );
  }
  if (blocoId === "bloco-6") {
    return (
      <Reveal className="mt-12">
        <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-ink-2 to-gold/10 p-6 md:p-8">
          <h3 className="font-serif text-2xl font-bold text-paper">
            Mapa definitivo de penas da lei inteira
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-line bg-ink-2/60 p-4">
              <div className="font-serif text-2xl font-bold text-gold-2">1–4 anos</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                13 tipos
              </div>
              <p className="just mt-2 text-[12px] leading-relaxed text-fade">
                Arts. 9, 10, 13, 15, 19, 21, 22, 23, 24, 25, 28, 30 e 36.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-ink-2/60 p-4">
              <div className="font-serif text-2xl font-bold text-skyy-2">6m–2 anos</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                11 tipos
              </div>
              <p className="just mt-2 text-[12px] leading-relaxed text-fade">
                Arts. 12, 16, 18, 20, 27, 29, 31, 32, 33, 37 e 38.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-ink-2/60 p-4">
              <div className="font-serif text-2xl font-bold text-viol-2">3m–1 ano</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                os caçulas
              </div>
              <p className="just mt-2 text-[12px] leading-relaxed text-fade">
                Art. 15-A (violência institucional) e art. 7º-B do EOAB (via art. 43).
              </p>
            </div>
            <div className="rounded-lg border border-line bg-ink-2/60 p-4">
              <div className="font-serif text-2xl font-bold text-blood-2">2–4 anos</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                a reclusão
              </div>
              <p className="just mt-2 text-[12px] leading-relaxed text-fade">
                Interceptação indevida — Lei 9.296/96, art. 10 (alterado pelo art. 41).
              </p>
            </div>
          </div>
          <p className="just mt-5 text-[13px] leading-relaxed text-paper/70">
            {rich(
              "**Macete de fechamento:** a festa é da **detenção**; a reclusão é convidada única que chegou pela Lei da Interceptação. Somou tudo? **25 tipos penais** no ecossistema do abuso.",
            )}
          </p>
        </div>
      </Reveal>
    );
  }
  return null;
}

/* ---------- configuração por parte ---------- */
interface ParteConfig {
  hero: HeroConfig;
  nomeCurto: string;
  blocos: Bloco[];
  linksFinais: LinkFinal[];
  footerNote: string;
  titulo: string;
}

const configP1: ParteConfig = {
  hero: heroP1,
  nomeCurto: "Abuso de Autoridade",
  blocos: blocosP1,
  linksFinais: [
    { href: "#comparativo", rotulo: "Comparativo · Tortura × Abuso", icone: "comparativo" },
    { href: "#checkpoint", rotulo: "Síntese final · Parte 01", icone: "flag" },
  ],
  footerNote:
    "Parte 01 concluída — Parte 02 (Lei do Racismo) já liberada: use o seletor acima.",
  titulo: "Lei do Abuso de Autoridade | Manual de Guerra — Parte 1 de 14",
};

const configP2: ParteConfig = {
  hero: heroP2,
  nomeCurto: "Lei do Racismo",
  blocos: blocosP2,
  linksFinais: [
    { href: "#quadro-penas-p2", rotulo: "Quadro de penas · Lei 7.716", icone: "pena" },
    {
      href: "#comparativo-p2",
      rotulo: "Comparativo · Racismo × Injúria × Ódio",
      icone: "comparativo",
    },
    { href: "#fechamento-p2", rotulo: "Síntese final · Parte 02", icone: "flag" },
  ],
  footerNote: "Parte 02 concluída — Parte 03 (Crimes Hediondos) já liberada.",
  titulo: "Lei do Racismo & Injúria Racial | Manual de Guerra — Parte 2 de 14",
};

const configP3: ParteConfig = {
  hero: heroP3,
  nomeCurto: "Crimes Hediondos",
  blocos: blocosP3,
  linksFinais: [
    { href: "#quadro-penas-p3", rotulo: "Quadro de penas · hediondos", icone: "pena" },
    {
      href: "#comparativo-p3",
      rotulo: "Comparativo · progressão 3 eras",
      icone: "comparativo",
    },
    { href: "#fechamento-p3", rotulo: "Síntese final · Parte 03", icone: "flag" },
  ],
  footerNote: "Parte 03 concluída — Parte 04 (Crimes de Trânsito) já liberada.",
  titulo: "Lei dos Crimes Hediondos | Manual de Guerra — Parte 3 de 14",
};

const configP4: ParteConfig = {
  hero: heroP4,
  nomeCurto: "Crimes de Trânsito",
  blocos: blocosP4,
  linksFinais: [
    { href: "#quadro-penas-p4", rotulo: "Quadro de penas · CTB XIX", icone: "pena" },
    {
      href: "#comparativo-p4",
      rotulo: "Comparativo · culpa × Lei Seca × dolo",
      icone: "comparativo",
    },
    { href: "#fechamento-p4", rotulo: "Síntese final · Parte 04", icone: "flag" },
  ],
  footerNote: "Parte 04 concluída — Parte 05 (Lei de Tortura) já liberada.",
  titulo: "Crimes de Trânsito (CTB XIX) | Manual de Guerra — Parte 4 de 14",
};

const configP5: ParteConfig = {
  hero: heroP5,
  nomeCurto: "Lei de Tortura",
  blocos: blocosP5,
  linksFinais: [
    { href: "#quadro-penas-p5", rotulo: "Quadro de penas · 9.455", icone: "pena" },
    {
      href: "#comparativo-p5",
      rotulo: "Comparativo · Tortura × Abuso × 136",
      icone: "comparativo",
    },
    { href: "#fechamento-p5", rotulo: "Síntese final · Parte 05", icone: "flag" },
  ],
  footerNote: "Parte 05 concluída — Parte 06 (Crimes Ambientais, 1ª leva) já liberada.",
  titulo: "Lei de Tortura | Manual de Guerra — Parte 5 de 14",
};

const configP6: ParteConfig = {
  hero: heroP6,
  nomeCurto: "Crimes Ambientais",
  blocos: blocosP6,
  linksFinais: [
    { href: "#quadro-penas-p6", rotulo: "Tabela geral · os que mais caem", icone: "pena" },
    {
      href: "#comparativo-p6",
      rotulo: "Comparativo · PF × PJ",
      icone: "comparativo",
    },
    { href: "#fechamento-p6", rotulo: "Síntese final · Parte 06", icone: "flag" },
  ],
  footerNote: "Parte 06 concluída — Parte 07 (Estatuto do Desarmamento) já liberada.",
  titulo: "Crimes Ambientais (Lei 9.605) | Manual de Guerra — Parte 6 de 14",
};

const configP7: ParteConfig = {
  hero: heroP7,
  nomeCurto: "Desarmamento",
  blocos: blocosP7,
  linksFinais: [
    { href: "#quadro-penas-p7", rotulo: "Tabela comparativa · 12 a 21-A", icone: "pena" },
    {
      href: "#comparativo-p7",
      rotulo: "Comparativo · 12 × 14 × 16 × § 2º",
      icone: "comparativo",
    },
    { href: "#fechamento-p7", rotulo: "Síntese final · Parte 07", icone: "flag" },
  ],
  footerNote: "Parte 07 concluída — Parte 08 (Lei Maria da Penha) já liberada.",
  titulo: "Estatuto do Desarmamento | Manual de Guerra — Parte 7 de 14",
};

const configP8: ParteConfig = {
  hero: heroP8,
  nomeCurto: "Maria da Penha",
  blocos: blocosP8,
  linksFinais: [
    { href: "#quadro-penas-p8", rotulo: "Quadro · súmulas 536–600", icone: "pena" },
    {
      href: "#comparativo-p8",
      rotulo: "Mapa · medidas protetivas",
      icone: "comparativo",
    },
    { href: "#fechamento-p8", rotulo: "Síntese final · Parte 08", icone: "flag" },
  ],
  footerNote: "Parte 08 concluída — Parte 09 (Lei de Drogas, 1ª leva) já liberada.",
  titulo: "Lei Maria da Penha | Manual de Guerra — Parte 8 de 14",
};

const configP9: ParteConfig = {
  hero: heroP9,
  nomeCurto: "Lei de Drogas",
  blocos: blocosP9,
  linksFinais: [
    { href: "#quadro-penas-p9", rotulo: "Quadro de penas · 28 a 44", icone: "pena" },
    {
      href: "#comparativo-p9",
      rotulo: "Comparativo · 28 × 33 × § 4º",
      icone: "comparativo",
    },
    { href: "#fechamento-p9", rotulo: "Síntese final · Parte 09", icone: "flag" },
  ],
  footerNote: "Parte 09 concluída — Parte 10 (Súmulas e teses) já liberada.",
  titulo: "Lei de Drogas (11.343) | Manual de Guerra — Parte 9 de 14",
};

const configP10: ParteConfig = {
  hero: heroP10,
  nomeCurto: "Súmulas STF/STJ",
  blocos: blocosP10,
  linksFinais: [
    { href: "#quadro-penas-p10", rotulo: "Quadro · enunciados", icone: "pena" },
    {
      href: "#comparativo-p10",
      rotulo: "Mapa · números que a banca troca",
      icone: "comparativo",
    },
    { href: "#fechamento-p10", rotulo: "Síntese final · Parte 10", icone: "flag" },
  ],
  footerNote: "Parte 10 concluída — Parte 11 (Prisão Temporária · Fase 2) já liberada.",
  titulo: "Súmulas e teses STF/STJ | Manual de Guerra — Parte 10 de 14",
};

const configP11: ParteConfig = {
  hero: heroP11,
  nomeCurto: "Prisão Temporária",
  blocos: blocosP11,
  linksFinais: [
    { href: "#quadro-penas-p11", rotulo: "Quadro · prazos e pedido", icone: "pena" },
    {
      href: "#comparativo-p11",
      rotulo: "Comparativo · flagrante × temp. × preventiva",
      icone: "comparativo",
    },
    { href: "#fechamento-p11", rotulo: "Síntese final · Parte 11", icone: "flag" },
  ],
  footerNote: "Parte 11 concluída — Parte 12 (JECrim, 1ª leva) já liberada.",
  titulo: "Prisão Temporária (7.960) | Manual de Guerra — Parte 11 · Fase 2",
};

const configP12: ParteConfig = {
  hero: heroP12,
  nomeCurto: "JECrim 9.099",
  blocos: blocosP12,
  linksFinais: [
    { href: "#quadro-penas-p12", rotulo: "Quadro · tetos e prazos", icone: "pena" },
    {
      href: "#comparativo-p12",
      rotulo: "Comparativo · 74 × 76 × 89",
      icone: "comparativo",
    },
    { href: "#fechamento-p12", rotulo: "Síntese + fluxograma", icone: "flag" },
  ],
  footerNote: "Parte 12 concluída — Parte 13 (Interceptação 9.296) já liberada.",
  titulo: "JECrim (9.099) | Manual de Guerra — Parte 12 · Fase 2",
};

const configP13: ParteConfig = {
  hero: heroP13,
  nomeCurto: "Interceptação 9.296",
  blocos: blocosP13,
  linksFinais: [
    { href: "#quadro-penas-p13", rotulo: "Quadro · prazos e penas", icone: "pena" },
    {
      href: "#comparativo-p13",
      rotulo: "Comparativo · interceptar × gravar × ambiental",
      icone: "comparativo",
    },
    { href: "#fechamento-p13", rotulo: "Síntese final · Parte 13", icone: "flag" },
  ],
  footerNote: "Parte 13 concluída — Parte 14 (ORCRIM, 1ª leva) já liberada.",
  titulo: "Interceptação telefônica (9.296) | Manual de Guerra — Parte 13 · Fase 2",
};

const configP14: ParteConfig = {
  hero: heroP14,
  nomeCurto: "ORCRIM 12.850",
  blocos: blocosP14,
  linksFinais: [
    { href: "#quadro-penas-p14", rotulo: "Quadro · 4 pessoas e 2/3", icone: "pena" },
    {
      href: "#comparativo-p14",
      rotulo: "Comparativo · 288 × 35 × 12.850",
      icone: "comparativo",
    },
    { href: "#fechamento-p14", rotulo: "Síntese + tabela de meios", icone: "flag" },
  ],
  footerNote: "Parte 14 concluída — Parte 15 (Súmulas Fase 2) já liberada.",
  titulo: "Organização Criminosa (12.850) | Manual de Guerra — Parte 14 · Fase 2",
};

const configP15: ParteConfig = {
  hero: heroP15,
  nomeCurto: "Súmulas Fase 2",
  blocos: blocosP15,
  linksFinais: [
    { href: "#quadro-penas-p15", rotulo: "Quadro geral · lei e número", icone: "pena" },
    {
      href: "#comparativo-p15",
      rotulo: "Mapa · o roteiro × o enunciado",
      icone: "comparativo",
    },
    { href: "#fechamento-p15", rotulo: "Síntese final · Parte 15", icone: "flag" },
  ],
  footerNote: "Parte 15 concluída — Parte 16 (Quiz 60 Q) já liberada.",
  titulo: "Súmulas Fase 2 (P11–P14) | Manual de Guerra — Parte 15",
};

const configP16: ParteConfig = {
  hero: heroP16,
  nomeCurto: "Quiz geral 60 Q",
  blocos: blocosP16,
  linksFinais: [{ href: "#fechamento-p16", rotulo: "Gabarito rápido · faixas", icone: "flag" }],
  footerNote: "Parte 16 · última da Fase 2 — gabarito no fechamento.",
  titulo: "Quiz geral 60 Q | Manual de Guerra — Parte 16",
};

const configs: Record<ParteId, ParteConfig> = {
  p1: configP1,
  p2: configP2,
  p3: configP3,
  p4: configP4,
  p5: configP5,
  p6: configP6,
  p7: configP7,
  p8: configP8,
  p9: configP9,
  p10: configP10,
  p11: configP11,
  p12: configP12,
  p13: configP13,
  p14: configP14,
  p15: configP15,
  p16: configP16,
};

/* ---------- app ---------- */
export default function App() {
  const [parte, setParte] = useState<ParteId | "home">("home");

  const trocar = (p: ParteId) => {
    setParte(p);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const irHome = () => {
    setParte("home");
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  useEffect(() => {
    document.title =
      parte === "home" ? "Manual de Guerra · Mapa das 16 partes" : configs[parte].titulo;
  }, [parte]);

  if (parte === "home") {
    return <Intro onAbrir={trocar} />;
  }

  const cfg = configs[parte];

  const info: NavInfo = {
    parteAtual: parte,
    nomeCurto: cfg.nomeCurto,
    onTrocar: trocar,
    onHome: irHome,
  };

  return (
    <div id="topo" className="min-h-screen bg-ink text-paper">
      <TopBar info={info} />
      <Hero config={cfg.hero} />
      <Metodo />

      <div className="flex">
        <Sidebar
          blocos={cfg.blocos}
          info={info}
          linksFinais={cfg.linksFinais}
          footerNote={cfg.footerNote}
        />

        <main className="min-w-0 flex-1">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            {cfg.blocos.map((bloco, bi) => (
              <div key={bloco.id}>
                {bi > 0 && (
                  <Divisor texto={`Fim do ${cfg.blocos[bi - 1].numero} · respire fundo`} />
                )}
                <section id={bloco.id} className="scroll-mt-24">
                  <BlocoHeader bloco={bloco} />
                  <div className="space-y-8">
                    {bloco.questoes && bloco.questoes.length > 0 ? (
                      <QuizLista questoes={bloco.questoes} />
                    ) : (
                      bloco.grupos.map((g, gi) => (
                        <ArticleCard key={g.id} grupo={g} index={gi} />
                      ))
                    )}
                  </div>
                </section>
                {parte === "p1" && <ExtraP1 blocoId={bloco.id} />}
              </div>
            ))}
          </div>
        </main>
      </div>

      {parte === "p1" ? (
        <>
          <Comparativo dados={comparativoP1} />
          <Checkpoint onAbrirParte2={() => trocar("p2")} />
        </>
      ) : parte === "p2" ? (
        <>
          <QuadroPenas dados={quadroPenasP2} />
          <Comparativo dados={comparativoP2} />
          <FechamentoP2
            onVoltarParte1={() => trocar("p1")}
            onAbrirParte3={() => trocar("p3")}
          />
        </>
      ) : parte === "p3" ? (
        <>
          <QuadroPenas dados={quadroPenasP3} />
          <Comparativo dados={comparativoP3} />
          <FechamentoP3
            onVoltarParte2={() => trocar("p2")}
            onAbrirParte4={() => trocar("p4")}
          />
        </>
      ) : parte === "p4" ? (
        <>
          <QuadroPenas dados={quadroPenasP4} />
          <Comparativo dados={comparativoP4} />
          <FechamentoP4
            onVoltarParte3={() => trocar("p3")}
            onAbrirParte5={() => trocar("p5")}
          />
        </>
      ) : parte === "p5" ? (
        <>
          <QuadroPenas dados={quadroPenasP5} />
          <Comparativo dados={comparativoP5} />
          <FechamentoP5
            onVoltarParte4={() => trocar("p4")}
            onAbrirParte6={() => trocar("p6")}
          />
        </>
      ) : parte === "p6" ? (
        <>
          <QuadroPenas dados={quadroPenasP6} />
          <Comparativo dados={comparativoP6} />
          <FechamentoP6
            onVoltarParte5={() => trocar("p5")}
            onAbrirParte7={() => trocar("p7")}
          />
        </>
      ) : parte === "p7" ? (
        <>
          <QuadroPenas dados={quadroPenasP7} />
          <Comparativo dados={comparativoP7} />
          <FechamentoP7
            onVoltarParte6={() => trocar("p6")}
            onAbrirParte8={() => trocar("p8")}
          />
        </>
      ) : parte === "p8" ? (
        <>
          <QuadroPenas dados={quadroPenasP8} />
          <Comparativo dados={comparativoP8} />
          <FechamentoP8
            onVoltarParte7={() => trocar("p7")}
            onAbrirParte9={() => trocar("p9")}
          />
        </>
      ) : parte === "p9" ? (
        <>
          <QuadroPenas dados={quadroPenasP9} />
          <Comparativo dados={comparativoP9} />
          <FechamentoP9
            onVoltarParte8={() => trocar("p8")}
            onAbrirParte10={() => trocar("p10")}
          />
        </>
      ) : parte === "p10" ? (
        <>
          <QuadroPenas dados={quadroPenasP10} />
          <Comparativo dados={comparativoP10} />
          <FechamentoP10
            onVoltarParte9={() => trocar("p9")}
            onAbrirParte11={() => trocar("p11")}
          />
        </>
      ) : parte === "p11" ? (
        <>
          <QuadroPenas dados={quadroPenasP11} />
          <Comparativo dados={comparativoP11} />
          <FechamentoP11
            onVoltarParte10={() => trocar("p10")}
            onAbrirParte12={() => trocar("p12")}
          />
        </>
      ) : parte === "p12" ? (
        <>
          <QuadroPenas dados={quadroPenasP12} />
          <Comparativo dados={comparativoP12} />
          <FechamentoP12
            onVoltarParte11={() => trocar("p11")}
            onAbrirParte13={() => trocar("p13")}
          />
        </>
      ) : parte === "p13" ? (
        <>
          <QuadroPenas dados={quadroPenasP13} />
          <Comparativo dados={comparativoP13} />
          <FechamentoP13
            onVoltarParte12={() => trocar("p12")}
            onAbrirParte14={() => trocar("p14")}
          />
        </>
      ) : parte === "p14" ? (
        <>
          <QuadroPenas dados={quadroPenasP14} />
          <Comparativo dados={comparativoP14} />
          <FechamentoP14
            onVoltarParte13={() => trocar("p13")}
            onAbrirParte15={() => trocar("p15")}
          />
        </>
      ) : parte === "p15" ? (
        <>
          <QuadroPenas dados={quadroPenasP15} />
          <Comparativo dados={comparativoP15} />
          <FechamentoP15
            onVoltarParte14={() => trocar("p14")}
            onAbrirParte16={() => trocar("p16")}
          />
        </>
      ) : (
        <FechamentoP16 onVoltarParte15={() => trocar("p15")} />
      )}
    </div>
  );
}
