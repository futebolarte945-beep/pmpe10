import type { Bloco } from "../tipos";

export const orBloco6: Bloco = {
  id: "or-bloco-6",
  numero: "Bloco 06",
  titulo: "Os tipos da investigação — 18 a 21-B",
  intervalo: "Arts. 18 a 21-B",
  subtitulo: "Identidade 1 a 3 · delação falsa 1 a 4 · sigilo 1 a 4 · cadastro 6m a 2a",
  descricao:
    "O roteiro infla penas e troca condutas. Art. 18 é o **colaborador**, não o infiltrado, e a pena é **1 a 3**, não 2 a 6. Art. 20 é quebrar o **sigilo** da controlada/infiltração — não «descumprir o termo de delação» (isso rescinde o acordo, 4º, §§ 17 e 18). Art. 21 é **reclusão** 6 meses a 2 anos, não detenção.",
  notaProfessor: {
    titulo: "Penas certas",
    itens: [
      "**18:** revelar identidade / fotografar / filmar o **colaborador** sem autorização escrita → reclusão **1 a 3** + multa.",
      "**19:** imputar falso ou revelar estrutura **que sabe inverídica**, sob pretexto de colaboração → **1 a 4** + multa.",
      "**20:** descumprir sigilo de **ação controlada** ou **infiltração** → **1 a 4** + multa.",
      "**21:** recusar/omitir dados requisitados → reclusão **6 meses a 2 anos** + multa. PU: apossar/propalar cadastro.",
      "**21-A e 21-B** (Lei 15.245/2025): obstrução / conspiração para obstruir — **4 a 12**, máxima federal, preso provisório também.",
    ],
  },
  grupos: [
    {
      id: "or-art-18-21",
      ref: "Arts. 18 a 21",
      nome: "Quatro crimes da obtenção da prova",
      contexto:
        "Todos de ação pública. 18 protege o colaborador na mídia. 19 pega a delação mentirosa (inocente ou organograma falso). 20 pega o vazamento da operação. 21 pega a empresa/servidor que não entrega o cadastro do 15.",
      dispositivo: [
        "Art. 18. Revelar a identidade, fotografar ou filmar o ==colaborador==, sem sua prévia autorização por escrito. Pena — reclusão, de ==1 a 3== anos, e multa.",
        "Art. 19. Imputar falsamente, sob pretexto de colaboração, infração a quem sabe inocente, ou revelar informações sobre a estrutura que sabe ==inverídicas==. Pena — reclusão, de ==1 a 4== anos, e multa.",
        "Art. 20. Descumprir determinação de ==sigilo== das investigações que envolvam a ==ação controlada== e a ==infiltração==. Pena — reclusão, de ==1 a 4== anos, e multa.",
        "Art. 21. Recusar ou omitir dados cadastrais, registros, documentos e informações requisitadas pelo juiz, MP ou delegado. Pena — reclusão, de ==6 meses a 2 anos==, e multa. PU: apossar, propalar, divulgar ou usar indevidamente esses dados.",
      ],
      notaDispositivo:
        "Identidade do **infiltrado** é direito do art. 14 (e o vazamento operacional cabe no 20). Quebrar o acordo de delação (voltar ao crime, omitir dolosamente) = **rescisão** (4º, §§ 17–18), não o art. 20. 21 é **reclusão**, ainda que a pena caiba em detenção na cabeça da banca.",
      pena: "1–3 · 1–4 · 6m–2a",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "18 = **colaborador**, **1 a 3** (não 2 a 6).",
        "19 = delação **falsa**, **1 a 4**.",
        "20 = sigilo da **controlada/infiltração**, **1 a 4**.",
        "21 = recusar cadastro, **reclusão** 6m–2a.",
      ],
      pegadinha: [
        "«Art. 18: identidade do infiltrado, 2 a 6» — é o **colaborador**, **1 a 3**.",
        "«Art. 20: descumpriu a delação, revoga e ainda condena no 20» — rescisão no **4º**; o 20 é **sigilo** da operação.",
        "«Art. 21 é detenção» — o texto é **reclusão**.",
      ],
      exemplo: [
        "Repórter filma o delator na saída da vara, sem autorização: **18**. Delator inventa que o prefeito manda na facção, sabendo que é mentira: **19**. Escrivão vaza o nome do infiltrado no grupo da corporação: **20**. Banco recusa o endereço do 15: **21**.",
      ],
      macete:
        "**18 é foto do delator (1–3). 19 é delação mentirosa (1–4). 20 é fofoca da operação (1–4). 21 é recusar o cadastro (6m–2a, reclusão).**",
    },
    {
      id: "or-art-21a-b",
      ref: "Arts. 21-A e 21-B",
      nome: "Obstrução 2025 — 4 a 12 e a máxima federal",
      contexto:
        "Lei 15.245/2025. Pedir ou mandar violência/grave ameaça contra agente público, advogado, jurado, testemunha, colaborador ou perito, para impedir, embaraçar ou retaliar. 21-B: o ajuste de duas ou mais pessoas para o mesmo fim (conspiração).",
      dispositivo: [
        "Art. 21-A (15.245/2025). Solicitar, mediante promessa ou concessão de vantagem, ou ordenar violência ou grave ameaça contra agente público, advogado, defensor, jurado, testemunha, colaborador ou perito, para impedir, embaraçar ou retaliar investigação/processo de ORCRIM ou medida contra o crime organizado.",
        "Pena — reclusão, de ==4 a 12== anos, e multa.",
        "§ 1º. Também contra cônjuge, companheiro, filho ou parente até 3º grau.",
        "§ 2º. Se a violência/ameaça é tentada ou consumada, ==soma-se== a pena do crime correspondente.",
        "§§ 3º e 4º. Condenado e preso provisório: início / recolhimento em ==penitenciária federal de segurança máxima==.",
        "Art. 21-B. Ajustarem-se duas ou mais pessoas para a mesma violência/ameaça, mesmo fim. Pena ==4 a 12==. Mesmos §§.",
      ],
      notaDispositivo:
        "É tipo novo, não substitui o 2º, § 1º (embaraçar investigação, 3 a 8, subsidiário). 21-A pede violência/ameaça (ou ordená-la); o § 1º do 2º pega o embaraço «de qualquer forma». Concurso possível com 344, 347, 121 etc. (§ 2º).",
      pena: "Reclusão 4–12",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "21-A/B = **4 a 12**, máxima **federal**.",
        "Preso provisório também vai para a máxima (§ 4º).",
        "Parente até 3º grau entra no § 1º.",
        "Não confundir com 2º, § 1º (3 a 8, sem violência necessária).",
      ],
      pegadinha: [
        "«Obstrução é o § 1º do 2º, 3 a 8, e pronto» — 2025 criou **4 a 12** com violência/ameaça.",
        "«21-B é associação criminosa 288» — é **conspiração para obstruir**, 4 a 12.",
      ],
      exemplo: [
        "O líder manda quebrar as pernas da testemunha da delação: 21-A + 129. Dois «soldados» combinam o ataque e são presos no planejamento: 21-B, e o § 4º já manda o provisório para a federal.",
      ],
      macete:
        "**2025: 4 a 12 e cela federal.** Violência/ameaça para calar o processo. O § 1º do 2º continua sendo o embaraço miúdo (3 a 8).",
    },
  ],
};
