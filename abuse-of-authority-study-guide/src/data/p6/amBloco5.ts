import type { Bloco } from "../tipos";

export const amBloco5: Bloco = {
  id: "am-bloco-5",
  numero: "Bloco 05",
  titulo: "Poluição e outros crimes ambientais",
  intervalo: "Arts. 54 ao 61",
  subtitulo: "O 54 que «resulta ou pode resultar», o 56 do perigo e o 60 da licença",
  descricao:
    "Seção III. O 54 é o tipo-estrela (dolo 1–4; culpa 6m–1a; qualificadoras 1–5). O 56 é o cardápio tóxico — nuclear só aumenta. O 60 não é «construir em APP»: é funcionar estabelecimento potencialmente poluidor sem licença (pena nova em 2025).",
  notaProfessor: {
    titulo: "Correção de rota",
    itens: [
      "**Art. 54 caput** mistura resultado e perigo concreto: «resultem **ou possam resultar**» dano à saúde / mortandade de animais / destruição significativa da flora. Não é «só material» nem «só formal».",
      "**Art. 56** = produto/substância tóxica, perigosa ou nociva em desacordo com a lei. Crime de **perigo abstrato**. Nuclear/radioativo = **aumento de 1/6 a 1/3** (§ 2º), não tipo autônomo de «rejeito».",
      "**Art. 60** ≠ construir em APP (isso é 38/39) e ≠ «imóvel rural». É estabelecer/reformar/ampliar/instalar/fazer funcionar obra ou serviço **potencialmente poluidor** sem licença. Lei 15.190/2025: detenção **6 meses a 2 anos** (antes 1–6 meses) + PU até o dobro se exigir EIA/RIMA.",
      "**Arts. 57 e 59: VETADOS.** Art. 58 = aumento dos dolosos desta seção (1/6–1/3 flora/meio; 1/3–1/2 lesão grave; até o dobro se morte) — subsidiário («se não resultar crime mais grave»).",
    ],
  },
  grupos: [
    {
      id: "am-art-54",
      ref: "Art. 54",
      nome: "Poluição: dolo, culpa e as cinco qualificadoras",
      contexto:
        "Tipo mais cobrado da lei depois da fauna. Caput 1–4 (reclusão). Culpa desce para detenção 6m–1a. § 2º, I a V, sobe para reclusão 1–5. § 3º pune quem não adota precaução determinada pela autoridade.",
      dispositivo: [
        "Art. 54. Causar poluição de qualquer natureza em níveis tais que ==resultem ou possam resultar== em danos à saúde humana, ou que provoquem a ==mortandade de animais== ou a ==destruição significativa da flora==:",
        "Pena - ~~reclusão, de um a quatro anos, e multa~~.",
        "§ 1º Se o crime é ==culposo==: ~~detenção, de seis meses a um ano, e multa~~.",
        "§ 2º Se o crime: I tornar área imprópria à ocupação humana; II poluição atmosférica que retire habitantes ou dane a saúde da população; III poluição hídrica que interrompa o abastecimento de uma comunidade; IV dificultar/impedir o uso público das praias; V lançamento de resíduos/óleos em desacordo com a lei:",
        "Pena - ~~reclusão, de um a cinco anos~~.",
        "§ 3º Nas mesmas penas do § 2º quem deixar de adotar, quando a autoridade exigir, medidas de ==precaução== em caso de risco de dano ambiental grave ou irreversível.",
      ],
      notaDispositivo:
        "«Resultem» = material; «possam resultar» = perigo concreto. A banca que afirma «54 é sempre material» erra. Qualificadoras do § 2º **não têm figura culposa própria** — culpa fica no § 1º. Lançamento de óleo (V) é a mais cobrada. § 3º é omissão de precaução (não é o 68).",
      pena: "Recl. 1–4 · culpa det. 6m–1a · qualif. recl. 1–5",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Caput: **resultem ou possam resultar** (material **ou** perigo concreto).",
        "Dolo 1–4 recl.; culpa **6m–1a det.**",
        "§ 2º = 1–5 (área inabitável, atmosfera, água da cidade, praia, óleo/resíduo).",
        "§ 3º = não tomar a precaução **exigida** pela autoridade.",
      ],
      pegadinha: [
        "«54 é crime material; sem dano concreto é atípico» — o texto diz **possam resultar**.",
        "«Culpa do 54 é reclusão reduzida à metade» — é **detenção 6m–1a** (pena própria).",
        "«Lançar óleo é sempre 54 caput» — se em desacordo com regulamento, entra o **§ 2º, V (1–5)**.",
      ],
      exemplo: [
        "Fábrica despeja efluente que mata peixes do rio: **54 caput** (mortandade).",
        "O mesmo por falha de manutenção: **54 § 1º**.",
        "Navio lança óleo fora da norma e a praia fecha: **§ 2º, IV e V**.",
      ],
      macete:
        "**54 = resulta OU pode resultar.** Dolo 1–4; culpa 6m–1a; o «penta» do § 2º sobe a **1–5**. Óleo, praia, água da torneira e evacuação moram no parágrafo.",
    },
    {
      id: "am-art-55-58",
      ref: "Arts. 55 a 58",
      nome: "Lavra, tóxico, nuclear e o aumento se alguém sangra",
      contexto:
        "55 = pesquisa/lavra/extração mineral sem título (e PU: não recuperar a área). 56 = o supermercado de substâncias perigosas. Nuclear é aumento, não tipo. 58 agrava os dolosos da seção se o dano explode.",
      dispositivo: [
        "Art. 55. Executar pesquisa, lavra ou extração de recursos minerais ==sem autorização, permissão, concessão ou licença==, ou em desacordo: ~~detenção, de seis meses a um ano, e multa~~. PU: deixa de ==recuperar== a área.",
        "Art. 56. Produzir, processar, embalar, importar, exportar, comercializar, fornecer, transportar, armazenar, guardar, ter em depósito ou usar produto ou substância ==tóxica, perigosa ou nociva==, em desacordo com leis ou regulamentos: ~~reclusão, de um a quatro anos, e multa~~.",
        "§ 1º Nas mesmas penas quem: I abandona ou usa em desacordo com normas ambientais/de segurança; II dá destinação final a ==resíduos perigosos== diversa da lei. (Lei 12.305/2010 — PNRS)",
        "§ 2º Se nuclear ou ==radioativa==: aumento de ==1/6 a 1/3==.",
        "§ 3º Culposo: ~~detenção, de seis meses a um ano, e multa~~.",
        "Art. 57. ==(VETADO).==",
        "Art. 58. Nos crimes ==dolosos== desta Seção, aumentam: I 1/6 a 1/3 se dano irreversível à flora/meio; II 1/3 até ½ se lesão grave; III até o dobro se morte. PU: só se do fato ==não resultar crime mais grave==.",
      ],
      notaDispositivo:
        "56 é de perigo abstrato (a desconformidade com a norma basta; não se exige explosão). «Rejeito nuclear» na prova costuma apontar o § 2º (aumento), não um tipo à parte. 55 é o garimpo/saibreira sem ANM — pena baixa (6m–1a), JECRIM. 58 é subsidiário: se a morte couber em homicídio, o aumento ambiental recua.",
      pena: "55: det. 6m–1a · 56: recl. 1–4 (nuclear +1/6–1/3) · culpa 6m–1a",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "55 = mineral **sem título** + PU não recuperar.",
        "56 = perigo **abstrato**; cardápio enorme de núcleos.",
        "Nuclear/radioativo = **aumento**, não tipo novo.",
        "Resíduo perigoso (PNRS) entrou no § 1º, II.",
        "58: doloso + resultado grave; **subsidiário**.",
      ],
      pegadinha: [
        "«56 é crime material de poluição nuclear» — 56 é **perigo abstrato**; nuclear é **§ 2º**.",
        "«Garimpo ilegal é 44» — 44 é mineral em **floresta pública/APP**; o tipo geral de lavra é o **55**.",
        "«Morte no 54 aplica o 58, III, em concurso com homicídio» — o PU do 58 **veda** se resultar crime mais grave.",
      ],
      exemplo: [
        "Garimpo em leito de rio sem título: **55** (e, se APP, concurso com 44).",
        "Transportadora leva solvente sem MTR/licença: **56 caput**. Se for fonte radioativa, +§ 2º.",
        "Aterro de resíduo perigoso em campo: **56 § 1º, II**.",
      ],
      macete:
        "**55 é o poço sem papel. 56 é o veneno fora da norma (perigo abstrato).** Nuclear **aumenta**. 57 é cova. 58 só no doloso e só se não nascer crime maior.",
    },
    {
      id: "am-art-60-61",
      ref: "Arts. 60 e 61",
      nome: "Funcionar sem licença e disseminar praga",
      contexto:
        "60 = o «crime da licença»: construir, reformar, ampliar, instalar ou fazer funcionar estabelecimento/obra/serviço potencialmente poluidor sem licença ou contra o regulamento. 61 = disseminar doença, praga ou espécie danosa.",
      dispositivo: [
        "Art. 59. ==(VETADO).==",
        "Art. 60. Construir, reformar, ampliar, instalar ou ==fazer funcionar==, em qualquer parte do território nacional, estabelecimentos, obras ou serviços ==potencialmente poluidores==, sem licença ou autorização dos órgãos ambientais competentes, ou contrariando as normas:",
        "Pena - ~~detenção, de 6 meses a 2 anos, ou multa, ou ambas~~. (Lei nº 15.190/2025)",
        "Parágrafo único. A pena é aumentada ==até o dobro== se o licenciamento for sujeito ao ==Estudo Prévio de Impacto Ambiental==. (Lei nº 15.190/2025)",
        "Art. 61. Disseminar doença ou praga ou espécies que possam causar dano à agricultura, à pecuária, à fauna, à flora ou aos ecossistemas: ~~reclusão, de um a quatro anos, e multa~~.",
      ],
      notaDispositivo:
        "Antes de 2025 o 60 era 1 a 6 meses (contravenção disfarçada / JECRIM mínimo). A Lei 15.190/2025 subiu para 6m–2a e criou o PU do EIA. Continua sendo tipo formal (funcionar sem o papel). Não exige poluição concreta (senão sobe ao 54). Não é «casa em APP» nem «imóvel rural» — o endereço é **potencialmente poluidor** + licença.",
      pena: "60: det. 6m–2a (×2 se EIA) · 61: recl. 1–4",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "60 = potencialmente poluidor **sem licença** (formal).",
        "Pena **atual: 6 meses a 2 anos** (Lei 15.190/2025) — a alternativa «1 a 6 meses» morreu.",
        "EIA/RIMA: aumento **até o dobro**.",
        "61 = praga/doença/espécie (reclusão 1–4).",
      ],
      pegadinha: [
        "«60 é construir em APP / em imóvel rural sem licença» — APP é **38/39**. 60 é o **empreendimento poluidor** sem licença ambiental.",
        "«Pena do 60 é 1 a 6 meses» — **desatualizado** (15.190/2025).",
        "«Sem poluição concreta o 60 é atípico» — o tipo se contenta com a **falta da licença**.",
      ],
      exemplo: [
        "Frigorífico abre as portas com licença vencida: **60**. Se o porte exigia EIA, PU até o dobro.",
        "Casa de veraneio em APP sem autorização: **38/39**, não 60 (não é «potencialmente poluidor» no sentido do tipo).",
        "Soltar praga agrícola de propósito: **61**.",
      ],
      macete:
        "**60 é a chaminé sem papel, não a casa na APP.** 6 meses a 2 anos; EIA **dobra**. 59 é cova. 61 é a praga (1–4 recl.).",
    },
  ],
};
