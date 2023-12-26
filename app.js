/////////SMOOTH SCROLL////////
const alllinks = document.querySelectorAll('.scroll');

alllinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    /////////SCROLL TO TOP///////
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    /////////SCROLL TO SECTION///////
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/////////STICKY NAVIGATION///////
const sectionHero = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHero);

///////// CONTACT MODAL///////

const overlay = document.querySelector('.overlay');
const contactForm = document.querySelector('.contact-form');
const contactBtns = document.querySelectorAll('.contactBtn');
const btnCloseContactForm = document.querySelector('.close-modal');
const btnOpenContactForm = document.querySelector('.contactBtn');

const OpenContactForm = function () {
  contactForm.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const CloseContactForm = function () {
  contactForm.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < contactBtns.length; ++i)
  contactBtns[i].addEventListener('click', OpenContactForm);
btnCloseContactForm.addEventListener('click', CloseContactForm);
overlay.addEventListener('click', CloseContactForm);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !contactForm.classList.contains('hidden')) {
    CloseContactForm();
  }
});
