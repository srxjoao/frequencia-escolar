import Estudante from "./Estudante";
import RelatorioFrequencia from "./RetatorioFrequencia";

const estudantes: Estudante[] = [];

const estudante1 = new Estudante(1, "João Pedro");
estudantes.push(estudante1);

const estudante2 = new Estudante(2, "Rayssa Farias");
estudantes.push(estudante2);

const estudante3 = new Estudante(3, "Eduarda Teixeira");
estudantes.push(estudante3);

RelatorioFrequencia.gerarRelatorioMensal(estudantes);

estudante1.registrarPresenca()
estudante2.registrarPresenca()
estudante3.registrarPresenca()