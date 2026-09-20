import type { DadosComparativo } from "../tipos";

export const comparativoP14: DadosComparativo = {
  id: "comparativo-p14",
  selo: "Parte 14 · três associações",
  rotulo: "288 × 35 × 12.850",
  tituloPartes: ["Associação 288", "Associação tráfico 35", "ORCRIM 12.850"],
  intro:
    "A banca acerta o 3-2-4 e erra a hierarquia e a arma. Informal vale. Arma na 12.850 é aumento até ½ por arma de fogo — não é o PU do 288.",
  colunas: [
    { id: "c288", titulo: "CP 288", sub: "Associação criminosa", cor: "gold" },
    { id: "c35", titulo: "11.343, 35", sub: "Associação para o tráfico", cor: "blood" },
    { id: "c850", titulo: "12.850, 2º", sub: "Organização criminosa", cor: "skyy" },
  ],
  linhas: [
    {
      criterio: "Pessoas",
      valores: ["**3** ou mais", "**2** ou mais", "**4** ou mais"],
    },
    {
      criterio: "Estrutura",
      valores: [
        "Fim de cometer crimes (estabilidade da doutrina)",
        "Fim dos crimes da 11.343",
        "Ordenada + **divisão de tarefas**, **ainda que informal** — não é «hierarquia de organograma»",
      ],
    },
    {
      criterio: "Filtro extra",
      valores: ["Não há teto de pena", "Tipo da Lei de Drogas", "Máxima **> 4 anos** **ou** transnacional"],
    },
    {
      criterio: "Pena",
      valores: ["**1 a 3**", "**3 a 10** + multa", "**3 a 8** + multa (+ crimes-fim)"],
    },
    {
      criterio: "Arma",
      valores: [
        "PU: associação **armada** ou criança → até **½**",
        "Não replica o 2º da 12.850",
        "§ 2º: **arma de fogo** → até **½**. Não use a palavra do 288",
      ],
    },
    {
      criterio: "Meios especiais",
      valores: ["CPP comum", "Rito 11.343 + meios gerais", "**Sim** — art. 3º (delação, controlada, infiltração…)"],
    },
  ],
  macete:
    "**2 no 35, 3 no 288, 4 na 12.850.** 1–3 / 3–10 / 3–8. Informal vale. Arma de fogo ≠ «associação armada».",
};
