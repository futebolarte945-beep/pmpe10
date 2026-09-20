import type { DadosComparativo } from "./tipos";

export const comparativoP1: DadosComparativo = {
  id: "comparativo",
  selo: "Fechamento da Parte 01",
  rotulo: "Quadro comparativo final",
  tituloPartes: ["Abuso de Autoridade", "Tortura"],
  intro:
    "A disputa preferida das cinco bancas: quando o agente usa o poder com finalidade torta, a linha que separa os dois crimes decide a questão — sujeito, dolo, sofrimento e o carimbo de hediondo.",
  colunas: [
    { id: "abuso", titulo: "Abuso de Autoridade", sub: "Lei 13.869/2019", cor: "gold" },
    { id: "tortura", titulo: "Tortura", sub: "Lei 9.455/1997", cor: "blood" },
  ],
  linhas: [
    {
      criterio: "Diploma",
      valores: ["Lei nº 13.869/2019", "Lei nº 9.455/1997"],
    },
    {
      criterio: "Sujeito ativo",
      valores: [
        "Crime **PRÓPRIO** — somente agente público, no exercício da função ou a pretexto de exercê-la (arts. 1º e 2º)",
        "Crime **COMUM** — qualquer pessoa, inclusive o particular sem vínculo funcional (art. 1º, II)",
      ],
    },
    {
      criterio: "Papel do agente público",
      valores: [
        "Condição indispensável do tipo: sem a qualidade de agente, inexistente o crime",
        "Causa de **AUMENTO de pena de 1/6 a 1/3** (art. 1º, § 4º) — a qualidade funcional agrava, mas não constitui",
      ],
    },
    {
      criterio: "Elemento subjetivo",
      valores: [
        "Finalidade especial de prejudicar outrem, beneficiar a si/terceiro ou mero capricho — **P.B.C.** (art. 1º, § 1º)",
        "Especial fim de agir: constranger, obter informação/declaração/confissão, castigar, prevenir ou intimidar — além do grave sofrimento",
      ],
    },
    {
      criterio: "Sofrimento físico/mental",
      valores: [
        "**Não é exigido** — basta a conduta típica com a finalidade especial (crimes formais)",
        "**Núcleo do tipo**: intensa dor ou sofrimento, físico ou mental, é requisito da configuração",
      ],
    },
    {
      criterio: "Meio de execução",
      valores: [
        "Variado: decretar, omitir-se, divulgar, exigir, procrastinar, invadir, expor…",
        "Fechado: **violência ou grave ameaça** (art. 1º, caput)",
      ],
    },
    {
      criterio: "Penas",
      valores: [
        "**DETENÇÃO** de 3 meses–1 ano (art. 15-A), 6 meses–2 anos ou 1–4 anos, e multa; mais restritivas de direitos (art. 5º)",
        "**RECLUSÃO** de 2–8 anos (inciso I) e 1–4 anos (inciso II), e multa; resultado morte: 4–12 anos",
      ],
    },
    {
      criterio: "Hediondez e regime",
      valores: [
        "**NÃO hediondo**: detenção permite regime aberto e substituição por restritivas (arts. 5º e 55 CP)",
        "**HEDIONDO** (Lei 8.072/90, art. 1º, I): sem anistia/graza, fiança inadmissível; progressão após 40%/60%",
      ],
    },
    {
      criterio: "Ação penal",
      valores: [
        "Pública **INCONDICIONADA**; privada subsidiária regulada na própria lei (art. 3º), em 6 meses",
        "Pública **INCONDICIONADA**; subsidiária alcançada pela regra geral do CPP (arts. 5º, LIX, CF, e 38 CPP)",
      ],
    },
    {
      criterio: "Relação entre os delitos",
      valores: [
        "**Subsidiário**: cede lugar sempre que a conduta ganha contornos de grave sofrimento com fim de constranger",
        "**Prevalece** pelo conflito aparente de normas (especialidade/gravidade), absorvendo o abuso de autoridade",
      ],
    },
  ],
  macete:
    "Dois filtros para nunca mais errar: **o DISTINTIVO e a DOR**. Abuso de autoridade precisa do distintivo (agente público + finalidade P.B.C.), sem exigir dor; a tortura dispensa o distintivo, mas exige a dor intensa com finalidade de constranger. Sob abuso, detenção; sob tortura, reclusão e carimbo de hediondo.",
};
