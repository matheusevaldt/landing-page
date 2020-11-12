const header = document.getElementsByTagName('header')[0];
const mobileMenu = document.querySelector('.mobile-menu');
const buttonOpenMobileMenu = document.querySelector('.button-open-mobile-menu');
const buttonCloseMobileMenu = document.querySelector('.button-close-mobile-menu');
const mobileMenuItems = document.querySelector('.mobile-menu-items');

const landingPage = document.querySelector('.landing-page');

buttonOpenMobileMenu.addEventListener('click', openMobileMenu);
buttonCloseMobileMenu.addEventListener('click', closeMobileMenu);

function openMobileMenu() {
    mobileMenu.classList.add('open-mobile-menu');
    landingPage.classList.add('blur-landing-page');
    setTimeout(() => mobileMenuItems.classList.add('display-mobile-menu-items'), 600);
}

function closeMobileMenu() {
    mobileMenu.classList.remove('open-mobile-menu');
    landingPage.classList.remove('blur-landing-page');
    mobileMenuItems.classList.remove('display-mobile-menu-items');
}

window.addEventListener('scroll', () => {
    const amountScrolled = window.scrollY;
    if (amountScrolled > 5) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
});