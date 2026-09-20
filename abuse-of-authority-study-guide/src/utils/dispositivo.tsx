/* ============================================================
   Motor de formatação do dispositivo legal
   - quebra caput / parágrafos / incisos / alíneas / pena em linhas próprias
   - colore semanticamente: verbo-núcleo (âmbar), penas/prazos (vermelho),
     conceitos-chave (verde), restrições (violeta), marca-texto (âmbar)
   - marcação manual suportada:  **chave**  ~~pena~~  ^^restrição^^  ==marca==
   ============================================================ */
import type { ReactNode } from "react";

/* ---------- tipos ---------- */
export type TipoLinha = "caput" | "paragrafo" | "pena" | "inciso" | "alinea" | "texto";

export interface Segmento {
  tipo: TipoLinha;
  /** rótulo destacado no início da linha (Art. 2º, § 1º, I -, a), Pena) */
  rotulo?: string;
  /** texto remanescente */
  texto: string;
}

/* ---------- léxico ---------- */
const ROMAN = "XX|XIX|XVIII|XVII|XVI|XV|XIV|XIII|XII|XI|X|IX|VIII|VII|VI|V|IV|III|II|I";

const NUM_ESCRITO =
  "um|dois|três|tres|quatro|cinco|seis|sete|oito|nove|dez|onze|doze|quinze|vinte|trinta|quarenta";

/** conceitos-chave (verde) */
const CONCEITOS: string[] = [
  // ---- Lei 7.716/89 ----
  "discriminação ou preconceito de raça, cor, etnia, religião ou procedência nacional",
  "preconceito de raça, cor, etnia, religião ou procedência nacional",
  "raça, cor, etnia, religião ou procedência nacional",
  "raça, cor, etnia ou procedência nacional",
  "discriminação de raça, cor, etnia, religião ou procedência nacional",
  "resultantes de discriminação ou preconceito",
  "cruz suástica ou gamada",
  "divulgação do nazismo",
  "meios de comunicação social, de publicação em redes sociais, da rede mundial de computadores",
  "publicação em redes sociais",
  "rede mundial de computadores",
  "meios de comunicação social",
  "atividades esportivas, religiosas, artísticas ou culturais destinadas ao público",
  "manifestações ou práticas religiosas",
  "contexto ou com intuito de descontração, diversão ou recreação",
  "constrangimento, humilhação, vergonha, medo ou exposição indevida",
  "grupos minoritários",
  "advogado ou defensor público",
  "dignidade ou o decoro",
  "devidamente habilitado",
  "Administração Direta ou Indireta",
  "concessionárias de serviços públicos",
  "obstar a promoção funcional",
  "emprego em empresa privada",
  "estabelecimento de ensino público ou privado de qualquer grau",
  "hotel, pensão, estalagem",
  "restaurantes, bares, confeitarias",
  "estabelecimentos esportivos, casas de diversões, ou clubes sociais",
  "salões de cabeleireiros, barbearias, termas ou casas de massagem",
  "entradas sociais em edifícios públicos ou residenciais",
  "elevadores ou escada de acesso",
  "transportes públicos",
  "qualquer ramo das Forças Armadas",
  "casamento ou convivência familiar e social",
  "menor de dezoito anos",
  "abertos ao público",
  "perda do cargo ou função pública",
  "suspensão do funcionamento do estabelecimento particular",
  "prazo não superior a três meses",
  "não são automáticos",
  "declarados motivadamente na sentença",
  "destruição do material apreendido",
  "ainda antes do inquérito policial",
  "sob pena de desobediência",
  "concurso de 2 (duas) ou mais pessoas",
  "aspectos de aparência próprios de raça ou etnia",
  "promoção da igualdade racial",
  "equipamentos necessários ao empregado em igualdade de condições",
  "ascensão funcional do empregado",
  "tratamento diferenciado no ambiente de trabalho",
  "funcionário público",
  // ---- Lei 13.869/2019 ----
  "crimes de abuso de autoridade",
  "agente público, servidor ou não",
  "a pretexto de exercê-las",
  "no exercício de suas funções",
  "finalidade específica",
  "prejudicar outrem",
  "beneficiar a si mesmo",
  "mero capricho ou satisfação pessoal",
  "divergência na interpretação de lei ou na avaliação de fatos e provas",
  "administração direta, indireta ou fundacional",
  "compreendendo, mas não se limitando",
  "ainda que transitoriamente ou sem remuneração",
  "ação penal pública incondicionada",
  "ação privada subsidiária",
  "negligência do querelante",
  "retomar a ação como parte principal",
  "reincidência em crime de abuso de autoridade",
  "condicionados à ocorrência de reincidência",
  "independentes da criminal",
  "estado de necessidade",
  "legítima defesa",
  "estrito cumprimento de dever legal",
  "exercício regular de direito",
  "coisa julgada",
  "manifesta desconformidade com as hipóteses legais",
  "prisão manifestamente ilegal",
  "manifestamente ilegal",
  "condução coercitiva",
  "manifestamente descabida",
  "sem prévia intimação de comparecimento",
  "deixar injustificadamente de comunicar prisão em flagrante",
  "nota de culpa",
  "violência ou grave ameaça",
  "grave ameaça",
  "redução de sua capacidade de resistência",
  "situação vexatória",
  "produzir prova contra si mesmo",
  "direito ao silêncio",
  "sem a presença de seu patrono",
  "procedimentos desnecessários, repetitivos ou invasivos",
  "indevida revitimização",
  "identificar-se falsamente",
  "falsa identidade, cargo ou função",
  "ambos os sexos na mesma cela",
  "criança ou adolescente",
  "ambiente inadequado",
  "clandestina ou astuciosamente",
  "à revelia da vontade do ocupante",
  "sem determinação judicial",
  "prestar socorro",
  "flagrante delito",
  "inovar artificiosamente",
  "meio manifestamente ilícito",
  "prévio conhecimento de sua ilicitude",
  "à falta de qualquer indício da prática de crime",
  "atribuição de culpa",
  "antes de concluídas as apurações",
  "indisponibilidade de ativos financeiros",
  "Demorar demasiada e injustificadamente",
  "procrastinar seu andamento",
  "interceptação de comunicações telefônicas",
  "segredo da Justiça",
  "sem autorização judicial",
  "direito ou prerrogativa de advogado",
  "prisão temporária",
  "alvará de soltura",
  "medida de segurança ou de internação",
  "autoridade judiciária",
  "prazo razoável",
  "no exercício de suas funções ou a pretexto de exercê-las",
];

