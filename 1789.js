
const input = require('fs').readFileSync('index.txt', 'utf8');
const lines = input.split('\n');


let todososvalores = [];


for (let i = 1; i < lines.length; i += 2) {
    if (!lines[i]) continue;
    
    let valores = lines[i].trim().split(' ').map(Number);
    todososvalores.push(valores);
}


let resultado = 0 

for ( let i  = 0 ; todososvalores.length > i ; i++ ) {
    for ( let j = 0 ; todososvalores[i].length > j ; j++ ) {
        if(resultado < todososvalores[i][j]) {
            resultado = todososvalores[i][j]
            
            
        }else {

            null
        }
    }
    if(resultado < 10) {
            console.log(`1`)
        }else if(resultado > 9 && resultado < 20) {
            console.log(`2`)
        }else {
            console.log(`3`)
        }
        resultado = 0
}

