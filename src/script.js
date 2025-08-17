const conatiner = document.querySelector('.scroll-container');
conatiner.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
});