/** termos de pena/efeito (vermelho) */
const PENAS_TERMOS: string[] = [
  "reclusão",
  "detenção",
  "prisão simples",
  "multa",
  "proibição de frequência",
  "suspensão do funcionamento",
  "perda do cargo",
  "prestação de serviços à comunidade",
  "inabilitação",
  "destruição do material apreendido",
  "suspensão do exercício do cargo",
  "perda dos vencimentos e das vantagens",
  "pena em dobro",
  "pena aumentada",
  "pena agravada",
  "sem prejuízo da pena",
  "agravada",
  "aumentada",
];

const ESC = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/* ---------- regexes automáticas ---------- */
const RE_DURACAO = new RegExp(
  `\\b(?:de\\s+)?(?:\\d+\\s*(?:\\([^)]*\\)\\s*)?|${NUM_ESCRITO})\\s*(?:a|até|ou|–|-)\\s*(?:\\d+\\s*(?:\\([^)]*\\)\\s*)?|${NUM_ESCRITO})?\\s*(?:anos?|meses?|dias|horas)\\b`,
  "gi",
);
const RE_DURACAO_SIMPLES = new RegExp(
  `\\b(?:\\d+\\s*(?:\\([^)]*\\)\\s*)?|${NUM_ESCRITO})\\s*(?:anos?|meses?|dias|horas)\\b`,
  "gi",
);
const RE_FRACAO =
  /\b(?:[12]\/3|1\/2)\s*(?:\([^)]*\))?|\b(?:um terço|dois terços|metade|um sexto|terça parte)\b/gi;
const RE_VETO = /\((?:VETADO|Vetado)\)|\(Revogado[^)]*\)/g;
const RE_NOTA =
  /\((?:Redação dada|Incluído|Renumerado|Vigência|Parágrafo incluído|Parágrafo renumerado|Artigo incluído|NR)[^)]*\)/gi;
const RE_CONCEITOS = new RegExp(
  CONCEITOS.map((c) => ESC(c))
    .sort((a, b) => b.length - a.length)
    .join("|"),
  "gi",
);
const RE_PENAS_TERMOS = new RegExp(`\\b(?:${PENAS_TERMOS.map(ESC).join("|")})\\b`, "gi");
const RE_VERBO_INICIAL =
  /^((?:[A-Za-zÀ-ÿ]{3,}(?:ar|er|ir))(?:\s*(?:,|ou|e)\s*[A-Za-zÀ-ÿ]{3,}(?:ar|er|ir))*)/;

/* ---------- marcação manual ---------- */
const RE_MANUAL = /(\*\*[^*]+\*\*|~~[^~]+~~|\^\^[^^]+\^\^|==[^=]+==)/g;

