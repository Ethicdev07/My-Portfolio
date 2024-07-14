/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

// SHOW
if (toggleMenu) {
    toggleMenu.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

// HIDDEN
if (closeMenu) {
    closeMenu.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                  : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (event)=>{
    event.preventDefault();

    emailjs.sendForm('service_39bcrqh','template_gkt57uq','#contact-form', 'WyrAsrHdvqkQcYh-I')
    .then(()=>{
        contactMessage.textContent = 'Message Sent Successfully ✅'

        setTimeout(()=>{
            contactMessage.textContent = ''
        },5000)

        contactForm.reset()
    })
    .catch((error)=>{
        contactMessage.textContent = 'Message not sent ❌, please try again'
        console.log(error)
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute('id')
        const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
    

/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = scrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
//     reset: true // animation will repeat
// })
// sr.reveal(`.home__data, .experience, .skills, .contact__container`)
// sr.reveal(`.home__img`, {delay:600})
// sr.reveal(`.home__scroll`, {delay:800})
// sr.reveal(`.work__card, .services__card`, {interval: 100})
// sr.reveal(`.about__content`, {origin: 'right'})
// sr.reveal(`.about__img`, {origin: 'left'})