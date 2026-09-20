import type { DadosComparativo } from "../tipos";

export const comparativoP6: DadosComparativo = {
  id: "comparativo-p6",
  selo: "Fechamento da Parte 06 · 1ª leva",
  rotulo: "Pessoa física × Pessoa jurídica",
  tituloPartes: ["Pessoa física", "Pessoa jurídica"],
  intro:
    "O art. 3º põe a PJ no banco sem expulsar a PF. Penas, substitutiva e «pena de morte» da laranja não são o mesmo cardápio.",
  colunas: [
    { id: "pf", titulo: "Pessoa física", sub: "Arts. 2º, 6º–20, 29–37", cor: "gold" },
    { id: "pj", titulo: "Pessoa jurídica", sub: "Arts. 3º, 4º, 21–24", cor: "mint" },
  ],
  linhas: [
    {
      criterio: "Fonte",
      valores: [
        "Art. 2º (concurso + omissão do dirigente que **soube** e podia impedir)",
        "Art. 3º: decisão de representante/colegiado **no interesse/benefício** da entidade",
      ],
    },
    {
      criterio: "Dupla imputação",
      valores: [
        "Pode responder sozinha (STF RE 548.181). O PU do 3º **não exclui** — também **não exige** a PJ ao lado",
        "Pode responder **sozinha**. Denúncia só contra a PJ é válida. Ainda precisa da decisão + benefício",
      ],
    },
    {
      criterio: "Penas possíveis",
      valores: [
        "PPL (detenção/reclusão) + multa + restritivas do art. 8º (PSC, interdição, suspensão, pecuniária, recolhimento domiciliar)",
        "**Não há PPL.** Multa + restritivas do 22 + PSC do 23. Isolada, cumulativa ou alternativa (21)",
      ],
    },
    {
      criterio: "Substitutiva / sursis",
      valores: [
        "Art. 7º: culposo **ou** PPL **inferior a 4 anos**. Sursis art. 16: PPL **≤ 3 anos** (CP = 2)",
        "Não se fala em sursis de PJ. As restritivas já são o prato principal",
      ],
    },
    {
      criterio: "Proibir contratar com o Estado",
      valores: [
        "Art. 10: **5 anos** (doloso) / **3 anos** (culposo)",
        "Art. 22, III: prazo **não superior a 10 anos**",
      ],
    },
    {
      criterio: "Véu / morte da pessoa",
      valores: [
        "Responde com o próprio patrimônio. Sócio de laranja pode ser alcançado via art. 4º (ressarcimento)",
        "Art. 4º: desconsideração (teoria menor) para **reparar**. Art. 24: **liquidação forçada** se nasceu para delinquir · bens ao **Funpen**",
      ],
    },
    {
      criterio: "Exemplo-canônico",
      valores: [
        "Gerente que viu o despejo e não parou a bomba (2º) · caçador do 29 · rinha do 32",
        "Conselho que deliberou o despejo para baratear (3º) · empresa-casca liquidada (24)",
      ],
    },
  ],
  macete:
    "**Decisão de quem manda + bolso da empresa.** PF vai para a cadeia; PJ paga, para e presta serviço. **4º repara; 24 enterra.** Dupla imputação = moda velha.",
};
