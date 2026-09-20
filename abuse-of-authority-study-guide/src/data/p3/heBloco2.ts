import type { Bloco } from "../tipos";

export const heBloco2: Bloco = {
  id: "h-bloco-2",
  numero: "Bloco 02",
  titulo: "Regime, vedações e progressão",
  intervalo: "Art. 2º, caput e §§ 1º a 3º",
  subtitulo: "Anistia, graça, indulto, fiança e o funeral do 2/5–3/5",
  descricao:
    "O art. 2º aplica-se aos hediondos E aos três equiparados. Aqui vivem as vedações constitucionais (com o «plus» do indulto), a inafiançabilidade, o regime inicial fechado (depois do STF) e a história da progressão — que hoje não está mais neste artigo, e sim no art. 112 da LEP.",
  grupos: [
    {
      id: "h-art-2-caput",
      ref: "Art. 2º, I e II",
      nome: "O que a Constituição proibiu — e o que a lei acrescentou",
      contexto:
        "Hediondos, tortura, tráfico e terrorismo: sem anistia, graça, indulto nem fiança. Liberdade provisória saiu do inciso II em 2007.",
      dispositivo: [
        "Art. 2º Os crimes hediondos, a prática da ==tortura==, o ==tráfico ilícito de entorpecentes e drogas afins== e o ==terrorismo== são insuscetíveis de:",
        "I - ==anistia, graça e indulto==;",
        "II - ==fiança==. (Redação dada pela Lei nº 11.464, de 2007)",
      ],
      notaDispositivo:
        "CF, art. 5º, XLIII, fala em graça e anistia (não cita indulto). A lei acrescentou o indulto; o STF considerou válido (graça em sentido amplo). Inciso II original: «fiança e liberdade provisória». Lei 11.464/2007 cortou a liberdade provisória — logo, prisão preventiva exige fundamento concreto (CPP 312), não a hediondez automática. Súmula Vinculante 26 (progressão) e 35 (não cabe prisão cautelar automática).",
      pena: "Vedações · sem pena própria",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**Indulto** é vedado pela lei (e o STF chancela). Decreto de indulto natalino que inclua tráfico privilegiado é outra discussão (STF tem aberto para o § 4º do art. 33).",
        "**Fiança**: inafiançável. Mas **liberdade provisória SEM fiança** (CPP 319, 310) **não** está mais proibida pelo inciso II.",
        "Anistia (Congresso), graça (individual, Presidente), indulto (coletivo, Presidente) — três institutos, três autoridades.",
        "Comutação (indulto parcial) também fica bloqueada para o hediondo «cheio».",
      ],
      pegadinha: [
        "«São insuscetíveis de anistia, graça, indulto e liberdade provisória» — **metade errada**: liberdade provisória **saiu** em 2007.",
        "«A CF já proíbe o indulto» — o texto constitucional **não** usa a palavra; quem proíbe é a **lei**, com chancela do STF.",
        "«Tortura admite indulto porque a CF não fala em indulto para ela» — a Lei 8.072, art. 2º, alcança os **quatro**.",
      ],
      exemplo: [
        "Condenado por latrocínio pede inclusão em decreto de indulto de Natal: **indefere** (art. 2º, I).",
        "Flagrante de tráfico: delegado **não** arbitra fiança. O juiz, na audiência de custódia, pode conceder medidas cautelares **sem fiança** se não houver 312.",
      ],
      macete:
        "**AGI-F** (Anistia, Graça, Indulto, Fiança) — os quatro «nãos». Liberdade provisória **não** está mais no time. A CF deu **AG-F**; a lei colocou o **I** do indulto.",
    },
    {
      id: "h-art-2-s1",
      ref: "Art. 2º, § 1º",
      nome: "Regime inicial fechado — e o funeral do «integralmente»",
      contexto:
        "De 1990 a 2006 a lei mandava cumprir a pena «integralmente em regime fechado». O STF derrubou. Em 2007 o Congresso escreveu «inicialmente».",
      dispositivo: [
        "§ 1º A pena por crime previsto neste artigo será cumprida ==inicialmente em regime fechado==. (Redação dada pela Lei nº 11.464, de 2007)",
      ],
      notaDispositivo:
        "HC 82.959/SP (STF, 2006): inconstitucional o cumprimento integral em fechado (vedava progressão). Súmula Vinculante 26: o juízo da execução observa essa inconstitucionalidade. O § 1º atual impõe só o **início** em fechado; a progressão segue o art. 112 da LEP. Pena abaixo de 8 anos: ainda assim o § 1º puxa para o fechado (regra especial) — mas a individualização (STF) permite discussão quando a pena é curta e o réu é primário.",
      pena: "Regime inicial fechado",
      bancas: ["CEBRASPE", "FGV", "AOCP"],
      cai: [
        "«Integralmente em regime fechado» = redação **revogada/inconstitucional**. Se a questão usar esse texto como vigente, está errada.",
        "Regime **inicial** fechado ≠ progressão impossível.",
        "Súmula Vinculante **26** (progressão) e o art. 2º, § 1º, convivem: começa fechado, progride na LEP.",
      ],
      pegadinha: [
        "Cobrar o regime integralmente fechado como direito vigente — **ERRADO desde 2006/2007**.",
        "«Hediondo com pena de 4 anos começa no aberto» — a regra especial aponta o **fechado inicial** (com o debate da individualização).",
      ],
      exemplo: [
        "Condenado a 6 anos por porte de arma de uso proibido: inicia em **fechado**, mesmo a pena caber no semiaberto do art. 33 do CP — especialidade do § 1º.",
      ],
      macete:
        "**Começa fechado, não morre fechado.** «Integralmente» = palavra **fantasma**. Progressão mora na **LEP 112**, não mais neste parágrafo.",
    },
    {
      id: "h-art-2-prog",
      ref: "Art. 2º, § 2º (revogado) + LEP 112",
      nome: "Progressão: do 2/5–3/5 ao 70–85%",
      contexto:
        "O § 2º da Lei 8.072 foi revogado pelo Pacote Anticrime. Quem manda é o art. 112 da LEP — reescrito em 2019, 2024 e 2026. A data do fato decide o percentual.",
      dispositivo: [
        "§ 2º (Revogado pela Lei nº 13.964, de 2019.) — texto antigo: progressão após ==2/5== (primário) ou ==3/5== (reincidente).",
        "LEP, art. 112 (fatos a partir de 24/03/2026 — Lei nº 15.358/2026, Marco Antifacção):",
        "V - ==70%== · hediondo ou equiparado, se ==primário==;",
        "VI, a - ==75%== · hediondo/equiparado ==com resultado morte==, primário — ==vedado o livramento condicional==;",
        "VI, d - ==75%== · ==feminicídio==, primário — vedado o livramento;",
        "VII - ==80%== · ==reincidente== em hediondo ou equiparado;",
        "VIII - ==85%== · reincidente em hediondo/equiparado ==com resultado morte== — vedado o livramento.",
        "Pacote Anticrime (fatos 23/01/2020 a 23/03/2026): primário 40% · com morte 50% · reincidente 60% · reincidente + morte 70%. Feminicídio primário teve 55% (Lei 14.994/2024) até migrar para 75%.",
      ],
      notaDispositivo:
        "Lei penal mais grave NÃO retroage (CF, art. 5º, XL). Fatos até 22/01/2020: 2/5 e 3/5 da Lei 11.464 (ou 1/6 se anterior ao HC 82.959 na execução). Lei 13.769/2018: mulher gestante/mãe pode progredir com 1/8 (requisitos cumulativos). Lei 14.843/2024: exame criminológico voltou a pesar no § 1º do 112. Lei 15.402/2026 devolveu 1/6 ao caput da LEP (ADIs 7966/7967 — suspensão tópica para 8 de janeiro).",
      pena: "Percentuais de progressão (LEP 112)",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**Pergunte a data do fato** antes de cravar o percentual.",
        "Comparativo clássico Anticrime: 40 / 50 / 60 / 70. Pós-15.358: **70 / 75 / 80 / 85**.",
        "Resultado morte + primário: livramento condicional **vedado** (112, VI, a).",
        "Reincidente **específico** vs genérico: o STJ já modulou o 50% retroativo para reincidente genérico com morte (tese 2024).",
        "Tráfico privilegiado: progressão como crime comum (não hediondo).",
      ],
      pegadinha: [
        "«A progressão de hediondo é de 2/5 e 3/5» — **revogado** para fatos pós-23/01/2020.",
        "Aplicar 70–85% a fato de 2022 — **in malam partem**, proibido.",
        "«Hediondo nunca progride» — **ERRADO** desde o HC 82.959.",
      ],
      exemplo: [
        "Latrocínio em 2018, primário: progride com **2/5** (Lei 11.464).",
        "Latrocínio em 2021, primário: **50%** (Anticrime, resultado morte).",
        "Latrocínio em abril/2026, primário: **75%** e sem livramento (15.358).",
        "Estupro em 2021, primário, sem morte: **40%** (não 50 — 50 era só com morte).",
      ],
      macete:
        "**Data primeiro, fração depois.** Anticrime: **40-50-60-70**. Antifacção (24/03/2026): **70-75-80-85**. Morte empurra para o alto e **fecha o livramento**. 2/5 e 3/5 = **saudade de 2007**.",
    },
    {
      id: "h-art-2-s3",
      ref: "Art. 2º, § 3º",
      nome: "Apelar em liberdade — decisão fundamentada",
      contexto:
        "O § 3º atual (ex-§ 2º) não cria prisão automática: o juiz decide, com fundamentação, se o réu apela solto.",
      dispositivo: [
        "§ 3º Em caso de sentença condenatória, o juiz decidirá ==fundamentadamente== se o réu poderá ==apelar em liberdade==. (Redação dada pela Lei nº 11.464, de 2007)",
      ],
      notaDispositivo:
        "Não há execução provisória automática da pena só pela hediondez. Prisão após sentença pede os requisitos da preventiva (CPP 312) ou o art. 387, § 1º, do CPP, sempre motivados. STF: presunção de inocência até o trânsito (ADC 43/44/54) — tema que a banca mistura com este parágrafo.",
      pena: "Regra processual",
      bancas: ["CEBRASPE", "FGV", "FCC"],
      cai: [
        "A hediondez **não** é fundamento isolado para negar o apelo em liberdade.",
        "Decisão **obrigatoriamente fundamentada** (não basta copiar o art. 2º).",
      ],
      pegadinha: [
        "«Condenado por hediondo não pode apelar em liberdade» — **ERRADO** (o juiz pode autorizar).",
      ],
      exemplo: [
        "Sentença de 6 anos por 218-B, réu primário, residência fixa: juiz pode **permitir** o apelo em liberdade, fundamentando a ausência de 312.",
      ],
      macete:
        "**Não é automático.** Hediondo condenado **pode** apelar solto se o juiz **escrever por quê**. Fundamentação é o verbo do parágrafo.",
    },
  ],
};
