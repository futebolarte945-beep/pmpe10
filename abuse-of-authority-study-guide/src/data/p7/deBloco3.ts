import type { Bloco } from "../tipos";

export const deBloco3: Bloco = {
  id: "de-bloco-3",
  numero: "Bloco 03",
  titulo: "Comércio, tráfico e as majorantes",
  intervalo: "Arts. 17 ao 21-A",
  subtitulo: "17 e 18 são hediondos · 19 aumenta 17/18 · 20 não é «organização criminosa»",
  descricao:
    "Comércio ilegal (6–12) e tráfico internacional (8–16) saíram do chão com o Anticrime e entraram no rol hediondo (8.072, PU, III e IV). Art. 19 = +½ se a mercadoria for restrita/proibida. Art. 20 = +½ se o agente é do art. 6º/7º/8º ou reincidente específico — não é o tipo de org criminosa.",
  grupos: [
    {
      id: "de-art-17-18",
      ref: "Arts. 17 e 18",
      nome: "Comércio ilegal e tráfico internacional",
      contexto:
        "17 exige o exercício de atividade comercial ou industrial (ou a equiparação do § 1º: serviço, fabricação ou comércio clandestino, inclusive em casa). 18 é o cruzar a fronteira (importar, exportar, favorecer entrada/saída). Os dois têm a figura do agente policial disfarçado (Anticrime).",
      dispositivo: [
        "Art. 17. Adquirir, alugar, receber, transportar, conduzir, ocultar, ter em depósito, desmontar, montar, remontar, adulterar, vender, expor à venda ou de qualquer forma utilizar, em proveito próprio ou alheio, no ==exercício de atividade comercial ou industrial==, arma, acessório ou munição, sem autorização ou em desacordo:",
        "Pena – ~~reclusão, de 6 a 12 anos, e multa~~. (Lei 13.964/2019; antes 4–8)",
        "§ 1º Equipara-se à atividade comercial/industrial qualquer prestação de serviços, fabricação ou comércio ==irregular ou clandestino, inclusive em residência==.",
        "§ 2º Mesma pena quem vende/entrega a ==agente policial disfarçado==, com elementos razoáveis de conduta criminal ==preexistente==.",
        "Art. 18. Importar, exportar, favorecer a entrada ou a saída do território nacional, a qualquer título, de arma, acessório ou munição, sem autorização:",
        "Pena – ~~reclusão, de 8 a 16 anos, e multa~~. (Lei 13.964/2019; antes 4–8)",
        "PU: vende/entrega em operação de importação a policial disfarçado, com conduta preexistente.",
      ],
      notaDispositivo:
        "Vender uma pistola para o vizinho, sem reiteração nem «loja», é 14 (fornecer) ou 16 — **não** é 17. O 17 pede o **comércio** (mesmo clandestino em casa, se houver atividade). 18 não exige habitualidade: um cruzar a fronteira basta. Policial disfarçado: o Anticrime copiou a lógica do tráfico de drogas (conduta preexistente — não pode ser flagrante forjado). Hediondos: **sim** (8.072, PU, III e IV), tentados ou consumados.",
      pena: "17: recl. 6–12 · 18: recl. 8–16",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "17 = **comércio/indústria** (ou clandestino equiparado). Pena **6–12**. **Hediondo**.",
        "18 = importar/exportar/favorecer entrada ou saída. Pena **8–16**. **Hediondo**.",
        "Policial disfarçado: precisa de **conduta preexistente**.",
        "Um empréstimo/venda ocasional ≠ 17 (cai no 14/16).",
      ],
      pegadinha: [
        "«Pena do 17 e do 18 ainda é 4 a 8» — **Anticrime subiu** (6–12 e 8–16).",
        "«18 não é hediondo, só o 16» — 8.072 PU **III (17) e IV (18)**.",
        "«Vendeu a pistola do CRAF para o cunhado = comércio 17» — sem atividade comercial, é **14**.",
      ],
      exemplo: [
        "Barraca no fundo do quintal montando e vendendo revólveres: **17** (§ 1º, residência).",
        "Caminhão com fuzis escondidos na fronteira com o Paraguai: **18**.",
        "Dono de loja entrega uma 9 mm ao PF disfarçado, depois de já ter vendido outras: **17 § 2º**.",
      ],
      macete:
        "**17 é a loja (mesmo no quarto) — 6 a 12, hediondo. 18 é a fronteira — 8 a 16, hediondo.** Venda de vizinho é 14/16. Disfarçado só vale se o comércio **já existia**.",
    },
    {
      id: "de-art-19-21",
      ref: "Arts. 19 a 21-A",
      nome: "As metades, o art. 20 que o roteiro errou, e a ADI 3.112",
      contexto:
        "19 aumenta pela metade os arts. 17 e 18 se a coisa for de uso proibido ou restrito. 20 aumenta pela metade os arts. 14, 15, 16, 17 e 18 se o agente é dos arts. 6º/7º/8º OU reincidente específico. 21 (insuscetíveis de liberdade provisória) caiu na ADI 3.112. 21-A (2026) soma 2/3 com tráfico de drogas.",
      dispositivo: [
        "Art. 19. Nos crimes dos arts. ==17 e 18==, a pena é aumentada da ==metade== se a arma, acessório ou munição forem de uso ==proibido ou restrito==.",
        "Art. 20. Nos crimes dos arts. ==14, 15, 16, 17 e 18==, a pena é aumentada da ==metade== se: (Lei 13.964/2019)",
        "I – forem praticados por integrante dos órgãos e empresas referidos nos arts. ==6º, 7º e 8º==; ou",
        "II – o agente for ==reincidente específico== em crimes dessa natureza.",
        "Art. 21. Os crimes dos arts. 16, 17 e 18 são insuscetíveis de liberdade provisória. ==(ADI 3.112: inconstitucional)==.",
        "Art. 21-A. Nos arts. 12, 14 e 16, a pena é aumentada de ==2/3== se o crime for praticado em concurso com crime da Lei 11.343/2006, estiver ligado ao comércio ilícito de entorpecentes ou o artefato tiver sido usado para assegurar a mercancia. (Lei nº 15.358/2026)",
      ],
      notaDispositivo:
        "PEGADINHA DO ROTEIRO: «art. 20 = funcionário público / integrante de organização criminosa». O texto **não diz isso**. I = quem tem porte funcional (policial, guarda, segurança privada, atirador desportivo do 8º…). II = reincidência **específica** em crimes da mesma natureza. Organização criminosa hedionda mora no **8.072, PU, V** (quando voltada a hediondo/equiparado) — não no 20. Art. 19 **não** pega 12/14/16 (já nascem com o rótulo da arma). 12 e 13 ficam **fora** do 20.",
      pena: "19: +½ (17/18) · 20: +½ (14–18) · 21-A: +2/3 (12, 14, 16 + drogas)",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "19 = +**½** só em **17 e 18**, se restrito/proibido.",
        "20 = +**½** em 14, 15, 16, 17 e 18: (I) agente do **6º/7º/8º** ou (II) **reincidente específico**.",
        "**12 e 13 não entram no 20.**",
        "Art. 21 **não vale** (ADI 3.112).",
        "21-A (2026): +**2/3** se 12/14/16 + tráfico.",
        "Ação penal de todos: pública **incondicionada** (não há representação).",
      ],
      pegadinha: [
        "«Art. 20 aumenta se for organização criminosa» — **não está no 20**. Org. criminosa hedionda = **8.072, PU, V**.",
        "«Qualquer funcionário público dobra a pena» — só o rol dos **arts. 6º, 7º e 8º** (quem porta por ofício/empresa/clube).",
        "«19 aumenta o 16» — 19 é só **comércio e tráfico internacional**.",
        "«16, 17 e 18 são inafiançáveis / sem liberdade provisória pelo art. 21» — **ADI 3.112**.",
      ],
      exemplo: [
        "Policial militar na folga, com pistola da corporação na boca do caixa: **14 ou 16** + **20, I** (+½).",
        "Réu já condenado por 14, agora pego de novo portando: **20, II**.",
        "Tráfico internacional de fuzis (restrito): **18** hediondo + **19** (+½).",
        "Posse (12) da pistola no barraco do tráfico: **12 + 21-A** (+2/3), se o nexo com a 11.343 estiver na denúncia.",
      ],
      macete:
        "**19 = metade no comércio/fronteira se a arma é feia. 20 = metade se é da farda/empresa/clube ou se já fez isso antes.** Não é «funcionário» genérico nem PCC no artigo. **21 morreu na ADI 3.112.** 21-A (2026) = arma + droga → +2/3.",
    },
  ],
};
