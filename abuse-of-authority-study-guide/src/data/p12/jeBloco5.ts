import type { Bloco } from "../tipos";

export const jeBloco5: Bloco = {
  id: "je-bloco-5",
  numero: "Bloco 05",
  titulo: "Quem entra, quem sai e o CPP na folga",
  intervalo: "Arts. 88, 90, 90-A, 92 · Lei 10.259",
  subtitulo: "Representação no 129 · JEF · LMP · militar · sem desaforamento",
  descricao:
    "A pena máxima mede o IMPO — violência ou grave ameaça, sozinhas, **não** expulsam. Quem expulsa é lei especial (LMP 41, militar 90-A) ou a máxima > 2 anos. JEF (10.259) usa o mesmo teto de 2 anos nos crimes federais.",
  notaProfessor: {
    titulo: "Temas quentes — sem o erro do roteiro",
    itens: [
      "JEF (Lei **10.259/2001**, art. 2º): IMPO = contravenções e crimes com máxima **≤ 2 anos** ou multa. **Não** se exige, para a competência, que o crime «admita suspensão». O 89 é outro filtro (mínima ≤ 1), em qualquer juízo.",
      "Violência/grave ameaça **não** são cláusula geral de exclusão. Ameaça (147) **é** IMPO. Roubo **não** é (máxima 10). LMP **41** tira o rito, qualquer que seja a pena.",
      "Não existe **desaforamento** no JE. Complexidade ou citação falha = **remessa ao comum** (66, PU / 77, § 2º), que não é desaforamento do Júri.",
    ],
  },
  grupos: [
    {
      id: "je-art-88-90",
      ref: "Arts. 88, 90, 90-A e 92",
      nome: "Representação, militar e o CPP só na folga",
      contexto:
        "88: lesão leve e lesão culposa passam a depender de representação (além do CP). LMP + ADI 4.424 / Súm. 542: lesão na violência doméstica é **incondicionada**. 90-A: Justiça Militar fora. 92: CPP/CP subsidiários se não colidirem.",
      dispositivo: [
        "Art. 88. Além das hipóteses do CP e da legislação especial, dependerá de ==representação== a ação penal relativa aos crimes de ==lesões corporais leves e lesões culposas==.",
        "Art. 90. As disposições desta Lei não se aplicam aos processos penais cuja instrução já estiver iniciada.",
        "Art. 90-A (Lei 9.839/1999). As disposições desta Lei ==não se aplicam no âmbito da Justiça Militar==.",
        "Art. 92. Aplicam-se subsidiariamente o CP e o CPP, no que ==não forem incompatíveis== com esta Lei.",
      ],
      notaDispositivo:
        "75, PU: não oferecer representação na preliminar **não** decai — corre o prazo legal (6 meses, CP 103). 91: quando a lei passou a exigir representação, intimação em 30 dias. Desaforamento (CPP 427) é do Júri — não cole no JE.",
      pena: "Condições da ação · subsidiariedade",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "88: 129 caput e 129, § 6º pedem **representação** — salvo **LMP**.",
        "90-A: militar **fora**.",
        "92: CPP só se **não** conflitar (edital, relatórios, 3 testemunhas do 34).",
        "Sem desaforamento. Sobe complexidade → **comum**.",
      ],
      pegadinha: [
        "«Toda violência sai do JE» — a **pena** mede; 147 fica.",
        "«Lesão leve na LMP pede representação pelo 88» — **incondicionada** (ADI 4.424).",
        "«CPP se aplica inteiro» — só o que **não** brigar com a 9.099.",
      ],
      exemplo: [
        "Dois colegas, soco no bar, 129 caput: sem representação, o 88 tranca o 76. Mesmo soco do companheiro contra a mulher, no lar: LMP 41 + 4.424 — MP denuncia **sem** representação, e o rito **não** é o do JE.",
      ],
      macete:
        "**88 pede o «eu quero» na lesão leve — Maria da Penha tira esse pedido.** Militar nem entra. CPP só na folga. Desaforamento é do Júri.",
    },
    {
      id: "je-jef-10259",
      ref: "Lei 10.259/2001",
      nome: "Juizado Especial Federal — o mesmo teto de 2 anos",
      contexto:
        "Crimes federais de IMPO (caixa de correio, descaminho privilegiado quando a máxima couber, etc.) vão ao JEF Criminal. O teto é o mesmo da 11.313: máxima ≤ 2 anos ou multa. Não se soma «e que admita o 89».",
      dispositivo: [
        "Lei 10.259/2001, art. 2º. Compete ao JEF processar, conciliar e julgar as causas de competência da Justiça Federal até 60 salários (cível) e as ==infrações de menor potencial ofensivo==.",
        "Parágrafo único (redação original / sistemática com 11.313). Consideram-se IMPO as contravenções e os crimes a que a lei comine pena máxima ==não superior a 2 (dois) anos==, ou multa.",
        "Art. 1º. Aplica-se, no que couber, a Lei 9.099/1995.",
      ],
      notaDispositivo:
        "O 89 (mínima ≤ 1) pode caber **no JEF e fora dele**. Competência do JEF = máxima 2 (IMPO federal), não «crimes que admitam sursis». Tráfico internacional, descaminho caput, estelionato previdenciário típico: máximas > 2 → vara federal comum.",
      pena: "Competência federal",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "JEF criminal = IMPO **federal**, teto **2 anos**.",
        "9.099 subsidiária no JEF.",
        "89 não é requisito de **competência**.",
      ],
      pegadinha: [
        "«JEF só pega crime que admita suspensão condicional» — o filtro do 89 é **outro** (mínima 1).",
        "«No JEF o teto ainda é 1 ano» — 11.313 unificou em **2**.",
      ],
      exemplo: [
        "Furto simples em agência da Caixa (1 a 4): máxima 4 → **vara federal**, mas o 89 (mínima 1) **pode** ser proposto lá. Uso de documento falso com máxima 2? Aí sim, JEF + 76/89 conforme o caso.",
      ],
      macete:
        "**JEF = federal + máxima 2.** O 89 (mínima 1) viaja para qualquer vara. Não some os dois filtros num só.",
    },
  ],
};
