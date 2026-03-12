console.log("\n== 1) Tipos primitivos =="); // == 1) Tipos primitivos ==

const texto = "Olá, JavaScript";
const numero = 42;
const ligado = true;
let indefinido;
const nulo = null;
const numeroGigante = 90071992547409931234567890n;
const identificador = Symbol("id");

console.log("string:", typeof texto); // string: string
console.log("number:", typeof numero); // number: number
console.log("boolean:", typeof ligado); // boolean: boolean
console.log("undefined:", typeof indefinido); // undefined: undefined
console.log("null:", typeof nulo); // null: object
console.log("bigint:", typeof numeroGigante); // bigint: bigint
console.log("symbol:", typeof identificador); // symbol: symbol
console.log("Observação: typeof null é 'object' por um bug histórico da linguagem."); // Observação: typeof null é 'object' por um bug histórico da linguagem.

console.log("\n== 2) BigInt e Symbol =="); // == 2) BigInt e Symbol ==

const big = 1234567890123456789012345678901234567890n;
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log("BigInt:", big); // BigInt: 1234567890123456789012345678901234567890n
console.log("typeof BigInt:", typeof big); // typeof BigInt: bigint
console.log("Symbol 1 === Symbol 2:", id1 === id2); // Symbol 1 === Symbol 2: false
console.log("typeof Symbol 1:", typeof id1); // typeof Symbol 1: symbol

console.log("\n== 3) Operadores matemáticos, lógicos e comparação =="); // == 3) Operadores matemáticos, lógicos e comparação ==

console.log("10 + 5 =", 10 + 5); // 10 + 5 = 15
console.log("10 * 3 =", 10 * 3); // 10 * 3 = 30
console.log("true && false =", true && false); // true && false = false
console.log("!false =", !false); // !false = true
console.log("5 > 3 =", 5 > 3); // 5 > 3 = true
console.log("5 == '5' =", 5 == "5"); // 5 == '5' = true
console.log("5 === '5' =", 5 === "5"); // 5 === '5' = false

console.log("\n== 4) Concatenação e conversão dinâmica =="); // == 4) Concatenação e conversão dinâmica ==

console.log('2 + "2" =', 2 + "2"); // 2 + "2" = 22
console.log('2 + (+"2") =', 2 + (+"2")); // 2 + (+"2") = 4
console.log('"Valor: " + 10 =', "Valor: " + 10); // "Valor: " + 10 = Valor: 10

console.log("\n== 5) Escopo léxico e blocos {} =="); // == 5) Escopo léxico e blocos {} ==

{
  const criadoNoBloco = "{} sozinho já cria um bloco";
  console.log(criadoNoBloco); // {} sozinho já cria um bloco
}

{
  const dentroConst = "estou dentro do bloco";
  let dentroLet = "também estou dentro do bloco";
  console.log(dentroConst); // estou dentro do bloco
  console.log(dentroLet); // também estou dentro do bloco
}

try {
  console.log(dentroConst); // ReferenceError
} catch (erro) {
  console.log("Acesso fora do bloco (const):", erro.name); // Acesso fora do bloco (const): ReferenceError
}

try {
  console.log(dentroLet); // ReferenceError
} catch (erro) {
  console.log("Acesso fora do bloco (let):", erro.name); // Acesso fora do bloco (let): ReferenceError
}

const deFora = "variável criada fora";
{
  console.log("Usando de fora para dentro:", deFora); // Usando de fora para dentro: variável criada fora
}

if (true) {
  var vazouDoIf = "var escapou do bloco do if";
}
console.log(vazouDoIf); // var escapou do bloco do if

console.log("\n== 6) Shadowing com const =="); // == 6) Shadowing com const ==

const bloco = "valor";
console.log("Fora do if, bloco =", bloco); // Fora do if, bloco = valor

if (true) {
  console.log("Dentro do if, antes do bloco interno, bloco =", bloco); // Dentro do if, antes do bloco interno, bloco = valor

  {
    const bloco = "outro valor";
    console.log("Dentro do bloco interno, bloco =", bloco); // Dentro do bloco interno, bloco = outro valor
  }

  console.log("Depois do bloco interno, ainda no if, bloco =", bloco); // Depois do bloco interno, ainda no if, bloco = valor
}

console.log("Fora de tudo novamente, bloco =", bloco); // Fora de tudo novamente, bloco = valor

console.log("\n== 7) Imutabilidade =="); // == 7) Imutabilidade ==

let palavra = "javascript";
palavra.toUpperCase();
console.log("Sem reatribuir:", palavra); // Sem reatribuir: javascript

palavra = palavra.toUpperCase();
console.log("Com reatribuição:", palavra); // Com reatribuição: JAVASCRIPT

console.log("\n== 8) Assincronismo com setTimeout =="); // == 8) Assincronismo com setTimeout ==
console.log("setTimeout entra na fila e roda depois do código atual."); // setTimeout entra na fila e roda depois do código atual.

console.log("Exemplo 1 - A"); // Exemplo 1 - A
setTimeout(() => {
  console.log("Exemplo 1 - B (timeout 0)"); // Exemplo 1 - B (timeout 0)
}, 0);
console.log("Exemplo 1 - C"); // Exemplo 1 - C

console.log("Exemplo 2 - início"); // Exemplo 2 - início
setTimeout(() => {
  console.log("Exemplo 2 - timeout 100ms"); // Exemplo 2 - timeout 100ms
}, 100);
setTimeout(() => {
  console.log("Exemplo 2 - timeout 0ms"); // Exemplo 2 - timeout 0ms
}, 0);
console.log("Exemplo 2 - fim"); // Exemplo 2 - fim

console.log("Ordem real do exemplo 1: A, C, B."); // Ordem real do exemplo 1: A, C, B.
console.log("Ordem real do exemplo 2: início, fim, timeout 0ms, timeout 100ms."); 

# Atividade Aula 02

Demonstra, em um único arquivo Node.js, conceitos básicos de JavaScript como tipos primitivos, operadores, escopo léxico, shadowing, imutabilidade e assincronismo com `setTimeout`.

## Como rodar

```bash
node atividade-aula02.js
```// Ordem real do exemplo 2: início, fim, timeout 0ms, timeout 100ms.
