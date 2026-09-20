import type { ReactNode } from "react";
import type { ParteId } from "./tipos";

export interface HeroConfig {
  parteId: ParteId;
  chipSelo: string;
  chipParte: string;
  titulo: ReactNode;
  numeroGigante: string;
  leiLinha: string;
  leiComplemento: string;
  descricao: ReactNode;
  stats: { k: string; v: string }[];
  ctaInicio: string;
  ctaInicioHref: string;
  ctaRota: string;
  ctaRotaHref: string;
  dossie: string;
  quote: string;
  stamp: string;
}

export const heroP1: HeroConfig = {
  parteId: "p1",
  chipSelo: "Manual de guerra · penal & processual",
  chipParte: "Parte 01 de 14 · Fase 1 · Penal extravagante",
  titulo: (
    <>
      Lei do <em className="not-italic text-gold-2">Abuso</em>
      <br />
      de Autoridade
    </>
  ),
  numeroGigante: "13.869",
  leiLinha: "LEI Nº 13.869/2019",
  leiComplemento: "a revogadora da Lei 4.898/65 — artigo por artigo, até o 45",
  descricao: (
    <>
      Engenharia reversa das questões de prova em material de estudo: para cada artigo,
      <span className="hl"> o que cai</span>,{" "}
      <span className="text-blood-2">a pegadinha que derruba</span>,{" "}
      <span className="text-skyy-2">o exemplo que fixa</span> e{" "}
      <span className="text-viol-2">o macete que gruda</span>. Direcionado às cinco bancas que
      mais cobram a matéria.
    </>
  ),
  stats: [
    { k: "45", v: "artigos no raio-x" },
    { k: "25", v: "crimes em espécie" },
    { k: "05", v: "bancas mapeadas" },
    { k: "06", v: "blocos · parte 01 completa" },
  ],
  ctaInicio: "Iniciar o Bloco 01",
  ctaInicioHref: "#bloco-1",
  ctaRota: "Ver rota completa",
  ctaRotaHref: "#checkpoint",
  dossie: "Dossiê 001/2019",
  quote: "«O poder é o elemento; o abuso, o crime.»",
  stamp: "Veto derrubado",
};

export const heroP2: HeroConfig = {
  parteId: "p2",
  chipSelo: "Manual de guerra",
  chipParte: "Parte 02 de 14 · Penal extravagante",
  titulo: (
    <>
      Lei do <em className="not-italic text-gold-2">Racismo</em>
      <br />
      & Injúria Racial
    </>
  ),
  numeroGigante: "7.716",
  leiLinha: "LEI Nº 7.716/1989",
  leiComplemento:
    "a «Lei Caó» — racismo, injúria racial e discurso de ódio: do art. 1º ao 22, com a reforma da Lei 14.532/2023",
  descricao: (
    <>
      A lei que o STF ampliou e o Congresso rearrumou: <span className="hl">o que cai</span>,{" "}
      <span className="text-blood-2">a pegadinha que derruba</span>,{" "}
      <span className="text-skyy-2">o exemplo que fixa</span> e{" "}
      <span className="text-viol-2">o macete que gruda</span> — artigo por artigo, do preconceito
      no balcão ao ódio nas redes, já com a <span className="hl">Lei 14.532/2023</span> e o{" "}
      <span className="hl">HC 154.248/STF</span> dentro.
    </>
  ),
  stats: [
    { k: "22", v: "artigos na lupa" },
    { k: "20", v: "tipos & qualificadoras" },
    { k: "05", v: "bancas mapeadas" },
    { k: "04", v: "blocos · parte 02 completa" },
  ],
  ctaInicio: "Iniciar o Bloco 01",
  ctaInicioHref: "#r-bloco-1",
  ctaRota: "Ver rota completa",
  ctaRotaHref: "#fechamento-p2",
  dossie: "Dossiê 002/1989",
  quote: "«Preconceito não é opinião: é tipo penal.»",
  stamp: "Injúria = Racismo",
};

