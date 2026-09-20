import type { QuadroPenal } from "../tipos";

export const quadroPenasP4: QuadroPenal = {
  id: "quadro-penas-p4",
  selo: "Quadro geral · CTB Capítulo XIX",
  titulo: "Todos os crimes de trânsito em uma página",
  intro:
    "Tipo, pena, ação penal e JECRIM. «JECRIM» aqui = menor potencial ofensivo (pena máx. ≤ 2 anos) — ainda sujeito às travas do art. 291, § 1º, na lesão culposa. Suspensão/proibição de dirigir (2 meses a 5 anos) é acessória frequente e não está repetida em todas as linhas.",
  linhas: [
    { ref: "302 caput", conduta: "Homicídio culposo na direção", pena: "**Detenção 2–4 anos**", obs: "Culposo · pública incond. · SEM JECRIM · +1/3 a 1/2 (HACNP)" },
    { ref: "302 § 3º", conduta: "Idem + álcool/psicoativo", pena: "**Reclusão 5–8 anos**", obs: "Culposo qualificado · incond. · SEM JECRIM · 312-B trava art. 44, I" },
    { ref: "303 caput", conduta: "Lesão corporal culposa na direção", pena: "**Detenção 6m–2a**", obs: "Culposo · pública CONDICIONADA (repr.) · JECRIM (salvo 291 § 1º)" },
    { ref: "303 § 1º", conduta: "Lesão + majorantes do 302 § 1º", pena: "**+1/3 a 1/2**", obs: "Pode estourar 2 anos → sai do JECRIM" },
    { ref: "303 § 2º", conduta: "Lesão grave/gravíssima + álcool/psicoativo", pena: "**Reclusão 2–5 anos**", obs: "Culposo qualificado · incond. · SEM JECRIM · 312-B" },
    { ref: "304", conduta: "Omissão de socorro no sinistro", pena: "**Detenção 6m–1a ou multa**", obs: "Doloso · subsidiário · JECRIM · morte instantânea não isenta" },
    { ref: "305", conduta: "Fuga do local para evitar responsabilidade", pena: "**Detenção 6m–1a ou multa**", obs: "Doloso · incond. · JECRIM" },
    { ref: "306", conduta: "Capacidade psicomotora alterada (álcool/droga)", pena: "**Detenção 6m–3a + multa**", obs: "Doloso (formal) · incond. · SEM JECRIM · 6 dg/L ou 0,3 mg/L ou sinais" },
    { ref: "307", conduta: "Violar suspensão/proibição (e não entregar CNH)", pena: "**Detenção 6m–1a + multa**", obs: "Doloso · JECRIM · + novo prazo de suspensão" },
    { ref: "308 caput", conduta: "Racha / exibição de perícia com risco", pena: "**Detenção 6m–3a + multa**", obs: "Doloso · incond. · SEM JECRIM" },
    { ref: "308 § 1º", conduta: "Racha com lesão grave (preterdolo)", pena: "**Reclusão 3–6 anos**", obs: "Preterdoloso · SEM JECRIM" },
    { ref: "308 § 2º", conduta: "Racha com morte (preterdolo)", pena: "**Reclusão 5–10 anos**", obs: "Preterdoloso · SEM JECRIM · dolo na morte = CP 121" },
    { ref: "309", conduta: "Dirigir sem habilitação/cassado, com perigo de dano", pena: "**Detenção 6m–1a ou multa**", obs: "Doloso · perigo CONCRETO · JECRIM" },
    { ref: "310", conduta: "Entregar direção a não habilitado / cassado / doente / embriagado", pena: "**Detenção 6m–1a ou multa**", obs: "Doloso · Súm. 575 (sem perigo concreto) · JECRIM" },
    { ref: "311", conduta: "Velocidade incompatível perto de escola/hospital/aglomeração", pena: "**Detenção 6m–1a ou multa**", obs: "Doloso · perigo concreto · JECRIM · NÃO é «entregar a bêbado»" },
    { ref: "312", conduta: "Inovar artificiosamente a cena do sinistro com vítima", pena: "**Detenção 6m–1a ou multa**", obs: "Doloso · JECRIM · NÃO é licitação" },
    { ref: "291 § 1º", conduta: "(não é crime) — trava do JECRIM na lesão culposa", pena: "—", obs: "Álcool, racha ou +50 km/h: sem 74/76/88 + inquérito" },
    { ref: "292–296", conduta: "Suspensão/proibição de dirigir", pena: "**2 meses a 5 anos**", obs: "Acessória · 296 obrigatória no reincidente · cautelar no 294" },
    { ref: "312-A", conduta: "Substitutiva, se cabível (302 a 312)", pena: "PSC em resgate/hospital", obs: "Não cria tipo · cestas genéricas fora" },
    { ref: "312-B", conduta: "Trava do art. 44, I, CP", pena: "—", obs: "Só 302 § 3º e 303 § 2º" },
  ],
  macete:
    "**JECRIM de ouro (máx. ≤ 2a):** 303 caput, 304, 305, 307, 309, 310, 311, 312. **Fora:** 302, 306, 308 e as qualificadoras da Lei Seca. Representação **só** no 303 caput «limpo». 6 e 0,3. HACNP. 575 no 310. 311 é escola; 312 é cena.",
};
