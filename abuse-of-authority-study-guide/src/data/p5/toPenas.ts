import type { QuadroPenal } from "../tipos";

export const quadroPenasP5: QuadroPenal = {
  id: "quadro-penas-p5",
  selo: "Quadro · Lei 9.455/1997",
  titulo: "A lei inteira, em penas",
  intro:
    "Quatro artigos, uma tabela. O caput é reclusão 2–8 para I, II, III e § 1º. A omissão desce para detenção. As qualificadoras do § 3º e as majorantes do § 4º empilham. Não há arts. 5º a 9º para preencher linha.",
  linhas: [
    { ref: "1º, I, a", conduta: "Tortura-prova (informação, declaração, confissão)", pena: "**Reclusão 2–8**", obs: "Comum · doloso · equiparada · incond." },
    { ref: "1º, I, b", conduta: "Tortura para provocar crime (ação/omissão criminosa)", pena: "**Reclusão 2–8**", obs: "Comum · não é «pena ilegal»" },
    { ref: "1º, I, c", conduta: "Tortura-discriminação racial ou religiosa", pena: "**Reclusão 2–8**", obs: "Rol fechado: racial/religiosa" },
    { ref: "1º, II", conduta: "Castigo ou medida preventiva (guarda/poder/autoridade)", pena: "**Reclusão 2–8**", obs: "Próprio · sofrimento INTENSO" },
    { ref: "1º, III", conduta: "Mulher, reiteradamente, violência doméstica (Lei 15.410/2026)", pena: "**Reclusão 2–8**", obs: "Sem prejuízo de outros tipos" },
    { ref: "1º, § 1º", conduta: "Pessoa presa / medida de segurança + ato não previsto em lei", pena: "**Reclusão 2–8**", obs: "A «pena ilegal»" },
    { ref: "1º, § 2º", conduta: "Omissão de quem devia evitar ou apurar", pena: "**Detenção 1–4**", obs: "NÃO se equipara na pena · § 7º não puxa fechado" },
    { ref: "1º, § 3º", conduta: "Resultado lesão grave/gravíssima", pena: "**Reclusão 4–10**", obs: "Preterdolo" },
    { ref: "1º, § 3º", conduta: "Resultado morte", pena: "**Reclusão 8–16**", obs: "Não é 4–12" },
    { ref: "1º, § 4º", conduta: "Majorante: agente público / vítima frágil / sequestro", pena: "**+1/6 a 1/3**", obs: "Frágil = criança, gestante, PCD, adolescente, 60+" },
    { ref: "1º, § 5º", conduta: "Perda do cargo/função/emprego + interdição", pena: "Dobro da pena (interdição)", obs: "Automático («acarretará»)" },
    { ref: "1º, § 6º", conduta: "Inafiançável · sem graça · sem anistia", pena: "—", obs: "Indulto: Lei 8.072, art. 2º, I" },
    { ref: "1º, § 7º", conduta: "Regime inicial fechado", pena: "—", obs: "Salvo a omissão do § 2º" },
    { ref: "2º", conduta: "Extraterritorialidade", pena: "—", obs: "Vítima BR ou agente sob jurisdição BR" },
    { ref: "3º", conduta: "Vigência na publicação (8/4/1997)", pena: "—", obs: "Sem vacatio" },
    { ref: "4º", conduta: "Revoga ECA, art. 233", pena: "—", obs: "Último artigo da lei" },
  ],
  macete:
    "**2–8 o caput. 1–4 quem omite. 4–10 se aleija. 8–16 se mata.** +1/6 a 1/3 se farda, frágil ou cárcere. Demite na hora. Começa fechado, menos o omisso. **Não tem art. 9º.**",
};