export const heroP3: HeroConfig = {
  parteId: "p3",
  chipSelo: "Manual de guerra",
  chipParte: "Parte 03 de 14 · Penal extravagante",
  titulo: (
    <>
      Lei dos <em className="not-italic text-gold-2">Crimes</em>
      <br />
      Hediondos
    </>
  ),
  numeroGigante: "8.072",
  leiLinha: "LEI Nº 8.072/1990",
  leiComplemento:
    "o rol taxativo do art. 1º — do homicídio qualificado ao vicaricídio, com o Pacote Anticrime, a Lei 14.811/2024 e o Marco Antifacção (2026)",
  descricao: (
    <>
      A lei que a Constituição mandou fazer (art. 5º, XLIII):{" "}
      <span className="hl">o que cai</span>,{" "}
      <span className="text-blood-2">a pegadinha que derruba</span>,{" "}
      <span className="text-skyy-2">o exemplo que fixa</span> e{" "}
      <span className="text-viol-2">o macete que gruda</span> — artigo por artigo,
      do rol até o art. 9º (letra morta), já com a{" "}
      <span className="hl">progressão 70–85%</span> da Lei 15.358/2026.
    </>
  ),
  stats: [
    { k: "13", v: "artigos na lupa" },
    { k: "20+", v: "figuras hediondas" },
    { k: "05", v: "bancas mapeadas" },
    { k: "04", v: "blocos · parte 03 completa" },
  ],
  ctaInicio: "Iniciar o Bloco 01",
  ctaInicioHref: "#h-bloco-1",
  ctaRota: "Ver rota completa",
  ctaRotaHref: "#fechamento-p3",
  dossie: "Dossiê 003/1990",
  quote: "«Hediondo não se presume: ou está no rol, ou não é.»",
  stamp: "Rol taxativo",
};

export const heroP4: HeroConfig = {
  parteId: "p4",
  chipSelo: "Manual de guerra",
  chipParte: "Parte 04 de 14 · Penal extravagante",
  titulo: (
    <>
      Crimes de <em className="not-italic text-gold-2">Trânsito</em>
      <br />
      · CTB XIX
    </>
  ),
  numeroGigante: "9.503",
  leiLinha: "LEI Nº 9.503/1997",
  leiComplemento:
    "Capítulo XIX — arts. 291 a 312-B: do JECRIM à Lei Seca, do homicídio culposo ao racha, já com as Leis 13.546/2017, 14.071/2020 e 14.599/2023",
  descricao: (
    <>
      Só o volante que vira tipo penal: <span className="hl">o que cai</span>,{" "}
      <span className="text-blood-2">a pegadinha que derruba</span>,{" "}
      <span className="text-skyy-2">o exemplo que fixa</span> e{" "}
      <span className="text-viol-2">o macete que gruda</span> — 6 dg/L, 0,3 mg/L,
      5 a 8 anos na embriaguez que mata, e o art. 291 que{" "}
      <span className="hl">não aumenta pena</span>.
    </>
  ),
  stats: [
    { k: "22", v: "artigos no capítulo" },
    { k: "16", v: "tipos em espécie" },
    { k: "05", v: "bancas mapeadas" },
    { k: "03", v: "blocos · parte 04 completa" },
  ],
  ctaInicio: "Iniciar o Bloco 01",
  ctaInicioHref: "#t-bloco-1",
  ctaRota: "Ver rota completa",
  ctaRotaHref: "#fechamento-p4",
  dossie: "Dossiê 004/1997",
  quote: "«Infração de trânsito não é crime — até o Capítulo XIX.»",
  stamp: "Lei Seca",
};

