import type { Bloco } from "../tipos";

export const orBloco7: Bloco = {
  id: "or-bloco-7",
  numero: "Bloco 07",
  titulo: "Quem pede papel e quem só avisa",
  intervalo: "Mapa dos meios · arts. 3º a 17",
  subtitulo: "Autorizar × comunicar × requisitar",
  descricao:
    "Fecha a Parte 14. A tabela do roteiro acerta o 2-3-4 de pessoas e erra a «hierarquia obrigatória» e a «qualificadora armada» copiada do 288. O comparativo ao fim da parte traz os números certos.",
  notaProfessor: {
    titulo: "A tabela do roteiro, no giz certo",
    itens: [
      "Pessoas: **3** (288) / **2** (35) / **4** (12.850) — isso vale.",
      "Penas: **1 a 3** / **3 a 10** / **3 a 8** — isso vale.",
      "«ORCRIM exige hierarquia»: a lei pede estrutura ordenada + **divisão de tarefas**, **ainda que informal**. Não peça organograma da CIA.",
      "«Qualificadora armada na 12.850»: o que existe é **aumento até ½** por **arma de fogo** (§ 2º). A «associação armada» com aumento até ½ é o **288, PU** (junto com criança).",
    ],
  },
  grupos: [
    {
      id: "or-mapa-meios",
      ref: "Arts. 3º a 17",
      nome: "Autorização, comunicação, requisição",
      contexto:
        "Três chaves. Se a banca perguntar «precisa de juiz?», esta é a lista. Prazos só onde a lei os escreveu.",
      dispositivo: [
        "Colaboração (3º, I / 4º–7º): negócio jurídico; juiz ==homologa==, não negocia. Sem prazo de captação.",
        "Ambiental (3º, II / 9.296, 8º-A): ==autorização== judicial. 15 dias; máxima > 4 anos.",
        "Ação controlada (8º–9º): ==comunicação== prévia. Sem prazo legal de duração.",
        "Cadastro 15: ==requisição== de delegado/MP, ==sem== juiz (nome, filiação, endereço).",
        "Interceptação (3º, V / 9.296): ==autorização==. 15+15, Tema 661.",
        "Sigilos bancário/fiscal (3º, VI): legislação específica, em regra ==juiz== (LC 105).",
        "Infiltração física (10): ==autorização==. 6 meses, renovável.",
        "Infiltração virtual 12.850 (10-A): ==autorização==. 6 meses, teto ==720== dias.",
        "Infiltração virtual ECA (13.441): ==autorização==. ==90== dias — ==outra lei==.",
      ],
      notaDispositivo:
        "Cooperação federativa (3º, VIII) não pede juiz. Fronteira na controlada pede cooperação internacional (9º), não «alvará extra».",
      pena: "Mapa",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Controlada **comunica**. Infiltrado e interceptação **autorizam**.",
        "15 sem juiz. Extrato com juiz.",
        "720 = virtual da **12.850**. 90 = **ECA**.",
        "4 pessoas · 3 a 8 · delação não condena sozinha.",
      ],
      pegadinha: [
        "«Todos os meios do 3º pedem juiz» — cadastro 15 e controlada 8º não.",
        "«720 dias em qualquer infiltração» — só **10-A**.",
      ],
      exemplo: [
        "Prova: «A infiltração virtual da 12.850 dura 90 dias, como a do ECA.» Gabarito: **errado**. 90 é 13.441; 12.850 virtual é 6 meses / 720.",
      ],
      macete:
        "**Avisa (8º), pede (10 e 9.296), requisita cadastro (15).** 720 na rede da facção. 90 na rede da criança. 4 cabeças na ORCRIM.",
    },
  ],
};
