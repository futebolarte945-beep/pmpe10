import type { Bloco } from "../tipos";

export const juBloco2: Bloco = {
  id: "ju-bloco-2",
  numero: "Bloco 02",
  titulo: "Crimes hediondos — progressão, regime e o privilegiado",
  intervalo: "Lei 8.072/1990 · Súms. 440 e 471/STJ · HC 82.959 e 118.533/STF",
  subtitulo: "Três eras da progressão · 440 não é gravidade abstrata · 512 morreu",
  descricao:
    "O coração da prova de hediondos não é o rol: é **quando** o condenado progride e **com que regime começa**. 440 e 471 são as duas súmulas que o roteiro mandou trazer. O 118.533 entra aqui porque o tráfico privilegiado saiu da hediondez.",
  notaProfessor: {
    titulo: "As três eras — decore a data do fato",
    itens: [
      "**Até HC 82.959/STF (2006):** a 8.072 vedava progressão (100%). O STF declarou a vedação **inconstitucional**.",
      "**Lei 11.464/2007:** 2/5 (primário) e 3/5 (reincidente). Súm. **471**: fato **antes** da 11.464 usa o art. 112 da LEP da época (1/6), não a fração nova (novatio in pejus).",
      "**Pacote Anticrime (13.964/2019) + art. 112 da LEP:** 40% / 60% / 50% / 70% (hediondo sem/com resultado morte, primário/reincidente). Aplica-se ao **fato** na vigência. Lei 15.358/2026 endureceu fatias em hipóteses de org. criminosa ultraviolenta — banca clássica ainda cobra o 40–70%.",
    ],
  },
  grupos: [
    {
      id: "ju-sum-440",
      ref: "Súm. 440/STJ · 2010",
      nome: "Regime mais grave só com pena-base justificada",
      contexto:
        "Juízes fixavam a pena-base no mínimo e, «porque o crime é hediondo / grave», jogavam o réu no fechado. O STJ fechou a porta.",
      dispositivo: [
        "📋 Súmula 440/STJ (28/04/2010). Fixada a pena-base no ==mínimo legal==, é vedado o estabelecimento de regime prisional ==mais gravoso== do que o cabível em razão da sanção imposta, com base ==apenas na gravidade abstrata== do delito.",
        "Irmã: Súm. 719/STF — a imposição de regime mais severo do que a pena permite exige ==motivação idônea==.",
      ],
      notaDispositivo:
        "Hediondez **não** é, sozinha, motivo para fechar o regime se a pena-base ficou no mínimo e as circunstâncias do 59 são favoráveis. Circunstâncias concretas (violência real, quantidade de droga, reiteração) podem fundamentar o regime — a súmula veta o carimbo abstrato.",
      pena: "Súmula 440/STJ",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Pena-base no mínimo + «crime hediondo» = **não** autoriza fechado automático.",
        "Cai junto com 719/STF (motivação idônea).",
        "Tráfico privilegiado (não hediondo) + pena baixa: semiaberto/aberto cabem.",
      ],
      pegadinha: [
        "«Todo hediondo começa no fechado, por ser hediondo» — o 2º da 8.072 já não impõe isso desde 2007; 440 veta o atalho.",
        "«440 impede qualquer regime fechado em hediondo» — impede o fechado **só** com gravidade abstrata.",
      ],
      exemplo: [
        "Tráfico privilegiado, 1 ano e 8 meses, pena-base no mínimo, réu primário: juiz que decreta fechado «porque é tráfico» fere a 440.",
      ],
      macete:
        "**440: mínimo na base, sem carimbo de gravidade.** Hediondo não é senha para o fechado.",
    },
    {
      id: "ju-sum-471",
      ref: "Súm. 471/STJ · 2010",
      nome: "Fato anterior a 11.464 progride pela LEP antiga",
      contexto:
        "Depois que o STF (HC 82.959, 2006) derrubou a vedação de progressão, veio a 11.464/2007 com 2/5 e 3/5. Tentaram aplicar a fração nova a fatos velhos. Novatio legis in pejus.",
      dispositivo: [
        "📋 Súmula 471/STJ. Os condenados por crimes hediondos ou assemelhados cometidos ==antes da vigência da Lei 11.464/2007== sujeitam-se ao disposto no ==art. 112 da LEP== para a progressão de regime prisional.",
        "HC 82.959/STF (2006): é ==inconstitucional== a vedação de progressão do art. 2º, § 1º, da 8.072, na redação original.",
      ],
      notaDispositivo:
        "«Art. 112 da LEP» na época da 471 = **1/6** + mérito. Não é 2/5. Anticrime (2019) não retroage para piorar fato antigo. Marque a **data do crime**, não a da sentença.",
      pena: "Súmula 471/STJ",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Três camadas: vedação (inconstitucional) → 2/5–3/5 (11.464) → 40–70% (13.964).",
        "Fato de 2005: progressão pelo 112 antigo (**1/6**), não 2/5.",
        "Fato de 2018: 2/5 ou 3/5. Fato de 2021: 112 na redação Anticrime.",
      ],
      pegadinha: [
        "«Hediondo nunca progride» — morto desde 2006.",
        "«471 manda aplicar 2/5 ao fato de 2004» — faz o **oposto**: LEP antiga.",
        "«Anticrime retroage porque é norma de execução» — fração **maior** não retroage.",
      ],
      exemplo: [
        "Tráfico de 2004, condenação em 2012: progressão com 1/6 (471 + 82.959), não 2/5 da 11.464 nem 40% do Anticrime.",
      ],
      macete:
        "**471 = fato velho, fração velha (1/6).** A data do crime escolhe a era: 82.959 → 11.464 → 13.964.",
    },
    {
      id: "ju-hc-118533",
      ref: "HC 118.533/STF · 2016",
      nome: "Tráfico privilegiado não é hediondo",
      contexto:
        "O STJ tinha a Súm. 512: o § 4º do 33 não afastava a hediondez. O Plenário do STF, em 2016, virou a mesa. A 512 foi **cancelada** (Pet 11.796, 23/11/2016).",
      dispositivo: [
        "📋 HC 118.533/STF (Plenário, 2016). O tráfico privilegiado (art. 33, § 4º, da Lei 11.343/2006) ==não é crime equiparado a hediondo==.",
        "Súm. 512/STJ: «o § 4º não afasta a hediondez» — ==CANCELADA==.",
      ],
      notaDispositivo:
        "Consequências de prova: progressão comum (não 40–70%), livramento nas regras gerais, possibilidade de restritivas (HC 97.256/STF). O caput do 33 **continua** hediondo. Os quatro requisitos do § 4º são cumulativos.",
      pena: "Não hediondo",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Privilegiado **não** hediondo (118.533).",
        "512 **cancelada** — questão que a cita como vigente está desatualizada.",
        "Progressão: art. 112 **comum**, não as fatias hediondas.",
      ],
      pegadinha: [
        "«Súm. 501: privilegiado continua hediondo» — 501 é **combinação de leis** (6.368 × 11.343). Hediondez era a **512**.",
        "«§ 4º é hediondo porque está no 33» — o STF cortou exatamente isso.",
      ],
      exemplo: [
        "Primário, 80 g de maconha, sem facção: 33 + § 4º → pena reduzida **e** progressão 16% (primário, não hediondo), não 40%.",
      ],
      macete:
        "**118.533 tirou o carimbo. 512 é lápide.** 501 não fala nisso. Privilegiado progride como crime comum.",
    },
  ],
};
