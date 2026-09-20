import type { Bloco } from "../tipos";

export const deBloco4: Bloco = {
  id: "de-bloco-4",
  numero: "Bloco 04",
  titulo: "Temas especiais que a banca cobra soltos",
  intervalo: "Jurisprudência · arma branca · perigo abstrato",
  subtitulo: "Insignificância não · desmuniciada sim · inapta depende · faca não é Estatuto",
  descricao:
    "Quatro teses de prova oral e objetiva. Nenhuma está no texto dos arts. 12–21: todas são STJ/STF. Errou o tribunal, errou a questão.",
  notaProfessor: {
    titulo: "O pacote de teses",
    itens: [
      "Todas as figuras dos arts. 12, 14 e 16 (e o 15) são, em regra, de **perigo abstrato**. A presunção de perigo é **relativa** só na inaptidão absoluta (tese intermediária).",
      "Arma branca **não entra** na 10.826. LCP, art. 19 (trazer consigo arma branca, sem licença da autoridade) ou, se usada, o tipo do CP (homicídio, lesão, roubo majorado por arma branca após 13.654 etc.).",
      "Abolitio temporária do Estatuto (prazos de entrega 2004–2008, com prorrogações) **acabou**. Questão que reabre o prazo está desatualizada, salvo fato histórico datado.",
    ],
  },
  grupos: [
    {
      id: "de-tese-insignificancia",
      ref: "Tese 1",
      nome: "Insignificância: a porta que o STJ fechou",
      contexto:
        "Um cartucho, uma arma velha, «não apontou para ninguém». A defesa pede 23 do CP. A resposta de prova é não.",
      dispositivo: [
        "STJ (tese repetida, incl. Jurisprudência em Teses): o princípio da insignificância ==em regra não se aplica== aos crimes de posse e porte de arma de fogo, acessório ou munição, por se tratarem de delitos de ==perigo abstrato==, que tutelar a ==segurança coletiva==.",
        "Exceções são raríssimas e não são o gabarito clássico de concurso.",
      ],
      notaDispositivo:
        "O bem jurídico é a incolumidade pública, não o «tiro que não saiu». Quantidade ínfima de munição (um estojo, três cartuchos) **não** abre a bagatela na linha majoritária de prova.",
      pena: "Tese · não afasta o tipo",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Insignificância **não se aplica** (regra) a 12, 14 e 16.",
        "Fundamento: **perigo abstrato** + segurança coletiva.",
      ],
      pegadinha: [
        "«Um único cartucho é fato atípico por bagatela» — **STJ diz que não**.",
        "«Se não houve disparo, falta ofensividade» — o tipo **não exige** disparo (salvo o 15).",
      ],
      exemplo: [
        "Abordagem: três munições .38 no bolso, sem arma. Defesa: insignificância. Gabarito: **12 ou 14** (conforme o lugar), bagatela **recusada**.",
      ],
      macete:
        "**Perigo abstrato não negocia bagatela.** Um cartucho ainda é Estatuto. A banca que «abre» a insignificância está na minoria — e não é o gabarito Cebraspe/FGV.",
    },
    {
      id: "de-tese-desmuniciada",
      ref: "Tese 2",
      nome: "Arma desmuniciada: crime sim",
      contexto:
        "A discussão antiga (perigo concreto vs. abstrato) foi pacificada: desmuniciada configura posse/porte. STF e STJ.",
      dispositivo: [
        "STF e STJ: a ausência de munição ==não descaracteriza== os crimes dos arts. 12, 14 e 16. O tipo descreve «arma de fogo, acessório ==ou== munição» — cada um, sozinho, basta.",
        "Tampouco se exige que o agente porte arma e munição ==simultaneamente==.",
      ],
      notaDispositivo:
        "O contrário (só munição, sem arma) também é crime. O contrário do contrário (arma e munição em compartimentos diferentes do carro) continua porte. Não misture com a tese da **inaptidão** (arma quebrada), que é o próximo card.",
      pena: "Tipo intacto",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Desmuniciada **configura** 12/14/16.",
        "Arma sozinha **ou** munição sozinha **ou** acessório sozinho.",
      ],
      pegadinha: [
        "«Sem munição é crime impossível» — **ERRADO** na jurisprudência dominante.",
        "«Acessório (silenciador, carregador) sem a arma é atípico» — o tipo lista o **acessório**.",
      ],
      exemplo: [
        "Pistola na cintura, carregador vazio em casa: **14** (a arma) + eventualmente **12** (o carregador/munição na casa), se a denúncia separar. Na prova objetiva: desmuniciada na rua = **14**.",
      ],
      macete:
        "**Desmuniciada pune. Munição sozinha pune. Acessório sozinho pune.** O Estatuto não espera o estampido.",
    },
    {
      id: "de-tese-inapta-branca",
      ref: "Teses 3 e 4",
      nome: "Arma que não atira — e a faca que não é Estatuto",
      contexto:
        "Inaptidão: o STJ adotou via intermediária. Arma branca: sai da 10.826.",
      dispositivo: [
        "STJ (posição intermediária, hoje majoritária em prova): se a arma está ==absolutamente inapta== a disparar (enferrujada, sem cano, destruída, irrecuperável) e a perícia demonstra a ineficácia ==total==, pode haver ==atipicidade== por ausência de perigo.",
        "Se a inaptidão é ==relativa== (travada, falta de peça fácil, sujeira) — o crime ==subsiste==. A dúvida pericial milita contra a atipicidade.",
        "Arma branca (faca, peixeira, canivete, soco-inglês): ==fora== da Lei 10.826. Contravenção do art. 19 da LCP (trazer consigo armas, sem licença) ou, no contexto, tipos do CP (lesão, roubo, ameaça).",
      ],
      notaDispositivo:
        "Não leve para a prova a tese extrema («sempre atípico se não atira») nem a outra («sempre típico, mesmo a sucata»). O gabarito gosta da **perícia de inaptidão absoluta**. Arma de brinquedo/simulacro: art. 26 da própria lei veda fabricar/vender (administrativo/penal debate), mas **não** é 14/16 — não é arma de fogo. Replica que se confunde pode ser outro tipo; porte de simulacro não abre 14.",
      pena: "Inapta absoluta: atípico · branca: LCP 19 / CP",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "Inaptidão **absoluta** + perícia = caminho da atipicidade (tese intermediária).",
        "Inaptidão **relativa** = crime.",
        "Faca/canivete = **não é** 10.826. LCP 19 ou CP.",
        "Brinquedo/simulacro ≠ arma de fogo para 12/14/16.",
      ],
      pegadinha: [
        "«Arma enferrujada é sempre atípica» — só se a perícia disser **inaptidão absoluta**.",
        "«Porte de peixeira na cintura é art. 14» — **ERRADO**. Estatuto = **arma de fogo** (e acessório/munição dela).",
        "«Desmuniciada = inapta» — são teses **diferentes**. Desmuniciada pune; inapta absoluta pode não.",
      ],
      exemplo: [
        "Revólver com o cão quebrado, recuperável em oficina: **14/16** (inaptidão relativa).",
        "Cano entupido de ferrugem, perícia: «incapaz de disparar, irreparável»: caminho da **atipicidade**.",
        "Abordagem com faca de cozinha na cintura: **LCP 19**, não 14.",
      ],
      macete:
        "**Desmuniciada ≠ inapta.** Sem cartucho, crime. Sem capacidade real de atirar (perícia absoluta), discute atipicidade. **Faca não frequenta o Estatuto.**",
    },
  ],
};
