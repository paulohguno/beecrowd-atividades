let input = require('fs').readFileSync('index.txt', 'utf8');
let lines = input.split('\n')


let valores = lines.map(Number)

console.log(`MEDIA = ${(((valores[0]*3.5)+(valores[1]*7.5))/11).toFixed(5)}`)
