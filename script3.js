const cards = document.querySelectorAll('.card')
console.log('card', cards);

const observer = new IntersectionObserver((entries) => {
    console.log('entries', entries)
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.background = 'green';
        } else {
            entry.target.style.background = 'red';
        }
    })
}, {
    threshold: 1
})
cards.forEach((card) => observer.observe(card))