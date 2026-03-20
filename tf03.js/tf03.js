// tf03.js
// Trabalho Final - Aula 03
// Tema: Tipos de Referência em JavaScript

console.log("===== TRABALHO FINAL - AULA 03 =====\n");

// 1. Criação do objeto principal
const aluno = {
    nome: "Hector",
    curso: "Análise e Desenvolvimento de Sistemas",
    semestre: 3,
    disciplinas: ["JavaScript", "Banco de Dados", "Engenharia de Software"]
};

console.log("1) Objeto principal criado:");
console.log(aluno);
console.log("\n");

// 2. Uso de array dentro de object
console.log("2) Acessando propriedades simples e array interno:");
console.log("Nome:", aluno.nome);
console.log("Curso:", aluno.curso);
console.log("Semestre:", aluno.semestre);
console.log("Disciplinas:", aluno.disciplinas);
console.log("\n");

// 3. Iteração nas propriedades do objeto com for...in
console.log("3) Iterando nas propriedades do objeto com for...in:");
for (let propriedade in aluno) {
    console.log(`${propriedade}:`, aluno[propriedade]);
}
console.log("\n");

// 4. Iteração nos itens do array com for...of
console.log("4) Iterando nos itens do array com for...of:");
for (let disciplina of aluno.disciplinas) {
    console.log("Disciplina:", disciplina);
}
console.log("\n");

// 5. Comparação entre tipos de referência
console.log("5) Comparação entre tipos de referência:");
const objetoA = { valor: 10 };
const objetoB = { valor: 10 };
const objetoC = objetoA;

console.log("objetoA == objetoB:", objetoA == objetoB);   // false
console.log("objetoA === objetoB:", objetoA === objetoB); // false
console.log("objetoA === objetoC:", objetoA === objetoC); // true
console.log("\n");

// 6. Exemplo de cópia por referência
console.log("6) Exemplo de cópia por referência:");
const copiaReferencia = aluno;

console.log("Antes da alteração:");
console.log("aluno.nome =", aluno.nome);
console.log("copiaReferencia.nome =", copiaReferencia.nome);

copiaReferencia.nome = "Carlos";

console.log("Depois da alteração na cópia por referência:");
console.log("aluno.nome =", aluno.nome);
console.log("copiaReferencia.nome =", copiaReferencia.nome);
console.log("Obs.: ambos mudaram porque apontam para o mesmo objeto.");
console.log("\n");

// 7. Exemplo de cópia com spread operator
console.log("7) Exemplo de cópia com spread operator:");
const copiaSpread = {
    ...aluno,
    disciplinas: [...aluno.disciplinas]
};

console.log("Antes da alteração:");
console.log("aluno:", aluno);
console.log("copiaSpread:", copiaSpread);

copiaSpread.nome = "Marina";
copiaSpread.disciplinas.push("Algoritmos");

console.log("\nDepois da alteração na cópia com spread:");
console.log("aluno:", aluno);
console.log("copiaSpread:", copiaSpread);
console.log("Obs.: o nome e o array da cópia foram alterados sem modificar o original.");
console.log("\n");

// 8. Transformação do objeto em JSON com JSON.stringify()
console.log("8) Transformando o objeto em JSON:");
const alunoJSON = JSON.stringify(aluno, null, 2);
console.log(alunoJSON);
console.log("\n");

console.log("===== FIM DO EXERCÍCIO =====");