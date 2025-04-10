//1
const Nome = "BRUNO";
const Num = 123;
let Bol = true;

console.log(typeof Nome);
console.log(typeof Num);
console.log(typeof Bol);

//2
const PNome = "BRUNO";
const SNome = " XAVIER";
const NomeInteiro = PNome + SNome;

console.log("Meu nome é", NomeInteiro);

//3
const Num2 = "1";
const NomeNum = " Um";
const Resultado = Num2 + NomeNum;

console.log(Num2, "Esse número é", NomeNum);
console.log(NomeInteiro, "Esse número é", Resultado);

//4
let alt = "maria";

console.log(alt);

alt = "Ana";

console.log(alt);

//5
var TesteBloco = "Falso";

if (5 > 4) {
  var TesteBloco = "verdade";

  console.log(TesteBloco);
}

console.log(TesteBloco);

let TesteBloco1 = "Falso";

if (5 > 4) {
  let TesteBloco1 = "verdade";

  console.log(TesteBloco);
}

console.log(TesteBloco);

//6
let Chuva = true;

if (Chuva) {
  console.log("Leve guarda chuva");
} else {
  console.log("Não leve guarda chuva");
}

