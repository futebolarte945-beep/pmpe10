import type { Bloco } from "../tipos";

export const jeBloco4: Bloco = {
  id: "je-bloco-4",
  numero: "Bloco 04",
  titulo: "Apelação, embargos e o teto da Turma",
  intervalo: "Arts. 82 a 85",
  subtitulo: "10 dias · ED interrompem · 203 trava o STJ · 640 abre o STF",
  descricao:
    "No JE **criminal** o recurso do 82 é **apelação**, não o «inominado» do art. 41 (cível). Embargos: 5 dias e, desde 2015, **interrompem**. Da Turma não vai REsp (203); vai RE se a questão for constitucional (640).",
  notaProfessor: {
    titulo: "O roteiro inverte dois relógios",
    itens: [
      "**Art. 83, § 2º** (Lei 13.105/2015): os embargos **interrompem** o prazo do recurso. O texto antigo («suspenderão») **morreu**. CPC e JECrim, hoje, **interrompem** os dois. Quem ainda fala «no JE suspende, no CPC interrompe» está no gabarito de 2014.",
      "«Recurso inominado» é o **cível** (art. 41). O criminal chama de **apelação** (art. 82), 10 dias, razões na petição, Turma de **3 juízes de 1º grau** — **não** é o TJ.",
      "Súm. **203/STJ**: sem REsp da Turma Recursal. Súm. **640/STF**: **cabe RE**. Uniformizar com o STJ: **reclamação**, não REsp.",
    ],
  },
  grupos: [
    {
      id: "je-art-82",
      ref: "Art. 82",
      nome: "Apelação em 10 dias — Turma, não o TJ",
      contexto:
        "Cabe da rejeição da denúncia/queixa e da sentença. 10 dias da ciência, petição **com razões**. Recorrido responde em 10 dias. Turma de três juízes em exercício no 1º grau, na sede do Juizado.",
      dispositivo: [
        "Art. 82. Da decisão de rejeição da denúncia ou queixa e da sentença caberá ==apelação==, que poderá ser julgada por turma composta de ==três Juízes em exercício no primeiro grau==, reunidos na sede do Juizado.",
        "§ 1º. Prazo de ==dez dias==, contados da ciência, por petição escrita da qual constarão as ==razões== e o pedido.",
        "§ 2º. O recorrido responde por escrito em ==dez dias==.",
        "§ 5º. Se a sentença for confirmada pelos próprios fundamentos, a súmula do julgamento servirá de acórdão.",
      ],
      notaDispositivo:
        "Não é o TJ, não é Câmara Criminal, não é «inominado». Efeito: a lei não replica o 593 do CPP; a apelação do 82 é o recurso-mãe. Revisão criminal (CPP 621) **cabe** por subsidiariedade (92) — não substitui a apelação.",
      pena: "10 + 10 dias",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Nome: **apelação** (82). Prazo: **10 dias** com razões.",
        "Órgão: **Turma Recursal** (3 juízes de 1º grau), não o TJ.",
        "Cabe da **rejeição** e da **sentença**.",
      ],
      pegadinha: [
        "«Recurso inominado no JECrim, 10 dias» — inominado é o **41 cível**.",
        "«Apela para o Tribunal de Justiça» — a Turma **não** é o TJ.",
        "«Prazo de 5 dias, como no CPP da carta testemunhável» — aqui é **10**.",
      ],
      exemplo: [
        "Sentença condenatória no JE na sexta. Ciência na segunda. Apelação com razões até o 10º dia útil/contado na forma da lei local — endereçada à **Turma Recursal**, não à 1ª Câmara do TJ.",
      ],
      macete:
        "**82 é apelação de 10 dias para três juízes da casa.** TJ fica de fora. Inominado é o vizinho cível.",
    },
    {
      id: "je-art-83",
      ref: "Art. 83",
      nome: "Embargos em 5 dias — e eles INTERROMPEM",
      contexto:
        "Obscuridade, contradição ou omissão (a «dúvida» saiu na reforma de 2015). Escritos ou orais. 5 dias. § 2º: **interrompem** o prazo do recurso (13.105/2015).",
      dispositivo: [
        "Art. 83 (13.105/2015). Cabem embargos de declaração quando, em sentença ou acórdão, houver obscuridade, contradição ou ==omissão==.",
        "§ 1º. Opostos por escrito ou ==oralmente==, no prazo de ==cinco dias==, da ciência.",
        "§ 2º. Os embargos de declaração ==interrompem== o prazo para a interposição de recurso.",
        "§ 3º. Erros materiais podem ser corrigidos de ofício.",
      ],
      notaDispositivo:
        "Antes da 13.105 o § 2º dizia **suspenderão**. Esse verbo **não vigora**. Interromper = o prazo **recomeça do zero** depois da intimação do julgamento dos embargos. Suspender (texto morto) só pausava o que restava.",
      pena: "5 dias · interrupção",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "5 dias, escrito **ou oral**.",
        "Desde 2015: **interrompem** (não suspendem).",
        "Hipóteses: obscuridade, contradição, omissão — **sem** «dúvida».",
      ],
      pegadinha: [
        "«No JECrim os ED suspendem; no CPC interrompem» — **os dois interrompem**.",
        "«Prazo de 2 dias, como no CPP 382» — aqui é **5**.",
      ],
      exemplo: [
        "Sentença no dia 1º; ED no dia 3. Julgados e intimados no dia 20: a apelação de 10 dias **começa do zero** no dia 20 — não sobram 8.",
      ],
      macete:
        "**5 dias, e o relógio zera.** Suspender é o fantasma do texto antigo. Interromper é a 13.105.",
    },
    {
      id: "je-art-84-85-203",
      ref: "Arts. 84-85 · Súms. 203 e 640",
      nome: "Multa, STJ fechado, STF aberto",
      contexto:
        "Multa paga na secretaria (84) extingue e some da certidão. 85 fala em converter multa em PPL — a Lei 9.268/1996 **matou** essa conversão no CP; banca ainda cobra o choque. Da Turma: sem REsp (203), com RE (640).",
      dispositivo: [
        "Art. 84. Pena de multa exclusiva: pagamento na Secretaria. PU: pago → ==extinta a punibilidade==; condenação não consta dos registros, salvo requisição judicial.",
        "Art. 85. Não pago: conversão em PPL ou restritiva, «nos termos previstos em lei».",
        "Súmula 203/STJ. Não cabe ==recurso especial== contra decisão de órgão de segundo grau dos Juizados Especiais.",
        "Súmula 640/STF. É cabível ==recurso extraordinário== contra decisão de juiz de 1º grau nas causas de alçada, ou por ==turma recursal== de juizado especial cível e criminal.",
      ],
      notaDispositivo:
        "Turma Recursal **não é tribunal** para o art. 105, III, da CF — por isso a 203. Questão constitucional: 102, III → 640. Para destoar de súmula/tese do STJ: **reclamação** (não «REsp disfarçado»). Art. 85: a conversão em prisão da multa foi abolida no sistema penal; o trecho vive como armadilha.",
      pena: "Execução · via extraordinária",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "203: **sem REsp**. 640: **com RE**.",
        "Turma Recursal ≠ TJ ≠ STJ.",
        "Reclamação ao STJ para tese/súmula, não REsp.",
        "84: multa na secretaria extingue.",
        "Revisão criminal **cabe** (CPP 621 + art. 92).",
      ],
      pegadinha: [
        "«Da Turma Recursal cabe REsp, como de qualquer 2º grau» — **203**.",
        "«Não cabe nem RE» — **cabe** (640), se a questão for constitucional.",
        "«Multa não paga vira cadeia pelo 85» — 9.268 esvaziou a conversão em PPL.",
      ],
      exemplo: [
        "Turma Recursal confirma a condenação por 147. Defesa quer STJ por «má-aplicação do 76»: **203** tranca. Se a tese for garantia constitucional (contraditório na AIJ), o caminho é **RE** (640).",
      ],
      macete:
        "**203 fecha o STJ. 640 abre o STF.** Reclamação costura súmula. REsp do JE é erro grosseiro.",
    },
  ],
};
