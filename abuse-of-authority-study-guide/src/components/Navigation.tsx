import { useEffect, useState } from "react";
import {
  Bookmark,
  CheckCircle2,
  Flag,
  GitCompareArrows,
  House,
  Layers,
  LibraryBig,
  Table2,
} from "lucide-react";
import type { Bloco, ParteId } from "../data/tipos";
import { cn } from "../utils/cn";

export interface NavInfo {
  parteAtual: ParteId;
  nomeCurto: string;
  onTrocar: (p: ParteId) => void;
  onHome: () => void;
}

export interface LinkFinal {
  href: string;
  rotulo: string;
  icone: "comparativo" | "pena" | "flag";
}

const partesBotao: { id: ParteId; n: string; nome: string }[] = [
  { id: "p1", n: "01", nome: "Abuso de Autoridade" },
  { id: "p2", n: "02", nome: "Lei do Racismo" },
  { id: "p3", n: "03", nome: "Crimes Hediondos" },
  { id: "p4", n: "04", nome: "Crimes de Trânsito" },
  { id: "p5", n: "05", nome: "Lei de Tortura" },
  { id: "p6", n: "06", nome: "Ambiental 9.605" },
  { id: "p7", n: "07", nome: "Desarmamento" },
  { id: "p8", n: "08", nome: "Maria da Penha" },
  { id: "p9", n: "09", nome: "Lei de Drogas" },
  { id: "p10", n: "10", nome: "Súmulas STF/STJ" },
  { id: "p11", n: "11", nome: "Prisão Temporária" },
  { id: "p12", n: "12", nome: "JECrim 9.099" },
  { id: "p13", n: "13", nome: "Interceptação" },
  { id: "p14", n: "14", nome: "ORCRIM 12.850" },
  { id: "p15", n: "15", nome: "Súmulas Fase 2" },
  { id: "p16", n: "16", nome: "Quiz geral 60 Q" },
];

/* ---------- seletor de parte ---------- */
function SeletorParte({ info, compacto }: { info: NavInfo; compacto?: boolean }) {
  return (
    <div
      className={cn(
        "flex overflow-hidden rounded-md border border-line-2 bg-ink-3/70",
        compacto ? "p-0.5" : "p-1",
      )}
      role="tablist"
      aria-label="Selecionar parte do manual"
    >
      <button
        type="button"
        onClick={info.onHome}
        className={cn(
          "cursor-pointer rounded font-mono font-bold uppercase text-fade transition-colors hover:bg-ink-2 hover:text-gold-2",
          compacto ? "px-2 py-1.5" : "px-2.5 py-2",
        )}
        title="Mapa das fases"
      >
        <House className={compacto ? "h-3.5 w-3.5" : "h-4 w-4"} />
      </button>
      {partesBotao.map((p) => (
        <button
          key={p.id}
          type="button"
          role="tab"
          aria-selected={info.parteAtual === p.id}
          onClick={() => info.onTrocar(p.id)}
          className={cn(
            "cursor-pointer rounded font-mono font-bold uppercase transition-colors",
            compacto ? "px-2.5 py-1.5 text-[10px] tracking-[0.12em]" : "flex-1 px-3 py-2 text-[10.5px] tracking-[0.16em]",
            info.parteAtual === p.id
              ? "bg-gold text-[#161008]"
              : "text-fade hover:bg-ink-2 hover:text-gold-2",
          )}
        >
          {compacto ? p.n : `${p.n} · ${p.nome}`}
        </button>
      ))}
    </div>
  );
}

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  const chave = ids.join("|");
  useEffect(() => {
    setActive(ids[0] ?? "");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-18% 0px -70% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chave]);
  return active;
}

function useProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}

/* ---------------- barra móvel superior ---------------- */
export function TopBar({ info }: { info: NavInfo }) {
  const p = useProgress();
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md lg:hidden">
      <div className="flex items-center justify-between gap-3 px-5 py-3">
        <a href="#topo" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-gold text-[#161008]">
            <LibraryBig className="h-4 w-4" strokeWidth={2.4} />
          </span>
          <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-paper">
            {info.nomeCurto}
          </span>
        </a>
        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-[10px] tracking-[0.16em] text-fade sm:inline">
            {Math.round(p * 100)}%
          </span>
          <SeletorParte info={info} compacto />
        </div>
      </div>
      <div className="h-[3px] w-full bg-ink-3">
        <div
          className="h-full bg-gradient-to-r from-gold to-gold-2 transition-[width] duration-150"
          style={{ width: `${p * 100}%` }}
        />
      </div>
    </div>
  );
}

