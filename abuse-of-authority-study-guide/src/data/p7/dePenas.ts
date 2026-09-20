import type { QuadroPenal } from "../tipos";

export const quadroPenasP7: QuadroPenal = {
  id: "quadro-penas-p7",
  selo: "Quadro · Lei 10.826/2003",
  titulo: "Tabela comparativa dos crimes do Estatuto",
  intro:
    "Crime, artigo, posse/porte, espécie de arma, pena, hediondez e ação. Ação penal: pública incondicionada em todos. Hediondo, depois do Anticrime: só 16 § 2º (proibido), 17 e 18.",
  linhas: [
    { ref: "12", conduta: "Posse irregular de uso permitido", pena: "**Detenção 1–3** + multa", obs: "Posse (casa/trabalho) · permitido · **não** hediondo · AP incond. · não JECRIM" },
    { ref: "13", conduta: "Omissão de cautela (menor / def. mental) + PU 24 h", pena: "**Detenção 1–2** + multa", obs: "Posse (cautela) · qualquer · **não** · incond. · **JECRIM** · culposo" },
    { ref: "14", conduta: "Porte ilegal de uso permitido (verbos)", pena: "**Reclusão 2–4** + multa", obs: "Porte · permitido · **não** · incond. · PU inafiançável **caiu** (ADI 3.112)" },
    { ref: "15", conduta: "Disparo / acionar munição (habitado, via)", pena: "**Reclusão 2–4** + multa", obs: "Nem posse nem porte · — · **não** · incond. · subsidiário · ADI 3.112" },
    { ref: "16 caput", conduta: "Posse ou porte de uso **restrito**", pena: "**Reclusão 3–6** + multa", obs: "Posse **e** porte · restrito · **NÃO hediondo** · incond." },
    { ref: "16 § 1º", conduta: "Equiparados (raspada, explosivo, entregar a menor…)", pena: "**Reclusão 3–6** + multa", obs: "Conforme o inciso · — · **NÃO** (Súm. 668 na raspada de permitido) · incond." },
    { ref: "16 § 2º", conduta: "Condutas do 16 com uso **proibido**", pena: "**Reclusão 4–12**", obs: "Posse/porte · proibido · **HEDIONDO** (8.072 PU II) · incond." },
    { ref: "17", conduta: "Comércio ilegal (atividade comercial/industrial)", pena: "**Reclusão 6–12** + multa", obs: "Comércio · qualquer · **HEDIONDO** (PU III) · incond. · +½ se restrito/proibido (19)" },
    { ref: "18", conduta: "Tráfico internacional (importar/exportar/favorecer)", pena: "**Reclusão 8–16** + multa", obs: "Tráfico · qualquer · **HEDIONDO** (PU IV) · incond. · +½ se restrito/proibido (19)" },
    { ref: "19", conduta: "Majorante de 17 e 18 (proibido/restrito)", pena: "**+ ½**", obs: "Só 17 e 18 · não pega 12/14/16" },
    { ref: "20", conduta: "Majorante: agente do 6º/7º/8º ou reincidência específica", pena: "**+ ½**", obs: "Pega 14, 15, 16, 17 e 18 · **não** é org. criminosa · 12/13 fora" },
    { ref: "21", conduta: "Vedação de liberdade provisória (16, 17, 18)", pena: "—", obs: "**Inconstitucional** (ADI 3.112)" },
    { ref: "21-A", conduta: "12, 14 ou 16 + tráfico de drogas (Lei 15.358/2026)", pena: "**+ 2/3**", obs: "Nexo com a 11.343" },
  ],
  macete:
    "**12 detém na gaveta (1–3). 14 reclusa na rua (2–4). 16 restrito 3–6 comum; proibido 4–12 hediondo.** 17 (6–12) e 18 (8–16) **são** hediondos. **Restrito não.** Tudo incondicionado. 21 = ADI.",
};
