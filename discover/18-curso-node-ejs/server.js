const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    const items = [
        {
            title: 'D',
            message: 'Desenvolver aplicações/serviços de forma fácil'
        },
        {
            title: 'E',
            message: 'EJS usa JavaScript para renderizar HTML'
        },
        {
            title: 'M',
            message: 'Muito fácil de usar'
        },
        {
            title: 'A',
            message: 'Amorzinho'
        },
        {
            title: 'I',
            message: 'install ejs'
        }
        ,{
            title: 'S',
            message: 'Sintaxe simples'
        }

    ]
    const subtitle = 'Uma linguagem de modelagem para criação de páginas html utilizando JS '

    res.render('pages/index', {
        qualities:  items,
        subtitle : subtitle,
    })
})

app.get('/sobre', function (req, res) {
    res.render('pages/about');
})
app.get('/contato', function (req, res) {
    res.render('pages/contact');
})

app.listen(8080);
console.log('Server Rodando')