/* ---------- divisão em linhas ----------
   Regras de fronteira (o separador evita cortes em remissões internas):
   - incisos/alíneas: só após ";" ou ":" (ou no início)
   - Pena: após ".", ";" ou ":"
   - Art./§/Parágrafo único: no início, após "." , "…", ")", "»" ou "·"      */
const RE_SPLIT = new RegExp(
  [
    `(^|[;:]\\s+)((?:${ROMAN})\\s*[-–—]\\s*|[a-z]\\)\\s*)`,
    `(^|[;:.]\\s+)(Pena\\s*[-–—:]\\s*)`,
    `(^|[.)…«·]\\s*|\\.\\s+)(Art\\.\\s*\\d+[^\\s.,;]*\\.?|§\\s*\\d[^\\s.,;]*\\.?|Parágrafo único\\.?)`,
  ].join("|"),
  "g",
);

function classificar(label: string): TipoLinha {
  const l = label.trim();
  if (/^Art\./i.test(l)) return "caput";
  if (/^§/.test(l) || /^Parágrafo único/i.test(l)) return "paragrafo";
  if (/^Pena/i.test(l)) return "pena";
  if (/^[a-z]\)$/.test(l)) return "alinea";
  if (new RegExp(`^(?:${ROMAN})\\s*[-–—]$`).test(l)) return "inciso";
  return "texto";
}

export function parseDispositivo(par: string): Segmento[] {
  const s = par.replace(/\s+/g, " ").trim();

  const marks: { idx: number; label: string; contentStart: number }[] = [];
  for (const m of s.matchAll(RE_SPLIT)) {
    if (m.index === undefined) continue;
    const sep = m[1] ?? m[3] ?? m[5] ?? "";
    const labelRaw = m[2] ?? m[4] ?? m[6] ?? "";
    if (!labelRaw.trim()) continue;
    const idx = m.index + sep.length;
    marks.push({ idx, label: labelRaw.trim(), contentStart: idx + labelRaw.length });
  }

  if (marks.length === 0) return [{ tipo: "texto", texto: s }];

  const segs: Segmento[] = [];
  const head = s.slice(0, marks[0].idx).replace(/[\s·;]+$/, "").trim();
  if (head) segs.push({ tipo: "texto", texto: head });

  for (let i = 0; i < marks.length; i++) {
    const end = i + 1 < marks.length ? marks[i + 1].idx : s.length;
    const texto = s
      .slice(marks[i].contentStart, end)
      .replace(/[\s·]+$/, "")
      .replace(/;$/, "")
      .trim();
    segs.push({ tipo: classificar(marks[i].label), rotulo: marks[i].label, texto });
  }
  return segs;
}

/* ---------- colorização semântica ---------- */
interface Hit {
  start: number;
  end: number;
  cls: string;
}

function coletar(s: string): Hit[] {
  const hits: Hit[] = [];
  const push = (re: RegExp, cls: string) => {
    re.lastIndex = 0;
    for (const m of s.matchAll(re)) {
      if (m.index === undefined || !m[0].trim()) continue;
      hits.push({ start: m.index, end: m.index + m[0].length, cls });
    }
  };
  push(RE_NOTA, "dp-nota");
  push(RE_VETO, "dp-veto");
  push(RE_CONCEITOS, "dp-conceito");
  push(RE_DURACAO, "dp-pena");
  push(RE_DURACAO_SIMPLES, "dp-pena");
  push(RE_FRACAO, "dp-pena");
  push(RE_PENAS_TERMOS, "dp-pena");

  // mais longo primeiro no mesmo início; depois remove sobreposições
  hits.sort((a, b) => a.start - b.start || b.end - b.start - (a.end - a.start));
  const out: Hit[] = [];
  let last = -1;
  for (const h of hits) {
    if (h.start >= last) {
      out.push(h);
      last = h.end;
    }
  }
  return out;
}

function pintarTexto(s: string, keyBase: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const hits = coletar(s);
  let cursor = 0;
  hits.forEach((h, i) => {
    if (h.start > cursor)
      nodes.push(<span key={`${keyBase}t${i}`}>{s.slice(cursor, h.start)}</span>);
    nodes.push(
      <span key={`${keyBase}h${i}`} className={h.cls}>
        {s.slice(h.start, h.end)}
      </span>,
    );
    cursor = h.end;
  });
  if (cursor < s.length) nodes.push(<span key={`${keyBase}e`}>{s.slice(cursor)}</span>);
  return nodes;
}

