export default class MenuMobile {
  constructor(menuButton, menuList) {
    this.button = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.button.classList.toggle('active');
    this.menuList.classList.toggle('active');
  }

  addMenuMobileEvents() {
    this.button.addEventListener('click', this.openMenu);
  }

  init() {
    if (this.button && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
