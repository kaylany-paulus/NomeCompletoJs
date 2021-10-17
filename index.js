let nome = prompt("Digite seu nome:") || "";
let sobrenome = prompt("Digite seu sobrenome:") || "";

let nomecompleto = `Nome completo: ${nome} ${sobrenome}`;
let nomecatalogo = `Nome de catálogo: ${sobrenome.toUpperCase()}, ${nome}`;

alert(nomecompleto);
alert(nomecatalogo);