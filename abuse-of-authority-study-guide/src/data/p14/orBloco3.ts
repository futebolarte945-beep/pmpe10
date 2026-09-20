import type { Bloco } from "../tipos";

export const orBloco3: Bloco = {
  id: "or-bloco-3",
  numero: "Bloco 03",
  titulo: "Colaboração premiada — o negócio jurídico do 4º",
  intervalo: "Arts. 3º a 7º · 3º-A a 3º-C",
  subtitulo: "Até 2/3 · perdão · não é prova única · juiz fora da mesa",
  descricao:
    "O art. 3º lista oito meios; nesta leva só se abre a colaboração (I). Ação controlada, infiltração e o resto dos incisos ficam para a próxima ordem. 13.964 transformou o acordo em negócio jurídico processual (3º-A) e fechou o juiz **fora** da negociação.",
  notaProfessor: {
    titulo: "Três cortes no roteiro",
    itens: [
      "**§ 16** (13.964): não é só a sentença. Também **não** se decreta cautelar nem se **recebe denúncia** só com a delação.",
      "**§ 10** (retratação): as provas autoincriminatórias **não** podem ser usadas **exclusivamente** contra o colaborador — não é «tudo continua válido contra ele».",
      "**§ 14** + Pet **7.074**/STF: o silêncio cai quanto aos **fatos da colaboração**, na presença do defensor; o juiz **não** negocia; o **delegado** pode formalizar no IP, com o MP.",
    ],
  },
  grupos: [
    {
      id: "or-art-3-rol",
      ref: "Art. 3º",
      nome: "Oito portas — nesta leva, só a primeira se abre",
      contexto:
        "Em qualquer fase da persecução, sem prejuízo de outros meios. I colaboração; II ambiental; III ação controlada; IV dados/cadastros; V interceptação (9.296); VI sigilos; VII infiltração (art. 11); VIII cooperação federativa.",
      dispositivo: [
        "Art. 3º. Em qualquer fase da persecução penal, serão permitidos, sem prejuízo de outros já previstos em lei, os seguintes meios de obtenção da prova:",
        "I – colaboração premiada;",
        "II – captação ambiental;",
        "III – ação controlada;",
        "IV – acesso a registros de ligações e a dados cadastrais, eleitorais ou comerciais;",
        "V – interceptação telefônica e telemática (legislação específica);",
        "VI – afastamento dos sigilos financeiro, bancário e fiscal;",
        "VII – infiltração por policiais, na forma do art. 11;",
        "VIII – cooperação entre instituições.",
      ],
      notaDispositivo:
        "II e V já nasceram na 9.296 (Parte 13). VII não é «excludente do art. 2º». O 3º-A (13.964): o acordo é **negócio jurídico processual** e meio de obtenção de prova, com utilidade e interesse públicos.",
      pena: "Meios · catálogo",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Oito incisos. Colaboração é o **I**.",
        "Qualquer fase da persecução.",
        "Infiltração = VII + art. 11, **não** o art. 2º.",
      ],
      pegadinha: [
        "«Só no inquérito» — **qualquer fase**.",
        "«Infiltração isenta pelo 2º» — porta **VII**.",
      ],
      exemplo: [
        "Denúncia já recebida: ainda cabe colaboração (I) e interceptação (V), se o 2º da 9.296 estiver de pé.",
      ],
      macete:
        "**Oito chaves no 3º. Nesta prova da leva, só a I gira.** Infiltrado não mora no tipo.",
    },
    {
      id: "or-art-4-beneficios",
      ref: "Art. 4º, caput a § 5º",
      nome: "Cinco resultados, três prêmios — e o não denunciar",
      contexto:
        "Perdão judicial, redução até 2/3 ou substituição por restritiva — se a colaboração for efetiva e voluntária **e** vier um ou mais dos cinco resultados. Depois da sentença: até ½ ou progressão sem requisito objetivo.",
      dispositivo: [
        "Art. 4º. O juiz poderá, a requerimento das partes, conceder ==perdão judicial==, reduzir em até ==2/3== a PPL ou ==substituí-la== por restritiva, se a colaboração for efetiva e voluntária e dela advier um ou mais de:",
        "I – identificação dos demais coautores/partícipes e das infrações;",
        "II – revelação da estrutura hierárquica e da divisão de tarefas;",
        "III – prevenção de infrações decorrentes da ORCRIM;",
        "IV – recuperação total ou parcial do produto/proveito;",
        "V – localização de vítima com integridade física preservada.",
        "§ 4º (13.964). O MP pode ==deixar de oferecer denúncia== se a proposta se referir a infração de que **não** tinha prévio conhecimento e o colaborador: I – não for o líder; II – for o ==primeiro== a prestar colaboração efetiva.",
        "§ 4º-A. Há conhecimento prévio se já havia IP ou PIC sobre aqueles fatos.",
        "§ 5º. Colaboração ==posterior à sentença==: redução até ==1/2== ou progressão mesmo sem requisitos objetivos.",
        "§ 3º. Denúncia/processo do colaborador podem ser suspensos até ==6+6 meses== (prescrição também suspende).",
      ],
      notaDispositivo:
        "Basta **um** dos cinco resultados (não os cinco). § 1º: o juiz ainda olha personalidade, gravidade, eficácia. § 2º: MP a qualquer tempo, delegado no IP **com** o MP, podem pedir perdão mesmo fora da proposta inicial (art. 28 CPP se o juiz discordar).",
      pena: "Até 2/3 · perdão · não denúncia",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Liste **I a V**. Um só já abre o prêmio.",
        "Prêmios: perdão / **2/3** / restritiva.",
        "Não denunciar: crime **novo** para o MP + **não líder** + **primeiro**.",
        "Depois da sentença: **1/2** ou progressão.",
        "6+6 de suspensão do processo do colaborador.",
      ],
      pegadinha: [
        "«Precisa dos cinco resultados juntos» — é **um ou mais**.",
        "«Depois da sentença ainda cabe 2/3» — depois é **1/2**.",
        "«O líder pode ficar sem denúncia pelo § 4º» — o I do § 4º **veda** o líder.",
      ],
      exemplo: [
        "O caixa entrega o organograma (II) e um cativeiro com refém vivo (V): dois resultados, perdão em cima da mesa. O chefão que delata depois da condenação: no máximo **½** (§ 5º), nunca o § 4º.",
      ],
      macete:
        "**Cinco portas, entra por uma.** Antes da sentença: até 2/3 ou perdão. Depois: metade. Sem denúncia só para quem não manda e chegou primeiro, em crime que o MP ainda não cheirava.",
    },
    {
      id: "or-art-4-rito",
      ref: "Art. 4º, §§ 6º a 18 · arts. 5º a 7º",
      nome: "Juiz fora da mesa, delação não condena sozinha, retratação",
      contexto:
        "Negociação: polícia + investigado + defensor, com o MP; ou MP + acusado + defensor. Juiz **não** senta (§ 6º; Pet 7.074). Homologa regularidade, legalidade, voluntariedade, adequação dos benefícios e dos resultados (§ 7º). Recusa devolve às partes (§ 8º) — não «reescreve» o acordo sozinho.",
      dispositivo: [
        "§ 6º. O juiz ==não participará== das negociações (delegado + investigado + defensor, com o MP; ou MP + acusado + defensor).",
        "§ 7º (13.964). Homologação: o juiz ==ouve== o colaborador (defensor) e examina regularidade/legalidade, adequação dos benefícios, adequação aos resultados I–V e voluntariedade.",
        "§ 7º-B. Nulas as cláusulas de renúncia a impugnar a homologação.",
        "§ 8º. Recusa → devolve às partes para adequar.",
        "§ 10. Retratação: provas autoincriminatórias ==não== serão usadas ==exclusivamente== em desfavor do colaborador.",
        "§ 10-A. O delatado fala ==depois== do delator.",
        "§ 14. Nos depoimentos, o colaborador ==renuncia ao silêncio== (defensor presente) e presta compromisso de verdade.",
        "§ 16 (13.964). ==Não== se decreta/profere, só com a delação: I cautelares reais/pessoais; II recebimento da denúncia/queixa; III sentença condenatória.",
        "§ 17. Omissão dolosa → rescisão. § 18. Continuar no ilícito → rescisão.",
        "Art. 5º. Direitos: proteção; nome/imagem; condução em separado; audiência sem contato visual; mídia sem foto; pena/prisão em estabelecimento ==diverso==.",
        "Art. 7º. Homologação ==sigilosa== até, em regra, o recebimento da denúncia.",
      ],
      notaDispositivo:
        "3º-C: sem advogado não há tratativa. Se o celebrante recusa o acordo, não usa o que o colaborador de boa-fé entregou (3º-B, § 6º). Pet 7.074: delegado **pode** no pré-processual; juiz homologa, não negocia.",
      pena: "Rito · limites da delação",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Juiz **fora** da negociação. Delegado **pode** (IP + MP).",
        "§ 16: cautelar, denúncia **e** sentença — delação **sozinha** não segura.",
        "Retratação: não usa **só** contra o colaborador.",
        "Delatado fala **depois** (§ 10-A).",
        "Renúncia ao silêncio **com** defensor (§ 14).",
      ],
      pegadinha: [
        "«O juiz preside a negociação para garantir a legalidade» — § 6º **veda**.",
        "«Retratou: tudo que falou some do mundo» — some o uso **exclusivo contra ele**.",
        "«Só a sentença precisa de prova de corrobora» — o § 16 pega também **cautelar** e **recebimento**.",
        "«Delegado não pode fechar acordo» — Pet 7.074 + § 6º: **pode**, no IP, com o MP.",
      ],
      exemplo: [
        "Acordo no gabinete do delegado, MP ciente, juiz ouve o colaborador no sigilo e homologa: Pet 7.074 ok. Denúncia contra o chefe **só** com a fita da delação, sem PIX, sem testemunha: § 16, II — **não recebe**.",
      ],
      macete:
        "**Juiz homologa, não barganha.** Delação é isca, não é o peixe — cautelar, denúncia e sentença pedem outra prova. Retratou: não atira só com a fala dele.",
    },
  ],
};
