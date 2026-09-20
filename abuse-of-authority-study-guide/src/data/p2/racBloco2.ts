import type { Bloco } from "../tipos";

export const racBloco2: Bloco = {
  id: "r-bloco-2",
  numero: "Bloco 02",
  titulo: "Crimes em espécie: a discriminação no balcão, na fila e no altar",
  intervalo: "Arts. 3º ao 14",
  subtitulo: "Doze portas fechadas pelo preconceito — e as penas de cada uma",
  descricao:
    "O coração operacional da lei: doze tipos que descrevem a discriminação em cenários concretos — emprego, loja, escola, hotel, restaurante, clube, salão, elevador, transporte, caserna e casamento. Todos exigem o motivo racial do art. 1º (raça, cor, etnia, religião ou procedência nacional) e todos são punidos com RECLUSÃO. O jogo da prova é triplo: saber o cenário, a pena exata e o detalhe que qualifica.",
  secoes: [
    { rotulo: "§ 2.1 · Trabalho e serviço público", ate: "arts. 3º e 4º" },
    { rotulo: "§ 2.2 · Consumo, ensino e hospedagem", ate: "arts. 5º a 7º" },
    { rotulo: "§ 2.3 · Espaços, transporte e vida social", ate: "arts. 8º a 14" },
  ],
  notaProfessor: {
    titulo: "Correção de rota — antes de decorar, entenda o desenho",
    itens: [
      "**Toda a lei é de RECLUSÃO** — não há uma única detenção (contraste total com a Lei do Abuso de Autoridade, 100% detenção).",
      "**Multas, só em alguns**: arts. 2º-A, 4º, § 2º (peculiar: só multa + serviços), 20 e parágrafos. Os arts. 3º ao 14 (caputs) **não têm multa**.",
      "«Praticar, induzir ou incitar» e «fabricar/comercializar» (suástica) moram no **art. 20** — Bloco 03; aqui, os verbos são **impedir, obstar, negar, recusar**.",
      "Todos os tipos exigem o **motivo racial** (art. 1º): sem discriminação/preconceito de raça, cor, etnia, religião ou procedência nacional, o fato é **atípico** nesta lei (pode haver outro crime).",
    ],
  },
  grupos: [
    {
      id: "r-art-3",
      ref: "Art. 3º",
      nome: "Cargo público & promoção funcional barrados",
      contexto:
        "A discriminação na porta do serviço público: impedir o acesso de candidato habilitado a cargo da Administração (direta, indireta e concessionárias) e obstar a promoção de quem já está dentro.",
      dispositivo: [
        "Art. 3º ==Impedir ou obstar== o acesso de alguém, ^^devidamente habilitado==, a ==qualquer cargo da Administração Direta ou Indireta==, bem como das ==concessionárias de serviços públicos==.",
        "Pena: ~~reclusão de dois a cinco anos~~.",
        "Parágrafo único. Incorre na mesma pena quem, por motivo de discriminação de raça, cor, etnia, religião ou procedência nacional, ==obstar a promoção funcional==. (Incluído pela Lei nº 12.288, de 2010)",
      ],
      notaDispositivo:
        "Repare: NÃO há «e multa» na pena. O parágrafo único (promoção funcional) veio com o Estatuto da Igualdade Racial (Lei 12.288/2010).",
      pena: "Reclusão 2–5 anos · SEM multa",
      bancas: ["FGV", "CEBRASPE", "VUNESP"],
      cai: [
        "Alcance: cargos da **Administração Direta e Indireta** + **concessionárias de serviços públicos** (energia, transporte, saneamento).",
        "Elemento normativo «**devidamente habilitado**»: a vítima precisa preencher os requisitos do cargo — barrar inabilitado é **atípico** nesta lei.",
        "**Obstar a promoção funcional** = parágrafo único (quem já é servidor e é preterido por motivo racial) — mesma pena do caput.",
        "Pena: **reclusão 2 a 5 anos, SEM multa** — as bancas enxertam «e multa» na alternativa.",
        "Emprego **privado** é o art. 4º — a dupla 3º (público) × 4º (privado) é a divisão mais cobrada do bloco.",
      ],
      pegadinha: [
        "«Reclusão de dois a cinco anos e multa» — **ERRADO**: o art. 3º não tem multa.",
        "«Recusar contratação em empresa privada» — é **art. 4º**; o 3º é cargo público/concessionária.",
        "Aplicar o **art. 20-B** (majorante do funcionário público) a quem comete o art. 3º — **ERRADO**: o 20-B alcança somente os crimes dos **arts. 2º-A e 20**.",
        "Suprimir o «devidamente habilitado» e dizer que qualquer negativa de nomeação configura o crime — o elemento está **no texto**.",
      ],
      exemplo: [
        "Coordenador de RH de autarquia estadual risca da lista de nomeação candidato negro aprovado dentro das vagas, comentando que «a equipe já tem cor demais»: art. 3º, caput.",
        "Chefe de concessionária de energia que trava sistematicamente a promoção da engenheira indígena, apesar das avaliações: parágrafo único.",
      ],
      macete:
        "Art. 3º é o crime do **concurso**: barrado na nomeação ou barrado na promoção — sempre **2 a 5**, e a **multa ficou de fora**.",
    },
    {
      id: "r-art-4",
      ref: "Art. 4º",
      nome: "Emprego privado, assédio discriminatório e anúncio racista",
      contexto:
        "O trio do trabalho privado: negar emprego (caput), discriminar no dia a dia laboral (§ 1º, três incisos) e recrutar com exigência de aparência racial (§ 2º — o único caso da lei sem reclusão).",
      dispositivo: [
        "Art. 4º ==Negar ou obstar emprego== em ==empresa privada==.",
        "Pena: ~~reclusão de dois a cinco anos~~.",
        "§ 1º Incorre na mesma pena quem, por motivo de discriminação de raça ou de cor ou práticas resultantes do preconceito de descendência ou origem nacional ou étnica:",
        "I - ==deixar de conceder os equipamentos necessários ao empregado em igualdade de condições com os demais trabalhadores==;",
        "II - ==impedir a ascensão funcional do empregado ou obstar outra forma de benefício profissional==;",
        "III - ==proporcionar ao empregado tratamento diferenciado no ambiente de trabalho, especialmente quanto ao salário==. (Incluído pela Lei nº 12.288, de 2010)",
        "§ 2º Ficará sujeito às penas de ~~multa e de prestação de serviços à comunidade==, incluindo atividades de ==promoção da igualdade racial==, quem, em ==anúncios ou qualquer outra forma de recrutamento== de trabalhadores, exigir ^^aspectos de aparência próprios de raça ou etnia^^ para emprego cujas atividades não justifiquem essas exigências. (Incluído pela Lei nº 12.288, de 2010)",
      ],
      notaDispositivo:
        "O § 2º é o dispositivo mais «barato» da lei inteira: apenas multa + prestação de serviços à comunidade (com atividades de promoção da igualdade racial). Caput e § 1º: reclusão 2–5 anos, sem multa.",
      pena: "Caput/§ 1º: reclusão 2–5 · § 2º: multa + PSC",
      bancas: ["FGV", "FCC", "AOCP"],
      cai: [
        "**Caput**: negar ou obstar **emprego em empresa privada** (o público é art. 3º).",
        "**§ 1º — três formas de discriminação laboral** (mesma pena do caput): I – sonegar **equipamentos** em igualdade de condições; II – impedir **ascensão funcional**/benefício profissional; III – **tratamento diferenciado**, «especialmente quanto ao **salário**».",
        "**§ 2º — anúncio/recrutamento discriminatório** («boa aparência», «preferência por raça X»): pena **exclusiva de multa + prestação de serviços à comunidade** com atividades de **promoção da igualdade racial** — sem reclusão.",
        "Ressalva do § 2º: exige-se que as atividades do emprego **não justifiquem** a exigência de aparência (elemento normativo — ex.: seleção de elenco pode justificar).",
        "Texto do § 1º fala em «descendência ou origem nacional ou étnica» — variação vocabular do motivo racial.",
      ],
      pegadinha: [
        "«O anúncio de emprego discriminatório sujeita o empregador a reclusão de 2 a 5 anos» — **ERRADO**: § 2º prevê **apenas multa + serviços à comunidade**.",
        "Dizer que o caput tem «e multa» — **ERRADO**: multa só no § 2º (e como pena única).",
        "Confundir **impedir ascensão funcional** em empresa privada (§ 1º, II) com **obstar promoção funcional** no setor público (art. 3º, parágrafo único).",
        "«O § 2º se aplica mesmo quando a atividade justifica a exigência de aparência» — **ERRADO**: a justificativa afasta a tipicidade.",
      ],
      exemplo: [
        "Supermercado descarta currículos de moradores de comunidades quilombolas antes da entrevista: § 2º (recrutamento) — multa + PSC com promoção da igualdade racial.",
        "Loja paga à vendedora negra salário inferior ao das colegas na mesma função: § 1º, III.",
        "Fábrica nega contratação a candidato cigano qualificado: caput — reclusão 2–5.",
      ],
      macete:
        "Art. 4º em dois andares: **porta fechada = reclusão 2–5**; **anúncio racista = multa + serviços comunitários**. «Anunciar preconceito é mais barato do que contratá-lo» — a lei inverteu a lógica e você não esquece mais.",
    },
    {
      id: "r-art-5",
      ref: "Art. 5º",
      nome: "Estabelecimento comercial: a recusa no balcão",
      contexto:
        "O tipo do consumo: recusar ou impedir acesso a estabelecimento comercial, negando-se a servir, atender ou receber cliente ou comprador.",
      dispositivo: [
        "Art. 5º ==Recusar ou impedir acesso== a ==estabelecimento comercial==, ^^negando-se a servir, atender ou receber cliente ou comprador^^.",
        "Pena: ~~reclusão de um a três anos~~.",
      ],
      pena: "Reclusão 1–3 anos",
      bancas: ["AOCP", "VUNESP", "CEBRASPE"],
      cai: [
        "Conduta dupla: **recusar/impedir o acesso** OU **negar-se a servir, atender ou receber** cliente/comprador — basta uma delas.",
        "Estabelecimento **comercial**: lojas, supermercados, shoppings, postos, farmácias.",
        "Pena do «patamar baixo»: **reclusão 1–3 anos** (a faixa mais comum da lei).",
        "Consumação com a recusa efetiva motivada por preconceito racial — crime **material** na visão majoritária.",
      ],
      pegadinha: [
        "Trocar a pena pela do ensino/hospedagem (**3–5**) — o comercial é **1–3**.",
        "«Exige-se que o cliente seja impedido fisicamente de entrar» — **ERRADO**: negar atendimento já consuma.",
        "Confundir com art. 8º (restaurantes/bares): a lanchonete **comercial** segue o 5º; o estabelecimento de alimentação **aberto ao público** listado no 8º segue o 8º — mesma pena (1–3), mas a banca cobra o dispositivo certo.",
      ],
      exemplo: [
        "Segurança de loja segue, revista sem motivo e expulsa cliente negra «por precaução»: art. 5º.",
        "Posto de combustível se nega a abastecer para motorista indígena: art. 5º.",
      ],
      macete:
        "Balcão é **1 a 3**; lousa (ensino, art. 6º) e cama (hospedagem, art. 7º) são **3 a 5**. «Balcão barato, lousa e cama caras.»",
    },
    {
      id: "r-art-6",
      ref: "Art. 6º",
      nome: "Ensino: a porta mais cara da lei",
      contexto:
        "Recusar, negar ou impedir inscrição ou ingresso de aluno em estabelecimento de ensino público ou privado, de qualquer grau — com agravamento se a vítima é menor de 18 anos.",
      dispositivo: [
        "Art. 6º ==Recusar, negar ou impedir a inscrição ou ingresso de aluno== em ==estabelecimento de ensino público ou privado de qualquer grau==.",
        "Pena: ~~reclusão de três a cinco anos~~.",
        "Parágrafo único. Se o crime for praticado contra ^^menor de dezoito anos^^ a pena é ~~agravada de 1/3 (um terço)~~.",
      ],
      pena: "Reclusão 3–5 anos · +1/3 se menor de 18",
      bancas: ["CEBRASPE", "FGV", "FCC"],
      cai: [
        "Caput com **três verbos** (recusar, negar, impedir) e duas etapas: **inscrição** OU **ingresso**.",
        "Alcança ensino **público ou privado** de **QUALQUER GRAU** — da creche à universidade.",
        "**Pena mais alta do grupo 3–14**: reclusão **3 a 5 anos** (divide o topo com o art. 7º, hospedagem).",
        "**Parágrafo único**: vítima **menor de 18 anos** → pena **agravada de 1/3** (a lei usa «agravada»; tecnicamente funciona como causa de aumento na terceira fase).",
      ],
      pegadinha: [
        "«Somente estabelecimentos privados» — **ERRADO**: públicos também.",
        "«Agravada da metade se menor» — **ERRADO**: é **1/3** (a metade é do art. 2º-A, parágrafo único — as bancas trocam as frações entre os artigos).",
        "Dizer que «qualquer grau» exclui pós-graduação — não exclui; a expressão é ampla.",
        "Trocar a pena pela do art. 5º (1–3) — ensino é **3–5**.",
      ],
      exemplo: [
        "Escola privada recusa matrícula de criança refugiada venezuelana «para não atrapalhar a turma»: art. 6º + 1/3 (menor + procedência nacional).",
        "Diretor de escola pública barra a inscrição de aluno cigano no EJA: art. 6º.",
      ],
      macete:
        "Porta de escola é a mais cara: **3 a 5**; se o aluno for **menor**, **+1/3**. Frações da lei: **1/3** = ensino (menor) e majorantes 20-A/20-B (até metade); **metade** = injúria em grupo (2º-A).",
    },
    {
      id: "r-art-7",
      ref: "Art. 7º",
      nome: "Hospedagem: hotel, pensão e estalagem",
      contexto:
        "Impedir acesso ou recusar hospedagem em hotel, pensão, estalagem ou qualquer estabelecimento similar — pena do topo da tabela, igual à do ensino.",
      dispositivo: [
        "Art. 7º ==Impedir o acesso ou recusar hospedagem== em ==hotel, pensão, estalagem, ou qualquer estabelecimento similar==.",
        "Pena: ~~reclusão de três a cinco anos~~.",
      ],
      pena: "Reclusão 3–5 anos",
      bancas: ["VUNESP", "AOCP", "FGV"],
      cai: [
        "Rol exemplificativo: hotel, pensão, estalagem **+ qualquer similar** (pousada, hostel, motel, albergue).",
        "Pena **3–5 anos** — divide com o art. 6º o topo do bloco; contraste com o art. 8º (restaurantes, **1–3**).",
        "Aplica-se também à recusa de **reserva** por motivo racial (negar hospedagem).",
        "**Homofobia/transfobia neste cenário**: recusa de hospedagem a casal homoafetivo cai aqui por **equiparação** (STF, ADO 26/MI 4733) — há precedentes reais de aplicação da Lei 7.716.",
      ],
      pegadinha: [
        "O par clássico de confusão: **hospedagem 3–5** × **restaurante 1–3** — a banca troca as duas.",
        "«Exige-se que o hóspede seja efetivamente barrado na recepção» — recusar a hospedagem/reserva já consuma.",
        "Dizer que motel não é «similar» — é (cláusula «qualquer estabelecimento similar»).",
      ],
      exemplo: [
        "Hotel de cidade turística recusa hospedagem a família cigana alegando «casa cheia» enquanto há vagas: art. 7º.",
        "Pousada cancela reserva confirmada ao saber que o casal é homoafetivo: art. 7º via equiparação (ADO 26).",
      ],
      macete:
        "**Cama é cara (3–5); mesa é média (1–3).** Dormir discriminado custa mais caro ao discriminador do que comer discriminado.",
    },
    {
      id: "r-art-8",
      ref: "Art. 8º",
      nome: "Restaurantes, bares e confeitarias",
      contexto:
        "Impedir acesso ou recusar atendimento em estabelecimentos de alimentação e congêneres abertos ao público.",
      dispositivo: [
        "Art. 8º ==Impedir o acesso ou recusar atendimento== em ==restaurantes, bares, confeitarias, ou locais semelhantes abertos ao público==.",
        "Pena: ~~reclusão de um a três anos~~.",
      ],
      pena: "Reclusão 1–3 anos",
      bancas: ["AOCP", "VUNESP"],
      cai: [
        "Núcleos: **impedir acesso** ou **recusar atendimento** — o «esquecer» o pedido propositalmente, o «não tem mesa» seletivo.",
        "Exigência do tipo: locais **abertos ao público** (elemento objetivo).",
        "Pena **1–3 anos** (patamar baixo).",
      ],
      pegadinha: [
        "Recusa em **restaurante de hotel** para hóspede: prevalece o **art. 7º** (especialidade — hospedagem) se a negativa se ligar à hospedagem; a banca explora a distinção.",
        "Trocar com o art. 5º: supermercado/loja é **comercial** (5º); restaurante/bar é **8º** — mesma pena, artigo diferente.",
      ],
      exemplo: [
        "Garçom «esquece» repetidamente o pedido da única mesa negra do salão e comenta com colegas que «eles deveriam comer na cozinha»: art. 8º.",
      ],
      macete:
        "Trio da bandeja — **restaurante, bar, confeitaria: 1 a 3**. Todos «abertos ao público», como nos arts. 9º e 11 (expressão que se repete).",
    },
    {
      id: "r-art-9",
      ref: "Art. 9º",
      nome: "Esporte, diversão e clubes sociais",
      contexto:
        "Impedir acesso ou recusar atendimento em estabelecimentos esportivos, casas de diversões ou clubes sociais abertos ao público — atenção à fronteira com o § 2º-A do art. 20.",
      dispositivo: [
        "Art. 9º ==Impedir o acesso ou recusar atendimento== em ==estabelecimentos esportivos, casas de diversões, ou clubes sociais abertos ao público==.",
        "Pena: ~~reclusão de um a três anos~~.",
      ],
      pena: "Reclusão 1–3 anos",
      bancas: ["FGV", "CEBRASPE"],
      cai: [
        "Cobre **ginásios, estádios (acesso), teatros, cinemas, casas de show, clubes sociais** abertos ao público.",
        "Pena **1–3 anos**.",
        "Fronteira importante: **barrar a entrada** = art. 9º; **praticar/induzir/incitar racismo NO CONTEXTO** de atividade esportiva/artística/cultural destinada ao público = **art. 20, § 2º-A** (reclusão 2–5 + proibição de frequência por 3 anos).",
      ],
      pegadinha: [
        "Grito racista da arquibancada **não** é art. 9º — é art. 20 (caput, § 2º-A ou § 2º, conforme o caso) ou art. 2º-A (se injúria a pessoa determinada).",
        "«Clube social fechado (sócios apenas) não entra» — o tipo exige «abertos ao público»; clube estritamente privado gera discussão, mas a recusa a associado por motivo racial pode cair no art. 20 (discriminação).",
      ],
      exemplo: [
        "Catraca de clube social barrada para família negra com convite válido: art. 9º.",
        "Torcida que imita macacos para o atacante negro no estádio: art. 20, § 2º-A (2–5 anos + proibição de frequentar estádios por 3 anos).",
      ],
      macete:
        "**Entrada barrada na roleta = 9º (1–3).** **Ofensa vinda da arquibancada = § 2º-A (2–5 + 3 anos sem ingresso).** Um é a porta; o outro é o megafone.",
    },
    {
      id: "r-art-10",
      ref: "Art. 10",
      nome: "Salões, barbearias, termas e casas de massagem",
      contexto:
        "O tipo dos cuidados pessoais: impedir acesso ou recusar atendimento nos estabelecimentos de beleza e bem-estar — ou com as mesmas finalidades.",
      dispositivo: [
        "Art. 10. ==Impedir o acesso ou recusar atendimento== em ==salões de cabeleireiros, barbearias, termas ou casas de massagem== ou estabelecimento com as mesmas finalidades.",
        "Pena: ~~reclusão de um a três anos~~.",
      ],
      pena: "Reclusão 1–3 anos",
      bancas: ["AOCP", "VUNESP"],
      cai: [
        "Rol + cláusula de equivalência («estabelecimento com as mesmas finalidades») — alcança spas, institutos de estética e barbearias modernas.",
        "Pena **1–3 anos** (patamar baixo).",
        "Caso real clássico: salão que se recusa a atender **cabelo crespo/tranças** «por não trabalhar com esse tipo» — se o motivo for discriminatório, art. 10.",
      ],
      pegadinha: [
        "Recusa por **falta de agenda/lotação** genuína é atípica — o tipo exige o motivo racial (art. 1º).",
        "Trocar a pena (1–3) pela de hospedagem (3–5).",
      ],
      exemplo: [
        "Barbearia afixa plaquinha «não atendemos gente da favela» e recusa cliente negro do bairro vizinho: art. 10 (e, pela placa pública, também art. 20 — induzir/incitar discriminação; concurso a ser analisado no caso concreto).",
      ],
      macete:
        "**Tesoura, navalha e vapor: 1 a 3.** O rol é de 1989 (termas!), mas a cláusula «mesmas finalidades» o mantém vivo — banca cobra justamente a cláusula de atualização.",
    },
    {
      id: "r-art-11",
      ref: "Art. 11",
      nome: "Entrada social, elevador e escada: o apartheid de condomínio",
      contexto:
        "Impedir o acesso às entradas sociais de edifícios públicos ou residenciais — e aos elevadores e escadas que dão acesso a elas. O tipo do «elevador de serviço».",
      dispositivo: [
        "Art. 11. ==Impedir o acesso às entradas sociais== em ==edifícios públicos ou residenciais== e ==elevadores ou escada de acesso aos mesmos==:",
        "Pena: ~~reclusão de um a três anos~~.",
      ],
      notaDispositivo:
        "Os dois pontos no fim do caput são resquício da redação original (que previa desdobramentos). O artigo alcança o caso mais simbólico do racismo estrutural brasileiro: a imposição do «elevador de serviço» a empregadas domésticas negras.",
      pena: "Reclusão 1–3 anos",
      bancas: ["CEBRASPE", "FGV", "FCC"],
      cai: [
        "Alcança edifícios **públicos E residenciais** (condomínios) — a palavra «residenciais» é o ponto que a banca suprime.",
        "Objeto: **entradas sociais** + **elevadores ou escadas de acesso** a elas.",
        "Pena **1–3 anos**.",
        "Sujeito ativo típico: síndico, zelador, porteiro, conselho condominial (por norma interna ou ordem direta).",
      ],
      pegadinha: [
        "«Somente edifícios públicos» — **ERRADO**: residenciais também.",
        "Norma de condomínio que obriga babás e empregadas negras a usar apenas o elevador de serviço → **art. 11** consumado pela imposição (quem executa a norma discriminatória responde; o síndico que a edita, também, como autor/indutor).",
      ],
      exemplo: [
        "Porteiro recebe ordem do síndico: «visitas daquela ONG de capoeira só pela garagem»: art. 11 (impedir acesso à entrada social).",
        "Condomínio de luxo proíbe a babá negra de acompanhar a criança no elevador social: art. 11.",
      ],
      macete:
        "O artigo do **elevador de serviço**: barrar a entrada social (ou o elevador/escada que leva a ela) = **1 a 3**. Prédio **residencial** entra — não é só repartição.",
    },
    {
      id: "r-art-12",
      ref: "Art. 12",
      nome: "Transportes públicos e concedidos",
      contexto:
        "Impedir o acesso ou o uso de transportes públicos — o rol de meios e a cláusula «qualquer outro meio de transporte concedido».",
      dispositivo: [
        "Art. 12. ==Impedir o acesso ou uso== de ==transportes públicos==, como ==aviões, navios barcas, barcos, ônibus, trens, metrô== ou qualquer outro meio de transporte ^^concedido^^.",
        "Pena: ~~reclusão de um a três anos~~.",
      ],
      pena: "Reclusão 1–3 anos",
      bancas: ["VUNESP", "AOCP"],
      cai: [
        "Duas condutas: **impedir o acesso** (não deixar embarcar) ou **impedir o uso** (expulsar/dificultar durante a viagem).",
        "Rol exemplificativo (aviões, navios, barcas, barcos, ônibus, trens, metrô) + **qualquer meio concedido** — o critério é a natureza **pública/concedida** do serviço.",
        "Pena **1–3 anos**.",
      ],
      pegadinha: [
        "Aplicar o art. 12 a transporte **particular** (carro de vizinho, van fretada privada sem concessão) — o tipo exige serviço **público ou concedido**.",
        "Recusa de corrida por app de transporte: discussão doutrinária (não é serviço concedido stricto sensu) — a banca evita; se aparecer, o caminho mais seguro é **art. 20** (praticar discriminação) ou atipicidade nesta lei, jamais art. 12 automático.",
      ],
      exemplo: [
        "Motorista de ônibus recusa o embarque de passageiro indígena com a passagem válida: art. 12.",
        "Seguranças do metrô retiram família negra do vagão «por precaução», sem qualquer infração: art. 12.",
      ],
      macete:
        "**Avião, navio, ônibus, metrô — tudo que é CONCEDIDO: 1 a 3.** Se não tem concessão/poder público no meio, o 12 não embarca.",
    },
    {
      id: "r-art-13",
      ref: "Art. 13",
      nome: "Forças Armadas: a caserna fechada",
      contexto:
        "Impedir ou obstar o acesso de alguém ao serviço em qualquer ramo das Forças Armadas — pena singular de 2 a 4 anos, e uma armadilha de conceito para quem é das polícias militares.",
      dispositivo: [
        "Art. 13. ==Impedir ou obstar== o acesso de alguém ao serviço em ==qualquer ramo das Forças Armadas==.",
        "Pena: ~~reclusão de dois a quatro anos~~.",
      ],
      pena: "Reclusão 2–4 anos (faixa exclusiva)",
      bancas: ["AOCP", "CEBRASPE", "FGV"],
      cai: [
        "**Pena exclusiva de 2 a 4 anos** — nenhuma outra faixa igual na lei (ótimo distrator).",
        "«Qualquer ramo das Forças Armadas»: **Marinha, Exército e Aeronáutica** (CF, art. 142).",
        "Ponto refinado: **PMs e Bombeiros são forças auxiliares e reserva do Exército** (CF, arts. 42 e 144, § 6º) — **não** são «Forças Armadas» em sentido estrito; barrar candidato em concurso da PM por motivo racial, para a doutrina majoritária, cai no **art. 3º** (cargo da Administração direta estadual) ou no **art. 20** — tema para discursiva de banca grande.",
        "Modalidades: impedir (vetar a inscrição/ingresso) ou obstar (criar obstáculos ao acesso).",
      ],
      pegadinha: [
        "Trocar a pena 2–4 por 2–5 (art. 3º) — a caserna tem faixa própria.",
        "«Qualquer serviço militar, inclusive PM» — **cuidado**: Forças Armadas = Marinha, Exército, Aeronáutica; a banca que cobra esse detalhe quer a leitura constitucional estrita.",
      ],
      exemplo: [
        "Junta de seleção risca candidato negro apto no alistamento obrigatório com a anotação «não serve para representar a farda»: art. 13.",
        "Oficial recrutador da Aeronáutica barra o ingresso de candidata cigana aprovada em todas as fases: art. 13.",
      ],
      macete:
        "Caserna tem pena **solitária: 2 a 4** — nem 2–5, nem 1–3. E lembre: **Forças Armadas são três (M-A-E: Marinha, Aeronáutica, Exército)**; PM é auxiliar (CF, art. 142).",
    },
    {
      id: "r-art-14",
      ref: "Art. 14",
      nome: "Casamento e convivência familiar e social",
      contexto:
        "O tipo mais aberto do bloco: impedir ou obstar, por qualquer meio ou forma, o casamento ou a convivência familiar e social — o apartheid privado.",
      dispositivo: [
        "Art. 14. ==Impedir ou obstar==, ^^por qualquer meio ou forma==, o ==casamento ou convivência familiar e social==.",
        "Pena: ~~reclusão de dois a quatro anos~~.",
      ],
      pena: "Reclusão 2–4 anos",
      bancas: ["CEBRASPE", "FCC", "FGV"],
      cai: [
        "Protege o **casamento misto** (inter-racial, inter-religioso, interétnico) e a **convivência familiar e social** — alcance amplo: namoro, amizade, participação em eventos de família, vida comunitária.",
        "«**Por qualquer meio ou forma**»: crime de forma livre (ameaça, chantagem, confinamento, fraude, pressão psicológica).",
        "Pena **2–4 anos** (mesma faixa do art. 13).",
        "Motivo racial exigido (art. 1º) — inclusive **religião** (impedir casamento com pessoa de outra fé).",
      ],
      pegadinha: [
        "Dizer que o tipo exige impedir o casamento **civil/religioso formalmente** — a «convivência familiar e social» amplia muito o alcance.",
        "Meios que constituem outros crimes (cárcere privado, ameaça) → **concurso material** com o art. 14, não absorção automática.",
        "Trocar a pena por 1–3.",
      ],
      exemplo: [
        "Pai que tranca a filha em casa e corta mesada para impedi-la de casar com o namorado negro: art. 14 + cárcere privado (CP, art. 148) em concurso.",
        "Líder comunitário que proíbe família de origem nordestina de frequentar festas e igrejas do bairro «para não misturar»: art. 14 (convivência social).",
      ],
      macete:
        "O amor também tem artigo: impedir casamento ou convivência = **2 a 4**, a mesma faixa da caserna. E o meio é **livre** — «por qualquer meio ou forma» fecha a porta de saída do agressor.",
    },
  ],
};
