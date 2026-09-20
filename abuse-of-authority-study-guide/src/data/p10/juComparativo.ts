import type { DadosComparativo } from "../tipos";

export const comparativoP10: DadosComparativo = {
  id: "comparativo-p10",
  selo: "Mapa mental · números que a banca troca",
  rotulo: "LMP × Drogas × Hediondos",
  tituloPartes: ["Maria da Penha", "Drogas", "Hediondos / armas"],
  intro:
    "Três gavetas. A banca cola o número da esquerda na tese da direita. Separe antes de marcar.",
  colunas: [
    { id: "lmp", titulo: "LMP", sub: "536–542–588–589–600", cor: "gold" },
    { id: "dr", titulo: "Drogas", sub: "501 · 512† · 587 · 522", cor: "blood" },
    { id: "he", titulo: "Hediondos / 10.826", sub: "440 · 471 · 668", cor: "mint" },
  ],
  linhas: [
    {
      criterio: "O que o número diz",
      valores: [
        "Sem 9.099 · lesão incondicionada · sem restritiva · sem bagatela · sem coabitação",
        "501 = não misture leis · 512 **cancelada** · 587 = intenção interestadual · 522/**STF** = Federal só no exterior",
        "440 = sem gravidade abstrata · 471 = fato velho, 1/6 · 668 = permitido raspado **não** hediondo",
      ],
    },
    {
      criterio: "O que a banca inventa",
      valores: [
        "«587 dispensa coabitação»",
        "«587 é concurso 28+33» · «501 é hediondez»",
        "«Todo 16 é hediondo» · «hediondo nunca progride»",
      ],
    },
    {
      criterio: "Julgado-chave",
      valores: [
        "ADC 19 · ADI 4.424",
        "HC 118.533 · RE 430.105 · RE 635.659",
        "HC 82.959 · RMS 39.173 (PJ, ambiental) · Súm. 668",
      ],
    },
  ],
  macete:
    "**LMP = 536 a 600, pulando a 587.** **587 é drogas.** **512 morreu; 501 não é hediondez.** **668 salva o permitido raspado.**",
};
