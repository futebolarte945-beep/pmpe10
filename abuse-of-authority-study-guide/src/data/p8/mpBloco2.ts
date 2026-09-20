import type { Bloco } from "../tipos";

export const mpBloco2: Bloco = {
  id: "mp-bloco-2",
  numero: "Bloco 02",
  titulo: "Delegacia, prazo de 48 h e o 12-C que o roteiro inflou",
  intervalo: "Arts. 10 ao 12-C",
  subtitulo: "Atendimento policial · MPU pelo juiz em 48 h · afastamento excepcional pela polícia",
  descricao:
    "Do 8º ao 12-B a lei organiza prevenção e atendimento. O que a banca cobra de verdade: o rol do art. 12, o encaminhamento em 48 horas (art. 12, § 1º / art. 18) e o art. 12-C — que NÃO transforma o delegado em juiz de MPU genérica.",
  notaProfessor: {
    titulo: "Correção de rota — o 12-C",
    itens: [
      "Lei 13.827/2019 **não** autorizou o delegado a «conceder medidas protetivas em 24 h» em qualquer comarca.",
      "O 12-C trata de **uma** medida: **afastamento imediato do lar**, e só se houver risco atual/iminente à vida ou à integridade física.",
      "Quem aplica: **I juiz** (sempre); **II delegado**, se o Município **não for sede de comarca**; **III policial**, se não for sede **e** não houver delegado no momento.",
      "Comunicar o juiz em **24 h**; o juiz decide em igual prazo se mantém ou revoga. Ciência ao MP.",
    ],
  },
  grupos: [
    {
      id: "mp-art-10-11",
      ref: "Arts. 8º a 11",
      nome: "Prevenção, assistência e o atendimento que a PM/PC não pode recusar",
      contexto:
        "8º = diretrizes (integração, estudos, campanhas). 9º = assistência à mulher (inclusive auxílio-aluguel, prioridade em transferência de trabalho). 10 e 11 = o primeiro contato com a polícia.",
      dispositivo: [
        "Art. 10. Na hipótese de iminência ou da prática de violência, a autoridade policial que tomar conhecimento da ocorrência ==adotará, de imediato, as providências legais cabíveis==.",
        "Parágrafo único. Aplica-se o disposto no caput ao descumprimento de medida protetiva de urgência.",
        "Art. 10-A. É da vítima a escolha do ==sexo do profissional== que fará o atendimento e, sempre que possível, o depoimento será gravado em meio audiovisual. (Lei 13.505/2017)",
        "Art. 11. A autoridade policial deverá, entre outras providências: I garantir proteção policial; II encaminhar ao hospital / IML; III fornecer transporte para abrigo ou local seguro; IV acompanhar para retirada de seus pertences; V informar direitos e serviços.",
      ],
      notaDispositivo:
        "O 10 PU amarra o descumprimento de MPU à atuação imediata da polícia (e hoje ao 24-A). 10-A: escolha do sexo do profissional — cai em prova de PM. 11, IV (acompanhar para pegar roupa/documento) é o mais cobrado do rol.",
      pena: "Deveres de polícia · sem pena própria",
      bancas: ["CEBRASPE", "FGV", "AOCP", "FCC"],
      cai: [
        "Atendimento **imediato** (10), inclusive no descumprimento de MPU.",
        "Vítima escolhe o **sexo** de quem atende (10-A).",
        "Rol do 11: proteção, hospital, transporte, **retirada de pertences**, informação.",
      ],
      pegadinha: [
        "«A PM só registra o B.O. e manda para casa» — o 11 manda **acompanhar** e **transportar**.",
        "«Descumprir MPU é só problema do juiz» — o 10 PU manda a polícia agir **de imediato**.",
      ],
      exemplo: [
        "Mulher liga 190, o companheiro está na porta: PM garante proteção (11, I), leva ao hospital se preciso e acompanha a retirada da mala (11, IV).",
      ],
      macete:
        "**10 = age agora (também na MPU furada). 11 = protege, hospitaliza, transporta, acompanha a mala.** 10-A: ela escolhe quem ouve.",
    },
    {
      id: "mp-art-12",
      ref: "Art. 12",
      nome: "O inquérito, o IML e as 48 horas",
      contexto:
        "Rol do que a autoridade policial fará no registro: ouvir ofendida e testemunhas, IML, laudo, extração de ofício das MPUs pretendidas, 48 h para remeter ao juiz.",
      dispositivo: [
        "Art. 12. Em todos os casos de violência, a autoridade policial deverá, entre outras providências:",
        "I – ouvir a ofendida, lavrar o B.O. e registrar as MPUs requeridas;",
        "II – colher todas as provas;",
        "III – remeter, no prazo de ==48 (quarenta e oito) horas==, expediente apartado ao juiz com o pedido da ofendida, para a concessão de medidas protetivas;",
        "IV – determinar o exame de corpo de delito e requisitar outros exames;",
        "V – ouvir o agressor e as testemunhas;",
        "VI – ordenar a identificação do agressor e fazer juntar sua folha de antecedentes;",
        "VII – remeter, no prazo legal, os autos do inquérito ao juiz e ao MP.",
        "§ 1º O pedido da ofendida será tomado a termo e deverá conter: qualificação, nome do ofensor, relatos, MPUs pretendidas… § 3º Não se exige ==advogado== para o pedido de MPU.",
      ],
      notaDispositivo:
        "48 h é o prazo de **encaminhar o pedido de MPU ao juiz** (inciso III) — não é o prazo para o delegado «deferir». Sem advogado (§ 3º). O juiz, no art. 18, decide em 48 h e comunica ao MP.",
      pena: "Rito policial",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**48 horas** para remeter o pedido de MPU ao juiz (12, III).",
        "Pedido de MPU **dispensa advogado** (§ 3º).",
        "Ouvir ofendida, IML, antecedentes, ouvir o agressor.",
      ],
      pegadinha: [
        "«O delegado tem 48 h para conceder a MPU» — ele **remete**; quem concede é o **juiz** (regra). Exceção estreita: 12-C.",
        "«Sem advogado o pedido é inepto» — § 3º diz o contrário.",
      ],
      exemplo: [
        "Sábado à noite, B.O. na DEAM: o delegado colhe o termo de MPU e, em 48 h, o envelope sobe ao plantão judicial — não «defere» o afastamento (salvo 12-C).",
      ],
      macete:
        "**Delegado registra e remete em 48 h. Juiz decide em 48 h (art. 18).** Advogado não é ingresso. Quem «concede» MPU, na regra, veste toga.",
    },
    {
      id: "mp-art-12c",
      ref: "Art. 12-C",
      nome: "Afastamento do lar pela polícia — só no interior sem juiz",
      contexto:
        "Medida única (afastar o agressor do lar/local de convivência) em risco à vida ou integridade física. Hierarquia: juiz → delegado (município sem comarca) → policial (sem comarca e sem delegado).",
      dispositivo: [
        "Art. 12-C. Verificado risco ==atual ou iminente à vida ou à integridade física== da mulher ou de seus dependentes, o agressor será ==imediatamente afastado do lar, domicílio ou local de convivência==: (Lei 13.827/2019)",
        "I – pela autoridade ==judicial==;",
        "II – pelo ==delegado de polícia==, quando o Município ==não for sede de comarca==; ou",
        "III – pelo ==policial==, quando o Município não for sede de comarca e ==não houver delegado disponível== no momento da denúncia.",
        "§ 1º Nas hipóteses II e III, o juiz será comunicado no prazo máximo de ==24 horas== e decidirá, em igual prazo, sobre manutenção ou revogação, ciente o MP.",
        "§ 2º Nos casos de risco à integridade física da ofendida ou à efetividade da MPU, ==não será concedida liberdade provisória== ao preso.",
      ],
      notaDispositivo:
        "Capital / sede de comarca: o delegado **não** aplica o 12-C, II. Só o juiz (I). A polícia não concede «proibição de contato», «alimentos» nem o pacote do art. 22 — só o **afastamento do lar**. § 2º puxa a trava da liberdade provisória em risco físico (debate com a ADI da prisão obrigatória; em prova, cobra-se o texto).",
      pena: "Afastamento cautelar policial (excepcional)",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "Só **afastamento do lar**, e só com **risco à vida/integridade**.",
        "Delegado: município **sem sede de comarca**.",
        "Policial: sem comarca **e** sem delegado na hora.",
        "Aviso ao juiz em **24 h** + decisão em 24 h.",
      ],
      pegadinha: [
        "«Lei 13.827: o delegado concede MPU em 24 h em qualquer lugar» — **ERRADO.** Só afastamento, só interior sem comarca.",
        "«O soldado na capital afasta o marido» — capital **é** sede; 12-C, III não abre.",
      ],
      exemplo: [
        "Distrito no sertão, sem juiz e sem delegado no plantão: cabo da PM afasta o agressor do casebre (12-C, III) e o juiz da comarca vizinha é avisado em 24 h.",
        "DEAM no Recife: o delegado **pede** MPU ao plantão; não aplica o 12-C, II.",
      ],
      macete:
        "**12-C não é «delegado-juiz».** É **afastar do lar**, com sangue na iminência, e só onde **não tem comarca**. 24 h para o juiz confirmar. Sede de comarca = toga.",
    },
  ],
};
