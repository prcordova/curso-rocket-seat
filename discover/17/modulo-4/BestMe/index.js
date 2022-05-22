const questions = [
    'qual seu nome?',
    'O que aprendi hoje?',
    'o que me deixou aborrecido? e o que eu poderia fazer para melhorar?',
    'o que me deixou feliz hoje?',
    'quantas pessoas ajudei hoje?'
]

const ask = (index = 0) => {
    return process.stdout.write('\n\n' + questions[index] + ' > ')
}

ask()
const answers = []

process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})
process.on('exit', () => {
    console.log(`
    Bacana ${answers[0]} !

    O que aprendeu foi: 
    ${answers[1]}

    O que te aborrceu e poderia melhorar foi :
    ${answers[2]}

    O que te deixou feliz foi :
    ${answers[3]}

    Voce ajudou ${answers[4]} pessoas hoje!
    
    Volte amanhã para novas reflexões!
    `
    )
})