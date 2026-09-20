import type { Bloco } from "../tipos";

export const dsBloco1: Bloco = {
  id: "ds-bloco-1",
  numero: "Bloco 01",
  titulo: "Temporária — I+III, sem ofício, relógio da 8.072",
  intervalo: "Lei 7.960/1989 · ADIs 3.360 e 4.109",
  subtitulo: "II não prende · juiz não inventa · 5+5 / 30+30",
  descricao:
    "Primeiro caderno do dossiê da Fase 2. Sem súmula numerada da temporária: o que a banca cola é o STF de 2022 e o CPP acusatório.",
  notaProfessor: {
    titulo: "Como ler a Parte 15",
    itens: [
      "Cada card: **dispositivo = enunciado**, **cai = como a prova cobra**, **pegadinha = o número ou o verbo trocado**.",
      "O roteiro desta leva ainda troca **243** (não é conexão), **331** (não é o 89), **536** (é LMP, não «reparação»), **696** (não é o querelante) e **703** (não é absolvição sumária no JE).",
    ],
  },
  grupos: [
    {
      id: "ds-temp-incisos",
      ref: "ADIs 3.360 e 4.109/STF",
      nome: "Cumulatividade: I+III · II sozinho é inconstitucional",
      contexto:
        "O art. 1º tem três incisos. Corrente antiga pedia os três cumulativos ou fazia do II o «indispensável». O Plenário (2022, rel. Fachin) fechou: sem analogia no rol; vedada a prisão para averiguações fundada só na falta de teto/identidade.",
      dispositivo: [
        "📋 Tese (ADI 3.360 e ADI 4.109/STF, 2022). A temporária exige ==imprescindibilidade para o inquérito (I)== + ==fundadas razões de autoria/participação em crime do rol taxativo (III)==. O inciso ==II não sustenta==, sozinho, a prisão (é o atalho da «prisão para averiguações»).",
        "Cinco filtros cumulativos do STF: I concreto; III no rol, sem analogia; fatos novos/contemporâneos (CPP 312, § 2º); adequação; insuficiência do 319.",
      ],
      notaDispositivo:
        "STJ clássico (pré-2022) já dizia I+III, II dispensável. A banca literalista ainda cobra «os três cumulativos»: marque a tese das ADIs se o comando for «conforme o STF».",
      pena: "Tese STF · sem súmula nº",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**I+III**. II **não** é o inciso-chave.",
        "Rol **taxativo** (a–p). Sem analogia.",
        "Só **inquérito**. Denúncia = temporária cai.",
      ],
      pegadinha: [
        "«O inciso II é indispensável» — invertido. II sozinho é **inconstitucional** como fundamento.",
        "«Os três incisos são sempre cumulativos» — o II **não** precisa estar presente.",
      ],
      exemplo: [
        "Suspeito de furto, sem endereço: **não** há temporária (furto fora do rol + II sozinho vedado).",
      ],
      macete: "**I prende a investigação. III prende o crime. II não prende ninguém sozinho.**",
    },
    {
      id: "ds-temp-oficio",
      ref: "Art. 2º, 7.960 · CPP 3º-A",
      nome: "Juiz não decreta de ofício · nova prisão não é 3ª prorrogação",
      contexto:
        "A lei fala em representação do delegado ou requerimento do MP. Pacote acusatório (13.964) enterrou o ofício na investigação. Soltou no 5º dia: não «prorroga de novo»; pode haver **nova** temporária se o IP continua e os requisitos (I+III) ainda estão de pé — com novo pedido e novo relógio de 5+5 (ou 30+30 na 8.072), não um terceiro acréscimo disfarçado.",
      dispositivo: [
        "📋 Tese. A temporária ==não== se decreta de ofício. Legitimados: ==delegado== (representação) ou ==MP== (requerimento). Vítima não pede.",
        "📋 Tese. Esgotado o prazo (5+5 ou 30+30), a porta abre ==sem alvará novo==. Nova decretação no mesmo IP exige ==novo== pedido e ==novos== (ou persistentes) requisitos — não é a «terceira prorrogação» que a 7.960 não tem.",
      ],
      notaDispositivo:
        "Art. 3º da 7.960 é **cela** (separado dos demais), não prazo. 30+30 mora na **8.072**, art. 2º, § 4º. A lei tem **sete** artigos.",
      pena: "Ofício vedado · 5+5",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Sem ofício. Sem pedido da vítima.",
        "5+5 comum; **30+30** na 8.072, não no art. 3º.",
        "Nova temporária ≠ terceira prorrogação.",
      ],
      pegadinha: [
        "«O juiz decreta de ofício, porque a lei é de 1989» — **não**, e o 3º-A fechou a porta.",
        "«Art. 3º = prazo de 30 dias» — o 3º é **cela**.",
      ],
      exemplo: [
        "Mandado de 5 dias caduca sexta. Segunda o delegado representa de novo, com fato novo no IP: o juiz pode decretar **outra** temporária de 5, não «+5 extra» no mesmo papel.",
      ],
      macete: "**Quem pede: polícia ou MP. Quem não pede: o juiz e a vítima.** 5+5 ou 30+30 na 8.072.",
    },
  ],
};
