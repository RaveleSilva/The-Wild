export default function initDropDownMenu() {
  const dropDownList = document.querySelectorAll('[data-dropdown]');

  function dropDownActive(event) {
    event.preventDefault();
    this.classList.toggle('ativo');
  }

  dropDownList.forEach((dropdown) => {
    ['click', 'touchstart'].forEach((userEvent) => {
      dropdown.addEventListener(userEvent, dropDownActive);
    });
  });
}
