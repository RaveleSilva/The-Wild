// Animação show/hide perguntas frequentes

export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');

  function activeAccordion() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
  }

  if (accordionList.length) {
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
