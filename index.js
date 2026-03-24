const { format } = require('path');

let input = require('fs').readFileSync('index.txt', 'utf8');
let lines = input.split('\n')




let valores = lines.map(Number)

let casas = valores.length

