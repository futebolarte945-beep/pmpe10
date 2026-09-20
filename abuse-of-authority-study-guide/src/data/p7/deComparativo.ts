import type { DadosComparativo } from "../tipos";

export const comparativoP7: DadosComparativo = {
  id: "comparativo-p7",
  selo: "Fechamento da Parte 07",
  rotulo: "Posse 12 × Porte 14 × Restrito 16 × Proibido 16 § 2º",
  tituloPartes: ["Posse 12", "Porte 14", "Restrito 16", "Proibido § 2º"],
  intro:
    "Quatro fotografias do mesmo revólver, mudando o lugar e o rótulo. A hediondez só entra na última coluna.",
  colunas: [
    { id: "c12", titulo: "Art. 12", sub: "Posse · permitido", cor: "gold" },
    { id: "c14", titulo: "Art. 14", sub: "Porte · permitido", cor: "skyy" },
    { id: "c16", titulo: "Art. 16 caput", sub: "Restrito", cor: "viol" },
    { id: "c162", titulo: "Art. 16 § 2º", sub: "Proibido", cor: "blood" },
  ],
  linhas: [
    {
      criterio: "Onde",
      valores: [
        "Casa, dependência, trabalho do dono (rural = o imóvel)",
        "Rua, carro, bar, hall — qualquer lugar que não seja o 5º",
        "Qualquer lugar (o caput unifica posse e porte)",
        "Qualquer lugar",
      ],
    },
    {
      criterio: "Arma",
      valores: ["Uso **permitido** (+ acessório/munição)", "Uso **permitido**", "Uso **restrito**", "Uso **proibido**"],
    },
    {
      criterio: "Pena",
      valores: [
        "**Detenção 1–3** + multa",
        "**Reclusão 2–4** + multa",
        "**Reclusão 3–6** + multa",
        "**Reclusão 4–12**",
      ],
    },
    {
      criterio: "Hediondo?",
      valores: ["Não", "Não", "**Não** (depois de 13.964)", "**Sim** (8.072, PU, II)"],
    },
    {
      criterio: "Desmuniciada",
      valores: ["Crime", "Crime", "Crime", "Crime"],
    },
    {
      criterio: "Insignificância",
      valores: ["Não (regra)", "Não (regra)", "Não (regra)", "Não (regra)"],
    },
    {
      criterio: "Art. 20 (+½)",
      valores: [
        "Não incide",
        "Sim (farda/empresa/clube ou reincidência específica)",
        "Sim",
        "Sim",
      ],
    },
    {
      criterio: "Ação penal",
      valores: [
        "Pública incondicionada",
        "Pública incondicionada",
        "Pública incondicionada",
        "Pública incondicionada",
      ],
    },
  ],
  macete:
    "**Lugar define 12 ou 14. Rótulo define 14 ou 16. Proibido define hediondez.** Restrito ficou comum. Desmuniciada não salva ninguém. Faca nem entra na foto.",
};