/* ---------------- trilha lateral desktop ---------------- */
export function Sidebar({
  blocos,
  info,
  linksFinais,
  footerNote,
}: {
  blocos: Bloco[];
  info: NavInfo;
  linksFinais: LinkFinal[];
  footerNote: string;
}) {
  const ids = blocos.flatMap((b) => [b.id, ...b.grupos.map((g) => g.id)]).concat(
    linksFinais.map((l) => l.href.replace("#", "")),
  );
  const active = useScrollSpy(ids);
  const p = useProgress();

  const iconeDoLink = (icone: LinkFinal["icone"]) =>
    icone === "comparativo" ? (
      <GitCompareArrows className="h-4 w-4" />
    ) : icone === "pena" ? (
      <Table2 className="h-4 w-4" />
    ) : (
      <Flag className="h-4 w-4" />
    );

  return (
    <aside className="sticky top-0 hidden h-screen w-[290px] shrink-0 flex-col border-r border-line bg-ink-2/40 lg:flex">
      <div className="border-b border-line px-6 py-6">
        <a href="#topo" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold text-[#161008]">
            <LibraryBig className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <div>
            <div className="font-mono text-[9.5px] uppercase tracking-[0.26em] text-gold">
              Penal & processual extra.
            </div>
            <div className="font-serif text-[17px] font-bold leading-tight text-paper">
              {info.nomeCurto}
            </div>
          </div>
        </a>
        <div className="mt-4">
          <SeletorParte info={info} />
        </div>
      </div>

      <nav className="flex-1 space-y-7 overflow-y-auto px-6 py-6">
        {blocos.map((b) => (
          <div key={b.id}>
            <a
              href={`#${b.id}`}
              className={cn(
                "group flex items-baseline gap-2.5 transition-colors",
                active === b.id ? "text-gold-2" : "text-paper/85 hover:text-gold-2",
              )}
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-faint group-hover:text-gold">
                {b.numero.replace("Bloco ", "B")}
              </span>
              <span className="text-[13px] font-semibold leading-snug">{b.titulo}</span>
            </a>
            <div className="mb-1 mt-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-faint">
              {b.intervalo}
            </div>
            <ul className="mt-2 space-y-[3px] border-l border-line pl-4">
              {b.grupos.map((g) => (
                <li key={g.id}>
                  <a
                    href={`#${g.id}`}
                    className={cn(
                      "flex items-center gap-2 rounded-r-sm py-[3px] text-[12.5px] transition-all",
                      active === g.id
                        ? "-ml-[17px] border-l-2 border-gold pl-[15px] font-semibold text-gold-2"
                        : "text-fade hover:text-paper",
                    )}
                  >
                    <span className="font-mono text-[10px] text-faint">{g.ref}</span>
                    <span className="truncate">{g.nome}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {linksFinais.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={cn(
              "flex items-center gap-2.5 rounded-md border border-line px-4 py-3 transition-colors hover:border-gold/40",
              active === l.href.replace("#", "")
                ? "border-gold/40 text-gold-2"
                : "text-fade",
            )}
          >
            {iconeDoLink(l.icone)}
            <span className="text-[12.5px] font-semibold">{l.rotulo}</span>
          </a>
        ))}

        <div className="flex items-center gap-2.5 rounded-md border border-gold/30 bg-gold/5 px-4 py-3 text-gold-2/90">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span className="just text-[11.5px] leading-snug">{footerNote}</span>
        </div>
      </nav>

      <div className="border-t border-line px-6 py-4">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
          <span className="flex items-center gap-1.5">
            <Bookmark className="h-3 w-3 text-gold" /> Leitura
          </span>
          <span>{Math.round(p * 100)}%</span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-ink-3">
          <div
            className="h-full rounded-full bg-gradient-to-r from-gold to-gold-2 transition-[width] duration-150"
            style={{ width: `${p * 100}%` }}
          />
        </div>
        <div className="mt-3 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
          <Layers className="h-3 w-3 text-gold/70" />
          Manual de guerra · 16 partes
        </div>
      </div>
    </aside>
  );
}