export const heroP5: HeroConfig = {
  parteId: "p5",
  chipSelo: "Manual de guerra",
  chipParte: "Parte 05 de 14 · Penal extravagante",
  titulo: (
    <>
      Lei da <em className="not-italic text-gold-2">Tortura</em>
      <br />
      · 9.455
    </>
  ),
  numeroGigante: "9.455",
  leiLinha: "LEI Nº 9.455/1997",
  leiComplemento:
    "quatro artigos que valem uma prova inteira — do constrangimento à extraterritorialidade, com o inciso III de 2026 (tortura doméstica reiterada)",
  descricao: (
    <>
      O crime que a Constituição equiparou ao hediondo:{" "}
      <span className="hl">o que cai</span>,{" "}
      <span className="text-blood-2">a pegadinha que derruba</span>,{" "}
      <span className="text-skyy-2">o exemplo que fixa</span> e{" "}
      <span className="text-viol-2">o macete que gruda</span> — comum no inciso I,
      próprio no II, omissão com pena{" "}
      <span className="hl">menor</span>, e a lei que{" "}
      <span className="hl">não tem art. 9º</span>.
    </>
  ),
  stats: [
    { k: "04", v: "artigos (só)" },
    { k: "08", v: "figuras do art. 1º" },
    { k: "05", v: "bancas mapeadas" },
    { k: "03", v: "blocos · parte 05 completa" },
  ],
  ctaInicio: "Iniciar o Bloco 01",
  ctaInicioHref: "#to-bloco-1",
  ctaRota: "Ver rota completa",
  ctaRotaHref: "#fechamento-p5",
  dossie: "Dossiê 005/1997",
  quote: "«Tortura é crime comum. Agente público só aumenta a conta.»",
  stamp: "Equiparada",
};

export const heroP6: HeroConfig = {
  parteId: "p6",
  chipSelo: "Manual de guerra",
  chipParte: "Parte 06 de 14 · Penal extravagante",
  titulo: (
    <>
      Crimes <em className="not-italic text-gold-2">Ambientais</em>
      <br />
      · 9.605
    </>
  ),
  numeroGigante: "9.605",
  leiLinha: "LEI Nº 9.605/1998",
  leiComplemento:
    "da PJ no banco ao laudo falso — arts. 1º a 69-A, com flora, poluição, patrimônio e administração ambiental",
  descricao: (
    <>
      A única lei que põe a pessoa jurídica no banco dos réus:{" "}
      <span className="hl">o que cai</span>,{" "}
      <span className="text-blood-2">a pegadinha que derruba</span>,{" "}
      <span className="text-skyy-2">o exemplo que fixa</span> e{" "}
      <span className="text-viol-2">o macete que gruda</span> — dupla imputação{" "}
      <span className="hl">morta</span>, art. 42 que é{" "}
      <span className="hl">balão</span>, pichação em tombado que{" "}
      <span className="hl">não é reclusão</span>, e o 69-A mais pesado que o CP 299.
    </>
  ),
  stats: [
    { k: "07", v: "blocos · lei completa" },
    { k: "69-A", v: "último tipo penal" },
    { k: "05", v: "bancas mapeadas" },
    { k: "26", v: "ação incondicionada" },
  ],
  ctaInicio: "Iniciar o Bloco 01",
  ctaInicioHref: "#am-bloco-1",
  ctaRota: "Ver rota completa",
  ctaRotaHref: "#fechamento-p6",
  dossie: "Dossiê 006/1998",
  quote: "«A empresa também senta no banco. A dupla imputação já saiu de moda.»",
  stamp: "Art. 26 incond.",
};

export const heroP7: HeroConfig = {
  parteId: "p7",
  chipSelo: "Manual de guerra",
  chipParte: "Parte 07 de 14 · Penal extravagante",
  titulo: (
    <>
      Estatuto do <em className="not-italic text-gold-2">Desarmamento</em>
      <br />
      · 10.826
    </>
  ),
  numeroGigante: "10.826",
  leiLinha: "LEI Nº 10.826/2003",
  leiComplemento:
    "posse, porte, disparo, restrito e proibido — arts. 12 a 21-A, com o Anticrime, a ADI 3.112, a Súmula 668 e o art. 21-A de 2026",
  descricao: (
    <>
      A lei em que o lugar e o rótulo decidem o tipo:{" "}
      <span className="hl">o que cai</span>,{" "}
      <span className="text-blood-2">a pegadinha que derruba</span>,{" "}
      <span className="text-skyy-2">o exemplo que fixa</span> e{" "}
      <span className="text-viol-2">o macete que gruda</span> — carro é{" "}
      <span className="hl">porte</span>, restrito{" "}
      <span className="hl">não é hediondo</span>, desmuniciada{" "}
      <span className="hl">pune</span>.
    </>
  ),
  stats: [
    { k: "10", v: "tipos (12 a 21-A)" },
    { k: "03", v: "hediondos (16 § 2º, 17, 18)" },
    { k: "05", v: "bancas mapeadas" },
    { k: "04", v: "blocos · parte 07" },
  ],
  ctaInicio: "Iniciar o Bloco 01",
  ctaInicioHref: "#de-bloco-1",
  ctaRota: "Ver rota completa",
  ctaRotaHref: "#fechamento-p7",
  dossie: "Dossiê 007/2003",
  quote: "«Restrito não é hediondo. Proibido é. O carro nunca foi a casa.»",
  stamp: "Súm. 668",
};

