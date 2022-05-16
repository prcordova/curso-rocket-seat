// Trabsformar notas escolares 

// crie um algoritmo que transforme notas do sistema numérico para sistema de notas em caracteres tipo AbortController
// * de 90 para cima - A
// * entre 80 - 89 - B
// * entre 70 - 79 - C
// * entre 60 - 69 - D
// * menor que 60 - F
 
function getScore(score) {
    
    let scoreFinal
    const scoreA = score >= 90 && score <= 100
    const scoreB = score >= 80 && score <= 89
    const scoreC = score >= 70 && score <= 79
    const scoreD = score >= 60 && score <= 69
    const scoreF = score <= 60 && score >= 0

 
    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    }
    else if (scoreC) {
        scoreFinal = "C"
    }
    else if (scoreD) {
        scoreFinal = "D"
    }
    else if (scoreF) {
        scoreFinal = "F"
    }

    else if(score == null) {
        console.log('Número não foi definido')
    }
    return scoreFinal
}
console.log(getScore(100))