import type { DadosComparativo } from "../tipos";

export const comparativoP13: DadosComparativo = {
  id: "comparativo-p13",
  selo: "Parte 13 · meios de captação",
  rotulo: "Interceptação × Gravação × Ambiental",
  tituloPartes: ["Interceptação 9.296", "Gravação do interlocutor", "Ambiental 8º-A"],
  intro:
    "Três ouvidos. Só o da esquerda é o 5º, XII. Só o do meio não precisa de juiz. Só o da direita olha «máxima > 4 anos».",
  colunas: [
    { id: "int", titulo: "Interceptação", sub: "Arts. 1º–9º", cor: "gold" },
    { id: "gra", titulo: "Gravação", sub: "Um interlocutor", cor: "blood" },
    { id: "amb", titulo: "Ambiental estatal", sub: "Art. 8º-A", cor: "skyy" },
  ],
  linhas: [
    {
      criterio: "Quem capta",
      valores: [
        "Terceiro (Estado), **sem** ciência dos dois",
        "**Um** dos interlocutores",
        "Estado (polícia), no **ambiente**",
      ],
    },
    {
      criterio: "Juiz?",
      valores: [
        "**Sim** — juiz da ação principal (1º)",
        "**Não** (STF). 10-A, § 1º atípico",
        "**Sim**, a pedido de polícia/MP — **sem** ofício",
      ],
    },
    {
      criterio: "Filtro penal",
      valores: [
        "Não pode ser máxima **detenção** (2º, III) → tipo com **reclusão**",
        "Qualquer fato (é prova, não medida)",
        "Máxima **> 4 anos** ou conexo (8º-A, II)",
      ],
    },
    {
      criterio: "Prazo",
      valores: [
        "**15 + 15…** (Tema 661, sucessivas)",
        "Não há",
        "**15**, renovável se permanente/habitual/continuada",
      ],
    },
    {
      criterio: "Crime se furar",
      valores: [
        "Art. **10** — 2 a 4 + multa (+ PU do juiz)",
        "Atípico",
        "Art. **10-A** — 2 a 4; dobro se servidor vaza (§ 2º)",
      ],
    },
  ],
  macete:
    "**Telefone estatal = reclusão + 15 dias + Tema 661.** Ambiental estatal = **> 4 anos**. Quem grava a si mesmo não pede juiz e não comete o 10.",
};
