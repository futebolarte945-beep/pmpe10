import type { Bloco } from "../tipos";

export const racBloco4: Bloco = {
  id: "r-bloco-4",
  numero: "Bloco 04",
  titulo: "Efeitos da condenação, ação penal & fechamento tático",
  intervalo: "Arts. 16 e 18 · regime processual e constitucional",
  subtitulo: "O que a sentença arranca do condenado — e como o Estado processa",
  descricao:
    "Dois artigos curtos com efeitos devastadores: a perda do cargo público e a suspensão do funcionamento do estabelecimento particular — nunca automáticos, sempre motivados na sentença. Fecha o bloco o regime processual (ação penal pública incondicionada em toda a lei) e o trio constitucional que atravessa a Parte inteira: inafiançável, imprescritível, reclusão.",
  grupos: [
    {
      id: "r-art-16-18",
      ref: "Arts. 16 e 18",
      nome: "Efeitos da condenação: perda do cargo & portas fechadas",
      contexto:
        "Os efeitos penais específicos da Lei 7.716 — além dos efeitos genéricos do art. 92 do CP: o servidor perde o cargo; o estabelecimento particular pode ser suspenso por até três meses.",
      dispositivo: [
        "Art. 16. Constitui efeito da condenação a ==perda do cargo ou função pública==, para o servidor público, e a ==suspensão do funcionamento do estabelecimento particular por prazo não superior a três meses==.",
        "Art. 17. (Vetado).",
        "Art. 18. Os efeitos de que tratam os arts. 16 e 17 desta Lei ^^não são automáticos==, devendo ser ==declarados motivadamente na sentença==.",
      ],
      notaDispositivo:
        "Mesma engenharia do art. 92, parágrafo único, do CP: efeito legal da condenação, mas dependente de declaração expressa e fundamentada. O art. 18 ainda cita o art. 17 — referência a dispositivo vetado, que nunca vigorou.",
      pena: "Perda do cargo · suspensão até 3 meses",
      bancas: ["CEBRASPE", "FCC", "VUNESP", "AOCP"],
      cai: [
        "**Dois efeitos específicos**: (1) **perda do cargo ou função pública** (para o servidor condenado); (2) **suspensão do funcionamento do estabelecimento particular** por **prazo não superior a 3 meses**.",
        "**NÃO são automáticos**: o art. 18 exige **declaração motivada na sentença** — sem motivação expressa, o efeito não se produz.",
        "A suspensão recai sobre o **estabelecimento** (local de atividade), consequência da condenação da **pessoa física** responsável — a lei **não** incrimina a pessoa jurídica.",
        "Acumula com os efeitos genéricos do **art. 92 do CP** (indenização, perda de cargo nos termos gerais, inabilitação para dirigir veículo em crime doloso etc.), quando cabíveis.",
        "«Prazo não superior a três meses» = teto legal; o juiz fixa o quantum motivadamente (pode ser menos).",
      ],
      pegadinha: [
        "«Os efeitos são automáticos, como a perda do mandato» — **ERRADO**: exigem declaração motivada (art. 18).",
        "«Suspensão do estabelecimento por até 6 meses / 1 ano» — **ERRADO**: teto de **3 meses**.",
        "«A pessoa jurídica responde penalmente pelos crimes da Lei 7.716» — **ERRADO**: responsabilidade penal de PJ só existe para **crimes ambientais** (CF, art. 225, § 3º).",
        "«A perda do cargo exige reincidência, como na Lei do Abuso de Autoridade» — **ERRADO**: na 13.869 os efeitos do art. 4º, II e III exigem reincidência específica; na 7.716 basta a **declaração motivada** (sem requisito de reincidência).",
      ],
      exemplo: [
        "Dono de bar condenado pelo art. 5º (recusar atendimento): a sentença, motivadamente, suspende o funcionamento do bar por 60 dias.",
        "Diretora de escola pública condenada pelo art. 6º: perde o cargo público, desde que a sentença declare o efeito com fundamentação.",
      ],
      macete:
        "Servidor **perde o cargo**; estabelecimento **fecha até 3 meses** — mas nada cai do céu: o juiz precisa **escrever e fundamentar na sentença**. E empresa não é ré penal aqui — só ambiental é.",
    },
    {
      id: "r-acao-penal",
      ref: "Regime processual",
      nome: "Ação penal & o trio constitucional do racismo",
      contexto:
        "A lei não tem artigo próprio sobre ação penal — aplica-se a regra geral. Mas o regime constitucional do racismo (e seus equiparados) é conteúdo obrigatório de prova.",
      dispositivo: [
        "CF, art. 5º, XLII: «a prática do racismo constitui crime ==inafiançável e imprescritível==, sujeito à pena de ~~reclusão==, nos termos da lei.»",
        "Ação penal: a Lei 7.716 **não condiciona** nenhuma das suas ações → ==ação penal pública incondicionada== em todos os crimes (CP, art. 100). A **injúria racial (art. 2º-A)** seguiu o mesmo trilho ao migrar para a lei em 2023.",
        "CP, art. 145, parágrafo único (o que sobrou): «no caso do ^^art. 140, § 3º^^, deste Código, a ação penal depende de ^^representação da vítima^^.» — vale hoje apenas para a injúria por **religião, idade ou deficiência**.",
        "Lei 12.735/2012: fomento às ==delegacias especializadas== no combate aos crimes de discriminação.",
      ],
      notaDispositivo:
        "Extensão jurisprudencial do trio constitucional: injúria racial (STF, HC 154.248, 2021) e homotransfobia (STF, ADO 26/MI 4733, 2019) — ambas como espécies de racismo, logo inafiançáveis e imprescritíveis. Racismo NÃO é hediondo (a Lei 8.072/90 não o lista).",
      pena: "Inafiançável · imprescritível · reclusão",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**Todos os crimes da lei**: ação penal **pública incondicionada** — o MP age sem representação da vítima.",
        "**Trio constitucional (art. 5º, XLII)**: racismo = **inafiançável + imprescritível + pena de reclusão**.",
        "Equiparados ao trio: **injúria racial** (HC 154.248) e **homofobia/transfobia** (ADO 26).",
        "**Não é hediondo**: sem as consequências da Lei 8.072/90 (progressão diferenciada 40%+, vedação genérica de graça/anistia/indulto própria dos hediondos).",
        "Prescrição: a imprescritibilidade alcança a **pretensão punitiva e a executória** nos termos decididos pelo STF no HC 154.248 (tese aplicada inclusive a fato anterior ao julgamento — a defesa pedia prescrição e perdeu).",
        "Competência: racismo **na internet com alcance transnacional** → **Justiça Federal** (CF, art. 109, V — STJ); demais casos, Justiça Estadual comum (não há foro especial por prerrogatura nesta lei além das regras constitucionais gerais).",
      ],
      pegadinha: [
        "«A injúria racial depende de representação da vítima» — regra do **passado** (CP 140, § 3º + Lei 12.033/2009); **desde 2023**, no art. 2º-A da Lei 7.716: **incondicionada**.",
        "«Racismo é crime hediondo» — **ERRADO**: inafiançável e imprescritível, mas fora do rol da Lei 8.072/90.",
        "«Imprescritível = imprescritibilidade impede graça/indulto» — cuidado: a vedação de graça e anistia do art. 5º, XLIII, lista tortura, tráfico, terrorismo e hediondos; o racismo está no **XLII** (inafiançável + imprescritível) — a discussão de graça/indulto para racismo é doutrinária; a banca segura cobra a literalidade do XLII.",
        "«A ação por racismo é privada porque protege honra» — **ERRADO**: pública incondicionada; honra é o bem da injúria comum (CP, art. 140 caput — queixa).",
      ],
      exemplo: [
        "Promotor recebe prints de comunidade racista no Telegram e denuncia de ofício, sem qualquer manifestação das vítimas: ação pública incondicionada.",
        "Réu condenado por injúria racial em 2019 pede, em 2024, a prescrição retroativa: indeferido — espécie de racismo, imprescritível (HC 154.248).",
        "Pedido de fiança para preso em flagrante por art. 20, § 2º: indeferido — inafiançável (CF, art. 5º, XLII).",
      ],
      macete:
        "Fechadura de quatro pinos: **incondicionada + inafiançável + imprescritível + NÃO hedionda**. Se a alternativa trocar um pino só («condicionada», «afiançável», «prescritível» ou «hedionda»), a porta não abre: é a falsa.",
    },
  ],
};
