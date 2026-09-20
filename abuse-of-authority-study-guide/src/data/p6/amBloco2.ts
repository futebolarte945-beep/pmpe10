import type { Bloco } from "../tipos";

export const amBloco2: Bloco = {
  id: "am-bloco-2",
  numero: "Bloco 02",
  titulo: "Penas, substitutiva, sursis e o cardápio da PJ",
  intervalo: "Arts. 6º ao 24",
  subtitulo: "Substituição abaixo de 4 anos, sursis até 3, agravantes que não são aumento — e a liquidação da laranja",
  descricao:
    "O Capítulo II é o mais cobrado depois da fauna. Três iscas: o art. 15 NÃO é causa de aumento (é agravante); o sursis sobe para 3 anos; a substitutiva do art. 7º fala em PPL *inferior* a 4 anos (não «não superior»).",
  grupos: [
    {
      id: "am-art-6-13",
      ref: "Arts. 6º a 13",
      nome: "Dosimetria e as restritivas da pessoa física",
      contexto:
        "Art. 6º puxa gravidade, antecedentes ambientais e situação econômica. Art. 7º autoriza substituir PPL por restritiva se culposo OU pena inferior a 4 anos + suficiência. O cardápio do 8º tem cinco pratos, alguns estranhos ao CP 43.",
      dispositivo: [
        "Art. 5º ==(VETADO).==",
        "Art. 6º Para imposição e gradação: I gravidade (motivos e consequências para a ==saúde pública e o meio ambiente==); II ==antecedentes== quanto à legislação ambiental; III situação econômica, no caso de multa.",
        "Art. 7º As penas restritivas de direitos são ==autônomas== e substituem as PPL quando: I crime ==culposo== ou PPL ==inferior a quatro anos==; II suficiência (culpabilidade, antecedentes, personalidade…). Parágrafo único: mesma duração da PPL substituída.",
        "Art. 8º Restritivas: I PSC; II interdição temporária de direitos; III ==suspensão de atividades==; IV prestação pecuniária; V ==recolhimento domiciliar==.",
        "Art. 9º PSC ambiental: tarefas em ==parques, jardins e UCs== ou restauração do dano.",
        "Art. 10. Interdição: proibir contratar com o Poder Público, receber incentivos e licitar — ==5 anos== (doloso) / ==3 anos== (culposo).",
        "Arts. 11–13. Suspensão de atividades (quando desobedecem a lei); pecuniária de ==1 a 360 salários== (deduz da reparação civil); recolhimento domiciliar sem vigilância na folga.",
      ],
      notaDispositivo:
        "Art. 7º, I: «inferior a 4 anos» — pena de **4 anos cheios** NÃO autoriza a substitutiva por este artigo (no CP 44 é «não superior a 4»). Culposo: qualquer quantum. Recolhimento domiciliar e suspensão de atividades **não** estão no art. 43 do CP. Pecuniária 1–360 SM (CP 45 § 1º vai a 360 também, mas o piso/teto estão aqui).",
      pena: "Substitutiva + cardápio próprio",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "Art. 5º **vetado**.",
        "Substitutiva: culposo **ou** PPL **< 4 anos** (não ≤ 4).",
        "Restritivas **autônomas** (não acessórias).",
        "Interdição do art. 10: **5 anos** doloso / **3** culposo — prazos próprios, não os do CP 47.",
        "PSC do 9º tem endereço ambiental (parque/UC/restauração).",
      ],
      pegadinha: [
        "«Cabe substitutiva em pena de 4 anos, como no art. 44 do CP» — aqui é **inferior** a 4.",
        "«Recolhimento domiciliar é o regime aberto do CP» — é **pena restritiva** desta lei.",
        "«Art. 5º lista as penas» — **vetado**.",
      ],
      exemplo: [
        "Condenado a 3 anos e 6 meses no art. 40 (UC): PPL < 4 + requisitos subjetivos → substitutiva (7º) em PSC de parque.",
        "Condenado a 4 anos cheios, doloso: art. 7º **não** abre (não é «inferior»).",
      ],
      macete:
        "**5º é cova. 7º = culpa ou menos de 4 (menos, não igual).** Cardápio extra: suspende atividade e recolhe em casa. Interdição: **5 doloso / 3 culposo**.",
    },
    {
      id: "am-art-14-20",
      ref: "Arts. 14 a 20",
      nome: "Atenuantes, agravantes, sursis de 3 anos e a multa que triplica",
      contexto:
        "14 e 15 são circunstâncias (CP 61/65), NÃO majorantes. O art. 16 estica o sursis para 3 anos. 18 deixa a multa ir a 3× se a vantagem econômica rir da pena.",
      dispositivo: [
        "Art. 14. Atenuantes: I baixo grau de instrução; II arrependimento com ==reparação espontânea== ou limitação significativa do dano; III comunicação prévia do perigo iminente; IV colaboração com a fiscalização.",
        "Art. 15. Agravantes (quando não constituem ou qualificam): I reincidência ambiental; II a) vantagem pecuniária; e) ==unidades de conservação== / regime especial; g) ==defeso== da fauna; h) domingos/feriados; i) à noite; j) ==seca ou inundações==; l) espaço especialmente protegido; m) métodos cruéis; q) espécies ameaçadas; r) facilitada por funcionário público…",
        "Art. 16. Sursis nos crimes desta Lei: PPL ==não superior a três anos==.",
        "Art. 17. Reparação do sursis (CP 78 § 2º) por ==laudo ambiental==; condições ligadas ao meio ambiente.",
        "Art. 18. Multa pelos critérios do CP; se ineficaz no máximo, ==até o triplo== conforme a vantagem econômica.",
        "Arts. 19–20. Perícia do dano (aproveitável a do inquérito civil, com contraditório); sentença fixa valor mínimo de reparação.",
      ],
      notaDispositivo:
        "PEGADINHA CENTRAL: o roteiro de cursinho chama o art. 15 de «causa de aumento». O caput diz **circunstâncias que agravam a pena**. Causa de aumento de verdade, na fauna, é o art. 29 §§ 4º e 5º (metade / até o triplo). Sursis: CP 77 = 2 anos; aqui **3 anos**. Multa ×3 = teto móvel pela vantagem.",
      pena: "Circunstâncias + sursis 3 anos + multa ×3",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Art. 15 = **agravante** (8ª fase não; é circunstância judicial/legal do 68), não fração obrigatória de aumento.",
        "Rol do 15, II: UC, defeso, noite, domingo, seca/cheias, crueldade, espécie ameaçada — decore os «quando».",
        "**Sursis até 3 anos** (maior que o CP).",
        "Multa pode **triplicar** (vantagem econômica).",
        "Atenuante-estrela: reparação espontânea / comunicar o perigo.",
      ],
      pegadinha: [
        "«Art. 15 aumenta de 1/3 a 1/2 se for UC / seca / reprodução» — **ERRADO**. Isso é **agravante**. Aumento da fauna = **29 § 4º (metade)** e **§ 5º (triplo, caça profissional)**.",
        "«Sursis ambiental é 2 anos, como no CP» — **3 anos**.",
      ],
      exemplo: [
        "Caça em UC, à noite, em defeso: art. 29 + **agravantes** 15, II, e/g/i (e, se couber, o **aumento** do 29 § 4º — o juiz não pode usar o mesmo fato duas vezes).",
        "Condenado a 2 anos e 8 meses: sursis **cabe** (16); no CP 77, não caberia.",
      ],
      macete:
        "**15 agrava; 29 § 4º aumenta.** Não misture. Sursis ambiental = **três**. Multa que não dói **triplica**. Reparou sozinho = atenuante de ouro (14, II).",
    },
    {
      id: "am-art-21-24",
      ref: "Arts. 21 a 24",
      nome: "O cardápio penal da pessoa jurídica",
      contexto:
        "A PJ não vai para a cadeia. Leva multa, restritivas próprias (suspensão, interdição, proibição de contratar até 10 anos) e PSC ambiental. Se nasceu para delinquir: liquidação forçada (24).",
      dispositivo: [
        "Art. 21. Penas da PJ, isolada, cumulativa ou alternativamente: I ==multa==; II ==restritivas de direitos==; III ==prestação de serviços à comunidade==.",
        "Art. 22. Restritivas da PJ: I suspensão parcial ou total de atividades; II interdição temporária de estabelecimento, obra ou atividade; III proibição de contratar com o Poder Público e dele obter subsídios — prazo ==não superior a dez anos==.",
        "Art. 23. PSC da PJ: I custeio de programas ambientais; II obras de recuperação; III manutenção de espaços públicos; IV contribuições a entidades ambientais ou culturais públicas.",
        "Art. 24. PJ constituída ou utilizada ==preponderantemente== para permitir, facilitar ou ocultar crime desta Lei: ==liquidação forçada==; patrimônio = instrumento do crime, perdido em favor do ==Funpen==.",
      ],
      notaDispositivo:
        "Não há PPL para a PJ (impossível). Art. 24 é a «pena de morte» da PJ-laranja — diferente da desconsideração do art. 4º (que mira sócios para reparar). Funpen = Fundo Penitenciário Nacional, não o Fundo Nacional do Meio Ambiente (pegadinha de destino).",
      pena: "Multa · restritivas · PSC · liquidação",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "Três penas da PJ: multa, restritivas, PSC — **isolada, cumulativa ou alternativa**.",
        "Proibição de contratar: teto **10 anos** (PF dolosa no art. 10 é 5).",
        "Art. 24: laranja → liquidação + patrimônio ao **Funpen**.",
      ],
      pegadinha: [
        "«A PJ pode ser condenada a reclusão» — **impossível**.",
        "«Patrimônio da laranja vai para o Ibama / FNMA» — vai para o **Funpen**.",
        "«Art. 4º e art. 24 são a mesma coisa» — 4º desconsidera para **reparar**; 24 **mata** a PJ-instrumento.",
      ],
      exemplo: [
        "Frigorífico com licença vencida: suspensão de atividades (22, I) + multa + PSC de recuperação de mata ciliar (23, II).",
        "«Empresa» de fachada só para acobertar extração ilegal: **24** — liquidação e bens ao Funpen.",
      ],
      macete:
        "**PJ não senta na cadeia: multa, para a máquina, PSC verde.** Contratar com o Estado: até **10 anos**. Laranja → **24, Funpen**. 4º repara; 24 enterra.",
    },
  ],
};
