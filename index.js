const title = document.querySelector('h1');
const header = document.getElementById('hero-header');

header.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    header.style.setProperty('--mouse-x', `${x}px`);
    header.style.setProperty('--mouse-y', `${y}px`);
});