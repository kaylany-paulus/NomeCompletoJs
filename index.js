let nome = prompt("Digite seu primeiro nome:") || "";
let sobrenome = prompt("Digite seu útimo nome:") || "";

let nomecompleto = `Nome completo: ${nome} ${sobrenome}`;
let nomecatalogo = `Nome de catálogo: ${sobrenome.toUpperCase()}, ${nome}`;

alert(nomecompleto);
alert(nomecatalogo);