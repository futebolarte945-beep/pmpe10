import type { Bloco } from "../tipos";

export const jeBloco3: Bloco = {
  id: "je-bloco-3",
  numero: "Bloco 03",
  titulo: "Citação, denúncia oral e a AIJ de um ato só",
  intervalo: "Arts. 66 a 68 e 77 a 81",
  subtitulo: "Sem edital · TCO no lugar do IP · sentença na audiência",
  descricao:
    "Se a citação pessoal falha, o JE devolve o feito ao juízo comum. Denúncia (ou queixa) pode ser oral, no TCO. A AIJ é um único ato: defesa, provas, debates, sentença.",
  notaProfessor: {
    titulo: "Correção de rota neste bloco",
    itens: [
      "O teto de **3 testemunhas** é o art. **34** (JE **cível**). No criminal, o art. **81, § 1º** autoriza o juiz a **limitar** prova excessiva; o art. **78, § 1º** pede intimação com **5 dias**. Não cole o 34 no 81.",
      "Art. **79** não é «citação simplificada»: se a preliminar não tentou conciliação/transação, a AIJ **reabre** os arts. 72 a 75.",
      "Nulidade: a 9.099 criminal **não** copia o art. 13 cível. Vale o 62 (informalidade) + CPP 563 (**prejuízo**). Sem prejuízo, não se anula.",
    ],
  },
  grupos: [
    {
      id: "je-art-66-68",
      ref: "Arts. 66 a 68",
      nome: "Citação pessoal — sem edital no JE",
      contexto:
        "Citação é no próprio Juizado ou por mandado. Não achou o autor do fato: as peças vão ao juízo comum (66, PU e 68). Intimações (67) podem ser por qualquer meio idôneo.",
      dispositivo: [
        "Art. 66. A citação será pessoal e far-se-á no próprio Juizado, sempre que possível, ou por mandado.",
        "Parágrafo único. Não encontrado o réu para ser citado, o Juiz encaminhará as peças existentes ao Juízo comum para adoção do procedimento previsto em lei.",
        "Art. 67. A intimação será feita por correspondência, com aviso de recebimento dos correios, ou por qualquer outro meio idôneo de comunicação.",
        "Art. 68. Não sendo encontrado o acusado, serão as peças remetidas à Justiça comum.",
      ],
      notaDispositivo:
        "Não existe citação por **edital** no JECrim. O 66, PU é a porta de saída. Art. 78: presente, a cópia da denúncia **já cita** e já marca a AIJ. Ausente, cita-se na forma dos 66 e 68.",
      pena: "Citação · competência",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Citação **pessoal**. Sem edital no JE.",
        "Não localizado → **juízo comum** (66, PU / 68).",
        "Intimação: AR ou meio idôneo (67).",
      ],
      pegadinha: [
        "«Cita-se por edital e o JE segue» — o PU do 66 **expulsa** o feito.",
        "«Art. 79 regula a citação» — 79 é conciliação tardia na AIJ.",
      ],
      exemplo: [
        "Ameaça, TCO, autor muda de bairro sem deixar endereço: o juiz do JE **não** edita. Encaminha ao comum, que aí sim pode citar por edital.",
      ],
      macete:
        "**No JE, ou cita na cara, ou devolve o processo.** Edital é linguagem do juízo comum.",
    },
    {
      id: "je-art-77-78",
      ref: "Arts. 77 e 78",
      nome: "Denúncia oral no TCO — IP dispensado",
      contexto:
        "Sem transação (ausente o autor ou 76 não coube), o MP denuncia **de imediato**, de preferência **oral**, no termo do 69. Complexidade: pede remessa ao comum (77, § 2º).",
      dispositivo: [
        "Art. 77. Na ação pública, quando não houver aplicação de pena (ausência do autor ou não ocorrência do 76), o MP oferecerá ao Juiz, de imediato, ==denúncia oral==, se não houver diligências imprescindíveis.",
        "§ 1º. Denúncia com base no TCO (art. 69), ==com dispensa do inquérito==; prescinde-se do exame de corpo de delito se a materialidade estiver em ==boletim médico== ou prova equivalente.",
        "§ 2º. Complexidade ou circunstâncias: o MP pode pedir o encaminhamento das peças (66, PU).",
        "§ 3º. Ação de iniciativa do ofendido: ==queixa oral==, com o mesmo filtro de complexidade.",
        "Art. 78. Oferecida a denúncia ou queixa, reduz-se a termo, entrega-se cópia ao acusado, que com ela fica ==citado== e cientificado da AIJ.",
        "§ 1º. Ausente o acusado: citação 66/68; testemunhas intimadas no mínimo ==5 dias== antes, se pedida a intimação.",
      ],
      notaDispositivo:
        "O TCO **substitui** o IP na regra. Diligência «imprescindível» trava a oralidade — não é capricho. Queixa oral no 77, § 3º (privada).",
      pena: "Peça acusatória",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Denúncia **oral** no TCO. IP **dispensado** na regra.",
        "Boletim médico pode substituir o corpo de delito.",
        "Complexo demais → comum (77, § 2º + 66, PU).",
        "Cópia da denúncia **cita** quem está presente (78).",
      ],
      pegadinha: [
        "«Sem IP a denúncia é nula» — o 77, § 1º **dispensa** o IP.",
        "«Denúncia no JE é sempre escrita» — a regra é **oral**.",
      ],
      exemplo: [
        "Lesão leve, atestado do UPA no TCO, autor na sala: o promotor denuncia **falando**; o escrivão reduz a termo; a cópia já cita para a AIJ da tarde.",
      ],
      macete:
        "**TCO é o IP do JE.** Denúncia na boca, corpo de delito no atestado, complexidade devolve o processo.",
    },
    {
      id: "je-art-80-81",
      ref: "Arts. 80 e 81",
      nome: "AIJ: um ato, sentença na hora",
      contexto:
        "Nada se adia (80) — condução coercitiva se precisar. 81: defensor responde à acusação → juiz recebe ou rejeita → vítima e testemunhas → interrogatório → debates → sentença. Relatório dispensado (§ 3º).",
      dispositivo: [
        "Art. 80. Nenhum ato será adiado, determinando o Juiz, quando imprescindível, a ==condução coercitiva== de quem deva comparecer.",
        "Art. 81. Aberta a audiência, a palavra ao defensor para ==responder à acusação==; o Juiz recebe ou não a denúncia/queixa; havendo recebimento, ouvem-se vítima e testemunhas, interroga-se o acusado, debates orais e ==prolação da sentença==.",
        "§ 1º. Todas as provas na AIJ; o Juiz pode ==limitar ou excluir== as excessivas, impertinentes ou protelatórias.",
        "§ 1º-A (Lei 14.245/2021). Respeito à dignidade da vítima; vedadas manifestações alheias aos fatos e linguagem/material que ofendam a vítima ou testemunhas.",
        "§ 2º. Termo da audiência + sentença, assinados.",
        "§ 3º. A sentença, ==dispensado o relatório==, mencionará os elementos de convicção.",
      ],
      notaDispositivo:
        "Ordem do 81 **inverte** o CPP clássico: defesa **antes** do recebimento. Testemunhas: **não** há teto legal de 3 no capítulo criminal (o 3 é o art. 34 cível). O juiz corta pelo § 1º. Lei Mariana Ferrer (§ 1º-A) já cai.",
      pena: "Rito da AIJ",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Defesa oral **antes** do recebimento.",
        "Provas + debates + **sentença na AIJ**.",
        "Relatório **dispensado**.",
        "80: não se adia; condução coercitiva.",
        "Nulidade só com **prejuízo** (62 + CPP 563).",
      ],
      pegadinha: [
        "«Máximo de 3 testemunhas no JECrim» — isso é o **34 cível**. Criminal: 81, § 1º.",
        "«Sentença em 10 dias, com relatório» — na AIJ, **sem** relatório.",
        "«Recebe a denúncia e só depois ouve a defesa» — o 81 é o contrário.",
      ],
      exemplo: [
        "Desacato, 4 testemunhas arroladas pelo MP. O juiz ouve 2 (o núcleo) e corta as outras pelo 81, § 1º. Fecha a sentença no mesmo termo. Sem prejuízo demonstrado, o corte não anula.",
      ],
      macete:
        "**Um ato só: fala o defensor, recebe, prova, debate, sentença.** Relatório fora. O 3 testemunhas mora no cível.",
    },
  ],
};
