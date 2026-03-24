let input = require('fs').readFileSync('index.txt', 'utf8');
let lines = input.split('\n')


let numeros = lines.join(' ');

let valores = numeros.split(' ')

let vetor = valores.map(Number)


console.log(`VALOR A PAGAR: R$ ${((vetor[1]*vetor[2]) + (vetor[4]*vetor[5])).toFixed(2)}`)
