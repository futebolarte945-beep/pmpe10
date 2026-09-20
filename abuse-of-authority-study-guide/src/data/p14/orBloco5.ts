import type { Bloco } from "../tipos";

export const orBloco5: Bloco = {
  id: "or-bloco-5",
  numero: "Bloco 05",
  titulo: "Rito ordinário, 120 dias e a Súmula 14",
  intervalo: "Arts. 22 e 23 · 2º, § 5º",
  subtitulo: "Preso 120+120 · solto sem 180 na lei · vista 3 dias",
  descricao:
    "O art. 22 manda o **procedimento ordinário** do CPP. O PU fixa teto só para o **réu preso**: 120 dias de instrução, prorrogáveis por até igual período. A lei **não** escreve 180 para o solto. Sequestro de bem não mora nos arts. 4º e 7º desta lei — aqueles artigos são colaboração.",
  notaProfessor: {
    titulo: "O 22 não é a Lei de Drogas",
    itens: [
      "11.343, art. 51 e ss., tem rito próprio. **12.850, 22** = ordinário do CPP + PU do preso (120, +120 se complexidade ou procrastinação do réu).",
      "**Não há** «réu solto = 180» no texto. Não invente. O «prazo razoável» do caput do PU não cria o 180.",
      "Arts. **4º e 7º** = colaboração, não perdimento. Afastamento do servidor = **2º, § 5º** (já no Bloco 2): **sem** prejuízo da remuneração.",
    ],
  },
  grupos: [
    {
      id: "or-art-22-23",
      ref: "Arts. 22 e 23",
      nome: "Ordinário, relógio do preso, sigilo com vista",
      contexto:
        "Crimes da lei e conexos: rito ordinário. Preso: instrução em 120 dias, + até 120 fundamentado. Sigilo da investigação pelo juiz (23), com acesso da defesa aos elementos de defesa, salvo diligência em andamento — o mesmo espírito da SV 14.",
      dispositivo: [
        "Art. 22. Os crimes previstos nesta Lei e as infrações conexas serão apurados mediante ==procedimento ordinário== do CPP, observado o PU.",
        "Parágrafo único. A instrução criminal deverá ser encerrada em prazo razoável, o qual não poderá exceder a ==120 (cento e vinte) dias== quando o réu estiver ==preso==, prorrogáveis em até igual período, por decisão fundamentada, motivada pela complexidade da causa ou por fato procrastinatório atribuível ao réu.",
        "Art. 23. O sigilo da investigação poderá ser decretado pelo juiz, assegurando-se ao defensor, no interesse do representado, amplo acesso aos elementos de prova que digam respeito à defesa, precedido de autorização judicial, ==ressalvados os referentes às diligências em andamento==.",
        "Parágrafo único. Depoimento do investigado: defensor com vista prévia, ainda que sigilosos, no mínimo ==3 (três) dias== antes.",
      ],
      notaDispositivo:
        "SV 14/STF: defesa tem acesso às provas já documentadas, não às diligências em curso. O 23 e o 7º, § 2º, repetem essa lógica. 3 dias de vista antes do depoimento é número de prova.",
      pena: "Rito · prazos",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Rito **ordinário** (não o da 11.343).",
        "Preso: **120 + 120**. Solto: **não há 180** na 12.850.",
        "SV **14**: o que já está nos autos, a defesa vê; o que está na rua, não.",
        "Vista **3 dias** antes do depoimento (23, PU).",
      ],
      pegadinha: [
        "«Réu preso 120, solto 180» — o 180 **não está** no 22.",
        "«Rito sumário, porque ORCRIM é especial» — o 22 manda o **ordinário**.",
        "«Sigilo fecha os autos até a sentença» — diligência em andamento; o resto a defesa acessa (SV 14).",
        "«Arts. 4º e 7º regulam o sequestro de bens» — são **colaboração**.",
      ],
      exemplo: [
        "Três réus presos, instrução no 110º dia, causa complexa: o juiz **prorroga** até 240, fundamentado. Réu solto no mesmo feito: o PU do 22 **não** lhe cola 180.",
      ],
      macete:
        "**Ordinário. Preso 120, e mais 120 se o processo for denso ou o réu atrasar.** Solto não ganhou 180 nesta lei. SV 14: o que já está no papel, o advogado lê.",
    },
  ],
};
