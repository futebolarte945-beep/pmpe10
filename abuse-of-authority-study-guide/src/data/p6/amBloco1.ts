import type { Bloco } from "../tipos";

export const amBloco1: Bloco = {
  id: "am-bloco-1",
  numero: "Bloco 01",
  titulo: "Pessoa jurídica no banco dos réus",
  intervalo: "Arts. 1º ao 4º",
  subtitulo: "O único endereço expresso de responsabilidade penal da PJ — e o funeral da dupla imputação",
  descricao:
    "Os arts. 1º e 5º nasceram vetados. Sobram o concurso/omissão do dirigente (art. 2º), a responsabilidade penal da pessoa jurídica (art. 3º) e a desconsideração (art. 4º). É o único caso em que o legislador brasileiro escreveu, preto no branco, que a PJ responde criminalmente.",
  notaProfessor: {
    titulo: "Correção de rota — Constituição e o que esta leva não cobre",
    itens: [
      "**CF, art. 225, § 3º**: as condutas lesivas ao meio ambiente sujeitarão os infratores, **pessoas físicas ou jurídicas**, a sanções penais e administrativas, independentemente da obrigação de reparar. É a fonte constitucional do art. 3º.",
      "**Único caso expresso**: a doutrina majoritária de prova ainda trata a 9.605 como a **única** lei que comina responsabilidade penal da PJ. (Há debate residual sobre a Lei 12.846/2013 — administrativa — e sobre lavagem; a banca clássica cobra «único».).",
      "**Arts. 1º e 5º: VETADOS.** Se a questão der texto a eles, a alternativa nasceu morta.",
      "Infrações administrativas (arts. 70 e ss.) ficam fora do recorte penal desta Parte 06.",
    ],
  },
  grupos: [
    {
      id: "am-art-1-2",
      ref: "Arts. 1º e 2º",
      nome: "O veto de abertura e o garante da empresa",
      contexto:
        "Art. 1º nunca vigorou. Art. 2º tem duas cabeças: concurso clássico (CP 29) e omissão imprópria do dirigente que podia impedir o crime ambiental.",
      dispositivo: [
        "Art. 1º ==(VETADO).==",
        "Art. 2º Quem, de qualquer forma, ==concorre== para a prática dos crimes previstos nesta Lei, incide nas penas a estes cominadas, na medida da sua ==culpabilidade==, bem como o ==diretor, o administrador, o membro de conselho e de órgão técnico, o auditor, o gerente, o preposto ou mandatário== de pessoa jurídica, que, ==sabendo== da conduta criminosa de outrem, ==deixar de impedir== a sua prática, quando podia agir para evitá-la.",
      ],
      notaDispositivo:
        "A segunda parte do art. 2º cria um garante por posição na empresa: dolo (soube) + poder de impedir + omissão. Não é responsabilidade objetiva do sócio. Auditor e membro de órgão técnico entram no rol — pegadinha de sujeito.",
      pena: "Pena do crime-fim (na medida da culpabilidade)",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "Art. 1º **vetado** — não use.",
        "Concurso: «de qualquer forma» + **medida da culpabilidade** (espelho do CP 29).",
        "Omissão do dirigente: **soube** + **podia impedir**. Sem ciência, atípico.",
        "Rol de garantes: diretor, administrador, conselho, órgão técnico, **auditor**, gerente, preposto, mandatário.",
      ],
      pegadinha: [
        "«O sócio responde pelo só fato de integrar a PJ» — **ERRADO** (não há responsabilidade penal objetiva).",
        "Inventar redação para o art. 1º.",
      ],
      exemplo: [
        "Gerente ambiental vê o despejo ilegal, tem alçada para parar a bomba e não para: art. 2º (omissão) + o tipo de poluição, quando esta leva chegar.",
        "Acionista minoritário que nunca pisou na planta: **fora** do 2º.",
      ],
      macete:
        "**1º é cova. 2º é o garante de gravata:** soube, podia e não impediu. Sem ciência, sem crime. Auditor também entra na foto.",
    },
    {
      id: "am-art-3",
      ref: "Art. 3º",
      nome: "A PJ no banco — e a dupla imputação que morreu",
      contexto:
        "Três requisitos cumulativos para a PJ responder: (1) decisão do representante legal/contratual ou do órgão colegiado; (2) no interesse ou benefício da entidade; (3) infração desta Lei. Parágrafo único: as duas responsabilidades NÃO se excluem — e isso não quer dizer que uma precise da outra.",
      dispositivo: [
        "Art. 3º As pessoas jurídicas serão responsabilizadas ==administrativa, civil e penalmente== conforme o disposto nesta Lei, nos casos em que a infração seja cometida por ==decisão de seu representante legal ou contratual, ou de seu órgão colegiado==, no ==interesse ou benefício== da sua entidade.",
        "Parágrafo único. A responsabilidade das pessoas jurídicas ==não exclui== a das pessoas físicas, autoras, co-autoras ou partícipes do mesmo fato.",
      ],
      notaDispositivo:
        "STF, RE 548.181/PR (1ª Turma, rel. Rosa Weber, 2013): a CF 225 § 3º **não impõe dupla imputação**. STJ acompanhou (superou o REsp 610.114 e afins). Hoje: pode denunciar só a PJ, só a PF, ou as duas. O parágrafo único diz que uma não exclui a outra — não que uma condicione a outra. Ainda se exige decisão de representante/colegiado + benefício da entidade (não basta o faxineiro delinquir por conta própria).",
      pena: "Arts. 21 a 24 (multa, restritivas, PSC, liquidação)",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**Único caso expresso** de responsabilidade penal da PJ no direito brasileiro (resposta clássica de prova).",
        "Tríplice responsabilidade (adm. + civil + penal) **independente** entre si.",
        "Requisitos: decisão de quem manda **+** interesse/benefício da PJ.",
        "**Dupla imputação NÃO é mais exigida** (STF RE 548.181 → STJ).",
        "Parágrafo único = não-exclusão, **não** = obrigatoriedade conjunta.",
      ],
      pegadinha: [
        "«A denúncia contra a PJ é nula se não vier junto a PF» — **ERRADO hoje**. Era o STJ antigo.",
        "«Qualquer empregado gera responsabilidade da PJ» — falta **decisão** de representante/colegiado e o **benefício** da entidade.",
        "«A responsabilidade penal da PJ exclui a do diretor» — o parágrafo único diz o **contrário**.",
      ],
      exemplo: [
        "Conselho delibera despejar efluente para baratear a operação: PJ no art. 3º + conselheiros no art. 2º.",
        "Motorista da frota caça por conta própria no fim de semana, sem proveito da empresa: PJ **fora**; PF no art. 29.",
        "MP denuncia só a mineradora (os diretores fogiram): denúncia **válida** (RE 548.181).",
      ],
      macete:
        "**Decisão de quem manda + bolso da empresa.** «Não exclui» ≠ «tem que vir junto». Dupla imputação = **moda velha do STJ**. STF 548.181 enterrou. Único endereço expresso da PJ-ré.",
    },
    {
      id: "am-art-4",
      ref: "Art. 4º",
      nome: "Desconsideração da personalidade jurídica",
      contexto:
        "Teoria menor: basta a personalidade ser obstáculo ao ressarcimento do dano ambiental — não se exige abuso/fraude do CC 50 como requisito único.",
      dispositivo: [
        "Art. 4º Poderá ser desconsiderada a pessoa jurídica sempre que sua personalidade for ==obstáculo ao ressarcimento de prejuízos== causados à qualidade do meio ambiente.",
      ],
      notaDispositivo:
        "É a «teoria menor» da disregard (CDC 28 é o primo). Finalidade: alcançar o patrimônio dos sócios para **ressarcir** o dano ambiental (vocação cível/reparatória). Não cria tipo penal novo. «Poderá» = juízo de conveniência fundamentado.",
      pena: "Norma de alcance patrimonial",
      bancas: ["CEBRASPE", "FCC", "AOCP", "FGV"],
      cai: [
        "Requisito: personalidade como **obstáculo ao ressarcimento** (teoria menor).",
        "Não se confunde com o art. 24 (liquidação forçada da PJ-laranja).",
      ],
      pegadinha: [
        "«Só desconsidera se houver fraude do CC 50» — a 9.605 **dispensa** esse rigor.",
        "«Desconsiderar a PJ é pena criminal» — é instrumento de **ressarcimento**.",
      ],
      exemplo: [
        "Empresa-casca sem patrimônio, sócios com fazendas em nome próprio: o juízo desconsidera o véu e vai atrás das fazendas para reparar o rio.",
      ],
      macete:
        "**Teoria menor: o véu cai se atrapalha a conta do dano.** Não precisa montar a fraude do CC 50. Art. 4º repara; art. 24 **liquida** a laranja.",
    },
  ],
};
