import type { QuadroPenal } from "../tipos";

export const quadroPenasP15: QuadroPenal = {
  id: "quadro-penas-p15",
  selo: "Quadro geral · Fase 2",
  titulo: "Lei · número · tema · o cuidado",
  intro:
    "Decoreba da Parte 15. A coluna «pena» é o recado da tese. A «obs» é o que a banca distorce.",
  linhas: [
    { ref: "7.960", conduta: "ADIs 3.360/4.109", pena: "**I+III** · II sozinho vedado", obs: "Sem ofício · 5+5 / 30+30 na 8.072" },
    { ref: "243/STJ", conduta: "Sursis · concurso", pena: "Mínima > 1 ano → sem 89", obs: "≠ conexão (60, PU)" },
    { ref: "337/STJ", conduta: "Desclassificação / procedência parcial", pena: "Volta o 89", obs: "Ouve o MP de novo" },
    { ref: "723/STF", conduta: "Crime continuado", pena: "Mínima + 1/6 > 1 ano → sem 89", obs: "Irmã da 243" },
    { ref: "696/STF", conduta: "MP recusa o 89", pena: "Analogia ao **art. 28 CPP**", obs: "≠ querelante" },
    { ref: "536/STJ", conduta: "LMP × 9.099 premial", pena: "Sem transação / sem sursis", obs: "≠ «reparação do dano»" },
    { ref: "203/STJ · 640/STF", conduta: "Turma Recursal", pena: "Sem REsp · com RE", obs: "Reclamação para tese STJ" },
    { ref: "STF 76", conduta: "Transação descumprida", pena: "**Denúncia**, não execução", obs: "Sem coisa julgada material" },
    { ref: "Tema 661/STF", conduta: "Interceptação 15 dias", pena: "Renovações **sucessivas**", obs: "Motivação concreta" },
    { ref: "STF gravação", conduta: "Um interlocutor", pena: "Prova **lícita** (regra)", obs: "Não é 9.296" },
    { ref: "HC 129.678", conduta: "Crime achado", pena: "2º grau pode valer", obs: "Reclusão + sem pesca" },
    { ref: "STJ GPS", conduta: "Geolocalização contínua", pena: "Exige **juiz**", obs: "≠ cadastro pontual" },
    { ref: "Pet 7.074", conduta: "Colaboração", pena: "Juiz **fora** da mesa", obs: "Delegado pode no IP" },
    { ref: "4º, § 16", conduta: "Só a delação", pena: "Não segura cautelar, denúncia nem condenação", obs: "13.964" },
    { ref: "SV 14", conduta: "IP sigiloso", pena: "Defesa vê o **documentado**", obs: "Diligência em curso, não" },
    { ref: "STJ 8º", conduta: "Ação controlada", pena: "**Comunicação**, não alvará", obs: "Infiltrado é o contrário" },
    { ref: "10-A / 13.441", conduta: "Infiltração virtual", pena: "**720** d (12.850) · **90** d (ECA)", obs: "Não empreste o prazo" },
    { ref: "331/STJ · 703/STF", conduta: "Fora do caderno", pena: "Arrematação · prefeito", obs: "Roteiro colou no JE — **não**" },
  ],
  macete:
    "**I+III. 243 soma. 536 é a Maria. 696 é o 28. 661 repete. 7.074 fora da mesa. 720 ≠ 90.** 331 e 703 não visitam o Juizado.",
};
