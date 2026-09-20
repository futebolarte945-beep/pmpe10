import type { QuadroPenal } from "../tipos";

export const quadroPenasP8: QuadroPenal = {
  id: "quadro-penas-p8",
  selo: "Quadro · Súmulas STJ · Lei Maria da Penha",
  titulo: "As cinco súmulas que a banca cobra cruas",
  intro:
    "Não são penas: são teses. Decorar número + uma linha. 536 trava o JECRIM premial; 542 solta a lesão; 588 trava a restritiva; 589 trava a bagatela; 600 dispensa o teto junto.",
  linhas: [
    { ref: "536", conduta: "Suspensão condicional do processo e transação penal", pena: "**Não se aplicam**", obs: "Delitos sujeitos ao rito da LMP · irmão do art. 41" },
    { ref: "542", conduta: "Lesão corporal resultante de VD contra a mulher", pena: "Ação **pública incondicionada**", obs: "Leve e culposa inclusive · ADI 4.424" },
    { ref: "588", conduta: "Crime ou contravenção com violência ou grave ameaça no ambiente doméstico", pena: "**Sem** substituição por restritivas de direitos", obs: "Casa com o art. 17 e o CP 44, I" },
    { ref: "589", conduta: "Crimes ou contravenções contra a mulher no âmbito doméstico", pena: "**Insignificância inaplicável**", obs: "Um tapa não é bagatela" },
    { ref: "600", conduta: "Configuração do art. 5º da LMP", pena: "**Não exige coabitação**", obs: "Namoro / ex / casas separadas entram" },
    { ref: "24-A", conduta: "Descumprir MPU (tipo da própria LMP)", pena: "**Reclusão 2–5 + multa**", obs: "Lei 14.994/2024 · fiança só juiz · + 313, III" },
    { ref: "121-A", conduta: "Feminicídio (CP, contexto LMP)", pena: "**Reclusão 20–40** · hediondo", obs: "Lei 14.994/2024 · razões de sexo feminino" },
    { ref: "41", conduta: "Lei 9.099/1995", pena: "**Não se aplica**", obs: "Independentemente da pena · ADC 19" },
  ],
  macete:
    "**536 sem prêmio. 542 o soco segue sozinho. 588 sem cesta. 589 sem bagatela. 600 sem morar junto.** 24-A agora é **2 a 5**. 41 mata a 9.099.",
};
