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

///////// MOBILE NAVIGATION ///////

const mobileNav = document.querySelector('.header');
const navBtn = document.querySelector('.btn-mobile-nav');

navBtn.addEventListener('click', function () {
  mobileNav.classList.toggle('nav-open');
});

///////// CONTACT MODAL ///////

const overlay = document.querySelector('.overlay');
const contactForm = document.querySelector('.contact-form');
const contactBtns = document.querySelectorAll('.contactBtn');
const btnCloseContactForm = document.querySelector('.close-modal');
const btnOpenContactForm = document.querySelector('.contactBtn');

const displayContactForm = function () {
  contactForm.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

for (let i = 0; i < contactBtns.length; ++i)
  contactBtns[i].addEventListener('click', displayContactForm);
btnCloseContactForm.addEventListener('click', displayContactForm);
overlay.addEventListener('click', displayContactForm);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !contactForm.classList.contains('hidden')) {
    displayContactForm();
  }
});

///////// SEND EMAIL ///////
const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const mess = document.getElementById('message');

const sendEmail = function () {
  const bodymessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Message ${mess.value}`;

  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'juanfg08.jg@gmail.com',
    Password: '3628CF2B8DCC12C641EBA7A296B9A298BF98',
    To: 'juanfg08.jg@gmail.com',
    From: 'juanfg08.jg@gmail.com',
    Subject: 'New Message',
    Body: bodymessage,
  }).then(message => {
    if (message === 'OK') {
      Swal.fire({
        html: '<h2 class="title-popup"> Message sent successfully! </h2>',
        title: 'Success!',
        text: 'Message sent successfully!',
        icon: 'success',
        width: '30%',
        padding: '4rem 0',
        background: '#fff',
      });
    }
  });
};

form.addEventListener('submit', e => {
  e.preventDefault();
  sendEmail();
});
