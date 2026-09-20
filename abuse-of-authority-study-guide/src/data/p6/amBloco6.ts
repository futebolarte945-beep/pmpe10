import type { Bloco } from "../tipos";

export const amBloco6: Bloco = {
  id: "am-bloco-6",
  numero: "Bloco 06",
  titulo: "Ordenamento urbano e patrimônio cultural",
  intervalo: "Arts. 62 ao 65",
  subtitulo: "Tombado, solo não edificável e a pichação que o roteiro errou a pena",
  descricao:
    "Quatro artigos. 62 e 63 são reclusão 1–3 (bem protegido / alterar aspecto). 64 é detenção 6m–1a (construir em solo não edificável). 65: pichar = detenção 3m–1a; em coisa tombada = detenção 6m–1a — não reclusão. Grafite consentido não é crime (Lei 12.408/2011).",
  notaProfessor: {
    titulo: "A isca do roteiro",
    itens: [
      "**Pichação em bem tombado NÃO é reclusão.** Art. 65, § 1º: **detenção de 6 meses a 1 ano, e multa.** Quem escrever «reclusão» na alternativa está errado.",
      "Grafite (manifestação artística, com consentimento do dono e, se público, com autorização) **não constitui crime** (§ 2º). Pichar ≠ grafitar desde 2011.",
      "62 tem figura **culposa** (detenção 6m–1a). 63, 64 e 65 **não**.",
    ],
  },
  grupos: [
    {
      id: "am-art-62-64",
      ref: "Arts. 62 a 64",
      nome: "Destruir, alterar e construir onde não se pode",
      contexto:
        "62 = destruir, inutilizar ou deteriorar bem especialmente protegido (ou arquivo/museu/biblioteca protegidos). 63 = alterar aspecto/estrutura do local protegido. 64 = promover construção em solo não edificável ou no entorno.",
      dispositivo: [
        "Art. 62. Destruir, inutilizar ou deteriorar: I bem especialmente protegido por lei, ato administrativo ou decisão judicial; II arquivo, registro, museu, biblioteca, pinacoteca, instalação científica ou similar protegido:",
        "Pena - ~~reclusão, de um a três anos, e multa~~. PU culposo: ~~detenção de seis meses a um ano~~, sem prejuízo da multa.",
        "Art. 63. Alterar o aspecto ou estrutura de edificação ou local especialmente protegido (valor paisagístico, ecológico, turístico, artístico, histórico, cultural, religioso, arqueológico, etnográfico ou monumental), sem autorização ou em desacordo: ~~reclusão, de um a três anos, e multa~~.",
        "Art. 64. Promover construção em ==solo não edificável==, ou no seu entorno, assim considerado em razão dos mesmos valores, sem autorização ou em desacordo: ~~detenção, de seis meses a um ano, e multa~~.",
      ],
      notaDispositivo:
        "A proteção do 62/63 pode vir de lei, ato administrativo **ou decisão judicial** — não só tombamento. 64 é o mais leve (detenção) e fala em «solo não edificável» + entorno. Não confundir 64 com 60 (licença ambiental de empreendimento poluidor).",
      pena: "62/63: recl. 1–3 · 62 culpa det. 6m–1a · 64: det. 6m–1a",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "Bem protegido por **lei, ato ou decisão judicial** (não só tombado).",
        "62 aceita **culpa** (det. 6m–1a).",
        "63 = alterar aspecto/estrutura (reclusão).",
        "64 = construir em solo não edificável (**detenção**).",
      ],
      pegadinha: [
        "«Só o bem tombado pelo IPHAN entra no 62» — basta proteção por **ato ou decisão judicial**.",
        "«64 é reclusão, porque é patrimônio» — **detenção 6m–1a**.",
      ],
      exemplo: [
        "Empreiteiro derruba casarão tombado: **62, I**.",
        "Reforma a fachada do casarão sem o IPHAN: **63**.",
        "Sobe um puxadinho no entorno do sítio arqueológico: **64**.",
      ],
      macete:
        "**62 destrói (e tem culpa). 63 muda a cara. 64 constrói no chão proibido (detenção).** Tombamento não é o único carimbo.",
    },
    {
      id: "am-art-65",
      ref: "Art. 65",
      nome: "Pichar não é grafitar — e tombado não vira reclusão",
      contexto:
        "Lei 12.408/2011 tirou o «grafitar» do caput, criou o § 2º de atipicidade do grafite consentido e renumerou o antigo parágrafo único. A qualificadora do tombado continua detenção.",
      dispositivo: [
        "Art. 65. ==Pichar== ou por outro meio conspurcar edificação ou monumento urbano: (Lei nº 12.408/2011)",
        "Pena - ~~detenção, de 3 meses a 1 ano, e multa~~.",
        "§ 1º Se o ato for realizado em monumento ou coisa ==tombada== em virtude do seu valor artístico, arqueológico ou histórico, a pena é de ~~6 meses a 1 ano de ==detenção== e multa~~.",
        "§ 2º ==Não constitui crime== a prática de ==grafite== realizada com o objetivo de valorizar o patrimônio público ou privado mediante manifestação artística, desde que consentida pelo proprietário e, quando couber, pelo locatário, e, no caso de bem público, com autorização do órgão competente e observância das posturas municipais e das normas de preservação.",
      ],
      notaDispositivo:
        "PEGADINHA DE OURO: o cursinho grita «tombado = reclusão». A lei diz **detenção 6m–1a**. O caput já é detenção 3m–1a (JECRIM). Grafite com os requisitos do § 2º = atípico — não é «qualificadora invertida». Conspurcar cobre tinta, ácido, cartaz colado etc.",
      pena: "Detenção 3m–1a · tombado: detenção 6m–1a",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Caput: **pichar/conspurcar** (não mais «grafitar»).",
        "Tombado: **detenção 6m–1a** — **não é reclusão**.",
        "Grafite consentido + requisitos = **atípico** (§ 2º).",
      ],
      pegadinha: [
        "«Pichação em bem tombado: reclusão» — **ERRADO. Detenção 6 meses a 1 ano.**",
        "«Grafite é sempre crime, só a pena muda» — **§ 2º: não constitui crime** se artístico e consentido.",
        "«O caput ainda pune grafitar» — a Lei 12.408 **tirou** o verbo.",
      ],
      exemplo: [
        "Tag no muro da escola: **65 caput** (3m–1a).",
        "Mesma tinta na fachada do casarão tombado: **65 § 1º** (6m–1a, detenção).",
        "Mural combinado com a prefeitura no viaduto: **atípico** (§ 2º).",
      ],
      macete:
        "**Pichar prende pouco; tombado prende um pouco mais — e continua detenção.** Grafite com papel **não é crime**. Quem falou reclusão no 65 **errou a prova**.",
    },
  ],
};
