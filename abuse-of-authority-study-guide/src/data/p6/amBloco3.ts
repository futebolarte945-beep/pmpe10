import type { Bloco } from "../tipos";

export const amBloco3: Bloco = {
  id: "am-bloco-3",
  numero: "Bloco 03",
  titulo: "Crimes contra a fauna",
  intervalo: "Arts. 29 ao 37",
  subtitulo: "Caça, pesca, rinha, cão e gato, e o art. 37 que NÃO é crime culposo",
  descricao:
    "A seção mais cobrada da lei. O 29 não alcança a pesca (§ 6º). O 32 ganhou reclusão 2–5 para cão e gato (Lei 14.064/2020 — «Lei Sansão»). O 37 é causa de exclusão («não é crime»), não tipo culposo. Modificação genética de animal NÃO está nestes artigos.",
  notaProfessor: {
    titulo: "O que o roteiro pediu e a lei não pôs aqui",
    itens: [
      "**Modificação genética de animal** não é tipo dos arts. 29–37. Mora na **Lei 11.105/2005** (biossegurança). Introdução de espécime no País, sem parecer e licença = **art. 31** (é o primo que a banca troca).",
      "**Art. 37 não é crime culposo.** O caput diz «Não é crime o abate…». Culpa na flora aparece depois (38 parágrafo único) — fora desta leva.",
      "Ação penal de toda a lei: **pública incondicionada** (art. 26) — vale da fauna ao 69-A.",
    ],
  },
  grupos: [
    {
      id: "am-art-29",
      ref: "Art. 29",
      nome: "Matar, perseguir, caçar, apanhar, utilizar",
      contexto:
        "Tipo-mãe da fauna silvestre. Pena baixa (6 meses a 1 ano) com aumentos pesados. Não se aplica à pesca.",
      dispositivo: [
        "Art. 29. ==Matar, perseguir, caçar, apanhar, utilizar== espécimes da fauna ==silvestre==, nativos ou em rota migratória, sem permissão, licença ou autorização, ou em desacordo com a obtida:",
        "Pena - ~~detenção de seis meses a um ano, e multa~~.",
        "§ 1º Nas mesmas penas: I impede a procriação; II destrói ninho/abrigo/criadouro; III vende, exporta, adquire, guarda, tem em cativeiro, transporta ovos, larvas ou espécimes (criadouro não autorizado).",
        "§ 2º Guarda doméstica de silvestre ==não ameaçada==: o juiz ==pode deixar de aplicar a pena==.",
        "§ 3º Fauna silvestre = nativas, migratórias e quaisquer outras com ciclo no território/águas brasileiras.",
        "§ 4º A pena é aumentada de ==metade== se: I espécie rara/ameaçada; II período proibido à caça; III durante a noite; IV abuso de licença; V unidade de conservação; VI métodos de destruição em massa.",
        "§ 5º Aumentada ==até o triplo== se decorre de ==caça profissional==.",
        "§ 6º As disposições deste artigo ==não se aplicam aos atos de pesca==.",
      ],
      notaDispositivo:
        "Crime de menor potencial ofensivo no caput (máx. 1 ano) — JECRIM, com a trava ambiental do art. 27 (composição do dano). Silvestre ≠ doméstico (cão/gato vão ao 32). Periquito na gaiola de casa, espécie não ameaçada: perdão judicial do § 2º. Pesca = 34/35, nunca 29.",
      pena: "Detenção 6m–1a + multa · +1/2 · até ×3",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Núcleos: matar, perseguir, caçar, apanhar, utilizar — silvestre, sem licença.",
        "**§ 6º: pesca fora.**",
        "Aumento de **metade** (§ 4º) e **até o triplo** na caça profissional (§ 5º) — aqui sim é causa de aumento.",
        "§ 2º = perdão judicial (guarda doméstica, não ameaçada).",
      ],
      pegadinha: [
        "«Pescar no defeso é art. 29» — **ERRADO** (§ 6º).",
        "«Matar vaca/cavalo é 29» — fauna **silvestre**; doméstico vai ao **32**.",
        "«O 15 aumenta a pena da caça em UC» — o 15 **agrava**; o aumento é o **29 § 4º, V**.",
      ],
      exemplo: [
        "Caçador mata onça (ameaçada) à noite em parque: 29 + § 4º I, III e V.",
        "Vizinho cria jandaia desde filhote, lista não ameaçada: juiz pode **deixar de aplicar** a pena (§ 2º).",
      ],
      macete:
        "**29 é caça, não pesca.** Metade no § 4º (raro, defeso, noite, licença, UC, massivo). Triplo se for **profissão**. Gaiola caseira não ameaçada = perdão (§ 2º).",
    },
    {
      id: "am-art-30-32",
      ref: "Arts. 30 a 32",
      nome: "Couro, espécie exótica, crueldade e a Lei Sansão",
      contexto:
        "30 = exportar pele de anfíbio/réptil em bruto. 31 = introduzir espécime no País (o «exótico»). 32 = maus-tratos — silvestre, doméstico ou domesticado; rinhas entram; cão/gato têm pena própria.",
      dispositivo: [
        "Art. 30. Exportar peles e couros de ==anfíbios e répteis em bruto==, sem autorização: ~~reclusão, de um a três anos, e multa~~.",
        "Art. 31. ==Introduzir espécime animal no País==, sem parecer técnico oficial favorável e licença: ~~detenção, de três meses a um ano, e multa~~.",
        "Art. 32. Praticar ato de abuso, ==maus-tratos==, ferir ou mutilar animais silvestres, domésticos ou domesticados, nativos ou exóticos: ~~detenção, de três meses a um ano, e multa~~.",
        "§ 1º Experiência dolorosa ou cruel em animal vivo, ainda que didática/científica, quando houver ==alternativa==.",
        "§ 1º-A ==Cão ou gato==: ~~reclusão, de 2 a 5 anos~~, multa e proibição da guarda. (Lei nº 14.064/2020 — «Lei Sansão»)",
        "§ 1º-B Tatuagem e piercing estéticos em cães e gatos: mesmas penas do § 1º-A. (Lei nº 15.150/2025)",
        "§ 1º-C Desastre ambiental que prejudique vida/integridade/bem-estar de animais. (Lei nº 15.355/2026)",
        "§ 2º Aumento de ==1/6 a 1/3== se ocorre ==morte== do animal.",
      ],
      notaDispositivo:
        "Rinha de galo/cão: STJ e STF (ADPF 640 discute destinação dos animais; o tipo 32 alcança a rinha como maus-tratos). Lei Sansão: só cão e gato no § 1º-A (reclusão 2–5 — sai do JECRIM). Outros domésticos (cavalo, boi) permanecem no caput (3 meses–1 ano). Introdução de espécie (31) ≠ transgenia (Lei 11.105).",
      pena: "30: recl. 1–3 · 31: det. 3m–1a · 32: det. 3m–1a / cão-gato recl. 2–5",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "32 alcança **domésticos** (diferente do 29).",
        "**Rinha** = maus-tratos (32).",
        "Cão/gato: **reclusão 2–5** + proibição da guarda (14.064/2020).",
        "Morte do animal: +**1/6 a 1/3** (§ 2º) — também no caput.",
        "31 = introduzir no País (exótica/qualquer espécime) sem parecer + licença.",
      ],
      pegadinha: [
        "«Matar o gato é art. 29» — é **32 § 1º-A** (2–5).",
        "«Rinha de galo é contravenção, não crime ambiental» — **32**.",
        "«Art. 31 pune transgenia» — pune **introduzir espécime**; OGM é outra lei.",
        "«Sansão vale para qualquer doméstico» — só **cão e gato**.",
      ],
      exemplo: [
        "Rinha de galos no sítio: **32 caput** (e o organizador).",
        "Envenenar o cão do vizinho: **32 § 1º-A** (2–5) + § 2º se morrer.",
        "Soltar javali-europeu na fazenda sem licença: **31**.",
      ],
      macete:
        "**29 silvestre; 32 qualquer bicho; Sansão = cão e gato (2 a 5).** Rinha entra. 31 é a fronteira (introduzir). Transgenia **não mora aqui**.",
    },
    {
      id: "am-art-33-37",
      ref: "Arts. 33 a 37",
      nome: "Pesca, explosivo e o «não é crime»",
      contexto:
        "33 = perecimento da fauna aquática por efluente. 34 = pescar no defeso ou lugar interditado. 35 = explosivo/tóxico (reclusão 1–5). 36 = conceito de pesca. 37 = atipicidade (fome, lavoura autorizada, nocivo).",
      dispositivo: [
        "Art. 33. Provocar, por efluentes ou carreamento, o ==perecimento== de fauna aquática: ~~detenção, de um a três anos, ou multa, ou ambas~~. Parágrafo único: viveiros públicos; invertebrados/algas sem licença; fundear/lançar detritos sobre bancos de moluscos ou corais.",
        "Art. 34. ==Pescar== em período proibido ou em lugares ==interditados==: ~~detenção de um a três anos ou multa, ou ambas~~. Parágrafo único: espécies preservadas / tamanho inferior; quantidade ou petrechos proibidos; transportar/comercializar o pescado ilegal.",
        "Art. 35. Pescar com ==explosivos== (ou efeito semelhante) ou ==substâncias tóxicas== / meio proibido: ~~reclusão de um a cinco anos~~.",
        "Art. 36. Pesca = todo ato tendente a retirar/capturar peixes, crustáceos, moluscos e vegetais hidróbios (exceto ameaçados das listas oficiais).",
        "Art. 37. ==Não é crime== o abate quando: I estado de necessidade para ==saciar a fome== do agente ou da família; II proteger lavouras, pomares e rebanhos, ==legal e expressamente autorizado==; III (VETADO); IV animal ==nocivo== caracterizado pelo órgão competente.",
      ],
      notaDispositivo:
        "35 é a pena mais alta da seção (reclusão 1–5) — pesca com bomba. 37 é **atipicidade** (não é crime), não excludente de culpabilidade nem tipo culposo. Inciso II exige **autorização expressa** — matar a onça «para proteger o bezerro» sem o órgão = 29. Inciso III vetado. Conceito amplo de pesca no 36 (inclui vegetais hidróbios).",
      pena: "33/34: det. 1–3 · 35: recl. 1–5 · 37: atípico",
      bancas: ["CEBRASPE", "FGV", "AOCP", "FCC"],
      cai: [
        "Pesca proibida/interditada = **34**, não 29.",
        "Bomba na lagoa = **35**, reclusão 1–5.",
        "37 = **não é crime** (fome; lavoura **com** autorização; nocivo oficial).",
        "36 define pesca (e tira ameaçados das listas — esses voltam ao 29).",
      ],
      pegadinha: [
        "«Art. 37 é o crime culposo contra a fauna» — **ERRADO**. «Não é crime».",
        "«Proteger a lavoura sempre exclui» — falta a **autorização expressa** (II).",
        "«Pesca com bomba é 34» — é **35**.",
      ],
      exemplo: [
        "Ribeirinho mata um peixe para alimentar os filhos, sem outro meio: **37, I** (atípico).",
        "Fazendeiro abate a onça que ataca o rebanho, sem autorização: **29** (o 37, II, não abre).",
        "Pescador joga dinamite no rio: **35**.",
      ],
      macete:
        "**29 caça; 34 pesca no defeso; 35 pesca-bomba (1 a 5).** **37 não é crime** — fome, lavoura **com papel**, nocivo **carimbado**. Sem papel, a onça no pasto continua 29.",
    },
  ],
};
