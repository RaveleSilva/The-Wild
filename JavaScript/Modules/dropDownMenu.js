export default class DropDownMenu {
  constructor(dropdownList) {
    this.dropDownList = document.querySelectorAll(dropdownList);

    this.dropDownActive = this.dropDownActive.bind(this);
  }

  dropDownActive(event) {
    event.preventDefault();
    this.classList.toggle('ativo');
  }

  addDropDownEvent() {
    this.dropDownList.forEach((dropdown) => {
      ['click', 'touchstart'].forEach((userEvent) => {
        dropdown.addEventListener(userEvent, this.dropDownActive);
      });
    });
  }

  init() {
    if (this.dropDownList.length) {
      this.addDropDownEvent();
    }
    return this;
  }
}