export const heroP8: HeroConfig = {
  parteId: "p8",
  chipSelo: "Manual de guerra",
  chipParte: "Parte 08 de 14 · Penal extravagante",
  titulo: (
    <>
      Lei <em className="not-italic text-gold-2">Maria da Penha</em>
      <br />
      · 11.340
    </>
  ),
  numeroGigante: "11.340",
  leiLinha: "LEI Nº 11.340/2006",
  leiComplemento:
    "do art. 1º ao 46 — sujeitos, MPU, 12-C, 24-A (2 a 5), ADC 19, ADI 4.424 e as súmulas 536-542-588-589-600",
  descricao: (
    <>
      A lei que a Constituição mandou fazer (226, § 8º):{" "}
      <span className="hl">o que cai</span>,{" "}
      <span className="text-blood-2">a pegadinha que derruba</span>,{" "}
      <span className="text-skyy-2">o exemplo que fixa</span> e{" "}
      <span className="text-viol-2">o macete que gruda</span> — vítima{" "}
      <span className="hl">mulher</span>, 9.099{" "}
      <span className="hl">fora</span>, lesão{" "}
      <span className="hl">incondicionada</span>.
    </>
  ),
  stats: [
    { k: "05", v: "blocos · 1º ao 46" },
    { k: "05", v: "súmulas STJ" },
    { k: "05", v: "formas FPS-PM" },
    { k: "2–5", v: "anos o 24-A" },
  ],
  ctaInicio: "Iniciar o Bloco 01",
  ctaInicioHref: "#mp-bloco-1",
  ctaRota: "Ver rota completa",
  ctaRotaHref: "#fechamento-p8",
  dossie: "Dossiê 008/2006",
  quote: "«A vítima é mulher. O JECRIM não entra. O soco não pede representação.»",
  stamp: "ADC 19",
};

export const heroP9: HeroConfig = {
  parteId: "p9",
  chipSelo: "Manual de guerra",
  chipParte: "Parte 09 de 14 · Penal extravagante",
  titulo: (
    <>
      Lei de <em className="not-italic text-gold-2">Drogas</em>
      <br />
      · 11.343
    </>
  ),
  numeroGigante: "11.343",
  leiLinha: "LEI Nº 11.343/2006",
  leiComplemento:
    "do Sisnad ao rito 48–59 — 18 verbos, privilegiado, art. 44, colaboração do 41, súmulas 501-512-522-587 e o RE 635.659",
  descricao: (
    <>
      A lei em que a lista decide o tipo:{" "}
      <span className="hl">o que cai</span>,{" "}
      <span className="text-blood-2">a pegadinha que derruba</span>,{" "}
      <span className="text-skyy-2">o exemplo que fixa</span> e{" "}
      <span className="text-viol-2">o macete que gruda</span> — 28{" "}
      <span className="hl">não prende</span>, § 4º{" "}
      <span className="hl">não é hediondo</span>, 35 pede{" "}
      <span className="hl">2</span>, disfarçado é o{" "}
      <span className="hl">33, § 1º, IV</span>.
    </>
  ),
  stats: [
    { k: "06", v: "blocos · 1º ao 59" },
    { k: "18", v: "verbos no 33" },
    { k: "2", v: "pessoas no 35" },
    { k: "8–20", v: "anos o 36" },
  ],
  ctaInicio: "Iniciar o Bloco 01",
  ctaInicioHref: "#dr-bloco-1",
  ctaRota: "Ver rota desta leva",
  ctaRotaHref: "#fechamento-p9",
  dossie: "Dossiê 009/2006",
  quote: "«Sem lista, sem crime. Privilegiado não é hediondo. Associação pede duas.»",
  stamp: "HC 118.533",
};

