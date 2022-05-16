// buscando e contando dados em arrays

// baseado no array de livros por categoria abaixo, faça os seguintes desafios para
// * contar o numero de categorias e o numero de livros de cada categoria
// * contar o numero de autores
// *Mostrar livros do autor auguto cury
// * transformar a função acima em uma função que irá receber nome do autor e devolver livros do autor


const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'os Segredos da mente milionária',
                author: 'T. Harv Eker',
            
            },{
                title: 'O homem mais rico da Babilonia',
                author: 'George S. clason',
            },{
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e sharon L. Lechter',
            }
        ],
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é insubstituível',
                author: 'Augusto Cury',

            },
            {
                title: 'Ansiedade - como enfrentar o mal do século',
                author: 'Augusto Cury',
            },
            {
                title: 'os 7 habitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey',
            }
        ]
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories)

for(let category of booksByCategory) {
    console.log('total de livros da categoria:', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];
    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log(' total de autores : ', authors.length)
}
countAuthors()


console.log('livros de um autor especifico')

function booksOfAuthor(author) {
    let books = []; 

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do author ${author} : ${books.length}  : ${books.join(', ')}`)
}
booksOfAuthor('Augusto Cury')