import type { Bloco } from "../tipos";

export const mpBloco5: Bloco = {
  id: "mp-bloco-5",
  numero: "Bloco 05",
  titulo: "CPP, feminicídio, STF e as cinco súmulas",
  intervalo: "Arts. 42 ao 46 + jurisprudência",
  subtitulo: "313, III · 121-A · ADC 19 · ADI 4.424 · 536 542 588 589 600",
  descricao:
    "A LMP altera o CPP, o CP e a LEP (42–45) e entra em vigor 45 dias depois da publicação (46). O restante que a banca cobra não está no artigo: está no STF, no STJ e no feminicídio.",
  grupos: [
    {
      id: "mp-art-42-46",
      ref: "Arts. 42 a 46",
      nome: "As pontes para o CPP, o CP e a LEP",
      contexto:
        "42 aponta para a preventiva. 43 altera o 313 do CPP (inciso III — crime envolvendo violência doméstica e familiar contra a mulher). 44 mexe no 129, § 9º (violência doméstica no CP). 45 — LEP, comparecimento a programas. 46 — vacatio de 45 dias.",
      dispositivo: [
        "Art. 42. O art. 313 do CPP passa a vigorar acrescido do inciso III: se o crime envolver ==violência doméstica e familiar contra a mulher==, nos termos da legislação específica, para garantir a execução das medidas protetivas de urgência.",
        "Art. 43 / 44. Alterações no CPP (inquérito) e no CP 129, § 9º (lesão no âmbito doméstico — pena hoje agravada pelas reformas posteriores, inclusive 14.994/2024 quando por razão de sexo feminino).",
        "Art. 45. LEP: o juiz poderá determinar comparecimento do agressor a programas de recuperação e reeducação.",
        "Art. 46. Esta Lei entra em vigor 45 dias após sua publicação.",
      ],
      notaDispositivo:
        "313, III é **mais um fundamento** de preventiva — não é automática e **não vale para contravenção** (STJ). Feminicídio: de 2015 a 2024 era 121, § 2º, VI; a Lei 14.994/2024 criou o **art. 121-A** (crime autônomo, 20–40 anos) e o tornou hediondo. Razões de sexo feminino = violência doméstica/familiar **ou** menosprezo/discriminação. A LMP continua sendo o contexto do inciso I do § 1º do 121-A.",
      pena: "Pontes legislativas",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "Preventiva: **CPP 313, III** (crime + VD contra a mulher + MPU / necessidade).",
        "Feminicídio **autônomo**: CP **121-A** (Lei 14.994/2024), hediondo, 20–40.",
        "Vacatio da LMP: **45 dias** (46).",
      ],
      pegadinha: [
        "«Toda LMP dá preventiva obrigatória» — 313, III é hipótese, ainda pede 312.",
        "«Feminicídio ainda é só a qualificadora do 121, § 2º, VI» — **121-A** desde 2024.",
      ],
      exemplo: [
        "Descumpriu MPU e ameaçou de novo: 24-A + preventiva 313, III.",
        "Marido mata a esposa no contexto doméstico: **121-A** (não 121 caput).",
      ],
      macete:
        "**313, III abre a preventiva (crime, não contravenção).** Feminicídio agora é **121-A, 20 a 40, hediondo.** LMP é o chão; o CP é o teto.",
    },
    {
      id: "mp-stf-stj",
      ref: "ADC 19 · ADI 4.424 · STJ",
      nome: "O que o Supremo chancelou e o que o STJ sumulou",
      contexto:
        "Dois julgados de 2012 e cinco súmulas que caem cruas.",
      dispositivo: [
        "ADC 19/STF (2012): arts. 1º, 33 e 41 da LMP são ==constitucionais== (ação afirmativa; juízo próprio; 9.099 fora).",
        "ADI 4.424/STF (2012): lesão corporal em VD contra a mulher = ação ==pública incondicionada== (interpretação conforme do art. 16 c/c 41).",
        "STJ, mulher trans (Inf. 732): LMP aplica-se à mulher trans. Casal homoafetivo ==feminino==: aplica-se. Casal masculino: não.",
        "Cinco súmulas — ver o quadro de fechamento: 536, 542, 588, 589, 600.",
      ],
      notaDispositivo:
        "Decore o par ADC 19 (estrutura da lei) + ADI 4.424 (ação penal da lesão). Trans: critério de **gênero**, não de cromossomo. Súm. 589 = insignificância **não** se aplica (nem na contravenção). Súm. 588 = sem substitutiva quando violência ou grave ameaça.",
      pena: "Teses de prova",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**ADC 19** = 1º, 33, 41 OK.",
        "**ADI 4.424** = lesão incondicionada.",
        "Trans **sim**. Dois homens **não**. Duas mulheres **sim**.",
        "Cinco súmulas: 536 (sem 9.099 premial), 542 (lesão incond.), 588 (sem restritivas), 589 (sem bagatela), 600 (sem coabitação).",
      ],
      pegadinha: [
        "«STF julgou a LMP inconstitucional por quebrar a isonomia» — **ADC 19**, o contrário.",
        "«Trans só com cirurgia e retificação» — STJ **dispensa**.",
        "«Um tapa é bagatela (589 ao contrário)» — 589 **veda** insignificância.",
      ],
      exemplo: [
        "Mulher trans agredida pelo companheiro: JUVIDF + MPU + 542 se houver lesão.",
        "Dois homens, um agride o outro: vara comum, sem LMP.",
      ],
      macete:
        "**19 chancela a lei. 4.424 tira a representação da lesão.** 536-542-588-589-600: sem JECRIM premial, lesão segue, sem restritiva, sem bagatela, sem exigir teto junto. Trans entra; dois homens saem.",
    },
  ],
};