export const heroP10: HeroConfig = {
  parteId: "p10",
  chipSelo: "Manual de guerra",
  chipParte: "Parte 10 de 14 · Dossiê STF/STJ",
  titulo: (
    <>
      Súmulas <em className="not-italic text-gold-2">& teses</em>
      <br />
      · P1 a P9
    </>
  ),
  numeroGigante: "STF·STJ",
  leiLinha: "DOSSIÊ DE ENUNCIADOS",
  leiComplemento:
    "as nove leis já estudadas, em ordem — 440, 471, 501, 512†, 522, 536–600, 587, 668, ADC 19, ADI 4.424, HC 118.533, HC 154.248, RE 430.105, RE 635.659, RMS 39.173",
  descricao: (
    <>
      O caderno de prova que a banca cola fora de ordem:{" "}
      <span className="hl">o enunciado</span>,{" "}
      <span className="text-blood-2">a pegadinha do número trocado</span>,{" "}
      <span className="text-skyy-2">o exemplo que fixa</span> e{" "}
      <span className="text-viol-2">o macete que gruda</span> —{" "}
      <span className="hl">587 não é a 600</span>,{" "}
      <span className="hl">512 morreu</span>, privilegiado{" "}
      <span className="hl">não é hediondo</span>.
    </>
  ),
  stats: [
    { k: "06", v: "blocos · 9 leis" },
    { k: "12", v: "súmulas no quadro" },
    { k: "05", v: "bancas mapeadas" },
    { k: "512", v: "cancelada" },
  ],
  ctaInicio: "Iniciar o Bloco 01",
  ctaInicioHref: "#ju-bloco-1",
  ctaRota: "Ver rota completa",
  ctaRotaHref: "#fechamento-p10",
  dossie: "Dossiê 010/STF-STJ",
  quote: "«Número certo, tese certa. 587 não mora na Maria da Penha.»",
  stamp: "Súm. 668",
};

export const heroP11: HeroConfig = {
  parteId: "p11",
  chipSelo: "Manual de guerra · penal & processual",
  chipParte: "Parte 11 de 14 · Fase 2 · Processual extravagante",
  titulo: (
    <>
      Prisão <em className="not-italic text-gold-2">temporária</em>
      <br />
      · 7.960
    </>
  ),
  numeroGigante: "7.960",
  leiLinha: "LEI Nº 7.960/1989",
  leiComplemento:
    "Fase 2 — arts. 1º a 7º: I+III, rol a–p, 5+5, 30+30 na 8.072, ADIs 3.360 e 4.109, sem ofício do juiz",
  descricao: (
    <>
      A cautelar com relógio e rol:{" "}
      <span className="hl">o que cai</span>,{" "}
      <span className="text-blood-2">a pegadinha que derruba</span>,{" "}
      <span className="text-skyy-2">o exemplo que fixa</span> e{" "}
      <span className="text-viol-2">o macete que gruda</span> — inciso II{" "}
      <span className="hl">não prende sozinho</span>, art. 3º é{" "}
      <span className="hl">cela</span>, 30 dias mora na{" "}
      <span className="hl">8.072</span>.
    </>
  ),
  stats: [
    { k: "07", v: "artigos (não 8)" },
    { k: "5+5", v: "dias no comum" },
    { k: "30+30", v: "hediondo (8.072)" },
    { k: "24 h", v: "para o juiz" },
  ],
  ctaInicio: "Iniciar o Bloco 01",
  ctaInicioHref: "#pt-bloco-1",
  ctaRota: "Ver rota completa",
  ctaRotaHref: "#fechamento-p11",
  dossie: "Dossiê 011/1989",
  quote: "«I prende a investigação. III prende o crime. II não prende sozinho.»",
  stamp: "ADI 3.360",
};

