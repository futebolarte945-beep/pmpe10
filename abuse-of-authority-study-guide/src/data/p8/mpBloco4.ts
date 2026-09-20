import type { Bloco } from "../tipos";

export const mpBloco4: Bloco = {
  id: "mp-bloco-4",
  numero: "Bloco 04",
  titulo: "Competência, ação penal e o que a 9.099 não toca",
  intervalo: "Arts. 13 a 17 e 41",
  subtitulo: "JUVIDF · sem JECRIM · lesão incondicionada · retratação só em audiência",
  descricao:
    "O coração processual da lei. Art. 41 tira a 9.099 de campo (ADC 19). ADI 4.424 + Súm. 542: lesão corporal (mesmo leve/culposa) no contexto da LMP = ação pública incondicionada. Ameaça e crimes de honra continuam, em regra, à representação — e a retratação é o rito solene do art. 16.",
  grupos: [
    {
      id: "mp-art-14-41",
      ref: "Arts. 14, 33 e 41",
      nome: "O juizado próprio e a porta fechada da 9.099",
      contexto:
        "14 cria os Juizados de Violência Doméstica e Familiar contra a Mulher (competência cível e criminal). 33: enquanto não criados, a vara criminal acumula. 41: aos crimes praticados com violência doméstica e familiar contra a mulher, independentemente da pena, não se aplica a Lei 9.099/1995.",
      dispositivo: [
        "Art. 14. Os Juizados de Violência Doméstica e Familiar contra a Mulher, órgãos da Justiça Ordinária com competência ==cível e criminal==, poderão ser criados pela União (DF e territórios) e pelos Estados. Art. 14-A (Lei 13.894/2019): divórcio/dissolução no mesmo juízo, se a ofendida quiser.",
        "Art. 33. Enquanto não estruturados os Juizados, as varas criminais acumularão a competência cível e criminal.",
        "Art. 41. Aos crimes praticados com violência doméstica e familiar contra a mulher, ==independentemente da pena prevista==, ==não se aplica a Lei nº 9.099/1995==.",
      ],
      notaDispositivo:
        "ADC 19/STF: arts. 1º, 33 e 41 constitucionais. Consequências do 41: sem transação, sem composição civil, sem Sursis processual (9.099, 89), sem rito sumaríssimo. Súmula 536/STJ cristaliza: transação e suspensão condicional do processo **não** se aplicam. Contravenção (vias de fato) no contexto LMP também foge da 9.099 — mas **não** autoriza preventiva (STJ: 313, III exige crime). Pena máxima irrelevante: ameaça (máx. 6 meses) **não** vai ao JECRIM.",
      pena: "Norma de competência / rito",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "JUVIDF: competência **cível + criminal**.",
        "**Art. 41 = 9.099 fora**, qualquer que seja a pena.",
        "Súm. **536**: sem transação e sem suspensão condicional do processo.",
        "ADC **19**: 1º, 33 e 41 constitucionais.",
      ],
      pegadinha: [
        "«Ameaça (máx. 6 meses) vai ao JECRIM, porque a pena cabe» — **41** não olha a pena.",
        "«Cabe transação se a mulher concordar» — **536**.",
        "«Vias de fato = preventiva automática» — 313, III pede **crime**, não contravenção (STJ).",
      ],
      exemplo: [
        "Companheiro ameaça a namorada («vou te matar»): vara/JUVIDF, **sem** 9.099, mesmo com pena de 1 a 6 meses.",
      ],
      macete:
        "**41 mata a 9.099. 536 mata transação e sursis processual.** A pena pequena não salva. ADC 19 chancelou o juízo próprio.",
    },
    {
      id: "mp-art-16-542",
      ref: "Art. 16 e Súm. 542",
      nome: "Representação, retratação e a lesão que não pede vontade",
      contexto:
        "16 regula só a retratação da representação — e só em audiência perante o juiz, ouvido o MP. Não vale na delegacia. Não se aplica à lesão corporal (ação incondicionada: ADI 4.424 + Súm. 542).",
      dispositivo: [
        "Art. 16. Nas ações penais públicas ==condicionadas à representação== da ofendida de que trata esta Lei, só será admitida a renúncia à representação perante o juiz, em ==audiência especialmente designada== com tal finalidade, antes do recebimento da denúncia e ouvido o Ministério Público.",
        "ADI 4.424/STF + Súmula 542/STJ: a ação penal da ==lesão corporal== resultante de violência doméstica contra a mulher é ==pública incondicionada== (leve ou culposa inclusive).",
      ],
      notaDispositivo:
        "Mapa de ação: lesão (129, caput e § 9º) = incondicionada. Ameaça (147), crimes contra a honra, em regra = representação (aí sim o 16). Estupro = incondicionada (CPP 225). Retratação na delegacia, por escrito no B.O., **não extingue**. Audiência do 16 é **antes do recebimento da denúncia**. Depois de recebida, não há «desistir».",
      pena: "Norma processual",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Lesão corporal no contexto LMP = **pública incondicionada** (542 / ADI 4.424).",
        "Retratação da representação: **só perante o juiz**, audiência específica, **antes** do recebimento, ouvido o MP.",
        "Delegacia **não** recebe desistência válida.",
      ],
      pegadinha: [
        "«Toda LMP é incondicionada» — **não.** Ameaça/honra ainda pedem representação (com o rito do 16).",
        "«Ela retirou a queixa no balcão da DEAM: o MP não pode denunciar a ameaça» — retratação **inválida** (não foi o 16).",
        "«Lesão leve depende de representação, como o 129 caput» — **542** derrota o 88 da 9.099 e o 100 do CP neste contexto.",
      ],
      exemplo: [
        "Soco no olho (lesão leve): MP denuncia **sem** representação. Ela «perdoa» na delegacia: irrelevante.",
        "Só ameaça verbal: precisa representar; para retirar, audiência do art. 16.",
      ],
      macete:
        "**Soco = 542, incondicionada. Xingo/ameaça = representação, e só o juiz desiste (16).** Balcão da DEAM não arquiva nada.",
    },
    {
      id: "mp-art-17",
      ref: "Art. 17",
      nome: "Sem cesta básica, sem multa isolada",
      contexto:
        "Vedação que nasceu para matar a praxe do JECRIM (entregar alimento e ir embora).",
      dispositivo: [
        "Art. 17. É vedada a aplicação, nos casos de violência doméstica e familiar contra a mulher, de penas de ==cesta básica== ou outras de prestação pecuniária, bem como a substituição de pena que implique o pagamento ==isolado== de multa.",
      ],
      notaDispositivo:
        "Casa com a Súm. 588 (não cabe restritiva de direitos quando há violência ou grave ameaça) e com o 44, I, do CP. Multa **cumulada** com PPL não é o alvo; o alvo é a multa **isolada** como «solução». Prestação pecuniária disfarçada de cesta = nula.",
      pena: "Vedação de substituição",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "Proibido: **cesta básica**, pecuniária substitutiva, **multa isolada**.",
        "Súm. **588**: com violência/grave ameaça, sem restritivas de direitos.",
      ],
      pegadinha: [
        "«O juiz pode aplicar cesta básica se a vítima concordar» — **17 veda**.",
        "«Multa de um salário resolve a ameaça» — multa **isolada** vedada.",
      ],
      exemplo: [
        "Sentença: «substituto a detenção por 12 cestas ao asilo» — nula (17). Caminho: PPL, com as travas da 588 se houve violência.",
      ],
      macete:
        "**17 = sem cesta, sem pecúnia, sem multa sozinha.** 588 fecha o restante das restritivas quando há violência ou grave ameaça.",
    },
  ],
};
