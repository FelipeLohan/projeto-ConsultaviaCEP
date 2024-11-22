function State(){
  this.formResult = null

}

const state = new State()

export function init(){
  state.formResult = document.querySelector('#form-result-section')
}

export function addCard(address){
  const card = createCard(address)
  state.formResult.appendChild(card)
}

function createCard(address){
  const div = document.createElement('div')
  div.classList.add('container-resultado')

  const h2 = document.createElement('h2')
  const h3 = document.createElement('h3')
  const p = document.createElement('p')

  h2.innerHTML = `${address.cidade}`
  h3.innerHTML = `${address.logradouro} , ${address.numero}`
  p.innerHTML = address.cep

  div.appendChild(h2)
  div.appendChild(h3)
  div.appendChild(p)

  return div
}