import type { Bloco } from "../tipos";

export const racBloco3: Bloco = {
  id: "r-bloco-3",
  numero: "Bloco 03",
  titulo: "Discurso de ódio, nazismo & o megafone das redes",
  intervalo: "Arts. 20 a 22",
  subtitulo: "O tipo-mãe do racismo, seus sete parágrafos e as quatro novidades de 2023",
  descricao:
    "O art. 20 é a caixa de ressonância da lei: praticar, induzir ou incitar a discriminação — de boca em boca, no rádio, na TV, nas redes sociais, no estádio ou no terreiro. A Lei 14.532/2023 o recosturou por inteiro (§§ 2º-A e 2º-B) e criou quatro artigos novos (20-A a 20-D). Aqui mora o racismo recreativo, o funcionário público racista, a suástica e a ordem judicial que derruba página da internet antes mesmo do inquérito.",
  secoes: [
    { rotulo: "§ 3.1 · O tipo-mãe e a suástica", ate: "art. 20, caput e § 1º" },
    { rotulo: "§ 3.2 · Comunicação, redes e medidas judiciais", ate: "art. 20, §§ 2º a 4º" },
    { rotulo: "§ 3.3 · Contextos, majorantes e interpretação", ate: "arts. 20-A a 22" },
  ],
  notaProfessor: {
    titulo: "Correção de rota — responsabilidade «de pessoa jurídica»",
    itens: [
      "A Lei 7.716 **NÃO prevê responsabilidade penal da pessoa jurídica** — no Brasil, PJ só responde penalmente por **crime ambiental** (CF, art. 225, § 3º, e Lei 9.605/98).",
      "O que existe aqui: **suspensão do funcionamento do estabelecimento particular** por até 3 meses, como **efeito da condenação da pessoa física** responsável (art. 16) — não é pena da empresa.",
      "Na esfera cível/administrativa, a empresa pode responder por danos coletivos (ação civil pública) — mas isso **não** é matéria penal desta lei.",
    ],
  },
  grupos: [
    {
      id: "r-art-20",
      ref: "Art. 20",
      nome: "O tipo-mãe: praticar, induzir ou incitar",
      contexto:
        "O crime de racismo propriamente dito — a cláusula geral que captura toda discriminação que não cabe nos arts. 3º a 14, inclusive a homotransfobia, por equiparação do STF.",
      dispositivo: [
        "Art. 20 ==Praticar, induzir ou incitar== ==discriminação ou preconceito de raça, cor, etnia, religião ou procedência nacional==. (Redação dada pela Lei nº 9.459, de 15/05/97)",
        "Pena: ~~reclusão de um a três anos e multa~~. (Redação dada pela Lei nº 9.459, de 15/05/97)",
        "Redação anterior (Lei 8.081/90, superada): «Praticar, induzir ou incitar, ^^pelos meios de comunicação social ou por publicação de qualquer natureza^^, a discriminação ou preconceito de raça, por religião, etnia ou procedência nacional.» — o meio era elementar do tipo; hoje é qualificadora (§ 2º).",
      ],
      notaDispositivo:
        "Histórico de prova: a Lei 8.081/1990 INSERIU o art. 20 (a lei original não o tinha); a Lei 9.459/1997 deu a redação atual, retirando a exigência de meio de comunicação e ampliando os motivos. Discriminação E preconceito: duas formas alternativas.",
      pena: "Reclusão 1–3 anos + multa (caput)",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**Três verbos**: **praticar** (executar ato discriminatório — crime material), **induzir** (fazer alguém adotar a ideia discriminatória — influência individualizada) e **incitar** (provocar/publicizar o sentimento de discriminação na coletividade). Induzir/incitar são crimes de **perigo**: dispensam a discriminação efetiva.",
        "Motivos: os **cinco** do art. 1º, **inclusive religião** (diferente do art. 2º-A).",
        "**Cláusula geral**: conduta discriminatória que não se encaixa nos arts. 3º a 14 cai aqui — e por equiparação (STF, ADO 26/MI 4733), também a **homofobia e a transfobia**.",
        "Pena-base: **reclusão 1–3 anos + multa** — com multa (os arts. 3º a 14 não têm).",
        "**STF, ADO 26 — ressalvas**: pregação religiosa pacífica e debates sobre a união homoafetiva NÃO são crime (liberdade religiosa e de expressão); a equiparação vale até o Congresso legislar.",
      ],
      pegadinha: [
        "«Induzir e incitar exigem resultado discriminatório efetivo» — **ERRADO**: são crimes de **perigo**; consumam-se com a influência/instigação.",
        "«O racismo exige divulgação pela mídia» — **ERRADO desde 1997**: qualquer meio serve; o meio de comunicação **qualifica** (§ 2º, 2–5 anos).",
        "Ofensa racial dirigida a **pessoa determinada** → art. **2º-A** (injúria racial), não art. 20 — a banca embaralha os dois.",
        "«Intolerância religiosa não é racismo» — **ERRADO**: religião está no caput; o que ficou no CP é a **injúria** por elemento religioso (140, § 3º).",
      ],
      exemplo: [
        "Presidente de associação de bairro organiza abaixo-assinado para expulsar famílias ciganas: **incitar** discriminação (etnia/procedência) — art. 20, caput.",
        "Empresário que ensina gerentes, em treinamento interno, a não contratar «gente daquela religião»: **induzir** — art. 20.",
        "Demitir funcionário por ser transgênero (sem lei específica): **praticar** discriminação por equiparação (ADO 26) — art. 20.",
      ],
      macete:
        "Art. 20 é a **rede**: **praticar** (faz), **induzir** (planta na cabeça de um), **incitar** (sopra na multidão). Rede simples: **1–3 + multa**; com megafone (§ 2º): **2–5**; no estádio/show (§ 2º-A): **2–5 + 3 anos sem ingresso**; com suástica (§ 1º): **2–5**; contra terreiro/igreja (§ 2º-B): penas do caput **+** a da violência.",
    },
    {
      id: "r-art-20-1",
      ref: "Art. 20, § 1º",
      nome: "Suástica & nazismo: o símbolo proibido",
      contexto:
        "A fabricação e circulação de simbologia nazista — com o elemento subjetivo especial que salva a suástica religiosa milenar.",
      dispositivo: [
        "§ 1º ==Fabricar, comercializar, distribuir ou veicular== ==símbolos, emblemas, ornamentos, distintivos ou propaganda== que utilizem a ==cruz suástica ou gamada==, ^^para fins de divulgação do nazismo==. (Redação dada pela Lei nº 9.459, de 15/05/97)",
        "Pena: ~~reclusão de dois a cinco anos e multa~~. (Incluído pela Lei nº 9.459, de 15/05/97)",
      ],
      notaDispositivo:
        "O § 1º nasceu pela Lei 8.882/1994 (no antigo art. 20 da Lei 8.081/90) e foi reescrito pela Lei 9.459/1997. A expressão «cruz gamada» é o nome tradicional da suástica — a lei menciona as duas.",
      pena: "Reclusão 2–5 anos + multa",
      bancas: ["CEBRASPE", "FGV", "FCC"],
      cai: [
        "**Quatro verbos**: fabricar, comercializar, distribuir ou veicular — todos de **circulação/produção** (a mera posse sem difusão não basta ao tipo).",
        "Objeto: símbolos, emblemas, ornamentos, distintivos ou propaganda com a **cruz suástica ou gamada**.",
        "**Elemento subjetivo especial**: «**para fins de divulgação do nazismo**» — sem essa finalidade, o fato é **atípico**.",
        "Pena **2–5 anos + multa** (acima do caput).",
        "STJ já admitiu a **exibição ostensiva** (ex.: tatuagem de suástica mostrada para intimidar) como «veicular» — jurisprudência pontual que banca grande adora.",
      ],
      pegadinha: [
        "Suástica em templo **budista/hindu** (símbolo milenar de sorte — manji): **NÃO é crime** — falta a finalidade nazista (elemento subjetivo especial).",
        "«Basta fabricar ou possuir o símbolo» — **possessão** não está no rol; exige-se fabricar/comercializar/distribuir/veicular **com o fim de divulgar o nazismo**.",
        "Trocar a pena pela do caput (1–3) — o § 1º é **2–5**.",
      ],
      exemplo: [
        "Loja virtual vende braçadeiras nazistas com suástica anunciando «orgulho do Terceiro Reich»: § 1º (comercializar + finalidade).",
        "Jovem exibe tatuagem de suástica em vídeo, dizendo querer «espalhar a supremacia branca»: § 1º (veicular) + possivelmente § 2º (redes sociais) — concurso a discutir no caso.",
      ],
      macete:
        "Suástica só entra no tipo **com crachá de nazista**: sem a finalidade de divulgar o nazismo, **Buda fica em paz**. Quatro verbos de circulação, **2 a 5 + multa**.",
    },
    {
      id: "r-art-20-2",
      ref: "Art. 20, §§ 2º a 4º",
      nome: "Mídia, redes sociais & o kit de emergência do juiz",
      contexto:
        "O racismo com megafone: comunicação social, redes sociais e internet agravam a pena; e o § 3º arma o juiz com medidas cautelares que podem vir ANTES do inquérito policial.",
      dispositivo: [
        "§ 2º Se qualquer dos crimes previstos neste artigo for cometido por intermédio dos ==meios de comunicação social==, de ==publicação em redes sociais==, da ==rede mundial de computadores== ou de ==publicação de qualquer natureza==: (Redação dada pela Lei nº 14.532, de 2023)",
        "Pena: ~~reclusão de dois a cinco anos e multa~~. (Incluído pela Lei nº 9.459, de 15/05/97)",
        "§ 3º No caso do § 2º deste artigo, o juiz poderá determinar, ouvido o Ministério Público ou a pedido deste, ^^ainda antes do inquérito policial==, ^^sob pena de desobediência==:",
        "I - ==o recolhimento imediato ou a busca e apreensão dos exemplares do material respectivo==;",
        "II - ==a cessação das respectivas transmissões radiofônicas, televisivas, eletrônicas ou da publicação por qualquer meio==; (Redação dada pela Lei nº 12.735, de 2012)",
        "III - ==a interdição das respectivas mensagens ou páginas de informação na rede mundial de computadores==. (Incluído pela Lei nº 12.288, de 2010)",
        "§ 4º Na hipótese do § 2º, constitui efeito da condenação, ^^após o trânsito em julgado da decisão==, a ==destruição do material apreendido==. (Incluído pela Lei nº 9.459, de 15/05/97)",
      ],
      notaDispositivo:
        "Camadas históricas que a banca empilha: § 2º ampliado pela Lei 14.532/2023 (redes sociais e internet expressas); inciso II do § 3º atualizado pela Lei 12.735/2012 (transmissões eletrônicas); inciso III incluído pela Lei 12.288/2010 (Estatuto da Igualdade Racial).",
      pena: "§ 2º: reclusão 2–5 anos + multa",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "**Racismo por mídia/redes/internet/publicação** → § 2º: **reclusão 2–5 anos + multa** — pena autônoma mais grave (não é «aumento» do caput).",
        "**§ 3º — três medidas judiciais** cabíveis **ainda antes do inquérito policial**, ouvido o MP (ou a pedido dele), **sob pena de desobediência**: I – **recolhimento/busca e apreensão** do material; II – **cessação das transmissões** (rádio, TV, eletrônicas, publicação por qualquer meio); III – **interdição de mensagens/páginas** na internet.",
        "**§ 4º**: a **destruição do material apreendido** é **efeito da condenação** — só **após o trânsito em julgado**.",
        "**Competência (ponto de STJ)**: conteúdo racista na internet com **alcance transnacional** (página acessível do exterior) → **Justiça Federal** (CF, art. 109, V); divulgação restrita → Justiça Estadual.",
      ],
      pegadinha: [
        "«As medidas do § 3º dependem de inquérito concluído» — **ERRADO**: podem ser determinadas **antes** do inquérito.",
        "«O descumprimento da ordem não gera crime» — **ERRADO**: a lei diz **sob pena de desobediência** (CP, art. 330).",
        "«A destruição do material pode ocorrer logo após a sentença de 1º grau» — **ERRADO**: exige **trânsito em julgado** (§ 4º).",
        "Tratar o § 2º como causa de aumento («pena do caput aumentada de…») — é **pena autônoma**: 2–5 anos + multa.",
        "«Racismo na internet é sempre da Justiça Federal» — **cuidado**: exige-se potencial **transnacional** (STJ).",
      ],
      exemplo: [
        "Perfil aberto no Instagram publica «negros deveriam voltar à senzala»: § 2º (2–5 + multa); o juiz, antes de qualquer inquérito, determina a **interdição da página** (§ 3º, III) sob pena de desobediência.",
        "Programa de rádio matinal incita a expulsão de haitianos da cidade: § 2º + cessação da transmissão (§ 3º, II); apreendidas as gravações, só serão destruídas após o trânsito em julgado (§ 4º).",
      ],
      macete:
        "Racismo de megafone = **2 a 5 + multa**. O juiz tem **três botões ANTES do inquérito**: **APREENDER, CESSAR, BLOQUEAR** (I, II, III); e o **incinerador** só liga **depois do trânsito em julgado** (§ 4º).",
    },
    {
      id: "r-art-20-ab",
      ref: "Art. 20, §§ 2º-A e 2º-B",
      nome: "Arquibancada, palco & terreiro: os parágrafos de 2023",
      contexto:
        "As duas novidades da Lei 14.532/2023 no corpo do art. 20: o contexto de atividades esportivas/artísticas/culturais destinadas ao público (com proibição de frequência) e a tutela reforçada das manifestações religiosas.",
      dispositivo: [
        "§ 2º-A Se qualquer dos crimes previstos neste artigo for cometido no ==contexto de atividades esportivas, religiosas, artísticas ou culturais destinadas ao público==: (Incluído pela Lei nº 14.532, de 2023)",
        "Pena: ~~reclusão, de 2 (dois) a 5 (cinco) anos, e proibição de frequência, por 3 (três) anos, a locais destinados a práticas esportivas, artísticas ou culturais destinadas ao público==, conforme o caso. (Incluído pela Lei nº 14.532, de 2023)",
        "§ 2º-B ^^Sem prejuízo da pena correspondente à violência==, incorre nas mesmas penas previstas no caput deste artigo quem ==obstar, impedir ou empregar violência== contra ==quaisquer manifestações ou práticas religiosas==. (Incluído pela Lei nº 14.532, de 2023)",
      ],
      notaDispositivo:
        "O § 2º-A é a resposta legislativa ao racismo nos estádios e shows; o § 2º-B protege diretamente religiões alvo histórico de intolerância (especialmente as de matriz africana) — e manda somar a pena da violência empregada.",
      pena: "§ 2º-A: 2–5 anos + proibição de frequência (3 anos) · § 2º-B: penas do caput + violência",
      bancas: ["FGV", "CEBRASPE", "AOCP"],
      cai: [
        "**§ 2º-A** («parágrafo da arquibancada»): crime do art. 20 em contexto de atividades **esportivas, religiosas, artísticas ou culturais DESTINADAS AO PÚBLICO** → **reclusão 2–5 anos** + **proibição de frequência por 3 anos** aos locais respectivos — pena autônoma, cumulativa.",
        "**§ 2º-B** («parágrafo do terreiro»): **obstar, impedir ou empregar violência** contra **quaisquer manifestações ou práticas religiosas** → **mesmas penas do CAPUT** (1–3 + multa), **sem prejuízo da pena da violência** (lesão, ameaça, dano — cúmulo material).",
        "O § 2º-B **não** exige que a prática religiosa seja «destinada ao público» — a expressão está só no § 2º-A.",
        "Contexto esportivo/artístico também dialoga com o **art. 20-A** (recreação): o mesmo fato pode receber as duas leituras — a banca cobra a literalidade de cada dispositivo.",
      ],
      pegadinha: [
        "Dizer que o § 2º-A é causa de aumento de 1/3 — **ERRADO**: é **pena própria** (2–5) **+ proibição de frequência por 3 anos**.",
        "Afirmar que o § 2º-B manda aplicar a pena do **§ 2º** (2–5) — **ERRADO**: remete ao **caput** (1–3 + multa).",
        "«A violência contra a prática religiosa é absorvida» — **ERRADO**: «sem prejuízo da pena correspondente à violência» = **cumula**.",
        "Trocar os 3 anos de proibição de frequência por 5, ou a fração por «metade do tempo da pena».",
      ],
      exemplo: [
        "Torcida organizada entoa cânticos imitando macacos contra o atacante negro durante o estadual: art. 20, § 2º-A — 2–5 anos + 3 anos sem entrar em estádio.",
        "Grupo invade terreiro em plena cerimônia, quebra imagens e agride o sacerdote: § 2º-B (penas do caput) **+** dano **+** lesão corporal (sem prejuízo da violência).",
      ],
      macete:
        "**Arquibancada/palco: 2–5 + 3 anos sem ingresso (§ 2º-A).** **Terreiro/igreja: pena do caput + a da violência por cima (§ 2º-B).** Um pune o espetáculo do ódio; o outro protege a fé atacada.",
    },
    {
      id: "r-art-20-maj",
      ref: "Arts. 20-A e 20-B",
      nome: "Racismo recreativo & racismo de distintivo",
      contexto:
        "As duas majorantes novas de 2023: o «contexto de zoeira» (que vale para TODA a lei) e o funcionário público (que vale só para os arts. 2º-A e 20).",
      dispositivo: [
        "Art. 20-A. Os crimes previstos nesta Lei terão as penas ~~aumentadas de 1/3 (um terço) até a metade==, quando ocorrerem em ==contexto ou com intuito de descontração, diversão ou recreação==. (Incluído pela Lei nº 14.532, de 2023)",
        "Art. 20-B. Os crimes previstos nos ^^arts. 2º-A e 20^^ desta Lei terão as penas ~~aumentadas de 1/3 (um terço) até a metade==, quando praticados por ==funcionário público==, conforme definição prevista no Decreto-Lei nº 2.848, de 7 de dezembro de 1940 (Código Penal), ^^no exercício de suas funções ou a pretexto de exercê-las==. (Incluído pela Lei nº 14.532, de 2023)",
      ],
      notaDispositivo:
        "O 20-B usa o conceito de funcionário público do art. 327 do CP e copia a fórmula «no exercício de suas funções ou a pretexto de exercê-las» do art. 1º da Lei de Abuso de Autoridade — ponte entre as Partes 01 e 02 deste manual.",
      pena: "Aumento de 1/3 até a metade (cada um)",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "**Art. 20-A — «racismo recreativo»**: contexto ou intuito de **descontração, diversão ou recreação** → **+1/3 até a metade**. Alcance: **TODOS os crimes da lei** («os crimes previstos nesta Lei»). A «piada» **não exclui o dolo — agrava**.",
        "**Art. 20-B — funcionário público**: **+1/3 até a metade**, mas alcance **restrito**: somente os crimes dos **arts. 2º-A e 20**. Conceito: **art. 327 do CP**. Condição: **no exercício das funções ou a pretexto de exercê-las**.",
        "Fração **idêntica** nos dois (1/3 até a metade) — o que muda é o **alcance** (toda a lei × arts. 2º-A e 20).",
        "Diálogo com a Parte 01: agente público que pratica injúria racial na função → art. 2º-A + 20-B; se houver também abuso de poder com finalidade P.B.C., discute-se concurso com a Lei 13.869.",
      ],
      pegadinha: [
        "Aplicar o **20-B** a funcionário público que comete o **art. 5º** (recusa em estabelecimento comercial) — **ERRADO**: o 20-B só alcança **2º-A e 20**.",
        "«O animus jocandi (intenção de brincar) exclui o crime» — **ERRADO**: jurisprudência pacífica + agora o 20-A transforma a recreação em **majorante**.",
        "Trocar «1/3 até a metade» por «metade» (fixa) ou «1/6 a 1/3».",
        "«O 20-A exige que o crime ocorra em festa ou show» — **ERRADO**: basta o **contexto OU o intuito** de descontração/diversão/recreação (cabe até no grupo de WhatsApp «de zoeira»).",
      ],
      exemplo: [
        "Stand-up em que o comediante normaliza segregar judeus «como piada de palco»: art. 20 + § 2º-A (atividade artística destinada ao público) + 20-A (intuito de diversão) — a análise do concurso fica para a discursiva; na objetiva, cada dispositivo isolado.",
        "PM em abordagem chama o suspeito de «macaco» e manda «voltar para a senzala»: art. 2º-A + **20-B** (funcionário público a pretexto da função) → reclusão 2–5 aumentada de 1/3 a metade.",
      ],
      macete:
        "Dupla de 2023: **A de Alegria** (recreação — agrava **todos** os crimes da lei) e **B de Brasão** (funcionário público — agrava **só 2º-A e 20**). Ambos: **+1/3 até a metade**. Piada não salva — **piada agrava**.",
    },
    {
      id: "r-art-20-cd",
      ref: "Arts. 20-C e 20-D",
      nome: "A bússola do juiz & a escolta da vítima",
      contexto:
        "Duas normas de 2023 que não criam crimes: a diretriz de interpretação (o que conta como discriminatório) e a garantia processual de acompanhamento da vítima.",
      dispositivo: [
        "Art. 20-C. Na interpretação desta Lei, o juiz deve considerar como discriminatória ==qualquer atitude ou tratamento dado à pessoa ou a grupos minoritários== que cause ==constrangimento, humilhação, vergonha, medo ou exposição indevida==, e que ^^usualmente não se dispensaria a outros grupos^^ em razão da cor, etnia, religião ou procedência. (Incluído pela Lei nº 14.532, de 2023)",
        "Art. 20-D. Em todos os atos processuais, cíveis e criminais, a vítima dos crimes de racismo ^^deverá estar acompanhada de advogado ou defensor público==. (Incluído pela Lei nº 14.532, de 2023)",
      ],
      notaDispositivo:
        "O 20-D se inspira na Lei Maria da Penha (art. 10-A da Lei 11.340/2006) — a vítima de racismo também ganha «escolta jurídica» em todos os atos processuais, cíveis E criminais.",
      pena: "Normas interpretativa e processual · sem pena",
      bancas: ["CEBRASPE", "FGV"],
      cai: [
        "**Art. 20-C**: norma **interpretativa** — o juiz **deve** considerar discriminatório o tratamento que cause **constrangimento, humilhação, vergonha, medo ou exposição indevida** e que **usualmente não se dispensaria a outros grupos** (teste comparativo de tratamento).",
        "Alcança «**pessoa ou grupos minoritários**» — vítima individual ou coletiva.",
        "O 20-C **objetiva** a prova do dolo discriminatório: não é preciso confissão de racismo; basta o tratamento assimétrico humilhante.",
        "**Art. 20-D**: vítima **acompanhada de advogado ou defensor público** em **todos os atos processuais, cíveis e criminais** — garantia, não crime; sem pena cominada.",
      ],
      pegadinha: [
        "«O art. 20-C criou novo tipo penal» — **ERRADO**: é cláusula de interpretação.",
        "«O acompanhamento do art. 20-D é exigência para registrar o boletim de ocorrência» — **ERRADO**: vale para **atos processuais** (não para a notitia criminis na delegacia).",
        "«O 20-C protege apenas grupos, nunca pessoa individual» — **ERRADO**: «pessoa **ou** grupos minoritários».",
      ],
      exemplo: [
        "Loja que revista sistematicamente as bolsas apenas dos clientes negros: o 20-C orienta o juiz a ler o tratamento como discriminatório (humilhação + exposição indevida que não se dispensa aos demais clientes).",
        "Vítima de art. 2º-A comparece à audiência de instrução sem patrono: o juízo providencia defensor público (art. 20-D).",
      ],
      macete:
        "**20-C = bússola do juiz** (os 5 Cs: **C**onstrangimento, **C**humilhação — ops, **humilhação**, **vergonha**, **medo**, **exposição**; e o teste do «não se faria com outros grupos»). **20-D = dama de companhia processual** da vítima: advogado ou defensor em tudo, no cível e no penal.",
    },
    {
      id: "r-art-21-22",
      ref: "Arts. 21 e 22",
      nome: "Vigência imediata & o mapa dos vetos da lei",
      contexto:
        "As disposições finais — e o cemitério dos dispositivos vetados em 1989, que a banca cita com redação bonita para ver se você cai.",
      dispositivo: [
        "Art. 21. Esta Lei entra em vigor na data de sua publicação. (Renumerado pela Lei nº 8.081, de 21.9.1990)",
        "Art. 22. Revogam-se as disposições em contrário. (Renumerado pela Lei nº 8.081, de 21.9.1990)",
        "Cemitério dos vetos — nunca vigoraram: Art. 2º. (Vetado).  ·  Art. 15. (Vetado).  ·  Art. 17. (Vetado).  ·  Art. 19. (Vetado).",
      ],
      notaDispositivo:
        "Sem vacatio legis: a lei de 05/01/1989 entrou em vigor na publicação. O art. 18 fala em «arts. 16 e 17» — o 17 é letra morta (vetado), referência que sobreviveu ao próprio dispositivo. Cronologia das reformas: Lei 8.081/90 (inseriu o art. 20 e renumerou os finais) → Lei 8.882/94 (§ 1º, suástica) → Lei 9.459/97 (reforma-mãe) → Lei 12.288/2010 (Igualdade Racial) → Lei 12.735/2012 (§ 3º, II + delegacias especializadas) → Lei 14.532/2023 (2º-A, §§ 2º-A/2º-B, 20-A a 20-D, e CP 140, § 3º).",
      pena: "—",
      bancas: ["VUNESP", "AOCP", "FCC"],
      cai: [
        "**Vigência imediata** (05/01/1989, sem vacatio) — contraste com a Lei 13.869/2019, que teve **120 dias** de vacatio.",
        "**Vetados e nunca vigentes: arts. 2º, 15, 17 e 19** — aqui NÃO houve derrubada de veto (diferente da Lei do Abuso de Autoridade, onde o Congresso promulgou vários artigos vetados).",
        "**Arts. 21 e 22 renumerados** pela Lei 8.081/90 (eram as disposições finais originais, deslocadas pela inserção do art. 20).",
        "Linha do tempo das seis reformas — questão de «qual lei acrescentou o quê»: 14.532/2023 é a que mais cai.",
      ],
      pegadinha: [
        "Citar «art. 15 — praticar, induzir ou incitar pelos meios de comunicação» como vigente — o conteúdo migrou para o **art. 20** (Lei 8.081/90); o art. 15 da Lei 7.716 está **vetado**.",
        "«A Lei 7.716 teve 90/120 dias de vacatio» — **ERRADO**: vigência na publicação.",
        "«O Congresso derrubou os vetos da Lei 7.716» — **ERRADO**: os vetos de 1989 permanecem; art. 2º, 15, 17 e 19 são túmulos fechados.",
      ],
      exemplo: [
        "Questão transcreve um «art. 17» com pena de reclusão para induzir discriminação no serviço público: alternativa morta — o art. 17 foi vetado e nunca existiu no mundo jurídico.",
      ],
      macete:
        "Os **quatro defuntos: 2, 15, 17, 19** — vetos de 1989 sem ressurreição (na Lei do Abuso houve «veto derrubado»; aqui, não). E a lei nasceu **valendo no dia**: 05/01/1989, sem vacatio.",
    },
  ],
};
