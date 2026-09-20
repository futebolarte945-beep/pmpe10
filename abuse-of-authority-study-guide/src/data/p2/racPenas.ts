import type { QuadroPenal } from "../tipos";

export const quadroPenasP2: QuadroPenal = {
  id: "quadro-penas-p2",
  selo: "Quadro de penas · Lei 7.716/1989",
  titulo: "Todas as penas da lei, numa página só",
  intro:
    "A lei inteira é de RECLUSÃO — nenhuma detenção. A escala vai de 1 a 5 anos: memorize as quatro faixas e as exceções (o § 2º do art. 4º, único sem reclusão, e a proibição de frequência do § 2º-A do art. 20). Depois das penas, as três majorantes: 20-A e 20-B (+1/3 até a metade) e o parágrafo único do 2º-A (+1/2).",
  linhas: [
    { ref: "Art. 2º-A", conduta: "Injúria racial (dignidade/decoro por raça, cor, etnia, procedência nacional)", pena: "**Reclusão 2–5 anos + multa**", obs: "Par. único: +½ se concurso de 2+ pessoas" },
    { ref: "Art. 3º", conduta: "Impedir/obstar acesso a cargo público ou de concessionária · obstar promoção funcional (par. único)", pena: "**Reclusão 2–5 anos**", obs: "sem multa" },
    { ref: "Art. 4º", conduta: "Negar/obstar emprego em empresa privada", pena: "**Reclusão 2–5 anos**", obs: "sem multa" },
    { ref: "Art. 4º, § 1º", conduta: "Discriminação laboral: equipamentos (I) · ascensão funcional (II) · tratamento diferenciado/salário (III)", pena: "**Reclusão 2–5 anos**", obs: "mesma pena do caput" },
    { ref: "Art. 4º, § 2º", conduta: "Anúncio/recrutamento com exigência de aparência racial", pena: "**Multa + prestação de serviços à comunidade**", obs: "único sem reclusão · inclui promoção da igualdade racial" },
    { ref: "Art. 5º", conduta: "Estabelecimento comercial: recusar/impedir acesso ou atendimento", pena: "**Reclusão 1–3 anos**", obs: "" },
    { ref: "Art. 6º", conduta: "Ensino público/privado de qualquer grau: recusar inscrição ou ingresso", pena: "**Reclusão 3–5 anos**", obs: "par. único: +1/3 se vítima menor de 18" },
    { ref: "Art. 7º", conduta: "Hospedagem: hotel, pensão, estalagem ou similar", pena: "**Reclusão 3–5 anos**", obs: "topo da tabela, com o art. 6º" },
    { ref: "Art. 8º", conduta: "Restaurantes, bares, confeitarias e semelhantes abertos ao público", pena: "**Reclusão 1–3 anos**", obs: "" },
    { ref: "Art. 9º", conduta: "Estabelecimentos esportivos, casas de diversões, clubes sociais", pena: "**Reclusão 1–3 anos**", obs: "" },
    { ref: "Art. 10", conduta: "Salões, barbearias, termas, casas de massagem e fins equivalentes", pena: "**Reclusão 1–3 anos**", obs: "" },
    { ref: "Art. 11", conduta: "Entradas sociais de edifícios públicos/residenciais · elevadores e escadas", pena: "**Reclusão 1–3 anos**", obs: "" },
    { ref: "Art. 12", conduta: "Transportes públicos ou concedidos (avião, navio, ônibus, metrô…)", pena: "**Reclusão 1–3 anos**", obs: "" },
    { ref: "Art. 13", conduta: "Serviço em qualquer ramo das Forças Armadas", pena: "**Reclusão 2–4 anos**", obs: "faixa exclusiva da lei" },
    { ref: "Art. 14", conduta: "Casamento ou convivência familiar e social (por qualquer meio)", pena: "**Reclusão 2–4 anos**", obs: "" },
    { ref: "Art. 20", conduta: "Praticar, induzir ou incitar discriminação/preconceito (raça, cor, etnia, religião, procedência)", pena: "**Reclusão 1–3 anos + multa**", obs: "tipo-mãe" },
    { ref: "Art. 20, § 1º", conduta: "Suástica/gamada: fabricar, comercializar, distribuir, veicular — para divulgar o nazismo", pena: "**Reclusão 2–5 anos + multa**", obs: "exige finalidade nazista" },
    { ref: "Art. 20, § 2º", conduta: "Via meios de comunicação, redes sociais, internet ou publicação de qualquer natureza", pena: "**Reclusão 2–5 anos + multa**", obs: "+ medidas do § 3º e destruição do § 4º" },
    { ref: "Art. 20, § 2º-A", conduta: "Contexto de atividade esportiva, religiosa, artística ou cultural destinada ao público", pena: "**Reclusão 2–5 anos + proibição de frequência por 3 anos**", obs: "«parágrafo da arquibancada»" },
    { ref: "Art. 20, § 2º-B", conduta: "Obstar/impedir/violência contra manifestações ou práticas religiosas", pena: "**Penas do caput (1–3 + multa)**", obs: "+ pena da violência (sem prejuízo)" },
    { ref: "Art. 20-A", conduta: "Majorante: contexto ou intuito de descontração, diversão ou recreação", pena: "**+1/3 até a metade**", obs: "vale para TODOS os crimes da lei" },
    { ref: "Art. 20-B", conduta: "Majorante: funcionário público (CP, art. 327) no exercício ou a pretexto das funções", pena: "**+1/3 até a metade**", obs: "só para arts. 2º-A e 20" },
  ],
  macete:
    "Quatro faixas, uma lei: **1–3** (balcão e consumo: 5º, 8º, 9º, 10, 11, 12, 20 caput) · **2–4** (caserna e casamento: 13, 14) · **2–5** (trabalho público/privado, injúria racial, suástica, mídia, arquibancada: 3º, 4º, 2º-A, 20 §§ 1º, 2º e 2º-A) · **3–5** (as portas mais caras: escola 6º e hospedagem 7º). Multa? Só no 2º-A, no 4º § 2º (como pena única!), no 20 caput e §§ 1º e 2º. Todo o resto é reclusão seca.",
};
