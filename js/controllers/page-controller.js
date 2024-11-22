import * as modalController from './modal-controller.js'

export function init(){
  const contatoLink = document.querySelector('#link-contato')

  contatoLink.addEventListener('click', handleContatoLinkClick)
}

export function handleContatoLinkClick(event){
  event.preventDefault()
  modalController.showModal()
}