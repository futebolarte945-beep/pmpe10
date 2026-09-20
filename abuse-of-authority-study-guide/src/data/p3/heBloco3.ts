import type { Bloco } from "../tipos";

export const heBloco3: Bloco = {
  id: "h-bloco-3",
  numero: "Bloco 03",
  titulo: "Temporária e o presídio federal",
  intervalo: "Art. 2º, § 4º · Art. 3º",
  subtitulo: "30+30 na temporária — e o art. 3º que NÃO é temporária",
  descricao:
    "A pegadinha mais antiga da lei: a prisão temporária dos hediondos não está no art. 3º (este fala de penitenciária federal de segurança máxima). O prazo 30+30 mora no art. 2º, § 4º, e se contrapõe aos 5+5 da Lei 7.960/1989.",
  grupos: [
    {
      id: "h-art-2-s4",
      ref: "Art. 2º, § 4º",
      nome: "Prisão temporária 30+30",
      contexto:
        "Lei 7.960/1989: regra geral 5 dias, prorrogáveis por mais 5. Hediondos e equiparados: 30 + 30, só em caso de extrema e comprovada necessidade.",
      dispositivo: [
        "§ 4º A ==prisão temporária==, sobre a qual dispõe a Lei nº 7.960, de 21 de dezembro de 1989, nos crimes previstos neste artigo, terá o prazo de ==30 (trinta) dias==, ==prorrogável por igual período== em caso de ==extrema e comprovada necessidade==. (Incluído pela Lei nº 11.464, de 2007)",
      ],
      notaDispositivo:
        "Antes da Lei 11.464/2007 o prazo estava no § 3º (depois renumerado). A temporária continua subordinada aos requisitos da Lei 7.960 (imprescindibilidade para investigações, indiciado sem residência, crime da lista — e hediondos/equiparados entram). Prorrogação: uma vez, por mais 30, com **extrema e comprovada necessidade** (não é automático). Total máximo: **60 dias**. Sem contraditório prévio (cautelar), mas com controle judicial.",
      pena: "Prazo cautelar 30+30",
      bancas: ["CEBRASPE", "FGV", "AOCP", "FCC", "VUNESP"],
      cai: [
        "**Regra geral (Lei 7.960)**: 5 + 5. **Hediondo/equiparado**: 30 + 30.",
        "A prorrogação **não** é de ofício nem automática — exige **extrema e comprovada necessidade**.",
        "Teto: **60 dias**. Passou disso, relaxa (se não houver preventiva).",
        "Temporária ≠ preventiva (CPP 312) ≠ flagrante. Três prisões, três regimes.",
        "Tortura, tráfico e terrorismo também pegam o 30+30 («crimes previstos neste artigo» = art. 2º).",
      ],
      pegadinha: [
        "«A temporária do hediondo está no art. 3º» — **ERRADO**. Art. 3º = presídio federal.",
        "«30 dias improrrogáveis» — **ERRADO**, prorrogável por igual período.",
        "«5+5 também no latrocínio» — **ERRADO**, o especial derroga o geral.",
        "«A prorrogação é automática em crime hediondo» — **ERRADO** (extrema necessidade comprovada).",
      ],
      exemplo: [
        "Inquérito de latrocínio: delegado representa 30 dias de temporária; no 28º dia, ainda faltam perícias essenciais → juiz **pode** prorrogar mais 30, fundamentando a extrema necessidade.",
        "Furto simples: temporária, se cabível, é **5+5**, nunca 30.",
      ],
      macete:
        "**5+5 o comum; 30+30 o hediondo.** Endereço: **art. 2º, § 4º** — nunca o art. 3º. Prorrogação = **extrema + comprovada**, não «porque é hediondo». Teto **60**.",
    },
    {
      id: "h-art-3",
      ref: "Art. 3º",
      nome: "Penitenciária federal de segurança máxima",
      contexto:
        "A União mantém estabelecimentos de segurança máxima para condenados de alta periculosidade cuja permanência em presídio estadual ponha em risco a ordem ou a incolumidade pública.",
      dispositivo: [
        "Art. 3º A ==União== manterá estabelecimentos penais, de ==segurança máxima==, destinados ao cumprimento de penas impostas a condenados de ==alta periculosidade==, cuja permanência em presídios estaduais ponha em risco a ==ordem ou incolumidade pública==.",
      ],
      notaDispositivo:
        "Base da Lei 11.671/2008 (transferência para penitenciárias federais — Catanduvas, Campo Grande, Porto Velho, Mossoró, Brasília). Inclusão por prazo determinado, renovável. Lei 15.358/2026: líderes de domínio social estruturado **cumprem obrigatoriamente** em federal de segurança máxima.",
      pena: "Norma de execução penal",
      bancas: ["CEBRASPE", "AOCP", "FCC"],
      cai: [
        "Competência da **União** (não do Estado) para manter esses presídios.",
        "Alvo: **alta periculosidade** + risco à ordem/incolumidade — não é «todo hediondo».",
        "Não confunda com o regime disciplinar diferenciado (RDD, LEP 52) nem com a temporária.",
      ],
      pegadinha: [
        "Questão que descreve o art. 3º como prazo de temporária — **isca clássica**.",
        "«Todo condenado por hediondo vai para presídio federal» — **ERRADO**.",
      ],
      exemplo: [
        "Líder de facção que continua mandando matar do presídio estadual: transferência à penitenciária federal (11.671 + art. 3º).",
      ],
      macete:
        "**Art. 3º = cadeia federal**, não relógio. Temporária é o **§ 4º do 2º**. Se a questão misturar os dois, a alternativa que «30 dias no art. 3º» é a **armadilha**.",
    },
  ],
};
