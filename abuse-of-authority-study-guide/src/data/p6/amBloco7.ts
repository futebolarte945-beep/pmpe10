import type { Bloco } from "../tipos";

export const amBloco7: Bloco = {
  id: "am-bloco-7",
  numero: "Bloco 07",
  titulo: "Crimes contra a administração ambiental",
  intervalo: "Arts. 66 ao 69-A",
  subtitulo: "A farda que mente no licenciamento e o 69-A mais pesado que o CP 299",
  descricao:
    "Funcionário que falseia (66), que concede licença dolosamente em desacordo (67 — culpa revogada em 2025), omissão de dever ambiental (68), embaraço à fiscalização (69) e o laudo falso do 69-A (reclusão 3–6).",
  notaProfessor: {
    titulo: "Ação penal e o que esta Parte 06 não abre",
    itens: [
      "**Art. 26: ação penal pública incondicionada** em toda a Lei 9.605 — vale para fauna, flora, poluição, patrimônio e esta seção.",
      "**Art. 27:** transação penal (9.099, art. 76) nos de menor potencial ofensivo **só depois da composição do dano** (art. 74 da 9.099), salvo impossibilidade. **Art. 28** puxa a suspensão condicional do processo com laudo de reparação.",
      "Lei 15.190/2025: art. 67 agora exige **dolo** («conceder dolosamente… que sabe estar em desacordo»); o PU **culposo foi revogado**.",
      "Infrações administrativas (arts. 70+) ficam de fora deste fechamento penal — não misture multa do 75 com pena criminal.",
    ],
  },
  grupos: [
    {
      id: "am-art-66-68",
      ref: "Arts. 66 a 68",
      nome: "O funcionário no licenciamento e a omissão do garante",
      contexto:
        "66 = afirmação falsa, omissão da verdade ou sonegação de dado técnico no procedimento de autorização/licenciamento — próprio de funcionário público, reclusão 1–3. 67 = conceder a licença dolosamente em desacordo. 68 = deixar de cumprir obrigação de relevante interesse ambiental (legal ou contratual).",
      dispositivo: [
        "Art. 66. Fazer o ==funcionário público== afirmação falsa ou enganosa, omitir a verdade, sonegar informações ou dados técnico-científicos em procedimentos de autorização ou de ==licenciamento ambiental==:",
        "Pena - ~~reclusão, de um a três anos, e multa~~.",
        "Art. 67. ==Conceder dolosamente== o funcionário público licença, autorização ou permissão que ==sabe== estar em desacordo com as normas ambientais a atividades, obras ou serviços cuja realização depende de ato autorizativo do poder público: (Lei nº 15.190/2025)",
        "Pena - ~~detenção, de 1 a 3 anos, e multa~~. Parágrafo único. ==(Revogado).==",
        "Art. 68. Deixar, aquele que tiver o ==dever legal ou contratual== de fazê-lo, de cumprir obrigação de ==relevante interesse ambiental==:",
        "Pena - ~~detenção, de um a três anos, e multa~~. PU culposo: ~~detenção de três meses a um ano~~, sem prejuízo da multa.",
      ],
      notaDispositivo:
        "66 é reclusão (mente no processo); 67 é detenção (passa o carimbo sabendo que está errado). Antes de 2025 o 67 tinha culpa (3m–1a) — **revogada**. 68 não é só funcionário: o dever pode ser **contratual** (empresa de monitoramento, consultor). Culpa permanece só no 68.",
      pena: "66: recl. 1–3 · 67: det. 1–3 (só dolo) · 68: det. 1–3 / culpa 3m–1a",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "66 = funcionário + **mentira/omissão no licenciamento** (reclusão).",
        "67 = conceder **dolosamente** licença que **sabe** irregular (detenção). **Sem culpa desde 2025.**",
        "68 = dever legal **ou contratual** + obrigação de relevante interesse ambiental.",
      ],
      pegadinha: [
        "«67 culposo ainda vale, 3 meses a 1 ano» — **PU revogado** (Lei 15.190/2025).",
        "«68 só o servidor público omite» — o dever pode ser **contratual**.",
        "«66 é detenção, como o 67» — 66 é **reclusão**.",
      ],
      exemplo: [
        "Analista do órgão omite a APP no parecer de licença: **66**.",
        "Diretor assina a licença sabendo que o EIA é de outro terreno: **67**.",
        "Consultoria contratada para o monitoramento para de medir o efluente: **68** (dever contratual).",
      ],
      macete:
        "**66 mente (reclusão). 67 carimba de propósito (detenção, sem culpa).** 68 é o garante ambiental — lei ou contrato. Culpa do 67 **morreu em 2025**.",
    },
    {
      id: "am-art-69-69a",
      ref: "Arts. 69 e 69-A",
      nome: "Embaraço à fiscalização e o laudo que mente mais que o CP",
      contexto:
        "69 = obstar ou dificultar a fiscalização ambiental (detenção 1–3). 69-A = elaborar ou apresentar estudo, laudo ou relatório ambiental falso ou enganoso, inclusive por omissão, no licenciamento, concessão florestal ou outro procedimento — reclusão 3–6 (mais pesado que o CP 299, que é 1–5).",
      dispositivo: [
        "Art. 69. Obstar ou dificultar a ação ==fiscalizadora== do Poder Público no trato de questões ambientais: ~~detenção, de um a três anos, e multa~~.",
        "Art. 69-A. Elaborar ou apresentar, no licenciamento, concessão florestal ou qualquer outro procedimento administrativo, estudo, laudo ou relatório ambiental ==total ou parcialmente falso ou enganoso, inclusive por omissão==: (Lei nº 11.284/2006)",
        "Pena - ~~reclusão, de 3 a 6 anos, e multa~~.",
        "§ 1º Culposo: ~~detenção, de 1 a 3 anos~~.",
        "§ 2º Aumento de ==1/3 a 2/3== se há ==dano significativo== ao meio ambiente pelo uso da informação falsa, incompleta ou enganosa.",
      ],
      notaDispositivo:
        "69-A é o tipo mais pesado da lei inteira no mínimo (3 anos) — sai do JECRIM com folga. Sujeito: quem elabora **ou** apresenta (consultor e o empreendedor que protocola). «Inclusive por omissão» = laudo que cala o córrego. CP 299 (falsidade ideológica) = reclusão 1–5; aqui o piso e o teto **sobem**. Princípio da especialidade: no licenciamento ambiental, 69-A derrota o 299.",
      pena: "69: det. 1–3 · 69-A: recl. 3–6 / culpa det. 1–3 / +1/3 a 2/3",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "69 = **embaraço à fiscalização** (não é 68).",
        "69-A = laudo/estudo/relatório **falso ou enganoso**, inclusive omissão.",
        "Pena **3–6** (maior que CP 299 = 1–5).",
        "Culpa 1–3 det.; dano significativo +**1/3 a 2/3**.",
      ],
      pegadinha: [
        "«Laudo falso ambiental é CP 299, 1 a 5» — no procedimento ambiental é **69-A, 3 a 6**.",
        "«69-A só o técnico responde» — quem **apresenta** também.",
        "«69 é o funcionário que não licencia» — isso é **66/67**. 69 é **travar a fiscalização**.",
      ],
      exemplo: [
        "Dono da obra tranca o portão quando o Ibama chega: **69**.",
        "Consultor some com a nascente no EIA; a empresa protocola: os dois no **69-A**. Se a obra seca o córrego, +§ 2º.",
      ],
      macete:
        "**69 tranca a porta da fiscalização. 69-A mente no papel — 3 a 6, mais duro que o 299.** Omissão no laudo também conta. Culpa existe (1–3 det.).",
    },
  ],
};
