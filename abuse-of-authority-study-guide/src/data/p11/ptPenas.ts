import type { QuadroPenal } from "../tipos";

export const quadroPenasP11: QuadroPenal = {
  id: "quadro-penas-p11",
  selo: "Quadro · Lei 7.960/1989",
  titulo: "Relógio, pedido e porta",
  intro:
    "Não são penas: são prazos e legitimidade. O art. 3º não aparece na coluna do prazo — ele é cela.",
  linhas: [
    { ref: "1º I+III", conduta: "Cabimento (núcleo STF)", pena: "Imprescindível no IP + rol taxativo", obs: "II sozinho vedado · ADI 3.360/4.109" },
    { ref: "1º III", conduta: "Rol a–p", pena: "Dolosos graves listados + terrorismo (p)", obs: "Sem analogia · sem culpa · sem furto" },
    { ref: "2º", conduta: "Prazo comum", pena: "**5 dias + 5** (extrema necessidade)", obs: "Uma prorrogação" },
    { ref: "8.072 2º §4º", conduta: "Prazo hediondo/equiparado", pena: "**30 + 30**", obs: "Não é o art. 3º da 7.960" },
    { ref: "2º §2º", conduta: "Decisão judicial", pena: "**24 horas** do pedido", obs: "Fundamentada · plantão art. 5º" },
    { ref: "2º §8º", conduta: "Contagem", pena: "Inclui o dia do cumprimento", obs: "13.869/2019" },
    { ref: "2º §7º", conduta: "Término", pena: "Soltura **automática**", obs: "Sem novo alvará · salvo preventiva/prorrogação" },
    { ref: "2º caput", conduta: "Legitimidade", pena: "Delegado ou MP", obs: "Juiz **não** de ofício · vítima **não**" },
    { ref: "3º", conduta: "Custódia", pena: "Separado dos demais", obs: "Inclusive dos preventivos" },
  ],
  macete:
    "**5+5 ou 30+30. 24 h é o juiz. O 3º é a cela. Quem pede: delegado/MP.** I+III; II não segura.",
};
