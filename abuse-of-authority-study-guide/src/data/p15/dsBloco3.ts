import type { Bloco } from "../tipos";

export const dsBloco3: Bloco = {
  id: "ds-bloco-3",
  numero: "Bloco 03",
  titulo: "Interceptação — fluxo, 15 dias e o crime achado",
  intervalo: "Lei 9.296/1996 · Tema 661 · HC 129.678",
  subtitulo: "Gravação lícita · 661 sucessivo · GPS pede juiz · duas teses na competência",
  descricao:
    "Sem súmula numerada na 9.296. O que cai é o Tema 661, a gravação do interlocutor, a serendipidade e o GPS contínuo.",
  notaProfessor: {
    titulo: "Arquivo parado não é 9.296",
    itens: [
      "PU do art. 1º = **fluxo**. WhatsApp já salvo = outra porta (quebra/apreensão).",
      "Tema **661/STF** (RE 625.263): 15+15 **sucessivos**, com 2º + motivação concreta — modelo genérico anula.",
      "Incompetência: prepare **duas teses** (absoluta vs. relativa/ratificação). Não venda uma só como «o STF».",
    ],
  },
  grupos: [
    {
      id: "ds-int-gravacao-661",
      ref: "STF · Tema 661",
      nome: "Quem grava a si mesmo · quem renova os 15",
      contexto:
        "Gravação por um interlocutor não é interceptação (STF clássico; 9.296, 10-A, § 1º, atípico no ambiental). Renovação: a locução «uma vez» do art. 5º foi lida como sucessiva.",
      dispositivo: [
        "📋 Tese (STF). A ==gravação clandestina== feita por ==um dos interlocutores==, sem o outro saber, é, em regra, ==prova lícita== (defesa e, na linha da Corte, também acusação, salvo ilicitude por outro fundamento). Não se submete à 9.296.",
        "📋 Tema 661/STF. São lícitas as ==sucessivas== renovações da interceptação, desde que presentes o art. 2º e a necessidade diante de elementos ==concretos== e da complexidade, com decisão inicial e prorrogações ==motivadas== — ainda que sucintas. Padronizada/genérica ==não==.",
      ],
      notaDispositivo:
        "Prazo da **diligência** (execução), não da assinatura. Ambiental estatal: 8º-A, máxima > 4 anos, sem ofício. 24 h para decidir (4º, § 2º).",
      pena: "Lícita · 15+15…",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Vítima gravou a ameaça: **lícito**, não é interceptação.",
        "Tema **661**: sucessivas, fundamentadas.",
        "«Uma vez» no 5º **não** é «uma única vez».",
      ],
      pegadinha: [
        "«Gravação da vítima é interceptação nula, sem juiz» — é **gravação**.",
        "«Só uma prorrogação de 15» — **661**.",
      ],
      exemplo: [
        "Ameaça (detenção): a vítima grava — entra. O delegado **não** intercepta o 147 (2º, III).",
      ],
      macete: "**Um sabe e grava = prova. Ninguém sabe = juiz. 661 deixa repetir os 15.**",
    },
    {
      id: "ds-int-seren-gps",
      ref: "HC 129.678 · STJ GPS",
      nome: "Crime achado, GPS contínuo, juiz errado",
      contexto:
        "Serendipidade de 1º grau (conexo) é pacífica. 2º grau (autônomo): STF «crime achado» — vale se a mãe era lícita, o achado tem reclusão e não houve pesca.",
      dispositivo: [
        "📋 Tese. Serendipidade de ==1º grau== (fato conexo): prova ==lícita==.",
        "📋 Tese (STF, HC 129.678 e linha do «crime achado»; STJ). 2º grau: o fato ==autônomo== pode aproveitar se a interceptação-mãe era lícita, o crime achado admitiria interceptação (==reclusão==) e ==não== houve desvio de finalidade.",
        "📋 Tese (STJ). ==Geolocalização contínua== / rastreamento em tempo real exige ==autorização judicial==. Não se confunde com dado cadastral pontual (nome/endereço).",
        "📋 Competência. Tese 1: juiz ==absolutamente== incompetente → interceptação nula. Tese 2 (vários acórdãos STJ): nulidade ==relativa== / aproveitamento se o juízo certo ==ratifica==, sobretudo na competência territorial.",
      ],
      notaDispositivo:
        "Art. 1º: juiz **da ação principal**. Cível interceptando para o criminal: tese 1. Araçatuba vs. Santos (território): tese 2 tende a ratificar. Conteúdo armazenado ≠ fluxo.",
      pena: "Fortuito · GPS · duas teses",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "1º grau vale. 2º grau vale se reclusão + sem pesca.",
        "GPS **contínuo** = juiz.",
        "Incompetência: **cite as duas** se a banca pedir.",
      ],
      pegadinha: [
        "«Todo crime achado é nulo» — STF **não** diz isso.",
        "«Operadora entrega a live location no 7º, sem juiz» — rastreio contínuo pede ordem.",
        "«WhatsApp antigo é interceptação telemática» — é **dado parado**.",
      ],
      exemplo: [
        "Autorização para tráfico; no 12º dia, o alvo marca latrocínio: crime achado + reclusão = **entra**. Pediu «tráfico» já sabendo do latrocínio: **pesca**, cai.",
      ],
      macete: "**Fortuito com reclusão vive. Pesca morre. GPS contínuo pede papel.**",
    },
  ],
};
