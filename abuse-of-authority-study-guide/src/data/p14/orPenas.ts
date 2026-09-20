import type { QuadroPenal } from "../tipos";

export const quadroPenasP14: QuadroPenal = {
  id: "quadro-penas-p14",
  selo: "Quadro · Lei 12.850/2013",
  titulo: "Pessoas, penas, prazos e papéis",
  intro: "Do conceito ao 21-B. 720 é virtual. 90 é ECA. 180 para solto não existe nesta lei.",
  linhas: [
    { ref: "1º, § 1º", conduta: "Conceito", pena: "**4+** · máxima **> 4** ou transnacional", obs: "Informal vale" },
    { ref: "2º", conduta: "Promover/constituir/financiar/integrar", pena: "**3 a 8** + multa", obs: "+ infrações-fim" },
    { ref: "2º, § 2º / § 3º / § 4º", conduta: "Arma / comando / 5 incisos", pena: "até ½ · agravada s/ fração · 1/6 a 2/3", obs: "§ 5º afastamento **com** salário" },
    { ref: "4º", conduta: "Colaboração", pena: "Perdão / até **2/3** / restritiva", obs: "§ 16: delação não basta" },
    { ref: "8º", conduta: "Ação controlada", pena: "**Comunicação** prévia", obs: "Não é autorização" },
    { ref: "10 / 10-A", conduta: "Infiltração física / virtual 12.850", pena: "6 meses · virtual teto **720** d", obs: "90 d = 13.441/ECA" },
    { ref: "15", conduta: "Cadastro", pena: "Sem juiz (nome, filiação, endereço)", obs: "Conteúdo/extrato: juiz" },
    { ref: "18 / 19 / 20 / 21", conduta: "Tipos da investigação", pena: "1–3 · 1–4 · 1–4 · 6m–2a (reclusão)", obs: "18 = colaborador, não infiltrado" },
    { ref: "21-A/B", conduta: "Obstrução 2025", pena: "**4 a 12** · máxima federal", obs: "15.245" },
    { ref: "22, PU", conduta: "Instrução", pena: "Preso **120 + 120**", obs: "**Não há 180** do solto" },
  ],
  macete:
    "**4 cabeças, 3 a 8, controlada avisa, infiltrado pede.** 720 na rede da facção. 120 no preso. 18 é foto do delator.",
};