export const heroP12: HeroConfig = {
  parteId: "p12",
  chipSelo: "Manual de guerra · penal & processual",
  chipParte: "Parte 12 de 14 · Fase 2 · Processual extravagante · JECrim",
  titulo: (
    <>
      Juizados <em className="not-italic text-gold-2">Especiais</em>
      <br />
      Criminais · 9.099
    </>
  ),
  numeroGigante: "9.099",
  leiLinha: "LEI Nº 9.099/1995",
  leiComplemento:
    "arts. 60 a 92 — IMPO de 2 anos, três despenalizadoras, AIJ, apelação 82, ED que interrompem, 203 e 640",
  descricao: (
    <>
      O rito que a banca mede no milímetro:{" "}
      <span className="hl">o que cai</span>,{" "}
      <span className="text-blood-2">a pegadinha que derruba</span>,{" "}
      <span className="text-skyy-2">o exemplo que fixa</span> e{" "}
      <span className="text-viol-2">o macete que gruda</span> — máxima{" "}
      <span className="hl">2</span>, mínima{" "}
      <span className="hl">1</span>, 243{" "}
      <span className="hl">não é conexão</span>.
    </>
  ),
  stats: [
    { k: "05", v: "blocos · lei criminal" },
    { k: "2 a", v: "máxima do IMPO" },
    { k: "10 d", v: "apelação (não inominado)" },
    { k: "203", v: "sem REsp da Turma" },
  ],
  ctaInicio: "Iniciar o Bloco 01",
  ctaInicioHref: "#je-bloco-1",
  ctaRota: "Ver rota desta leva",
  ctaRotaHref: "#fechamento-p12",
  dossie: "Dossiê 012/1995",
  quote: "«Máxima 2 no 61. Mínima 1 no 89. 243 soma; 60, PU leva a transação.»",
  stamp: "Súm. 696",
};

export const heroP13: HeroConfig = {
  parteId: "p13",
  chipSelo: "Manual de guerra · penal & processual",
  chipParte: "Parte 13 de 14 · Fase 2 · Processual extravagante",
  titulo: (
    <>
      Interceptação <em className="not-italic text-gold-2">telefônica</em>
      <br />
      · 9.296
    </>
  ),
  numeroGigante: "9.296",
  leiLinha: "LEI Nº 9.296/1996",
  leiComplemento:
    "Fase 2 — arts. 1º a 12, 8º-A e 10-A: fluxo, 15 dias, Tema 661, ambiental > 4 anos, crime 2 a 4",
  descricao: (
    <>
      A lei que fura o 5º, XII:{" "}
      <span className="hl">o que cai</span>,{" "}
      <span className="text-blood-2">a pegadinha que derruba</span>,{" "}
      <span className="text-skyy-2">o exemplo que fixa</span> e{" "}
      <span className="text-viol-2">o macete que gruda</span> — arquivo parado{" "}
      <span className="hl">não é fluxo</span>, 15 dias{" "}
      <span className="hl">se repetem</span>, a lei{" "}
      <span className="hl">acaba no 12</span>.
    </>
  ),
  stats: [
    { k: "12", v: "artigos (não 14)" },
    { k: "15 d", v: "Tema 661 sucessivo" },
    { k: "24 h", v: "para o juiz" },
    { k: "2–4", v: "anos no art. 10" },
  ],
  ctaInicio: "Iniciar o Bloco 01",
  ctaInicioHref: "#in-bloco-1",
  ctaRota: "Ver rota completa",
  ctaRotaHref: "#fechamento-p13",
  dossie: "Dossiê 013/1996",
  quote: "«Fluxo pede juiz. Arquivo parado, não. Quem grava a si mesmo não é o 10.»",
  stamp: "Tema 661",
};

export const heroP14: HeroConfig = {
  parteId: "p14",
  chipSelo: "Manual de guerra · penal & processual",
  chipParte: "Parte 14 de 14 · Fase 2 · Processual extravagante · ORCRIM",
  titulo: (
    <>
      Organização <em className="not-italic text-gold-2">criminosa</em>
      <br />
      · 12.850
    </>
  ),
  numeroGigante: "12.850",
  leiLinha: "LEI Nº 12.850/2013",
  leiComplemento:
    "arts. 1º a 27 — quatro pessoas, 3 a 8, colaboração, controlada, infiltração 720, 21-A 4 a 12",
  descricao: (
    <>
      A lei do quarto homem:{" "}
      <span className="hl">o que cai</span>,{" "}
      <span className="text-blood-2">a pegadinha que derruba</span>,{" "}
      <span className="text-skyy-2">o exemplo que fixa</span> e{" "}
      <span className="text-viol-2">o macete que gruda</span> —{" "}
      <span className="hl">4, não 3</span>, chefe{" "}
      <span className="hl">sem fração</span>, delação{" "}
      <span className="hl">não condena sozinha</span>.
    </>
  ),
  stats: [
    { k: "07", v: "blocos · lei completa" },
    { k: "4+", v: "pessoas no conceito" },
    { k: "720", v: "dias no virtual 10-A" },
    { k: "4–12", v: "anos o 21-A (2025)" },
  ],
  ctaInicio: "Iniciar o Bloco 01",
  ctaInicioHref: "#or-bloco-1",
  ctaRota: "Ver rota desta leva",
  ctaRotaHref: "#fechamento-p14",
  dossie: "Dossiê 014/2013",
  quote: "«Quatro cabeças. Três a oito. A delação é isca, não é o peixe.»",
  stamp: "Pet 7.074",
};

