import type { Bloco } from "../tipos";

export const inBloco7: Bloco = {
  id: "in-bloco-7",
  numero: "Bloco 07",
  titulo: "Ambiental, juiz errado, GPS e o que não é fluxo",
  intervalo: "Art. 8º-A · arts. 11 e 12 · teses",
  subtitulo: "Máxima > 4 anos · incompetência · geolocalização · dado parado",
  descricao:
    "O 8º-A não copia o art. 2º. Incompetência do juiz da interceptação: duas teses (anote as duas). GPS contínuo pede juiz. WhatsApp morto no HD não é o PU do 1º. A lei acaba no 12.",
  notaProfessor: {
    titulo: "Não misture os tetos",
    itens: [
      "**Telefone/telemática (2º, III):** veda se a pena máxima for **detenção** → precisa de tipo com **reclusão** (a quantidade tanto faz: furto simples passa no III).",
      "**Ambiental (8º-A, II):** penas máximas **superiores a 4 anos** (ou conexas). Furto simples (máxima 4) **não** passa no 8º-A. Homicídio, sim.",
      "8º-A **não** tem ofício: só polícia ou MP. Casa: 5º, XI (não se instala à noite/disfarce **dentro** da casa sem as regras da busca).",
    ],
  },
  grupos: [
    {
      id: "in-art-8a",
      ref: "Art. 8º-A",
      nome: "Captação ambiental — o irmão mais exigente",
      contexto:
        "Pacote Anticrime. Juiz autoriza a pedido da polícia ou do MP. Subsidiariedade + máxima > 4 anos (ou conexo). 15 dias, renovável se indispensável **e** crime permanente/habitual/continuado. § 4º: interlocutor grava para a defesa, com integridade.",
      dispositivo: [
        "Art. 8º-A (13.964). Para investigação ou instrução criminal, poderá ser autorizada pelo juiz, a requerimento da autoridade policial ou do MP, a captação ambiental de sinais eletromagnéticos, ópticos ou acústicos, quando:",
        "I – a prova não puder ser feita por outros meios disponíveis e igualmente eficazes; e",
        "II – houver elementos razoáveis de autoria/participação em infrações cujas penas máximas sejam ==superiores a 4 (quatro) anos== ou em infrações ==conexas==.",
        "§ 1º. O requerimento descreve o local e a forma de instalação.",
        "§ 2º. Instalação pode ser por operação disfarçada ou à noite, ==exceto na casa== (CF 5º, XI).",
        "§ 3º. Prazo de ==15 dias==, renovável por iguais períodos se indispensável e houver atividade ==permanente, habitual ou continuada==.",
        "§ 4º. Captação por um dos interlocutores, sem ciência prévia da polícia/MP, pode ser usada ==em matéria de defesa==, demonstrada a integridade.",
        "§ 5º. A 9.296 aplica-se **subsidiariamente**.",
      ],
      notaDispositivo:
        "§ 2º e § 4º tiveram idas e vindas de veto; vigoram na redação atual. § 4º é **defesa**; a acusação usa a gravação do interlocutor pela jurisprudência do STF + 10-A, § 1º (atípico), não por este parágrafo.",
      pena: "Ambiental · máx. > 4 anos",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Máxima **> 4 anos** (não é o III do 2º).",
        "Sem ofício. 15 dias + permanente/habitual/continuada na renovação.",
        "Casa: 5º, XI. § 4º = defesa + integridade.",
      ],
      pegadinha: [
        "«Ambiental cabe em todo crime de reclusão» — precisa **> 4 anos** no máximo.",
        "«O juiz decreta ambiental de ofício, art. 3º» — o 8º-A é requerimento.",
      ],
      exemplo: [
        "Furto simples no mercado: reclusão, então **telefone** pode (2º, III). **Ambiental** no estoque **não** (máxima 4, não é > 4).",
      ],
      macete:
        "**Telefone olha a espécie (reclusão). Ambiental olha o número (> 4).** 15 dias nos dois. Casa é casa (5º, XI).",
    },
    {
      id: "in-teses-finais",
      ref: "Teses · arts. 11 e 12",
      nome: "Incompetência, GPS, dado parado, fim da lei",
      contexto:
        "Arts. 11 e 12 são vigência e revogação — a lei **não tem** 13 e 14. O resto deste card é jurisprudência que a banca cola no mesmo item.",
      dispositivo: [
        "Art. 11. Esta Lei entra em vigor na data de sua publicação.",
        "Art. 12. Revogam-se as disposições em contrário.",
        "Incompetência: ==tese 1== (mais gravosa) — juiz absolutamente incompetente → interceptação ==nula== (ilícita). ==Tese 2== (STJ em vários acórdãos) — nulidade ==relativa== / aproveitamento se não houve prejuízo e o juízo competente ratifica, sobretudo na competência territorial.",
        "Geolocalização ==contínua== / rastreamento em tempo real: STJ exige ==autorização judicial== (não se confunde com dado cadastral pontual).",
        "Conteúdo armazenado (e-mail, WhatsApp antigo): ordem judicial de quebra/apreensão — ==não== é o PU do art. 1º (fluxo).",
      ],
      notaDispositivo:
        "Banca «cite as duas» na incompetência: grave as duas e amarre no comando (absoluta vs. territorial; ratificação). Dados de tráfego (IMEI, torre, CDR) ≠ conteúdo da conversa ≠ fluxo interceptado. STJ: interceptação pode ser o **único** meio, se o 2º, II, estiver **fundamentado**.",
      pena: "Teses de prova",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Lei acaba no **12**. 8º-A e 10-A são extras da 13.964.",
        "Incompetência: **duas teses** — absoluta vs. relativa/ratificação.",
        "GPS contínuo = juiz. Cadastral ≠ conteúdo ≠ fluxo.",
        "2º, II: único meio **desde que** fundamentado (STJ).",
      ],
      pegadinha: [
        "«Art. 14 da 9.296» — **não existe**.",
        "«Quebra de WhatsApp parado é interceptação telemática» — é **dado armazenado**.",
        "«Geolocalização a operadora entrega no 7º, sem juiz» — rastreio **contínuo** pede ordem.",
      ],
      exemplo: [
        "Juiz de Araçatuba intercepta alvo que mora em Santos (território): tese 2 tende a **ratificar**. Juiz cível intercepta para o criminal: tese 1 — **nula** (não é o juiz da ação principal, art. 1º).",
      ],
      macete:
        "**A lei morre no 12.** GPS contínuo pede papel. Arquivo parado não é fluxo. Juiz errado: prepare as duas teses.",
    },
  ],
};
