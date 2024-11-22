function State() {
  this.container = null;
  this.btnFechar = null;
}

const state = new State();

export function init() {
  state.container = document.querySelector("#modal-contato");
  state.btnFechar = document.querySelector("#modal-btn-fechar");

  state.btnFechar.addEventListener('click', handleBtnFecharClick)
}

export function showModal() {
  state.container.classList.add('active')
}

export function closeModal() {
  state.container.classList.remove('active')
}

function handleBtnFecharClick(event){
  event.preventDefault()
  closeModal()
}
