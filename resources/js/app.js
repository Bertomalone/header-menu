import MobileNav from './module/MobileNav'
import DropdownMenu from './module/DropdownMenu'

const mobileNav = new MobileNav()
const dropDownMenu = new DropdownMenu()

const menuMobileIcon = document.querySelector('.hamburger-menu');
menuMobileIcon.addEventListener('click', e => {
    mobileNav.open()
})

const closeBtn = document.querySelector('.menu-mobile__close-btn');
closeBtn.addEventListener('click', e => {
    mobileNav.close()
})

window.addEventListener('click', e => {
    if(!document.querySelector('.menu-mobile').contains(e.target) && !menuMobileIcon.contains(e.target)) {
        if(mobileNav.isOpen()) {
            mobileNav.close()

            e.preventDefault()
        }
    }
})

const dropDownList = document.querySelector('.menu-mobile__dropdown');
const dropDownLink = document.querySelector('menu-mobile__dropdown__item');
dropDownList.addEventListener('click', e => {
    e.preventDefault()
    dropDownMenu.down()
})
