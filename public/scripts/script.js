const modal = document.querySelector('.modal-overlay');
const modal2 = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');
const exitButton = document.querySelector('.exitButton');
const maximizeButton = document.querySelector('.maximizeButton');

for (let card of cards) {
    card.addEventListener('click', function(){
        const pageId = card.getAttribute('id');
        window.location.href = `/option?id=${pageId}`;
    });
}
