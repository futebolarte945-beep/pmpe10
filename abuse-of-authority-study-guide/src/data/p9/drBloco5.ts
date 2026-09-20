import type { Bloco } from "../tipos";

export const drBloco5: Bloco = {
  id: "dr-bloco-5",
  numero: "Bloco 05",
  titulo: "Colaboração premiada do art. 41 — e o que ela não é",
  intervalo: "Art. 41",
  subtitulo: "−1/3 a 2/3 · dois resultados cumulativos · sem perdão judicial nesta lei",
  descricao:
    "Um artigo só, e a banca ama compará-lo com a 12.850. Aqui o prêmio é só redução de 1/3 a 2/3, na condenação, se a colaboração for voluntária e entregar **os dois** resultados: identificar coautores/partícipes **e** recuperar (total ou parcial) o produto.",
  notaProfessor: {
    titulo: "Art. 41 não é a 12.850",
    itens: [
      "Na 11.343 o prêmio é **apenas** redução de pena (1/3 a 2/3). **Não há** perdão judicial, não há substituição por restritiva, não há acordo formalizado no molde da 12.850.",
      "Os dois resultados do 41 são **cumulativos** (identificar **e** recuperar). Na 12.850, art. 4º, basta **um** dos incisos.",
      "Voluntária ≠ espontânea: pode colaborar depois de preso. Confissão isolada, sem entregar ninguém nem produto, **não** é 41.",
    ],
  },
  grupos: [
    {
      id: "dr-art-41",
      ref: "Art. 41",
      nome: "Delação da Lei de Drogas",
      contexto:
        "Causa de diminuição da 3ª fase, para indiciado ou acusado, no caso de condenação. Convive com o § 4º do 33 (são fundamentos diferentes: um é perfil do agente; o outro é colaboração útil).",
      dispositivo: [
        "Art. 41. O indiciado ou acusado que colaborar ==voluntariamente== com a investigação policial e o processo criminal na ==identificação dos demais coautores ou partícipes== do crime ==e== na ==recuperação total ou parcial do produto== do crime, no caso de condenação, terá pena reduzida de ==um terço a dois terços==.",
      ],
      notaDispositivo:
        "Frações iguais às do § 4º (1/3 a 2/3), mas requisitos outros. STJ: os requisitos são cumulativos; apontar a droga na própria casa, sem abrir a rede, não basta. 12.850: perdão, redução **até** 2/3, restritiva, acordo escrito MP/Delegado+MP, juiz homologa. Nada disso está no 41. Nada impede, no caso concreto, de se usar a 12.850 se houver organização criminosa (12.850, art. 1º) — aí o regime é o da lei especial da org. criminosa, não o 41.",
      pena: "−1/3 a 2/3 (só redução)",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Prêmio: **somente** −1/3 a 2/3.",
        "Dois resultados **e**: identificar + recuperar produto.",
        "Voluntária, indiciado ou acusado, **na condenação**.",
        "12.850: perdão / restritiva / acordo; 41: **não**.",
      ],
      pegadinha: [
        "«O 41 dá perdão judicial, como a 12.850» — **só reduz**.",
        "«Basta identificar os comparsas» — falta a **recuperação** (ainda que parcial).",
        "«Confissão = colaboração do 41» — confissão sem utilidade externa não é 41.",
        "«O 41 substitui o § 4º» — podem conviver (fases/fundamentos distintos).",
      ],
      exemplo: [
        "Réu preso entrega o financeiro, o depósito e ajuda a achar o dinheiro: **41** (1/3 a 2/3).",
        "Réu só diz «a droga é minha»: confissão, talvez atenuante, **não** 41.",
      ],
      macete:
        "**41 = identificar E recuperar, só desconto de 1/3 a 2/3.** Perdão e acordo bonito moram na **12.850**. Confissão sozinha não é prêmio.",
    },
  ],
};
