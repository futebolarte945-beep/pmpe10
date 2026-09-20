import type { Bloco } from "../tipos";

export const racBloco1: Bloco = {
  id: "r-bloco-1",
  numero: "Bloco 01",
  titulo: "Disposições gerais & injúria racial",
  intervalo: "Arts. 1º ao 2º-A",
  subtitulo: "O alicerce: bem jurídico, os cinco preconceitos e a estrela de 2023",
  descricao:
    "Dois dispositivos explicam o sistema inteiro: o art. 1º apresenta os cinco preconceitos que a lei reprime (o «pentágono CRER-PRO») e o art. 2º-A abriga, desde a Lei 14.532/2023, o crime mais cobrado da década — a injúria racial. Quem entende o art. 1º sabe o alcance da lei; quem domina o 2º-A sabe o que o STF fez com ela.",
  notaProfessor: {
    titulo: "Correção de rota — o teto constitucional e internacional",
    itens: [
      "**CF, art. 5º, XLII**: «a prática do racismo constitui crime **inafiançável e imprescritível**, sujeito à pena de **reclusão**, nos termos da lei» — o trio constitucional é a fonte de tudo o que vem depois.",
      "**STF, ADO 26/MI 4733 (Plenário, 2019)**: enquanto o Congresso não legislar, a **homofobia e a transfobia** equiparam-se a racismo e entram na Lei 7.716 — omissão legislativa com eficácia normativa.",
      "**Convenção Interamericana contra o Racismo, a Discriminação Racial e Formas Correlatas de Intolerância** (OEA, 2013): aprovada pelo **rito do art. 5º, § 3º, da CF** (PDL 562/2020 → Decreto Legislativo 1/2021) e promulgada pelo **Decreto 10.932/2022** — status de **EMENDA CONSTITUCIONAL**. Ponto fresco e queridinho de Cebraspe e FGV.",
      "**Lei 12.735/2012**: direciona a criação de **delegacias especializadas** no combate aos crimes de discriminação — a própria Lei 7.716 a cita no cabeçalho do Planalto («Vide»).",
    ],
  },
  grupos: [
    {
      id: "r-art-1",
      ref: "Art. 1º",
      nome: "O raio de ação da lei: os cinco preconceutos",
      contexto:
        "A norma-âncora: define que TODA a lei pune crimes resultantes de discriminação ou preconceito de raça, cor, etnia, religião ou procedência nacional — o motivo racial é o combustível de cada tipo dos arts. 3º a 20.",
      dispositivo: [
        "Art. 1º Serão punidos, na forma desta Lei, os crimes resultantes de ==discriminação ou preconceito de raça, cor, etnia, religião ou procedência nacional==. (Redação dada pela Lei nº 9.459, de 15/05/97)",
        "Redação original de 1989 (superada): «Serão punidos, na forma desta Lei, os crimes resultantes de preconceitos de raça ou de cor.» — antes de 1997, só ^^raça e cor^^ entravam em campo.",
      ],
      notaDispositivo:
        "A Lei 9.459/1997 foi a grande reforma: ampliou o art. 1º (acrescentou etnia, religião e procedência nacional), deu a redação atual do art. 20 e criou o § 1º (suástica/nazismo). Rol TAXATIVO — só o STF o ampliou, por equiparação (ADO 26: orientação sexual e identidade de gênero).",
      pena: "Norma-âncora · sem pena própria",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**Cinco elementos protegidos**: raça, cor, etnia, **religião** e procedência nacional — o rol do art. 1º vale para TODOS os crimes da lei (arts. 3º a 20), que são motivados por um desses preconceitos.",
        "**Bem jurídico**: dignidade da pessoa humana + igualdade (CF, arts. 3º, IV, e 5º, caput) — tutela de dimensão **coletiva** (transindividual): mesmo com vítima determinada, a ofensa irradia para todo o grupo.",
        "**Procedência nacional** abrange **xenofobia e discriminação regional** (contra nordestinos, contra haitianos, contra venezuelanos) — exemplo clássico de prova.",
        "**STF ADO 26/MI 4733 (2019)**: homofobia/transfobia = racismo por **equiparação** (aplica-se a Lei 7.716 enquanto o Congresso não editar lei específica) — a conduta NÃO está escrita na lei; quem afirma isso, erra.",
        "**«Lei Caó»**: apelido em homenagem ao deputado **Carlos Alberto Caó de Oliveira**, autor do projeto — banca adora perguntar o apelido e o autor.",
        "**Racismo NÃO é crime hediondo**: é inafiançável e imprescritível (CF, art. 5º, XLII), mas a Lei 8.072/90 não o lista — confusão clássica.",
      ],
      pegadinha: [
        "«A lei pune apenas preconceito de raça e de cor» — **ERRADO**: esse era o texto de 1989; desde a Lei 9.459/97 são **cinco** elementos.",
        "Afirmar que a **religião** está no art. 2º-A (injúria racial) — **ERRADO**: o 2º-A lista raça, cor, etnia e procedência nacional; a **injúria religiosa** ficou no CP, art. 140, § 3º.",
        "«A homofobia foi incluída na lei por emenda» — **ERRADO**: entrou por **jurisprudência** (ADO 26), via equiparação; o texto legal não a menciona.",
        "«Racismo é crime hediondo» — **ERRADO**: inafiançável + imprescritível ≠ hediondo (sem as consequências da Lei 8.072/90).",
        "Trocar o bem jurídico por «honra» — a honra (subjetiva) é o alvo da **injúria** (art. 2º-A); o racismo atinge a **igualdade e a dignidade coletivas**.",
      ],
      exemplo: [
        "Portaria de condomínio que veta «visitantes de determinada origem nordestina»: **procedência nacional** → discriminação alcançada pela lei (arts. 11/14/20, conforme o meio).",
        "Empregador que proíbe funcionária de usar turbante religioso e a chama de «atrasada»: discriminação por **religião** → art. 20 (e, se houver ofensa individual por elemento religioso, CP 140, § 3º).",
        "Comerciante que se recusa a atender ciganos: **etnia** → art. 5º; se além de recusar prega «que saiam do bairro», também **induz/incita** → art. 20.",
        "Postagem que ensina «como impedir negros de frequentar seu clube»: **raça/cor** → art. 20, § 2º (redes sociais — 2 a 5 anos).",
      ],
      macete:
        "Pentágono **CRER-PRO**: **C**or, **R**aça, **E**tnia, **R**eligião, **PRO**cedência nacional — «é preciso CRER PRO (no preconceito) para acabar preso». E grave a ressalva: religião mora no art. 1º e no art. 20, mas NÃO se mudou para o 2º-A.",
    },
    {
      id: "r-art-2a",
      ref: "Art. 2º-A",
      nome: "Injúria racial: a estrela da Lei 14.532/2023",
      contexto:
        "O crime que migrou do Código Penal para a Lei do Racismo por força do HC 154.248/STF e da Lei 14.532/2023: ofender a dignidade ou o decoro de alguém usando elementos de raça, cor, etnia ou procedência nacional.",
      dispositivo: [
        "Art. 2º-A ==Injuriar alguém==, ofendendo-lhe a ==dignidade ou o decoro==, em razão de ^^raça, cor, etnia ou procedência nacional^^. (Incluído pela Lei nº 14.532, de 2023)",
        "Pena: ~~reclusão, de 2 (dois) a 5 (cinco) anos, e multa~~. (Incluído pela Lei nº 14.532, de 2023)",
        "Parágrafo único. A pena é ~~aumentada de metade~~ se o crime for cometido mediante ==concurso de 2 (duas) ou mais pessoas==. (Incluído pela Lei nº 14.532, de 2023)",
        "Espelho no Código Penal — o que ficou lá: «art. 140, § 3º Se a injúria consiste na utilização de elementos referentes a ^^religião^^ ou à condição de ^^pessoa idosa ou com deficiência^^: Pena – ~~reclusão, de 1 (um) a 3 (três) anos, e multa~~.» (Redação da Lei nº 14.532/2023)",
      ],
      notaDispositivo:
        "A migração de 2023: a injúria racial saiu do CP, art. 140, § 3º (detenção 1–3 anos + multa, ação condicionada à representação — Lei 12.033/2009) e entrou na Lei 7.716 com pena mais dura. O § 3º do CP sobreviveu apenas para a injúria por religião, idade ou deficiência. STJ (AgRg no AREsp 686.965/DF) já tratava a injúria racial como imprescritível antes do STF.",
      pena: "Reclusão 2–5 anos + multa · +½ (concurso de pessoas)",
      bancas: ["CEBRASPE", "FGV", "AOCP", "FCC", "VUNESP"],
      cai: [
        "**STF, HC 154.248** (Plenário, rel. Min. **Edson Fachin**, julgamento concluído em **28/10/2021**): a injúria racial é **espécie de racismo** → **imprescritível e inafiançável**. No caso, a defesa de condenada com mais de 70 anos pedia a prescrição — a ordem foi **denegada**.",
        "**Linha do tempo de prova**: Lei 9.459/97 cria o CP 140, § 3º (detenção 1–3 anos) → Lei 12.033/2009 exige **representação** → STJ AREsp 686.965 (imprescritível) → **STF HC 154.248 (2021)** → **Lei 14.532/2023** transfere para o art. 2º-A com **reclusão 2–5 anos + multa**.",
        "**Ação penal pós-2023: pública INCONDICIONADA** — a Lei 7.716 não exige representação e o art. 145, parágrafo único, do CP ficou restrito ao 140, § 3º (religião/idoso/deficiência).",
        "**Causa de aumento (parágrafo único)**: concurso de **2 ou mais pessoas** → pena **aumentada de METADE** (não é 1/3!).",
        "**Trinca de ouro**: ação pública incondicionada + **inafiançável** + **imprescritível** — mas **NÃO hediondo**.",
        "Diferença estrutural com o art. 20: a injúria ofende a **honra subjetiva de pessoa determinada** usando elemento racial; o racismo do art. 20 mira a **discriminação da coletividade** (segregar, excluir).",
      ],
      pegadinha: [
        "«A injúria racial continua prevista no art. 140, § 3º, do CP» — **ERRADO desde 11/01/2023**: está no **art. 2º-A da Lei 7.716**; o § 3º do CP ficou só com **religião, idoso e deficiência**.",
        "Trocar a fração: «a pena é aumentada de 1/3 no concurso de pessoas» — **ERRADO**, é **metade** (parágrafo único).",
        "«A Lei 14.532/2023 tornou a injúria racial hedionda» — **ERRADO**: inafiançável e imprescritível, sim; hedionda, não.",
        "«A ação penal depende de representação da vítima» — **ERRADO hoje** (incondicionada); era a regra do CP (Lei 12.033/2009) — em fato anterior a 2023, a banca precisa dizer a data da conduta: lei penal mais grave **não retroage** (CF, art. 5º, XL).",
        "Xingar alguém de «velho decrépito» ou ofender por elemento religioso → **CP, art. 140, § 3º** (reclusão 1–3 anos, **ação condicionada à representação**) — não é art. 2º-A.",
      ],
      exemplo: [
        "Cliente chama a atendente negra de «macaca» na fila do mercado: **art. 2º-A** — reclusão 2–5 anos + multa, ação incondicionada, imprescritível e inafiançável.",
        "Três colegas encurralam o entregador haitiano e zombam de sua «raça inferior»: art. 2º-A **+ parágrafo único** (concurso de 2 ou mais → **+1/2**).",
        "No grupo do prédio, morador chama o vizinho praticante de candomblé de «macumbeiro imundo»: elemento **religioso** → **CP, art. 140, § 3º** (1–3 anos, representação). Mas se o post **incita** expulsar os praticantes do condomínio → **art. 20** da Lei 7.716 (religião entra).",
        "PM, durante abordagem, manda o suspeito «voltar para a senzala»: **art. 2º-A + art. 20-B** (funcionário público no exercício da função → **+1/3 até a metade**).",
      ],
      macete:
        "A injúria **MUDOU DE CASA em 2023**: saiu do CP 140, § 3º e se instalou no 2º-A da 7.716 — **reclusão 2–5**, grupo é **+metade**, **sem fiança, sem prescrição, ação incondicionada, MAS não hedionda**. A religião ficou na casa velha (CP, 1–3 anos, com representação).",
    },
  ],
};
