// Global variables.
const header = document.getElementsByTagName('header')[0];
const nav = header.getElementsByTagName('nav')[0];
const mobileMenu = document.querySelector('.mobile-menu');
const buttonOpenMobileMenu = document.querySelector('.button-open-mobile-menu');
const buttonCloseMobileMenu = document.querySelector('.button-close-mobile-menu');
const mobileMenuItems = document.querySelector('.mobile-menu-items');
const mobileMenuOuter = document.querySelector('.mobile-menu-outer');

// Event listeners.
buttonOpenMobileMenu.addEventListener('click', openMobileMenu);
buttonCloseMobileMenu.addEventListener('click', closeMobileMenu);
mobileMenuOuter.addEventListener('click', closeMobileMenu);

// 
function openMobileMenu() {
    mobileMenu.classList.add('open-mobile-menu');
    displayMobileMenuItems();
}

function displayMobileMenuItems() {
    const amountOfItems = mobileMenuItems.childElementCount;
    let itemsDisplayed = 0;
    for (let i = 0; i < amountOfItems; i++) {
        setTimeout(() => {
            mobileMenuItems.children[i].classList.add('display-mobile-menu-items');
            itemsDisplayed++;
            if (amountOfItems === itemsDisplayed) {
                setTimeout(() => {
                    buttonCloseMobileMenu.classList.add('display-button-close-mobile-menu');
                }, 500);
            }
        }, i * 200);
    }
}

// 
function closeMobileMenu() {
    mobileMenu.classList.remove('open-mobile-menu');
    clearMobileMenu();
}

function clearMobileMenu() {
    const amountOfItems = mobileMenuItems.childElementCount;
    for (let i = 0; i < amountOfItems; i++) {
        mobileMenuItems.children[i].classList.remove('display-mobile-menu-items');
    }
    buttonCloseMobileMenu.classList.remove('display-button-close-mobile-menu');
}








window.addEventListener('scroll', () => {
    const amountScrolled = window.scrollY;
    if (amountScrolled > 1) {
        header.classList.add('header-active');
        nav.classList.add('nav-active');
        if (amountScrolled > 450) {
            header.classList.add('header-remain-sticky');
        }
    } else {
        header.classList.remove('header-active');
        nav.classList.remove('nav-active');
        header.classList.remove('header-remain-sticky');
    }
});







function fixViewHeightOnMobile() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

function setCopyrightYear() {
    const copyrightYear = document.querySelector('.copyright-year');
    const date = new Date();
    const currentYear = date.getFullYear();
    copyrightYear.innerHTML = currentYear;
}

fixViewHeightOnMobile();
setCopyrightYear();