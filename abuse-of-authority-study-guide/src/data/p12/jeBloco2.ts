import type { Bloco } from "../tipos";

export const jeBloco2: Bloco = {
  id: "je-bloco-2",
  numero: "Bloco 02",
  titulo: "As três despenalizadoras — 74, 76 e 89",
  intervalo: "Arts. 69, 74, 76 e 89",
  subtitulo: "TCO · composição · transação · sursis processual",
  descricao:
    "O miolo da prova. 74 extingue (só privada e condicionada). 76 não é culpa nem reincidência. 89 mede a **mínima** (≤ 1 ano) e vale **fora** do JE. Súm. 696 não é o querelante.",
  notaProfessor: {
    titulo: "Números certos neste bloco",
    itens: [
      "**Súm. 696/STF:** se o MP **recusa** o sursis e o juiz discorda → analogia ao **art. 28 do CPP** (sobe ao PGJ). **Não** é legitimidade do querelante.",
      "**Súm. 243/STJ:** concurso que empurra a mínima para **> 1 ano** → sem 89.",
      "**Súm. 337/STJ:** desclassificação ou procedência parcial → volta-se a ouvir o MP sobre o 89.",
      "Condições extras no 89: o próprio **§ 2º** autoriza (não é «Súm. 331» — essa súmula **não** fala disso). STJ (REsp 1.498.034 e teses): pode até parecer pena (cesta, PSC), mas é **condição**.",
    ],
  },
  grupos: [
    {
      id: "je-art-69-74",
      ref: "Arts. 69 e 74",
      nome: "TCO e a composição que às vezes extingue",
      contexto:
        "69: termo circunstanciado, sem flagrante se for ao JE ou assumir compromisso. PU: em violência doméstica o juiz pode afastar do lar — mas a LMP (41) tirou o rito do JE; o afastamento mora no 22/12-C da 11.340.",
      dispositivo: [
        "Art. 69. A autoridade policial lavrará ==termo circunstanciado== e o encaminhará imediatamente ao Juizado, com o autor do fato e a vítima… PU: encaminhado ou com compromisso de comparecer → ==sem prisão em flagrante== e ==sem fiança==.",
        "Art. 74. A composição dos danos civis, homologada por sentença ==irrecorrível==, tem eficácia de título executivo no juízo cível.",
        "Parágrafo único. Ação ==privada== ou pública ==condicionada à representação==: o acordo homologado acarreta ==renúncia== à queixa ou à representação (extingue a punibilidade).",
      ],
      notaDispositivo:
        "Composição em ação **pública incondicionada** (ex.: 129, § 3º? lesão leve é condicionada pelo 88 da 9.099, salvo LMP): **não** extingue o crime — só o cível. Ameaça (147) é condicionada (CPP 147 c/c 100) → 74, PU extingue. Desacato (331) é incondicionada → 74 não mata o penal.",
      pena: "Composição · extinção só se privada/condicionada",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "TCO, não APF. Sem fiança se comparecer/compromisso.",
        "74, PU: extingue **só** privada e condicionada.",
        "Sentença homologatória da composição = **irrecorrível**.",
      ],
      pegadinha: [
        "«Composição sempre extingue a punibilidade» — **não** na pública incondicionada.",
        "«TCO admite fiança» — o PU do 69 dispensa fiança e flagrante.",
      ],
      exemplo: [
        "Dois vizinhos, ameaça, acordo de R$ 2 mil homologado: queixa/representação **renunciada**, crime some.",
        "Desacato ao PM + acordo de cesta básica: o cível se resolve; o 331 **segue** (transação, se couber).",
      ],
      macete:
        "**TCO, sem algema.** 74 só mata o crime se a ação **depende da vítima**. Incondicionada: o 74 é só o cheque cível.",
    },
    {
      id: "je-art-76",
      ref: "Art. 76",
      nome: "Transação penal — pena sem processo",
      contexto:
        "MP propõe (pública). Privada: tese dominante — o **querelante** propõe, por analogia (não confunda com a 696). Antes do recebimento da denúncia. Pena = restritiva ou multa. Não é culpa, não é reincidência, certidão só para bloquear nova transação em 5 anos.",
      dispositivo: [
        "Art. 76. Havendo representação ou sendo pública incondicionada, não sendo caso de arquivamento, o MP poderá propor a aplicação ==imediata== de pena ==restritiva de direitos ou multa==.",
        "§ 2º. Não se admite a proposta se: I – condenação definitiva a ==PPL== por crime; II – já beneficiado por transação nos ==últimos 5 anos==; III – antecedentes, conduta, personalidade, motivos e circunstâncias desaconselharem.",
        "§ 4º. A pena ==não importa reincidência==, registrada só para impedir o mesmo benefício em 5 anos.",
        "§ 6º. ==Não constará== de certidão de antecedentes, salvo para o § 4º, e ==não tem efeitos civis==.",
      ],
      notaDispositivo:
        "STF (Plenário): descumprida a transação, a homologação **não** faz coisa julgada material — o MP **retoma** a persecução (denúncia/IP). **Não** se executa a pena do acordo como título contra a liberdade. Intimação prévia para justificar o descumprimento. § 2º, I: só condenação a **PPL** definitiva — multa/restritiva antigas não bloqueiam. Contravenção anterior não é o I.",
      pena: "Restritiva ou multa · sem reincidência",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Antes da denúncia. MP (pública); querelante na privada (tese).",
        "Não é culpa, não é reincidência, certidão só para os 5 anos.",
        "Descumpriu → **denúncia**, não execução da pena combinada (STF).",
        "Veto: PPL definitiva; transação em 5 anos; maus antecedentes (§ 2º, III).",
      ],
      pegadinha: [
        "«Transação gera reincidência» — § 4º **não**.",
        "«Descumpriu: executa como título judicial» — STF manda **denunciar**.",
        "«Qualquer condenação anterior impede» — só **PPL** definitiva por **crime**.",
        "«Súm. 696: o querelante propõe a transação» — 696 é o **28 do CPP** no **89**.",
      ],
      exemplo: [
        "Porte de maconha (28), primário: transação (PSC/curso). Falta ao curso: MP denuncia o 28, não «executa» o curso na LEP.",
      ],
      macete:
        "**76 é pena sem denúncia, sem culpa, sem reincidência.** Quebrou o acordo, volta o processo — não a execução. 5 anos de quarentena.",
    },
    {
      id: "je-art-89",
      ref: "Art. 89",
      nome: "Sursis processual — mínima ≤ 1 ano, mesmo fora do JE",
      contexto:
        "Não é instituto só do Juizado: «abrangidas ou não por esta Lei». Mede a **mínima** (≤ 1), não a máxima. MP propõe **ao oferecer a denúncia**. Juiz recebe a denúncia e suspende. 2 a 4 anos. Prescrição não corre (§ 6º).",
      dispositivo: [
        "Art. 89. Nos crimes em que a pena ==mínima== for igual ou inferior a ==1 ano==, abrangidas ou não por esta Lei, o MP, ==ao oferecer a denúncia==, poderá propor a suspensão do processo por ==2 a 4 anos==, se o acusado não estiver sendo processado nem tiver sido condenado por outro crime, + requisitos do art. 77 do CP.",
        "§ 1º. Condições: I reparação do dano (salvo impossibilidade); II não frequentar certos lugares; III não ausentar-se da comarca sem autorização; IV comparecimento ==mensal==.",
        "§ 2º. O Juiz poderá especificar ==outras condições== adequadas ao fato e à pessoa.",
        "§ 3º. Revogação ==obrigatória==: processado por outro ==crime== ou não repara o dano sem justificativa.",
        "§ 4º. Revogação ==facultativa==: processado por ==contravenção== ou descumpre outra condição.",
        "§ 5º. Prazo sem revogação → ==extinta a punibilidade==. § 6º. ==Não corre prescrição==. § 7º. Recusa → o processo segue.",
      ],
      notaDispositivo:
        "Súm. 243: concurso que deixa a mínima > 1 ano → sem 89. Súm. 337: desclassificou ou procedência parcial → ouve o MP de novo. Súm. 696/STF: MP não propõe e o juiz quer → **28 do CPP**. Querelante na ação privada: analogia (propõe), mas o número 696 **não** é esse. Revogação depois do prazo: STJ (REsp 1.498.034, repetitivo) — pode, se o fato da quebra ocorreu **durante** o período de prova.",
      pena: "2–4 anos de prova · extinção no fim",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**Mínima ≤ 1 ano**, inclusive fora do JE (furto simples cabe; roubo não).",
        "MP propõe **com a denúncia**. Juiz **não** propõe de ofício (696 → 28 CPP).",
        "§ 2º = condições extras (a lei, não a «331»).",
        "§ 3º obrigatória (crime / não reparar) × § 4º facultativa (contravenção / resto).",
        "243 no concurso. 337 na desclassificação.",
      ],
      pegadinha: [
        "«89 só no JE» — o caput diz **abrangidas ou não**.",
        "«Mede a pena máxima de 2 anos» — o 89 mede a **mínima de 1**.",
        "«Súm. 696: querelante propõe» — 696 é recusa do **MP** + art. **28**.",
        "«Súm. 331 autoriza condições extras» — é o **§ 2º do 89**. Não invente 331.",
      ],
      exemplo: [
        "Furto simples (1 a 4): mínima 1 → 89 no juízo comum, mesmo sem ser IMPO.",
        "Dois furtos em concurso material: 1+1 = 2 → **243**, sem sursis.",
        "Denúncia por 155, § 4º; sentença desclassifica para caput: **337**, volta o 89.",
      ],
      macete:
        "**89 olha a mínima (1 ano) e mora em qualquer vara.** 243 soma. 337 reabre. 696 manda ao PGJ. § 3º é «crime/dano»; § 4º é o resto.",
    },
  ],
};
