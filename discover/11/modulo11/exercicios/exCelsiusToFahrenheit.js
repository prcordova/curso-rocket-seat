// celcius em fahrenheit

// crie uma função que receba uma string em celcius ou fahrenheit e faça a transformação de uma unidade para a ontouchstart

// C = (F - 32) * 5/9

// F = C * 9/5 + 32

//transformDegree('50f')

function transformDegree(degree) {
    const celciusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celciusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    // fluxo ideal F para C
    let updatedDegree = Number(degree.toUpperCase().replace('F', ''));
    let formula = (fahrenheit) => (fahrenheit - 32) *5/9
    let degreeSign = 'C'

    if(celciusExists) {
         updatedDegree = Number(degree.toUpperCase().replace('C', ''));
         formula = celcius  => celcius * 9/5 + 32
         degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try{ 
    console.log(transformDegree('30c') )
    // transformDegree('50z')
} catch(error){
    console.log(error.message)
}