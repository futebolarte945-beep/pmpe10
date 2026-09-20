import type { ParteId } from "./tipos";

export type FaseId = 1 | 2;

export interface CardParte {
  id: ParteId;
  n: string;
  lei: string;
  titulo: string;
  sub: string;
  ancora: string;
}

export const fase1: CardParte[] = [
  { id: "p1", n: "01", lei: "13.869/2019", titulo: "Abuso de Autoridade", sub: "Dolo específico · 25 tipos · única reclusão pela 9.296", ancora: "O que o agente faz de errado." },
  { id: "p2", n: "02", lei: "7.716/1989", titulo: "Racismo & Injúria Racial", sub: "2º-A · HC 154.248 · imprescritível", ancora: "Coletivo vs. honra individual." },
  { id: "p3", n: "03", lei: "8.072/1990", titulo: "Crimes Hediondos", sub: "Rol taxativo · privilegiado fora · progressão", ancora: "Ou está no rol, ou não é." },
  { id: "p4", n: "04", lei: "9.503/1997", titulo: "Crimes de Trânsito", sub: "Cap. XIX · Lei Seca · 6 dg/L", ancora: "O volante que vira tipo." },
  { id: "p5", n: "05", lei: "9.455/1997", titulo: "Lei de Tortura", sub: "Comum no I · omissão menor · equiparada", ancora: "Quatro artigos, prova inteira." },
  { id: "p6", n: "06", lei: "9.605/1998", titulo: "Crimes Ambientais", sub: "PJ no banco · art. 42 é balão · 26 incond.", ancora: "A empresa também senta." },
  { id: "p7", n: "07", lei: "10.826/2003", titulo: "Estatuto do Desarmamento", sub: "Carro = porte · restrito ≠ hediondo · 668", ancora: "Lugar e rótulo decidem o tipo." },
  { id: "p8", n: "08", lei: "11.340/2006", titulo: "Lei Maria da Penha", sub: "JE fora · 24-A 2–5 · 536", ancora: "A vítima é mulher." },
  { id: "p9", n: "09", lei: "11.343/2006", titulo: "Lei de Drogas", sub: "28 não prende · 35 = 2 · § 4º fora", ancora: "Sem lista, sem crime." },
  { id: "p10", n: "10", lei: "STF · STJ", titulo: "Dossiê súmulas P1–P9", sub: "512 cancelada · 587 ≠ 600 · 668", ancora: "Número certo, tese certa." },
];

export const fase2: CardParte[] = [
  { id: "p11", n: "11", lei: "7.960/1989", titulo: "Prisão Temporária", sub: "I+III · 5+5 · 30+30 na 8.072", ancora: "II não prende sozinho." },
  { id: "p12", n: "12", lei: "9.099/1995", titulo: "JECrim", sub: "IMPO ≤ 2 · 243 soma · ED interrompem", ancora: "Máxima 2. Mínima 1." },
  { id: "p13", n: "13", lei: "9.296/1996", titulo: "Interceptação telefônica", sub: "Fluxo · Tema 661 · ambiental > 4", ancora: "Arquivo parado não é fluxo." },
  { id: "p14", n: "14", lei: "12.850/2013", titulo: "Organização Criminosa", sub: "4 pessoas · controlada avisa · 720 no 10-A", ancora: "Quatro cabeças. Três a oito." },
  { id: "p15", n: "15", lei: "STF · STJ", titulo: "Dossiê súmulas P11–P14", sub: "243 · 536 · 696 · 661", ancora: "243 soma. 696 é o 28." },
  { id: "p16", n: "16", lei: "Simulado A–E", titulo: "Quiz geral · 60 Q", sub: "Última da Fase 2 · 5 bancas", ancora: "Erre agora. Não erre na prova." },
];
