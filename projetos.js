const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const projectCards = document.querySelectorAll('.project-card-inner');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
});

if (localStorage.getItem('theme') === 'light') body.classList.add('light-mode');

projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-source')) return;
        this.classList.toggle('flipped');
    });
});