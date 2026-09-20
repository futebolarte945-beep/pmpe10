import type { Bloco } from "../tipos";

export const jeBloco1: Bloco = {
  id: "je-bloco-1",
  numero: "Bloco 01",
  titulo: "O que é IMPO e para onde vai o processo",
  intervalo: "Arts. 60 a 63 · 90-A",
  subtitulo: "Pena máxima ≤ 2 anos · foro do lugar da conduta · PU do 60 ≠ Súm. 243",
  descricao:
    "Competência e o conceito de infração de menor potencial ofensivo. Os Blocos 3 a 5 fecham o rito, o recurso e as exclusões.",
  notaProfessor: {
    titulo: "Esta Parte 12 é a 1ª leva · correção de rota",
    itens: [
      "**Súmula 243/STJ não é conexão.** Ela trava o **sursis processual** (art. 89) quando, no concurso material/formal/continuado, a pena **mínima** (soma ou majorante) passa de **1 ano**.",
      "Conexão/continência com crime mais grave: o processo sobe ao juízo comum ou ao Júri, **mas** o art. 60, **PU** (Lei 11.313/2006) manda observar **transação** e **composição civil**. O 89 (sursis) não está nesse PU — e a 243 pode barrá-lo se a mínima somada passar de 1 ano.",
      "IMPO: **máxima ≤ 2 anos** (11.313/2006), cumulada ou não com multa, + **todas as contravenções**. O teto antigo (1 ano) morreu.",
    ],
  },
  grupos: [
    {
      id: "je-art-60-61",
      ref: "Arts. 60 e 61",
      nome: "IMPO: dois anos na máxima, contravenção sempre",
      contexto:
        "61 mede o tipo em abstrato (pena máxima cominada), não a pena concreta. Contravenção entra inteira, mesmo com prisão simples. Procedimento especial já não exclui (a 11.313 tirou essa ressalva).",
      dispositivo: [
        "Art. 60 (11.313/2006). O JECrim tem competência para a conciliação, o julgamento e a execução das infrações de menor potencial ofensivo, ==respeitadas as regras de conexão e continência==.",
        "Parágrafo único. Na reunião de processos, perante o juízo ==comum== ou o ==tribunal do júri==, decorrentes de conexão/continência, observar-se-ão os institutos da ==transação penal== e da ==composição dos danos civis==.",
        "Art. 61 (11.313/2006). São IMPO, para os efeitos desta Lei, as ==contravenções penais== e os crimes a que a lei comine pena máxima ==não superior a 2 anos==, cumulada ou não com multa.",
      ],
      notaDispositivo:
        "Fora do JE por pena (não por «ser hediondo» em si): homicídio, roubo, tráfico 33, tortura — máximas > 2 anos. O art. 28 da 11.343 **é** IMPO (48, § 1º). LMP art. 41: a 9.099 **não se aplica**, qualquer que seja a pena (ADC 19 + Súm. 536). Justiça Militar: art. 90-A (Lei 9.839/1999). Citação por edital: art. 66, PU — sai do JE para o juízo comum.",
      pena: "Competência absoluta (matéria)",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "IMPO = contravenção **ou** máxima **≤ 2 anos** (não 1 ano).",
        "Conexão: sobe ao comum/Júri, mas **transação + composição** sobrevivem (60, PU).",
        "LMP: 9.099 **fora** (art. 41). Militar: 90-A.",
        "Súm. **243** = sursis no **concurso** (mínima > 1 ano), não o PU do 60.",
      ],
      pegadinha: [
        "«IMPO é pena máxima de 1 ano» — era o texto antigo; hoje é **2**.",
        "«Súm. 243 manda aplicar transação no juízo comum» — isso é o **60, PU**. A 243 é o **89**.",
        "«Ameaça (147) na LMP vai ao JE porque a máxima é 6 meses» — art. **41** da 11.340 mata a 9.099.",
      ],
      exemplo: [
        "Furto simples (1 a 4): máxima 4 → **não** é IMPO. Ameaça (1 a 6 meses): **é** IMPO, salvo LMP.",
        "Lesão leve + homicídio no mesmo contexto: Júri puxa; no que couber, transação/composição do 60, PU. Sursis do homicídio: 243 (mínima do 121 é 6 anos — nem chega).",
      ],
      macete:
        "**Máxima 2, não 1. Contravenção sempre entra.** Conexão sobe o processo; o PU do 60 leva a transação junto. 243 é outra porta (o 89).",
    },
    {
      id: "je-art-62-63",
      ref: "Arts. 62 e 63",
      nome: "Critérios do rito e o foro do lugar da conduta",
      contexto:
        "62: oralidade, simplicidade, informalidade, economia, celeridade — e, se possível, reparar a vítima e aplicar pena **não** privativa. 63: competência territorial = lugar em que a infração foi **praticada** (teoria da atividade), diferente do CPP 70 (resultado).",
      dispositivo: [
        "Art. 62 (13.603/2018). O processo orientar-se-á pelos critérios da oralidade, ==simplicidade==, informalidade, economia processual e celeridade, objetivando, sempre que possível, a reparação dos danos sofridos pela vítima e a aplicação de pena ==não privativa de liberdade==.",
        "Art. 63. A competência do Juizado será determinada pelo lugar em que foi ==praticada== a infração penal.",
      ],
      notaDispositivo:
        "CPP 70: lugar da consumação (resultado). 9.099/63: lugar da **conduta**. Crime à distância (dispara em A, a vítima cai em B): JE de **A**. Banca Cebraspe ama essa oposição. 62 não cria tipo: é norte do rito (e explica por que o 76 só oferece restritiva/multa).",
      pena: "Foro · critérios",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "63 = **atividade** (praticada). CPP 70 = **resultado**.",
        "Cinco critérios do 62 + simplicidade (2018).",
        "Objetivo: reparar + pena **sem cadeia**.",
      ],
      pegadinha: [
        "«O JE segue o art. 70 do CPP» — o 63 **derroga** o 70 na competência do Juizado.",
        "«O 62 autoriza prisão no JE» — o norte é pena **não** privativa.",
      ],
      exemplo: [
        "Ofensa pelo WhatsApp enviada de Recife, lida em Natal: conduta em Recife → JE de Recife (63), não o da leitura.",
      ],
      macete:
        "**63 é o lugar do tiro, não o do tombo.** CPP 70 é o contrário. 62: rápido, simples, sem cadeia se der.",
    },
  ],
};
