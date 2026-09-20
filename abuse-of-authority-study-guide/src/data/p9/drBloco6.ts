import type { Bloco } from "../tipos";

export const drBloco6: Bloco = {
  id: "dr-bloco-6",
  numero: "Bloco 06",
  titulo: "Súmulas, teses e o que a banca ainda cobra errado",
  intervalo: "STF e STJ · súmulas 501, 512, 522, 587",
  subtitulo: "512 cancelada · 501 é combinação de leis · 587 é intenção interestadual · mula pode ser § 4º",
  descricao:
    "Pacote de enunciados. O roteiro de cursinho troca os números: 587 **não** é concurso material; 501 **não** é hediondez; 512 **foi cancelada**. Decore o número certo com a frase certa.",
  notaProfessor: {
    titulo: "Não ensine o erro do roteiro",
    itens: [
      "**Súmula 587/STJ:** para o aumento do art. 40, **V** (interestadual), **não** precisa cruzar a fronteira — basta a **intenção** demonstrada. Não fala em concurso 28+33.",
      "**Súmula 501/STJ:** retroação da 11.343 vs 6.368 **por inteiro**; **vedada a combinação** de leis. Não é hediondez.",
      "**Súmula 512/STJ estava:** «§ 4º não afasta a hediondez». **Cancelada** em 23/11/2016 (Pet 11.796), depois do STF, HC 118.533 (2016): privilegiado **não** é hediondo.",
      "**Súmula 522 é do STF:** Federal só no tráfico **para o exterior**.",
    ],
  },
  grupos: [
    {
      id: "dr-sumulas",
      ref: "Súmulas 501, 512, 522, 587",
      nome: "Os quatro números que a prova embaralha",
      contexto:
        "Quatro enunciados, quatro funções. A banca corta o final da frase ou troca o tribunal.",
      dispositivo: [
        "Súm. 501/STJ. É cabível a aplicação retroativa da Lei 11.343/2006, desde que o resultado da incidência das suas disposições, ==na íntegra==, seja mais favorável ao réu do que o da Lei 6.368/1976, ==vedada a combinação de leis==.",
        "Súm. 512/STJ. «A aplicação do art. 33, § 4º, não afasta a hediondez.» ==CANCELADA== (2016). Vale o STF, HC 118.533: o privilegiado ==não é hediondo==.",
        "Súm. 522/STF. Salvo tráfico ==para o exterior== (Justiça Federal), compete à Justiça dos ==Estados== o processo dos crimes relativos a entorpecentes.",
        "Súm. 587/STJ. Para a majorante do art. 40, V, é ==desnecessária a efetiva transposição== de fronteiras entre Estados, bastando a ==intenção inequívoca== de realizar o tráfico interestadual.",
      ],
      notaDispositivo:
        "Progressão: tráfico «cheio» = hediondo equiparado (8.072, com as frações da 13.964 / 15.358). Privilegiado = regime e progressão **comuns** (não hediondo). Art. 40-A (Lei 15.358/2026): dobro da pena dos arts. 33–37 se integrante de org. criminosa ultraviolenta / milícia — majorante nova; não confunda com o 40 clássico (1/6 a 2/3).",
      pena: "Teses",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "501 = retroação **inteira**, sem misturar 6.368 + 11.343.",
        "512 = **cancelada**; privilegiado **não** hediondo (118.533).",
        "522/**STF** = Federal só **exterior**.",
        "587 = 40, V com **intenção**, sem precisar cruzar a divisa.",
      ],
      pegadinha: [
        "«Súm. 587: tráfico + porte = concurso material» — **não**. Isso nem está sumulado assim; 28 e 33 em tese podem concorrer, mas o enunciado 587 é **interestadual**.",
        "«Súm. 501: privilegiado continua hediondo» — isso era a **512**, e morreu.",
        "«Súm. 522/STJ» — é **STF**.",
        "«RE 635.659 ainda não foi julgado» — **foi, 2024**, só maconha.",
      ],
      exemplo: [
        "Passagem aérea Recife–Manaus no celular, droga ainda em Recife: **587** + 40, V, Justiça Estadual.",
        "Questão que cita a 512 como vigente: gabarito moderno é **cancelada** / HC 118.533.",
      ],
      macete:
        "**501 mistura não. 512 morreu. 522 é STF e é país. 587 é vontade de cruzar o Estado.** Privilegiado: progressão comum.",
    },
    {
      id: "dr-mula-re",
      ref: "Mula · RE 635.659 · RE 430.105",
      nome: "Mula, maconha e o 28 que não prende",
      contexto:
        "Três teses de prova oral e de Cebraspe «certo/errado».",
      dispositivo: [
        "Mula (transportadora): responde pelo ==art. 33== (autoria dos verbos transportar/trazer). A condição de mula ==não impede, por si==, o § 4º: STF/STJ (HC 387.077 e ss.) — ser mula != integrar organização criminosa. Pode, contudo, ==modular== a fração do desconto.",
        "RE 430.105/STF: o 28 é ==crime despenalizado== (ainda crime, sem PPL); recusa das medidas ==não vira prisão==.",
        "RE 635.659/STF (Tema 506, 2024): cannabis para consumo pessoal ==não é infração penal==; ilícito extrapenal; sanções 28, I e III; presunção relativa de ==40 g ou 6 plantas fêmeas==. Outras drogas: 28 permanece penal.",
      ],
      notaDispositivo:
        "Não ensine «mula = partícipe necessariamente»: o 33 é de ação múltipla; quem transporta **pratica o núcleo**. Partícipe é quem contribui sem realizar o verbo (o olheiro pode ser 37). 40 g não é teto de atipicidade do 33: com caderno de fiado, 30 g ainda é tráfico.",
      pena: "Teses",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Mula = **33** (transportar); § 4º **pode** caber.",
        "430.105: 28 é crime **sem cadeia**; recusa ≠ prisão.",
        "635.659: **só maconha**; 40 g / 6 pés = presunção **relativa**.",
      ],
      pegadinha: [
        "«Mula é sempre partícipe, nunca autora» — o verbo transportar a torna **autora** do 33.",
        "«Mula nunca tem § 4º, porque serve ao tráfico» — sem prova de facção, o privilégio **cabe**.",
        "«40 g de maconha nunca é 33» — presunção **relativa**.",
      ],
      exemplo: [
        "Jovem com 800 g na cueca, passagem só de ida, primário, sem rádio da facção: 33 + **§ 4º possível** (mula).",
        "30 g de maconha + balança + lista de fiado: **33**, apesar dos 40 g.",
      ],
      macete:
        "**Mula pratica o 33 e pode ser privilegiada.** 430.105 = 28 sem cadeia. 635.659 = maconha uso sem crime, 40 g relativo.",
    },
  ],
};
