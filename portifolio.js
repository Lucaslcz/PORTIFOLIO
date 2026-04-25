const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const emailModal = document.getElementById("email-modal");
const emailBtn = document.getElementById("email-link");
const closeModal = document.querySelector(".close-modal");
const projectCards = document.querySelectorAll('.project-card-inner');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
}

emailBtn.onclick = function() {
    emailModal.style.display = "flex";
}

closeModal.onclick = function() {
    emailModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == emailModal) {
        emailModal.style.display = "none";
    }
}

function copyEmail() {
    const emailText = document.getElementById("email-text").innerText;
    navigator.clipboard.writeText(emailText).then(() => {
        const copyBtn = document.querySelector(".btn-copy");
        copyBtn.innerText = "Copiado!";
        setTimeout(() => {
            copyBtn.innerText = "Copiar E-mail";
        }, 2000);
    });
}

projectCards.forEach(card => {
    card.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn-source')) {
            return; 
        }
        this.classList.toggle('flipped');
    });
});