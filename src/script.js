const header = document.getElementsByTagName('header')[0];
const mobileMenu = document.querySelector('.mobile-menu');
const buttonOpenMobileMenu = document.querySelector('.button-open-mobile-menu');
const buttonCloseMobileMenu = document.querySelector('.button-close-mobile-menu');

buttonOpenMobileMenu.addEventListener('click', openMobileMenu);
buttonCloseMobileMenu.addEventListener('click', closeMobileMenu);

function openMobileMenu() {
    mobileMenu.classList.add('open-mobile-menu');
}

function closeMobileMenu() {
    mobileMenu.classList.remove('open-mobile-menu');
}

window.addEventListener('scroll', () => {
    const amountScrolled = window.scrollY;
    if (amountScrolled > 5) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
});