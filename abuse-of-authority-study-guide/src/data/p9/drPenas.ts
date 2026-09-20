import type { QuadroPenal } from "../tipos";

export const quadroPenasP9: QuadroPenal = {
  id: "quadro-penas-p9",
  selo: "Quadro · Lei 11.343/2006",
  titulo: "De 28 a 44, em penas e teses",
  intro:
    "Hediondez: 33 caput e § 1º, 34 a 37. O § 4º sai (HC 118.533; 512 cancelada). 28 não prende. 36 é o teto clássico. 41 só desconta. 44: fiança continua trancada; LP não.",
  linhas: [
    { ref: "28", conduta: "Posse/transporte para consumo pessoal", pena: "Advertência · PSC · curso · **sem PPL**", obs: "5m / 10m reincidente · prescrição 2 anos · cannabis: RE 635.659" },
    { ref: "33 caput", conduta: "18 verbos (tráfico), ainda que de graça", pena: "**Recl. 5–15** + 500–1.500 d/m", obs: "Hediondo · inafiançável (44)" },
    { ref: "33 § 1º IV", conduta: "Vender/entregar a policial disfarçado", pena: "Mesmas do caput", obs: "Anticrime · **não** é o 40" },
    { ref: "33 § 2º", conduta: "Induzir, instigar ou auxiliar o uso", pena: "**Detenção 1–3**", obs: "Não é tráfico culposo" },
    { ref: "33 § 3º", conduta: "Oferecer eventual, sem lucro, a conhecido, juntos", pena: "**Detenção 6m–1a**", obs: "Sem prejuízo do 28" },
    { ref: "33 § 4º", conduta: "Privilegiado (4 requisitos)", pena: "**−1/6 a 2/3**", obs: "**Não hediondo** · 512 cancelada" },
    { ref: "34 / 35", conduta: "Maquinário · associação (**2+**)", pena: "**Recl. 3–10**", obs: "35 ≠ CP 288 (3 pessoas)" },
    { ref: "36", conduta: "Financiar 33/34", pena: "**Recl. 8–20**", obs: "Mais grave que o 33 · ≠ 40, VII" },
    { ref: "37", conduta: "Informante (fogueteiro)", pena: "**Recl. 2–6**", obs: "Não é o 33" },
    { ref: "40", conduta: "Majorantes I–VII", pena: "**+1/6 a 2/3**", obs: "I país · V Estado (Súm. 587 = intenção)" },
    { ref: "41", conduta: "Colaboração premiada desta lei", pena: "**−1/3 a 2/3**", obs: "Identificar **e** recuperar · sem perdão (≠ 12.850)" },
    { ref: "44", conduta: "Pacote do tráfico 33/34–37", pena: "Inafiançável · LC 2/3", obs: "LP **inconstitucional** · sursis/graça/anistia vedados" },
  ],
  macete:
    "**28 sem cadeia. 33 = 5 a 15 hediondo. 36 = 8 a 20. 35 pede 2. § 4º tira a hediondez. 41 só desconta. 44: fiança sim trava; LP o STF soltou.**",
};
