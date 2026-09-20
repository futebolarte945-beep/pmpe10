export type Variante = "cai" | "pegadinha" | "exemplo" | "macete";

export interface Grupo {
  /** âncora/identificador */
  id: string;
  /** referência legal exibida no chip — ex.: "Art. 9º" ou "Arts. 6º e 7º" */
  ref: string;
  /** nome didático do grupo */
  nome: string;
  /** linha de contexto breve sob o título */
  contexto: string;
  /** parágrafos do dispositivo legal (texto oficial, abreviado quando indicado) */
  dispositivo: string[];
  /** observação editorial sobre o dispositivo (vetos, promulgação, alterações) */
  notaDispositivo?: string;
  /** pena-base / penalidade para o chip */
  pena?: string;
  /** bancas que mais exploram o ponto */
  bancas?: string[];
  /** 🎯 cai na prova */
  cai: string[];
  /** ⚠️ pegadinha clássica */
  pegadinha: string[];
  /** 📌 exemplo prático */
  exemplo: string[];
  /** 🧠 macete do professor */
  macete: string;
}

export interface NotaProfessor {
  titulo: string;
  itens: string[];
}

export interface Bloco {
  id: string;
  numero: string;
  titulo: string;
  intervalo: string;
  subtitulo: string;
  descricao: string;
  secoes?: { rotulo: string; ate: string }[];
  /** correção de rota: temas cobrados junto ao bloco que vivem em outros diplomas */
  notaProfessor?: NotaProfessor;
  grupos: Grupo[];
  questoes?: QuestaoQuiz[];
}

export type Letra = "A" | "B" | "C" | "D" | "E";

export interface QuestaoQuiz {
  n: number;
  banca: string;
  nivel: "fácil" | "média" | "difícil";
  lei: string;
  enunciado: string;
  alternativas: [string, string, string, string, string];
  gabarito: Letra;
  comentario: string;
  pegadinha?: string;
}

export interface BlocoFuturo {
  numero: string;
  titulo: string;
  intervalo: string;
  temas: string[];
}

export interface ParteTrilha {
  n: number;
  titulo: string;
  status: "disponivel" | "parcial" | "breve";
}

/* ---------- comparativo genérico (N colunas) ---------- */
export type CorColuna = "gold" | "blood" | "skyy" | "mint" | "viol";

export interface ColunaComparativo {
  id: string;
  titulo: string;
  sub: string;
  cor: CorColuna;
}

export interface LinhaComparativo {
  criterio: string;
  /** valores na mesma ordem das colunas; suporta **destaque** */
  valores: string[];
}

export interface DadosComparativo {
  id: string;
  selo: string;
  rotulo: string;
  tituloPartes: string[];
  intro: string;
  colunas: ColunaComparativo[];
  linhas: LinhaComparativo[];
  macete: string;
}

/* ---------- quadro de penas ---------- */
export interface LinhaPenal {
  ref: string;
  conduta: string;
  pena: string;
  obs?: string;
}

export interface QuadroPenal {
  id: string;
  selo: string;
  titulo: string;
  intro: string;
  linhas: LinhaPenal[];
  macete: string;
}

/* ---------- identificação da parte ---------- */
export type ParteId = "p1" | "p2" | "p3" | "p4" | "p5" | "p6" | "p7" | "p8" | "p9" | "p10" | "p11" | "p12" | "p13" | "p14" | "p15" | "p16";
