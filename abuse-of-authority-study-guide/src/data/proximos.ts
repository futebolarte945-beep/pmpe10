import type { ParteTrilha } from "./tipos";

/** Mapa geral de vetos da Lei 13.869/2019 — dispositivos que nunca vigoraram */
export const vetosSemVigencia = [
  "Art. 11",
  "Art. 14",
  "Art. 17",
  "Art. 26",
  "Art. 34",
  "Art. 35",
  "Art. 5º, III",
  "Art. 22, § 1º, II",
  "Parágrafo do art. 29",
];

/** Vetos derrubados pelo Congresso (promulgação) — VIGORAM e caem em prova */
export const vetosDerrubados = [
  "Art. 3º (ação penal)",
  "Art. 9º (prisão ilegal + § único)",
  "Art. 13, III (prova forçada)",
  "Art. 15, § único (silêncio/patrono)",
  "Art. 16 (identificação)",
  "Art. 20 (entrevista com advogado)",
  "Art. 30 (persecução sem justa causa)",
  "Art. 32 (acesso aos autos)",
  "Art. 38 (antecipação de culpa)",
  "Art. 43 (EOAB, art. 7º-B)",
];

/** As 14 partes da trilha de legislação penal extravagante */
export const trilha: ParteTrilha[] = [
  { n: 1, titulo: "Lei 13.869/2019 — Abuso de Autoridade", status: "disponivel" },
  { n: 2, titulo: "Lei 7.716/1989 — Racismo & Injúria Racial", status: "disponivel" },
  { n: 3, titulo: "Lei 8.072/1990 — Crimes Hediondos", status: "disponivel" },
  { n: 4, titulo: "Lei 9.503/1997 — Crimes de Trânsito (CTB XIX)", status: "disponivel" },
  { n: 5, titulo: "Lei 9.455/1997 — Lei de Tortura", status: "disponivel" },
  { n: 6, titulo: "Lei 9.605/1998 — Crimes Ambientais", status: "disponivel" },
  { n: 7, titulo: "Lei 10.826/2003 — Estatuto do Desarmamento", status: "disponivel" },
  { n: 8, titulo: "Lei 11.340/2006 — Lei Maria da Penha", status: "disponivel" },
  { n: 9, titulo: "Lei 11.343/2006 — Lei de Drogas", status: "disponivel" },
  { n: 10, titulo: "Dossiê STF/STJ — súmulas e teses (P1–P9)", status: "disponivel" },
  { n: 11, titulo: "Lei 7.960/1989 — Prisão Temporária (Fase 2)", status: "disponivel" },
  { n: 12, titulo: "Lei 9.099/1995 — JECrim", status: "disponivel" },
  { n: 13, titulo: "Lei 9.296/1996 — Interceptação telefônica", status: "disponivel" },
  { n: 14, titulo: "Lei 12.850/2013 — Organização Criminosa", status: "disponivel" },
  { n: 15, titulo: "Dossiê STF/STJ — súmulas Fase 2 (P11–P14)", status: "disponivel" },
  { n: 16, titulo: "Quiz geral — 60 objetivas (Fase 2 · parte 6)", status: "disponivel" },
];
