const header = document.getElementsByTagName('header')[0];

window.addEventListener('scroll', () => {
    const amountScrolled = window.scrollY;
    if (amountScrolled > 5) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
});