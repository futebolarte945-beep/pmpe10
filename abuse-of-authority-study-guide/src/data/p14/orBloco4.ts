import type { Bloco } from "../tipos";

export const orBloco4: Bloco = {
  id: "or-bloco-4",
  numero: "Bloco 04",
  titulo: "As outras sete chaves do art. 3º",
  intervalo: "Arts. 8º a 17 · 10-A a 14",
  subtitulo: "Comunicar × autorizar · 6 meses · 720 só no virtual · cadastro sem juiz",
  descricao:
    "Ação controlada comunica; infiltração pede papel. O teto de 720 dias é do **10-A** (virtual da 12.850), não do art. 10 físico. Os 90 dias da Lei **13.441/2017** são do **ECA**, outra porta.",
  notaProfessor: {
    titulo: "Correção de rota neste bloco",
    itens: [
      "**Ação controlada (8º, § 1º):** comunicação **prévia** ao juiz, que *pode* fixar limites e avisa o MP. **Não** é autorização como a 9.296. A lei **não** traz hipótese de «dispensa porque a operação é sigilosa» — o § 2º só diz que a comunicação é **distribuída em sigilo**.",
      "**720 dias** = art. **10-A, § 4º** (infiltração **virtual** da 12.850, 13.964). Art. **10, § 3º** (física): 6 meses, renovável **sem** esse teto no texto. **90+90** = Lei **13.441** no **ECA** (sexo contra criança/adolescente), **não** o 10-A.",
      "Art. **15**: sem juiz só **qualificação, filiação e endereço**. Extrato, conteúdo de e-mail e movimento de conta **não** saem por esse artigo. COAF/RIF ≠ «dados financeiros livres».",
    ],
  },
  grupos: [
    {
      id: "or-art-8-9",
      ref: "Arts. 8º e 9º",
      nome: "Ação controlada — comunica, não pede alvará",
      contexto:
        "Retardar a intervenção policial ou administrativa, com o alvo sob observação, para fechar no momento mais eficaz (flagrante diferido). Comunicação prévia ao juiz. Fronteira: só com cooperação dos países do itinerário (9º).",
      dispositivo: [
        "Art. 8º. Ação controlada: ==retardar== a intervenção policial ou administrativa relativa à ação praticada por ORCRIM ou a ela vinculada, mantida sob observação e acompanhamento, para o momento mais eficaz à prova e à informação.",
        "§ 1º. O retardamento será ==previamente comunicado== ao juiz competente, que, se for o caso, estabelecerá os limites e comunicará ao MP.",
        "§ 2º. Comunicação ==sigilosamente distribuída==, sem dados que indiquem a operação.",
        "§ 3º. Até o fim, autos só juiz, MP e delegado. § 4º. Auto circunstanciado no término.",
        "Art. 9º. Transposição de ==fronteiras==: só com cooperação das autoridades dos países do itinerário/destino.",
      ],
      notaDispositivo:
        "STJ: independe de **autorização**; a comunicação protege o policial da prevaricação por «não prender na hora». Interceptação (9.296) e infiltração (art. 10) **exigem** ordem. Ambiental estatal (9.296, 8º-A / 3º, II) também. Captação ambiental ≠ ação controlada ≠ interceptação.",
      pena: "Comunicação prévia",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Retardar + observar = flagrante **diferido**.",
        "**Comunicação** ao juiz, não alvará.",
        "Fronteira: art. **9º**, cooperação internacional.",
        "Sigilo na **distribuição** (§ 2º), não «dispensa de comunicar».",
      ],
      pegadinha: [
        "«Ação controlada exige autorização judicial, como a interceptação» — o 8º, § 1º, é **comunicação**.",
        "«Operação sigilosa dispensa comunicar o juiz» — o sigilo é da **distribuição**, não da dispensa.",
        "«Ambiental é o art. 8º» — ambiental é o 3º, **II** (e a 9.296, 8º-A).",
      ],
      exemplo: [
        "Carga de cocaína sai do porto. A PF acompanha até o galpão, comunica o juiz no plantão, prende na descarga. Sem papel de «defiro a ação controlada» — e o flagrante no galpão vale.",
      ],
      macete:
        "**Controlada avisa. Interceptação pede. Infiltrado pede.** Fronteira não se atravessa sozinho (art. 9º).",
    },
    {
      id: "or-art-10-14",
      ref: "Arts. 10 a 14 · 10-A a 10-D",
      nome: "Infiltração — papel, 6 meses, 720 só na rede",
      contexto:
        "Policial na ORCRIM, com ordem judicial circunstanciada. Delegado representa ou MP requer (no IP, MP ouve o delegado). Subsidiária (indícios do art. 1º + outros meios insuficientes). Juiz decide em 24 h (12, § 1º).",
      dispositivo: [
        "Art. 10. Infiltração de agentes de polícia, representada pelo delegado ou requerida pelo MP, ==autorização judicial== sigilosa, que fixa limites.",
        "§ 2º. Indícios da infração do art. 1º + prova ==não== puder ser feita por outros meios.",
        "§ 3º. Prazo de até ==6 (seis) meses==, sem prejuízo de ==renovações==, se comprovada a necessidade.",
        "Art. 10-A (13.964). Infiltração ==virtual== (internet) para crimes desta Lei e conexos, praticados por ORCRIM.",
        "§ 4º. Até 6 meses, renovações, total ==não exceda 720 dias==.",
        "Art. 10-C. Não comete crime o policial que oculta a identidade na internet para colher indícios dos crimes do art. 1º. PU: responde pelos ==excessos==.",
        "Art. 13. Excessos: responde. PU: ==não é punível== o crime praticado na infiltração quando ==inexigível conduta diversa==.",
        "Art. 14. Direitos: recusar/cessar; identidade alterada; imagem preservada; mídia sem foto.",
      ],
      notaDispositivo:
        "A 13.441/2017 (ECA 190-A e ss.) é infiltração virtual para **crimes sexuais contra criança/adolescente**, prazo **90 dias** (renovável). **Não** copie 90 nem 720 de uma lei para a outra. Art. 13, PU, é **inexigibilidade** (culpabilidade), não um cheque em branco nem «excludente de ilicitude» genérica. Identidade fictícia na rede: 11, PU, com requisição **judicial** nos cadastros públicos.",
      pena: "Autorização · 6 meses",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Infiltração = **autorização** judicial. Controlada = **comunicação**.",
        "Física (10): 6 meses + renovações.",
        "Virtual 12.850 (10-A): 6 meses, teto **720** dias.",
        "Virtual ECA (13.441): **90** dias — outra lei.",
        "13, PU: crime na missão só se **inexigível** outra conduta; excesso **responde**.",
      ],
      pegadinha: [
        "«Física também tem teto de 720» — o 720 está no **10-A, § 4º**.",
        "«Infiltração virtual da 12.850 é 90+90» — 90 é a **13.441/ECA**.",
        "«O infiltrado nunca responde, é isenção pessoal absoluta» — **excessos** (13 e 10-C, PU).",
        "«MP infiltra sem juiz, porque é ação controlada» — art. **10**.",
      ],
      exemplo: [
        "PM vive 8 meses no boca a boca, com três renovações do art. 10: o texto **não** impõe 720. Perfil falso no Telegram da facção por 2 anos: **10-A** — 720 estourados, prova nula (§ 7º).",
      ],
      macete:
        "**Físico: 6 meses e renovar. Virtual da 12.850: 720 no teto. Virtual do ECA: 90.** Sem juiz, não entra. Excesso paga.",
    },
    {
      id: "or-art-15-17",
      ref: "Arts. 15 a 17 · 3º, II, IV a VI",
      nome: "Cadastro sem juiz — conteúdo com juiz",
      contexto:
        "15: delegado e MP, **sem** juiz, só qualificação pessoal, filiação e endereço (Eleitoral, telco, banco, provedor, cartão). 16: reservas de viagem, 5 anos, juiz/MP/delegado. 17: telco guarda 5 anos os números de origem e destino.",
      dispositivo: [
        "Art. 3º, II. Captação ambiental — autorização na 9.296, 8º-A (máxima > 4 anos). ≠ interceptação de ==fluxo== (3º, V / 9.296).",
        "Art. 15. Delegado e MP terão acesso, ==independentemente de autorização judicial==, ==apenas== aos dados cadastrais que informem ==qualificação pessoal, filiação e endereço==.",
        "Art. 16. Transporte: acesso a reservas e viagens, ==5 anos==.",
        "Art. 17. Telco: registros de números de origem e destino (internacionais, interurbanas e locais), ==5 anos==, às autoridades do art. 15.",
        "Art. 3º, V e VI. Interceptação e sigilos financeiro/bancário/fiscal: ==legislação específica== (9.296, LC 105) — em regra, ==juiz==.",
      ],
      notaDispositivo:
        "«Banco» no 15 não abre o extrato: abre o **cadastro** (nome, filiação, endereço). Conteúdo de conversa, e-mail, WhatsApp parado: juiz (Parte 13). COAF pode produzir RIF e comunicar; isso **não** equivale a «MP quebra sigilo bancário sozinho». Ambiental: Estado pede juiz (8º-A); um interlocutor grava, atípico (10-A da 9.296).",
      pena: "Cadastro × conteúdo",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "15: **sem juiz**, só nome/filiação/endereço.",
        "Conteúdo e movimento de conta: **com juiz**.",
        "16 e 17: guarda **5 anos**.",
        "Ambiental (II) ≠ interceptação (V) ≠ controlada (8º).",
      ],
      pegadinha: [
        "«O delegado requisita o extrato pelo art. 15» — o 15 é **cadastro**.",
        "«Dados financeiros via COAF, sem juiz, sempre» — sigilo bancário de movimento é **LC 105**.",
        "«Ambiental segue o art. 8º» — 8º é **controlada**.",
      ],
      exemplo: [
        "Delegado pede à operadora o **endereço** da fatura: art. 15, sem juiz. Pede o **áudio** da ligação: 9.296, com juiz. Pede o **extrato** da conta: LC 105, com juiz.",
      ],
      macete:
        "**Cadastro (quem é, onde mora) sem juiz. O que falou e o que gastou, com juiz.** Ambiental é sala; interceptação é fio; controlada é espera.",
    },
  ],
};
