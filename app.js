document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const genreRadios = document.querySelectorAll('.genre-filter');
    const animeCards = document.querySelectorAll('.anime-card');

    function filterAnime() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedGenre = document.querySelector('.genre-filter:checked').value;

        animeCards.forEach(card => {
            const title = card.querySelector('.anime-title').textContent.toLowerCase();
            const matchesSearch = title.includes(searchTerm);
            const matchesGenre = selectedGenre === 'all' || card.classList.contains(selectedGenre);

            if (matchesSearch && matchesGenre) {
                card.style.display = 'block';
                // Add a small animation effect
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Event listeners
    if(searchInput) {
        searchInput.addEventListener('input', filterAnime);
    }
    
    genreRadios.forEach(radio => {
        radio.addEventListener('change', filterAnime);
    });
});

// Adding keyframes for fadeIn if not in CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
