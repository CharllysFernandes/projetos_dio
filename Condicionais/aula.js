/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:

1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustivel do carro por KM;
5 - Distância em KM da viagem;


*/


const precoEtanol = 5.79;
const precoGasolina = 6.66;

let tipoCombustivel = 'Gasolina';

const kmPorLitros = 12;
let kmDistancia = 1580;

if (tipoCombustivel === 'Etanol') {
    const valorViagem = (kmDistancia/kmPorLitros)* precoEtanol;
    console.log(new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(valorViagem));
    
} else {
    const valorViagem = (kmDistancia/kmPorLitros)* precoGasolina;
    console.log(new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(valorViagem));
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat



