// abrir modal
const books = document.querySelectorAll('.book')
const modal = document.querySelector('.modal-background')
const modalImage = document.querySelector('.modalImage')

const modalText = document.querySelector('.modal-text')


for (let book of books) {
    
    book.addEventListener('click', function() {
    modal.classList.add('active')

    const bookId = book.getAttribute('id')
    modalImage.src = `${bookId}`

    
    const modalTitle = book.querySelector('.card-description h1')
    const modalAuthor = book.querySelector('.card-description p')

    modalText.innerHTML += `<h1>${modalTitle.textContent}</h1>`
    modalText.innerHTML += `<p>${modalAuthor.textContent}</p>`
    
    })
    
}

// fechar modal
const closeButton = document.querySelector('.close-button')

closeButton.addEventListener('click', function(){
    modal.classList.remove('active')
    modalText.innerHTML = ''
})

// alert
const readBook = document.querySelector('.options p')

readBook.addEventListener('click', function(){
    alert('Desculpe, este livro está indisponível no momento.')
})
