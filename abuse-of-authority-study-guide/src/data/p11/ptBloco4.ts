import type { Bloco } from "../tipos";

export const ptBloco4: Bloco = {
  id: "pt-bloco-4",
  numero: "Bloco 04",
  titulo: "O que a banca pergunta todo ano",
  intervalo: "Síntese de prova",
  subtitulo: "Só IP · sem ofício · sem vítima · sem execução · nova decretação com fato novo",
  descricao:
    "Cinco recados curtos. Se cair «certo/errado» da Cebraspe, é daqui.",
  grupos: [
    {
      id: "pt-faq",
      ref: "FAQ de prova",
      nome: "Cinco «não» e um «sim, se»",
      contexto:
        "A temporária é a cautelar **mais estreita** do sistema: só investigação, só rol (ou hediondo via 8.072), só a pedido, só com relógio.",
      dispositivo: [
        "1. Cabe na ==fase judicial==? ==NÃO.== Só no inquérito (art. 1º, I). Denúncia oferecida: ou preventiva, ou liberdade + 319.",
        "2. Cabe na ==execução penal==? ==NÃO.==",
        "3. A ==vítima== pode requerer? ==NÃO.== Só delegado ou MP.",
        "4. O juiz decreta ==de ofício==? ==NÃO.== (O § 3º é apresentação, não decreto.)",
        "5. Cabe no crime do inciso III ==sem== imprescindibilidade (I)? ==NÃO== (STF: I e III cumulativos + três filtros). «Urgência» solta não substitui o I.",
        "6. Nova decretação? ==SIM==, se ainda há IP e ==fatos novos== — não para furar o teto 5+5 / 30+30 como prorrogação disfarçada.",
      ],
      notaDispositivo:
        "Correntes velhas sobre I/II/III (tudo cumulativo; I ou II + III; II indispensável): para prova **depois de 2022**, use as ADIs. Se a banca citar «STJ tradicional», a resposta clássica é **I + III**, II facultativo — nunca «II indispensável».",
      pena: "Teses de prova",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Cinco nãos: judicial, execução, vítima, ofício, III sem I.",
        "Um sim: novo pedido com **fato novo**, ainda no IP.",
      ],
      pegadinha: [
        "«Pode temporária depois da denúncia, se a testemunha corre risco» — isso é **preventiva** (312).",
        "«Sem urgência, o III sozinho basta» — falta o **I** (e os filtros STF).",
      ],
      exemplo: [
        "IP de roubo, temporária de 5 dias esgota, aparece o cofre e o comparsa: **novo** pedido (fato novo), não «mais 5 além do teto» sem prorrogação formal.",
      ],
      macete:
        "**Temporária = só IP, só pedido, só rol+I, só relógio.** Vítima e juiz não disparam. Acabou o IP, acabou a espécie.",
    },
  ],
};
