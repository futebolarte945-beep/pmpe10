import type { DadosComparativo } from "../tipos";

export const comparativoP5: DadosComparativo = {
  id: "comparativo-p5",
  selo: "Fechamento da Parte 05",
  rotulo: "Tortura × Abuso de Autoridade × Maus-tratos",
  tituloPartes: ["Tortura", "Abuso de Autoridade", "Maus-tratos"],
  intro:
    "Três crimes que a banca empilha no mesmo enunciado de delegacia. O filtro é sempre o mesmo: quem pode praticar, que dor se exige, que pena sai e se o carimbo é o da Constituição (XLIII).",
  colunas: [
    { id: "tortura", titulo: "Tortura", sub: "Lei 9.455/1997", cor: "blood" },
    { id: "abuso", titulo: "Abuso de Autoridade", sub: "Lei 13.869/2019", cor: "gold" },
    { id: "maus", titulo: "Maus-tratos", sub: "CP, art. 136", cor: "skyy" },
  ],
  linhas: [
    {
      criterio: "Sujeito ativo",
      valores: [
        "**Comum** no inciso I; **próprio** no II e no § 1º (guarda, poder, autoridade, custódia) — **não** exige agente público",
        "**Próprio**: só agente público, no exercício ou a pretexto (arts. 1º e 2º da 13.869)",
        "**Próprio**: quem tem a vítima sob sua autoridade, guarda ou vigilância (particular ou público)",
      ],
    },
    {
      criterio: "Papel do agente público",
      valores: [
        "Causa de **aumento de 1/6 a 1/3** (§ 4º, I) — agrava, não constitui",
        "Elementar do tipo: sem a qualidade, o crime **inexiste**",
        "Irrelevante para o tipo; se for agente, pode haver concurso com abuso ou tortura conforme a dor",
      ],
    },
    {
      criterio: "Elemento subjetivo",
      valores: [
        "Dolo + **fim especial**: prova/confissão, obter crime, discriminação racial/religiosa, castigo, prevenção; III = dolo de submeter reiteradamente",
        "Dolo + finalidade **P.B.C.** (prejudicar, beneficiar, capricho/prazer pessoal) — art. 1º, § 1º, da 13.869",
        "Dolo de expor a perigo a vida/saúde por meio de privação de cuidado / abuso dos meios de correção",
      ],
    },
    {
      criterio: "Sofrimento / resultado",
      valores: [
        "**Núcleo**: sofrimento físico ou mental (I) / **intenso** (II e III). Violência ou grave ameaça no I e no II",
        "**Não exige** dor — crimes formais de abuso do poder",
        "Expor a **perigo** a vida ou a saúde (não exige sofrimento intenso; se a dor explode, sobe para tortura)",
      ],
    },
    {
      criterio: "Pena-base",
      valores: [
        "**Reclusão 2–8**; omissão **detenção 1–4**; lesão grave **4–10**; morte **8–16**",
        "**Detenção** 3 meses–1 ano, 6 meses–2 anos ou 1–4 anos + multa (conforme o tipo)",
        "**Detenção 2 meses a 1 ano**, ou multa · se resulta lesão grave, 1–4 · se morte, 4–12 (136 §§)",
      ],
    },
    {
      criterio: "Hediondez / XLIII",
      valores: [
        "**Equiparada** a hediondo (CF 5º XLIII + Lei 8.072, art. 2º) · inafiançável · sem graça/anistia/indulto · inicial fechado (exceto § 2º)",
        "**NÃO** hediondo nem equiparado",
        "**NÃO** hediondo",
      ],
    },
    {
      criterio: "Perda do cargo",
      valores: [
        "**Automática** com a condenação (§ 5º) + interdição pelo **dobro** da pena",
        "Efeito **não automático**: art. 4º da 13.869 (fundamentação, e só em certas penas)",
        "Não há efeito automático próprio; vale o CP 92 se couber",
      ],
    },
    {
      criterio: "Ação penal",
      valores: [
        "Pública **incondicionada**",
        "Pública **incondicionada** (art. 3º da 13.869) + privada subsidiária própria",
        "Pública **incondicionada**",
      ],
    },
    {
      criterio: "Exemplo-canônico",
      valores: [
        "Choque para confessar; solitária ilegal; surras reiteradas na mulher (III, 2026)",
        "Delegado que prolonga o flagrante por capricho, sem sofrimento intenso (art. 9º da 13.869)",
        "Pai que deixa o filho sem comida por um dia, sem sofrimento intenso — correção abusiva leve",
      ],
    },
  ],
  macete:
    "**Distintivo, dor, detenção.** Abuso precisa do **distintivo** e dispensa a dor (detenção). Tortura dispensa o distintivo, **exige a dor** (reclusão + XLIII). Maus-tratos precisa da **guarda**, contenta-se com o **perigo** e vive no CP 136. Se a correção vira sofrimento intenso, o 136 **sobe** para o 1º, II.",
};
