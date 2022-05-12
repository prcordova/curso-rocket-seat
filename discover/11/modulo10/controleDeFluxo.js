
function sayMyName(name = '') {
    console.log('executando...')
    if(name === '' ){

        throw 'nome é obrigadório!'
    }
    console.log(name)
}
 
try {
   sayMyName()
}
catch(e) {
    console.log(e)
}