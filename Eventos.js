// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"')

function adicionarClasse(event){
    event.preventDefault()

    linksInternos.forEach((link) =>{
        link.classList.remove('ativo')
    })

    event.target.classList.add('ativo')
}

linksInternos.forEach((item) =>{
    item.addEventListener('click', adicionarClasse)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelector('*')

function mostrarElemento(event){
    event.preventDefault()
    console.log(event.target)
}

allElements.addEventListener('click', mostrarElemento)

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function excluirElemento(event){
    event.target.remove()
}

allElements.addEventListener('click', excluirElemento)

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function aumentaTexto(event){
    if(event.key === 't'){
        document.documentElement.classList.toggle('textomaior')
    }
}

window.addEventListener('keydown', aumentaTexto)

const paragraphs = document.querySelectorAll('p')

function aumentarTexto(event){
    event.target.style.fontSize = '1.5rem'
    event.target.style.backgroundColor = 'white'
    event.target.style.padding = '10px'
    
}

function reduzirTexto(event){
    event.target.style.fontSize = '1rem'
}

paragraphs.forEach((item) =>{
    item.addEventListener('mouseenter', aumentarTexto)
    item.addEventListener('mouseout', reduzirTexto)
})
