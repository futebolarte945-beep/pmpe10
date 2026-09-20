import type { QuadroPenal } from "../tipos";

export const quadroPenasP10: QuadroPenal = {
  id: "quadro-penas-p10",
  selo: "Quadro · enunciados para decoreba",
  titulo: "Número · uma linha · a pegadinha",
  intro:
    "Não são penas: são teses. A coluna «pena» aqui é o recado. A «obs» é o que a banca distorce.",
  linhas: [
    { ref: "440", conduta: "Regime prisional", pena: "Pena-base no mínimo ≠ fechado por gravidade abstrata", obs: "Irmã da 719/STF" },
    { ref: "471", conduta: "Progressão · fato < 11.464/2007", pena: "Art. 112 LEP antigo (1/6)", obs: "Não é 2/5" },
    { ref: "501", conduta: "11.343 vs 6.368", pena: "Retroação **por inteiro** · sem combinação", obs: "Não é hediondez" },
    { ref: "512", conduta: "Privilegiado e hediondez", pena: "**CANCELADA** · vale HC 118.533", obs: "Não é competência" },
    { ref: "522", conduta: "Competência · entorpecentes", pena: "**STF**: Federal só para o exterior", obs: "Não é STJ · interestadual = Estadual" },
    { ref: "536", conduta: "LMP × 9.099 premial", pena: "Sem transação / sursis processual", obs: "Irmã do art. 41" },
    { ref: "542", conduta: "Lesão doméstica contra mulher", pena: "Pública **incondicionada**", obs: "ADI 4.424" },
    { ref: "587", conduta: "Art. 40, V", pena: "Intenção de cruzar o Estado basta", obs: "Não é concurso 28+33 · não é LMP" },
    { ref: "588", conduta: "VD com violência/grave ameaça", pena: "Sem substituição por restritivas", obs: "Art. 17 LMP" },
    { ref: "589", conduta: "VD contra a mulher", pena: "Insignificância **inaplicável**", obs: "Um tapa não é bagatela" },
    { ref: "600", conduta: "Art. 5º LMP", pena: "**Sem** coabitação", obs: "Namoro / ex / casas separadas" },
    { ref: "668", conduta: "Permitido com numeração raspada", pena: "**Não** hediondo", obs: "Hediondo = proibido, 17, 18" },
  ],
  macete:
    "**LMP 536-542-588-589-600. Drogas 501-512†-587-522/STF. Hediondos 440-471. Arma 668.** 118.533 tira o privilegiado. 39.173 solta a PJ.",
};
