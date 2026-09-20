import type { DadosComparativo } from "../tipos";

export const comparativoP4: DadosComparativo = {
  id: "comparativo-p4",
  selo: "Fechamento da Parte 04",
  rotulo: "Culpa limpa × Lei Seca × Dolo / racha",
  tituloPartes: ["Culposo «limpo»", "Álcool (Lei Seca)", "Dolo eventual / racha"],
  intro:
    "Três portas para o mesmo atropelamento. A banca troca a chave: ou você está no 302/303 caput (JECRIM ou detenção curta), ou no § 3º/§ 2º da 13.546 (reclusão, 312-B), ou no Júri / 308 §§. Embriaguez sozinha não é dolo; racha com indiferença pode ser.",
  colunas: [
    { id: "limpo", titulo: "Culpa limpa", sub: "302/303 caput", cor: "gold" },
    { id: "alcool", titulo: "Álcool no tipo", sub: "302 § 3º · 303 § 2º · 306", cor: "blood" },
    { id: "dolo", titulo: "Dolo / racha", sub: "CP 121 · 308 §§", cor: "skyy" },
  ],
  linhas: [
    {
      criterio: "Elemento subjetivo",
      valores: [
        "Culpa (imprudência, negligência, imperícia) — **confia** que não vai acontecer",
        "Culpa **qualificada** pela embriaguez (legislador de 2017) ou crime **formal** do 306",
        "Dolo direto ou **eventual** (assume o risco) · preterdolo nos §§ do 308",
      ],
    },
    {
      criterio: "Morte",
      valores: [
        "**302 caput**: detenção 2–4 + suspensão",
        "**302 § 3º**: reclusão **5–8** + suspensão · 306 absorvido",
        "**121** (Júri) ou **308 § 2º** (5–10) se não assumiu o risco",
      ],
    },
    {
      criterio: "Lesão",
      valores: [
        "**303 caput**: 6m–2a · JECRIM · representação",
        "Leve + álcool: caput + rito do 291 § 1º · Grave + álcool: **303 § 2º** (reclusão 2–5)",
        "Lesão dolosa (CP 129) ou **308 § 1º** (3–6) no racha preterdoloso",
      ],
    },
    {
      criterio: "JECRIM",
      valores: [
        "303 caput **sim** · 302 **não** (máx. 4 anos)",
        "306 **não** (máx. 3 anos) · 302 § 3º / 303 § 2º **não**",
        "308 caput **não** (máx. 3) · Júri **jamais** JECRIM",
      ],
    },
    {
      criterio: "Substitutiva (art. 44)",
      valores: [
        "Em regra **cabe** (crime culposo) · 312-A puxa para serviço de trânsito",
        "**312-B** tira o inciso I do 44 no 302 § 3º e 303 § 2º",
        "Doloso com violência: 44, I, **barra**",
      ],
    },
    {
      criterio: "Prova-chave",
      valores: [
        "Nexo + violação do dever objetivo de cuidado",
        "**6 dg/L ou 0,3 mg/L** ou sinais / vídeo / testemunha",
        "Indiferença, desafio, velocidade absurda, «se morrer, morreu»",
      ],
    },
  ],
  macete:
    "**Limpou = 302/303 caput. Bebeu = 5 a 8 ou 2 a 5, e o 306 some. Assumiu o risco = Júri.** Recusar bafômetro não prova o 306; vídeo e sinais provam. 312-B é o cadeado da substitutiva na Lei Seca que sangra.",
};
