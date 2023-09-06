//contact form
let body = document.querySelector('body')
let contactPage = document.querySelector('#contactPage')
let contactBtn = Array.from(document.querySelectorAll('#contactBtn'))

let close = document.querySelector('#close')

contactBtn.forEach(x => {
    x.addEventListener('click', toggleContactForm)
})
close.addEventListener('click', toggleContactForm)

function toggleContactForm() {
    event.preventDefault()
    contactPage.classList.toggle('hidden')
    if (body.classList.contains('noScroll')) {
        setTimeout(() => {
            body.classList.toggle('noScroll')
        }, 500);
    } else {
        body.classList.toggle('noScroll')
    }
}

if (document.querySelector('#contactBtnFreelance')) {
    let contactBtnFreelance = document.querySelector('#contactBtnFreelance')
    contactBtnFreelance.addEventListener('click', toggleContactForm)
}

//mobile menu
const mobileMenu = document.querySelector('.mobileMenu')
const mobileNav = document.querySelector('.mobileNav')

mobileMenu.addEventListener('click', showMobileNav)

function showMobileNav() {
    mobileNav.classList.toggle('mobileShow')
}


//layout responsiveness for mobile from: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });