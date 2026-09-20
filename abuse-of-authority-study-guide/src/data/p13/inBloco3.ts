import type { Bloco } from "../tipos";

export const inBloco3: Bloco = {
  id: "in-bloco-3",
  numero: "Bloco 03",
  titulo: "Quinze mais quinze — e o STF deixou repetir",
  intervalo: "Arts. 4º, § 2º, e 5º",
  subtitulo: "24 h para decidir · 15 dias · Tema 661 · prazo da diligência",
  descricao:
    "A decisão tem 24 horas, tem de ser fundamentada (nulidade se não for) e mede 15 dias, renovável por igual tempo se a prova continuar indispensável. O Tema 661/STF chancelou **renovações sucessivas**, com motivação concreta — ainda que sucinta. Modelo genérico anula.",
  notaProfessor: {
    titulo: "«Uma vez» no 5º não é «uma única vez»",
    itens: [
      "A locução «renovável por igual tempo uma vez comprovada a indispensabilidade» foi lida pelo STF (Tema **661**, RE 625.263, 2022) como: 15 + 15 **quantas vezes** forem necessárias, se o 2º continuar presente e a decisão (inicial e cada prorrogação) tiver **justificativa legítima, ainda que sucinta**, ligada ao caso — não «copia e cola».",
      "O prazo é da **diligência** (execução da captação), não o da data em que o juiz assinou. Ordem no dia 1º, operadora liga no dia 4: os 15 correm da **implementação**.",
      "Ambiental (8º-A, § 3º): também 15 dias, renovável por iguais períodos se indispensável **e** houver atividade **permanente, habitual ou continuada** — filtro extra que o 5º não tem.",
    ],
  },
  grupos: [
    {
      id: "in-art-4-5",
      ref: "Arts. 4º e 5º",
      nome: "Pedido, 24 horas e o relógio de 15",
      contexto:
        "Pedido escrito com a demonstração de necessidade e os meios. Exceção: verbal, reduzido a termo. Juiz decide em no máximo 24 horas. Decisão sem fundamento = nula. Tem de dizer **como** se executa.",
      dispositivo: [
        "Art. 4º. O pedido conterá a demonstração de que a realização é necessária à apuração de infração penal, com indicação dos meios a serem empregados.",
        "§ 1º. Excepcionalmente, o juiz poderá admitir pedido ==verbal==, presentes os pressupostos, condicionado à ==redução a termo==.",
        "§ 2º. O juiz, no prazo máximo de ==vinte e quatro horas==, decidirá sobre o pedido.",
        "Art. 5º. A decisão será ==fundamentada==, sob pena de ==nulidade==, indicando também a forma de execução da diligência, que não poderá exceder o prazo de ==quinze dias==, renovável por igual tempo uma vez comprovada a indispensabilidade do meio de prova.",
      ],
      notaDispositivo:
        "Tema 661: sucessivas, com 2º + necessidade concreta + complexidade; motivação sucinta vale, **padronizada** não. STJ na mesma linha (HC 143.805 e seq.). Cada prorrogação é **nova decisão**, não um carimbo no canto da primeira.",
      pena: "24 h · 15+15…",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**24 horas** para decidir (4º, § 2º).",
        "**15 dias**, renovável por 15, **sucessivas** (Tema 661).",
        "Sem fundamentação = **nula** (5º).",
        "Prazo = **execução**, não a assinatura.",
        "Pedido verbal só excepcional + termo.",
      ],
      pegadinha: [
        "«Só uma prorrogação, porque a lei diz uma vez» — STF: **sucessivas**.",
        "«30 dias corridos da decisão, como na temporária» — são **15+15**, da **diligência**.",
        "«A renovação pode repetir o «cumpra-se» genérico» — Tema 661 mata o modelo.",
      ],
      exemplo: [
        "Ordem em 3 de março, operadora ativa em 5 de março, 00h: o 15º dia conta de **5**. No 14, o MP pede mais 15 com o que a linha já mostrou; o juiz fundamenta o novo trecho — lícito, mesmo na 8ª renovação, se o 661 estiver vivo no papel.",
      ],
      macete:
        "**24 h no gabinete, 15 na linha, e o 661 deixa repetir.** Quem copia modelo, anula. Quem conta da assinatura, erra o dia.",
    },
  ],
};
