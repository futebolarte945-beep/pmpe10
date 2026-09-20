import type { Bloco } from "../tipos";

export const heBloco1: Bloco = {
  id: "h-bloco-1",
  numero: "Bloco 01",
  titulo: "O rol taxativo",
  intervalo: "Art. 1º · caput ao parágrafo único",
  subtitulo: "Hediondo não se presume: ou está no rol, ou não é",
  descricao:
    "O art. 1º é o coração da lei e o parágrafo mais cobrado da penal extravagante. Sistema enumerativo (rol taxativo): o juiz não «sente» a hediondez — o legislador lista. Tentativa e consumação entram. Equiparados (tortura, tráfico, terrorismo) NÃO estão neste artigo: moram na Constituição e no art. 2º.",
  notaProfessor: {
    titulo: "Correção de rota — o teto constitucional e o sistema",
    itens: [
      "**CF, art. 5º, XLIII**: a lei considerará **inafiançáveis** e insuscetíveis de **graça ou anistia** a prática da **tortura**, o **tráfico ilícito de entorpecentes**, o **terrorismo** e os definidos como **crimes hediondos**. Mandantes, executores e quem, podendo evitar, se omitir.",
      "**Sistema enumerativo**: Brasil adotou o rol fechado (não o «sistema misto» nem o da gravidade em concreto). Analogia *in malam partem* é proibida.",
      "**Tentados ou consumados**: o caput e o parágrafo único repetem — tentativa de hediondo **é** hedionda.",
      "**Homicídio privilegiado-qualificado**: STJ/STF — o privilégio (relevante valor moral/social, violenta emoção) **afasta a hediondez** quando convive com qualificadora objetiva. Questão clássica.",
      "**Linha do tempo do rol**: Lei 8.930/1994 (Daniella Perez) reescreveu o art. 1º; 9.695/1998 (remédios); 12.015/2009 (estupro unificado); 12.978/2014 (218-B); 13.142/2015 (I-A agentes); 13.497/2017 (arma restrita); 13.964/2019 (Pacote); 14.688/2023 (CPM); 14.811/2024 (infância); 14.994/2024 (feminicídio autônomo); 15.134 e 15.159/2025 (autoridades e escola); 15.384/2026 (vicaricídio); 15.358/2026 (domínio social); 15.487/2026 (ECA ampliado).",
    ],
  },
  grupos: [
    {
      id: "h-art-1-caput",
      ref: "Art. 1º caput",
      nome: "A porta de entrada do rol",
      contexto:
        "Norma-âncora: só entram crimes do Código Penal listados nos incisos, tentados ou consumados. O que vive em lei especial entra pelo parágrafo único.",
      dispositivo: [
        "Art. 1º São considerados ==hediondos== os seguintes crimes, todos tipificados no Decreto-Lei nº 2.848, de 7 de dezembro de 1940 - ==Código Penal==, ==consumados ou tentados==: (Redação dada pela Lei nº 8.930, de 1994)",
      ],
      notaDispositivo:
        "A redação original de 1990 (latrocínio, extorsão, estupro, atentado, epidemia, envenenamento, genocídio) foi substituída pela Lei 8.930/1994, após o homicídio de Daniella Perez. O envenenamento de água potável (art. 270 + 285) SAIU do rol e nunca voltou.",
      pena: "Norma-âncora · sem pena própria",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**Rol TAXATIVO** (sistema enumerativo): não cabe analogia para incluir crime «tão grave quanto».",
        "**Tentativa = hediondo**. Banca adora negar isso.",
        "O caput só puxa **Código Penal**. Genocídio, armas, ECA, CPM, domínio social entram pelo **parágrafo único**.",
        "Racismo **não** é hediondo (é inafiançável e imprescritível por outro inciso da CF).",
      ],
      pegadinha: [
        "«O juiz pode reconhecer a hediondez pela gravidade concreta» — **ERRADO** (sistema aberto não vingou).",
        "«A tentativa de hediondo não é hedionda» — **ERRADO**.",
        "«Envenenamento de água potável é hediondo» — **ERRADO desde 1994**.",
        "«Latrocínio está no caput original ainda vigente» — o caput atual remete aos **incisos**.",
      ],
      exemplo: [
        "Estupro tentado (art. 213 c/c 14, II): **hediondo**. Progressão e fiança seguem o regime do art. 2º.",
        "Homicídio culposo no trânsito: **fora do rol** — nem simples doloso (fora de milícia/extermínio) entra.",
      ],
      macete:
        "**«Lista, não feeling»**: se não está no art. 1º (incisos ou parágrafo único) e não é tortura/tráfico/terrorismo, **não é hediondo**. Tentou? Continua hediondo.",
    },
    {
      id: "h-art-1-i",
      ref: "Art. 1º, I",
      nome: "Homicídio: extermínio e qualificado",
      contexto:
        "Duas portas: (1) homicídio simples em atividade típica de grupo de extermínio, ainda que por 1 só agente; (2) homicídio qualificado (art. 121, § 2º inteiro).",
      dispositivo: [
        "I - ==homicídio== (art. 121), quando praticado em atividade típica de ==grupo de extermínio==, ainda que cometido por 1 (um) só agente, e ==homicídio qualificado== (art. 121, § 2º); (Redação dada pela Lei nº 15.159, de 2025)",
      ],
      notaDispositivo:
        "A Lei 15.159/2025 parou de enumerar incisos do § 2º: qualquer qualificadora vigente torna o homicídio hediondo. Feminicídio saiu do § 2º, VI, e virou tipo autônomo (I-B). Homicídio simples «comum» NÃO é hediondo.",
      pena: "Qualificado: reclusão 12–30 anos · simples: 6–20",
      bancas: ["CEBRASPE", "FGV", "AOCP", "FCC"],
      cai: [
        "**Homicídio simples só é hediondo** se praticado em atividade típica de **grupo de extermínio** (vale o «justiceiro» solitário).",
        "Milícia privada: o homicídio em atividade de milícia costuma cair pelo **extermínio** ou pelo **288-A** (não hediondo por si) + qualificadoras.",
        "**Privilegiado-qualificado** (motivo de relevante valor + meio cruel, p.ex.): **não hediondo** (jurisprudência consolidada).",
        "Qualificadoras clássicas: torpe, fútil, asfixia/meio cruel, traição, para assegurar outro crime, feminicídio (até 2024), agente de segurança (VII), arma de uso restrito/proibido (VIII), menor de 14 (IX), escola/autoridades (reformas 2025).",
      ],
      pegadinha: [
        "«Todo homicídio doloso é hediondo» — **ERRADO**. Só o qualificado e o de extermínio.",
        "«Precisa de três agentes no grupo de extermínio» — **ERRADO**: «ainda que por 1 só agente».",
        "Cobrar o inciso VI (feminicídio) como qualificadora **depois de 9/10/2024** — o tipo agora é o **art. 121-A** (inciso I-B).",
      ],
      exemplo: [
        "Pistoleiro sozinho executa moradores de rua «para limpar o bairro»: homicídio simples + atividade de extermínio → **hediondo**.",
        "Marido mata a esposa por ciúme, com crueldade, mas sob violenta emoção após injusta provocação: privilegiado-qualificado → **não hediondo**.",
      ],
      macete:
        "**SIMPLES só no esquadrão** (extermínio, mesmo sozinho). **QUALIFICADO sempre** (qualquer inciso do § 2º). Privilegiou? **Saiu da lista.**",
    },
    {
      id: "h-art-1-ia-ic",
      ref: "I-A · I-B · I-C",
      nome: "Lesão funcional, feminicídio e vicaricídio",
      contexto:
        "Três acréscimos modernos: lesão gravíssima/seguida de morte contra agentes e autoridades (e agora na escola); feminicídio autônomo; vicaricídio (matar o vínculo da mulher para atingi-la).",
      dispositivo: [
        "I-A - ==lesão corporal dolosa de natureza gravíssima== (art. 129, § 2º) e ==lesão corporal seguida de morte== (art. 129, § 3º), quando praticadas: (Lei nº 15.159, de 2025)",
        "a) contra autoridade ou agente descrito nos arts. ==142== e ==144== da Constituição Federal ou integrantes do ==sistema prisional== ou da ==Força Nacional de Segurança Pública==, no exercício da função ou em decorrência dela, ou contra seu cônjuge, companheiro ou parente ==consanguíneo até terceiro grau==, em razão dessa condição;",
        "b) contra membro do ==Poder Judiciário==, do ==Ministério Público==, da ==Defensoria Pública== ou da ==Advocacia Pública==, ou ==oficial de justiça==, no exercício da função ou em decorrência dela, ou contra seu cônjuge, companheiro ou parente, ==inclusive por afinidade==, até o terceiro grau, em razão dessa condição; ou",
        "c) nas ==dependências de instituição de ensino==;",
        "I-B – ==feminicídio== (art. 121-A); (Lei nº 14.994, de 2024)",
        "I-C – ==vicaricídio== (art. 121-B); (Lei nº 15.384, de 2026)",
      ],
      notaDispositivo:
        "I-A nasceu na Lei 13.142/2015 só para forças de segurança. Leis 15.134 e 15.159/2025 alargaram vítimas e criaram a alínea c (escola). Feminicídio: tipo autônomo, pena 20–40 anos. Vicaricídio (Lei 15.384/2026): matar descendente/ascendente/dependente/enteado/pessoa sob guarda da mulher, com fim de causar-lhe sofrimento, punição ou controle, no contexto de violência doméstica — pena 20–40 anos.",
      pena: "Feminicídio/vicaricídio: 20–40 anos · lesão: penas do 129 §§ 2º e 3º",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "Lesão **leve ou grave (§ 1º)** contra policial **não** é hedionda — só **gravíssima** e **seguida de morte**, e só nas hipóteses do I-A.",
        "Parente da alínea **a** (segurança): só **consanguíneo**. Alínea **b** (Justiça): **inclui afinidade**.",
        "Alínea **c**: o lugar (escola) basta — a vítima não precisa ser autoridade.",
        "Feminicídio **não é mais** qualificadora do 121; é **crime próprio** (121-A) e hediondo pelo I-B.",
        "Vicaricídio exige **dolo específico** de atingir a mulher + contexto de violência doméstica.",
      ],
      pegadinha: [
        "«Toda lesão contra policial é hedionda» — **ERRADO**.",
        "«Cunhado de policial (afinidade) entra na alínea a» — **ERRADO** (só consanguíneo).",
        "«Feminicídio continua no art. 121, § 2º, VI» — **ERRADO desde a Lei 14.994/2024**.",
      ],
      exemplo: [
        "Tiro que cega um PM em ronda (gravíssima) → I-A, a → **hediondo**.",
        "Pai mata o filho de 8 anos na frente da mãe para «puní-la» por ter ido à delegacia → **vicaricídio** (I-C), 20–40 anos.",
        "Briga de adolescentes no pátio da escola com lesão gravíssima → I-A, c → **hediondo** (pegadinha geográfica).",
      ],
      macete:
        "**I-A** = gravíssima/morte + (farda **ou** toga **ou** escola). **I-B** = matar a mulher (121-A). **I-C** = matar o **vínculo** da mulher (121-B). Penas de rainha: **20 a 40** nos dois últimos.",
    },
    {
      id: "h-art-1-ii-iv",
      ref: "II · III · IV",
      nome: "Roubo circunstanciado e as extorsões",
      contexto:
        "O Pacote Anticrime (2019) dilatrou o «latrocínio» em três alíneas de roubo e trocou a extorsão-morte pelo sequestro-relâmpago do § 3º.",
      dispositivo: [
        "II - ==roubo==: (Lei nº 13.964, de 2019)",
        "a) circunstanciado pela ==restrição de liberdade da vítima== (art. 157, § 2º, inciso V);",
        "b) circunstanciado pelo ==emprego de arma de fogo== (art. 157, § 2º-A, inciso I) ou pelo emprego de arma de fogo de ==uso proibido ou restrito== (art. 157, § 2º-B);",
        "c) qualificado pelo resultado ==lesão corporal grave ou morte== (art. 157, § 3º);",
        "III - ==extorsão== qualificada pela restrição da liberdade da vítima, ocorrência de lesão corporal ou morte (art. 158, § 3º);",
        "IV - ==extorsão mediante sequestro== e na forma qualificada (art. 159, caput, e §§ 1º, 2º e 3º);",
      ],
      notaDispositivo:
        "Antes de 2019, só o latrocínio (157 § 3º in fine) era hediondo. Hoje roubo com arma de fogo (mesmo sem morte) já é. Extorsão: a lei agora cita o **§ 3º** (sequestro-relâmpago), não o § 2º (morte no tipo clássico) — doutrina majoritária: § 2º saiu do rol (novatio in mellius).",
      pena: "Latrocínio: 20–30 · roubo arma de fogo: +2/3 · extorsão 159 caput: 8–15",
      bancas: ["CEBRASPE", "FGV", "AOCP", "VUNESP"],
      cai: [
        "**Roubo simples** (157 caput) **não** é hediondo. Precisa de alínea a, b ou c.",
        "Arma branca no roubo: majorante do § 2º, VII — **não** é hediondo.",
        "Latrocínio (morte) **e** lesão grave no roubo (§ 3º) são hediondos (alínea c).",
        "Extorsão **caput** (158) não é hedionda. O **§ 2º** (morte) ficou fora da remissão atual.",
        "Art. 159 **inteiro** (caput e §§ 1º–3º) é hediondo; o § 4º é causa de diminuição (delação).",
      ],
      pegadinha: [
        "«Todo roubo é hediondo após o Pacote» — **ERRADO**.",
        "«Extorsão qualificada pela morte (158, § 2º) é hedionda» — texto atual aponta o **§ 3º**.",
        "«Sequestro relâmpago sem lesão não é hediondo» — **ERRADO**: o § 3º caput (restrição de liberdade) já está no inciso III.",
      ],
      exemplo: [
        "Assalto com pistola, vítima ilesa: 157 § 2º-A, I → **hediondo** (II, b).",
        "«Sequestro relâmpago» no caixa eletrônico (158 § 3º) → **hediondo**.",
        "Extorsão clássica com morte (158 § 2º), fato de 2021: pela literalidade pós-2019, **fora do rol** (teses em disputa — a banca literalista da Cebraspe cobra o § 3º).",
      ],
      macete:
        "Roubo hediondo = **algema, fogo ou sangue** (liberdade / arma de fogo / lesão grave-morte). Extorsão hedionda = **relâmpago (§ 3º)** + **sequestro (159)**. Caput do 157 e do 158 = **fora**.",
    },
    {
      id: "h-art-1-v-vi",
      ref: "V · VI",
      nome: "Estupro e estupro de vulnerável",
      contexto:
        "Lei 12.015/2009 unificou estupro e atentado violento ao pudor. O art. 214 saiu; o 217-A entrou.",
      dispositivo: [
        "V - ==estupro== (art. 213, caput e §§ 1º e 2º); (Lei nº 12.015, de 2009)",
        "VI - ==estupro de vulnerável== (art. 217-A, caput e §§ 1º, 2º, 3º e 4º); (Lei nº 12.015, de 2009)",
      ],
      notaDispositivo:
        "Art. 213: reclusão 6–10 (caput); 8–12 se vítima 14–18 ou lesão grave (§ 1º); 12–30 se morte (§ 2º). Art. 217-A: 8–15; § 3º lesão grave 10–20; § 4º morte 12–30. O § 2º do 217-A foi VETADO. Art. 218-B (inciso VIII) é outro tipo.",
      pena: "213: 6–10 / 8–12 / 12–30 · 217-A: 8–15 / 10–20 / 12–30",
      bancas: ["CEBRASPE", "FCC", "VUNESP", "FGV"],
      cai: [
        "**Todo** o art. 213 (caput e §§ 1º e 2º) é hediondo — inclusive o estupro simples.",
        "Vulnerável = menor de **14** ou enfermo/deficiente sem discernimento / sem resistência (§ 1º).",
        "Atentado violento ao pudor **não existe mais** como tipo; a conduta entrou no 213/217-A.",
        "STJ: o 217-A é crime **formal** quanto à idade — o consentimento da menor de 14 é **irrelevante** (Súmula 593/STJ).",
      ],
      pegadinha: [
        "«Só o estupro com lesão/morte é hediondo» — **ERRADO** (o caput já é).",
        "«Art. 214 ainda é hediondo» — **revogado** em 2009.",
        "Importunação sexual (215-A) **não** é hedionda.",
      ],
      exemplo: [
        "Conjunção carnal com namorada de 13 anos, «consentida»: 217-A + Súmula 593 → **hediondo**.",
        "Toque em ônibus (215-A): **não hediondo**.",
      ],
      macete:
        "**213 e 217-A inteiros** entram. **214 morreu**. 215-A (importunação) **fica de fora**. Consentimento de menor de 14 = **papel molhado** (Súm. 593).",
    },
    {
      id: "h-art-1-vii-viib",
      ref: "VII · VII-A · VII-B",
      nome: "Epidemia, o veto e os remédios",
      contexto:
        "Epidemia com morte é o único crime contra a saúde pública no rol do caput. VII-A foi vetado. VII-B puxa o art. 273 (falsificação de medicamentos).",
      dispositivo: [
        "VII - ==epidemia com resultado morte== (art. 267, § 1º);",
        "VII-A – (VETADO) (Lei nº 9.695, de 1998)",
        "VII-B - ==falsificação, corrupção, adulteração ou alteração de produto destinado a fins terapêuticos ou medicinais== (art. 273, caput e § 1º, § 1º-A e § 1º-B, com a redação da Lei nº 9.677, de 1998). (Lei nº 9.695, de 1998)",
      ],
      notaDispositivo:
        "Art. 267 caput (epidemia SEM morte) não é hediondo. Art. 273 tem pena draconiana (10–15) e figuras equiparadas (§§ 1º, 1º-A, 1º-B). Envenenamento de água (270) saiu em 1994.",
      pena: "267 § 1º: 10–15 · 273: 10–15",
      bancas: ["CEBRASPE", "AOCP", "FCC"],
      cai: [
        "Epidemia **sem morte** = não hedionda.",
        "VII-A vetado: se a questão der texto a ele, a alternativa é nula.",
        "273 hediondo **mesmo sem morte ou lesão** (crime de perigo).",
      ],
      pegadinha: [
        "«Toda epidemia é hedionda» — falta o **resultado morte**.",
        "«Falsificar alimento (art. 272) é hediondo» — **ERRADO** (só terapêutico/medicinal).",
      ],
      exemplo: [
        "Laboratório altera lote de antibiótico genérico: 273 → **hediondo**, 10–15 anos.",
        "Covid sem nexo de morte no tipo 267: não force a hediondez — precisa do § 1º.",
      ],
      macete:
        "**Morte na epidemia**; **remédio falso mesmo sem morte**. Comida adulterada e água envenenada: **fora do rol**. VII-A = **cova do veto**.",
    },
    {
      id: "h-art-1-viii-xii",
      ref: "VIII a XII",
      nome: "Infância, explosivo e o pacote 14.811/2024",
      contexto:
        "Do 218-B (2014) ao furto explosivo (2019) e ao trio da Lei 14.811/2024: suicídio em rede, cárcere de menor e tráfico de crianças.",
      dispositivo: [
        "VIII - ==favorecimento da prostituição ou de outra forma de exploração sexual de criança ou adolescente ou de vulnerável== (art. 218-B, caput, e §§ 1º e 2º); (Lei nº 12.978, de 2014)",
        "IX - ==furto qualificado pelo emprego de explosivo== ou de artefato análogo que cause perigo comum (art. 155, § 4º-A); (Lei nº 13.964, de 2019)",
        "X - ==induzimento, instigação ou auxílio a suicídio ou a automutilação== realizados por meio da ==rede de computadores, de rede social ou transmitidos em tempo real== (art. 122, caput e § 4º); (Lei nº 14.811, de 2024)",
        "XI - ==sequestro e cárcere privado== cometido contra ==menor de 18 (dezoito) anos== (art. 148, § 1º, inciso IV); (Lei nº 14.811, de 2024)",
        "XII - ==tráfico de pessoas== cometido contra ==criança ou adolescente== (art. 149-A, caput, incisos I a V, e § 1º, inciso II). (Lei nº 14.811, de 2024)",
      ],
      notaDispositivo:
        "O caput do art. 122 (suicídio «offline») NÃO é hediondo — só quando a conduta é pela rede/tempo real (§ 4º). Tráfico de pessoas de adulto (149-A sem o § 1º, II) não entra no XII. Furto simples e furto noturno não entram; só explosivo.",
      pena: "218-B: 4–10 · 155 § 4º-A: 4–10 · 122 varia · 148 § 1º: 2–5 · 149-A: 4–8 (+ metade se criança)",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "218-B: quem **paga** pelo sexo com o vulnerável (§ 1º) também responde — e é hediondo.",
        "Furto com explosivo ≠ roubo; é **furto** qualificado hediondo (caixa de banco, caixa-eletrônico).",
        "Inciso X: precisa do **meio digital/ao vivo**. WhatsApp em grupo de «desafio da baleia» = típico.",
        "Cárcere de maior de 18 (148 caput) **não** é hediondo.",
        "Tráfico de pessoas: só contra **criança ou adolescente** (XII).",
      ],
      pegadinha: [
        "«Todo o art. 122 é hediondo» — **ERRADO** (só caput + § 4º, meio digital).",
        "«Furto com chave falsa é hediondo» — **ERRADO**.",
        "«Tráfico de pessoas (qualquer vítima) é hediondo» — só **criança/adolescente** no XII.",
        "Mutilação genital feminina (art. 146-A, Lei 14.811) **não foi** para o rol do art. 1º — a banca confunde com o pedido do enunciado.",
      ],
      exemplo: [
        "Caixa-eletrônico explodido de madrugada, sem violência à pessoa: 155 § 4º-A → **hediondo**.",
        "Influencer transmite ao vivo «desafio» de automutilação: 122 + § 4º → **hediondo**.",
        "Pai tranca filho de 16 no quarto por três dias: 148 § 1º, IV → **hediondo**.",
      ],
      macete:
        "**Criança no sexo (VIII), no cativeiro (XI) e no tráfico (XII)**; **explosivo no furto (IX)**; **suicídio só se for online (X)**. 146-A (mutilação) **ficou de fora** do rol — pegadinha da 14.811.",
    },
    {
      id: "h-art-1-pu",
      ref: "Parágrafo único",
      nome: "Hediondos «também»: genocídio, armas, ECA, CPM, facção",
      contexto:
        "O parágrafo único (redação 13.964 + acréscimos 2023-2026) é a porta das leis especiais. E os EQUIPARADOS da CF (tortura, tráfico, terrorismo) NÃO estão aqui — estão no art. 2º.",
      dispositivo: [
        "Parágrafo único. Consideram-se também hediondos, ==tentados ou consumados==: (Lei nº 13.964, de 2019)",
        "I - o crime de ==genocídio==, previsto nos arts. 1º, 2º e 3º da Lei nº 2.889, de 1º de outubro de 1956;",
        "II - o crime de ==posse ou porte ilegal de arma de fogo de uso proibido==, previsto no art. 16 da Lei nº 10.826, de 22 de dezembro de 2003;",
        "III - o crime de ==comércio ilegal de armas de fogo==, previsto no art. 17 da Lei nº 10.826/2003;",
        "IV - o crime de ==tráfico internacional de arma de fogo, acessório ou munição==, previsto no art. 18 da Lei nº 10.826/2003;",
        "V - o crime de ==organização criminosa==, quando ==direcionado à prática de crime hediondo ou equiparado==;",
        "VI - os crimes previstos no Decreto-Lei nº 1.001, de 21 de outubro de 1969 (==Código Penal Militar==), que apresentem ==identidade== com os crimes previstos no art. 1º desta Lei; (Lei nº 14.688, de 2023)",
        "VII - os crimes previstos no caput e nos §§ 1º e 2º do art. 240, no caput e no parágrafo único do art. 241, no caput e nos §§ 1º e 3º do art. 241-A, no caput do art. 241-B, no caput e nos §§ 1º e 2º do art. 241-D e no caput e no § 1º do art. 244-A da Lei nº 8.069/1990 (==ECA==); (Lei nº 15.487, de 2026)",
        "VIII - os crimes de ==domínio social estruturado== e de ==favorecimento ao domínio social estruturado==, previstos no caput e nos §§ 1º e 3º do art. 2º e no art. 3º da lei que institui o marco legal do combate ao crime organizado no Brasil. (Lei nº 15.358, de 2026)",
      ],
      notaDispositivo:
        "Pegadinha de ouro: a Lei 13.497/2017 falava em arma de uso RESTRITO; o Pacote Anticrime (2019) apertou para uso PROIBIDO (art. 16, § 2º — 4 a 12 anos). Uso restrito (caput do 16, 3 a 6) **deixou de ser hediondo**. Equiparados CF: tortura (Lei 9.455), tráfico (Lei 11.343, art. 33 caput e equiparados — debate sobre privilegiado 33 § 4º), terrorismo (Lei 13.260). Domínio social: 20–40 anos (art. 2º) e favorecimento 12–20 (art. 3º) da Lei 15.358/2026.",
      pena: "Armas: 4–12 (proibida) / 6–12 (comércio) / 8–16 (tráfico int.) · domínio: 20–40",
      bancas: ["CEBRASPE", "FGV", "AOCP", "FCC", "VUNESP"],
      cai: [
        "**Uso PROIBIDO** (não restrito) é hediondo. Restrito saiu em 2019.",
        "Art. 14 (porte de uso permitido) **nunca** foi hediondo.",
        "Organização criminosa (Lei 12.850) só é hedionda se **voltada** a hediondo/equiparado — a associação «genérica» não entra.",
        "Genocídio: arts. 1º, 2º e 3º da Lei 2.889 (matar, associar-se, incitar). Art. 4º (agravante de governante) não é tipo.",
        "Tortura, tráfico e terrorismo = **EQUIPARADOS** (art. 2º + CF XLIII), não «hediondos em sentido estrito».",
        "Tráfico privilegiado (33 § 4º): STF (HC 118.533) — **não** é equiparado a hediondo.",
      ],
      pegadinha: [
        "«Posse de fuzil de uso restrito é hedionda» — **cuidado**: o texto diz **proibido**. Fuzil pode ser restrito ou proibido conforme o decreto — a banca literal cobra «proibido».",
        "«Tortura está no art. 1º» — **ERRADO** (equiparada, art. 2º).",
        "«Toda organização criminosa é hedionda» — só a **direcionada** a hediondo/equiparado.",
        "«Racismo é hediondo» — **NUNCA**.",
      ],
      exemplo: [
        "Porte de pistola .380 (uso permitido): art. 14 — **não hediondo**.",
        "PCC estruturado para latrocínios: 12.850 + parágrafo único, V → **hediondo**.",
        "Mulher primária, traficante ocasional, pequena quantidade: 33 § 4º — **não equiparado** (STF).",
        "Integrante de facção que impõe «toque de recolher» no morro: domínio social estruturado (15.358, art. 2º) → **hediondo**, 20–40 anos.",
      ],
      macete:
        "Parágrafo único = **GATO-FEDE** (Genocídio, Arma **proibida**, Tráfico int. de arma, Org. criminosa direcionada, Forças/CPM, ECA sexual, Domínio/facção, comércio ilegal). Equiparados da CF = **3T** (**T**ortura, **T**ráfico, **T**errorismo) — moram no **art. 2º**, não no 1º. Restrito ≠ proibido.",
    },
  ],
};
