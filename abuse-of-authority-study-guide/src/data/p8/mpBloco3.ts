import type { Bloco } from "../tipos";

export const mpBloco3: Bloco = {
  id: "mp-bloco-3",
  numero: "Bloco 03",
  titulo: "Medidas protetivas de urgência",
  intervalo: "Arts. 18 ao 24-A",
  subtitulo: "As que amarram o agressor · as que amparam a ofendida · o 24-A de 2 a 5",
  descricao:
    "Dois cestos: art. 22 (obrigam o agressor) e arts. 23–24 (protegem a ofendida no civil). Descumprir a decisão judicial é crime autônomo (24-A) e também fundamento de preventiva (CPP 313, III). A pena do 24-A não é mais «1 a 2».",
  notaProfessor: {
    titulo: "Pena do 24-A — o roteiro atrasou",
    itens: [
      "Redação original (Lei 13.641/2018): **detenção de 3 meses a 2 anos**.",
      "Lei **14.994/2024** (pacote do feminicídio): **reclusão de 2 a 5 anos, e multa.** Saiu do JECRIM com folga. Alternativa «reclusão 1 a 2» **nunca** foi o texto.",
      "§ 1º: independe de o juiz que deferiu ser cível ou criminal. § 2º: fiança no flagrante **só o juiz**. § 3º: não exclui outras sanções (preventiva 313, III, desobediência etc.).",
    ],
  },
  grupos: [
    {
      id: "mp-art-18-22",
      ref: "Arts. 18 a 22",
      nome: "O juiz em 48 h e o cesto que amarra o agressor",
      contexto:
        "18: recebido o expediente, o juiz em 48 h decide as MPUs e comunica o MP. 19: pode aplicar de ofício, em conjunto, substituir, ouvir a ofendida. 22 é o cardápio clássico.",
      dispositivo: [
        "Art. 18. Recebido o expediente com o pedido da ofendida, caberá ao juiz, no prazo de ==48 horas==: I conhecer do expediente e do pedido e decidir sobre as MPU; II determinar o encaminhamento da ofendida ao órgão de assistência; III comunicar ao MP para que adote as providências cabíveis.",
        "Art. 19. As MPU poderão ser concedidas de ==imediato==, independentemente de audiência das partes e de manifestação do MP, ==sem prejuízo de sua oitiva posterior==. Podem ser aplicadas ==isolada ou cumulativamente==, e substituídas a qualquer tempo.",
        "Art. 22. Poderá o juiz, entre outras, determinar ao agressor: I suspensão da posse ou restrição do ==porte de armas== (com ciência à instituição); II ==afastamento do lar==; III proibição de a) aproximação (limite mínimo de distância), b) contato por qualquer meio, c) frequentação de lugares; IV restrição/suspensão de ==visitas== aos dependentes; V ==alimentos== provisionais ou provisórios; VI comparecimento a programas de recuperação/reeducação; VII monitoramento eletrônico (art. 22, § 5º / Lei 15.383/2026 como medida autônoma).",
      ],
      notaDispositivo:
        "MPU **não exige** ouvir o agressor antes (19) — contraditório diferido. Não se condiciona a inquérito nem a processo. Porte de arma (I) manda comunicar o órgão. Descumprir qualquer uma = 24-A + 313, III.",
      pena: "Cautelares · descumprir = 24-A",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Juiz decide MPU em **48 h** (18).",
        "Pode conceder **de ofício / sem ouvir o agressor** (19).",
        "Rol do 22: arma, lar, distância/contato/lugares, visitas, alimentos (+ programas e tornozeleira).",
      ],
      pegadinha: [
        "«Sem inquérito não há MPU» — o 19 dispensa até a oitiva.",
        "«Alimentos provisórios só no juízo de família» — o 22, V, autoriza no JUVIDF.",
      ],
      exemplo: [
        "Plantão: juiz afasta o companheiro, fixa 300 m, corta WhatsApp e suspende o porte da PM (22, I a III) — tudo na mesma decisão, sem ouvi-lo.",
      ],
      macete:
        "**48 h na toga. 22 amarra o homem (arma, casa, distância, boca, visita, pensão).** Não espera o contraditório. Furou a cerca = 24-A + preventiva.",
    },
    {
      id: "mp-art-23-24",
      ref: "Arts. 23 e 24",
      nome: "O cesto que ampara a ofendida",
      contexto:
        "23 = medidas de proteção da integridade (encaminhar a programa, reconduzir ao lar, afastar a ofendida, separar corpos). 24 = patrimônio (restituição de bens, suspensão de procurações, caução).",
      dispositivo: [
        "Art. 23. Poderá o juiz, quando necessário, sem prejuízo de outras medidas: I encaminhar a ofendida e seus dependentes a programa de proteção ou atendimento; II determinar a ==recondução== da ofendida e de seus dependentes ao respectivo domicílio, após afastamento do agressor; III determinar o ==afastamento da ofendida== do lar, sem prejuízo dos direitos relativos a bens, guarda e alimentos; IV determinar a ==separação de corpos==.",
        "Art. 24. Para a proteção patrimonial dos bens da sociedade conjugal ou daqueles de propriedade particular da ofendida: I restituição de bens indevidamente subtraídos; II proibição temporária de celebrar atos e contratos de compra, venda e locação de propriedade em comum, salvo autorização judicial; III suspensão das procurações conferidas pela ofendida ao agressor; IV prestação de caução provisória por perdas e danos.",
      ],
      notaDispositivo:
        "Separação de corpos (23, IV) é medida **cível** dentro do JUVIDF — não precisa de ação própria no família. 23, III: a mulher sai de casa **sem perder** casa, guarda e alimentos. 24, III (suspender procuração) cai pouco, mas é pegadinha de «não está no 22».",
      pena: "Cautelares cíveis",
      bancas: ["CEBRASPE", "FCC", "AOCP"],
      cai: [
        "23: programa, recondução, afastamento da ofendida **sem prejuízo de direitos**, separação de corpos.",
        "24: restituição, trava contratual, **suspender procuração**, caução.",
      ],
      pegadinha: [
        "«Se ela sai de casa, perde a guarda» — 23, III veda o prejuízo.",
        "«Separação de corpos só no cível de família» — 23, IV está na LMP.",
      ],
      exemplo: [
        "Juiz manda a ofendida para casa-abrigo (23, I) e, no mesmo despacho, suspende a procuração que ela tinha dado ao marido no banco (24, III).",
      ],
      macete:
        "**22 amarra ele. 23–24 amparam ela** (abrigo, corpos, bens, procuração). Sair de casa **não** é perder casa, filho e pensão.",
    },
    {
      id: "mp-art-24a",
      ref: "Art. 24-A",
      nome: "Descumprir MPU é crime — e a pena subiu",
      contexto:
        "Tipo autônomo desde 2018. Não se confunde com desobediência (330) nem com a preventiva. A pena de 2024 tirou qualquer conversa de JECRIM.",
      dispositivo: [
        "Art. 24-A. Descumprir decisão judicial que defere medidas protetivas de urgência previstas nesta Lei:",
        "Pena – ~~reclusão, de 2 a 5 anos, e multa~~. (Lei nº 14.994/2024; originária: detenção 3 meses a 2 anos)",
        "§ 1º A configuração independe da competência ==civil ou criminal== do juiz que deferiu.",
        "§ 2º No flagrante, apenas a ==autoridade judicial== poderá conceder fiança.",
        "§ 3º Não exclui a aplicação de outras sanções cabíveis.",
      ],
      notaDispositivo:
        "Crime formal: o descumprimento basta (mandar mensagem já é 24-A se o contato foi proibido). Subsidiariedade implícita se o fato for crime mais grave (homicídio, etc.). Preventiva (313, III) **cumula**. Delegado **não** afiança no flagrante do 24-A (§ 2º).",
      pena: "Reclusão 2–5 + multa",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Tipo autônomo: descumprir **decisão judicial** de MPU.",
        "Pena **atual: reclusão 2–5 + multa** (14.994/2024).",
        "Fiança no flagrante: **só o juiz**.",
        "Cumulável com **preventiva 313, III**.",
      ],
      pegadinha: [
        "«Pena é reclusão 1 a 2 / detenção 3 meses a 2 anos» — **desatualizado**. 2024 = **2 a 5, reclusão**.",
        "«O delegado afiança no 24-A» — § 2º: **só o juiz**.",
        "«Se o juiz era da família, não há 24-A» — § 1º.",
      ],
      exemplo: [
        "MPU proíbe WhatsApp; ele manda «bom dia»: **24-A** (2–5) + pedido de preventiva (313, III). No flagrante, a DEAM **não** solta sob fiança.",
      ],
      macete:
        "**Furou a MPU = 24-A (2 a 5, reclusão) + 313, III.** Fiança só com juiz. Civil ou criminal, a decisão conta. «1 a 2» é gabarito velho.",
    },
  ],
};
