import type { Bloco } from "../tipos";

export const drBloco3: Bloco = {
  id: "dr-bloco-3",
  numero: "Bloco 03",
  titulo: "O 28 no rito: JECRIM, prazos e o que o STF fez com a maconha",
  intervalo: "Arts. 27 a 30 e 48, §§ 1º a 5º",
  subtitulo: "Despenalização · 5 meses (10 se reincidente) · sem flagrante · RE 430.105 · RE 635.659 julgado",
  descricao:
    "O tipo já ficou no Bloco 02. Aqui é o **como**: JECRIM, sem prisão em flagrante, prazos das medidas, recusa que não vira cadeia, e o RE 635.659 **já julgado** (2024) — só cannabis, e a banca ainda cobra o 28 nas outras drogas.",
  notaProfessor: {
    titulo: "Correções de rota neste bloco",
    itens: [
      "**Não é «prazo máximo de 10 meses» no caput.** Art. 28, § 3º: PSC e medida educativa = até **5 meses**. § 4º: **reincidência** = até **10 meses**. Advertência não tem esse relógio.",
      "**Art. 40 não aumenta o 28.** As majorantes (presídio, militar, transnacional) pesam sobre os arts. **33 a 37**. Uso pessoal na cadeia, se for mesmo uso, continua 28 (e sem PPL). Se a destinação for mercancia, sobe ao 33 + 40, III.",
      "**RE 635.659 não está «em andamento».** Tema 506, junho/2024: cannabis para consumo pessoal **não é infração penal** (ilícito extrapenal + arts. 28, I e III). Outras drogas: 28 **continua crime** (despenalizado: sem PPL). Banca clássica ainda cobra o 28 «como está na lei».",
    ],
  },
  grupos: [
    {
      id: "dr-art-28-rito",
      ref: "Arts. 27, 28 §§ 3º–7º, 29 e 30",
      nome: "Penas do 28, recusa e prescrição de 2 anos",
      contexto:
        "27: penas do Capítulo III (o 28) podem ser isoladas, cumulativas ou substituídas a qualquer tempo. O 28 é crime **sem PPL** (despenalização da 11.343). Não confundir com a descriminalização pontual da maconha no RE 635.659.",
      dispositivo: [
        "Art. 27. As penas deste Capítulo poderão ser aplicadas isolada ou cumulativamente, bem como substituídas a qualquer tempo, ouvidos o MP e o defensor.",
        "Art. 28, § 3º. As penas dos incisos II e III serão aplicadas pelo prazo máximo de ==5 meses==.",
        "§ 4º. Em caso de ==reincidência==, as mesmas penas, prazo máximo de ==10 meses==.",
        "§ 6º. Recusa injustificada: o juiz pode submetê-lo, sucessivamente, a I ==admoestação verbal==; II ==multa==. (Não há conversão em prisão.)",
        "Art. 29. Multa do § 6º, II: 40 a 100 dias-multa. PU: valores ao Funad.",
        "Art. 30. Prescrevem em ==2 anos== a imposição e a execução das penas, com interrupção nos arts. 107 e ss. do CP.",
      ],
      notaDispositivo:
        "STF, RE 430.105 (2007, Min. Sepúlveda Pertence): o 28 **continua crime** (não virou contravenção só porque perdeu a PPL); o que a 11.343 fez foi **despenalizar**. Recusar a medida **não autoriza prisão**. Esse recado vale para cocaína, crack, lança etc. Na **maconha**, o RE 635.659 (2024) foi além: tirou a natureza penal e manteve advertência + curso (I e III), afastando a PSC (II) por ser pena criminal.",
      pena: "Advertência · PSC ≤ 5m (10m se reincidente) · curso · recusa = admoestação + multa",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "§ 3º = **5 meses**; § 4º = **10** só na reincidência.",
        "Recusa: admoestação, depois multa. **Sem cadeia** (RE 430.105).",
        "Prescrição **2 anos** (art. 30), não o 40.",
        "Despenalização (28 na lei) ≠ descriminalização (só cannabis, RE 635.659).",
      ],
      pegadinha: [
        "«O prazo máximo das penas do 28 é 10 meses» — 10 é **reincidente**; o padrão é **5**.",
        "«Recusou o curso = converte em detenção» — § 6º não tem prisão.",
        "«STF descriminalizou todas as drogas no 28» — **só cannabis**.",
        "«Porte no presídio aumenta o 28 pelo art. 40» — 40 não incide no 28.",
      ],
      exemplo: [
        "Usuário de cocaína recusa o curso: admoestação, depois multa. Delegado que «converte em flagrante» erra o 48, § 2º, e o RE 430.105.",
        "Dois baseados de maconha, 8 g, sem mercancia: RE 635.659 — ilícito **extrapenal**, advertência/curso, sem ficha criminal.",
      ],
      macete:
        "**5 meses no relógio; 10 só se já foi. Recusou? Bronca e multa, nunca cadeia.** Maconha uso: 2024 tirou o crime. O resto do 28 continua crime sem PPL.",
    },
    {
      id: "dr-art-48-jecrim",
      ref: "Art. 48, §§ 1º a 5º",
      nome: "JECRIM, sem flagrante, termo circunstanciado",
      contexto:
        "O 28, sozinho, não vai para a vara de tráfico: vai para o Juizado (Lei 9.099). Sem prisão em flagrante. Se houver concurso com 33–37, sai do Juizado.",
      dispositivo: [
        "Art. 48, § 1º. O agente das condutas do art. 28, ==salvo concurso com os arts. 33 a 37==, será processado e julgado na forma dos arts. 60 e ss. da Lei 9.099/1995 (==Juizados==).",
        "§ 2º. Não se imporá ==prisão em flagrante==: encaminhamento imediato ao juízo ou compromisso de comparecer; ==termo circunstanciado==; perícias.",
        "§ 3º. Sem juiz no local: a autoridade policial toma as providências ==no local==, ==vedada a detenção==. (ADI 3.807: o § 3º não tira o juiz de plantão da comarca — a polícia não «julga» o 28.)",
        "§ 4º. Exame de corpo de delito se o agente requerer ou a autoridade entender conveniente; em seguida, ==liberado==.",
        "§ 5º. O MP pode propor a aplicação imediata da pena do 28 (transação, art. 76 da 9.099).",
      ],
      notaDispositivo:
        "TCO, não APF. Levar o usuário algemado «porque a delegacia é o protocolo» é o erro que a FCC ama. Concurso 28+33: o 33 puxa o rito especial do Título IV (não JECRIM). Cannabis pós-2024: a autoridade ainda apreende, pesa e notifica — mas **não há flagrante-crime** de 28.",
      pena: "Rito do Juizado · sem flagrante",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "28 sozinho = **JECRIM** (9.099).",
        "**Sem prisão em flagrante.** TCO + compromisso.",
        "Concurso com 33–37 tira do Juizado.",
        "Transação: MP propõe a pena do 28 (§ 5º).",
      ],
      pegadinha: [
        "«Todo usuário vai para a vara de tóxicos» — **Juizado**, se for só 28.",
        "«Pode prender em flagrante e soltar depois com fiança» — **vedada a detenção**.",
        "«Art. 40, III (presídio) transforma o 28 em tráfico» — destinação é o § 2º do 28, não o 40.",
      ],
      exemplo: [
        "Abordagem com um baseado: TCO, notificação, solto no ato. Sem APF, sem cela.",
        "Mesmo baseado + 200 pinos na mochila: concurso com 33 — rito especial, não Juizado.",
      ],
      macete:
        "**28 sozinho = Juizado, TCO, sem algema.** 28+33 = o tráfico puxa o rito. Presídio não «aumenta» o 28: ou é uso, ou já era 33.",
    },
  ],
};
