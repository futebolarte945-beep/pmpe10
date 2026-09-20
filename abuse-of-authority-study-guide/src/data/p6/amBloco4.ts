import type { Bloco } from "../tipos";

export const amBloco4: Bloco = {
  id: "am-bloco-4",
  numero: "Bloco 04",
  titulo: "Crimes contra a flora",
  intervalo: "Arts. 38 ao 53",
  subtitulo: "APP, UC, fogo, balão — e o art. 42 que não é «instrumento de corte»",
  descricao:
    "A seção mais densa depois da fauna. Culpa só onde a lei escreveu (38, 38-A, 40, 41, 49). O 42 é soltar balão, não fabricar motosserra. 43 e 47 nasceram vetados. O 53 é o aumento de toda a seção (1/6 a 1/3).",
  notaProfessor: {
    titulo: "Correção de rota — o que o roteiro embaralha nesta seção",
    itens: [
      "**Art. 42 = balões** (fabricar, vender, transportar ou **soltar**). Instrumento de caça/exploração em UC é o **art. 52**. Motosserra sem licença é o **art. 51**.",
      "**Art. 45** (cortar/transformar madeira de lei em carvão) ≠ **art. 46** (receber/adquirir madeira sem exigir licença do vendedor + PU vender/transportar).",
      "**Art. 40** (Lei 9.985/2000) = dano a UC de **proteção integral**. **Art. 40-A caput: VETADO** (uso sustentável ficou sem tipo próprio neste artigo).",
      "**Arts. 43 e 47: VETADOS.** Art. 38-A (Mata Atlântica) e 50-A (terra pública/devoluta) são acréscimos de 2006.",
      "Culpa na flora: **38 PU, 38-A PU, 40 § 3º, 41 PU, 49 § 1º**. Os demais da seção são **só dolosos**.",
    ],
  },
  grupos: [
    {
      id: "am-art-38-39",
      ref: "Arts. 38, 38-A e 39",
      nome: "APP, Mata Atlântica e o corte sem papel",
      contexto:
        "38 = destruir/danificar floresta de preservação permanente (mesmo em formação) ou usá-la contra as normas. 38-A espelha o tipo na Mata Atlântica (primária ou secundária em estágio médio/avançado). 39 = cortar árvores em APP sem permissão — sem figura culposa.",
      dispositivo: [
        "Art. 38. ==Destruir ou danificar== floresta considerada de ==preservação permanente==, mesmo que em formação, ou utilizá-la com infringência das normas de proteção:",
        "Pena - ~~detenção, de um a três anos, ou multa, ou ambas~~.",
        "Parágrafo único. Se o crime for ==culposo==, a pena será ==reduzida à metade==.",
        "Art. 38-A. Destruir ou danificar vegetação primária ou secundária, em estágio avançado ou médio de regeneração, do Bioma ==Mata Atlântica==, ou utilizá-la com infringência das normas de proteção: (Lei nº 11.428/2006)",
        "Pena - ~~detenção, de 1 a 3 anos, ou multa, ou ambas~~. PU: culposo → metade.",
        "Art. 39. ==Cortar árvores== em floresta considerada de preservação permanente, ==sem permissão== da autoridade competente:",
        "Pena - ~~detenção, de um a três anos, ou multa, ou ambas~~.",
      ],
      notaDispositivo:
        "38 e 39 convivem: destruir/danificar/utilizar (38) × cortar (39). O 39 não tem parágrafo culposo — cortar «sem querer» não abre tipo. APP «mesmo que em formação» = pegadinha (não precisa estar madura). 38-A não é APP genérica: é o bioma Mata Atlântica.",
      pena: "Detenção 1–3 ou multa ou ambas · culposo = ½ (38 e 38-A)",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "APP **mesmo em formação** (38).",
        "Culpa no 38/38-A = pena **pela metade** (não é tipo autônomo com detenção própria, salvo a conta).",
        "**39 não tem culpa.**",
        "38-A = Mata Atlântica (Lei 11.428/2006).",
      ],
      pegadinha: [
        "«Cortar árvore em APP por culpa é 39 reduzido à metade» — **o 39 não tem PU culposo**.",
        "«Só APP madura entra no 38» — o texto diz **mesmo que em formação**.",
        "«38-A vale para qualquer bioma» — só **Mata Atlântica**.",
      ],
      exemplo: [
        "Trator derruba mata ciliar (APP) de propósito: **38** doloso (1–3).",
        "Mesmo trator, por imprudência no aceiro: **38 PU** (metade).",
        "Lenhador corta jatobá em APP sem licença: **39** (não 38).",
      ],
      macete:
        "**38 destrói a APP (e aceita culpa = ½). 39 corta (só dolo).** 38-A é o primo da Mata Atlântica. Formação conta.",
    },
    {
      id: "am-art-40-42",
      ref: "Arts. 40 a 42",
      nome: "UC, fogo e o balão",
      contexto:
        "40 = dano direto ou indireto a UC de proteção integral — reclusão 1–5, culpa = metade. 41 = provocar incêndio em floresta ou demais formas de vegetação (Lei 14.944/2024). 42 = o balão.",
      dispositivo: [
        "Art. 40. Causar dano ==direto ou indireto== às Unidades de Conservação e às áreas do art. 27 do Decreto 99.274/1990, independentemente da localização:",
        "Pena - ~~reclusão, de um a cinco anos~~.",
        "§ 1º UC de ==proteção integral==: estações ecológicas, reservas biológicas, parques nacionais, monumentos naturais, refúgios de vida silvestre. (Lei 9.985/2000)",
        "§ 2º Dano a espécie ameaçada no interior da UC de proteção integral = ==agravante==.",
        "§ 3º Culposo: pena ==reduzida à metade==.",
        "Art. 40-A. ==(VETADO)== o caput. Restam §§ de UC de ==uso sustentável== (definição + agravante + culpa) — sem tipo no caput.",
        "Art. 41. Provocar ==incêndio em floresta ou em demais formas de vegetação==: (Lei 14.944/2024)",
        "Pena - ~~reclusão, de dois a quatro anos, e multa~~. PU culposo: ~~detenção de seis meses a um ano, e multa~~.",
        "Art. 42. Fabricar, vender, transportar ou ==soltar balões== que possam provocar incêndios nas florestas e demais formas de vegetação, em áreas urbanas ou qualquer assentamento humano:",
        "Pena - ~~detenção de um a três anos ou multa, ou ambas~~.",
      ],
      notaDispositivo:
        "40 é reclusão (a mais alta da flora no caput, empatada com o espírito do 50-A). «Direto ou indireto» e «independentemente da localização» caem. 40-A caput vetado: APA / Flona / RPPN não entram neste tipo. 41 agora alcança «demais formas de vegetação» (não só mata/floresta). 42 é perigo: o balão que **possa** provocar incêndio — não precisa queimar nada. Não há culpa no 42.",
      pena: "40: recl. 1–5 · 41: recl. 2–4 · 42: det. 1–3",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Dano a UC de **proteção integral** = **40**, reclusão 1–5.",
        "**40-A caput vetado.**",
        "41 = fogo (dolo 2–4 recl.; culpa det. 6m–1a).",
        "**42 = balão**, dolo, detenção 1–3. Crime de **perigo**.",
      ],
      pegadinha: [
        "«Art. 42 pune fabricar instrumento para devastar flora» — **ERRADO**. 42 é **balão**. Motosserra = **51**. Petrecho em UC = **52**.",
        "«Dano em APA é art. 40» — APA é **uso sustentável**; o 40-A caput **morreu**.",
        "«Incêndio culposo no 41 é reclusão reduzida» — culpa do 41 é **detenção 6m–1a** (pena própria, não «metade»).",
      ],
      exemplo: [
        "Turista abre trilha ilegal no parque nacional e mata bromélia rara: **40** + agravante do § 2º.",
        "Fogueira sai do controle no cerrado: se dolo de incendiar, **41** caput; se culpa, **41 PU**.",
        "Festa junina solta balão sobre o bairro: **42**, mesmo que o balão apague no ar.",
      ],
      macete:
        "**40 é o parque (reclusão). 40-A é cova. 41 é fogo (2–4 / culpa 6m–1a). 42 é balão, não motosserra.** Perigo no 42: «possam provocar».",
    },
    {
      id: "am-art-44-53",
      ref: "Arts. 44 a 53",
      nome: "Areia, carvão, madeira, motosserra e o aumento da seção",
      contexto:
        "44 = extrair mineral de floresta pública ou APP. 45 = madeira de lei → carvão. 46 = comércio sem licença (comprador e, no PU, o vendedor/transportador). 48 = impedir regeneração. 50-A = desmate em terra pública. 51 = motosserra. 53 = aumento de toda a Seção II.",
      dispositivo: [
        "Art. 43. ==(VETADO).==",
        "Art. 44. Extrair de florestas de domínio público ou de preservação permanente, sem autorização, ==pedra, areia, cal ou qualquer mineral==: ~~detenção, de seis meses a um ano, e multa~~.",
        "Art. 45. Cortar ou transformar em ==carvão madeira de lei==, em desacordo com as determinações legais: ~~reclusão, de um a dois anos, e multa~~.",
        "Art. 46. ==Receber ou adquirir==, para fins comerciais ou industriais, madeira, lenha, carvão e outros produtos vegetais, ==sem exigir a licença do vendedor== e sem a via que acompanha o produto: ~~detenção, de seis meses a um ano, e multa~~.",
        "Parágrafo único. Nas mesmas penas quem ==vende, expõe, tem em depósito, transporta ou guarda== sem licença válida.",
        "Art. 47. ==(VETADO).==",
        "Art. 48. Impedir ou dificultar a ==regeneração natural== de florestas e demais formas de vegetação: ~~detenção, 6m–1a, e multa~~.",
        "Art. 49. Destruir/danificar/lesar/maltratar plantas de ornamentação de logradouro público ou propriedade privada alheia: ~~detenção, 3m–1a, ou multa, ou ambas~~. § 1º culposo: 1–6 meses ou multa. § 2º (Lei 15.299/2025): poda/corte com requerimento silenciado 45 dias + risco de acidente atestado = ==não é crime==.",
        "Art. 50. Destruir ou danificar florestas nativas/plantadas ou vegetação fixadora de dunas / protetora de mangues: ~~detenção, 3m–1a, e multa~~.",
        "Art. 50-A. Desmatar, explorar ou degradar floresta em terras de ==domínio público ou devolutas==, sem autorização: ~~reclusão 2–4 e multa~~. § 1º não é crime se necessário à subsistência imediata. § 2º área > 1.000 ha: +1 ano por milhar.",
        "Art. 51. Comercializar motosserra ou utilizá-la em florestas, sem licença ou registro: ~~detenção, 3m–1a, e multa~~.",
        "Art. 52. Penetrar em UC conduzindo substâncias ou instrumentos de caça ou exploração florestal, sem licença: ~~detenção, 6m–1a, e multa~~.",
        "Art. 53. Aumento de ==1/6 a 1/3== em toda esta Seção se diminui águas / erosão / clima, ou se: queda de sementes, formação da vegetação, espécie rara/ameaçada, seca/inundação, noite/domingo/feriado.",
      ],
      notaDispositivo:
        "46 é o «receptação verde»: o tipo do caput mira quem **compra** sem exigir a licença; o PU pega a ponta da venda/transporte. Não confunda com 45 (madeira de lei → carvão, reclusão). 50-A é reclusão 2–4 (pesa) e tem atipicidade de fome/subsistência. 53 é causa de aumento da **flora inteira** — primo do 15 (que é agravante geral).",
      pena: "44/46/48/51/52: detenção baixa · 45 recl. 1–2 · 50-A recl. 2–4",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "44 = **mineral** em floresta pública/APP (areia da APP do rio).",
        "46 caput = **comprador** sem exigir licença; PU = vendedor/transporte.",
        "50-A = terra **pública/devoluta**, reclusão 2–4; subsistência atípica.",
        "51 = motosserra sem registro. 52 = entrar na UC **armado de petrecho**.",
        "53 = +**1/6 a 1/3** (seca, noite, domingo, semente, ameaçada…).",
      ],
      pegadinha: [
        "«46 é transformar madeira sem licença» — transformar madeira de lei em carvão é o **45**. 46 é o **comércio** sem papel.",
        "«Art. 47 pune o carvoeiro» — **vetado**.",
        "«53 é agravante, como o 15» — 53 é **aumento** da Seção II.",
      ],
      exemplo: [
        "Caminhão de areia tirada da APP do rio, sem DNPM/ANM + órgão ambiental: **44**.",
        "Madeireira compra lote sem DOF/licença: **46 caput**. O caminhoneiro que transporta sem via: **46 PU**.",
        "Posseiro abre 2.000 ha em terra devoluta: **50-A** + 1 ano do § 2º.",
      ],
      macete:
        "**44 areia. 45 carvão de lei (reclusão). 46 é a nota fiscal da madeira.** 43 e 47 = cova. **51 motosserra; 52 petrecho na UC; 53 aumenta a flora.** 50-A = terra da União, 2 a 4.",
    },
  ],
};
