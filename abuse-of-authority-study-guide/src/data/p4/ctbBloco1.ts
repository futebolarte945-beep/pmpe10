import type { Bloco } from "../tipos";

export const ctbBloco1: Bloco = {
  id: "t-bloco-1",
  numero: "Bloco 01",
  titulo: "Disposições gerais",
  intervalo: "Arts. 291 ao 301",
  subtitulo: "CP/CPP subsidiários, JECRIM seletivo e a suspensão de dirigir",
  descricao:
    "A Seção I do Capítulo XIX não cria tipos: ela diz qual lei entra, quando o Juizado sai de campo, quanto dura a perda da CNH e o que agrava qualquer crime do capítulo. A pegadinha nº 1 da parte inteira mora aqui: o art. 291, § 1º, NÃO é causa de aumento de pena.",
  notaProfessor: {
    titulo: "Correção de rota — o que este capítulo NÃO é",
    itens: [
      "Crimes de trânsito = condutas **na direção de veículo AUTOMOTOR** previstas **neste Código**. Bicicleta, charrete e patinete **não** geram tipo do Cap. XIX.",
      "**Infração administrativa** (arts. 161–255) ≠ crime. Beber e dirigir pode ser os dois: art. 165 (multa) e art. 306 (crime), com limiares diferentes (tolerância zero × 6 dg/L ou sinais).",
      "Lei 14.599/2023 trocou «acidente» por **«sinistro»** nos tipos — banca literalista já cobrou.",
      "Arts. **299 e 300: VETADOS**. Art. 291, § 3º: VETADO. Art. 310-A: VETADO.",
    ],
  },
  grupos: [
    {
      id: "t-art-291",
      ref: "Art. 291",
      nome: "Subsidiariedade e o mapa do JECRIM",
      contexto:
        "Norma-âncora: CP e CPP entram se o capítulo calar; a Lei 9.099 entra «no que couber». O § 1º lista quando a lesão culposa PERDE composição, transação e representação.",
      dispositivo: [
        "Art. 291. Aos crimes cometidos na ==direção de veículos automotores==, previstos neste Código, aplicam-se as ==normas gerais do Código Penal e do Código de Processo Penal==, se este Capítulo não dispuser de modo diverso, bem como a ==Lei nº 9.099/1995==, no que couber.",
        "§ 1º Aplica-se aos crimes de trânsito de ==lesão corporal culposa== o disposto nos arts. ==74, 76 e 88== da Lei nº 9.099/1995, ==exceto== se o agente estiver:",
        "I - sob a influência de ==álcool== ou qualquer outra substância psicoativa que determine dependência;",
        "II - participando, em via pública, de ==corrida, disputa ou competição==, de exibição ou demonstração de perícia, não autorizada;",
        "III - transitando em velocidade superior à máxima permitida para a via em ==50 km/h==;",
        "§ 2º Nas hipóteses do § 1º, deverá ser instaurado ==inquérito policial==.",
        "§ 3º (VETADO).",
        "§ 4º O juiz fixará a pena-base segundo o art. 59 do CP, dando especial atenção à ==culpabilidade== e às circunstâncias e consequências do crime.",
      ],
      notaDispositivo:
        "O § 1º (ex-parágrafo único, Lei 11.705/2008) NÃO aumenta pena: só afasta os arts. 74 (composição civil), 76 (transação) e 88 (representação) da Lei 9.099 na LESÃO CULPOSA. Homicídio culposo (302) jamais foi de JECRIM (pena máx. 4 anos). Embriaguez (306, máx. 3 anos) também não é de menor potencial ofensivo. O inciso III (50 km/h) continua no texto compilado do Planalto.",
      pena: "Norma de aplicação · sem pena própria",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**Subsidiariedade**: CP/CPP só onde o CTB calar (especial derroga geral).",
        "**JECRIM (pena máx. ≤ 2 anos)**: 303 caput, 304, 305, 307, 309, 310, 311, 312. **Fora**: 302, 306, 308, 302 § 3º, 303 § 2º, 308 §§.",
        "Na lesão culposa «limpa», cabem composição, transação e **representação** (art. 88). Com álcool, racha ou +50 km/h: ação **pública incondicionada** + **inquérito** (não TCO).",
        "Perdão judicial do CP 121, § 5º, aplica-se ao 302 por subsidiariedade (STJ).",
      ],
      pegadinha: [
        "«O art. 291, § 1º, aumenta a pena se houver embriaguez, racha ou calçada» — **ERRADO**. Aumento mora no **302, § 1º** (e 303, § 1º, que remete a ele). Calçada/faixa de pedestres **nem está** no 291.",
        "«Todo crime de trânsito vai ao JECRIM» — **ERRADO** (filtro da pena máxima de 2 anos).",
        "«Homicídio culposo no trânsito depende de representação» — **ERRADO** (pública incondicionada).",
      ],
      exemplo: [
        "Motorista atinge ciclista, lesão leve, sóbrio: TCO + JECRIM + representação da vítima.",
        "Mesma lesão, condutor com 0,4 mg/L no etilômetro: **inquérito**, sem transação, ação incondicionada.",
      ],
      macete:
        "**291 não aumenta: 291 seleciona o rito.** 74-76-88 só na lesão «limpa». Álcool, racha ou +50 = **inquérito e MP no volante**. Aumento de pena = **302 § 1º** (HACNP: Habilitação, Atravessia/calçada, CNH ausente, Não socorre, Passageiros).",
    },
    {
      id: "t-art-292-296",
      ref: "Arts. 292 a 296",
      nome: "Suspensão e proibição de dirigir",
      contexto:
        "Pena acessória típica do capítulo: 2 meses a 5 anos, isolada ou cumulativa. Reincidente no CTB: o juiz aplica a suspensão obrigatoriamente (296).",
      dispositivo: [
        "Art. 292. A ==suspensão ou a proibição== de se obter a permissão ou a habilitação para dirigir veículo automotor pode ser imposta ==isolada ou cumulativamente== com outras penalidades. (Lei nº 12.971/2014)",
        "Art. 293. Duração de ==dois meses a cinco anos==. § 1º Trânsito em julgado: entregar PPD/CNH em ==48 horas==. § 2º A pena ==não se inicia== enquanto o sentenciado estiver recolhido.",
        "Art. 294. Cautelar, em qualquer fase, para garantia da ==ordem pública==, de ofício, a pedido do MP ou por representação policial. Recurso: ==RESE sem efeito suspensivo==.",
        "Art. 295. Comunicação ao ==CONTRAN== e ao órgão de trânsito do domicílio.",
        "Art. 296. Se o réu for ==reincidente== na prática de crime previsto neste Código, o juiz ==aplicará== a penalidade de suspensão… (Lei nº 11.705/2008)",
      ],
      notaDispositivo:
        "Suspensão = quem já tem CNH. Proibição de obter = quem não tem. Art. 307 pune quem viola a medida. O 296 é obrigatório na reincidência em crime do CTB (não em infração administrativa).",
      pena: "2 meses a 5 anos (acessória)",
      bancas: ["CEBRASPE", "AOCP", "FCC", "VUNESP"],
      cai: [
        "Prazo **2 meses a 5 anos** (não 1 a 12 meses da suspensão administrativa do art. 261).",
        "Entrega da CNH em **48 h** após o trânsito em julgado.",
        "Cautelar do 294 ≠ penalidade do 292. RESE sem efeito suspensivo.",
        "Reincidência (296) = suspensão **obrigatória**, cumulada com o resto.",
      ],
      pegadinha: [
        "Confundir prazo penal (2 m–5 a) com o administrativo (art. 261).",
        "«A suspensão começa na prisão» — **ERRADO** (§ 2º: só depois da soltura).",
        "«Reincidência em multa de radar ativa o 296» — precisa ser **crime** do CTB.",
      ],
      exemplo: [
        "Condenado por 306, primário: juiz **pode** somar suspensão. Segunda condenação por 309: 296 **manda** suspender.",
      ],
      macete:
        "**2 meses a 5 anos, 48 horas para entregar, RESE na cautelar.** 296 = reincidente no Código = **suspensão obrigatória**. Administrativa mora no 261; penal mora aqui.",
    },
    {
      id: "t-art-297-301",
      ref: "Arts. 297 a 301",
      nome: "Multa reparatória, agravantes e o prêmio do socorro",
      contexto:
        "297 = indenização penal depositada à vítima. 298 = agravantes do capítulo (sempre agravam). 301 = quem socorre não vai preso em flagrante nem paga fiança.",
      dispositivo: [
        "Art. 297. Multa reparatória: depósito judicial em favor da vítima, base no art. 49, § 1º, do CP, se houver ==prejuízo material==. Teto = prejuízo demonstrado. Desconta-se na indenização civil.",
        "Art. 298. Sempre agravam as penalidades ter o condutor cometido a infração: I dano potencial a ==duas ou mais pessoas== ou grande risco patrimonial; II veículo ==sem placas / placas falsas==; III ==sem PPD/CNH==; IV categoria diferente; V profissão de ==transporte de passageiros ou carga==; VI equipamentos adulterados; VII sobre ==faixa de pedestres==.",
        "Art. 299. (VETADO) · Art. 300. (VETADO)",
        "Art. 301. Ao condutor, nos sinistros que resultem em vítima, ==não se imporá prisão em flagrante nem se exigirá fiança==, se prestar ==pronto e integral socorro==. (Lei nº 14.599/2023)",
      ],
      notaDispositivo:
        "Agravantes do 298 convivem com as majorantes do 302 § 1º (bis in idem se o juiz usar o mesmo fato duas vezes — STJ). 301 é prêmio processual, não causa de extinção de punibilidade. Parágrafo único do 298 (Lei 14.304/2022) foi VETADO.",
      pena: "Acessórias / processuais",
      bancas: ["CEBRASPE", "FGV", "FCC"],
      cai: [
        "Multa reparatória ≠ multa penal do 49: vai para a **vítima**, não para o Fundo Penitenciário.",
        "Agravante VII (faixa de pedestres) ≠ majorante do 302 § 1º, II (faixa **ou calçada** no homicídio/lesão).",
        "301: socorro **pronto e integral** afasta flagrante e fiança — não afasta o crime.",
      ],
      pegadinha: [
        "«Quem socorre fica isento de pena» — **ERRADO** (só não é preso em flagrante / sem fiança).",
        "Inventar texto para os arts. 299/300.",
      ],
      exemplo: [
        "Motorista atropela, chama o SAMU, espera: 302 segue, mas a PM **não** o conduz preso (301).",
        "Foge: perde o 301 e ainda responde pelo 304/305 e pela majorante do 302 § 1º, III.",
      ],
      macete:
        "**297 paga a vítima. 298 agrava todo o capítulo. 301 é o ‘não leva agora’ de quem socorre.** 299 e 300 = cova. Socorrer ≠ impunidade.",
    },
  ],
};
