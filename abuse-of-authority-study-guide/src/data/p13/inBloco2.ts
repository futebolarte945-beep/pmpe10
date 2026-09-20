import type { Bloco } from "../tipos";

export const inBloco2: Bloco = {
  id: "in-bloco-2",
  numero: "Bloco 02",
  titulo: "Três portas fechadas e quem pede a chave",
  intervalo: "Arts. 2º e 3º",
  subtitulo: "Indícios · subsidiariedade · não é detenção · ofício só no texto",
  descricao:
    "O art. 2º está em forma **negativa**: a interceptação não se admite se faltar indício, se houver outro meio ou se a pena máxima for detenção. O 3º ainda diz «de ofício»; o sistema acusatório (13.964) puxa o ofício para fora do inquérito.",
  notaProfessor: {
    titulo: "Correção de rota",
    itens: [
      "O 2º **não** lista «três requisitos positivos»: lista **três vedações**. Na prática a banca cobra o avesso: precisa de indícios **e** de subsidiariedade **e** de crime cuja pena **não** seja, no máximo, detenção (logo, **reclusão** no tipo).",
      "«Punida, no máximo, com detenção» = o teto do tipo é detenção (ou só multa). Crime com **reclusão** (mesmo que alternativa) passa no III. Contravenção: **não**.",
      "Art. 3º **ainda** traz o juiz de ofício. Pós-13.964 (CPP 3º-A, 282, § 2º): na **investigação**, o juiz **não** decreta de ofício — só representação do delegado ou requerimento do MP. Na ação penal o texto do 3º continua a permitir ofício; marque a tese se a banca pedir o «sistema acusatório».",
    ],
  },
  grupos: [
    {
      id: "in-art-2",
      ref: "Art. 2º",
      nome: "Três «nãos» — um só já mata a medida",
      contexto:
        "Qualquer das hipóteses impede. O PU exige descrever a situação e, se possível, qualificar os investigados — a «impossibilidade manifesta» tem de ser justificada (linha sem dono, chip de laranja).",
      dispositivo: [
        "Art. 2º. Não será admitida a interceptação quando ocorrer ==qualquer== das seguintes hipóteses:",
        "I – não houver ==indícios razoáveis== da autoria ou participação em infração penal;",
        "II – a prova ==puder== ser feita por outros meios disponíveis;",
        "III – o fato investigado constituir infração penal punida, ==no máximo, com pena de detenção==.",
        "Parágrafo único. Em qualquer hipótese deve ser descrita com clareza a situação objeto da investigação, inclusive com a indicação e qualificação dos investigados, salvo impossibilidade manifesta, devidamente justificada.",
      ],
      notaDispositivo:
        "II = subsidiariedade (ultima ratio). STJ: pode ser o **único** meio **desde que** a decisão fundamente por que os outros não servem — não basta o carimbo «imprescindível». III: olha a pena **cominada** do tipo, não a pena concreta. Furto simples (reclusão 1–4) **cabe** em tese no III; ameaça, não. Ambiental (8º-A) usa outro teto: máxima **> 4 anos**.",
      pena: "Vedações · ultima ratio",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Três vedações. **Uma** já impede.",
        "III = máxima **detenção** (ou menos) → **não** intercepta.",
        "II tem de ser **motivado** (STJ): não é frase de modelo.",
        "PU: descreva o fato; nomeie o alvo, salvo impossibilidade justificada.",
      ],
      pegadinha: [
        "«Não cabe em furto, porque a pena é baixa» — furto simples é **reclusão**. O III não olha a quantidade, olha a **espécie**.",
        "«Cabe em contravenção, se o juiz fundamentar» — máxima não é reclusão.",
        "«Os três incisos são requisitos cumulativos do pedido» — são **vedações** alternativas; o pedido precisa **fugir das três**.",
      ],
      exemplo: [
        "Estelionato (reclusão): indícios no extrato + nada a buscar em casa → 2º, I e III ok; o II exige explicar por que o extrato não basta.",
        "Lesão leve (detenção): por mais grave que seja o áudio esperado, o III **fecha**.",
      ],
      macete:
        "**Indício + último meio + reclusão.** Detenção e contravenção nem entram na sala. Uma vedação derruba as três.",
    },
    {
      id: "in-art-3",
      ref: "Art. 3º",
      nome: "Delegado representa, MP requer, ofício no inquérito não",
      contexto:
        "Legitimados no texto: juiz de ofício; policial na investigação (representação); MP na investigação **e** na instrução. Vítima, querelante e assistente **não** pedem interceptação pela 9.296.",
      dispositivo: [
        "Art. 3º. A interceptação poderá ser determinada pelo juiz, ==de ofício== ou a requerimento:",
        "I – da ==autoridade policial==, na investigação criminal;",
        "II – do representante do ==Ministério Público==, na investigação criminal e na instrução processual penal.",
      ],
      notaDispositivo:
        "No inquérito, o pacote acusatório (13.964) alinha a interceptação às demais cautelares: **sem ofício**. O 8º-A (ambiental) **já nasceu** sem ofício — só polícia ou MP. Banca literalista ainda cobra o «de ofício» do 3º: leia o comando («nos termos da lei» vs. «após o CPP 3º-A»).",
      pena: "Legitimidade",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "IP: **delegado** ou **MP**. Sem vítima.",
        "Processo: **MP** (e, no texto, ofício).",
        "Pós-13.964: ofício no **IP** = tese **vedada**.",
        "8º-A: **nunca** de ofício.",
      ],
      pegadinha: [
        "«O ofendido requer a interceptação, como no 311» — **não** está no 3º.",
        "«Ambiental o juiz decreta de ofício, porque o 3º se aplica» — 8º-A é requerimento da polícia/MP.",
      ],
      exemplo: [
        "IP de homicídio: delegado representa, juiz defere em 24 h. O juiz **não** liga o chip «porque ficou curioso» — 3º-A.",
      ],
      macete:
        "**Quem pede: polícia ou MP. Quem não pede: a vítima.** Ofício no IP morreu com o acusatório. 8º-A já nasceu sem ofício.",
    },
  ],
};
