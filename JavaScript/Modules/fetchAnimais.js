import initAnimaNumeros from "./animaNumeros.js"

export default function initFetchAnimais(){
  fetchAnimais("./animaisAPI.json")
}

async function fetchAnimais(url){
  const animaisResponse = await fetch(url)
  const animaisJson = await animaisResponse.json()

  animaisJson.forEach(animal =>{
    const animalDiv = createAnimal(animal)
    const numerosGrid = document.querySelector('.numeros-grid')

    numerosGrid.appendChild(animalDiv)
  })
  initAnimaNumeros()
}

function createAnimal(animal){
  const div = document.createElement('div')
  div.classList.add('numero-animal')
  div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.populacao}</span>`
  return div
}