import type { Bloco } from "../tipos";

export const drBloco2: Bloco = {
  id: "dr-bloco-2",
  numero: "Bloco 02",
  titulo: "Uso, tráfico e o entorno (28 e 33 a 40)",
  intervalo: "Arts. 28 e 33 ao 40",
  subtitulo: "18 verbos · § 4º não é hediondo · 35 pede 2 · 36 é mais grave que o 33",
  descricao:
    "O miolo da prova. 28 vs 33 (critérios do 28, § 2º + RE 635659 na maconha). 18 núcleos. Privilegiado. Maquinário, associação (2 pessoas), financiador (8–20), fogueteiro, e o 40 que aumenta 1/6 a 2/3 — disfarçado não mora aqui, mora no 33, § 1º, IV.",
  notaProfessor: {
    titulo: "Correções de rota neste bloco",
    itens: [
      "**Agente policial disfarçado não é inciso do art. 40.** É o art. **33, § 1º, IV** (Lei 13.964/2019): vender/entregar a disfarçado, com conduta **preexistente**. Irmão do 17/18 do Estatuto.",
      "**Art. 33, § 2º = induzir/instigar/auxiliar o uso** (detenção 1–3), não «tráfico culposo». Culposo de médico é o **art. 38**.",
      "**Art. 40, VII** (financiar como aumento) ≠ **art. 36** (financiar como tipo). Quem **só** banca = 36 (8–20). Quem trafica **e** banca = 33 + 40, VII (não 36 em concurso típico).",
      "**Prescrição de 2 anos é o art. 30** (penas do 28), não o 40.",
    ],
  },
  grupos: [
    {
      id: "dr-art-28",
      ref: "Art. 28",
      nome: "Consumo pessoal — e a maconha do RE 635659",
      contexto:
        "Cinco verbos (adquirir, guardar, ter em depósito, transportar, trazer consigo) **para consumo pessoal**. Sem PPL. § 2º: os critérios para dizer se era uso ou tráfico. STF, RE 635659 (Tema 506, 2024): porte de cannabis para consumo pessoal **não é infração penal** (fica ilícito administrativo, com advertência e medida educativa).",
      dispositivo: [
        "Art. 28. Quem adquirir, guardar, tiver em depósito, transportar ou trouxer consigo, ==para consumo pessoal==, drogas sem autorização…: I advertência sobre os efeitos; II prestação de serviços à comunidade; III medida educativa (programa/curso).",
        "§ 1º Às mesmas medidas quem, para consumo pessoal, semeia, cultiva ou colhe plantas para pequena quantidade.",
        "§ 2º Para determinar se a droga destinava-se a consumo pessoal, o juiz atenderá à ==natureza e à quantidade== da substância, ao ==local== e às condições da ação, às ==circunstâncias sociais e pessoais==, bem como à ==conduta e aos antecedentes== do agente.",
        "§ 3º Prazos das penas II e III: até 5 meses (10 se reincidente). § 6º Recusa injustificada: admoestação verbal e, depois, multa. Art. 30: prescrição da imposição e da execução em ==2 anos==.",
        "STF, RE 635659: não comete o 28 quem porta ==cannabis== para consumo pessoal; ilícito extrapenal + arts. 28, I e III. Presunção relativa: até ==40 g== ou ==6 plantas fêmeas== = usuário (o juiz/delegado pode afastar com fundamentação).",
      ],
      notaDispositivo:
        "O 28 **não tem prisão**. Recusar a medida não vira cadeia: vira admoestação e multa. Quantidade **sozinha** não define tráfico (§ 2º é um conjunto). RE 635659 é **só maconha**; cocaína, crack, lança etc. continuam no 28 penal. 40 g é presunção **relativa**, não teto mágico de atipicidade do 33.",
      pena: "Advertência · PSC · medida educativa · sem PPL",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Cinco verbos + **para consumo pessoal**.",
        "§ 2º: natureza, quantidade, local, condições, circunstâncias sociais/pessoais, conduta, antecedentes.",
        "**Sem prisão.** Prescrição **2 anos** (art. 30).",
        "RE 635659: cannabis consumo pessoal **não é crime**; 40 g / 6 plantas = presunção relativa de uso.",
      ],
      pegadinha: [
        "«Muita quantidade = tráfico automático» — o § 2º é **conjunto**; a quantidade é um item.",
        "«O 28 dá detenção de 6 meses a 2 anos» — **não há PPL**.",
        "«RE 635659 descriminalizou todas as drogas» — **só cannabis** para consumo pessoal.",
        "«40 g de maconha nunca é 33» — presunção **relativa** (pode ser tráfico se a prova mostrar destinação comercial).",
      ],
      exemplo: [
        "Dois baseados no bolso, sem balança, sem rádio: **28** (e, se for maconha, RE 635659 tira o crime).",
        "Dois quilos na mala, com caderno de fiado: **33**, ainda que o réu diga «é pra mim».",
      ],
      macete:
        "**28 não prende.** § 2º é o checklist (NQLC-CA: Natureza, Quantidade, Local, Circunstâncias, Conduta, Antecedentes). Maconha: RE 635659 + 40 g/6 pés, presunção relativa. Outras drogas: 28 continua penal.",
    },
    {
      id: "dr-art-33",
      ref: "Art. 33",
      nome: "Os 18 verbos, o privilegiado e o disfarçado",
      contexto:
        "Tipo de ação múltipla / conteúdo variado: um verbo basta; vários no mesmo contexto = crime único. Pena 5–15 + 500–1.500 d/m. Equiparados no § 1º (insumo, cultivo, ceder o local, disfarçado). § 3º = «uso compartilhado». § 4º = privilegiado (1/6 a 2/3) — **não hediondo** (STF, HC 118.533).",
      dispositivo: [
        "Art. 33. ==Importar, exportar, remeter, preparar, produzir, fabricar, adquirir, vender, expor à venda, oferecer, ter em depósito, transportar, trazer consigo, guardar, prescrever, ministrar, entregar a consumo ou fornecer== drogas, ainda que ==gratuitamente==, sem autorização ou em desacordo:",
        "Pena – ~~reclusão de 5 a 15 anos e 500 a 1.500 dias-multa~~.",
        "§ 1º Nas mesmas penas: I matéria-prima/insumo/produto químico (quase os mesmos verbos); II semear, cultivar ou colher plantas-matéria-prima; III utilizar ou consentir que usem local/bem de que tem propriedade, posse, administração, guarda ou vigilância, para o tráfico; IV vender ou entregar a ==agente policial disfarçado==, com elementos razoáveis de conduta ==preexistente== (Lei 13.964/2019).",
        "§ 2º Induzir, instigar ou auxiliar alguém ao uso indevido: ~~detenção, 1 a 3 anos~~, e 100 a 300 d/m. (ADI 4.274: interpretação conforme — não criminaliza o debate público sobre legalização.)",
        "§ 3º Oferecer droga, ==eventualmente e sem objetivo de lucro==, a pessoa de seu relacionamento, para ==juntos== consumirem: ~~detenção, 6 meses a 1 ano~~ + 700 a 1.500 d/m, sem prejuízo do 28.",
        "§ 4º Caput e § 1º: redução de ==1/6 a 2/3== se o agente for ==primário==, de ==bons antecedentes==, ==não se dedicar== a atividades criminosas ==nem integrar== organização criminosa.",
      ],
      notaDispositivo:
        "18 verbos (conte o «expor à venda» separado de «vender»). «Ainda que gratuitamente» mata o «sem lucro não é tráfico». § 3º é o «baseado com o amigo» — eventual + sem lucro + relacionamento + consumo conjunto; se faltar um, sobe ao caput. § 4º: os quatro requisitos são **cumulativos**. Dedicação habitual ≠ um único 33. Integrar facção impede o privilégio. STF HC 118.533 (2016): o privilegiado **não é equiparado a hediondo**. A vedação de restritivas no § 4º foi **expurgada** (Resolução 5/2012 do Congresso + STF).",
      pena: "Recl. 5–15 · § 3º det. 6m–1a · § 4º −1/6 a 2/3",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**18 núcleos.** Ação múltipla: vários verbos = um crime, se mesmo contexto.",
        "Tráfico **mesmo de graça**.",
        "§ 1º, IV = disfarçado (preexistência). **Não é o 40.**",
        "§ 3º = eventual + sem lucro + conhecido + juntos.",
        "§ 4º = 4 requisitos cumulativos; redução 1/6 a 2/3; **não hediondo** (HC 118.533).",
      ],
      pegadinha: [
        "«Deu um baseado de graça = 28» — caput pune fornecer **ainda que gratuitamente** (salvo o § 3º, se couber).",
        "«Privilegiado é hediondo, porque está no 33» — **HC 118.533: não**.",
        "«Disfarçado aumenta a pena no 40» — é **tipo** no § 1º, IV.",
        "«§ 2º é o tráfico culposo» — é **induzir ao uso**.",
        "«Cadeia de 18 verbos = 18 crimes» — concurso aparente (ação múltipla).",
      ],
      exemplo: [
        "Guarda 20 pinos no tênis e vende dois: **33 caput** (guardar + vender = um tráfico).",
        "Primário, ficha limpa, um tablete, sem facção: **33 + § 4º** (e a pena pode cair abaixo de 5; hediondez **não** puxa).",
        "Oferece um baseado à namorada, os dois fumam no sofá: **§ 3º + 28**, não o caput.",
        "PF disfarçado, já com provas de vendas anteriores, compra um papelote: **§ 1º, IV**.",
      ],
      macete:
        "**18 verbos, um crime, mesmo de graça.** § 3º é o baseado do amigo. § 4º = primário + ficha + sem vida no crime + sem facção → **não hediondo**. Disfarçado = **33 § 1º IV**, com passado criminoso na prova.",
    },
    {
      id: "dr-art-34-37",
      ref: "Arts. 34 a 37",
      nome: "Maquinário, associação de 2, o banco e o fogueteiro",
      contexto:
        "34 = petrechos de laboratório (3–10). 35 = associação para o tráfico: **duas ou mais**, com estabilidade/permanência (a lei diz «reiteradamente ou não», mas a jurisprudência exige o vínculo estável — senão é concurso de pessoas no 33). 36 = financiar (8–20), mais grave que o 33. 37 = informante (2–6).",
      dispositivo: [
        "Art. 34. Fabricar, adquirir, utilizar, transportar, oferecer, vender, distribuir, entregar, possuir, guardar ou fornecer, ainda que de graça, ==maquinário, aparelho, instrumento ou qualquer objeto== destinado à fabricação/preparação/produção/transformação de drogas, sem autorização: ~~reclusão, 3 a 10 anos~~, e 1.200 a 2.000 d/m.",
        "Art. 35. Associarem-se ==duas ou mais== pessoas para o fim de praticar, reiteradamente ou não, os crimes dos arts. 33 caput e § 1º, e 34: ~~reclusão, 3 a 10 anos~~, e 700 a 1.200 d/m. PU: associa-se para a prática ==reiterada== do 36 (financiamento).",
        "Art. 36. Financiar ou custear a prática de qualquer dos crimes dos arts. 33 caput e § 1º, e 34: ~~reclusão, 8 a 20 anos~~, e 1.500 a 4.000 d/m.",
        "Art. 37. Colaborar, como ==informante==, com grupo, organização ou associação destinados a 33 caput/§ 1º ou 34: ~~reclusão, 2 a 6 anos~~, e 300 a 700 d/m.",
      ],
      notaDispositivo:
        "35 vs CP 288: associação criminosa pede **3 ou mais**; o 35 pede **2**. Estabilidade é construção jurisprudencial (senão todo coautor vira 35). 36 é o tipo mais pesado deste bloco — o «laranja do dinheiro» sem necessariamente tocar na droga. 37 é o fogueteiro/olheiro; não se aplica o 33 por «trazer o rádio». 34 não se consome no 33 se o maquinário é autônomo (laboratório); balança de cozinha isolada é debate — banca gosta do 34 quando o objeto é claramente de preparo.",
      pena: "34/35: 3–10 · 36: 8–20 · 37: 2–6",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "35 = **2 pessoas** (CP 288 = **3**).",
        "36 = **8 a 20** (mais grave que o tráfico 5–15).",
        "37 = informante (fogueteiro), 2–6.",
        "34 = maquinário/petrecho de fabricação.",
      ],
      pegadinha: [
        "«Associação para o tráfico exige 3 pessoas, como o 288» — **2**.",
        "«Financiador responde pelo 33, porque é o dono» — tipo próprio **36**, pena **maior**.",
        "«Fogueteiro é 33, porque auxilia o tráfico» — **37**, pena menor.",
        "«40, VII substitui o 36» — 40, VII aumenta o traficante que também banca; o puro financiador é **36**.",
      ],
      exemplo: [
        "Dois irmãos, estáveis, revezam a boca: **33 + 35**.",
        "Empresário só transfere o dinheiro, nunca pega o tablete: **36** (8–20).",
        "Adolescente no telhado grita «olha a polícia»: se maior, **37**; se menor, ato infracional análogo.",
      ],
      macete:
        "**35 = 2 (não 3). 36 = 8 a 20, mais duro que o 33. 37 é o olho da rua (2 a 6).** 34 é o laboratório. Quem só paga não é 33.",
    },
    {
      id: "dr-art-40",
      ref: "Art. 40",
      nome: "As sete majorantes — 1/6 a 2/3",
      contexto:
        "Aumentam as penas dos arts. 33 a 37. Sete incisos. Nenhum deles é «prescrição». Nenhum deles é o disfarçado.",
      dispositivo: [
        "Art. 40. As penas dos arts. 33 a 37 são aumentadas de ==um sexto a dois terços==, se:",
        "I – natureza, procedência e circunstâncias evidenciarem a ==transnacionalidade==;",
        "II – o agente se prevalecer de ==função pública== ou de missão de ==educação, poder familiar, guarda ou vigilância==;",
        "III – nas dependências ou imediações de ==presídios, escolas, hospitais==, sedes estudantis, sociais, culturais, recreativas, esportivas ou beneficentes, locais de trabalho coletivo, recintos de espetáculo, serviços de tratamento/reinserção, ==unidades militares ou policiais== ou em ==transportes públicos==;",
        "IV – com ==violência, grave ameaça, arma de fogo== ou intimidação difusa/coletiva;",
        "V – tráfico ==entre Estados== da Federação ou entre estes e o DF;",
        "VI – envolver ou visar a atingir ==criança ou adolescente== ou quem tenha capacidade diminuída/suprimida;",
        "VII – o agente ==financiar ou custear== a prática do crime.",
      ],
      notaDispositivo:
        "I = internacional (fronteira, procedência estrangeira) ≠ V = **interestadual**. Escola/presídio = III (imediações também). Professor, pai, agente penitenciário = II. Arma = IV (e pode concorrer com 16 do Estatuto, com cuidado de consunção/conflito). VI não exige que a criança use: «envolver ou visar». VII não é o 36.",
      pena: "+1/6 a 2/3 sobre 33–37",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Fração: **1/6 a 2/3**.",
        "I transnacional ≠ V interestadual.",
        "III: escola, presídio, hospital, transporte público, unidade militar/policial…",
        "II: função pública / educação / poder familiar / guarda / vigilância.",
        "IV: violência, grave ameaça, **arma de fogo**.",
        "VI: criança/adolescente.",
        "VII: financiar (majorante, não o tipo 36).",
      ],
      pegadinha: [
        "«Art. 40 lista o agente disfarçado» — **33, § 1º, IV**.",
        "«Tráfico de SP para o RJ é transnacional (I)» — é **V** (interestadual).",
        "«Prescrição de 2 anos está no 40» — está no **30** (só o 28).",
        "«Financiar é sempre 36» — se o mesmo agente também trafica, a banca clássica aplica **40, VII** no 33.",
      ],
      exemplo: [
        "Tablete na mochila dentro do ônibus, em frente à escola: **33 + 40, III** (escola e transporte).",
        "Carga de cocaína vinda do Paraguai: **33 + 40, I**.",
        "Carga de SP para Manaus, sem fronteira: **33 + 40, V**.",
      ],
      macete:
        "**40 = 1/6 a 2/3, sete portas.** I é país; V é Estado. III é escola/cadeia/ônibus. VII não mata o 36. Disfarçado **não entra** neste artigo.",
    },
  ],
};
