import type { Bloco } from "../tipos";

export const heBloco4: Bloco = {
  id: "h-bloco-4",
  numero: "Bloco 04",
  titulo: "Direitos, delação e a letra morta",
  intervalo: "Arts. 4º ao 9º (e 10 a 13)",
  subtitulo: "Vetos, livramento de 2/3, quadrilha hedionda e o art. 9º que morreu em 2009",
  descricao:
    "Do art. 4º vetado ao art. 9º (aumento de metade que remete a artigos revogados pela Lei 12.015/2009). No caminho: livramento condicional de 2/3, a pena especial do art. 288 e a delação premiada do parágrafo único do art. 8º — ancestral da colaboração premiada.",
  grupos: [
    {
      id: "h-art-4-5",
      ref: "Arts. 4º e 5º",
      nome: "O veto e o livramento de 2/3",
      contexto:
        "Art. 4º nunca vigorou. Art. 5º enxertou o inciso V no art. 83 do CP: livramento condicional em hediondo/equiparado exige 2/3 da pena e veda o benefício ao reincidente específico.",
      dispositivo: [
        "Art. 4º ==(Vetado).==",
        "Art. 5º Ao art. 83 do Código Penal é acrescido o seguinte inciso:",
        "«Art. 83. (…) V – cumprido mais de ==dois terços da pena==, nos casos de condenação por crime hediondo, prática da tortura, tráfico ilícito de entorpecentes e drogas afins, e terrorismo, se o apenado ==não for reincidente específico== em crimes dessa natureza.»",
      ],
      notaDispositivo:
        "Livramento condicional comum: 1/3 (primário) ou 1/2 (reincidente). Hediondo: **2/3**, e só se não for reincidente **específico** (mesmo grupo: hediondo/tortura/tráfico/terrorismo). Reincidente específico = **não tem livramento**. LEP 112, VI, a/d e VIII (pós-2026) também vedam livramento nas hipóteses de resultado morte / feminicídio / reincidente com morte — especialidade da execução. Art. 4º e art. 11: vetos originais de 1990.",
      pena: "Livramento: 2/3 · reincidente específico: vedado",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "Fração do livramento em hediondo: **2/3** (não 1/2, não 3/5).",
        "Reincidente **específico** → **sem** livramento. Reincidente genérico → 2/3 ainda cabe (salvo vedação nova da LEP 112 para morte).",
        "Art. 4º vetado: se a questão inventar texto, está errada.",
      ],
      pegadinha: [
        "«Livramento de hediondo é 3/5» — confunde com a **progressão antiga**.",
        "«Reincidente genérico não tem livramento» — o art. 83, V, exige reincidência **específica**.",
      ],
      exemplo: [
        "Condenado por estupro, primário, 12 anos: livramento a partir de **8 anos** (2/3), se o 112 da LEP do seu fato não vedar (estupro sem morte, fato 2021: não veda).",
        "Segundo latrocínio: reincidente específico → **sem** livramento.",
      ],
      macete:
        "**Progressão ≠ livramento.** Progressão = LEP 112 (percentual da vez). Livramento = **CP 83, V → 2/3**, e o reincidente **específico** fica **de fora**. Art. 4º = **cova**.",
    },
    {
      id: "h-art-6-7",
      ref: "Arts. 6º e 7º",
      nome: "As penas que a lei reescreveu no CP e a delação do 159",
      contexto:
        "O art. 6º é norma de alteração (já incorporada ao CP). O art. 7º criou o § 4º do art. 159: delação no sequestro, redução de 1/3 a 2/3.",
      dispositivo: [
        "Art. 6º (norma de alteração — já no CP): elevou penas do latrocínio, da extorsão mediante sequestro, do estupro, do atentado, da epidemia e do envenenamento, na redação de 1990.",
        "Art. 7º Ao art. 159 do Código Penal fica acrescido o seguinte parágrafo:",
        "«§ 4º Se o crime é cometido por quadrilha ou bando, o co-autor que denunciá-lo à autoridade, ==facilitando a libertação do sequestrado==, terá sua pena ==reduzida de um a dois terços==.»",
      ],
      notaDispositivo:
        "O art. 6º ainda cita o art. 214 e o art. 223 (revogados em 2009): é fotografia de 1990. O § 4º do 159 sobrevive e é a delação «clássica» do sequestro — exige **libertação do sequestrado**, não só a delação vazia. Lei 12.850 depois generalizou a colaboração premiada.",
      pena: "159 § 4º: redução de 1/3 a 2/3",
      bancas: ["CEBRASPE", "AOCP", "FCC"],
      cai: [
        "Delação do 159, § 4º: requisito **objetivo** = facilitar a **libertação**.",
        "Redução **obrigatória** se o requisito se verifica (1/3 a 2/3 — o juiz escolhe a fração).",
      ],
      pegadinha: [
        "Cobrar o art. 214 / 223 como tipos vigentes «porque o art. 6º da 8.072 cita» — **revogados**.",
      ],
      exemplo: [
        "Integrante do bando liga para a polícia e indica o cativeiro; a vítima é resgatada viva: 159 § 4º → pena **cai de 1/3 a 2/3**.",
      ],
      macete:
        "Art. 6º = **museu de penas**. Art. 7º = delação do sequestro com **vítima solta**. Sem libertação, **sem** o desconto do § 4º.",
    },
    {
      id: "h-art-8",
      ref: "Art. 8º",
      nome: "Associação para hediondo e a delação do bando",
      contexto:
        "O art. 288 do CP (associação criminosa, 3+ pessoas) ganha pena especial de 3 a 6 anos quando o fim é hediondo/equiparado. Parágrafo único: delação que desmantela o bando.",
      dispositivo: [
        "Art. 8º Será de ==três a seis anos de reclusão== a pena prevista no art. 288 do Código Penal, quando se tratar de crimes hediondos, prática da tortura, tráfico ilícito de entorpecentes e drogas afins ou terrorismo.",
        "Parágrafo único. O participante e o associado que ==denunciar à autoridade o bando ou quadrilha, possibilitando seu desmantelamento==, terá a pena ==reduzida de um a dois terços==.",
      ],
      notaDispositivo:
        "Art. 288 caput hoje: 1 a 3 anos (3 ou mais pessoas). O art. 8º **triplica o piso e dobra o teto** (3 a 6) quando o fim é hediondo/equiparado. Não se confunde com o art. 288-A (milícia, 4 a 8, que NÃO é hediondo por si) nem com a org. criminosa da Lei 12.850 (4 pessoas, estrutura, 3 a 8 — hedionda só se direcionada, parágrafo único, V). «Quadrilha ou bando» é a nomenclatura antiga do 288.",
      pena: "Reclusão 3–6 anos · delação −1/3 a 2/3",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Pena especial **3 a 6** (não 1 a 3).",
        "Delação do parágrafo único: o resultado exigido é o **desmantelamento** (não a libertação — essa é do 159).",
        "Concurso com os crimes-fim: o 288 (art. 8º) **não absorve** o latrocínio/tráfico praticado.",
      ],
      pegadinha: [
        "«A associação para tráfico já é o art. 35 da Lei 11.343 (3 a 10)» — **sim**, e é o tipo **especial** em relação ao 288; não use o art. 8º no lugar do 35.",
        "«Milícia privada (288-A) é hedionda pelo art. 8º» — **ERRADO** (288-A é outro tipo; hediondez da milícia é outra tecla, LEP 112, VI, c).",
      ],
      exemplo: [
        "Três comparsas se associam estávelmente para estupros: art. 288 com pena do **art. 8º** (3 a 6) + os estupros em concurso.",
        "Um deles delata o ponto de encontro e a polícia prende o grupo: parágrafo único → **−1/3 a 2/3** sobre os 3 a 6.",
      ],
      macete:
        "**288 comum = 1 a 3. 288 hediondo (art. 8º) = 3 a 6.** Delação do 8º **desmonta o bando**; delação do 159 **solta a vítima**. Tráfico organizado? Vá ao **art. 35 da Lei de Drogas**, não a este artigo.",
    },
    {
      id: "h-art-9-13",
      ref: "Arts. 9º a 13",
      nome: "O art. 9º letra morta, vetos e a vigência",
      contexto:
        "O art. 9º aumentava de metade penas de estupro/atentado quando a vítima era a do antigo art. 224 (presunção de violência). A Lei 12.015/2009 revogou 214, 223 e 224 — o art. 9º ficou sem objeto.",
      dispositivo: [
        "Art. 9º As penas fixadas no art. 6º para os crimes capitulados nos arts. 157, § 3º, 158, § 2º, 159, caput e §§ 1º, 2º e 3º, 213, caput e sua combinação com o art. 223, 214 e sua combinação com o art. 223, todos do Código Penal, são ==acrescidas de metade==, respeitado o limite superior de ==trinta anos== de reclusão, estando a vítima em qualquer das hipóteses referidas no ==art. 224== também do Código Penal.",
        "Art. 10. (alterou a antiga Lei 6.368/1976, art. 35 — prazos em dobro no tráfico. Superado pela Lei 11.343/2006.)",
        "Art. 11. ==(Vetado).==",
        "Art. 12. Esta lei entra em vigor na ==data de sua publicação==.",
        "Art. 13. Revogam-se as disposições em contrário.",
      ],
      notaDispositivo:
        "Art. 224 (presunção de violência: menor de 14, alienado, não-resistência) foi **revogado** pela Lei 12.015/2009, que criou o 217-A. Sem 224, o art. 9º **não tem hipótese de incidência**. Doutrina majoritária: norma **revogada tacitamente**. Publicação: DOU 26/07/1990 — vigência **imediata** (sem vacatio). Art. 11 vetado junto com o 4º.",
      pena: "Art. 9º: +1/2 (letra morta)",
      bancas: ["CEBRASPE", "FGV", "AOCP"],
      cai: [
        "Art. 9º **não se aplica** a fatos posteriores a 2009. Vulnerável hoje = **217-A** (já com penas próprias).",
        "Vigência **na publicação** (26/07/1990) — contraste com a Lei 13.869 (120 dias) da Parte 01.",
        "Arts. 4º e 11: **vetados** — nunca vigoraram.",
      ],
      pegadinha: [
        "«Estupro de vulnerável tem +1/2 do art. 9º» — **ERRADO**; o 217-A já nasceu com pena maior.",
        "«A Lei 8.072 teve vacatio de 45 dias» — **ERRADO**, vigorou na publicação.",
        "Cobrar o art. 224 como vigente — **revogado em 2009**.",
      ],
      exemplo: [
        "Questão 2024: «O art. 9º da Lei 8.072 aumenta de metade a pena do estupro quando a vítima é menor de 14 anos.» Gabarito: **ERRADO** (dispositivo esvaziado; o tipo é o 217-A).",
      ],
      macete:
        "**9º é fantasma** (morreu com o 224, em 2009). **4 e 11 = veto.** Vigência = **no DOU**, sem vacatio. Vulnerável não precisa do 9º: o **217-A** já chegou mais pesado.",
    },
  ],
};
