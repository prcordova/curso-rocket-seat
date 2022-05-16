// sistemas de gastos familiar

// crie um objeto que possuirá 2 propriedades, ambas do tipo array: 

//     * receitas : []
//     * despesas : []

// agora crie uma fução que irá calcular o total de receitas 
// e despesas e irá mostrar uma mensagem se a familia está com
// saldo positivo ou negativo, seguido do valor saldo

// function saldoFamiliar() {

//     const receitas = [200,300,500]
//     const despesas = [300,500,90000]
//     const saldoFinal = ''

//     if (receitas >= despesas) {
//         console.log('despesas : ',despesas, 'receita', receitas, 'saldo final é positivo')
//     } else if (receitas < despesas) {
//         console.log('despesas : ',despesas, 'receita', receitas, 'saldo final é negativo')
        
//     }
//     return saldoFinal
// }

// console.log(saldoFamiliar())

let family = {
    incomes: [5030,200, 250.43, 360.45],
    expenses: [320.24, 128.45, 176.87, 1450.00]
}

function sum(array) {
    let total = 0

    for(let value of array) {
        total += value
    }

    return total

}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    let itsOk = total > 0
    let balanceText = 'negativo'

    if(itsOk) {
       balanceText = 'positivo'
    } 
    console.log(`seu saldo é ${balanceText} R$${total.toFixed(2)}`)
}
calculateBalance()