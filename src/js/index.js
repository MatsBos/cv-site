const btn = document.getElementById('mobile-button');
const menu = document.getElementById('mobile-menu');


btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


const inViewport = (entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {};

// Attach observer to every [data-inviewport] element:
const elementsInViewport = document.querySelectorAll('[data-inviewport]');
elementsInViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
});