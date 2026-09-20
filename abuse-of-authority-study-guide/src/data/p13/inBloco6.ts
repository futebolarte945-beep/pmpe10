import type { Bloco } from "../tipos";

export const inBloco6: Bloco = {
  id: "in-bloco-6",
  numero: "Bloco 06",
  titulo: "O crime de furar a linha — e o de gravar a sala",
  intervalo: "Arts. 10 e 10-A",
  subtitulo: "2 a 4 anos · 13.869 · interlocutor atípico · sigilo em dobro",
  descricao:
    "Art. 10 (redação da 13.869, o art. 41 da Lei de Abuso): interceptar, promover escuta ambiental ou quebrar segredo de justiça, sem ordem ou com objetivo não autorizado. 2 a 4, multa. PU: o juiz que determina com objetivo não autorizado. 10-A: ambiental estatal sem ordem, quando a ordem era exigida.",
  notaProfessor: {
    titulo: "O 10 que a Parte 1 já mostrou",
    itens: [
      "A 13.869 **não** inventou o 2 a 4 — já era essa a pena. O que entrou: «promover **escuta ambiental**» no caput e o **parágrafo único** (juiz).",
      "10-A, § 1º: **não há crime** se a captação ambiental é de **um dos interlocutores**. É o espelho da gravação clandestina lícita.",
      "10-A, § 2º: pena **em dobro** ao funcionário público que quebra o sigilo da investigação/ambiental ou revela o conteúdo enquanto vale o sigilo judicial.",
    ],
  },
  grupos: [
    {
      id: "in-art-10",
      ref: "Art. 10",
      nome: "Interceptar sem juiz — reclusão 2 a 4",
      contexto:
        "Crime comum (qualquer pessoa). Ação pública incondicionada. Consuma-se com a captação (ou a quebra do segredo), pouco importe se o áudio «deu em alguma coisa». Concurso com 10 da 9.296 e tipos da 13.869 se a banca cruzar a Parte 1.",
      dispositivo: [
        "Art. 10 (13.869/2019). Constitui crime realizar interceptação de comunicações telefônicas, de informática ou telemática, promover ==escuta ambiental== ou quebrar ==segredo da Justiça==, sem autorização judicial ou com objetivos não autorizados em lei.",
        "Pena — reclusão, de ==2 (dois) a 4 (quatro) anos==, e multa.",
        "Parágrafo único. Incorre na mesma pena a ==autoridade judicial== que determina a execução de conduta prevista no caput com objetivo não autorizado em lei.",
      ],
      notaDispositivo:
        "«Objetivos não autorizados»: ordem existe, mas o fim é outro (pesca, vingança, PAD). O PU pega o juiz. Particular que grava a **própria** ligação não entra neste tipo (não é interceptação).",
      pena: "Reclusão 2–4 + multa",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Pena **2 a 4**, reclusão + multa (a mesma do abuso, art. 41).",
        "Caput: interceptar **ou** escuta ambiental **ou** quebrar segredo.",
        "PU: **juiz** com finalidade torpe.",
        "Público incondicionado. Sujeito: **qualquer um**.",
      ],
      pegadinha: [
        "«A pena do 10 é detenção 6 meses a 2» — **reclusão 2 a 4**.",
        "«Só o delegado responde» — o tipo é **comum**; o PU é o juiz.",
        "«A vítima gravou e comete o 10» — não é interceptação.",
      ],
      exemplo: [
        "Detetive particular clona o chip do cônjuge, sem juiz: art. 10. Juiz que autoriza a linha «para ajudar o amigo na vara de família»: PU do 10.",
      ],
      macete:
        "**2 a 4, e o juiz também senta no PU.** Quem grava a si mesmo não é o 10. Quem fura a linha dos outros, é.",
    },
    {
      id: "in-art-10a",
      ref: "Art. 10-A",
      nome: "Ambiental sem ordem — salvo o interlocutor",
      contexto:
        "Tipo do Pacote Anticrime, irmão do 8º-A. Só pune a captação ambiental **para investigação ou instrução criminal** sem ordem, **quando a ordem era exigida** (Estado). O particular que grava a reunião em que está **não** comete o 10-A (§ 1º).",
      dispositivo: [
        "Art. 10-A (13.964/2019). Realizar captação ambiental de sinais eletromagnéticos, ópticos ou acústicos para investigação ou instrução criminal ==sem autorização judicial, quando esta for exigida==.",
        "Pena — reclusão, de ==2 (dois) a 4 (quatro) anos==, e multa.",
        "§ 1º. ==Não há crime== se a captação é realizada por ==um dos interlocutores==.",
        "§ 2º. A pena será aplicada ==em dobro== ao funcionário público que descumprir determinação de sigilo das investigações que envolvam a captação ambiental ou revelar o conteúdo das gravações enquanto mantido o sigilo judicial.",
      ],
      notaDispositivo:
        "«Quando esta for exigida» exclui o caso em que o 8º-A nem caberia e o particular grava. Dobro do § 2º: 4 a 8. Não confundir o dobro com o caput do 10.",
      pena: "2–4 · dobro no § 2º",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Mesma pena-base do 10 (2 a 4).",
        "§ 1º: interlocutor = **atípico**.",
        "§ 2º: servidor que vaza = **dobro**.",
      ],
      pegadinha: [
        "«O empresário que grava a propina na sala comete o 10-A» — § 1º **exclui**.",
        "«O dobro do § 2º vale para qualquer particular» — é **funcionário público**.",
      ],
      exemplo: [
        "Policial instala botão na sala sem 8º-A: 10-A caput. O empresário que filmou o pedido de propina no próprio bolso: § 1º, e a fita pode ir à defesa (8º-A, § 4º).",
      ],
      macete:
        "**10-A é o policial sem papel.** Interlocutor está fora (§ 1º). Servidor fofoqueiro paga **dobro**.",
    },
  ],
};
