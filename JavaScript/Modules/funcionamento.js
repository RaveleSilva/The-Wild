export default function initFuncionamento(){}

const funcionamento = document.querySelector('[data-semana]')
const diaFuncionamento = funcionamento.dataset.semana.split(',').map(Number)
const horaFuncionamento = funcionamento.dataset.hora.split(',').map(Number)
const agora = new Date()

const diaAberto = diaFuncionamento.includes(agora.getDay())
const horaAberto = agora.getHours() >= horaFuncionamento[0] && agora.getHours() <= horaFuncionamento[1]

if (diaAberto && horaAberto){
  funcionamento.classList.add('aberto')
}else{
  funcionamento.classList.remove('aberto')
}


