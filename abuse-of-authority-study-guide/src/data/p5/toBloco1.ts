import type { Bloco } from "../tipos";

export const toBloco1: Bloco = {
  id: "to-bloco-1",
  numero: "Bloco 01",
  titulo: "O tipo e as modalidades",
  intervalo: "Art. 1º, I, II, III e § 2º",
  subtitulo: "Prova, crime, discriminação, castigo, omissão — e o sujeito que NÃO precisa de farda",
  descricao:
    "Quatro artigos no diário oficial. O art. 1º carrega quase toda a prova: três incisos de tortura comissiva, o § 1º da pessoa presa e o § 2º da omissão — que NÃO replica a pena do torturador. Crime comum no inciso I; próprio (guarda, poder ou autoridade) no II.",
  notaProfessor: {
    titulo: "Correção de rota — o tamanho real da lei",
    itens: [
      "A Lei 9.455/1997 tem **quatro artigos**. Não existem arts. 5º a 9º. Quem cobra «art. 7º da Lei de Tortura» inventou o endereço — o § 7º é do **art. 1º** (regime inicial).",
      "**CF, art. 5º, XLIII**: tortura é inafiançável e insuscetível de graça ou anistia. A Lei 8.072, art. 2º, soma o **indulto** (equiparada). Não está no rol do art. 1º da 8.072 (hediondo em sentido estrito): é **EQUIPARADA**.",
      "Convenção contra a Tortura (Decreto 40/1991) e Convenção Interamericana (Decreto 98.386/1989) iluminam, mas a banca cobra o **tipo interno**.",
      "Inciso **III** (Lei 15.410/2026): submeter mulher, **reiteradamente**, a intenso sofrimento no contexto de violência doméstica — sem prejuízo das outras infrações (Maria da Penha, 129, 147 etc.).",
    ],
  },
  grupos: [
    {
      id: "to-art-1-i",
      ref: "Art. 1º, I",
      nome: "Tortura-prova, tortura-crime e tortura-discriminação",
      contexto:
        "Crime COMUM: qualquer pessoa. Núcleo: constranger com violência ou grave ameaça, causando sofrimento físico ou mental, + especial fim de agir (alíneas a, b ou c).",
      dispositivo: [
        "Art. 1º Constitui crime de tortura:",
        "I - ==constranger== alguém com emprego de ==violência ou grave ameaça==, causando-lhe ==sofrimento físico ou mental==:",
        "a) com o fim de obter ==informação, declaração ou confissão== da vítima ou de terceira pessoa;",
        "b) para provocar ==ação ou omissão de natureza criminosa==;",
        "c) em razão de discriminação ==racial ou religiosa==;",
        "Pena - ~~reclusão, de dois a oito anos~~.",
      ],
      notaDispositivo:
        "Alínea a = tortura-prova (o interrogatório ilegal). Alínea b = tortura para obter crime (não é «cumprir pena ilegal» — essa mora no § 1º). Alínea c = só raça ou religião no texto; cor, etnia e procedência não estão escritas (podem entrar pela via racial). Orientação sexual: não está no 1º, I, c — a banca que inclui «etc.» está alargando.",
      pena: "Reclusão 2–8 anos",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**Crime comum** no inciso I: particular também tortura (segurança de boate, sequestrador, cônjuge).",
        "Três elementos: **violência ou grave ameaça** + **sofrimento** (físico **ou** mental) + **fim especial** (a, b ou c).",
        "A confissão pode ser de **terceiro** (tortura o filho para o pai falar).",
        "Alínea c: **racial ou religiosa** — rol fechado no texto.",
        "Consumação com o sofrimento; o resultado buscado (a confissão) é mero exaurimento.",
      ],
      pegadinha: [
        "«Tortura é crime próprio de agente público» — **ERRADO** no inciso I (comum). Agente público é **majorante** (§ 4º, I).",
        "«A alínea c cobre cor, etnia, procedência, gênero, orientação sexual» — o texto diz **racial ou religiosa**.",
        "«Sem lesão visível não há tortura» — o sofrimento pode ser **só mental**.",
        "«Tortura-crime é aplicar pena ilegal» — pena ilegal = **§ 1º**; a alínea b é obter que a vítima **pratique crime**.",
      ],
      exemplo: [
        "Policial dá choque para o preso «confessar o tráfico»: 1º, I, a + majorante de agente público.",
        "Sequestrador queima o refém com cigarro para a família pagar (omissão de natureza? a alínea a — informação/declaração). Se exige que o refém assalte o caixa: alínea **b**.",
        "Grupo agride o fiel de terreiro «para ele largar a macumba»: I, **c** (religiosa).",
      ],
      macete:
        "**PIC** no inciso I: **P**rova (a — informação/confissão), **I**licitude alheia (b — fazer a vítima delinquir), **C**rença/Cor racial (c). Crime **comum**. Dor física **ou** mental. Farda só **aumenta**.",
    },
    {
      id: "to-art-1-ii-iii",
      ref: "Art. 1º, II e III",
      nome: "Tortura-castigo, preventiva e a doméstica reiterada",
      contexto:
        "O inciso II é PRÓPRIO: exige guarda, poder ou autoridade (não necessariamente pública). O III (2026) puxa a violência doméstica reiterada para o carimbo da tortura.",
      dispositivo: [
        "II - ==submeter== alguém, sob sua ==guarda, poder ou autoridade==, com emprego de violência ou grave ameaça, a ==intenso sofrimento== físico ou mental, como forma de aplicar ==castigo pessoal== ou medida de caráter ==preventivo==.",
        "III – submeter ==mulher, reiteradamente==, a intenso sofrimento físico ou mental, no contexto de ==violência doméstica e familiar==, sem prejuízo da aplicação das penas correspondentes a outras infrações penais. (Lei nº 15.410, de 2026)",
      ],
      notaDispositivo:
        "II exige sofrimento INTENSO (o I fala só em sofrimento). Pai, mãe, professor, carcereiro privado, líder religioso — todos podem ser sujeitos. III: reiteração + contexto da Lei Maria da Penha; concurso com 129, 147, 216-B etc. («sem prejuízo»). Não exige o vínculo de guarda do II.",
      pena: "Reclusão 2–8 anos (caput)",
      bancas: ["CEBRASPE", "FGV", "AOCP", "FCC"],
      cai: [
        "Inciso II = crime **próprio** (quem tem guarda/poder/autoridade) — ainda assim **não** exige ser agente público.",
        "Finalidades do II: **castigo** ou **prevenção** (não prova, não discriminação).",
        "III: **reiteradamente** + mulher + contexto doméstico. Conduta isolada continua 129 / Maria da Penha.",
        "Maus-tratos (CP 136) é o irmão menor: também exige guarda, mas o sofrimento **não** é intenso e a finalidade é educativa/correcional típica — a linha é a **intensidade**.",
      ],
      pegadinha: [
        "«O inciso II só o carcereiro público pratica» — pai e professor também.",
        "«Toda surra doméstica é tortura desde 2026» — falta a **reiteração** e o sofrimento **intenso**.",
        "«II e 136 são o mesmo crime» — 136 é detenção 2 meses–1 ano; tortura é reclusão 2–8 e equiparada.",
      ],
      exemplo: [
        "Carcereiro de presídio privado deixa o preso nu no sol por 12 horas «para aprender»: II (castigo) + § 4º, I se for agente público.",
        "Marido, por meses, impede sono, ameaça matar os filhos e queima roupas: **III** + tipos da LMP em concurso.",
      ],
      macete:
        "**II = quem manda (guarda/poder) + dor INTENSA + castigo/prevenção.** **III = mulher + várias vezes + casa.** 136 é o primo fraco. Farda continua sendo só majorante.",
    },
    {
      id: "to-art-1-s1-s2",
      ref: "Art. 1º, §§ 1º e 2º",
      nome: "Pessoa presa e a omissão que NÃO se equipara na pena",
      contexto:
        "§ 1º: tortura do preso por ato não previsto em lei (a «pena ilegal»). § 2º: omitir-se quem devia evitar ou apurar — detenção 1 a 4, NÃO a reclusão de 2 a 8.",
      dispositivo: [
        "§ 1º Na mesma pena incorre quem submete ==pessoa presa== ou sujeita a ==medida de segurança== a sofrimento físico ou mental, por intermédio da prática de ==ato não previsto em lei== ou não resultante de medida legal.",
        "§ 2º Aquele que se ==omite== em face dessas condutas, quando tinha o ==dever de evitá-las ou apurá-las==, incorre na pena de ==detenção de um a quatro anos==.",
      ],
      notaDispositivo:
        "§ 1º não repete «violência ou grave ameaça» — o ato ilegal que gera sofrimento basta (isolamento sem previsão, «soro da verdade», posição de estresse). Sujeito próprio: quem tem o preso sob custódia. § 2º é crime omissivo próprio, de quem tem dever jurídico (delegado que vê e não apura, diretor, médico perito, juiz que ignora). Pena de DETENÇÃO 1–4: o omitente NÃO se equipara ao torturador na pena. § 7º exclui o omitente do regime inicial fechado.",
      pena: "§ 1º: reclusão 2–8 · § 2º: detenção 1–4",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "«Pena ilegal» / ato não previsto = **§ 1º**, não a alínea b.",
        "Omissão: dever de **evitar ou apurar**. Quem não tem o dever (popular que filma) não entra no § 2º.",
        "Pena do omisso: **detenção 1–4**, crime **não** inicia em fechado (§ 7º).",
        "Omissão do garante com dolo de torturar pode ser autoria do caput (omissiva imprópria) — o § 2º é para quem **não quer** o resultado, só deixa acontecer/não apura.",
      ],
      pegadinha: [
        "«O omitente equipara-se ao torturador e leva 2 a 8» — **ERRADO**. Leva **1 a 4 de detenção**.",
        "«§ 2º é hediondo/equiparado com regime fechado» — o § 7º **excetua** o § 2º.",
        "«Qualquer testemunha que não impede responde» — só quem tem **dever** de evitar ou apurar.",
      ],
      exemplo: [
        "Plantão: preso é espancado na sua frente; o delegado não registra nem separa os agentes: **§ 2º** (1–4 detenção).",
        "Diretor manda «trancar no solitário sem previsão regimental» para quebrar o preso: **§ 1º** (2–8).",
      ],
      macete:
        "**§ 1º = preso + ato ilegal = mesma pena (2–8).** **§ 2º = omitiu quem devia = 1 a 4 DETENÇÃO, e começa onde a LEP mandar, não no fechado.** «Equipara-se» é a isca. Não morde.",
    },
  ],
};
