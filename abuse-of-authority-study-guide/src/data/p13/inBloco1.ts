import type { Bloco } from "../tipos";

export const inBloco1: Bloco = {
  id: "in-bloco-1",
  numero: "Bloco 01",
  titulo: "O que a Constituição deixa furar — e o que não é 9.296",
  intervalo: "CF 5º, XII · Art. 1º e PU",
  subtitulo: "Fluxo × dado parado · interceptação × escuta × gravação",
  descricao:
    "A 9.296 regulamenta só a parte final do 5º, XII: comunicações telefônicas, por ordem do juiz da ação principal, em investigação ou instrução penal. O PU puxa o fluxo de informática/telemática. Dado já armazenado não é interceptação.",
  notaProfessor: {
    titulo: "A lei vai ao art. 12 — não ao 14",
    itens: [
      "São **12 artigos** (11 = vigência, 12 = revogação) + **8º-A** e **10-A** (13.964). Não existe art. 13 nem 14.",
      "PU do 1º = interceptação do **fluxo** (mensagem **a caminho**). E-mail/WhatsApp **já gravados** no aparelho ou no servidor = busca/apreensão ou ordem de quebra de dados (Marco Civil, CPP) — **não** é 9.296.",
      "Gravação feita por **um** dos interlocutores **não** é interceptação (STF). 10-A, § 1º: **não há crime**. 8º-A, § 4º: serve à **defesa** se a integridade da fita estiver demonstrada.",
    ],
  },
  grupos: [
    {
      id: "in-art-1",
      ref: "Art. 1º",
      nome: "Juiz da ação principal, segredo, só o penal",
      contexto:
        "Sem ordem judicial não fura o 5º, XII. Sem investigação/instrução penal tampouco — não cabe interceptação «para o PAD», «para a CPI» ou «para a vara de família» como meio autônomo da 9.296 (o que pode haver é prova emprestada, Bloco 5).",
      dispositivo: [
        "Art. 1º. A interceptação de comunicações telefônicas, de qualquer natureza, para prova em ==investigação criminal== e em ==instrução processual penal==, observará o disposto nesta Lei e dependerá de ordem do ==juiz competente da ação principal==, sob ==segredo de justiça==.",
        "Parágrafo único. O disposto nesta Lei aplica-se à interceptação do ==fluxo== de comunicações em sistemas de informática e telemática.",
      ],
      notaDispositivo:
        "«Competente da ação principal»: o juiz que seria o da causa (incluindo o do IP). Plantão atende urgência, depois ratifica. «Qualquer natureza»: fixo, móvel, VoIP. Telemática do PU = fluxo (pacotes em trânsito), não o HD já copiado.",
      pena: "Meio de prova · sigilo",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Só investigação criminal ou instrução **penal**.",
        "Ordem do **juiz da ação principal**, segredo de justiça.",
        "PU = **fluxo** telemático, não o arquivo parado.",
      ],
      pegadinha: [
        "«Cabe interceptação na sindicância ou no divórcio, direto pela 9.296» — o caput é **penal**.",
        "«WhatsApp antigo no celular é interceptação telemática» — dado **armazenado** ≠ fluxo.",
        "«A lei tem 14 artigos» — vai ao **12**, com 8º-A e 10-A.",
      ],
      exemplo: [
        "Tráfico: juiz criminal autoriza a captação do que **entra e sai** do chip e do WhatsApp **em tempo real** (PU). Print de conversa de 2024 já salva no cloud: mandado de quebra/apreensão — outra porta.",
      ],
      macete:
        "**5º, XII fura só com juiz, e só no penal.** O PU é o rio (fluxo), não o lago (arquivo).",
    },
    {
      id: "in-distincao-4",
      ref: "Doutrina · STF",
      nome: "Quatro captações que a banca troca",
      contexto:
        "O nome decide se precisa de juiz e se entra no art. 10. Grave a tabela antes da prova.",
      dispositivo: [
        "==Interceptação== (stricto sensu): terceiro capta ==sem== que nenhum interlocutor saiba. Estado. ==Exige== ordem judicial (9.296).",
        "==Escuta telefônica==: terceiro capta ==com== ciência de um dos interlocutores. Se o Estado escuta, a praxe e a lei (art. 10 fala em interceptação) tratam como medida judicial; não misture com a gravação particular.",
        "==Gravação clandestina== (telefônica): ==um== interlocutor grava o outro, sem aviso. ==Não== é interceptação. STF: prova ==lícita== em regra (defesa, e também para acusar, salvo ilicitude por outro fundamento).",
        "==Captação ambiental== (8º-A): áudio/vídeo/sinal no ==ambiente==, sem telefone. Estado: juiz + requisitos próprios (máxima > 4 anos). Particular (um interlocutor): 10-A, § 1º, atípico.",
      ],
      notaDispositivo:
        "STF clássico (HC 75.261, RE 402.717 e linha): gravação por um dos interlocutores é lícita, sobretudo em legítima defesa/prova de inocência; a Corte também já admitiu o uso pela acusação quando não há crime na captação. 8º-A, § 4º, é **expresso** para a defesa (integridade da gravação).",
      pena: "Distinção de meios",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Interceptação = ninguém sabe + juiz.",
        "Gravação de um interlocutor = **lícita** (regra) e **não** é 9.296.",
        "Ambiental estatal = **8º-A** (teto > 4 anos), não o art. 2º, III.",
      ],
      pegadinha: [
        "«A vítima gravou a ameaça no celular: interceptação nula, sem juiz» — é **gravação**, lícita.",
        "«Ambiental segue o art. 2º (só reclusão)» — o 8º-A pede máxima **> 4 anos**.",
      ],
      exemplo: [
        "Ameaça (detenção): a vítima grava o telefonema. A fita **entra**. Já o delegado **não** pode interceptar o 147 — art. 2º, III (máximo é detenção).",
      ],
      macete:
        "**Ninguém sabe = juiz. Um sabe e grava = prova.** Ambiental do Estado é 8º-A (> 4 anos). Telefone do Estado é 2º (reclusão).",
    },
  ],
};
