const words =
  '<br /> <br />Juan Francisco Garcia, <br /> a Front-End Developer';

let cursor = gsap.to('.cursor', {
  opacity: 0,
  ease: 'power2.inOut',
  repeat: -1,
});

let boxTl = gsap.timeline();

boxTl
  .to('.box', {
    duration: 1,
    width: '15rem',
    delay: 0.5,
    ease: 'power4.inOut',
  })
  .from('.hi', { duration: 1, y: '10rem', ease: 'power3.out' })
  .to('.box', {
    duration: 1,
    height: '5.2rem',
    ease: 'elastic.out',
  })
  .to('.box', {
    duration: 0.5,
    width: '0rem',
    ease: 'power4.out',
  })
  .to('.text', { duration: 4, text: words });

///card flip animation///

const card = document.querySelectorAll('.card');

function flipCard() {
  this.classList.toggle('is-flipped');
}
card.forEach(card => card.addEventListener('click', flipCard));

////// Card up animation //////
const card_bounce = document.querySelectorAll('.card-container');

function add_hover() {
  this.classList.replace('is-off-hover', 'is-on-hover');
}

function remove_hover() {
  this.classList.replace('is-on-hover', 'is-off-hover');
}

for (let card of card_bounce) {
  card.addEventListener('mouseenter', add_hover);
}

for (let card of card_bounce) {
  card.addEventListener('mouseleave', remove_hover);
}
