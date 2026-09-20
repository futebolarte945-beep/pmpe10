import type { DadosComparativo } from "../tipos";

export const comparativoP12: DadosComparativo = {
  id: "comparativo-p12",
  selo: "Parte 12 · 1ª leva",
  rotulo: "Composição × Transação × Sursis",
  tituloPartes: ["Composição 74", "Transação 76", "Sursis 89"],
  intro:
    "Três portas que a banca mistura. 74 às vezes extingue. 76 é pena sem denúncia. 89 é processo parado — e mede a mínima, não a máxima.",
  colunas: [
    { id: "c74", titulo: "Art. 74", sub: "Composição civil", cor: "gold" },
    { id: "c76", titulo: "Art. 76", sub: "Transação penal", cor: "blood" },
    { id: "c89", titulo: "Art. 89", sub: "Sursis processual", cor: "skyy" },
  ],
  linhas: [
    {
      criterio: "Onde",
      valores: [
        "IMPO (JE ou 60, PU no comum/Júri)",
        "IMPO (JE ou 60, PU)",
        "**Qualquer juízo** se a **mínima ≤ 1 ano** («abrangidas ou não»)",
      ],
    },
    {
      criterio: "Quando",
      valores: [
        "Audiência preliminar, **antes** da denúncia",
        "Idem — **antes** da denúncia",
        "MP propõe **ao oferecer** a denúncia. Juiz recebe e suspende",
      ],
    },
    {
      criterio: "Quem",
      valores: [
        "Partes (autor + vítima)",
        "MP (pública). Privada: **querelante** (tese). **Não** é a Súm. 696",
        "Só o **MP**. Recusa + juiz discorda = Súm. **696** → art. **28** CPP",
      ],
    },
    {
      criterio: "Efeito",
      valores: [
        "Título cível. Extingue o crime **só** se ação **privada** ou **condicionada** (PU)",
        "Pena restritiva/multa. **Sem** culpa, **sem** reincidência. 5 anos de quarentena",
        "Processo **parado** 2–4 anos. No fim, extingue (§ 5º). Prescrição **não** corre (§ 6º)",
      ],
    },
    {
      criterio: "Quebrou",
      valores: [
        "Não «quebra»: já homologou o cível",
        "STF: **denúncia**, não execução da pena combinada",
        "§ 3º **obriga** (crime / não reparar). § 4º **pode** (contravenção / resto)",
      ],
    },
    {
      criterio: "Súmula que a banca troca",
      valores: [
        "Não confundir com 60, PU (conexão)",
        "Descumprir ≠ título executivo penal",
        "**243** = concurso (mínima > 1). **337** = desclassificação. **696** ≠ querelante",
      ],
    },
  ],
  macete:
    "**74 é cheque. 76 é pena sem processo. 89 é processo no freezer.** Máxima 2 (61) × mínima 1 (89). 243 soma o 89; 60, PU leva o 76 embora.",
};
