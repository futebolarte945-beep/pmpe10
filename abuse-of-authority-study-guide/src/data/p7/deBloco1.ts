import type { Bloco } from "../tipos";

export const deBloco1: Bloco = {
  id: "de-bloco-1",
  numero: "Bloco 01",
  titulo: "Sinarm, registro e a linha entre posse e porte",
  intervalo: "Arts. 1º ao 11-A",
  subtitulo: "Permitido × restrito × proibido · CRAF em casa · porte na rua",
  descricao:
    "Antes dos tipos, a banca testa o vocabulário. Posse mora no art. 5º (casa, dependência, trabalho do dono). Porte é o resto — inclusive o carro. A classificação da arma (art. 23) decide se o fato é 12/14 ou 16.",
  notaProfessor: {
    titulo: "Correção de rota — classificação e o que esta Parte 07 cobre",
    itens: [
      "**Classificação não está nos arts. 1º–11.** O art. 23 manda o Chefe do Executivo (proposta do Exército) definir permitido, restrito, proibido e obsoleto. Hoje: Decreto nº 11.615/2023. Em prova, o que importa é o **rótulo pericial**, não o calibre decorado de 2000.",
      "**Permitido** = o particular pode ter, com registro. **Restrito** = uso das instituições (FA, segurança pública) e, em hipóteses, CAC. **Proibido** = o pior (guerra, certas automáticas, etc.) — abre o **art. 16, § 2º** e a hediondez.",
      "Crimes = arts. **12 a 21** (e o 21-A de 2026). Esta Parte 07 fecha o Estatuto penal. Colecionador/atirador/caçador (CAC) e o referendo de 2005 só aparecem quando a pegadinha exigir.",
    ],
  },
  grupos: [
    {
      id: "de-art-1-4",
      ref: "Arts. 1º a 4º",
      nome: "Sinarm, registro obrigatório e a compra do permitido",
      contexto:
        "Sinarm = Polícia Federal, território nacional. Armas das Forças Armadas ficam de fora (PU do 2º). Registro é obrigatório (3º); restrito registra no Exército. Comprar permitido exige necessidade + idoneidade + ocupação/residência + capacidade técnica e psicológica.",
      dispositivo: [
        "Art. 1º O ==Sinarm==, no Ministério da Justiça, no âmbito da ==Polícia Federal==, tem circunscrição em todo o território nacional.",
        "Art. 2º Compete ao Sinarm cadastrar armas, portes, transferências, apreensões, armeiros, comércio… PU: não alcança armas das ==Forças Armadas e Auxiliares== e as de seus registros próprios.",
        "Art. 3º É ==obrigatório o registro== de arma de fogo no órgão competente. PU: uso ==restrito== → registro no ==Comando do Exército==.",
        "Art. 4º Para adquirir arma de ==uso permitido==: declarar efetiva necessidade + I idoneidade (certidões negativas, inclusive eletrônicas) e não responder a IP/processo; II ocupação lícita e residência certa; III capacidade técnica e aptidão psicológica.",
        "§ 2º Munição só no ==calibre da arma registrada== e na quantidade do regulamento. § 6º Autorização de compra: 30 dias úteis.",
      ],
      notaDispositivo:
        "Idoneidade do inciso I veio na Lei 11.706/2008 (certidões eletrônicas). Quem já tem porte da mesma característica dispensa o inciso III (§ 8º). A «quantidade de munição» vive no decreto, não na lei — banca que inventa teto legal erra.",
      pena: "Normas administrativas · tipos a partir do 12",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Sinarm = **PF**. Sigma (Exército) pega o restrito — a lei fala «Comando do Exército» no 3º PU.",
        "Registro **obrigatório** (3º).",
        "Compra do permitido: necessidade + 3 requisitos (idoneidade, ocupação/casa, técnico/psicológico).",
        "Munição: calibre da **arma registrada**.",
      ],
      pegadinha: [
        "«Sinarm é do Exército» — **PF**.",
        "«Restrito registra na PF» — **Exército**.",
        "«A lei fixa 50 cartuchos por ano» — quantidade está no **regulamento**, não no 4º.",
      ],
      exemplo: [
        "Civil compra pistola .380: CRAF na PF (permitido). Fuzil de uso restrito: papel do Exército — e, sem autorização, o tipo já é o 16, não o 12.",
      ],
      macete:
        "**Sinarm é PF. Restrito é Exército.** Comprar permitido = necessidade + ficha limpa + casa/trabalho + prova de tiro/cabeça. Munição casa com a arma registrada.",
    },
    {
      id: "de-art-5-11",
      ref: "Arts. 5º a 11-A",
      nome: "Posse (casa/trabalho) × porte (o resto do Brasil)",
      contexto:
        "O art. 5º é a fronteira dos tipos 12 e 14. CRAF autoriza manter a arma em casa, dependência ou local de trabalho (se for o titular). Na rua, no carro, no hall do prédio: porte. O 6º lista quem pode portar por ofício. O 10 é o porte federal do particular.",
      dispositivo: [
        "Art. 5º O CRAF, válido em todo o território nacional, autoriza manter a arma ==exclusivamente no interior de sua residência ou domicílio, ou dependência desses, ou no local de trabalho==, desde que seja o titular ou o responsável legal pelo estabelecimento. (Lei 10.884/2004)",
        "§ 2º Requisitos do art. 4º comprovados periodicamente, em período ==não inferior a 3 anos==, para renovar o CRAF.",
        "§ 5º Área rural: residência/domicílio = ==toda a extensão do imóvel rural==. (Lei 13.870/2019)",
        "Art. 6º É ==proibido o porte== em todo o território nacional, salvo legislação própria e o rol (FA, polícias do 144, FNSP, guardas, ABIN/GSI, polícias legislativas, agentes prisionais, segurança privada, desporto, auditores, segurança de tribunais/MP…). ",
        "Art. 10. Porte de uso permitido, nacional, competência da ==PF== após o Sinarm. Exige atividade de risco ou ameaça (§ 1º, I). § 2º perde eficácia se o portador for detido/abordado ==embriagado ou drogado==.",
        "Art. 28. Vedado ao menor de ==25 anos== adquirir arma, ressalvados os integrantes de vários incisos do art. 6º.",
      ],
      notaDispositivo:
        "STJ: arma no interior de veículo = **porte** (14 ou 16), não posse. Hall, garagem coletiva, calçada, bar: porte. Fazenda: o § 5º do 5º alarga a posse à extensão do imóvel rural. Renovação «não inferior a 3 anos» — o decreto pode alongar, não encurtar. Porte do 10 não se confunde com o CRAF do 5º: um é andar, o outro é deixar em casa.",
      pena: "Norma de fronteira · 12 = posse · 14 = porte",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "**Posse** = casa, dependência, trabalho do dono (5º) · rural = o imóvel inteiro.",
        "**Porte** = qualquer outro lugar, **inclusive o carro**.",
        "CRAF ≠ porte. Registro em dia **não autoriza** andar armado.",
        "Renovação do registro: período **≥ 3 anos**.",
        "Porte federal (10): risco/ameaça + requisitos do 4º. Embriaguez **mata** o porte.",
        "Idade mínima para **adquirir**: **25 anos** (28), com ressalvas do art. 6º.",
      ],
      pegadinha: [
        "«Com o registro em dia, pode levar no carro até o clube» — no carro é **porte**. Sem o 10, é **14**.",
        "«Posse é ter a arma; porte é ter munição» — a linha é **lugar**, não cartucho.",
        "«Renovação a cada 1 ano, como a CNH» — **não inferior a 3 anos**.",
        "«18 anos compra arma, 25 só o porte» — **25 para adquirir** (art. 28).",
      ],
      exemplo: [
        "Pistola registrada na gaveta do quarto: posse regular (5º). A mesma pistola na cintura no supermercado, sem porte: **14**.",
        "Revólver no porta-luvas, CRAF no bolso: **porte ilegal** (14), não 12.",
        "Pecuarista com espingarda no pasto da própria fazenda: posse (5º § 5º).",
      ],
      macete:
        "**Casa/trabalho do dono = posse (12 se irregular). Rua, bar, carro = porte (14).** CRAF não é porte. Rural = o sítio inteiro. Comprar arma: **25 anos**. Renovar registro: **no mínimo 3**.",
    },
  ],
};
