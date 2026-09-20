import type { Bloco } from "../tipos";

export const ptBloco1: Bloco = {
  id: "pt-bloco-1",
  numero: "Bloco 01",
  titulo: "Cabimento — o art. 1º depois das ADIs",
  intervalo: "Art. 1º, I a III, a–p",
  subtitulo: "I + III · II sozinho não prende · rol taxativo · ADI 3.360 e 4.109",
  descricao:
    "A 7.960 tem sete artigos (não oito). O 1º é o tipo da cautelar: quando cabe. O roteiro troca o inciso indispensável. O STF, em 2022, fechou a conta em cinco requisitos cumulativos.",
  notaProfessor: {
    titulo: "Correção de rota — não ensine o erro do roteiro",
    itens: [
      "O inciso **indispensável** não é o II (sem residência). O STF **veda** a temporária fundada só na falta de teto (prisão para averiguações / desigualdade). O núcleo é **I** (imprescindibilidade) **+ III** (rol + fumus).",
      "**STJ clássico (antes das ADIs):** I + III; o II é **dispensável**. Correntes antigas (tudo cumulativo / I ou II com III) caíram para prova moderna.",
      "**ADI 3.360 e 4.109/STF (2022), rel. Fachin:** cinco filtros **cumulativos**. Sem analogia no rol. Sem «será automática».",
    ],
  },
  grupos: [
    {
      id: "pt-art-1-incisos",
      ref: "Art. 1º, I e II",
      nome: "Imprescindibilidade × residência — o II não basta",
      contexto:
        "I é o periculum in libertate da investigação (não da instrução judicial). II parece um atalho para quem não tem endereço: o STF fechou esse atalho.",
      dispositivo: [
        "Art. 1º Caberá prisão temporária: (Vide ADI 3.360 e ADI 4.109)",
        "I – quando ==imprescindível para as investigações do inquérito policial==;",
        "II – quando o indicado não tiver ==residência fixa== ou não fornecer elementos necessários ao esclarecimento de sua ==identidade==;",
      ],
      notaDispositivo:
        "Cinco requisitos STF (cumulativos): (i) imprescindível para o inquérito, com elementos **concretos**, vedada a prisão para averiguações e a fundada só no inciso II; (ii) fundadas razões de autoria/participação em crime do **inciso III** (rol fechado); (iii) fatos **novos ou contemporâneos** (CPP 312, § 2º); (iv) adequação à gravidade concreta, às circunstâncias e às condições pessoais; (v) insuficiência das cautelares do 319/320 (CPP 282, § 6º). Só IP — nunca fase judicial nem execução.",
      pena: "Cautelar · só inquérito",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**I + III** (núcleo). II **não** é o requisito-chave.",
        "Cinco filtros das ADIs 3.360/4.109.",
        "Só **inquérito**. Denúncia oferecida = temporária cai (preventiva, se couber).",
        "Não cabe em culposo, contravenção, nem «para o cara depor».",
      ],
      pegadinha: [
        "«O inciso II é indispensável; I e III são alternativos» — **invertido**. II sozinho é **inconstitucional** como fundamento.",
        "«Os três incisos são sempre cumulativos» — o II **não** precisa estar presente.",
        "«Temporária na instrução, porque a testemunha some» — a lei fala **inquérito**.",
      ],
      exemplo: [
        "Mendigo suspeito de furto, sem endereço: **não** há temporária (furto fora do rol + II sozinho vedado).",
        "Homicídio, testemunhas ameaçadas, investigado identificado e com casa: **I + III**, mesmo com residência (II ausente e irrelevante).",
      ],
      macete:
        "**I prende a investigação. III prende o crime. II não prende ninguém sozinho.** Cinco filtros Fachin. Só no IP.",
    },
    {
      id: "pt-art-1-rol",
      ref: "Art. 1º, III, a–p",
      nome: "O rol taxativo — todas as alíneas",
      contexto:
        "Fundadas razões de autoria/participação, com qualquer prova admitida. Rol **fechado**: STF veda analogia e interpretação extensiva. Letras g/h nasceram mortas depois da 12.015/2009 (AVP e rapto). Tráfico remete à 6.368 — leia 11.343. Quadrilha = 288 (hoje associação). Alínea p = terrorismo (13.260/2016).",
      dispositivo: [
        "III – fundadas razões, de acordo com qualquer prova admitida, de autoria ou participação nos crimes:",
        "a) ==homicídio doloso== (121 caput e § 2º);",
        "b) sequestro ou cárcere privado (148 caput e §§ 1º e 2º);",
        "c) ==roubo== (157 caput e §§);",
        "d) extorsão (158); e) extorsão mediante sequestro (159);",
        "f) ==estupro== (213; o texto ainda cita o 223, revogado);",
        "g) atentado violento ao pudor (214 — ==revogado==, absorvido pelo 213);",
        "h) rapto violento (219 — ==revogado==);",
        "i) epidemia com resultado morte (267, § 1º);",
        "j) envenenamento de água/alimento/remédio qualificado pela morte (270 c/c 285);",
        "l) quadrilha ou bando (288); m) genocídio (Lei 2.889, arts. 1º–3º);",
        "n) tráfico de drogas (remissão à 6.368; hoje ==11.343==);",
        "o) crimes contra o sistema financeiro (Lei 7.492);",
        "p) crimes da Lei de ==Terrorismo== (13.260/2016).",
      ],
      notaDispositivo:
        "Não há alínea k. Culposos (121, § 3º; 302 do CTB) **fora**. Furto, estelionato, associação 35 da 11.343, 217-A: **fora do rol** — sem analogia (STF). **Porém** a Lei 8.072, art. 2º, § 4º, ao dar prazo de 30 dias «nos crimes previstos neste artigo», é lida por STJ/doutrina majoritária como **ampliação do cabimento** aos hediondos e equiparados (tortura, tráfico, terrorismo já no rol ou na 8.072). Banca: se a pergunta é «alíneas da 7.960», feche o rol; se é «cabe em hediondo não listado (latrocínio já está no 157, § 3º; feminicídio é 121, § 2º)», o homicídio qualificado e o latrocínio **estão** no texto.",
      pena: "Rol taxativo",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Liste a–p. Lembre **p = terrorismo** (2016).",
        "Homicídio **doloso** (não culposo). Roubo **sim**, furto **não**.",
        "Rol **sem analogia** (ADI 3.360/4.109).",
        "8.072, 2º, § 4º: prazo 30+30 e, na leitura majoritária, abre hediondos.",
      ],
      pegadinha: [
        "«Cabe em lesão grave / furto / homicídio culposo» — **não**.",
        "«217-A entra por analogia com o estupro» — STF **veda** analogia no III.",
        "«A lei tem art. 8º» — vai até o **7º** (vigência 6º, revogação 7º).",
      ],
      exemplo: [
        "Latrocínio: 157, § 3º, está na alínea c — cabe.",
        "Estupro de vulnerável: **não** está na letra f; sem analogia. (Hediondo: debate pelo 8.072, § 4º — marque a tese se a banca pedir corrente.)",
      ],
      macete:
        "**Rol fechado, letra p no fim (terror).** Furto e culpa não entram. I+III; II é enfeite. 8.072 alonga o relógio dos hediondos.",
    },
  ],
};
