class MobileNav {
    constructor() {
        this.mobileNav = document.querySelector('.menu-mobile');
    }

    open() {
        this.mobileNav.classList.add('menu-mobile--open');
        this.mobileNav.classList.remove('menu-mobile__close-btn--close');
    }

    close() {
        this.mobileNav.classList.add('menu-mobile__close-btn--close');
        this.mobileNav.classList.remove('menu-mobile--open');
    }

    isOpen() {
        return this.mobileNav.classList.contains();
    }
}

export default MobileNav
