import type { Bloco } from "../tipos";

export const dsBloco4: Bloco = {
  id: "ds-bloco-4",
  numero: "Bloco 04",
  titulo: "ORCRIM — o juiz fora da mesa e a SV 14",
  intervalo: "Lei 12.850/2013 · Pet 7.074 · SV 14",
  subtitulo: "Homologa, não barganha · delação não basta · controlada avisa · 720 ≠ 90",
  descricao:
    "Pet 7.074 é o leading case da colaboração. O § 16 (13.964) alargou o «não só com a delação» para cautelar e recebimento. SV 14 vale no IP sigiloso: o que já está documentado, a defesa vê.",
  notaProfessor: {
    titulo: "720 e 90 não se emprestam",
    itens: [
      "**720 dias** = infiltração **virtual da 12.850** (10-A, § 4º). Física (art. 10): 6 meses + renovações, sem esse teto no texto.",
      "**90 dias** = Lei **13.441/2017** no **ECA**. Não é o 10-A.",
      "Controlada (8º): **comunicação**, não autorização (STJ).",
    ],
  },
  grupos: [
    {
      id: "ds-or-7074-16",
      ref: "Pet 7.074/STF · art. 4º, § 16",
      nome: "Juiz não negocia · delação não condena sozinha",
      contexto:
        "Plenário da Pet 7.074: o acordo é entre MP (ou delegado no IP, com o MP) e o colaborador + defensor. O juiz homologa regularidade, legalidade e voluntariedade — não senta na mesa.",
      dispositivo: [
        "📋 Pet 7.074/STF (Pleno). O juiz ==não participa== das negociações da colaboração premiada. O ==delegado== pode formalizar o acordo na fase pré-processual, com manifestação do MP. Homologação judicial posterior.",
        "📋 Tese legal (4º, § 16, 13.964) + STF. ==Nenhuma== das seguintes medidas se decreta/profere só com as declarações do colaborador: I – cautelares reais ou pessoais; II – recebimento da denúncia/queixa; III – ==sentença condenatória==.",
        "📋 SV 14/STF. É direito do defensor, no interesse do representado, ter acesso às provas já ==documentadas== nos autos, mesmo em IP sigiloso, ==ressalvadas as diligências em andamento==. 12.850, arts. 7º, § 2º, e 23 repetem a lógica.",
      ],
      notaDispositivo:
        "Retratação (§ 10): autoincriminatórias não se usam **exclusivamente** contra o colaborador. Delatado fala **depois** (§ 10-A). Renúncia ao silêncio **com** defensor (§ 14).",
      pena: "Pet 7.074 · § 16 · SV 14",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Juiz **homologa**, não barganha. Delegado **pode** no IP.",
        "§ 16: cautelar, denúncia **e** sentença.",
        "SV **14**: o que já está no papel; o que está na rua, não.",
      ],
      pegadinha: [
        "«O juiz preside a negociação para garantir a legalidade» — Pet **7.074** veda.",
        "«Só a condenação precisa de prova de corrobora» — o § 16 pega também **cautelar** e **recebimento**.",
        "«IP sigiloso: a defesa não vê nada até a denúncia» — **SV 14**.",
      ],
      exemplo: [
        "Acordo no gabinete do delegado, MP ciente, juiz ouve o colaborador e homologa: 7.074 ok. Preventiva do chefão **só** com a fita da delação: § 16, I — **não decreta**.",
      ],
      macete: "**Juiz fora da mesa. Delação é isca, não é o peixe. SV 14 lê o que já está escrito.**",
    },
    {
      id: "ds-or-controlada-720",
      ref: "STJ art. 8º · arts. 10 e 10-A",
      nome: "Controlada avisa · 720 na rede da facção · 90 na do ECA",
      contexto:
        "STJ: ação controlada independe de autorização; basta comunicação prévia (8º, § 1º). Infiltração (10) é o contrário: papel do juiz.",
      dispositivo: [
        "📋 Tese (STJ). A ação controlada do art. 8º, § 1º, ==independe de autorização judicial==: exige ==comunicação prévia== ao juiz, que pode fixar limites e avisa o MP.",
        "📋 Tese. Infiltração ==física== (art. 10): autorização, 6 meses, renovável ==sem== teto de 720 no texto.",
        "📋 Tese. Infiltração ==virtual da 12.850== (10-A, 13.964): autorização, 6 meses, total ==≤ 720 dias==.",
        "📋 Tese. Infiltração virtual do ==ECA== (Lei 13.441/2017): autorização, ==90 dias== — ==outra lei==.",
      ],
      notaDispositivo:
        "Art. 13, PU: crime na infiltração só se inexigível conduta diversa; excesso responde. Identidade do colaborador no art. 18 (1 a 3), não «2 a 6 do infiltrado».",
      pena: "Comunicar × autorizar",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Controlada = **comunicação**. Infiltrado = **autorização**.",
        "720 = **10-A**. 90 = **13.441**.",
        "Física: 6 meses + renovação, sem 720 no art. 10.",
      ],
      pegadinha: [
        "«Controlada exige alvará, como a interceptação» — STJ: **comunica**.",
        "«Toda infiltração tem teto de 720» — só a **virtual da 12.850**.",
        "«Virtual da 12.850 é 90+90» — 90 é o **ECA**.",
      ],
      exemplo: [
        "PF acompanha o caminhão e comunica o plantão: controlada ok. Perfil falso na facção por 2 anos: 10-A, 720 estourados, prova nula.",
      ],
      macete: "**Avisa (8º). Pede (10 e 10-A). 720 na facção. 90 na criança.**",
    },
  ],
};
