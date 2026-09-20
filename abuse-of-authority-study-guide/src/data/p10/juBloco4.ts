import type { Bloco } from "../tipos";

export const juBloco4: Bloco = {
  id: "ju-bloco-4",
  numero: "Bloco 04",
  titulo: "Ambiental e Desarmamento",
  intervalo: "Leis 9.605/1998 e 10.826/2003",
  subtitulo: "Dupla imputação morta · desmuniciada pune · 668: permitido não é hediondo",
  descricao:
    "Duas teses que a banca ainda cobra com a doutrina antiga: PJ ambiental «só com o diretor no banco» e arma desmuniciada «atípica». As Cortes viraram as duas.",
  grupos: [
    {
      id: "ju-pj-ambiental",
      ref: "RE 548.181/STF · RMS 39.173/STJ",
      nome: "PJ ambiental sem a pessoa física no mesmo banco",
      contexto:
        "O STJ exigia a «dupla imputação»: denúncia contra a empresa **e** o dirigente. O STF, no RE 548.181 (1ª Turma, 2013, Min. Rosa Weber), disse que o art. 225, § 3º, da CF **não** impõe isso. O STJ alinhou no RMS 39.173/BA (6ª Turma, 06/08/2015, Info 566).",
      dispositivo: [
        "📋 RE 548.181/STF (2013). O art. 225, § 3º, da CF ==não condiciona== a responsabilização penal da pessoa jurídica à persecução ==simultânea== da pessoa física. A dupla imputação ==não== é obrigatória.",
        "📋 RMS 39.173/BA-STJ (2015). É possível a responsabilização penal da PJ por delito ambiental ==independentemente== da responsabilização concomitante da pessoa física que agia em seu nome.",
      ],
      notaDispositivo:
        "Ainda vale o art. 3º da 9.605: a infração precisa ter sido decidida pelo representante/órgão, no interesse ou benefício da entidade. O que caiu foi a **obrigatoriedade** de denunciar o diretor junto. Absolvição da PF não arrasta, por si, a PJ.",
      pena: "Tese STF + STJ",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Denúncia **só** contra a empresa: **válida**.",
        "Paradigma STF = **RE 548.181**; STJ = **RMS 39.173** (2015).",
        "Art. 3º 9.605 continua exigindo decisão em nome/benefício da PJ.",
      ],
      pegadinha: [
        "«Sem o diretor denunciado, a empresa é parte ilegítima» — tese **superada**.",
        "«PJ responde por qualquer crime» — penal da PJ, no STF/STJ, está sedimentada no **ambiental** (CF 225, § 3º + 9.605).",
      ],
      exemplo: [
        "Vazamento em refinaria; não se identifica o gerente da noite: MP denuncia **só** a companhia — RMS 39.173 sustenta.",
      ],
      macete:
        "**Dupla imputação morreu em 2013/2015.** RE 548.181 abre; 39.173 confirma. A empresa senta sozinha.",
    },
    {
      id: "ju-arma-desm",
      ref: "STJ · teses 108",
      nome: "Desmuniciada pune; defeituosa absoluta não",
      contexto:
        "Dois polos. Desmuniciada / munição isolada: perigo **abstrato** — típico (12, 14, 16). Arma **absolutamente** inidônea para disparo (laudo): crime impossível, atípico. O meio-termo (defeito reparável) continua típico.",
      dispositivo: [
        "📋 Tese STJ (dominante). O porte/posse de arma ==desmuniciada== é ==típico==: o tipo é de perigo abstrato; não se exige potencialidade lesiva imediata. O mesmo vale para ==munição isolada==.",
        "📋 Tese STJ (Jurisprudência em Teses 108). Demonstrada por ==laudo== a ==inaptidão absoluta== da arma para o disparo (ineficácia absoluta do meio), a conduta é ==atípica==.",
      ],
      notaDispositivo:
        "STF: a 1ª Turma já vacilou (HC 81.057, Pertence — desmuniciada atípica); a posição que prevalece para prova é a do **STJ** (típica). Não ensine a tese do Pertence como atual. Arma de brinquedo não é 14; pode ser outro tipo (roubo, ameaça) se o contexto pedir.",
      pena: "Tese STJ",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Desmuniciada = **típica** (12/14/16).",
        "Munição sozinha = **típica**.",
        "Laudo de inaptidão **absoluta** = atípica.",
        "Defeito **reparável** = típica.",
      ],
      pegadinha: [
        "«Arma sem bala é crime impossível» — **não** (desmuniciada pune).",
        "«Arma enferrujada sempre atípica» — só se o laudo disser **inaptidão absoluta**.",
      ],
      exemplo: [
        "PT no cós, carregador vazio, munição na mochila: **14** (e a munição fecha o conjunto).",
        "Cano entupido de concreto, laudo: impossível disparar e impossível reparar: **atípico**.",
      ],
      macete:
        "**Sem bala, tem tipo. Sem potencial nenhum (laudo), não tem.** Reparável continua arma.",
    },
    {
      id: "ju-sum-668",
      ref: "Súm. 668/STJ · 2024",
      nome: "Permitido com numeração raspada não é hediondo",
      contexto:
        "O Anticrime deixou hediondo só o **proibido** (8.072, PU, II + 16, § 2º, 17 e 18). O STJ cravou: permitido com numeração raspada, embora apene como o 16, **não** entra no rol.",
      dispositivo: [
        "📋 Súmula 668/STJ (18/04/2024). ==Não é hediondo== o delito de porte ou posse de arma de fogo de uso ==permitido==, ainda que com numeração, marca ou qualquer outro sinal de identificação raspado, suprimido ou adulterado.",
      ],
      notaDispositivo:
        "Restrito (16 caput) também **não** é hediondo. Hediondo = **proibido** (§ 2º do 16) + comércio ilegal (17) + tráfico internacional (18). Não ensine «todo 16 é hediondo».",
      pena: "Súmula 668/STJ",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Permitido + raspada = pena do 16, **sem** hediondez (668).",
        "Restrito caput = **não** hediondo.",
        "Proibido / 17 / 18 = hediondo.",
      ],
      pegadinha: [
        "«Numeração raspada é hedionda, porque o 16 é hediondo» — 668 diz **não** no permitido.",
        "«Restrito é hediondo desde o Anticrime» — o Anticrime falou **proibido**.",
      ],
      exemplo: [
        "Revolver permitido, número lixado, na cintura: art. 16, § 1º, IV + **668** (não hediondo).",
      ],
      macete:
        "**668: permitido raspado não carimba.** Hediondo no Estatuto = proibido, 17 e 18.",
    },
  ],
};
