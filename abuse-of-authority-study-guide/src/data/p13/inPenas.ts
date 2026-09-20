import type { QuadroPenal } from "../tipos";

export const quadroPenasP13: QuadroPenal = {
  id: "quadro-penas-p13",
  selo: "Quadro · Lei 9.296/1996",
  titulo: "Relógios, tetos e penas",
  intro:
    "A 9.296 não comina pena nos arts. 1º a 9º — comina no 10 e no 10-A. O resto é prazo e filtro.",
  linhas: [
    { ref: "4º, § 2º", conduta: "Decisão", pena: "**24 horas**", obs: "Pedido escrito; verbal excepcional" },
    { ref: "5º", conduta: "Diligência telefônica/telemática", pena: "**15 dias**, renovável (Tema 661 sucessivas)", obs: "Conta da execução, não da assinatura" },
    { ref: "2º, III", conduta: "Filtro do telefone", pena: "Veda máxima **detenção**", obs: "Precisa de **reclusão** no tipo" },
    { ref: "8º-A, II", conduta: "Filtro ambiental", pena: "Máxima **> 4 anos** (ou conexo)", obs: "Não copie o 2º, III" },
    { ref: "8º-A, § 3º", conduta: "Diligência ambiental", pena: "**15 dias**, iguais períodos", obs: "Permanente / habitual / continuada" },
    { ref: "10", conduta: "Interceptar / escuta ambiental / quebrar segredo", pena: "Reclusão **2 a 4** + multa", obs: "13.869 · PU = juiz" },
    { ref: "10-A", conduta: "Ambiental sem ordem (quando exigida)", pena: "Reclusão **2 a 4** + multa", obs: "§ 1º interlocutor atípico · § 2º dobro" },
    { ref: "11 e 12", conduta: "Vigência / revogação", pena: "—", obs: "**Não há** arts. 13 e 14" },
  ],
  macete:
    "**24 h no juiz, 15 na linha, 2 a 4 no 10.** Telefone = reclusão. Ambiental = > 4. A lei acaba no 12.",
};
