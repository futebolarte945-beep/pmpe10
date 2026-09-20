import type { Bloco } from "../tipos";

export const toBloco2: Bloco = {
  id: "to-bloco-2",
  numero: "Bloco 02",
  titulo: "Penas, qualificadoras e os cadeados",
  intervalo: "Art. 1º, §§ 3º ao 7º",
  subtitulo: "4–10 / 8–16, +1/6 a 1/3, perda do cargo, fiança e o fechado que poupa o omisso",
  descricao:
    "O § 3º preterdoloso, o § 4º que aumenta (agente público, vítimas vulneráveis, sequestro), o § 5º que demite, o § 6º que copia a CF e o § 7º do regime inicial — com a ressalva de ouro do § 2º.",
  grupos: [
    {
      id: "to-art-1-s3",
      ref: "Art. 1º, § 3º",
      nome: "Lesão grave e morte",
      contexto:
        "Qualificadoras preterdolosas: o dolo é de torturar; o resultado lesão grave/gravíssima ou morte é culposo. Se o agente quis a morte, é homicídio doloso em concurso (ou dolo direto de matar por meio cruel).",
      dispositivo: [
        "§ 3º Se resulta ==lesão corporal de natureza grave ou gravíssima==, a pena é de ~~reclusão de quatro a dez anos~~; se resulta ==morte==, a reclusão é de ~~oito a dezesseis anos~~.",
      ],
      notaDispositivo:
        "Não há qualificadora para lesão leve (fica no caput 2–8, que já é mais grave que o 129 caput). Morte: 8–16 — NÃO 4–12 (número que aparece em material velho). Equiparada a hediondo: progressão pela LEP 112 (data do fato). Livramento: CP 83, V (2/3, sem reincidente específico).",
      pena: "Grave: 4–10 · morte: 8–16",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Lesão **grave/gravíssima** = 4–10. **Morte** = 8–16.",
        "Preterdolo: se quis a morte, não use só o § 3º — vá ao **121**.",
        "Lesão leve não qualifica.",
      ],
      pegadinha: [
        "«Tortura com morte: 4 a 12» — **ERRADO**, é **8 a 16**.",
        "«Tortura com morte é homicídio qualificado pelo meio cruel, só» — pode ser o § 3º (se a morte não foi querida) ou 121 (se foi).",
      ],
      exemplo: [
        "Choques para confessar; a vítima tem infarto e morre — dolo de torturar, culpa na morte: **§ 3º, 8–16**.",
        "Espanca até a vítima parar de respirar, assumindo a morte: **121** (meio cruel) ± tortura em concurso formal impróprio — tese de prova.",
      ],
      macete:
        "**Leve fica no 2–8. Grave sobe para 4–10. Morte vai a 8–16.** Se quis matar, saiu do § 3º. 4–12 é número **fantasma**.",
    },
    {
      id: "to-art-1-s4",
      ref: "Art. 1º, § 4º",
      nome: "As majorantes de 1/6 a 1/3",
      contexto:
        "Três portas de aumento — e a farda é uma delas, não o tipo. Idoso entrou pelo Estatuto (Lei 10.741/2003).",
      dispositivo: [
        "§ 4º Aumenta-se a pena de ==um sexto até um terço==:",
        "I - se o crime é cometido por ==agente público==;",
        "II - se o crime é cometido contra ==criança, gestante, portador de deficiência, adolescente ou maior de 60 (sessenta) anos==; (Lei nº 10.741/2003)",
        "III - se o crime é cometido mediante ==sequestro==.",
      ],
      notaDispositivo:
        "Frações: 1/6 a 1/3 (não 1/3 a 1/2, não 1/6 a 1/2). Inciso II: criança (<12, ECA) e adolescente (12–18) listados **separados**. 60 anos = Estatuto do Idoso. Sequestro (III) é o meio — não confunda com o 148 como crime único. Agente público (I) + vítima criança (II): o juiz pode cumular, com cuidado de proporcionalidade.",
      pena: "+1/6 a 1/3",
      bancas: ["CEBRASPE", "AOCP", "FCC", "FGV"],
      cai: [
        "Agente público = **majorante**, não elementar do inciso I.",
        "Vítimas do II: criança, gestante, PCD, adolescente, **≥ 60**.",
        "Sequestro como **meio** (III).",
        "Frações **1/6 a 1/3**.",
      ],
      pegadinha: [
        "«Aumento de 1/3 a 1/2» — **ERRADO**.",
        "«Idoso não entra» — entra desde 2003.",
        "«Sem farda não há tortura» — de novo: a farda **aumenta**.",
      ],
      exemplo: [
        "PM tortura adolescente negro para confessar: I, a + § 4º, I e II.",
        "Sequestrador particular tortura o refém: caput I, a + § 4º, III (sem o I).",
      ],
      macete:
        "**Farda, frágil, cárcere.** Aumenta **1/6 a 1/3**. Frágeis = criança, gestante, PCD, adolescente, 60+. Sem farda o crime **já existe**.",
    },
    {
      id: "to-art-1-s5-s7",
      ref: "Art. 1º, §§ 5º a 7º",
      nome: "Perda do cargo, AGI-F e o regime fechado",
      contexto:
        "§ 5º demite e interdita pelo dobro da pena. § 6º fecha fiança, graça e anistia. § 7º manda começar fechado — menos o omisso do § 2º.",
      dispositivo: [
        "§ 5º A condenação ==acarretará a perda do cargo, função ou emprego público== e a ==interdição== para seu exercício pelo ==dobro do prazo da pena== aplicada.",
        "§ 6º O crime de tortura é ==inafiançável== e insuscetível de ==graça ou anistia==.",
        "§ 7º O condenado por crime previsto nesta Lei, ==salvo a hipótese do § 2º==, iniciará o cumprimento da pena em ==regime fechado==.",
      ],
      notaDispositivo:
        "§ 5º: efeito **automático** da condenação («acarretará») — diferente do abuso de autoridade (Lei 13.869, art. 4º, que exige dosimetria e motivação, e só em reclusão). Abrange emprego público. Interdição = dobro da pena. § 6º copia a CF (graça e anistia) e a fiança; o **indulto** vem da Lei 8.072, art. 2º, I (equiparados). § 7º: inicial fechado, com a mesma lógica do art. 2º, § 1º, da 8.072 (HC 82.959 / SV 26: inicial, não integral). Omitente (§ 2º) **não** pega esse inicial fechado.",
      pena: "Efeitos + regime",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Perda do cargo na tortura: **automática** com a condenação. No abuso: **não** automática.",
        "Interdição pelo **dobro** da pena.",
        "§ 6º: inafiançável + sem graça + sem anistia. Indulto: **8.072**, não este parágrafo.",
        "Regime **inicial** fechado, **exceto omissão** (§ 2º).",
      ],
      pegadinha: [
        "«A perda do cargo na tortura depende de fundamentação como no art. 4º da 13.869» — **ERRADO** (aqui «acarretará»).",
        "«§ 6º também veda o indulto» — o § 6º **não escreve** indulto; quem veda é a 8.072.",
        "«Todo condenado por 9.455 começa fechado» — o **§ 2º está salvo**.",
        "«Cumprimento integralmente fechado» — inconstitucional (SV 26); o texto diz **iniciará**.",
      ],
      exemplo: [
        "Agente penitenciário condenado a 5 anos no caput: perde o cargo + 10 anos de interdição + começa fechado.",
        "Delegado omitente (§ 2º) condenado a 2 anos de detenção: **não** inicia obrigatoriamente em fechado; a perda do cargo do § 5º ainda «acarreta» — a banca cobra a literalidade.",
      ],
      macete:
        "**Demite na hora (§ 5º), tranca fiança/graça/anistia (§ 6º), começa fechado (§ 7º) — menos quem só omitiu.** Indulto mora na **8.072**. Abuso **pede** fundamentação para demitir; tortura **já demite**.",
    },
  ],
};
