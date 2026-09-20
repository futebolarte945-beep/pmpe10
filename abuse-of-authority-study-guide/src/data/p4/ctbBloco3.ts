import type { Bloco } from "../tipos";

export const ctbBloco3: Bloco = {
  id: "t-bloco-3",
  numero: "Bloco 03",
  titulo: "Tipos dolosos e o fecho da Lei Seca",
  intervalo: "Arts. 306 ao 312-B",
  subtitulo: "Embriaguez, racha, CNH, entrega do volante e a substitutiva amarrada",
  descricao:
    "Do art. 306 (o mais cobrado do capítulo) ao 312-B (trava da pena restritiva). Atenção ao mapa invertido do enunciado de cursinho: o 311 NÃO é «entregar a embriagado» (isso é o 310) e o 312 NÃO é licitação (é fraude processual no sinistro).",
  grupos: [
    {
      id: "t-art-306",
      ref: "Art. 306",
      nome: "Embriaguez ao volante",
      contexto:
        "Crime formal, de perigo abstrato (STJ): não precisa de acidente. Duas portas de prova — concentração OU sinais. Recusar o bafômetro não é este crime.",
      dispositivo: [
        "Art. 306. Conduzir veículo automotor com ==capacidade psicomotora alterada== em razão da influência de álcool ou de outra substância psicoativa que determine dependência: (Lei nº 12.760/2012)",
        "Penas - ==detenção, de seis meses a três anos==, multa e suspensão ou proibição.",
        "§ 1º As condutas serão constatadas por: I - concentração ==≥ 6 decigramas== de álcool por litro de sangue ou ==≥ 0,3 miligrama== por litro de ar alveolar; ou II - ==sinais== que indiquem alteração da capacidade psicomotora (Contran);",
        "§ 2º Verificação por teste de alcoolemia ou toxicológico, exame clínico, perícia, ==vídeo==, prova testemunhal ou outros meios, observado o direito à ==contraprova==;",
        "§ 3º O Contran dispõe sobre a equivalência dos testes;",
        "§ 4º Pode-se empregar qualquer aparelho ==homologado pelo Inmetro==. (Lei nº 13.840/2019)",
      ],
      notaDispositivo:
        "Lei 12.760/2012 («Lei Seca nova») abandonou a exigência de «expor a dano potencial». Infração administrativa (art. 165) = qualquer concentração (tolerância zero). Crime = 6 dg/L ou 0,3 mg/L **ou** sinais. Recusa ao teste = art. 165-A (administrativo), não 306. Nemo tenetur: ninguém é obrigado a soprar; o MP prova por outros meios (§ 2º). Pena máx. 3 anos → **fora do JECRIM**.",
      pena: "Detenção 6m–3a + multa + suspensão",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**6 dg/L sangue = 0,3 mg/L ar.** Abaixo disso, sem sinais = no máximo infração 165.",
        "Prova **não** se esgota no etilômetro: vídeo, testemunha, exame clínico.",
        "Crime de **perigo abstrato**: dirigir alterado já consuma, mesmo na garagem saindo para a via.",
        "Se mata/lesiona grave: 302 § 3º / 303 § 2º **absorvem** o 306.",
      ],
      pegadinha: [
        "«Recusar o bafômetro é crime do 306» — **ERRADO** (165-A administrativo).",
        "«Precisa haver acidente» — **ERRADO** desde 2012.",
        "«0,04 mg/L no bafômetro já é crime» — é **infração**; crime começa em **0,3 mg/L** (ou sinais).",
        "«Cabe transação penal» — pena máx. 3 anos, **não** é menor potencial ofensivo.",
      ],
      exemplo: [
        "Blitze, 0,35 mg/L, motorista íntegro: **306** (porta da concentração).",
        "Recusa o teste, mas cambaleia, fala pastosa, vídeo da PM: **306** pela porta dos sinais (§ 1º, II + § 2º).",
        "Recusa o teste e está lúcido, sem sinais: **só 165-A** (administrativo).",
      ],
      macete:
        "**6 e 0,3** (sangue e ar). Sem número, valem **sinais + vídeo**. Recusou soprar ≠ crime. 3 anos no teto = **adeus, JECRIM**. Se matou bêbado, suba para o **302 § 3º**.",
    },
    {
      id: "t-art-307-308",
      ref: "Arts. 307 e 308",
      nome: "Violar a suspensão e o racha",
      contexto:
        "307 pune quem ignora a pena/cautelar de não dirigir. 308 é o racha: perigo concreto à incolumidade, com dois preterdolosos pesados se der lesão grave ou morte.",
      dispositivo: [
        "Art. 307. Violar a suspensão ou a proibição de obter PPD/habilitação imposta com fundamento neste Código: detenção, ==6 meses a 1 ano e multa==, com ==nova imposição adicional== de idêntico prazo. Parágrafo único: deixa de entregar a CNH no prazo do 293, § 1º.",
        "Art. 308. Participar, na direção, em ==via pública==, de corrida, disputa ou competição ou de exibição/demonstração de perícia, ==não autorizada==, ==gerando situação de risco== à incolumidade pública ou privada: detenção ==6 meses a 3 anos==, multa e suspensão. (Lei nº 13.546/2017)",
        "§ 1º Se resultar ==lesão grave==, sem dolo quanto ao resultado: ==reclusão 3 a 6 anos==.",
        "§ 2º Se resultar ==morte==, sem dolo quanto ao resultado: ==reclusão 5 a 10 anos==.",
      ],
      notaDispositivo:
        "308 exige via pública + risco (perigo concreto). «Grau» em estacionamento fechado sem risco a terceiros tende à atipicidade penal (resta infração). §§ 1º e 2º são preterdolo: se houve dolo eventual quanto à morte, vai para o 121.",
      pena: "307: 6m–1a · 308: 6m–3a / 3–6 / 5–10",
      bancas: ["CEBRASPE", "FGV", "AOCP"],
      cai: [
        "307: pena **nova** de suspensão do mesmo prazo, empilhada.",
        "308 caput: máx. 3 anos → **fora do JECRIM**.",
        "§§ = preterdolo. Dolo na morte = Júri.",
      ],
      pegadinha: [
        "«Racha é infração só do art. 173» — também é **crime 308** se gera risco.",
        "«308 § 2º é hediondo» — **não está no rol**.",
      ],
      exemplo: [
        "Dois carros disputam no asfalto da orla, pedestres pulam: 308 caput.",
        "A disputa mata o motociclista e o piloto «não imaginava»: 308 § 2º (5–10). Se filmou dizendo «vamos ver quem aguenta»: **121**.",
      ],
      macete:
        "**307 = dirigir cassado/suspenso (e não entregar a CNH).** **308 = racha com risco.** Lesão grave 3–6; morte 5–10; dolo na morte = **Júri**. Caput do 308 tem o mesmo teto do 306 (3 anos).",
    },
    {
      id: "t-art-309-311",
      ref: "Arts. 309 a 311",
      nome: "Sem CNH, entregar o volante, velocidade na escola",
      contexto:
        "Três tipos curtos e muito cobrados. O 310 absorve o «permitir que embriagado dirija». O 311 é outro crime: velocidade incompatível perto de aglomeração.",
      dispositivo: [
        "Art. 309. Dirigir veículo automotor, em ==via pública==, sem a devida PPD ou Habilitação ou com o direito de dirigir ==cassado==, ==gerando perigo de dano==: detenção, ==6 meses a 1 ano, ou multa==.",
        "Art. 310. ==Permitir, confiar ou entregar== a direção a pessoa ==não habilitada==, com habilitação ==cassada== ou direito ==suspenso==, ou a quem, por estado de saúde ou ==embriaguez==, não esteja em condições de conduzi-lo com segurança: detenção, ==6 meses a 1 ano, ou multa==.",
        "Art. 310-A. (VETADO).",
        "Art. 311. Trafegar em ==velocidade incompatível com a segurança== nas proximidades de ==escolas, hospitais, estações==, logradouros estreitos, ou onde haja grande movimentação de pessoas, ==gerando perigo de dano==: detenção, ==6 meses a 1 ano, ou multa==.",
      ],
      notaDispositivo:
        "309: STJ exige **perigo concreto** (não basta dirigir sem CNH na via deserta). 310: Súmula 575/STJ — crime **mesmo sem perigo concreto** (formal). «Entregar a embriagado» = 310, NÃO 311. 311 é perigo concreto (velocidade incompatível + local sensível).",
      pena: "Detenção 6m–1a ou multa (os três)",
      bancas: ["CEBRASPE", "FCC", "VUNESP", "AOCP", "FGV"],
      cai: [
        "309: via pública + **perigo de dano**. Cassado entra; vencido/irregular administrativo em regra **não**.",
        "Súmula **575/STJ**: 310 independe de perigo concreto.",
        "310 cabe ao proprietário, ao pai, ao valet — quem **entrega**.",
        "311 ≠ 310. 311 = velocidade em zona sensível.",
      ],
      pegadinha: [
        "«Art. 311 pune quem deixa embriagado dirigir» — **ERRADO** (é o **310**).",
        "«Dirigir sem CNH, por si, é crime» — falta o **perigo** (309).",
        "«310 precisa de acidente» — Súm. 575 diz que **não**.",
      ],
      exemplo: [
        "Filho de 17 anos pega o carro com a chave que o pai deixou na mesa, ciente: pai no **310** (Súm. 575); filho, se gerar perigo na via, **309**.",
        "Passa a 80 km/h na porta da escola, horário de saída, pânico no cruzamento: **311**.",
      ],
      macete:
        "**309 dirige sem CNH COM PERIGO. 310 ENTREGA (Súm. 575, sem perigo). 311 é a escola/hospital.** Embriagado no volante por sua mão = **306**; pela mão de outro = **310**. Nunca 311.",
    },
    {
      id: "t-art-312",
      ref: "Arts. 312 a 312-B",
      nome: "Fraude no sinistro e o destino da pena substitutiva",
      contexto:
        "312 é a «fraude processual» do trânsito (inovar o estado de lugar, coisa ou pessoa). 312-A amarra a restritiva de direitos a serviços de trânsito. 312-B fecha a substitutiva no homicídio/lesão alcoolizados.",
      dispositivo: [
        "Art. 312. ==Inovar artificiosamente==, em caso de sinistro automobilístico com vítima, na pendência do procedimento policial, inquérito ou processo, o estado de lugar, de coisa ou de pessoa, a fim de ==induzir a erro== o policial, o perito ou o juiz: detenção, ==6 meses a 1 ano, ou multa==. (Lei nº 14.599/2023)",
        "Parágrafo único. Aplica-se ainda que não iniciados o procedimento, o inquérito ou o processo.",
        "Art. 312-A. Quando o juiz substituir PPL por restritiva nos arts. 302 a 312, esta deverá ser ==prestação de serviço à comunidade== em: I equipes de resgate/bombeiros; II pronto-socorro que recebe vítimas de sinistro; III clínicas de recuperação de sinistrados; IV outras atividades de resgate/atendimento. (Lei nº 13.281/2016; 14.599/2023)",
        "Art. 312-B. Aos crimes do ==§ 3º do art. 302== e do ==§ 2º do art. 303== não se aplica o inciso I do art. 44 do CP. (Lei nº 14.071/2020)",
      ],
      notaDispositivo:
        "312 ≠ licitação (essa mora na Lei 14.133/Lei 8.666). É o irmão do CP 347, especial porque o sinistro tem vítima. 312-A não cria crime: guia a substitutiva (cestas básicas «genéricas» ficam fora). 312-B: o 44, I, (pena ≤ 4 anos / culposo) não autoriza a conversão — política de não transformar 5–8 anos de reclusão em «plantão no hospital» automaticamente. Os demais requisitos do 44 seguem em debate; a banca cobra a literalidade: **não se aplica o inciso I**.",
      pena: "312: 6m–1a · 312-A/B: normas de execução",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "312: sinistro **com vítima** + alteração artificiosa + dolo de enganar autoridade/perito/juiz.",
        "Parágrafo único: vale **antes** do inquérito (mover o carro, trocar o condutor).",
        "312-A: substitutiva = **serviço de trânsito**, não cesta básica.",
        "312-B: 302 § 3º e 303 § 2º **sem** o 44, I.",
      ],
      pegadinha: [
        "«Art. 312 é fraude em licitação de trânsito» — **ERRADO**. É inovação artificiosa no sinistro.",
        "«312-B proíbe qualquer restritiva» — o texto tira só o **inciso I do art. 44**.",
        "«312-A vale para o 291» — só crimes **302 a 312**.",
      ],
      exemplo: [
        "Amigo assume a direção depois da batida com ferido, para «proteger» o motorista bêbado: **312** (inovar o estado de pessoa) + 306/302 conforme o caso.",
        "Condenado por 309: substitutiva, se cabível, será plantão no resgate (312-A), não doação de leite.",
      ],
      macete:
        "**312 = fraudar a cena (não a licitação).** **312-A = restritiva no hospital/resgate.** **312-B = bebeu e matou/lesionou grave → o 44, I, não abre a porta da substitutiva.**",
    },
  ],
};
