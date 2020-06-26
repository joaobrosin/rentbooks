const modal = document.querySelector('.modal-overlay')
const modal2 = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')
const exitButton = document.querySelector('.exitButton')
const maximizeButton = document.querySelector('.maximizeButton')

for (let card of cards) {
    card.addEventListener('click', function(){
        const pageId = card.getAttribute('id')
        window.location.href = `/option?id=${pageId}`
    })
}

exitButton.addEventListener('click', function(){
    modal.classList.remove('active')
    modal2.classList.remove('maximize')
    maximizeButton.classList.remove('maxon')
    document.querySelector('iframe').src = ''
})


/* maximizar */

maximizeButton.addEventListener('click', function(){
    modal2.classList.add('maximize')
    maximizeButton.classList.add('maxon')
})



