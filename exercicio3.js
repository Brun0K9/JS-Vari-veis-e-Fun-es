// Atividade 1: Função de Saudação
// Essa função recebe um nome como parâmetro e retorna uma mensagem de saudação personalizada.
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

const mensagem = saudacao("Maria");
console.log(mensagem); // Saída esperada: "Olá, Maria!"

// Atividade 2: Verifica se a idade corresponde a maioridade
// A função verifica se a idade fornecida é maior ou igual a 18 e retorna uma mensagem correspondente.
function maior(idade) {
  if (idade >= 18) {
    return "Você é maior de idade";
  } else {
    return "Você é menor de idade";
  }
}

const ano = maior(22);
console.log(ano); // Saída esperada: "Você é maior de idade"

// Atividade 3: Verificador de Palíndromo
// A função verifica se uma palavra é um palíndromo (lê-se igual de trás pra frente).
function ehPalindromo(palavra) {
  const original = palavra.toLowerCase(); // Converte tudo para minúsculo para evitar erro de comparação
  const invertida = original.split("").reverse().join(""); // Inverte a palavra
  return original === invertida; // Retorna true se forem iguais
}

console.log(ehPalindromo("arara")); // true
console.log(ehPalindromo("Bruno")); // false
console.log(ehPalindromo("Radar")); // true (mesmo com letra maiúscula)

// Atividade 4: Encontra o maior entre três números
// Essa função compara três números fornecidos e retorna qual é o maior.
function MaiorM(Num1, Num2, Num3) {
  if (Num1 > Num2 && Num1 > Num3) {
    return `O Número ${Num1} é o maior`;
  } else if (Num2 > Num1 && Num2 > Num3) {
    return `O Número ${Num2} é o maior`;
  } else if (Num3 > Num1 && Num3 > Num2) {
    return `O Número ${Num3} é o maior`;
  } else {
    return "Todos os números são iguais";
  }
}

const ResultadoM = MaiorM(50, 10, 40);
console.log(ResultadoM); // Saída esperada: "O Número 50 é o maior"

// Atividade 5: Cálculo de potência usando Arrow Function
// A função recebe dois parâmetros: base e expoente, e retorna a base elevada ao expoente.
const calculaPotencia = (base, expoente) => {
  return base ** expoente;
};

console.log(calculaPotencia(2, 4)); // Saída esperada: 16
