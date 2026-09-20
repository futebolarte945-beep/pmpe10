import type { Bloco } from "../tipos";

export const toBloco3: Bloco = {
  id: "to-bloco-3",
  numero: "Bloco 03",
  titulo: "Extraterritorialidade, vigência e o que a lei não tem",
  intervalo: "Arts. 2º, 3º e 4º",
  subtitulo: "Quatro artigos no DOU — extradição e ação penal moram em outro endereço",
  descricao:
    "O art. 2º exporta a lei para o crime lá fora. O 3º vigora na publicação. O 4º mata o art. 233 do ECA. Extradição, competência do Júri e arts. 5º–9º: a banca inventa; você aponta o vazio.",
  grupos: [
    {
      id: "to-art-2",
      ref: "Art. 2º",
      nome: "A lei brasileira fora do Brasil",
      contexto:
        "Extraterritorialidade incondicionada e alternativa: vítima brasileira OU agente em local sob jurisdição brasileira. Não exige a entrada do agente no território (CP 7º, § 2º, a, não se aplica aqui).",
      dispositivo: [
        "Art. 2º O disposto nesta Lei aplica-se ainda quando o crime ==não tenha sido cometido em território nacional==, sendo a ==vítima brasileira== ou encontrando-se o ==agente em local sob jurisdição brasileira==.",
      ],
      notaDispositivo:
        "Duas portas (OU, não E): (1) vítima brasileira, mesmo com agente e fato no exterior; (2) agente em local sob jurisdição brasileira (embaixada, navio, aeronave, base). Não há cláusula de reciprocidade nem de dupla incriminação no artigo. É regra especial em relação ao art. 7º do CP.",
      pena: "Norma de aplicação",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "Extraterritorialidade **incondicionada** (não pede as condições do CP 7º, § 2º).",
        "Critérios **alternativos**: vítima BR **ou** agente sob jurisdição BR.",
        "Particular brasileiro torturado no exterior por agente estrangeiro: a lei brasileira **alcança** (vítima brasileira).",
      ],
      pegadinha: [
        "«Só vale se o agente for brasileiro» — o texto fala em **vítima** brasileira como uma das portas.",
        "«Precisa de o agente entrar no Brasil» — **não** está no art. 2º.",
        "«É a mesma regra do CP 7º» — o 2º é **especial** e mais largo.",
      ],
      exemplo: [
        "Brasileiro sequestrado e torturado em país vizinho por grupo local: Lei 9.455 aplica-se (vítima brasileira).",
        "Agente estrangeiro tortura alguém dentro de navio brasileiro: jurisdição brasileira (segunda porta).",
      ],
      macete:
        "**Vítima BR ou chão BR.** Um dos dois basta. Sem reciprocidade, sem «entrar no país». O CP 7º que espere do lado de fora.",
    },
    {
      id: "to-art-3-4",
      ref: "Arts. 3º e 4º",
      nome: "Vigência, o ECA e os artigos que nunca existiram",
      contexto:
        "Três linhas para fechar a lei — e um cemitério de endereços falsos: extradição, arts. 5º a 9º, «art. 8º da delação».",
      dispositivo: [
        "Art. 3º Esta Lei entra em vigor na ==data de sua publicação==.",
        "Art. 4º Revoga-se o art. 233 da Lei nº 8.069, de 13 de julho de 1990 — Estatuto da Criança e do Adolescente.",
      ],
      notaDispositivo:
        "Publicação: DOU 8/4/1997 — vigência **imediata**. O art. 233 do ECA punia «submeter criança ou adolescente sob sua autoridade, guarda ou vigilância a tortura» — foi absorvido pela 9.455 (inciso II + majorante de criança/adolescente). AÇÃO PENAL: a lei **não escreve**, logo pública **incondicionada** (regra geral). EXTRADIÇÃO: **não está nesta lei** — CF, art. 5º, LI/LII, e Lei 13.445/2017. Brasileiro nato não é extraditado; o crime de tortura **não** é político (LII). COMPETÊNCIA: justiça comum (estadual, em regra); federal se interesse da União / agente federal / vítima a bordo etc. Júri só se a morte for imputada como dolosa (121).",
      pena: "Vigência / revogação",
      bancas: ["CEBRASPE", "AOCP", "FCC", "VUNESP"],
      cai: [
        "A lei tem **4 artigos**. Cobrar art. 5º–9º = alternativa nula.",
        "Vigência na **publicação** (8/4/1997).",
        "Art. 4º = revogou o **233 do ECA**.",
        "Ação penal **pública incondicionada** (silêncio = regra geral).",
        "Extradição **não** tem artigo próprio aqui.",
      ],
      pegadinha: [
        "«Art. 7º da Lei de Tortura trata do regime» — o regime é o **§ 7º do art. 1º**.",
        "«A lei exige representação da vítima» — **incondicionada**.",
        "«Tortura com morte vai sempre ao Júri» — o § 3º preterdoloso é da **vara criminal**; Júri se o rótulo for 121.",
        "«Vacatio de 45 dias» — **não** (vigência na publicação).",
      ],
      exemplo: [
        "Questão: «Segundo o art. 8º da Lei 9.455, a extradição será concedida ainda que o extraditando seja brasileiro nato.» Gabarito: **ERRADO** — não há art. 8º; nato não é extraditado (CF 5º, LI).",
        "Questão: «O art. 233 do ECA permanece como tipo especial de tortura contra criança.» **ERRADO** — revogado pelo art. 4º.",
      ],
      macete:
        "**4 artigos. Ponto.** 3 = nasceu no DOU. 4 = matou o 233 do ECA. Ação incondicionada. Extradição e arts. 5–9 = **fantasma**. Regime fechado? Volte ao **§ 7º do 1º**, não invente art. 7º.",
    },
  ],
};
