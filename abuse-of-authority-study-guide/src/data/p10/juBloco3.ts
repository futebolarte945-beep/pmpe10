import type { Bloco } from "../tipos";

export const juBloco3: Bloco = {
  id: "ju-bloco-3",
  numero: "Bloco 03",
  titulo: "Trânsito e tortura",
  intervalo: "Leis 9.503/1997 e 9.455/1997",
  subtitulo: "Dolo eventual ≠ culpa consciente · 302, § 3º · tortura comum e hedionda",
  descricao:
    "No volante, a banca quer que você presuma dolo eventual na embriaguez. O STJ não presume. Na tortura, o agente público é majorante — o crime é comum.",
  grupos: [
    {
      id: "ju-dolo-eventual",
      ref: "REsp 1.689.173/STJ · 2017",
      nome: "Embriaguez sozinha não é dolo eventual",
      contexto:
        "Durante anos o MP denunciava todo bêbado que matava no trânsito por 121, dolo eventual (Júri). O STJ consolidou: embriaguez **isolada** não demonstra que o agente assumiu o risco da morte. A Lei 13.546/2017 ainda criou o 302, § 3º (5–8 anos) — culpa consciente **qualificada**, sem precisar forçar o Júri.",
      dispositivo: [
        "📋 Tese (STJ, REsp 1.689.173/SC, Min. Schietti, 2017, e Jurisprudência em Teses). A ==embriaguez, por si só==, ==não== configura dolo eventual em homicídio no trânsito. É preciso demonstrar, por ==circunstâncias concretas==, que o agente ==assumiu o risco== do resultado (contramão consciente, racha, velocidade + ziguezague + indiferença, etc.).",
        "Na ==dúvida== entre dolo eventual e culpa consciente, a pronúncia pode ir ao Júri (in dubio pro societate na primeira fase); mas a denúncia ==não== pode presumir o dolo.",
        "Culpa consciente + embriaguez/racha: caminho natural = art. ==302, § 3º== do CTB (5 a 8), não o 121.",
      ],
      notaDispositivo:
        "Dolo eventual (teoria do consentimento): prevê e **aceita** o resultado. Culpa consciente: prevê e **confia** que não vai acontecer. STF já admitiu dolo eventual em hipóteses gritantes (racha + álcool + velocidade absurda), mas **não** há súmula dizendo «bêbado = dolo». Lei Seca (306) é perigo abstrato — não resolve o 121 vs 302.",
      pena: "Tese STJ · sem súmula",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Embriaguez **isolada** ≠ dolo eventual.",
        "302, § 3º = culpa consciente **agravada** (13.546/2017).",
        "Racha + álcool + contramão pode, no concreto, ir ao Júri.",
      ],
      pegadinha: [
        "«Todo homicídio com motorista bêbado é dolo eventual» — STJ **rejeita** a presunção.",
        "«302, § 3º é hediondo» — **não** está no rol da 8.072.",
      ],
      exemplo: [
        "0,8 mg/L, velocidade da via, um erro de cálculo, morte: **302, § 3º** (culpa), não 121.",
        "2,0 mg/L, 140 km/h na contramão, filmado rindo: pronúncia por **dolo eventual** é sustentável.",
      ],
      macete:
        "**Bêbado ≠ dolo.** Precisa do plus (contramão, racha, indiferença). O atalho da banca moderna é o **302, § 3º** (5 a 8).",
    },
    {
      id: "ju-tortura",
      ref: "Lei 9.455 · 8.072, I-E",
      nome: "Tortura é crime comum e hediondo",
      contexto:
        "Confusão clássica com abuso de autoridade. A 9.455 não exige agente público no caput (inciso I é qualquer um). O § 4º **aumenta** se o agente for público. Equiparação a hediondo: 8.072, art. 1º, I-E (e o art. 2º da 9.455).",
      dispositivo: [
        "📋 Tese consolidada. A tortura é ==crime comum==: o particular pratica o caput. Agente público é ==causa de aumento== (§ 4º, +1/6 a 1/3), não elementar. É ==hediondo== (equiparado) na forma da 8.072.",
        "Omissão (§ 2º) tem pena ==menor== (1 a 4). Não existe «art. 9º» na 9.455 (a lei tem 4 artigos).",
      ],
      notaDispositivo:
        "Abuso (13.869) = dolo específico de prejudicar/beneficiar + agente público. Tortura = sofrimento físico/mental com os fins do art. 1º. Podem concorrer, mas não se confundem. Progressão: fatias de hediondo (salvo se a pena concreta e o 112 disserem outra coisa).",
      pena: "Hediondo equiparado",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "Tortura = **comum** (particular pode).",
        "Público **aumenta**, não cria o tipo.",
        "Hedionda; omissão é tipo próprio mais brando.",
      ],
      pegadinha: [
        "«Só autoridade pratica tortura» — inciso I é **qualquer pessoa**.",
        "«Tortura não é hedionda porque está em lei esparsa» — 8.072 a lista.",
      ],
      exemplo: [
        "Segurança de shopping que espanca adolescente para «confessar furto»: **9.455**, sem ser policial.",
      ],
      macete:
        "**Tortura: qualquer um pratica, o distintivo aumenta, o 8.072 carimba.** Abuso é outra porta (dolo de prejudicar).",
    },
  ],
};
