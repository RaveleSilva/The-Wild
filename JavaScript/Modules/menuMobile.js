export default function initMenuMobile() {
  const button = document.querySelector('[data-menu="button"');
  const menuList = document.querySelector('[data-menu="list"]');

  function openMenu() {
    button.classList.toggle('active');
    menuList.classList.toggle('active');
  }

  if (button) {
    button.addEventListener('click', openMenu);
  }
}
