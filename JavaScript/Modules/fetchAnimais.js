import AnimaNumeros from './animaNumeros.js';

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.populacao}</span>`;
    return div;
  }

  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      animaisJson.forEach((animal) => {
        const animalDiv = createAnimal(animal);
        const numerosGrid = document.querySelector(target);

        numerosGrid.appendChild(animalDiv);
      });
      const animaNumeros = new AnimaNumeros('[data-numero]', 'ativo', '.numeros');
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
