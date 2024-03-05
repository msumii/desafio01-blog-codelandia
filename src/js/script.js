// Search
function searchArticle() {
    const searchTerm = document.querySelector('.input-search').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('.content-title').textContent.toLowerCase();
        const description = card.querySelector('.content-description').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}


// Favorite
function toggleFavorite(element) {
    element.classList.toggle("active")
}