export const heroP15: HeroConfig = {
  parteId: "p15",
  chipSelo: "Manual de guerra · penal & processual",
  chipParte: "Parte 15 de 15 · Fase 2 · Dossiê STF/STJ",
  titulo: (
    <>
      Súmulas <em className="not-italic text-gold-2">& teses</em>
      <br />
      · P11 a P14
    </>
  ),
  numeroGigante: "STF·STJ",
  leiLinha: "DOSSIÊ PROCESSUAL",
  leiComplemento:
    "7.960, 9.099, 9.296 e 12.850 — 243, 337, 536, 696, 203, 640, 661, Pet 7.074, SV 14, ADIs 3.360/4.109",
  descricao: (
    <>
      O caderno em que a banca cola o número errado:{" "}
      <span className="hl">o enunciado</span>,{" "}
      <span className="text-blood-2">a pegadinha do verbo trocado</span>,{" "}
      <span className="text-skyy-2">o exemplo que fixa</span> e{" "}
      <span className="text-viol-2">o macete que gruda</span> —{" "}
      <span className="hl">243 não é conexão</span>,{" "}
      <span className="hl">696 é o 28</span>,{" "}
      <span className="hl">720 não é 90</span>.
    </>
  ),
  stats: [
    { k: "04", v: "blocos · 4 leis" },
    { k: "243", v: "soma o 89" },
    { k: "696", v: "é o art. 28" },
    { k: "661", v: "repete os 15" },
  ],
  ctaInicio: "Iniciar o Bloco 01",
  ctaInicioHref: "#ds-bloco-1",
  ctaRota: "Ver quadro geral",
  ctaRotaHref: "#quadro-penas-p15",
  dossie: "Dossiê 015/Fase-2",
  quote: "«243 soma. 536 é a Maria. 696 é o 28. 331 não visita o Juizado.»",
  stamp: "Súm. 696",
};

export const heroP16: HeroConfig = {
  parteId: "p16",
  chipSelo: "Manual de guerra · quiz geral",
  chipParte: "Parte 16 de 16 · Fase 2 · última",
  titulo: (
    <>
      Quiz <em className="not-italic text-gold-2">geral</em>
      <br />
      · 60 objetivas
    </>
  ),
  numeroGigante: "60 Q",
  leiLinha: "SIMULADO A–E",
  leiComplemento:
    "20 fáceis · 25 médias · 15 difíceis · 15 de cada banca (Cebraspe, FGV, FCC, AOCP/Vunesp)",
  descricao: (
    <>
      Marque A–E. O gabarito abre com o comentário e a pegadinha.{" "}
      <span className="hl">Não ensine o erro</span> do roteiro: 243 não é conexão, 696 é o 28, I+III,
      4 pessoas, 720 ≠ 90.
    </>
  ),
  stats: [
    { k: "60", v: "objetivas" },
    { k: "06", v: "blocos de 10" },
    { k: "05", v: "bancas" },
    { k: "16", v: "parte final" },
  ],
  ctaInicio: "Começar Q01",
  ctaInicioHref: "#qz-bloco-1",
  ctaRota: "Gabarito rápido",
  ctaRotaHref: "#fechamento-p16",
  dossie: "Dossiê 016/QUIZ",
  quote: "«Clique. Erre agora. Não erre na prova.»",
  stamp: "A–E",
};
