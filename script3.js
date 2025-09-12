const cards = document.querySelectorAll('.card')

// using Intersection observer
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.background = 'green';
//         } else {
//             entry.target.style.background = 'red';
//         }
//     })
// }, {
//     threshold: 1
// })
// cards.forEach((card) => observer.observe(card))


// using top-bottoms

const scrollContainer = document.querySelector('.cardWrapper')

function handleScroll(){
    const containerTop = scrollContainer.getBoundingClientRect().top;
    const containerBottom = scrollContainer.getBoundingClientRect().bottom;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;
        if (cardTop >= containerTop && cardBottom <= containerBottom) {
            card.style.background = 'green';
        } else {
            card.style.background = 'red';
        }
        console.log('card', {cardTop, cardBottom, containerTop, containerBottom});
    });
}

 scrollContainer.addEventListener('scroll', handleScroll)
 handleScroll()