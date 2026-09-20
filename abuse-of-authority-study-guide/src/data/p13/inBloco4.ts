import type { Bloco } from "../tipos";

export const inBloco4: Bloco = {
  id: "in-bloco-4",
  numero: "Bloco 04",
  titulo: "Como se executa, onde se esconde e o que se queima",
  intervalo: "Arts. 4º, 6º a 9º",
  subtitulo: "Autos apartados · transcrição · apensação tardia · inutilização",
  descricao:
    "Polícia executa, MP pode acompanhar, concessionária cede técnico. Autos em volume separado, sigilo. Só se apensa no fim do IP ou na conclusão do processo. O que não servir vira incidente de inutilização, com o MP na sala.",
  notaProfessor: {
    titulo: "O 9º não é «no prazo da ação penal» só",
    itens: [
      "Art. 9º: a inutilização pode ser **durante o inquérito, a instrução ou depois**. Requer MP **ou** a parte interessada. O PU: o MP **assiste**; o acusado/defensor **pode** estar — não é obrigatório.",
      "O roteiro resume «no prazo da ação penal, perante o juiz, com presença do MP» — falta o IP e falta que o defensor é **facultativo**.",
      "Transcrição (6º, § 1º): a lei manda transcrever a comunicação gravada. STF/STJ aceitam transcrição **dos trechos relevantes**, com acesso da defesa ao integral, sem exigir degustar hora a hora em audiência.",
    ],
  },
  grupos: [
    {
      id: "in-art-6-8",
      ref: "Arts. 6º a 8º",
      nome: "Polícia no cabo, MP na ciência, autos no cofre",
      contexto:
        "Deferido, a autoridade policial conduz e dá ciência ao MP. Gravação → transcrição. Fim da diligência → auto circunstanciado + resumo ao juiz, que aplica o 8º. Art. 7º: requisição às concessionárias.",
      dispositivo: [
        "Art. 6º. Deferido o pedido, a autoridade policial ==conduzirá== os procedimentos, dando ==ciência ao Ministério Público==, que poderá acompanhar a realização.",
        "§ 1º. Possibilitada a gravação, será determinada a ==transcrição==.",
        "§ 2º. Cumprida a diligência, a autoridade encaminha o resultado ao juiz, com ==auto circunstanciado== e resumo das operações.",
        "§ 3º. O juiz determina a providência do art. 8º, ciente o MP.",
        "Art. 7º. A autoridade policial poderá requisitar serviços e técnicos especializados às concessionárias de serviço público.",
        "Art. 8º. A interceptação ocorrerá em ==autos apartados==, apensados aos do IP ou do processo, preservando-se o ==sigilo== das diligências, gravações e transcrições.",
        "Parágrafo único. A apensação somente poderá ser realizada ==imediatamente antes do relatório== (IP) ou na ==conclusão== do processo ao juiz (arts. 407, 502 ou 538 do CPP).",
      ],
      notaDispositivo:
        "Sigilo é da diligência, não «segredo eterno contra a defesa»: depois de apensar, o contraditório chega (com cautelas). Apensar no meio do IP vaza o alvo — o PU **proíbe**. Pedido (art. 4º) descreve meios; o 5º descreve a forma de execução.",
      pena: "Sigilo · autos apartados",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Polícia executa; MP tem **ciência** e pode acompanhar.",
        "Transcrição + auto circunstanciado.",
        "Autos **apartados**; apensação **só no fim** (8º, PU).",
        "7º: operadora cede técnico, não «autoriza» a quebra — quem autoriza é o **juiz**.",
      ],
      pegadinha: [
        "«O MP executa a interceptação» — quem conduz é a **polícia** (6º).",
        "«Os autos da escuta tramitam junto desde o primeiro dia» — **apartados** até o relatório.",
        "«A defesa não vê nunca, porque o 8º é sigilo absoluto» — sigilo da diligência; depois, contraditório.",
      ],
      exemplo: [
        "Três meses de linha: o volume da interceptação vive lacrado. No dia do relatório, apensa. A defesa lê os trechos e pede o áudio integral — não o IP inteiro vazado na rua no dia 2.",
      ],
      macete:
        "**Polícia capta, MP olha, juiz guarda em volume separado.** Só cola no processo na reta final. Operadora obedece o 7º; não é ela quem manda.",
    },
    {
      id: "in-art-9",
      ref: "Art. 9º",
      nome: "Incidente de inutilização — o que não serve se apaga",
      contexto:
        "Gravação que não interessar à prova: decisão judicial de inutilizar, no IP, na instrução ou depois. Quem pede: MP ou interessado. Quem assiste: MP obrigatório; acusado facultativo.",
      dispositivo: [
        "Art. 9º. A gravação que não interessar à prova será ==inutilizada por decisão judicial==, durante o inquérito, a instrução processual ou após esta, em virtude de requerimento do Ministério Público ou da parte interessada.",
        "Parágrafo único. O incidente de inutilização será ==assistido pelo Ministério Público==, sendo ==facultada== a presença do acusado ou de seu representante legal.",
      ],
      notaDispositivo:
        "Não se «some com o HD no lixo da delegacia». Inutilizar é ato **judicial**. O que interessar segue no processo (e pode emprestar — Bloco 5).",
      pena: "Incidente",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Inutiliza o juiz, no IP **ou** depois.",
        "MP **assiste**. Acusado **pode** (não deve).",
        "Pedido: MP **ou** interessado.",
      ],
      pegadinha: [
        "«Só na ação penal» — o 9º fala também no **inquérito** e **após** a instrução.",
        "«Sem o réu o incidente é nulo» — a presença é **facultativa**.",
      ],
      exemplo: [
        "Horas de conversa de padaria no meio do tráfico: o juiz inutiliza esse trecho no IP, com o promotor na sala; o defensor foi intimado e não foi. Válido.",
      ],
      macete:
        "**O que não prova se queima no juízo.** MP na mesa. Réu, se quiser. Delegado não rasga fita sozinho.",
    },
  ],
};
