// Encontrar número primos em uma array

const numeros = [0,1,2,3,45,6,7,8,9,10,11]

/*Um número natural é primo se ele possui apenas dois divisores positivos e distintos.
Ou seja, um número natural é primo se ele é maior que 1 e é divisível apenas por si próprio e por 1.... 
- Veja mais em https://educacao.uol.com.br/disciplinas/matematica/numeros-primos-veja-algoritmo-para-encontra-los.htm?cmpid=copiaecola */

let divisores;

for (let i = 0; i <= numeros.length; i++) {
    divisores = 0;
   
    for (let divisor = 1; divisor <= numeros.length; divisor++){
        if (i % divisor == 0) {
            divisores++;
            
        }      
    }

    if (divisores == 2) {
        console.log(`${i} é um número primo.`)
    }else{
        console.log(`${i} não é um número primo`)
    }
   
    
}