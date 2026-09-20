import type { DadosComparativo } from "../tipos";

export const comparativoP11: DadosComparativo = {
  id: "comparativo-p11",
  selo: "Fase 2 · cautelares pessoais",
  rotulo: "Flagrante × Temporária × Preventiva",
  tituloPartes: ["Flagrante", "Temporária", "Preventiva"],
  intro:
    "Três portas para a mesma cela. Só a do meio tem relógio curto e rol. Só a da esquerda nasce na rua. Só a da direita sobrevive à denúncia.",
  colunas: [
    { id: "fl", titulo: "Flagrante", sub: "CPP 301–310", cor: "gold" },
    { id: "te", titulo: "Temporária", sub: "Lei 7.960", cor: "blood" },
    { id: "pr", titulo: "Preventiva", sub: "CPP 311–316", cor: "skyy" },
  ],
  linhas: [
    {
      criterio: "Quem decreta / quem prende",
      valores: [
        "Qualquer do povo pode **prender**; a autoridade **lavra** o APF. Juiz **homologa** / relaxa / converte (310)",
        "**Juiz**, sob representação do **delegado** ou requerimento do **MP**",
        "**Juiz**, a pedido do MP, querelante, assistente ou representação do delegado (311). **Não** de ofício no IP (13.964)",
      ],
    },
    {
      criterio: "De ofício?",
      valores: ["Prisão na rua não é decreto judicial", "**Não**", "**Não** no inquérito (311). No processo, o 311 ainda fala em ofício — banca clássica: Anticrime tirou o ofício na investigação"],
    },
    {
      criterio: "Fase",
      valores: ["Fato típico em flagrante", "**Só inquérito**", "Inquérito **ou** processo"],
    },
    {
      criterio: "Prazo",
      valores: [
        "APF em 24 h; audiência de custódia; não é «prazo da prisão»",
        "**5+5** ou **30+30** (hediondo, 8.072, 2º § 4º). Dia da prisão entra",
        "**Sem prazo fixo** (duração pelo 316, § 1º — revisão 90 dias)",
      ],
    },
    {
      criterio: "Cabimento / crimes",
      valores: [
        "Qualquer infração penal em situação de flagrante (301–303)",
        "Rol **taxativo** do art. 1º, III (+ hediondos via 8.072) **e** imprescindibilidade (I)",
        "312: garantia da ordem pública/econômica, conveniência da instrução, aplicação da lei penal + 313",
      ],
    },
    {
      criterio: "Pedido da vítima?",
      valores: ["Não (é flagrante)", "**Não**", "Assistente/querelante podem (processo)"],
    },
    {
      criterio: "Conversão",
      valores: [
        "310: relaxa / converte em preventiva / medidas 319 / liberdade",
        "Pode **converter** em preventiva se o 312 aparecer **antes** do fim do prazo",
        "Revoga quando cessar o motivo (316)",
      ],
    },
  ],
  macete:
    "**Flagrante nasce na rua. Temporária nasce no papel do delegado/MP, só no IP, com relógio. Preventiva atravessa a denúncia e não tem teto de 5 dias.** Juiz não inventa temporária.",
};
