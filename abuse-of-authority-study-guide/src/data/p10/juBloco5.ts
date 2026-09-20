import type { Bloco } from "../tipos";

export const juBloco5: Bloco = {
  id: "ju-bloco-5",
  numero: "Bloco 05",
  titulo: "Lei Maria da Penha — ADC, ADI e as cinco súmulas",
  intervalo: "Lei 11.340/2006 · ADC 19 · ADI 4.424 · Súms. 536, 542, 588, 589, 600",
  subtitulo: "Ação afirmativa · lesão incondicionada · sem 9.099 · sem coabitação",
  descricao:
    "Cinco números e dois julgados de constitucionalidade. Se a banca citar um, você devolve a frase inteira — sem misturar com a 587 (que é drogas).",
  notaProfessor: {
    titulo: "Pacote fechado da LMP",
    itens: [
      "**ADC 19/STF (2012):** arts. 1º, 33 e 41 são constitucionais (ação afirmativa; JECRIM fora).",
      "**ADI 4.424/STF (2012):** lesão (mesmo leve/culposa) no contexto da LMP = ação **pública incondicionada**; retratação da representação só em audiência (art. 16).",
      "Súmulas: **536** sem prêmio da 9.099; **542** o soco segue sozinho; **588** sem cesta; **589** sem bagatela; **600** sem morar junto.",
    ],
  },
  grupos: [
    {
      id: "ju-adc-adi",
      ref: "ADC 19 e ADI 4.424/STF · 2012",
      nome: "A LMP é constitucional — e a lesão não pede representação",
      contexto:
        "Ataques: «a lei discrimina o homem» e «lesão leve precisa de representação (CP 88 da 9.099)». O STF fechou os dois em 2012.",
      dispositivo: [
        "📋 ADC 19/STF (2012). São constitucionais os arts. ==1º== (proteção da mulher), ==33== (Juizados de Violência Doméstica) e ==41== (inegável afastamento da Lei 9.099) da Lei 11.340/2006. Ação afirmativa compatível com a igualdade (CF 5º e 226, § 8º).",
        "📋 ADI 4.424/STF (2012). A ação penal da lesão corporal resultante de violência doméstica contra a mulher é ==pública incondicionada==, ainda que leve ou culposa. O art. 16 (retratação) exige ==audiência específica==.",
      ],
      notaDispositivo:
        "Homem pode ser **vítima** de violência doméstica, mas **não** pela LMP (ação afirmativa). Duas mulheres: LMP cabe. Trans: STJ admite. 24-A hoje é reclusão **2 a 5** (14.994/2024) — não ensine 1–2.",
      pena: "ADC 19 · ADI 4.424",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Art. 41 = **9.099 não se aplica**, qualquer que seja a pena (ADC 19).",
        "Lesão doméstica contra mulher = **incondicionada** (ADI 4.424 + Súm. 542).",
        "Retratação **só em audiência** (art. 16).",
      ],
      pegadinha: [
        "«A LMP é inconstitucional porque trata homem e mulher de forma diferente» — ADC 19.",
        "«Lesão leve na LMP depende de representação, como no CP» — ADI 4.424.",
        "«12-C autoriza o delegado da capital a deferir qualquer MPU» — 12-C é **só** afastamento do lar, **só** interior sem comarca.",
      ],
      exemplo: [
        "Tapa no namorado (casal hétero): LMP **não**. Tapa na namorada: LMP + 542, incondicionada.",
      ],
      macete:
        "**ADC 19 chancela a lei. ADI 4.424 solta o soco sem representação.** 41 mata a 9.099.",
    },
    {
      id: "ju-lmp-sumulas",
      ref: "Súms. 536, 542, 588, 589, 600/STJ",
      nome: "As cinco frases da Maria da Penha",
      contexto:
        "Cinco enunciados, cinco portas que a 9.099 e o CP tentaram reabrir. A banca corta o final.",
      dispositivo: [
        "📋 536. A suspensão condicional do processo e a transação penal ==não se aplicam== na hipótese de delitos sujeitos ao rito da Lei Maria da Penha.",
        "📋 542. A ação penal relativa à lesão corporal resultante de violência doméstica contra a mulher é ==pública incondicionada==.",
        "📋 588. A prática de crime ou contravenção contra a mulher com violência ou grave ameaça no ambiente doméstico ==impossibilita a substituição== da PPL por restritivas de direitos.",
        "📋 589. É ==inaplicável== o princípio da insignificância nos crimes ou contravenções praticados contra a mulher no âmbito das relações domésticas.",
        "📋 600. Para a configuração da violência doméstica e familiar (art. 5º), ==não se exige a coabitação== entre autor e vítima.",
      ],
      notaDispositivo:
        "536 é o irmão da ADC 19/art. 41. 542 é o irmão da ADI 4.424. 588 casa com o art. 17 da LMP e o CP 44, I. 589: um tapa não é bagatela. 600: namoro, ex, casas separadas. **587 não entra nesta lista** — 587 é tráfico interestadual.",
      pena: "Cinco súmulas",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Decore número + uma linha: 536 sem prêmio; 542 incondicionada; 588 sem cesta; 589 sem bagatela; 600 sem teto junto.",
      ],
      pegadinha: [
        "«Súm. 587: LMP dispensa coabitação» — **600**. 587 é **drogas / 40, V**.",
        "«Contravenção (viaçar) admite transação na LMP» — 536 + 41.",
        "«Ex-namorada não entra, porque não moram juntos» — 600.",
      ],
      exemplo: [
        "Ex-namorado manda 40 mensagens, moram em bairros diferentes: LMP + 600. Viaçar: 536 impede a transação.",
      ],
      macete:
        "**536-542-588-589-600.** Sem prêmio, soco sozinho, sem cesta, sem bagatela, sem morar junto. 587 é outra lei.",
    },
  ],
};
