class DropdownMenu {
    constructor() {
        this.dropDownMenu = document.querySelector('.menu-mobile__dropdown');
        this.dropDownList = document.querySelector('.menu-mobile__dropdown__list');
    }

    down() {
        this.dropDownMenu.classList.toggle('menu-mobile__dropdown--height-down');
        this.dropDownList.classList.toggle('menu-mobile__dropdown__list--down-list');
    }
}

export default DropdownMenu
