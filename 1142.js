let input = require('fs').readFileSync('index.txt', 'utf8');
let lines = input.split('\n')



let quantidade =lines.shift()

let a = 1
for(let i = 0 ; i < quantidade ; i++){
    console.log(`${a} ${a+1} ${a+2} PUM`)
    a = a + 4
}