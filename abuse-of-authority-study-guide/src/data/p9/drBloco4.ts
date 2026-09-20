import type { Bloco } from "../tipos";

export const drBloco4: Bloco = {
  id: "dr-bloco-4",
  numero: "Bloco 04",
  titulo: "Ação penal, competência, laudo, art. 44 e o rito 48–59",
  intervalo: "Arts. 42 a 44 e 48 a 59",
  subtitulo: "Pública incondicionada · Estadual × Federal · constatação ≠ definitivo · LP inconstitucional",
  descricao:
    "O miolo processual. Ação pública incondicionada. Justiça Estadual na regra; Federal só na transnacionalidade. Laudo de constatação abre o flagrante; o definitivo é outra peça. O art. 44 ainda escreve «sem liberdade provisória» — o STF riscou essa expressão.",
  notaProfessor: {
    titulo: "Correções de rota neste bloco",
    itens: [
      "**Súmula 522 é do STF, não do STJ:** tráfico **para o exterior** = Justiça Federal; o resto (inclusive **interestadual**, art. 40, V) = Justiça **Estadual**. Não invente Federal no ônibus São Paulo–Rio.",
      "**Art. 44:** inafiançável, sem sursis/graça/indulto/anistia, sem conversão em restritivas, livramento aos 2/3 (vedado ao reincidente específico). A expressão **«e liberdade provisória»** é **inconstitucional** (STF, HC 104.339; RE 1.038.925, repercussão geral). Preventiva só com 312 do CPP.",
      "**Art. 59** («não apela sem recolher-se à prisão») esbarra na presunção de inocência (CF, 5º, LVII). Não ensine prisão automática para recorrer.",
    ],
  },
  grupos: [
    {
      id: "dr-art-42-44",
      ref: "Arts. 42 a 44",
      nome: "Dosimetria, multa, inafiançabilidade e o que o STF cortou",
      contexto:
        "42: natureza e quantidade da droga **preponderam** sobre o 59 do CP. 43: dias-multa até 5 salários; concurso = cumulativas; pode ir ao décuplo. 44 é o pacote hediondo da própria lei.",
      dispositivo: [
        "Art. 42. O juiz, na fixação das penas, considerará, com ==preponderância== sobre o art. 59 do CP, a ==natureza e a quantidade== da substância, a personalidade e a conduta social do agente.",
        "Art. 43. Dias-multa (arts. 33 a 39): 1/30 até 5 vezes o maior salário-mínimo. PU: concurso = cumulativas; pode aumentar até o ==décuplo== se ineficazes.",
        "Art. 44. Os crimes dos arts. 33 caput e § 1º, e 34 a 37 são ==inafiançáveis== e insuscetíveis de sursis, graça, indulto, anistia e ~~liberdade provisória~~, vedada a conversão em restritivas de direitos.",
        "PU. Livramento condicional após ==2/3== da pena, vedado ao ==reincidente específico==.",
      ],
      notaDispositivo:
        "O 44 **não lista o 33, § 2º, o § 3º nem o 28** — esses não são inafiançáveis por este artigo. Privilegiado (§ 4º): continua no caput do 33, mas **não é hediondo** (HC 118.533); a vedação de restritivas no § 4º foi expurgada (RSF 5/2012) e o STF admite substituição (HC 97.256). Liberdade provisória: o juiz olha o 312, não o 44. Inafiançabilidade (CF 5º, XLIII + 44) **subsiste** para o tráfico «cheio».",
      pena: "44: inafiançável · LC 2/3 · LP riscada pelo STF",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "42: quantidade/natureza **preponderam** na 1ª fase.",
        "44: inafiançável + sem sursis/graça/indulto/anistia + sem restritivas (texto).",
        "**LP do 44 = inconstitucional** (HC 104.339 / RE 1.038.925).",
        "Livramento: **2/3**; reincidente específico **não**.",
      ],
      pegadinha: [
        "«Tráfico nunca tem liberdade provisória, porque o 44 diz» — STF cortou a expressão.",
        "«Privilegiado é inafiançável e hediondo» — hediondez **não** (118.533); fiança/restritivas entram no debate do privilégio.",
        "«28 é inafiançável pelo 44» — o 44 não cita o 28.",
      ],
      exemplo: [
        "Flagrante de 33, primário, sem 312: o juiz **pode** soltar — não pode recusar só lendo o 44.",
        "2 kg de cocaína pesam na **1ª fase** (art. 42), não só na escolha entre 28 e 33.",
      ],
      macete:
        "**42 pesa a droga na pena. 44 ainda tranca fiança, graça e anistia. Liberdade provisória o STF devolveu ao 312.** Privilegiado sai da hediondez.",
    },
    {
      id: "dr-competencia-laudo",
      ref: "Arts. 50 a 53 · Súm. 522/STF",
      nome: "Competência, constatação, destruição e ação controlada",
      contexto:
        "Ação penal: pública incondicionada (regra do CPP 100 — a 11.343 não exige representação). Competência: Estadual, salvo transnacionalidade (CF 109, V + Súm. 522/STF + art. 40, I). Interestadual (40, V) **não** federaliza.",
      dispositivo: [
        "Art. 50. Flagrante: comunicação ao juiz e vista ao MP em ==24 h==.",
        "§ 1º. Para o APF e a materialidade, basta o ==laudo de constatação== da natureza e quantidade, por ==perito oficial== ou, na falta, ==pessoa idônea==.",
        "§ 2º. Quem assina a constatação ==não fica impedido== de fazer o laudo definitivo.",
        "§ 3º (12.961/2014). Em 10 dias o juiz certifica a constatação e determina a ==destruição==, guardada amostra para o definitivo.",
        "§ 4º. Destruição pelo delegado em ==15 dias==, com MP e autoridade sanitária. Art. 50-A: sem flagrante, incineração em ==30 dias==.",
        "Art. 51. Inquérito: ==30 dias== (preso) / ==90== (solto), ==duplicáveis== pelo juiz.",
        "Art. 53. Com autorização judicial e ouvido o MP: I ==infiltração==; II ==ação controlada== (não-atuação para chegar ao maior número), se conhecidos itinerário e agentes.",
      ],
      notaDispositivo:
        "Constatação ≠ definitivo. A constatação **abre** o flagrante; o definitivo comprova natureza/quantidade para a condenação. STJ: a ausência do definitivo **não anula automaticamente** a condenação se a materialidade restou comprovada por outros meios — mas a banca clássica ainda cobra os dois laudos como peças distintas. Pessoa idônea na falta de perito = validade do APF, não «qualquer policial sempre». Súm. 522/STF: Federal só no tráfico **para o exterior** (e a transnacionalidade do 40, I).",
      pena: "Peças cautelares / rito",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Ação **pública incondicionada**.",
        "Regra: Justiça **Estadual**. Federal: **transnacional** (Súm. 522/STF). Interestadual = Estadual + 40, V.",
        "Constatação (oficial ou idôneo) ≠ definitivo. Quem fez um **pode** fazer o outro.",
        "IP: 30 (preso) / 90 (solto), **dobráveis**.",
        "53: infiltração e ação controlada, **com juiz + MP**.",
      ],
      pegadinha: [
        "«Tráfico SP–MG é Justiça Federal (Súm. 522)» — 522 é **exterior**. Interestadual é Estadual.",
        "«Sem laudo definitivo a sentença é nula sempre» — STJ relativiza se a materialidade está prova.",
        "«O perito da constatação está impedido do definitivo» — § 2º diz o contrário.",
        "«Ação controlada o delegado faz sozinho» — **autorização judicial** + MP.",
      ],
      exemplo: [
        "Carga no porto, originária do Paraguai: 33 + 40, I, Justiça **Federal**.",
        "Malote no ônibus Recife–Salvador: 33 + 40, V, Justiça **Estadual** (Súm. 587: a **intenção** de cruzar o Estado já aumenta).",
      ],
      macete:
        "**Estadual na regra. Federal só se atravessa país.** Constatação abre; definitivo fecha. 30/90, e o juiz pode dobrar. 522 é STF e é fronteira.",
    },
    {
      id: "dr-art-54-59",
      ref: "Arts. 54 a 59",
      nome: "Defesa prévia de 10 dias, audiência e o art. 59",
      contexto:
        "Rito especial: vista ao MP (10 dias) → denúncia com até 5 testemunhas → notificação para defesa prévia escrita (10 dias) → juiz decide em 5 → recebida a denúncia, AIJ em 30 dias (90 se avaliação de dependência).",
      dispositivo: [
        "Art. 54. Vista ao MP em 10 dias: arquivar, diligenciar ou denunciar (até ==5 testemunhas==).",
        "Art. 55. Notificação para ==defesa prévia escrita== em ==10 dias==. Sem resposta: juiz nomeia defensor (mais 10). Decisão em ==5 dias==.",
        "Art. 56. Denúncia recebida: citação pessoal + AIJ. § 1º: funcionário público pode ser ==afastado cautelarmente==. § 2º: AIJ em ==30 dias== (ou 90 com avaliação de dependência).",
        "Art. 57. Debates: ==20 + 10== minutos para cada lado, depois do interrogatório e das testemunhas.",
        "Art. 58. Sentença na hora ou em 10 dias.",
        "Art. 59. Nos 33 caput/§ 1º e 34 a 37, o réu ==não poderá apelar sem recolher-se à prisão==, salvo primário e de bons antecedentes reconhecidos na sentença.",
      ],
      notaDispositivo:
        "A defesa prévia **antes** do recebimento é a marca do rito (não é o 396 do CPP puro). Art. 59: texto ainda lá; STF/STJ não admitem prisão automática para recorrer (presunção de inocência). Banca cobra a **letra** e a **tese**: marque a letra se a questão for «nos termos da lei»; marque a inconstitucionalidade se a questão for jurisprudência.",
      pena: "Rito especial",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "Defesa prévia **escrita, 10 dias**, antes do recebimento.",
        "Até **5 testemunhas** de cada lado (54, III / 55, § 1º).",
        "AIJ em **30** (90 se dependência).",
        "Art. 59: letra vs presunção de inocência.",
      ],
      pegadinha: [
        "«O rito da Lei de Drogas é o do Júri / do CPP comum» — defesa prévia é **antes** do recebimento.",
        "«Art. 59 prende para apelar sempre» — teses constitucionais derrubam a automaticidade.",
      ],
      exemplo: [
        "Denúncia oferecida: o juiz **notifica** (não cita ainda) para a defesa de 10 dias; só depois recebe ou rejeita.",
      ],
      macete:
        "**10-10-5-30:** MP 10, defesa 10, juiz 5, audiência 30. O 59 escreve cadeia para apelar; a Constituição não assina.",
    },
  ],
};
