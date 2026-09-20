import type { DadosComparativo } from "../tipos";

export const comparativoP15: DadosComparativo = {
  id: "comparativo-p15",
  selo: "Parte 15 · números trocados",
  rotulo: "O que o roteiro diz × o que vale",
  tituloPartes: ["O roteiro", "O enunciado certo", "Onde mora"],
  intro:
    "A prova da Fase 2 é um teste de etiqueta. Se o item cola 243 na conexão, 696 no querelante ou 720 no infiltrado físico, o item é falso.",
  colunas: [
    { id: "rot", titulo: "Roteiro (errado)", sub: "Não marque", cor: "blood" },
    { id: "cer", titulo: "Tese certa", sub: "Marque", cor: "gold" },
    { id: "mor", titulo: "Casa", sub: "Lei / corte", cor: "skyy" },
  ],
  linhas: [
    {
      criterio: "243/STJ",
      valores: [
        "Conexão de IMPO com crime grave",
        "Concurso no **89** se a mínima passa de 1 ano",
        "9.099 · sursis. Conexão = **60, PU**",
      ],
    },
    {
      criterio: "331/STJ",
      valores: [
        "Condições extras no sursis",
        "Apelação de embargos à **arrematação** (efeito devolutivo)",
        "Processo **civil**. Extra no 89 = **§ 2º**",
      ],
    },
    {
      criterio: "536/STJ",
      valores: [
        "Sursis × reparação do dano",
        "Transação e sursis **não** cabem na **LMP**",
        "11.340, art. 41",
      ],
    },
    {
      criterio: "696/STF",
      valores: [
        "Querelante propõe o 89",
        "MP recusa → analogia ao **art. 28 do CPP**",
        "Sursis · PGJ",
      ],
    },
    {
      criterio: "703/STF",
      valores: [
        "Absolvição sumária no JECrim",
        "Extinção do mandato de **prefeito** não impede o processo",
        "**Não** é 9.099",
      ],
    },
    {
      criterio: "720 / 90",
      valores: [
        "720 no físico; 90 na 12.850",
        "720 = **10-A** (virtual 12.850). 90 = **13.441/ECA**",
        "Infiltração",
      ],
    },
  ],
  macete:
    "**243 soma o 89. 536 é a Maria. 696 é o 28. 331 e 703 não moram no JE. 720 é a rede da facção.**",
};
