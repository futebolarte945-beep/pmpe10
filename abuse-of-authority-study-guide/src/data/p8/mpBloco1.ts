import type { Bloco } from "../tipos";

export const mpBloco1: Bloco = {
  id: "mp-bloco-1",
  numero: "Bloco 01",
  titulo: "Quem a lei protege e o que é violência",
  intervalo: "Arts. 1º ao 7º",
  subtitulo: "Vítima mulher · agressor qualquer · cinco formas · sem coabitação",
  descricao:
    "A LMP não cria o homicídio nem a lesão: ela desenha o contexto. Art. 5º = violência baseada no gênero, no âmbito da unidade doméstica, da família ou de relação íntima de afeto. Art. 7º = as cinco formas (FPS-PM). Sem isso, a banca troca sujeito, troca teto e troca JECRIM.",
  notaProfessor: {
    titulo: "A lei não é «qualquer briga de casal»",
    itens: [
      "**Vítima: mulher** (gênero feminino). ADC 19/STF: ação afirmativa constitucional — homem ofendido **não** puxa a LMP (usa o CP/LCP comum).",
      "**Agressor: homem ou mulher.** Duas mulheres (relação homoafetiva): **cabe**. Dois homens: **não cabe** (não há vítima mulher).",
      "**Mulher trans:** STJ (REsp 1.977.124 / Inf. 732): «mulher trans mulher é» — aplica-se a LMP. Não se exige cirurgia nem retificação de prenome como condição.",
      "**Súmula 600/STJ:** não se exige **coabitação**. Namoro, ex-namoro e «já não moram juntos» entram se houver intimidade/afeto (5º, III e PU).",
    ],
  },
  grupos: [
    {
      id: "mp-art-1-4",
      ref: "Arts. 1º a 4º",
      nome: "Fundamento, titularidade e interpretação",
      contexto:
        "1º ancora a lei no art. 226, § 8º, da CF e nas convenções (CEDAW e Belém do Pará). 2º e 3º são o catálogo de direitos. 4º manda interpretar em favor da mulher em situação de violência.",
      dispositivo: [
        "Art. 1º Esta Lei cria mecanismos para coibir e prevenir a violência doméstica e familiar contra a ==mulher==, nos termos do ==art. 226, § 8º, da CF==, da CEDAW e da Convenção de Belém do Pará; cria os Juizados de Violência Doméstica e Familiar contra a Mulher; e estabelece assistência e proteção.",
        "Art. 2º Toda mulher, independentemente de classe, raça, etnia, ==orientação sexual==, renda, cultura, idade e religião, goza dos direitos fundamentais…",
        "Art. 3º Direitos à vida, segurança, saúde, alimentação, educação, moradia, acesso à justiça… § 2º Cabe à família, à sociedade e ao poder público criar as condições.",
        "Art. 4º Na interpretação desta Lei, serão considerados os fins sociais a que ela se destina e, especialmente, as condições peculiares das mulheres em situação de violência doméstica e familiar.",
      ],
      notaDispositivo:
        "A LMP é lei híbrida (penal, processual, civil, administrativa). O art. 4º é o primo do LINDB 5º, com viés de gênero. «Orientação sexual» no 2º mata a tese de que lésbica está fora.",
      pena: "Normas de princípio",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Fonte constitucional: **226, § 8º** (não é só o 5º, I).",
        "Titular da proteção: **mulher** (gênero).",
        "Art. 4º = interpretação **pró-ofendida**.",
      ],
      pegadinha: [
        "«Homem agredido pela mulher entra na LMP por isonomia (5º, I, CF)» — **ADC 19**: a lei é constitucional **justamente** por tratar a mulher de forma distinta.",
        "«LMP só vale para esposa» — o 2º lista orientação sexual; o 5º pega namoro e família.",
      ],
      exemplo: [
        "Marido agride a esposa: LMP. Esposa agride o marido: **CP comum**, sem JUVIDF, sem MPU da 11.340.",
      ],
      macete:
        "**A vítima tem que ser mulher. O agressor pode ser qualquer um.** Isonomia aqui é ação afirmativa (ADC 19), não «vale para os dois».",
    },
    {
      id: "mp-art-5",
      ref: "Art. 5º",
      nome: "Os três âmbitos — e a coabitação que a Súmula 600 enterrou",
      contexto:
        "Violência doméstica e familiar = qualquer ação ou omissão **baseada no gênero** que cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral ou patrimonial, no âmbito de I unidade doméstica, II família ou III relação íntima de afeto (o agressor conviva ou tenha convivido, independentemente de coabitação).",
      dispositivo: [
        "Art. 5º Configura violência doméstica e familiar contra a mulher qualquer ação ou omissão ==baseada no gênero== que lhe cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral ou patrimonial:",
        "I – no âmbito da ==unidade doméstica== (espaço de convívio permanente, com ou sem vínculo familiar, inclusive as esporadicamente agregadas);",
        "II – no âmbito da ==família== (comunidade formada por indivíduos que são ou se consideram aparentados, unidos por laços naturais, por afinidade ou por vontade expressa);",
        "III – em qualquer ==relação íntima de afeto==, na qual o agressor conviva ou tenha convivido com a ofendida, independentemente de coabitação.",
        "Parágrafo único. As relações pessoais enunciadas neste artigo independem de ==orientação sexual==.",
      ],
      notaDispositivo:
        "Três portas: casa, parentesco/afinidade, afeto. Empregada doméstica agregada (I) cai em prova. Sogro/cunhada (II) também. Namoro e ex (III) — Súm. 600 confirma: **não exige morar junto**. «Baseada no gênero» é o filtro: briga de trânsito entre desconhecidos, ainda que a vítima seja mulher, **não** é LMP.",
      pena: "Norma de incidência",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Três âmbitos: **doméstico, familiar, íntimo de afeto**.",
        "**Independe de coabitação** (5º, III + Súm. 600).",
        "PU: independe de **orientação sexual**.",
        "Filtro: violência **de gênero** (não qualquer ofensa a mulher).",
      ],
      pegadinha: [
        "«Ex-namorado que nunca morou junto está fora» — **dentro** (III + 600).",
        "«Filho maior que agride a mãe: não é LMP, porque não é casal» — é **família** (II).",
        "«Dois homens em união estável: LMP por analogia» — **não**. Falta vítima mulher.",
      ],
      exemplo: [
        "Ex-namorado, cada um na sua casa, persegue a mulher no Instagram e na porta do trabalho: **5º, III**.",
        "Nora agride a sogra na casa da família: **5º, II** (e a vítima é mulher).",
        "Mulher trans agredida pela companheira: LMP (STJ) + 5º, III + PU.",
      ],
      macete:
        "**Casa, parentes ou afeto — e não precisa ter morado junto (600).** Gênero é o filtro. Dois homens saem da foto. Trans entra.",
    },
    {
      id: "mp-art-6-7",
      ref: "Arts. 6º e 7º",
      nome: "Direito humano e as cinco formas (FPS-PM)",
      contexto:
        "6º: a violência doméstica é violação dos direitos humanos (puxa tratados e, em tese, deslocamento da Justiça comum em casos de falha estatal — mas a banca cobra a frase). 7º: formas não taxativas na prática de prova, mas o rol é o que cai.",
      dispositivo: [
        "Art. 6º A violência doméstica e familiar contra a mulher constitui uma das formas de ==violação dos direitos humanos==.",
        "Art. 7º São formas de violência doméstica e familiar contra a mulher, entre outras:",
        "I – ==física==: qualquer conduta que ofenda a integridade ou saúde corporal;",
        "II – ==psicológica==: dano emocional, diminuição da autoestima, controle, isolamento, vigilância, chantagem, ridicularização, exploração, limitação do direito de ir e vir, ou qualquer outro meio que prejudique a saúde psicológica (redação ampliada pela Lei 13.772/2018 — divulgação de cena de nudez, etc.);",
        "III – ==sexual==: constranger a presenciar, a manter ou a participar de relação sexual não desejada, impedir o uso de contraceptivo, forçar gravidez/aborto, limitar direitos sexuais e reprodutivos;",
        "IV – ==patrimonial==: retenção, subtração, destruição de objetos, instrumentos de trabalho, documentos, bens, valores e direitos ou recursos econômicos;",
        "V – ==moral==: calúnia, difamação ou injúria.",
      ],
      notaDispositivo:
        "FPS-PM. Patrimonial (esconder o cartão, quebrar o celular) é LMP mesmo sem hematoma. Moral = crimes contra a honra no contexto do 5º. Psicológica ganhou o CP 147-B (Lei 14.188/2021) — tipo penal próprio, mas a forma do 7º, II, continua. «Entre outras»: o rol é exemplificativo.",
      pena: "Formas · tipos penais no CP/LCP",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Cinco formas: **Física, Psicológica, Sexual, Patrimonial, Moral** (FPS-PM).",
        "6º = violação de **direitos humanos**.",
        "Patrimonial e moral **dispensam** lesão corporal.",
      ],
      pegadinha: [
        "«Sem soco não há LMP» — psicológica, patrimonial e moral bastam.",
        "«Injúria entre cônjuges é só 140 do CP, sem JUVIDF» — é **moral** (7º, V) no contexto do 5º.",
      ],
      exemplo: [
        "Marido esconde a identidade e o cartão da esposa para ela não trabalhar: **patrimonial** (7º, IV).",
        "Companheira xinga a outra de «vadia» no grupo da família: **moral** + 5º, III.",
      ],
      macete:
        "**FPS-PM: Física, Psicológica, Sexual, Patrimonial, Moral.** Hematoma não é requisito. 6º carimba: é direito humano.",
    },
  ],
};
