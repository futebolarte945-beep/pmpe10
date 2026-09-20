import type { Bloco } from "../tipos";

export const deBloco2: Bloco = {
  id: "de-bloco-2",
  numero: "Bloco 02",
  titulo: "Crimes em espécie — posse, omissão, porte, disparo e o 16",
  intervalo: "Arts. 12 ao 16",
  subtitulo: "Perigo abstrato · 15 não aumenta · restrito NÃO é hediondo",
  descricao:
    "Cinco tipos. 12 e 14 separam posse e porte do permitido. 13 é o único culposo típico da lei. 15 é disparo subsidiário. 16 é o núcleo pesado: caput = restrito (3–6, comum); § 1º = equiparados; § 2º = proibido (4–12) — e só o proibido é hediondo.",
  notaProfessor: {
    titulo: "A isca do Pacote Anticrime",
    itens: [
      "**Lei 13.497/2017** tornou hediondo o art. 16 (restrito/proibido, então misturados).",
      "**Lei 13.964/2019** cindiu o 16: caput = **restrito**; § 1º = equiparados; § 2º = **proibido** (4–12). E o art. 1º, PU, II, da Lei 8.072 passou a dizer só **uso proibido**.",
      "Conclusão de prova (STJ, Súm. 668): **restrito (16 caput) NÃO é hediondo. Permitido com numeração raspada (16 § 1º, IV) NÃO é hediondo.** Hediondo no 16 = **§ 2º (proibido)**.",
      "ADI 3.112/STF: caiu a inafiançabilidade dos arts. **14 e 15** e a vedação de liberdade provisória do **art. 21**. Alternativa que ainda copie o PU do 14/15 ou o 21, como se vigorassem, está morta.",
    ],
  },
  grupos: [
    {
      id: "de-art-12-13",
      ref: "Arts. 12 e 13",
      nome: "Posse irregular do permitido e a omissão de cautela",
      contexto:
        "12 = ter em casa/trabalho o permitido sem o papel em dia. Perigo abstrato: não precisa estar municiada. 13 = deixar menor de 18 ou deficiente mental se apoderar da arma — o único tipo claramente culposo do Estatuto.",
      dispositivo: [
        "Art. 12. ==Possuir ou manter sob sua guarda== arma de fogo, acessório ou munição, de ==uso permitido==, em desacordo com determinação legal ou regulamentar, no interior de sua ==residência ou dependência==, ou no ==local de trabalho==, desde que seja o titular ou o responsável legal:",
        "Pena – ~~detenção, de 1 a 3 anos, e multa~~.",
        "Art. 13. Deixar de observar as cautelas necessárias para impedir que ==menor de 18 anos== ou pessoa portadora de ==deficiência mental== se apodere de arma de fogo que esteja sob sua posse ou seja de sua propriedade:",
        "Pena – ~~detenção, de 1 a 2 anos, e multa~~.",
        "Parágrafo único. Nas mesmas penas o proprietário/diretor de empresa de segurança/transporte de valores que não registrar ocorrência e não comunicar à PF a perda/furto/roubo/extravio nas primeiras ==24 horas==.",
      ],
      notaDispositivo:
        "12 cabe arma **ou** acessório **ou** munição — um carregador, um cartucho. Desmuniciada configura. Pena máxima 3 anos: **não é** de menor potencial ofensivo (filtro = 2 anos). 13 sim (máx. 2) → JECRIM. 13 não exige que o menor dispare: basta o apoderamento por falha de cautela (culpa). O PU do 13 é omissão de comunicação em 24 h (empresa de segurança) — não é «omissão de cautela com menor».",
      pena: "12: det. 1–3 · 13: det. 1–2",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "12 = **posse** do permitido irregular (casa/trabalho). Perigo **abstrato**.",
        "Arma **ou** acessório **ou** munição. Desmuniciada **configura**.",
        "12 **não** é JECRIM (máx. 3). 13 **é** (máx. 2).",
        "13 = menor de 18 **ou** deficiente mental se apodera por falta de cautela.",
        "PU do 13: 24 h para comunicar extravio (segurança privada).",
      ],
      pegadinha: [
        "«Sem munição o 12 é atípico» — **ERRADO** (perigo abstrato; o tipo pega acessório/munição isolados).",
        "«12 é hediondo» — **nunca foi**.",
        "«13 exige que o menor atire» — basta o **apoderamento**.",
        "«Esqueceu a arma no carro = 12» — carro = **porte (14)**.",
      ],
      exemplo: [
        "Revólver permitido no criado-mudo, CRAF vencido: **12**.",
        "Só uma caixa de munição .38 na gaveta, sem arma: **12**.",
        "Pistola no alto do armário, criança de 10 alcança e brinca: **13** (o pai).",
      ],
      macete:
        "**12 é a gaveta sem papel (1 a 3, detenção, não JECRIM).** Cartucho sozinho já dá. **13 é o menor que pega a arma — culpa, 1 a 2, JECRIM.** Carro não é gaveta.",
    },
    {
      id: "de-art-14-15",
      ref: "Arts. 14 e 15",
      nome: "Porte do permitido e o disparo que não é aumento",
      contexto:
        "14 = o verbo-festival (portar, deter, adquirir, fornecer, transportar…) do permitido sem autorização. 15 = disparar ou acionar munição em lugar habitado / adjacências / via pública / em direção a ela — e só se não for meio de outro crime.",
      dispositivo: [
        "Art. 14. Portar, deter, adquirir, fornecer, receber, ter em depósito, transportar, ceder (ainda que grátis), emprestar, remetar, empregar, manter sob guarda ou ocultar arma, acessório ou munição de ==uso permitido==, sem autorização e em desacordo:",
        "Pena – ~~reclusão, de 2 a 4 anos, e multa~~.",
        "Parágrafo único. Inafiançável, salvo se a arma estiver registrada em nome do agente. ==(ADI 3.112: inconstitucional a inafiançabilidade)==.",
        "Art. 15. Disparar arma de fogo ou acionar munição em ==lugar habitado ou adjacências==, em ==via pública== ou em direção a ela, desde que a conduta ==não tenha como finalidade a prática de outro crime==:",
        "Pena – ~~reclusão, de 2 a 4 anos, e multa~~.",
        "Parágrafo único. Inafiançável. ==(ADI 3.112: inconstitucional)==.",
      ],
      notaDispositivo:
        "14 é reclusão 2–4 (sai do JECRIM). «Manter sob guarda» no 14 não é a posse do 12: é guardar **fora** do endereço do 5º (depósito, sítio de terceiro, mala). 15: lugar habitado, via pública e adjacências são **elementares**, não causas de aumento. Subsidiariedade expressa: tiro para matar = homicídio, não 15 em concurso. Acionar munição (estourar cartucho no chão) já basta.",
      pena: "Reclusão 2–4 + multa (ambos)",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "14 = **porte** (e o festival de verbos) do permitido. Reclusão 2–4.",
        "15 = disparo/acionar munição + lugar habitado/via. **Subsidiário**.",
        "Habitado / via pública = **tipo**, não aumento.",
        "Inafiançabilidade dos PU: **não vale** (ADI 3.112).",
      ],
      pegadinha: [
        "«Art. 15 aumenta a pena se for via pública / lugar habitado» — isso **é o crime**. Sem isso, atípico (tiro no descampado sem via e sem habitação).",
        "«Atirou para assustar o rival: 15 + ameaça» — se o disparo é meio de outro crime, o 15 **recua**.",
        "«14 é inafiançável» — **ADI 3.112** derrubou.",
      ],
      exemplo: [
        "Pistola .380 na cintura, sem porte: **14**.",
        "Réveillon, tiro para o alto na avenida: **15**.",
        "Mesmo tiro para acertar o vizinho: **homicídio** (tentado/consumado), não 15.",
      ],
      macete:
        "**14 anda com o permitido (2 a 4 recl.). 15 atira na cidade — e só se não for meio de outro crime.** Habitado/via **não aumentam**: eles **são** o 15. Fiança dos PU = lixo da ADI 3.112.",
    },
    {
      id: "de-art-16",
      ref: "Art. 16",
      nome: "Restrito, os seis equiparados e o proibido hediondo",
      contexto:
        "Caput: os mesmos verbos do 14, mas arma/acessório/munição de uso restrito — reclusão 3–6. § 1º: seis figuras (numeração, transformação, explosivo, arma raspada, entregar a criança, recarga clandestina). § 2º: se a conduta do caput ou do § 1º envolve **uso proibido**, 4–12.",
      dispositivo: [
        "Art. 16. Possuir, deter, portar, adquirir, fornecer, receber, ter em depósito, transportar, ceder, emprestar, remeter, empregar, manter sob guarda ou ocultar arma, acessório ou munição de ==uso restrito==, sem autorização e em desacordo: (Lei 13.964/2019)",
        "Pena – ~~reclusão, de 3 a 6 anos, e multa~~.",
        "§ 1º Nas mesmas penas: I suprimir/alterar marca, numeração ou sinal; II modificar características para equivaler a proibido/restrito ou para enganar autoridade/perito/juiz; III possuir/deter/fabricar/empregar artefato ==explosivo ou incendiário== sem autorização; IV portar/possuir/adquirir/transportar/fornecer arma com numeração/marca/sinal ==raspado, suprimido ou adulterado==; V vender/entregar/fornecer arma, acessório, munição ou explosivo a ==criança ou adolescente==; VI produzir, recarregar ou reciclar, sem autorização, ou adulterar munição ou explosivo.",
        "§ 2º Se as condutas do caput e do § 1º envolverem arma de ==uso proibido==: ~~reclusão, de 4 a 12 anos~~.",
      ],
      notaDispositivo:
        "Não existe mais «parágrafo único» — o Anticrime fatiou em §§. Silenciador, quando classificado como acessório restrito, entra no **caput** (não precisa do § 1º). Entregar arma a adolescente = § 1º, V (doloso), distinto da omissão culposa do 13. Hediondez (8.072, PU, II): só **uso proibido** (na prática o § 2º). Súmula 668/STJ: permitido com numeração raspada (**§ 1º, IV**) **não** é hediondo.",
      pena: "Caput/§ 1º: recl. 3–6 · § 2º proibido: recl. 4–12",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Caput = **restrito** (3–6) — **não hediondo** (depois de 13.964).",
        "§ 1º = seis equiparados (mesma pena 3–6) — **não hediondos**.",
        "§ 2º = **proibido** (4–12) — **hediondo** (8.072, PU, II).",
        "Numeração raspada de permitido = 16 § 1º, IV, **comum** (Súm. 668).",
        "Explosivo/incendiário sem papel = § 1º, III (não é 16 caput de «arma»).",
      ],
      pegadinha: [
        "«Arma de uso restrito é hedionda após o Pacote Anticrime» — **ERRADO.** O Pacote **tirou** o restrito e deixou só o **proibido**.",
        "«Numeração raspada = hediondo, porque está no 16» — **Súmula 668**: se a arma é **permitida**, não.",
        "«O PU do 16 lista silenciador» — silenciador é **acessório** (caput), se restrito. O § 1º não diz «silenciador».",
        "«Deixar a arma ao alcance do filho de 10 é 16, V» — 16, V é **entregar/fornecer** (dolo). O alcance por descuido é **13**.",
      ],
      exemplo: [
        "Pistola .40 (restrito) em casa, sem autorização: **16 caput** (3–6, comum) — posse ou porte, o caput unifica.",
        "Revólver .38 permitido com número lixado, na cintura: **16 § 1º, IV** (3–6, **não** hediondo — Súm. 668).",
        "Fuzil de uso proibido no porta-malas: **16 § 2º** (4–12, **hediondo**).",
      ],
      macete:
        "**16 caput = restrito, 3 a 6, comum. § 1º = os seis, comum. § 2º = proibido, 4 a 12, hediondo.** Raspada de permitido ≠ hediondo (**668**). O Anticrime **não** hediondizou o restrito — ele **apertou só o proibido**.",
    },
  ],
};
