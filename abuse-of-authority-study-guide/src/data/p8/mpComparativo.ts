import type { DadosComparativo } from "../tipos";

export const comparativoP8: DadosComparativo = {
  id: "comparativo-p8",
  selo: "Mapa mental · medidas protetivas",
  rotulo: "Art. 22 × Arts. 23–24 × Art. 12-C × Art. 24-A",
  tituloPartes: ["Amarram o agressor", "Amparam a ofendida", "Polícia (12-C)", "Descumprir"],
  intro:
    "Quatro gavetas. A primeira é o art. 22. A segunda, 23 e 24. A terceira é o afastamento excepcional da polícia. A quarta é o crime e a preventiva.",
  colunas: [
    { id: "a22", titulo: "Art. 22", sub: "Obrigam o agressor", cor: "blood" },
    { id: "a23", titulo: "Arts. 23 e 24", sub: "Protegem a ofendida", cor: "gold" },
    { id: "c12", titulo: "Art. 12-C", sub: "Afastar do lar (polícia)", cor: "skyy" },
    { id: "a24", titulo: "Art. 24-A + 313, III", sub: "Se furar a cerca", cor: "viol" },
  ],
  linhas: [
    {
      criterio: "Quem defere",
      valores: [
        "Juiz (48 h · pode de ofício, art. 19)",
        "Juiz (mesmo expediente)",
        "Juiz **sempre**; delegado só se município **sem comarca**; policial se sem comarca **e** sem delegado",
        "O tipo nasce da decisão **já deferida**",
      ],
    },
    {
      criterio: "Conteúdo",
      valores: [
        "Arma · lar · distância/contato/lugares · visitas · alimentos · programa · tornozeleira",
        "Programa/abrigo · recondução · ela sai sem perder direitos · separação de corpos · bens · procuração · caução",
        "**Só** afastamento do lar/local de convivência, com risco à vida/integridade",
        "Descumprir qualquer MPU judicial",
      ],
    },
    {
      criterio: "Prazo",
      valores: [
        "Pedido sobe em 48 h (12, III); juiz decide em 48 h (18)",
        "Mesmo 48 h",
        "Aviso ao juiz em **24 h** + decisão em 24 h",
        "Flagrante: fiança **só o juiz**",
      ],
    },
    {
      criterio: "Pena / efeito",
      valores: [
        "Cautelar (não é pena)",
        "Cautelar cível",
        "Cautelar excepcional",
        "**Reclusão 2–5 + multa** (14.994/2024) + preventiva 313, III",
      ],
    },
  ],
  macete:
    "**22 amarra ele. 23–24 amparam ela. 12-C é o interior sem juiz (só o lar). 24-A é 2 a 5 se furar.** Delegado na capital **não** vira juíza.",
};
