//once '1x'
//on ' fica escutando infinitamente
//exit finaliza

const {EventEmitter} = require('events')
const ev = new EventEmitter()

ev.on('saySomething', (message) => {
    console.log('eu ouvi voce :' , message)
})

// ev.once('saySomething', (message) => {
//     console.log('eu ouvi voce uma vez :' , message)
// })
 
ev.emit('saySomething', 'Mayk')
 