/** marcação manual primeiro; regras automáticas nos trechos livres */
export function pintar(
  texto: string,
  keyBase: string,
  opts?: { verboInicial?: boolean },
): ReactNode[] {
  const partes = texto.split(RE_MANUAL);
  const nodes: ReactNode[] = [];
  let pendenteVerbo = !!opts?.verboInicial;

  partes.forEach((p, i) => {
    if (!p) return;
    let cls: string | null = null;
    let inner = p;
    if (p.startsWith("**") && p.endsWith("**") && p.length > 4) {
      cls = "dp-key";
      inner = p.slice(2, -2);
    } else if (p.startsWith("~~") && p.endsWith("~~") && p.length > 4) {
      cls = "dp-pena";
      inner = p.slice(2, -2);
    } else if (p.startsWith("^^") && p.endsWith("^^") && p.length > 4) {
      cls = "dp-exc";
      inner = p.slice(2, -2);
    } else if (p.startsWith("==") && p.endsWith("==") && p.length > 4) {
      cls = "dp-mark";
      inner = p.slice(2, -2);
    }

    if (cls) {
      pendenteVerbo = false;
      nodes.push(
        <span key={`${keyBase}m${i}`} className={cls}>
          {pintarTexto(inner, `${keyBase}m${i}-`)}
        </span>,
      );
      return;
    }

    if (pendenteVerbo) {
      pendenteVerbo = false;
      const semEspacos = p.replace(/^\s+/, "");
      const m = RE_VERBO_INICIAL.exec(semEspacos);
      const nEsp = p.length - semEspacos.length;
      if (m) {
        if (nEsp > 0) nodes.push(<span key={`${keyBase}s${i}`}>{p.slice(0, nEsp)}</span>);
        nodes.push(
          <span key={`${keyBase}v${i}`} className="dp-verbo">
            {m[1]}
          </span>,
        );
        nodes.push(...pintarTexto(p.slice(nEsp + m[1].length), `${keyBase}p${i}`));
        return;
      }
    }
    nodes.push(...pintarTexto(p, `${keyBase}p${i}`));
  });
  return nodes;
}

/* ---------- legenda ---------- */
export function LegendaDispositivo() {
  const itens: { cls: string; rot: string; sub: string }[] = [
    { cls: "dp-verbo", rot: "verbo-núcleo", sub: "a conduta proibida" },
    { cls: "dp-pena", rot: "penas & prazos", sub: "reclusão, detenção, frações" },
    { cls: "dp-conceito", rot: "conceito-chave", sub: "o termo que a banca troca" },
    { cls: "dp-mark", rot: "ponto decisivo", sub: "onde a questão é ganha" },
  ];
  return (
    <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-[#2b241522] pt-3">
      <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#6b5a35]">
        Leitura em cores
      </span>
      {itens.map((it) => (
        <span key={it.rot} className="inline-flex items-baseline gap-1.5 text-[10.5px] leading-none">
          <span className={it.cls === "dp-mark" ? "dp-mark" : it.cls}>{it.rot}</span>
          <span className="text-[#6b5a35]/80">· {it.sub}</span>
        </span>
      ))}
    </div>
  );
}

/* ---------- linha renderizada ---------- */
export function LinhaDispositivo({ seg, i }: { seg: Segmento; i: number }) {
  const k = `dp${i}`;
  const corpo = pintar(seg.texto, k, { verboInicial: seg.tipo !== "pena" });
  const rot = (seg.rotulo ?? "").trim();

  if (seg.tipo === "inciso") {
    return (
      <div className="dp-l dp-inc">
        <span className="dp-badge">{rot.replace(/\s*[-–—]\s*$/, "")}</span>
        <p className="dp-l-body just">{corpo}</p>
      </div>
    );
  }
  if (seg.tipo === "alinea") {
    return (
      <div className="dp-l dp-al">
        <span className="dp-badge dp-badge-al">{rot.replace(/\)$/, "")}</span>
        <p className="dp-l-body just">{corpo}</p>
      </div>
    );
  }
  if (seg.tipo === "pena") {
    return (
      <p className="dp-l dp-pena-line just">
        <span className="dp-ref">{rot.replace(/\s*[-–—:]\s*$/, "")}</span>
        {seg.texto && " — "}
        {corpo}
      </p>
    );
  }
  if (seg.tipo === "caput" || seg.tipo === "paragrafo") {
    const isParUnico = /^Parágrafo único/i.test(rot);
    return (
      <p className="dp-l dp-caput just">
        <span className="dp-ref">{isParUnico ? "Parágrafo único." : rot}</span>{" "}
        {corpo}
      </p>
    );
  }
  return <p className="dp-l just">{corpo}</p>;
}

export function DispositivoFormatado({ paragrafos }: { paragrafos: string[] }) {
  let n = 0;
  return (
    <>
      {paragrafos.map((p, pi) =>
        parseDispositivo(p).map((seg) => {
          n += 1;
          return <LinhaDispositivo key={`${pi}-${n}`} seg={seg} i={n} />;
        }),
      )}
    </>
  );
}
