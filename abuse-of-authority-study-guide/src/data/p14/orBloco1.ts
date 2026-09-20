import type { Bloco } from "../tipos";

export const orBloco1: Bloco = {
  id: "or-bloco-1",
  numero: "Bloco 01",
  titulo: "Quatro pessoas, teto maior que quatro, ou o mapa",
  intervalo: "Art. 1º, §§ 1º e 2º",
  subtitulo: "4+ · tarefas · vantagem · máxima > 4 anos OU transnacional",
  descricao:
    "O conceito do § 1º é o tipo aberto do concurso. Sem um desses elementos, não é 12.850 — pode ser 288 (três) ou 35 da Lei de Drogas (dois). Os Blocos 4 a 7 fecham meios, rito e os tipos 18 a 21-B.",
  notaProfessor: {
    titulo: "Correção de rota — o § 2º não é «particular × Administração»",
    itens: [
      "Art. 1º, § 2º, hoje: **I** — infração de tratado/convenção com execução de um lado da fronteira e resultado do outro; **II** — organizações **terroristas** (Lei 13.260/2016). Não é «quadrilha de particular contra a Administração».",
      "**4** na ORCRIM × **3** no 288 × **2** no art. 35 da 11.343. Banca cola os três no mesmo item.",
      "Máxima **superior a 4 anos** **ou** caráter **transnacional** (mesmo que a pena do tipo seja baixa). Os dois filtros são **alternativos**.",
    ],
  },
  grupos: [
    {
      id: "or-art-1-s1",
      ref: "Art. 1º, § 1º",
      nome: "Os cinco tijolos do conceito",
      contexto:
        "Associação de 4 ou mais, estruturalmente ordenada, com divisão de tarefas (ainda que informal), visando vantagem de qualquer natureza, mediante infrações com máxima > 4 anos **ou** transnacionais. Falta um tijolo, cai o tipo do art. 2º.",
      dispositivo: [
        "Art. 1º. Esta Lei define organização criminosa e dispõe sobre a investigação, os meios de obtenção da prova, infrações correlatas e o procedimento.",
        "§ 1º. Considera-se organização criminosa a associação de ==4 (quatro) ou mais pessoas== estruturalmente ordenada e caracterizada pela ==divisão de tarefas==, ainda que informalmente, com objetivo de obter, direta ou indiretamente, ==vantagem de qualquer natureza==, mediante a prática de infrações penais cujas penas máximas sejam ==superiores a 4 (quatro) anos==, ou que sejam de caráter ==transnacional==.",
      ],
      notaDispositivo:
        "«Ainda que informalmente» mata a tese de que precisa de estatuto, ata ou farda. Vantagem **não** é só dinheiro (poder, sexo, cargo). A máxima > 4 olha o **tipo** (furto simples = 4, **não** passa no filtro da pena; furto qualificado 2–8 **passa**). Transnacional salva o tipo miúdo se a estrutura cruza fronteira.",
      pena: "Conceito · 4 pessoas",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**4** pessoas (não 3, não 2).",
        "Estrutura + **divisão de tarefas**, ainda que informal.",
        "Vantagem de **qualquer** natureza.",
        "Máxima **> 4 anos** **ou** transnacional (alternativos).",
      ],
      pegadinha: [
        "«ORCRIM é 3 pessoas, como o 288» — **4**.",
        "«Precisa de hierarquia formal, ata e farda» — **ainda que informalmente**.",
        "«A máxima tem de ser > 4 **e** transnacional» — é **ou**.",
        "«Furto simples (máxima 4) entra porque 4 não é inferior» — o texto pede **superior** a 4. 4 não é > 4.",
      ],
      exemplo: [
        "Três comparsas, estelionato (1 a 5): máxima > 4, mas **faltou gente** → 288, não 2º da 12.850.",
        "Cinco pessoas, contrabando miúdo transnacional, tarefas (motorista, laranja, caixa): máxima pode ser baixa, mas o **mapa** salva o conceito.",
      ],
      macete:
        "**4 pessoas, teto maior que 4, ou o passaporte.** Informal vale. 288 é trio; 35 é dupla.",
    },
    {
      id: "or-art-1-s2",
      ref: "Art. 1º, § 2º",
      nome: "A lei também veste o tratado e o terror",
      contexto:
        "O § 2º **estende** a lei (meios de prova + tipos correlatos) a dois recortes. Não cria um terceiro conceito de ORCRIM nem puxa o peculato do particular.",
      dispositivo: [
        "§ 2º. Esta Lei se aplica também:",
        "I – às infrações penais previstas em ==tratado ou convenção internacional== quando, iniciada a execução no País, o resultado tenha ou devesse ter ocorrido no estrangeiro, ou reciprocamente;",
        "II – às organizações ==terroristas==, entendidas como aquelas voltadas para a prática dos atos de terrorismo legalmente definidos. (13.260/2016)",
      ],
      notaDispositivo:
        "O II antigo falava em terroristas «internacionais reconhecidas por foro». A 13.260 trouxe o II para o tipo interno de terrorismo. Meios do art. 3º (colaboração, infiltração…) servem também aqui.",
      pena: "Âmbito de aplicação",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "§ 2º, I = tratado + resultado cruzando fronteira.",
        "§ 2º, II = **terror** (13.260), não «particular × Administração».",
      ],
      pegadinha: [
        "«§ 2º é a ORCRIM de particular contra a Administração» — **não está no texto**.",
        "«Terrorista internacional só, se a ONU listar» — redação **2016**: atos legalmente definidos.",
      ],
      exemplo: [
        "Célula que planeja atentado da 13.260: mesmo sem «4 + máxima > 4» no molde do § 1º, a 12.850 **aplica** os meios (colaboração, etc.) pelo § 2º, II.",
      ],
      macete:
        "**§ 1º é o retrato da ORCRIM. § 2º é o cabide: tratado e terror.** Administração pública não mora nesse parágrafo.",
    },
  ],
};
