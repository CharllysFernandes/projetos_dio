/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustivel do carro por KM;
3 - Distância em KM da viagem;

*/

const precoCombustivelLitro = 5.79;
const kmPorLitros = 12;
let kmDistancia = 1580;

let valorViagem = (kmDistancia/kmPorLitros)* precoCombustivelLitro;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

console.log(new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(valorViagem));