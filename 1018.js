let vetor = lines.map(Number)
let valor = vetor[0]

let notas ={
    cem: 0,
    cinquenta: 0,
    vinte: 0,
    dez: 0,
    cinco: 0,
    dois: 0,
    um: 0
}

while (valor > 0){

    if (valor >= 100){
        valor = valor - 100
        notas.cem++
    }else if (valor >= 50){
        valor = valor - 50
        notas.cinquenta++

    }else if (valor >= 20){
        valor = valor - 20
        notas.vinte++

    }else if (valor >= 10){
        valor = valor - 10
        notas.dez++
    }else if (valor >= 5){
        valor = valor - 5
        notas.cinco++
    }
    else if (valor >= 2){
        valor = valor - 2
        notas.dois++

    }else if (valor >= 1){
        valor = valor - 1
        notas.um++
    }else{
        valor = 0 
    }
}

console.log(`${vetor[0]}
${notas.cem || 0} nota(s) de R$ 100,00
${notas.cinquenta || 0} nota(s) de R$ 50,00
${notas.vinte || 0} nota(s) de R$ 20,00
${notas.dez || 0} nota(s) de R$ 10,00
${notas.cinco || 0} nota(s) de R$ 5,00
${notas.dois || 0} nota(s) de R$ 2,00
${notas.um || 0} nota(s) de R$ 1,00`)