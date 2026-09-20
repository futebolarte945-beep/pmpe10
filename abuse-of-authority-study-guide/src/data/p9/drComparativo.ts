import type { DadosComparativo } from "../tipos";

export const comparativoP9: DadosComparativo = {
  id: "comparativo-p9",
  selo: "Fechamento da Parte 09",
  rotulo: "Uso 28 × Tráfico 33 × Privilegiado § 4º",
  tituloPartes: ["Uso (28)", "Tráfico (33)", "Privilegiado (§ 4º)"],
  intro:
    "Três fotos da mesma substância. O § 2º do 28 é o filtro. O § 4º do 33 é o desconto — e tira a hediondez (HC 118.533). Fiança, LP e regime mudam de coluna.",
  colunas: [
    { id: "u", titulo: "Art. 28", sub: "Consumo pessoal", cor: "gold" },
    { id: "t", titulo: "Art. 33 caput", sub: "Tráfico", cor: "blood" },
    { id: "p", titulo: "Art. 33, § 4º", sub: "Privilegiado", cor: "mint" },
  ],
  linhas: [
    {
      criterio: "Destinação",
      valores: [
        "**Consumo pessoal** (checklist do § 2º)",
        "Mercancia / dispersão (mesmo de graça)",
        "Ainda é tráfico — só reduz a pena",
      ],
    },
    {
      criterio: "Pena",
      valores: [
        "Advertência, PSC, curso · **sem PPL** · PSC/curso ≤ 5m (10m se reincidente)",
        "**Reclusão 5–15** + 500–1.500 d/m",
        "A mesma, **−1/6 a 2/3**",
      ],
    },
    {
      criterio: "Hediondo?",
      valores: [
        "Não (cannabis uso: nem crime — RE 635.659)",
        "**Sim** (equiparado, 8.072)",
        "**Não** (HC 118.533 · Súm. 512 **cancelada**)",
      ],
    },
    {
      criterio: "Fiança",
      valores: [
        "Não há prisão para afiançar (48, § 2º)",
        "**Inafiançável** (art. 44 + CF 5º, XLIII)",
        "Hediondez caiu: fiança **não** está trancada pelo 8.072",
      ],
    },
    {
      criterio: "Liberdade provisória",
      valores: [
        "Nem chega a prender",
        "O 44 escreve «não»; o STF **riscou** (HC 104.339 / RE 1.038.925) — vale o **312**",
        "Mesmo recado: 312 do CPP, sem vedação absoluta",
      ],
    },
    {
      criterio: "Ação penal / rito",
      valores: [
        "**Pública** · **JECRIM** (48, § 1º) · TCO",
        "**Pública incondicionada** · rito especial 48–59",
        "O mesmo rito do 33",
      ],
    },
    {
      criterio: "Regime / progressão",
      valores: [
        "Sem PPL",
        "Hediondo: frações da 8.072 (fechado não é mais automático só pelo carimbo)",
        "**Progressão comum** (não hediondo)",
      ],
    },
    {
      criterio: "Prescrição",
      valores: ["**2 anos** (art. 30)", "Regras do CP", "Regras do CP (pena concreta)"],
    },
  ],
  macete:
    "**28: Juizado, sem cadeia, 5 meses no relógio.** **33: 5 a 15, hediondo, inafiançável; LP o STF devolveu.** **§ 4º: desconta e tira o carimbo (118.533).**",
};
