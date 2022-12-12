const cards = document.querySelectorAll('.card-container')

const cardHandler = (event) => {
    let getCard = event.target
    cards.forEach(card => {
        card.classList.remove('active')
        card.childNodes[1].style.opacity = 0

    })
    getCard.classList.add('active')
    getCard.childNodes[1].style.opacity = 1
}

cards.forEach(card => {
    card.addEventListener('click', cardHandler)
})
