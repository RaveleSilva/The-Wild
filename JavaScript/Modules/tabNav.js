export default function tabNav() {
  const imagesList = document.querySelectorAll('[data-tab="menu"] li');
  const animalsContent = document.querySelectorAll('[data-tab="content"] .animal-desc');

  function activeTab(index) {
    animalsContent.forEach((item) => {
      item.classList.remove('ativo');
    });
    const direcao = animalsContent[index].dataset.anime;
    animalsContent[index].classList.add('ativo', direcao);
  }

  if (imagesList.length && animalsContent.length) {
    imagesList.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
