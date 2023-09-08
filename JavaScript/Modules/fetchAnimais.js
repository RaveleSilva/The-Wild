import AnimaNumeros from './animaNumeros.js';

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.populacao}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      animaisJson.forEach((animal) => {
        const animalDiv = createAnimal(animal);
        const numerosGrid = document.querySelector('.numeros-grid');

        numerosGrid.appendChild(animalDiv);
      });
      const animanumeros = new AnimaNumeros('[data-numero]', 'ativo', '.numeros');
      animanumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchAnimais('./animaisAPI.json');
}
