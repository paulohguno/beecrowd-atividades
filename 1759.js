const input = require('fs').readFileSync('index.txt', 'utf8');
const lines = input.split('\n');


teste = lines.map(Number)

if (teste[0] == 1 ){
    process.stdout.write(`Ho!\n`)
}else{
    for (let i = 1; i < teste[0]; i++) {
    process.stdout.write(`Ho `)
}
process.stdout.write(`Ho!\n`)

}
