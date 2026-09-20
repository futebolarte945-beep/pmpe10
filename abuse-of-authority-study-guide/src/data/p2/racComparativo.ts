import type { DadosComparativo } from "../tipos";

export const comparativoP2: DadosComparativo = {
  id: "comparativo-p2",
  selo: "Fechamento da Parte 02",
  rotulo: "Racismo × Injúria racial × Crime de ódio",
  tituloPartes: ["Racismo", "Injúria Racial", "Crime de Ódio"],
  intro:
    "A tríade que decide a questão: o racismo ofende a coletividade (segregar), a injúria racial ofende a pessoa determinada usando elemento racial (xingar), e o «crime de ódio» — homotransfobia e correlatos — não tem tipo próprio: entrou na Lei 7.716 pela porta do STF (ADO 26/MI 4733). Todos compartilham o trio constitucional, mas moram em endereços diferentes.",
  colunas: [
    { id: "racismo", titulo: "Racismo", sub: "Lei 7.716 · arts. 3º a 14 e 20", cor: "gold" },
    {
      id: "injuria",
      titulo: "Injúria Racial",
      sub: "Lei 7.716 · art. 2º-A (era CP 140, § 3º)",
      cor: "blood",
    },
    {
      id: "odio",
      titulo: "Crime de Ódio (equiparado)",
      sub: "Homotransfobia · STF ADO 26/MI 4733",
      cor: "skyy",
    },
  ],
  linhas: [
    {
      criterio: "Endereço legal",
      valores: [
        "Lei 7.716/89 — tipos dos **arts. 3º a 14** (discriminação em cenários) e **art. 20** (praticar, induzir, incitar)",
        "**Art. 2º-A** da Lei 7.716 (Lei 14.532/2023); até 2023, **CP, art. 140, § 3º**",
        "**Sem tipo próprio**: condutas homofóbicas/transfóbicas aplicam-se à Lei 7.716 **por equiparação** (STF, ADO 26/MI 4733, 2019), até o Congresso legislar",
      ],
    },
    {
      criterio: "Bem jurídico & vítima",
      valores: [
        "Igualdade e dignidade da **coletividade** — vítima indeterminada (o grupo), ainda que haja pessoa atingida",
        "**Honra subjetiva** (dignidade/decoro) de **pessoa determinada**, com reverberação coletiva por equiparação ao racismo",
        "Dignidade/igualdade da coletividade **LGBTI+** e de seus membros individualmente",
      ],
    },
    {
      criterio: "Conduta típica",
      valores: [
        "**Segregar, excluir, impedir** (arts. 3º–14) ou **praticar/induzir/incitar** discriminação ou preconceito (art. 20)",
        "**Injuriar** alguém ofendendo-lhe a dignidade ou o decoro **em razão de raça, cor, etnia ou procedência nacional**",
        "As mesmas condutas do art. 20 (e dos arts. 3º–14) motivadas por **orientação sexual ou identidade de gênero** — elemento que o texto legal NÃO lista",
      ],
    },
    {
      criterio: "Religião no meio",
      valores: [
        "**Entra** (art. 1º e art. 20: religião é motivo do racismo); violência contra prática religiosa → **art. 20, § 2º-B**",
        "**Não entra**: injúria por elemento religioso ficou no **CP, art. 140, § 3º** (reclusão 1–3 + multa, ação condicionada à representação)",
        "LGBTIfobia com ofensa individual: a doutrina adapta a equiparação — injúria homofóbica tende ao tratamento do racismo (2º-A) na jurisprudência em formação",
      ],
    },
    {
      criterio: "Pena-base",
      valores: [
        "Art. 20: **reclusão 1–3 + multa**; §§ 1º e 2º: **2–5 + multa**; § 2º-A: **2–5 + proibição de frequência (3 anos)**; arts. 3º–14: **1–3, 2–4, 2–5 ou 3–5** (sem multa)",
        "**Reclusão 2–5 + multa**; parágrafo único: **+1/2** se concurso de 2 ou mais pessoas",
        "A do tipo equiparado (em regra, art. 20: **1–3 + multa**, com as qualificadoras aplicáveis)",
      ],
    },
    {
      criterio: "Majorantes de 2023",
      valores: [
        "**Art. 20-A** (recreação/descontração: +1/3 a 1/2 — vale para toda a lei) e **20-B** (funcionário público: só arts. 2º-A e 20)",
        "**20-A** e **20-B** (o 2º-A está listado expressamente no 20-B) + o **parágrafo único** próprio (concurso de pessoas, +1/2)",
        "**20-A** alcança «os crimes previstos nesta Lei» — logo, incide também sobre os equiparados",
      ],
    },
    {
      criterio: "Ação penal",
      valores: [
        "Pública **incondicionada**",
        "Pública **incondicionada** (pós-2023; antes, condicionada à representação — Lei 12.033/2009 no CP)",
        "Pública **incondicionada**",
      ],
    },
    {
      criterio: "Prescrição & fiança",
      valores: [
        "**Imprescritível e inafiançável** (CF, art. 5º, XLII)",
        "**Imprescritível e inafiançável** — STF, **HC 154.248** (2021): espécie de racismo",
        "**Imprescritível e inafiançável** — consequência direta da equiparação (ADO 26)",
      ],
    },
    {
      criterio: "Hediondez",
      valores: [
        "**NÃO** é hediondo (Lei 8.072/90 não o lista)",
        "**NÃO** é hediondo",
        "**NÃO** é hediondo",
      ],
    },
    {
      criterio: "Exemplo-canônico",
      valores: [
        "Clube que proíbe a entrada de negros (art. 9º) ou panfleto que prega a expulsão de nordestinos (art. 20)",
        "Chamar alguém de «macaco» numa fila — ofensa individual com elemento racial",
        "Demitir funcionário por ser gay; barrar casal homoafetivo em pousada (art. 7º via ADO 26)",
      ],
    },
  ],
  macete:
    "Três irmãos na mesma casa: o **Racismo** ofende a todos (coletividade — segrega), a **Injúria Racial** ofende alguém (honra individual com elemento racial — xinga), o **Crime de Ódio** ofende um grupo que o legislador não listou (o STF abriu a porta — ADO 26). Os três dividem a fechadura: **incondicionada, inafiançável, imprescritível — e nenhum é hediondo**.",
};
