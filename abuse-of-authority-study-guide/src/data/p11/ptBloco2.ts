import type { Bloco } from "../tipos";

export const ptBloco2: Bloco = {
  id: "pt-bloco-2",
  numero: "Bloco 02",
  titulo: "Prazo, prorrogação e o relógio de 24 horas",
  intervalo: "Art. 2º caput e §§ · Lei 8.072, art. 2º, § 4º",
  subtitulo: "5+5 · hediondo 30+30 na 8.072 · inclui o dia da prisão · soltura automática",
  descricao:
    "O art. 3º da 7.960 **não** é o prazo de hediondo — é a **separação** de presos. Os 30+30 moram na 8.072. A 13.869/2019 reescreveu a soltura e a contagem.",
  notaProfessor: {
    titulo: "O art. 3º da 7.960 não é prazo",
    itens: [
      "Roteiro: «prazo nos hediondos (Lei 8.072, art. 3º)». **Errado.** É a 8.072, art. **2º, § 4º**. O art. 3º da 7.960 = temporários **separados** dos demais.",
      "Prorrogação: **uma** vez, igual período, **extrema e comprovada** necessidade. Não é automático.",
      "§ 8º (13.869): **inclui** o dia do cumprimento do mandado. Não é «a partir do dia seguinte».",
    ],
  },
  grupos: [
    {
      id: "pt-prazo",
      ref: "Art. 2º caput · 8.072, 2º § 4º",
      nome: "Cinco mais cinco, trinta mais trinta",
      contexto:
        "Prazo da medida, não do juiz. O juiz decide em 24 h (próximo grupo). A prisão só começa com o **mandado cumprido**.",
      dispositivo: [
        "Art. 2º. … terá o prazo de ==5 dias==, prorrogável por igual período em caso de ==extrema e comprovada necessidade==.",
        "Lei 8.072/1990, art. 2º, § 4º. Nos crimes previstos neste artigo (hediondos e equiparados), a temporária terá prazo de ==30 dias==, prorrogável por igual período em caso de extrema e comprovada necessidade.",
        "Art. 2º, § 8º (13.869/2019). Inclui-se o ==dia do cumprimento== do mandado no cômputo do prazo.",
      ],
      notaDispositivo:
        "Teto: 10 dias (comum) ou 60 (hediondo/equiparado). Tráfico, tortura, terrorismo: 30+30. Homicídio doloso «simples» (alíneas a, não qualificado): 5+5, porque o caput do 121 **não** é hediondo — só o qualificado. Pegadinha clássica. Contagem: dia da prisão entra (§ 8º). Término: soltura **de ofício da autoridade custodiante**, sem esperar alvará novo (§ 7º), salvo prorrogação ou preventiva já comunicada.",
      pena: "5+5 ou 30+30",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Comum: **5**, prorrogável **+5** (extrema necessidade).",
        "Hediondo/equiparado: **30+30** (8.072, **2º, § 4º** — não o art. 3º da 7.960).",
        "Dia da prisão **entra** (§ 8º).",
        "Homicídio simples = 5 dias; qualificado = 30.",
      ],
      pegadinha: [
        "«Art. 3º da 7.960 = 30 dias» — art. 3º é **cela separada**.",
        "«O prazo conta da decretação» — conta do **cumprimento** (§ 8º).",
        "«Homicídio doloso sempre 30 dias» — só se for **hediondo** (qualificado).",
      ],
      exemplo: [
        "Mandado cumprido na segunda, 5 dias: liberdade no sábado (segunda entra). Sem esperar o juiz do plantão.",
        "Tráfico (n + 8.072): 30, prorrogáveis +30 uma vez.",
      ],
      macete:
        "**5+5 no comum. 30+30 na 8.072, § 4º do 2º — não no art. 3º.** O dia da captura entra. Acabou o relógio, a porta abre sozinha.",
    },
    {
      id: "pt-24h-soltura",
      ref: "Art. 2º, §§ 2º, 7º e 8º",
      nome: "24 horas para decidir · soltura sem novo alvará",
      contexto:
        "Dois relógios: o do juiz (24 h para despachar) e o da prisão (5 ou 30). A 13.869 criminalizou prolongar a temporária (art. 9º da 13.869, herdeiro do art. 4º, i, da 4.898 via art. 4º desta lei).",
      dispositivo: [
        "§ 2º. O despacho que decretar a temporária deverá ser ==fundamentado== e prolatado em ==24 horas==, contadas do recebimento da representação ou do requerimento.",
        "§ 7º (13.869). Decorrido o prazo ==contido no mandado==, a autoridade da custódia deverá, ==independentemente de nova ordem judicial==, pôr o preso em liberdade, salvo se já comunicada a prorrogação ou a preventiva.",
        "§ 4º-A (13.869). O mandado conterá o período de duração e o ==dia em que o preso deverá ser libertado==.",
      ],
      notaDispositivo:
        "24 h = prazo do **juiz**, a partir do **protocolo**, não da prisão (ainda não houve). Plantão permanente: art. 5º (Judiciário e MP, 24 h). Relaxamento ao término é **automático**. HC cabe durante a temporária (CF 5º, LXVIII) — a lei não o exclui.",
      pena: "24 h para o juiz",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Juiz: **24 h** do recebimento, despacho **fundamentado**.",
        "Fim do prazo: soltura **sem** esperar novo alvará (§ 7º).",
        "Mandado traz a **data de soltura** (§ 4º-A).",
        "HC **cabe**.",
      ],
      pegadinha: [
        "«24 h é o prazo da prisão» — 24 h é para o **juiz decidir**.",
        "«Sem alvará do juiz, o diretor da cadeia não solta» — § 7º manda soltar **sozinho**.",
      ],
      exemplo: [
        "Representação na sexta, 18 h: despacho até sábado 18 h (plantão, art. 5º).",
        "Prazo estoura domingo: o carcereiro solta no domingo, mesmo sem fórum aberto.",
      ],
      macete:
        "**24 h é a caneta do juiz. 5 ou 30 é a grade.** Acabou o mandado, a chave gira sem despacho novo. HC sempre.",
    },
  ],
};
