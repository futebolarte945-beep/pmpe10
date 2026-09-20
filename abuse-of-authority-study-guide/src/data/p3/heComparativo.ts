import type { DadosComparativo } from "../tipos";

export const comparativoP3: DadosComparativo = {
  id: "comparativo-p3",
  selo: "Fechamento da Parte 03",
  rotulo: "Antes × Pacote Anticrime × Marco Antifacção",
  tituloPartes: ["Até jan/2020", "Anticrime (2020-2026)", "Antifacção (desde 24/03/2026)"],
  intro:
    "Três regimes de progressão convivem nas execuções de hoje — a data do fato escolhe a coluna. A Lei 15.358/2026 é novatio in pejus: só pega crime de 24/03/2026 em diante. O § 2º da Lei 8.072 (2/5 e 3/5) morreu no Pacote; quem manda é o art. 112 da LEP.",
  colunas: [
    { id: "antes", titulo: "Lei 11.464/2007", sub: "Fatos até 22/01/2020", cor: "gold" },
    { id: "pacote", titulo: "Lei 13.964/2019", sub: "23/01/2020 a 23/03/2026", cor: "blood" },
    { id: "faccao", titulo: "Lei 15.358/2026", sub: "Fatos a partir de 24/03/2026", cor: "skyy" },
  ],
  linhas: [
    {
      criterio: "Onde está a regra",
      valores: [
        "Art. 2º, **§ 2º** da Lei 8.072 (depois revogado)",
        "Art. **112 da LEP**, incisos V a VIII (Pacote)",
        "Art. **112 da LEP**, mesma casa, percentuais **elevados**",
      ],
    },
    {
      criterio: "Hediondo primário (sem morte)",
      valores: ["**2/5** (40%)", "**40%**", "**70%**"],
    },
    {
      criterio: "Hediondo primário com resultado morte",
      valores: ["**2/5** (não havia faixa própria)", "**50%** · livramento vedado", "**75%** · livramento vedado"],
    },
    {
      criterio: "Reincidente em hediondo",
      valores: ["**3/5** (60%)", "**60%**", "**80%**"],
    },
    {
      criterio: "Reincidente + resultado morte",
      valores: ["**3/5**", "**70%** · livramento vedado", "**85%** · livramento vedado"],
    },
    {
      criterio: "Feminicídio primário",
      valores: [
        "Qualificadora do 121 § 2º, VI · 2/5",
        "40% (depois **55%** — Lei 14.994/2024, inciso VI-A)",
        "**75%** (VI, d) · livramento vedado · tipo autônomo 121-A",
      ],
    },
    {
      criterio: "Regime inicial",
      valores: [
        "Inicialmente fechado (após HC 82.959 e Lei 11.464)",
        "Inicialmente fechado (art. 2º, § 1º)",
        "Inicialmente fechado (sem mudança)",
      ],
    },
    {
      criterio: "Liberdade provisória / fiança",
      valores: [
        "Inafiançável; liberdade provisória **permitida** desde 2007 (sem fiança)",
        "Idem",
        "Idem · domínio social: preventiva «causa suficiente» (Lei 15.358, art. 2º § 9º)",
      ],
    },
  ],
  macete:
    "**Pergunte o ano do tiro antes da fração.** Até 2019: **2/5 e 3/5**. Anticrime: **40-50-60-70**. Antifacção: **70-75-80-85**. Morte e feminicídio **fecham o livramento**. Lei nova mais grave **não volta no tempo**.",
};
