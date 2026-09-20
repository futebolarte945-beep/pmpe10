import type { Bloco } from "../tipos";

export const dsBloco2: Bloco = {
  id: "ds-bloco-2",
  numero: "Bloco 02",
  titulo: "JECrim — os números que o roteiro troca",
  intervalo: "Lei 9.099/1995 · 243 · 337 · 536 · 696 · 203 · 640",
  subtitulo: "243 ≠ conexão · 331 ≠ 89 · 696 = art. 28 · 536 = LMP",
  descricao:
    "Caderno mais cobrado da Fase 2. Grave o verbo certo de cada número. 703/STF **não** fala em absolvição sumária no Juizado.",
  notaProfessor: {
    titulo: "Cinco trocas clássicas",
    itens: [
      "**243/STJ** = concurso no **89** (mínima > 1 ano). Conexão + transação no comum = **60, PU**.",
      "**331/STJ** = apelação de embargos à **arrematação** (efeito devolutivo). **Não** é condição extra do sursis. Condições extras = **89, § 2º**. (331 do **TST** é terceirização — outra justiça.)",
      "**536/STJ** = transação e sursis **não** cabem na **Maria da Penha**. Não é «sursis × reparação do dano» (reparar é o 89, § 1º, I).",
      "**696/STF** = MP recusa o 89 → analogia ao **art. 28 do CPP**. **Não** é legitimidade do querelante.",
      "**703/STF** = extinção do mandato de **prefeito** não impede processo por crime da legislação de responsabilidade. **Não** é absolvição sumária no JE.",
    ],
  },
  grupos: [
    {
      id: "ds-243-337-723",
      ref: "Súms. 243/STJ · 337/STJ · 723/STF",
      nome: "O 89 mede a mínima — concurso, desclassificação, continuado",
      contexto:
        "Sursis processual (art. 89): mínima ≤ 1 ano, em qualquer juízo. As três súmulas são o mapa da mínima.",
      dispositivo: [
        "📋 Súmula 243/STJ. O benefício da suspensão do processo ==não== se aplica às infrações em ==concurso material, formal ou continuidade==, quando a pena mínima cominada, pelo somatório ou pela majorante, ==ultrapassar 1 (um) ano==.",
        "📋 Súmula 337/STJ. É cabível a suspensão condicional do processo na ==desclassificação do crime== e na ==procedência parcial== da pretensão punitiva.",
        "📋 Súmula 723/STF. Não se admite a suspensão condicional do processo por crime ==continuado==, se a soma da pena mínima da infração mais grave com o aumento mínimo de ==1/6== for superior a um ano.",
      ],
      notaDispositivo:
        "243 e 723 se tocam no continuado. 337 reabre o 89 quando a sentença desce o tipo. Conexão com crime grave: o processo sobe (60), mas transação e composição sobrevivem no PU — **não** cite 243 para isso.",
      pena: "Art. 89 · mínima 1 ano",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "243 = **concurso** vs. 1 ano do 89. ≠ conexão.",
        "337 = desclassificou / procedência parcial → volta o 89.",
        "723 = continuado + 1/6 > 1 ano → sem 89.",
      ],
      pegadinha: [
        "«243 manda aplicar transação no juízo comum» — isso é o **60, PU**.",
        "«Desclassificou para ameaça: o 89 morreu porque a denúncia era outra» — **337**.",
      ],
      exemplo: [
        "Dois furtos em concurso material (1+1): **243**, sem sursis. Denúncia de 155, § 4º; sentença no caput: **337**, ouve o MP de novo.",
      ],
      macete: "**243 soma. 337 desce o tipo. 723 soma o continuado.** Conexão é o 60, PU.",
    },
    {
      id: "ds-696-536-331-703",
      ref: "Súms. 696/STF · 536/STJ · 203/STJ · 640/STF",
      nome: "Quem propõe, LMP, STJ fechado, STF aberto",
      contexto:
        "696 é recusa do MP. 536 tira 76 e 89 da Maria da Penha. Da Turma Recursal não vai REsp (203); vai RE se a questão for constitucional (640).",
      dispositivo: [
        "📋 Súmula 696/STF. Reunidos os pressupostos do sursis processual, recusando-se o Promotor a propô-lo, o juiz, dissentindo, remeterá a questão ao Procurador-Geral, aplicando-se por analogia o ==art. 28 do CPP==.",
        "📋 Súmula 536/STJ. A suspensão condicional do processo e a transação penal ==não se aplicam== na hipótese de delitos sujeitos ao rito da ==Lei Maria da Penha==.",
        "📋 Súmula 203/STJ. Não cabe ==recurso especial== contra decisão de órgão de segundo grau dos Juizados Especiais.",
        "📋 Súmula 640/STF. É cabível ==recurso extraordinário== contra decisão de juiz de 1º grau nas causas de alçada, ou por turma recursal de juizado especial cível e criminal.",
        "📋 STF (Plenário). Homologada a transação (76), o descumprimento ==não== executa a pena combinada: o MP ==retoma== a persecução (denúncia/IP). Sem coisa julgada material.",
      ],
      notaDispositivo:
        "331/STJ **não entra nesta lista** — é processo civil (embargos à arrematação). Extra no 89 = **§ 2º**. 703/STF = prefeito, não JE. Querelante na transação privada é **tese** (analogia), sem número 696. ED do 83 **interrompem** (13.105), não suspendem.",
      pena: "Propositura · LMP · recursos",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "696 = **28 do CPP**, não o querelante.",
        "536 = **LMP** mata 76 e 89 (irmã do art. 41).",
        "203 fecha o STJ. 640 abre o STF.",
        "Transação descumprida → **denúncia**, não execução.",
      ],
      pegadinha: [
        "«696: o querelante propõe o sursis» — 696 é recusa do **MP**.",
        "«536: sursis exige reparação do dano» — 536 é **Maria da Penha**. Reparar é o 89, § 1º, I.",
        "«331/STJ autoriza condições extras no 89» — 331 é **arrematação**. Extra = **§ 2º**.",
        "«703/STF: cabe absolvição sumária no JE» — 703 é **prefeito**. No JE o 81 recebe ou rejeita.",
      ],
      exemplo: [
        "Ameaça na LMP, máxima 6 meses: **536** + art. 41 — sem 76, sem 89, sem JE. Promotor recusa o 89 no furto simples: juiz manda ao PGJ (**696**), não propõe de ofício.",
      ],
      macete:
        "**696 é o 28. 536 é a Maria. 203 fecha, 640 abre. 331 e 703 não moram no JE.** Quebrou o 76, denuncia — não executa.",
    },
  ],
};
