//Script criado como apoio para meus estudos e para fixar melhor os conceitos aprendidos.
// BLOCO, FUNÇÂO OU GLOBAL 3 ESCOPOS DO JS
// CONST A VARIAVEL QUE NÂO MUDA O VALOR
// LET NÃO PODE SER ACESSADA FORA DO BLOCO
// Variáveis declaradas com var não seguem a regra do escopo de bloco! Elas serão consideradas globais e poderão ser acessadas de fora do bloco.
// Não se utilzia mais VAR, por conta da falta de controle, a recomendação é apenas para utilziar o CONST e LET
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Escopo global
// Qualquer variável que esteja no escopo global pode ser acessada por outras partes do programa. Uma variável é considerada global quando não é declarada dentro de nenhuma função ou bloco.

// const nome = "Camila"; // variável global

// function cumprimentar() {
//   console.log(`Olá, ${nome}!`); // Acessa a var global
// }

// cumprimentar(); // "Olá, Camila!”
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Escopo de bloco
// Variáveis declaradas dentro de chaves { }, como no caso de if, for, while etc., não ficam acessíveis para código que esteja de fora. Chamamos o código dentro das { } de bloco.

// if (1 > 0) {
//     let nome = "Ana"; //O CERTO È TROCAR O LET POR VAR
//     console.log(nome); // ‘Ana’
//   }

//   // variável `nome` não está acessível
//   console.log(nome); // Error: nome is not defined
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Escopo de função
// Variáveis declaradas dentro de uma função são consideradas “locais” (ou seja, o oposto de “globais”) e não podem ser acessadas por código que esteja fora do bloco da função.

// function cumprimentar() {
//     const nome = "Camila"; // variável local
//     const cumprimento = 'Olá'; // variável local
//     console.log(`${cumprimento}, ${nome}!`); // “Olá, Camila!”
//   }

//   // as variáveis não podem ser acessada de fora da função
//   console.log(`${cumprimento}, ${nome}!`); // Dará erro de “not defined” no console
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Number.parseInt('5'); Trocar e tipo par anumeros

// console.log(5 * '5'); Exemplo de não NAN

// console.log(5 * 'E'); Exemplo de NAN

//TEMPLATE STRING

// .toUpperCase()Deixa tudo em caixa alta

// const nome = "Beatriz";
// console.log(`a estudandte se chama ${nome}`); ACENTO GRAVE DEIXA UTILIZAR CITAÇÔES DENTRO DO CONSOLE.LOG

// const cifrao = "\u0024";
// const aMaiusculo = "\u0041";
// const tique = "\u2705";
// const hiragana = "\u3041";

// console.log(cifrao);
// console.log(aMaiusculo);
// console.log(tique);
// console.log(hiragana);

// Temos 4 tipos primitivos, STRING, Number, Boleano e Symbol.

//Exemplo de Symbol

// Criando um símbolo
// const meuSimbolo = Symbol();

// // Símbolos podem receber uma descrição (opcional)
// const simboloComDescricao = Symbol('descricao_do_simbolo');

// // Símbolos são únicos
// const outroSimbolo = Symbol();
// console.log(meuSimbolo === outroSimbolo); // Saída: false

// // Símbolos podem ser usados como chaves de propriedades de objetos
// const obj = {
//   [meuSimbolo]: 'valor_do_simbolo'
// };

// // Acessando a propriedade usando o símbolo como chave
// console.log(obj[meuSimbolo]); // Saída: 'valor_do_simbolo'

// +"45" + // retorna o número 45
//   true; // retorna o número 1

// console.log(typeof +"45"); // retorna ‘number’
// console.log(typeof +true); // retorna ‘number’

// Importante: embora seja prático, o uso do operador + para coerção de tipos não é tão conhecido e sua função no código não fica tão óbvia quanto a das funções.
// Se for o caso, combine o seu uso junto às outras pessoas que trabalharão no mesmo código.


// FUnção e Return Exemplo:

// function dividir(dividendo, divisor) {
//     return dividendo / divisor;
//    }
   
//    const resultado = dividir(10, 5);
//    console.log(`o resultado é ${resultado}`); // o resultado é 2
//return deve ser a última linha do bloco:

//DOis Return

// function dividir(dividendo, divisor) {
//     if (divisor !== 0) {
//       return dividendo / divisor;
//     } else {
//       return 'favor não dividir por zero';
//     }
//    }
   
//    const resultado = dividir(10, 5);
//    console.log(resultado); // 2
//    const resultadoZero = dividir(10, 0);
//    console.log(resultadoZero); // 'favor não dividir por zero'

// É possível que uma função tenha mais de um return, pois estão em blocos diferentes e excludentes:
// de acordo com a nossa lógica, a função obrigatoriamente vai executar ou o if ou ou else,
// e cada um dos blocos {} contém seu próprio return sendo a última instrução.

//Funçoes declaradas, elas são puxadas, agr inspeção de função não é, são anonimas
// Arrow function =>

// function (nome) => nome; OU 
// function (nome) => {
//     return nome;
// };
