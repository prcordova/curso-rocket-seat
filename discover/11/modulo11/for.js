// estruturas de repetição
//For
//break ( parar a repetição)
//continue - pula a execução do momento

console.log('o Contador iniciou ...')
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        continue;
    }
    console.log(i)
}

console.log('Contagem regressiva iniciando...')
for(let i = 10; i > 0; i--) {
    console.log(i)
}
console.log('Fim!')