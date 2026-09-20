import type { Bloco } from "../tipos";

export const inBloco5: Bloco = {
  id: "in-bloco-5",
  numero: "Bloco 05",
  titulo: "Crime achado e a fita que viaja",
  intervalo: "Serendipidade · prova emprestada",
  subtitulo: "Conexo · autônomo com reclusão · PAD e cível",
  descricao:
    "A linha estava no tráfico e apareceu um homicídio. Ou um desvio no INSS. A banca chama de serendipidade (encontro fortuito) e de prova emprestada (o mesmo áudio em outro processo). O filtro de ouro: a interceptação-mãe era **lícita** e não houve desvio de finalidade.",
  notaProfessor: {
    titulo: "A 2ª grau não é mais «prova morta»",
    itens: [
      "Classificação didática: **1º grau** = crime **conexo** (ou o mesmo contexto) ao que justificou a quebra → prova **válida** (STF/STJ pacíficos).",
      "**2º grau** = crime **autônomo**, sem conexão. O roteiro ainda fala em «controvérsia / instaure IP novo e esqueça a fita». STF (HC 129.678, «crime achado») e STJ: a prova **pode** ser usada se a medida original era lícita, o crime achado também seria interceptável (**reclusão**) e **não** houve desvio de finalidade (não se pediu A para pescar B).",
      "Prova emprestada para PAD, cível, eleitoral: STF/STJ admitem, com contraditório no destino e respeito ao sigilo. A 9.296 **não** autoriza interceptar **para** o PAD; autoriza **aproveitar** o que nasceu no penal.",
    ],
  },
  grupos: [
    {
      id: "in-serendipidade",
      ref: "STF · STJ",
      nome: "Serendipidade — o crime que ninguém pediu",
      contexto:
        "Desde que a ordem inicial cumpra o 2º e o 5º, o Estado não é obrigado a desligar o ouvido quando o diálogo vira outro tipo penal. O que anula é a pesca (desvio) ou o crime achado que **nem reclusão tem** (o 2º, III, continuaria a barrar uma interceptação autônoma).",
      dispositivo: [
        "Serendipidade de ==1º grau==: fato ==conexo== (ou circunstância do mesmo contexto) ao crime que justificou a interceptação. Prova ==lícita==. STF/STJ.",
        "Serendipidade de ==2º grau== / «crime achado»: fato ==autônomo==. STF (HC 129.678): lícito se a interceptação era válida, o crime é apenado com ==reclusão== e não houve desvio de finalidade.",
        "STJ: é legítimo usar a informação para apurar conduta diversa da que originou a quebra, quando o encontro é ==fortuito==.",
      ],
      notaDispositivo:
        "Apareceu um 147 (detenção) no meio do tráfico: aquele trecho **não** sustenta, sozinho, uma interceptação nova — e a doutrina majoritária recusa o aproveitamento pleno contra o 2º, III. Apareceu um homicídio: entra. Competência: remete ao juízo certo; a fita não morre só porque o juiz da linha não era o do júri (com o debate do Bloco 7 sobre incompetência).",
      pena: "Encontro fortuito",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "1º grau (conexo) = **vale**.",
        "2º grau: vale se a mãe era lícita + crime achado com **reclusão** + sem pesca.",
        "Desvio de finalidade (pediu A para achar B) = **ilícito**.",
      ],
      pegadinha: [
        "«Todo crime achado é nulo, porque o pedido era outro» — STF **não** diz isso.",
        "«Achou contravenção: intercepta o resto da vida nela» — o 2º, III, continua de pé.",
      ],
      exemplo: [
        "Autorização para tráfico. No 12º dia, o alvo marca um latrocínio. A fita do latrocínio **entra** (crime achado + reclusão). Se o delegado já sabia do latrocínio e pediu «tráfico» só para pescar: desvio — **cai**.",
      ],
      macete:
        "**Fortuito com reclusão vive. Pesca morre.** Conexo é 1º grau. Autônomo é 2º — e o STF já abriu a porta.",
    },
    {
      id: "in-emprestada",
      ref: "Prova emprestada",
      nome: "A mesma fita no PAD e no cível",
      contexto:
        "O áudio nasceu no penal. O destino (PAD, improbidade, família, eleitoral) pode **emprestar**, com contraditório e ampla defesa no processo de destino. Não se instala chip «para a corregedoria».",
      dispositivo: [
        "STF/STJ: admite-se a ==prova emprestada== da interceptação lícita para processos ==não penais==, assegurados o contraditório e a ampla defesa no feito de destino.",
        "A 9.296 ==não== é porta de entrada autônoma do PAD, da CPI ou da vara cível.",
      ],
      notaDispositivo:
        "Sigilo (art. 8º) não impede o empréstimo **autorizado** pelo juízo penal; impede o vazamento. Sem autorização judicial de compartilhamento, o PAD que «ganha» a fita no corredor arrisca ilicitude.",
      pena: "Compartilhamento",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Empréstimo **sim**, interceptação **para** o PAD **não**.",
        "Contraditório no processo de **destino**.",
      ],
      pegadinha: [
        "«O art. 1º fala em investigação criminal; logo o PAD nunca pode ver a fita» — pode **emprestada**, não **originária**.",
      ],
      exemplo: [
        "Interceptação de peculato. A corregedoria pede ao juízo criminal o trecho do servidor. Compartilhado, com defesa no PAD: lícito. A corregedoria que pede chip próprio ao juiz cível: **fora** da 9.296.",
      ],
      macete:
        "**Empresta o que já nasceu no penal.** Não engravida o PAD com chip novo.",
    },
  ],
};
