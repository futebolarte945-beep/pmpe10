import type { Bloco } from "../tipos";

export const juBloco1: Bloco = {
  id: "ju-bloco-1",
  numero: "Bloco 01",
  titulo: "Abuso de Autoridade e Racismo",
  intervalo: "Leis 13.869/2019 e 7.716/1989",
  subtitulo: "Dolo específico · HC 154.248 · injúria = racismo",
  descricao:
    "Pouca súmula, muita tese. No abuso, a banca testa o elemento subjetivo do art. 1º. No racismo, o HC 154.248 e a Lei 14.532/2023 viraram o jogo da injúria.",
  notaProfessor: {
    titulo: "Como ler este dossiê",
    itens: [
      "Cada card é um enunciado: **dispositivo = tese**, **cai = como a banca cobra**, **pegadinha = a distorção**.",
      "Não há súmula STJ/STF numerada «de abuso». O que cai é o **dolo específico** (art. 1º da 13.869) e a distinção com a tortura (Parte 05).",
    ],
  },
  grupos: [
    {
      id: "ju-abuso-dolo",
      ref: "Art. 1º, 13.869 · STF",
      nome: "Abuso exige dolo específico",
      contexto:
        "A 4.898/65 era aberta. A 13.869 fechou: só há crime se o agente atua para prejudicar alguém ou para beneficiar a si ou a terceiro. Sem esse fim, pode haver irregularidade administrativa — não o tipo.",
      dispositivo: [
        "📋 Enunciado (tese dominante, STF/STJ). Os crimes da Lei 13.869/2019 exigem ==dolo específico==: vontade de praticar a conduta ==para prejudicar outrem ou beneficiar a si mesmo ou a terceiro== (art. 1º, caput e § 1º). O excesso culposo e o mero erro de interpretação razoável ==não== preenchem o tipo (§ 2º).",
      ],
      notaDispositivo:
        "Bancas (Cebraspe/FGV) amam o policial que prende com excesso de prazo «porque a carga estava alta»: sem o fim de prejudicar/beneficiar, atípico. Não confunda com tortura (9.455), que é crime comum e não exige o mesmo elemento.",
      pena: "Tese · sem súmula numerada",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Questão «certo/errado»: abuso é crime de ==mão própria do agente público== + dolo específico.",
        "§ 2º: divergência interpretativa razoável ==afasta== o crime.",
        "Penas da 13.869 são, em regra, detenção — a reclusão da interceptação veio pela 9.296 (art. 41).",
      ],
      pegadinha: [
        "«Basta o excesso objetivo da prisão para configurar o art. 9º» — falta o ==fim== do art. 1º.",
        "«Abuso e tortura são o mesmo dolo» — tortura tem fins próprios (confissão, discriminação, etc.).",
      ],
      exemplo: [
        "Delegado mantém o flagrante 48 h além do prazo por congestionamento de cartório, sem perseguir o preso: falta dolo específico.",
        "Delegado prolonga a prisão para «ensinar» o advogado: 13.869.",
      ],
      macete:
        "**Sem «para prejudicar ou beneficiar», não há 13.869.** Excesso burro é PAD, não cadeia.",
    },
    {
      id: "ju-hc-154248",
      ref: "HC 154.248/STF · 2019",
      nome: "Injúria racial = racismo (impresscriptível)",
      contexto:
        "Antes, injúria racial (CP 140, § 3º) prescrevia e admitia fiança. O Plenário do STF, no HC 154.248 (rel. Min. Edson Fachin, 2019), equiparou-a ao racismo da 7.716 para os efeitos do art. 5º, XLII, da CF. A Lei 14.532/2023 depois deslocou o tipo para a 7.716 (art. 2º-A) e cravou a mesma lógica na lei.",
      dispositivo: [
        "📋 Enunciado (HC 154.248/STF, 2019). A ==injúria racial== (então CP 140, § 3º) ostenta a mesma natureza jurídica do ==racismo== (Lei 7.716): crime ==inafiançável e imprescritível== (CF, art. 5º, XLII).",
        "Lei 14.532/2023: o tipo mora agora no art. ==2º-A== da 7.716 (reclusão 2–5 + multa), com as mesmas consequências.",
      ],
      notaDispositivo:
        "Racismo (7.716) ofende a coletividade; injúria racial ofende a honra de pessoa determinada — mas o STF unificou o regime constitucional. A banca ainda cobra a distinção típica (coletivo vs. indivíduo) e, na mesma questão, a unificação de imprescritibilidade.",
      pena: "Inafiançável · imprescritível",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Injúria racial **imprescritível** (154.248 + 14.532).",
        "Ainda se distingue: racismo = coletividade; injúria = honra individual — mas o **regime** é o do racismo.",
        "Ação penal: pública incondicionada (depois da reforma).",
      ],
      pegadinha: [
        "«Injúria racial prescreve em 8 anos, porque está no CP» — **não** após 154.248/14.532.",
        "«STF descriminalizou a injúria racial» — fez o contrário: **endureceu** o regime.",
      ],
      exemplo: [
        "Ofensa «macaco» a um colega de trabalho em 2010, processada em 2024: a imprescritibilidade do HC 154.248 segura a persecução.",
      ],
      macete:
        "**154.248: injúria racial veste a capa do racismo.** Coletivo vs. indivíduo distingue o tipo; não salva a prescrição.",
    },
  ],
};
