import type { Bloco } from "../tipos";

export const juBloco6: Bloco = {
  id: "ju-bloco-6",
  numero: "Bloco 06",
  titulo: "Lei de Drogas — o que o roteiro numera errado",
  intervalo: "Lei 11.343/2006 · 430.105 · 635.659 · 587 · 501 · 512 · 522",
  subtitulo: "28 não prende · 587 é intenção · 501 não é hediondez · 512 cancelada",
  descricao:
    "Repetição de guerra da Parte 09, agora no formato enunciado. O roteiro troca 587, 501 e 512 e deixa o 635.659 «em andamento». Aqui está a versão que pontua.",
  notaProfessor: {
    titulo: "Números certos",
    itens: [
      "**587/STJ** = interestadual por **intenção** (40, V). Não é concurso 28+33.",
      "**501/STJ** = retroação da 11.343 **por inteiro**; vedada combinação com a 6.368.",
      "**512/STJ** = privilegiado hediondo — **CANCELADA**. Vale HC 118.533.",
      "**522 é STF** (não STJ): Federal só no tráfico **para o exterior**.",
    ],
  },
  grupos: [
    {
      id: "ju-430-635",
      ref: "RE 430.105 · RE 635.659/STF",
      nome: "O 28: despenalizado, e a maconha saiu do crime",
      contexto:
        "430.105 (2007) respondeu: o 28 continua **crime**, só perdeu a PPL; recusa da medida não vira prisão. 635.659 (Tema 506, **julgado em 2024**) foi além na **cannabis**: não é mais infração penal (ilícito extrapenal + 28, I e III).",
      dispositivo: [
        "📋 RE 430.105/STF (2007). O art. 28 é ==crime== (não contravenção). A 11.343 ==despenalizou== (sem PPL). O descumprimento das medidas ==não autoriza prisão==.",
        "📋 RE 635.659/STF (Tema 506, 2024). Não comete infração penal quem porta ==cannabis== para consumo pessoal. Ilícito ==extrapenal==; sanções 28, I e III. Presunção relativa: até ==40 g== ou ==6 plantas fêmeas==. Outras drogas: 28 permanece penal.",
      ],
      notaDispositivo:
        "Não está «em andamento». Banca antiga ainda cobra o 28 «como está na lei» para cocaína/crack. 40 g é presunção **relativa**. Art. 40 **não** aumenta o 28 (majorantes são dos 33–37).",
      pena: "RE 430.105 · RE 635.659",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Recusa do 28 ≠ cadeia (430.105).",
        "Cannabis uso = **não crime** (635.659); resto = 28 penal sem PPL.",
        "40 g / 6 pés = presunção **relativa**.",
      ],
      pegadinha: [
        "«RE 635.659 ainda não foi julgado» — **foi, 2024**.",
        "«STF descriminalizou todas as drogas» — **só maconha** uso pessoal.",
        "«Porte no presídio aumenta o 28 pelo 40» — 40 não incide no 28.",
      ],
      exemplo: [
        "Dois baseados, 7 g: 635.659. Um papelote de cocaína: 28 + 430.105 (TCO, sem cela).",
      ],
      macete:
        "**430.105: 28 é crime sem cadeia. 635.659: maconha uso saiu do crime.** Outras drogas não pegaram carona.",
    },
    {
      id: "ju-drogas-sumulas",
      ref: "Súms. 587, 501, 512, 522",
      nome: "Quatro números, quatro funções — sem trocar a etiqueta",
      contexto:
        "O roteiro de cursinho cola 587 no concurso 28+33, 501 na hediondez e 512 na competência. Tudo invertido.",
      dispositivo: [
        "📋 587/STJ. Para a majorante do art. 40, ==V==, é desnecessária a efetiva transposição de fronteiras entre Estados: basta a ==intenção inequívoca== de tráfico interestadual.",
        "📋 501/STJ. Retroação da 11.343/2006 ==na íntegra== se mais benéfica que a 6.368/1976; ==vedada a combinação== de leis.",
        "📋 512/STJ. «§ 4º não afasta a hediondez» — ==CANCELADA== (2016). Vale HC 118.533.",
        "📋 522/STF (não STJ). Salvo tráfico ==para o exterior== (Justiça Federal), compete à Justiça dos ==Estados==.",
      ],
      notaDispositivo:
        "Interestadual (587 + 40, V) **não** federaliza. Transnacional (40, I + 522/STF) **federaliza**. Mula: autora do 33 (transportar) e **pode** ter § 4º (HC 387.077/STJ) — ser mula ≠ integrar facção.",
      pena: "Súmulas",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "587 = **vontade** de cruzar o Estado.",
        "501 = **não misture** 6.368 + 11.343.",
        "512 = **lápide**; privilegiado não hediondo.",
        "522/**STF** = Federal só **país**.",
      ],
      pegadinha: [
        "«587: tráfico + porte = concurso material» — **não é isso**.",
        "«501: privilegiado continua hediondo» — isso era a **512**.",
        "«512: competência do tráfico» — nunca foi.",
        "«522/STJ» — é **STF**.",
      ],
      exemplo: [
        "Passagem Recife–Manaus no celular, tablete ainda em Recife: **587** + Justiça Estadual.",
        "Carga no porto, origem Paraguai: **522/STF** + Federal + 40, I.",
      ],
      macete:
        "**587 intenção. 501 sem mistura. 512 morreu. 522 é STF e é fronteira.** Mula pratica o 33 e pode ser privilegiada.",
    },
  ],
};
