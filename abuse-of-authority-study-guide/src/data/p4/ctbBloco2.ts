import type { Bloco } from "../tipos";

export const ctbBloco2: Bloco = {
  id: "t-bloco-2",
  numero: "Bloco 02",
  titulo: "Homicídio, lesão, omissão e fuga",
  intervalo: "Arts. 302 ao 305",
  subtitulo: "Culpa no volante, a qualificadora da Lei Seca e o dolo eventual",
  descricao:
    "O coração da prova: 302 e 303 (com o salto de pena da Lei 13.546/2017 quando há álcool), 304 (omissão subsidiária) e 305 (fuga). E a pergunta que não cala: embriaguez + morte = culpa consciente ou dolo eventual?",
  grupos: [
    {
      id: "t-art-302",
      ref: "Art. 302",
      nome: "Homicídio culposo na direção",
      contexto:
        "Tipo especial em relação ao CP 121, § 3º. Pena-base mais alta, majorantes próprias e, desde 2017, uma qualificadora de reclusão 5–8 anos para o condutor alcoolizado.",
      dispositivo: [
        "Art. 302. Praticar ==homicídio culposo== na direção de veículo automotor:",
        "Penas - ==detenção, de dois a quatro anos==, e suspensão ou proibição de se obter a permissão ou a habilitação.",
        "§ 1º A pena é aumentada de ==1/3 à metade== se o agente: I - não possuir PPD ou CNH; II - praticá-lo em ==faixa de pedestres ou na calçada==; III - deixar de prestar socorro, quando possível sem risco pessoal; IV - no exercício da profissão, conduzir ==veículo de transporte de passageiros==. V - (revogado — era a embriaguez).",
        "§ 2º (Revogado pela Lei nº 13.281/2016.)",
        "§ 3º Se o agente conduz sob a influência de ==álcool ou substância psicoativa==: Penas - ==reclusão, de cinco a oito anos==, e suspensão ou proibição. (Lei nº 13.546/2017)",
      ],
      notaDispositivo:
        "O inciso V (embriaguez como majorante) foi revogado em 2008; em 2017 a embriaguez voltou como QUALIFICADORA (§ 3º), com reclusão. Art. 312-B (Lei 14.071/2020): ao 302 § 3º e ao 303 § 2º NÃO se aplica o art. 44, I, do CP — a substituição por restritiva fica travada nesse requisito. Perdão judicial (CP 121 § 5º) cabe no caput, não no § 3º (pena de reclusão 5–8 e política criminal da 13.546).",
      pena: "Detenção 2–4 · álcool: reclusão 5–8",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**Caput**: detenção 2–4 + suspensão. Pública **incondicionada**. Fora do JECRIM.",
        "Majorantes **HACNP**: sem **H**abilitação; **A**travessia (faixa/calçada); **C**orreio? não — **N**ão socorre; **P**assageiros (transporte).",
        "**§ 3º**: reclusão 5–8 (álcool/droga). É culposo **qualificado**, não doloso. Consome o 306 (subsidiariedade).",
        "Não se aplica o 44, I, do CP (312-B) — substitutiva travada no requisito objetivo.",
      ],
      pegadinha: [
        "«Pena do 302 é 1 a 3 anos (CP 121 § 3º)» — **ERRADO**, o CTB especializou.",
        "«Embriaguez aumenta de 1/3 a 1/2» — isso era o **inciso V, revogado**. Hoje é **§ 3º, 5 a 8, reclusão**.",
        "«Homicídio no trânsito com álcool é hediondo» — **ERRADO** (não está no rol da 8.072).",
      ],
      exemplo: [
        "Motorista de ônibus atropela na faixa, sóbrio: 302 + § 1º II e IV (concurso de majorantes — juiz escolhe ou cumula com cuidado de bis in idem).",
        "Embriagado mata no cruzamento: **302 § 3º** (5–8), sem 306 em concurso.",
      ],
      macete:
        "**2 a 4 detenção; 5 a 8 reclusão se bebeu.** Majorante = **HACNP** (Habilitação, Atravessia, Não-socorro, Passageiros). V de «vinho» **morreu**. Qualificadora do álcool **come** o 306.",
    },
    {
      id: "t-art-303",
      ref: "Art. 303",
      nome: "Lesão corporal culposa na direção",
      contexto:
        "O crime que mais frequenta o JECRIM — até o álcool + lesão grave virar reclusão 2–5 (§ 2º).",
      dispositivo: [
        "Art. 303. Praticar ==lesão corporal culposa== na direção de veículo automotor:",
        "Penas - ==detenção, de seis meses a dois anos== e suspensão ou proibição.",
        "§ 1º Aumenta-se de ==1/3 à metade== se ocorrer qualquer das hipóteses do § 1º do art. 302.",
        "§ 2º A pena é de ==reclusão de dois a cinco anos== se o agente conduz com capacidade psicomotora alterada por álcool/psicoativo **e** resultar lesão ==grave ou gravíssima==. (Lei nº 13.546/2017)",
      ],
      notaDispositivo:
        "Caput: JECRIM + representação (88 da 9.099), salvo as exceções do 291 § 1º. § 2º exige DUAS coisas: álcool/droga E lesão grave/gravíssima — lesão leve com álcool continua no caput (com o rito endurecido do 291). 312-B também trava o 44, I, do CP no § 2º.",
      pena: "Detenção 6m–2a · álcool + grave: reclusão 2–5",
      bancas: ["CEBRASPE", "FGV", "AOCP", "FCC"],
      cai: [
        "Ação do caput: pública **condicionada à representação**, salvo 291 § 1º.",
        "§ 2º = álcool **e** lesão grave/gravíssima. Faltou um dos dois, não entra.",
        "Majorantes: as mesmas do 302 § 1º (remissão).",
      ],
      pegadinha: [
        "«Toda lesão no trânsito com álcool é reclusão 2–5» — falta a **gravidade** da lesão.",
        "«303 nunca vai ao JECRIM» — o **caput limpo** vai.",
      ],
      exemplo: [
        "Batida, lesão leve, sóbrio: JECRIM, representação, transação possível.",
        "Mesma batida, vítima com fratura exposta, condutor alcoolizado: **303 § 2º**, reclusão 2–5, sem substitutiva pelo 44, I.",
      ],
      macete:
        "**6 meses a 2 anos e representação**, se a lesão for «limpa». Álcool + **grave/gravíssima** = **2 a 5 reclusão** e 312-B fecha a substitutiva. Leve com álcool **não** sobe de tipo — só muda o rito (291).",
    },
    {
      id: "t-art-304-305",
      ref: "Arts. 304 e 305",
      nome: "Omissão de socorro e fuga do local",
      contexto:
        "304 é subsidiário («se o fato não constituir elemento de crime mais grave»). 305 pune o afastar-se para fugir à responsabilidade penal ou civil — mesmo sem vítima ferida.",
      dispositivo: [
        "Art. 304. Deixar o condutor, na ocasião do sinistro, de prestar ==imediato socorro== à vítima, ou, não podendo fazê-lo por justa causa, deixar de solicitar auxílio da autoridade pública:",
        "Penas - detenção, de ==seis meses a um ano==, ou multa, ==se o fato não constituir elemento de crime mais grave==.",
        "Parágrafo único. Incide ainda que a omissão seja ==suprida por terceiros== ou que a vítima tenha ==morte instantânea== ou ferimentos leves.",
        "Art. 305. Afastar-se o condutor do local do sinistro, para ==fugir à responsabilidade penal ou civil== que lhe possa ser atribuída:",
        "Penas - detenção, de ==seis meses a um ano==, ou multa.",
      ],
      notaDispositivo:
        "No 302/303, deixar de socorrer já é majorante (§ 1º, III): o 304 fica absorvido (subsidiariedade expressa). 305 é crime autônomo de perigo/obstáculo à imputação — STJ admite concurso com 302 quando a fuga é para evitar a responsabilidade, não se confundindo com a omissão de socorro. Nemo tenetur: a crítica é antiga, mas o tipo permanece vigente e cai em prova.",
      pena: "Detenção 6m–1a ou multa (ambos)",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "304: **subsidiário**. Se o 302/303 já majorou pelo não-socorro, não some o 304.",
        "Parágrafo único: morte instantânea **não** desculpa; terceiro socorrer **não** desculpa.",
        "305 exige elemento subjetivo: fugir à **responsabilidade** (não basta ir ao hospital com a própria fratura, se comunicou).",
        "JECRIM nos dois (máx. 1 ano).",
      ],
      pegadinha: [
        "Concurso 302 + 304 pelo mesmo abandono — **bis in idem** (304 é subsidiário).",
        "«304 só existe se a vítima sobrevive» — o parágrafo único fala em **morte instantânea**.",
      ],
      exemplo: [
        "Atropela, vê o corpo, acelera: 302 (ou 303) + majorante III; 305 pela fuga à responsabilidade; 304 absorvido.",
        "Bate no muro, ninguém ferido, foge para não pagar o prejuízo: **só 305**.",
      ],
      macete:
        "**304 socorre (ou pede socorro); 305 foge da conta.** 304 é **reserva**: se o 302 já majorou o abandono, ele cala. Morte na hora **não** zera o 304.",
    },
    {
      id: "t-dolo-eventual",
      ref: "STF/STJ",
      nome: "Dolo eventual × culpa consciente no trânsito",
      contexto:
        "A banca ama o «embriagado que mata». Depois da Lei 13.546/2017, o legislador rotulou a hipótese como homicídio CULPOSO qualificado. O debate sobre dolo eventual sobrevive para o racha e para o condutor que assume o risco para além da embriaguez.",
      dispositivo: [
        "Posição de prova (síntese): a ==embriaguez, por si só, não configura dolo eventual==. É preciso demonstrar que o agente ==assumiu o risco== do resultado (indiferença, reiteração, velocidade absurda, racha, avisos ignorados).",
        "Lei 13.546/2017: morte + álcool = ==art. 302, § 3º== (culposo qualificado, reclusão 5–8). O tipo puxa a imputação para a ==culpa== quando o plus for só a embriaguez.",
        "Racha com morte: se não quis nem assumiu o risco → ==308, § 2º== (reclusão 5–10, preterdoloso). Se assumiu o risco → ==homicídio doloso== (CP 121) no Tribunal do Júri.",
        "STF (casos-símbolo, ex. Romasanta) já admitiu dolo eventual; STJ reitera que ==embriaguez isolada ≠ dolo== (necessidade de outros elementos).",
      ],
      notaDispositivo:
        "Não há súmula vinculante. A resposta «sempre dolo eventual» está errada; a resposta «nunca dolo eventual» também. O filtro é o elemento volitivo + o tipo especial que o legislador criou em 2017.",
      pena: "Quadro de imputação",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Culpa consciente: previu, mas **confiou** que não aconteceria.",
        "Dolo eventual: previu e **não se importou** (assumiu o risco).",
        "Álcool + morte, sem outro plus: caminho do **302 § 3º** (culpa qualificada).",
        "Racha + morte + indiferença: Júri (121). Racha + morte sem assumir risco: **308 § 2º**.",
      ],
      pegadinha: [
        "«Todo embriagado que mata responde por dolo eventual no Júri» — **ERRADO** como regra automática.",
        "«O 302 § 3º é hediondo / doloso» — é **culposo**, reclusão, não hediondo.",
      ],
      exemplo: [
        "Após 8 copos, a 70 km/h em via de 60, atropela e mata: 302 § 3º (sem Júri).",
        "Racha a 180 km/h no centro, filme nas redes «se morrer, morreu»: dolo eventual → **121**, Júri.",
      ],
      macete:
        "**Bebeu e matou, só isso = 302 § 3º (culpa cara).** Assumiu o risco de verdade (racha, desafio, indiferença) = **Júri**. Culpa consciente **confia**; dolo eventual **tanto faz**.",
    },
  ],
};
