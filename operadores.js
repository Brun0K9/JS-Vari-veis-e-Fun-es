//Operadores aritiméticos
const Number1 = 5;
const Number2 = 10;
const Number3 = 7;
const Number4 = 9.5;
const Faltas = 8;

const Media = (Number1 + Number2 + Number3 + Number4) / 4;

console.log("A média do aluno foi " + Media.toFixed(1));
console.log(`Suas Faltas São ${Faltas} e o limite são 10`);

if (Media >= 7 && Faltas <= 10) {
  // || Operador "OU", ! Operador ! NOT
  console.log("Parabéns, você foi aprovado");
} else {
  console.log("Infelizmente, você foi reprovado");
}

let resultado;
resultado = 10 + (5 * 2) / 3 - 7 + (15 * 3) / 5 + 20 - 4 * 2;
console.log("O resultado da expressão é:", resultado);

// Operador OR ||
const temExperiencia = true;
const temDiploma = false;

if (temExperiencia || temDiploma) {
  console.log(
    "Pode se candidatar ao emprego, pois possui experiência ou diploma."
  );
} else {
  console.log("Não pode se candidatar ao emprego.");
}

// Operador NOT !
const chuva = false;

if (!chuva) {
  console.log("Não está chovendo. Pode sair de casa.");
} else {
  console.log("Está chovendo. Melhor ficar em casa.");
}
