const cards = [
    {
        name: 'dog',
        img: 'images/dog.png'
    },
    {
        name: 'cat',
        img: 'images/cat.jpg'
    },
    {
        name: 'lion',
        img: 'images/lion.jpg'
    },
    {
        name: 'bear',
        img: 'images/bear.jpg'
    },
    {
        name: 'elephant',
        img: 'images/elephant.png'
    },
    {
        name: 'giraffe',
        img: 'images/giraffe.jpg'
    },
    {
        name: 'dog',
        img: 'images/dog.png'
    },
    {
        name: 'cat',
        img: 'images/cat.jpg'
    },
    {
        name: 'lion',
        img: 'images/lion.jpg'
    },
    {
        name: 'bear',
        img: 'images/bear.jpg'
    },
    {
        name: 'elephant',
        img: 'images/elephant.png'
    },
    {
        name: 'giraffe',
        img: 'images/giraffe.jpg'
    }
]

cards.sort(()=> 0.5 - Math.random())

const grid = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard(){
    for(i = 0; i < cards.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i) 
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    } 
}

createBoard()

function checkMatch(){
    const cardS = document.querySelectorAll('#grid img')
    if(cardsChosenIds[0] == cardsChosenIds[1] ){
        alert('You`ve clicked the same card!')
    }
    if(cardsChosen[0] == cardsChosen[1]){
        alert('It`s a match!')
        cardS[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
        cardS[cardsChosenIds[1]].setAttribute('src', 'images/white.png')
        cardS[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cardS[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cardS[cardsChosenIds[0]].setAttribute('src', 'images/blank.jpg')
        cardS[cardsChosenIds[1]].setAttribute('src', 'images/blank.jpg')
        alert('Sorry, try again!')
    }
    cardsChosen = []
    cardsChosenIds = []
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cards[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cards[cardId].img)
    if (cardsChosen.length == 2){
        setTimeout(checkMatch, 500)
    }
}
