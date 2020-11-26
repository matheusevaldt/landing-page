// Global variables.
const header = document.getElementsByTagName('header')[0];
const nav = header.getElementsByTagName('nav')[0];
const headerLogo = document.querySelector('.header-logo')
const mobileMenu = document.querySelector('.mobile-menu');
const buttonOpenMobileMenu = document.querySelector('.button-open-mobile-menu');
const buttonCloseMobileMenu = document.querySelector('.button-close-mobile-menu');
const mobileMenuItems = document.querySelector('.mobile-menu-items');
const mobileMenuOuter = document.querySelector('.mobile-menu-outer');
let currentNotification;

// Event listeners.
buttonOpenMobileMenu.addEventListener('click', openMobileMenu);
buttonCloseMobileMenu.addEventListener('click', closeMobileMenu);
mobileMenuOuter.addEventListener('click', closeMobileMenu);
headerLogo.addEventListener('click', scrollToTop);

// Functions to be executed when the page is being loaded.
(function() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fixViewHeightOnMobile);
        document.addEventListener('DOMContentLoaded', setCopyrightYear);
    } else {
        fixViewHeightOnMobile();
        setCopyrightYear();
    }
})();

// Display the mobile menu.
// Display, in order, the items that are in the mobile menu.
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

// Close the mobile menu.
// Set the mobile menu to default state.
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

// Scroll the user to the top of the document.
function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

// Whenever the user clicks in a button or a link, it will display a notification.
window.addEventListener('click', event => {
    const notification = document.querySelector('.notification');
    const element = event.target.classList;
    if (element.contains('no-destination')) {
        clearTimeout(currentNotification);
        notification.classList.add('display-notification');
        currentNotification = setTimeout(() => notification.classList.remove('display-notification'), 4000);
    }
})

// Add a new style to the header if the page has been scrolled.
window.addEventListener('scroll', () => {
    const amountScrolled = window.scrollY;
    if (amountScrolled > 1) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
});

// Adjust the viewheight for mobile devices.
function fixViewHeightOnMobile() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

// Set the current year in the copyright message.
function setCopyrightYear() {
    const copyrightYear = document.querySelector('.copyright-year');
    const date = new Date();
    const currentYear = date.getFullYear();
    copyrightYear.innerHTML = currentYear;
}