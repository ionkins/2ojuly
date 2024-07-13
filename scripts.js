document.addEventListener('DOMContentLoaded', (event) => {
    const card = document.getElementById('card');

    card.addEventListener('click', function() {
        card.classList.toggle('flip');
    });
});
