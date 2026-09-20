import type { Bloco } from "../tipos";

export const ptBloco3: Bloco = {
  id: "pt-bloco-3",
  numero: "Bloco 03",
  titulo: "Quem pede, quem não decreta, onde recolhe",
  intervalo: "Arts. 2º a 7º",
  subtitulo: "MP ou delegado · juiz nunca de ofício · cela separada · plantão 24 h",
  descricao:
    "Legitimidade estreita. O § 3º deixa o juiz agir de ofício para **ver** o preso — não para **decretar**. Art. 3º = separação. Arts. 6º e 7º são vigência e revogação. Não existe art. 8º.",
  grupos: [
    {
      id: "pt-legitimidade",
      ref: "Art. 2º caput e § 1º",
      nome: "Delegado representa, MP requer, juiz não inventa",
      contexto:
        "Sem pedido, não há temporária. Vítima, querelante, assistente, conselho tutelar: legitimidade **zero**. Juiz de ofício: **proibido** (caput). Depois da 13.964, o juiz também não decreta preventiva de ofício no IP (CPP 311) — a lógica é a mesma.",
      dispositivo: [
        "Art. 2º. A prisão temporária será decretada pelo Juiz, em face da ==representação da autoridade policial== ou de ==requerimento do Ministério Público==…",
        "§ 1º. Na representação da autoridade policial, o Juiz, antes de decidir, ==ouvirá o Ministério Público==.",
        "§ 3º. O Juiz poderá, ==de ofício==, ou a requerimento do MP e do Advogado, determinar que o preso lhe seja ==apresentado==, solicitar informações e submetê-lo a exame de corpo de delito.",
        "§ 4º. Mandado em duas vias; uma serve de ==nota de culpa==. § 5º. Prisão só ==depois== do mandado. § 6º. Direitos do art. 5º da CF.",
      ],
      notaDispositivo:
        "Representação do delegado **não** dispensa o MP: o juiz **ouve** o MP (§ 1º) e depois decide. «De ofício» do § 3º é fiscalização da custódia, não decreto. Nova temporária: se ainda há inquérito e **fatos novos** (filtro STF «novos ou contemporâneos»), cabe outro pedido — não é «prorrogação disfarçada» além do teto 5+5 / 30+30.",
      pena: "Sem ofício do juiz",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Legitimados: **delegado** (representação) e **MP** (requerimento).",
        "Juiz **não** decreta de ofício.",
        "Vítima **não** pede.",
        "Representação do delegado → juiz **ouve o MP** (§ 1º).",
        "Mandado **prévio** (§ 5º). Nota de culpa = 2ª via (§ 4º).",
      ],
      pegadinha: [
        "«O juiz pode decretar de ofício, como na preventiva antiga» — **não**.",
        "«O § 3º autoriza o decreto de ofício» — o § 3º é **apresentação** do preso.",
        "«A vítima ofendida requer ao juiz» — legitimidade **não**.",
      ],
      exemplo: [
        "Delegado representa no homicídio; juiz despacha sem ouvir o MP: nulidade pelo § 1º.",
        "Juiz lê o IP e decreta temporária sozinho: constrangimento ilegal.",
      ],
      macete:
        "**Quem pede: delegado ou MP. Quem nunca pede: vítima e juiz.** O § 3º é para **ver**, não para **prender**.",
    },
    {
      id: "pt-art-3-7",
      ref: "Arts. 3º a 7º",
      nome: "Cela à parte, plantão e o art. 4º fantasma",
      contexto:
        "3º: temporários separados dos demais (comuns **e** preventivos). 4º alterou a 4.898/65 (hoje a lógica está na 13.869, art. 9º — prolongar execução). 5º: plantão 24 h do Judiciário **e** do MP. 6º e 7º: vigência e revogação.",
      dispositivo: [
        "Art. 3º. Os presos temporários deverão permanecer, obrigatoriamente, ==separados dos demais detentos==.",
        "Art. 4º. Acrescentou a alínea i ao art. 4º da Lei 4.898/65 (prolongar temporária/pena/medida, deixar de expedir ou cumprir ordem de liberdade). Hoje: ==art. 9º da Lei 13.869/2019==.",
        "Art. 5º. Em todas as comarcas e seções judiciárias haverá ==plantão permanente de 24 horas== do Poder Judiciário e do Ministério Público para apreciação dos pedidos.",
        "Arts. 6º e 7º. Vigência na publicação; revogam-se as disposições em contrário. ==Não há art. 8º.==",
      ],
      notaDispositivo:
        "Separação é obrigatória — mistura com preventivo é a pegadinha («é tudo cautelar, pode junto»). Plantão do **MP também**, não só do juiz. Art. 4º da 7.960 não é tipo vigente autônomo: a 4.898 foi substituída pela 13.869.",
      pena: "Organização da custódia",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "Temporário **separado** dos demais (art. 3º).",
        "Plantão **24 h** do juiz **e** do MP (art. 5º).",
        "Lei vai até o **art. 7º**.",
      ],
      pegadinha: [
        "«Art. 3º = prazo de 30 dias» — é **separação**.",
        "«Pode recolher com os preventivos, porque ambos são cautelares» — **separados**.",
        "«A lei tem 8 artigos» — **7**.",
      ],
      exemplo: [
        "Delegado joga o temporário na mesma cela do preventivo da mesma investigação: fere o 3º (e pode sobrar 13.869 se houver dolo específico).",
      ],
      macete:
        "**3º é cela à parte, não relógio.** Plantão é juiz **e** promotor. A lei acaba no 7º.",
    },
  ],
};
