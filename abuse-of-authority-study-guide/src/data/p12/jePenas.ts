import type { QuadroPenal } from "../tipos";

export const quadroPenasP12: QuadroPenal = {
  id: "quadro-penas-p12",
  selo: "Quadro · Lei 9.099/1995",
  titulo: "Números que a banca troca",
  intro:
    "Tetos, prazos e portas. O 1 ano antigo do 61 morreu; o 1 ano que vive é a mínima do 89. Embargos **interrompem**. Apelação, não inominado.",
  linhas: [
    { ref: "61", conduta: "IMPO", pena: "Máxima **≤ 2 anos** ou contravenção", obs: "11.313 · JEF 10.259 igual" },
    { ref: "63", conduta: "Foro", pena: "Lugar da **prática**", obs: "≠ CPP 70" },
    { ref: "60, PU", conduta: "Conexão", pena: "Sobe + transação e composição", obs: "≠ Súm. 243" },
    { ref: "66, PU / 68", conduta: "Citação falha", pena: "Remessa ao **juízo comum**", obs: "Sem edital no JE" },
    { ref: "74 / 76 / 89", conduta: "Três portas", pena: "Cheque / pena sem processo / freezer 2–4 a", obs: "243 e 337 no 89" },
    { ref: "81", conduta: "AIJ", pena: "Defesa → recebimento → prova → sentença", obs: "Relatório dispensado · 3 testemunhas é o 34 cível" },
    { ref: "82", conduta: "Apelação", pena: "**10 dias** · Turma de 3 juízes", obs: "Não é inominado · não é o TJ" },
    { ref: "83", conduta: "Embargos", pena: "**5 dias** · **interrompem** (13.105)", obs: "Não suspendem" },
    { ref: "203 / 640", conduta: "Cortes Superiores", pena: "Sem REsp · com RE", obs: "Reclamação para tese do STJ" },
    { ref: "88 / 41 LMP / 90-A", conduta: "Fora ou condicionado", pena: "Representação na lesão · LMP e militar fora", obs: "Violência sozinha não expulsa" },
  ],
  macete:
    "**2 na máxima, 1 na mínima, 10 na apelação, 5 nos embargos que zeram o relógio.** 203 fecha o STJ; 640 abre o STF. 3 testemunhas são do cível.",
};
