import type { Bloco } from "../tipos";

export const drBloco1: Bloco = {
  id: "dr-bloco-1",
  numero: "Bloco 01",
  titulo: "Sisnad, o que é droga e o que ainda não é crime",
  intervalo: "Arts. 1º ao 26-A",
  subtitulo: "Lista do Executivo · CONAD · prevenção · arts. 6º e 8º vetados",
  descricao:
    "Antes dos 18 verbos, a banca testa se você sabe o que a lei chama de droga, quem manda no Sisnad e o que os arts. 6º e 8º nunca disseram (estão vetados). Prevenção (Título III) não tem tipo penal — mas cai em objetiva de políticas públicas.",
  notaProfessor: {
    titulo: "Esta Parte 09 é a 1ª leva",
    itens: [
      "Aqui: Sisnad (1º–26-A) e o núcleo penal do tráfico (28 e 33 a 40). **Bloco 3** (procedimento, art. 44, colaboração, apreensão) fica para o próximo comando.",
      "**Droga ≠ «entorpecente» genérico.** Art. 1º, PU: substâncias capazes de causar dependência, **especificadas em lei ou em listas do Poder Executivo**. Na prática de prova: **Portaria SVS/MS nº 344/1998** (ANVISA). CONAD (art. 4º, XI) é o conselho de **política**, não a lista.",
      "**Arts. 6º, 8º e 7º-A: VETADOS.** Inventar composição do Sisnad neles é gabarito morto.",
    ],
  },
  grupos: [
    {
      id: "dr-art-1-2",
      ref: "Arts. 1º e 2º",
      nome: "O que a lei é — e o que a lei chama de droga",
      contexto:
        "1º institui o Sisnad, previne, reinserir, reprime e define crimes. PU: conceito de droga. 2º proíbe plantio/cultura/colheita, com ressalva ritualística (Convenção de Viena, 1971) e autorização da União para fins medicinais/científicos.",
      dispositivo: [
        "Art. 1º Esta Lei institui o ==Sisnad==; prescreve medidas de prevenção, atenção e reinserção; estabelece normas de repressão à produção não autorizada e ao tráfico; e define crimes.",
        "Parágrafo único. Consideram-se drogas as substâncias ou os produtos capazes de causar ==dependência==, assim especificados em lei ou relacionados em ==listas atualizadas periodicamente pelo Poder Executivo da União==.",
        "Art. 2º Ficam proibidas, em todo o território nacional, as drogas, bem como o plantio, a cultura, a colheita e a exploração de vegetais e substratos dos quais possam ser extraídas, ressalvada autorização legal ou regulamentar, bem como o que estabelece a Convenção de Viena (1971) sobre plantas de ==uso estritamente ritualístico-religioso==.",
        "PU. A União pode autorizar plantio, cultura e colheita ==exclusivamente para fins medicinais ou científicos==, em local e prazo predeterminados, mediante fiscalização.",
      ],
      notaDispositivo:
        "Sem a lista, não há tipo (princípio da legalidade). Ayahuasca/santo-daime: a ressalva ritualística do 2º (e a jurisprudência do STF/STJ) é a porta. Canabidiol medicinal: autorização da União (PU do 2º + ANVISA), não «tráfico».",
      pena: "Normas de incidência",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Droga = dependência + **lista do Executivo** (não o juiz, não o CONAD).",
        "Plantio proibido, salvo **ritual** (Viena 1971) e **medicinal/científico** da União.",
        "Sisnad = prevenção **e** repressão (os dois braços do 1º/3º).",
      ],
      pegadinha: [
        "«Droga é o que o juiz entender por entorpecente» — **lista**.",
        "«CONAD publica a lista» — CONAD orienta **política** (4º, XI). Lista = **Executivo/ANVISA**.",
        "«Ayahuasca é tráfico, porque é planta» — ressalva **ritualística** do 2º.",
      ],
      exemplo: [
        "Apreensão de comprimido fora da Portaria 344: atípico (não é «droga» para a 11.343).",
        "Cultivo de maconha com autorização da União para pesquisa: 2º PU, não 33.",
      ],
      macete:
        "**Sem lista, sem crime.** CONAD pensa política; ANVISA lista. Ritual e ciência são as duas janelas do 2º.",
    },
    {
      id: "dr-art-3-8",
      ref: "Arts. 3º a 8º-C",
      nome: "Sisnad: dois braços, vetos e quem manda",
      contexto:
        "3º: articular prevenção/atenção/reinserção **e** repressão. Lei 13.840/2019 enxertou SUS/SUAS e competências da União. 6º e 8º nasceram vetados.",
      dispositivo: [
        "Art. 3º O Sisnad articula, integra, organiza e coordena: I prevenção, atenção e reinserção; II repressão da produção não autorizada e do tráfico. § 1º (13.840/2019): conjunto de princípios, regras e recursos, com adesão de Estados/DF/Municípios. § 2º articulação com ==SUS== e ==SUAS==.",
        "Art. 4º Princípios: direitos fundamentais, diversidade, responsabilidade compartilhada, intersetorialidade, equilíbrio entre prevenção e repressão, observância das normas do ==CONAD== (XI).",
        "Art. 5º Objetivos: inclusão social, conhecimento, integração de políticas, coordenação.",
        "Art. 6º ==(VETADO).== Art. 7º-A ==(VETADO).== Art. 8º ==(VETADO).==",
        "Art. 7º Orientação central, execução descentralizada (União, DF, Estados, Municípios).",
        "Art. 8º-A (13.840): compete à União formular a Política Nacional, o Plano Nacional, coordenar o Sisnad…",
      ],
      notaDispositivo:
        "Pegadinha clássica de objetiva: «o Sisnad só reprime» ou «só previne». O 3º tem **dois** incisos. Equilíbrio entre os braços é princípio (4º, X). Vetos 6º e 8º: não descreva conselho, fundo ou organograma com esses artigos.",
      pena: "Organização administrativa",
      bancas: ["CEBRASPE", "FCC", "AOCP"],
      cai: [
        "Sisnad = **prevenir + reprimir** (3º, I e II).",
        "Articula com **SUS e SUAS** (§ 2º).",
        "**6º e 8º vetados.**",
        "CONAD = princípio XI (orientação), não lista de drogas.",
      ],
      pegadinha: [
        "«Sisnad é só o braço policial» — o I do 3º é saúde/assistência.",
        "«Art. 6º cria o CONAD» — **vetado**.",
      ],
      exemplo: [
        "Questão: «O Sisnad destina-se exclusivamente à repressão do tráfico.» Gabarito: **errado** (3º, I).",
      ],
      macete:
        "**Dois braços: cuida e prende.** 6º e 8º são cova. CONAD é bússola, não lista.",
    },
    {
      id: "dr-art-19-26",
      ref: "Arts. 19 a 26-A",
      nome: "Prevenção, atenção e a comunidade terapêutica (13.840)",
      contexto:
        "Título III: prevenção do uso indevido, atenção e reinserção. Sem tipo penal. 26-A (2019) regula o acolhimento em comunidade terapêutica: voluntário, sem isolamento físico, com avaliação médica.",
      dispositivo: [
        "Arts. 19–26. Prevenção (educação, campanhas, redução de riscos), atenção (SUS) e reinserção. Art. 26: usuário/dependente preso ou em medida de segurança tem direito aos serviços de atenção à saúde no sistema penitenciário.",
        "Art. 26-A (Lei 13.840/2019). Acolhimento em comunidade terapêutica: I projetos que visam à ==abstinência==; II adesão e permanência ==voluntárias== (por escrito); III ambiente residencial; IV avaliação médica prévia; V plano individual; VI ==vedação de isolamento físico==. § 1º Graves comprometimentos biológicos/psicológicos → rede de saúde, não comunidade. §§ 2º a 5º: ==VETADOS==.",
      ],
      notaDispositivo:
        "Internação involuntária **não** mora neste artigo (debate no 23-A e seguintes da 13.840, no capítulo da atenção). Para objetiva: comunidade terapêutica = voluntária + sem isolamento. Art. 26 no cárcere: saúde do usuário preso — não é «tráfico privilegiado».",
      pena: "Políticas públicas · sem pena",
      bancas: ["CEBRASPE", "FCC", "AOCP"],
      cai: [
        "Comunidade terapêutica: **voluntária**, com avaliação médica, **sem isolamento físico**.",
        "Usuário preso tem direito à atenção à saúde (26).",
        "§§ 2º–5º do 26-A **vetados**.",
      ],
      pegadinha: [
        "«A comunidade terapêutica pode isolar o dependente contra a vontade» — VI veda isolamento; II exige **voluntariedade**.",
        "«Prevenção é tipo penal» — **não**. Crime começa no 28/33.",
      ],
      exemplo: [
        "Família quer internar o filho à força numa fazenda-comunidade: 26-A não autoriza (adesão voluntária + vedação de isolamento).",
      ],
      macete:
        "**Até o 26 é política, não cadeia.** Comunidade terapêutica: entra quem quer, sem solitária. Vetos 26-A, §§ 2º–5º.",
    },
  ],
};
